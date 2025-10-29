import React from "react";
import Image from "next/image";
import Link from "next/link";
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
  return ensureLogo as unknown as string;
};

async function fetchBlogs(): Promise<BlogPost[]> {
  try {
    const response = await fetch(
      "https://edueye.co.in/ensurekar/existing-site/create_get_update_blog_posts.php",
      {
        headers: {
          "X-API-Key": process.env.ADMIN_API_KEY || "",
        },
        cache: "no-store", // Use "force-cache" for static generation or "no-store" for dynamic
      }
    );

    if (!response.ok) return [];

    const data = await response.json();
    let list: any[] = [];
    
    if (Array.isArray(data)) list = data;
    else if (data?.data && Array.isArray(data.data)) list = data.data;
    else if (data?.blogs && Array.isArray(data.blogs)) list = data.blogs;
    else if (data?.result && Array.isArray(data.result)) list = data.result;

    return list.map((b: any) => ({
      ...b,
      tags: parseTags(b.tags),
    }));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

const BlogSectionPage = async () => {
  const blogs = await fetchBlogs();

  const featured = blogs.filter(b => b.featured);
  const primaryFeatured = featured[0] || blogs[0];
  const otherFeatured = featured.filter(b => b.id !== primaryFeatured?.id).slice(0, 4);
  const recent = blogs
    .slice()
    .sort((a, b) => new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime())
    .slice(0, 9);

  return (
    <div className="min-h-screen bg-[#eafaf8] dark:bg-black py-8 sm:py-10 md:py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Featured section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className="lg:col-span-2">
            {primaryFeatured ? (
              <Link
                href={`/blog-section/${primaryFeatured.slug || primaryFeatured.id}`}
                className="block w-full text-left group"
              >
                <div className="overflow-hidden rounded-2xl bg-white shadow border">
                  <div className="relative w-full h-52 sm:h-72 md:h-80">
                    <Image
                      src={getBlogImageSrc(primaryFeatured.image_filename, primaryFeatured.image_path)}
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
              <h3 className="text-lg font-semibold mb-3">Other featured posts</h3>
              <div className="space-y-3">
                {otherFeatured.length === 0 && (
                  <div className="text-sm text-gray-500">No more featured posts</div>
                )}
                {otherFeatured.map((b) => (
                  <Link
                    key={b.id}
                    href={`/blog-section/${b.slug || b.id}`}
                    className="w-full text-left flex gap-3 items-start hover:bg-gray-50 p-2 rounded-lg"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0 relative">
                      <Image
                        src={getBlogImageSrc(b.image_filename, b.image_path)}
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
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent posts */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Recent Posts</h3>
          <span className="text-sm text-gray-500">All Posts</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {recent.map((b) => (
            <Link key={b.id} href={`/blog-section/${b.slug || b.id}`} className="text-left group block">
              <div className="bg-white rounded-2xl border shadow overflow-hidden">
                <div className="h-40 sm:h-44 overflow-hidden bg-gray-100 relative">
                  <Image
                    src={getBlogImageSrc(b.image_filename, b.image_path)}
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
    </div>
  );
};

export default BlogSectionPage;
