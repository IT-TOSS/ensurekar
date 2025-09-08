"use client";
import React, { Suspense, useState } from "react";
import hero_bg_element1 from "../../images/hero_bg_element1.png";
import hero_bg_element2 from "../../images/hero_bg_element2.png";
import hero_bg_element3 from "../../images/hero_bg_element3.png";
import hero_illus from "../../images/hero_illus.png";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import SearchbarHome from "../Searchbar-Home";

const HeroSection = () => {

  return (
    <section className="bg-repeat stp-15 hero_bg_gradient overflow-hidden">
      <Image
        src={hero_bg_element1}
        alt="image"
        className="absolute top-0 left-0 xxxl:left-36 max-lg:w-[300px] max-xxl:w-[500px] max-md:hidden"
      />
      <Suspense fallback="Loading...">
        <Image
          src={hero_bg_element2}
          alt="image"
          className="absolute top-0 right-0 max-xxl:w-[300px] max-sm:hidden"
        />
      </Suspense>
      <div className="absolute -left-[200px] -bottom-1/2 bg-white blur-[200px] rounded-[1176px] max-w-full lg:w-[1176px] h-[1176px] overflow-hidden"></div>
      <div className="xxl:ml-[calc((100%-1296px)/2)] lg:max-xxl:py-10 max-xxl:container relative z-20 max-lg:pt-15 text-s1 grid grid-cols-12">
        <Suspense fallback="Loading...">
          <Image
            src={hero_bg_element3}
            alt="image"
            className="absolute top-1/3 left-1/3 max-sm:hidden"
          />
        </Suspense>
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center gap-2">
          {/* <p className="uppercase text-base lg:text-xl font-sans px-5 py-3 rounded-full gap-x-5  flex bg-white items-center justify-center">
            <input type="text" placeholder="Try 'GST Registration'" className=" ml-3 w-full focus:outline-none"/> <Search />
          </p> */}

          <div className="max-w-3xl w-full">
            <SearchbarHome />
          </div>

          <div className="display-2">
            File Your Income Tax
            {/* India's Most */}
            <div className="text-s3 inline-flex">Return Starting</div>
            {/* <div className="text-s3 inline-flex"> Preferred Platform</div> */}
            {/* <br />for Startups   */}
            <br />at Just ₹499/-
          </div>
          <p className="max-w-[550px] ">
            {/* One-Stop Solution for all your Legal, Tax, and Finance Needs. */}
            {/* <Link href="/accounting/income-tax-return-filing">
              <button
                className="mt-4 max-w-[550px] text-white font-semibold py-3 px-6 rounded-full transition duration-300 hover:bg-yellow-400"
                style={{ backgroundColor: "rgb(51, 147, 140)" }}
              >
                File Now
              </button>
            </Link> */}
            <div className="flex flex-col items-start justify-start ">
              {/* <h1 className="text-2xl font-bold mb-4">Tax Filing Service</h1> */}
              <Link
                href="/accounting/income-tax-return-filing"
                className=" max-w-[550px] text-white font-semibold py-2 px-12 rounded-full transition duration-300 bg-teal-600 hover:bg-s2 hover:text-black"
              >
                File Now
              </Link>
            </div>


          </p>
          {/* <div className="flex justify-start items-center gap-4 pt-6 lg:pt-8 pb-15">
            <Link
              href="/Contact"
              className="font-medium bg-s2 py-2 lg:py-3 px-4 lg:px-6 rounded-full text-mainTextColor"
            >
              Get Started
            </Link>
            <Link href="/About" className="underline font-medium">
              {" "}
              Learn More{" "}
            </Link>
          </div> */}
        </div>
        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <Suspense fallback="Loading...">
            <Image src={hero_illus} alt="image" />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
