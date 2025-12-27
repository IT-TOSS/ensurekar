import { NextRequest, NextResponse } from 'next/server';
import { CreateConnection } from '../../../../config/database';

const jsonResponse = (body: any, status = 200) =>
  NextResponse.json(body, {
    status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-API-KEY, X-Requested-With, Origin, Accept, X-API-Key',
    },
  });

// GET - Fetch featured blog IDs for homepage
export async function GET(request: NextRequest) {
  try {
    const db = await CreateConnection();
    
    let featuredBlogIds: number[] = [];
    
    try {
      // Get featured blog IDs from settings table or return empty array
      const [settings]: any = await db.query(
        'SELECT value FROM settings WHERE `key` = ?',
        ['homepage_featured_blogs']
      );

      if (Array.isArray(settings) && settings.length > 0 && settings[0].value) {
        try {
          featuredBlogIds = JSON.parse(settings[0].value);
        } catch {
          featuredBlogIds = [];
        }
      }
    } catch (error) {
      // Settings table might not exist, return empty array
      console.warn('Settings table query failed, returning empty featured blogs:', error);
      return jsonResponse({
        status: 'success',
        data: [],
        message: 'No featured blogs configured'
      });
    }

    // If no featured blogs set, return empty array
    if (featuredBlogIds.length === 0) {
      return jsonResponse({
        status: 'success',
        data: [],
        message: 'No featured blogs configured'
      });
    }

    // Fetch the featured blogs
    const placeholders = featuredBlogIds.map(() => '?').join(',');
    const [blogs]: any = await db.query(
      `SELECT * FROM blog_posts WHERE id IN (${placeholders}) AND status = 'published' ORDER BY FIELD(id, ${placeholders})`,
      [...featuredBlogIds, ...featuredBlogIds]
    );

    const parseTags = (value: any) => {
      if (!value) return [];
      try {
        return typeof value === 'string' ? JSON.parse(value) : value;
      } catch {
        return [];
      }
    };

    const blogsWithParsedTags = Array.isArray(blogs)
      ? blogs.map((blog: any) => ({ ...blog, tags: parseTags(blog.tags) }))
      : [];

    return jsonResponse({
      status: 'success',
      data: blogsWithParsedTags,
      count: blogsWithParsedTags.length
    });
  } catch (error) {
    console.error('Error fetching featured blogs:', error);
    return jsonResponse(
      {
        error: 'Database connection failed',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      500
    );
  }
}

// POST/PUT - Save featured blog IDs for homepage
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { blogIds } = body;

    if (!Array.isArray(blogIds) || blogIds.length > 3) {
      return jsonResponse(
        { error: 'blogIds must be an array with maximum 3 blog IDs' },
        400
      );
    }

    // Validate all IDs are numbers
    const validIds = blogIds.filter(id => typeof id === 'number' && id > 0);
    if (validIds.length !== blogIds.length) {
      return jsonResponse(
        { error: 'All blog IDs must be valid positive numbers' },
        400
      );
    }

    const db = await CreateConnection();

    // Check if blogs exist and are published
    if (validIds.length > 0) {
      const placeholders = validIds.map(() => '?').join(',');
      const [blogs]: any = await db.query(
        `SELECT id, status FROM blog_posts WHERE id IN (${placeholders})`,
        validIds
      );

      if (!Array.isArray(blogs) || blogs.length !== validIds.length) {
        return jsonResponse(
          { error: 'One or more blog IDs do not exist' },
          404
        );
      }

      // Check if all blogs are published
      const unpublished = blogs.filter((b: any) => b.status !== 'published');
      if (unpublished.length > 0) {
        return jsonResponse(
          { error: 'All blogs must be published to be featured' },
          400
        );
      }
    }

    // Save to settings table
    const value = JSON.stringify(validIds);
    
    try {
      // Try to update first
      const [updateResult]: any = await db.query(
        'UPDATE settings SET value = ? WHERE `key` = ?',
        [value, 'homepage_featured_blogs']
      );

      // If no rows updated, insert new record
      if (!updateResult.affectedRows || updateResult.affectedRows === 0) {
        await db.query(
          'INSERT INTO settings (`key`, value) VALUES (?, ?)',
          ['homepage_featured_blogs', value]
        );
      }
    } catch (error: any) {
      // If settings table doesn't exist, create it
      if (error.code === 'ER_NO_SUCH_TABLE') {
        await db.query(
          'CREATE TABLE IF NOT EXISTS settings (id INT AUTO_INCREMENT PRIMARY KEY, `key` VARCHAR(255) UNIQUE NOT NULL, value TEXT)'
        );
        await db.query(
          'INSERT INTO settings (`key`, value) VALUES (?, ?)',
          ['homepage_featured_blogs', value]
        );
      } else {
        throw error;
      }
    }

    return jsonResponse({
      status: 'success',
      message: 'Featured blogs updated successfully',
      data: { blogIds: validIds }
    });
  } catch (error) {
    console.error('Error saving featured blogs:', error);
    return jsonResponse(
      {
        error: 'Failed to save featured blogs',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      500
    );
  }
}

export async function PUT(request: NextRequest) {
  return POST(request); // Same as POST
}

