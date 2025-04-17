"use client";

import React from "react";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import ServiceCovered from "@/app/components/Section/Service/Service-Covered";
import { Calculator, ChartLineUp, FileText, Money } from "phosphor-react";
import WhoShouldBuy from "@/app/components/Section/Service/Who-Should-Buy";
import Timeline from "@/app/components/Section/Service/Timeline";
import WhatWeCharge from "@/app/components/Section/Service/What-We-Charge";
import account_section_img from "../../../../images/account_section_img.png";
import productImage from "../../../../images/recent_post_img1.png";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import faq_illus from "../../../../images/faq_illus.png";
import Rocket_With_Men from "../../../../images/SGV-Types/Rocket-With-Men.svg";
import ServiceAdvantages from "@/app/components/Section/Advantages-All-Services";

const accountingAndBookkeeping = () => {
  const BreadcrumbData = {
    title: "Accounting & tax Bookkeeping",
    heading: "Accounting and Bookkeeping",
    subHeading: "Comprehensive Platform for Accounting",
    description:
      "Professional Accounting and Bookkeeping Services for Your Business",
    image: "",
    cartDetails:{
      id:9,
      name: "Accounting",
      price: 799,
      quantity: 1,
      subtotal: 799,
      image: productImage,
    }
  };
  const ServiceCoveredData = {
    title: "",
    heading: "Unlock Your Business Growth",
    subHeading: "",
    description: "",
    image: "",
    services: [
      {
        title: "Bookkeeping",
        description:
          "Maintain precise and up-to-date records with our professional bookkeeping services.",
        icon: <Calculator weight="fill" />,
      },
      {
        title: "Financial Reporting",
        description:
          "Gain valuable insights into your business's performance with our detailed financial reporting.",
        icon: <FileText weight="fill" />,
      },
      {
        title: "Tax Planning",
        description:
          "Stay tax-compliant and maximize your savings with our expert tax planning services.",
        icon: <Money weight="fill" />,
      },
      {
        title: "Financial Analysis",
        description:
          "Harness the power of data with our financial analysis services. We interpret financial trends,",
        icon: <ChartLineUp weight="fill" />,
      },
    ],
  };
  const WhoShouldBuyData = {
    title: "",
    heading: "Why is bookkeeping Required",
    subHeading:"",
  rolesData: {
      heading: "",
      description:
        "",
      roles: [
        {
          icon: "",
          title: "GST Compliances",
          description: "",
        },
        {
          icon: "",
          title: "Tax Authority",
          description: "",
        },
        {
          icon: "",
          title: "Banking",
          description: "",
        },
        {
          icon: "",
          title: "Export Import",
          description: "",
        },
      ],
    },
  };
  const TimeLineData = {
    title: "",
    heading: "How It's Done",
    subHeading: "",
    description:
      "Our online bookkeeping services have end-to-end online fulfilment provided by our professional. It's very simple, completely digital.",
    steps: {
      heading: "",
      description: "",
      step: [
        {
          heading: "Fill the form",
          description: "",
        },
        {
          heading: "Talk to an accounting expert",
          description: "",
        },
        {
          heading: "Buy our plan",
          description: "",
        },
        {
          heading: "Complete the onboarding",
          description: "",
        },
        {
          heading: "Start your bookkeeping",
          description: "",
        },
      ],
    },
    aboutSteps: [{ title: "", description: "" }],
    footerMessage: "",
  };
  const WhatWeChargeData = {
    title: "What we charge",
    heading: "",
    description: "",
    charges: [
      "Book-Keeping of all the sales, purchases, and expenses of the company",
      "Free license to Dash - Easy to use, cloud based, mobile supported accounting software",
      " Preparation & filing of income tax returns (Company)",
      "Preparation & filing of balance sheet, P&L accounts, and director's report ",
      " AM (Assignment)",
    ],

    footerMessage: {
      startText: "All your Accouning and book-keeping needs for 1 year ",
      middleText: "Starting at just Rs.11111/-",
      endText: "",
    },
    imageUrl: account_section_img,
  };
  const AdvantagesData = {
    title: "",
    heading: "What we charge for ",
    description:"",
    image: Rocket_With_Men,
    advantages: [
      {
        title: "Book-Keeping of all the sales, purchases, and expenses of the company",
        description: "",
        icon: <svg>...</svg>,
      },
      {
        title: "Free license to Dash - Easy to use, cloud based, mobile supported accounting software",
        description:"",
        icon: <svg>...</svg>,
      },
      {
        title: "Preparation & filing of income tax returns (Company)",
        description:"",
        icon: <svg>...</svg>,
      },
      {
        title: "Preparation & filing of balance sheet, P&L accounts, and director's report",
        description:"",
        icon: <svg>...</svg>,
      },
      {
        title: " AM (Assignment)",
        description:
          "",
        icon: <svg>...</svg>,
      },
    ],
  };
  const FAQsData = {
    title: "FAQs",
    heading: "",
    description: "",
    FAQs: [
      { question: "What is Bookkeeping?", answer: "N/A" },
      {
        question: "Is keeping records of all financial transactions required?",
        answer: "N/A",
      },
      { question: "Why do I require an accountant's services?", answer: "N/A" },
      {
        question:
          "A few months ago, I founded my startup. There are hardly any transactions at all. Should I employ an accountant full-time?",
        answer: "N/A",
      },
      {
        question:
          "For the year, I have made 500 transactions. What additional fees are there?",
        answer: "",
      },
      {
        question: "Will the accountant come in person to my office?",
        answer: "N/A",
      },
      {
        question:
          "For my business, I already have accounting software. Can your professionals employ the same software?",
        answer: "N/A",
      },
      {
        question:
          "•	What types of financial reports will I receive in this set?",
        answer: "N/A",
      },
      {
        question:
          "No accounting software is being used by me. Will this bundle get me access to any software?",
        answer: "N/A",
      },
      {
        question: "Can you tell me which accounting program will be used?",
        answer: "N/A",
      },
    ],

  };
  return (
    <>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <ServiceCovered ServiceCoveredData={ServiceCoveredData} />
      <WhoShouldBuy WhoShouldBuyData={WhoShouldBuyData} />
      <Timeline TimeLineData={TimeLineData} />
      <ServiceAdvantages AdvantagesData={AdvantagesData} />
      {/* <WhatWeCharge WhatWeChargeData={WhatWeChargeData} /> */}
      <FAQsServicesSection FAQsData={FAQsData} />
    </>
  );
};

export default accountingAndBookkeeping;
