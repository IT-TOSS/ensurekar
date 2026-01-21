"use client";

import React from "react";
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
import productImage from "../../../images/recent_post_img1.png";


//--Krishna code
import TalkExpert from "../../../images/SGV-Types/Talk-To-Our-Expert.svg";
import EnhancedBusinessCredibility from "../../../images/SGV-Types/Enhanced-Business-Credibility.svg";
import HandUserMoney from "../../../images/SGV-Types/Hand-User-Money.svg";



const NidhiCompanyRegistration = () => {

  const BreadcrumbData = {
    title: "Nidhi Company Registration ",
    heading: "Nidhi Company Registration",
    subHeading: "Nidhi Company in just 7 days",
    description:
      "Get Your Nidhi Company Registration, India's Fastest: Ensurekar Makes It Easy 100% Online Process",
    image: "",
  };
  const AdvantagesData = {
    title: "Nidhi Company Registration",
    heading: "Fastest Nidhi Company Registration In India | Same Day Process",
    description:
      "Nidhi Company Registration allows the formation of a mutual benefit society focused on savings and lending within a community. Under the Nidhi Companies Rules, 2014, it offers limited liability, tax benefits, and simplifies compliance for providing loans and deposits",
    image: Rocket_With_Men,
    advantages: [
      {
        title: "Minimal RBI Compliance",
        description:
          "Nidhi Companies are public limited companies that don't require an RBI license to operate, simplifying the regulatory burden.",
        icon: <svg>...</svg>,
      },
      {
        title: "Reduced Risk",
        description:
          "Nidhi Companies only provide loans and accept deposits from their members, minimizing risk and maintaining a closed community for financial transactions.",
        icon: <svg>...</svg>,
      },
      {
        title: "Low Capital Requirement",
        description:
          "With a minimum capital requirement of just ₹10 lakhs, Nidhi Companies are easy to set up under Nidhi Rules, 2014.",
        icon: <svg>...</svg>,
      },
      {
        title: "Simple Setup Process",
        description:
          "Registration is straightforward, requiring only seven members and a few essential documents to incorporate with the MCA.",
        icon: <svg>...</svg>,
      },
    
    ],
  };
  const RegisterStepsData = {
    title: "",
    heading: "Steps to Register your",
    meta: "Nidhi Company Registration",
    description: "",
    steps: [
      {title: "Create your Account and Submit details",description:""},
      {title: "Consult with Our Experts     ",description:""},
      {title: "Get Your Certificate",description:""},
    ],
    aboutSteps:[],
    footerMessage:"Simple, quick, and hassle-free!"
  };
  const planData= {
    heading: {
      startText: "",
      blueText: "Right plan",
      endText: "for Your Business",
    },
    description:
      "Ensurekar incorporation experts register over 1500 companies every month.",
    plansData: [
      {
        id: 1,
        state: "MP",
        description: "",
        plans: [
          {
            planName: "Standard",
            description: "Perfect for initiating company registration",
            isActive: true,
            suggestionText: "",
            happyText: "",
            plan: {
              id: "1",
              price: "₹1499",
              discount: "₹500 off",
              afterDiscount: "₹999",
              laterPaid: {
                amount: "13,726",
                text: "+ Govt. Fee (to be paid later)",
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
              heading: ["What you'll get"],
              feature: [
                "Company Name Reserved in 2-4 Days",
                "Digital Signature Certificate (DSC) Issued in 4-7 Days",
                " SPICe+ Form Filing Completed in 14 Days",
                "Incorporation Certificate Issued in 14-21 Days",
                "Company PAN and TAN",
                "Director Identification Number (DIN) for Directors",
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
              price: "₹2999",
              discount: "50% off",
              afterDiscount: "₹1499",
              laterPaid: {
                amount: "13,726",
                text: "+ Govt. Fee (to be paid later)",
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
                enabled: true,
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
                "Expert-Guided Process",
                "Company Name Reservation in Just 1-2 Days*",
                "Digital Signature Certificate (DSC) Issued in 3-4 Days",
                "SPICe+ Form Filing Completed in 5-7 Days*",
                "Incorporation Certificate Delivered in 7-14 Days",
                "Company PAN and TAN",
                "Director Identification Number (DIN)",
                "Digital Welcome Kit with a Post-Incorporation Compliance Checklist",
              ],
            },
            recommendation: {
              recommended: true,
              text: "",
            },
          },
          {
            planName: "Premium",
            isActive: true,
            description:
              "Top priority service + annual compliance to keep your business on track",
            suggestionText: "",
            happyText: "",
            plan: {
              id: "3",
              price: "₹29,999",
              discount: "17% off",
              afterDiscount: "₹24,999",
              laterPaid: {
                amount: "13,726",
                text: "+ Govt. Fee (to be paid later)",
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
                enabled: true,
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
                "Your company name is reserved in just 1 - 2 days*",
                "DSC in just 3 - 4 days",
                "SPICe+ form filing in 5 - 7 days*",
                "Incorporation Certificate in 7 - 14 days",
                "Company PAN+TAN",
                "DIN for directors",
                "Digital welcome kit that includes a checklist of all post-incorporation compliances",
                "Appointment of Auditor - ADT 01",
                "Issuance of share certificate",
                "INC 20 A form filing",
                "DIR 3 KYC (For 2 directors)",
                "Accounting & Bookkeeping (Up to 100 transactions)",
                "Financial statement preparation",
                "Accounting software (1-year license)",
                "AOC 4, MGT 7 & ADT filing",
                "Annual filing (Up to turnover of 20 lakhs)",
                "Facilitation of Annual General Meeting",
                "Statutory regulations PF, ESI",
                "One Year Income Tax filing (Up to turnover of 20 lakhs)",
                "30-minute call with a senior CA/CS for your business planning",
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
            planName: "Standard",
            description: "Perfect for initiating company registration",
            isActive: true,
            suggestionText: "",
            happyText: "",
            plan: {
              id: "4",
              price: "₹1999",
              discount: "₹500 off",
              afterDiscount: "₹1499",
              laterPaid: {
                amount: "13,726",
                text: "+ Govt. Fee (to be paid later)",
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
                instalmentAmount: "₹499.50",
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
                "Your company name is reserved in just 2 - 4 days",
                "DSC in just 4 - 7 days",
                "SPICe+ form filing in 14 days*",
                "Incorporation Certificate in 14 - 21 days",
                "Company PAN+TAN",
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
            description: "Quick company registration in 7 to 14 days",
            suggestionText: "",
            happyText: "",
            plan: {
              id: "5",
              price: "₹3999",
              discount: "50% off",
              afterDiscount: "₹1999",
              laterPaid: {
                amount: "13,726",
                text: "+ Govt. Fee (to be paid later)",
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
                instalmentAmount: "₹749.50",
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
                "Expert-Assisted Process",
                "Company Name Reservation in 1-2 Days*",
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
          {
            planName: "Premium",
            isActive: true,
            description:
              "Top priority service + annual compliance to keep your business on track",
            suggestionText: "",
            happyText: "",
            plan: {
              id: "6",
              price: "₹39,999",
              discount: "17% off",
              afterDiscount: "₹32,999",
              laterPaid: {
                amount: "13,726",
                text: "+ Govt. Fee (to be paid later)",
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
                enabled: true,
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
                "Your company name is reserved in just 1 - 2 days*",
                " DSC in just 3 - 4 days",
                "SPICe+ form filing in 5 - 7 days*",
                "Incorporation Certificate in 7 - 14 days",
                "Company PAN+TAN",
                "DIN for directors",
                "Digital welcome kit that includes a checklist of all post-incorporation compliances",
                "Appointment of Auditor - ADT 01",
                "Issuance of share certificate",
                "INC 20 A form filing",
                "DIR 3 KYC (For 2 directors)",
                "Accounting & Bookkeeping (Up to 100 transactions)",
                "Financial statement preparation",
                "Accounting software (1-year license)",
                "AOC 4, MGT 7 & ADT filing",
                "Annual filing (Up to turnover of 20 lakhs)",
                "Facilitation of Annual General Meeting",
                "Statutory regulations PF, ESI",
                "One Year Income Tax filing (Up to turnover of 20 lakhs)",
                "30-minute call with a senior CA/CS for your business planning",
              ],
            },
            recommendation: {
              recommended: true,
              text: "Yes, this is the best plan for you",
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
    heading: "Why Nidhi Company Registration is Required ",
    image: Company_People_Group,
    description:["Nidhi Company Registration is required to form a mutual benefit society that promotes savings and lending among members. It provides limited liability, tax benefits, and a simple compliance structure under the Nidhi Companies Rules, 2014, allowing businesses to offer loans and deposits within a regulated community."],
  };
  const OverviewData = {
    heading: "",
    meta: "",
    introduction: {
      heading:"",
      description: [],
    },
    advantagesInfo: {
      heading: "",
      meta: "",
      description:
        "",
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
          blueText: "Requirements ",
          end: "for Nidhi Company Incorporation",
        },
        subHeading: "",
        startingDescription:"",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              {
                heading: "",
                description:
                  "A minimum of seven members are required for registration.",
              },
              {
                heading: "",
                description:
                  "The company must have at least 3 directors",
              },
              {
                heading: "",
                description:
                  "It can accommodate up to 200 members",
              },
              {
                heading: "",
                description:
                  "The minimum paid-up equity share capital must be ₹5 lakhs.",
              },
              {
                heading: "",
                description:
                  "Within a year of incorporation, Net Owned Funds (NOF) must increase to ₹10 lakhs.",
              },
              {
                heading: "Additional conditions",
                description:
                  "",
              },
              {
                heading: "",
                description:"At least 10% of the company's total deposits must be in unencumbered term deposits.",
              },
              {
                heading: "",
                description:"The NOF to deposit ratio should be 1:20, excluding accumulated losses and intangible assets.",
              },
              {
                heading: "",
                description:"At least 10% of total deposits must be maintained in a fixed deposit account with a nationalised bank.",
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
          end: "for Nidhi Company Incorporation",
        },
        subHeading: "The following documents must be submitted by all directors:",
        startingDescription: "",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              {
                heading: "",
                description: "Self-attested copy of PAN card",
              },
              {
                heading: "",
                description: "Self-attested copy of driver's license, voter ID, Aadhaar card, or passport",
              },
              {
                heading: "",
                description: "Self-attested copy of a bank statement, telephone bill, mobile bill, or electricity bill",
              },
              { heading: "", description: "Passport-size photograph" },
              {
                heading: "",
                description:
                  "Specimen signature certificate",
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
          blueText: "Key Facts ",
          end: "About Nidhi Companies:",
        },
        subHeading: "",
        startingDescription:"",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              { heading: "", description: "Nidhi companies can be set up without the approval of the RBI" },
              {
                heading: "",
                description:
                  "They are incorporated as public limited companies.",
              },
              {
                heading: "",
                description: 'The name must include "Nidhi Limited."',
              },
              {
                heading: "",
                description: "While Nidhi companies are regulated like NBFCs, their operations focus on internal borrowing and lending among members.",
              },
              {
                heading: "",
                description: "Under the Nidhi Rules of 2014, they are allowed to offer locker facilities to members.",
              },
              {
                heading: "",
                description: "Income from locker rentals should not exceed 20% of the company's total revenue for the financial year.",
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
    FAQs: [
      {
        question:
          "Who oversees the regulation of Nidhi Companies?",
        answer:
          "NA",
      },
      {
        question:
          "Is my in-person presence required for the incorporation of a Nidhi Company?",
        answer:
          "NA",
      },
      {
        question:
          "What does Rule 10 of the Nidhi Regulations state?",
        answer:
          "NA",
      },
      {
        question:
          "Is it possible for a Nidhi Company to provide vehicle loans?",
        answer:
          "NA",
      },
      {
        question:
          "What is outlined in Rule 12 of the Nidhi Regulations?",
        answer:
          "NA",
      },
      {
        question:
          "Can a non-member apply for a loan from a Nidhi Company?",
        answer:
          "NA",
      },
      {
        question:
          "What is the minimum face value of shares in a Nidhi Company?",
        answer:
          "NA",
      },
      {
        question:
          "What is the maximum dividend that a company is allowed to distribute?",
        answer:
          "NA",
      },
      {
        question:
          "Are preference shares issued by a Nidhi Company?",
        answer:
          "NA",
      },
      {
        question:
          "How can I expand my Nidhi Company's operations into new regions?",
        answer:
          "NA",
      },
     
     
    ],
  };
  const WhyEnsurekar = {
    heading: "Why to choose Ensurekar for Nidhi Company Registration",
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

  return (
    <div>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <ServiceAdvantages AdvantagesData={AdvantagesData} />
      {/* <PlansSection planData={planData} /> */}
      <All_In_One_ServiceSection AllInOneData={AllInOneData} />
      <ServiceOverview OverviewData={OverviewData} />
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <FAQsServicesSection
        FAQsData={FAQsData}
        routeName="nidhi-company-registration"
      />
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
      <TestimonialSectionAllServices TestimonialData={TestimonialData} />
    </div>
  );
};

export default NidhiCompanyRegistration;
