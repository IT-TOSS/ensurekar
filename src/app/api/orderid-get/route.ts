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
    const db = await CreateConnection();

    // Query to fetch all orders
    const query = 'SELECT * FROM orders';
    const [rows]: any = await db.query(query);

    console.log('Fetched orders count:', Array.isArray(rows) ? rows.length : 0);

    return NextResponse.json(
      {
        success: true,
        data: Array.isArray(rows) ? rows : [],
      },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
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

