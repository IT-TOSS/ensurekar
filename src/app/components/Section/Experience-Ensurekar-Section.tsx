"use client"
import React from 'react'
import contact_illus from '../../images/contact_illus.png';
import Image from 'next/image';
import { ArrowUpRight } from 'phosphor-react';
import Link from 'next/link';
import StillConfused from '@/app/SVGFiles/Still-Confused';
const ExperienceEnsurekarSection = () => {
  
  return (
    <div className="bg-p1 pt-15 overflow-hidden">
      <div
        className="max-xxl:container xxl:ml-[calc((100%-1296px)/2)] flex justify-between text-white sm:max-xxl:gap-6 max-lg:flex-col"
      >
        <div
          className="flex flex-col justify-center items-start w-full lg:max-xxl:w-1/2 xxl:max-w-[550px] max-xxl:pb-8 max-xxl:overflow-hidden"
        >
          {/* <p
            className="text-lg font-medium underline wow animate__animated animate__fadeInUp"
          >
            Experience Ensurekar
          </p> */}

          <h1
            className="display-4 pb-6 pt-4 wow animate__animated animate__fadeInDown"
          >
           Still confused where to begin?                     
          </h1>

          <p className="pb-8 wow animate__animated animate__fadeInUp">
          Sit back and Relax, Our Experts are here to support you. </p>

          <Link
            href="/talk-to-expert"
            className="flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border border-mainTextColor text-mainTextColor dark:text-white"
          >
            Talk to Expert 
            <span
              className="group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl"
            >
                <ArrowUpRight weight="bold"/>
            </span>
          </Link>
        </div>
        <div
          className="w-full lg:max-xxl:w-1/2 self-stretch flex justify-center max-xxl:items-center lg:py-5 wow animate__animated animate__fadeInUp"
        >
          {/* <Image
            src={contact_illus}
            alt="image"
            className="object-cover"
          /> */}
          <StillConfused />
        </div>
      </div>
    </div>
    // <div className="flex items-center bg-yellow-50 border border-yellow-200 shadow-md rounded-lg p-4">
    //   {/* Icon Section */}
    //   <div className="flex-shrink-0 bg-yellow-100 p-4 rounded-full shadow">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="h-8 w-8 text-yellow-500"
    //       viewBox="0 0 24 24"
    //       fill="currentColor"
    //     >
    //       <path d="M12 0C6.48 0 2 4.48 2 10c0 6.06 8 13 10 14 2-1 10-7.94 10-14 0-5.52-4.48-10-10-10zm0 18.9c-2.41-.83-8-6.43-8-8.9 0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.47-5.59 8.07-8 8.9z" />
    //       <circle cx="12" cy="10" r="3" />
    //     </svg>
    //   </div>

    //   {/* Text Section */}
    //   <div className="ml-4">
    //     <h3 className="text-lg font-bold text-gray-800">
    //       Security, Confidentiality & Results
    //     </h3>
    //     <ul className="mt-2 space-y-2">
    //       <li className="flex items-center">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5 text-yellow-500 mr-2"
    //           viewBox="0 0 20 20"
    //           fill="currentColor"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
    //             clipRule="evenodd"
    //           />
    //         </svg>
    //         <span className="text-gray-700">
    //           Operate with discretion and professionalism.
    //         </span>
    //       </li>
    //       <li className="flex items-center">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5 text-yellow-500 mr-2"
    //           viewBox="0 0 20 20"
    //           fill="currentColor"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
    //             clipRule="evenodd"
    //           />
    //         </svg>
    //         <span className="text-gray-700">
    //           Ensure timely delivery with quick turnaround.
    //         </span>
    //       </li>
    //       <li className="flex items-center">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5 text-yellow-500 mr-2"
    //           viewBox="0 0 20 20"
    //           fill="currentColor"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
    //             clipRule="evenodd"
    //           />
    //         </svg>
    //         <span className="text-gray-700">
    //           Deliver accurate and reliable results consistently.
    //         </span>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  )
}

export default ExperienceEnsurekarSection
