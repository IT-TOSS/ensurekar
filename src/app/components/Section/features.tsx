import React from "react";
import Image, { StaticImageData } from "next/image";

interface FeatureData {
    title?: string;
    heading?: string;
    subHeading?: string;
    description?: string;
    image: string | StaticImageData;
    bottomHeading?: string;
    elements: { image: string | StaticImageData; heading?: string;description?:string }[];
    }


const EnsurekarFeature = ({ FeatureData }:{FeatureData:FeatureData}) => {
 
  const {
    title,
    heading,
    subHeading,
    description,
    image,
    bottomHeading,
    elements,
  } = FeatureData;
  return (
    <section className="bg-softBg2 stp-30 sbp-30 overflow-hidden">
      <div className="container">
        <div className="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start">
          <div className="max-w-[600px] flex justify-center items-start flex-col">
            {title && (
              <p className="bg-p1 py-3 px-5 rounded-full text-white">{title}</p>
            )}
            <h1 className="display-4 pt-4 dark:text-white">
             {heading}
            </h1>
          </div>
          <p className="text-bodyText max-w-[500px] dark:text-white">
          {description}
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6 stp-15">
            {elements.map((element, index:number) => (
                  <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white p-6 xl:py-10 xl:px-15 flex flex-col items-center border border-white group hover:border-mainTextColor duration-700 hover:bg-s2 wow animate__animated animate__fadeInUp" key={index}>
                  <div className="">
                    <Image src={element.image} alt="image" />
                  </div>
                  <h4 className="pt-8 heading-4">{element.heading}</h4>
                  <p>{element.description}</p>
                </div>
                ))}
         
         
        </div>
      </div>
    </section>
  );
};

export default EnsurekarFeature;
