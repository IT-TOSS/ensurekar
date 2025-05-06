"use client";

import React from "react";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import CompaniesAct from "@/app/components/Section/Companies-Act";
import Image, { StaticImageData } from "next/image";
import faq_illus from '../../../images/faq_illus.png';
import Rocket_With_Men from "../../../images/SGV-Types/Rocket-With-Men.svg";
import Company_People_Group from "../../../images/SGV-Types/Company-People-Group.svg";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import { Headphones } from "phosphor-react";
import TestimonialSection from "@/app/components/Section/Testimonial-Section";
import ServiceAdvantages from "@/app/components/Section/Advantages-All-Services";
import All_In_One_ServiceSection from "@/app/components/Section/All-in-One-All-Services";
import ServiceOverview from "@/app/components/Section/Service-Overview";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import StepByStep from "../../../images/SGV-Types/Step-By-Step.svg";
import RegistrationGuide from "@/app/components/Section/Registration-Guide";
import { title } from "process";
import productImage from "../../../images/recent_post_img1.png";



//Krishna
import TalkExpert from "../../../images/SGV-Types/Talk-To-Our-Expert.svg";
import EnhancedBusinessCredibility from "../../../images/SGV-Types/Enhanced-Business-Credibility.svg";
import HandUserMoney from "../../../images/SGV-Types/Hand-User-Money.svg";

interface AdvantagesData {
  title: string;
  heading: string;
  description: string;
  image: StaticImageData;
  advantages: { title: string; description: string; icon: React.ReactNode }[];
}
interface OverviewData {
  heading: string;
  meta: string;
  introduction: {
    heading: string;
    description: string[];
  };
  advantagesInfo: {
    heading: string;
    meta: string;
    description: string;
    advantages: {
      imageUrl: string;
      heading: string;
      details: string;
    }[];
  };
  eligibilityCriteria: {
    imageData: {
      imageUrl: StaticImageData;
      imageDirection: string;
    };
    heading: {
      start: string;
      blueText: string;
      end: string;
    };

    subHeading: string;
    startingDescription: string;
    endingDescription: string;
    requiredSteps?: {
      heading: string;
      description: string;

      steps: { heading: string; description: string }[];
    }[];
  }[];
}
const UdyamRegistration = () => {
  const BreadcrumbData = {
    title: "GEM Registration Certificate ",
    heading: "GEM Registration Certificate ",
    description:
      "Hassle Free GEM Registration with Ensurekar. Our Experts Assist you to get Certififcate in time.",
    image: "",
    subHeading: "",
    cartDetails:{
      id:39,
      name: "	GEM Registartion",
      price: 5000,
      quantity: 1,
      subtotal: 5000,
      image: productImage,
    }
  };
  const RegistrationGuideData = {
    title: "",
    heading:
      "Step by Step Process of GEM Registration ",
    description: "",
    image: StepByStep,
    guideList: [
  {
    heading: "Create a Seller Account",
    description: "Register as a seller by providing Aadhaar or PAN details of the authorized person.",
  },
  {
    heading: "Complete Organization Profile",
    description: "Update details like PAN validation, office address, bank account, and turnover. MSE, startup, and tax assessments may also be included.",
  },
  {
    heading: "Vendor Assessment",
    description: "Apply for vendor evaluation, essential for becoming an OEM, to sell certain products on GEM.",
  },
  {
    heading: "Brand Listing",
    description: "Add your brand details, whether trademarked, branded, or unbranded goods.",
  },
  {
    heading: "Product Listing",
    description: "List your goods or services post-authorization by GEM.",
  },
  {
    heading: "Participate in Bidding",
    description: "Engage in GEM bids and appoint resellers for your offerings post-clearance.",
  }
   
    ],
  };
  const RegisterStepsData = {
    heading: "Step to Register ",
    title: "",
    meta: "for GEM Portal",
    description: "",
    steps: [
      {title: "Consult with Our Experts ",description:""},
      {title: "Submit the Required Documents ",description:""},
      {title: "Get Registered with GEM Portal",description:""},
    ],
    aboutSteps: [],
   footerMessage:"Complete Online Process, Expert Support, Simple and Cost-Effective.Ensurekar is the best digital signature provider and digital signature certificate online registration in just three simple steps! 1. Connect with Experts 2. Submit Documents & Video KYC 3. Get Digital Signature Certificate. "
  };

  const AdvantagesData: AdvantagesData = {
    title: "",
    heading: "Government E-Marketpalce (GEM) Features-",
    description:
      "The Government e-Marketplace (GEM) is an online portal for procurement by government departments and organizations in India. GEM registration enables businesses to sell goods or services directly to government buyers.",
    image: Rocket_With_Men,
    advantages: [
      {
        title: "Eligibility",
        description: "Open to manufacturers, traders, and service providers.",
        icon: <svg>...</svg>,
      },
      {
        title: "Benefits",
        description: "Access to government tenders, transparent procurement, and wider market reach.",
        icon: <svg>...</svg>,
      },
      {
        title: "Requirements",
        description: "GST, PAN, Udyam registration (if applicable), and bank account details.",
        icon: <svg>...</svg>,
      },
      {
        title: "Process",
        description: "Online application through the GEM portal.",
        icon: <svg>...</svg>,
      },
      {
        title: "Significance",
        description: "Simplifies government procurement and boosts credibility.",
        icon: <svg>...</svg>,
      },
    ],
  };

  const AllInOneData = {
    title: "",
    heading: "Why is GEM Registration Required? ",
    image: Company_People_Group,
    description:
      ["Why is a GEM Registration Certificate Required?","A GEM (Government e-Marketplace) Registration Certificate is crucial for businesses aiming to supply goods or services to government departments."," Here's why:","1.	Access to Opportunities",
"2.	Credibility",
"3.	Streamlined Process: ",
"4.	Legal Compliance",
"5.	Growth Potential",],
  };
  const OverviewData = {
    advantagesInfo: {
      heading: "Advantages of GEM Registration",
      meta: "GEM Registration",
      description:
        "GEM Registration is an online process for businesses to register on the Government e-Marketplace, enabling them to supply goods and services to government departments efficiently and transparently.",
      advantages: [
        {
          imageUrl: "",
          heading: "Access to Government Buyers",
          details: "Directly connect with government departments and public sector units.",
        },
        {
          imageUrl: "",
          heading: "Wider Market Reach",
          details: "Showcase your products and services to a vast network of buyers.",
        },
        {
          imageUrl: "",
          heading: "Transparency",
          details: "Ensures fair procurement with a transparent bidding process.",
        },
        {
          imageUrl: "",
          heading: "Ease of Doing Business",
          details: "Simplifies transactions with an easy-to-use online platform.",
        },
        {
          imageUrl: "",
          heading: "Cost Efficiency",
          details: "Reduces marketing and operational costs with direct access to buyers.",
        },
        {
          imageUrl: "",
          heading: "Growth Opportunities",
          details: "Boosts revenue by securing lucrative government contracts.",
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
          start: "Who is eligible for ",
          blueText: "GEM Registration?",
          end: "?",
        },
        subHeading: "",
        startingDescription:
          "",
        endingDescription:
          "Eligibility ensures diverse businesses can participate in government procurement via GEM.",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              {heading: "Manufacturers",description:"Businesses producing goods for sale to government departments.",},
              {heading: "Traders/Resellers",description:"Authorized resellers or distributors of products.",},
              {heading: "Service Providers",description:"Companies offering services like IT, consultancy, or maintenance.",},
              {heading: "Startups",description:"Eligible for showcasing innovative products and services.",},
              {heading: "MSMEs",description:"Micro, Small, and Medium Enterprises registered under Udyam.",},
              {heading: "Non-Profit Organizations",description:"NGOs working in relevant sectors.",},
          
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
          blueText: "Documents Required",
          end: " for GEM  Registration Online-",
        },
        subHeading: "",
        startingDescription: "",
        endingDescription: "Ensure all documents are valid and up-to-date for seamless GEM registration.",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
             
              { heading: "Business Details", description: "PAN, GST, and Udyam Registration (if applicable)." },
              { heading: "Bank Account Details", description: "Account number, IFSC code, and bank name." },
              { heading: "Aadhar Card", description: "Linked to the proprietor or authorized person." },
              { heading: "Address Proof", description: "Utility bill, rent agreement, or property papers." },
              { heading: "Company Registration Certificate", description: "For companies, LLPs, or NGOs." },
              { heading: "Product/Service Details", description: "List and specifications of goods/services offered." },
             
            ],
          },
        ],
      },
      
    ],
  };
  const FAQsData = {
    title: "FAQs",
    heading: "What Ensurekar offer you?",
    description: "",
    FAQs: [
      {
        question: "What is GEM Portal?",
        answer: "The Government e-Marketplace (GEM) is an online platform for public procurement by government organizations.",
      },
      {
        question: "Why GEM Registration is Important?",
        answer: "It allows businesses to access government tenders, ensuring transparency and providing growth opportunities.",
      },
      {
        question: "What are the Documents Required for GEM Registration?",
        answer: "PAN, GST, Udyam (if applicable), bank account details, business registration certificate, etc.",
      },
      {
        question: "What is the Registration Fee for GEM Portal?",
        answer: "The registration fee depends on the turnover and product category.",
      },
      {
        question: "What is the Importance of the Make in India Certificate?",
        answer: "It helps businesses qualify for government projects focused on promoting indigenous products.",
      },
      {
        question: "How Can I Get Vendor Assessment Done?",
        answer: "Vendor assessment is done after paying the caution money and fulfilling the OEM requirements.",
      },
      {
        question: "Is GEM Registration Free?",
        answer: "No, there may be nominal fees involved depending on the business size and product category.",
      },
      {
        question: "Can International Vendors Register on GEM?",
        answer: "Yes, provided they meet the criteria set by the Indian government for international businesses.",
      },
      {
        question: "How Long Does the GEM Registration Process Take?",
        answer: "It can take anywhere from a few days to a couple of weeks, depending on the completeness of your application.",
      },
      {
        question: "Can I Modify My GEM Profile After Registration?",
        answer: "Yes, registered vendors can update their profile anytime on the GEM portal.",
      },
    ],

  };
  const WhyEnsurekar = {
    heading: "Why Choose Ensurekar for Udaym Registration?",
    description: "",
    elements:  [
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
      <ServiceOverview OverviewData={OverviewData} />
      <RegistrationGuide RegistrationGuideData={RegistrationGuideData} />

      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <FAQsServicesSection FAQsData={FAQsData}  />
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
      <TestimonialSection />
    </div>
  );
};

export default UdyamRegistration;
