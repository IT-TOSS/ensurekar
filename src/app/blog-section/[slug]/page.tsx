import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - next/image static import provides an object with a .src field
import ensureLogo from "@/app/images/ensure_logo.png";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author_name: string;
  author_email: string;
  author_bio?: string;
  status: "draft" | "published" | "archived";
  featured: boolean;
  image_filename?: string;
  image_path?: string;
  tags: string[];
  publish_date: string;
  created_at: string;
  updated_at: string;
  views: number;
  meta_title?: string;
  meta_description?: string;
}

const parseTags = (tags: any): string[] => {
  if (!tags) return [];
  if (Array.isArray(tags)) return tags as string[];
  if (typeof tags === "string") {
    try {
      return JSON.parse(tags);
    } catch {
      return [];
    }
  }
  return [];
};

const fixImagePath = (imagePath?: string): string => {
  if (!imagePath) return "";
  if (imagePath.startsWith("public/")) return imagePath.replace("public/", "/");
  if (!imagePath.startsWith("/")) return "/" + imagePath;
  return imagePath;
};

const getBlogImageSrc = (imageFilename?: string, imagePath?: string) => {
  const fixed = fixImagePath(imagePath);
  if (imageFilename && fixed) return fixed;
  return (ensureLogo as unknown) as string;
};

async function fetchBlog(slug: string): Promise<BlogPost | null> {
  try {
    const isNumeric = /^\d+$/.test(slug);
    let response;
    
    if (isNumeric) {
      // Fetch by ID
      response = await fetch(
        `https://edueye.co.in/ensurekar/existing-site/create_get_update_blog_posts.php?id=${slug}`,
        {
          headers: {
            "X-API-Key": process.env.ADMIN_API_KEY || "",
          },
          cache: "no-store", // Use no-store for dynamic content, or "force-cache" for SSG
        }
      );
    } else {
      // Fetch all and find by slug
      response = await fetch(
        "https://edueye.co.in/ensurekar/existing-site/create_get_update_blog_posts.php",
        {
          headers: {
            "X-API-Key": process.env.ADMIN_API_KEY || "",
          },
          cache: "no-store",
        }
      );
    }

    if (!response.ok) return null;

    const data = await response.json();
    
    if (isNumeric) {
      let item: any = data;
      if (data?.data && Array.isArray(data.data)) item = data.data[0] || {};
      else if (data?.blogs && Array.isArray(data.blogs)) item = data.blogs[0] || {};
      
      if (!item || !item.id) return null;
      
      return {
        ...item,
        tags: parseTags(item.tags),
      };
    } else {
      // Find by slug
      let list: any[] = [];
      if (Array.isArray(data)) list = data;
      else if (data?.data && Array.isArray(data.data)) list = data.data;
      else if (data?.blogs && Array.isArray(data.blogs)) list = data.blogs;
      else if (data?.result && Array.isArray(data.result)) list = data.result;
      
      const found = list.find((b: any) => (b?.slug || "").toLowerCase() === slug.toLowerCase());
      
      if (!found) return null;
      
      return {
        ...found,
        tags: parseTags(found.tags),
      };
    }
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = await fetchBlog(params.slug);
  
  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.meta_title || blog.title,
    description: blog.meta_description || blog.excerpt,
  };
}

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
  const blog = await fetchBlog(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#eafaf8] dark:bg-black py-8 sm:py-10 md:py-12 lg:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          {/* <Link href="/blog-section" className="text-sm text-blue-600 underline">← Back to Blog</Link> */}
        </div>

        <div className=" rounded-2xl border shadow overflow-hidden bg-[#dafbf7]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Image on the left */}
            <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
              <Image
                src={getBlogImageSrc(blog.image_filename, blog.image_path)}
                alt={blog.title}
                fill
                className="object-cover w-full h-full"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority
              />
            </div>
            
            {/* Content on the right */}
            <div className="p-5 sm:p-7 flex flex-col bg-[#dafbf7]">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{blog.title}</h1>
              <div className="mt-2 text-sm text-gray-500">
                {new Date(blog.publish_date).toLocaleDateString()} • By {blog.author_name}
              </div>
              {blog.author_bio && (
                <div className="mt-1 text-xs text-gray-500">{blog.author_bio}</div>
              )}

              {blog.tags?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {blog.tags.map((t, i) => (
                    <span key={i} className="inline-block text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">{t}</span>
                  ))}
                </div>
              )}

              <p className="mt-5 text-gray-700">{blog.excerpt}</p>

              <div className="prose max-w-none mt-6 flex-grow">
                <div className="whitespace-pre-wrap text-gray-900">{blog.content}</div>
              </div>

              {(blog.meta_title || blog.meta_description) && (
                <div className="mt-8 border-t pt-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">SEO</h3>
                  {blog.meta_title && (
                    <div className="text-sm text-gray-900"><span className="font-medium">Title:</span> {blog.meta_title}</div>
                  )}
                  {blog.meta_description && (
                    <div className="text-sm text-gray-900 mt-1"><span className="font-medium">Description:</span> {blog.meta_description}</div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
