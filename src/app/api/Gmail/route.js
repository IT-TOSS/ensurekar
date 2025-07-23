import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

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
            from: "Infoensurekar@gmail.com",
            to: companyName,
            subject: subject,
            text: emailText,
        };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error("payment details Send Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
