"use client";

import React, { FC } from "react";

import circleIcon from "../../images/circleIcon.png";
import sliceIcon from "../../images/sliceIcon.png";
import solution_illustrations from "../../images/solution_illustrations.png";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight, FileText, LightbulbFilament, RocketLaunch } from "phosphor-react";
import Link from "next/link";
import { HandCoins } from "lucide-react";
import SGVTalkToExperts from "@/app/SVGFiles/Talk-To-Experts";

interface SolutionData {
  heading?: string;
  subHeading?: string;
  propertiesData?: {
    icon: string | FC<any>; 
    text: string;
  }[];
}
const SolutionsSection = ({SolutionData}:{SolutionData:SolutionData}) => {
 
  const { heading,subHeading,propertiesData} = SolutionData;
  return (
    <section className="stp-30 sbp-30 relative">
      <Image
        src={circleIcon}
        alt="circle icon"
        className="absolute top-10 left-0 max-xxl:hidden xxl:-left-72 xxxl:-left-40"
      />
      <Image
        src={sliceIcon}
        alt="slice icon"
        className="absolute right-0 sm:right-2 lg:right-10 top-10 xl:top-32 max-md:h-[80px]"
      />
      <div className="container z-10 relative">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center max-xxl:overflow-hidden">
            <div className="max-w-[700px] text-center flex justify-center items-center flex-col">
              {/* <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp">
                Solutions
              </p> */}

              <h1 className="display-4 pt-4 pb-4 lg:pb-6 wow animate__animated animate__fadeInDown dark:text-white">
         {heading}

              </h1>

              <p className="text-bodyText font-bold wow animate__animated animate__fadeInDown dark:text-white">
        {subHeading}
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 stp-15 max-lg:gap-6">
          <div className="col-span-12 lg:col-span-6">
            <div className="flex justify-center items-center  self-stretch">
              {/* <Image
                src={solution_illustrations}
                alt="image"
               
              /> */}
              <div  className="hover:scale-110 md:py-6 flex duration-500 w-full mx-auto items-center justify-center dark:text-white">
              <SGVTalkToExperts />
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-start-8 lg:col-span-5 flex justify-center items-start flex-col">
            {/* <h1 className="heading-1 pb-5">Consolidate Platform of Experts</h1>
            <p className="text-bodyText">
            We Verified CA, CS and Legal Experts ready to streamline your business Opertaions.
            </p> */}
            <div className="flex flex-col justify-between h-full gap-4 lg:gap-6 py-6 lg:py-10 w-full">
              { propertiesData && propertiesData.map((item, index) => (
                <Link key={index} className="group col-span-2 sm:col-span-1 flex justify-start items-center gap-5" href={"/talk-to-expert"}>
                  <item.icon
                    size={40}
                    weight="fill"
                    className="rounded-full border border-strokeColor p-5 bg-softBg w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] text-4xl text-s1 group-hover:text-mainTextColor group-hover:bg-s2 group-hover:border-mainTextColor transition-all duration-500 ease-in-out"
                  />
                  <p className="text-2xl  group-hover:text-s1 duration-500 dark:text-white">
                    {item.text}
                  </p>
                </Link>
              ))
                }
            
            </div>
            {/* <div className="flex justify-start items-start">
              <Link
                href="/Contact"
                className="flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border border-mainTextColor text-mainTextColor group  font-bold"
              >
                Contact Us
                <span className="group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl !leading-[0]">
                <ArrowUpRight/>
                </span>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
