// setting / update-user-info/route.js


import bcrypt from 'bcrypt';
import CreateConnection from '../../../../lib/Rdb.js'; 


export async function GET() {

    try {
        const db = await CreateConnection();
        const SQL = 'SELECT * FROM user_info';
        const [rows] = await db.query(SQL);
        console.log('Data from database:', rows);
        return Response.json({ data: rows });
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}


export async function POST(req) {
    const body = await req.json();
    
    console.log("Request body:", body);
    
    const { personal, company, identity, bank, address } = body;
    
    // Validate required email
    if (!address?.email) {
        console.log("Error: Email is required");
        return new Response(JSON.stringify({ error: "Email is required" }), { status: 400 });
    }
    
    try {
        const db = await CreateConnection();
        
        // First check if email already exists
        const [existingUsers] = await db.query(
            "SELECT * FROM user_info WHERE email = ?",
            [address.email]
        );
        
        let result;
        
        if (existingUsers.length > 0) {
            // Email exists, update the record
            console.log(`Updating existing user with email: ${address.email}`);
            
            const [updateResult] = await db.query(
                `UPDATE user_info SET
                    userName = ?,
                    firstName = ?,
                    lastName = ?,
                    fatherName = ?,
                    DOB = ?,
                    sex = ?,
                    maritalStatus = ?,
                    company = ?,
                    organisationType = ?,
                    pan = ?,
                    aadhar = ?,
                    din = ?,
                    addressProof = ?,
                    addressProofName = ?,
                    nationality = ?,
                    bank = ?,
                    accountNumber = ?,
                    ifsc = ?,
                    address = ?,
                    state = ?,
                    city = ?,
                    pin = ?,
                    secondaryEmail = ?,
                    contactNo = ?,
                    secondaryContact = ?
                WHERE email = ?`,
                [
                    personal.userName,
                    personal.firstName,
                    personal.lastName,
                    personal.fatherName,
                    personal.DOB,
                    personal.sex,
                    personal.maritalStatus,
                    
                    company.company,
                    company.organisationType,
                    
                    identity.pan,
                    identity.aadhar,
                    identity.din,
                    identity.addressProof,
                    identity.addressProofName,
                    identity.nationality,
                    
                    bank.bank,
                    bank.accountNumber,
                    bank.ifsc,
                    
                    address.address,
                    address.state,
                    address.city,
                    address.pin,
                    address.secondaryEmail,
                    address.contactNo,
                    address.secondaryContact,
                    
                    address.email // WHERE clause parameter
                ]
            );
            
            result = updateResult;
            return new Response(JSON.stringify({ 
                success: true, 
                message: "User data updated successfully",
                updated: true
            }), { status: 200 });
            
        } else {
            // Email doesn't exist, insert new record
            console.log(`Inserting new user with email: ${address.email}`);
            
            const [insertResult] = await db.query(
                `INSERT INTO user_info (
                    userName, firstName, lastName, fatherName, DOB, sex, maritalStatus,
                    company, organisationType, pan, aadhar, din, addressProof, addressProofName,
                    nationality, bank, accountNumber, ifsc, address, state, city, pin,
                    email, secondaryEmail, contactNo, secondaryContact
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    personal.userName,
                    personal.firstName,
                    personal.lastName,
                    personal.fatherName,
                    personal.DOB,
                    personal.sex,
                    personal.maritalStatus,
                    
                    company.company,
                    company.organisationType,
                    
                    identity.pan,
                    identity.aadhar,
                    identity.din,
                    identity.addressProof,
                    identity.addressProofName,
                    identity.nationality,
                    
                    bank.bank,
                    bank.accountNumber,
                    bank.ifsc,
                    
                    address.address,
                    address.state,
                    address.city,
                    address.pin,
                    address.email,
                    address.secondaryEmail,
                    address.contactNo,
                    address.secondaryContact
                ]
            );
            
            result = insertResult;
            return new Response(JSON.stringify({
                success: true,
                message: "User data inserted successfully",
                inserted: true,
                id: insertResult.insertId
            }), { status: 201 });
        }
        
    } catch (err) {
        console.error("Database error:", err);
        return new Response(JSON.stringify({ 
            success: false,
            error: err.message 
        }), { status: 500 });
    } 
}