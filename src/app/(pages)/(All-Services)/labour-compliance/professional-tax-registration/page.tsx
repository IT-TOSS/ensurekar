import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import WhoConsidered from "@/app/components/Section/Who-Considered";
import React from "react";
// import healthcare_section_img from "../../../../images/healthcare_section_img.png";
import healthcare_section_img from "../../../../images/Professional Tax Registration.npm.jpeg";
import BenefitSection from "@/app/components/Section/Benefit-Section";
import DocumentsRequired from "@/app/components/Section/Documents-Required";
import OnlineProcessforEmployers from "@/app/components/Section/Online-Process-for-Employers";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import FAQ from "../../../../images/FAQ.png";
import TestimonialSectionAllServices from "@/app/components/Section/Testimonial-Section-All-Services";
import testimonial10 from "@/app/images/pages icons/Incoem tax Assesment/Male.png";
import testimonial9 from "@/app/images/pages icons/Incoem tax Assesment/Female.png";
import testimonial7 from "@/app/images/pages icons/Incoem tax Assesment/Male.png";
import testimonial8 from "@/app/images/pages icons/Incoem tax Assesment/Male.png";
import testimonial6 from "@/app/images/pages icons/Incoem tax Assesment/Female.png";
import productImage from "../../../../images/recent_post_img1.png";


import TalkExpert from "./../../../../images/SGV-Types/Talk-To-Our-Expert.svg";//"./../../../../images/SGV-Types/Talk-To-Our-Expert.svg";
import EnhancedBusinessCredibility from "../../../../images/SGV-Types/Enhanced-Business-Credibility.svg";
import HandUserMoney from "../../../../images/SGV-Types/Hand-User-Money.svg";



const ProfessionalTaxRegistration = () => {
  const BreadcrumbData = {
    title: "Professional Tax Registration",
    heading: "Professional Tax Registration",
    subHeading: "",
    description: "Professional tax registration is mandatory within 30 days for both employers and professionals to fulfill tax duties.",
    image: "",
    bottomHeading: "",
    cartDetails:{
      id:25,
      name: "Professional Tax Registration",
      price: 10000,
      quantity: 1,
      subtotal: 10000,
      image: productImage,
    }
  };
  const WhoConsideredData = {
    title: "Professional Tax Registration",
    heading: "Professional Tax Registration ",
    description:
      "Types of Professional Tax Registration :",
    imageurl: healthcare_section_img,
    consideretion: [
      {
        icon: "",
        heading: "Professional Tax Registration Certificate",
        description:
          "This certificate is essential for individuals and businesses to register for professional tax, demonstrating compliance with tax regulations.",
      },
      {
        icon: "",
        heading: "Professional Tax Enrolment Certificate",
        description:
          "Employers may need this additional certificate to confirm their enrollment for professional tax, allowing them to deduct it from employee salaries.",
      },
      {
        icon: "",
        heading: "Professional Tax Exemption Certificate",
        description:
          "This certificate is for individuals or professionals eligible for tax exemptions, proving their status and relieving them from paying professional tax.",
      },
      
    ],
  };
  const BenefitData = {
    title: "",
    heading: "Benefits of Professional Tax Registration",
    subHeading: "",
    benefitsData: {
      heading: "",
      description: "",
      benefits: [
        {
          icon: "",
          title: "Legal Compliance",
          description:
            "Ensures compliance with state tax laws, avoiding penalties or legal issues.",
        },
        {
          icon: "",
          title: "Avoid Penalties",
          description: "Proactive registration prevents fines and legal consequences for non-compliance.",
        },
        {
          icon: "",
          title: "Employee Deductions: ",
          description:
            "Allows employers to deduct tax from employees' salaries, ensuring timely payments.",
        },
        {
          icon: "",
          title: "Proof of Compliance: ",
          description: "Provides a certificate proving adherence to tax regulations, useful for dealings with authorities or clients.",
        },
        {
          icon: "",
          title: "Access to Government Benefits",
          description:
            "May qualify businesses or individuals for government schemes and incentives.",
        },
      ],
    },
  };
  const DocumentsRequiredData = {
    title: "Required Documents",
    heading: "Professional Tax Registration",
    description: "The documents required for professional tax registration vary depending on the state. However, the following are some of the common documents that may be required:",
    documentsRequired: [
      { icon: "", text: "PAN card of the professional" },
      {
        icon: "",
        text: "Aadhaar card of the professional",
      },
      {
        icon: "",
        text: "Proof of address of the professional",
      },
      {
        icon: "",
        text: "Proof of identity of the professional",
      },
      {
        icon: "",
        text: "Proof of registration of the business, if applicable",
      },
      { icon: "", 
        text: "Proof of income, if applicable"
     },
    ].map((doc) => ({ ...doc, map: () => null })),
  };
  const OnlineProcessData = {
    title: "Eligibility",
    heading: "Eligibility for Online Professional tax Registration ",
    description: "",
    onlineProcesses: [
      {
        icon: "",
        text: "Individuals in professions, trades, or employment.",
      },
      {
        icon: "",
        text: "Employers making salary or wage payments.",
      },
      {
        icon: "",
        text: "Self-employed professionals, including freelancers and consultants.",
      },
      { icon: "", text: "Businesses in India, like partnerships and companies." },
      { icon: "", text: "Non-resident individuals or foreign firms with employees in India (may be exempt)." },
      {
        icon: "",
        text: "Criteria and exemptions vary by state and union territory.",
      },
    ],
  };
const FAQsData = {
    title: "FAQs",
    heading: "What service does ENSUREKAR offer",
    description: "",
    FAQs: [
        { question: "What are the exemptions or deductions available in professional tax?", answer: "NA" },
        { question: "Who is liable to pay professional tax?", answer: "NA" },
        { question: "How often should professional tax be paid?", answer: "NA" },
        { question: "How is professional tax calculated?", answer: "NA" },
        { question: "What is professional tax?", answer: "NA" },
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
    <>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <WhoConsidered WhoConsideredData={WhoConsideredData} />
      <BenefitSection BenefitData={BenefitData} />
      <DocumentsRequired DocumentsRequiredData={DocumentsRequiredData} />
      <OnlineProcessforEmployers OnlineProcessData={OnlineProcessData} />
      <FAQsServicesSection FAQsData={FAQsData} routeName="professional-tax-registration"/>
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
      <TestimonialSectionAllServices TestimonialData={TestimonialData} />
    </>
  );
};

export default ProfessionalTaxRegistration;
