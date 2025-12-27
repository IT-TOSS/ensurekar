import { NextRequest, NextResponse } from 'next/server';
import { CreateConnection } from '../../../../config/database';
import crypto from 'crypto';

// ===========================================================
// 👥 ADMIN REGISTER CRUD API
// ===========================================================

// Helper function to hash password with MD5 (matching PHP's md5())
const md5Hash = (text: string): string => {
  return crypto.createHash('md5').update(text).digest('hex');
};

// ===========================================================
// ✅ GET (All Admins or One by ID/Email)
// ===========================================================
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const email = searchParams.get('email');

    const db = await CreateConnection();

    let query: string;
    let params: any[] = [];

    if (id) {
      query = 'SELECT * FROM admin_login WHERE id = ?';
      params = [parseInt(id)];
    } else if (email) {
      query = 'SELECT * FROM admin_login WHERE email = ?';
      params = [email.toLowerCase().trim()];
    } else {
      query = 'SELECT * FROM admin_login ORDER BY id DESC';
    }

    const [rows] = await db.query(query, params);

    // Remove passwords from response
    const sanitizedRows = Array.isArray(rows)
      ? rows.map((row: any) => {
          const { password, ...rest } = row;
          return rest;
        })
      : [];

    if (Array.isArray(rows) && rows.length > 0) {
      return NextResponse.json(sanitizedRows, {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      });
    } else {
      return NextResponse.json(
        { message: 'No records found' },
        {
          status: 200,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          },
        }
      );
    }
  } catch (error) {
    console.error('Error fetching admins:', error);
    return NextResponse.json(
      {
        error: 'Database connection failed',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// ===========================================================
// ✅ POST (Create Admin)
// ===========================================================
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!data) {
      return NextResponse.json(
        { error: 'Invalid JSON input' },
        { status: 400 }
      );
    }

    const db = await CreateConnection();

    // Sanitize input
    const name = data.name?.trim() || '';
    const email = data.email ? data.email.toLowerCase().trim() : '';
    const password = data.password?.trim() || '';
    const role = data.role?.trim() || 'subadmin';
    const status = data.status?.trim() || 'active';

    // Validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Name, email, and password are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format.' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const [existingRows]: any = await db.query(
      'SELECT id FROM admin_login WHERE email = ?',
      [email]
    );

    if (Array.isArray(existingRows) && existingRows.length > 0) {
      return NextResponse.json(
        { error: 'Email already exists.' },
        { status: 409 }
      );
    }

    // Hash password with MD5
    const hashedPassword = md5Hash(password);

    // Insert new admin
    const query = `INSERT INTO admin_login (name, email, password, role, status) VALUES (?, ?, ?, ?, ?)`;
    const [result]: any = await db.query(query, [name, email, hashedPassword, role, status]);

    return NextResponse.json(
      {
        success: true,
        message: 'Admin created successfully',
        id: result.insertId,
      },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  } catch (error) {
    console.error('Error creating admin:', error);
    return NextResponse.json(
      {
        error: 'Insert failed',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// ===========================================================
// ✅ PUT (Update Admin - Full Update)
// ===========================================================
export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const email = searchParams.get('email');

    if (!id && !email) {
      return NextResponse.json(
        { error: 'Missing id or email for update' },
        { status: 400 }
      );
    }

    const data = await request.json();

    if (!data) {
      return NextResponse.json(
        { error: 'Invalid JSON input' },
        { status: 400 }
      );
    }

    const db = await CreateConnection();

    // Build update fields dynamically
    const updates: string[] = [];
    const values: any[] = [];

    // List of allowed fields to update
    const allowedFields = ['name', 'email', 'password', 'role', 'status'];

    for (const key of allowedFields) {
      if (data.hasOwnProperty(key) && data[key] !== null && data[key] !== undefined) {
        if (key === 'password') {
          // Hash password if provided
          updates.push(`${key} = ?`);
          values.push(md5Hash(data[key].trim()));
        } else if (key === 'email') {
          // Normalize email
          updates.push(`${key} = ?`);
          values.push(data[key].toLowerCase().trim());
        } else {
          updates.push(`${key} = ?`);
          values.push(data[key]);
        }
      }
    }

    if (updates.length === 0) {
      return NextResponse.json(
        { message: 'No fields to update' },
        { status: 200 }
      );
    }

    // Build WHERE clause
    let whereClause = '';
    if (id) {
      whereClause = 'WHERE id = ?';
      values.push(parseInt(id));
    } else if (email) {
      whereClause = 'WHERE email = ?';
      values.push(email.toLowerCase().trim());
    }

    const query = `UPDATE admin_login SET ${updates.join(', ')} ${whereClause}`;
    await db.query(query, values);

    return NextResponse.json(
      {
        success: true,
        message: 'Admin updated successfully',
      },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  } catch (error) {
    console.error('Error updating admin:', error);
    return NextResponse.json(
      {
        error: 'Update failed',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// ===========================================================
// ✅ PATCH (Update Admin - Partial Update)
// ===========================================================
export async function PATCH(request: NextRequest) {
  // PATCH works the same as PUT for this use case
  return PUT(request);
}

// ===========================================================
// ✅ DELETE (Delete Admin)
// ===========================================================
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const email = searchParams.get('email');

    // Also check body for email (some clients send it in body)
    let bodyEmail = null;
    try {
      const body = await request.json().catch(() => ({}));
      if (body.email) {
        bodyEmail = body.email;
      }
    } catch {
      // Body might be empty, that's okay
    }

    const finalEmail = email || bodyEmail;

    if (!id && !finalEmail) {
      return NextResponse.json(
        { error: 'Missing id or email for delete' },
        { status: 400 }
      );
    }

    const db = await CreateConnection();

    let query: string;
    let params: any[] = [];

    if (id) {
      query = 'DELETE FROM admin_login WHERE id = ?';
      params = [parseInt(id)];
    } else {
      query = 'DELETE FROM admin_login WHERE email = ?';
      params = [finalEmail.toLowerCase().trim()];
    }

    const [result]: any = await db.query(query, params);

    // Check if any row was affected
    if (result.affectedRows === 0) {
      return NextResponse.json(
        { error: 'Admin not found or already deleted' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Admin deleted successfully',
      },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  } catch (error) {
    console.error('Error deleting admin:', error);
    return NextResponse.json(
      {
        error: 'Delete failed',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
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
        'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  );
}

