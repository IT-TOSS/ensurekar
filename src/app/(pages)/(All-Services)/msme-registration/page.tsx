"use client";

import React from "react";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import Rocket_With_Men from "../../../images/SGV-Types/Rocket-With-Men.svg";
import Company_People_Group from "../../../images/SGV-Types/Company-People-Group.svg";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import faq_illus from "../../../images/faq_illus.png";
import ServiceOverview from "@/app/components/Section/Service-Overview";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import ServiceAdvantages from "@/app/components/Section/Advantages-All-Services";
import All_In_One_ServiceSection from "@/app/components/Section/All-in-One-All-Services";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import TestimonialSectionAllServices from "@/app/components/Section/Testimonial-Section-All-Services";
import testimonial10 from "../../../images/testimonial10.png";
import testimonial9 from "../../../images/testimonial9.png";
import testimonial7 from "../../../images/testimonial7.png";
import testimonial8 from "../../../images/testimonial8.png";
import testimonial6 from "../../../images/testimonial6.png";
import productImage from "../../../images/recent_post_img1.png";


//Krishna
import TalkExpert from "../../../images/SGV-Types/Talk-To-Our-Expert.svg";
import EnhancedBusinessCredibility from "../../../images/SGV-Types/Enhanced-Business-Credibility.svg";
import HandUserMoney from "../../../images/SGV-Types/Hand-User-Money.svg";



const MSMERegistration = () => {

  const BreadcrumbData = {
    title: "MSME Registration",
    heading: "MSME Registration Certificate ",
    subHeading: "Apply for MSME/UDYAM Registration Online",
    description:
      "The fastest turnaround time in India, with the guarantee of document upload to the government portal within 24 hours or a full refund.",
    image: "",
    bottomHeading:'Complete Online Process, Expert Support, Simple and Cost-Effective.',
    cartDetails:{
      id:28,
      name: "MSME / UDYAM Registration",
      price: 500,
      quantity: 1,
      subtotal: 500,
      image: productImage,
    }
  };
  const AdvantagesData = {
    title: "",
    heading: "MSME/UDYAM  Registration Certificate",
    description:
      "MSMEs are essential to India’s economy but often face growth challenges. To support them, the government introduced Udyam Registration on July 1, 2020, to classify MSMEs and provide benefits like easier access to loans, subsidies, and schemes. The process integrates with PAN, GST, and IT systems, ensuring recognition and credibility. Ensurekar simplifies Udyam Registration, helping businesses grow with minimal effort.",
    image: Rocket_With_Men,
    advantages: [
      {
        title: "Economic Growth",
        description: "MSMEs contribute significantly to GDP by boosting manufacturing, services, and exports.",
        icon: <svg>...</svg>,
      },
      {
        title: "Employment Generation",
        description: "They provide jobs to over 110 million people, especially in rural and semi-urban areas.",
        icon: <svg>...</svg>,
      },
      {
        title: "Encourages Entrepreneurship",
        description: "Promotes innovation and self-reliance by supporting small-scale business owners.",
        icon: <svg>...</svg>,
      },
      {
        title: "Exports Contribution",
        description: "Accounts for approximately 45% of India’s total exports.",
        icon: <svg>...</svg>,
      },
      {
        title: "Inclusive Development",
        description: "Helps in reducing regional disparities and promoting equitable growth across sectors.",
        icon: <svg>...</svg>,
      },
      {
        title: "Timely payment for MSME's",
        description: "As per recent amendments under the Income Tax Act 1961, MSME’s are now Eligible to receive payments within 45 days and 18% Interest if payment is not done in 45 days.",
        icon: <svg>...</svg>,
      },
    ],
  };
  const RegisterStepsData = {
    title: "",
    heading: "Steps to Register your",
    meta: "MSME Registration  Certificate",
    description: "",
    steps: [
      { title: "Create Your Account", description: "" },
      { title: "Talk To Our Expert", description: "" },
      { title: "Provide Documents and Get a Certificate", description: "" },
    ],
    aboutSteps: [],
    footerMessage:"Simple, quick, and hassle-free!"
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
      meta: "of MSME Registration",
      description: "",
      advantages: [
        {
          imageUrl: "",
          heading: "Access the Udyam Registration Portal",
          details:
            "Visit the official Udyam Registration portal to begin the MSME registration process.",
        },
        {
          imageUrl: "",
          heading: "Self-Declaration",
          details: "Provide essential enterprise details such as business name, type, address, and ownership through self-declaration.",
        },
        {
          imageUrl: "",
          heading: "Aadhaar Verification",
          details: "Verify your Aadhaar number using OTP authentication, as Aadhaar is the primary identification for registration.",
        },
        {
          imageUrl: "",
          heading: "PAN & GSTIN Details",
          details: "If applicable, supply PAN and GSTIN details for tax identification purposes during registration.",
        },
        {
          imageUrl: "",
          heading: "Classification & Turnover",
          details: "Enterprises are classified as Micro, Small, or Medium based on their investment and turnover figures.",
        },
        {
          imageUrl: "",
          heading: "Dynamic QR Code Certificate",
          details: "Upon successful registration, receive an e-certificate with a dynamic QR code containing enterprise details.",
        },
        {
          imageUrl: "",
          heading: "Dynamic QR Code Certificate",
          details: "Udyam Registration is a one-time process with no need for renewal.",
        },
        {
          imageUrl: "",
          heading: "Integration with Tax Systems",
          details: "The system is linked with Income Tax and GST databases to fetch investment and turnover data automatically.",
        },
        {
          imageUrl: "",
          heading: "Re-registration for Existing Registrants",
          details: "Enterprises with prior EM-II or UAM registrations need to re-register under the Udyam system.",
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
          blueText: "MSME Registration ",
          end: "Eligibility",
        },
        subHeading: "",
        startingDescription: "All manufacturing, service industries, wholesalers, and retail traders who fulfill the revised MSME classification criteria of annual turnover and investment can apply for MSME registration. Thus, the eligibility for MSME registration depends on an entity's annual turnover and investment. The following entities are eligible for MSME registration- ",
        endingDescription: "",
        requiredSteps: [
          {
            heading:"",
            description: "",
            steps: [
              {
                heading: "",
                description:"Individuals, Startups, Business owners and Entrepreneurs",
              },
              {
                heading: "",
                description:"Private and Public Limited Companies",
              },
              { heading: "", description: "Sole Proprietorship" },
              { heading: "", description: "Partnership Firm" },
              { heading: "", description: "Limited Liability Partnerships (LLPs)" },
              { heading: "", description: "Co-Operative Societies" },
              { heading: "", description: "Trusts" },
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
          blueText: "Documents Required ",
          end: "for MSME Registration",
        },
        subHeading: "",
        startingDescription: "",
        endingDescription: "",
        requiredSteps: [
          {heading: "",description: "",
            steps: [
              { heading: "",description:"Business Legal Status Required",},
              { heading: "",description:"Business Address ",},
              { heading: "",description:"Description of Primary Business Activities",},
              { heading: "",description:"Investment information (plant and equipment)",},
              { heading: "",description:"Turnover details (as per the new MSME definition)",},
              { heading: "",description:"Aadhaar Number of Authorized Person",},
              { heading: "",description:"PAN Number of  Proprietor/ Firm’s /Company",},
              { heading: "",description:"Bank Account details of the Firm",},
            
            
            ],
          },
        ],
      },
    ],
  };

  const WhyEnsurekar = {
    heading: "Why Choose Ensurekar for MSME Registration?",
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

 
  const AllInOneData = {
    title: "",
    heading: "Why MSME/UDYAM Registration is Required?",
    image: Company_People_Group,
    description:
      [
        "1.	Government Benefits: Access to Subsidies, Tax Exemptions, and Financial Assistance.",
        "2.	Ease of Credit: Simplifies loan approvals and provides access to Collateral-free loans.",
        "3.	Market Access: Facilitates participation in government tenders reserved for MSMEs.",
        "4.	Protection and Incentives: Offers protection from delayed payments and interest on overdue amounts.",
        "5.	Legal Recognition: Establishes the business as a registered MSME, enhancing credibility.",
      
      ],

  };
  const FAQsData = {
    title: "FAQs",
    heading: "",
    description: "",
    FAQs: [
      {question: "What is the Ministry of MSME's role?",answer:"NA",},
      {question: "Can you explain what Udyog Aadhar is?",answer:"NA",},
      {question: "Why is the term 'Micro' used in the context of MSME?",answer:"NA",},
      {question: "How does the Ministry of Micro differ from the Ministry of MSME?",answer:"NA",},
      {question: "I saw a mention of 'fees for Udyam registration file.' Is there a cost involved?",answer:"NA",},
      {question: "Are any documents needed for the self-declaration during Udyam Registration?",answer:"NA",},
      {question: " What advantages does Udyog Aadhaar registration offer to MSMEs?",answer:"NA",},
      {question: "I've heard about 'MSME classification.' How was it determined in the past?",answer:"NA",},
      {question: "Why is the Aadhaar number important for MSME registration?",answer:"NA",},
      {question: "What is the importance of the 'Udyog Aadhaar number'?",answer:"NA",},
      {question: "Could you provide more information about the 'MSME sector' in India?",answer:"NA",},
   
    ],
  };

  const TestimonialData = {
    title: "Testimonials",
    heading: "Ensurekar Customer Stories",
    description:
      "Discover the journey behind EnsureKar's success and how we’ve helped countless businesses thrive. Explore our stories of innovation, growth, and dedication.",
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
      <All_In_One_ServiceSection AllInOneData={AllInOneData} />
      <ServiceOverview OverviewData={OverviewData} />
      <div className="container stp-30 sbp-10 py-16">
        <p className="display-3 text-center  !leading-[130%]  text-bodyText mb-14 dark:text-sky-400">
          {" "}
          Start a Free Trial With Our Experts Today!
        </p>
    
      </div>
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <FAQsServicesSection FAQsData={FAQsData} />
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
      <TestimonialSectionAllServices TestimonialData={TestimonialData} />
    </div>
  );
};

export default MSMERegistration;
