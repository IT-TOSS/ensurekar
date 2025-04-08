import React from "react";
import healthcare_section_img from "../../images/healthcare_section_img.png";
import Image ,{StaticImageData}from "next/image";



  interface WhoConsideredData {
    title?: string;
    heading?: string;
    description?: string;
    imageurl: string | StaticImageData;
    consideretion?: {
      icon: string;
      heading: string;
      description: string;
    }[];
  }
const WhoConsidered = ({WhoConsideredData}:{WhoConsideredData:WhoConsideredData}) => {
 
  const { title, heading, description, consideretion, imageurl } =
    WhoConsideredData;
  return (
    <section className="stp-30 sbp-30">
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center max-xxl:overflow-hidden">
            <div className="max-w-[700px] text-center flex justify-center items-center flex-col">
              {title && (
                  <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white">
                  {title}
                </p>
                )}
            

              <h1 className="display-4 pt-4 pb-4 lg:pb-6  dark:text-white">{heading}</h1>

              <p className="text-bodyTex dark:text-white">{description}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 stp-15">
          <div className="col-span-12 lg:col-span-6 xl:col-span-5 flex justify-center items-center overflow-hidden">
            <Image
              src={imageurl}
              alt="image"
              className="hover:scale-110 duration-500 w-full h-full"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 xxl:col-start-7 flex flex-col gap-6 xl:gap-10 justify-start items-start">
            {consideretion?.map((consider, index: number) => (
              <div className="flex justify-start items-start gap-4" key={index}>
                <div className="text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1 !leading-[0]">
                  {/* <i className="ph-fill ph-hand-coins"></i> */}
                  {consider.icon}
                </div>
                <div className="">
                  <h4 className="heading-4 dark:text-white">{consider.heading}</h4>
                  <p className="text-bodyText pt-3 dark:text-white">{consider.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoConsidered;
