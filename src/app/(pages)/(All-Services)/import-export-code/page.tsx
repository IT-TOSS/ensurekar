import React from "react";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import Rocket_With_Men from "../../../images/SGV-Types/Rocket-With-Men.svg";
import Company_People_Group from "../../../images/SGV-Types/Company-People-Group.svg";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import ServiceAdvantages from "@/app/components/Section/Advantages-All-Services";
import All_In_One_ServiceSection from "@/app/components/Section/All-in-One-All-Services";
import ServiceOverview from "@/app/components/Section/Service-Overview";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import TestimonialSectionAllServices from "@/app/components/Section/Testimonial-Section-All-Services";
import testimonial10 from "@/app/images/pages icons/Incoem tax Assesment/Male.png";
import testimonial9 from "@/app/images/pages icons/Incoem tax Assesment/Female.png";
import testimonial7 from "@/app/images/pages icons/Incoem tax Assesment/Male.png";
import testimonial8 from "@/app/images/pages icons/Incoem tax Assesment/Male.png";
import testimonial6 from "@/app/images/pages icons/Incoem tax Assesment/Female.png";
import StepByStep from "../../../images/SGV-Types/Step-By-Step.svg";
import productImage from "../../../images/recent_post_img1.png";


import TalkExpert from "./../../../images/SGV-Types/Talk-To-Our-Expert.svg";
import EnhancedBusinessCredibility from "../../../images/SGV-Types/Enhanced-Business-Credibility.svg";
import HandUserMoney from "../../../images/SGV-Types/Hand-User-Money.svg";

// Import Export Code Images
import Global_Market_Expansion from "./../../../images/Import_Export_code/Global_Market_Expansion.png";
import Access_to_Government_Schemes from "./../../../images/Import_Export_code/Access_to_Government_Schemes.png";
import No_Return_Filing from "./../../../images/Import_Export_code/No_Return_Filing.png";
import Simple_and_Quick_Process from "./../../../images/Import_Export_code/Simple_and_Quick_Process.png";
import No_Renewal_Required from "./../../../images/Import_Export_code/No_Renewal_Required.png";
import Simplified_Compliance from "./../../../images/Import_Export_code/Simplified_Compliance.png";
import Unlocks_Export_Import_Opportunities from "./../../../images/Import_Export_code/Unlocks_Export_Import_Opportunities.png";
import Government_Incentives_and_Subsidies from "./../../../images/Import_Export_code/Government_Incentives_and_Subsidies.png";
import Ease_of_Business_Operations from "./../../../images/Import_Export_code/Ease_of_Business_Operations.png";

import RegistrationGuide from "@/app/components/Section/Registration-Guide";
const ImportExportCode = () => {
  const BreadcrumbData = {
    title: "IEC Registration ",
    heading: "Importer Exporter Code Registration",
    description:'',
    bottomHeading:
      "Submit your IEC application seamlessly from anywhere in India.",
    image: "",
    subHeading: "Expand Your Business Globally: Quick IEC Registration in Just 2 Days",
    cartDetails:{
      id:21,
      name: "IEC (Import-Export Code)",
      price: 5000,
      quantity: 1,
      subtotal: 5000,
      image: productImage,
    }
  };
  const AdvantagesData = {
    title: "Where IEC Code is Required",
    heading: "Where IEC Code is Required",
    description:
      "An Import Export Code (IEC) is a 10-digit number required for businesses involved in importing or exporting in India. Issued by the DGFT (Directorate General of Foreign Trade) under the Ministry of Commerce, it doesn't require periodic filings or renewals. Importers need the IEC to clear customs and make payments to overseas banks, while exporters require it to send goods and receive payments. The IEC number is a vital requirement for any importer or exporter operating in India.",
    image: Rocket_With_Men,
    advantages: [
      {
        title: "Customs Clearance for Imports",
        description: "Required to clear goods through customs.",
        icon: <svg>...</svg>,
      },
      {
        title: "International Bank Transfers",
        description: "Necessary for processing overseas payments by importers.",
        icon: <svg>...</svg>,
      },
      {
        title: "Export Shipment Dispatch",
        description: "Used for dispatching goods for export.",
        icon: <svg>...</svg>,
      },
      {
        title: "Receiving Foreign Payments",
        description: "Needed to receive foreign currency payments through banks.",
        icon: <svg>...</svg>,
      },
      {
        title: "Global Market Entry",
        description: "Facilitates businesses in establishing a global presence by enabling international trade operations.",
        icon: <svg>...</svg>,
      },
    ],
  };
  const AllInOneData = {
    heading: "Why IEC Code is Required.",
    description: [
      "The Import Export Code (IEC) is essential for businesses engaging in international trade. It serves as a unique identification for companies exporting goods or importing products into India",
      "Here’s why it is required:",
      "1.	Mandatory for Imports/Exports: IEC is required to clear shipments at customs and receive payments from international transactions.",
      "2.	Government Benefits: Access to export incentives, duty exemptions, and subsidies.",
      "3.	Global Market Access: Enables businesses to expand internationally.",
      "4.	Regulatory Compliance: Ensures smooth trade operations in compliance with DGFT guidelines.",
      "Ensurekar simplifies IEC registration for seamless trade growth.",

    ],
    image: Company_People_Group,
  };
  const OverviewData = {
    heading: "",
    meta: "",
    introduction: {
      heading: "",
      description: [],
    },
    advantagesInfo: {
      heading: "Benefits ",
      meta: "of IEC Registration",
      description: "",
      advantages: [
        {
          imageUrl: Global_Market_Expansion.src,
          heading: "Global Market Expansion",
          details:
            "IEC helps businesses take their products or services to international markets, fostering global growth and opportunities.",
        },
        {
          imageUrl: Access_to_Government_Schemes.src,
          heading: "Access to Government Schemes",
          details:
            "With IEC registration, companies can avail numerous benefits and incentives from DGFT, Export Promotion Councils, and Customs under various export schemes like MEIS and SEIS.",
        },
        {
          imageUrl: No_Return_Filing.src,
          heading: "No Return Filing",
          details:
            "Once an IEC is issued, there is no requirement to file any returns or follow-up procedures to maintain its validity, making it hassle-free for businesses.",
        },
        {
          imageUrl: Simple_and_Quick_Process.src,
          heading: "Simple and Quick Process",
          details:
            "Obtaining an IEC code from DGFT is straightforward, usually taking 10 to 15 days. The application process is smooth and does not require proof of any export or import to apply.",
        },
        {
          imageUrl: No_Renewal_Required.src,
          heading: "No Renewal Required",
          details:
            "IEC is valid for the lifetime of the entity, with no renewal needed. Once issued, the code can be used for all import/export transactions.",
        },
        {
          imageUrl: Simplified_Compliance.src,
          heading: "Simplified Compliance",
          details:
            "IEC registration comes with no ongoing compliance obligations, making business operations easier to manage and focus on growth.",
        },
        {
          imageUrl: Unlocks_Export_Import_Opportunities.src,
          heading: "Unlocks Export/Import Opportunities",
          details:
            "With an IEC, businesses can clear customs, make international payments, and expand their operations into global markets effortlessly.",
        },
        {
          imageUrl: Government_Incentives_and_Subsidies.src,
          heading: "Government Incentives and Subsidies",
          details:
            "IEC holders are eligible to receive various government subsidies and promotions aimed at boosting international trade.",
        },
        {
          imageUrl: Ease_of_Business_Operations.src,
          heading: "Ease of Business Operations",
          details:
            "By having an IEC, businesses can quickly and legally start exporting and importing without complex legal hurdles.",
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
          blueText: "Eligibility ",
          end: "for Obtaining an IEC Code",
        },
        meta: "for Online Digital Signature Certificate (DSC)",

        subHeading: "",
        startingDescription: "",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              {
                heading: "For Importers",
                description:
                  "Importers must register for an Importer Exporter Code (IEC) to bring goods into India. The IEC is required during customs clearance, and banks will ask for it when processing international money transfers.",
              },
              {
                heading: "For Exporters",
                description:
                  "Exporters must obtain an IEC to export goods out of India. It is mandatory for customs clearance during shipments, and banks require the IEC when receiving payments in foreign currencies.",
              },
              {
                heading: "For Proprietors",
                description:
                  "Individual proprietors can apply for an IEC in their own name without the need to establish a company or incorporate a business entity.",
              },
              {
                heading: "Public Limited Companies",
                description:
                  "Public limited companies also require essential documents.",
              },
              {
                heading: "Societies, Trusts, and HUFs",
                description:
                  "Societies, trusts, and Hindu Undivided Families (HUFs) can also apply for an IEC",
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
          end: "for IEC (Import Export Code) Registration",
        },
        meta: "of Digital Signature Registration Certificate",
        subHeading:
          "To register for an IEC License, the following documents are necessary:",
        startingDescription: "",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              {
                heading: "",
                description: "Company PAN Card (not required for proprietors)",
              },
              {
                heading: "",
                description:
                  "Applicant’s PAN and Aadhaar Card (alternatively, driving license or voter ID)",
              },
              {
                heading: "",
                description: "Incorporation Certificate or Partnership Deed",
              },
              {
                heading: "",
                description:
                  "Address Proof of the business location (such as electricity bill, rent agreement, or sale deed)",
              },
              {
                heading: "",
                description:
                  "Cancelled Cheque or Banker’s Certificate from the current account in the company’s name.",
              },
            ],
          },
        ],
      },
    ],
  };
  const RegistrationGuideData = {
    title: "Steps",
    heading: "Step By Step For IEC code is Required ",
    description: "Looking to import or export goods from India? You'll need an IEC (Import Export Code) to operate legally. But don't worry, the process is surprisingly simple and completely online! Here's a breakdown of the steps:",
    image: StepByStep,
    guideList: [
      {
        heading: "Register on the DGFT Website (Directorate General of Foreign Trade)",
        description:
          "Head to https://dgft.gov.in, the official DGFT portal.Create a new user profile using your PAN number and business details.Once registered, log in and access the IEC online application form.",
      },
      {
        heading: "Fill Out the IEC Application Form",
        description:
          "Provide basic information like your personal details, contact information, and bank account details.Ensure accuracy to avoid delays or rejections.",
      },
      {
        heading: "Upload Required Documents",
        description:
          "Scan and upload documents like your PAN card, address proof, bank certificate, and a Digital Signature Certificate (DSC) if needed.Double-check all document uploads before submitting.",
      },
      {
        heading: "Pay the Application Fee",
        description:
          "The fee is minimal, but always refer to the latest fee structure on the DGFT website.You can conveniently pay through net banking or debit/credit cards.",
      },
      {
        heading:'Get Verified and Receive Your IEC Certificate',
        description:"The DGFT will verify your application and documents.	Upon approval, you can download your IEC certificate directly from the DGFT portal.",
      },
      {
        heading:'Bonus!',
          description:"Your IEC is valid for life with no renewal required. However, annual return filings and maintaining communication with customs authorities are essential."
      },
     
    ],
  };
  const ComplianceObligations = {
    title: "",
    heading: "Post-Registration Compliance and Obligations",
    description:
      "After obtaining your Import Export Code (IEC), there are several compliance requirements to ensure your business remains operational and aligned with regulations.",
    image: Rocket_With_Men,
    advantages: [
      {
        title: "Updating IEC Details",
        description: "If there are any changes to your business information, such as address, bank details, or the nature of business, you must update your IEC on the DGFT portal. Failing to update these details may result in deactivation of your IEC. Updates are required periodically, particularly between April and June each year.",
        icon: <svg>...</svg>,
      },
      {
        title: "Compliance with Foreign Trade Policy (FTP)",
        description: "To comply with India’s Foreign Trade Policy, businesses must meet specific obligations to avoid penalties and maintain smooth international trade operations.",
        icon: <svg>...</svg>,
      },
      {
        title: "Annual Filing Requirements",
        description: "Under the FTP 2023, businesses involved in export or import must file annual returns. Filing is essential to access benefits like the Advance Authorization or EPCG schemes. Failure to file annual returns may lead to IEC deactivation.",
        icon: <svg>...</svg>,
      },
      {
        title: "Record-Keeping and Reporting",
        description: "Businesses must maintain accurate records of all trade activities, including compliance with customs regulations, export controls, and tariff rules. Proper record-keeping ensures adherence to legal requirements and minimizes risks of penalties or legal disputes.",
        icon: <svg>...</svg>,
      },
      {
        title: "Cancellation or Surrender of IEC",
        description: 'If a business decides to discontinue export or import activities, the IEC can be cancelled or surrendered.•	Conditions for Cancellation: IEC can be cancelled if the business stops foreign trade or engages in non-compliant activities.•	Procedure for Surrender: Log in to the DGFT portal, navigate to the "IEC Profile Management" section under the "Services" tab, and select "Surrender of IEC." Once cancelled, the IEC becomes inactive for future trade but can be reactivated later if needed.By following these compliance guidelines, businesses can ensure smooth operations and avoid disruptions in their international trade activities.',
        icon: <svg>...</svg>,
      },
    ],
  };
  const RegisterStepsData = {
    title: "",
    heading: "Steps to Register your",
    meta: "IEC Code",
    description: "",
    steps: [
      { title: "Create Your Account", description: "" },
      { title: "Talk To Our Expert", description: "" },
      { title: "Provide Documents and Get a Certificate", description: "" },
    ],
    aboutSteps: [],
    footerMessage: "Simple, quick, and hassle-free!",
  };
  const FAQsData = {
    title: "FAQs",
    heading: "What Ensurekar offer you?",
    description: "",
    FAQs: [
      {
        question: "How to Download Your IEC Certificate?",
        answer: "NA",
      },
      {
        question: "How to Modify Your IEC Code?",
        answer: "NA",
      },
      {
        question: "How to Edit and Renew Your IEC?",
        answer: "NA",
      },
      {
        question:
          "Which DSC (Digital Signature Certificate) is Required for IEC Code?",
        answer: "NA",
      },
      {
        question: "How Can I Print My IEC Certificate?",
        answer: "NA",
      },
      {
        question:
          "What Are the Technical Requirements for Filing an IEC Number?",
        answer: "NA",
      },
      {
        question: "Is IEC Number Required for Service Exporters?",
        answer: "NA",
      },
      {
        question: "Who Issues the IEC?",
        answer: "NA",
      },
      {
        question: "Which Browsers Are Compatible with the DGFT Portal?",
        answer: "NA",
      },
      {
        question: "What Is the Validity of the IEC Number?",
        answer: "NA",
      },
    ],
  };
  const WhyEnsurekar = {
    heading: "Why to choose Ensurekar for  IEC CODE ?",
    description: "",
    elements:  [
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
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <ServiceAdvantages AdvantagesData={AdvantagesData} />
      <All_In_One_ServiceSection AllInOneData={AllInOneData} />
      <ServiceOverview OverviewData={OverviewData} />
      <RegistrationGuide RegistrationGuideData={RegistrationGuideData} />
      <ServiceAdvantages AdvantagesData={ComplianceObligations} />
      <div className="container stp-30 sbp-10 py-16">
        <p className="display-3 text-center  !leading-[130%]  text-bodyText mb-14 dark:text-sky-400">
          {" "}
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

export default ImportExportCode;
