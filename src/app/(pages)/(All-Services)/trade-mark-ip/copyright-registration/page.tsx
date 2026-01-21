"use client";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import CopyrightEducation from "@/app/components/Section/Copyright-Education";
import ServiceCovered from "@/app/components/Section/Service/Service-Covered";
import {
  Calculator,
  ChartLineUp,
  ChatCircle,
  FileText,
  Money,
  NotePencil,
} from "phosphor-react";
// import never_worry_img from "../../../../images/never_worry_img.png";
import never_worry_img from "@/app/images/pages icons/other Required images/5-removebg-preview.png";
import faq_illus from "../../../../images/faq_illus.png";
import we_help from "../../../../images/Trade Mark Objection.jpeg";
import React from "react";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import HelpSection from "@/app/components/Section/help-section";
import DocumentsRequired from "@/app/components/Section/Documents-Required";
import WhatWeCharge from "@/app/components/Section/Service/What-We-Charge";
import account_section_img from "../../../../images/account_section_img.png";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import productImage from "../../../../images/recent_post_img1.png";

const CopyrightRegistration = () => {
  const BreadcrumbData = {
    title: "Copyright Registration",
    heading: "Copyright Registration India",
    subHeading: "",
    description:
      "Copyright Registration in India - Safeguard Your Creative Works Today.",
    image: "",
    bottomHeading:
      "Ensure Legal Protection with Copyright Registration.",
      cartDetails: {
        id: 33,
        name: "Copyright Registration",
        price: 13000,
        quantity: 1,
        subtotal: 13000,
        image: productImage,
      },
  };
  const ServiceCoveredData = {
    title: "",
    heading: "Types of creative work ",
    subHeading: "",
    description: "",
    image: "",
    services: [
      {
        title: "Motion Picture",
        description:
          "Documentaries, videos, TV shows, animations, feature films, and audiovisual works.",
        icon: <Calculator weight="fill" />,
      },
      {
        title: "Software /Website /Apps",
        description: "Websites, mobile apps, computer programs, and databases.",
        icon: <FileText weight="fill" />,
      },
      {
        title: "Visual & Performing Arts",
        description:
          "2D or 3D artworks, paintings, photographs, drama, screenplays, choreography, scripts, and pantomimes.",
        icon: <Money weight="fill" />,
      },
      {
        title: "Sound Recordings",
        description:
          "Music, soundtracks, and sound recordings with accompanying text.",
        icon: <ChartLineUp weight="fill" />,
      },
      {
        title: "Literary Work",
        description:
          "Books, fiction, non-fiction catalogs, ad copy, directories, and poetry",
        icon: <ChartLineUp weight="fill" />,
      },
    ],
  };
  const CopyrightEducationData = {
    title: "Copyright?",
    heading: "What is Copyright?",
    description:
      "Copyright is a form of intellectual property that protects original works of authorship. It grants creators exclusive rights.",
    features: [
      {
        title: "Exclusive Rights",
        description:
          "It protects original works by granting creators control over reproduction, distribution, and adaptation.",
        icon: <ChatCircle weight="fill" />,
      },
      {
        title: "Growth Potential",
        description:
          " Copyright is automatically applied once the work is fixed in a tangible form (written, recorded, etc.).",
        icon: <ChartLineUp weight="fill" />,
      },
      {
        title: "Optional Registration ",
        description:
          "Registration isn’t mandatory but offers legal advantages, such as the ability to sue for infringement.",
        icon: <NotePencil weight="fill" />,
      },
    ],
    image: never_worry_img,
  };
  
  const HelpSectionData = {
    heading: "Eligibility for Copyright Registration in India",
    subHeading: "",
    description:
      "To qualify for copyright registration, a work must meet the following conditions:",
    image: we_help,
    bottomHeading: "",
    bottomDescription: "",
    bottomList: [
      {
        heading: "Originality:",
        description:
          "The work should be the author's own creative effort and not a replica of another's work.",
      },
      {
        heading: "Tangible Form: ",
        description:
          "The work must be captured in a physical form, such as being written, recorded, or stored digitally.",
      },
      {
        heading: "Eligible Categories: ",
        description:
          "The work must belong to one of the copyright-protected categories in India, including: <br><br>o	Literary works (books, articles, poems, plays) <br><br>o	Dramatic works (screenplays, choreography)<br><br>o	Musical works (songs, compositions)<br><br>o	Artistic works (paintings, sculptures, photographs)<br><br>o	Cinematographic films<br><br>o	Sound recordings<br><br>o	Software ",
      },
    
     
    ],
  };
  const DocumentsRequiredData = {
    title: "Documents Required ",
    heading: "Documents Required for Copyright Registration in India",
    description: "",
    documentsRequired: [
      {
        icon: "",
        text: "Copies of the Work: At least two copies of the literary, artistic, or software-related work.",
      },
      {
        icon: "",
        text: "Payment Proof: Evidence of the registration fee payment.",
      },
     { icon: "",
      text: "No-Objection Certificate (NOC): Required if multiple contributors or owners are involved.",},
     { icon: "",
      text: "Power of Attorney: Needed if an agent files on behalf of the owner.",},
     { icon: "",
      text: "Source Code (for Software): First and last 10 pages for computer programs.",},
     { icon: "",
      text: "Work Details: Nature, category, and title of the work.",},
     { icon: "",
      text: "	Applicant Details: Name and contact information of the applicant.",},
     { icon: "",
      text: "Author Details: Name, nationality, and other key details of the creator.",},
     { icon: "",
      text: "Publication Details: Date and location, if the work is published.",},

    ],
  };

  const RightsOfCopyrightOwnersData = {

    title: "",
    heading: "Rights of Copyright Owners",
    subHeading: "",
    description: "Copyright owners enjoy exclusive rights to their creative works, which include the following:",
    image: "",
    services: [
      {
        title: "Reproduction",description:
          "Create copies in various forms, such as print, digital, or audio-visual",
        icon: <Calculator weight="fill" />,
      },
      {
        title: "Distribution",
        description: "Sell, rent, lease, or lend copies of the work to the public",
        icon: <FileText weight="fill" />,
      },
      {
        title: "Derivative Works",
        description:
          "Modify or adapt the original work, such as creating translations or adaptations.",
        icon: <Money weight="fill" />,
      },
      {
        title: "Public Performance",
        description:
          " Present the work in public, such as in concerts, plays, or film screenings.",
        icon: <ChartLineUp weight="fill" />,
      },
      {
        title: "Public Display",
        description:
          "Exhibit the work in public spaces like galleries, museums, or online.",
        icon: <ChartLineUp weight="fill" />,
      },
      {
        title: "Public Communication",
        description:
          "Broadcast or share the work through radio, TV, or the Internet.",
        icon: <ChartLineUp weight="fill" />,
      },
    ],
  };
  const RegisterStepsData = {
    title: "Simple Steps",
    heading: "Hows it gonna ",
    meta: "work",
    description: "",
    steps: [
      {
        title: "Application Drafted within 48 Hours",
        description:
          "Your application is expertly drafted and reviewed by our professionals.",
      },
      {
        title: "5-7 Day Filing Process",
        description:
          "We file your copyright application, allowing you to start using the © symbol.",
      },
      {
        title: "Approval Period: 0-9 Months",
        description: "Receive your copyright certificate upon approval.",
      },
    ],
    aboutSteps: [],
  };
const FAQsData = {
    title: "FAQs",
    heading: "",
    description: "",
    FAQs: [
        { question: "What does 'copyright-free' mean?", answer: "NA" },
        { question: "Does the copyright symbol indicate protection?", answer: "NA" },
        { question: "How can you verify if something is copyrighted?", answer: "NA" },
        { question: "What defines the nature of copyright?", answer: "NA" },
        { question: "What does Section 63 of the Copyright Act cover?", answer: "NA" },
    ],
};
  return (
    <>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <CopyrightEducation CopyrightEducationData={CopyrightEducationData} />

      <ServiceCovered ServiceCoveredData={ServiceCoveredData} />
      <HelpSection HelpSectionData={HelpSectionData} />
      <DocumentsRequired DocumentsRequiredData={DocumentsRequiredData} />
      <ServiceCovered ServiceCoveredData={RightsOfCopyrightOwnersData} />

      {/* <WhatWeCharge WhatWeChargeData={RightsOfCopyrightOwnersData} /> */}
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <FAQsServicesSection FAQsData={FAQsData} routeName="copyright-registration" />

    </>
  );
};

export default CopyrightRegistration;
