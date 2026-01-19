import { NextRequest, NextResponse } from 'next/server';
import { CreateConnection } from '../../../../config/database';

// ===========================================================
// 📧 GET ALL CONTACT INQUIRIES API
// ===========================================================

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const actualLimit = Math.min(limit, 100);
    const offset = (page - 1) * actualLimit;
    const origin = searchParams.get('origin'); // Filter by origin (e.g., "Talk_To_Expert")

    const db = await CreateConnection();

    // Check if table exists first
    try {
      await db.query('SELECT 1 FROM contact_inquiries LIMIT 1');
    } catch (tableError: any) {
      // Table doesn't exist - return empty result instead of error
      if (tableError.code === 'ER_NO_SUCH_TABLE' || tableError.message?.includes('doesn\'t exist')) {
        console.warn('Table contact_inquiries does not exist yet. Please create it using the SQL file.');
        return NextResponse.json(
          {
            success: true,
            count: 0,
            total: 0,
            page,
            limit: actualLimit,
            totalPages: 0,
            data: [],
            message: 'Table contact_inquiries does not exist. Please create it first.',
          },
          {
            status: 200,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
          }
        );
      }
      throw tableError;
    }

    // Build query with optional origin filter
    let query = 'SELECT * FROM contact_inquiries';
    let countQuery = 'SELECT COUNT(*) as total FROM contact_inquiries';
    const queryParams: any[] = [];
    const countParams: any[] = [];

    if (origin) {
      query += ' WHERE origin = ?';
      countQuery += ' WHERE origin = ?';
      queryParams.push(origin);
      countParams.push(origin);
    }

    query += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
    queryParams.push(actualLimit, offset);

    // Get total count
    const [countResult]: any = await db.query(countQuery, countParams);
    const total = countResult[0]?.total || 0;

    // Get paginated data
    const [rows]: any = await db.query(query, queryParams);

    console.log('Fetched contact inquiries count:', Array.isArray(rows) ? rows.length : 0);

    return NextResponse.json(
      {
        success: true,
        count: Array.isArray(rows) ? rows.length : 0,
        total,
        page,
        limit: actualLimit,
        totalPages: Math.ceil(total / actualLimit),
        data: Array.isArray(rows) ? rows : [],
      },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching contact inquiries:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch contact inquiries',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  }
}

// ===========================================================
// 🗑️ DELETE CONTACT INQUIRY (by id)
// ===========================================================
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const idParam = searchParams.get('id');
    const id = idParam ? parseInt(idParam, 10) : NaN;

    if (!idParam || Number.isNaN(id)) {
      return NextResponse.json(
        { success: false, error: 'Missing or invalid id' },
        {
          status: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          },
        }
      );
    }

    const db = await CreateConnection();

    // Delete by primary key
    const [result]: any = await db.query('DELETE FROM contact_inquiries WHERE id = ?', [id]);
    const affected = result?.affectedRows ?? 0;

    return NextResponse.json(
      {
        success: true,
        deleted: affected > 0,
        affectedRows: affected,
        id,
      },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  } catch (error) {
    console.error('Error deleting contact inquiry:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to delete contact inquiry',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  }
}

export async function OPTIONS(request: NextRequest) {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  );
}
