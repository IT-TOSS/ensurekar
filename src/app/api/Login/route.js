import bcrypt from 'bcrypt';
import CreateConnection from './../../../lib/db.js';

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
        console.error('❌ Login Error:', error);
        return Response.json({
            error: error.message || 'Login failed due to server error.'
        }, { status: 500 });
    }
}
