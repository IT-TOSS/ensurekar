import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import WhoConsidered from "@/app/components/Section/Who-Considered";
import healthcare_section_img from "../../../../images/healthcare_section_img.png";
import React from "react";
import BenefitSection from "@/app/components/Section/Benefit-Section";
import All_In_One_ServiceSection from "@/app/components/Section/All-in-One-All-Services";
import Company_People_Group from "../../../../images/SGV-Types/Company-People-Group.svg";
import Rocket_With_Men from "../../../../images/SGV-Types/Rocket-With-Men.svg";
import testimonial10 from "../../../../images/testimonial10.png";
import testimonial9 from "../../../../images/testimonial9.png";
import testimonial7 from "../../../../images/testimonial7.png";
import testimonial8 from "../../../../images/testimonial8.png";
import testimonial6 from "../../../../images/testimonial6.png";
import manage_health_section_img from "../../../../images/manage_health_section_img.png";
import Image from "next/image";
import ServiceOverview from "@/app/components/Section/Service-Overview";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import TestimonialSectionAllServices from "@/app/components/Section/Testimonial-Section-All-Services";
import productImage from "../../../../images/recent_post_img1.png";

const GSTFiling = () => {
  const BreadcrumbData = {
    title: "GST Filing",
    heading: "GST Filing",
    description:
      "Simplify GST Return Filing: File GST returns before the due date effortlessly with the assistance of experienced professionals, ensuring accuracy and compliance. End-to-End GST Support: Get complete guidance for filing GST returns monthly, quarterly, or annually, streamlining your tax obligations with ease.",
    image: "",
    subHeading: "",
    items: [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "All Services",
        url: "/all-services",
      },
      {
        title: "GST & Other Indirect Tax",
        url: "/gst-and-other-indirect-tax",
      },
      {
        title: "GST Registration",
        url: "/gst-registration",
      },
    ],
    cartDetails:{
      id:8,
      name: "GST Filings",
      price: 20000,
      quantity: 1,
      subtotal: 20000,
      image: productImage,
    }
  };
  const WhoConsideredData = {
    title: "",
    heading: "GST Return Filing ",
    description: "GST return filing is a mandatory process for businesses under the GST system. It involves submitting details of sales, purchases, and tax collected. Timely and accurate filing ensures compliance and helps in smooth tax management. Failure to file returns on time can result in penalties.",
    imageurl: healthcare_section_img,
    consideretion: [
      {icon: "", heading: "GST filing reports sales, purchases, and tax data.",description:"",},
      {icon: "", heading: "Filing frequency depends on turnover and GST type.",description:"",},
      {icon: "", heading: "Financial summaries like invoices are required.",description:"",},
      {icon: "", heading: "Timely filing prevents penalties.",description:"",},
   
    ],
  };
  const BenefitData = {
    title: "",
    heading: "Benefits of Timely GST Return Submission",
    subHeading: "",
    benefitsData: {
      heading: "",
      description: "",
      benefits: [
        {
          icon: "",
          title: "Avoiding Penalties",
          description: "Irrespective of the tax liability, all businesses registered under the GST Act should file their GST returns online. Failure to file GST returns on time may result in penalties and interest at a rate of up to 18% per year. Late fees of ₹100 up to ₹5000 are being charged for late filing.",
        },
        {
          icon: "",
          title: "Maintaining Compliance Status",
          description: "Filing GST returns before the deadline helps to avoid notice from the GST department and maintains compliance. Any regularities or inconsistencies in filing returns may reflect negatively on business compliance.",
        },
        {
          icon: "",
          title: "Claim Input Tax Credit",
          description: "Filing GST returns on time helps businesses claim input tax credit. This allows them to easily deduct payable tax on overall sales and the tax paid on purchases. Businesses can use this credit by filing GST returns on time.",
        },
        {
          icon: "",
          title: "Benefit From Government Initiatives",
          description: "Government-backed schemes and incentives are provided to businesses and individuals who file GST returns on time. This prevents imposing interest and penalties. In most cases, businesses that consistently file GST returns are eligible for government initiatives that include faster processing of refunds.",
        },
        {
          icon: "",
          title: "Improved Business Reputation",
          description: "On-time GST returns reflect the commitment of the business entity to comply with the rules and regulations of the government. It also establishes a reputation for being responsible and trustworthy. This has a positive impact on consumers, partners, and stakeholders when it comes to investment.",
        },
      ],
    },
  };
  const AllInOneData = {
    title: "GST Filing",
    heading: "Why GST (Good and Service Tax) Filing is Required?",
    description: [
      "GST filing is a legal requirement for businesses in India. It's like filing your taxes, but for goods and services. By filing your GST returns on time, you:",
      "•	Stay Legal: Avoid penalties and legal trouble.",
      "•	Claim Tax Benefits: Get credit for the taxes you've paid on purchases.",
      "•	Maintain Accurate Records: Keep track of your business's financial health.",
      "•	Contribute to the Economy: Help the government collect taxes",
      
    ],
    image: Company_People_Group,
  };
  const OverviewData = {
    heading: "",
    meta: "",
    introduction: {
      heading: "",
      description: [""],
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
          blueText: "Document Require ",
          end: "   For GST Return Filing ",
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
                description: "GSTIN of the customer",
              },
              {
                heading: "",
                description: "GST invoices",
              },
              {
                heading: "",
                description: "Place of supply details",
              },
              {
                heading: "",
                description: "Invoices for B2B and B2C services",
              },
              {
                heading: "",
                description: "Bill numbers",
              },
              {
                heading: "",
                description: "Credit or debit notes",
              },
              {
                heading: "",
                description: "HSN summary for goods sold",
              },
              {
                heading: "",
                description: "Applicable amounts for IGST, CGST, and SGST",
              },
              {
                heading: "",
                description: "Necessary GST return forms",
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
          blueText: "GST Return",
          end: "Filing Checklist",
        },
        subHeading: "",
        startingDescription:
          "Here’s a comprehensive checklist for filing your GST returns online. Ensure you have the following documents and information ready for a smooth filing process:",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              {
                heading: "",
                description: "Supply bills",
              },
              {
                heading: "",
                description: "GST refund details",
              },
              {
                heading: "",
                description: "Complete list of tax invoices",
              },
              {
                heading: "",
                description: "Information on pending Input Tax Credit (ITC)",
              },
              {
                heading: "",
                description: "Details on credit notes or cancelled sales",
              },
              {
                heading: "",
                description: "Information on returned goods",
              },
              {
                heading: "",
                description: "Verification of reverse charge credits",
              },
              {
                heading: "",
                description: "Cross-checking of purchase bills",
              },
              {
                heading: "",
                description: "Details on sales reversed after GST payment",
              },
              {
                heading: "",
                description:
                  "Information on GST reversals related to purchases",
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
          blueText: "Eligibility Criteria ",
          end: "for GST Return Filing",
        },
        subHeading: "",
        startingDescription:
          "Below are the eligibility criteria for filing GST returns. Business owners and dealers registered under the Goods and Services Tax Act of 2017 must file returns based on their business activities and transactions. The following entities are required to file GST returns:",
        endingDescription:
          "Filing a NIL GST return is mandatory, even if there are no business activities for the month.",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              {
                heading: "",
                description:
                  "Regular businesses registered under the Goods and Services Tax Act of 2017",
              },
              {
                heading: "",
                description: "Entities registered under the composition scheme",
              },
              {
                heading: "",
                description:
                  "Input Service Distributors, including individuals or entities deducting TDS and TCS",
              },
              {
                heading: "",
                description:
                  "Businesses or individuals involved in supply chains",
              },
              {
                heading: "",
                description:
                  "Taxpayers generating annual revenue exceeding ₹1.5 crore",
              },
              {
                heading: "",
                description:
                  "Non-Resident Indians conducting business activities with Indian citizens",
              },
              {
                heading: "",
                description: "E-commerce business owners and corporations",
              },
              {
                heading: "",
                description:
                  "Individuals holding a Unique Identification Number (UIN) Filing a NIL GST return is mandatory, even if there are no business activities for the month.",
              },
            ],
          },
        ],
      },
    ],
  };

  const FAQsData = {
    title: "FAQs",
    heading: "What Ensurekar offer you?",
    description: "",
    FAQs: [
      {
        question: "What if I miss a GST return deadline?",
        answer: "NA",
      },
      {
        question: "How can I check my GST return filing status?",
        answer: "NA",
      },
      {
        question: "Do you need a CA for GST filing?",
        answer: "NA",
      },
      {
        question: "What is the filing period for GST?",
        answer: "NA",
      },
      {
        question: "Is the GST filing monthly or quarterly?",
        answer: "NA",
      },
      {
        question: "Is monthly GST return mandatory?",
        answer: "NA",
      },
      {
        question: "How do I file a zero return in GST?",
        answer: "NA",
      },
      {
        question: "Can I file my own GST returns?",
        answer: "NA",
      },
      {
        question: "What is the time limit for GST return rectification?",
        answer: "NA",
      },
    ],
  };
  const WhyEnsurekar = {
    heading: "Why to choose Ensurekar for GST FILING",
    description: "",
    elements: [
      {
        heading: "Expert Assistance",
        description:
          "EnsureKar offers professional guidance throughout the entire registration process, ensuring compliance with legal requirements.",
        imageUrl: "",
      },
      {
        heading: "Hassle-Free & Fast Service",
        description:
          "We handle everything from name approval to incorporation documents, ensuring a smooth and quick registration process.",
        imageUrl: "",
      },
      {
        heading: "Transparent & Affordable",
        description:
          "We provide clear, upfront pricing with no hidden fees, making the entire process cost-effective and stress-free.",
        imageUrl: "",
      },
    ],
  };
  const TestimonialData = {
    title: "Testimonials",
    heading: "Ensurekar Customer Stories",
    description:
      "Startups thrive with Ensurekar. Their flexible payroll solutions have been instrumental in our journey, providing the support.",
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
  const DocumentsRequiredData = {
    title: "Types of GST ",
    heading: "Types of GST Returns and Their Due Dates ",
    description: "",
    tableData: {
      tableHeading: ["GST Form", "Due Date"],
    },
    tableRows: [
      { form: "GSTR-1", dueDate: "10 of Every Month" },
      { form: "GSTR-3B", dueDate: "20 of Every Month" },
      {
        form: "GSTR-9 (Turnover limit above -₹2cr)",
        dueDate: "Annual, Due on 31 December",
      },
      {
        form: "GSTR-9C (Turnover limit above -₹5cr)",
        dueDate: "Annual, Due on 31 December",
      },
      { form: "GSTR-10", dueDate: "Within 3 months of GST cancellation" },
      { form: "GSTR-11", dueDate: "For UIN Holders, As Applicable" },
    ],
  };
  return (
    <>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData}    />
      <WhoConsidered WhoConsideredData={WhoConsideredData} />
      <BenefitSection BenefitData={BenefitData} />
      <All_In_One_ServiceSection AllInOneData={AllInOneData} />
      <ServiceOverview OverviewData={OverviewData} />

      {/* types of gst */}
      <section className="stp-30 sbp-30">
        <div className="container grid grid-cols-12 gap-6 max-xxl:overflow-hidden">
          <div className="col-span-12 md:col-span-6">
            <div className="flex justify-start items-start">
              <div className="max-w-[600px] flex justify-start items-start flex-col">
                <p className="bg-p1 py-3 px-5 rounded-full text-white">
                  {DocumentsRequiredData.title}
                </p>

                <h1 className="display-4 pt-4 pb-6 dark:text-white">
                  {DocumentsRequiredData.heading}
                </h1>

                <p className="text-bodyText pb-8">
                  {DocumentsRequiredData.description}
                </p>

                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      {DocumentsRequiredData.tableData.tableHeading.map(
                        (heading, index) => (
                          <th key={index} className="px-4 py-2 border dark:text-white">
                            {heading}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {DocumentsRequiredData.tableRows.map((row, index) => (
                      <tr key={index}>
                        <td className="border px-4 py-2 dark:text-white">{row.form}</td>
                        <td className="border px-4 py-2 dark:text-white">{row.dueDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-5 xxl:col-start-8 flex justify-center items-center">
            <Image src={manage_health_section_img} alt="image" />
          </div>
        </div>
      </section>
      <FAQsServicesSection FAQsData={FAQsData} />
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
      <TestimonialSectionAllServices TestimonialData={TestimonialData} />
    </>
  );
};

export default GSTFiling;
