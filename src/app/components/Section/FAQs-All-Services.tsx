"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import sliceIcon from "../../images/sliceIcon.png";
import faq_illus from "../../images/faq_illus.png";

import { ArrowLeft, ArrowRight, Minus, Plus } from "phosphor-react";

interface FAQsData {
  title?: string;
  heading?: string;
  description?: string;
  imageUrl?: StaticImageData | string;
  FAQs: { question: string; answer: string }[];
}
const FAQsServicesSection = ({ FAQsData }: { FAQsData: FAQsData }) => {
  const { title, heading, description, FAQs, imageUrl } = FAQsData;
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

 const [currentPage, setCurrentPage] = useState(0);

  const numPages = Math.ceil(FAQs.length / 5);

  const toggleFAQ = (index: number) => {
    if (openFAQ === index) {
      setOpenFAQ(null); 
    } else {
      setOpenFAQ(index); 
    }
  };

  const handlePagination = (direction: "left" | "right") => {
    if (direction === "left" && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "right" && currentPage < numPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const displayedFAQs = FAQs.slice(currentPage * 5, (currentPage + 1) * 5);

  return (
    <div>
      <section className="stp-30 sbp-30  relative">
        <Image
          src={sliceIcon}
          alt="image"
          className="absolute top-0 left-0 -rotate-90 max-md:h-[80px]"
        />
        <div className="container">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center max-xxl:overflow-hidden">
              <div className="max-w-[700px] text-center flex justify-center items-center flex-col">
                <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp">
                  {title}
                </p>

                <h1 className="display-4 pt-4 pb-4 lg:pb-6 wow animate__animated animate__fadeInDown dark:text-white">
                  {heading}
                </h1>

                <p className="text-bodyText wow animate__animated animate__fadeInUp dark:text-white">
                  {description}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 stp-15 max-xl:gap-6">
            {/* {imageUrl && (
                 <div className="col-span-12 lg:col-span-6 xl:col-span-5 flex justify-center items-center overflow-hidden">
                 <Image
                   src={faq_illus}
                   alt="image"
                   className="hover:scale-110 duration-500 w-full"
                 />
               </div>
              )} */}
         

            <div className={`col-span-12 ${imageUrl ?'lg:col-span-6 xl:col-start-7 flex flex-col gap-4 md:gap-6':''}`}>
              {displayedFAQs?.map((QA: any, index: any) => {
                return (
                  <div
                    key={index}
                    className={`flex justify-between items-start gap-2 p-3 md:p-5 xl:p-6 border faqItem duration-1000 cursor-pointer  ${
                      openFAQ === index + 1 ? "faqItemOpen" : "faqItemClose"
                    } dark:text-white`}
                    onClick={() => toggleFAQ(index + 1)}
                  >
                    <div>
                      <h4 className="heading-4 dark:text-white">{QA.question}</h4>
                      <div
                        className={`faqAnswer overflow-hidden duration-1000  ${
                          openFAQ === index + 1 ? "faqOpen" : "faqClose"
                        }`}
                      >
                        <p className="pt-5 ">{QA.answer}</p>
                      </div>
                    </div>

                    {/* Toggle Icon with rotation */}
                    <div className="relative">
                      <div
                        className={`transform duration-500 ${
                          openFAQ === index + 1 ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        {openFAQ === index + 1 ? (
                          <Minus size={24} />
                        ) : (
                          <Plus size={24} />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="flex mt-5 justify-between">
                <div
                  className={`cursor-pointer text-nowrap group  max-sm:text-sm  gap-3 py-2 md:py-3 px-3 md:px-6 bg-amber-300 border border-gray-600 text-mainTextColor group font-medium min-w-[150px]  flex  items-center justify-center ${ currentPage === 0 ? "opacity-50" : ""}`}
                  onClick={() => handlePagination("left")}
                >
                  <button className="font-bold flex  items-center justify-center">
                    {" "}
                    <ArrowLeft
                      weight="bold"
                      className="transition-transform inline mr-2 group-hover:-translate-x-1"
                    />
                    Pre
                  </button>
                </div>
                <div
                  className={`cursor-pointer text-nowrap group  max-sm:text-sm  gap-3 py-2 md:py-3 px-3 md:px-6 bg-amber-300 border border-gray-600 text-mainTextColor group font-medium min-w-[150px]  flex  items-center justify-center ${ currentPage === numPages - 1 ? "opacity-50" : ""}`}
                  onClick={() => handlePagination("right")}
                >
                  <button className="font-bold flex  items-center justify-center">
                    {" "}
                    Next
                    <ArrowRight
                      weight="bold"
                      className="ml-2 transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQsServicesSection;
