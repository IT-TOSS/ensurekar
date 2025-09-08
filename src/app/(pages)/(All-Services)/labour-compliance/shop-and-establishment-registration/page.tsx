import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import WhoConsidered from "@/app/components/Section/Who-Considered";
import React from "react";
// import healthcare_section_img from "../../../../images/healthcare_section_img.png";
import healthcare_section_img from "../../../../images/shop-and-establishment-registration/main Image1.png";
import BenefitSection from "@/app/components/Section/Benefit-Section";
import DocumentsRequired from "@/app/components/Section/Documents-Required";
import OnlineProcessforEmployers from "@/app/components/Section/Online-Process-for-Employers";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
// import faq_illus from "../../../../images/faq_illus.png";
import faq_illus from "../../../../images/shop-and-establishment-registration/Any additional business licenses required for operation –.png";
import TestimonialSectionAllServices from "@/app/components/Section/Testimonial-Section-All-Services";
import testimonial10 from "@/app/images/pages icons/Incoem tax Assesment/Male.png";
import testimonial9 from "@/app/images/pages icons/Incoem tax Assesment/Female.png";
import testimonial7 from "@/app/images/pages icons/Incoem tax Assesment/Male.png";
import testimonial8 from "@/app/images/pages icons/Incoem tax Assesment/Male.png";
import testimonial6 from "@/app/images/pages icons/Incoem tax Assesment/Female.png";
import ServiceOverview from "@/app/components/Section/Service-Overview";
import productImage from "../../../../images/recent_post_img1.png";


//Krishna

import TalkExpert from "./../../../../images/SGV-Types/Talk-To-Our-Expert.svg";
import EnhancedBusinessCredibility from "../../../../images/SGV-Types/Enhanced-Business-Credibility.svg";
import HandUserMoney from "../../../../images/SGV-Types/Hand-User-Money.svg";

import EmpowerStates from "../../../../images/shop-and-establishment-registration/Empower States.png";

const ShopandEstablishmentRegistration = () => {
  const BreadcrumbData = {
    title: "Shop and Establishment Registration",
    heading: "Shop and Establishment Registration",
    subHeading: "",
    description:
      "Unlock Business Growth with a Gumasta License Get Compliant Effortlessly with Ensurekar Online Registration",
    image: "",
    bottomHeading: "",
    cartDetails: {
      id: 401,
      name: "Professional Tax Registration",
      price: 12000,
      quantity: 1,
      subtotal: 12000,
      image: productImage,
    }
  };
  const WhoConsideredData = {
    title: "Shop and Establishment Registration",
    heading: "Why Was the Shop Act License Introduced?",
    description: "",
    imageurl: healthcare_section_img,
    consideretion: [
      {
        icon: "",
        heading: "Empower States",
        description:
          "States can create labor regulations for commercial establishments.",
      },
      {
        icon: "",
        heading: "Organize the Unorganized Sector",
        description:
          "Transforms unorganised sectors into organised industries through rules.",
      },
      {
        icon: "",
        heading: "Mandatory Registration",
        description:
          "Requires business registration under the Shop and Establishment Act for better government support.",
      },
      {
        icon: "",
        heading: "Wage Regulation",
        description:
          "Ensures fair wages, prohibits child labor, and promotes healthy working conditions.",
      },
    ],
  };
  const OverviewData = {
    heading: "Shop and Establishment Registration",
    meta: "Overview",
    introduction: {
      heading: "",
      description: [
        "Each state has its own Shop and Establishment Act, regulated by the State Labour Departments, with licenses issued at the state level, resulting in slight variations. The Act covers all shops and commercial establishments within the state.A shop is defined as a place where goods are sold or services are provided, whether retail or wholesale. Commercial establishments include offices, godowns, warehouses, hotels, restaurants, cafes, and entertainment venues. However, factories and industries are governed by the Factories Act of 1948 and the Industries (Development and Regulation) Act of 1951.",
      ],
    },
  };

  const BenefitData = {
    title: "",
    heading: "Benefits of Shop and Establishment Registration",
    subHeading: "",
    benefitsData: {
      heading: "",
      description: "",
      benefits: [
        {
          icon: "",
          title: "Legal Right to Operate:",
          description:
            " A shop and establishment license grants business owners the legal authority to operate without harassment from law enforcement.",
        },
        {
          icon: "",
          title: "Business Bank Account",
          description:
            "The license enables the creation of a separate business bank account, as required by RBI regulations.",
        },
        {
          icon: "",
          title: "Streamlined Inspection",
          description:
            "Registered businesses benefit from easier government inspections and access to promotional schemes.",
        },
        {
          icon: "",
          title: "Access to Government Benefits",
          description:
            "The license allows businesses to tap into government schemes, including low-interest loans and financial assistance.",
        },
        {
          icon: "",
          title: "Support for Expansion",
          description:
            "Legal recognition helps businesses strengthen their market position and reach new customers while adhering to compliance requirements.",
        },
      ],
    },
  };
  const DocumentsRequiredData = {
    title: "Required Documents",
    heading: "Documents For Shop and Establishment Registration",
    description:
      "Ensure a smooth and fully digital experience with our comprehensive online shop act registration services. Please gather the following documents promptly:",
    documentsRequired: [
      { icon: "", text: "Proof of shop or business address" },
      {
        icon: "",
        text: "Identification proof",
      },
      {
        icon: "",
        text: "PAN card",
      },
      {
        icon: "",
        text: "Payment challan",
      },
      {
        icon: "",
        text: "Any additional business licenses required for operation",
      },

    ].map((doc) => ({ ...doc, map: () => null })),
  };
  const OnlineProcessData = {
    title: "Eligibility",
    heading: "Eligibility Criteria for Shop and Establishment Registration",
    description: "",
    onlineProcesses: [
      {
        icon: "",
        text: "The shop or establishment must be within Tamil Nadu's territorial limits.",
      },
      {
        icon: "",
        text: "It must not be governed by other laws like the Factories Act of 1948.",
      },
      {
        icon: "",
        text: "The business should engage in commercial activities such as trading, banking, insurance, or entertainment.",
      },
      {
        icon: "",
        text: "The establishment must have at least one employee, which can include the owner.",
      },
      {
        icon: "",
        text: "Non-resident individuals or foreign firms with employees in India (may be exempt).",
      },
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
      {
        question: "What is the Tamil Nadu Shops and Establishments Act?",
        answer:
          "The Tamil Nadu Shops and Establishments Act is a state law that regulates the working conditions, rights of employees, hours of work, holidays, payment of wages, and other conditions in shops, commercial establishments, and related workplaces within Tamil Nadu.",
      },
      {
        question: "What is the validity of a shop act license?",
        answer:
          "The validity of a Shop Act license differs by state but is typically issued for 1 to 5 years. After this period, it must be renewed to remain valid.",
      },
      {
        question: "Which entities are required to obtain the shop act license?",
        answer:
          "All shops, commercial establishments, offices, hotels, restaurants, theaters, and other places of public amusement or entertainment must obtain the Shop Act license, except certain exempted government and local authority offices.",
      },
      {
        question:
          "Is the shop act registration applicable for the establishments of the central and state government?",
        answer:
          "No, establishments of the central and state government are generally exempt from Shop Act registration. The Act mainly applies to private commercial establishments.",
      },
      {
        question: "Are the shop act registrations valid in all states/UTs across India?",
        answer:
          "No, Shop Act registration is regulated by individual states/UTs, and registration obtained in one state is not automatically valid in another. Each state/UT has its own rules, and separate registration is needed if operating in multiple states.",
      },
      {
        question:
          "Does a factory owner need to register under the Shops and Establishments Registration Act?",
        answer:
          "No, factory owners do not need to register under the Shops and Establishments Act if the premises are covered under the Factories Act, 1948. The Shop Act applies to commercial establishments that are not classified as factories.",
      },
      {
        question: "What details are to be filled in the Shop Act Registration form?",
        answer:
          "The form typically requires the establishment’s name and address, details of the employer and employees, nature of business, PAN, proof of address, number of employees, date of commencement, and other relevant documents.",
      },
      {
        question:
          "Is it necessary for the establishment to get self-registered under the Shops and Establishments Registration Act?",
        answer:
          "Yes, most states/UTs require all eligible establishments to self-register under the Shops and Establishments Act within a specific timeframe after commencing business.",
      },
      {
        question: "What is the fundamental objective of the Shops and Establishments Act?",
        answer:
          "The primary objective is to provide better working conditions for employees, regulate work hours and holidays, protect workers’ rights, ensure payment of wages, and promote the well-being of staff in commercial establishments.",
      },
      {
        question: "Is it necessary to take approval from the labor department?",
        answer:
          "Yes, approval or registration from the local Labor Department is generally mandatory for most establishments under the Shops and Establishments Act. This ensures compliance with labor laws and proper record-keeping.",
      },
    ],

    imageUrl: faq_illus,
  };
  const WhyEnsurekar = {
    heading: "Why to choose Ensurekar for Shop and Establishment Registration",
    description: "",
    elements: [
      {
        heading: "Expert Assistance",
        description:
          "EnsureKar offers professional guidance throughout the entire registration process, ensuring compliance with legal requirements",
        imageUrl: TalkExpert,
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
      {/* <ServiceOverview OverviewData={OverviewData} /> */}

      <BenefitSection BenefitData={BenefitData} />
      <DocumentsRequired DocumentsRequiredData={DocumentsRequiredData} />
      <OnlineProcessforEmployers OnlineProcessData={OnlineProcessData} />
      <FAQsServicesSection FAQsData={FAQsData} />
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
      <TestimonialSectionAllServices TestimonialData={TestimonialData} />
    </>
  );
};

export default ShopandEstablishmentRegistration;
