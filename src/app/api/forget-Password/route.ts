import { NextRequest, NextResponse } from 'next/server';
import { CreateConnection } from '../../../../config/database';
import nodemailer from 'nodemailer';
import { adminAuth } from '../../../lib/firebaseAdmin';
import crypto from 'crypto';

// ENV VARS REQUIRED: FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "toss125training@gmail.com",
        pass: "limzksqufgsenfls"
    }
});

export async function POST(req: NextRequest) {
    try {
        const requestData = await req.json();
        console.log('Received Login Request:', requestData);

        const { email } = requestData;
        const emailWithTrim = email?.trim().toLowerCase();

        if (!emailWithTrim) {
            return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
        }

        const apiUrl = "https://edueye.co.in/ensurekar/existing-site/forgot_page.php";
        const apiResponse = await fetch(apiUrl, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });

        if (!apiResponse) {
            return NextResponse.json({ error: "Failed to fetch user data from API" }, { status: 500 });
        }

        const apiData = await apiResponse.json();
        const userData = apiData.find((user: any) => user.email?.toLowerCase().trim() === emailWithTrim);

        if (!userData) {
            return NextResponse.json({ error: 'No user found with this email from API.' }, { status: 404 });
        }

        console.log(userData, "✅ Found user from API");
        const user = userData.userId;

        const mailOptions = {
            from: "toss125training@gmail.com",
            to: email,
            subject: 'Password reset request in ensurekar',
            text: `Hi ${userData.firstName || userData.gmail},
We received a request to reset your password for your ensurekar account.
To reset your password, please click the link below:

https://www.ensurekar.com/Forget-Password/${user} 

If you didn’t request this, you can safely ignore this email. Your password will remain unchanged.

Thanks,  
The ensurekar Team`,
        };
        await transporter.sendMail(mailOptions);
        return NextResponse.json({
            message: 'Forget-Password gmail sucessfully find.',
            user
        }, { status: 200 });

    } catch (error: any) {
        console.error('forget Error:', error);
        return NextResponse.json({
            error: error.message || 'forget failed due to server error.'
        }, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    try {
        const requestData = await req.json();
        console.log('Received Password Update Request:', requestData);

        // Frontend sends: { userId: "...", password: "..." }
        const { userId, password } = requestData;
        const uid = userId;

        if (!uid) {
            return NextResponse.json({ error: 'userId is required.' }, { status: 400 });
        }

        // 1. Update MySQL Database
        console.log("Connecting to Database...");
        const db = await CreateConnection();
        console.log("Database Connected.");

        const md5Password = crypto.createHash('md5').update(password).digest('hex');
        const updateSQL = 'UPDATE users SET password = ? WHERE userId = ?';

        console.log("Executing Update Query...");
        const [result]: any = await db.query(updateSQL, [md5Password, uid]);

        if (result.affectedRows === 0) {
            console.log("MySQL: No rows affected (User might not exist or password same)");
        } else {
            console.log("MySQL: Password updated successfully.");
        }

        // 2. Update Firebase Authentication
        if (adminAuth) {
            try {
                console.log("Updating Firebase User...");
                await adminAuth.updateUser(uid, {
                    password: password
                });
                console.log('Firebase: Password updated successfully for uid:', uid);
            } catch (firebaseError: any) {
                console.error('Firebase update failed:', firebaseError);
                return NextResponse.json({
                    error: 'Failed to update password in Authentication system. ' + firebaseError.message
                }, { status: 500 });
            }
        } else {
            console.warn("Firebase Admin not initialized. Skipping Firebase update.");
        }

        return NextResponse.json({
            message: 'Password updated successfully.',
            uid
        }, { status: 200 });

    } catch (error: any) {
        console.error('Password Update Error:', error);
        return NextResponse.json({
            error: error.message || 'Password update failed due to server error.'
        }, { status: 500 });
    }
}
