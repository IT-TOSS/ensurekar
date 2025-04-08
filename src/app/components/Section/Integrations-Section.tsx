
"use client"
import Link from 'next/link'
import { ArrowRight, CurrencyCircleDollar, Handshake, Money, Timer, UsersThree } from 'phosphor-react'
import React from 'react'

const IntegrationsSection = () => {
  return (
    <section className="stp-30 sbp-30">
    <div className="container grid grid-cols-12">
      <div
        className="flex justify-start items-start col-span-12 lg:col-span-5 max-lg:sbp-15"
      >
        <div className="max-w-[600px] flex justify-start items-start flex-col">
          {/* <p
            className="bg-p1 py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp"
          >
            Integrations
          </p> */}
          <h1
            className="display-4 pt-4 pb-6 wow animate__animated animate__fadeInDown"
          >
           All In one place
          </h1>
          <p className="text-bodyText wow animate__animated animate__fadeInUp">
            {/* Experience seamless coordination with our comprehensive services.
            From accounting to payroll, we bring everything together in one
            place, */}
            Experience seamless coordination with our comprehensive services. From accounting to compliances to each and everything, we bring everything together in one place.
          </p>
        </div>
      </div>

      <div
        className="col-span-12 min-[500px]:col-span-6 lg:col-span-3 lg:col-start-7 hover:bg-s2 border hover:border-mainTextColor duration-500 min-h-[250px] lg:min-h-[300px] flex justify-start items-start flex-col p-8 bg-softBg1 border-softBg1"
      >
        <div className="text-4xl rounded-full text-s1 leading-[0] p-4 bg-white">
            <CurrencyCircleDollar weight='fill'/>
        </div>
        <h4 className="heading-4 pt-6 w-[200px]">Business Steup</h4>
        <div
          className="flex justify-end items-end w-full pt-10 lg:pt-15 text-xl font-medium"
        >
          <Link
            href="/All-Services"
            className="bg-white p-2 rounded-full shadow2 leading-[0]"
          >
            <ArrowRight/>
          </Link>
        </div>
      </div>
      <div
        className="col-span-12 min-[500px]:col-span-6 lg:col-span-3 hover:bg-s2 border hover:border-mainTextColor duration-500 min-h-[250px] lg:min-h-[300px] flex justify-start items-start flex-col p-8 border-white"
      >
        <div className="text-4xl rounded-full text-s1 leading-[0] p-4 bg-softBg1">
            <Money weight='fill'/>
        </div>
        <h4 className="heading-4 pt-6 w-[200px]">Tax Compliances</h4>
        <div
          className="flex justify-end items-end w-full pt-10 lg:pt-15 text-xl font-medium"
        >
          <Link
            href="/All-Services"
            className="bg-white p-2 rounded-full shadow2 leading-[0]"
          >
            <ArrowRight/>
            </Link>
        </div>
      </div>
      <div
        className="col-span-12 min-[500px]:col-span-6 lg:col-span-3 lg:col-start-4 min-[500px]:max-lg:order-2 hover:bg-s2 border hover:border-mainTextColor duration-500 min-h-[250px] lg:min-h-[300px] flex justify-start items-start flex-col p-8 bg-softBg1 border-softBg1"
      >
        <div className="text-4xl rounded-full text-s1 leading-[0] p-4 bg-white">
          <UsersThree weight="fill"/>
        </div>
        <h4 className="heading-4 pt-6 w-[200px]">Trade mark and IP </h4>
        <div
          className="flex justify-end items-end w-full pt-10 lg:pt-15 text-xl font-medium"
        >
          <Link
            href="/All-Services"
            className="bg-white p-2 rounded-full shadow2 leading-[0]"
          >
            <ArrowRight/>
            </Link>
        </div>
      </div>
      <div
        className="col-span-12 min-[500px]:col-span-6 lg:col-span-3 hover:bg-s2 border hover:border-mainTextColor duration-500 min-h-[250px] lg:min-h-[300px] flex justify-start items-start flex-col p-8 border-white"
      >
        <div className="text-4xl rounded-full text-s1 leading-[0] p-4 bg-softBg1">
          <Timer weight="fill"/>
        </div>
        <h4 className="heading-4 pt-6 w-[200px]">Documentation </h4>
        <div
          className="flex justify-end items-end w-full pt-10 lg:pt-15 text-xl font-medium"
        >
          <Link
            href="/All-Services"
            className="bg-white p-2 rounded-full shadow2 leading-[0]"
          >
            <ArrowRight/>
            </Link>
        </div>
      </div>
      <div
        className="col-span-12 min-[500px]:col-span-6 lg:col-span-3 hover:bg-s2 border hover:border-mainTextColor duration-500 min-h-[250px] lg:min-h-[300px] flex justify-start items-start flex-col p-8 bg-softBg1 border-softBg1"
      >
        <div className="text-4xl rounded-full text-s1 leading-[0] p-4 bg-white">
          <Handshake weight='fill'/>
        </div>
        <h4 className="heading-4 pt-6 w-[200px]">CFO Service</h4>
        <div
          className="flex justify-end items-end w-full pt-10 lg:pt-15 text-xl font-medium"
        >
          <a
            href="./all-services.html"
            className="bg-white p-2 rounded-full shadow2 leading-[0]"
          >
            <ArrowRight/>
            </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default IntegrationsSection
