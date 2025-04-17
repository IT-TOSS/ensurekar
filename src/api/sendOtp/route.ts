// import { NextRequest, NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(request: NextRequest) {
//   try {
//     // Parse the request body
//     const { email, otp } = await request.json();

//     console.log(email, otp +"insided of router")

//     // Validate input
//     if (!email || !otp) {
//       return NextResponse.json(
//         { error: 'Email and OTP are required' }, 
//         { status: 400 }
//       );
//     }

//     // Create a Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS
//       }
//     });

//     // Email options
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: 'Your OTP Code',
//       text: `Your OTP code is: ${otp}`,
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     // Respond with success
//     return NextResponse.json(
//       { message: 'OTP sent successfully' }, 
//       { status: 200 }
//     );

//   } catch (error) {
//     console.error('OTP Send Error:', error);

//     // Handle specific error scenarios
//     if (error instanceof Error) {
//       return NextResponse.json(
//         { error: error.message }, 
//         { status: 500 }
//       );
//     }

//     return NextResponse.json(
//       { error: 'Failed to send OTP' }, 
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";

// Sample Data
const users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com", age: 28, city: "New York", isActive: true },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com", age: 32, city: "Los Angeles", isActive: false },
  { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com", age: 25, city: "Chicago", isActive: true },
  { id: 4, name: "Bob Brown", email: "bob.brown@example.com", age: 40, city: "Houston", isActive: false },
  { id: 5, name: "Charlie Davis", email: "charlie.davis@example.com", age: 22, city: "Phoenix", isActive: true },
  { id: 6, name: "David White", email: "david.white@example.com", age: 35, city: "San Diego", isActive: false },
  { id: 7, name: "Emma Wilson", email: "emma.wilson@example.com", age: 29, city: "Dallas", isActive: true },
  { id: 8, name: "Frank Miller", email: "frank.miller@example.com", age: 45, city: "San Jose", isActive: false },
  { id: 9, name: "Grace Lee", email: "grace.lee@example.com", age: 27, city: "Austin", isActive: true },
  { id: 10, name: "Henry Scott", email: "henry.scott@example.com", age: 31, city: "San Francisco", isActive: false }
];

// GET API Handler

export async function GET() {
  return NextResponse.json({ message: "OTP Sent Successfully!" });
}