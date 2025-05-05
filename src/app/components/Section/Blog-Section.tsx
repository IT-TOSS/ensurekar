"use client"

import React from 'react'
import Image from 'next/image';
import blogImg1 from "../../images/payrollProcess.jpg";
import blogImg2 from "../../images/AccountingTechnology.png";
import blogImg3 from "../../images/mistakesinHome.png";
import { ArrowRight, ArrowUpRight } from 'phosphor-react';
import ScrollTotop from '../Scroll-To-top';

const BlogSection = () => {
  return (
    <section className="stp-30 sbp-30 overflow-hidden">
    <div className="container">
      <div className="flex justify-between items-end">
        <div className="max-w-[600px] flex justify-end items-start flex-col ">
          <p className="bg-p1 py-3 px-5 rounded-full text-white">News & Blog</p>
          <h1 className="display-4 pt-4 pb-6 dark:text-white">Stay updates with Ensurekar News</h1>
          <p className="text-  dark:text-white">
          Stay informed and empowered with our latest articles on Startup, legal, Taxes, and Financial Management.
          </p>
        </div>
        <div className="max-lg:hidden">
          <a
            href="./blog-details.html"
            className="flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border border-mainTextColor text-mainTextColor group font-medium "
          >
            See All Blog
            <span
              className="group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl"
            >
                <ArrowUpRight weight="bold"/>
            </span>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 stp-15">
        <div
          className="col-span-12 sm:col-span-6 md:col-span-4 text-bodyText group wow animate__animated animate__fadeInUp "
          data-wow-duration="1.3s"
        >
          <div className="flex flex-col justify-start items-start">
            <div className="flex justify-between items-center w-full pb-5 dark:text-white">
              <p>Jan 15, 2024</p>
              <p
                className="border border-strokeColor rounded-full group-hover:bg-s2 group-hover:border-mainTextColor group-hover:text-mainTextColor duration-500 py-1 lg:py-3 px-3 lg:px-5"
              >
                Taxation
              </p>
            </div>
            <div
              className="flex justify-center items-center w-full overflow-hidden"
            >
              <Image
                src={blogImg1}
                alt="image"
                className="object-cover hover:scale-110 duration-500"
              />
            </div>
            <h4 className="heading-4 text-mainTextColor pb-4 pt-6 dark:text-white">
              Key Considerations in Choosing Payroll Processing Services
            </h4>
            <p className="pb-6 dark:text-white">
              Explore essential factors to consider when selecting payroll
              processing services. From compliance expertise
            </p>
            {/* <a
              href="./blog-details.html"
              className="text-mainTextColor flex justify-start items-center gap-3 border-b border-mainTextColor hover:border-s2 duration-500 dark:text-white"
            >
              Read more
              <ArrowRight/>
            </a> */}
          </div>
        </div>
        <div
          className="col-span-12 sm:col-span-6 md:col-span-4 text-bodyText group wow animate__animated animate__fadeInUp"
          data-wow-duration="1.3s"
          data-wow-delay=".2s"
        >
          <div className="flex flex-col justify-start items-start">
            <div className="flex justify-between items-center w-full pb-5 dark:text-white">
              <p>Jan 17, 2024</p>
              <p
                className="border border-strokeColor rounded-full group-hover:bg-s2 group-hover:border-mainTextColor group-hover:text-mainTextColor duration-500 py-1 lg:py-3 px-3 lg:px-5"
              >
                Processing
              </p>
            </div>
            <div
              className="flex justify-center items-center w-full overflow-hidden"
            >
              <Image
                src={blogImg2}
                alt="image"
                className="object-cover hover:scale-110 duration-500"
              />
            </div>
            <h4 className="heading-4 text-mainTextColor pb-4 pt-6 dark:text-white">
              The Role of Technology in Modern Accounting Practices
            </h4>
            <p className="pb-6 dark:text-white">
              Discover how technology is reshaping modern accounting
              practices. From automation to cloud-based solutions,
            </p>
            {/* <a
              href="./blog-details.html"
              className="text-mainTextColor flex justify-start items-center gap-3 border-b border-mainTextColor hover:border-s2 duration-500 dark:text-white"
            >
              Read more
              <ArrowRight/>
            </a> */}
          </div>
        </div>
        <div
          className="col-span-12 sm:col-span-6 md:col-span-4 text-bodyText group wow animate__animated animate__fadeInUp"
          data-wow-duration="1.3s"
          data-wow-delay=".4s"
        >
          <div className="flex flex-col justify-start items-start">
            <div className="flex justify-between items-center w-full pb-5 dark:text-white">
              <p>Jan 24, 2024</p>
              <p
                className="border border-strokeColor rounded-full group-hover:bg-s2 group-hover:border-mainTextColor group-hover:text-mainTextColor duration-500 py-1 lg:py-3 px-3 lg:px-5"
              >
                Taxation
              </p>
            </div>
            <div
              className="flex justify-center items-center w-full overflow-hidden"
            >
              <Image
                src={blogImg3}
                alt="image"
                className="object-cover hover:scale-110 duration-500"
              />
            </div>
            <h4 className="heading-4 text-mainTextColor pb-4 pt-6 dark:text-white">
              Common Mistakes in Accounting and How to Avoid Them
            </h4>
            <p className="pb-6 dark:text-white">
              Identify and prevent common accounting mistakes with our
              insightful guide. Learn practical strategies.
            </p>
            {/* <a
              href="./blog-details.html"
              className="text-mainTextColor flex justify-start items-center gap-3 border-b border-mainTextColor hover:border-s2 duration-500 dark:text-white"
            >
              Read more
              <ArrowRight/>
            </a> */}
          </div>
        </div>
      </div>
      <div className="lg:hidden flex justify-center items-center stp-15">
        <a
          href=""
          className="flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border border-mainTextColor text-mainTextColor group font-medium dark:text-white"
        >
          See All Blog
          <span
            className="group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl"
          >
         <ArrowUpRight weight='bold'/>
          </span>
        </a>
      </div>
    </div>
    <ScrollTotop/>
  </section>

  )
}

export default BlogSection
