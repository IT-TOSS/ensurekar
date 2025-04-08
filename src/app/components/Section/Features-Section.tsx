"use client";

import React from "react";
import {
  ArrowRight,
  UserGear,
  UserPlus,
  UsersThree,
} from "phosphor-react";
import Link from "next/link";
const FeaturesSection = () => {
  return (
    <section className="bg-softBg1 stp-30 sbp-30">
      <div className="container">
        <div className="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start">
          <div className="max-w-[600px] flex justify-center items-start flex-col">
            <p className="bg-p1 py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp">
              Features
            </p>
            <h1 className="display-4 pt-4 wow animate__animated animate__fadeInDown">
              Perfect solutions for your business
            </h1>
          </div>
          <p className="text-bodyText max-w-[500px]">
          Let your business compliance be managed by our experts While You Focus on Your Core Business.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6 stp-15">
          <div className="col-span-12  sm:col-span-6 lg:col-span-3 wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
          >
            <div className="bg-white min-h-[320px] justify-between p-6 xl:p-8 flex flex-col border border-white group hover:border-mainTextColor duration-700 hover:bg-s2">
              <div className="text-4xl text-s1 pb-6 group-hover:text-mainTextColor duration-500">
                <UsersThree size={36} weight="fill" />
              </div>
              <h4 className="heading-4 pb-5">Legal Compliances </h4>
              <p className="text-bodyText pb-6">
              Ensure your business adheres to all relevant laws and regulations.
              </p>
              <Link
                href="/blogs"
                className="flex justify-start items-center gap-2 font-medium"
              >
                Learn more <ArrowRight size={18} color="#0e160f" />
              </Link>
            </div>
          </div>
          <div className="col-span-12  sm:col-span-6 lg:col-span-3 wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay=".2s"
          >
            <div className="bg-white  min-h-[320px] flex flex-col justify-between p-6 xl:p-8 border border-white group hover:border-mainTextColor duration-700 hover:bg-s2">
              <div className="text-4xl text-s1 pb-6 group-hover:text-mainTextColor duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  viewBox="0 0 256 256"
                >
                  <path d="M128.09,57.38a36,36,0,0,1,55.17-27.82,4,4,0,0,1-.56,7A52.06,52.06,0,0,0,152,84c0,1.17,0,2.34.12,3.49a4,4,0,0,1-6,3.76A36,36,0,0,1,128.09,57.38ZM240,160.61a24.47,24.47,0,0,1-13.6,22l-.44.2-38.83,16.54a6.94,6.94,0,0,1-1.19.4l-64,16A7.93,7.93,0,0,1,120,216H16A16,16,0,0,1,0,200V160a16,16,0,0,1,16-16H44.69l22.62-22.63A31.82,31.82,0,0,1,89.94,112H140a28,28,0,0,1,27.25,34.45l41.84-9.62A24.61,24.61,0,0,1,240,160.61Zm-16,0a8.61,8.61,0,0,0-10.87-8.3l-.31.08-67,15.41a8.32,8.32,0,0,1-1.79.2H112a8,8,0,0,1,0-16h28a12,12,0,0,0,0-24H89.94a15.86,15.86,0,0,0-11.31,4.69L56,155.31V200h63l62.43-15.61,38-16.18A8.56,8.56,0,0,0,224,160.61ZM168,84a36,36,0,1,0,36-36A36,36,0,0,0,168,84Z" />
                </svg>
              </div>
              <h4 className="heading-4 pb-5">Financial Management </h4>
              <p className="text-bodyText pb-6">
              Streamline your financial operations and optimize your tax strategy.
              </p>
              <Link
                href="/blogs"
                className="flex justify-start items-center gap-2 font-medium"
              >
                Learn more <ArrowRight size={18} color="#0e160f" />
              </Link>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay=".4s"
          >
            <div className="bg-white  min-h-[320px]  justify-between p-6 xl:p-8 flex flex-col border border-white group hover:border-mainTextColor duration-700 hover:bg-s2">
              <div className="text-4xl text-s1 pb-6 group-hover:text-mainTextColor duration-500">
                <UserGear size={36} weight="fill" />
              </div>
              <h4 className="heading-4 pb-5">Corporate Secretarial Services </h4>
              <p className="text-bodyText pb-6">
              Manage your company's statutory compliance requirements.
              </p>
              <Link
                href="/blogs"
                className="flex justify-start items-center gap-2 font-medium"
              >
                Learn more <ArrowRight size={18} color="#0e160f" />
              </Link>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay=".6s"
          >
            <div className="bg-white  min-h-[320px]  justify-between p-6 xl:p-8 flex flex-col border border-white group hover:border-mainTextColor duration-700 hover:bg-s2">
              <div className="text-4xl text-s1 pb-6 group-hover:text-mainTextColor duration-500">
                <UserPlus size={40} weight="fill" />
              </div>
              <h4 className="heading-4 pb-5">Startup Guidance </h4>
              <p className="text-bodyText pb-6">
              Receive expert advice and support for your business's growth.
              </p>
              <Link
                href="/blogs"
                className="flex justify-start items-center gap-2 font-medium"
              >
                Learn more <ArrowRight size={18} color="#0e160f" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
