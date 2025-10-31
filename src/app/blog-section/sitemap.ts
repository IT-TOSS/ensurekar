// import { MetadataRoute } from 'next';

// interface Blog {
//   id: number;
//   slug?: string;
//   publish_date?: string;
//   updated_at?: string;
//   status?: string;
// }

// async function fetchAllBlogs(): Promise<Blog[]> {
//   try {
//     const response = await fetch(
//       "https://edueye.co.in/ensurekar/existing-site/create_get_update_blog_posts.php",
//       {
//         headers: {
//           "X-API-Key": process.env.ADMIN_API_KEY || "",
//         },
//         cache: "no-store",
//       }
//     );

//     if (!response.ok) return [];

//     const data = await response.json();
//     let list: any[] = [];
    
//     if (Array.isArray(data)) list = data;
//     else if (data?.data && Array.isArray(data.data)) list = data.data;
//     else if (data?.blogs && Array.isArray(data.blogs)) list = data.blogs;
//     else if (data?.result && Array.isArray(data.result)) list = data.result;

//     return list;
//   } catch (error) {
//     console.error("Error fetching blogs for sitemap:", error);
//     return [];
//   }
// }

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ensurekar.com';
  
//   // Fetch all blogs
//   const blogs = await fetchAllBlogs();
  
//   // Filter only published blogs
//   const publishedBlogs = blogs.filter((blog: Blog) => blog.status === 'published' || !blog.status);
  
//   // Generate blog entries
//   const blogEntries: MetadataRoute.Sitemap = publishedBlogs.map((blog: Blog) => {
//     const url = `${baseUrl}/blog-section/${blog.slug || blog.id}`;
//     const lastModified = blog.updated_at 
//       ? new Date(blog.updated_at) 
//       : blog.publish_date 
//         ? new Date(blog.publish_date) 
//         : new Date();
    
//     return {
//       url,
//       lastModified,
//       changeFrequency: 'weekly' as const,
//       priority: 0.7,
//     };
//   });

//   // Add blog list page
//   const staticEntries: MetadataRoute.Sitemap = [
//     {
//       url: `${baseUrl}/blog-section`,
//       lastModified: new Date(),
//       changeFrequency: 'daily' as const,
//       priority: 0.8,
//     },
//   ];

//   return [...staticEntries, ...blogEntries];
// }


import { MetadataRoute } from 'next';

interface Blog {
  slug?: string;
  id?: number;
  publish_date?: string;
  updated_at?: string;
  status?: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://ensurekar.com';

  // Fetch blogs from your API
  // Using external API directly since sitemap runs server-side (no CORS issue)
  const res = await fetch(
    'https://edueye.co.in/ensurekar/existing-site/create_get_update_blog_posts.php',
    { cache: "no-store" }
  );
  const data = await res.json();

  // Normalize possible data structures
  const blogs: Blog[] = Array.isArray(data)
    ? data
    : Array.isArray(data?.data) ? data.data
    : Array.isArray(data?.blogs) ? data.blogs
    : Array.isArray(data?.result) ? data.result
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