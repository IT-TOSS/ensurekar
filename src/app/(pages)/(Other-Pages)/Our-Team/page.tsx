"use client"
import BreadcrumpSection from "@/app/components/Breadcrump-Sections/Other-Pages/Our-Team";
import React from "react";
import Image from "next/image";
import team_image1 from "../../../images/team_image1.png";
import team_image2 from "../../../images/team_image2.png";
import team_image3 from "../../../images/team_image3.png";
import team_image4 from "../../../images/team_image4.png";
import team_image5 from "../../../images/team_image5.png";
import team_image6 from "../../../images/team_image6.png";
import Link from "next/link";
import { DribbbleLogo, InstagramLogo, TwitterLogo } from "phosphor-react";

import FAQsSection from "@/app/components/other-page-sections/FAQs-Section";
const Team = () => {
  return (
    <>
      <BreadcrumpSection />
      <section className="stp-30 overflow-hidden">
        <div className="container grid grid-cols-12 gap-6 md:gap-16 xl:gap-20 xxl:gap-24 pr-10">
          <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <div className="relative group">
              <div className="overflow-hidden relative z-20 max-xl:mr-6">
                <Image
                  src={team_image1}
                  alt="image"
                  className="rounded-lg object-cover w-full"
                />
                <div className="absolute z-30 text-white bottom-6 right-6 left-6 linear-gradient-bg-team flex justify-center items-center flex-col py-6 invisible opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 duration-500 group-hover:visible">
                  <p className="font-medium">Web Designer</p>
                  <Link href="/Our-Team/Team-Details" className="heading-4">
                    Bess Collins
                  </Link>
                </div>
              </div>

              <div className="absolute right-0 group-hover:-right-6 md:group-hover:-right-8 lg:group-hover:-right-6 xl:group-hover:-right-12 left-20 top-8 bottom-10 z-10 group-hover:rotate-[8deg] invisible opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 bg-[rgba(0,81,81,0.05)] duration-500 group-hover:visible rounded-xl">
                <ul className="flex justify-start flex-col items-center gap-2 text-white group absolute top-6 right-4">
                  <li>
                    <a className="rounded-full p-2 text-lg hover:text-white text-mainTextColor border border-strokeColor hover:bg-p1 duration-500 hover:-translate-y-1 block !leading-[0]">
                      <TwitterLogo weight="bold" />
                    </a>
                  </li>
                  <li>
                    <a className="rounded-full p-2 text-lg hover:text-white text-mainTextColor border border-strokeColor hover:bg-p1 duration-500 hover:-translate-y-1 block !leading-[0]">
                      <InstagramLogo weight="bold" />
                    </a>
                  </li>
                  <li>
                    <a className="rounded-full p-2 text-lg hover:text-white text-mainTextColor border border-strokeColor hover:bg-p1 duration-500 hover:-translate-y-1 block !leading-[0]">
                      <DribbbleLogo weight="bold" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <div className="relative group">
              <div className="overflow-hidden relative z-20 max-xl:mr-6">
                <Image
                  src={team_image2}
                  alt="image"
                  className="rounded-lg object-cover w-full"
                />
                <div className="absolute z-30 text-white bottom-6 right-6 left-6 linear-gradient-bg-team flex justify-center items-center flex-col py-6 invisible opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 duration-500 group-hover:visible">
                  <p className="font-medium">Accountant</p>
                  <Link href="/Our-Team/Team-Details" className="heading-4">
                    Micheal James
                  </Link>
                </div>
              </div>

              <div className="absolute right-0 group-hover:-right-6 md:group-hover:-right-8 lg:group-hover:-right-6 xl:group-hover:-right-12 left-20 top-8 bottom-10 z-10 group-hover:rotate-[8deg] invisible opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 bg-[rgba(0,81,81,0.05)] duration-500 group-hover:visible rounded-xl">
                <ul className="flex justify-start flex-col items-center gap-2 text-white group absolute top-6 right-4">
                  <li>
                    <a className="rounded-full p-2 text-lg hover:text-white text-mainTextColor border border-strokeColor hover:bg-p1 duration-500 hover:-translate-y-1 block !leading-[0]">
                      <TwitterLogo weight="bold" />
                    </a>
                  </li>
                  <li>
                    <a className="rounded-full p-2 text-lg hover:text-white text-mainTextColor border border-strokeColor hover:bg-p1 duration-500 hover:-translate-y-1 block !leading-[0]">
                      <InstagramLogo weight="bold" />
                    </a>
                  </li>
                  <li>
                    <a className="rounded-full p-2 text-lg hover:text-white text-mainTextColor border border-strokeColor hover:bg-p1 duration-500 hover:-translate-y-1 block !leading-[0]">
                      <DribbbleLogo weight="bold" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <div className="relative group">
              <div className="overflow-hidden relative z-20 max-xl:mr-6">
                <Image
                  src={team_image3}
                  alt="image"
                  className="rounded-lg object-cover w-full"
                />
                <div className="absolute z-30 text-white bottom-6 right-6 left-6 linear-gradient-bg-team flex justify-center items-center flex-col py-6 invisible opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 duration-500 group-hover:visible">
                  <p className="font-medium">Tax Specialist</p>
                  <Link href="/Our-Team/Team-Details" className="heading-4">
                    Dean Obrien
                  </Link>
                </div>
              </div>

              <div className="absolute right-0 group-hover:-right-6 md:group-hover:-right-8 lg:group-hover:-right-6 xl:group-hover:-right-12 left-20 top-8 bottom-10 z-10 group-hover:rotate-[8deg] invisible opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 bg-[rgba(0,81,81,0.05)] duration-500 group-hover:visible rounded-xl">
                <ul className="flex justify-start flex-col items-center gap-2 text-white group absolute top-6 right-4">
                  <li>
                    <a className="rounded-full p-2 text-lg hover:text-white text-mainTextColor border border-strokeColor hover:bg-p1 duration-500 hover:-translate-y-1 block !leading-[0]">
                      <TwitterLogo weight="bold" />
                    </a>
                  </li>
                  <li>
                    <a className="rounded-full p-2 text-lg hover:text-white text-mainTextColor border border-strokeColor hover:bg-p1 duration-500 hover:-translate-y-1 block !leading-[0]">
                      <InstagramLogo weight="bold" />
                    </a>
                  </li>
                  <li>
                    <a className="rounded-full p-2 text-lg hover:text-white text-mainTextColor border border-strokeColor hover:bg-p1 duration-500 hover:-translate-y-1 block !leading-[0]">
                      <DribbbleLogo weight="bold" />{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <div className="relative group">
              <div className="overflow-hidden relative z-20 max-xl:mr-6">
                <Image
                  src={team_image4}
                  alt="image"
                  className="rounded-lg object-cover w-full"
                />
                <div className="absolute z-30 text-white bottom-6 right-6 left-6 linear-gradient-bg-team flex justify-center items-center flex-col py-6 invisible opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 duration-500 group-hover:visible">
                  <p className="font-medium">Manager</p>
                  <Link href="/Our-Team/Team-Details" className="heading-4">
                    Maggie Clark
                  </Link>
                </div>
              </div>

              <div className="absolute right-0 group-hover:-right-6 md:group-hover:-right-8 lg:group-hover:-right-6 xl:group-hover:-right-12 left-20 top-8 bottom-10 z-10 group-hover:rotate-[8deg] invisible opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 bg-[rgba(0,81,81,0.05)] duration-500 group-hover:visible rounded-xl">
                <ul className="flex justify-start flex-col items-center gap-2 text-white group absolute top-6 right-4">
                  <li>
                    <a className="rounded-full p-2 text-lg hover:text-white text-mainTextColor border border-strokeColor hover:bg-p1 duration-500 hover:-translate-y-1 block !leading-[0]">
                      <TwitterLogo weight="bold" />
                    </a>
                  </li>
                  <li>
                    <a className="rounded-full p-2 text-lg hover:text-white text-mainTextColor border border-strokeColor hover:bg-p1 duration-500 hover:-translate-y-1 block !leading-[0]">
                      <InstagramLogo weight="bold" />
                    </a>
                  </li>
                  <li>
                    <a className="rounded-full p-2 text-lg hover:text-white text-mainTextColor border border-strokeColor hover:bg-p1 duration-500 hover:-translate-y-1 block !leading-[0]">
                      <DribbbleLogo weight="bold" />{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <div className="relative group">
              <div className="overflow-hidden relative z-20 max-xl:mr-6">
                <Image
                  src={team_image5}
                  alt="image"
                  className="rounded-lg object-cover w-full"
                />
                <div className="absolute z-30 text-white bottom-6 right-6 left-6 linear-gradient-bg-team flex justify-center items-center flex-col py-6 invisible opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 duration-500 group-hover:visible">
                  <p className="font-medium">Product Manager</p>
                  <Link href="/Our-Team/Team-Details" className="heading-4">
                    Rosalie Chapman
                  </Link>
                </div>
              </div>

              <div className="absolute right-0 group-hover:-right-6 md:group-hover:-right-8 lg:group-hover:-right-6 xl:group-hover:-right-12 left-20 top-8 bottom-10 z-10 group-hover:rotate-[8deg] invisible opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 bg-[rgba(0,81,81,0.05)] duration-500 group-hover:visible rounded-xl">
                <ul className="flex justify-start flex-col items-center gap-2 text-white group absolute top-6 right-4">
                  <li>
                    <a className="rounded-full p-2 text-lg hover:text-white text-mainTextColor border border-strokeColor hover:bg-p1 duration-500 hover:-translate-y-1 block !leading-[0]">
                      <TwitterLogo weight="bold" />
                    </a>
                  </li>
                  <li>
                    <a className="rounded-full p-2 text-lg hover:text-white text-mainTextColor border border-strokeColor hover:bg-p1 duration-500 hover:-translate-y-1 block !leading-[0]">
                      <InstagramLogo weight="bold" />
                    </a>
                  </li>
                  <li>
                    <a className="rounded-full p-2 text-lg hover:text-white text-mainTextColor border border-strokeColor hover:bg-p1 duration-500 hover:-translate-y-1 block !leading-[0]">
                      <DribbbleLogo weight="bold" />{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <div className="relative group">
              <div className="overflow-hidden relative z-20 max-xl:mr-6">
                <Image
                  src={team_image6}
                  alt="image"
                  className="rounded-lg object-cover w-full"
                />
                <div className="absolute z-30 text-white bottom-6 right-6 left-6 linear-gradient-bg-team flex justify-center items-center flex-col py-6 invisible opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 duration-500 group-hover:visible">
                  <p className="font-medium">CEO, Ensurekar</p>
                  <Link href="/Our-Team/Team-Details" className="heading-4">
                    Verna Gutierrez
                  </Link>
                </div>
              </div>

              <div className="absolute right-0 group-hover:-right-6 md:group-hover:-right-8 lg:group-hover:-right-6 xl:group-hover:-right-12 left-20 top-8 bottom-10 z-10 group-hover:rotate-[8deg] invisible opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 bg-[rgba(0,81,81,0.05)] duration-500 group-hover:visible rounded-xl">
                <ul className="flex justify-start flex-col items-center gap-2 text-white group absolute top-6 right-4">
                  <li>
                    <a className="rounded-full p-2 text-lg hover:text-white text-mainTextColor border border-strokeColor hover:bg-p1 duration-500 hover:-translate-y-1 block !leading-[0]">
                      <TwitterLogo weight="bold" />
                    </a>
                  </li>
                  <li>
                    <a className="rounded-full p-2 text-lg hover:text-white text-mainTextColor border border-strokeColor hover:bg-p1 duration-500 hover:-translate-y-1 block !leading-[0]">
                      <InstagramLogo weight="bold" />
                    </a>
                  </li>
                  <li>
                    <a className="rounded-full p-2 text-lg hover:text-white text-mainTextColor border border-strokeColor hover:bg-p1 duration-500 hover:-translate-y-1 block !leading-[0]">
                      <DribbbleLogo weight="bold" />{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQsSection/>
    </>
  );
};

export default Team;
