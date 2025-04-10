import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import WhoConsidered from "@/app/components/Section/Who-Considered";
import React from "react";
import healthcare_section_img from "../../../../images/healthcare_section_img.png";
import WhoShouldBuy from "@/app/components/Section/Service/Who-Should-Buy";
import BenefitSection from "@/app/components/Section/Benefit-Section";
import DocumentsRequired from "@/app/components/Section/Documents-Required";
import OnlineProcessforEmployers from "@/app/components/Section/Online-Process-for-Employers";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import faq_illus from "../../../../images/faq_illus.png";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import TestimonialSectionAllServices from "@/app/components/Section/Testimonial-Section-All-Services";
import testimonial10 from "../../../../images/testimonial10.png";
import testimonial9 from "../../../../images/testimonial9.png";
import testimonial7 from "../../../../images/testimonial7.png";
import testimonial8 from "../../../../images/testimonial8.png";
import testimonial6 from "../../../../images/testimonial6.png";
import productImage from "../../../../images/recent_post_img1.png";

const pfRegistration = () => {
  const BreadcrumbData = {
    title: "Provident Fund (PF)",
    heading: "Provident Fund (PF)",
    subHeading: "",
    description: "",
    image: "",
    bottomHeading: "",
    cartDetails:{
      id:26,
      name: "EPF Registration",
      price: 1000,
      quantity: 1,
      subtotal: 1000,
      image: productImage,
    }
  };
  const WhoConsideredData = {
    title: "Consideretion",
    heading:
      "Who is considered an Employee under the Employee Provident Fund (EPF)?",
    description: "",
    imageurl: healthcare_section_img,
    consideretion: [
      {
        icon: "",
        heading: "Full-Time and Part-Time Workers",
        description:
          "Full-time employees with consistent employment and part-time workers who work fewer hours per week are both eligible for EPF registration.",
      },
      {
        icon: "",
        heading: "Work-From-Home Employees",
        description:
          "Employees working remotely for a defined period can also register for EPF through the online process.",
      },
      {
        icon: "",
        heading: "Contractors and Consultants",
        description:
          "Contractors hired for specific projects and consultants offering their expertise for a limited time must also be registered under EPF.",
      },
      {
        icon: "",
        heading: "Freelancers",
        description:
          "As per the latest revision to the Social Security Code (2020), freelancers are now included under the EPF scheme, making them eligible for PF registration.",
      },
    ],
  };
  const BenefitData = {
    title: "",
    heading: "Benefit of provident Fund (PF) ",
    subHeading: "",
    benefitsData: {
      heading: "",
      description: "",
      benefits: [
        {
          icon: "",
          title: "Pension Coverage",
          description: "",
        },
        {
          icon: "",
          title: "Cover of Risk",
          description: "",
        },
        {
          icon: "",
          title: "Single Account/one EPF Account",
          description: "",
        },
        {
          icon: "",
          title: "Emergency Fund",
          description: "",
        },
        {
          icon: "",
          title: "Employee Deposit Linked Insurance Scheme",
          description: "",
        },
        {
          icon: "",
          title: "Extended Goals",
          description: "",
        },
      ],
    },
  };
  const DocumentsRequiredData = {
    title: "Required Documents",
    heading: "Documents Required for PF Registration Online",
    description: "",
    documentsRequired: [
      { icon: "", text: "Establishment PAN Card" },
      {
        icon: "",
        text: "Proof of Registration (such as Certificate of Incorporation)",
      },
      {
        icon: "",
        text: "Address Verification (e.g., Rent agreement, Utility bills like Water, Electricity, Telephone)",
      },
      {
        icon: "",
        text: "Specimen Signatures of Directors and Authorized Signatories",
      },
      {
        icon: "",
        text: "Digital Signature Certificate (DSC) Registration of the Authorized Applicant",
      },
      { icon: "", text: "Cross-Cancelled Cheque from the Establishment" },
    ].map((doc) => ({ ...doc, map: () => null })),
  };
  const OnlineProcessData = {
    title: "EPF Registration",
    heading: "EPF Registration Online Process for Employers",
    description: "",
    onlineProcesses: [
      { icon: "", text: "Collect relevant employee data and documents" },
      {
        icon: "",
        text: "Establishment Registered with EPFO online Registration",
      },
      {
        icon: "",
        text: "Register DSC (digital signature certificate) of the employer",
      },
      { icon: "", text: "Fill the application with all employer details" },
      { icon: "", text: "Submit verified form" },
      {
        icon: "",
        text: "Get PF registration certificate & Universal Account Number [UAN]",
      },
    ],
  };
  const FAQsData = {
    title: "FAQs",
    heading: "What Ensurekar offer you?",
    description: "",
    FAQs: [
      { question: "What is ISO certification?", answer: "NA" },
      { question: "What if the employee doesn't have PF?", answer: "NA" },
      { question: "What happens if I don't have PF?", answer: "NA" },
      {
        question:
          "Which PAN is to be entered to obtain Provident Fund registration?",
        answer: "NA",
      },
      {
        question: "What is the basic salary for EPF applicability?",
        answer: "NA",
      },
      { question: "Where can I register a PF account?", answer: "NA" },
      {
        question: "What is the basic limit for PF registration?",
        answer: "NA",
      },
      {
        question: "How is the EPF registration process helpful in pension?",
        answer: "NA",
      },
      {
        question:
          "Is PF registration compulsory for a Private Limited Company?",
        answer: "NA",
      },
      { question: "Who must register with the PF department?", answer: "NA" },
      {
        question: "What is the time taken for employer EPF registration?",
        answer: "NA",
      },
      { question: "Where can I get a PF account registration?", answer: "NA" },
    ],
    imageUrl: faq_illus,
  };
  const WhyEnsurekar = {
    heading: "Why to choose Ensurekar for EPF Registration ",
    description: "",
    elements: [
      {
        heading: "Expert Assistance",
        description:
          "EnsureKar offers professional guidance throughout the entire registration process, ensuring compliance with legal requirements.",
        imageUrl: "",
      },
      {
        heading: "Hassle-Free & Fast Service",
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
      <BreadcrumbSection BreadcrumbData={BreadcrumbData}    />
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

export default pfRegistration;
