import bcrypt from 'bcrypt';
import CreateConnection from './../../../lib/Rdb.js';
import nodemailer from 'nodemailer';

export async function GET() {

    try{
        const db = await CreateConnection();
        const SQL = 'SELECT * FROM users';
        const [rows] = await db.query(SQL);
        console.log('Data from database:', rows);
        return Response.json({ data: rows });
    }catch(error){
        console.error('Error connecting to the database:', error);
    }
}


export async function POST(req) {
    try {
        const requestData = await req.json();
        console.log('Received Login Request:', requestData);

        const { email, password } = requestData;

        // Normalize input
        const emailWithTrim = email?.trim().toLowerCase();
        const passwordInput = password?.trim();

        console.log(emailWithTrim, passwordInput);

        if (!emailWithTrim || !passwordInput) {
            return Response.json({
                error: 'Email and password are required.'
            }, { status: 400 });
        }

        const db = await CreateConnection();

        // 1. Check if email exists
        const selectSQL = 'SELECT * FROM users WHERE email = ?';
        const [rows] = await db.query(selectSQL, [emailWithTrim]);
        console.log(selectSQL,"i am SQL QUERY");

        if (!rows || rows.length === 0) {
            return Response.json({
                error: 'No user found with this email.'
            }, { status: 404 });
        }

        const user = rows[0];

        // 2. Compare password with hashed password
        const passwordMatch = await bcrypt.compare(passwordInput, user.password);

        if (!passwordMatch) {
            return Response.json({
                error: 'Invalid password.'
            }, { status: 401 });
        }

        // 3. Clean up sensitive data before sending response
        delete user.password;

        return Response.json({
            message: 'Login successful.',
            user
        }, { status: 200 });

    } catch (error) {
        console.error('Login Error:', error);
        return Response.json({
            error: error.message || 'Login failed due to server error.'
        }, { status: 500 });
    }
}


// // Forget Password link send to  Gmail

// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//          user: "toss125training@gmail.com",
//         pass: "limzksqufgsenfls"
//     }
// });




// export async function PUT(req) {
//     try {
//         const requestData = await req.json();
//         console.log('Received Login Request:', requestData);

//         const { email } = requestData;

//         // Normalize input
//         const emailWithTrim = email?.trim().toLowerCase();

//         console.log(emailWithTrim);

//         if (!emailWithTrim) {
//             return Response.json({
//                 error: 'Email is required.'
//             }, { status: 400 });
//         }

//         const db = await CreateConnection();

//         // 1. Check if email exists
//         const selectSQL = 'SELECT * FROM users WHERE email = ?';
//         const [rows] = await db.query(selectSQL, [emailWithTrim]);
//         console.log(selectSQL,"i am SQL QUERY");

//         if (!rows || rows.length === 0) {
//             return Response.json({
//                 error: 'No user found with this email.'
//             }, { status: 404 });
//         }

//         console.log(rows[0], "i am rows");
//         const user = rows[0].userId;

//         console.log(user, "i am UID");

//         const mailOptions = {
//             from: "toss125training@gmail.com",
//             to: email,
//             subject: 'Password reset request by ensurekar',
//             text: `Hi ${ rows[0].firstName  || rows[0].gmail },
// We received a request to reset your password for your ensurekar account.
// To reset your password, please click the link below:

// https://www.ensurekar.com/Forget-Password/${user} 

// If you didn’t request this, you can safely ignore this email. Your password will remain unchanged.

// Thanks,  
// The ensurekar Team`,
//         };
//         await transporter.sendMail(mailOptions);
//         return Response.json({
//             message: 'Forget-Password gmail sucessfully find.',
//             user
//         }, { status: 200 });

//     } catch (error) {
//         console.error('forget Error:', error);
//         return Response.json({
//             error: error.message || 'forgrt failed due to server error.'
//         }, { status: 500 });
//     }
// }



