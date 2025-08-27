"use client";

import React, { useEffect, useRef } from "react";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import HelpSection from "@/app/components/Section/help-section";
import we_help from "../../../images/Startup India Registration/1.png";
import ServiceOverview from "@/app/components/Section/Service-Overview";
import productImage from "../../../images/payrollEnsurekar.png";
import img6 from "../../../images/Startup India Registration/6.png"; // edit
import IndiaRegistration from "../../../images/Startup India Registration/3.png";
import India_Registration from "../../../images/Startup India Registration/4.png";
import RegistrationGuide from "@/app/components/Section/Registration-Guide";
import Rocket_With_Men from "../../../images/Startup India Registration/6.png";
import axios from "axios";

import faq_illus from "../../../images/faq_illus.png";
import Company_People_Group from "../../../images/SGV-Types/Company-People-Group.svg";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import PlansSection from "@/app/components/Section/Plans-Section";
import All_In_One_ServiceSection from "@/app/components/Section/All-in-One-All-Services";
import ServiceAdvantages from "@/app/components/Section/Advantages-All-Services";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import TestimonialSectionAllServices from "@/app/components/Section/Testimonial-Section-All-Services";
import testimonial10 from "../../../images/testimonial10.png";
import testimonial9 from "../../../images/testimonial9.png";
import testimonial7 from "../../../images/testimonial7.png";
import testimonial8 from "../../../images/testimonial8.png";
import testimonial6 from "../../../images/testimonial6.png";
import StepByStep from "../../../images/SGV-Types/Step-By-Step.svg";
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
import DynamicPlansSection from "../../../components/Section/DynamicPlansSection";


// add by geetanjali
import { HandCoins, Phone, DollarSign, FileCheck } from "lucide-react";
import { Startup_India_scheme } from "@/app/components/Startup_India_scheme";
import { IndianRupee, CreditCard, Shield } from "lucide-react";
import { s } from "framer-motion/client";

// What is the Startup India Scheme?
type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};


export default function StartupIndiaRegistrationPage() {

  const features: Feature[] = [
    {
      icon: DollarSign,
      title: "Tax Exemptions:",
      description: "Startups enjoy a 3-year tax holiday and exemptions on capital gains, reducing financial burdens."
    },
    {
      icon: HandCoins,
      title: "Funding Support:",
      description: "Access to government-backed funds and seed funding to accelerate growth and innovation."
    },
    {
      icon: FileCheck,
      title: "Simplified Compliance:",
      description: "Self-certification for labor and environmental laws, along with single-window clearance for approvals."
    },
    {
      icon: Phone,
      title: "Faster IP Processing:",
      description: "Up to 80% rebate on patent costs and expedited intellectual property rights processing."
    }
  ];

  // What is the Startup India Scheme?
  const features2: Feature[] = [
    {
      icon: CreditCard,
      title: "Base Fee:",
      description: "A nominal fee is typically charged for registering your startup under the Startup India Scheme."
    },
    {
      icon: IndianRupee,
      title: "Additional Costs:",
      description: "Professional Fees: You may incur charges for consulting services, legal fees, and documentation costs."
    },
    {
      icon: Shield,
      title: "Government Support:",
      description: "•	The government offers subsidies and waivers to reduce the financial burden on startups	•You may be eligible for discounts on patent and trademark filings."
    }
  ];

  
  // other components
  const HelpSectionData = {
    heading: "Startup India Registration – Empowering Innovation",
    subHeading: "",
    description:
      "Startup India Registration, launched in 2016, supports startups with tax benefits, funding, and simplified compliance. Eligible startups (under 10 years old, turnover below ₹100 crore) gain reduced IP filing costs, fast patent approvals, and tender access.",
    image: we_help,
    bottomHeading: "Key Objectives",
    bottomDescription: "",
    bottomList: [
      {
        heading: "Funding Support : ",
        description: "Financial aid for growth.",
      },
      {
        heading: "Industry Partnerships : ",
        description: "Collaboration and incubation support.",
      },
      {
        heading: "Simplified Processes : ",
        description: "Guidance for seamless scaling.",
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
      heading: "",
      meta: "",
      description: "",
      advantages: [],
    },
    eligibilityCriteria: [
      {
        imageData: {
          imageUrl: IndiaRegistration,
          imageDirection: "right",
        },
        heading: {
          start: "",
          blueText: "Eligibilty Criteria ",
          end: "for Startup India Registration",
        },
        subHeading: "",
        startingDescription:
          "To be eligible for Startup India recognition, your business must meet the following criteria:",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              {
                heading: "Incorporation ",
                description:
                  "Your business must be incorporated as a Private Limited Company, Partnership Firm, or Limited Liability Partnership",
              },
              {
                heading: "Age ",
                description:
                  "Your business should not be older than 10 years from the date of incorporation.",
              },
              {
                heading: "Annual Turnover ",
                description:
                  "The annual turnover of your business should not exceed Rs. 100 crore in any financial year",
              },
              {
                heading: "Innovation and Scalability ",
                description:
                  "Your business should be innovative and have the potential for significant growth and job creation.",
              },
            ],
          },
        ],
      },
      {
        imageData: {
          imageUrl: India_Registration,
          imageDirection: "left",
        },
        heading: {
          start: "",
          blueText: "Required Documents ",
          end: " for Startup India Registration  ",
        },
        subHeading: "",
        startingDescription: "",
        endingDescription:
          "Ensure your startup meets eligibility criteria to avail of benefits.",
        requiredSteps: [
          {
            heading: "",
            description:
              "To register your startup under the Startup India Initiative, you'll need:",
            steps: [
              {
                heading: "",
                description: "Company Incorporation Certificate",
              },
              {
                heading: "",
                description: "Proof of Funding (if applicable)",
              },
              {
                heading: "",
                description: "Authorization Letter",
              },
              { heading: "", description: "Business Plan or Pitch Deck" },
              {
                heading: "",
                description:
                  "Intellectual Property Details (patents, trademarks)",
              },
              {
                heading: "",
                description: "Awards and Recognitions",
              },
              { heading: "", description: "PAN Card" },
            ],
          },
        ],
      },
    ],
  };

  const RegistrationGuideData = {
    title: "",
    heading: "Effortlessly Register Your Startup with Startup India ",
    description: "Streamline your Startup India registration with this 4-step guide! ",
    image: StepByStep,
    guideList: [
      {
        heading: "Register Your Business Entity",
        description:
          "Incorporate your business as a Private Limited Company, Partnership Firm, or Limited Liability Partnership (LLP) with the Ministry of Corporate Affairs (MCA) or Registrar of Firms.",
      },
      {
        heading: " Create Your Startup India Profile",
        description:
          "Head to the official Startup India portal (startupindia.gov.in) and register for an account. Fill out your profile details accurately, including incorporation information, business address, and industry sector.",
      },
      {
        heading: "Apply for DPIIT Recognition",
        description:
          "Once your profile is complete, submit an online application for DPIIT (Department for Promotion of Industry and Internal Trade) certification. Attach necessary documents like your Certificate of Incorporation, business plan, and financial statements. Upon approval, you'll receive a unique recognition number, officially registering your startup.",
      },
      {
        heading: "Finalize Your Application",
        description:
          "Before submitting, carefully review the completion checklist to ensure all information is accurate and documents are uploaded correctly. 	Double-check that all required forms are filled out and your contact details are up-to-date. This minimizes errors and expedites the approval process.",
      },
    ],
  };

  const AdvantagesData = {
    title: "",
    heading: "DPIIT Recognition: Key Benefits for Your Startup ",
    description:
      "DPIIT recognition unlocks a range of benefits for your startup, fostering growth and innovation. Here are some key advantages ",
    image: Rocket_With_Men,
    advantages: [
      {
        title: "Tax Incentives",
        description:
          "Income Tax Exemptions (Section 80IAC): Avail income tax exemptions and capital gains tax relief, allowing for reinvestment in your business. \n	Tax Relief on Investments (Section 56(2)(VIIB): Receive exemptions on investments from eligible investors, boosting your funding potential.",
        icon: LimitedLiabilityProtection,
      },
      {
        title: "Streamlined Patent and IPR Processes",
        description:
          "Fast-Track Applications: Expedite your patent, trademark, and design applications.	Reduced Costs: Benefit from government subsidies and rebates on filing fees.",
        icon: SeparateLegalIdentity,
      },
      {
        title: "Simplified Winding-Up Process",
        description:
          "Faster Closure: Streamline the closure process for startups with simple debt structures. Efficient Asset Liquidation: Ensure a quicker recovery of capital.",
        icon: EnhancedBusinessCredibility,
      },
      {
        title: "Enhanced Market Access",
        description:
          "Simplified Government Procurement: Participate in government tenders without meeting prior experience or turnover criteria. Reduced Entry Barriers: Benefit from exemptions on Earnest Money Deposits for government contracts.",
        icon: TaxBenefitsforPrivateLimitedCompanies,
      },
    ],
  };

  const WhyEnsurekar = {
    heading: "How Ensurekar Can Help After Startup India Registration ",
    description:
      "Ensurekar provides ongoing support to ensure your compliance with all Startup India requirements. We'll assist with",
    elements: [
      {
        heading: "Annual Filings",
        description: "Timely submission of all necessary annual filings",
        imageUrl: TalkExpert,
      },
      {
        heading: "Tax Exemptions",
        description:
          "Ensuring your business remains compliant with all relevant regulations.",
        imageUrl: EnhancedBusinessCredibility,
      },
      {
        heading: "IPR Protection",
        description:
          "Assisting with the filing and maintenance of intellectual property rights.",
        imageUrl: HandUserMoney,
      },
      {
        heading: "Stay Updated",
        description:
          "Keeping you informed about any changes in regulations or policies.",
        imageUrl: HandUserMoney,
      },
    ],
  };

  const FAQsData = {
    title: "FAQs",
    heading: "",
    description: "",
    FAQs: [
      {
        question: "How does Startup India differ from other startup schemes?",
        answer: "",
      },
      {
        question:
          "Can a foreign-owned company register under Startup India?",
        answer: "",
      },
      {
        question:
          "What is the role of incubators in the Startup India Scheme?",
        answer: "",
      },
      {
        question:
          "Is there a time limit for applying for Startup India registration?",
        answer: "",
      },
      {
        question: "How does Startup India support startups in funding?",
        answer: "",
      },
      {
        question:
          "What types of businesses are excluded from the Startup India Scheme?",
        answer: "",
      },
      {
        question:
          "How does DPIIT recognition help in international expansion?",
        answer: "",
      },
      {
        question:
          "What are the benefits of the Startup India scheme for women entrepreneurs?",
        answer: "",
      },
      {
        question: "What are the tax exemptions under Startup India?",
        answer: "",
      },
    ],
    imageUrl: "",
  };

  const plansRef = useRef<HTMLDivElement | null>(null);
  const scrollToPlans = () => {
    if (plansRef.current) {
      plansRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Define breadcrumb data
  const BreadcrumbData = {
    title: "Startup India Registration",
    heading: "Startup India Registration",
    subHeading: "Empower Your Innovation Journey",
    description: "Get recognized under the Startup India Initiative and unlock exclusive benefits for your startup's growth and success.",
    image: we_help
  };

  return (
    <div>
      <BreadcrumbSection
        BreadcrumbData={BreadcrumbData}
        scrollToPlans={scrollToPlans}
      />
      <HelpSection HelpSectionData={HelpSectionData} />

      {/* First Block - What is the Startup India Scheme? */}
      <Startup_India_scheme features={features}
       title="What is the Startup India Scheme?"
       description = "Launched on January 16, 2016, the Startup India Scheme aims to make India a global hub for innovation and entrepreneurship. Managed by DPIIT, it supports startups with funding, mentorship, and business-friendly regulations."
       imageUrl={IndiaRegistration.src}
        />

      <ServiceOverview OverviewData={OverviewData} />

      {/* Second Block - Startup Registration Fees */}
      <Startup_India_scheme
        features={features2}
        title="Startup India Registration Fees: A Breakdown"
        imageUrl={img6.src}
      />

      <RegistrationGuide RegistrationGuideData={RegistrationGuideData} />

      <ServiceAdvantages AdvantagesData={AdvantagesData} />

      <div ref={plansRef} id="plans" className="plans-section"></div>

      <FAQsServicesSection FAQsData={FAQsData} />
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
    </div>
  );
}