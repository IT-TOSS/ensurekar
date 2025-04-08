"use client"
import BreadcrumpSection from '@/app/components/Breadcrump-Sections/Other-Pages/Team-Details'
import React from 'react'
import Image from 'next/image';
import team_member_full_img from "../../../../images/team_member_full_img.png"
import { ArrowUpRight, Envelope, MapPin, PhoneCall } from 'phosphor-react';
import Link from 'next/link';
const TeamDetails = () => {
  return (
    <>
      <BreadcrumpSection/>
      <section
        className="stp-30 lg:sbp-30 relative xxl:h-[1400px] flex justify-end items-center overflow-hidden max-lg:flex-col"
      >
        <div className="xxl:absolute top-28 left-0 bg-strokeColor">
          <Image src={team_member_full_img} alt="image" />
        </div>

        <div
          className="container flex justify-end items-center -mt-[250px] sm:max-lg:-mt-[500px] lg:max-xxl:mt-0 xxl:mt-10"
        >
          <div
            className="flex justify-end items-center relative z-10 bg-white p-6 sm:p-10 xl:p-20 xxxl:p-30 md:mt-10"
          >
            <div className="flex justify-start items-start flex-col max-w-[600px]">
              <p className="bg-p1 py-3 px-5 rounded-full text-white">Our Team</p>
              <h2 className="display-4 pt-3 pb-6">Rifat Warner</h2>
              <p className="text-bodyText">
                Welcome to the heart of Ensurekar. Our dedicated team of
                accounting and payroll professionals is committed to providing
                unparalleled services to meet your financial needs. Get to know
                the individuals who make up our dynamic team
              </p>
              <ul className="flex flex-col gap-3 pt-8">
                <li className="flex justify-start items-center gap-3">
                  <div
                    className="bg-softBg1 border border-p1/20 p-3 rounded-full text-p1 text-3xl !leading-[0]"
                  >
                    <Envelope weight='fill'/>
                  </div>
                  <a className="" href='mailto:info@example.com'> info@example.com </a>
                </li>

                <li className="flex justify-start items-center gap-3">
                  <div
                    className="bg-softBg1 border border-p1/20 p-3 rounded-full text-p1 text-3xl !leading-[0]"
                  >
                    <PhoneCall weight='fill'/>
                  </div>
                  <a className=""> (888) 456 7890 </a>
                </li>

                <li className="flex justify-start items-center gap-3">
                  <div
                    className="bg-softBg1 border border-p1/20 p-3 rounded-full text-p1 text-3xl !leading-[0]"
                  >
                    <MapPin weight='fill'/>
                  </div>
                  <a className=""> 410sandtown, California 94001, USA </a>
                </li>
              </ul>
              <div className="pt-6 lg:pt-10">
                <Link
                  href="/Contact"
                  className="flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border border-mainTextColor text-mainTextColor group font-medium"
                >
                  Get In Touch
                  <span
                    className="group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl"
                  >
                    <ArrowUpRight weight='bold'/>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container stp-15 lg:max-xxl:-mt-20 xxl:pt-15 sbp-30">
        <h2 className="heading-1">Personal experience</h2>
        <p className="text-bodyText pt-6 pb-6 lg:pb-10">
          Each team member at Ensurekar brings a unique blend of professional
          expertise and personal commitment to our clients. With a shared
          passion for accounting and payroll excellence, we understand the
          intricacies of financial management. Our collaborative approach
          ensures that each client receives personalized attention and solutions
          tailored to their specific needs. We don't just offer services; we
          build lasting partnerships. That commitment to personalized service
          defines our team and contributes to the success stories we create for
          our clients every day.
        </p>

        <div className="grid grid-cols-12 gap-6 pb-6 lg:pb-10">
          <div
            className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col justify-center items-start gap-8"
          >
            <div className="w-full">
              <div className="flex font-medium justify-between items-center">
                <p>Web Design</p>
                <p>75%</p>
              </div>
              <div className="w-full pt-4">
                <div className="h-0.5 bg-strokeColor w-full relative">
                  <div
                    className="h-[6px] bg-p1 absolute lineAnimation left-0 -top-0.5 experience"
                  ></div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex font-medium justify-between items-center">
                <p>Mobile App Design</p>
                <p>75%</p>
              </div>
              <div className="w-full pt-4">
                <div className="h-0.5 bg-strokeColor w-full relative">
                  <div
                    className="h-[6px] bg-p1 absolute lineAnimation left-0 -top-0.5 experience"
                  ></div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex font-medium justify-between items-center">
                <p>UI/UX Design</p>
                <p>75%</p>
              </div>
              <div className="w-full pt-4">
                <div className="h-0.5 bg-strokeColor w-full relative">
                  <div
                    className="h-[6px] bg-p1 absolute lineAnimation left-0 -top-0.5 experience"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col justify-center items-start"
          >
            <h3 className="heading-2">Why Chooses Our Team</h3>
            <p className="text-bodyText pt-6">
              Choosing our team at Ensurekar means partnering with a dedicated
              group of accounting and payroll professionals committed to your
              financial success.
            </p>
            <p className="pt-6">
              With years of collective experience, we bring a deep understanding
              of industry intricacies and stay at the forefront of regulatory
              changes. Our client-centric approach ensures personalized
              solutions tailored to your unique needs.
            </p>
          </div>
        </div>

        <h4 className="heading-3">Why Chooses Our Team</h4>
        <p className="text-bodyText pt-6">
          Choosing our team at Ensurekar means partnering with a dedicated group
          of accounting and payroll professionals committed to your financial
          success. With years of collective experience, we bring a deep
          understanding of industry intricacies and stay at the forefront of
          regulatory changes. Our client-centric approach ensures personalized
          solutions tailored to your unique needs.
        </p>
      </section>
    </>
  )
}

export default TeamDetails
