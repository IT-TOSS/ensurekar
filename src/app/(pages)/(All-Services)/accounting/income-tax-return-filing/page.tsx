
"use client";

import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import ServiceAdvantages from "@/app/components/Section/Advantages-All-Services";
import Rocket_With_Men from "../../../../images/SGV-Types/Rocket-With-Men.svg";
import Company_People_Group from "../../../../images/SGV-Types/Company-People-Group.svg";

import React, { useRef, useEffect } from "react";
import All_In_One_ServiceSection from "@/app/components/Section/All-in-One-All-Services";
import PlansSection from "@/app/components/Section/Plans-Section";
import NewPlansSection from "@/app/components/Section/New-Plans-Section";
import WhoShouldBuy from "@/app/components/Section/Service/Who-Should-Buy";
import ServiceOverview from "@/app/components/Section/Service-Overview";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import productImage from "../../../../images/recent_post_img1.png";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/store";
import { useRouter } from "next/navigation";

const Page = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  // Function to handle plan selection and add to cart
  const handlePlanSelection = (planId: string, planName: string, price: string) => {
    const numericPrice = parseFloat(price.replace(/[₹,]/g, ''));
    
    const selectedPlan = {
      id: `income-tax-plan-${planId}`,
      name: `Income Tax Return Filing - ${planName}`,
      price: numericPrice,
      quantity: 1,
      subtotal: numericPrice,
      image: productImage
    };
    
    // Add plan to cart
    dispatch(addToCart(selectedPlan));
    
    // Redirect to cart page
    router.push("/cart");
  };

  // Function to handle Buy Now click from BreadcrumbSection
  const handleBuyNow = () => {
    const defaultPlan = {
      id: "income-tax-plan-default",
      name: "Income Tax Return Filing - Normal",
      price: 999,
      quantity: 1,
      subtotal: 999,
      image: productImage
    };
    
    dispatch(addToCart(defaultPlan));
    router.push("/cart");
  };

  const BreadcrumbData = {
    title: "Income Tax Return Filing",
    heading: "Income Tax Return Filing",
    subHeading: "",
    description: "Fast and Reliable Income Tax Filing Services in India",
    image: "",
    bottomHeading: "Simplify Your Income Tax Filing with Expert Assistance",
    cartDetails: {
      id: 1, // Changed from string to number
      name: "Income Tax Return Filing",
      price: 999,
      quantity: 1,
      subtotal: 999,
      image: productImage,
    },
    onBuyNow: handleBuyNow // Pass the buy now function
  };

  const AdvantagesData = {
    title: "",
    heading: "Income Tax Return Filing",
    description:
      " Source of income :- E-filing Income Tax Returns is mandatory for Individuals, HUF, Firm, LLP, Private Limited and other professionals. Based on the type of taxpayer, there are various Income Tax forms filed. Every taxpayer should complete their ITR filing within the deadline to avoid late fees and penalties.",
    image: Rocket_With_Men,
    advantages: [
      {
        title: "Salary",
        description: "",
        icon: <svg>...</svg>,
      },
      {
        title: "Business/Profession",
        description: "",
        icon: <svg>...</svg>,
      },
      {
        title: "House property",
        description: "",
        icon: <svg>...</svg>,
      },
      {
        title: "Capital gains",
        description: "",
        icon: <svg>...</svg>,
      },
      {
        title: "Other Source",
        description: "",
        icon: <svg>...</svg>,
      },
    ],
  };

  const AllInOneData = {
    title: "",
    heading: "File Your Income Tax Returns Effortlessly",
    image: Company_People_Group,
    description: [
      "Our simple and secure platform helps you file your Income Tax Returns in timely. It helps you to file your correct Return with Eligible deductions, Get Expert Support, and Ensure compliance with ease.",
    ],
  };

  const planData = {
    heading: {
      // startText: "Pick the",
      startText: "Income Tax",                 
      blueText: " Return ",
      endText: "filing plan",
      // blueText: " Business Plan ",
      // endText: "for Your Goals",
    },
    // description: "Our Incorporation Expert's Know What is your Need",
    description: "Select the best Product suits you",
    plansData: [
      {
        id: 1,
        state: "MP",
        description: "",
        plans: [
          {
            planName: "Normal",
            description: "Perfect for initiating company registration",
            isActive: true,
            suggestionText: "",
            happyText: "",
            plan: {
              id: "1",
              price: "",
              discount: "",
              afterDiscount: "₹999",
              laterPaid: {
                amount: "",
                text: "Govt. fees will be as per this website and will change according to states - PVT LTD Company Registration Online - Fast & Legal in India",
                iconInfo: {
                  text: "",
                  link: "",
                },
              },
              offers: [
                {
                  imageUrl: "",
                  isActive: true,
                  heading: "offer",
                  subHeading: "Unlock partner benefits Post",
                  description: "Post company incorporation worth Rs 4 lakhs",
                  knowMore: {
                    text: "visit here to grab the offer",
                    link: "",
                  },
                },
              ],
              splitPayment: {
                enabled: false,
                instalments: 2,
                instalmentAmount: "₹499.50",
                text: "Split payment by 2 month with Zolvit Flex",
                knowMore: {
                  text: "",
                  link: "",
                },
              },
            },
            features: {
              heading: ["What you will get"],
              feature: [
                "Expert assisted process",
                "Your company name is reserved in just 2 - 4 days",
                "Digital Signature Certificate (DSC) in 4-7 Days",
                "SPICe+ form filing in 14 days*",
                "Incorporation Certificate in 14 - 21 days",
                "Company PAN and TAN",
                "DIN for directors",
                "MOA and AOA Certificate",
              ],
            },
            recommendation: {
              recommended: true,
              text: "",
            },
            onSelect: () => handlePlanSelection("1", "Normal", "₹999") // Add this to each plan
          },
          {
            planName: "Fastrack",
            isActive: true,
            description: "Quick company registration in 7 to 14 days",
            suggestionText: "",
            happyText: "",
            plan: {
              id: "2",
              price: "",
              discount: "",
              afterDiscount: "₹1,999",
              laterPaid: {
                amount: "",
                text: "Govt. fees will be as per this website and will change according to states PVT LTD Company Registration Online Fast & Legal in India",
                iconInfo: {
                  text: "",
                  link: "",
                },
              },
              offers: [
                {
                  imageUrl: "",
                  heading: "",
                  isActive: false,
                  subHeading: "Unlock partner benefits Post",
                  description: "Post company incorporation worth Rs 4 lakhs",
                  knowMore: {
                    text: "",
                    link: "",
                  },
                },
              ],
              splitPayment: {
                enabled: false,
                instalments: 2,
                instalmentAmount: "749.50",
                text: "Split payment by 2 month with Zolvit Flex",
                knowMore: {
                  text: "",
                  link: "",
                },
              },
            },
            features: {
              heading: ["What you'll get"],
              feature: [
                "Expert assisted process",
                "Your company name is reserved in just 2 - 4 days",
                "Digital Signature Certificate (DSC) in 4-7 Days",
                "SPICe+ form filing in 14 days*",
                "Incorporation Certificate in 14 - 21 days",
                "Company PAN+TAN",
                "DIN for directors",
                "MOA and AOA Certificate",
                "Appointment of Auditor",
                "Issuance of share certificate",
                "INC 20 A form filing",
              ],
            },
            recommendation: {
              recommended: true,
              text: "",
            },
            onSelect: () => handlePlanSelection("2", "Fastrack", "₹1,999") // Add this to each plan
          },
          {
            planName: "Complete Suit",
            isActive: true,
            description:
              "Top priority service + annual compliance to keep your business on track",
            suggestionText: "",
            happyText: "",
            plan: {
              id: "3",
              price: "",
              discount: "",
              afterDiscount: "₹19,999",
              laterPaid: {
                amount: "",
                text: "Govt. fees will be as per this website and will change according to states PVT LTD Company Registration Online Fast & Legal in India",
                iconInfo: {
                  text: "",
                  link: "",
                },
              },
              offers: [
                {
                  imageUrl: "",
                  heading: "",
                  isActive: false,
                  subHeading: "Unlock partner benefits Post",
                  description: "Post company incorporation worth Rs 4 lakhs",
                  knowMore: {
                    text: "",
                    link: "",
                  },
                },
              ],
              splitPayment: {
                enabled: false,
                instalments: 3,
                instalmentAmount: "749.50",
                text: "Split payment by 3 with Zolvit Flex",
                knowMore: {
                  text: "",
                  link: "",
                },
              },
            },
            features: {
              heading: ["What you'll get"],
              feature: [
                "Expert assisted process",
                "Your company name is reserved in just 2 - 4 days*",
                "Digital Signature Certificate (DSC) in 3-4 Days",
                "SPICe+ Form Filing in 5-7 Days*",
                "Incorporation Certificate Issued in 7-14 Days",
                "Company PAN and TAN",
                "Director Identification Number (DIN)",
                "Appointment of Auditor",
                "Issuance of Share Certificates",
                "INC 20A Form Filing",
                "DIR 3 KYC for 2 Directors",
                "Accounting & Bookkeeping (Up to 100 Transactions)",
                "Financial Statement Preparation",
                "1-Year License for Accounting Software",
                "Filing of AOC 4, MGT 7 & ADT 1",
                "Annual Filing (For Turnover Up to 20 Lakhs)",
                "Facilitation of Annual General Meeting",
                "Compliance with PF and ESI Statutory Regulations",
                "One-Year Income Tax Filing (For Turnover Up to 20 Lakhs)",
                "30-Minute Consultation Call with a Senior CA/CS for Business Planning",
              ],
            },
            recommendation: {
              recommended: true,
              text: "",
            },
            onSelect: () => handlePlanSelection("3", "Complete Suit", "₹19,999") // Add this to each plan
          },
        ],
      },
      {
        id: 2,
        state: "DL",
        description: "",
        plans: [
          {
            planName: "Normal",
            description: "Perfect for initiating company registration",
            isActive: true,
            suggestionText: "",
            happyText: "",
            plan: {
              id: "1",
              price: "",
              discount: "",
              afterDiscount: "₹999",
              laterPaid: {
                amount: "",
                text: "Govt. fees will be as per this website and will change according to states - PVT LTD Company Registration Online - Fast & Legal in India",
                iconInfo: {
                  text: "",
                  link: "",
                },
              },
              offers: [
                {
                  imageUrl: "",
                  isActive: true,
                  heading: "offer",
                  subHeading: "Unlock partner benefits Post",
                  description: "Post company incorporation worth Rs 4 lakhs",
                  knowMore: {
                    text: "visit here to grab the offer",
                    link: "",
                  },
                },
              ],
              splitPayment: {
                enabled: false,
                instalments: 2,
                instalmentAmount: "₹499.50",
                text: "Split payment by 2 month with Zolvit Flex",
                knowMore: {
                  text: "",
                  link: "",
                },
              },
            },
            features: {
              heading: ["What you will get"],
              feature: [
                "Expert assisted process",
                "Your company name is reserved in just 2 - 4 days",
                "Digital Signature Certificate (DSC) in 4-7 Days",
                "SPICe+ form filing in 14 days*",
                "Incorporation Certificate in 14 - 21 days",
                "Company PAN and TAN",
                "DIN for directors",
                "MOA and AOA Certificate",
              ],
            },
            recommendation: {
              recommended: true,
              text: "",
            },
            onSelect: () => handlePlanSelection("1-DL", "Normal", "₹999") // Add this with unique ID
          },
          // Add onSelect to other plans for DL state as well
        ],
      },
    ],
    defaultState: "MP",
    defaultPlan: "Standard",
    statesOptions: [
      { value: "AP", label: "Andhra Pradesh" },
      { value: "AR", label: "Arunachal Pradesh" },
      { value: "AS", label: "Assam" },
      { value: "BR", label: "Bihar" },
      { value: "CG", label: "Chhattisgarh" },
      { value: "GA", label: "Goa" },
      { value: "GJ", label: "Gujarat" },
      { value: "HR", label: "Haryana" },
      { value: "HP", label: "Himachal Pradesh" },
      { value: "JK", label: "Jammu and Kashmir" },
      { value: "JH", label: "Jharkhand" },
      { value: "KA", label: "Karnataka" },
      { value: "KL", label: "Kerala" },
      { value: "MP", label: "Madhya Pradesh" },
      { value: "MH", label: "Maharashtra" },
      { value: "MN", label: "Manipur" },
      { value: "ML", label: "Meghalaya" },
      { value: "MZ", label: "Mizoram" },
      { value: "NL", label: "Nagaland" },
      { value: "OD", label: "Odisha" },
      { value: "PB", label: "Punjab" },
      { value: "RJ", label: "Rajasthan" },
      { value: "SK", label: "Sikkim" },
      { value: "TN", label: "T amil Nadu" },
      { value: "TG", label: "Telangana" },
      { value: "TR", label: "Tripura" },
      { value: "UP", label: "Uttar Pradesh" },
      { value: "UT", label: "Uttarakhand" },
      { value: "WB", label: "West Bengal" },
      { value: "AN", label: "Andaman and Nicobar Islands" },
      { value: "CH", label: "Chandigarh" },
      { value: "DN", label: "Dadra and Nagar Haveli" },
      { value: "DD", label: "Daman and Diu" },
      { value: "DL", label: "Delhi" },
      { value: "LD", label: "Lakshadweep" },
      { value: "PY", label: "Puducherry" },
    ],
  };
  const WhoShouldBuyData = {
    title: "",
    heading: "Advantages of Filing Income Tax Returns",
    subHeading: "",

    rolesData: {
      heading: "",
      description: "",
      roles: [
        {
          icon: "",
          title: "Legal Compliance ",
          description:
            "Filing ITR ensures adherence to tax laws and avoids penalties for non-compliance.",
        },
        {
          icon: "",
          title: "Easy Loan Approvals",
          description:
            "ITR serves as proof of income, simplifying the process for home, vehicle, or business loans.",
        },
        {
          icon: "",
          title: "Claim Tax Refunds",
          description:
            "Filing ITR allows you to claim refunds for any excess taxes paid during the year.",
        },
        {
          icon: "",
          title: "Visa Processing",
          description:
            "Many countries require ITR receipts for visa applications as proof of financial stability.",
        },
        {
          icon: "",
          title: "Carry Forward of Losses ",
          description:
            "Timely filing allows you to carry forward losses to offset against future profits, reducing tax liability.",
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
      heading: "Types ",
      meta: "of ITR Forms and Their Applicability",
      description:
        "In India, there are seven distinct Income Tax Return (ITR) forms, each designed for different categories of taxpayers based on their income, income sources, and residency status. Here's a breakdown of the various ITR forms and their eligibility",
      advantages: [
        {
          imageUrl: "",
          heading: "ITR-1 (Sahaj)",
          details:
            "Suitable for individuals with a total income of up to ₹50 lakhs. It’s the simplest form, meant for those with straightforward income sources.",
        },
        {
          imageUrl: "",
          heading: "	ITR-2",
          details:
            "Applicable to individuals whose income exceeds ₹50 lakhs, or those with multiple income sources like capital gains. This form demands more detailed financial reporting.",
        },
        {
          imageUrl: "",
          heading: "ITR-3",
          details:
            "Designed for individuals earning income from business or professional activities. It also covers those with capital gains.",
        },
        {
          imageUrl: "",
          heading: "ITR-4 (Sugam)",
          details:
            "For individuals under the presumptive taxation scheme, such as freelancers and small business owners, where taxes are calculated at a fixed percentage of the turnover.",
        },
        {
          imageUrl: "",
          heading: "ITR-5",
          details:
            "Meant for Hindu Undivided Families (HUFs), it requires the details of all members' incomes.",
        },
        {
          imageUrl: "",
          heading: "ITR-6",
          details:
            "Intended for companies, this is a comprehensive form requiring detailed reporting of income, expenses, and taxes.",
        },
        {
          imageUrl: "",
          heading: "ITR-7",
          details:
            "Applicable to individuals who are non-residents, offering specific criteria for those earning income outside of India.",
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
          start: "",
          blueText: "Document Required ",
          end: "for Income Tax Return Filing ",
        },
        subHeading: "",
        startingDescription:
          "To file your Income Tax Returns online, the following documents must be provided along with the necessary forms:",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              { heading: "", description: "PAN Card" },
              { heading: "", description: "Aadhaar Card" },
              { heading: "", description: "Form 16" },
              { heading: "", description: "Bank account details" },
              { heading: "", description: "Investment details" },
              { heading: "", description: "Bank statement or passbook" },
              { heading: "", description: "Home loan statement" },
              { heading: "", description: "Capital gains details" },
              { heading: "", description: "Rental income details" },
              { heading: "", description: "Foreign income details" },
              { heading: "", description: "Dividend income details" },
              { heading: "", description: "Tax-saving investment proofs" },
              { heading: "", description: "Life insurance receipts" },
              { heading: "", description: "PPF receipts" },
              { heading: "", description: "Donation receipts" },
              { heading: "", description: "Equity or mutual fund details" },
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
          blueText: "Checklist ",
          end: "for Income Tax Returns (ITR) Filing",
        },
        subHeading: "",
        startingDescription: "for Income Tax Returns (ITR) Filing",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              {
                heading: "",
                description:
                  "Ensure you have all your personal details, such as name, address, contact information, and PAN.",
              },
              {
                heading: "",
                description:
                  "Identify the correct income tax return forms required for your filing.",
              },
              {
                heading: "",
                description: "Gather all income-related documents and details.",
              },
              {
                heading: "",
                description:
                  "Keep documentation for all deductions and exemptions you're claiming.",
              },
              {
                heading: "",
                description:
                  "Make sure to have information on TDS Deduction on capital gains, foreign assets and other income.",
              },
              {
                heading: "",
                description:
                  "For Firms or Companies, ensure you have financial statements, audit reports, TDS compliance records, AIS, TIS and related party transaction details.",
              },
              {
                heading: "",
                description: "Keep proof of all annual compliance records",
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
          start: "The  ",
          blueText: "following individuals or entities",
          end: "are required to file ITR in India",
        },
        meta: "",
        subHeading: "",
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
                  "Salaried individuals with gross income exceeding the prescribed threshold before applying deductions under Sections 80C and 80U must file ITR.",
              },
              {
                heading: "",
                description:
                  "All Private Limited Companies and limited liability Partnerships (LLPs), regardless of profit or loss, are required to file ITR.",
              },
              {
                heading: "",
                description:
                  "Individuals serving as directors or partners in private limited companies or LLPs are obligated to file ITR.",
              },
              {
                heading: "",
                description:
                  "Individuals earning dividends from multiple sources such as mutual funds, equities, fixed deposits, interest, or bonds must file ITR.",
              },
              {
                heading: "",
                description:
                  "Those deriving income from charitable or religious trusts, or other voluntary contributions, should file ITR.",
              },
              {
                heading: "",
                description:
                  "Businesses or individuals eligible for tax refunds are strongly advised to file ITR.",
              },
              {
                heading: "",
                description:
                  "Non-resident Indians (NRIs) must file ITR based on their income in India.",
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
        title: "Consult with Our Tax Experts",
        description:
          "Our In-house tax professionals will provide tailored guidance and answer all your queries, ensuring your filing process is smooth and stress-free.",
      },
      {
        title: "Submit the Required Documents",
        description:
          "Gather and submit your necessary documents like income statements, investment proofs, and any relevant details that affect your tax returns. We’ll take care of the rest.",
      },
      {
        title: "Get Your ITR Filed",
        description:
          "Once we have all your documents, we’ll ensure that your ITR is correctly filled. Sit back and relax we handle your filing.",
      },
    ],
    aboutSteps: [],
  };
  const FAQsData = {
    title: "FAQs",
    heading: "",
    description: "",
    FAQs: [
      { question: "What are the tax brackets for 2023-2024?", answer: "NA" },
      { question: "How can I check my income tax online?", answer: "NA" },
      { question: "Why is income tax return filing important?", answer: "NA" },
      { question: "Can I file my ITR myself?", answer: "NA" },
      { question: "How do I check the status of my tax refund?", answer: "NA" },
      { question: "Who is eligible for ITR filing?", answer: "NA" },
      {
        question: "What are the documents required for filing ITR?",
        answer: "NA",
      },
      { question: "How can I claim an income tax return?", answer: "NA" },
      { question: "What is e-filing in income tax?", answer: "NA" },
      { question: "How do I pay tax to the government?", answer: "NA" },
      {
        question: "What is the penalty for late income tax e-filing?",
        answer: "NA",
      },
      {
        question: "If I had paid extra tax how would it be refunded to me?",
        answer: "NA",
      },
      { question: "How to file an income tax e-filing online?", answer: "NA" },
      { question: "Who can file ITR offline?", answer: "NA" },
      {
        question: "My company deducts TDS, should I still file my tax return?",
        answer: "NA",
      },
      { question: "Can I file ITR without Form 16?", answer: "NA" },
      {
        question: "Which ITR form should I select for e-filing?",
        answer: "NA",
      },
      {
        question: "What is the minimum income to file ITR in India?",
        answer: "NA",
      },
      { question: "How do I pay tax to the government?", answer: "NA" },
      { question: "Why should I e-file my ITR?", answer: "NA" },
    ],
  };
  //make a changes for navigation  

  const plansRef = useRef<HTMLDivElement | null>(null); // Reference for PlansSection

  const scrollToPlans = () => {
    plansRef.current?.scrollIntoView({ behavior: "smooth" });
  if (plansRef.current) {
    plansRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  };
  return (
    <>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <ServiceAdvantages AdvantagesData={AdvantagesData} />

      <All_In_One_ServiceSection AllInOneData={AllInOneData} />



      {/* Other Sections */}
      
      <div ref={plansRef}>
        <NewPlansSection planData={planData} />
        {/* <PlansSection planData={planData} /> */}
      </div>

      {/* <PlansSection planData={planData} /> */}
      <WhoShouldBuy WhoShouldBuyData={WhoShouldBuyData} />
      <ServiceOverview OverviewData={OverviewData} />
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <FAQsServicesSection FAQsData={FAQsData} />
    </>
  );
};

export default Page;