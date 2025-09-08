import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import ServiceCovered from "@/app/components/Section/Service/Service-Covered";
import WhoConsidered from "@/app/components/Section/Who-Considered";
import React from "react";
// import healthcare_section_img from "../../../../images/healthcare_section_img.png";

import healthcare_section_img from "../../../../images/TDS and TCS Certificates.npm.jpeg";

import BenefitSection from "@/app/components/Section/Benefit-Section";
import DocumentsRequired from "@/app/components/Section/Documents-Required";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import faq_illus from "../../../../images/faq_illus.png";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import TestimonialSectionAllServices from "@/app/components/Section/Testimonial-Section-All-Services";
import testimonial10 from "@/app/images/pages icons/Incoem tax Assesment/Male.png";
import testimonial9 from "@/app/images/pages icons/Incoem tax Assesment/Female.png";
import testimonial7 from "@/app/images/pages icons/Incoem tax Assesment/Male.png";
import testimonial8 from "@/app/images/pages icons/Incoem tax Assesment/Male.png";
import testimonial6 from "@/app/images/pages icons/Incoem tax Assesment/Female.png";
import productImage from "../../../../images/recent_post_img1.png";

import Rocket_With_Men from "../../../../images/SGV-Types/Rocket-With-Men.svg";
import Company_People_Group from "../../../../images/SGV-Types/Company-People-Group.svg";
import Consequences from "@/app/components/Section/Consequences";
import Deadline from "@/app/components/Section/Deadline";
import FeaturesSection from "@/app/components/Section/Features-Section";
import ServiceAdvantages from "@/app/components/Section/Advantages-All-Services";
import All_In_One_ServiceSection from "@/app/components/Section/All-in-One-All-Services";
import Image from "next/image";

import TalkExpert from "./../../../../images/SGV-Types/Talk-To-Our-Expert.svg";
import EnhancedBusinessCredibility from "../../../../images/SGV-Types/Enhanced-Business-Credibility.svg";
import HandUserMoney from "../../../../images/SGV-Types/Hand-User-Money.svg";


const TDSReturnFilings = () => {
  const BreadcrumbData = {
    title: "TDS Return Filings",
    heading: "TDS Return Filings",
    subHeading: "",
    description:
      "Ensure timely and accurate filing of your TDS/TCS returns with our expert services. Our top accountants and tax experts handle e-filing to help you avoid penalties and ensure compliance.",
    image: "",
    cartDetails:{
      id:13,
      name: "TDS/TCS E-Filing",
      price: 500,
      quantity: 1,
      subtotal: 500,
      image: productImage,
    }
  };
  const WhoConsideredData = {
    title: "TDS and TCS Certificates",
    heading: "Importance of TDS and TCS Certificates",
    description:
      "TDS and TCS certificates are essential for both the deductor/collector and taxpayer, playing a key role in ensuring tax compliance and reconciliation.",
    imageurl: healthcare_section_img,
    consideretion: [
      {
        icon: "",
        heading: "Proof of Compliance",
        description:
          "TDS/TCS certificates act as evidence that the deductor/collector has met their responsibility to deduct or collect tax at source, critical for audits and tax assessments.",
      },
      {
        icon: "",
        heading: "Accurate Tax Records: ",
        description:
          "These certificates provide a clear record of the taxes deducted or collected, supporting accurate tax accounting and reconciliation.",
      },
      {
        icon: "",
        heading: "Avoidance of Penalties",
        description:
          "Issuing TDS/TCS certificates on time helps prevent penalties related to non-compliance or late tax payments.",
      },
      {
        icon: "",
        heading: "Facilitates Tax Deposits",
        description:
          "The certificates offer the necessary details for the deductor/collector to deposit the deducted or collected taxes with the government.",
      },
    ],
  };
  const AdvantagesData = {
    title: "",
    heading: "What is TDS and Deducted by Whom?",
    description:
      "Under the Income Tax Act, individuals or entities making specified payments must deduct Tax Deducted at Source (TDS) while making those payments. However, exceptions apply based on certain conditions, such as the payer's turnover or the type of payment.",
    image: Rocket_With_Men,
    advantages: [
      {
        title: "General Rule for TDS Deduction",
        description:
          "TDS must be deducted on specified payments as per the Income Tax Act. However, individuals or HUFs whose business turnover is below ₹1 crore or professional receipts are under ₹50 lakhs are exempt from this requirement, except in specific cases.",
        icon: <svg>...</svg>,
      },
      {
        title: "TDS on Rent Payments",
        description:
          "Individuals or HUFs paying rent exceeding ₹20,000 per month must deduct TDS at 2% / 5% / 10% depending on case to case basis, even if they are not subject to a tax audit. Importantly, they are not required to obtain a TAN for this purpose.",
        icon: <svg>...</svg>,
      },
      {
        title: "TDS Rates for Employers and Banks",
        description:
          "Employers deduct TDS based on the applicable income tax slab rates of the employee. Banks deduct TDS at 10% on interest income, which increases to 20% if the PAN is not provided.",
        icon: <svg>...</svg>,
      },
      {
        title: "Submitting Proofs to Avoid TDS",
        description:
          "If your total income is below the taxable limit, you can submit investment proofs to your employer or Form 15G/15H to the bank to avoid TDS deduction on your salary or interest income, respectively.",
        icon: <svg>...</svg>,
      },
      {
        title: "Claiming Refunds for Excess TDS",
        description:
          "If TDS is deducted despite your income being below the taxable limit, you can file an income tax return to claim a refund. This applies if proofs were not submitted on time or deductions were made erroneously.",
        icon: <svg>...</svg>,
      },
    ],
  };
  const BenefitData = {
    title: "",
    heading: "Benefits of TDS filing",
    subHeading: "",
    benefitsData: {
      heading: "",
      description: "",
      benefits: [
        {
          icon: "",
          title: "Form 26Q",
          description: "TDS on all payments except salaries.",
        },
        {
          icon: "",
          title: "Form 24Q",
          description: "TDS on salary.",
        },
        {
          icon: "",
          title: "Form 27Q",
          description:
            "TDS on all payments made to non-residents except salaries.",
        },
        {
          icon: "",
          title: "Form 26QB",
          description: "TDS on the sale of property.",
        },
        {
          icon: "",
          title: "Form 26QC",
          description: "TDS on rent.",
        },
      ],
    },
  };

  const FAQsData = {
    title: "FAQs",
    heading: "",
    description: "",
    FAQs: [
      { question: "What is TAN?", answer: "NA" },
      { question: "What is TDS return filing?", answer: "NA" },
      {
        question: "What are the penalties for late TCS return filing?",
        answer: "NA",
      },
      {
        question: "What is the due date for filing TCS returns?",
        answer: "NA",
      },
      { question: "What is TCS (Tax Collected at Source)?", answer: "NA" },
      {
        question:
          "Where can I obtain a TCS certificate, and why is it important?",
        answer: "NA",
      },
      { question: "How do I calculate TCS collection?", answer: "NA" },
      { question: "What is the concept of TDS?", answer: "NA" },
      {
        question: "What happens if TDS is not deducted on time?",
        answer: "NA",
      },
      { question: "How long does it take to get a TDS refund?", answer: "NA" },
    ],
  };
  const WhyEnsurekar = {
    heading: "Why to choose Ensurekar for TDS/TCS Registration ",
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
  const ConsequencesData = {
    title: "Consequences",
    heading: "Consequences of Missing Payment Deadlines",
    description: "",
    onlineProcesses: [
      {
        icon: "",
        heading: "Penalty for Late payment",
        description:
          "A penalty of 1% is levied on outstanding TDS/TCS amount for every delay",
      },
      {
        icon: "",
        heading: "Interest charges",
        description:
          "Interest is charged on the outstanding TDS/TCS amount at 12% per annum from the due date of payment until the date of actual payment.",
      },
      {
        icon: "",
        heading: "Prosecution",
        description:
          "In severe cases of non-compliance, legal action may be initiated against the deductor or collector of TDS/TCS. This could involve prosecution under the Income Tax Act, leading to fines or imprisonment.",
      },
    ],
  };
  const DeadlineData = {
    title: "Deadline",
    heading: "Due Date of Filing TDS and TCS Forms",
    subHeading: "The deadlines for payment of TDS/TCS are as follows:",
    DeadlinesData: {
      heading: "",
      description: "",
      benefits: [
        {
          title: "Quarterly payments",
          description:
            "The deadline for TDS/TCS for each quarter is the 30 of the coming month  ",
        },
        {
          title: "Annual payments",
          description:
            "The deadline for TDS/TCS for the financial year is the 31 of May of the next year",
        },
      ],
    },
    bottomText: "",
  };
  const data = [
    {
      formNo: "Form 26Q",
      transactions: "TDS on all payments except salaries",
      dueDate:
        "Q1 – 31st July\nQ2 – 31st October\nQ3 – 31st January\nQ4 – 31st May",
    },
    {
      formNo: "Form 24Q",
      transactions: "TDS on Salary",
      dueDate:
        "Q1 – 31st July\nQ2 – 31st October\nQ3 – 31st January\nQ4 – 31st May",
    },
    {
      formNo: "Form 27Q",
      transactions: "TDS on all payments made to non-residents except salaries",
      dueDate:
        "Q1 – 31st July\nQ2 – 31st October\nQ3 – 31st January\nQ4 – 31st May",
    },
    {
      formNo: "Form 26QB",
      transactions: "TDS on sale of property",
      dueDate: "30 days from the end of the month in which TDS is deducted",
    },
    {
      formNo: "Form 26QC",
      transactions: "TDS on rent",
      dueDate: "30 days from the end of the month in which TDS is deducted",
    },
  ];
  const AllInOneData = {
    title: "",
    heading: "Late Fees For Non-Filing of TDS/TCS Return",
    image: Company_People_Group,
    description: [
      "A late fee of ₹200 per day is imposed under Section 234E for failing to submit TDS/TCS returns to the Income Tax Department (ITD) on time. This fee accrues daily until the delay is resolved, but it cannot exceed the total TDS amount. It is essential to pay this late fee before filing the TDS/TCS return.",
    ],
  };
  return (
    <>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <ServiceAdvantages AdvantagesData={AdvantagesData} />

      <WhoConsidered WhoConsideredData={WhoConsideredData} />
      <BenefitSection BenefitData={BenefitData} />
      <section className="stp-30 sbp-30">
        <h1 className="display-4 mb-5 lg:pb-6 text-center">
          Due Date of Filing TDS and TCS Forms
        </h1>

        <div className="container mt-10 flex flex-wrap justify-center items-start ">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-teal-100">
                <th className="text-left p-3 border border-gray-300">
                  Form No
                </th>
                <th className="text-left p-3 border border-gray-300">
                  Transactions reported in the return
                </th>
                <th className="text-left p-3 border border-gray-300">
                  Due date
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50">
                  <td className="p-3 border border-gray-300">{row.formNo}</td>
                  <td className="p-3 border border-gray-300">
                    {row.transactions}
                  </td>
                  <td className="p-3 border border-gray-300 whitespace-pre-line">
                    {row.dueDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* <Deadline DeadlineData={DeadlineData} /> */}
      <All_In_One_ServiceSection AllInOneData={AllInOneData} />

      {/* <Consequences ConsequencesData={ConsequencesData} /> */}
      <section className="stp-30 sbp-30 bg-softBg1 overflow-hidden">
        <div className="xxl:mr-[calc((100%-6px)/2)] max-xxl:container grid grid-cols-12 lg:gap-6 xxl:gap-32">
          <div className="col-span-12 lg:col-span-6 flex justify-start items-start self-stretch max-lg:order-2">
            <Image
              src={Company_People_Group}
              alt="image"
              className="w-full h-full"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 flex justify-center items-start flex-col">
           

            <h2 className="display-4 pt-4 pb-6">What is a TDS Certificate?</h2>

            <p className="text-bodyText">Form 16, Form 16A, are TDS certificates. TDS certificates have to be issued by a person deducting TDS to the assesses from whose income TDS was deducted while making payment. For instance, banks issue Form 16A to the depositor when TDS is deducted on interest from fixed deposits. Form 16 is issued by the employer to the employee.</p>
          
          <div className="container mt-10 flex flex-wrap justify-center items-start">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-teal-100">
                  <th className="text-left p-3 border border-gray-300">Form</th>
                  <th className="text-left p-3 border border-gray-300">Certificate of</th>
                  <th className="text-left p-3 border border-gray-300">Frequency</th>
                  <th className="text-left p-3 border border-gray-300">Due Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-gray-50">
                  <td className="p-3 border border-gray-300">Form 16</td>
                  <td className="p-3 border border-gray-300">TDS on salary payment</td>
                  <td className="p-3 border border-gray-300">Yearly</td>
                  <td className="p-3 border border-gray-300">31st May</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50">
                  <td className="p-3 border border-gray-300">Form 16A</td>
                  <td className="p-3 border border-gray-300">TDS on non-salary payments</td>
                  <td className="p-3 border border-gray-300">Quarterly</td>
                  <td className="p-3 border border-gray-300">15 days from the due date of filing the return</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50">
                  <td className="p-3 border border-gray-300">Form 16B</td>
                  <td className="p-3 border border-gray-300">TDS on sale of property</td>
                  <td className="p-3 border border-gray-300">Every transaction</td>
                  <td className="p-3 border border-gray-300">15 days from the due date of filing the return</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50">
                  <td className="p-3 border border-gray-300">Form 16C</td>
                  <td className="p-3 border border-gray-300">TDS on rent</td>
                  <td className="p-3 border border-gray-300">Every transaction</td>
                  <td className="p-3 border border-gray-300">15 days from the due date of filing return</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </section>
      <FAQsServicesSection FAQsData={FAQsData} />
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
      <TestimonialSectionAllServices TestimonialData={TestimonialData} />
    </>
  );
};

export default TDSReturnFilings;
