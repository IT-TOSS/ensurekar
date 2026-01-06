"use client";

import React from "react";
import Image from "next/image";
import logo_white from "../images/ensure_logo.png";
import {
  EnvelopeSimpleOpen,
  FacebookLogo,
  PaperPlaneTilt,
  PhoneCall,
  PinterestLogo,
  RedditLogo,
  YoutubeLogo,
} from "phosphor-react";
import Link from "next/link";
import { s } from "framer-motion/client";
const footer = () => {
  const footerData = {
    paragraph: [
      "Your Trusted Partner in Finance, Tax and Legal.",
      "We delivery Precision, Efficiency, and tailored Services.",
    ],
    socialMedia: [
      {
        title: "Facebook",
        link: "https://www.facebook.com/ensurekar?mibextid=rS40aB7S9Ucbxw6v",
        icon: <FacebookLogo className="leading-[0] text-2xl" />,
      },
      // {
      //   title: "Reddit",
      //   link: "/Reddit",
      //   icon: <RedditLogo className="leading-[0] text-2xl" />,
      // },
      {
        title: "Youtube",
        link: "https://www.youtube.com/@ensurekar",
        icon: <YoutubeLogo className="leading-[0] text-2xl" />,
      },
      {
        title: "Pinterest",
        link: "https://www.linkedin.com/company/ensurekar/posts/?feedView=all",
        icon: <PinterestLogo className="leading-[0] text-2xl" />,
      },
    ],
    resources: [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "Talk to Expert",
        link: "/talk-to-expert",
      },
      // {
      //   title: "Partner with us",
      //   link: "/partner-with-us",
      // },
      // {
      //   title: "Career with us",
      //   link: "/career-in-ensurekar",
      // },
      {
        title: "About Us",
        link: "/About",
      },
      {
        title: "Contact Us",
        link: "/Contact",
      },
      {
        title: "Login",
        link: "/Login",
      },
    ],
    services: [
      {
        title: "Private Limited Registration",
        link: "/private-limited-company-registration",
      },
      {
        title: "LLP Registration",
        link: "/limited-liability-partnership-registration",
      },
      {
        title: "Udyam/ MSME Registration",
        link: "/msme-registration",
      },
      {
        title: "Trade Mark Registration",
        link: "/trade-mark-ip/trademark-registration",
      },
      {
        title: "Startup India Registration",
        link: "/startup-india/registration",
      },
      {
        title: "Income Tax",
        link: "/accounting/income-tax-assessment",
      },
      {
        title: "GST Registration",
        link: "/gst-and-other-indirect-tax/gst-registration",
      },
      {
        title: "Annual Compliance",
        link: "/mca-compliances",
      },
    ],
    contactInformation: {
      email: "infoensurekar@gmail.com",
      contactInfo: ["+91 7470756060", "+91 8878440844"],
      address: "2360, Tiwari Sadan, Wright Town, Jabalpur (M.P)",
    },
  };
  const { paragraph, socialMedia, resources, services, contactInformation } =
    footerData;
  return (
    <footer className="bg-mainTextColor text-white/60">
      <div className="container grid grid-cols-12 stp-30 sbp-30 gap-6 max-xxl:pr-4">
        <div className="col-span-12 min-[450px]:col-span-6 lg:col-span-3 flex flex-col gap-6 lg:gap-8">
          <Link href="/">
            <Image src={logo_white} alt="image" />
          </Link>
          <div>
            {paragraph.map((data, index) => (
              <p key={index} className="mb-2">
                {data}
              </p>
            ))}
          </div>
          <ul className="flex justify-start items-center gap-2">
            {socialMedia.map((data, index) => (
              <li key={index} className="  ">
                <Link
                  className="bg-s1/50 rounded-full w-[40px] h-[40px] hover:bg-s1 duration-500 hover:-translate-y-1 text-white flex justify-center items-center"
                  href={data.link}
                >
                  {data.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="xl:pl-30 col-span-12 min-[400px]:col-span-6 lg:col-span-3">
          <h4 className="heading-4 mb-6 pb-2 relative text-white after:absolute after:w-[20%] after:h-[2px] after:bottom-0 after:left-0 after:bg-p1 hover:after:w-[40%] after:duration-500">
            Resources
          </h4>

          <ul className="flex flex-col gap-4 md:gap-5">
            {resources.map((data, index) => (
              <li key={index}>
                <Link
                  href={data.link}
                  className="flex justify-start items-center gap-2 hover:text-white hover:translate-x-2 duration-500"
                >
                  {data.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="xl:pl-30 col-span-12 min-[400px]:col-span-6 lg:col-span-3">
          <h4 className="heading-4 mb-6 pb-2 relative text-white after:absolute after:w-[20%] after:h-[2px] after:bottom-0 after:left-0 after:bg-p1 hover:after:w-[40%] after:duration-500">
            Services
          </h4>
          <ul className="flex flex-col gap-4 md:gap-5">
            {services.map((data, index) => (
              <li key={index}>
                <Link
                  href={data.link}
                  className="flex justify-start items-center gap-2 hover:text-white hover:translate-x-2 duration-500"
                >
                  {data.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 min-[450px]:col-span-6 lg:col-span-3 xl:pl-30">
          <h4 className="heading-4 mb-4 md:mb-6 pb-2 relative after:absolute after:w-[20%] after:h-[2px] after:bottom-0 after:left-0 after:bg-p1 hover:after:w-[40%] after:duration-500 text-white">
            Get In Touch
          </h4>
          <ul className="flex flex-col gap-4 md:gap-3">
            <li>
              <a
                href={`mailto:${contactInformation.email}`}
                className="flex justify-start items-center gap-2 hover:text-white hover:translate-x-2 duration-500"
              >
                <span className="text-2xl pt-2 ">
                  <EnvelopeSimpleOpen />
                </span>
                {contactInformation.email}
              </a>
            </li>
            <li className="flex justify-start  hover:text-white items-center hover:translate-x-2 duration-500">
              <span className="text-2xl pt-2">
                <PhoneCall />
              </span>
              <div className="flex ml-4 flex-wrap gap-3 flex-row">
                {contactInformation.contactInfo.map((data, index) => (
                  <Link href={`tel:${data}`} className="" key={index}>
                    {data}
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <p className="flex justify-start items-center gap-2 hover:text-white hover:translate-x-2 duration-500">
                <span className="text-2xl pt-2">
                  <PaperPlaneTilt />
                </span>
                {contactInformation.address}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-6 flex justify-between items-center max-md:flex-col gap-6">
          <p className="max-sm:text-center">
            Ensurekar © Copyright {new Date().getFullYear()}. All Rights
            Reserved.
          </p>
          <div className="flex justify-end items-center">
            <Link
              href="/Privacy-Policy"
              className="border-r-2 border-white/60 pr-3 hover:text-white duration-500 leading-none"
            >
              Privacy Policy
            </Link>
            <Link
              href="/Terms-Conditions"
              className="border-r-2 border-white/60 pr-3 pl-3 hover:text-white duration-500 leading-none"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/Refund-Policy"
              className=" border-white/60  pl-3 hover:text-white duration-500 leading-none"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
