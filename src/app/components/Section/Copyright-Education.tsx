"use client";
import { ChartLineUp, ChatCircle, NotePencil } from 'phosphor-react'
import never_worry_img from '../../images/never_worry_img.png'
import React from 'react'
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface CopyrightEducationData{
    title: string;
    heading: string;
    description: string;
    features: {
        title: string;
        description: string;
        icon: JSX.Element;
    }[];
    image: string | StaticImageData;
}
const CopyrightEducation = ({CopyrightEducationData}:{CopyrightEducationData:CopyrightEducationData}) => {
    
    const {title,heading,description,features,image} = CopyrightEducationData
  return (
    <section className="bg-softBg1 stp-30 sbp-30 max-xxl:overflow-hidden">
      <div className="container grid grid-cols-12 gap-6">
        <div
          className="col-span-12 lg:col-span-6 xl:col-span-5 flex justify-center items-center max-lg:order-2 max-lg:stp-15 overflow-hidden"
        >
          <Image
            src={image}
            alt="image"
            className="hover:scale-110 duration-500 w-full h-full"
          />
        </div>

        <div className="xxl:col-start-7 col-span-12 lg:col-span-6">
          <h1 className="display-4">{heading}</h1>
          <p className="pt-6 text-bodyText pb-6 xl:pb-8">
           {description}
          </p>
          <div
            className="flex flex-col gap-6 xl:gap-10 justify-start items-start pb-6 xl:pb-12"
          >
            {features.map((feature, index) => (
                <div key={index} className="flex justify-start items-center gap-4">
                <div
                  className="text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-white !leading-[0]"
                >
                    {feature.icon}
                </div>
                <div className="">
                  <h4 className="heading-4">{feature.title}</h4>
                  <p className="text-bodyText pt-2">
                    {feature.description}
                  </p>
                </div>
                </div>
            ))}
           
            
          </div>
          <Link
            href="/contact"
            className="bg-s2 rounded-full py-3 px-6 font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CopyrightEducation
