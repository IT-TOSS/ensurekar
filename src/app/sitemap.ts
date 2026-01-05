import { MetadataRoute } from 'next';
import { CreateConnection } from '../../config/database';

// Revalidate sitemap every hour (3600 seconds)
export const revalidate = 3600;

interface Blog {
  slug?: string;
  id?: number;
  publish_date?: string;
  updated_at?: string;
  status?: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ensurekar.com';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/About`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/talk-to-expert`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog-section`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/Privacy-Policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/Terms-Conditions`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/Refund-Policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // Fetch all published blogs from database
  let blogEntries: MetadataRoute.Sitemap = [];
  
  try {
    const db = await CreateConnection();
    const [rows]: any = await db.query(
      `SELECT id, slug, publish_date, updated_at, status 
       FROM blog_posts 
       WHERE status = 'published' 
       ORDER BY publish_date DESC`
    );

    const blogs: Blog[] = Array.isArray(rows) ? rows : [];

    blogEntries = blogs.map((blog) => ({
      url: `${baseUrl}/blog-section/${blog.slug || blog.id}`,
      lastModified: blog.updated_at
        ? new Date(blog.updated_at)
        : blog.publish_date
        ? new Date(blog.publish_date)
        : new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error);
    // Continue without blog entries if database fails
  }

  // Combine static pages and blog entries
  return [...staticPages, ...blogEntries];
}

