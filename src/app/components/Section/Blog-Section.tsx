"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import blogImg1 from "../../images/payrollProcess.jpg";
import blogImg2 from "../../images/AccountingTechnology.png";
import blogImg3 from "../../images/mistakesinHome.png";
import blogofensureKar from "../../images/blogofensureKar.png";
import { ArrowRight, ArrowUpRight } from 'phosphor-react';
import ScrollTotop from '../Scroll-To-top';

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
  return blogofensureKar.src; // fallback
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });
};

const BlogSection = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedBlogs = async () => {
      try {
        // First try to get featured blogs
        const featuredResponse = await fetch('/api/featured-blogs');
        const featuredData = await featuredResponse.json();
        
        if (featuredData.status === 'success' && featuredData.data && featuredData.data.length > 0) {
          // Use featured blogs
          const blogsWithTags = featuredData.data.map((b: any) => ({
            ...b,
            tags: parseTags(b.tags),
          }));
          setBlogs(blogsWithTags.slice(0, 3));
        } else {
          // Fallback to recent 3 published blogs
          const allBlogsResponse = await fetch('/api/blog');
          const allBlogsData = await allBlogsResponse.json();
          
          let list: any[] = [];
          if (Array.isArray(allBlogsData)) list = allBlogsData;
          else if (allBlogsData?.data && Array.isArray(allBlogsData.data)) list = allBlogsData.data;
          
          const published = list
            .filter((b: any) => b.status === 'published')
            .sort((a: any, b: any) => 
              new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime()
            )
            .slice(0, 3)
            .map((b: any) => ({
              ...b,
              tags: parseTags(b.tags),
            }));
          
          setBlogs(published);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        // Fallback to empty array or default blogs
        setBlogs([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeaturedBlogs();
  }, []);

  const displayBlogs = blogs.length > 0 ? blogs : [
    { id: 1, title: "Key Considerations in Choosing Payroll Processing Services", slug: "payroll-processing-services", excerpt: "Explore essential factors to consider when selecting payroll processing services. From compliance expertise", publish_date: "2024-01-15", tags: ["Taxation"], image_path: blogImg1.src, image_filename: "", status: "published" },
    { id: 2, title: "The Role of Technology in Modern Accounting Practices", slug: "technology-accounting-practices", excerpt: "Discover how technology is reshaping modern accounting practices. From automation to cloud-based solutions,", publish_date: "2024-01-17", tags: ["Processing"], image_path: blogImg2.src, image_filename: "", status: "published" },
    { id: 3, title: "Common Mistakes in Accounting and How to Avoid Them", slug: "common-accounting-mistakes", excerpt: "Identify and prevent common accounting mistakes with our insightful guide. Learn practical strategies.", publish_date: "2024-01-24", tags: ["Taxation"], image_path: blogImg3.src, image_filename: "", status: "published" },
  ];

  return (
    <section className="stp-30 sbp-30 overflow-hidden">
    <div className="container">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-8">
        <div className="max-w-[600px] flex flex-col justify-start items-start">
          <p className="bg-p1 py-3 px-5 rounded-full text-white inline-block">News & Blog</p>
          <h1 className="display-4 pt-4 pb-6 dark:text-white">Stay updates with Ensurekar News</h1>
          <p className="text-bodyText dark:text-white">
          Stay informed and empowered with our latest articles on Startup, legal, Taxes, and Financial Management.
          </p>
        </div>
        <div className="max-lg:hidden flex-shrink-0">
          <Link
            href="/blog-section"
            className="flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border border-mainTextColor text-mainTextColor group font-medium hover:bg-mainTextColor hover:text-white transition-colors"
          >
            See All Blog
            <span
              className="group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl"
            >
                <ArrowUpRight weight="bold"/>
            </span>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stp-15">
        {isLoading ? (
          <div className="col-span-full text-center py-10 dark:text-white">Loading blogs...</div>
        ) : displayBlogs.length > 0 ? (
          displayBlogs.map((blog, index) => (
            <div
              key={blog.id}
              className="text-bodyText group wow animate__animated animate__fadeInUp h-full flex flex-col"
              data-wow-duration="1.3s"
              data-wow-delay={`${index * 0.2}s`}
            >
              <Link href={`/blog-section/${blog.slug || blog.id}`} className="h-full flex flex-col">
                <div className="flex flex-col justify-start items-start cursor-pointer h-full w-full">
                  <div className="flex justify-between items-center w-full pb-5 dark:text-white gap-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap flex-shrink-0">{formatDate(blog.publish_date)}</p>
                    <p className="border border-strokeColor rounded-full group-hover:bg-s2 group-hover:border-mainTextColor group-hover:text-mainTextColor duration-500 py-1 lg:py-2 px-3 lg:px-4 text-sm whitespace-nowrap flex-shrink-0 truncate max-w-[150px]">
                      {blog.tags && blog.tags.length > 0 ? blog.tags[0] : 'Blog'}
                    </p>
                  </div>
                  <div className="flex justify-center items-center w-full overflow-hidden rounded-lg mb-4">
                    <Image
                      src={blog.image_path || getBlogImageSrc(blog.image_filename, blog.image_path)}
                      alt={blog.title}
                      width={400}
                      height={250}
                      className="object-cover hover:scale-110 duration-500 w-full h-[250px] pb-0"
                      style={{ paddingBottom: '0rem' }}
                    />
                  </div>
                  <h4 className="heading-4 text-mainTextColor pb-3 pt-2 dark:text-white line-clamp-3 overflow-hidden">
                    {blog.title}
                  </h4>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10 dark:text-white">No blogs available</div>
        )}
      </div>
      <div className="lg:hidden flex justify-center items-center mt-8">
        <Link
          href="/blog-section"
          className="flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border border-mainTextColor text-mainTextColor group font-medium dark:text-white hover:bg-mainTextColor hover:text-white transition-colors"
        >
          See All Blog
          <span
            className="group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl"
          >
         <ArrowUpRight weight='bold'/>
          </span>
        </Link>
      </div>
    </div>
    <ScrollTotop/>
  </section>

  )
}

export default BlogSection
