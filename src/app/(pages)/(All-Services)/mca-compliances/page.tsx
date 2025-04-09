import React from "react";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import PlansSection from "@/app/components/Section/Plans-Section";
import ServiceOverview from "@/app/components/Section/Service-Overview";
import Rocket_With_Men from "../../../images/SGV-Types/Rocket-With-Men.svg";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import faq_illus from "../../../images/faq_illus.png";
import TestimonialSectionAllServices from "@/app/components/Section/Testimonial-Section-All-Services";
import testimonial10 from "../../../images/testimonial10.png";
import testimonial9 from "../../../images/testimonial9.png";
import testimonial7 from "../../../images/testimonial7.png";
import testimonial8 from "../../../images/testimonial8.png";
import testimonial6 from "../../../images/testimonial6.png";
import productImage from "../../../images/recent_post_img1.png";

const MCA_Compliances = () => {
  const BreadcrumbData = {
    title: "MCA Compliances",
    heading: "MCA Compliances ",
    subHeading: "MCA Compliance Expert Guidance on Compliance for Companies",
    description: "Stay Compliant, Stay Ahead: A Guide to Company Compliance",
    image: "",
    cartDetails:{
      id:11,
      name: "MCA Compliance",
      price: 16000,
      quantity: 1,
      subtotal: 16000,
      image: productImage,
    }
  };
  const planData = {
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
            note: {
              heading: "Please note: ",
              description:
                "Additional government and affiliate fees (if applicable) will be collected during compliance filing by our experts.",
            },
            plan: {
              id: "1",
              price: "30,000",
              discount: "50% off",
              afterDiscount: "₹15,000",
              laterPaid: {
                amount: "",
                text: "onwards",
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
                "Appointment of Auditor",
                "Issuance of share certificate",
                "INC 20 A form filing",
                "DIR 3 KYC (For 2 directors)",
                "Accounting & Bookkeeping (Up to 100 transactions)",
                "Financial statement preparation",
                "Accounting software (1-year license)",
                "AOC 4, MGT 7 & ADT 1 filing",
                "Annual filing (Up to turnover of 20 lakhs)",
                "Facilitation of Annual General Meeting",
                "Statutory regulations PF, ESI",
                "One Year Income Tax filing (Up to turnover of 20 lakhs)",
                "Preparation of Minutes & Filing of AGM Report",
                "GST Returns Filings (12 Months)",
                "Dedicated account manager",
                "Consultation with CA, CS & Lawyer",
                "TDS filing for 1 year",
                "Payroll service (Up to 5 employees)",
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
            note: {
              heading: "Please note: ",
              description:
                "Additional government and affiliate fees (if applicable) will be collected during compliance filing by our experts.",
            },
            plan: {
              id: "2",
              price: "₹50,000",
              discount: "50% off",
              afterDiscount: "₹25,000",
              laterPaid: {
                amount: "",
                text: "(onwards) + Govt. Fee (to be paid later)",
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
                "Appointment of Auditor",
                "Issuance of share certificate",
                "INC 20 A form filing",
                "DIR 3 KYC (For 2 directors)",
                "Accounting & Bookkeeping (Up to 100 transactions)",
                "Financial statement preparation",
                "Accounting software (1-year license)",
                "AOC 4, MGT 7 & ADT 1 filing",
                "Annual filing (Up to turnover of 20 lakhs)",
                "Facilitation of Annual General Meeting",
                "Statutory regulations PF, ESI",
                "One Year Income Tax filing (Up to turnover of 20 lakhs)",
                "Preparation of Minutes & Filing of AGM Report",
                "GST Returns Filings (12 Months)",
                "Dedicated account manager",
                "Consultation with CA, CS & Lawyer",
                "TDS filing for 1 year",
                "Payroll service (Up to 5 employees)",
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
            note: {
              heading: "Please note: ",
              description:
                "Additional government and affiliate fees (if applicable) will be collected during compliance filing by our experts.",
            },
            plan: {
              id: "3",
              price: "₹70,000",
              discount: "50% off",
              afterDiscount: "₹35,000",
              laterPaid: {
                amount: "",
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
                "Appointment of Auditor",
                "Issuance of share certificate",
                "INC 20 A form filing",
                "DIR 3 KYC (For 2 directors)",
                "Accounting & Bookkeeping (Up to 100 transactions)",
                "Financial statement preparation",
                "Accounting software (1-year license)",
                "AOC 4, MGT 7 & ADT 1 filing",
                "Annual filing (Up to turnover of 20 lakhs)",
                "Facilitation of Annual General Meeting",
                "Statutory regulations PF, ESI",
                "One Year Income Tax filing (Up to turnover of 20 lakhs)",
                "Preparation of Minutes & Filing of AGM Report",
                "GST Returns Filings (12 Months)",
                "Dedicated account manager",
                "Consultation with CA, CS & Lawyer",
                "TDS filing for 1 year",
                "Payroll service (Up to 5 employees)",
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
  const OverviewData = {
    heading: "Annual Filing for Companies",
    meta: "Overview",
    introduction: {
      heading: "",
      description: [
        "Maintaining company compliance is essential for any business to avoid penalties. All private limited companies, one-person companies, limited companies, and section 8 companies must follow the annual compliance requirements outlined in the Companies Act, 2013. These compliance requirements apply regardless of the company's turnover or capital. Not adhering to annual compliance for private limited companies can lead to penalties and legal actions.",
      ],
    },
    advantagesInfo: {
      heading: "Annual Compliance  ",
      meta: "for Private Limited Companies",
      description:
        "Keeping up with annual compliance is important for private limited companies. These filings need to be done on time each year to avoid penalties. Below are some key compliance tasks that should be taken seriously:",
      advantages: [
        {
          imageUrl: "",
          heading: "Business Commencement Certificate",
          details:
            "Companies registered after November 2019 must obtain a business commencement certificate within 180 days of incorporation.\n  ",
          note: {
            heading: "Penalty for non-compliance:",
            description:
              "A penalty of ₹50,000 for the company and ₹1,000 per day for directors.",
          },
        },
        {
          imageUrl: "",
          heading: "Appointment of Auditor",
          details:
            "An auditor must be appointed within 30 days of incorporation. ₹300 per month, and the company cannot conduct business without an auditor.",
          note: {
            heading: "Penalty for non-compliance:",
            description:
              " ₹300 per month, and the company cannot conduct business without an auditor.",
          },
        },
        {
          imageUrl: "",
          heading: "Filing Income Tax Returns (ITR)",
          details:
            "Income tax returns for private limited companies must be filed annually before the due date.",
        },
        {
          imageUrl: "",
          heading: "Filing MCA Form AOC-4",
          details:
            "Companies must file form AOC-4 with the Ministry of Corporate Affairs (MCA) by November 13 each year.",
          note: {
            heading: "Penalty for non-compliance:",
            description: "₹200 per day of delay.",
          },
        },
        {
          imageUrl: "",
          heading: "Filing MCA Form MGT-7",
          details:
            "Similar to AOC-4, form MGT-7 must also be filed with the MCA by November 13.",
          note: {
            heading: "Penalty for non-compliance:",
            description: "₹200 per day of delay.",
          },
        },
        {
          imageUrl: "",
          heading: "Filing DIN eKYC",
          details:
            "Every director of a private limited company must file DIN eKYC annually to maintain an active Director Identification Number (DIN).",
        },
        {
          imageUrl: "",
          heading: "Holding Annual General Meeting (AGM)",
          details: "An AGM must be held within six months of the end of the financial year. Information about the AGM must be submitted during the annual filing.",
        },
        {
          imageUrl: "",
          heading: "Directors' Report",
          details: "A directors' report must be submitted along with other filings to the ROC and MCA as per Section 134 of the Companies Act.",
          note: {
            heading: "Penalty for non-compliance:",
            description:
              "A penalty of ₹50,000 for the company and ₹1,000 per day for directors.",
          },
        },
      ],
      bottomText:"Staying compliant with these annual filing requirements helps avoid penalties and keeps your business running smoothly.",
    },
    eligibilityCriteria: [
      {
        imageData: {
          imageUrl: Rocket_With_Men,
          imageDirection: "right",
        },
        heading: {
          start: "The  ",
          blueText: "Importance",
          end: "of Company Compliance Services",
        },
        meta: "for Online Digital Signature Certificate (DSC)",

        subHeading: "",
        startingDescription: "As your business grows, compliance becomes more complex, covering areas like hiring, safety, wages, and product regulations. Staying compliant helps prevent legal issues, fines, or business shutdowns.",
        endingDescription: "",
        requiredSteps: [
          {
            heading:"",
            description: "",
            steps: [
              {
                heading: "Reduced Legal Risks",
                description:
                  "Proper compliance reduces the chances of facing penalties or lawsuits. A compliance expert can help ensure your business meets all legal obligations, minimizing risk.",
              },
              {
                heading: "Improved Operations & Safety",
                description:
                  "Following rules on discrimination, harassment, and safety not only creates a better work environment but also boosts productivity and reduces accidents or disruptions.",
              },
              { heading: "Better Public Relations", description: "Adhering to compliance regulations can enhance your brand. Highlight your commitment to equal opportunity, non-discrimination, and employee well-being in your marketing and hiring materials." },
              { heading: "Increased Employee Retention", description: "Employees are more likely to stay in a workplace that feels fair, safe, and professional. Strong policies against harassment and discrimination, with clear enforcement, help retain top talent." },
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
          blueText: "Types",
          end: "of Business Compliance",
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
                heading: "Regulatory Compliance",
                description:
                  "This ensures that a business follows local and international laws relevant to its industry. Adhering to legal and ethical standards builds trust with employees, customers, and suppliers, enhancing the company's reputation.",
              },
              {
                heading: "HR Compliance",
                description:
                  "HR compliance involves following employment laws and policies related to hiring, wages, employee documentation, and benefits. It helps create a positive workplace environment and reduces the risk of HR complaints or legal issues.",
              },
              {
                heading: "Data Compliance",
                description:
                  "Businesses must collect, store, and manage data legally and securely to protect it from loss, theft, or misuse. Proper data compliance safeguards company reputation and ensures smooth operations.",
              },
              {
                heading: "Health and Safety Compliance",
                description:
                  "Applicable to all industries, this ensures a safe working environment for employees. Non-compliance can lead to accidents, illness, or costly workplace incidents.",
              },
            ],
          },
        ],
      },
    ],
  };
  const WhyEnsurekarData ={
    heading:"Why to choose Ensurekar for Private Limited Registration ",
    description:"",
    elements:[{ heading: "Expert Assistance", description: "EnsureKar offers professional guidance throughout the entire registration process, ensuring compliance with legal requirements.", imageUrl: "" },
    { heading: "Hassle-Free & Fast Service", description: "We handle everything from name approval to incorporation documents, ensuring a smooth and quick registration process.", imageUrl: "" },
    { heading: "Transparent & Affordable", description: "We provide clear, upfront pricing with no hidden fees, making the entire process cost-effective and stress-free.", imageUrl: "" }],
  }
  const FAQsData = {
    title: "FAQs",
    heading: "What Ensurekar offer you?",
    description: "",
    FAQs: [
      {question: " What regulations must a private limited company follow?",answer:"NA",},
      {question: "What is the cost of filing annual compliance for a Private Limited Company?",answer:"NA",},
      {question: "What is compliance in a Private Limited Company? ",answer:"NA",},
      {question: "What are the benefits of annual compliance?",answer:"NA",},
      {question: "Which form must be submitted to appoint a statutory auditor?",answer:"NA",},
      {question: "How should a company file its annual returns?",answer:"NA",},
      {question: "Why is business compliance important? ",answer:"NA",},
      {question: "What is annual compliance under the Companies Act?",answer:"NA",},
      {question: "What is the main purpose of compliance? ",answer:"NA",},
      {question: "Which form accompanies the company’s director report?",answer:"NA",},
      {question: " What are compliance services in India?",answer:"NA",},
      {question: "Are audited financial statements required for private limited companies’ annual filings?",answer:"NA",},
      {question: " What is the basic compliance of a company?",answer:"NA",},
      {question: "What is annual compliance?",answer:"NA",},
     
    ],
    imageUrl: faq_illus,
  };
  const TestimonialData = {
    title: "Testimonials",
    heading: "Ensurekar Customer Stories",
    description:
      "Discover the journey behind EnsureKar's success and how we’ve helped countless businesses thrive. Explore our stories of innovation, growth, and dedication.",
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
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} scrollToPlans={() => {}} />
      {/* <PlansSection planData={planData} /> */}
      <ServiceOverview OverviewData={OverviewData} />
      <WhyEnsurekarSection WhyEnsurekarData= {WhyEnsurekarData}  />
      <FAQsServicesSection FAQsData={FAQsData} />
      <TestimonialSectionAllServices TestimonialData={TestimonialData} />

    </>
  );
};

export default MCA_Compliances;
