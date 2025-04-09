"use client";

import React from "react";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import CompaniesAct from "@/app/components/Section/Companies-Act";
import Image, { StaticImageData } from "next/image";
import Rocket_With_Men from "../../../images/SGV-Types/Rocket-With-Men.svg";
import Company_People_Group from "../../../images/SGV-Types/Company-People-Group.svg";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import faq_illus from "../../../images/faq_illus.png";
import TestimonialSection from "@/app/components/Section/Testimonial-Section";
import ServiceOverview from "@/app/components/Section/Service-Overview";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import ServiceAdvantages from "@/app/components/Section/Advantages-All-Services";

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

import All_In_One_ServiceSection from "@/app/components/Section/All-in-One-All-Services";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import TestimonialSectionAllServices from "@/app/components/Section/Testimonial-Section-All-Services";
import testimonial10 from "../../../images/testimonial10.png";
import testimonial9 from "../../../images/testimonial9.png";
import testimonial7 from "../../../images/testimonial7.png";
import testimonial8 from "../../../images/testimonial8.png";
import testimonial6 from "../../../images/testimonial6.png";

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
    heading: "Digital Signature Certificate",
    subHeading: "EnsureKar is the best digital signature provider",
    description:
      "and we can provide a DSC and digital signature certificate online registration in just three simple steps!",
    image: "",
  };

  const RegisterStepsData = {
    title: "Digital Signature",
    heading: "Steps to Register your",
    meta: "Digital Signature Certificate",
    description: "",
    steps: [
      {title: "Reach out to our expert",description:""},
      {title: "Complete Online documentation",description:""},
      {title: "Digital Signature Registration",description:""},
    ],
    aboutSteps: [
      {
        title: "Reach out to our expert",
        description:
          "When you first contact our experts, we'll collect essential details from you. This includes your name, gender, address, nationality, country, email, mobile number, and the specific purpose you need a Digital Signature Certificate (DSC) for (e.g., personal use, foreign trade, e-tenders, tax filing, company registration, GST filing, or other). We'll also assist you in selecting the right type of DSC and guide you through the application process",
      },
      {
        title: "Complete Online documentation",
        description:
          "To process your application, we'll need to gather and verify several documents, including your PAN card, proof of address, and passport. These documents will need to be properly attested",
      },
      {
        title: "Digital Signature Registration",
        description:
          "We'll verify your identity with a video call and SMS. After that, we'll send your digital signature on a USB token",
      },
    ],
    footerMessage:"Simple, quick, and hassle-free!"
  };

  const OverviewData: OverviewData = {
    heading: "Digital Signature",
    meta: "Overview",
    introduction: {
      heading: "What Is a Digital Signature Certificate Online?",
      description: [
        "A DSC or ID is another name for a digital signature certificate. To digitally sign official documents, the authority must have an active digital certificate.",
        "A digital certificate will be issued by a certificate authority. A DSC can be purchased or applied for online from third-party certificate authorities.",
        "Furthermore, many organizations, governments, and businesses can issue their own certifications.",
        "A digital certificate is required in order to use a digital signature.",
        "Digital certificates enable the use of digital signatures.",
        "The digital signature registration certificate is used to identify and validate the identity of those who hold and use this signature. It can also be used as a secure digital key.",
        "To generate the signatures, public key encryptions are used in digital signatures.",
        "Along with the user's name, the digital signature certificate will include other information such as the pin code email address, the date the certificate was issued, and the name of the certifying authority.",
      ],
    },
    advantagesInfo: {
      heading: "Advantages",
      meta: "of Digital Signature",
      description: "",
      advantages: [
        {
          imageUrl: "",
          heading: "Security",
          details:
            "Security capabilities are embedded in digital signatures to ensure a legal document isn't altered and signatures are legitimate.",
        },
        {
          imageUrl: "",
          heading: "Timestamping",
          details: "",
        },
        {
          imageUrl: "",
          heading: "Globally accepted and legally compliant",
          details: "",
        },
        {
          imageUrl: "",
          heading: "Time savings",
          details: "",
        },
        {
          imageUrl: "",
          heading: "Cost Savings",
          details: "",
        },
        {
          imageUrl: "",
          heading: "Positive environmental effects",
          details: "",
        },
        {
          imageUrl: "",
          heading: "Traceability",
          details: "",
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
          blueText: "Documents",
          end: "for Online Digital Signature Certificate (DSC)",
        },
        meta: "for Online Digital Signature Certificate (DSC)",

        subHeading: "Documents Required for DSC Class 3 Registration",
        startingDescription: "",
        endingDescription: "",
        requiredSteps: [
          {
            heading:
              "Indians who wish to apply for a digital signature online must provide the following information:",
            description: "",
            steps: [
              {
                heading: "",
                description:
                  "PAN Card Identity Proof, similar to a driver's license.",
              },
              {
                heading: "Address confirmation",
                description:
                  "Aadhaar card, voter identification card, driver's license, or registration document.",
              },
              { heading: "", description: "An official attestation." },
            ],
          },
          {
            heading:
              "Indian organizations that want to apply for an online DSC must do the following:",
            description: "",
            steps: [
              {
                heading: "",
                description: "PAN within the organization",
              },
              {
                heading: "",
                description:
                  "The partnership agreement, if applicable Concerned persons authorized to sign documents, Proof of an authorized signatory GST registration",
              },
              {
                heading: "",
                description:
                  "The papers for Indian firms differ depending on the type of entity—partnership, sole proprietorship, LLP, and so on.",
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
          blueText: "Types",
          end: "of Digital Signature Registration Certificate",
        },
        meta: "of Digital Signature Registration Certificate",
        subHeading: "",
        startingDescription: "",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              {
                heading: "Sign DSC",
                description:
                  "Only signing documents are permitted with sign DSC. The most common application is for websites such as tax returns, MCA, and others to sign PDF files. When you sign using DSC, the data and the signer's integrity are both guaranteed. It serves as evidence of intact and unaltered data.",
              },
              {
                heading: "Encrypt DSC",
                description:
                  "This type of dsc registration is widely used to protect a document. It is used to encrypt a document and is used in tender portals to help businesses that focus on uploading their papers. \n The certificate might potentially be used to deliver encrypted, sensitive information. Legal documents, e-commerce documents, and distributing documents containing highly confidential information are appropriate uses for encrypting DSC. The encrypt certificate is a standalone certificate.",
              },
              {
                heading: "Encrypt and Sign",
                description:
                  "Both signing and encrypting may be done using the Sign & Encrypt DSC. It is apt for users who wish to uphold the privacy of shared information and authenticate the same. It is used for submitting applications and forms to the government.",
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
          blueText: "Benefits",
          end: "of Digital Signature",
        },
        meta: "of Digital Signature",
        subHeading: "",
        startingDescription: "",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "Safety Priority",
            description: "",
            steps: [],
          },
          {
            heading: "Legal Standing",
            description: "",
            steps: [],
          },
          {
            heading: "Time-saving Tool",
            description: "",
            steps: [],
          },
          {
            heading: "Streamlined Processes",
            description: "",
            steps: [],
          },
          {
            heading: "Business Efficiency",
            description: "",
            steps: [],
          },
          {
            heading: "Cost-effectiveness",
            description: "",
            steps: [],
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
        heading: "Easy simple,  and quick procedure",
        description: "",
        imageUrl: "",
      },
      { heading: "100% data privacy", description: "", imageUrl: "" },
      { heading: "24*7 Professional Support", description: "", imageUrl: "" },
    ],
  };

  const AdvantagesData: AdvantagesData = {
    title: "Digital Signature Certificate",
    heading: "Advantages of Digital Signature Certificate",
    description:
      "Ensurekar is dedicated to supporting the financial health of your dental practice. From payroll solutions for dental professionals to compliance management,",
    image: Rocket_With_Men,
    advantages: [
      {
        title: "Authenticity",
        description:
          "When conducting online business, authentication is useful for verifying the accuracy of an individual's personal information, and DSC provides greater authenticity.",
        icon: <svg>...</svg>,
      },
      {
        title: "Cost and time savings",
        description:
          "You can digitally sign PDF files and send them much faster than you can physically sign paper copies of documents and scan them to send via email. It is not necessary for a digital signature certificate online holder to be physically present to conduct or authorize business.",
        icon: <svg>...</svg>,
      },
      {
        title: "Document authenticity is improved",
        description:
          "In most cases, a digitally signed document provides the recipient with greater assurance that the signer is genuine.",
        icon: <svg>...</svg>,
      },
    ],
  };
  const AllInOneData = {
    title: "",
    heading: "Digital Signature Certificate",
    image: Company_People_Group,
    description:
      ["  Hire effortlessly with automation-assisted job listings, applicant tracking, and popular job board integrations. Then, give your new hires a delightfully smooth and paperless onboarding. Ensurekar will send forms, training modules,"],
  };
  const FAQsData = {
    title: "FAQs",
    heading: "What Ensurekar offer you?",
    description: "",
    FAQs: [
      {
        question: "What services does Ensurekar offer?",
        answer:
          "Ensurekar offers a comprehensive suite of services, including accounting, payroll processing, tax preparation, financial advisory, and global payroll solutions.",
      },
      {
        question: "How does the accounting process work?",
        answer:
          "Ensurekar’s accounting process starts with gathering financial data, processing it for accuracy, and generating detailed reports for decision-making.",
      },
      // Add more FAQ items similarly
    ],
    imageUrl: faq_illus,
  };

  const TestimonialData = {
    title: "Testimonials",
    heading: "Ensurekar Customer Stories",
    description:
      "Startups thrive with Ensurekar. Their flexible payroll solutions have been instrumental in our journey, providing the support.",
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
      <BreadcrumbSection BreadcrumbData={BreadcrumbData}    scrollToPlans={() => {}}  />
      <ServiceAdvantages AdvantagesData={AdvantagesData} />
      <All_In_One_ServiceSection AllInOneData={AllInOneData} />
      <ServiceOverview OverviewData={OverviewData} />
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <FAQsServicesSection FAQsData={FAQsData} />
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
      <TestimonialSectionAllServices TestimonialData={TestimonialData} />
    </div>
  );
};

export default DigitalSignature;
