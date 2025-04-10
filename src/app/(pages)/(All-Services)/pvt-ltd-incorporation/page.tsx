"use client";

import React from "react";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import faq_illus from "../../../images/faq_illus.png";
import Rocket_With_Men from "../../../images/SGV-Types/Rocket-With-Men.svg";
import Company_People_Group from "../../../images/SGV-Types/Company-People-Group.svg";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import PlansSection from "@/app/components/Section/Plans-Section";
import All_In_One_ServiceSection from "@/app/components/Section/All-in-One-All-Services";
import ServiceAdvantages from "@/app/components/Section/Advantages-All-Services";
import ServiceOverview from "@/app/components/Section/Service-Overview";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import TestimonialSectionAllServices from "@/app/components/Section/Testimonial-Section-All-Services";
import testimonial10 from "../../../images/testimonial10.png";
import testimonial9 from "../../../images/testimonial9.png";
import testimonial7 from "../../../images/testimonial7.png";
import testimonial8 from "../../../images/testimonial8.png";
import testimonial6 from "../../../images/testimonial6.png";
import StepByStep from "../../../images/SGV-Types/Step-By-Step.svg";
import productImage from "../../../images/SGV-Types/Startup-Breadcrumb-Section.svg";
import CreateImage from "../../../images/SGV-Types/Create-Your-Account.svg";
import TalkExpert from "../../../images/SGV-Types/Talk-To-Our-Expert.svg";
import LimitedLiabilityProtection from "../../../images/SGV-Types/Limited-Liability-Protection.svg";
import EnhancedBusinessCredibility from "../../../images/SGV-Types/Enhanced-Business-Credibility.svg";
import PerpetualExistence from "../../../images/SGV-Types/Perpetual-Existence.svg";
import ProvideDocumentandGetIncorporated from "../../../images/SGV-Types/Provide-Document-and-Get-Incorporated.svg";
import SeparateLegalIdentity from "../../../images/SGV-Types/Separate-Legal-Identity.svg";
import TaxBenefitsforPrivateLimitedCompanies from "../../../images/SGV-Types/Tax-Benefits-for-Private-Limited-Companies.svg";
import ProvideDocument from "../../../images/SGV-Types/Provide-Document-and-Get-Incorporated.svg";
import HandUserMoney from "../../../images/SGV-Types/Hand-User-Money.svg";
// import StepByStep from "../../../images/SGV-Types/Step-By-Step.svg";
import RegistrationGuide from "@/app/components/Section/Registration-Guide";
import { HandCoins } from "lucide-react";

const Pvt_Ltd_Incorporation_Registration = () => {
  const BreadcrumbData = {
    title: "Private Limited Incorporation",
    heading: "Private Limited Incorporation Registration",
    description:
      "Expert Support for Company Registration, including SPICe-INC-32, eMoA-INC-33, and eAOA-INC-34 along with DSC on MCA Filings.",
    image: "",
    subHeading: "Get Your Company Registered in Just 7 days.",
    cartDetails:{
      id:1,
      name: "	Private Limited Incorporation",
      price: 18000,
      quantity: 1,
      subtotal: 18000,
      image: productImage,
    }
  };

  const planData = {
    heading: {
      startText: "Pick the",
      blueText: " Business Plan ",
      endText: "for Your Goals",
    },
    description: "Our Incorporation Expert's Know What is your Need",
    plansData: [
      {
        id: 1,
        state: "MP",
        description: "text",
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
          },
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
  const AllInOneData = {
    title: "",
    heading: "Why Private Limited Incorporation is Required.",
    image: Company_People_Group,
    description: [
      "Registering as a private limited company comes with numerous benefits, including limited liability protection for shareholders and potential tax advantages, like lower dividend distribution tax rates. However, the process can be complex, involving challenges such as name rejections, director disqualifications, and strict compliance requirements. With professional guidance, you can overcome these hurdles efficiently, ensuring a smooth registration process while maintaining compliance and avoiding unnecessary delays or rejections.",
    ],
  };
  const AdvantagesData = {
    title: "",
    heading: "Private Limited Incorporation ",
    description:
      "A Private Limited Company is a registered business entity offering limited liability, separate legal identity, and enhanced credibility. Ideal for startups, it simplifies fund-raising and provides tax advantages. Private Limited Company Incorporation ensures, legal compliance and a scalable business structure. ",
    image: Rocket_With_Men,
    advantages: [
      {
        title: "Limited Liability Protection",
        description:
          "Shareholder's liability is restricted to their investment, protecting personal assets.",
        icon: LimitedLiabilityProtection,
      },
      {
        title: "Separate Legal Identity",
        description:
          "A Pvt Ltd company is distinct from its owners, ensuring credibility and legal independence.",
        icon: SeparateLegalIdentity,
      },
      {
        title: "Enhanced Business Credibility",
        description:
          "Builds trust with clients, banks, and investors through official incorporation.",
        icon: EnhancedBusinessCredibility,
      },
      {
        title: "Tax Benefits for Private Limited Companies",
        description:
          "Enjoy Tax Deductions and Exemptions under Income Tax and Other Tax Law's",
        icon: TaxBenefitsforPrivateLimitedCompanies,
      },
      {
        title: "Perpetual Existence",
        description:
          "Continues operations regardless of ownership changes, ensuring stability.",
        icon: PerpetualExistence,
      },
    ],
  };
  const OverviewData = {
    heading: "",
    meta: "",
    introduction: {
      heading: "",
      description: [],
    },
    advantagesInfo: {
      heading: "Advantages of ",
      meta: "Private Limited with ENSUREKAR",
      description:
        "Start your dream business today with the fastest Pvt Ltd company registration in India. Ensurekar simplifies the process with online tools, expert guidance, and competitive pricing. Register your company with the MCA and get started in no time. Register your company online, with business incorporation services that help you get your entity up and running. No more delays or difficulties! Registering your business with us provides you with the fastest, easiest, and most reliable way to get your documents registered. Now register your business with 100% certainty with Ensurekar.",
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
          blueText: "Eligibilty Criteria ",
          end: "for Private Limited Company Registration",
        },
        subHeading: "",
        startingDescription:
          "According to MCA guidelines, a private limited company must have a minimum of two directors and shareholders. While shareholders can be individuals or corporate entities, directors must be individuals. Additionally, a registered office address in India is required. The following criteria must be fulfilled for Private Limited Company Registration:",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              {
                heading: "",
                description:
                  "The applicant must be at least eighteen years old",
              },
              {
                heading: "",
                description:
                  "The applicant must be a citizen or resident of India",
              },
              {
                heading: "",
                description:
                  "The company must have between 200 and 300 members",
              },
              {
                heading: "",
                description:
                  "There must be a minimum of 2 directors or shareholders",
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
          start: "",
          blueText: "Document",
          end: "  for Private Limited Company Registration  ",
        },
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
                description: "Passport-sized photographs of directors",
              },
              {
                heading: "",
                description: "Proof of residential address for directors",
              },
              {
                heading: "",
                description: "Photo identification for directors",
              },
              { heading: "", description: "Sample signatures" },
              {
                heading: "",
                description:
                  "A self-declaration regarding directorships in other companies",
              },
              {
                heading: "",
                description:
                  "Lease or rent agreement for the registered office",
              },
              {
                heading: "",
                description: "No objection letter from the property owner",
              },
              { heading: "", description: "Aadhaar card" },
              { heading: "", description: "PAN card" },
              {
                heading: "",
                description: "Director Identification Number (DIN)",
              },
              {
                heading: "",
                description: "Digital Signature Certificate (DSC)",
              },
              { heading: "", description: "Memorandum of Association (MoA)" },
              { heading: "", description: "Articles of Association (AoA)" },
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
          blueText: "Checklist",
          end: " for Private Limited Company Registration ",
        },
        subHeading: "",
        startingDescription:
          "As per the MCA, a checklist has to be met for registering your company. Here is a clear outline of a checklist for Private Limited Company Registration to follow:",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              { heading: "", description: "At least 2 Directors" },
              {
                heading: "",
                description:
                  "Directors and shareholders can be the same person",
              },
              {
                heading: "",
                description: "All the Directors should have DIN and DSC",
              },
              {
                heading: "",
                description: "Have the minimum Authorised share capital",
              },
              {
                heading: "",
                description: "Have the minimum Paid up share capital",
              },
              { heading: "", description: "Draft and MoA and AoA" },
              {
                heading: "",
                description: "Need details of the company working address",
              },
              {
                heading: "",
                description: "NOC and Rental Agreement from the landlord",
              },
            ],
          },
        ],
      },
    ],
  };
  const RegistrationGuideData = {
    title: "",
    heading: "Step by Step Process for Private Limited Registration ",
    description:
      "A Private Limited Company offers limited liability protection to its shareholders, making it a preferred choice for entrepreneurs in India. The incorporation process requires submitting necessary documents, such as the residential address proof and bank statement of proposed directors, to complete the registration. Companies also need to maintain a current account for business transactions. Here's a process. ",
    image: StepByStep,
    guideList: [
      {
        heading: "Obtain Digital Signature Certificate (DSC)",
        description:
          "A Digital Signature Certificate (DSC) is needed for filing signed documents with the Ministry of Corporate Affairs (MCA). Our team will help you secure your DSC registration.",
      },
      {
        heading: "Apply for Director Identification Number (DIN)",
        description:
          "A DIN is assigned to individuals intending to be directors. We handle the DIN-1 form submission via the MCA portal.",
      },
      {
        heading: "Name Approval Process",
        description:
          "Submit the RUN form on the MCA portal to apply for a company name, ensuring it adheres to the Companies Act, 2013 and is unique.",
      },
      {
        heading: "File Incorporation Form SPICe+",
        description:
          "SPICe+ is an integrated online form for company incorporation and related services. We manage Part A for name reservation and complete the process, including PAN, TAN, and GST registration.",
      },
      {
        heading: "Draft and Submit MOA and AOA",
        description:
          "We prepare the Memorandum of Association (MOA) and Articles of Association (AOA), which outline the company's purpose and internal governance.",
      },
      {
        heading: "Receive Certificate of Incorporation",
        description:
          "The Registrar of Companies (ROC) issues the Certificate of Incorporation. We assist with PAN and TAN applications and help set up a company bank account, guiding you through compliance to start the operation.",
      },
    ],
  };
  const RegisterStepsData = {
    title: "",
    heading: "Steps to Register your",
    meta: "Private Limited Incorporation",
    description: "",
    steps: [
      { title: "Create Your Account", description: "",imageUrl: CreateImage },
      { title: "Talk To Our Expert", description: "",imageUrl:TalkExpert },
      {
        title:
          "Provide Document and Get Incorporated",
        description: "",imageUrl:ProvideDocument
      },
    ],
    aboutSteps: [],
    footerMessage:'Start a Free Trial With Our Experts Today!'
  };
  const FAQsData = {
    title: "FAQs",
    heading: "",
    description: "",
    FAQs: [
      {
        question:
          "Can a private limited company take a loan from an individual?",
        answer:
          "Yes, a private limited company can take a loan from an individual, subject to compliance with the provisions of the companies act, 2013 and other regulatory requirements. however, there are certain restrictions and procedures that must be followed",
      },
      {
        question: "Are private limited companies listed on the stock exchange?",
        answer:
          "No, private limited companies are not listed on the stock exchange. they cannot issue shares to the public and are restricted in terms of transferring shares, unlike public companies.",
      },
      {
        question: "How do private limited companies raise funds?",
        answer:
          "Private limited companies raise funds through equity investments from shareholders, venture capitalists, private equity, or by taking loans from banks and financial institutions.",
      },
      {
        question: "What is a private limited company?",
        answer:
          "A private limited company is a business entity privately held by shareholders, where ownership is limited to a small group of investors. the shares are not available for public trading, and there are restrictions on the transfer of shares.",
      },
      {
        question:
          "What are the benefits of registering a private limited company in india?",
        answer:
          "Registering a private limited company in india offers benefits like limited liability for shareholders, ease of raising funds, perpetual succession, separate legal entity, and credibility with financial institutions and investors.",
      },
      {
        question: "Why choose a private limited company structure?",
        answer:
          "Choosing a private limited company structure provides advantages like limited liability protection, ease of raising capital, tax benefits, and the flexibility to grow the business without extensive compliance requirements faced by public companies.",
      },
      {
        question: "Is a private limited company a corporation?",
        answer:
          "Yes, a private limited company is a type of corporation, but it is privately held and not traded on public stock exchanges. it's a separate legal entity from its owners and has limited liability.",
      },
    ],
    imageUrl: "",
  };
  const WhyEnsurekar = {
    heading: "Why to choose Ensurekar for Private Limited Registration ",
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
  const TestimonialData = {
    title: "Testimonials",
    heading: "Ensurekar Customer stories",
    description:
      "Discover the journey behind EnsureKar's success and how we've helped countless businesses thrive. Explore our stories of innovation, growth, and dedication.",
    testimonials: [
      {
        image: testimonial10,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Isabelle McKinney",
        position: "Product Manager",
      },
      {
        image: testimonial9,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Amy Gutierrez",
        position: "CFO, Solutions",
      },
      {
        image: testimonial8,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "John D",
        position: "Small Business Owner",
      },
      {
        image: testimonial7,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "Hunter Romero",
        position: "HR Manager",
      },
      {
        image: testimonial6,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Ora Wong",
        position: "Finance Director",
      },
      {
        image: testimonial10,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Isabelle McKinney",
        position: "Product Manager",
      },
      {
        image: testimonial9,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Amy Gutierrez",
        position: "CFO, Solutions",
      },
      {
        image: testimonial8,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "John D",
        position: "Small Business Owner",
      },
      {
        image: testimonial7,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "Hunter Romero",
        position: "HR Manager",
      },
      {
        image: testimonial6,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Ora Wong",
        position: "Finance Director",
      },

      {
        image: testimonial10,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Isabelle McKinney",
        position: "Product Manager",
      },
      {
        image: testimonial9,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Amy Gutierrez",
        position: "CFO, Solutions",
      },
      {
        image: testimonial8,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "John D",
        position: "Small Business Owner",
      },
      {
        image: testimonial7,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "Hunter Romero",
        position: "HR Manager",
      },
      {
        image: testimonial6,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Ora Wong",
        position: "Finance Director",
      },
      {
        image: testimonial8,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "John D",
        position: "Small Business Owner",
      },
      {
        image: testimonial7,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "Hunter Romero",
        position: "HR Manager",
      },
      {
        image: testimonial6,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Ora Wong",
        position: "Finance Director",
      },
      {
        image: testimonial10,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Isabelle McKinney",
        position: "Product Manager",
      },
      {
        image: testimonial9,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Amy Gutierrez",
        position: "CFO, Solutions",
      },
      {
        image: testimonial8,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "John D",
        position: "Small Business Owner",
      },
      {
        image: testimonial7,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "Hunter Romero",
        position: "HR Manager",
      },
      {
        image: testimonial6,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Ora Wong",
        position: "Finance Director",
      },
      {
        image: testimonial8,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "John D",
        position: "Small Business Owner",
      },
      {
        image: testimonial7,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "Hunter Romero",
        position: "HR Manager",
      },
      {
        image: testimonial6,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Ora Wong",
        position: "Finance Director",
      },
      {
        image: testimonial10,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Isabelle McKinney",
        position: "Product Manager",
      },
      {
        image: testimonial9,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Amy Gutierrez",
        position: "CFO, Solutions",
      },
      {
        image: testimonial8,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "John D",
        position: "Small Business Owner",
      },
      {
        image: testimonial7,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "Hunter Romero",
        position: "HR Manager",
      },
      {
        image: testimonial6,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Ora Wong",
        position: "Finance Director",
      },
    ],
  };
  return (
    <div>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <ServiceAdvantages AdvantagesData={AdvantagesData} />
      <PlansSection planData={planData} />
      <All_In_One_ServiceSection AllInOneData={AllInOneData} />
      <ServiceOverview OverviewData={OverviewData} />
      <RegistrationGuide RegistrationGuideData={RegistrationGuideData} />
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <FAQsServicesSection FAQsData={FAQsData} />
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
      <TestimonialSectionAllServices TestimonialData={TestimonialData} />
    </div>
  );
};

export default Pvt_Ltd_Incorporation_Registration;
