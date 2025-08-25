import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import WhoConsidered from "@/app/components/Section/Who-Considered";
import React from "react";
// import healthcare_section_img from "../../../../images/healthcare_section_img.png";
import healthcare_section_img from "../../../../images/EPF.npm.jpeg";

import BenefitSection from "@/app/components/Section/Benefit-Section";
import DocumentsRequired from "@/app/components/Section/Documents-Required";
import OnlineProcessforEmployers from "@/app/components/Section/Online-Process-for-Employers";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import FAQ from "../../../../images/FAQ.png";
import TestimonialSectionAllServices from "@/app/components/Section/Testimonial-Section-All-Services";
import testimonial10 from "../../../../images/testimonial10.png";
import testimonial9 from "../../../../images/testimonial9.png";
import testimonial7 from "../../../../images/testimonial7.png";
import testimonial8 from "../../../../images/testimonial8.png";
import testimonial6 from "../../../../images/testimonial6.png";
import productImage from "../../../../images/recent_post_img1.png";


import TalkExpert from "./../../../../images/SGV-Types/Talk-To-Our-Expert.svg";//../../../images/SGV-Types/Talk-To-Our-Expert.svg";
import EnhancedBusinessCredibility from "../../../../images/SGV-Types/Enhanced-Business-Credibility.svg";
import HandUserMoney from "../../../../images/SGV-Types/Hand-User-Money.svg";


const ESIRegistration = () => {
  const BreadcrumbData = {
    title: "ESI Registration",
    heading: "ESI Registration",
    subHeading: "",
    description: "",
    image: "",
    bottomHeading: "",
    cartDetails:{
      id:27,
      name: "ESIC Registration",
      price: 10000,
      quantity: 1,
      subtotal: 10000,
      image: productImage,
    }
  };
  const WhoConsideredData = {
    title: "Employee State Insurance(ESI) Registration",
    heading: "Employee State Insurance (ESI) Registration",
    description:
      "Employee State Insurance or ESI is a scheme commenced by the Government of India to offer medical, monetary, and other advantages to workers.",
    imageurl: healthcare_section_img,
    consideretion: [
      {
        icon: "",
        heading: "Maternity Aid",
        description:
          "Maternity benefits of up to 26 weeks, extendable by 30 days, with eligibility based on 70 days' wage contribution in the preceding two periods.",
      },
      {
        icon: "",
        heading: "Sickness Benefits",
        description:
          "Employees can take up to 91 days of sick leave annually, receiving 70% of their monthly wages.",
      },
      {
        icon: "",
        heading: "Vocational Rehabilitation",
        description:
          "Permanently physically challenged employees can access vocational rehabilitation training.",
      },
      {
        icon: "",
        heading: "Extended Sickness Benefits",
        description:
          "Up to 2 years of extended sickness benefits for those with chronic diseases after exhausting the standard 91-day sick leave.",
      },
      {
        icon: "",
        heading: "Enhanced Sickness Benefit",
        description:
          "100% of daily wages for employees undergoing sterilisation, with a recuperation period of 7 days for vasectomy and 14 days for tubectomy.",
      },
    ],
  };
  const BenefitData = {
    title: "",
    heading: "Advantages of ESI Registration",
    subHeading: "",
    benefitsData: {
      heading: "",
      description: "",
      benefits: [
        {
          icon: "",
          title: "Medical Aid",
          description:
            "Complete medical care and insurance for ESI members and their families from the first day of employment.",
        },
        {
          icon: "",
          title: "Disablement Benefits",
          description: "90% of the monthly salary for disabled employees.",
        },
        {
          icon: "",
          title: "Dependent Benefits",
          description:
            "Dependents receive 90% of the employee's monthly salary in the event of death during employment.",
        },
        {
          icon: "",
          title: "Funeral Expenses",
          description: "₹10,000 provided to the family for funeral costs.",
        },
        {
          icon: "",
          title: "Old Age Medical Care",
          description:
            "Medical care for retiring employees or those opting for VRS/ERS with an annual payment of ₹120.",
        },
      ],
    },
  };
  const DocumentsRequiredData = {
    title: "Required Documents",
    heading: "Documents Needed for ESI Registration",
    description: "",
    documentsRequired: [
      { icon: "", text: "Registration Certificate" },
      {
        icon: "",
        text: "Address Proof with Rent Receipt",
      },
      {
        icon: "",
        text: "Copy of PAN Card and Bank Statement",
      },
      {
        icon: "",
        text: "Memorandum/ Partnership/ Trust Deed (based on entity type)",
      },
      {
        icon: "",
        text: "Certificate of Commencement of Production",
      },
      { icon: "", text: "Registration Number of CST/ST/GST" },
    ].map((doc) => ({ ...doc, map: () => null })),
  };
  const OnlineProcessData = {
    title: "Eligibility",
    heading: "Eligibility for ESI registration",
    description: "",
    onlineProcesses: [
      { icon: "", text: "Applies to establishments with 10+ employees (20 in some regions)." },
      {
        icon: "",
        text: "Employees earning up to ₹21,000/month are eligible.",
      },
      {
        icon: "",
        text: "Must be registered with EPFO.",
      },
      { icon: "", text: "Total ESI contribution is 6.5% of salary." },
      { icon: "", text: "Employer pays 4.75%, employee pays 1.75%." },
      {
        icon: "",
        text: " Mandatory for industrial units with salary below ₹21,000.",
      },
    ],
  };
  const FAQsData = {
    title: "FAQs",
    heading: "What service does ENSUREKAR offer",
    description: "",
    FAQs: [
      { question: "How many employees are required for ESI registration?", answer: "NA" },
      { question: "How do you check the ESI registration of an employee online?", answer: "NA" },
      { question: "What is the salary limit in ESI?", answer: "NA" },
      { question: "How much does an employer contribute towards ESI?", answer: "NA" },
      { question: "Is ESI calculated on basic salary?", answer: "NA" },
      { question: "How do you download an ESI Pehchan card?", answer: "NA" },
      { question: "Who is not eligible for ESI registration?", answer: "NA" },
      { question: "Can a person have 2 ESI registrations?", answer: "NA" },
      { question: "What is meant by an insurance number?", answer: "NA" },
      { question: "Who mandatorily requires ESI registration?", answer: "NA" },
      { question: "How much does an employee contribute towards ESI?", answer: "NA" },
    ],
    imageUrl: FAQ,
  };
  const WhyEnsurekar = {
    heading: "Why to choose Ensurekar for ESI Registration ",
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
    <>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <WhoConsidered WhoConsideredData={WhoConsideredData} />
      <BenefitSection BenefitData={BenefitData} />
      <DocumentsRequired DocumentsRequiredData={DocumentsRequiredData} />
      <OnlineProcessforEmployers OnlineProcessData={OnlineProcessData} />
      <FAQsServicesSection FAQsData={FAQsData} />

      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
      <TestimonialSectionAllServices TestimonialData={TestimonialData} />

    </>
  );
};

export default ESIRegistration;
