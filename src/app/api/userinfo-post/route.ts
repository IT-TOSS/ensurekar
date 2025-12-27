import { NextRequest, NextResponse } from 'next/server';
import { CreateConnection } from '../../../../config/database';

// ===========================================================
// 👤 CREATE/UPDATE USER INFO API (equivalent to userinfo_post.php)
// ===========================================================

// ===========================================================
// ✅ POST (Create or Update User Info)
// ===========================================================
export async function POST(request: NextRequest) {
  try {
    const raw = await request.text();
    let data: any;

    try {
      data = JSON.parse(raw);
    } catch (parseError) {
      return NextResponse.json(
        { success: false, message: 'Invalid JSON input' },
        {
          status: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          },
        }
      );
    }

    if (!data) {
      return NextResponse.json(
        { success: false, message: 'Invalid JSON input' },
        {
          status: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          },
        }
      );
    }

    const personal = data.personal || {};
    const company = data.company || {};
    const identity = data.identity || {};
    const bank = data.bank || {};
    const address = data.address || {};
    const uid = data.uid || personal.id || null;

    // Validate email is required
    if (!address.email || address.email.trim() === '') {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        {
          status: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          },
        }
      );
    }

    // Format DOB (matching PHP date format)
    let formattedDOB: string | null = null;
    if (personal.DOB) {
      try {
        const date = new Date(personal.DOB);
        if (!isNaN(date.getTime())) {
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const day = String(date.getDate()).padStart(2, '0');
          formattedDOB = `${year}-${month}-${day}`;
        }
      } catch (e) {
        console.error('Error formatting DOB:', e);
      }
    }

    const email = address.email.trim();
    const db = await CreateConnection();

    // Check if user exists by email
    const checkQuery = 'SELECT id FROM user_info WHERE email = ?';
    const [checkRows]: any = await db.query(checkQuery, [email]);

    if (Array.isArray(checkRows) && checkRows.length > 0) {
      // UPDATE existing user
      console.log(`Updating user with email: ${email}`);

      const updateQuery = `
        UPDATE user_info SET
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
        WHERE email = ?
      `;

      const updateValues = [
        personal.userName || null,
        personal.firstName || null,
        personal.lastName || null,
        personal.fatherName || null,
        formattedDOB,
        personal.sex || null,
        personal.maritalStatus || null,
        company.company || null,
        company.organisationType || null,
        identity.pan || null,
        identity.aadhar || null,
        identity.din || null,
        identity.addressProof || null,
        identity.addressProofName || null,
        identity.nationality || null,
        bank.bank || null,
        bank.accountNumber || null,
        bank.ifsc || null,
        address.address || null,
        address.state || null,
        address.city || null,
        address.pin || null,
        address.secondaryEmail || null,
        address.contactNo || null,
        address.secondaryContact || null,
        email,
      ];

      await db.query(updateQuery, updateValues);

      console.log(`✅ User ${email} updated successfully`);

      return NextResponse.json(
        {
          success: true,
          message: 'User data updated successfully',
          updated: true,
        },
        {
          status: 200,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          },
        }
      );
    } else {
      // INSERT new user
      console.log(`Inserting new user with email: ${email}`);

      const insertQuery = `
        INSERT INTO user_info (
          uid, userName, firstName, lastName, fatherName, DOB, sex, maritalStatus,
          company, organisationType, pan, aadhar, din, addressProof, addressProofName, nationality,
          bank, accountNumber, ifsc, address, state, city, pin, email, secondaryEmail, contactNo, secondaryContact
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const insertValues = [
        uid,
        personal.userName || null,
        personal.firstName || null,
        personal.lastName || null,
        personal.fatherName || null,
        formattedDOB,
        personal.sex || null,
        personal.maritalStatus || null,
        company.company || null,
        company.organisationType || null,
        identity.pan || null,
        identity.aadhar || null,
        identity.din || null,
        identity.addressProof || null,
        identity.addressProofName || null,
        identity.nationality || null,
        bank.bank || null,
        bank.accountNumber || null,
        bank.ifsc || null,
        address.address || null,
        address.state || null,
        address.city || null,
        address.pin || null,
        email,
        address.secondaryEmail || null,
        address.contactNo || null,
        address.secondaryContact || null,
      ];

      const [result]: any = await db.query(insertQuery, insertValues);

      console.log(`✅ User ${email} inserted successfully with ID: ${result.insertId}`);

      return NextResponse.json(
        {
          success: true,
          message: 'User data inserted successfully',
          inserted: true,
          id: result.insertId,
        },
        {
          status: 201,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          },
        }
      );
    }
  } catch (error) {
    console.error('Error in userinfo POST:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  }
}

// ===========================================================
// ✅ OPTIONS (CORS Preflight)
// ===========================================================
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  );
}

