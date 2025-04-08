"use client";

import React from "react";
import stepArrow1 from "../../images/stepArrow1.png";
import stepArrow2 from "../../images/stepArrow2.png";
import Image, { StaticImageData } from "next/image";
import { s } from "framer-motion/client";

interface RegisterSteps {
  title: string;
  meta: string;
  heading: string;
  description: string;
  steps: { title: string; description: string,imageUrl?:StaticImageData |string }[];
  aboutSteps: { title?: string; description?: string }[];
  footerMessage?: string;
}

const RegisterSteps = ({ RegisterSteps }: { RegisterSteps: RegisterSteps }) => {
  const {
    title,
    meta,
    heading,
    description,
    steps,
    aboutSteps,
    footerMessage,
  } = RegisterSteps;
  return (
    //     <section className="stp-30 bg-softBg1 sbp-30">
    //       <div className="container">
    //         <div className="flex justify-center items-center">
    //           <div className="flex justify-center items-center max-xxl:overflow-hidden">
    //             <div className=" text-center flex justify-center items-center flex-col">
    //               {title && (
    //                 <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp">
    //                   {title}
    //                 </p>
    //               )}

    //               <h4 className="display-4 pt-4 my-5  pb-4 lg:pb-6 wow animate__animated animate__fadeInDown">
    //                 <span className="text-blue-600">{heading} </span>
    //                 {meta}
    //               </h4>

    //               <p className="text-bodyText wow animate__animated animate__fadeInUp text-start md:text-center">
    //                 {description}
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //        <div className="flex justify-center flex-col">
    //   <div className="flex justify-between items-center gap-6 md:gap-4 lg:gap-6 relative max-md:flex-col">
    //     {/* Arrow 1 */}
    //     <Image
    //       src={stepArrow1}
    //       alt="image"
    //       className="absolute top-15 transform -translate-y-1/2 right-[16%] max-xxl:right-[23%] max-lg:right-[25%] max-lg:w-[100px] max-md:hidden"
    //     />

    //     {/* Arrow 2 */}
    //     <Image
    //       src={stepArrow2}
    //       alt="image"
    //       className="absolute top-8 transform -translate-y-1/2 left-[25%] max-xxl:left-[23%] max-lg:left-[25%] max-lg:w-[100px] max-md:hidden"
    //     />

    //     {steps.map((step, index) => (
    //       <div
    //         key={index}
    //         className="flex justify-center items-center text-center flex-col max-w-[350px]"
    //       >
    //         <div className="text-s1 bg-softBg border border-strokeColor rounded-full p-3 lg:p-7 text-3xl lg:text-5xl">
    //           {index + 1}
    //         </div>
    //         <h4 className="heading-4 pt-8 pb-6">{step?.title}</h4>
    //       </div>
    //     ))}
    //   </div>

    //   <div className="flex flex-col my-5 mt-10 gap-y-5 justify-center">
    //     {aboutSteps.map((step, index) => (
    //       <div key={index}>
    //         <h5 className="heading-5">
    //           {index + 1}
    //           {". "} {step.title}
    //         </h5>
    //         <p className="py-4">{step.description}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    //         <div>
    //           <h1 className="heading-4 pt-8 pb-6">{footerMessage}</h1>
    //         </div>
    //       </div>
    //     </section>
    <section className="stp-30 bg-softBg1 sbp-30">
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center max-xxl:overflow-hidden">
            <div className="max-w-[700px] text-center flex justify-center items-center flex-col">
              {title && (
                <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp">
                  {title}
                </p>
              )}

              <h1 className="display-4 pt-4 pb-4 lg:pb-6 wow animate__animated animate__fadeInDown">
                <span className="text-blue-600">{heading} </span>
                {meta}
              </h1>

              <p className="text-bodyText wow animate__animated animate__fadeInUp">
                {description} {"lo"}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between lg:items-start items-center  gap-6 md:gap-4 lg:gap-6 stp-15 relative max-md:flex-col">
          <Image
            src={stepArrow1}
            alt="image"
            className="absolute top-24 right-[20%] max-xxl:right-[19%] max-xxl:top-24 max-xxl:w-[200px] max-lg:right-[21%] max-lg:w-[100px] max-md:hidden"
          />
          <Image
            src={stepArrow2}
            alt="image"
            className="absolute top-18 left-[18%] max-xxl:top-20 max-xxl:left-[23%] max-xxl:w-[200px] max-lg:left-[30%] max-lg:w-[100px] max-md:hidden"
          />
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex justify-start items-center text-center flex-col max-w-[250px]"
            >
              <div className="text-s1  border-strokeColor rounded-full p-6 lg:p-7 text-3xl lg:text-5xl">
                {step?.imageUrl ? (
                  <Image src={step.imageUrl as StaticImageData} alt="image" height={60} width={60} />
                ) : (
                  index + 1
                )}

              </div>
              <h4 className="heading-4 pt-8 pb-6">{step?.title}</h4>
              <p className="text-bodyText">{step?.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col my-5 mt-10 gap-y-5 justify-center">
        {aboutSteps.map((step, index) => (
          <div key={index}>
            <h5 className="heading-5">
              {index + 1}
              {". "} {step.title}
            </h5>
            <p className="py-4">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="ml-3">
        <h1 className="text-xl pt-8 pb-6">{footerMessage}</h1>
      </div>
    </section>
  );
};

export default RegisterSteps;
