"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// eslint-disable-next-line
// @ts-ignore - next/image static import provides an object with a .src field
import blogofensureKar from "@/app/images/blogofensureKar.png";

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
  // No fallback: if API has no image, don't render any image
  return "";
};

// Normalize inline HTML content: fix relative image src and link attrs
const normalizeContentHtml = (html: string): string => {
  if (!html) return "";
  try {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;

    // Fix images
    wrapper.querySelectorAll("img").forEach((img) => {
      const src = img.getAttribute("src") || "";
      if (src) {
        if (src.startsWith("public/")) {
          img.setAttribute("src", fixImagePath(src));
        } else if (!/^https?:\/\//i.test(src) && !src.startsWith("/") && !src.startsWith("data:")) {
          img.setAttribute("src", "/" + src);
        }
      }
      img.setAttribute("loading", "lazy");
      if (!img.getAttribute("style")) img.setAttribute("style", "max-width:100%;height:auto;");
      img.classList.add("rounded-md");
    });

    // Ensure links open in new tab
    wrapper.querySelectorAll("a").forEach((a) => {
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");
      const href = a.getAttribute("href") || "";
      if (href && !/^https?:\/\//i.test(href) && !href.startsWith("/")) {
        a.setAttribute("href", "/" + href);
      }
    });

    return wrapper.innerHTML;
  } catch {
    return html;
  }
};

const BlogDetailPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const token = useMemo(() => {
    if (typeof window === "undefined") return "";
    return localStorage.getItem("adminAuth") || "";
  }, []);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const isNumeric = /^\d+$/.test(slug);
        if (isNumeric) {
          const res = await fetch(
            `/api/blog?id=${slug}`,
            { headers: { "X-API-Key": token } }
          );
          if (!res.ok) throw new Error("Failed to load blog");
          const data = await res.json();
          let item: any = data;
          if (data?.data && Array.isArray(data.data)) item = data.data[0] || {};
          else if (data?.blogs && Array.isArray(data.blogs)) item = data.blogs[0] || {};
          setBlog({ ...item, tags: parseTags(item?.tags) });
        } else {
          // Fallback: fetch all and match by slug
          const res = await fetch(
            "/api/blog",
            { headers: { "X-API-Key": token } }
          );
          if (!res.ok) throw new Error("Failed to load blogs");
          const data = await res.json();
          let list: any[] = [];
          if (Array.isArray(data)) list = data;
          else if (data?.data && Array.isArray(data.data)) list = data.data;
          else if (data?.blogs && Array.isArray(data.blogs)) list = data.blogs;
          else if (data?.result && Array.isArray(data.result)) list = data.result;
          const found = list.find((b: any) => (b?.slug || "").toLowerCase() === slug.toLowerCase());
          if (found) setBlog({ ...found, tags: parseTags(found.tags) });
          else setError("Blog not found");
        }
      } catch (e: any) {
        setError(e?.message || "Error loading blog");
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, [slug, token]);

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
        <p className="text-red-600">{error}</p>
        <Link href="/blog-section" className="text-blue-600 underline">Back to blog</Link>
      </div>
    );
  }

  if (!blog) return null;

  return (
    <div className="min-h-screen bg-[#eafaf8] dark:bg-black pt-20 pb-8 sm:pt-28 sm:pb-10 md:pt-32 md:pb-12 lg:pt-30 lg:pb-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="mb-6">
          <Link href="/blog-section" className="text-sm text-blue-600 underline">← Back to Blog</Link>
        </div> */}

        <div className="bg-white rounded-2xl border shadow overflow-hidden">
          <div className={`grid grid-cols-1 ${getBlogImageSrc(blog.image_filename, blog.image_path) ? 'md:grid-cols-2' : ''} gap-0`}>
            {/* Image on the left */}
            {getBlogImageSrc(blog.image_filename, blog.image_path) && (
              <div className="flex items-center justify-center bg-white py-8">
                <div className="relative w-full max-w-[500px] h-[320px] rounded-2xl shadow-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src={getBlogImageSrc(blog.image_filename, blog.image_path)}
                    alt={blog.title}
                    fill
                    className="object-contain w-full h-full"
                    sizes="(min-width: 768px) 500px, 100vw"
                    priority
                  />
                </div>
              </div>
            )}

            {/* Content on the right */}
            <div className="p-5 sm:p-7 flex flex-col">
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

              <div className="prose max-w-none mt-6 flex-grow text-gray-900 content-html"
                   dangerouslySetInnerHTML={{ __html: normalizeContentHtml(blog.content) }}
              />
              <style jsx>{`
                .content-html :global(a) {
                  color: #2563eb;
                  text-decoration: underline;
                }
              `}</style>

              {/* {(blog.meta_title || blog.meta_description) && (
                <div className="mt-8 border-t pt-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">SEO</h3>
                  {blog.meta_title && (
                    <div className="text-sm text-gray-900"><span className="font-medium">Title:</span> {blog.meta_title}</div>
                  )}
                  {blog.meta_description && (
                    <div className="text-sm text-gray-900 mt-1"><span className="font-medium">Description:</span> {blog.meta_description}</div>
                  )}
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;


