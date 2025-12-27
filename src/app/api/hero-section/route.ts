import { NextRequest, NextResponse } from 'next/server';
import { CreateConnection } from '../../../../config/database';

// In-memory cache for hero section data
let heroSectionCache: {
  data: any;
  timestamp: number;
} | null = null;

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes cache
let tableChecked = false; // Track if table existence has been checked

// Helper to standardize responses with caching
const jsonResponse = (body: any, status = 200, cacheControl?: string) => {
  const headers: Record<string, string> = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-API-KEY, X-Requested-With, Origin, Accept, X-API-Key',
  };
  
  if (cacheControl) {
    headers['Cache-Control'] = cacheControl;
  }
  
  return NextResponse.json(body, { status, headers });
};

// Helper function to create table if it doesn't exist (only runs once)
const ensureTableExists = async (db: any) => {
  if (tableChecked) return; // Skip if already checked
  
  try {
    const createTableSql = `
      CREATE TABLE IF NOT EXISTS \`Herosection_text\` (
        \`id\` INT(11) NOT NULL AUTO_INCREMENT,
        \`text_line1\` VARCHAR(255) NOT NULL COMMENT 'First line of hero text (e.g., "File Your Income Tax")',
        \`text_line2\` VARCHAR(255) DEFAULT NULL COMMENT 'Second line of hero text (e.g., "Return Starting")',
        \`text_line3\` VARCHAR(255) DEFAULT NULL COMMENT 'Third line of hero text (e.g., "at Just ₹499/-")',
        \`button_text\` VARCHAR(100) NOT NULL COMMENT 'Text displayed on the button (e.g., "File Now")',
        \`button_src\` VARCHAR(500) NOT NULL COMMENT 'URL/path where button redirects (e.g., "/accounting/income-tax-return-filing")',
        \`font_size\` INT(11) DEFAULT 73 COMMENT 'Font size in pixels for display-2 class (default: 73px)',
        \`created_at\` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
        \`updated_at\` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (\`id\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `;
    
    await db.query(createTableSql);
    
    // Add font_size column if it doesn't exist (for existing tables)
    try {
      await db.query(`
        ALTER TABLE \`Herosection_text\` 
        ADD COLUMN \`font_size\` INT(11) DEFAULT 73 COMMENT 'Font size in pixels for display-2 class (default: 73px)'
      `);
    } catch (error: any) {
      // Column already exists, ignore error
      if (!error.message.includes('Duplicate column name') && error.code !== 'ER_DUP_FIELDNAME') {
        throw error;
      }
    }
    
    tableChecked = true;
  } catch (error: any) {
    console.error('Error creating table:', error);
    throw error;
  }
};

// ===========================================================
// 1️⃣ GET Hero Section Data (Optimized with caching)
// ===========================================================
export async function GET(request: NextRequest) {
  try {
    // Check in-memory cache first
    const now = Date.now();
    if (heroSectionCache && (now - heroSectionCache.timestamp) < CACHE_DURATION) {
      return jsonResponse(
        { status: 'success', data: heroSectionCache.data },
        200,
        'public, s-maxage=300, stale-while-revalidate=600'
      );
    }

    const db = await CreateConnection();
    await ensureTableExists(db);
    
    // Only select needed columns for better performance
    const sql = `
      SELECT id, text_line1, text_line2, text_line3, button_text, button_src, font_size 
      FROM Herosection_text 
      ORDER BY id DESC 
      LIMIT 1
    `;
    const [rows]: any = await db.query(sql);

    let responseData;
    if (Array.isArray(rows) && rows.length > 0) {
      responseData = rows[0];
    } else {
      // Return default values if no data exists
      responseData = {
        id: null,
        text_line1: 'File Your Income Tax',
        text_line2: 'Return Starting',
        text_line3: 'at Just ₹499/-',
        button_text: 'File Now',
        button_src: '/accounting/income-tax-return-filing',
        font_size: 73,
      };
    }

    // Update cache
    heroSectionCache = {
      data: responseData,
      timestamp: now,
    };

    return jsonResponse(
      { status: 'success', data: responseData },
      200,
      'public, s-maxage=300, stale-while-revalidate=600'
    );
  } catch (error: any) {
    console.error('Error fetching hero section:', error);
    
    // Return cached data if available, even if expired
    if (heroSectionCache) {
      return jsonResponse(
        { status: 'success', data: heroSectionCache.data },
        200,
        'public, s-maxage=60'
      );
    }
    
    return jsonResponse(
      { error: 'Failed to fetch hero section', details: error.message },
      500
    );
  }
}

// Next.js route segment config for caching
export const revalidate = 300; // Revalidate every 5 minutes

// ===========================================================
// 2️⃣ PUT Update Hero Section
// ===========================================================
export async function PUT(request: NextRequest) {
  try {
    // Check authentication
    const apiKey = request.headers.get('X-API-Key') || request.headers.get('x-api-key');
    if (!apiKey) {
      return jsonResponse({ error: 'Unauthorized: API key required' }, 401);
    }

    const input = await request.json().catch(() => null);
    if (!input) {
      return jsonResponse({ error: 'Invalid JSON input.' }, 400);
    }

    const {
      text_line1,
      text_line2,
      text_line3,
      button_text,
      button_src,
      font_size,
    } = input;

    if (!text_line1 || !button_text || !button_src) {
      return jsonResponse(
        { error: 'Missing required fields: text_line1, button_text, button_src' },
        400
      );
    }

    const db = await CreateConnection();
    await ensureTableExists(db);

    // Check if record exists
    const checkSql = 'SELECT * FROM Herosection_text ORDER BY id DESC LIMIT 1';
    const [existing]: any = await db.query(checkSql);

    if (Array.isArray(existing) && existing.length > 0) {
      // Update existing record
      const updateSql = `
        UPDATE Herosection_text 
        SET text_line1 = ?, text_line2 = ?, text_line3 = ?, button_text = ?, button_src = ?, font_size = ?, updated_at = NOW()
        WHERE id = ?
      `;
      await db.query(updateSql, [
        text_line1,
        text_line2 || null,
        text_line3 || null,
        button_text,
        button_src,
        font_size || 73,
        existing[0].id,
      ]);

      // Clear cache on update
      heroSectionCache = null;
      
      return jsonResponse({ status: 'updated', message: 'Hero section updated successfully' }, 200);
    } else {
      // Insert new record
      const insertSql = `
        INSERT INTO Herosection_text (text_line1, text_line2, text_line3, button_text, button_src, font_size, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW())
      `;
      const [result]: any = await db.query(insertSql, [
        text_line1,
        text_line2 || null,
        text_line3 || null,
        button_text,
        button_src,
        font_size || 73,
      ]);

      // Clear cache on create
      heroSectionCache = null;
      
      return jsonResponse({ status: 'created', id: result.insertId, message: 'Hero section created successfully' }, 201);
    }
  } catch (error: any) {
    console.error('Error updating hero section:', error);
    return jsonResponse(
      { error: 'Update failed', details: error.message },
      500
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS(request: NextRequest) {
  return jsonResponse({}, 200);
}

