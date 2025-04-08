"use client"
import React from "react";
import { Headphones } from "phosphor-react";
import { PiTooth } from "react-icons/pi";
import Image, { StaticImageData } from "next/image";
interface WhyEnsurekar {
  title?:string,
    heading: string;
    description: string;
    elements: { heading: string; description: string; imageUrl: string |StaticImageData  }[];
  }

const WhyEnsurekarSection = ({WhyEnsurekarData }:{WhyEnsurekarData: WhyEnsurekar}) => {
    const {heading,description,elements} = WhyEnsurekarData;

  return (
    <section className="sbp-30 bg-softBg1 stp-30">
        <div className="container">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center max-xxl:overflow-hidden">
              <div className="max-w-[700px]  text-center flex justify-center items-center flex-col">
                {/* <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white">
                  Why Choose Us
                </p> */}

                <h1 className="display-4 pt-4 pb-4  lg:pb-6">
               {heading}
                </h1>

                <p className="text-bodyText">
               {description}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 items-start gap-6 stp-15">
            {
                elements.map((element,index)=>(
                    <div key={index} className="col-span-12 md:col-span-4 flex justify-center items-center flex-col">
                    <div className="text-7xl text-s1 flex justify-center items-center p-5">
                        <Image src={element.imageUrl} className="text-black " height={60} alt="icon" />
                    </div>
                    <h4 className="heading-4 pb-4 pt-3 text-center">
                      {element.heading}
                    </h4>
                    <p className="text-center">
                      {element.description}
                    </p>
                  </div>
                ))
            }
           
          </div>
        </div>
      </section>
  );
};

export default WhyEnsurekarSection;
