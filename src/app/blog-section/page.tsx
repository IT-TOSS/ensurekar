"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// eslint-disable-next-line
// @ts-ignore - next/image static import provides an object with a .src field
import ensureLogo from "@/app/images/ensure_logo.png";
import Loading from '../loading';
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

const getFirstContentImage = (html?: string): string => {
  if (!html || typeof document === "undefined") return "";
  try {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;
    const img = wrapper.querySelector("img");
    if (!img) return "";
    let src = img.getAttribute("src") || "";
    if (!src) return "";
    if (src.startsWith("public/")) return fixImagePath(src);
    if (/^https?:\/\//i.test(src) || src.startsWith("data:")) return src;
    if (!src.startsWith("/")) src = "/" + src;
    return src;
  } catch {
    return "";
  }
};

const getBlogImageSrc = (imageFilename?: string, imagePath?: string, content?: string) => {
  const fixed = fixImagePath(imagePath);
  if (imageFilename && fixed) return fixed;
  const fromContent = getFirstContentImage(content);
  if (fromContent) return fromContent;
  return blogofensureKar as unknown as string; // final fallback
};

const BlogSectionPage = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const token = useMemo(() => {
    if (typeof window === "undefined") return "";
    return localStorage.getItem("adminAuth") || "";
  }, []);

  const fetchBlogs = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "/api/blog",
        { headers: { "X-API-Key": token } }
      );
      if (!response.ok) throw new Error("Failed to load blogs");
      const data = await response.json();
      let list: any[] = [];
      if (Array.isArray(data)) list = data;
      else if (data?.data && Array.isArray(data.data)) list = data.data;
      else if (data?.blogs && Array.isArray(data.blogs)) list = data.blogs;
      else if (data?.result && Array.isArray(data.result)) list = data.result;
      const normalized = list.map((b: any) => ({
        ...b,
        tags: parseTags(b.tags),
      }));
      setBlogs(normalized);
    } catch (e: any) {
      setError(e?.message || "Error fetching blogs");
    } finally {
      setIsLoading(false);
    }
  };

  // navigation handled via Link to detail page

  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  // Filter only published posts
  const publishedBlogs = blogs.filter(b => b.status === "published");
  
  const featured = publishedBlogs.filter(b => b.featured);
  const primaryFeatured = featured[0] || publishedBlogs[0];
  const otherFeatured = featured.filter(b => b.id !== primaryFeatured?.id).slice(0, 4);
  
  // Get recent posts excluding the primary featured one, for fallback in "Other featured posts"
  const recentForSidebar = publishedBlogs
    .filter(b => b.id !== primaryFeatured?.id)
    .sort((a, b) => new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime())
    .slice(0, 4);
  
  // Use otherFeatured if available, otherwise use recent posts as fallback
  const postsToShowInSidebar = otherFeatured.length > 0 ? otherFeatured : recentForSidebar;
  
  const recent = publishedBlogs
    .slice()
    .sort((a, b) => new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime())
    .slice(0, 9);

  return (
    <div className="min-h-screen bg-[#eafaf8] dark:bg-black py-8 sm:py-10 md:py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Blog</h1>
          <p className="text-gray-600 mt-1">Latest insights and updates</p>
        </div> */}

        {/* Featured section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 items-stretch">
          <div className="lg:col-span-2 min-h-[440px] md:min-h-[520px] flex flex-col">
            {primaryFeatured ? (
              <Link
                href={`/blog-section/${primaryFeatured.slug || primaryFeatured.id}`}
                className="block w-full h-full text-left group flex-1"
              >
                <div className="overflow-hidden rounded-2xl bg-white shadow border h-full flex flex-col">
                  <div className="relative w-full h-52 sm:h-72 md:h-80 flex-grow">
                    <Image
                      src={getBlogImageSrc(primaryFeatured.image_filename, primaryFeatured.image_path, primaryFeatured.content)}
                      alt={primaryFeatured.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] duration-300"
                      sizes="(min-width: 1024px) 768px, (min-width: 640px) 100vw, 100vw"
                      priority
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <span className="inline-block px-2.5 py-1 rounded-full text-xs bg-gray-900 text-white mb-3">Featured</span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                      {primaryFeatured.title}
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base line-clamp-2">{primaryFeatured.excerpt}</p>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="h-64 sm:h-80 bg-white rounded-2xl border shadow flex items-center justify-center text-gray-400">No posts</div>
            )}
          </div>
          <div>
            <div className="bg-white rounded-2xl border shadow p-3 sm:p-4">
              <h3 className="text-lg font-semibold mb-3">
                {otherFeatured.length > 0 ? "Other featured posts" : "Recent posts"}
              </h3>
              <div className="space-y-3">
                {postsToShowInSidebar.length === 0 ? (
                  <div className="text-sm text-gray-500">No posts available</div>
                ) : (
                  postsToShowInSidebar.map((b) => (
                    <Link
                      key={b.id}
                      href={`/blog-section/${b.slug || b.id}`}
                      className="w-full text-left flex gap-3 items-start hover:bg-gray-50 p-2 rounded-lg"
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0 relative">
                        <Image
                          src={getBlogImageSrc(b.image_filename, b.image_path, b.content)}
                          alt={b.title}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-sm sm:text-base text-gray-900 line-clamp-2">{b.title}</p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{new Date(b.publish_date).toLocaleDateString()}</p>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Recent posts */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold dark:text-white">Recent Posts</h3>
          {/* <span className="text-sm text-gray-500">All Posts</span> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {recent.map((b) => (
            <Link key={b.id} href={`/blog-section/${b.slug || b.id}`} className="text-left group block">
              <div className="bg-white rounded-2xl border shadow overflow-hidden">
                <div className="h-40 sm:h-44 overflow-hidden bg-gray-100 relative">
                  <Image
                    src={getBlogImageSrc(b.image_filename, b.image_path, b.content)}
                    alt={b.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] duration-300"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h4 className="font-semibold text-gray-900 line-clamp-2 mb-1 text-base sm:text-lg">{b.title}</h4>
                  <p className="text-sm sm:text-[15px] text-gray-600 line-clamp-2">{b.excerpt}</p>
                  <div className="mt-3 text-xs sm:text-sm text-gray-500">{new Date(b.publish_date).toLocaleDateString()}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>


      {/* Loading & error */}
      {isLoading && (
        <Loading />
      )}
      {error && (
        <div className="fixed bottom-4 right-4 bg-red-600 text-white shadow px-4 py-2 rounded">{error}</div>
      )}
    </div>
  );
};

export default BlogSectionPage;
