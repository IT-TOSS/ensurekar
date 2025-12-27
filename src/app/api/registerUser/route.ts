import { NextRequest, NextResponse } from 'next/server';
import { CreateConnection } from '../../../../config/database';
import crypto from 'crypto';

// Helper to send JSON with CORS headers
const jsonResponse = (body: any, status = 200) =>
  NextResponse.json(body, {
    status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });

// MD5 hash (to match existing PHP implementation)
const md5Hash = (text: string): string =>
  crypto.createHash('md5').update(text).digest('hex');

// ===========================================================
// ✅ POST - Register user (equivalent to register.php)
// ===========================================================
export async function POST(request: NextRequest) {
  try {
    const data = await request.json().catch(() => null);

    if (!data) {
      return jsonResponse({ message: 'Invalid JSON input.' }, 400);
    }

    const userId: string | undefined = data.userId;
    const emailRaw: string | undefined = data.email;

    if (!userId || !emailRaw) {
      return jsonResponse(
        { message: 'User ID and email are required.' },
        400
      );
    }

    const email = emailRaw.trim().toLowerCase();

    console.log('Attempting to register user:', { userId, email, firstName: data.firstName, lastName: data.lastName });

    const db = await CreateConnection();

    // Check for duplicate userId or email
    const [existing]: any = await db.query(
      'SELECT * FROM users WHERE userId = ? OR email = ?',
      [userId, email],
    );

    console.log('Duplicate check result:', existing);

    if (Array.isArray(existing) && existing.length > 0) {
      console.log('User already exists:', existing);
      return jsonResponse(
        { message: 'User ID or Email already exists.' },
        409,
      );
    }

    // Hash the password with MD5 (to match existing system)
    const rawPassword: string | undefined = data.password;
    if (!rawPassword) {
      return jsonResponse({ message: 'Password is required.' }, 400);
    }
    const hashedPassword = md5Hash(rawPassword);

    // Escape/normalize other fields
    const firstName: string = data.firstName ?? '';
    const lastName: string = data.lastName ?? '';
    const phoneNumber: string = data.phoneNumber ?? '';
    const whatsappNumber: string = data.whatsappNumber ?? '';
    const photoURL: string = data.photoURL ?? '';

    if (!firstName || !lastName) {
      return jsonResponse(
        { message: 'First name and last name are required.' },
        400,
      );
    }

    // Build insert query
    const insertSql = `
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
      email,
      phoneNumber || null,
      whatsappNumber || null,
      photoURL || null,
      hashedPassword,
    ];

    console.log('Executing INSERT query with values:', {
      userId,
      firstName,
      lastName,
      email,
      phoneNumber: phoneNumber || null,
      whatsappNumber: whatsappNumber || null,
      photoURL: photoURL || null,
      password: '[HIDDEN]',
    });

    const [result]: any = await db.query(insertSql, insertValues);

    console.log('INSERT query result:', result);

    // Check if insert was successful
    if (!result || (result.affectedRows === 0 && result.insertId === 0)) {
      console.error('Insert failed - no rows affected. Result:', result);
      return jsonResponse(
        {
          message: 'Failed to create user. No rows were inserted.',
        },
        500,
      );
    }

    console.log('✅ User inserted successfully with ID:', result.insertId, 'Affected rows:', result.affectedRows);

    return jsonResponse(
      {
        message: 'User created successfully.',
        user: {
          userId,
          firstName,
          lastName,
          email,
          phoneNumber,
          whatsappNumber,
          photoURL,
        },
      },
      201,
    );
  } catch (error) {
    console.error('Error in registerUser POST:', error);
    return jsonResponse(
      {
        message: 'Error creating user.',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      500,
    );
  }
}

// ===========================================================
// ✅ OPTIONS - CORS Preflight
// ===========================================================
export async function OPTIONS() {
  return jsonResponse({}, 200);
}


