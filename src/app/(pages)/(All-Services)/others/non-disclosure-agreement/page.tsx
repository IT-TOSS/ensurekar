'use client'
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import HelpSection from "@/app/components/Section/help-section";
import React from "react";
// import we_help from "../../../../images/we_help.png";
import we_help from "@/app/images/pages icons/other Required images/6-removebg-preview.png";
import StepByStep from "../../../../images/SGV-Types/Step-By-Step.svg";
import RegistrationGuide from "@/app/components/Section/Registration-Guide";
import ServiceCovered from "@/app/components/Section/Service/Service-Covered";
import { Calculator, CoinsIcon } from "lucide-react";
import EnsurekarFeature from "@/app/components/Section/features";
import whyAccoupayCard_1 from "../../../../images/whyAccoupayCard_1.png";
import whyAccoupayCard_2 from "../../../../images/whyAccoupayCard_2.png";
import whyAccoupayCard_3 from "../../../../images/whyAccoupayCard_3.png";
import whyAccoupayCard_4 from "../../../../images/whyAccoupayCard_4.png";
import whyAccoupayCard_5 from "../../../../images/whyAccoupayCard_5.png";
import whyAccoupayCard_6 from "../../../../images/whyAccoupayCard_6.png";
import taxation_services_img from "../../../../images/taxation_services_img.png";
import never_worry_img from "../../../../images/never_worry_img.png";
import WhoShouldBuy from "@/app/components/Section/Service/Who-Should-Buy";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import ExpertiseFlow from "@/app/components/Section/Expertise-Flow";
import CopyrightEducation from "@/app/components/Section/Copyright-Education";
import { ChartLineUp, ChatCircle, NotePencil } from "phosphor-react";
import productImage from "../../../../images/recent_post_img1.png";



import TalkExpert from "./../../../../images/SGV-Types/Talk-To-Our-Expert.svg";//"./../../../../images/SGV-Types/Talk-To-Our-Expert.svg";
import EnhancedBusinessCredibility from "./../../../../images/SGV-Types/Enhanced-Business-Credibility.svg";
import HandUserMoney from "./../../../../images/SGV-Types/Hand-User-Money.svg";

import Identifying_the_Parties from "@/app/images/pages icons/NDA/28-removebg-preview.png"
import Defining_Confidential_Information from "@/app/images/pages icons/NDA/29-removebg-preview.png"
import Scope_of_Confidentiality from "@/app/images/pages icons/NDA/30-removebg-preview.png"
import Exceptions_to_Confidentiality from "@/app/images/pages icons/NDA/31-removebg-preview.png"
import Recipient_Obligations from "@/app/images/pages icons/NDA/32-removebg-preview.png"
import Remedies_for_Breach from "@/app/images/pages icons/NDA/33-removebg-preview.png"
import Governing_Law_and_Jurisdiction from "@/app/images/pages icons/NDA/34-removebg-preview.png"
const NonDisclosureAgreement = () => {
  const BreadcrumbData = {
    title: "Non-Disclosure Agreement ",
    heading: "Non-Disclosure Agreement (NDA) Services in India ",
    subHeading:
      "",
    description: "",
    image: "",
    bottomHeading:
      "Secure Your Confidential Information with a Non-Disclosure Agreement (NDA)",
      cartDetails: {
        id: 838,
        name: "Non-Disclosure Agreement",
        price: 2300,
        quantity: 1,
        subtotal: 2300,
        image: productImage,
      },
  };
  const HelpSectionData = {
    heading: "Types of Non-Disclosure Agreement ",
    subHeading: "",
    description: "A Non-Disclosure Agreement (NDA) is a legal contract that protects sensitive information, preventing unauthorized disclosure. It is commonly used by consultants and agencies handling confidential data across multiple clients to maintain trust and legal compliance.",
    image: we_help,
    bottomHeading: "Types of NDAs",
    bottomDescription: "",
    bottomList: [
      {
        heading: "One-way or Unilateral Agreement : ",
        description:"One party shares confidential information with another, who agrees to keep it secure."
      },
      {
        heading: "Two-Way (Bilateral) : ",
        description:"Both parties share confidential information and agree to protect it."
      },
      {
        heading: "Multilateral : ",
        description:"Involves three or more parties where one discloses information, and others protect it from further disclosure."
      },
    ],
  };
  const RegistrationGuideData = {
    title: "",
    heading: "Benefits of Non-Disclosure Agreement ",
    description: "",
    image: StepByStep,
    guideList: [
      {
        heading: "Protects Business Secrets",
        description: "Safeguards sensitive information, such as trade secrets, from unauthorized disclosure.",
      },
      {
        heading: "Enhances Client Relationships",
        description: "Builds trust by ensuring that client data remains confidential.",
      },
      {
        heading: "Prevents Unauthorized Disclosure",
        description: "Legally restricts sharing confidential information with third parties.",
      },
      {
        heading: "Strengthens Legal Protection",
        description: "Provides legal recourse if the confidentiality agreement is breached.",
      },
      {
        heading: "Promotes Collaboration",
        description: "Encourages sharing of information between parties while maintaining confidentiality.",
      },
    ],
  };
  const ServiceCoveredData = {
    title: "",
    heading: "Key Elements of Non-disclosure Agreement",
    subHeading: "",
    description: "",
    image: "",
    services: [
      {
        title: "Parties Involved",
        description:
          "This section specifies whether the non-disclosure agreement is unilateral, bilateral, or multilateral. It also includes the details of the parties involved (such as names, addresses, etc.).",
        icon: <Calculator />,
      },
      {
        title: "Term of the Agreement",
        description:
          "The agreement should include the date of execution and its duration. It must also clarify whether the confidentiality obligations remain after the agreement expires.",
        icon: <Calculator />,
      },
      {
        title: "Confidential Information",
        description:
          "The agreement should clearly define what constitutes 'confidential' information that needs protection.",
        icon: <Calculator />,
      },
      {
        title: "Disclosure of Confidentiality",
        description:
          "This section outlines the intended use of the confidential information and identifies with whom the information can be shared.",
        icon: <Calculator />,
      },
      {
        title: "Dispute Resolution",
        description:
          "The agreement should include the methods the parties will use to resolve any disputes, including alternatives like arbitration.",
        icon: <Calculator />,
      },
    ],
  };
  const FeatureData = {
    title: "",
    heading: "When Do You Need a NDA Agreement?",
    subHeading: "",
    description:
      "You should use an NDA whenever you share confidential information with anyone who is not an employee or direct representative. Common scenarios include:",
    image: "",
    bottomHeading: "",
    elements: [
      { image: whyAccoupayCard_1, heading: "Hiring a consultant" },
      { image: whyAccoupayCard_2, heading: "Forming a joint venture" },
      {
        image: whyAccoupayCard_3,
        heading: "Negotiating a merger or acquisition",
      },
      {
        image: whyAccoupayCard_4,
        heading: "Sharing trade secrets or intellectual property",
      },
      {
        image: whyAccoupayCard_5,
        heading: "Discussing new product development",
      },
      { image: whyAccoupayCard_6, heading: "Seeking investment funding" },
    ],
  };
  const WhoShouldBuyData = {
    title: "",
    heading: "Requirements for a Non-Disclosure Agreement",
    subHeading: "",
    rolesData: {
      heading: "",
      description: "",
      roles: [
        {
          icon: Identifying_the_Parties.src,
          title: "Identifying the Parties",
          description: "Clearly define the parties involved in the agreement.",
        },
        {
          icon: Defining_Confidential_Information.src,
          title: "Defining Confidential Information",
          description: "Specify the types of information that are considered confidential.",
        },
        {
          icon: Scope_of_Confidentiality.src,
          title: "Scope of Confidentiality",
          description: "Outline the duration of the confidentiality obligation.",
        },
        {
          icon: Exceptions_to_Confidentiality.src,
          title: "Exceptions to Confidentiality",
          description: "Identify any exceptions, such as information already in the public domain.",
        },
        {
          icon: Recipient_Obligations.src,
          title: "Recipient's Obligations",
          description: "Detail the recipient's responsibilities, including maintaining confidentiality and limiting information usage.",
        },
        {
          icon: Remedies_for_Breach.src,
          title: "Remedies for Breach",
          description: "Specify the legal remedies available in case of a breach, such as injunctions or damages.",
        },
        {
          icon: Governing_Law_and_Jurisdiction.src,
          title: "Governing Law and Jurisdiction",
          description: "Determine the applicable law and jurisdiction for resolving disputes.",
        },
      ],
    },
  };
  const ExpertiseFlowData = {
    title: "",
    heading: "Components of an NDA",
    description: '',
    image: taxation_services_img,
    flowData: [
      {
        icon: <CoinsIcon size={24} />,
        title: "Parties Involved",
        description: "Clearly identifies the parties entering into the agreement.",
      },
      {
        icon: <CoinsIcon size={24} />,
        title: "Confidential Information",
        description: "Defines the specific information to be protected.",
      },
      {
        icon: <CoinsIcon size={24} />,
        title: "Obligations of the Receiving Party",
        description: "Outlines the recipient's duties to maintain confidentiality and limit information usage.",
      },
      {
        icon: <CoinsIcon size={24} />,
        title: "Duration of the Agreement",
        description: "Specifies the timeframe for which the confidentiality obligations apply.",
      },
      {
        icon: <CoinsIcon size={24} />,
        title: "Exceptions to Confidentiality",
        description: "Identifies any exceptions, such as publicly available information.",
      },
      {
        icon: <CoinsIcon size={24} />,
        title: "Remedies for Breach",
        description: "Details the legal remedies available in case of a breach.",
      },
      {
        icon: <CoinsIcon size={24} />,
        title: "Governing Law and Jurisdiction",
        description: "Specifies the applicable laws and the jurisdiction for resolving disputes.",
      },
    ],
  };
  const CopyrightEducationData = {
    title: "",
    heading: "Consequences of Breaching a Non-Disclosure Agreement (NDA)",
    description: "Violating an NDA can lead to serious legal repercussions. Potential consequences include:",
    features: [
      {
        title: "Monetary Damages",
        description: "You may be liable for financial losses suffered by the disclosing party.",
        icon: <ChatCircle weight="fill" />,
      },
      {
        title: "Injunctive Relief",
        description: "A court order may be issued to prevent you from further disclosing confidential information.",
        icon: <ChatCircle weight="fill" />,
      },
      {
        title: "Legal Action",
        description: "The disclosing party may initiate legal proceedings against you.",
        icon: <ChatCircle weight="fill" />,
      },
      {
        title: "Reputational Damage",
        description: "Breach of an NDA can tarnish your reputation and harm future business relationships.",
        icon: <ChatCircle weight="fill" />,
      },
      {
        title: "",
        description: "It's crucial to strictly adhere to the terms of an NDA to avoid these consequences.",
        icon: <br />,
      }
    ],
    image: never_worry_img,
  };
  const WhyEnsurekar = {
    heading: "Why Choose EnsureKar for Your Non-Disclosure Agreement?",
    description: "",
    elements: [
      {
        heading: "Professional Support",
        description:
          "At EnsureKar, we offer expert guidance throughout the entire NDA process, ensuring that all legal and confidentiality requirements are met.",
        imageUrl: TalkExpert,
      },
      {
        heading: "Quick and Effortless Service",
        description:
          "We manage everything, from drafting to finalizing the NDA, ensuring a seamless and efficient experience.",
        imageUrl: EnhancedBusinessCredibility,
      },
      {
        heading: "Clear and Cost-Effective Pricing",
        description:
          "Our transparent pricing guarantees no hidden fees, making the process stress-free and affordable.",
        imageUrl: HandUserMoney,
      },
    ],
  };
  const FAQsData = {
    title: "FAQs",
    heading: "What Ensurekar offer you?",
    description: "",
    FAQs: [
      {
        question: "What are the two main types of non-disclosure agreements?",
        answer: "NA",
      },
      {
        question: "Is a non-disclosure agreement legally enforceable?",
        answer: "NA",
      },
      {
        question: "Can you provide an example of a non-disclosure agreement?",
        answer: "NA",
      },
      {
        question:
          "What are the five essential components of a non-disclosure agreement?",
        answer: "NA",
      },
      {
        question: "Who typically uses non-disclosure agreements?",
        answer: "NA",
      },
      {
        question: "How long does a non-disclosure agreement remain valid?",
        answer: "NA",
      },
      {
        question:
          "How does an NDA differ from a Memorandum of Understanding (MoU)?",
        answer: "NA",
      },
      {
        question: "What is another term for a non-disclosure agreement?",
        answer: "NA",
      },
      {
        question:
          "What does 'material' mean in the context of a non-disclosure agreement?",
        answer: "NA",
      },
      {
        question: "What laws govern non-disclosure agreements?",
        answer: "NA",
      },
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
      <ExpertiseFlow ExpertiseFlowData={ExpertiseFlowData} />

      <CopyrightEducation CopyrightEducationData={CopyrightEducationData} />

      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
      <FAQsServicesSection FAQsData={FAQsData} />
    </>
  );
};

export default NonDisclosureAgreement;
