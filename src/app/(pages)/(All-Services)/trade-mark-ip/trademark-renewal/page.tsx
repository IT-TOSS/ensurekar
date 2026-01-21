"use client";

import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import ExpertiseFlow from "@/app/components/Section/Expertise-Flow";
import taxation_services_img from "../../../../images/taxation_services_img.png";
import React from "react";
import { CoinsIcon } from "lucide-react";
import ServiceCovered from "@/app/components/Section/Service/Service-Covered";
import {
  Money,
  ChartLineUp,
  FileText,
  Calculator,
  ChatCircle,
  NotePencil,
} from "phosphor-react";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import HelpSection from "@/app/components/Section/help-section";
// import we_help from "../../../../images/we_help.png";
import we_help from "@/app/images/pages icons/other Required images/3-removebg-preview.png";
import never_worry_img from "@/app/images/pages icons/other Required images/4-removebg-preview.png";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import CopyrightEducation from "@/app/components/Section/Copyright-Education";
import productImage from "../../../../images/recent_post_img1.png";

const TrademarkRenewal = () => {
  const BreadcrumbData = {
    title: "Trademark Renewal",
    heading: "Trademark Renewal Online Services",
    subHeading: "Protect Your Brand Identity : ",
    description: "Ensure your trademark remains legally protected.",
    image: "",
    bottomHeading: "Renew Your Trademark Hassle-Free with Expert Assistance",
    cartDetails: {
      id: 32,
      name: "Trademark Renewal",
      price: 13500,
      quantity: 1,
      subtotal: 13500,
      image: productImage,
    },
  };
  const ExpertiseFlowData = {
    title: "Renewal",
    heading: "Trademark Renewal",
    description:
      'Trademark registrations are valid for 10 years and can be renewed indefinitely. Renewal starts six months before expiry, with reminders sent to your registered address. If not renewed, the Registrar may announce its removal in the Trade Marks Journal within a year. Renewal can still be done online within 6-12 months after expiry through a "restoration" process.',
    image: taxation_services_img,
    flowData: [
      {
        icon: <CoinsIcon size={24} />,
        title: "10-Year Validity",
        description:
          "Trademark registrations are valid for 10 years and can be renewed indefinitely to maintain legal protection.",
      },
      {
        icon: <CoinsIcon size={24} />,
        title: "Renewal Timeline",
        description:
          "Start the renewal process six months before the expiration date to avoid lapses in trademark rights.",
      },
      {
        icon: <CoinsIcon size={24} />,
        title: "Reminder Notifications",
        description:
          "Authorities send reminders to the registered address, ensuring you don’t miss the renewal deadline.",
      },
      {
        icon: <CoinsIcon size={24} />,
        title: "Risk of Removal",
        description:
          "Failure to renew may result in the registrar publishing a withdrawal notice in the Trade Marks Journal, typically within a year after expiration.",
      },
      {
        icon: <CoinsIcon size={24} />,
        title: "Restoration Option",
        description:
          "Expired trademarks can still be renewed within 6-12 months through a restoration process by paying the required fee.",
      },
    ],
  };
  const ServiceCoveredData = {
    title: "",
    heading: "Advantages of Trademark Renewal",
    subHeading: "",
    description:
      "Registering your trademark offers legal protection against infringement and boosts your brand's value, opening doors for licensing opportunities and a unique market identity.",
    image: "",
    services: [
      {
        title: "Legal Protection",
        description:
          "Trademark renewal ensures continued legal rights to your trademark, allowing you to take action against infringement and unauthorized use.",
        icon: <Calculator />,
      },
      {
        title: "Brand Longevity",
        description:
          "Renewing your trademark keeps your brand's identity legally protected indefinitely, ensuring it remains exclusive and recognizable in the market.",
        icon: <Calculator />,
      },
      {
        title: "Business Opportunities",
        description:
          "A renewed trademark retains its status as an intangible asset, enabling opportunities for licensing, franchising, or selling for substantial profits.",
        icon: <Calculator />,
      },
      {
        title: "Preservation of Goodwill",
        description:
          "Trademark renewal safeguards the reputation and trust your brand has built over time, maintaining its credibility among customers.",
        icon: <Calculator />,
      },
      {
        title: "Avoiding Legal Risks",
        description:
          "Timely renewal helps avoid the risk of trademark withdrawal, ensuring your rights are protected without additional restoration fees or legal complications.",
        icon: <Calculator />,
      },
    ],
  };
  const RegisterStepsData = {
    title: "",
    heading: "Steps to Renew a ",
    meta: "Trademark in India",
    description: "",
    steps: [
      { title: "Conduct a Trademark Search", description: "" },
      { title: "Submit Renewal Application", description: "" },
      { title: "Review and Publication", description: "" },
    ],
    aboutSteps: [],
  };
  const HelpSectionData = {
    heading:
      "Documents Required for Trademark Registration Renewal Online India",
    subHeading: "",
    description: "",
    image: we_help,
    bottomHeading: "",
    bottomDescription: "",
    bottomList: [
      {
        heading: "",
        description: "A duplicate of the registration document.",
      },
      {
        heading: "",
        description:
          "Copy of TM-A form (form used for the original form for registering the trademark).",
      },
      {
        heading: "",
        description: "Proof of the applicant's identity and address.",
      },
      {
        heading: "",
        description:
          "The applicant may be given power of attorney if they are an authorised representative or agency.",
      },
      {
        heading: "",
        description: "Bringing a Trademark Back",
      },
    ],
  };
  const CopyrightEducationData = {
    title: "",
    heading: "Checklist For Renewal of A Trademark",
    description: "",
    features: [
      {
        title: "Confirm Ownership",
        description:
          "Ensure that the trademark owner has prior ownership of the trademark that needs renewal.",
        icon: <ChatCircle weight="fill" />,
      },
      {
        title: "Evaluate Commercial Intent",
        description:
          "Assess whether the trademark renewal aligns with the intended commercial use.",
        icon: <ChartLineUp weight="fill" />,
      },
      {
        title: "Perform Trademark Search",
        description:
          "Conduct a detailed search in the licensed trademark database to ensure no conflicting trademarks exist.",
        icon: <NotePencil weight="fill" />,
      },
      {
        title: "Consult Legal Advice",
        description:
          "In case of a trademark dispute, seek legal counsel to find an appropriate solution.",
        icon: <NotePencil weight="fill" />,
      },
      {
        title: "Complete and Submit Renewal Application",
        description:
          "Prepare the renewal application and ensure all necessary requirements are met.",
        icon: <NotePencil weight="fill" />,
      },
    ],
    image: never_worry_img,
  };
  const FAQsData = {
    title: "FAQs",
    heading: "What Ensurekar offer you?",
    description: "",
    FAQs: [
      {
        question: "How does the trademark restoration process work?",
        answer: "NA",
      },
      {
        question: "What is the fee for trademark renewal in India?",
        answer: "NA",
      },
      {
        question:
          "Can I file my trademark renewal application online after the expiration date?",
        answer: "NA",
      },
      {
        question: "When should I apply for trademark renewal in India?",
        answer: "NA",
      },
      {
        question:
          "Is the trademark renewal process the same as the trademark restoration process?",
        answer: "NA",
      },
      {
        question:
          "After how many years can trademark registration in India be renewed?",
        answer: "NA",
      },
    ],
  };
  return (
    <>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <ExpertiseFlow ExpertiseFlowData={ExpertiseFlowData} />
      <HelpSection HelpSectionData={HelpSectionData} />
      <CopyrightEducation CopyrightEducationData={CopyrightEducationData} />
      <ServiceCovered ServiceCoveredData={ServiceCoveredData} />
      <div className="bg-[#F1F7FF] stp-15 sbp-15">
        <div className="md:my-[90px] max-w-[1200px] mx-auto max-md:bg-[#EEF6FF]">
          <div className="p-6">
            <h2 className="font-bold md:text-[32px] md:leading-[42px] text-center text-[24px] leading-[34px] mb-4 mx-auto md:mb-[32px] text-[#231F20]">
              {" "}
              Forms Required for Renewal of Trademark in India
            </h2>
            <p className="leading-[24px] text-[#606162] text-center text-[16px] md:text-[18px] md:pb-[54px] pb-6">
              For the renewal of trademark in India, the following forms must be
              submitted with the appropriate fee.
            </p>
            <ul className="text-[#231F20]  leading-[34px] mb-10 list-disc list-inside">
              {[
                "Notice that the Department of the Registrar of Trademarks is required to send",
                "The Department of the Registrar of Trademarks will notify the trademark owner six months prior to the renewal deadline. The trademark will be deleted from the Register of Trademarks if it is not renewed within the permitted time frame",
                "The Trademark may, however, be reinstated by submitting an application and the necessary price",
                "In case of trademark restoration, a trademark may be reinstated after six months but no later than one year from the date of the mark's last registration's expiration.",
              ].map((item: string, index: number) => {
                return (
                  <li
                    key={index}
                    className=" text-[#231F20]  leading-[34px] mb-4"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
            <div className="overflow-x-auto border rounded-lg shadow-md">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="border-2 bg-gray-100">
                    <th className="px-5 py-3 border-r-2  text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                      Form type
                    </th>
                    <th className="px-5 py-3 border-r-2 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                      Purpose of the Form
                    </th>
                    <th className="px-5 py-3 border-r-2 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                      Cost (physical filing)
                    </th>
                    <th className="px-5 py-3 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                      Cost (e-filing)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="bg-white border-b">
                    <td
                      rowSpan={2}
                      className="px-5 py-4 border-r-2 col-span-10 items-center"
                    >
                      TM-R
                    </td>
                    <td className="px-5 py-4 border-r-2">
                      Form to be completed by the trademark owner when
                      requesting to renew their registration
                    </td>
                    <td className="px-5 py-4 border-r-2">₹10,000</td>
                    <td className="px-5 py-4">₹9000</td>
                  </tr>
                  <tr className="bg-gray-50 border-b">
                    <td className="px-5 py-4 border-r-2">
                      Application for trademark registration renewal with a
                      surcharge
                    </td>
                    <td className="px-5 py-4 border-r-2">
                      ₹5000 + Renewal fee
                    </td>
                    <td className="px-5 py-4">₹4500 + Renewal fee</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-5 py-4 border-r-2">TM-18</td>
                    <td className="px-5 py-4 border-r-2">
                      Supporting affidavit for the case statement
                    </td>
                    <td className="px-5 py-4 border-r-2">-</td>
                    <td className="px-5 py-4">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className=" my-10 ">
            <p>
              The trademark registration's owner or an authorized user of the
              trademark is eligible to submit a request for renewals or
              restoration
            </p>
          </div>
        </div>
      </div>
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <FAQsServicesSection FAQsData={FAQsData} routeName="trademark-renewal" />
    </>
  );
};

export default TrademarkRenewal;
