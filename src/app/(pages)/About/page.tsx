"use client";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/About";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Ensurekar_developer from "../../images/accupay_developer.png";
import award_element from "../../images/award_element.png";
import aboutVideoTemplate from "../../images/aboutVideoImg.png";
import {
  ArrowUpRight,
  Binoculars,
  ChatCentered,
  CheckCircle,
  Desktop,
  Handshake,
  Headphones,
  User,
  UsersThree,
} from "phosphor-react";
import award_icon from "../../images/award_icon.png";
import CounterSection from "@/app/components/Section/Counter-Section";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-Section";
import TestimonialSection from "@/app/components/Section/Testimonial-Section";
import PricingSection from "@/app/components/Section/Pricing-Section";

const About = () => {
  const CounterSectionData = [
    { number: 150, text: "Companies Registration" },
    { number: 5000, text: "Customers" },
    { number: 110, text: "Recognized Startup" },
  ];
  const BreadcrumbData = {
    title: "About Us",
    heading: "Work With ENSUREKAR",
    description:
      "Welcome to ensurekar, where You get every solution under one roof, from financial, Tax and Legal.",
    image: aboutVideoTemplate,
    video: "",
  };
  const AboutStory = {
    title: "Ensurekar Story",
    heading: "In 2018, An exciting journey began with a daring vision.",
    messageText: "message from our ceo.",
    message:
      "A successful team requires members with complementary skill sets.",
    ceoData: {
      ceoName: "Sa Kibb",
      ceoPosition: "CEO Ensurekar",
      profileImage: Ensurekar_developer,
    },
    expalinData: [
      {
        title: "Who We Are",
        description:
          "Welcome to Ensurekar's tech-driven platform for startups and thriving businesses! 🌱 Our single window platform provides services like Incorporation, government registrations, accounting, documentation, and annual compliance. We've associated with Incubation centers and Financial Institutions, to provide you with mentorship, guidance, networking, and funding through a single window, at one click 💰 ⚖",
      },
      {
        title: "Our Mission",
        description:
          "Ensurekar is providing Economic solutions on a single click, Through Virtual CFO to Individuals, startups, and businesses. Every solution is under one roof. Our mission is to simplify and streamline the journey of entrepreneurship by providing accessible and affordable business solutions. We are dedicated to becoming the cornerstone of support for both aspiring and established entrepreneurs, offering a comprehensive range of services that cover the entire spectrum of business needs.",
      },
      {
        title: "Expert Team",
        description:
          "Our team of experienced professionals brings a wealth of knowledge to every client interaction. From payroll processing to financial advisory, we have the expertise to guide your business.",
      },
    ],
  };
  const ValuesData = {
    title: "Our Values",
    heading: "At Ensurekar, Our Values are the foundation of everything we do.",
    description:
      "They reflect our commitment to excellence, integrity and client success",
    values: [
      {
        title: "Integrity",
        description:
          "We are transparent and do the right thing for the right reason",
        icon: <Handshake weight="fill" />,
      },
      {
        title: "Accountability",
        description:
          "We take ownership of outcomes and deliver on our commitments",
        icon: <CheckCircle weight="fill" />,
      },
      {
        title: "Diversity",
        description: "We seek and leverage differences and unique perspectives",
        icon: <UsersThree weight="fill" />,
      },
      {
        title: "Customer Centricity",
        description:
          "We start with the customer in everything we do. We are committed to providing the best possible service to our customers.",
        icon: <User weight="fill" />,
      },
    ],
  };
  const AwardsData = {
    title: "Our Awards",
    heading: "Award & Achievement",
    awards: [
      {
        title: "Startup India Recognised",
        description: "",
      },
      {
        title: "India's 5000 Best MSME",
        description: "",
      },
      {
        title: "Funded by Startup India",
        description: "",
      },
      {
        title: "Awarded by E-SUMMIT Bhopal",
        description: "",
      },
      {
        title: "Jury in Satna Incubation Centre",
        description: "",
      },
    ],
  };

  return (
    <>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />

      <section className="stp-30 sbp-30">
        <div className="container grid grid-cols-12 max-lg:gap-6">
          <div className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col justify-center items-start">
            <p className="bg-p1 py-3 px-5 rounded-full text-white">
              {AboutStory.title}
            </p>
            <h1 className="display-4 pt-4 pb-6 dark:text-white">{AboutStory.heading}</h1>
            <p className="uppercase text-bodyText font-medium text-base lg:text-xl dark:text-white">
              {AboutStory.messageText}
            </p>
            <p className="heading-4 xl:text-[32px] pt-4 pb-6 dark:text-white">
              {AboutStory.message}
            </p>
            <div className="flex justify-start items-center gap-3">
              <Image
                src={AboutStory.ceoData.profileImage}
                alt="image"
                className="rounded-full"
              />
              <div className=" dark:text-white">
                <p>{AboutStory.ceoData.ceoName}</p>
                <p className="text-bodyText text-sm dark:text-white">
                  {AboutStory.ceoData.ceoPosition}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-start-7 col-span-12 md:col-span-6 flex flex-col gap-6 lg:gap-10 max-md:pt-6">
            {AboutStory.expalinData.map((data, index) => (
              <div key={index} className="border-b pb-6 lg:pb-10 dark:text-white">
                <h4 className="heading-4 pb-6 dark:text-white">{data.title}</h4>
                <p className="text-bodyText dark:text-white">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stp-30 sbp-30 bg-softBg1">
        <div className="container">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center max-xxl:overflow-hidden">
              <div className="max-w-[700px] text-center flex justify-center items-center flex-col">
                <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white">
                  {ValuesData.title}
                </p>

                <h1 className="display-4 pt-4 pb-4 lg:pb-6">
                  {ValuesData.heading}
                </h1>

                <p className="text-bodyText">{ValuesData.description}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 stp-15">
            {ValuesData.values.map((data, index) => (
              <div
                key={index}
                className="col-span-12 min-[450px]:col-span-6 md:col-span-3 flex justify-center items-center flex-col"
              >
                <div className="text-6xl text-s1">{data.icon}</div>
                <h4 className="heading-4 pb-4 pt-3">{data.title}</h4>
                <p className="pb-5 text-center">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stp-30 sbp-30">
        <div className="container grid grid-cols-12 gap-6">
          <div className="flex flex-col justify-star items-start col-span-12 min-[500px]:col-span-6 lg:col-span-5 max-[500px]:pb-15">
            <p className="bg-p1 py-3 px-5 rounded-full text-white">
              {AwardsData.title}
            </p>
            <h2 className="display-4 pt-3 dark:text-white">{AwardsData.heading}</h2>
            <div className="flex flex-col justify-end items-start lg:items-end relative w-full">
              <Image
                src={award_element}
                alt="image"
                className="absolute min-[500px]:-bottom-14 lg:bottom-0 min-[500px]:right-0 xl:right-20 bottom-0 right-4"
              />
              <p className="text-[60px] md:text-[100px] xl:text-[150px] font-bold !leading-none text-outline -rotate-12 min-[500px]:-rotate-45 min-[500px]:pt-28 pt-8 lg:pt-40">
                Award
              </p>
              <p className="text-s1 text-[60px] md:text-[100px] xl:text-[150px] font-bold leading-none -rotate-12 min-[500px]:-rotate-45 min-[500px]:max-lg:pt-6 lg:pr-0 xl:pr-11">
                Award
              </p>
            </div>
          </div>
          <div className="col-span-12 min-[500px]:col-span-6 lg:col-start-7 flex flex-col justify-start items-start gap-6 lg:gap-10 relative">
            {AwardsData.awards.map((data, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-6 lg:pb-10 w-full group relative"
              >
                <div className="">
                  <p className="heading-4 group-hover:text-s2 duration-500 dark:text-white">
                    {data.title}
                  </p>
                  {data.description && <p>{data.description}</p>}
                </div>
                <Link
                  href="/"
                  className="p-3 rounded-full bg-s1 text-2xl text-white group-hover:bg-s2 duration-500 !leading-[0]"
                >
                  <ArrowUpRight />
                </Link>
                <div className="absolute top-4 lg:top-0 left-10 xl:left-1/2 w-[150px] lg:w-[250px] bg-s2 py-10 flex flex-col justify-center items-center border border-mainTextColor group-hover:visible group-hover:opacity-100 group-hover:z-10 group-hover:translate-y-4 invisible opacity-0 -translate-y-4 duration-500">
                  <Image src={award_icon} alt="image" />
                  <h4 className="heading-4 max-w-[100px] text-center pt-8">
                    {data.title}
                  </h4>
                </div>
              </div>
            ))}
           
          </div>
        </div>
      </section>

      <CounterSection CounterSectionData={CounterSectionData} />

      <WhyEnsurekarSection />
      <TestimonialSection />
      <PricingSection />

      <section className="sbp-30 stp-30">
        <div className="container">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center max-xxl:overflow-hidden">
              <div className="max-w-[700px] text-center flex justify-center items-center flex-col">
                <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white">
                  Contact
                </p>

                <h1 className="display-4 pt-4 pb-4 lg:pb-6 dark:text-white">
                  Questions? Meet Ansawer
                </h1>

                <p className="text-bodyText dark:text-white">
                  Startups thrive with Ensurekar. Their flexible payroll
                  solutions have been instrumental in our journey, providing the
                  support
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 stp-15">
            <div className="col-span-12 min-[450px]:col-span-6 md:col-span-3">
              <div className="flex justify-center items-center flex-col">
                <div className="text-7xl text-s1">
                  <Binoculars weight="fill" />
                </div>
                <h4 className="heading-4 pb-4 pt-3 dark:text-white">Compare Ensurekar</h4>
                <p className="pb-5 text-center dark:text-white">
                  Explore how Ensurekar stands out. Check our comparison.
                </p>
                <Link href="" className="text-s1 underline font-medium">
                  Compare Ensurekar
                </Link>
              </div>
            </div>
            <div className="col-span-12 min-[450px]:col-span-6 md:col-span-3">
              <div className="flex justify-center items-center flex-col">
                <div className="text-7xl text-s1">
                  <Desktop weight="fill" />
                </div>
                <h4 className="heading-4 pb-4 pt-3 dark:text-white">Explore The Demo</h4>
                <p className="pb-5 text-center dark:text-white">
                  Curious about our services? Request a demo to experience
                  firsthand
                </p>
                <Link href="/" className="text-s1 underline font-medium">
                  {" "}
                  See Demo{" "}
                </Link>
              </div>
            </div>
            <div className="col-span-12 min-[450px]:col-span-6 md:col-span-3">
              <div className="flex justify-center items-center flex-col">
                <div className="text-7xl text-s1">
                  <Headphones weight="fill" />
                </div>
                <h4 className="heading-4 pb-4 pt-3 dark:text-white">Give Us a Ring</h4>
                <p className="pb-5 text-center dark:text-white">
                  Monday through Friday from 6AM - 6PM MST
                </p>
                <Link href="/" className="text-s1 underline font-medium">
                  {" "}
                  Contact{" "}
                </Link>
              </div>
            </div>
            <div className="col-span-12 min-[450px]:col-span-6 md:col-span-3">
              <div className="flex justify-center items-center flex-col">
                <div className="text-7xl text-s1">
                  <ChatCentered weight="fill" />
                </div>
                <h4 className="heading-4 pb-4 pt-3 dark:text-white">Help Centre</h4>
                <p className="pb-5 text-center dark:text-white">
                  Looking for answers? Visit our Help Center for detailed guides
                </p>
                <Link href="/" className="text-s1 underline font-medium">
                  {" "}
                  Help Center{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
