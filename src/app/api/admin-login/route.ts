import { NextRequest, NextResponse } from 'next/server';
import { CreateConnection } from '../../../../config/database';
import crypto from 'crypto';
import { signSuperAdminToken } from '@/lib/superAdminAuth';

// ===========================================================
// 🔐 ADMIN LOGIN API
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

    // Hash password with MD5 (matching PHP's md5())
    const hashedPassword = md5Hash(password);

    console.log("Hashed Password:", hashedPassword);

    // Primary query: expect password stored as MD5 hash
    const query = 'SELECT * FROM admin_login WHERE email = ? AND password = ?';
    let [rows]: any = await db.query(query, [email, hashedPassword]);

    // Backwards‑compatibility: if no match with MD5, try plain‑text password
    // This handles older records where password was not hashed.
    if (!Array.isArray(rows) || rows.length === 0) {
      const [plainRows]: any = await db.query(query, [email, password]);

      if (!Array.isArray(plainRows) || plainRows.length === 0) {
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

      // Optional: migrate this user to MD5 password for future logins
      try {
        const legacyUser = plainRows[0];
        if (legacyUser?.id) {
          await db.query(
            'UPDATE admin_login SET password = ? WHERE id = ?',
            [hashedPassword, legacyUser.id]
          );
        }
      } catch (migrateErr) {
        console.error('Failed to migrate legacy admin password to MD5:', migrateErr);
      }

      rows = plainRows;
    }

    // Fetch user
    const user = { ...rows[0] };
    delete user.password; // Remove password from response

    // Enforce Super Admin role for this endpoint
    const role = String(user?.role || '').toLowerCase();
    if (role !== 'superadmin') {
      return NextResponse.json(
        { error: 'Forbidden: Super Admin access required.' },
        {
          status: 403,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          },
        }
      );
    }

    // Token is required for protected Super Admin APIs (e.g. FAQ CRUD).
    // If the server is missing SUPER_ADMIN_JWT_SECRET, allow login to succeed
    // (so panel works) but return token as null with a warning.
    let token: string | null = null;
    let tokenWarning: string | null = null;
    try {
      token = signSuperAdminToken({
        id: user?.id ? Number(user.id) : undefined,
        email: user.email,
        name: user?.name,
        role: user?.role || 'superadmin',
      });
    } catch (e: any) {
      if (e?.code === "MISSING_SECRET") {
        tokenWarning = "Server missing SUPER_ADMIN_JWT_SECRET. Protected modules may not work until configured.";
      } else {
        throw e;
      }
    }

    return NextResponse.json(
      {
        message: 'Login successful.',
        user: user,
        token,
        tokenWarning,
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
    console.error('Error in admin login:', error);
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


