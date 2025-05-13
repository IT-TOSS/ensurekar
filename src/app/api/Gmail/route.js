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
Message: They are very confused on the Income Tax Return Filing page.
Please help them choose the right package.
Regards,

${firstName} ${lastName}`;

        const companyName = "Krishna.vish9329@gmail.com";

        const mailOptions = {
            from: "info@ensurekar.com",
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
