import React from "react";
import Image, { StaticImageData } from "next/image";
interface RegistrationGuideData {
  title?: string;
  heading?: string;
  description?: string;
  image: string | StaticImageData;
  guideList: {
    heading: string;
    description: string;
  }[];
}
const RegistrationGuide = ({RegistrationGuideData}:{RegistrationGuideData:RegistrationGuideData}) => {
 
  const { title, heading, description, image, guideList } =
    RegistrationGuideData;
  return (
    <section className="bg-softBg1 stp-30 sbp-30">
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center">
            <div className="flex justify-center flex-col items-center max-xxl:overflow-hidden">
              <div className="max-w-[700px] text-center flex justify-center items-center flex-col">
                {title && (
                  <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white">
                    {" "}
                    {title}{" "}
                  </p>
                )}
                <h1 className="display-4 pt-4 pb-4 lg:pb-6 ">{heading}</h1>

                
              </div>
              {

              }
              <p className="text-bodyText dark:text-black">{description}</p>
              {/* <p className={`text-bodyText ${bgColor === 'black' ? 'text-white' : 'text-black'}`}>{description}</p> */}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 stp-15">
          <div className="col-span-12 lg:col-span-6 xl:col-span-5 flex overflow-hidden justify-center items-center self-stretch">
            <Image
              src={image}
              alt="image"
              className="hover:scale-110 duration-500 w-full h-full"
            />
          </div>

            <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col gap-6 xl:gap-10 justify-start items-start">
            {guideList.map((item, index) => (
              <div
              key={index}
              className="flex justify-start items-start gap-4 sm:gap-6 group"
              >
              <div className={`heading-4 group-hover:bg-s2 p-4 rounded-full relative duration-500 after:absolute after:bg-strokeColor after:h-[200px] min-[340px]:after:h-[170px] min-[450px]:after:h-[130px] lg:after:h-[150px] after:w-[1px] after:right-1/2 group-hover:after:bg-s2 after:duration-500 group-hover:after:w-[3px] ${index === guideList.length - 1 ? 'after:hidden' : ''}`}>
                <span className="text-white bg-s1 w-10 h-10 rounded-full flex justify-center items-center !leading-none">
                {index + 1}
                </span>
              </div>
              <div className="border-b border-strokeColor">
                <h4 className="heading-4">{item.heading}</h4>
                <p className="text-bodyText pt-4 pb-6 xl:pb-10">
                {item.description}
                </p>
              </div>
              </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationGuide;
