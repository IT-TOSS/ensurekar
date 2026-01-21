"use client";

import React, { useRef } from "react";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import faq_illus from "../../../images/faq_illus.png";
import Rocket_With_Men from "../../../images/SGV-Types/Rocket-With-Men.svg";
import Company_People_Group from "../../../images/SGV-Types/Company-People-Group.svg";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import PlansSection from "@/app/components/Section/Plans-Section";
import All_In_One_ServiceSection from "@/app/components/Section/All-in-One-All-Services";
import ServiceAdvantages from "@/app/components/Section/Advantages-All-Services";
import ServiceOverview from "@/app/components/Section/Service-Overview";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import TestimonialSectionAllServices from "@/app/components/Section/Testimonial-Section-All-Services";
// import testimonial10 from "../../../images/testimonial10.png";
// import testimonial9 from "../../../images/testimonial9.png";
// import testimonial7 from "../../../images/testimonial7.png";
// import testimonial8 from "../../../images/testimonial8.png";
// import testimonial6 from "../../../images/testimonial6.png";
import testimonial10 from "@/app/images/pages icons/Incoem tax Assesment/Male.png";
import testimonial9 from "@/app/images/pages icons/Incoem tax Assesment/Female.png";
import testimonial7 from "@/app/images/pages icons/Incoem tax Assesment/Male.png";
import testimonial8 from "@/app/images/pages icons/Incoem tax Assesment/Male.png";
import testimonial6 from "@/app/images/pages icons/Incoem tax Assesment/Female.png";
import StepByStep from "../../../images/SGV-Types/Step-By-Step.svg";
import productImage from "../../../images/recent_post_img1.png";
// const image1 = "https://images.app.goo.gl/BQV2b9i4UdQ3GBVf8";

import TalkExpert from "../../../images/SGV-Types/Talk-To-Our-Expert.svg";
import EnhancedBusinessCredibility from "../../../images/SGV-Types/Enhanced-Business-Credibility.svg";
import HandUserMoney from "../../../images/SGV-Types/Hand-User-Money.svg";

import CorporateBosy from "./../../../images/Corporate Body.png.jpeg"

import RegistrationGuide from "@/app/components/Section/Registration-Guide";

import CorporateBody from "./../../../images/LLP Page icons/Corporate Body.png";
import PerpetualSuccession from "./../../../images/LLP Page icons/Perpetual Succession.png";
import SeparateLegalEntity from "./../../../images/LLP Page icons/Separate Legal Entity.png";
import CustomisedLLPAgreement from "./../../../images/LLP Page icons/Customised LLP Agreement.png";
import ArtificialLegalPerson from "./../../../images/LLP Page icons/Artificial Legal Person.png";
import LimitedLiability from "./../../../images/LLP Page icons/Limited Liability.png";
import FlexiblePartnerStructure from "./../../../images/LLP Page icons/Flexible Partner Structure.png";
import BusinessControl from "./../../../images/LLP Page icons/Business Control.png";
import ProfitOriented from "./../../../images/LLP Page icons/Profit-Oriented.png";
import MutualAgencyProtection from "./../../../images/LLP Page icons/Mutual Agency Protection.png";



import Text from "@/app/components/Section/Text";

const LimitedLiabilityPartnershipRegistration = () => {
  const BreadcrumbData = {
    title: "Limited Liability Partnership Registration",
    heading: "Limited Liability Partnership (LLP) Registration ",
    subHeading: "Get Your LLP Registered in Just 7 days",
    description:
      "Expert Support for LLP Registration, including LLP Agreement Drafting and Compliances Requirement Covered.",
    image: "",

    bottomHeading:
      '<a href="http://" target="_blank" rel="noopener noreferrer" class="underline">View Sample</a>',
    cartDetails: {
      id: 2,
      name: "Limited Liability Partnership",
      price: 15000,
      quantity: 1,
      subtotal: 15000,
      image: productImage,
    }
  };
  // const AdvantagesData = {
  //   title: "Limited Liability Partnership Registration",
  //   heading: "Advantages of Limited Liability Partnership Registration",
  //   description:
  //     "Ensurekar is dedicated to supporting the financial health of your dental practice. From payroll solutions for dental professionals to compliance management,",
  //   image: Rocket_With_Men,
  //   advantages: [
  //     {
  //       title: "Authenticity",
  //       description: "NA",
  //       icon: <svg>...</svg>,
  //     },
  //     {
  //       title: "Cost and time savings",
  //       description: "NA",
  //       icon: <svg>...</svg>,
  //     },
  //     {
  //       title: "Document authenticity is improved",
  //       description: "NA",
  //       icon: <svg>...</svg>,
  //     },
  //   ],
  // };

  const RegistrationGuideData = {
    title: "",
    heading: "Step by Step Process for Limited Liability Registration",
    description: "Your Seamless LLP Incorporation Journey with Ensurekar",
    image: StepByStep,
    guideList: [
      {
        heading: "Personalized Consultation",
        description:
          "Our expert consultants will discuss your business goals and tailor an LLP structure that perfectly suits your needs.",
      },
      {
        heading: "Name Reservation and RUN-LLP Filing",
        description:
          "We'll conduct a thorough name search and file the RUN-LLP form to reserve a unique name for your LLP.",
      },
      {
        heading: "Comprehensive Document Preparation",
        description:
          "Our team will draft a comprehensive LLP agreement outlining partner roles, profit-sharing, and operational procedures.",
      },
      {
        heading: "Digital Signature Certificate Assistance",
        description:
          "We'll guide you through the process of obtaining Digital Signature Certificates (DSC) for all partners.",
      },
      {
        heading: "Efficient ROC Filing",
        description:
          "We'll prepare and file Form 2 (LLP Incorporation Application) and other necessary documents with the Registrar of Companies (ROC).",
      },
      {
        heading: "Rigorous Verification and Compliance",
        description:
          "Our experts will liaise with the ROC to ensure your application complies with all regulatory requirements.",
      },
      {
        heading: "Certificate of Incorporation",
        description:
          "Once approved, we'll obtain your Certificate of Incorporation, marking the official birth of your LLP.",
      },
      {
        heading: "Post-Incorporation Support",
        description:
          "We'll assist you with obtaining PAN, TAN, registering the LLP agreement, and ongoing compliance filings.",
      },
      {
        heading: "Comprehensive Business Support",
        description:
          "Ensurekar offers a range of additional services, including annual compliance, trademark registration, professional tax, and structural changes, to help your business thrive.",
      },
    ],
  };

  const RegisterStepsData = {
    title: "",
    heading: "Steps to Register your",
    meta: "Limited Liability Partnership Registration",
    description: "",
    steps: [
      { title: "Create you're account and submit details", description: "" },
      { title: "consult with our experts", description: "" },
      { title: "Get Your Certificate", description: "" },
    ],
    aboutSteps: [],
    footerMessage: "Simple, quick, and hassle-free!",
  };

  const AllInOneData = {
    title: "",
    heading: "Why Limited Liability Partnership Registration is Required",
    image: Company_People_Group,
    description: [
      "LLP firm is one of the most important form of a business organization. It is a popular form of business structure in India. A minimum of two persons are required to establish a LLP firm",
      "A LLP is where two or more persons come together to establish a business and divide its profits amongst themselves in the agreed ratio. The LLP business includes any kind of trade, occupation and profession.",
      "A LLP Has its Own Existence, allowing it to enter into Contract, acquire assets, on its own name, Separate from its Partner and it is best Business Form for the Startups.",
    ],
  };
  const OverviewData = {
    heading: "Limited Liability Partnership Registration ",
    meta: "Overview",
    introduction: {
      heading:
        "Fastest Limited Liability Partnership Registration In India | Same Day Process",
      description: [
        "A Limited Liability Partnership (LLP) is a registered business structure offering limited liability, tax benefits, and a separate legal identity. Ideal for startups, it combines partnership flexibility with corporate protection, ensuring cost-effective and scalable operations.",
      ],
    },
    advantagesInfo: {
      heading: "Advantages of  ",
      meta: "Limited Liability Partnership ",
      description: "",
      advantages: [
        {
          imageUrl: CorporateBody.src,
          heading: "Corporate Body",
          details:
            "An LLP is a separate legal entity, registered under the LLP Act 2008, giving it a distinct identity apart from its partners.",
        },
        {
          imageUrl: PerpetualSuccession.src,
          heading: "Perpetual Succession",
          details:
            "Unlike traditional partnerships, an LLP enjoys perpetual succession, meaning it continues to exist despite changes in partners due to retirement, death, or insolvency.",
        },
        {
          imageUrl: SeparateLegalEntity.src,
          heading: "Separate Legal Entity",
          details:
            "An LLP is treated as an independent legal entity. Its assets and liabilities are separate from those of its partners, protecting personal assets from business debts. Many established organizations prefer to work only with limited companies or contractors rather than sole traders.",
        },
        {
          imageUrl: CustomisedLLPAgreement.src,
          heading: "Customised LLP Agreement",
          details:
            "Partners can draft an LLP Agreement tailored to their needs, outlining rights and duties. If not, the LLP Act governs their relationship.",
        },
        {
          imageUrl: ArtificialLegalPerson.src,
          heading: "Artificial Legal Person",
          details:
            "An LLP is recognized as a legal person, capable of entering contracts, owning property, and conducting business in its own name.",
        },
        {
          imageUrl: LimitedLiability.src,
          heading: "Limited Liability",
          details:
            "Partners' liabilities are limited to their contributions, shielding personal assets from business risks. Each partner is only responsible for their own actions.",
        },
        {
          imageUrl: FlexiblePartnerStructure.src,
          heading: "Flexible Partner Structure",
          details:
            "LLPs require a minimum of two partners, with no upper limit. At least two designated partners must be individuals, one of whom must be an Indian resident.",
        },
        {
          imageUrl: BusinessControl.src,
          heading: "Business Control",
          details:
            "Partners manage day-to-day operations, but only designated partners are responsible for legal compliance, ensuring efficient governance.",
        },
        {
          imageUrl: ProfitOriented.src,
          heading: "Profit-Oriented",
          details:
            "LLPs are established solely for profit-making businesses and cannot operate as non-profits or charitable entities.",
        },
        {
          imageUrl: MutualAgencyProtection.src,
          heading: "Mutual Agency Protection",
          details:
            "In an LLP, one partner's actions do not bind others unless authorised. Each partner is liable for their own acts, not for those of other partners.",
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
          blueText: "Eligibility Criteria",
          end: "for  Limited Liability Partnership Registration  ",
        },
        subHeading: "",
        startingDescription:
          "Any individual or entity with the legal capacity to enter into a contract can form a partnership. The key eligibility criteria are as follows:",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              {
                heading: "",
                description: "Minimum 2 Partners ",
              },
              {
                heading: "",
                description: "Minimum 2 Designated Partners ",
              },
              {
                heading: "",
                description: "One Resident Indian Designated Partner ",
              },
              {
                heading: "",
                description: "Valid & Unique Name ",
              },
              {
                heading: "",
                description: "Registered Office Address",
              },
              {
                heading: "",
                description: "Adequate Capital ",
              },
              {
                heading: "",
                description: "Business Objective ",
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
          blueText: "Document",
          end: "for Limited Liability Partnership Registration",
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
                heading: "",
                description: "KYC Documents of Partners",
              },
              {
                heading: "",
                description:
                  "Latest Utility Bills as Proof of Registered Office Address",
              },
              {
                heading: "",
                description: "NOC from the Property Owner ",
              },
              {
                heading: "",
                description: "Digital Signature of Authorised Signatory",
              },
              {
                heading: "",
                description: "Designated Partner Identification Number",
              },
              {
                heading: "",
                description: "LLP Agreement ",
              },
              {
                heading: "",
                description:
                  "Scanned copy of the latest bank statement/telephone or mobile bill/electricity or gas bill",
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
          start: " ",
          blueText: "Key Features",
          end: "  of a Limited Liability Partnership (LLP)",
        },
        subHeading: "",
        startingDescription: "",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              { heading: "", description: "Legal Status of LLPs" },
              {
                heading: "",
                description: "Flexibility in Management",
              },
              {
                heading: "",
                description: "Liability Protection",
              },
              {
                heading: "",
                description: "Minimal Compliance Requirements",
              },
              {
                heading: "",
                description: "Taxation Benefits",
              },
              {
                heading: "",
                description: "Perpetual Succession",
              },
              {
                heading: "",
                description: "Ease of Transferability",
              },
            ],
          },
        ],
      },
    ],
  };
  const FAQsData = {
    title: "FAQs",
    heading: "",
    description: "",
    // FAQs: [
    //   {
    //     question: "What is an LLP Agreement?",
    //     answer: "NA",
    //   },
    //   {
    //     question: "What is the applicable income tax rate for an LLP?",
    //     answer: "NA",
    //   },
    //   {
    //     question:
    //       "What are the LLP compliance requirements under the Companies Act 2013?",
    //     answer: "NA",
    //   },
    //   {
    //     question: "How can a partner be removed from an LLP?",
    //     answer: "NA",
    //   },
    //   {
    //     question: "What are the fees for LLP registration?",
    //     answer: "NA",
    //   },
    //   {
    //     question: "What is the process for registering an LLP?",
    //     answer: "NA",
    //   },
    //   {
    //     question: "How is the taxability of an LLP determined?",
    //     answer: "NA",
    //   },
    //   {
    //     question: "How does LLP Differ from Private Limited?",
    //     answer: "NA",
    //   },
    //   {
    //     question: "Who can form an LLP?",
    //     answer: "NA",
    //   },
    // ],
    imageUrl: "",
  };
  const WhyEnsurekar = {
    heading:
      "Why to choose Ensurekar for Limited Liability Partnership Registration",
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
    heading: "Ensurekar Customer stories",
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
  const planData = {
    heading: {
      startText: "Pick the  ",
      blueText: "Business Plan",
      endText: "for Your Goals",
    },
    description: "Our Incorporation Expert's Know What is your Need",
    plansData: [
      {
        id: 1,
        state: "MP",
        description: "",
        plans: [
          {
            planName: "Normal",
            description: "Perfect fo Initiating LLP Registration",
            isActive: true,
            suggestionText: "",
            happyText: "",
            plan: {
              id: "1",
              price: "",
              discount: "",
              afterDiscount: "₹4,999/-",
              laterPaid: {
                amount: "",
                text: "Govt. fees as applicable.",
                iconInfo: {
                  text: "",
                  link: "",
                },
              },

              offers: [
                {
                  imageUrl: "",
                  isActive: false,
                  heading: "offer",
                  subHeading: "Unlock partner benefits Post",
                  description: "Post company incorporation worth Rs 4 lakhs",
                  knowMore: {
                    text: "visit here to grab the offer",
                    link: "",
                  },
                },
              ],
              splitPayment: {
                enabled: false,
                instalments: 2,
                instalmentAmount: "₹499.50",
                text: "Split payment by 2 month with Zolvit Flex",
                knowMore: {
                  text: "",
                  link: "",
                },
              },
            },
            features: {
              heading: ["What you'll get"],
              feature: [
                "Professional Guidance",
                "Your LLP name is reserved in just 2 - 4 days",
                "DSC in 4 - 7 days",
                "LLP Incorporation form filing done in 21 days*",
                "LLP Incorporation Certificate",
                "LLP Agreement form filed within 14 days (post-incorporation)",
                "Company PAN + TAN",
                "DIN for directors",
              ],
            },
            recommendation: {
              recommended: true,
              text: "",
            },
          },
          {
            planName: "Fastrack",
            isActive: true,
            description: "Quick LLP Registration",
            suggestionText: "",
            happyText: "",
            plan: {
              id: "2",
              price: "",
              discount: "",
              afterDiscount: "₹7,499/-",
              laterPaid: {
                amount: "",
                text: "+ Govt. fees as applicable. ",
                iconInfo: {
                  text: "",
                  link: "",
                },
              },
              offers: [
                {
                  imageUrl: "",
                  heading: "",
                  isActive: false,
                  subHeading: "Unlock partner benefits Post",
                  description: "Post company incorporation worth Rs 4 lakhs",
                  knowMore: {
                    text: "",
                    link: "",
                  },
                },
              ],
              splitPayment: {
                enabled: false,
                instalments: 2,
                instalmentAmount: "749.50",
                text: "Split payment by 2 month with Zolvit Flex",
                knowMore: {
                  text: "",
                  link: "",
                },
              },
            },
            features: {
              heading: ["What you'll get"],
              feature: [
                "Professional Guidance",
                "Your LLP name is reserved in just 24 hours*",
                "DSC in just 24 hours*",
                "LLP Incorporation form filing done in 14 days*",
                "LLP Incorporation Certificate",
                "LLP agreement form filing done in 7 days(Post Incorporation)",
                "Company PAN + TAN",
                "DIN for directors",
              ],
            },
            recommendation: {
              recommended: true,
              text: "",
            },
          },
          {
            planName: "Complete Suit",
            isActive: true,
            description:
              "Top priority service + annual compliance to keep your business on track",
            suggestionText: "",
            happyText: "",
            plan: {
              id: "3",
              price: "",
              discount: "",
              afterDiscount: "₹11,999/-",
              laterPaid: {
                amount: "",
                text: "+ Govt. fees as applicable. ",
                iconInfo: {
                  text: "",
                  link: "",
                },
              },
              offers: [
                {
                  imageUrl: "",
                  heading: "",
                  isActive: false,
                  subHeading: "Unlock partner benefits Post",
                  description: "Post company incorporation worth Rs 4 lakhs",
                  knowMore: {
                    text: "",
                    link: "",
                  },
                },
              ],
              splitPayment: {
                enabled: false,
                instalments: 3,
                instalmentAmount: "749.50",
                text: "Split payment by 3 with Zolvit Flex",
                knowMore: {
                  text: "",
                  link: "",
                },
              },
            },
            features: {
              heading: ["What you'll get"],
              feature: [
                "Professional Guidance",
                "Your company name is reserved in just 24 hours*",
                "DSC in just 24 hours*",
                "LLP Incorporation form filing done in 14 days*",
                "LLP Incorporation Certificate",
                "LLP agreement form filing done in 14 days(Post Incorporation)",
                "Company PAN+TAN",
                "DIN for directors",
                "Sessions with a senior CA/CS for your business planning",
                "Form 8 & 11 filing(One year)",
                "DIR 3 KYC (For 2 directors)",
                "1st Year Income Tax filing(Upto turnover of 20 lakhs)",
                "1st Year Accounting & Bookkeeping (Upto 100 transactions)",
                "Balance Sheet and Profit & Loss Statements Preparations",
                "Your company name is reserved in just 24 hours*",
              ],
            },
            recommendation: {
              recommended: true,
              text: "",
            },
          },
        ],
      },
      {
        id: 2,
        state: "DL",
        description: "",
        plans: [
          {
            planName: "Normal",
            description: "Perfect fo Initiating LLP Registration",
            isActive: true,
            suggestionText: "",
            happyText: "",
            plan: {
              id: "1",
              price: "",
              discount: "",
              afterDiscount: "₹4,999/-",
              laterPaid: {
                amount: "",
                text: "Govt. fees as applicable.",
                iconInfo: {
                  text: "",
                  link: "",
                },
              },

              offers: [
                {
                  imageUrl: "",
                  isActive: false,
                  heading: "offer",
                  subHeading: "Unlock partner benefits Post",
                  description: "Post company incorporation worth Rs 4 lakhs",
                  knowMore: {
                    text: "visit here to grab the offer",
                    link: "",
                  },
                },
              ],
              splitPayment: {
                enabled: false,
                instalments: 2,
                instalmentAmount: "₹499.50",
                text: "Split payment by 2 month with Zolvit Flex",
                knowMore: {
                  text: "",
                  link: "",
                },
              },
            },
            features: {
              heading: ["What you'll get"],
              feature: [
                "Professional Guidance",
                "Your LLP name is reserved in just 2 - 4 days",
                "DSC in 4 - 7 days",
                "LLP Incorporation form filing done in 21 days*",
                "LLP Incorporation Certificate",
                "LLP Agreement form filed within 14 days (post-incorporation)",
                "Company PAN + TAN",
                "DIN for directors",
              ],
            },
            recommendation: {
              recommended: true,
              text: "",
            },
          },
          {
            planName: "Fastrack",
            isActive: true,
            description: "Quick LLP Registration",
            suggestionText: "",
            happyText: "",
            plan: {
              id: "2",
              price: "",
              discount: "",
              afterDiscount: "₹7,499/-",
              laterPaid: {
                amount: "",
                text: "+ Govt. fees as applicable. ",
                iconInfo: {
                  text: "",
                  link: "",
                },
              },
              offers: [
                {
                  imageUrl: "",
                  heading: "",
                  isActive: false,
                  subHeading: "Unlock partner benefits Post",
                  description: "Post company incorporation worth Rs 4 lakhs",
                  knowMore: {
                    text: "",
                    link: "",
                  },
                },
              ],
              splitPayment: {
                enabled: false,
                instalments: 2,
                instalmentAmount: "749.50",
                text: "Split payment by 2 month with Zolvit Flex",
                knowMore: {
                  text: "",
                  link: "",
                },
              },
            },
            features: {
              heading: ["What you'll get"],
              feature: [
                "Professional Guidance",
                "Your LLP name is reserved in just 24 hours*",
                "DSC in just 24 hours*",
                "LLP Incorporation form filing done in 14 days*",
                "LLP Incorporation Certificate",
                "LLP agreement form filing done in 7 days(Post Incorporation)",
                "Company PAN + TAN",
                "DIN for directors",
              ],
            },
            recommendation: {
              recommended: true,
              text: "",
            },
          },
          {
            planName: "Complete Suit",
            isActive: true,
            description:
              "Top priority service + annual compliance to keep your business on track",
            suggestionText: "",
            happyText: "",
            plan: {
              id: "3",
              price: "",
              discount: "",
              afterDiscount: "₹11,999/-",
              laterPaid: {
                amount: "",
                text: "+ Govt. fees as applicable. ",
                iconInfo: {
                  text: "",
                  link: "",
                },
              },
              offers: [
                {
                  imageUrl: "",
                  heading: "",
                  isActive: false,
                  subHeading: "Unlock partner benefits Post",
                  description: "Post company incorporation worth Rs 4 lakhs",
                  knowMore: {
                    text: "",
                    link: "",
                  },
                },
              ],
              splitPayment: {
                enabled: false,
                instalments: 3,
                instalmentAmount: "749.50",
                text: "Split payment by 3 with Zolvit Flex",
                knowMore: {
                  text: "",
                  link: "",
                },
              },
            },
            features: {
              heading: ["What you'll get"],
              feature: [
                "Professional Guidance",
                "Your company name is reserved in just 24 hours*",
                "DSC in just 24 hours*",
                "LLP Incorporation form filing done in 14 days*",
                "LLP Incorporation Certificate",
                "LLP agreement form filing done in 14 days(Post Incorporation)",
                "Company PAN+TAN",
                "DIN for directors",
                "Sessions with a senior CA/CS for your business planning",
                "Form 8 & 11 filing(One year)",
                "DIR 3 KYC (For 2 directors)",
                "1st Year Income Tax filing(Upto turnover of 20 lakhs)",
                "1st Year Accounting & Bookkeeping (Upto 100 transactions)",
                "Balance Sheet and Profit & Loss Statements Preparations",
                "Your company name is reserved in just 24 hours*",
              ],
            },
            recommendation: {
              recommended: true,
              text: "",
            },
          },
        ],
      },
    ],
    defaultState: "MP",
    defaultPlan: "Standard",
    statesOptions: [
      { value: "AP", label: "Andhra Pradesh" },
      { value: "AR", label: "Arunachal Pradesh" },
      { value: "AS", label: "Assam" },
      { value: "BR", label: "Bihar" },
      { value: "CG", label: "Chhattisgarh" },
      { value: "GA", label: "Goa" },
      { value: "GJ", label: "Gujarat" },
      { value: "HR", label: "Haryana" },
      { value: "HP", label: "Himachal Pradesh" },
      { value: "JK", label: "Jammu and Kashmir" },
      { value: "JH", label: "Jharkhand" },
      { value: "KA", label: "Karnataka" },
      { value: "KL", label: "Kerala" },
      { value: "MP", label: "Madhya Pradesh" },
      { value: "MH", label: "Maharashtra" },
      { value: "MN", label: "Manipur" },
      { value: "ML", label: "Meghalaya" },
      { value: "MZ", label: "Mizoram" },
      { value: "NL", label: "Nagaland" },
      { value: "OD", label: "Odisha" },
      { value: "PB", label: "Punjab" },
      { value: "RJ", label: "Rajasthan" },
      { value: "SK", label: "Sikkim" },
      { value: "TN", label: "T amil Nadu" },
      { value: "TG", label: "Telangana" },
      { value: "TR", label: "Tripura" },
      { value: "UP", label: "Uttar Pradesh" },
      { value: "UT", label: "Uttarakhand" },
      { value: "WB", label: "West Bengal" },
      { value: "AN", label: "Andaman and Nicobar Islands" },
      { value: "CH", label: "Chandigarh" },
      { value: "DN", label: "Dadra and Nagar Haveli" },
      { value: "DD", label: "Daman and Diu" },
      { value: "DL", label: "Delhi" },
      { value: "LD", label: "Lakshadweep" },
      { value: "PY", label: "Puducherry" },
    ],
  };
  const AnnualFillingData = {
    heading: "Annual Filings for ",
    meta: "Limited Liability Partnership",
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
          imageUrl: Rocket_With_Men,
          imageDirection: "right",
        },
        heading: {
          start: "",
          blueText: "",
          end: "Financial Statements",
        },
        subHeading: "",
        startingDescription:
          "LLPs are required to prepare and file financial statements annually. The financial statements include:",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              {
                heading: "Statement of Accounts",
                description:
                  "Includes Balance Sheet, Profit and Loss Account, and Cash Flow Statement.",
              },
              {
                heading: "Statement of Solvency",
                description:
                  "Filed by LLPs with a turnover exceeding Rs. 40 lakhs or capital contribution exceeding Rs. 25 lakhs.",
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
          blueText: "",
          end: "Annual Returns",
        },
        subHeading: "",
        startingDescription:
          "LLPs must file annual returns with the Registrar of Companies (ROC). The annual return includes details such as:",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              {
                heading: "Statement of Account",
                description:
                  "Filed with the ROC within 30 days from the end of six months of the financial year.",
              },
              {
                heading: "Annual Return Form",
                description:
                  "Filed within 60 days from the closure of the financial year.",
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
          start: " ",
          blueText: "",
          end: "Audit Requirements (if applicable)",
        },
        subHeading: "",
        startingDescription:
          "Audit requirements for LLPs depend on their turnover and capital contribution:",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              {
                heading: "Audit Requirement",
                description:
                  "LLPs with a turnover exceeding Rs. 40 lakhs or capital contribution exceeding Rs. 25 lakhs are required to get their accounts audited by a qualified Chartered Accountant.",
              },
              {
                heading: "Exemption",
                description:
                  " Small LLPs (where turnover does not exceed Rs. 40 lakhs and capital contribution does not exceed Rs. 25 lakhs) are exempt from audit requirements.",
              },
            ],
          },
        ],
      },
    ],
  };

  const plansRef = useRef<HTMLDivElement | null>(null);
  const scrollToPlans = () => {
    if (plansRef.current) {
      plansRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <div>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} scrollToPlans={scrollToPlans} />

      <div ref={plansRef} id="plans" className="plans-section">
        <Text planData={planData} page={"limited-liability-partnership-registration"} serviceName="Limited Liability Partnership (LLP)" />
        {/* <PlansSection planData={planData} /> */}
      </div>
      <All_In_One_ServiceSection AllInOneData={AllInOneData} />
      <ServiceOverview OverviewData={OverviewData} />
      <RegistrationGuide RegistrationGuideData={RegistrationGuideData} />
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <ServiceOverview OverviewData={AnnualFillingData} />

      <FAQsServicesSection
        FAQsData={FAQsData}
        routeName="/limited-liability-partnership-registration"
      />
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
      <TestimonialSectionAllServices TestimonialData={TestimonialData} />
    </div>
  );
};

export default LimitedLiabilityPartnershipRegistration;
