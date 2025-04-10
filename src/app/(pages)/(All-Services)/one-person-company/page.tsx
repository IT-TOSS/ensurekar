import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import PlansSection from "@/app/components/Section/Plans-Section";
import ServiceOverview from "@/app/components/Section/Service-Overview";
import Rocket_With_Men from "../../../images/SGV-Types/Rocket-With-Men.svg";
import React from "react";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import TestimonialSectionAllServices from "@/app/components/Section/Testimonial-Section-All-Services";
import testimonial10 from "../../../images/testimonial10.png";
import testimonial9 from "../../../images/testimonial9.png";
import testimonial7 from "../../../images/testimonial7.png";
import testimonial8 from "../../../images/testimonial8.png";
import testimonial6 from "../../../images/testimonial6.png";
import RegistrationGuide from "@/app/components/Section/Registration-Guide";
import StepByStep from "../../../images/SGV-Types/Step-By-Step.svg";
import productImage from "../../../images/recent_post_img1.png";

const OnePersonCompany = () => {
  const BreadcrumbData = {
    title: "One Person Company Registration ",
    heading: "One Person Company Registration (OPC)",
    subHeading: "One Person CompanyRegistration in just 7 days ",
    description:
      "Setting up your dream business was never this easy, 100% Online Process",
    image: "",
    cartDetails: {
      id: 38,
      name: "Nidhi Company",
      price: 10000,
      quantity: 1,
      subtotal: 10000,
      image: productImage,
    },
  };
  const planData = {
    heading: {
      startText: "Pick the",
      blueText: "Business Plan",
      endText: "for Your Business",
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
            planName: "Complete Suit",
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
                "Dedicated account manager",
                "Partnership deed drafted within 3 days",
                "Deed submission to the local registrar on your behalf",
                "PAN card issuance",
                "GST registration",
                "GSTR-1 & 3B filing for 12 months (up to 300 transactions)",
                "1-year license for accounting software",
                "Zero balance current account with 7% interest",
                "Trademark registration for your brand",
                "ITR filing for one financial year (up to 10 lakhs turnover)",
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
            planName: "Complete Suit",
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
                "Dedicated account manager",
                "Partnership deed drafted within 3 days",
                "Deed submission to the local registrar on your behalf",
                "PAN card issuance",
                "GST registration",
                "GSTR-1 & 3B filing for 12 months (up to 300 transactions)",
                "1-year license for accounting software",
                "Zero balance current account with 7% interest",
                "Trademark registration for your brand",
                "ITR filing for one financial year (up to 10 lakhs turnover)",
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
  const OverviewData = {
    heading: "One Person Company Registration ",
    meta: "Overview",
    introduction: {
      heading:
        "Fastest One Person Company Registration In India | Same Day Process",
      description: [
        "One Person Company (OPC) Registration allows a single individual to operate a business with the benefits of limited liability and a separate legal identity. Ideal for solo entrepreneurs and startups, OPC provides a simple registration process, flexibility in management, and tax advantages. Registered under the Companies Act, 2013, OPC ensures easy compliance and scalability, making it a perfect choice for small businesses looking to grow with minimal risk.",
      ],
    },
    advantagesInfo: {
      heading: "Advantages",
      meta: " of One Person Company Registration ",
      description: "",
      advantages: [
        {
          imageUrl: "",
          heading: "Separate Legal Entity",
          details:
            "An OPC enjoys the status of a separate legal entity. The individual who incorporates the OPC is protected by this distinction, meaning their personal assets are not at risk. Liability is limited to the amount of shares owned, so creditors can only sue the OPC, not the individual member or director.",
        },
        {
          imageUrl: "",
          heading: "Easier Access to Funding",
          details:
            "OPCs, being private companies, can easily attract funding from venture capitalists, angel investors, incubators, and other sources. This makes raising capital much more accessible.",
        },
        {
          imageUrl: "",
          heading: "Reduced Compliance Requirements",
          details:
            "OPCs are granted certain exemptions under the Companies Act of 2013. For instance, they are not required to prepare a cash flow statement, maintain extensive account books, or file annual reports by a company secretary.",
        },
        {
          imageUrl: "",
          heading: "Simplified Integration",
          details:
            "Establishing and operating an OPC is straightforward. With no minimum paid-up capital requirement, a sole member acting as director can easily approve and manage the company's incorporation without complex legal formalities.",
        },
        {
          imageUrl: "",
          heading: "Effortless Management",
          details:
            "With a single individual in charge, decision-making in an OPC is quick and streamlined. Ordinary and special resolutions can be passed with minimal formalities, avoiding internal conflicts or delays, ensuring smoother management.",
        },
        {
          imageUrl: "",
          heading: "Perpetual Succession",
          details:
            "An OPC enjoys perpetual succession, even with a sole member. At the time of incorporation, a nominee is appointed, who will take over the company’s operations in the event of the member’s death, ensuring continuous existence.",
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
          start: "Eligibility for ",
          blueText: "One-Person Company (OPC) Registration ",
          end: "in India",
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
                heading: "Individual Ownership",
                description:
                  "Only a natural person who is an Indian citizen and resident in India is eligible to incorporate an OPC. A resident is someone who has stayed in India for at least 182 days during the preceding calendar year.",
              },
              {
                heading: "Minimum Age Requirement: ",
                description:
                  "The individual must be at least 18 years of age to be eligible for registration.",
              },
              {
                heading: "Nominee Requirement",
                description:
                  "The applicant must appoint a nominee, who will become the owner in the event of the applicant's death or incapacity.",
              },
              {
                heading: "One OPC per Person ",
                description:
                  "A person cannot incorporate more than one OPC or be a nominee in more than one OPC.",
              },
              {
                heading: "Business Purpose",
                description:
                  "The OPC must be formed for lawful business activities, excluding non-banking financial investments and related activities.",
              },
              {
                heading: "No Corporate Entities",
                description:
                  "Only individuals can form an OPC, meaning companies or LLPs cannot register an OPC.",
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
          end: "for One Person Company (OPC) Registration",
        },
        subHeading: "",
        startingDescription: "",
        endingDescription:
          "Ensure all documents are properly scanned and up-to-date to avoid delays during the registration process.",
        requiredSteps: [
          {
            heading: "Identity and Address Proof:",
            description: "",
            steps: [
              {
                heading: "",
                description:
                  "Scanned copy of PAN card or passport (for foreign nationals & NRIs)",
              },
              {
                heading: "",
                description:
                  " Scanned copy of Voter's ID/Passport/Driver's License",
              },
              {
                heading: "",
                description:
                  "Scanned copy of the latest bank statement, telephone or mobile bill, or electricity/gas bill",
              },
              {
                heading: "",
                description:
                  "Scanned passport-sized photograph and specimen signature (for directors only)",
              },
            ],
          },
          {
            heading: "Registered Office Proof:",
            description: "",
            steps: [
              {
                heading: "",
                description:
                  "Scanned copy of the latest bank statement, telephone or mobile bill, or electricity/gas bill",
              },
              {
                heading: "",
                description:
                  "Scanned copy of the notarized rental agreement (in English)",
              },
              {
                heading: "",
                description:
                  "Scanned copy of the no-objection certificate (NOC) from the property owner",
              },
              {
                heading: "",
                description:
                  "Scanned copy of sale deed or property deed (in case of owned property)",
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
          start: "",
          blueText: "Checklist  ",
          end: "for One Person Company Registration",
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
                description:
                  "Maximum and minimum membership requirements must be met",
              },
              {
                heading: "",
                description:
                  "There should be a nominee chosen before incorporation",
              },
              {
                heading: "",
                description: "Use Form INC-3 to request the nominee's approval",
              },
              {
                heading: "",
                description:
                  "The Companies (Incorporation Rules) 2014 mandate that the OPC name be selected",
              },
              {
                heading: "",
                description: "Minimum authorised capital of ₹1 Lakh",
              },
            ],
          },
        ],
      },
    ],
  };
  const RegistrationGuideData = {
    title: "",
    heading: "Step by Step Process of One Person Company Registration",
    description: "",
    image: StepByStep,
    guideList: [
      {
        heading: "Consultation",
        description:
          "Initial consultation to understand your business needs, government fees, and eligibility for OPC registration.",
      },
      {
        heading: "Documentation",
        description:
          "Support in collecting and preparing essential documents such as identity proof, Aadhaar Card, address proof, No Objection Certificate, and registered office proof (e.g., utility bill).",
      },
      {
        heading: "DIN and DSC Application",
        description:
          "Applying for the Director Identification Number (DIN) and Digital Signature Certificate (DSC) for the sole shareholder.",
      },
      {
        heading: "Name Approval",
        description:
          "Assistance in registering a unique company name. We will check name availability and submit it for reservation through the Ministry of Corporate Affairs (MCA) portal.",
      },
      {
        heading: "MOA and AOA Drafting",
        description:
          "Drafting the Memorandum of Association (MOA) and Articles of Association (AOA) in line with legal standards.",
      },
      {
        heading: "Filing Forms",
        description:
          "Filing necessary forms (INC-32, INC-33, and INC-34) with the Registrar of Companies (ROC).",
      },
      {
        heading: "Incorporation Certificate",
        description:
          "Receiving the Certificate of Incorporation from the ROC, marking the official registration of the OPC.",
      },
      {
        heading: "PAN and TAN Application",
        description: "Support in applying for the company's PAN and TAN.",
      },
      {
        heading: "Post-Incorporation Support",
        description:
          "Guidance on post-incorporation compliance, trademark registration, professional tax, income tax returns, company secretary appointments, and other legal requirements.",
      },
    ],
  };
  const RegisterStepsData = {
    title: "",
    heading: "Steps to Register your",
    meta: " One Person Company",
    description: "",
    steps: [
      { title: "Create you're account and submit details", description: "" },
      { title: "consult with our experts", description: "" },
      { title: "Get Your Certificate", description: "" },
    ],
    aboutSteps: [],
    footerMessage: "Simple, quick, and hassle-free!",
  };
  const FAQsData = {
    title: "FAQs",
    heading: "",
    description: "",
    FAQs: [
      {
        question: "What is a One Person Company (OPC)?",
        answer: "NA",
      },
      {
        question: "What are the characteristics of a One Person Company?",
        answer: "NA",
      },
      {
        question:
          "How does an OPC differ from an LLP and a Private Limited Company?",
        answer: "NA",
      },
      {
        question: "Who qualifies to establish an OPC?",
        answer: "NA",
      },
      {
        question: "What documents are necessary for registering an OPC?",
        answer: "NA",
      },
      {
        question: "Is an OPC classified as a public or private entity?",
        answer: "NA",
      },
      {
        question: "What regulations govern OPC companies?",
        answer: "NA",
      },
      {
        question: "What are the fees associated with OPC registration?",
        answer: "NA",
      },
      {
        question: "Can an OPC appoint directors?",
        answer: "NA",
      },
      {
        question: "How can one register an OPC in India?",
        answer: "NA",
      },
    ],
  };
  const WhyEnsurekar = {
    heading: "Why to Choose ENSUREKAR for One Person Company",
    description: "",
    elements: [
      {
        heading: "Expert Assistance",
        description:
          "EnsureKar offers professional guidance throughout the entire registration process, ensuring compliance with legal requirements",
        imageUrl: "",
      },
      {
        heading: "Hassle-Free & Fast Service",
        description:
          "We handle everything from name approval to incorporation documents, ensuring a smooth and quick registration process",
        imageUrl: "",
      },
      {
        heading: "Transparent & Affordable",
        description:
          "We provide clear, upfront pricing with no hidden fees, making the entire process cost-effective and stress-free",
        imageUrl: "",
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
    <>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData}  />
      <PlansSection planData={planData} />
      <ServiceOverview OverviewData={OverviewData} />
      <RegistrationGuide RegistrationGuideData={RegistrationGuideData} />
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <FAQsServicesSection FAQsData={FAQsData} />
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
      <TestimonialSectionAllServices TestimonialData={TestimonialData} />
    </>
  );
};

export default OnePersonCompany;
