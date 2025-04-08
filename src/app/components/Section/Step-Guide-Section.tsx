"use client";

import React from "react";
import stepArrow1 from "../../images/stepArrow1.png";
import stepArrow2 from "../../images/stepArrow2.png";
import Image from "next/image";
import { FilePlus, User } from "phosphor-react";

const OurStorySection = () => {
  return (
    <section className="stp-30 sbp-30">
    <div className="container">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center max-xxl:overflow-hidden">
          <div
            className="max-w-[700px] text-center flex justify-center items-center flex-col"
          >
            <p
              className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp"
            >
              How it works
            </p>

            <h1
              className="display-4 pt-4 pb-4 lg:pb-6 wow animate__animated animate__fadeInDown"
            >
              A Step-by-Step Guide to Our Platform
            </h1>

            <p className="text-bodyText wow animate__animated animate__fadeInUp">
              Explore our platform with ease! Sign up, select your industry,
              and seamlessly integrate our tailored payment solutions.
            </p>
          </div>
        </div>
      </div>

      <div
        className="flex justify-between items-center gap-6 md:gap-4 lg:gap-6 stp-15 relative max-md:flex-col"
      >
        <Image
          src={stepArrow1}
          alt="image"
          className="absolute top-28 right-[22%] max-xxl:right-[23%] max-xxl:top-24 max-xxl:w-[200px] max-lg:right-[25%] max-lg:w-[100px] max-md:hidden"
        />
        <Image
          src={stepArrow2}
          alt="image"
          className="absolute top-16 left-[21%] max-xxl:top-20 max-xxl:left-[23%] max-xxl:w-[200px] max-lg:left-[25%] max-lg:w-[100px] max-md:hidden"
        />

        <div
          className="flex justify-center items-center text-center flex-col max-w-[350px]"
        >
          <div
            className="text-s1 bg-softBg border border-strokeColor rounded-full p-6 lg:p-7 text-3xl lg:text-5xl"
          >
            <FilePlus  weight="fill" />
          </div>
          <h4 className="heading-4 pt-8 pb-6">Create An Account</h4>
          <p className="text-bodyText">
            Join our platform effortlessly! Streamlined user registration with
            secure verification.
          </p>
        </div>
        <div
          className="flex justify-center items-center text-center flex-col max-w-[350px]"
        >
          <div
            className="text-s1 bg-softBg border border-strokeColor rounded-full p-6 lg:p-7 text-3xl lg:text-5xl"
          >
            <User weight="fill" />
          </div>
          <h4 className="heading-4 pt-8 pb-6">Add Your Employees</h4>
          <p className="text-bodyText">
            Join our platform effortlessly! Streamlined user registration with
            secure verification.
          </p>
        </div>
        <div
          className="flex justify-center items-center text-center flex-col max-w-[350px]"
        >
          <div
            className="text-s1 bg-softBg border border-strokeColor rounded-full p-3 lg:p-7 text-3xl lg:text-5xl"
          >
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  viewBox="0 0 256 256"
                >
                  <path d="M128.09,57.38a36,36,0,0,1,55.17-27.82,4,4,0,0,1-.56,7A52.06,52.06,0,0,0,152,84c0,1.17,0,2.34.12,3.49a4,4,0,0,1-6,3.76A36,36,0,0,1,128.09,57.38ZM240,160.61a24.47,24.47,0,0,1-13.6,22l-.44.2-38.83,16.54a6.94,6.94,0,0,1-1.19.4l-64,16A7.93,7.93,0,0,1,120,216H16A16,16,0,0,1,0,200V160a16,16,0,0,1,16-16H44.69l22.62-22.63A31.82,31.82,0,0,1,89.94,112H140a28,28,0,0,1,27.25,34.45l41.84-9.62A24.61,24.61,0,0,1,240,160.61Zm-16,0a8.61,8.61,0,0,0-10.87-8.3l-.31.08-67,15.41a8.32,8.32,0,0,1-1.79.2H112a8,8,0,0,1,0-16h28a12,12,0,0,0,0-24H89.94a15.86,15.86,0,0,0-11.31,4.69L56,155.31V200h63l62.43-15.61,38-16.18A8.56,8.56,0,0,0,224,160.61ZM168,84a36,36,0,1,0,36-36A36,36,0,0,0,168,84Z" />
                </svg>

          </div>
          <h4 className="heading-4 pt-8 pb-6">Run Your First Payroll</h4>
          <p className="text-bodyText">
            Join our platform effortlessly! Streamlined user registration with
            secure verification.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default OurStorySection;  



