"use client";

import React from "react";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import CompaniesAct from "@/app/components/Section/Companies-Act";
import Image from "next/image";
import Rocket_With_Men from "../../../images/SGV-Types/Rocket-With-Men.svg";
import Company_People_Group from "../../../images/SGV-Types/Company-People-Group.svg";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import FAQsSection from "@/app/components/other-page-sections/FAQs-Section";
import { Headphones } from "phosphor-react";
import TestimonialSection from "@/app/components/Section/Testimonial-Section";
import All_In_One_ServiceSection from "@/app/components/Section/All-in-One-All-Services";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import { desc } from "framer-motion/client";
import ServiceAdvantages from "@/app/components/Section/Advantages-All-Services";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import ServiceOverview from "@/app/components/Section/Service-Overview";
import productImage from "../../../images/recent_post_img1.png";

import TalkExpert from "./../../../images/SGV-Types/Talk-To-Our-Expert.svg";
import EnhancedBusinessCredibility from "../../../images/SGV-Types/Enhanced-Business-Credibility.svg";
import HandUserMoney from "../../../images/SGV-Types/Hand-User-Money.svg";

// FSSAI Food License Images
import FSSAI_Basic_Registration from "./../../../images/FSSAi_Food_License/FSSAI_Basic_Registration.png";
import FSSAI_State_License from "./../../../images/FSSAi_Food_License/FSSAI_State_License.png";
import FSSAI_Central_License from "./../../../images/FSSAi_Food_License/FSSAI_Central_License.png";


const FSSAI_Food_Licence = () => {
  const Component = (
    <div className="col-span-12 md:col-span-6 mt-5 md:mt-10 flex justify-center items-center">
      <div className="">
        <div className="grid grid-cols-1 gap-6 bg-white p-5 shadow-md">
          <p className="text-xl font-semibold text-center">
            Register Your Company Today
          </p>

          <div className="col-span-2 py-2 px-5 border rounded flex justify-start items-center gap-2">
            <input
              type="text"
              placeholder="Email"
              className="placeholder:text-bodyText w-full outline-none"
            />
          </div>
          <div className="col-span-2 py-2 px-5 border rounded flex justify-start items-center gap-2">
            <input
              type="text"
              placeholder="Phone Number"
              className="placeholder:text-bodyText w-full outline-none"
            />
          </div>
          <div className="col-span-2 py-2 px-5 border rounded flex justify-start items-center gap-2">
            <input
              type="text"
              placeholder="City/Pincode"
              className="placeholder:text-bodyText w-full outline-none"
            />
          </div>

          <div className="col-span-2">
            <button className="py-2.5 bg-yellow-400 border rounded  block text-center   hover:border-mainTextColor font-bold duration-500 w-full text-slate-800">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  const AdvantagesData = {
    title: "",
    heading: "FSSAI [Food License] Registration & Certificate",
    description:
      "FSSAI, under the Ministry of Health, ensures food safety by setting quality standards for manufacturing, sale, and import. An FSSAI license is mandatory for all food businesses in India. Here are the Benefits – ",
    image: Rocket_With_Men,
    advantages: [
      {
        title: "Access industry updates and food safety resources.",
        description: "",
        icon: <svg>...</svg>,
      },
      {
        title: "Build consumer trust using the FSSAI logo.",
        description: "",
        icon: <svg>...</svg>,
      },
      {
        title: "Minimize risks with strict compliance.",
        description: "",
        icon: <svg>...</svg>,
      },
      {
        title: "Ensure legal protection through adherence to regulations.",
        description: "",
        icon: <svg>...</svg>,
      },
      {
        title: "Unlock growth opportunities with certified credibility.",
        description: "",
        icon: <svg>...</svg>,
      },
    ],
  };
  const BreadcrumbData = {
    title: "FSSAI Food License",
    heading: "FSSAI [Food License] Certificate",
    description: "Ensurekar is dedicated to Support You.",
    image: "",
    component: Component,
    bottomHeading: "Get Your FASSAI License in 3 Days.",
    cartDetails:{
      id:22,
      name: "FSSAI Food License",
      price: 10000,
      quantity: 1,
      subtotal: 10000,
      image: productImage,
    }
  };
  const OverviewData = {
    heading: "",
    meta: "",
    introduction: {
      heading: "",
      description: [],
    },
    advantagesInfo: {
      heading: "Advantages",
      meta: "of Digital Signature",
      description: "",
      advantages: [
        {
          imageUrl: FSSAI_Basic_Registration.src,
          heading: "FSSAI Basic Registration",
          details:
            "If the food business owner generates an annual turnover that is less than ₹12 lakhs, they shall get registered through basic registration.",
        },
        {
          imageUrl: FSSAI_State_License.src,
          heading: "FSSAI State License",
          details:
            "If the food business has an annual turnover between ₹12 lakhs and ₹20 crores, then the food business operator should apply for a state license.",
        },
        {
          imageUrl: FSSAI_Central_License.src,
          heading: "FSSAI Central License",
          details:
            "If the annual revenue of the food business is above ₹20 crore, then the food business owner should apply for a central license using Form B. This license is also required for food businesses with branches across India.",
        },
       
      ],
    },
    eligibilityCriteria: [
      {
        imageData: {
          imageUrl: Rocket_With_Men,
          imageDirection: "right",
        },
        heading: {
          start: " ",
          blueText: "Eligibility Criteria  ",
          end: "for FSSAI Registration",
        },
        subHeading:
          "Food business owners must apply for FSSAI registration according to their turnover limits and food capacity. Below is the complete list of eligibility criteria:",
        startingDescription: "",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              {
                heading: "",
                description:
                  "Food businesses with an annual revenue of up to ₹12 lakh",
              },
              {
                heading: "",
                description: "Small vendors selling food products",
              },
              {
                heading: "",
                description:
                  "Individuals who independently produce or sell any food item",
              },
              {
                heading: "",
                description: "Individuals managing temporary food stalls",
              },
              {
                heading: "",
                description:
                  "People serving meals at social or religious gatherings (not including caterers)",
              },
              {
                heading: "",
                description:
                  "Cottage or small-scale enterprises operating in the food sector.",
              },
            ],
          },
        ],
      },
      {
        imageData: {
          imageUrl: Rocket_With_Men,
          imageDirection: "left",
        },
        heading: {
          start: "FSSAI Registration",
          blueText: " Checklist",
          end: "",
        },
        subHeading:
          "To apply for FSSAI registration, applicants must provide information about their business and activities. Here's a comprehensive checklist:",
        startingDescription: "",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              { heading: "", description: "Business name and entity type" },
              {
                heading: "",
                description: "Official address proof of the business",
              },
              {
                heading: "",
                description: "Contact information for the business",
              },
              { heading: "", description: "Physical address of the business" },
              {
                heading: "",
                description: "Description of business activities",
              },
              { heading: "", description: "Total annual production quantity" },
              { heading: "", description: "Business registration details" },
              { heading: "", description: "	Date of business commencement" },
              {
                heading: "",
                description:
                  "Total duration of commitment for seasonal businesses.",
              },
            ],
          },
        ],
      },
      {
        imageData: {
          imageUrl: Rocket_With_Men,
          imageDirection: "right",
        },
        heading: {
          start: "",
          blueText: "Required Documents ",
          end: "for FSSAI Registration",
        },
        subHeading:
          "Based on the type of FSSAI license required the following documents are mandatory for registration:",
        startingDescription: "",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "Basic Registration",
            description: "",
            steps: [
              {
                heading: "",
                description:
                  "Identity proof of the applicant (Aadhar card, Voter ID, PAN card, passport, etc.)",
              },
              {
                heading: "",
                description: "Passport-sized photograph of the applicant",
              },
              {
                heading: "",
                description:
                  "Proof of possession of premises (rent agreement, utility bill, etc.)",
              },
            ],
          },
          {
            heading: "State FSSAI License",
            description: "",
            steps: [
              {
                heading: "",
                description: "Blueprint/layout plan of the processing unit",
              },
              {
                heading: "",
                description:
                  "List of directors/partners/proprietor with address and contact details",
              },
              {
                heading: "",
                description:
                  "Certificate of Incorporation/Partnership deed/Affidavit of proprietorship",
              },
              {
                heading: "",
                description: "NOC from the local municipality or Panchayat",
              },
              {
                heading: "",
                description:
                  "Food Safety Management System plan or certificate",
              },
              {
                heading: "",
                description:
                  "Source of raw material for meat and milk products",
              },
            ],
          },
          {
            heading: "Central FSSAI License",
            description: "",
            steps: [
              {
                heading: "",
                description: "Blueprint/layout plan of the processing unit",
              },
              {
                heading: "",
                description:
                  "List of directors/partners/proprietor with address and contact details",
              },
              {
                heading: "",
                description:
                  "Certificate of Incorporation/Partnership deed/Affidavit of proprietorship",
              },
              {
                heading: "",
                description: "NOC from the local municipality or Panchayat",
              },
              {
                heading: "",
                description:
                  "Food safety management system plan or certificate",
              },
              {
                heading: "",
                description:
                  "Source of raw material for meat and milk products",
              },
              {
                heading: "",
                description:
                  "Certificate from the Ministry of Tourism (for businesses involved in catering)",
              },
              {
                heading: "",
                description: "NOC from the FSSAI (for proprietary foods)",
              },
              {
                heading: "",
                description:
                  "Analysis report of water to be used in the manufacturing process",
              },
              {
                heading: "",
                description:
                  "Certificate of analysis for all additives to be used.",
              },
            ],
          },
        ],
      },
    ],
  };
  const RegisterStepsData = {
    title: "Digital Signature",
    heading: "Steps to Register your",
    meta: "FSSAI Certificate",
    description: "",
    steps: [
      { title: "Create Your Account", description: "" },
      { title: "Talk To Our Experts", description: "" },
      { title: "Provide Documents and Get Certificate", description: "" },
    ],
    aboutSteps: [],
  };
  const AllInOneData = {
    heading: "Why FSSAI ( Food license) Certificate is Required?",
    description: [
      "An FSSAI license is essential for any food business operating in India. It ensures that your food products meet stringent safety and quality standards, protecting public health. This license not only boosts your brand's credibility but also opens doors to various government schemes and market opportunities. By obtaining an FSSAI license, you can build trust with your customers and establish a strong foundation for your food business. ",
    ],
    image: Company_People_Group,
  };
  const FAQsData = {
    title: "FAQs",
    heading: "",
    description: "",
    FAQs: [
      { question: "What is FoSCos?", answer: "NA" },
      { question: "Is GST registration necessary for FSSAI?", answer: "NA" },
      { question: "How can I obtain an FSSAI certificate?", answer: "NA" },
      {
        question: "Who qualifies for exemption from the FoSCos license?",
        answer: "NA",
      },
      {
        question:
          "How can I download the FSSAI registration certificate from the FoSCos portal?",
        answer: "NA",
      },
      {
        question:
          "What is the procedure for renewing my registration or license after it expires?",
        answer: "NA",
      },
      {
        question: "What steps are involved in obtaining the FoSCos license?",
        answer: "NA",
      },
      {
        question: "How can I acquire a food license in Chennai?",
        answer: "NA",
      },
      {
        question: "How do I apply for FSSAI registration in Tamil Nadu?",
        answer: "NA",
      },
      {
        question: "What does the vegetarian symbol on FSSAI products signify?",
        answer: "NA",
      },
      {
        question: "What does the fortified FSSAI logo represent?",
        answer: "NA",
      },
      { question: "What is FSSAI's tagline?", answer: "NA" },
      { question: "How can I renew my FSSAI registration?", answer: "NA" },
      {
        question:
          "Is it possible to operate a food business without FSSAI registration?",
        answer: "NA",
      },
      {
        question: "Which types of products require an FSSAI license?",
        answer: "NA",
      },
      { question: "Can an expired FSSAI license be renewed?", answer: "NA" },
      {
        question: "How can I obtain a food license for a fruit business?",
        answer: "NA",
      },
      {
        question: "How can I check the status of my FSSAI application online?",
        answer: "NA",
      },
    ],
  };
  const WhyEnsurekar = {
    title: "Why Choose Us",
    heading: "Why to choose Ensurekar for FASSAI Certification ",
    description: "",
    elements: [
      {
        heading: "Expert Assistance",
        description:
          "EnsureKar offers professional guidance throughout the entire registration process, ensuring compliance with legal requirements",
        imageUrl:TalkExpert ,
      },
      {
        heading: "Hassle-Free & Fast Service",
        description:
          "We handle everything from name approval to incorporation documents, ensuring a smooth and quick registration process",
        imageUrl: EnhancedBusinessCredibility,
      },
      {
        heading: "Transparent & Affordable",
        description:
          "We provide clear, upfront pricing with no hidden fees, making the entire process cost-effective and stress-free",
        imageUrl: HandUserMoney,
      },
    ],
  };
  return (
    <div>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <ServiceAdvantages AdvantagesData={AdvantagesData} />

      <All_In_One_ServiceSection AllInOneData={AllInOneData} />
      <div className="container stp-30 sbp-10 py-16">
        <p className="display-3 text-center  !leading-[130%]  text-bodyText mb-14 dark:text-white">
          {" "}
          Penalty for Non-Compliance
        </p>
        <p className="text-center text-mainText text-2xl dark:text-white">
          Section 32 of the Food Standards and Safety Act of 2006 permits the
          authorities to issue improvement notices, and noncompliance may result
          in license cancellation. Here is a detailed outline of the penalties
          collected:
        </p>
      </div>
      <div className="overflow-x-auto border rounded-lg shadow-md">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Sl.No
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Particulars
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Fine
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {[
              {
                slNo: 1,
                particulars: "Food quality not up to the act's standards",
                fine: "₹2 Lakh Petty manufacturer – ₹25,000/-",
              },
              { slNo: 2, particulars: "Sub-standard food", fine: "₹5 Lakh" },
              { slNo: 3, particulars: "Misbranded Food", fine: "₹3 Lakh" },
              {
                slNo: 4,
                particulars: "False description or deceptive advertising",
                fine: "₹10 Lakh",
              },
              {
                slNo: 5,
                particulars: "Extraneous matter in food",
                fine: "₹1 Lakh",
              },
              {
                slNo: 6,
                particulars:
                  "Disregard for the food safety officer's instructions",
                fine: "₹2 Lakh",
              },
              {
                slNo: 7,
                particulars: "Unhygienic processing or manufacture",
                fine: "₹1 Lakh",
              },
            ].map((item, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="px-6 py-4 whitespace-no-wrap border-r text-center">
                  {item.slNo}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-r">
                  {item.particulars}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-center">
                  {item.fine}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-[#F1F7FF]">
        <div className="md:my-[90px] max-w-[1200px] mx-auto max-md:bg-[#EEF6FF]">
          <div className="p-6">
        <h2 className="font-bold md:text-[32px] md:leading-[42px] text-center text-[24px] leading-[34px] mb-4 mx-auto md:mb-[32px] text-[#231F20]">
          {" "}
          <b style={{ color: "#007aff" }}>Difference</b> Between FSSAI Registration
          and FSSAI License
        </h2>
        <p className="leading-[24px] text-[#606162] text-center text-[16px] md:text-[18px] md:pb-[54px] pb-6">
          The FSSAI registration is a process of registering with the
          government and is best suited for small-scale businesses with
          limited turnover, whereas an FSSAI license is a 14-digit number
          provided to the FBOs if their annual returns exceed ₹12 lakhs. The
          differences are further discussed below:{" "}
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
          <tr className="shadow-md">
            <th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
              Particulars
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
              FSSAI Registration
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
              FSSAI License
            </th>
          </tr>
            </thead>
            <tbody className="text-sm">
          <tr>
            <td className="px-5 py-4 border-r border-gray-300">Turnover Limit</td>
            <td className="px-5 py-4 border-r border-gray-300">Companies with yearly sales of no more than ₹12 lakh</td>
            <td className="px-5 py-4">Businesses having an annual turnover of more than ₹12 lakh</td>
          </tr>
          <tr>
            <td className="px-5 py-4 border-r border-gray-300">Types</td>
            <td className="px-5 py-4 border-r border-gray-300">Basic Registration</td>
            <td className="px-5 py-4">FSSAI Central License and FSSAI State License</td>
          </tr>
          <tr>
            <td className="px-5 py-4 border-r border-gray-300">Size of Business</td>
            <td className="px-5 py-4 border-r border-gray-300">Petty food business operators</td>
            <td className="px-5 py-4">Medium and large-sized food business operators and food businesses</td>
          </tr>
          <tr>
            <td className="px-5 py-4 border-r border-gray-300">Duration</td>
            <td className="px-5 py-4 border-r border-gray-300">The duration is determined by how applicable the registration is</td>
            <td className="px-5 py-4">Issued with a one-year minimum and a five-year maximum term</td>
          </tr>
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto mt-8">
          <table className="min-w-full bg-white">
            <thead>
          <tr className="shadow-md">
            <th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
              Application
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
              Form A
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
              Form B
            </th>
          </tr>
            </thead>
            <tbody className="text-sm">
          <tr>
            <td className="px-5 py-4 border-r border-gray-300">Publication</td>
            <td className="px-5 py-4 border-r border-gray-300">The registered number and the FSSAI registration shall be prominently displayed on the product package and on the office premises, respectively</td>
            <td className="px-5 py-4">It is mandatory for exporters, importers, traders, and producers to display the FSSAI license number on the product packaging</td>
          </tr>
            </tbody>
          </table>
        </div>
          </div>
        </div>
      </div>
      <ServiceOverview OverviewData={OverviewData} />
      {/* <CompaniesAct /> */}
      <RegisterSteps RegisterSteps={RegisterStepsData} />

      <FAQsServicesSection FAQsData={FAQsData} />
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />

      <TestimonialSection />
    </div>
  );
};

export default FSSAI_Food_Licence;
