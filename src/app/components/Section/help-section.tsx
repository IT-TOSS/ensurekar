"use client";
import React from "react";
import we_help from "../../images/we_help.png";
import { MdDescription } from "react-icons/md";
import Image from "next/image";
import { CheckCircle } from "phosphor-react";
 
interface HelpSectionData {

    heading: string;
    subHeading: string;
    description: string;
    image: any;
    bottomHeading: string;
    bottomDescription: string;
    bottomList: {
      heading?: string;
      description?: string;
    }[];

}

const HelpSection = ({HelpSectionData}:{HelpSectionData:HelpSectionData}) => {

  const {  heading, subHeading, description, image, bottomHeading, bottomDescription, bottomList } = HelpSectionData;
  return (
    <section className="bg-softBg1 stp-15 sbp-30">
      <div className="container grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6">
          <h1 className="display-4">
      {heading}
          </h1>
          <p className="text-bodyText pt-4 pb-6 lg:pb-8">
           {description}
          </p>
          <h3 className="heading-3 pb-6">{bottomHeading}</h3>
          <ul className="flex flex-col gap-5 justify-start items-start">
            {bottomList.map((item, index) => (
                <li key={index}>
                    <div className="flex justify-start items-start gap-2">
                        <span className="text-2xl text-s1">
                        <CheckCircle weight="fill" />
                        </span>
                        <div>
                        <h4 className="font-bold inline">{item.heading}</h4>
                        <p className="text-bodyText inline" dangerouslySetInnerHTML={{ __html: item.description || "" }}></p>
                        </div>
                    </div>
                </li>
            ))}
            {/* <li>
              <div className="flex justify-start items-center gap-2">
                <span className="text-2xl text-s1">
                  <i className="ph-fill ph-check-circle"></i>
                </span>
                Efficient Payroll Management
              </div>
            </li> */}
           
          </ul>
        </div>
        <div className="xxl:col-start-8 col-span-12 md:col-span-6 xxl:col-span-5 overflow-hidden flex justify-center items-center">
          <Image
            src={image}
            alt="image"
            className="object-fit hover:scale-110 duration-500"
          />
        </div>
        
      </div>
      <h5 className="heading-5 my-10 mx-5">{bottomDescription}</h5>
    </section>
  );
};

export default HelpSection;
