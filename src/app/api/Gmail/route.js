import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { CreateConnection } from '../../../../config/database';

export async function GET() {
    const data = {
        message: 'Hello from the payment details API',
    }
    return Response.json({ data })
}
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "toss125training@gmail.com",
        pass: "limzksqufgsenfls"

        

    }
});

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("Received data:", body);
    const { firstName, lastName ,email, subject, message , origin, phone  , textDetails  } = body;

    if (!email) {
            return NextResponse.json({ error: 'Email are required' }, { status: 400 });
        }

  const emailText = textDetails || `Hello Team Ensurekar,
Mr./Mrs. ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Origin: ${origin}
Subject: ${subject}
Message: ${message}
Please help them
Regards,

${firstName} ${lastName}`;

        const companyName = "Infoensurekar@gmail.com";

        const mailOptions = {
          //from: "krishna.toss.it@gmail.com",
           from: "Infoensurekar@gmail.com",
            to: companyName,
            subject: subject,
            text: emailText,
        };

    // Send email
    let emailSent = false;
    let emailError = null;
    try {
      await transporter.sendMail(mailOptions);
      emailSent = true;
      console.log('Email sent successfully to:', companyName);
    } catch (emailErr) {
      // Capture full error details
      emailError = emailErr.message || emailErr.toString();
      const errorCode = emailErr.code || 'UNKNOWN';
      const errorResponse = emailErr.response || emailErr.responseCode || '';
      
      console.error('=== EMAIL SENDING ERROR ===');
      console.error('Error Message:', emailErr.message);
      console.error('Error Code:', errorCode);
      console.error('Error Response:', errorResponse);
      console.error('Full Error Object:', emailErr);
      console.error('==========================');
      
      // Create detailed error message for user
      emailError = `Gmail Error (${errorCode}): ${emailErr.message || 'Unknown error'}`;
      // Continue to save to database even if email fails
    }

    // Store in database ONLY if email was sent successfully
    let dbSaved = false;
    let dbError = null;
    
    if (emailSent) {
      // Only save to database if email was successfully sent
      try {
        const db = await CreateConnection();
        
        // Create table if it doesn't exist
        try {
          const createTableQuery = `
            CREATE TABLE IF NOT EXISTS \`contact_inquiries\` (
              \`id\` int(11) NOT NULL AUTO_INCREMENT,
              \`first_name\` varchar(100) DEFAULT NULL,
              \`last_name\` varchar(100) DEFAULT NULL,
              \`email\` varchar(255) NOT NULL,
              \`phone\` varchar(20) DEFAULT NULL,
              \`subject\` varchar(255) DEFAULT NULL,
              \`message\` text DEFAULT NULL,
              \`origin\` varchar(100) DEFAULT NULL COMMENT 'Form origin: Talk_To_Expert, contact, etc.',
              \`email_sent\` tinyint(1) DEFAULT 0 COMMENT 'Whether email was sent successfully',
              \`email_sent_to\` varchar(255) DEFAULT NULL COMMENT 'Email address where notification was sent',
              \`created_at\` timestamp NOT NULL DEFAULT current_timestamp(),
              \`updated_at\` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
              PRIMARY KEY (\`id\`),
              KEY \`idx_email\` (\`email\`),
              KEY \`idx_origin\` (\`origin\`),
              KEY \`idx_created_at\` (\`created_at\`)
            ) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci
          `;
          await db.query(createTableQuery);
          console.log('Table contact_inquiries created or already exists');
        } catch (createError) {
          console.error('Error creating table:', createError);
          // Continue - try to insert anyway
        }

        // Now insert the data (only for successful emails)
        try {
          const insertQuery = `
            INSERT INTO contact_inquiries (
              first_name,
              last_name,
              email,
              phone,
              subject,
              message,
              origin,
              email_sent,
              email_sent_to
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
          `;

          const values = [
            firstName || '',
            lastName || '',
            email,
            phone || '',
            subject || '',
            message || '',
            origin || 'unknown',
            1, // email_sent = 1 (always true here since we only save if emailSent is true)
            companyName
          ];

          await db.query(insertQuery, values);
          dbSaved = true;
          console.log('Contact inquiry saved to database successfully (email was sent)');
        } catch (insertError) {
          console.error('Error inserting data:', insertError);
          dbError = insertError.message || 'Database insert error';
        }
      } catch (dbErr) {
        console.error('Database save error:', dbErr);
        dbError = dbErr.message || 'Database error';
        // Continue - don't fail the whole request if DB save fails
      }
    } else {
      console.log('Email failed to send - skipping database save as per requirement');
    }

    // Return success if email was sent (even if DB save failed)
    if (emailSent) {
      return NextResponse.json({ 
        message: 'Email sent successfully',
        dbSaved: dbSaved,
        dbWarning: dbError ? 'Failed to save to database: ' + dbError : null
      }, { status: 200 });
    } else {
      // Email failed - return error with detailed message
      const errorDetails = emailError || 'Unknown error occurred while sending email';
      console.error('Email sending failed. Error:', errorDetails);
      return NextResponse.json({ 
        error: 'Failed to send email',
        message: 'Failed to send email',
        details: errorDetails,
        suggestion: 'Please check Gmail credentials and App Password settings'
      }, { status: 500 });
    }
  } catch (error) {
    console.error("payment details Send Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
