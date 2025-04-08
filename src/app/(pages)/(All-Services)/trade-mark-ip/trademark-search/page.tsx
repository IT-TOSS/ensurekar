import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import BrandnameSearch from "@/app/components/Section/Brandname-Search";
import HelpSection from "@/app/components/Section/help-section";
import RegistrationGuide from "@/app/components/Section/Registration-Guide";
import we_help from "@/app/images/we_help.png";
import React from "react";
import StepByStep from "../../../../images/SGV-Types/Step-By-Step.svg";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import CounterSection from "@/app/components/Section/Counter-Section";
import BenefitSection from "@/app/components/Section/Benefit-Section";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import faq_illus from "../../../../images/faq_illus.png";
import PlansSection from "@/app/components/Section/Plans-Section";
import productImage from "../../../../images/recent_post_img1.png";


const TrademarkSearch = () => {
  const BreadcrumbData = {
    title: "Trademark Search",
    heading: "Trademark Public Search Online",
    subHeading: "Comprehensive Trademark Search Services to Protect Your Brand",
    description:
      "",
    image: "",
    bottomHeading: "Why Trademark Search is Essential for Your Business",
    cartDetails: {
      id: 30,
      name: "Trade Mark Name Search",
      price: 1500,
      quantity: 1,
      subtotal: 1500,
      image: productImage,
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
  const HelpSectionData = {
    heading: "Why Do You Need a Trademark Search India?",
    subHeading: "",
    description:
      "Trademark searches can be complex and time-consuming, which is why many opt to outsource the task. If you decide to do it yourself, be aware that it may cost more than using an agency. ",
    image: we_help,
    bottomHeading:
      "When selecting a trademark public search company, consider these factors:",
    bottomDescription: "",
    bottomList: [
      {
        heading: "Expertise : ",
        description:
          "Choose a company with experience in multiple industries to ensure accurate results.",
      },
      {
        heading: "Cost : ",
        description:
          "Look for a competitive and reasonable fee compared to other agencies.",
      },
      {
        heading: "Time frame : ",
        description:
          "Check their turnaround time to know how quickly you'll receive results.",
      },
      {
        heading: "Results : ",
        description:
          "Select a reputable company that delivers reliable outcomes to ensure your trademark is well-protected.",
      },
    ],
  };
  const RegistrationGuideData = {
    title: "Registration Guide",
    heading: "Steps to Conduct a Trademark Public Search in India",
    description: "",
    image: StepByStep,
    guideList: [
      {
        heading: "Access the Indian Trademark Registry",
        description: "Visit the IP India portal or trusted platforms to search for registered trademarks.",
      },
      {
        heading: "Conduct a Keyword Search",
        description: "Enter your brand name or keywords to find similar trademarks.",
      },
      {
        heading: "Analyze the Results",
        description: "Review the database for potential matches and conflicts.",
      },
      {
        heading: "Verify Trademark Status",
        description: "Check details of existing trademarks to ensure your name is unique.",
      },
      {
        heading: "Plan Your Next Step",
        description: "If no conflicts arise, proceed with filing your trademark application.",
      },
    ],
  };
  const RegisterStepsData = {
    title: " Trademark Search",
    heading: "Steps to Register your",
    meta: "Trademark Search",
    description: "",
    steps: [
      {
        title: "Trademark Search",
        description:
          "We conduct a thorough search to check the availability of your chosen trademark name.",
      },
      {
        title: "Application Filing",
        description:
          "Our team prepares and files the trademark application with all required documents.",
      },
      {
        title: "Registration and Approval",
        description:
          "We monitor the application process and notify you once your trademark is successfully registered.",
      },
    ],
    aboutSteps: [],
    footerMessage: "",
  };
  const CounterSectionData = [
    { number: 500, text: "Tradmarks" },
    { number: 5000, text: "Startup Guidance and Support" },
    { number: 10, text: "T.M in 1 week" },
  ];
  const BenefitData = {
    title: "",
    heading: "Question? Meet Answer",
    subHeading: "",
    benefitsData: {
      heading: "",
      description: "",
      benefits: [
        {
          icon: "",
          title: "Trademark Search Clarity ",
          description: "",
        },
        {
          icon: "",
          title: "Explore the Search Demo ",
          description: "",
        },
        {
          icon: "",
          title: "Reach Out for Support ",
          description: "",
        },
        {
          icon: "",
          title: "Help Center Resources  ",
          description: "",
        },
      ],
    },
  };
  const BrandRegistrationGuide = {
    heading: "How to Conduct a Trademark Search in India - Brand Registration Guide",
    subHeading: "",
    description:
      "You can easily perform a free trademark search online using Ensurekar’s trademark search tool. Our experts are here to guide you through the process for seamless trademark registration. An online trademark search can also be conducted through the official Indian Trademark Database. The trademark registry performs a search and provides a report on trademarks that may conflict with your application.",
    image: we_help,
    bottomHeading:
      "When conducting a trademark public search, businesses should follow these key steps:",
    bottomDescription: "With Ensurekar, trademark registration is simple, efficient, and reliable!",
    bottomList: [
      { heading: "Decide Whether to File for a Trademark: ", description: "Evaluate if trademark registration is essential for your business." },
      { heading: "Understand the Right Trademark Type: ", description: "Identify the type of trademark that aligns with your brand and business needs." },
      { heading: "File Your Trademark Application: ", description: "Submit an application to the trademark registry for approval." },
      { heading: "Safeguard Your Intellectual Property: ", description: "Ensure your trademark is protected from infringement after registration." },
    ],
  };
  const FAQsData = {
    title: "FAQs",
    heading: "",
    description: "",
    FAQs: [
      { question: "What does a Trademark Knockout Search involve?", answer: "NA" },
      { question: "What is included in a Comprehensive Trademark Search?", answer: "NA" },
      { question: "How do I properly conduct a trademark search?", answer: "NA" },
      { question: "What are the advantages of conducting a trademark search?", answer: "NA" },
      { question: "Can I conduct a trademark search on my own?", answer: "NA" },
      { question: "What is the most effective type of trademark search before registration?", answer: "NA" },
      { question: "Is it possible to perform a trademark search without identifying the class?", answer: "NA" },
      { question: "Why is conducting a trademark search important?", answer: "NA" },
      { question: "How does the process of a comprehensive trademark search work?", answer: "NA" },
      { question: "Is knowing the trademark class necessary for conducting a search?", answer: "NA" },
      { question: "What is a Trademark Clearance Search and why is it important?", answer: "NA" },
    ],
  };
  return (
    <>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <BrandnameSearch />
      <PlansSection planData={planData} />
      <HelpSection HelpSectionData={HelpSectionData} />
      <RegistrationGuide RegistrationGuideData={RegistrationGuideData} />
      <HelpSection HelpSectionData={BrandRegistrationGuide} />
      <CounterSection CounterSectionData={CounterSectionData} />
      {/* <BenefitSection BenefitData={BenefitData} /> */}
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <FAQsServicesSection FAQsData={FAQsData} />
    </>
  );
};

export default TrademarkSearch;
