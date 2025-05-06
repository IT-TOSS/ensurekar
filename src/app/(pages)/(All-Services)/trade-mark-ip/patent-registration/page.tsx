"use client";

import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import CopyrightEducation from "@/app/components/Section/Copyright-Education";
import { ChatCircle, ChartLineUp, NotePencil } from "phosphor-react";
import never_worry_img from "../../../../images/never_worry_img.png";
import taxation_services_img from "../../../../images/taxation_services_img.png";
import Company_People_Group from "../../../../images/SGV-Types/Company-People-Group.svg";
import we_help from "../../../../images/we_help.png";
import React from "react";
import ExpertiseFlow from "@/app/components/Section/Expertise-Flow";
import { CoinsIcon } from "lucide-react";
import HelpSection from "@/app/components/Section/help-section";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import All_In_One_ServiceSection from "@/app/components/Section/All-in-One-All-Services";
import WhoShouldBuy from "@/app/components/Section/Service/Who-Should-Buy";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import productImage from "../../../../images/recent_post_img1.png";



import TalkExpert from "./../../../../images/SGV-Types/Talk-To-Our-Expert.svg";//"./../../../../images/SGV-Types/Talk-To-Our-Expert.svg";
import EnhancedBusinessCredibility from "../../../../images/SGV-Types/Enhanced-Business-Credibility.svg";
import HandUserMoney from "../../../../images/SGV-Types/Hand-User-Money.svg";


const Patentregistration = () => {
  const BreadcrumbData = {
    title: "Patent  Registration",
    heading: "Patent  Registration ",
    subHeading: "",
    description: "Secure Your Invention with Patent Registration in India",
    image: "",
    bottomHeading:
      "Fast and Accurate Filing by Certified Patent Agents with a 100% Safe Process",
      cartDetails: {
        id: 34,
        name: "Patent Registration",
        price: 16000,
        quantity: 1,
        subtotal:16000,
        image: productImage,
      },
  };
  const ExpertiseFlowData = {
    title: "",
    heading: "What is Patent Registration",
    description:
      "Patent registration in India grants exclusive rights to inventors for up to 20 years, preventing others from using or selling their invention without permission. In exchange, inventors must disclose their invention's details to the public. EnsureKar simplifies the patent filing process with expert online support, ensuring a smooth and efficient experience.",
    image: taxation_services_img,
    flowData: [
      {
        icon: <CoinsIcon size={24} />,
        title: "Exclusive Rights to the Trademark",
        description: "",
      },
      {
        icon: <CoinsIcon size={24} />,
        title: "Legal Protection for Your Brand",
        description: "",
      },
      {
        icon: <CoinsIcon size={24} />,
        title: "Prevention of Unauthorized Use",
        description: "",
      },
      {
        icon: <CoinsIcon size={24} />,
        title: "Ability to License or Transfer the Trademark",
        description: "",
      },
      {
        icon: <CoinsIcon size={24} />,
        title: "Legal Recourse Against Infringers",
        description: "",
      },
    ],
  };
  const CopyrightEducationData = {
    title: "",
    heading: "What Kind of Inventions Cannot be Patented?",
    description:
      "Patent registration in India does not cover the following types of inventions:",
    features: [
      {
        title: "Discoveries of natural laws or scientific principles",
        description: "",
        icon: <ChatCircle weight="fill" />,
      },
      {
        title:
          "Aesthetic creations such as literary, theatrical, musical, or artistic works",
        description: "",
        icon: <ChatCircle weight="fill" />,
      },
      {
        title:
          "Methods, rules, or systems for mental activities, playing games, or conducting business",
        description: "",
        icon: <ChatCircle weight="fill" />,
      },
      {
        title: "Inventions that are against public morality or order",
        description: "",
        icon: <ChatCircle weight="fill" />,
      },
      {
        title: "Inventions that could harm the environment, animals, or people",
        description: "",
        icon: <ChatCircle weight="fill" />,
      },
    ],
    image: never_worry_img,
  };
  const HelpSectionData = {
    heading: "Importance of Patent Registration",
    subHeading: "",
    description: "",
    image: Company_People_Group,
    // image: we_help,
    bottomHeading: "",
    bottomDescription: "",
    bottomList: [
      {
        heading: "",
        description:
          "Granting exclusive rights to the inventor or owner of the invention.",
      },
      {
        heading: "",
        description:
          "The ability to prevent unauthorized manufacturing, usage, or sale of the invention.",
      },
      {
        heading: "",
        description: "The option to sell, license, or transfer the patent.",
      },
      {
        heading: "",
        description:
          "The right to seek compensation and take legal action against patent infringement.",
      },
      {
        heading: "",
        description:
          "Promoting research, development, and innovation, which can drive economic growth.",
      },
    ],
  };

  const WhoShouldBuyData = {
    title: "",
    heading: "Forms for Patent Registration",
    subHeading: "",

    rolesData: {
      heading: "",
      description: "",
      roles: [
        {
          icon: "",
          title: "Form 1",
          description:
            "The primary application form containing details about the applicant, invention, and claims.",
        },
        {
          icon: "",
          title: "Form 2",
          description:
            "Used to declare priority applications filed in other countries (if applicable).",
          imageUrl: "",
        },
        {
          icon: "",
          title: "Form 3",
          description: "Specifies the inventors of the patent.",
        },
        {
          icon: "",
          title: "Form 4",
          description: "Required for government undertakings.",
        },
      ],
    },
  };
  const RightToUseData = {
    title: "",
    heading: "Right to use of Patent ?",
    description:
      "The transfer of ownership rights of a patent from the original holder to another party through a formal agreement.",
    image: taxation_services_img,
    flowData: [
      {
        icon: <CoinsIcon size={24} />,
        title: "India follows a first-to-file system for patent registration.",
        description: "",
      },
      {
        icon: <CoinsIcon size={24} />,
        title:
          "The Indian Patent Office has four branches located in Mumbai, Delhi, Kolkata, and Chennai.",
        description: "",
      },
      {
        icon: <CoinsIcon size={24} />,
        title:
          "Patent applications in India can be submitted in English or Hindi.",
        description: "",
      },
      {
        icon: <CoinsIcon size={24} />,
        title:
          "In India, the patentability of an invention is assessed based on its novelty, inventive step, and industrial applicability.",
        description: "",
      },
    ],
  };
  const AllInOneData = {
    title: "",
    heading: "What is Patent Renewal ?",
    image: Company_People_Group,
    description: [
      "Patent renewal is the process of extending the validity of a patent by paying the prescribed renewal fee. The renewal fee must be paid before the expiration",

      "Can a Patent be Revoked in India?",
      "Yes, one can be revoked in India under the following circumstances, such as:",
      "Non-payment of renewal fees",
      "Non-working of the patented invention",
      "Public interest",
    ],
  };
  const RegisterStepsData = {
    title: "steps",
    heading: "Steps for ",
    meta: "Income Tax Assessment ",
    description: "",
    steps: [
      {
        title: "Submit Application",
        description:
          "File the patent application with all required documents. ",
      },
      {
        title: "Publication",
        description:
          "The application will be published in the official journal for public viewing. ",
      },
      {
        title: "Examination and Grant",
        description: "Request an examination of the application",
      },
    ],
    aboutSteps: [],
    footerMessage: "Simple, quick, and hassle-free!",
  };
  const FAQsData = {
    title: "FAQs",
    heading: "",
    description: "",
    FAQs: [
      { question: "Who can apply for a patent? ", answer: "NA" },
      {
        question: "How much does it cost to get a patent in India? ",
        answer: "NA",
      },
      { question: "In India, how long is a patent valid? ", answer: "NA" },
      { question: "What are the three types of patents? ", answer: "NA" },
      { question: "Who gives patents in India? ", answer: "NA" },
      {
        question:
          "What information is required to obtain patent registration? ",
        answer: "NA",
      },
      {
        question: "Why is patent registration in India important? ",
        answer: "NA",
      },
      {
        question: "Is Indian Patent valid throughout the world? ",
        answer: "NA",
      },
      {
        question:
          "If a patent application is rejected, does the applicant have a chance to be heard?",
        answer: "NA",
      },
    ],
  };
  const WhyEnsurekar = {
    heading: "Why to choose Ensurekar for Patent Registration ",
    description: "",
    elements: [
      {
        heading: "Expert Guidance",
        description:
          "Our team of patent experts will guide you through the entire registration process, ensuring compliance with all legal requirements.",
        imageUrl: TalkExpert,
      },
      {
        heading: "Efficient and Streamlined",
        description:
          "We handle all aspects of your patent application, from initial filing to obtaining the patent, making the process seamless and efficient.",
        imageUrl: EnhancedBusinessCredibility,
      },
      {
        heading: "Transparent and Affordable",
        description:
          " We offer clear pricing with no hidden fees, providing a cost-effective and stress-free experience.",
        imageUrl: HandUserMoney,
      },
    ],
  };
  return (
    <>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <ExpertiseFlow ExpertiseFlowData={ExpertiseFlowData} />
      <CopyrightEducation CopyrightEducationData={CopyrightEducationData} />
      <HelpSection HelpSectionData={HelpSectionData} />
      <WhoShouldBuy WhoShouldBuyData={WhoShouldBuyData} />
      <All_In_One_ServiceSection AllInOneData={AllInOneData} />
      <ExpertiseFlow ExpertiseFlowData={RightToUseData} />
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <div className=" container stp-15 sbp-15">
        <div className="overflow-x-auto border rounded-lg shadow-md">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="border-2 bg-gray-100">
                <th className="px-5 py-3 border-r-2  text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                  Aspect
                </th>
                <th className="px-5 py-3 border-r-2 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                  Trademark
                </th>
                <th className="px-5 py-3 border-r-2 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                  Patent
                </th>
                <th className="px-5 py-3 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                  Copyright
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="bg-white border-b">
                <td className="px-5 py-4 border-r-2 col-span-10 items-center">
                  What's Protected
                </td>
                <td className="px-5 py-4 border-r-2">
                  Any symbol, word, phrase, or design that differentiates one
                  party's goods from another's.
                </td>
                <td className="px-5 py-4 border-r-2">
                  Inventions, including machines, processes, compositions, and
                  improvements.
                </td>
                <td className="px-5 py-4">
                  Creative works such as books, articles, music, photographs,
                  sculptures, dances, sound recordings, and films.
                </td>
              </tr>
              <tr className="bg-gray-50 border-b">
                <td className="px-5 py-4 border-r-2">
                  Requirements for Protection
                </td>
                <td className="px-5 py-4 border-r-2">
                  Must be unique and capable of identifying the origin of the
                  goods or services.
                </td>
                <td className="px-5 py-4">
                  Must be novel, useful, and inventive
                </td>
                <td className="px-5 py-4">
                  Must be original, creative, and recorded in a physical form.
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-5 py-4 border-r-2">Term of Protection</td>
                <td className="px-5 py-4 border-r-2">
                  Indefinite, as long as the trademark remains in use.
                </td>
                <td className="px-5 py-4 border-r-2">20 years</td>
                <td className="px-5 py-4">Life of the author plus 70 years.</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-5 py-4 border-r-2">Rights Granted</td>
                <td className="px-5 py-4 border-r-2">
                  The right to use the mark and prevent others from using a
                  similar one that could cause confusion
                </td>
                <td className="px-5 py-4 border-r-2">
                  The right to prevent others from producing, selling, or
                  importing the patented invention.
                </td>
                <td className="px-5 py-4">
                  The right to control the use, distribution, performance, and
                  display of the work.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className=" container stp-15 sbp-15">
        <div className="overflow-x-auto border rounded-lg shadow-md">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="border-2 bg-gray-100">
                <th className="px-5 py-3 border-r-2  text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Type of Registration
                </th>
                <th className="px-5 py-3 border-r-2 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Applies To
                </th>
                <th className="px-5 py-3 border-r-2 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Applicants
                </th>
                <th className="px-5 py-3 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Ownership Without Registration
                </th>
                <th className="px-5 py-3 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Validity
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="bg-white border-b">
                <td className="px-5 py-4 border-r-2 col-span-10 items-center">
                Patent
                </td>
                <td className="px-5 py-4 border-r-2">
                Inventions & ideas
                </td>
                <td className="px-5 py-4 border-r-2">
                Inventors & designers
                </td>
                <td className="px-5 py-4">
                No
                </td>
                <td className="px-5 py-4">
                20 years
                </td>
              </tr>
              <tr className="bg-gray-50 border-b">
                <td className="px-5 py-4 border-r-2">
                Copyright
                </td>
                <td className="px-5 py-4 border-r-2">
                Photographs, movies, music, software code
                </td>
                <td className="px-5 py-4">
                Artists & creative professionals
                </td>
                <td className="px-5 py-4">
                Yes, but rights are limited
                </td>
                <td className="px-5 py-4">
                Lifetime of the author + 60 years
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-5 py-4 border-r-2">Trademark</td>
                <td className="px-5 py-4 border-r-2">
                Words, logos, slogans
                </td>
                <td className="px-5 py-4 border-r-2">Business owners</td>
                <td className="px-5 py-4">Yes, but rights are limited</td>
                <td className="px-5 py-4">Indefinite, needs to be renewed every 10 years</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
      <FAQsServicesSection FAQsData={FAQsData} />

    </>
  );
};

export default Patentregistration;
