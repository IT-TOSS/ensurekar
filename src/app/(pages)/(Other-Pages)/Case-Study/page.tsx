"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import case_study_img1 from "../../../images/case_study_img1.png";
import case_study_img2 from "../../../images/case_study_img2.png";
import case_study_img3 from "../../../images/case_study_img3.png";
import case_study_img4 from "../../../images/case_study_img4.png";
import case_study_img5 from "../../../images/case_study_img5.png";
import case_study_img6 from "../../../images/case_study_img6.png";
import Link from "next/link";
import { ArrowUpRight } from "phosphor-react";
import BreadcrumpSection from "@/app/components/Breadcrump-Sections/Other-Pages/Case-Study";



const CaseStudy = () => {
  type CaseStudy = {
    id: number;
    image: StaticImageData;
    title: string;
    link: string;
  };
  
  const caseStudyData: { [key: number]: CaseStudy[] } = {
    1: [
      {
        id: 1,
        image: case_study_img1,
        title: "Tax Compliance Made Simple",
        link: "/Case-Study-Details",
      },
      {
        id: 2,
        image: case_study_img2,
        title: "Automated Payroll Success",
        link: "/Case-Study-Details",
      },
      {
        id: 3,
        image: case_study_img3,
        title: "A Payroll Case Study",
        link: "/Case-Study-Details",
      },
    ],
    2: [
      {
        id: 4,
        image: case_study_img4,
        title: "Payroll Outsourcing A Business",
        link: "/Case-Study-Details",
      },
      {
        id: 5,
        image: case_study_img5,
        title: "Accounting Success",
        link: "/Case-Study-Details",
      },
      {
        id: 6,
        image: case_study_img6,
        title: "Payroll Outsourcing Center",
        link: "/Case-Study-Details",
      },
    ],
  };
  const [currentPage, setCurrentPage] = useState(1);

  // Function to handle page change
  const handlePageChange = (page:number) => {
    setCurrentPage(page);
  };

  return (
    <>
    <BreadcrumpSection/>
    <section className="container stp-30 sbp-30">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center max-xxl:overflow-hidden">
          <div className="max-w-[700px] text-center flex justify-center items-center flex-col">
            <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white">
              Case Study
            </p>

            <h1 className="display-4 pt-4 pb-4 lg:pb-6">
              Explore Our Recently Completed Cases
            </h1>

            <p className="text-bodyText">
              Explore how Ensurekar has partnered with businesses like yours to
              deliver tailored accounting and payroll solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Display the case studies based on the current page */}
      <div className="grid grid-cols-12 gap-6 stp-15">
        {(caseStudyData[currentPage]).map((study:any) => (
          <div
            key={study.id}
            className="col-span-12 sm:col-span-6 lg:col-span-4"
          >
            <div className="border border-mainTextColor flex flex-col justify-start items-start relative group">
              <div className="w-full self-stretch overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  className="object-cover w-full hover:scale-110 duration-500 h-full"
                />
              </div>
              <p className="bg-p1 text-white heading-2 py-3 px-4 absolute top-6 right-6 group-hover:bg-s2 duration-500 group-hover:text-mainTextColor">
                {study.id < 10 ? `0${study.id}` : study.id}
              </p>
              <div className="p-6 flex flex-col justify-start items-start">
                <h4 className="heading-4 pb-6">{study.title}</h4>
                <Link
                  href={study.link}
                  className="bg-p1 py-3 px-5 font-medium text-white flex justify-start items-center gap-1 group-hover:bg-s2 border border-p1 group-hover:border-mainTextColor duration-500 group-hover:text-mainTextColor"
                >
                  Learn More <ArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="stp-15 flex justify-center items-center col-span-12">
        <ul className="flex justify-center items-center gap-2">
          <li>
            <button
              className={`text-lg font-medium w-[45px] h-[50px] flex justify-center items-center ${
                currentPage === 1
                  ? "text-white border border-p1 bg-p1"
                  : "border border-strokeColor"
              }`}
              onClick={() => handlePageChange(1)}
            >
              1
            </button>
          </li>
          <li>
            <button
              className={`text-lg font-medium w-[45px] h-[50px] flex justify-center items-center ${
                currentPage === 2
                  ? "text-white border border-p1 bg-p1"
                  : "border border-strokeColor"
              }`}
              onClick={() => handlePageChange(2)}
            >
              2
            </button>
          </li>
        </ul>
      </div>
    </section>
    </>
  );
};

export default CaseStudy;
