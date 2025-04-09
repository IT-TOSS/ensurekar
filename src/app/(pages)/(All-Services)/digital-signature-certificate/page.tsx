"use client";

import React from "react";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import { StaticImageData } from "next/image";
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
import StepByStep from "../../../images/SGV-Types/Step-By-Step.svg";
import RegistrationGuide from "@/app/components/Section/Registration-Guide";
import productImage from "../../../images/recent_post_img1.png";

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
    meta: string;
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

interface WhyEnsurekar {
  heading: string;
  description: string;
  elements: { heading: string; description: string; imageUrl: string }[];
}

interface AdvantagesData {
  title: string;
  heading: string;
  description: string;
  image: StaticImageData;
  advantages: { title: string; description: string; icon: React.ReactNode }[];
}

const DigitalSignature = () => {

  const handleBuy = () => {
    console.log("clicked digital sign");
  };
  
  const BreadcrumbData = {
    title: "Digital Signature",
    heading: "Digital Signature Certificate (DSC)",
    subHeading: "Want to buy a DSC quickly and online?",
    description:
      "Ensurekar is the best digital signature provider and digital signature certificate online registration in just three simple steps! 1. Connect with Experts 2. Submit Documents & Video KYC 3. Get Digital Signature Certificate. ",
    image: "",
    bottomHeading:
      "Complete Online Process, Expert Support, Simple and Cost-Effective.",
      cartDetails:{
        id:23,
        name: "Digital Signature Certificate",
        price: 1000,
        quantity: 1,
        subtotal: 1000,
        image: productImage,
      }
      
  };
  const RegistrationGuideData = {
    title: "",
    heading:
      "Step by Step Process for Digital Signature Certificate Registration",
    description: "",
    image: StepByStep,
    guideList: [
      {
        heading: "Initial Consultation",
        description:
          "Our experts will guide you through the initial process, gathering essential information such as your name, address, nationality, email, phone number, and the specific purpose for your Digital Signature Certificate (DSC). This could be for personal use, foreign trade, e-tenders, tax filing, or other purposes. We'll help you choose the right type of DSC and complete the necessary forms.",
      },
      {
        heading: "Document Verification",
        description:
          "To proceed with your DSC application, we'll collect and verify essential documents like your PAN card, address proof, and passport.",
      },
      {
        heading: "Identity Verification and DSC Issuance",
        description:
          "Once your payment is confirmed, we'll verify your identity through a video call and SMS verification. After successful verification, we'll issue your Digital Signature Certificate on a secure USB token.",
      },
    ],
  };
  const RegisterStepsData = {
    title: "",
    heading: "Steps to Register your",
    meta: "Digital Signature Certificate",
    description: "",
    steps: [
      { title: "Create Your Account", description: "" },
      { title: "Talk To Our Experts", description: "" },
      { title: "Provide Document and Get Certificate", description: "" },
    ],
    aboutSteps: [
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
      heading: "Advantages",
      meta: "of Digital Signature",
      description: "",
      advantages: [
        {
          imageUrl: "",
          heading: "Enhanced Security",
          details:
            "Digital signatures use encryption to secure documents, ensuring their integrity and verifying the signer's identity.",
        },
        {
          imageUrl: "",
          heading: "Legal Validity",
          details:
            "Recognized under the Information Technology Act, 2000, digital signatures are legally equivalent to handwritten signatures.",
        },
        {
          imageUrl: "",
          heading: "Time and Cost Efficiency",
          details:
            "They eliminate the need for physical paperwork, speeding up the signing process and reducing costs associated with printing and mailing.",
        },
        {
          imageUrl: "",
          heading: "Improved Traceability",
          details:
            "Digital signatures provide an audit trail, making it easy to track document signers and enhance accountability in transactions.",
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
          blueText: "Purpose  ",
          end: "of Digital Signature",
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
                heading: "Enhanced Security",
                description:
                  "DSC registration ensures heightened security for online transactions by minimizing fraud risks and safeguarding data with an added protection layer.",
              },
              {
                heading: "Identity Verification",
                description:
                  "It allows for verifying the identity of individuals or organizations in a transaction, fostering trust between the involved parties.",
              },
              {
                heading: "Legally Recognized",
                description:
                  "A DSC holds the same legal validity as a handwritten signature, ensuring the authenticity of electronic documents and their acceptance as evidence in legal proceedings.",
              },
              {
                heading: "Time and Cost Efficiency",
                description:
                  "With DSC registration, documents can be signed electronically, saving time and cutting costs linked to traditional paper-based processes.",
              },
              {
                heading: "Business Efficiency",
                description:
                  "DSC registration helps businesses streamline operations, speeding up document signing, reducing paperwork, and enhancing overall productivity.",
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
          start: "Who  ",
          blueText: "Requires",
          end: "a Digital Signature?",
        },
        meta: "of Digital Signature Registration Certificate",
        subHeading: "",
        startingDescription: "",
        endingDescription: "",
        requiredSteps: [
          {
            heading:
              "In the following situations, acquiring a Class 3 digital signature is mandatory",
            description: "",
            steps: [
              {
                heading: "",
                description:
                  "All registered trusts, partnership firms, businesses, and individuals subject to a tax audit under the Income Tax Act must electronically file their income tax returns.",
              },
              {
                heading: "",
                description:
                  "Entities filing documents with MCA21 (Ministry of Corporate Affairs) are required to use digital signatures.",
              },
            ],
          },
          {
            heading:
              "As per MCA regulations, the following individuals must use digital signatures",
            description: "",
            steps: [
              {
                heading: "",
                description: "Directors",
              },
              {
                heading: "",
                description: "Auditors",
              },
              {
                heading: "",
                description: "Company secretaries",
              },
              {
                heading: "",
                description: "Bank officials",
              },
              {
                heading: "",
                description: "Other authorized signatories.",
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
          start: "",
          blueText: "Documents Required ",
          end: "for DSC Registration",
        },
        meta: "of Digital Signature",
        subHeading: "",
        startingDescription: "",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "For Indian Individuals: ",
            description: "",
            steps: [
              {
                heading: "",
                description: "PAN card",
              },
              {
                heading: "",
                description: "Proof of Identity (e.g., Driver's License)",
              },
              {
                heading: "",
                description:
                  "Address Proof: Aadhaar Card, Voter ID, Driver's License, or Registration Document",
              },
              {
                heading: "",
                description: "Attestation by an official",
              },
            ],
          },
          {
            heading: "For Indian Organizations:",
            description: "",
            steps: [
              {
                heading: "",
                description: "Company PAN Card",
              },
              {
                heading: "",
                description: "Partnership deed (if applicable)",
              },
              {
                heading: "",
                description: "Authorization for the person signing documents",
              },
              {
                heading: "",
                description: "Proof of the authorized signatory",
              },
              {
                heading: "",
                description: "GST registration",
              },
              {
                heading: "",
                description:
                  "Documents may vary based on entity type (e.g., partnership, proprietorship, LLP).",
              },
            ],
          },
          {
            heading: "For Foreign Individuals and Organizations:",
            description: "",
            steps: [
              {
                heading: "",
                description: "Attested passport of the applicant",
              },
              {
                heading: "",
                description: "If abroad, attested copy of visa",
              },
              {
                heading: "",
                description:
                  "If in India, attested residence permit certificate",
              },
              {
                heading: "",
                description:
                  "Government-issued address proof with attested copy",
              },
            ],
          },
        ],
      },
    ],
  };
  const WhyEnsurekar: WhyEnsurekar = {
    heading: "Why Choose Ensurekar for Digital signature?",
    description: "",
    elements: [
      {
        heading: "Expert Assistance",
        description:
          "EnsureKar offers professional guidance throughout the entire registration process, ensuring compliance with legal requirements.",
        imageUrl: "",
      },
      {
        heading: "Hassle-Free & Fast Service: ",
        description:
          "We handle everything from name approval to incorporation documents, ensuring a smooth and quick registration process.",
        imageUrl: "",
      },
      {
        heading: "Transparent & Affordable",
        description:
          "We provide clear, upfront pricing with no hidden fees, making the entire process cost-effective and stress-free.",
        imageUrl: "",
      },
    ],
  };
  const AdvantagesData: AdvantagesData = {
    title: "",
    heading:
      "Fastest Digital Signature Certificate (DSC)",
    description:
      "Digital Signature Certificate (DSC) Registration in India in Same day. To digitally sign official documents, the authority must have an active digital certificate. A digital certificate will be issued by a certificate authority. A DSC can be purchased or applied for online from third-party certificate authorities.",
    image: Rocket_With_Men,
    advantages: [
      {
        title: "Sign DSC",
        description:
          "Used for signing documents, commonly for purposes like tax returns, MCA filings, and signing PDF files. It ensures data integrity and authenticity.",
        icon: <svg>...</svg>,
      },
      {
        title: "Encrypt DSC",
        description:
          "Designed to protect documents by encrypting them, commonly used in tender portals to securely upload sensitive business documents. This certificate is ideal for sharing encrypted, confidential information.",
        icon: <svg>...</svg>,
      },
      {
        title: "Encrypt and Sign DSC",
        description:
          "Combines both signing and encrypting capabilities, suitable for users who need to both authenticate and protect the privacy of shared information, often used for submitting government applications and forms.",
        icon: <svg>...</svg>,
      },
    ],
  };
  const AllInOneData = {
    title: "",
    heading: "Types of Digital Signature Certificates (DSC)",
    image: Company_People_Group,
    description: [
      "There are 3 different DSC types ensure security and authenticity across a range of government.",
      "Class 1 DSC",
      "General Use Cases: Class 1 Digital Signature Certificates are issued for both business professionals and private individuals. Class 1 DSCs are suitable for securing basic personal digital interactions, such as email authentication and low-risk transactions.",
      "Class 2 DSC",
      "Uses for Business Personnel: Class 2 DSCs are mainly used by business professionals for filing documents with government bodies such as the Registrar of Companies (ROC), Income Tax Return (ITR) filings, and MCA forms. In this class, the identity of the individual is verified against a trusted, pre-verified database, ensuring a moderate level of security. ",
      "Class 3 DSC",
      "High-Value Transaction Applications: Class 3 DSCs offer the highest level of security and are used for high-value transactions. To obtain a Class 3 DSC, individuals must present themselves before a Registration Authority (RA) to verify their identity in person. These certificates are commonly used for e-tendering, e-bidding, e-procurement, and compliance with ROC, GST, IEC registration, and other sensitive online processes that require robust security."
    ],
  };
  const FAQsData = {
    title: "FAQs",
    heading: "",
    description: "",
    FAQs: [
      {
        question:
          "How can I obtain a Digital Signature Certificate (DSC) online?",
        answer: "",
      },
      {
        question:
          "How does a Digital Signature Certificate (DSC) work for signing documents online?",
        answer: "NA",
      },
      {
        question:
          "Who is authorized to issue a digital signature certificate online?",
        answer: "NA",
      },
      { question: "Can I get a DSC registration for free?", answer: "NA" },
      {
        question:
          "What is the cost of obtaining a digital signature certificate online?",
        answer: "NA",
      },
      {
        question:
          "Is there a limit to how many DSC registrations one can hold?",
        answer: "NA",
      },
      {
        question:
          "What is the difference between a digital certificate and a digital signature?",
        answer: "NA",
      },
      {
        question:
          "How long is a Digital Signature Certificate (DSC) valid for online signing?",
        answer: "NA",
      },
      { question: "Why is DSC registration necessary?", answer: "NA" },
      {
        question: "Who issues the Digital Signature Certificate online?",
        answer: "NA",
      },
    ],
  };
  const TestimonialData = {
    title: "Testimonials",
    heading: "Ensurekar Customer Stories",
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
      <BreadcrumbSection BreadcrumbData={BreadcrumbData}   scrollToPlans={() => {}}  />
      <ServiceAdvantages AdvantagesData={AdvantagesData} />
      <All_In_One_ServiceSection AllInOneData={AllInOneData} />
      <ServiceOverview OverviewData={OverviewData} />
      <RegistrationGuide RegistrationGuideData={RegistrationGuideData} />
      <div className="container stp-30 sbp-10 py-16">
        <p className="display-3 text-center  !leading-[130%]  text-bodyText mb-14 dark:text-sky-400">
          {" "}
          Start a Free Trial with Our Experts Today!
        </p>
        {/* <p className="text-center text-mainText text-2xl ">
          Start a Free Trial With Our Experts Today!
        </p> */}
      </div>
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <FAQsServicesSection FAQsData={FAQsData} />
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
      <TestimonialSectionAllServices TestimonialData={TestimonialData} />
    </div>
  );
};

export default DigitalSignature;
