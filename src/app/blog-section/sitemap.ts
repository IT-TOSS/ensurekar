import { MetadataRoute } from 'next';

interface Blog {
  slug?: string;
  id?: number;
  publish_date?: string;
  updated_at?: string;
  status?: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ensurekar.com';
  const apiBase = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  // Fetch blogs from local API route
  const res = await fetch(`${apiBase}/api/blog`, { cache: 'no-store' });
  const data = await res.json();

  // Normalize possible data structures
  const blogs: Blog[] = Array.isArray(data?.data)
    ? data.data
    : Array.isArray(data)
    ? data
    : [];

  // Only include published blogs
  const publishedBlogs = blogs.filter(blog => blog.status === 'published' || !blog.status);

  const blogEntries: MetadataRoute.Sitemap = publishedBlogs.map((blog) => ({
    url: `${baseUrl}/blog-section/${blog.slug || blog.id}`,
    lastModified: blog.updated_at
      ? new Date(blog.updated_at)
      : blog.publish_date
      ? new Date(blog.publish_date)
      : new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Add the blog-section overview page
  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog-section`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    }
  ];

  // Combine and return
  return [...staticEntries, ...blogEntries];
}