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
import testimonial10 from "../../../images/testimonial10.png";
import testimonial9 from "../../../images/testimonial9.png";
import testimonial7 from "../../../images/testimonial7.png";
import testimonial8 from "../../../images/testimonial8.png";
import testimonial6 from "../../../images/testimonial6.png";
import RegistrationGuide from "@/app/components/Section/Registration-Guide";
import StepByStep from "../../../images/SGV-Types/Step-By-Step.svg";
import productImage from "../../../images/recent_post_img1.png";



//--Krishna code
import TalkExpert from "../../../images/SGV-Types/Talk-To-Our-Expert.svg";
import EnhancedBusinessCredibility from "../../../images/SGV-Types/Enhanced-Business-Credibility.svg";
import HandUserMoney from "../../../images/SGV-Types/Hand-User-Money.svg";
import SimplicityandEaseofSetup from "../../../images/sole prop/Simplicity and Ease of Setup.png";
import CompleteControl from "../../../images/sole prop/Complete Control.png";
import TaxBenefits from "../../../images/sole prop/Tax Benefits.png";
import LowStartupCosts from "../../../images/sole prop/Low Startup Costs.png";
import DirectProfitRetention from "../../../images/sole prop/Direct Profit Retention.png";
import MinimalRegulatoryRequirements from "../../../images/sole prop/Minimal Regulatory Requirements.png";
const ProprietorshipRegistration = () => {
  const BreadcrumbData = {
    title: "Sole Proprietorship Registration",
    heading: "Sole Proprietorship Registration",
    subHeading: "Sole Proprietorship Registration in just 7 days",
    description:
      "Setting up your Dream Business was never this easy 100% Online Process",
    image: "",
    cartDetails: {
      id: 4,
      name: "Sole Proprietorship",
      price: 5000,
      quantity: 1,
      subtotal: 5000,
      image: productImage,
    },
  };
  const AdvantagesData = {
    title: "Sole Proprietorship Registration",
    heading: "Advantages of Sole Proprietorship Registration",
    description:
      "Sole Proprietorship Registration is the simplest and most cost-effective business model, ideal for solo entrepreneurs and freelancers. It offers complete control, low compliance, and easy setup with minimal legal formalities. While the owner is personally liable, it provides tax benefits and flexibility for small businesses.",
    image: Rocket_With_Men,
    advantages: [
      {
        title: "Easy and Low-Cost Registration",
        description:
          "Quick setup with minimal paperwork and no complex registration processes.",
        icon: <svg>...</svg>,
      },
      {
        title: "Complete Control and Flexibility",
        description:
          "The owner has full control over business decisions and operations.",
        icon: <svg>...</svg>,
      },
      {
        title: "Tax Benefits for Sole Proprietors",
        description:
          "Enjoy tax deductions and simple tax filing under personal income tax rates.",
        icon: <svg>...</svg>,
      },
      {
        title: "Minimal Compliance Requirements",
        description:
          "Reduced legal formalities and less regulatory burden compared to other business models.",
        icon: <svg>...</svg>,
      },
      {
        title: "Cost-Effective Business Structure",
        description:
          "The most affordable business option for solo entrepreneurs and small businesses.",
        icon: <svg>...</svg>,
      },
    ],
  };
  const RegisterStepsData = {
    title: "",
    heading: "Steps to Register your",
    meta: "Sole Proprietorship Registration ",
    description: "",
    steps: [
      { title: "1.	Create Your Account", description: "" },
      { title: "2.	Talk To Our Expert", description: "" },
      { title: "3.	Provide Document and Get Incorporated", description: "" },
    ],
    aboutSteps: [],
    footerMessage: "Simple, quick, and hassle-free!",
  };
  const planDatas = {
    heading: {
      startText: "",
      blueText: "Right plan",
      endText: "for Your Business",
    },
    description:
      "Vakilsearch's incorporation experts register over 1500 companies every month.",
    plans: [
      {
        id: 1,
        name: "Standard",
        description: "Perfect for initiating company registration",
        states: [
          {
            state: "MP",
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
            questionHeading: ["What We Offer:"],
            offers: [
              {
                imageUrl: "",
                heading: "",
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
            features: ["Professional assistance Process"],
          },
          {
            state: "DL",
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
            questionHeading: ["What We Offer:"],
            offers: [
              {
                imageUrl: "",
                heading: "",
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
            features: ["Professional assistance Process"],
          },
        ],
      },
      {
        id: 2,
        name: "Fastrack",
        description: "Quick company registration in 7 to 14 days",
        states: [
          {
            state: "MP",
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
            questionHeading: ["What's Included"],
            offers: [
              {
                imageUrl: "",
                heading: "",
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
              instalmentAmount: "₹749.50",
              text: "Split payment by 3 with Zolvit Flex",
              knowMore: {
                text: "",
                link: "",
              },
            },
            features: [
              "Professional guidance throughout the process",
              "GST registration",
              "MSME registration (Udyam)",
              "GST filing for one financial year (up to 300 transactions)",
            ],
          },
          {
            state: "DL",
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
            questionHeading: ["What you'll get"],
            offers: [
              {
                imageUrl: "",
                heading: "",
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
              instalmentAmount: "₹999.50",
              text: "Split payment by 3 with Zolvit Flex",
              knowMore: {
                text: "",
                link: "",
              },
            },
            features: [
              "Professional guidance throughout the process",
              "GST registration",
              "MSME registration (Udyam)",
              "GST filing for one financial year (up to 300 transactions)",
            ],
          },
        ],
      },
      {
        id: 3,
        name: "Premium",
        description:
          "Top priority service + annual compliance to keep your business on track",
        states: [
          {
            state: "MP",
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
            questionHeading: ["What You'll Receive"],
            offers: [
              {
                imageUrl: "",
                heading: "",
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
              instalmentAmount: "₹12,499.50",
              text: "Split payment by 3 with Zolvit Flex",
              knowMore: {
                text: "",
                link: "",
              },
            },
            features: [
              "Professional guidance throughout the process",
              "GST registration",
              "MSME registration (Udyam)",
              "GST filing for one financial year (up to 300 transactions)",
              "Income Tax Return (ITR) filing",
            ],
          },
          {
            state: "DL",
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
            questionHeading: ["What you'll get"],
            offers: [
              {
                imageUrl: "",
                heading: "",
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
              instalmentAmount: "₹16,499.50",
              text: "Split payment by 3 with Zolvit Flex",
              knowMore: {
                text: "",
                link: "",
              },
            },
            features: [
              "Professional guidance throughout the process",
              "GST registration",
              "MSME registration (Udyam)",
              "GST filing for one financial year (up to 300 transactions)",
              "Income Tax Return (ITR) filing",
            ],
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
  const planData = {
    heading: {
      startText: "Pick the  ",
      blueText: "Business Plan",
      endText: "for Your Goals",
    },
    description:
      "Our Expert's Know What is your Need",
    plansData: [
      {
        id: 1,
        state: "MP",
        description: "",
        plans: [
          {
            planName: "Starter/Lite",
            description: "Ideal for initiating company registration",
            isActive: true,
            suggestionText: "",
            happyText: "",
            plan: {
              id: "1",
              price: "₹999",
              discount: "30% off",
              afterDiscount: "₹699",
              laterPaid: {
                amount: "",
                text: "",
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
                "Expert assisted process",
                "GST or MSME registration (Anyone)",
              ],
            },
            recommendation: {
              recommended: true,
              text: "",
            },
          },
          {
            planName: "Standard",
            isActive: true,
            description: "Perfect for  registration and tax filing",
            suggestionText: "",
            happyText: "",
            plan: {
              id: "2",
              price: "₹4999",
              discount: "30% off",
              afterDiscount: "₹3,499",
              laterPaid: {
                amount: "",
                text: "",
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
                "Expert-Assisted Process",
                "GST registration",
                "MSME registration (Udyam)",
                "GST filing for one financial year (up to 300 transactions)",
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
              "Perfect for registration and tax complete tax filings support ",
            suggestionText: "",
            happyText: "",
            plan: {
              id: "3",
              price: "₹7,999",
              discount: "35% off",
              afterDiscount: "₹5,499",
              laterPaid: {
                amount: "",
                text: "",
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
                "GST registration",
                "MSME registration (Udyam)",
                "GST filing for one financial year (up to 300 transactions)",
                "Income Tax Return (ITR) filing",
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
            planName: "Starter/Lite",
            description: "Ideal for initiating company registration",
            isActive: true,
            suggestionText: "",
            happyText: "",
            plan: {
              id: "1",
              price: "₹999",
              discount: "30% off",
              afterDiscount: "₹699",
              laterPaid: {
                amount: "",
                text: "",
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
                "Expert assisted process",
                "GST or MSME registration (Anyone)",
              ],
            },
            recommendation: {
              recommended: true,
              text: "",
            },
          },
          {
            planName: "Standard",
            isActive: true,
            description: "Perfect for  registration and tax filing",
            suggestionText: "",
            happyText: "",
            plan: {
              id: "2",
              price: "₹4999",
              discount: "30% off",
              afterDiscount: "₹3,499",
              laterPaid: {
                amount: "",
                text: "",
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
                "Expert-Assisted Process",
                "GST registration",
                "MSME registration (Udyam)",
                "GST filing for one financial year (up to 300 transactions)",
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
              "Perfect for registration and tax complete tax filings support ",
            suggestionText: "",
            happyText: "",
            plan: {
              id: "3",
              price: "₹7,999",
              discount: "35% off",
              afterDiscount: "₹5,499",
              laterPaid: {
                amount: "",
                text: "",
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
                "GST registration",
                "MSME registration (Udyam)",
                "GST filing for one financial year (up to 300 transactions)",
                "Income Tax Return (ITR) filing",
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
    heading: "Why Sole Proprietorship Registration is Required.",
    image: Company_People_Group,
    description: [
      "Sole Proprietorship Registration offers legal recognition, tax compliance, and a separate business identity. It limits personal liability and simplifies opening a business bank account and accessing loans. This cost-effective process provides tax benefits and minimal legal requirements, ideal for small businesses.",
      "1. Legal Recognition and Business Identity",
"2. Tax Benefits and Simplified Filing",
"3. Access to Business Bank Account and Loans",
    ],
  };
  const OverviewData = {
    heading: "",
    meta: "",
   
    advantagesInfo: {
      heading: "Benefits of",
      meta: " Sole Proprietorship  ",
      description: "",
      advantages: [
        {
          imageUrl: SimplicityandEaseofSetup.src,
          heading: "Simplicity and Ease of Setup",
          details:
            "Establishing a sole proprietorship is straightforward and requires minimal paperwork and regulatory compliance, making it quick to start.",
        },
        {
          imageUrl: CompleteControl.src,
          heading: "Complete Control",
          details:
            "The owner has full authority over business decisions and operations, allowing for quick and flexible decision-making.",
        },
        {
          imageUrl: TaxBenefits.src,
          heading: "Tax Benefits",
          details:
            "Income from the business is taxed as personal income, which can result in lower overall tax rates for the owner compared to corporate tax rates.",
        },
        {
          imageUrl: LowStartupCosts.src,
          heading: "Low Startup Costs",
          details:
            "Starting a sole proprietorship typically requires less capital than other business structures, reducing financial risk for the owner.",
        },
        {
          imageUrl: DirectProfitRetention.src,
          heading: "Direct Profit Retention",
          details:
            "The owner retains all profits generated by the business, providing a direct financial incentive for their efforts.",
        },
        {
          imageUrl: MinimalRegulatoryRequirements.src,
          heading: "Minimal Regulatory Requirements",
          details:
            "Sole proprietorships face fewer regulations and legal formalities than corporations or Proprietorships, simplifying business management.",
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
          end: "for Sole Proprietorship Registration ",
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
                description: "The applicant must be at least 18 years old.",
              },
              {
                heading: "",
                description: "The applicant must be an Indian citizen.",
              },
              {
                heading: "",
                description:
                  "They should possess the legal capacity to enter into contracts.",
              },
              {
                heading: "",
                description:
                  "The proprietor should not have any legal disabilities.",
              },
              {
                heading: "",
                description:
                  "The applicant must not have a history of bankruptcy or previous felony convictions.",
              },
              {
                heading: "",
                description:
                  "The purpose of the business must be clearly defined at the time of registration.",
              },
              {
                heading: "",
                description:
                  " The business activities must be lawful, and the sale of illegal goods or services is prohibited.",
              },
              {
                heading: "",
                description:
                  "The business must have a unique name that has not been previously registered.",
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
          blueText: "Documents Required ",
          end: "for Sole Proprietorship Firm Registration",
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
                description: "Aadhaar card of the sole proprietor",
              },
              {
                heading: "",
                description:
                  "Permanent Account Number (PAN) card or another form of identity proof for the sole proprietor",
              },
              {
                heading: "",
                description:
                  "Bank account details in the name of the proprietorship",
              },
              { heading: "", description: "Address proof for the business" },
              {
                heading: "",
                description:
                  "Electricity bill, utility bill, or sale deed if the property is self-owned",
              },
              {
                heading: "",
                description: "MSME registration certificate",
              },
              {
                heading: "",
                description: "Trade license (if applicable)",
              },
              { heading: "", description: "GST number or GST certificate" },
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
          start: "The",
          blueText: "Checklist for Registering ",
          end: "a Sole Proprietorship In India Includes ",
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
                  "Select an appropriate name for your sole proprietorship business",
              },
              {
                heading: "",
                description:
                  "Open a business Bank Account of the Firm",
              },
              {
                heading: "",
                description: "Register as an MSME",
              },
              {
                heading: "",
                description:
                  "Acquire necessary licenses, such as the FSSAI license ",
              },
              {
                heading: "",
                description:
                  "Depending on your business needs, register for ESIC or EPFO",
              },
              {
                heading: "",
                description:
                  "Obtain all required certifications under the Shop and Establishment Act of 1947 (if applicable)",
              },
            ],
          },
        ],
      },
    ],
  };
  const FAQsData = {
    title: "FAQs",
    description: "",
    FAQs: [
      { question: "What is a one person company (OPC)?", answer: "NA" },
      {
        question: "What are the features of a one person company?",
        answer: "NA",
      },
      {
        question: "What is the difference between OPC vs. LLP vs. Pvt Ltd?",
        answer: "NA",
      },
      { question: "Who is eligible for OPC?", answer: "NA" },
      {
        question:
          "What are the documents required for OPC company registration?",
        answer: "NA",
      },
      { question: "Is OPC public or private?", answer: "NA" },
      { question: "What are the rules for OPC companies?", answer: "NA" },
      { question: "What are the OPC registration fees?", answer: "NA" },
      { question: "Can OPC have directors?", answer: "NA" },
      { question: "How to register an OPC company in India?", answer: "NA" },
    ],
  
  };
  const WhyEnsurekar = {
    heading: "Why Choose Ensurekar for Sole Proprietorship Registration ",
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
  const RegistrationGuideData = {
    title: "",
    heading: " Step by Step Process to Register Sole Proprietorship",
    description: "",
    image: StepByStep,
    guideList: [
      {
        heading: "Business Name Registration",
        description:
          "Consult with our legal experts to select an appropriate name for your sole proprietorship. Our team will guide you through the process of registering your business name.",
      },
      {
        heading: "Obtain PAN, GST, and MSME Registration",
        description:
          "Our team will assist you in securing your Udyam registration certificate and completing your GST registration seamlessly.",
      },
      {
        heading: "Sole Proprietorship Registration Filing",
        description:
          "Provide the necessary documentation, and we will handle the submission of your sole proprietorship registration form.",
      },
      {
        heading: "Open a Current Account",
        description:
          "Once your business is registered, we'll help you open an instant, zero-balance current account. We also offer ongoing support for GST, annual ITR filings, and trademark registration.",
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
    <>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} scrollToPlans={scrollToPlans}/>
      <ServiceAdvantages AdvantagesData={AdvantagesData} />
      <div ref={plansRef} id="plans" className="plans-section">
      <PlansSection planData={planData} />
      </div>
      <All_In_One_ServiceSection AllInOneData={AllInOneData} />
      <ServiceOverview OverviewData={OverviewData} />
      <RegistrationGuide RegistrationGuideData={RegistrationGuideData} />
      <div className="container stp-30 sbp-10 py-16">
        <p className="display-3 text-center  !leading-[130%]  text-bodyText mb-14 dark:text-sky-400">
          {" "}
          Start a Free Trial With Our Product Suite Today!
        </p>
        <p className="text-center text-mainText text-2xl dark:text-white">
          Start a Free Trial With Our Experts Today!
        </p>
      </div>
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <FAQsServicesSection FAQsData={FAQsData} />
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
      <TestimonialSectionAllServices TestimonialData={TestimonialData} />
    </>
  );
};

export default ProprietorshipRegistration;
