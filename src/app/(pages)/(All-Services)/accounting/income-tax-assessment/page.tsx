import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import ServiceAdvantages from "@/app/components/Section/Advantages-All-Services";
import Rocket_With_Men from "../../../../images/SGV-Types/Rocket-With-Men.svg";
import productImage from "../../../../images/recent_post_img1.png";

import React from "react";
import All_In_One_ServiceSection from "@/app/components/Section/All-in-One-All-Services";
import Company_People_Group from "../../../../images/SGV-Types/Company-People-Group.svg";
import WhoShouldBuy from "@/app/components/Section/Service/Who-Should-Buy";
import ServiceOverview from "@/app/components/Section/Service-Overview";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";

// import by geetanjali
import Self_Assessment from "../../../../images/pages icons/Incoem tax Assesment/8-removebg-preview.png"
import Summary_Assessment from "../../../../images/pages icons/Incoem tax Assesment/5-removebg-preview.png"
import Regular_Assessment_Section1433 from "../../../../images/pages icons/Incoem tax Assesment/6-removebg-preview.png"
import Scrutiny_Assessment from "../../../../images/pages icons/Incoem tax Assesment/7-removebg-preview.png"
import Best_Judgment_Assessment from "../../../../images/pages icons/Incoem tax Assesment/ENSUREKAR-removebg-preview.png"
import Income_Escaping_Assessment from "../../../../images/pages icons/Incoem tax Assesment/9-removebg-preview.png"
// import { list } from "postcss";

const IncomeTaxAssessment = () => {
  const BreadcrumbData = {
    title: "Income Tax Assessment ",
    heading: "Expert Guidance on Income Tax Compliance",
    subHeading: "",
    description: "",
    image: "",
    bottomHeading: "Navigate the complexities of income tax with ease",
    cartDetails:{
      id:1,
      name: "	Private Limited Incorporation",
      price: 10000,
      quantity: 1,
      subtotal: 10000,
      image: productImage,
    }
  };
  const AdvantagesData = {
    title: "",
    heading: "Assessment In Income Tax",
    description:
      "Income tax assessment is a process where the tax authorities examine your Income Tax Return (ITR) to calculate your tax liability for a specific financial year.  \n\n Understanding Your Income Tax Assessment Order:  \n\n An Income Tax Assessment Order is a formal document issued by the Income Tax Department that determines your tax liability for a specific financial year. It details your total income, deductions, applicable tax rate, and the final amount you owe or are due as a refund.",
    image: Rocket_With_Men,
    advantages: [
      {
        title: "Review carefully",
        description: "Ensure the calculations and deductions are accurate.",
        icon: <svg>...</svg>,
      },
      {
        title: "File an objection",
        description: "If you disagree with any part of the assessment.",
        icon: <svg>...</svg>,
      },
      {
        title: "Pay on time",
        description: "Avoid penalties by timely payment of taxes.",
        icon: <svg>...</svg>,
      },
      {
        title: "Claim your refund",
        description:
          "If you need assistance in understanding your assessment order, consult a tax professional.",
        icon: <svg>...</svg>,
      },
      {
        title: "Seek Professional Assistance",
        description:
          "Consult a tax expert or professional to understand your assessment order better and ensure compliance with all tax regulations.",
        icon: <svg>...</svg>,
      },
    ],
  };
  const AllInOneData = {
    title: "",
    heading: "Understanding the Assessment Year in Income Tax",
    image: Company_People_Group,
    description: [
      "The assessment year in income tax is the 12-month period during which your income earned in the previous financial year is assessed and your tax liability is determined.",
      "For example, if you earned income between April 1, 2024, and March 31, 2025 (financial year 2024-25), your income will be assessed in the assessment year 2025-26.",
      "Essentially, the assessment year follows the financial year.",
    ],
  };
  const WhoShouldBuyData = {
    title: "",
    heading: "Types of Income Tax Assessment",
    subHeading: "",

    rolesData: {
      heading: "",
      description: "",
      roles: [
        {
          icon: Self_Assessment.src,
          title: "Self-Assessment (Section 140A) ",
          description: "",
        },
        {
          icon: Summary_Assessment.src,
          title: "Summary Assessment (Section 143(1)) ",
          description: "",
        },
        {
          icon: Regular_Assessment_Section1433.src,
          title: "Regular Assessment (Section 143(3)) ",
          description: "",
        },
        {
          icon: Scrutiny_Assessment.src,
          title: "Scrutiny Assessment (Section 143(3)) ",
          description: "",
        },
        {
          icon: Best_Judgment_Assessment.src,
          title: "Best Judgment Assessment (Section 144) ",
          description: "",
        },
        {
          icon: Income_Escaping_Assessment.src,
          title: "Income Escaping Assessment (Section 147)",
          description: "",
        },
      ],
    },

    rolesDescription: {
      heading: "",
      description: "",
      roledesc: [
        {
          heading: "Self-Assessment (Section 140A)",
          description: "Steps to Complete Self-Assessment:",

          list: [
            "Add up your income for the financial year.",
            "Identify deductions and exemptions you can claim.",
            "Calculate your tax liability based on taxable income.",
            "Pay any outstanding taxes.",
            "Submit your income tax return.",
          ],
        },

        {
          heading: "Summary Assessment (Section 143(1))",
          description: "Overview:",
          list: [
            "The Income Tax Department verifies your return and computes tax liability.",
            "Any mismatches are sent to you as a notice or intimation.",
            "No personal meetings or hearings are involved.",
          ],
        },
        {
          heading: "",
          description: "Eligibility:",
          list: [
            "Applicable to taxpayers whose returns are accurate and free of discrepancies.",
          ],
        },

        {
          heading: "",
          description: "Steps to File:",
          list: [
            "File your income tax return online.",
            "Review and respond to any notices sent by the department.",
          ],
        },
        {
          heading: "",
          description: "Regular Assessment",
          list: [
            "This involves a detailed review of your financial details by the assessing officer.",
            "You may be asked to provide additional documents and attend hearings.",
            "Typically conducted when the return has complexities or errors that need clarification.",
          ],
        },

        {
          heading: "Scrutiny Assessment (Section 143(3))",
          description: "Preparation Guide:",
          list: [
            "Keep a thorough record of all income, deductions, and taxes paid.",
            "Ensure all financial documents are organized and readily available.",
            "Be prepared to clarify or support any entries in your tax return.",
            "Comply fully with requests from the assessing office",
          ],
        },
        {
          heading: "Best Judgment Assessment (Section 144)",
          description: "How to Avoid This Assessment:",
          list: [
            "File a complete and accurate return before the due date.",
            "Respond promptly to any queries from the tax department.",
            "Provide all required documents during the assessment proces",
          ],
        },
        {
          heading: "",
          description: "How to Handle This Assessment:",
          list: [
            "Double-check your records to address the assessing officer’s concerns.",
            "Be ready to clarify income or expenses with proper documentation.",
            "Ensure cooperation during the assessment.",
          ],
        },
        {
          heading: "",
          description: "Income Escaping Assessment (Section 147)",
          list: [
            "This occurs when the officer suspects income was missed during the initial filing.",
            "A reassessment notice is sent, requiring you to re-evaluate your income and pay any owed taxe",
          ],
        },
      ],
    },
  };
  const OverviewData = {
    heading: "",
    meta: "",
    introduction: {
      heading: "",
      description: [],
    },
    advantagesInfo: {
      heading: "",
      meta: "",
      description: "",
      advantages: [],
    },
    eligibilityCriteria: [
      {
        imageData: {
          imageUrl: Rocket_With_Men,
          imageDirection: "right",
        },
        heading: {
          start: "",
          blueText: "Required Documents ",
          end: "for Income Tax Assessment",
        },
        subHeading:
          "",
        startingDescription: "",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "General Documents:",
            description: "",
            steps: [
              { heading: "", description: "PAN Card" },
              { heading: "", description: "Aadhaar Card" },
              { heading: "", description: "Bank Account Statements" },
              { heading: "", description: "Form 26AS (Tax Credit Statement)" },
              { heading: "", description: "AIS/TIS" },
              { heading: "",description: "Previous Year's Income Tax Returns",},
              {
                heading: "",
                description: "Computation",
              },
            ],
          },
          {
            heading: "Income-Specific Documents:",
            description: "",
            steps: [
              {
                heading: "Salary Income",
                description: "Form 16, Salary slips, Deduction Supporting Documents, Exemption Certificates, Donation Proof and Other Relevant Documents",
              },
              {
                heading: "Business or Professional Income",
                description:
                  "Profit and Loss Account, Balance Sheet, Audit Report (If applicable), Bank Statements, Loan Statements, GST Returns, Ledgers, Bills, Vouchers, and Expenditure Supporting Documents.",
              },
              {
                heading: "Capital Gains",
                description:
                  "Sale Deed, Transfer Deed, Gift Deed, Purchase Agreements, Property Improvement records, Tax Receipts, and Investment details.",
              },
              {
                heading: "Income from House Property",
                description:
                  "Rental receipts, Municipal Tax receipts, home loan interest certificates, Tax receipts and Other Relevant Documents",
              },
              {
                heading: "Other Income",
                description: "Interest certificates, Dividend statements, Gift receipts, Crypto Income,           etc.",
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
          start: " ",
          blueText: "Timeline",
          end: "for Income Tax Assessment Orders?",
        },
        subHeading: "",
        startingDescription:
          "The timeline for receiving an Income Tax Assessment Order depends on the type of assessment:",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              {
                heading: "Summary Assessment",
                description:
                  " Typically within 1-2 months after filing your ITR.",
              },
              {
                heading: "Regular Assessment",
                description:
                  "Generally within 12 months from the end of the financial year.",
              },
              {
                heading: "Scrutiny Assessment",
                description:
                  "May take up to 24 months from the end of the financial year.",
              },
              {
                heading: "	Best Judgment Assessment",
                description:
                  "Usually within 9 months from the end of the financial year.",
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
          start: "How is an ",
          blueText: "Income Tax Assessment  ",
          end: "Order Generated?",
        },
        meta: "of Digital Signature",
        subHeading: "",
        startingDescription:
          "The Income Tax Department follows a systematic process to determine your tax liability:",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              {
                heading: "Document Verification",
                description:
                  "The tax officer examines the supporting documents submitted with your ITR.",
              },
              {
                heading: "Income and Deduction Calculation",
                description:
                  "The officer calculates your total income, applies eligible deductions, and determines your taxable income.",
              },
              {
                heading: "Tax Liability Assessment",
                description:
                  "The officer calculates the tax payable based on the applicable tax rates.",
              },
              {
                heading: "Issuance of Assessment Order",
                description:
                  "The final assessment order is issued, which outlines the tax payable or refund due.",
              },
            ],
          },
        ],
      },
    ],
  };
  const RegisterStepsData = {
    title: "steps",
    heading: "Steps to Resolve ",
    meta: "Income Tax Assessment ",
    description: "",
    steps: [
      {
        title: "Connect with Our Income Tax Assessment  Experts",
        description: "",
      },
      { title: "Submit Documents", description: "" },
      { title: "Get Resolved", description: "" },
    ],
    aboutSteps: [],
    
  };
  const FAQsData = {
    title: "FAQs",
    heading: "",
    description: "",
    FAQs: [
      {
        question:
          "What is the difference between self-assessment and scrutiny assessment? ",
        answer: "NA",
      },
      {
        question: "How is a tax notice issued for scrutiny assessment? ",
        answer: "NA",
      },
      {
        question: " What documents are required for a scrutiny assessment? ",
        answer: "NA",
      },
      {
        question: "What are the common reasons for income tax scrutiny? ",
        answer: "NA",
      },
      {
        question:
          "What should I do if I receive a notice for a scrutiny assessment? ",
        answer: "NA",
      },
      { question: "How can I prepare for a tax audit? ", answer: "NA" },
      {
        question: "What is the time limit for completing a tax audit? ",
        answer: "NA",
      },
      {
        question: "What are the penalties for non-compliance with tax laws? ",
        answer: "NA",
      },
      { question: "How can I avoid tax disputes? ", answer: "NA" },
      {
        question: "What are the common mistakes to avoid during tax filing? ",
        answer: "NA",
      },
      {
        question: "How can I claim tax deductions and exemptions? ",
        answer: "NA",
      },
      {
        question:
          "What is the difference between tax evasion and tax avoidance? ",
        answer: "NA",
      },
      { question: "What is the role of a tax consultant? ", answer: "NA" },
      {
        question: "What is the process of filing a tax refund claim? ",
        answer: "NA",
      },
      {
        question: "How can I check the status of my income tax refund? 	",
        answer: "NA",
      },
    ],
  };
  return (
    <>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <ServiceAdvantages AdvantagesData={AdvantagesData} />
      <All_In_One_ServiceSection AllInOneData={AllInOneData} />
      <WhoShouldBuy WhoShouldBuyData={WhoShouldBuyData} />
      <ServiceOverview OverviewData={OverviewData} />
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <FAQsServicesSection FAQsData={FAQsData} />
    </>
  );
};

export default IncomeTaxAssessment;
