"use client";

import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import ServiceAdvantages from "@/app/components/Section/Advantages-All-Services";
import Rocket_With_Men from "../../../../images/SGV-Types/Rocket-With-Men.svg";
import React from "react";
import WhoShouldBuy from "@/app/components/Section/Service/Who-Should-Buy";
import All_In_One_ServiceSection from "@/app/components/Section/All-in-One-All-Services";
import Company_People_Group from "../../../../images/SGV-Types/Company-People-Group.svg";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import whyAccoupayCard_1 from "../../../../images/whyAccoupayCard_1.png";
import whyAccoupayCard_2 from "../../../../images/whyAccoupayCard_2.png";
import whyAccoupayCard_3 from "../../../../images/whyAccoupayCard_3.png";
import whyAccoupayCard_4 from "../../../../images/whyAccoupayCard_4.png";
import whyAccoupayCard_5 from "../../../../images/whyAccoupayCard_5.png";
import whyAccoupayCard_6 from "../../../../images/whyAccoupayCard_6.png";
import productImage from "../../../../images/recent_post_img1.png";

import we_help from "../../../../images/we_help.png";

import StepByStep from "../../../../images/SGV-Types/Step-By-Step.svg";

import EnsurekarFeature from "@/app/components/Section/features";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import FAQ from "../../../../images/FAQ.png";
import { link } from "fs";
import PlansSection from "@/app/components/Section/Plans-Section";
import { desc } from "framer-motion/client";
import RegistrationGuide from "@/app/components/Section/Registration-Guide";
import HelpSection from "@/app/components/Section/help-section";
import ServiceCovered from "@/app/components/Section/Service/Service-Covered";
import { Calculator } from "phosphor-react";


import TalkExpert from "./../../../../images/SGV-Types/Talk-To-Our-Expert.svg";//"./../../../../images/SGV-Types/Talk-To-Our-Expert.svg";
import EnhancedBusinessCredibility from "../../../../images/SGV-Types/Enhanced-Business-Credibility.svg";
import HandUserMoney from "../../../../images/SGV-Types/Hand-User-Money.svg";
import Brand_Name from "@/app/images/pages icons/Trade Mark/14-removebg-preview.png";
import Logo from "@/app/images/pages icons/Trade Mark/15-removebg-preview.png";
import Tagline from "@/app/images/pages icons/Trade Mark/17-removebg-preview.png";
import Sound from "@/app/images/pages icons/Trade Mark/18-removebg-preview.png";
const TrademarkRegistration = () => {
  const BreadcrumbData = {
    title: "Trademark Registration",
    heading: "Trademark Registration",
    subHeading:
      "Trademark Registration in India - Secure Your Brand Identity with Ease",
    description: "",
    image: "",
    bottomHeading: "Start Protecting Your Brand Today!",
    cartDetails: {
      id: 31,
      name: "Trademark Registrations",
      price: 2000,
      quantity: 1,
      subtotal: 2000,
      image: productImage,
    },
  };
  const WhoShouldBuyData = {
    title: "",
    heading: "Types of trade mark",
    subHeading: "",

    rolesData: {
      heading: "",
      description: "",
      roles: [
        {
          icon: Brand_Name.src,
          title: "Brand Name",
          description: "",
          link: "#",
        },
        {
          icon: Logo.src,
          title: "Logo",
          description: "",
          link: "#",
        },
        {
          icon: Tagline.src,
          title: "Tagline",
          description: "",
          link: "#",
        },
        {
          icon: Sound.src,
          title: "Sound",
          description: "",
          link: "#",
        },
      ],
    },
  };
  const planData = {
    heading: {
      startText: "Pick the",
      blueText: " Business Plan ",
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
            description: "Perfect for initiating company registration",
            isActive: true,
            suggestionText: "",
            happyText: "",
            plan: {
              id: "1",
              price: "",
              discount: "",
              afterDiscount: "₹999",
              laterPaid: {
                amount: "",
                text: "Govt. fees will be as per this website and will change according to states - PVT LTD Company Registration Online - Fast & Legal in India",
                iconInfo: {
                  text: "",
                  link: "",
                },
              },

              offers: [
                {
                  imageUrl: "",
                  isActive: true,
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
              heading: ["What you will get"],
              feature: [
                "Expert assisted process",
                "Your company name is reserved in just 2 - 4 days",
                "Digital Signature Certificate (DSC) in 4-7 Days",
                "SPICe+ form filing in 14 days*",
                "Incorporation Certificate in 14 - 21 days",
                "Company PAN and TAN",
                "DIN for directors",
                "MOA and AOA Certificate",
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
            description: "Quick company registration in 7 to 14 days",
            suggestionText: "",
            happyText: "",
            plan: {
              id: "2",
              price: "",
              discount: "",
              afterDiscount: "₹1,999",
              laterPaid: {
                amount: "",
                text: "Govt. fees will be as per this website and will change according to states PVT LTD Company Registration Online Fast & Legal in India",
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
                "Expert assisted process",
                "Your company name is reserved in just 2 - 4 days",
                "Digital Signature Certificate (DSC) in 4-7 Days",
                "SPICe+ form filing in 14 days*",
                "Incorporation Certificate in 14 - 21 days",
                "Company PAN+TAN",
                "DIN for directors",
                "MOA and AOA Certificate",
                "Appointment of Auditor",
                "Issuance of share certificate",
                "INC 20 A form filing",
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
              afterDiscount: "₹19,999",
              laterPaid: {
                amount: "",
                text: "Govt. fees will be as per this website and will change according to states PVT LTD Company Registration Online Fast & Legal in India",
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
                "Expert assisted process",
                "Your company name is reserved in just 2 - 4 days*",
                "Digital Signature Certificate (DSC) in 3-4 Days",
                "SPICe+ Form Filing in 5-7 Days*",
                "Incorporation Certificate Issued in 7-14 Days",
                "Company PAN and TAN",
                "Director Identification Number (DIN)",
                "Appointment of Auditor",
                "Issuance of Share Certificates",
                "INC 20A Form Filing",
                "DIR 3 KYC for 2 Directors",
                "Accounting & Bookkeeping (Up to 100 Transactions)",
                "Financial Statement Preparation",
                "1-Year License for Accounting Software",
                "Filing of AOC 4, MGT 7 & ADT 1",
                "Annual Filing (For Turnover Up to 20 Lakhs)",
                "Facilitation of Annual General Meeting",
                "Compliance with PF and ESI Statutory Regulations",
                "One-Year Income Tax Filing (For Turnover Up to 20 Lakhs)",
                "30-Minute Consultation Call with a Senior CA/CS for Business Planning",
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
            description: "Perfect for initiating company registration",
            isActive: true,
            suggestionText: "",
            happyText: "",
            plan: {
              id: "1",
              price: "",
              discount: "",
              afterDiscount: "₹999",
              laterPaid: {
                amount: "",
                text: "Govt. fees will be as per this website and will change according to states - PVT LTD Company Registration Online - Fast & Legal in India",
                iconInfo: {
                  text: "",
                  link: "",
                },
              },

              offers: [
                {
                  imageUrl: "",
                  isActive: true,
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
              heading: ["What you will get"],
              feature: [
                "Expert assisted process",
                "Your company name is reserved in just 2 - 4 days",
                "Digital Signature Certificate (DSC) in 4-7 Days",
                "SPICe+ form filing in 14 days*",
                "Incorporation Certificate in 14 - 21 days",
                "Company PAN and TAN",
                "DIN for directors",
                "MOA and AOA Certificate",
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
            description: "Quick company registration in 7 to 14 days",
            suggestionText: "",
            happyText: "",
            plan: {
              id: "2",
              price: "",
              discount: "",
              afterDiscount: "₹1,999",
              laterPaid: {
                amount: "",
                text: "Govt. fees will be as per this website and will change according to states PVT LTD Company Registration Online Fast & Legal in India",
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
                "Expert assisted process",
                "Your company name is reserved in just 2 - 4 days",
                "Digital Signature Certificate (DSC) in 4-7 Days",
                "SPICe+ form filing in 14 days*",
                "Incorporation Certificate in 14 - 21 days",
                "Company PAN+TAN",
                "DIN for directors",
                "MOA and AOA Certificate",
                "Appointment of Auditor",
                "Issuance of share certificate",
                "INC 20 A form filing",
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
              afterDiscount: "₹19,999",
              laterPaid: {
                amount: "",
                text: "Govt. fees will be as per this website and will change according to states PVT LTD Company Registration Online Fast & Legal in India",
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
                "Expert assisted process",
                "Your company name is reserved in just 2 - 4 days*",
                "Digital Signature Certificate (DSC) in 3-4 Days",
                "SPICe+ Form Filing in 5-7 Days*",
                "Incorporation Certificate Issued in 7-14 Days",
                "Company PAN and TAN",
                "Director Identification Number (DIN)",
                "Appointment of Auditor",
                "Issuance of Share Certificates",
                "INC 20A Form Filing",
                "DIR 3 KYC for 2 Directors",
                "Accounting & Bookkeeping (Up to 100 Transactions)",
                "Financial Statement Preparation",
                "1-Year License for Accounting Software",
                "Filing of AOC 4, MGT 7 & ADT 1",
                "Annual Filing (For Turnover Up to 20 Lakhs)",
                "Facilitation of Annual General Meeting",
                "Compliance with PF and ESI Statutory Regulations",
                "One-Year Income Tax Filing (For Turnover Up to 20 Lakhs)",
                "30-Minute Consultation Call with a Senior CA/CS for Business Planning",
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
  const AllInOneData = {
    title: "",
    heading: "What is a Trademark?",
    image: Company_People_Group,
    description: [
      " TA trademark is a unique symbol or word that identifies your brand and provides legal protection against misuse. Registered through IP India, it safeguards your brand for 10 years, with renewal options. Trademarks build recognition and protect your business identity.",
    ],
  };
  const TradeMarkClass = {
    title: "",
    heading: "Trade mark class ",
    image: Company_People_Group,
    description: [
      "Exclusive Rights: ",
      "Full control over your trademark, ensuring it’s used only by you.",
      "Customer Trust and Loyalty: ",
      "A trusted brand known for quality builds stronger customer connections.",
      "Symbol of Quality:",
      "Represents high standards, boosting the reputation of your products or services.",
      "Valuable Asset:",
      "A trademark becomes an important and appreciating business asset.",
      "Legal Use of ® Symbol: ",
      "Legally use the ® symbol to signify a registered trademark.",
      "Protection Against Infringement: ",
      "Safeguards your brand by allowing legal action against unauthorized use.",
      "Affordable and Long-Term: ",
      "Cost-effective protection that lasts for years with renewals.",
      "Global Reach: ",
      "Trademark registration in India can aid in securing international rights.",
      "Talent Magnet: ",
      "A strong brand reputation attracts skilled employees.",
      "Brand Safeguard: ",
      "Prevents unauthorized use of your brand name or logo.",
      "Legal Authority: ",
      "Provides legal backing to enforce your brand’s rights.",
      "Unique Business Identity: ",
      "Ensures your brand stands out and remains distinct.",
    ],
  };
  const RegisterStepsData = {
    title: "Simple Steps",
    heading: "How to register",
    meta: "trademark",
    description: "",
    steps: [
      {
        title:
          "Our Trademark lawyer will conduct an extensive trademark search",
        description: "",
      },
      {
        title: "Class section and trademark application filing",
        description: "",
      },
      {
        title: "Trademark publication in journals and registration",
        description: "",
      },
    ],
    aboutSteps: [],
  };
  const FeatureData = {
    title: "",
    heading: "Types of Trademarks in India",
    subHeading:
      "Achieve operational excellence with our expert guidance in legal, financial, and tax matters. Build the ideal workplace while ensuring compliance and efficiency.",
    description: "",
    image: "",
    bottomHeading: "",
    elements: [
      {
        image: whyAccoupayCard_1,
        heading: "Product Mark",
        description:
          "Used for identifying and distinguishing physical goods or products from competitors.Example: The Nike swoosh for sports shoes.",
      },
      {
        image: whyAccoupayCard_2,
        heading: "Service Mark",
        description:
          "Protects trademarks associated with services rather than goods, like telecom, hospitality, or consulting.Example: Airtel for telecom services.",
      },
      {
        image: whyAccoupayCard_3,
        heading: "Certification Mark",
        description:
          "Certifies that products or services meet specific standards or quality benchmarks.Example: The ISI mark for certified products in India.",
      },
      {
        image: whyAccoupayCard_4,
        heading: "Collective Mark",
        description:
          "Used by associations or organizations to indicate membership and uphold standards.Example: The Chartered Accountants' professional mark.",
      },
      {
        image: whyAccoupayCard_5,
        heading: "Word Mark",
        description:
          "Covers the text, name, tagline, or any word associated with a brand.Example: Google.",
      },
      {
        image: whyAccoupayCard_6,
        heading: "Symbol Mark (Logo)",
        description:
          "Protects logos or symbols that visually represent a brand.Example: The Apple logo.",
      },
    ],
  };
  const RegistrationGuideData = {
    title: "",
    heading: "Why is Trademark Registration Important? ",
    description: "",
    image: StepByStep,
    guideList: [
      {
        heading: "Protect Your Brand",
        description:
          "Trademark registration provides legal protection, preventing others from copying or misusing your brand identity.",
      },
      {
        heading: "Ensure Originality",
        description:
          "A trademark search confirms your brand name or logo is unique and not already registered by someone else.",
      },
      {
        heading: "Build Trust and Value",
        description:
          "A registered trademark enhances brand recognition, fosters customer trust, and becomes a valuable business asset.",
      },
      {
        heading: "Enforce Legal Rights",
        description:
          "It allows you to take legal action against unauthorized use and ensures your brand’s long-term security through renewals.",
      },
      {
        heading: "Expand Globally",
        description:
          "Trademark registration extends your brand's protection in India and internationally, supporting global business growth.",
      },
    ],
  };
  const FAQsData = {
    title: "FAQs",
    heading: "What services does Ensurekar offer?",
    description: "",
    imageUrl: FAQ,
    FAQs: [
      { question: "What is the official website for trademark registration in India?", answer: "The official platform for trademark registration in India is the Intellectual Property India portal, managed by the Controller General of Patents, Designs, and Trademarks." },
      { question: "What is the process for trademark registration in India?", answer: "The process includes conducting a trademark search, filing an application, and awaiting approval after its publication in the Trademark Journal. The registration is valid for 10 years." },
      { question: "How can I conduct a trademark search?", answer: "You can perform a trademark search on the Intellectual Property India website using the public search tool to check if your desired trademark is already registered." },
      { question: "Is conducting a trademark search necessary before applying?", answer: "Yes, conducting a thorough trademark search is essential to confirm that your chosen brand name is not already in use or too similar to an existing one, reducing the risk of rejection." },
      { question: "How can I apply for trademark registration online?", answer: "You can apply online through the Trademark e-Filing Portal on the Intellectual Property India website by submitting the required documents and fees." },
      { question: "What is the online trademark registration process?", answer: "The process involves filing a trademark application via the official Trademarks Registry website. You must submit the application form along with necessary documents. A trademark attorney can assist in ensuring compliance." },
      { question: "When can I use the TM symbol?", answer: "You can use the TM symbol as soon as you file your trademark application to indicate that your trademark protection is pending." },
      { question: "What does the TM symbol signify?", answer: "The TM symbol shows that a trademark application has been filed but is not yet registered. After registration, the ® symbol is used to indicate legal protection." },
      { question: "Who processes trademark applications?", answer: "The Registrar of Trademarks oversees the application process. Trademark agents or attorneys can represent applicants before the Registrar to ensure proper filing." },
      { question: "How long does trademark registration take in India?", answer: "Trademark registration typically takes 6–12 months, depending on application complexity and any oppositions." },
      { question: "When can I file a trademark opposition?", answer: "An opposition can be filed within the prescribed time frame after the trademark is published in the Trade Marks Journal." },
      { question: "What happens if my trademark faces opposition?", answer: "In case of opposition, you must file a counterstatement to defend your application. A hearing will be scheduled to resolve the matter." },
      { question: "Why should I register my trademark in India?", answer: "Registration provides legal protection, exclusive rights, and the ability to take legal action against infringement." },
      { question: "What is the difference between a registered and unregistered trademark?", answer: "A registered trademark offers legal protection and exclusivity, while an unregistered trademark lacks formal protection and is harder to defend against infringement." },
      { question: "How does trademark protection benefit my business?", answer: "Trademark protection prevents unauthorized use, ensuring your brand’s uniqueness and market identity." },
      { question: "How can I protect my trademark from misuse?", answer: "Once registered, you can take legal action against unauthorized use, safeguarding your intellectual property rights and brand value." },
      { question: "What are the fees for trademark registration?", answer: "Fees vary based on applicant type (individual, MSME, or corporation). Fee details are available on the Trademark Registration Portal." },
      { question: "When does the 10-year validity start?", answer: "The 10-year validity period begins from the trademark application filing date." },
      { question: "How long is a registered trademark valid in India?", answer: "A registered trademark is valid for 10 years and can be renewed indefinitely." },
      { question: "When can a trademark be renewed?", answer: "A trademark can be renewed before the 10-year validity period ends." },
      { question: "What if I fail to renew my trademark?", answer: "Failure to renew within the given time may result in removal from the registry. However, you have a 6-month grace period to renew with a late fee." },
      { question: "Can a trademark be renewed indefinitely?", answer: "Yes, trademarks can be renewed every 10 years, provided renewal fees are paid on time and the trademark remains in use." },
      { question: "What is the trademark renewal process?", answer: "To renew, file a renewal application and pay the required fees online via the Trademark Registration Portal or through the Trademark Office." },
      { question: "What are absolute grounds for refusal of a trademark?", answer: "Registration may be refused for trademarks that lack distinctiveness, are deceptive, contain offensive material, or hurt religious sentiments under the Trade Marks Act, 1999." },
      { question: "How can I check the status of my trademark application?", answer: "You can check the status on the IP India website using the Trademark Status tool and your application number." },
      { question: "Who can apply for a trademark?", answer: "Individuals, businesses, non-profits, foreign nationals, and legal heirs can apply, provided they meet eligibility criteria." },
      { question: "Can MSMEs and sole proprietorships register trademarks?", answer: "Yes, MSMEs and sole proprietorships can register trademarks to enhance business credibility and protect their brand value." },
      { question: "Can a partnership firm register a trademark?", answer: "Yes, partnership firms can file for trademark registration as legal entities." },
      { question: "What is a trademark, and why is it important?", answer: "A trademark is a sign, symbol, or name that represents goods/services and distinguishes them from others. It protects intellectual property and establishes brand identity." },
      { question: "What is the role of a trademark attorney or agent?", answer: "Trademark attorneys or agents assist in filing applications, meeting legal requirements, and handling objections or oppositions during the registration process." },
    ],
  };

  const TrademarkSymbols = {
    heading: "Trademark Symbols",
    description: "",
    elements: [
      {
        heading: "TM Symbol (™)",
        description:
          "The TM symbol indicates that a brand is claimed by its owner, even if the trademark is not yet registered. It establishes ownership rights and offers basic protection in case of disputes or infringement.",
        imageUrl: TalkExpert,
      },
      {
        heading: "R Symbol (®)",
        description:
          "The ® symbol signifies that a trademark is officially registered with the appropriate authority. It grants full legal protection, ensuring exclusive rights to use the brand for specific goods or services.",
        imageUrl: EnhancedBusinessCredibility,
      },
      {
        heading: "SM Symbol (℠)",
        description:
          "The SM symbol is used for service marks associated with services, even without registration. Similar to the TM symbol, it helps assert ownership and provides basic protection for service-related brands.",
        imageUrl: HandUserMoney,
      },
    ],
  };
  const HelpSectionData = {
    heading: "Benefits of Trademark Registration",
    subHeading: "",
    description: "",
    image: StepByStep, //we_help,
    bottomHeading: "",
    bottomDescription: "",
    bottomList: [
      {
        heading: "Exclusive Rights : ",
        description:
          "Full control over your trademark, ensuring it’s used only by you.",
      },
      {
        heading: "Customer Trust and Loyalty: ",
        description:
          "A trusted brand known for quality builds stronger customer connections.",
      },
      {
        heading: "Symbol of Quality: ",
        description:
          "Represents high standards, boosting the reputation of your products or services.",
      },
      {
        heading: "Valuable Asset: ",
        description:
          "A trademark becomes an important and appreciating business asset.",
      },
      {
        heading: "Legal Use of ® Symbol: ",
        description:
          "Legally use the ® symbol to signify a registered trademark.",
      },
      {
        heading: "Protection Against Infringement: ",
        description:
          "Safeguards your brand by allowing legal action against unauthorized use.",
      },
      {
        heading: "Affordable and Long-Term: ",
        description:
          "Cost-effective protection that lasts for years with renewals.",
      },
      {
        heading: "Global Reach: ",
        description:
          "Trademark registration in India can aid in securing international rights.",
      },
      {
        heading: "Talent Magnet: ",
        description: "A strong brand reputation attracts skilled employees.",
      },
      {
        heading: "Brand Safeguard: ",
        description: "Prevents unauthorized use of your brand name or logo.",
      },
      {
        heading: "Legal Authority: ",
        description: "Provides legal backing to enforce your brand’s rights.",
      },
      {
        heading: "Unique Business Identity: ",
        description: "Ensures your brand stands out and remains distinct.",
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
        title: "Class 25: Clothing",
        description: "Covers clothing, footwear, and headgear. Industries: Fashion, Retail, Sportswear, Outdoor gear.",
        icon: <Calculator />,
      },
      {
        title: "Class 35: Advertising and Business",
        description: "Includes advertising, business management, administration, and office functions. Industries: Marketing, Business services, Consulting, Office management.",
        icon: <Calculator />,
      },
      {
        title: "Class 41: Education and Entertainment",
        description: "Encompasses education, training, entertainment, sports, and cultural activities. Industries: Education, Entertainment, Sports, Cultural services.",
        icon: <Calculator />,
      },
      {
        title: "Class 45: Legal and Security Services",
        description: "Covers legal services, security for property and individuals, and personal/social services. Industries: Legal, Security, Personal services, Social services.",
        icon: <Calculator />,
      },
    ],
  };
  const RegistrationProcessData = {
    title: "",
    heading: "Why is Trademark Registration Important? ",
    description: "",
    image: StepByStep,
    guideList: [
      {
        heading: "Trademark Search",
        description: "Ensure your trademark is unique by checking for similar ones using our Trademark Search Tool.",
      },
      {
        heading: "Filing the Application",
        description: "Submit your trademark details, documents (ID, address proof), and apply online for a faster process.",
      },
      {
        heading: "Examination",
        description: "The registrar reviews your application. Address any objections quickly to avoid delays.",
      },
      {
        heading: "Publication",
        description: "Your trademark is published for public review. If unopposed, it proceeds to registration.",
      },
      {
        heading: "Registration Certificate",
        description: "Receive your certificate confirming exclusive rights. Valid for 10 years, with renewable protection.",
      },
    ],
  };
  const WhyEnsurekar = {
    heading: "Why Choose EnsureKar for Trademark Registration?",
    description: "",
    elements: [
      {
        heading: " Expert Assistance",
        description: "EnsureKar provides professional guidance at every step of the trademark registration process, ensuring compliance with all legal requirements seamlessly.",
        imageUrl: TalkExpert,
      },
      {
        heading: " Hassle-Free & Efficient Service",
        description: "From conducting trademark searches to filing applications, we handle every aspect of the process, ensuring a smooth and swift experience for our clients.",
        imageUrl: EnhancedBusinessCredibility,
      },
      {
        heading: " Transparent & Affordable Pricing",
        description: "With clear, upfront pricing and no hidden fees, EnsureKar offers a cost-effective and stress-free trademark registration solution tailored to your needs.",
        imageUrl: HandUserMoney,
      },
    ],
  };
  return (
    <>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <WhoShouldBuy WhoShouldBuyData={WhoShouldBuyData} />
      <PlansSection planData={planData} />
      <All_In_One_ServiceSection AllInOneData={AllInOneData} />
      <WhyEnsurekarSection WhyEnsurekarData={TrademarkSymbols} />

      {/* <RegisterSteps RegisterSteps={RegisterStepsData} /> */}
      <EnsurekarFeature FeatureData={FeatureData} />
      <RegistrationGuide RegistrationGuideData={RegistrationGuideData} />

      {/* <All_In_One_ServiceSection AllInOneData={TradeMarkClass} /> */}

      <HelpSection HelpSectionData={HelpSectionData} />
      <ServiceCovered ServiceCoveredData={ServiceCoveredData} />
      <RegistrationGuide RegistrationGuideData={RegistrationProcessData} />

      <FAQsServicesSection FAQsData={FAQsData} />
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
    </>
  );
};

export default TrademarkRegistration;
