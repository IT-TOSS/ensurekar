import { NextRequest, NextResponse } from 'next/server';
import { CreateConnection } from '../../../../config/database';

// Helper to standardize responses
const jsonResponse = (body: any, status = 200) =>
  NextResponse.json(body, {
    status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-API-KEY, X-Requested-With, Origin, Accept, X-API-Key',
    },
  });

// Utility: normalize tags field from DB (stringified JSON) to array
const parseTags = (value: any) => {
  if (!value) return [];
  try {
    return typeof value === 'string' ? JSON.parse(value) : value;
  } catch {
    return [];
  }
};

// ===========================================================
// 1️⃣ GET (All or One)
// ===========================================================
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    const db = await CreateConnection();

    if (id) {
      const [rows]: any = await db.query('SELECT * FROM blog_posts WHERE id = ?', [parseInt(id)]);
      if (!Array.isArray(rows) || rows.length === 0) {
        return jsonResponse({ error: 'Post not found' }, 404);
      }
      const post = rows[0];
      return jsonResponse({
        status: 'success',
        data: { ...post, tags: parseTags(post.tags) },
      });
    }

    // All posts
    const [rows]: any = await db.query(
      'SELECT * FROM blog_posts ORDER BY publish_date DESC, created_at DESC'
    );
    const posts = Array.isArray(rows)
      ? rows.map((p) => ({ ...p, tags: parseTags(p.tags) }))
      : [];

    return jsonResponse({
      status: 'success',
      count: posts.length,
      data: posts,
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return jsonResponse(
      {
        error: 'Database connection failed',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      500
    );
  }
}

// ===========================================================
// 2️⃣ CREATE NEW POST
// ===========================================================
export async function POST(request: NextRequest) {
  try {
    const input = await request.json().catch(() => null);
    if (!input) {
      return jsonResponse({ error: 'Invalid JSON input.' }, 400);
    }

    const {
      title,
      slug,
      excerpt = '',
      content = '',
      author_name,
      author_email = '',
      author_bio = '',
      status = 'draft',
      featured = false,
      image_filename = '',
      image_path = '',
      tags = [],
      publish_date = null,
      meta_title = '',
      meta_description = '',
    } = input;

    if (!title || !slug || !content || !author_name) {
      return jsonResponse(
        { error: 'Missing required fields: title, slug, content, author_name' },
        400
      );
    }

    const db = await CreateConnection();
    const insertSql = `
      INSERT INTO blog_posts 
        (title, slug, excerpt, content, author_name, author_email, author_bio, status, featured, 
         image_filename, image_path, tags, publish_date, meta_title, meta_description)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [result]: any = await db.query(insertSql, [
      title,
      slug,
      excerpt,
      content,
      author_name,
      author_email,
      author_bio,
      status,
      featured ? 1 : 0,
      image_filename,
      image_path,
      JSON.stringify(tags ?? []),
      publish_date || null,
      meta_title,
      meta_description,
    ]);

    return jsonResponse({ status: 'created', id: result.insertId }, 201);
  } catch (error) {
    console.error('Error creating blog post:', error);
    return jsonResponse(
      { error: 'Insert failed', details: error instanceof Error ? error.message : 'Unknown error' },
      500
    );
  }
}

// ===========================================================
// 3️⃣ UPDATE EXISTING POST
// ===========================================================
export async function PUT(request: NextRequest) {
  try {
    const input = await request.json().catch(() => null);
    if (!input || !input.id) {
      return jsonResponse({ error: "Missing or invalid 'id' for update" }, 400);
    }

    const id = parseInt(input.id);
    const fields: string[] = [];
    const values: any[] = [];

    for (const [key, value] of Object.entries(input)) {
      if (key === 'id') continue;

      // Convert arrays to JSON (e.g., tags)
      const valToStore =
        Array.isArray(value) ? JSON.stringify(value) : value === undefined ? null : value;
      fields.push(`\`${key}\` = ?`);
      values.push(valToStore);
    }

    if (fields.length === 0) {
      return jsonResponse({ error: 'No fields to update' }, 400);
    }

    const sql = `UPDATE blog_posts SET ${fields.join(', ')} WHERE id = ?`;
    values.push(id);

    const db = await CreateConnection();
    await db.query(sql, values);

    return jsonResponse({ status: 'updated', id });
  } catch (error) {
    console.error('Error updating blog post:', error);
    return jsonResponse(
      { error: 'Update failed', details: error instanceof Error ? error.message : 'Unknown error' },
      500
    );
  }
}

// ===========================================================
// 4️⃣ DELETE POST
// ===========================================================
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const idFromQuery = searchParams.get('id');
    const body = await request.json().catch(() => ({}));
    const id = idFromQuery || body?.id;

    if (!id) {
      return jsonResponse({ error: 'ID is required for deletion' }, 400);
    }

    const db = await CreateConnection();
    const [result]: any = await db.query('DELETE FROM blog_posts WHERE id = ?', [parseInt(id)]);

    if (result.affectedRows === 0) {
      return jsonResponse({ error: 'Post not found' }, 404);
    }

    return jsonResponse({ status: 'deleted', id: parseInt(id) });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return jsonResponse(
      { error: 'Delete failed', details: error instanceof Error ? error.message : 'Unknown error' },
      500
    );
  }
}

// ===========================================================
// 5️⃣ OPTIONS (CORS Preflight)
// ===========================================================
export async function OPTIONS() {
  return jsonResponse({}, 200);
}

