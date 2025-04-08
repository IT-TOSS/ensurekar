"use client";
import React, { useState } from "react";
import {
  AirplaneTilt,
  ArrowRight,
  CaretDown,
  CheckCircle,
  RocketLaunch,
} from "phosphor-react";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const monthlyPrice = [10, 20, 40];
  const yearlyPrice = [120, 240, 480];

  const handlePricingToggle = (value: string) => {
    setIsYearly(value === "yearly");
  };

  return (
    <section className="bg-softBg1 stp-30 sbp-30 overflow-hidden">
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="text-center flex justify-center items-center flex-col">
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center">
                <div className="max-w-[700px] text-center flex justify-center items-center flex-col">
                  <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp">
                    Pricing
                  </p>
                  <h1 className="display-4 pt-4 pb-4 lg:pb-6 wow animate__animated animate__fadeInDown">
                    Our Pricing
                  </h1>
                  <p className="text-bodyText wow animate__animated animate__fadeInUp">
                    At Ensurekar, we believe in providing clear and flexible
                    pricing options tailored to your business needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-mainTextColor mt-8 py-3 px-6 rounded-full relative">
              <div
                className={`absolute top-0 bottom-0 left-0 w-1/2 rounded-full bg-yellow-500 duration-500 ${
                  isYearly ? "translate-x-full" : "translate-x-0"
                }`}
              />
              <div className="relative z-10 flex gap-14 text-white">
                <button
                  className={`duration-500 pricingTabLinks ${
                    !isYearly ? "pricingButtonActive" : ""
                  }`}
                  onClick={() => handlePricingToggle("monthly")}
                >
                  Monthly
                </button>
                <button
                  className={`duration-500 pricingTabLinks ${
                    isYearly ? "pricingButtonActive" : ""
                  }`}
                  onClick={() => handlePricingToggle("yearly")}
                >
                  Yearly
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 stp-15">
          <div
            className="col-span-12 md:col-span-6 lg:col-span-4 p-6 sm:p-10 border border-strokeColor hover:border-mainTextColor flex flex-col justify-start items-start bg-white hover:bg-s2 duration-700 group relative wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
          >
            <div className="p-4 bg-softBg group-hover:bg-mainTextColor duration-500 border group-hover:text-white text-4xl leading-[0] border-strokeColor group-hover:border-mainTextColor rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="transition-colors duration-500 group-hover:fill-white"
                width="40"
                height="40"
                fill="#425745"
                viewBox="0 0 256 256"
              >
                <path d="M128,24a8,8,0,0,0-8,8V88a8,8,0,0,0,8,8,32,32,0,1,1-27.72,16,8,8,0,0,0-2.93-10.93l-48.5-28A8,8,0,0,0,37.92,76,104,104,0,1,0,128,24ZM48.09,91.1,83,111.26A48.09,48.09,0,0,0,80,128c0,1.53.08,3,.22,4.52L41.28,143A88.16,88.16,0,0,1,48.09,91.1Zm-2.67,67.31,39-10.44A48.1,48.1,0,0,0,120,175.32v40.31A88.2,88.2,0,0,1,45.42,158.41ZM136,215.63V175.32a48,48,0,0,0,0-94.65V40.36a88,88,0,0,1,0,175.27Z" />
              </svg>
            </div>

            <h3 className="heading-3 pt-5 pb-4">Basic Plan</h3>
            <p className="text-bodyText pb-8">
              {
                "              Hire employees in 100+ countries where you don't have entities"
              }
            </p>
            <p className="pb-6">
              <span className="display-4">
                ${isYearly ? yearlyPrice[0] : monthlyPrice[0]}
              </span>
              <span className="text-bodyText">
                {isYearly ? "- yearly" : "- monthly"}
              </span>
            </p>
            <ul className="text-bodyText flex flex-col gap-5 pb-8">
              <li className="inline-flex gap-3 justify-start items-center">
                <CheckCircle
                  weight="fill"
                  className="ph-fill ph-check-circle text-p1 group-hover:text-mainTextColor duration-500 leading-[0] flex justify-center items-center text-2xl"
                />
                Accurate and Timely
              </li>
              <li className="inline-flex gap-3">
                <CheckCircle
                  weight="fill"
                  className="ph-fill ph-check-circle text-p1 group-hover:text-mainTextColor duration-500 leading-[0] flex justify-center items-center text-2xl"
                />
                Basic Financial Records
              </li>
              <li className="inline-flex gap-3">
                <CheckCircle
                  weight="fill"
                  className="ph-fill ph-check-circle text-p1 group-hover:text-mainTextColor duration-500 leading-[0] flex justify-center items-center text-2xl"
                />
                Starting at $X per month
              </li>
            </ul>
            <a
              href="./contact.html"
              className="py-4 w-full text-white font-medium bg-s1 rounded-full flex justify-center items-center gap-3 group-hover:bg-mainTextColor"
            >
              Get Started <ArrowRight className="text-xl leading-[0]" />
            </a>
          </div>
          <div
            className="col-span-12 md:col-span-6 lg:col-span-4 p-6 sm:p-10 border border-strokeColor hover:border-mainTextColor flex flex-col justify-start items-start bg-white hover:bg-s2 duration-700 group relative wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay=".2s"
          >
            <div className="absolute top-9 py-1 right-4 uppercase text-[13px] text-white bg-s1 rotate-90 px-4 flex justify-center items-center">
              <p className="pr-2">popular</p>
              <span className="rotate-90 text-7xl !leading-none absolute right-0 pb-16 group-hover:text-s2 duration-700">
                <CaretDown weight="fill" />
              </span>
            </div>

            <div className="p-4 bg-softBg group-hover:bg-mainTextColor duration-500 border group-hover:text-white text-4xl border-strokeColor group-hover:border-mainTextColor rounded-full leading-[0]">
              <AirplaneTilt />
            </div>
            <h3 className="heading-3 pt-5 pb-4">Standard Plan</h3>
            <p className="text-bodyText pb-8">
              All packages come with mention any additional benefits, features,
            </p>
            <p className="pb-6">
              <span className="display-4">
                ${isYearly ? yearlyPrice[1] : monthlyPrice[1]}
              </span>
              <span className="text-bodyText">
                {isYearly ? "- yearly" : "- monthly"}
              </span>
            </p>
            <ul className="text-bodyText flex flex-col gap-5 pb-8">
              <li className="inline-flex gap-3">
                <CheckCircle
                  weight="fill"
                  className="text-p1 group-hover:text-mainTextColor duration-500 leading-[0] flex justify-center items-center text-2xl"
                />
                Payroll Processing
              </li>
              <li className="inline-flex gap-3">
                <CheckCircle
                  weight="fill"
                  className="text-p1 group-hover:text-mainTextColor duration-500 leading-[0] flex justify-center items-center text-2xl"
                />
                Tax Compliance
              </li>
              <li className="inline-flex gap-3">
                <CheckCircle
                  weight="fill"
                  className="text-p1 group-hover:text-mainTextColor duration-500 leading-[0] flex justify-center items-center text-2xl"
                />
                Customizable Reports
              </li>
              <li className="inline-flex gap-3">
                <CheckCircle
                  weight="fill"
                  className="text-p1 group-hover:text-mainTextColor duration-500 leading-[0] flex justify-center items-center text-2xl"
                />
                Starting at $X per month
              </li>
            </ul>
            <a
              href="./contact.html"
              className="py-4 w-full text-white font-medium bg-s1 rounded-full flex justify-center items-center gap-3 group-hover:bg-mainTextColor"
            >
              Get Started <ArrowRight className="text-xl leading-[0]" />
            </a>
          </div>
          <div
            className="col-span-12 md:col-span-6 lg:col-span-4 p-6 sm:p-10 border border-strokeColor hover:border-mainTextColor flex flex-col justify-start items-start bg-white hover:bg-s2 duration-700 group relative wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay=".4s"
          >
            <div className="p-4 bg-softBg group-hover:bg-mainTextColor duration-500 border group-hover:text-white text-4xl border-strokeColor group-hover:border-mainTextColor rounded-full leading-[0]">
              <RocketLaunch />
            </div>
            <h3 className="heading-3 pt-5 pb-4">Premium Plan</h3>
            <p className="text-bodyText pb-8">
              All-in-one solution for all your payroll needs with full
              compliance and more.
            </p>
            <p className="pb-6">
              <span className="display-4">
                ${isYearly ? yearlyPrice[2] : monthlyPrice[2]}
              </span>
              <span className="text-bodyText">
                {isYearly ? "- yearly" : "- monthly"}
              </span>
            </p>
            <ul className="text-bodyText flex flex-col gap-5 pb-8">
              <li className="inline-flex gap-3">
                <CheckCircle
                  weight="fill"
                  className="text-p1 group-hover:text-mainTextColor duration-500 leading-[0] flex justify-center items-center text-2xl"
                />
                Comprehensive Benefits
              </li>
              <li className="inline-flex gap-3">
                <CheckCircle
                  weight="fill"
                  className="text-p1 group-hover:text-mainTextColor duration-500 leading-[0] flex justify-center items-center text-2xl"
                />
                Global Payroll Support
              </li>
              <li className="inline-flex gap-3">
                <CheckCircle
                  weight="fill"
                  className="text-p1 group-hover:text-mainTextColor duration-500 leading-[0] flex justify-center items-center text-2xl"
                />
                Advanced Reporting Tools
              </li>
              <li className="inline-flex gap-3">
                <CheckCircle
                  weight="fill"
                  className="text-p1 group-hover:text-mainTextColor duration-500 leading-[0] flex justify-center items-center text-2xl"
                />
                Starting at $X per month
              </li>
            </ul>
            <a
              href="./contact.html"
              className="py-4 w-full text-white font-medium bg-s1 rounded-full flex justify-center items-center gap-3 group-hover:bg-mainTextColor"
            >
              Get Started <ArrowRight className="text-xl leading-[0]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
