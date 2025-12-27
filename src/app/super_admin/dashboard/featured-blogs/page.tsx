"use client";

import React, { useState, useEffect } from "react";
import { Check, X, Loader2, Save, RefreshCw } from "lucide-react";
import Image from "next/image";
import blogofensureKar from "@/app/images/blogofensureKar.png";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image_filename?: string;
  image_path?: string;
  publish_date: string;
  tags: string[];
  status: string;
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
  return blogofensureKar.src;
};

const FeaturedBlogsManagement = () => {
  const [allBlogs, setAllBlogs] = useState<BlogPost[]>([]);
  const [featuredBlogIds, setFeaturedBlogIds] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("superAdminAuth");
      
      // Fetch all published blogs
      const blogsResponse = await fetch("/api/blog", {
        headers: {
          "X-API-Key": token || "",
        },
      });

      if (blogsResponse.ok) {
        const blogsData = await blogsResponse.json();
        let list: any[] = [];
        
        if (Array.isArray(blogsData)) list = blogsData;
        else if (blogsData?.data && Array.isArray(blogsData.data)) list = blogsData.data;
        
        const published = list
          .filter((b: any) => b.status === "published")
          .map((b: any) => ({
            ...b,
            tags: parseTags(b.tags),
          }))
          .sort((a: any, b: any) => 
            new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime()
          );
        
        setAllBlogs(published);
      }

      // Fetch current featured blogs
      const featuredResponse = await fetch("/api/featured-blogs");
      if (featuredResponse.ok) {
        const featuredData = await featuredResponse.json();
        if (featuredData.status === "success" && featuredData.data) {
          const ids = featuredData.data.map((b: BlogPost) => b.id);
          setFeaturedBlogIds(ids);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setMessage({ type: "error", text: "Failed to load blogs" });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleBlogSelection = (blogId: number) => {
    setFeaturedBlogIds((prev) => {
      if (prev.includes(blogId)) {
        // Remove if already selected
        return prev.filter((id) => id !== blogId);
      } else {
        // Add if not selected, but max 3
        if (prev.length >= 3) {
          setMessage({ 
            type: "error", 
            text: "You can only select maximum 3 blogs for homepage" 
          });
          return prev;
        }
        return [...prev, blogId];
      }
    });
  };

  const handleSave = async () => {
    if (featuredBlogIds.length === 0) {
      setMessage({ type: "error", text: "Please select at least one blog" });
      return;
    }

    setIsSaving(true);
    setMessage(null);

    try {
      const token = localStorage.getItem("superAdminAuth");
      const response = await fetch("/api/featured-blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": token || "",
        },
        body: JSON.stringify({ blogIds: featuredBlogIds }),
      });

      const data = await response.json();

      if (response.ok && data.status === "success") {
        setMessage({ 
          type: "success", 
          text: "Featured blogs updated successfully!" 
        });
        setTimeout(() => setMessage(null), 3000);
      } else {
        setMessage({ 
          type: "error", 
          text: data.error || "Failed to save featured blogs" 
        });
      }
    } catch (error) {
      console.error("Error saving featured blogs:", error);
      setMessage({ type: "error", text: "Failed to save featured blogs" });
    } finally {
      setIsSaving(false);
    }
  };

  const handleClear = () => {
    setFeaturedBlogIds([]);
    setMessage(null);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-teal-600" />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Manage Featured Blogs for Homepage
        </h1>
        <p className="text-gray-600">
          Select up to 3 blogs to display on the homepage Blog Section. Only published blogs are available.
        </p>
      </div>

      {message && (
        <div
          className={`mb-6 p-4 rounded-lg flex items-center gap-2 ${
            message.type === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {message.type === "success" ? (
            <Check className="w-5 h-5" />
          ) : (
            <X className="w-5 h-5" />
          )}
          <span>{message.text}</span>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Selected Blogs ({featuredBlogIds.length}/3)
          </h2>
          <div className="flex gap-2">
            <button
              onClick={handleClear}
              className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            >
              Clear All
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving || featuredBlogIds.length === 0}
              className="px-4 py-2 text-sm bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition"
            >
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Save Featured Blogs
                </>
              )}
            </button>
          </div>
        </div>

        {featuredBlogIds.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredBlogIds.map((id, index) => {
              const blog = allBlogs.find((b) => b.id === id);
              if (!blog) return null;
              return (
                <div
                  key={id}
                  className="border-2 border-teal-500 rounded-lg p-4 bg-teal-50"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm font-semibold text-teal-700">
                      Position {index + 1}
                    </span>
                    <button
                      onClick={() => toggleBlogSelection(id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {blog.excerpt}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            No blogs selected. Select blogs from the list below.
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Available Published Blogs ({allBlogs.length})
        </h2>
        
        {allBlogs.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No published blogs available.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allBlogs.map((blog) => {
              const isSelected = featuredBlogIds.includes(blog.id);
              const isDisabled = !isSelected && featuredBlogIds.length >= 3;
              
              return (
                <div
                  key={blog.id}
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    isSelected
                      ? "border-teal-500 bg-teal-50"
                      : isDisabled
                      ? "border-gray-200 opacity-50 cursor-not-allowed bg-gray-100"
                      : "border-black bg-white hover:border-teal-300"
                  }`}
                  onClick={() => !isDisabled && toggleBlogSelection(blog.id)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="relative w-full h-40 mb-3 rounded overflow-hidden bg-gray-100">
                        <Image
                          src={getBlogImageSrc(blog.image_filename, blog.image_path)}
                          alt={blog.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>{new Date(blog.publish_date).toLocaleDateString()}</span>
                        {blog.tags && blog.tags.length > 0 && (
                          <>
                            <span>•</span>
                            <span>{blog.tags[0]}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="ml-2">
                      {isSelected ? (
                        <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedBlogsManagement;

