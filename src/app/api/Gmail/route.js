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

export async function POST(req) {
    try {
        const { email, textDetails  } = await req.json();

        console.log('Received OTP Request:', { email, otp });

        if (!email || !otp) {
            return NextResponse.json({ error: 'Email and OTP are required' }, { status: 400 });
        }

        const mailOptions = {
            from: "info@ensurekar.com",
            to: email,
            subject: 'payment details',
            text: textDetails,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'payment details sent successfully' }, { status: 200 });

    } catch (error) {
        console.error('payment details Send Error:', error);
        return NextResponse.json({ error: error.message || 'Failed to send payment details' }, { status: 500 });
    }
}