import bcrypt from 'bcrypt';
import CreateConnection from './../../../lib/Rdb.js';
import nodemailer from 'nodemailer';

// Forget Password link send to  Gmail

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
        const requestData = await req.json();
        console.log('Received Login Request:', requestData);

        const { email } = requestData;

        // Normalize input
        const emailWithTrim = email?.trim().toLowerCase();

        console.log(emailWithTrim);

        if (!emailWithTrim) {
            return Response.json({
                error: 'Email is required.'
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

        console.log(rows[0], "i am rows");
        const user = rows[0].userId;

        console.log(user, "i am UID");

        const mailOptions = {
            from: "toss125training@gmail.com",
            to: email,
            subject: 'Password reset request in ensurekar',
            text: `Hi ${ rows[0].firstName  || rows[0].gmail },
We received a request to reset your password for your ensurekar account.
To reset your password, please click the link below:

https://www.ensurekar.com/Forget-Password/${user} 

If you didn’t request this, you can safely ignore this email. Your password will remain unchanged.

Thanks,  
The ensurekar Team`,
        };
        await transporter.sendMail(mailOptions);
        return Response.json({
            message: 'Forget-Password gmail sucessfully find.',
            user
        }, { status: 200 });

    } catch (error) {
        console.error('forget Error:', error);
        return Response.json({
            error: error.message || 'forgrt failed due to server error.'
        }, { status: 500 });
    }
}




// export async function PUT(req) {
//     try {
//         const requestData = await req.json();
//         console.log('Received Login Request:', requestData);

//         const { uid , password,  confirmPassword} = requestData;

//         console.log(uid, password, confirmPassword, "i am uid and password");

//         if (!uid) {
//             return Response.json({
//                 error: 'uid is required. server error.'
//             }, { status: 400 });
//         }
//         if (password === confirmPassword) {
//             return Response.json({
//                 error: 'Password and  confirmPassword are not matched.'
//             }, { status: 400 });
//         }

//         const db = await CreateConnection();

//         // 1. Check if email exists
//         const selectSQL = 'UPDATE users SET password = ? WHERE uid = ?';
//         // UPDATE users SET password = ? WHERE uid = ?
//         const [rows] = await db.query(selectSQL, [password, uid]);
//         console.log(selectSQL,"i am SQL QUERY");

//         if (!rows || rows.length === 0) {
//             return Response.json({
//                 error: 'No user found with this email.'
//             }, { status: 404 });
//         }

//         console.log(rows[0], "i am rows");
//         const user = rows[0].userId;

        
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

export async function PUT(req) {
    try {
        const requestData = await req.json();
        console.log('Received Login Request:', requestData);

        const { uid, password, confirmPassword } = requestData;

        if (!uid) {
            return Response.json({ error: 'uid is required. server error.' }, { status: 400 });
        }

        if (password !== confirmPassword) {
            return Response.json({ error: 'Password and confirmPassword are not matched.' }, { status: 400 });
        }

        const db = await CreateConnection();

        // 🔐 Hash password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        console.log(uid, hashedPassword, "i am uid and password");

        const updateSQL = 'UPDATE users SET password = ? WHERE userId = ?';
        const [result] = await db.query(updateSQL, [hashedPassword, uid]);

        if (result.affectedRows === 0) {
            return Response.json({ error: 'No user found with this uid.' }, { status: 404 });
        }

        return Response.json({
            message: 'Password updated successfully.',
            uid
        }, { status: 200 });

    } catch (error) {
        console.error('forget Error:', error);
        return Response.json({
            error: error.message || 'forget failed due to server error.'
        }, { status: 500 });
    }
}