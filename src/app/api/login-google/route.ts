import { NextRequest, NextResponse } from 'next/server';
import { CreateConnection } from '../../../../config/database';
import crypto from 'crypto';

// Helper to send JSON with CORS headers (similar to PHP CORS behavior)
const jsonResponse = (body: any, status = 200) =>
  NextResponse.json(body, {
    status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });

// MD5 hash (we don't actually log in with this password, just storing)
const md5Hash = (text: string): string =>
  crypto.createHash('md5').update(text).digest('hex');

// ===========================================================
// ✅ POST - Google Login / Registration (equivalent to login_google.php)
// ===========================================================
export async function POST(request: NextRequest) {
  try {
    const data = await request.json().catch(() => null);

    if (!data) {
      return jsonResponse({ emessage: 'Invalid JSON input.', exists: false, create: false }, 400);
    }

    const email: string = (data.email ?? '').toString().trim().toLowerCase();
    const firstName: string = data.firstName ?? '';
    const lastName: string = data.lastName ?? '';
    const phoneNumber: string = data.phoneNumber ?? '';
    const whatsappNumber: string = data.whatsappNumber ?? '';
    const photoURL: string = data.photoURL ?? '';
    const rawPassword: string = data.password ?? '';
    const userId: string = data.userId ?? '';

    if (!email || !userId) {
      return jsonResponse(
        {
          emessage: "Missing required fields 'email' or 'userId'.",
          exists: false,
          create: false,
        },
        400,
      );
    }

    const db = await CreateConnection();

    // Check if email or userId already exists
    const [existing]: any = await db.query(
      'SELECT * FROM users WHERE email = ? OR userId = ?',
      [email, userId],
    );

    if (Array.isArray(existing) && existing.length > 0) {
      const user = existing[0];
      return jsonResponse(
        {
          emessage: 'User already exists with this email or userId.',
          exists: true,
          create: false,
          data: {
            userId: user.userId,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
          },
        },
        200,
      );
    }

    // Insert new user
    const hashedPassword = md5Hash(rawPassword || userId.slice(0, 8));

    const insertSql = `
      INSERT INTO users (userId, firstName, lastName, email, phoneNumber, whatsappNumber, photoURL, password)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await db.query(insertSql, [
      userId,
      firstName,
      lastName,
      email,
      phoneNumber,
      whatsappNumber,
      photoURL,
      hashedPassword,
    ]);

    return jsonResponse(
      {
        emessage: 'User registered successfully.',
        exists: false,
        create: true,
        data: {
          userId,
          email,
          firstName,
          lastName,
        },
      },
      201,
    );
  } catch (error) {
    console.error('Error in login-google POST:', error);
    return jsonResponse(
      {
        emessage: 'Error creating or finding user.',
        exists: false,
        create: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      400,
    );
  }
}

// ===========================================================
// ✅ OPTIONS - CORS Preflight
// ===========================================================
export async function OPTIONS() {
  return jsonResponse({}, 204);
}




