"use client";

import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import ServiceAdvantages from "@/app/components/Section/Advantages-All-Services";
import ServiceCovered from "@/app/components/Section/Service/Service-Covered";
import Rocket_With_Men from "../../../../images/SGV-Types/Rocket-With-Men.svg";
import productImage from "../../../../images/recent_post_img1.png";

import {
  Calculator,
  FileText,
  Money,
  ChartLineUp,
  CheckCircle,
  ShieldCheck,
} from "phosphor-react";
import React from "react";
import DocumentsRequired from "@/app/components/Section/Documents-Required";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";


import TalkExpert from "./../../../../images/SGV-Types/Talk-To-Our-Expert.svg";
import EnhancedBusinessCredibility from "../../../../images/SGV-Types/Enhanced-Business-Credibility.svg";
import HandUserMoney from "../../../../images/SGV-Types/Hand-User-Money.svg";

const page = () => {
  const BreadcrumbData = {
    title: "Income Tax Return Filing",
    heading: "Professional Guidance for Responding to ITR Notices in India",
    subHeading: "",
    description: "",
    image: "",
    bottomHeading: "Expert Solutions for Hassle-Free ITR Notice Response",
    cartDetails:{
      id:41,
      name: "Income Tax Notice",
      price: 5000,
      quantity: 1,
      subtotal: 5000,
      image: productImage,
    }
  };
  const ServiceCoveredData = {
    title: "",
    heading: "Process of Responding to Income Tax Notices",
    subHeading: "",
    description: "",
    image: "",
    services: [
      {
        title: "Fill out the Form",
        description:
          "Describe your problem your notice along with the section                               ",
        icon: <Calculator weight="fill" />,
      },
      {
        title: "Schedule an Appointment",
        description:
          "Book a call with our CA resolving the problem within time line ",
        icon: <FileText weight="fill" />,
      },
      {
        title: "Make a Payment     ",
        description: "Just pay the fees according to the    problem  ",
        icon: <Money weight="fill" />,
      },
      {
        title: "Connect with Experts ",
        description:
          "After payment confirmation talk    to our experts and get the solution within timeline and save late fees    & penalties ",
        icon: <ChartLineUp weight="fill" />,
      },
    ],
  };
  const DocumentsRequiredData = {
    title: "",
    heading: "Common Reasons for Receiving ITR Notices",
    description:
      "The documents required for professional tax registration vary depending on the state. However, the following are some of the common documents that may be required:",
    documentsRequired: [
      { icon: "", text: "Mismatch in reported income and Form 26AS." },
      { icon: "", text: "Non-disclosure of income or assets." },
      {
        icon: "",
        text: "Errors in tax return filings (e.g., wrong details or miscalculations).",
      },
      { icon: "", text: "Late filing or non-filing of ITR." },
      { icon: "", text: "Claiming deductions not supported by valid proofs." },
    ],
  };
  const CoreServiceData = {
    title: "",
    heading: "Types of ITR Notices",
    subHeading: "",
    description: "",
    image: "",
    services: [
      {
        title: "Section 143(1): Intimation Notice",
        description:
          "This notice is sent to inform taxpayers about any discrepancies, adjustments, or confirmations in their filed ITR compared to the records of the Income Tax Department. It may include details of a refund, tax payable, or no discrepancies found.",
        icon: <Calculator weight="fill" />,
      },
      {
        title: "Notice Under Section 142(1)",
        description:
          "Issued when the Income Tax Department needs additional information or documents to process your tax return or start an inquiry if you haven't filed your return.",
        icon: <FileText weight="fill" />,
      },
      {
        title: "Notice Sent Under Section 139(9)",
        description:
          "Sent if your income tax return is found to be defective due to missing or incorrect information, requiring rectification within the specified time.",
        icon: <Money weight="fill" />,
      },
      {
        title: "Notice Under Section 148",
        description:
          "Issued when the department believes income has escaped assessment and requires the taxpayer to reassess their income for the relevant financial year.",
        icon: <ChartLineUp weight="fill" />,
      },
      {
        title: "Notice Sent Under Section 156",
        description:
          "Known as a demand notice, this is sent to request payment of outstanding tax dues, including penalties or interest.",
        icon: <Calculator weight="fill" />,
      },
      {
        title: "Notice Under Section 245",
        description:
          "Issued when the department intends to adjust a refund against outstanding tax liabilities, requiring the taxpayer’s confirmation.",
        icon: <FileText weight="fill" />,
      },
      {
        title: "Notice Under Section 271",
        description:
          "Related to penalties imposed for concealing income, providing inaccurate details, or failing to comply with tax regulations.",
        icon: <Money weight="fill" />,
      },
      {
        title: "Notice Under Section 143(2)",
        description:
          "Sent to conduct a detailed scrutiny of the taxpayer’s income tax return to verify its accuracy and authenticity.",
        icon: <ChartLineUp weight="fill" />,
      },
    ],
  };
  const WhyEnsurekar = {
    heading: "Why Choose Ensurekar for Income Tax Notice?",
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
  const RegisterStepsData = {
    title: "",
    heading: " Steps for Your",
    meta: " ITR Notice Response ",
    description: "",
    steps: [
      {
        title: "Create Your Account",
        description:
          "",
      },
      {
        title: "Talk To Our Experts",
        description:
          "",
      },
      {
        title: "Provide Documents and Get Resolved",
        description:"",
      },
    ],
    aboutSteps: [],
  };
  const FAQsData = {
    title: "FAQs",
    heading: "",
    description: "",
    FAQs: [
      { question: "", answer: "NA" },
    { question: "How do I resolve my income tax notice?", answer: "NA" },
    { question: "Can I ignore an income tax notice?", answer: "NA" },
    { question: "How To Authenticate Notice/Order Issued by ITD?", answer: "NA" },
    { question: "How long does it take to resolve an issue after receiving an Income Tax Notice?", answer: "NA" },
    { question: "How can I check my tax notice online?", answer: "NA" },
    { question: "Do salaried employees get an income tax notice?", answer: "NA" },
    { question: "How do I avoid a tax notice?", answer: "NA" },
    { question: "How do I check my income tax notice status?", answer: "NA" },
    { question: "What is the punishment for ignoring a tax notice?", answer: "NA" },
    { question: "How many years back can the income tax department send a notice?", answer: "NA" }
     
    ],
  };
  return (
    <>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <ServiceCovered ServiceCoveredData={ServiceCoveredData} />

      <DocumentsRequired DocumentsRequiredData={DocumentsRequiredData} />

      <div className="overflow-x-auto container stp-15 sbp-15">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Sr. No.</th>
              <th className="px-4 py-2 border-b">Transaction</th>
              <th className="px-4 py-2 border-b">Threshold (₹)</th>
              <th className="px-4 py-2 border-b">Reporting Authority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b">1</td>
              <td className="px-4 py-2 border-b">
                Cash payment for purchasing bank draft, pay order, banker’s
                cheque, or prepaid RBI instruments
              </td>
              <td className="px-4 py-2 border-b">10,00,000</td>
              <td className="px-4 py-2 border-b">
                Banks or cooperative societies must report transactions
                exceeding this limit via Form 61A to the Director of Income Tax.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">2</td>
              <td className="px-4 py-2 border-b">
                Cash deposits in a savings bank account
              </td>
              <td className="px-4 py-2 border-b">10,00,000</td>
              <td className="px-4 py-2 border-b">
                Banks, cooperative societies, or the Postmaster General.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">3</td>
              <td className="px-4 py-2 border-b">
                Cash deposit or withdrawal from a current account
              </td>
              <td className="px-4 py-2 border-b">50,00,000</td>
              <td className="px-4 py-2 border-b">
                Banks or co-operative societies.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">4</td>
              <td className="px-4 py-2 border-b">
                Sale or purchase of an immovable property
              </td>
              <td className="px-4 py-2 border-b">30,00,000</td>
              <td className="px-4 py-2 border-b">
                The Property Registrar/Sub-registrar via Form 61A.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">5</td>
              <td className="px-4 py-2 border-b">
                Investments in shares, mutual funds, debentures, and bonds in
                cash
              </td>
              <td className="px-4 py-2 border-b">10,00,000</td>
              <td className="px-4 py-2 border-b">
                Companies issuing shares, debentures, bonds, or Mutual Fund
                Trustees.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">6</td>
              <td className="px-4 py-2 border-b">
                Payment of credit card bill in cash
              </td>
              <td className="px-4 py-2 border-b">1,00,000</td>
              <td className="px-4 py-2 border-b">
                Banks or co-operative societies.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">7</td>
              <td className="px-4 py-2 border-b">
                Payment of credit card bill (non-cash modes)
              </td>
              <td className="px-4 py-2 border-b">10,00,000</td>
              <td className="px-4 py-2 border-b">
                Banks or co-operative societies.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">8</td>
              <td className="px-4 py-2 border-b">
                - Sale of foreign currency- Crediting FOREX card- Spending in
                foreign currency using debit/credit cards or traveler’s cheques
              </td>
              <td className="px-4 py-2 border-b">10,00,000</td>
              <td className="px-4 py-2 border-b">
                Authorized persons under the Foreign Exchange Management Act,
                1999.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">9</td>
              <td className="px-4 py-2 border-b">
                Cash deposits in fixed deposit or recurring deposit accounts
              </td>
              <td className="px-4 py-2 border-b">10,00,000</td>
              <td className="px-4 py-2 border-b">
                Banks, co-operative societies, Nidhi Companies, or NBFCs.
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <p className="text-mainText my-12 dark:text-white">
            This table provides a clear and concise reference for understanding
            transaction thresholds and reporting obligations.
          </p>
        </div>
      </div>
      <ServiceCovered ServiceCoveredData={CoreServiceData} />
      <section className=" w-full stp-15 sbp-15">
        <div className="container bg-transparent flex flex-wrap items-center justify-center rounded-lg  p-5">
          <div className="flex items-center justify-center w-1/5 ">
            <ShieldCheck size={150} color="#e6df0f" weight="fill" />
          </div>
          <div className="flex-1 mx-5">
            <h1 className="text-center mb-6 heading-1 font-bold text-gray-800 dark:text-white">
              Importance of Timely Response
            </h1>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <div className="flex justify-start items-start">
                <CheckCircle size={50} color="#e6df0f" weight="fill" />
                <p className="ml-3 text-gray-700 dark:text-white">
                  Avoid Penalties and Legal Consequences
                </p>
              </div>
              <div className="flex justify-start items-start">
                <CheckCircle size={50} color="#e6df0f" weight="fill" />
                <p className="ml-3 text-gray-700 dark:text-white">Ensure Smooth Compliance</p>
              </div>
              <div className="flex justify-start items-start">
                <CheckCircle size={50} color="#e6df0f" weight="fill" />
                <p className="ml-3 text-gray-700 dark:text-white">
                  Safeguard Refunds and Benefits
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <FAQsServicesSection FAQsData={FAQsData} />

    </>
  );
};

export default page;
