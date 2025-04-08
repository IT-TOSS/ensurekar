"use client";
import React from 'react'
import page404img from './images/404.png'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'phosphor-react'
const notfound = () => {
  return (
    <div
    className=" pt-24 lg:stp-30 sbp-30 container flex flex-col justify-center items-center stp-30 h-screen"
  >
    <div className="
">
      <Image src={page404img} alt="image" />
    </div>
    <h1 className="
display-4">Page Not Found</h1>
    <p className="
text-lg text-bodyText text-center py-8">
      We’re sorry, the page you requested could not be found please go back
      to the homepage
    </p>
    <Link
      href="/"
      className="
flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border border-mainTextColor text-mainTextColor group font-medium"
    >
      Go Home
      <span
        className="
group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl"
      >
        
<ArrowUpRight weight='bold'/>
      </span>
    </Link>
  </div>
  )
}

export default notfound;
