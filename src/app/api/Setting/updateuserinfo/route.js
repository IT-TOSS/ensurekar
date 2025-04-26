// setting / update-user-info/route.js

import { IncomingForm } from 'formidable';
import CreateConnection from '../../../../lib/Rdb.js'; 
import { promises as fs } from 'fs';

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
    // const body = await req.json();

    const rawBody = await req.text(); // read as text first
    // console.log('Incoming raw body:', rawBody);

    const body = JSON.parse(rawBody); // now parse manually

    // your normal flow
    console.log('Parsed Body:', body);
    
    // console.log("Request body:", body);
    
    const { personal, company, identity, bank, address , document} = body;

    console.log("Personal data:", personal);
    console.log("Company data:", company);
    console.log("Identity data:", identity);
    console.log("Bank data:", bank);    
    console.log("Address data:", address);
    console.log("Document data:", document);


    let formattedDOB = '';
    if (personal?.DOB) {
        const date = new Date(personal.DOB);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const year = date.getFullYear();
        // formattedDOB = `${day}-${month}-${year}`;
        formattedDOB = `${year}-${month}-${day}`;
    }
    
    // Validate required email
    if (!address?.email) {
        console.log("Error: Email is required");
        return new Response(JSON.stringify({ error: "Email is required" }), { status: 400 });
    }
    
    try {
        const db = await CreateConnection();
        
        const [existingUsers] = await db.query(
            "SELECT * FROM user_info WHERE email = ?",
            [address.email]
        );
        
        let result;
        
        if (existingUsers.length > 0) {

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
                    // personal.DOB,
                    formattedDOB,
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
                    
                    address.email
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
                    // formattedDOB,
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

//----------------------------------------------------




// export const config = {
//   api: {
//     bodyParser: false, // Important! Because we manually parse the form
//   },
// };

// export async function POST(req) {
// //   const form = new IncomingForm({
// //     keepExtensions: true,
// //     maxFileSize: 20 * 1024 * 1024, // 20 MB
// //   });

// //   const data = await new Promise((resolve, reject) => {
// //     form.parse(req, (err, fields, files) => {
// //       if (err) reject(err);
// //       resolve({ fields, files });
// //     });
// //   });

// console.log("Incoming request:", req);
// const rawBody = await req.text(); // read as text first
//     // console.log('Incoming raw body:', rawBody);

//     const body = JSON.parse(rawBody); // now parse manually

//     // your normal flow
//     console.log('Parsed Body:', body);
    
//     // console.log("Request body:", body);
    
//     const { personal: userPersonal, company: userCompany, identity: userIdentity, bank: userBank, address: userAddress, document: userDocument } = body;

//     console.log("Personal data:", personal);
//     console.log("Company data:", company);
//     console.log("Identity data:", identity);
//     console.log("Bank data:", bank);    
//     console.log("Address data:", address);
//     console.log("Document data:", document);




//   const { fields, files } = await readMultipartForm(req);


// //   const { fields, files } = data;
// console.log("---------------------")
//   console.log('Fields:', fields);
//   console.log('Files:', files);

//   const { personal, company, identity, bank, address } = JSON.parse(fields.jsonData); // We will send jsonData field from frontend.

//   const documents = files || {};

//   let formattedDOB = '';
//   if (personal?.DOB) {
//     const date = new Date(personal.DOB);
//     const day = String(date.getDate()).padStart(2, '0');
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const year = date.getFullYear();
//     formattedDOB = `${year}-${month}-${day}`;
//   }

//   if (!address?.email) {
//     return new Response(JSON.stringify({ error: "Email is required" }), { status: 400 });
//   }

//   try {
//     const db = await CreateConnection();

//     const [existingUsers] = await db.query(
//       "SELECT * FROM user_info WHERE email = ?",
//       [address.email]
//     );

//     const documentBuffers = {};

//     // Read each uploaded file into buffer
//     for (const key in documents) {
//       const file = documents[key][0];
//       const fileBuffer = await fs.readFile(file.filepath);
//       documentBuffers[key] = fileBuffer;
//     }

//     let result;

//     if (existingUsers.length > 0) {
//       console.log(`Updating existing user with email: ${address.email}`);

//       const [updateResult] = await db.query(
//         `UPDATE user_info SET
//           userName = ?, firstName = ?, lastName = ?, fatherName = ?, DOB = ?, sex = ?, maritalStatus = ?,
//           company = ?, organisationType = ?, pan = ?, aadhar = ?, din = ?, addressProof = ?, addressProofName = ?, nationality = ?,
//           bank = ?, accountNumber = ?, ifsc = ?, address = ?, state = ?, city = ?, pin = ?, secondaryEmail = ?, contactNo = ?, secondaryContact = ?,
//           addharcar = ?, investmentDetails = ?, form16 = ?, bankDetails = ?, otherDocument = ?
//         WHERE email = ?`,
//         [
//           personal.userName,
//           personal.firstName,
//           personal.lastName,
//           personal.fatherName,
//           formattedDOB,
//           personal.sex,
//           personal.maritalStatus,
//           company.company,
//           company.organisationType,
//           identity.pan,
//           identity.aadhar,
//           identity.din,
//           identity.addressProof,
//           identity.addressProofName,
//           identity.nationality,
//           bank.bank,
//           bank.accountNumber,
//           bank.ifsc,
//           address.address,
//           address.state,
//           address.city,
//           address.pin,
//           address.secondaryEmail,
//           address.contactNo,
//           address.secondaryContact,
//           documentBuffers.addharcar || null,
//           documentBuffers.InvestmentDetails || null,
//           documentBuffers.form16 || null,
//           documentBuffers.BankDetails || null,
//           documentBuffers.OtherDocument || null,
//           address.email,
//         ]
//       );

//       result = updateResult;
//       return new Response(JSON.stringify({
//         success: true,
//         message: "User data updated successfully",
//         updated: true
//       }), { status: 200 });
//     } else {
//       console.log(`Inserting new user with email: ${address.email}`);

//       const [insertResult] = await db.query(
//         `INSERT INTO user_info (
//           userName, firstName, lastName, fatherName, DOB, sex, maritalStatus,
//           company, organisationType, pan, aadhar, din, addressProof, addressProofName,
//           nationality, bank, accountNumber, ifsc, address, state, city, pin,
//           email, secondaryEmail, contactNo, secondaryContact,
//           addharcar, investmentDetails, form16, bankDetails, otherDocument
//         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
//         [
//           personal.userName,
//           personal.firstName,
//           personal.lastName,
//           personal.fatherName,
//           formattedDOB,
//           personal.sex,
//           personal.maritalStatus,
//           company.company,
//           company.organisationType,
//           identity.pan,
//           identity.aadhar,
//           identity.din,
//           identity.addressProof,
//           identity.addressProofName,
//           identity.nationality,
//           bank.bank,
//           bank.accountNumber,
//           bank.ifsc,
//           address.address,
//           address.state,
//           address.city,
//           address.pin,
//           address.email,
//           address.secondaryEmail,
//           address.contactNo,
//           address.secondaryContact,
//           documentBuffers.addharcar || null,
//           documentBuffers.InvestmentDetails || null,
//           documentBuffers.form16 || null,
//           documentBuffers.BankDetails || null,
//           documentBuffers.OtherDocument || null
//         ]
//       );

//       result = insertResult;
//       return new Response(JSON.stringify({
//         success: true,
//         message: "User data inserted successfully",
//         inserted: true,
//         id: insertResult.insertId
//       }), { status: 201 });
//     }

//   } catch (err) {
//     console.error("Database error:", err);
//     return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
//   }
// }
