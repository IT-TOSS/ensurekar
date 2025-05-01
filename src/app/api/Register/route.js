import bcrypt from 'bcrypt';
import CreateConnection from './../../../lib/Rdb.js';

// it's in  sql ( mysql)

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
    // const data = {
    //     message: 'Hello i am Register Page i am Develop by Krishna',
    //     id: 1,
    // }
    // return Response.json({ data })
}

// export async function GET() {
//     try {
//       const db = await CreateConnection();
//       const SQL = 'SELECT * FROM users';
//       const [rows] = await db.query(SQL);
//       console.log('Data from database:', rows);
  
//       return Response.json({ data: result.rows });
//     } catch (error) {
//       console.error('Error connecting to the database:', error);
//       return Response.json({ error: 'Internal Server Error' }, { status: 500 });
//     }
//   }


  // it's in  sql ( mysql)
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

        // Normalize fields
        const emailWithTrim = email?.trim().toLowerCase();
        const normalizedPhoneNumber = phoneNumber?.trim() || null;
        const normalizedWhatsappNumber = whatsappNumber?.trim() || null;
        const normalizedPhotoURL = photoURL?.trim() || null;

        //  Hash the password securely
        const hashedPassword = await bcrypt.hash(password.trim(), 10);

        console.log('Normalized user data:', {
            userId,
            firstName,
            lastName,
            email: emailWithTrim,
            phoneNumber: normalizedPhoneNumber,
            whatsappNumber: normalizedWhatsappNumber,
            photoURL: normalizedPhotoURL,
            password
            // password: '[HIDDEN]' // Don't log actual password
        });

        const db = await CreateConnection();

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

        const selectSQL = 'SELECT * FROM users WHERE email = ?';
        const [rows] = await db.query(selectSQL, [emailWithTrim]);

        return Response.json({
            message: 'User saved successfully',
            data: rows
        }, { status: 200 });

    } catch (error) {
        console.error(' Error saving user data:', error);
        return Response.json(
            { error: error.message || 'Failed to save user data' },
            { status: 500 }
        );
    }
}


// export async function POST(req) {
//     try {
//       const requestData = await req.json();
//       console.log('Received Data:', requestData);
  
//       const {
//         userId,
//         firstName,
//         lastName,
//         email,
//         phoneNumber,
//         whatsappNumber,
//         photoURL,
//         password
//       } = requestData;
  
//       // Normalize fields
//       const emailWithTrim = email?.trim().toLowerCase();
//       const normalizedPhoneNumber = phoneNumber?.trim() || null;
//       const normalizedWhatsappNumber = whatsappNumber?.trim() || null;
//       const normalizedPhotoURL = photoURL?.trim() || null;
  
//       //  Hash the password securely
//       const hashedPassword = await bcrypt.hash(password.trim(), 10);
  
//       console.log('Normalized user data:', {
//         userId,
//         firstName,
//         lastName,
//         email: emailWithTrim,
//         phoneNumber: normalizedPhoneNumber,
//         whatsappNumber: normalizedWhatsappNumber,
//         photoURL: normalizedPhotoURL,
//         password: '[HIDDEN]'
//       });
  
//       const db = await CreateConnection();
  
//       const insertSQL = `
//         INSERT INTO users (
//           "userId",
//           "firstName",
//           "lastName",
//           "email",
//           "phoneNumber",
//           "whatsappNumber",
//           "photoURL",
//           "password"
//         ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
//       `;
  
//       const insertValues = [
//         userId,
//         firstName,
//         lastName,
//         emailWithTrim,
//         normalizedPhoneNumber,
//         normalizedWhatsappNumber,
//         normalizedPhotoURL,
//         hashedPassword
//       ];
  
//       await db.query(insertSQL, insertValues);
//       console.log(' User data inserted successfully.');
  
//       const selectSQL = 'SELECT * FROM users WHERE "email" = $1';
//       const result = await db.query(selectSQL, [emailWithTrim]);
  
//       return Response.json({
//         message: 'User saved successfully',
//         data: result.rows
//       }, { status: 200 });
  
//     } catch (error) {
//       console.error(' Error saving user data:', error);
//       return Response.json(
//         { error: error.message || 'Failed to save user data' },
//         { status: 500 }
//       );
//     }
//   }
  