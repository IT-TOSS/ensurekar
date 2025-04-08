"use client";
import { CheckCircle, ShieldCheck } from "phosphor-react";
import React from "react";

const SecuritySolutions = () => {
  return (
    <section className=" w-full stp-15">
      <div className="container bg-transparent flex flex-wrap items-center justify-center rounded-lg  p-5">
        <div className="flex items-center justify-center w-1/5 ">
          <ShieldCheck size={150} color="#e6df0f" weight="fill" />
        </div>
        <div className="flex-1 mx-5">
          <h1 className="text-center mb-6 heading-1 font-bold text-gray-800 dark:text-white">
            Safe, Confidential & Reliable.
          </h1>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="flex justify-start items-start">
              <CheckCircle size={50} color="#e6df0f" weight="fill" />
              <p className="ml-3 text-gray-700 dark:text-white">
                We ensure your data stays safe with professional and discreet
                handling.
              </p>
            </div>
            <div className="flex justify-start items-start">
              <CheckCircle size={50} color="#e6df0f" weight="fill" />
              <p className="ml-3 text-gray-700 dark:text-white">
                Get quick and hassle-free service without compromising on
                quality.
              </p>
            </div>
            <div className="flex justify-start items-start">
              <CheckCircle size={50} color="#e6df0f" weight="fill" />
              <p className="ml-3 text-gray-700 dark:text-white">
                Count on us for reliable and precise results every time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySolutions;
