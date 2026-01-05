import { NextRequest, NextResponse } from 'next/server';
import { CreateConnection } from '../../../../config/database';

// ===========================================================
// 📦 GET ALL ORDERS API (equivalent to orderid_get.php)
// ===========================================================

// ===========================================================
// ✅ GET (Fetch All Orders)
// ===========================================================
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50'); // Default 50, max 100
    const actualLimit = Math.min(limit, 100); // Cap at 100
    const offset = (page - 1) * actualLimit;

    const db = await CreateConnection();

    // Query with pagination - optimized with ORDER BY index
    const query = 'SELECT * FROM orders ORDER BY id DESC LIMIT ? OFFSET ?';
    const [rows]: any = await db.query(query, [actualLimit, offset]);

    // Get total count
    const [countResult]: any = await db.query('SELECT COUNT(*) as total FROM orders');
    const total = countResult[0]?.total || 0;

    console.log('Fetched orders count:', Array.isArray(rows) ? rows.length : 0);

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
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=60',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Query failed',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
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
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  );
}

