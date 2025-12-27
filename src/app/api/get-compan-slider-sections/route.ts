import { NextRequest, NextResponse } from 'next/server';
import { CreateConnection } from '../../../../config/database';

// ===========================================================
// 📥 GET COMPANY SLIDER SECTIONS API
// ===========================================================

// ===========================================================
// ✅ GET (All Sections or by Header)
// ===========================================================
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const all = searchParams.get('all');
    const header = searchParams.get('header');

    const db = await CreateConnection();

    // Build query
    let rows: any[] = [];

    if (all === '1') {
      // Get all sections
      const [result] = await db.query('SELECT * FROM company_slider ORDER BY `order` ASC');
      rows = Array.isArray(result) ? result : [];
    } else if (header) {
      // Try exact header first
      const [byHeader] = await db.query('SELECT * FROM company_slider WHERE header = ? ORDER BY `order` ASC', [header]);
      rows = Array.isArray(byHeader) ? byHeader : [];

      // Fallback: if nothing found, try replacing underscores with spaces
      if (rows.length === 0 && header.includes('_')) {
        const headerWithSpaces = header.replace(/_/g, ' ');
        const [bySpacedHeader] = await db.query(
          'SELECT * FROM company_slider WHERE header = ? ORDER BY `order` ASC',
          [headerWithSpaces],
        );
        rows = Array.isArray(bySpacedHeader) ? bySpacedHeader : [];
      }
    } else {
      // Default: get all sections
      const [result] = await db.query('SELECT * FROM company_slider ORDER BY `order` ASC');
      rows = Array.isArray(result) ? result : [];
    }

    // Parse images JSON for each row
    const sections = Array.isArray(rows)
      ? rows.map((row: any) => {
          let images = [];
          try {
            if (row.images) {
              images = typeof row.images === 'string' ? JSON.parse(row.images) : row.images;
            }
          } catch (error) {
            console.error('Error parsing images JSON:', error);
            images = [];
          }

          return {
            ...row,
            images: images,
            isActive: row.isActive === 1 || row.isActive === '1' ? '1' : '0',
          };
        })
      : [];

    return NextResponse.json(sections, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  } catch (error) {
    console.error('Error fetching company slider sections:', error);
    return NextResponse.json(
      {
        error: 'Database connection failed',
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
// ✅ OPTIONS (CORS Preflight)
// ===========================================================
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json(
    {},
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

