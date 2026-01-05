import { MetadataRoute } from 'next';
import { CreateConnection } from '../../../config/database';

// Revalidate blog sitemap every hour (3600 seconds)
export const revalidate = 3600;

interface Blog {
  slug?: string;
  id?: number;
  publish_date?: string;
  updated_at?: string;
  status?: string;
}

const parseTags = (value: any) => {
  if (!value) return [];
  try {
    return typeof value === 'string' ? JSON.parse(value) : value;
  } catch {
    return [];
  }
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ensurekar.com';

  try {
    // Fetch all published blogs directly from database (for sitemap, we need all posts)
    const db = await CreateConnection();
    const [rows]: any = await db.query(
      `SELECT id, slug, publish_date, updated_at, status 
       FROM blog_posts 
       WHERE status = 'published' 
       ORDER BY publish_date DESC`
    );

    const blogs: Blog[] = Array.isArray(rows) ? rows : [];

    const blogEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
      url: `${baseUrl}/blog-section/${blog.slug || blog.id}`,
      lastModified: blog.updated_at
        ? new Date(blog.updated_at)
        : blog.publish_date
        ? new Date(blog.publish_date)
        : new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

    // Add the blog-section overview page
    const staticEntries: MetadataRoute.Sitemap = [
      {
        url: `${baseUrl}/blog-section`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.8,
      }
    ];

    // Combine and return
    return [...staticEntries, ...blogEntries];
  } catch (error) {
    console.error('Error generating blog sitemap:', error);
    // Return at least the blog section page if database fails
    return [
      {
        url: `${baseUrl}/blog-section`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.8,
      }
    ];
  }
}