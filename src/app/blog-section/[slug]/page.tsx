"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiBookmark, FiShare2, FiMoreHorizontal } from "react-icons/fi";
import { FaRegComment, FaRegHandPaper } from "react-icons/fa";

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
  if (fixed) return fixed;
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

// Calculate reading time (average 200 words per minute)
const calculateReadingTime = (content: string): number => {
  const text = content.replace(/<[^>]*>/g, ""); // Remove HTML tags
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / 200);
};

// Format date to "X days ago" or date
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "1 day ago";
  if (diffDays < 7) return `${diffDays} days ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
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

  const readingTime = calculateReadingTime(blog.content);
  const formattedDate = formatDate(blog.publish_date);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[680px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        {/* Article Title */}
        <h1 className="text-4xl sm:text-5xl md:text-[42px] font-bold text-gray-900 mb-10 leading-[1.15] tracking-[-0.02em]" style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
          {blog.title}
        </h1>

        {/* Author Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <div className="flex items-center gap-3">
            {/* Author Avatar */}
            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
              {blog.author_email ? (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-600 text-white font-semibold text-sm">
                  {blog.author_name.charAt(0).toUpperCase()}
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            
            {/* Author Name and Follow Button */}
            <div className="flex items-center gap-3">
              <span className="text-gray-900 font-medium text-[15px]">{blog.author_name}</span>
              {/* <button className="px-4 py-1.5 text-sm font-medium border border-gray-300 rounded-full hover:bg-gray-50 transition-colors whitespace-nowrap">
                Follow
              </button> */}
            </div>
          </div>

          {/* Publication Details */}
          <div className="flex items-center gap-4 text-sm text-gray-500 whitespace-nowrap">
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Featured Image */}
        {getBlogImageSrc(blog.image_filename, blog.image_path) && (
          <div className="mb-10 -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center bg-gray-50">
              <Image
                src={getBlogImageSrc(blog.image_filename, blog.image_path)}
                alt={blog.title}
                width={1200}
                height={800}
                className="object-contain w-full h-auto max-h-[600px]"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 680px"
              />
            </div>
          </div>
        )}

        {/* Article Content */}
        <article className="max-w-none">
          <div 
            className="content-html"
            dangerouslySetInnerHTML={{ __html: normalizeContentHtml(blog.content) }}
            style={{
              fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontSize: '18px',
              lineHeight: '1.5',
              color: '#292929',
              letterSpacing: '-0.03em'
            }}
          />
        </article>

        <style jsx>{`
          @media (min-width: 1024px) {
            :global(.lg\:px-8) {
              padding-left: 2rem;
              padding-right: 2rem;
              padding-top: 8rem;
            }
          }
          .content-html :global(p) {
            margin-bottom: 1.5em;
            font-size: 18px;
            line-height: 1.7;
            color: #292929;
            letter-spacing: -0.01em;
            font-weight: 400;
            font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          }
          .content-html :global(h1),
          .content-html :global(h2),
          .content-html :global(h3),
          .content-html :global(h4),
          .content-html :global(h5),
          .content-html :global(h6) {
            font-weight: 700;
            margin-top: 1.8em;
            margin-bottom: 0.8em;
            color: #292929;
            line-height: 1.2;
            letter-spacing: -0.02em;
          }
          .content-html :global(h2) {
            font-size: 34px;
          }
          .content-html :global(h3) {
            font-size: 28px;
          }
          .content-html :global(h4) {
            font-size: 24px;
          }
          .content-html :global(a) {
            color: #292929;
            text-decoration: underline;
            text-decoration-color: rgba(41, 41, 41, 0.4);
            text-underline-offset: 2px;
          }
          .content-html :global(a:hover) {
            text-decoration-color: #292929;
          }
          .content-html :global(img) {
            max-width: 100%;
            height: auto;
            border-radius: 4px;
            margin: 3em 0;
            display: block;
          }
          .content-html :global(ul),
          .content-html :global(ol) {
            margin: 1.46em 0;
            padding-left: 1.8em;
          }
          .content-html :global(li) {
            margin-bottom: 0.6em;
            font-size: 18px;
            line-height: 1.7;
            font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          }
          .content-html :global(blockquote) {
            border-left: 3px solid #292929;
            padding-left: 1.5em;
            margin: 2em 0;
            font-style: italic;
            color: #757575;
            font-size: 18px;
            line-height: 1.7;
            font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          }
          .content-html :global(strong) {
            font-weight: 700;
            color: #292929;
          }
          .content-html :global(em) {
            font-style: italic;
          }
          .content-html :global(code) {
            background-color: #f5f5f5;
            padding: 2px 6px;
            border-radius: 3px;
            font-size: 0.9em;
            font-family: 'Courier New', monospace;
          }
          .content-html :global(pre) {
            background-color: #f5f5f5;
            padding: 1.5em;
            border-radius: 4px;
            overflow-x: auto;
            margin: 2em 0;
          }
          .content-html :global(pre code) {
            background-color: transparent;
            padding: 0;
          }
        `}</style>
      </div>
    </div>
  );
};

export default BlogDetailPage;


