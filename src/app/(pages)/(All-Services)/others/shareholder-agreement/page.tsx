import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import HelpSection from "@/app/components/Section/help-section";
// import we_help from "../../../../images/we_help.png";
// import we_help from "../../../../images/Shareholder Agreement.jpeg";
import we_help from "@/app/images/pages icons/other Required images/6-removebg-preview.png";
import StepByStep from "../../../../images/SGV-Types/Step-By-Step.svg";
import React from "react";
import RegistrationGuide from "@/app/components/Section/Registration-Guide";
import ServiceCovered from "@/app/components/Section/Service/Service-Covered";
import { Calculator } from "lucide-react";
import EnsurekarFeature from "@/app/components/Section/features";
import whyAccoupayCard_1 from "../../../../images/whyAccoupayCard_1.png";
import whyAccoupayCard_2 from "../../../../images/whyAccoupayCard_2.png";
import whyAccoupayCard_3 from "../../../../images/whyAccoupayCard_3.png";
import whyAccoupayCard_4 from "../../../../images/whyAccoupayCard_4.png";
import whyAccoupayCard_5 from "../../../../images/whyAccoupayCard_5.png";
import whyAccoupayCard_6 from "../../../../images/whyAccoupayCard_6.png";
import WhoShouldBuy from "@/app/components/Section/Service/Who-Should-Buy";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import productImage from "../../../../images/recent_post_img1.png";

import TalkExpert from "./../../../../images/SGV-Types/Talk-To-Our-Expert.svg";//"../../../images/SGV-Types/Talk-To-Our-Expert.svg";
import EnhancedBusinessCredibility from "../../../../images/SGV-Types/Enhanced-Business-Credibility.svg";
import HandUserMoney from "../../../../images/SGV-Types/Hand-User-Money.svg";


import Identify_Key_Issues from "@/app/images/pages icons/Shareholder/23-removebg-preview.png"
import Consult_a_Lawyer from "@/app/images/pages icons/Shareholder/24-removebg-preview.png"
import Negotiate_Terms from "@/app/images/pages icons/Shareholder/25-removebg-preview.png"
import Finalize_the_Document from "@/app/images/pages icons/Shareholder/26-removebg-preview.png"
import Sign_the_Agreement from "@/app/images/pages icons/Shareholder/27-removebg-preview.png"
const ShareholderAgreement = () => {
  const BreadcrumbData = {
    title: "Shareholder's Agreement",
    heading: "Shareholder's Agreement",
    subHeading:
      "Shareholder Agreement: Secure Your Business Rights and Responsibilities",
    description: "",
    image: "",
    bottomHeading:
      "Draft a Legally Binding Shareholder Agreement with Ensurekar",
      cartDetails: {
        id: 512,
        name: "Shareholder's Agreement",
        price: 5000,
        quantity: 1,
        subtotal: 5000,
        image: productImage,
      },
  };
  const HelpSectionData = {
    heading: "What is a Shareholder Agreement?",
    subHeading: "",
    description:
      "A shareholder agreement is a legally binding document that outlines the rights and responsibilities of a company's shareholders. It provides clarity on governance, management, and shareholder relations beyond corporate laws or bylaws.",
    image: we_help,
    bottomHeading: "Purposes of a Shareholder Agreement:",
    bottomDescription: "",
    bottomList: [
      {
        heading: "Protecting Shareholders' Interests",
      },
      {
        heading: "Defining Operational Guidelines",
      },
      {
        heading: "Aligning Shareholder Expectations",
      },
      {
        heading: "Providing Exit Strategies",
      },
      {
        heading: "Mitigating Legal Disputes",
      },
    ],
  };
  const RegistrationGuideData = {
    title: "",
    heading: "Benefits of a Shareholder's Agreement",
    description: "",
    image: StepByStep,
    guideList: [
      {
        heading: "Clarity and Certainty",
        description:
          "Establishes clear rules for shareholders, reducing misunderstandings and disputes.",
      },
      {
        heading: "Protection of Minority Shareholders",
        description:
          "Safeguards the rights and interests of minority shareholders in company decisions.",
      },
      {
        heading: "Dispute Resolution",
        description:
          "Provides mechanisms to resolve conflicts efficiently, avoiding litigation.",
      },
      {
        heading: "Confidentiality",
        description:
          "Ensures protection of sensitive company information and intellectual property.",
      },
    ],
  };
  const ServiceCoveredData = {
    title: "",
    heading: "Key Elements of Shareholder's Agreement",
    subHeading: "",
    description:
      "A shareholder's agreement outlines the rights, responsibilities, and obligations of shareholders, ensuring smooth governance and protecting interests.",
    image: "",
    services: [
      {
        title: "Ownership and Share Transfer",
        description:
          "Defines ownership percentages and sets restrictions on transferring shares, including drag-along and tag-along rights.",
        icon: <Calculator />,
      },
      {
        title: "Management and Decision-Making",
        description:
          "Outlines the board's structure, voting power, and procedures for major company decisions.",
        icon: <Calculator />,
      },
      {
        title: "Dispute Resolution",
        description:
          "Establishes mechanisms like mediation or arbitration for resolving shareholder conflicts.",
        icon: <Calculator />,
      },
      {
        title: "Confidentiality and Non-Compete Clauses",
        description:
          "Protects sensitive information and restricts shareholders from competing with the company.",
        icon: <Calculator />,
      },
      {
        title: "Minority Shareholder Protection",
        description:
          "Ensures minority shareholders have a voice and safeguards their interests in company decisions.",
        icon: <Calculator />,
      },
    ],
  };
  const FeatureData = {
    title: "",
    heading: "Who Needs a Shareholders' Agreement?",
    subHeading: "",
    description:
      "A shareholders' agreement is crucial for closely held companies, family businesses, and startups to prevent conflicts and protect interests, especially when multiple investors or intellectual property is involved.",
    image: "",
    bottomHeading: "",
    elements: [
      {
        image: whyAccoupayCard_1,
        heading: "Startups",
        description:
          "To outline ownership, and responsibilities and protect the interests of co-founders.",
      },
      {
        image: whyAccoupayCard_2,
        heading: "Small and Medium Enterprises (SMEs)",
        description: "To ensure clarity on decision-making and avoid disputes.",
      },
      {
        image: whyAccoupayCard_3,
        heading: "Family-Owned Businesses",
        description:
          "To manage succession plans and prevent conflicts among family members.",
      },
      {
        image: whyAccoupayCard_4,
        heading: "Companies with Multiple Shareholders",
        description:
          "To define roles, voting rights, and profit-sharing arrangements.",
      },
      {
        image: whyAccoupayCard_5,
        heading: "Investors",
        description:
          "To secure their investments and set terms for returns or exit strategies.",
      },
      {
        image: whyAccoupayCard_6,
        heading: "Growing Businesses",
        description:
          "To establish operational guidelines and future-proof the business as shareholders increase.",
      },
    ],
  };
  const WhoShouldBuyData = {
    title: "",
    heading: "Procedure for Drafting a Shareholders Agreement",
    subHeading: "",

    rolesData: {
      heading: "",
      description: "",
      roles: [
        {
          icon: Identify_Key_Issues.src,
          title: "Identify Key Issues",
          description:
            "Determine and agree on the critical matters to be covered in the agreement.",
        },
        {
          icon: Consult_a_Lawyer.src,
          title: "Consult a Lawyer",
          description:
            "Engage a qualified corporate lawyer to ensure the agreement complies with legal requirements and suits your company’s needs.",
        },
        {
          icon: Negotiate_Terms.src,
          title: "Negotiate Terms",
          description:
            "All shareholders should review, discuss, and agree upon the terms to reach a mutual consensus.",
        },
        {
          icon: Finalize_the_Document.src,
          title: "Finalize the Document",
          description:
            "Prepare the agreement in writing, ensuring all terms are clear and comprehensive.",
        },
        {
          icon: Sign_the_Agreement.src ,
          title: "Sign the Agreement",
          description:
            "Once finalized, all shareholders must sign to make the agreement legally binding.",
        },
      ],
    },
  };
  const WhyEnsurekar = {
    heading: "Why Choose Ensurekar for Your Shareholders' Agreement?",
    description: "",
    elements: [
      {
        heading: "Expert Guidance",
        description:
          "Ensurekar offers comprehensive support, addressing legal requirements and safeguarding stakeholder interests with expert advice tailored to your business needs.",
        imageUrl: TalkExpert,
      },
      {
        heading: "Effortless and Efficient Process",
        description:
          "From drafting to finalization, we ensure a hassle-free experience, streamlining the process for all involved parties.",
        imageUrl: EnhancedBusinessCredibility,
      },
      {
        heading: "Transparent and Cost-Effective Pricing",
        description:
          "Our upfront pricing eliminates hidden costs, delivering a stress-free and budget-friendly solution.",
        imageUrl: HandUserMoney,
      },
    ],
  };

  const FAQsData = {
    title: "FAQs",
    heading: "What Ensurekar offer you?",
    description: "",
    FAQs: [
      // {
      //   question: "What are the drawbacks of a shareholders' agreement?",
      //   answer: "NA",
      // },
      // {
      //   question: "Is a shareholder allowed to sell their shares to anyone?",
      //   answer: "NA",
      // },
      // {
      //   question: "Is it possible to amend a shareholders' agreement?",
      //   answer: "NA",
      // },
      // {
      //   question: "Can a shareholders' agreement be terminated?",
      //   answer: "NA",
      // },
      // {
      //   question: "Is a shareholders' agreement required?",
      //   answer: "NA",
      // },
    ],
  };
  return (
    <>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <HelpSection HelpSectionData={HelpSectionData} />
      <RegistrationGuide RegistrationGuideData={RegistrationGuideData} />
      <ServiceCovered ServiceCoveredData={ServiceCoveredData} />
      <EnsurekarFeature FeatureData={FeatureData} />
      <WhoShouldBuy WhoShouldBuyData={WhoShouldBuyData} />
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
      <FAQsServicesSection FAQsData={FAQsData} routeName="shareholder-agreement"/>
    </>
  );
};

export default ShareholderAgreement;
