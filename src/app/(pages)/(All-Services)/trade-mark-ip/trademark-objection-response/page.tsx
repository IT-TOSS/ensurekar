import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import HelpSection from "@/app/components/Section/help-section";
import React from "react";
import we_help from "../../../../images/we_help.png";
import StepByStep from "../../../../images/SGV-Types/Step-By-Step.svg";
import whyAccoupayCard_1 from "../../../../images/whyAccoupayCard_1.png";
import whyAccoupayCard_2 from "../../../../images/whyAccoupayCard_2.png";
import whyAccoupayCard_3 from "../../../../images/whyAccoupayCard_3.png";
import whyAccoupayCard_4 from "../../../../images/whyAccoupayCard_4.png";
import whyAccoupayCard_5 from "../../../../images/whyAccoupayCard_5.png";
import Rocket_With_Men from "../../../../images/SGV-Types/Rocket-With-Men.svg";
import RegistrationGuide from "@/app/components/Section/Registration-Guide";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import EnsurekarFeature from "@/app/components/Section/features";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import ServiceOverview from "@/app/components/Section/Service-Overview";
import productImage from "../../../../images/recent_post_img1.png";

const TrademarkObjectionResponse = () => {
  const BreadcrumbData = {
    title: "Trade mark objection",
    heading: "Trade mark objection",
    subHeading: "Trademark Objection: What It Is and How to Overcome It.",
    description:
      "Understanding the Trademark Objection Process and How to Respond Effectively.",
    image: "",
    bottomHeading: "",
    cartDetails: {
      id: 36,
      name: "Trademark Objection Response",
      price: 1350,
      quantity: 1,
      subtotal: 1350,
      image: productImage,
    },
  };
  const HelpSectionData = {
    heading: "What is Trade Mark Objection",
    subHeading: "",
    description:
      "Trademark objection occurs when the Trademark Registry identifies concerns with a trademark application, preventing its immediate registration. This can happen due to similarity with an existing mark or violations of absolute grounds outlined in the Trade Marks Act, of 1999.",
    image: we_help,
    bottomHeading: "Common Reasons for Trademark Objection:",
    bottomDescription: "",
    bottomList: [
      {
        heading: "Similarity to Existing Trademarks",
        description: "",
      },
      {
        heading: "Lack of Distinctiveness",
        description: "",
      },
      {
        heading: "Deceptiveness",
        description: "",
      },
      {
        heading: "Violation of Prohibited Symbols or Names",
        description: "",
      },
      {
        heading: "Immorality or Scandal",
        description: "",
      },
    ],
  };
  const RegistrationGuideData = {
    title: "",
    heading: "Documents Required For Trademark Objection",
    description: "",
    image: StepByStep,
    guideList: [
      {
        heading: "Examine the trademark objection",
        description: "",
      },
      {
        heading: "Submit a reply to the trademark objection",
        description: "",
      },
      {
        heading: "Review and verify the response before submission",
        description: "",
      },
      {
        heading: "Seek feedback on the department's response",
        description: "",
      },
      {
        heading:
          "If the reply is accepted, your trademark will be published in the Trademark Journal",
        description: "",
      },
      {
        heading:
          "As an applicant, attending the trademark hearing is mandatory.",
        description: "",
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
      heading: "How Much Time Do You Have ",
      meta: "to Respond to an Examination Report?",
      description:
        "The time you have to reply to an Examination Report in India depends on the type of trademark application you’ve filed and the issues raised by the examiner. Here’s a simple breakdown:",
      advantages: [],
    },
    eligibilityCriteria: [
      {
        imageData: {
          imageUrl: Rocket_With_Men,
          imageDirection: "right",
        },
        heading: {
          start: "For ",
          blueText: "Regular ",
          end: "Applications",
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
                heading: "4 months",
                description:
                  "You have 4 months to respond to the report from the date you receive it.",
              },
              {
                heading: "Extension",
                description:
                  "Need more time? You can request an extra 30 days by paying a fee, but be sure to ask before the original deadline ends.",
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
          start: "For",
          blueText: "Fast-Track",
          end: "Applications",
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
                heading: "3 months",
                description:
                  "For fast-track applications, you only have 3 months to respond.",
              },
              {
                heading: "Extension",
                description:
                  "You can still ask for an extra 30-day extension if needed.",
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
          start: "What Happens  ",
          blueText: "If You Miss",
          end: "the Deadline?",
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
                heading: "Application Will Be Abandoned ",
                description:
                  "If you miss the deadline, your application will be considered abandoned, and you’ll lose your priority date. This means you’ll have to reapply.",
              },
              {
                heading: "No Chance to Address Objections",
                description:
                  "Missing the deadline also means you won’t be able to respond to any concerns the examiner raised, which could delay or stop your trademark registration.",
              },
            ],
          },
        ],
      },
    ],
  };
  const WhatHappenData = {
    heading: "What Happens If You Don't File a Reply?",
    subHeading: "",
    description: "",
    image: we_help,
    bottomHeading: "",
    bottomDescription: "",
    bottomList: [
      { heading: "Trademark applications will be abandoned.", description: "" },
      {
        heading: "Trademark registration will not be possible.",
        description: "",
      },
      { heading: "No legal right to use the trademark.", description: "" },
      {
        heading: "Unable to prevent others from using the trademark.",
        description: "",
      },
      {
        heading:
          "Can file a new application but must address previous objections.",
        description: "",
      },
    ],
  };
  const RegisterStepsData = {
    title: "",
    heading: "Steps to Register your",
    meta: "Trademark Search",
    description: "",
    steps: [
      {
        title: "Track Application Progress",
        description: "",
      },
      {
        title: "Respond to Trademark Objections",
        description: "",
      },
      {
        title: "Attend the Hearing",
        description: "",
      },
    ],
    aboutSteps: [],
    footerMessage: "",
  };
  const FeatureData = {
    title: "",
    heading: "Respond to Trademark Objection Raised",
    subHeading:
      "Achieve operational excellence with our expert guidance in legal, financial, and tax matters. Build the ideal workplace while ensuring compliance and efficiency.",
    description: "",
    image: "",
    bottomHeading: "",
    elements: [
      {
        image: whyAccoupayCard_1,
        heading: "Examine the Objection Notice",
        description:
          "Understand the objection and identify areas for improvement in your application.",
      },
      {
        image: whyAccoupayCard_2,
        heading: "Gather Evidence",
        description:
          "Collect supporting documents, including proof of prior use and distinctiveness.",
      },
      {
        image: whyAccoupayCard_3,
        heading: "Draft a Response",
        description:
          "Address each concern raised in the objection and explain how your trademark meets legal requirements.",
      },
      {
        image: whyAccoupayCard_4,
        heading: "Submit the Response",
        description:
          "File your response within the given timeframe to avoid application abandonment.",
      },
      {
        image: whyAccoupayCard_5,
        heading: "Monitor Progress",
        description:
          "Stay updated on further communications from the trademark office and provide additional information if required.",
      },
    ],
  };
  const WhyEnsurekar = {
    heading: "Why Choose EnsureKar for Trademark Objection?",
    description: "",
    elements: [
      {
        heading: "Expert Guidance",
        description:
          "EnsureKar offers professional assistance throughout the trademark objection process, helping you navigate legal complexities and ensuring a robust defense.",
        imageUrl: "",
      },
      {
        heading: "Quick and Hassle-Free",
        description:
          "We handle everything from drafting responses to managing hearings, ensuring a smooth and efficient resolution of your trademark objection.",
        imageUrl: "",
      },
      {
        heading: "Transparent and Affordable",
        description:
          "With clear, upfront pricing and no hidden fees, we make the trademark objection process cost-effective and stress-free.",
        imageUrl: "",
      },
    ],
  };
  return (
    <>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} scrollToPlans={() => {}}/>
      <HelpSection HelpSectionData={HelpSectionData} />
      <RegistrationGuide RegistrationGuideData={RegistrationGuideData} />
      <ServiceOverview OverviewData={OverviewData} />
      <HelpSection HelpSectionData={WhatHappenData} />

      <EnsurekarFeature FeatureData={FeatureData} />
      <RegisterSteps RegisterSteps={RegisterStepsData} />

      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
    </>
  );
};

export default TrademarkObjectionResponse;
