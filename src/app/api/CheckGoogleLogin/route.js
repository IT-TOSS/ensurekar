import bcrypt from 'bcrypt';
import CreateConnection from './../../../lib/Rdb.js';

export async function GET() {

    try {
        const db = await CreateConnection();
        const SQL = 'SELECT * FROM users';
        const [rows] = await db.query(SQL);
        console.log('Data from database:', rows);
        return Response.json({ data: rows });
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

export async function POST(req) {
    try {
        const requestData = await req.json();
        console.log('Received Data:', requestData);

        const {
            userId,
            firstName,
            lastName,
            email,
            phoneNumber,
            whatsappNumber,
            photoURL,
            password
        } = requestData;

        // Validate required fields
        if (!userId || !email) {
            return Response.json(
                { error: 'userId and email are required fields' },
                { status: 400 }
            );
        }

        // Normalize fields
        const emailWithTrim = email?.trim().toLowerCase();
        const normalizedPhoneNumber = phoneNumber?.trim() || null;
        const normalizedWhatsappNumber = whatsappNumber?.trim() || null;
        const normalizedPhotoURL = photoURL?.trim() || null;

        const db = await CreateConnection();

        // Check if user already exists by userId or email
        const checkUserSQL = 'SELECT * FROM users WHERE userId = ? OR email = ?';
        const [existingUsers] = await db.query(checkUserSQL, [userId, emailWithTrim]);

        // If user exists, return with existed flag
        if (existingUsers && existingUsers.length > 0) {
            console.log('User already exists:', existingUsers[0].email);
            return Response.json({
                message: 'User already registered',
                exists: true,
                data: {
                    userId: existingUsers[0].userId,
                    email: existingUsers[0].email,
                    firstName: existingUsers[0].firstName,
                    lastName: existingUsers[0].lastName
                }
            }, { status: 200 });
        }

        // If user doesn't exist, create new user
        // Hash the password securely
        const hashedPassword = await bcrypt.hash(password.trim(), 10);

        console.log('Creating new user with data:', {
            userId,
            firstName,
            lastName,
            email: emailWithTrim,
            // Do not log sensitive information
        });

        const insertSQL = `
            INSERT INTO users (
                userId,
                firstName,
                lastName,
                email,
                phoneNumber,
                whatsappNumber,
                photoURL,
                password
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const insertValues = [
            userId,
            firstName,
            lastName,
            emailWithTrim,
            normalizedPhoneNumber,
            normalizedWhatsappNumber,
            normalizedPhotoURL,
            hashedPassword
        ];

        await db.query(insertSQL, insertValues);
        console.log('✅ User data inserted successfully.');

        // Get the newly created user
        const [newUser] = await db.query('SELECT * FROM users WHERE userId = ?', [userId]);


        console.log('New user data: created', newUser);
        
        if (!newUser || newUser.length === 0) {
            throw new Error('User was created but could not be retrieved');
        }

        return Response.json({
            message: 'User registered successfully',
            exists: true,
            created: true,
            data: {
                userId: newUser[0].userId,
                email: newUser[0].email,
                firstName: newUser[0].firstName,
                lastName: newUser[0].lastName
            }
        }, { status: 201 });

    } catch (error) {
        console.error('Error in user registration:', error);
        
        // Check for duplicate entry errors from MySQL
        if (error.code === 'ER_DUP_ENTRY') {
            return Response.json(
                { 
                    error: 'User with this email or ID already exists',
                    exists: true 
                },
                { status: 409 } // Conflict status code
            );
        }
        
        return Response.json(
            { error: error.message || 'Failed to process registration' },
            { status: 500 }
        );
    } 
}