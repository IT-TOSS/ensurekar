import { NextRequest, NextResponse } from 'next/server';
import { CreateConnection } from '../../../../config/database';
import crypto from 'crypto';

// ===========================================================
// 🔐 USER LOGIN API
// ===========================================================

// Helper function to hash password with MD5 (matching PHP's md5())
const md5Hash = (text: string): string => {
  return crypto.createHash('md5').update(text).digest('hex');
};

// ===========================================================
// ✅ POST (Login)
// ===========================================================
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Sanitize input
    const email = data?.email ? data.email.toLowerCase().trim() : '';
    const password = data?.password ? data.password.trim() : '';

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required.' },
        {
          status: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          },
        }
      );
    }

    const db = await CreateConnection();

    // Hash password with MD5 (matching PHP's md5() and registerUser route)
    const hashedPassword = md5Hash(password);

    console.log('Login attempt for email:', email);
    console.log('Hashed password (MD5):', hashedPassword);

    // Run query - querying users table
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    const [rows]: any = await db.query(query, [email, hashedPassword]);

    console.log('Query result:', rows?.length || 0, 'user(s) found');

    if (!Array.isArray(rows) || rows.length === 0) {
      return NextResponse.json(
        { error: 'Invalid email or password.' },
        {
          status: 401,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          },
        }
      );
    }

    // Fetch user
    const user = { ...rows[0] };
    delete user.password; // Remove password from response

    console.log('✅ Login successful for user:', user.email);

    return NextResponse.json(
      {
        message: 'Login successful.',
        user: user,
      },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  } catch (error) {
    console.error('Error in user login:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
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
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  );
}
