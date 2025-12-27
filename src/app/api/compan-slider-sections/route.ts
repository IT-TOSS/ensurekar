import { NextRequest, NextResponse } from 'next/server';
import { CreateConnection } from '../../../../config/database';

// ===========================================================
// 🎠 COMPANY SLIDER SECTIONS API
// ===========================================================

// ===========================================================
// ✅ POST (Insert/Update or Delete)
// ===========================================================
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!data) {
      return NextResponse.json(
        { error: 'Invalid or empty JSON input.' },
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

    // 🧠 Check if it's a delete request via a single `header` string
    if (typeof data === 'object' && data.header && typeof data.header === 'string' && Object.keys(data).length === 1) {
      const header = data.header;

      const query = 'DELETE FROM company_slider WHERE header = ?';
      await db.query(query, [header]);

      return NextResponse.json(
        {
          status: 'deleted',
          message: `Slider with header '${header}' deleted.`,
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
    }

    // 🔁 Otherwise: assume array of sections to insert/update
    if (!Array.isArray(data)) {
      return NextResponse.json(
        { error: 'Expected an array of slider sections.' },
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

    let successCount = 0;
    const failedItems: any[] = [];

    for (const section of data) {
      const id = section.id ?? '';
      const header = section.header ?? '';
      const description = section.description ?? '';
      const isActive = section.isActive ? 1 : 0;
      const order = section.order ?? 0;
      const images = section.images ?? [];

      if (!id || !header) {
        failedItems.push({ id: id, error: 'Missing required fields' });
        continue;
      }

      // Convert images array to JSON string
      let imagesJson: string;
      try {
        imagesJson = JSON.stringify(images);
      } catch (error) {
        failedItems.push({ id: id, error: 'Failed to serialize images' });
        continue;
      }

      // Use REPLACE INTO (MySQL's upsert operation)
      const query = `REPLACE INTO company_slider (id, header, description, isActive, \`order\`, images)
                     VALUES (?, ?, ?, ?, ?, ?)`;

      try {
        await db.query(query, [id, header, description, isActive, order, imagesJson]);
        successCount++;
      } catch (error) {
        failedItems.push({
          id: id,
          error: error instanceof Error ? error.message : 'Database error',
        });
      }
    }

    return NextResponse.json(
      {
        status: 'complete',
        saved: successCount,
        failed: failedItems.length,
        errors: failedItems,
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
    console.error('Error in compan-slider-sections:', error);
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

