import { MetadataRoute } from 'next';

interface Blog {
  id: number;
  slug?: string;
  publish_date?: string;
  updated_at?: string;
  status?: string;
}

async function fetchAllBlogs(): Promise<Blog[]> {
  try {
    const response = await fetch(
      "https://edueye.co.in/ensurekar/existing-site/create_get_update_blog_posts.php",
      {
        headers: {
          "X-API-Key": process.env.ADMIN_API_KEY || "",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) return [];

    const data = await response.json();
    let list: any[] = [];
    
    if (Array.isArray(data)) list = data;
    else if (data?.data && Array.isArray(data.data)) list = data.data;
    else if (data?.blogs && Array.isArray(data.blogs)) list = data.blogs;
    else if (data?.result && Array.isArray(data.result)) list = data.result;

    return list;
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ensurekar.com';
  
  // Fetch all blogs
  const blogs = await fetchAllBlogs();
  
  // Filter only published blogs
  const publishedBlogs = blogs.filter((blog: Blog) => blog.status === 'published' || !blog.status);
  
  // Generate blog entries
  const blogEntries: MetadataRoute.Sitemap = publishedBlogs.map((blog: Blog) => {
    const url = `${baseUrl}/blog-section/${blog.slug || blog.id}`;
    const lastModified = blog.updated_at 
      ? new Date(blog.updated_at) 
      : blog.publish_date 
        ? new Date(blog.publish_date) 
        : new Date();
    
    return {
      url,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    };
  });

  // Add blog list page
  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog-section`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ];

  return [...staticEntries, ...blogEntries];
}

