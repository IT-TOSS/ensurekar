import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import ServiceAdvantages from "@/app/components/Section/Advantages-All-Services";
import Rocket_With_Men from "../../../../images/SGV-Types/Rocket-With-Men.svg";
import Company_People_Group from "../../../../images/SGV-Types/Company-People-Group.svg";
import React from "react";
import All_In_One_ServiceSection from "@/app/components/Section/All-in-One-All-Services";
import ServiceOverview from "@/app/components/Section/Service-Overview";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import productImage from "../../../../images/recent_post_img1.png";


import TalkExpert from "./../../../../images/SGV-Types/Talk-To-Our-Expert.svg";
import EnhancedBusinessCredibility from "../../../../images/SGV-Types/Enhanced-Business-Credibility.svg";
import HandUserMoney from "../../../../images/SGV-Types/Hand-User-Money.svg";

const GSTRegistration = () => {

  const BreadcrumbData = {
    title: "GST Registration",
    heading: "GST Registration",
    description:
      "Hassle-free GST registration. Expert assistance, on-time delivery. 100% online, quick processing.",
    image: "",
    subHeading: "",
    cartDetails:{
      id:29,
      name: "GST Registration",
      price: 2000,
      quantity: 1,
      subtotal: 2000,
      image: productImage,
    }

    // items: [
    //   {
    //     title: "Home",
    //     url: "/",
    //   },
    //   {
    //     title: "All Services",
    //     url: "/all-services",
    //   },
    //   {
    //     title: "GST & Other Indirect Tax",
    //     url: "/gst-and-other-indirect-tax",
    //   },
    //   {
    //     title: "GST Registration",
    //     url: "/gst-registration",
    //   },
    // ],
  };
  const AdvantagesData = {
    title: "",
    heading: "GST Registration",
    description: "GST Registration is the process of registering your business under India's tax system, making it eligible to collect and pay GST, file returns, and operate legally.",
    image: Rocket_With_Men,
    advantages: [
      {
        title: "Unique GSTIN",
        description: "Provides a 15-digit GST Identification Number for identification and compliance.",
        icon: <svg>...</svg>,
      },
      {
        title: "Compulsory for Specific Businesses",
        description: "Required for businesses involved in interstate trade, e-commerce, or foreign trade.",
        icon: <svg>...</svg>,
      },
      {
        title: "Input Tax Credit Compliance",
        description: "Ensures tracking of input and output taxes.",
        icon: <svg>...</svg>,
      },
      {
        title: "Threshold Limit",
        description: "Registration is mandatory for businesses with annual turnover above ₹20-40 lakhs (depending on the state).",
        icon: <svg>...</svg>,
      },
      {
        title: "Legal Requirement",
        description: "Operating without GST registration when mandated can attract penalties and legal action.",
        icon: <svg>...</svg>,
      },
    ],
  };
  const AllInOneData = {
    title: "",
    heading: "Why is GST Registration ",
    image: Company_People_Group,
    description:
      ["Legal Compliance: Mandatory for businesses exceeding the turnover threshold or operating in specific sectors.",
  "Tax Collection and Remittance: Allows businesses to collect GST from customers and remit it to the government.",
  "Input Tax Credit (ITC): Enables businesses to claim credit on taxes paid for purchases.",
  "Facilitates Interstate Trade: Essential for businesses involved in interstate supply of goods or services.",
  "Eligibility for Government Contracts: Often required to bid for government tenders."],
  };
  const OverviewData = {
    heading: "GST Registration",
    meta: "Overview",
    introduction: {
      heading: "What Is GST registration ?",
      description: [
        "GST registration is the process of obtaining a unique 15-digit GSTIN (Goods and Services Tax Identification Number) for businesses liable to pay GST. As per the 2017 GST Act, businesses with an annual turnover above ₹40 lakh (or ₹20 lakh in specific states) must register. GST replaces taxes like VAT, service tax, and excise duty.",
       "Registration is mandatory for all eCommerce sellers and businesses paying VAT or service tax. The entire process can be completed online on the GST portal, which generates an ARN (Application Reference Number) for tracking.",
      ],
    },
    advantagesInfo: {
      heading: "Advantages",
      meta: "of GST Registration",
      description: "The Central Goods and Services Tax Act of 2017, implemented to streamline taxation and curb tax evasion, establishes the framework for the Goods and Services Tax (GST) levied on intra-state and inter-state supplies of goods and services in India.",
      advantages: [
        {
          imageUrl: "",
          heading: "Legal Recognition",
          details: "GST registration officially recognizes a business as a supplier, enhancing its credibility.",
        },
        {
          imageUrl: "",
          heading: "Input Tax Credit (ITC)",
          details: "Registered businesses can offset taxes paid on purchases against taxes collected on sales, reducing tax liability.",
        },
        {
          imageUrl: "",
          heading: "Simplified Compliance",
          details: "GST offers a streamlined online system for filing taxes, making compliance faster and easier.",
        },
        {
          imageUrl: "",
          heading: "Composition Scheme",
          details: "Small businesses can opt for a lower, fixed tax rate under the Composition Scheme, easing their financial burden.",
        },
        {
          imageUrl: "",
          heading: "Higher Registration Threshold",
          details: "Only businesses with annual turnover above ₹40 lakh need to register, reducing requirements for smaller firms.",
        },
        {
          imageUrl: "",
          heading: "No Cascading Effect",
          details: "GST prevents double taxation by allowing input tax credit throughout the supply chain.",
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
          start: "Who is",
          blueText: " eligible ",
          end: "for GST registration?",
        },
        meta: "for Online Digital Signature Certificate (DSC)",

        subHeading: "",
        startingDescription: "",
        endingDescription: "",
        requiredSteps: [
          
        ],
      },
      {
        imageData: {
          imageUrl: Rocket_With_Men,
          imageDirection: "right",
        },
        heading: {
          start: "",
          blueText: "Documents Required ",
          end: "for GST Registration Online-",
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
                  description: "Applicant's PAN",
         
                },
                {
                  heading: "",
                  description: "Aadhaar card",
           
                },
                {
                  heading: "",
                  description: "Evidence of business registration or Incorporation certificate",
               
                },
                {
                  heading: "",
                  description: "Promoters/Director's Identity and Address proof with Photographs",
             
                },
                {
                  heading: "",
                  description: "Business location Address proof",
                
                },
                {
                  heading: "",
                  description: "Electricity bill and utility bill of the office address",
             
                },
                {
                  heading: "",
                  description: "Bank account details, statement or canceled cheque",
               
                },
                {
                  heading: "",
                  description: "Digital Signature Certificate",
                 
                },
                {
                  heading: "",
                  description: "Letter of Authorisation or Board Resolution for Authorised Signatory",
              
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
          blueText: "Types of  ",
          end: "GST Registration",
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
                  description: "Central Goods and Services Tax (CGST) applies to the supply of goods and services within a single state",
         
                },
                {
                  heading: "",
                  description: "State Goods and Services Tax (SGST) is applicable to the sale of goods or services within the confines of a state",
           
                },
                {
                  heading: "",
                  description: "Integrated Goods and Services Tax (IGST) is imposed on transactions involving goods and services across state boundaries",
               
                },
                {
                  heading: "",
                  description: "Union Territory Goods and Services Tax (UTGST) is levied on the supply of goods and services in Union Territories such as Andaman and Nicobar Islands, Daman and Diu, Dadra and Nagar Haveli, Lakshadweep, and Chandigarh. UTGST is charged in conjunction with CGST.",
             
                },
             
          
            ],
          },
        ],
      },
    
    ],
  };
  const RegisterStepsData = {
    title: "GST Registration",
    heading: "Steps for ",
    meta: "GST Registration",
    description: "",
    steps: [
      {title: "Connect with Our GST Experts",description:""},
      {title: "Submit Business Details",description:""},
      {title: "Filing & Verification",description:""},
    ],
    aboutSteps: [
      {
        title: "Connect with Our GST Experts",
        description: "Book a slot with our experts to get all your questions answered and start the process.",
      },
      {
        title: "Submit Business Details",
        description: "Provide necessary documents and key information like your business name, SEZ unit, primary location, PAN details, and contact info to initiate registration.",
      },
      {
        title: "Filing & Verification",
        description: "Our team will file your GST application online. After receiving the OTP and verifying, you’ll get an ARN for tracking. Once approved, the GST certificate will be available on the official GST portal.",
      },
      
    ],
    footerMessage:"Simple, quick, and hassle-free!"
  };
  const FAQsData = {
    title: "FAQs",
    heading: "What Ensurekar offer you?",
    description: "",
    FAQs: [
      {
        question: "Who can apply for GST registration?",
        answer: "NA",
      },
      {
        question: "Who is eligible for GST?",
        answer: "NA",
      },
      {
        question: "What are the Uses of GST certificates?",
        answer: "NA",
      },
      {
        question: "How can I download my GST certificate?",
        answer: "NA",
      },
    ],
  };

  const WhyEnsurekar = {
    heading: "Why Choose Ensurekar for GST Registration",
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
    <>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <ServiceAdvantages AdvantagesData={AdvantagesData} />
      <All_In_One_ServiceSection AllInOneData={AllInOneData} />
      <ServiceOverview OverviewData={OverviewData} />
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <FAQsServicesSection FAQsData={FAQsData} />
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
</>
  );
};

export default GSTRegistration;
