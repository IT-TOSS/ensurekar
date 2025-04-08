"use client"

import Image from 'next/image';
import React, { FormEvent } from 'react';
import sliceIcon from '../../images/sliceIcon.png'; // Background image

const CTASection = () => {
   const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
   }

  return (
    <section
      className="relative after:absolute after:bg-mainTextColor after:bottom-0 after:right-0 after:left-0 after:h-1/2 overflow-hidden"
    >
      <div
        className="container bg-p1 py-12 sm:py-20 px-4 sm:px-10 md:px-20 lg:px-40 relative z-10 wow animate__animated animate__fadeInUp"
      >
        <Image
          src={sliceIcon}
          alt="image"
          className="absolute -top-4 sm:-top-6 lg:top-0 right-0 h-[60px] sm:h-[80px] lg:h-[120px] -rotate-90"
        />
        <p className="display-3 text-center text-white !leading-[130%]">
        Make Ensurekar Part of your Business and Get updated
        </p>
        <form onSubmit={handleSubmit} className="pt-6 sm:pt-10 relative">
          <div
            className="flex justify-center items-center gap-3 max-[500px]:flex-col"
          >
            <input
              type="text"
              placeholder="Enter Your Email"
              className="border border-mainTextColor outline-none bg-white py-3 sm:py-4 px-4 md:px-8 max-[500px]:w-full lg:w-2/4"
            />
            <button
              className="border border-mainTextColor bg-s2 py-3 sm:py-4 px-4 md:px-8 font-medium"
            >
              Subscribe Now
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default CTASection;
