"use client"

import React, { lazy } from "react";
import axios from 'axios';
import OurServices from "./components/Section/Our-Services-Section";


const HeroSection = lazy(() => import("./components/Section/Hero-Section"));
const SecuritySolutions = lazy(
  () => import("./components/Section/Security-Solutions")
);
const CompanySlider = lazy(() => import("./components/Section/Company-Slider"));
const SolutionsSection = lazy(
  () => import("./components/Section/Solutions-Section")
);
const FeaturesSection = lazy(
  () => import("./components/Section/Features-Section")
);
const CounterSection = lazy(
  () => import("./components/Section/Counter-Section")
);
const OurStorySection = lazy(
  () => import("./components/Section/Our-Story-Section")
);
const StepGuideSection = lazy(
  () => import("./components/Section/Step-Guide-Section")
);
const WhyEnsurekarSection = lazy(
  () => import("./components/Section/Why-Ensurekar-Section")
);
const IntegrationsSection = lazy(
  () => import("./components/Section/Integrations-Section")
);
const ExperienceEnsurekarSection = lazy(
  () => import("./components/Section/Experience-Ensurekar-Section")
);
const TestimonialSection = lazy(
  () => import("./components/Section/Testimonial-Section")
);
const PricingSection = lazy(
  () => import("./components/Section/Pricing-Section")
);
const BlogSection = lazy(() => import("./components/Section/Blog-Section"));
const GotQuestionsSection = lazy(
  () => import("./components/Section/Got-Questions-Section")
);
const Calendar = lazy(() => import("./components/calendar"));

import logo1 from "./images/Compliances/1.png";///images/logo1.png";
import logo2 from "./images/Compliances/2.png"//./images/logo2.png";
import logo3 from "./images/Compliances/3.png"//"./images/logo3.png";
import logo4 from "./images/Compliances/4.png";
import logo5 from "./images/Compliances/5.png";
import logo6 from "./images/Compliances/6.png";
import logo7 from "./images/Compliances/7.png";
import logo8 from "./images/Compliances/8.png";
import logo9 from "./images/Compliances/9.png";
import logo10 from "./images/Compliances/10.png";

import logo11 from "./images/logo1.png";
import logo12 from "./images/logo2.png";
import logo13 from "./images/logo3.png";
import { FileText, LightbulbFilament, RocketLaunch } from "phosphor-react";
import { HandCoins } from "lucide-react";
import CTASection from "./components/Section/CTA-Section";
import Footer from "./components/footer";
import Header from "./components/Header";
import Script from 'next/script';
export default function Home() {
  const CounterSectionData = [
    { number: 25000, text: "Client Served" },
    { number: 2000, text: "Startup Guidance and Support" },
    { number: 50, text: "Cities at Present" },
  ];

  //----------krishna------
  const [CompliancesData, setCompliancesData] = React.useState({
    heading: "",
    subHeading: "",
    images: [] as { src: string; alt: string }[],
  });

  React.useEffect(() => {
    const fetchCompliancesData = async () => {
      const apiUrl =
        "/api/get-compan-slider-sections?header=Upcoming_Compliances";

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // console.log("Response from API:", data);
        console.log("Compliances Data:", data);

        const activeSection = data.find(
          (section: any) => section.isActive === "1"
        );

        console.log("Active Section:", activeSection);

        if (activeSection) {
          setCompliancesData({
            heading: activeSection.header,
            subHeading: activeSection.description || "",
            images: (activeSection.images || []).map((img: any) => ({
              // Ensure the path starts with / for public folder access
              src: img.src,
              alt: img.alt,
            })),
          });
        }
        console.log("Compliances Data after setting state:", CompliancesData);
      } catch (error) {
        console.error("Error fetching Compliances data:", error);
      }
    };

    fetchCompliancesData();
  }, []);
  // Privious code

  //   const CompliancesData = {
  //   heading: "Upcoming Compliances",
  //   subHeading: "",
  //   images: [
  //     { src: logo1, alt: "logo1" },
  //     { src: logo2, alt: "logo2" },
  //     { src: logo3, alt: "logo3" },
  //     { src: logo4, alt: "logo4" },
  //     { src: logo5, alt: "logo5" },
  //     { src: logo6, alt: "logo6" },
  //     { src: logo7, alt: "logo7" },
  //     { src: logo8, alt: "logo8" },
  //     { src: logo9, alt: "logo9" },
  //     { src: logo10, alt: "logo10" }
  //   ],
  // };

  //-- Krishna ------
  const [SliderData, setSliderData] = React.useState({
    heading: "",
    subHeading: "",
    images: [] as { src: string; alt: string }[],
  });

  React.useEffect(() => {
    const fetchCompliancesData = async () => {
      const apiUrl =
        "/api/get-compan-slider-sections?header=Business_and_customer_with_us";

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // console.log("Response from API:", data);
        console.log("Compliances Data:", data);

        const activeSection = data.find(
          (section: any) => section.isActive === "1"
        );

        console.log("Active Section:", activeSection);

        if (activeSection) {
          setSliderData({
            heading: activeSection.header,
            subHeading: activeSection.description || "",
            images: (activeSection.images || []).map((img: any) => ({
              // Ensure the path starts with / for public folder access
              src: img.src,
              alt: img.alt,
            })),
          });
        }
        console.log("Compliances Data after setting state:", CompliancesData);
      } catch (error) {
        console.error("Error fetching Compliances data:", error);
      }
    };

    fetchCompliancesData();
  }, []);

  // const SliderData = {
  //   heading: "Business and customer with us",
  //   subHeading: "",
  //   images: [
  //     { src: logo11, alt: "logo1" },
  //     { src: logo12, alt: "logo2" },
  //     { src: logo13, alt: "logo3" },
  //     { src: logo11, alt: "logo1" },
  //     { src: logo12, alt: "logo2" },
  //     { src: logo13, alt: "logo3" },
  //     { src: logo11, alt: "logo1" },
  //     { src: logo12, alt: "logo2" },
  //     { src: logo13, alt: "logo3" },
  //     { src: logo13, alt: "logo3" },
  //     { src: logo12, alt: "logo2" },
  //   ],
  // };
  const SolutionData = {
    heading: "Talk To Experts",
    subHeading: "50+ Trusted CA, CS & Legal Experts are here To Grow Your Business ",
    propertiesData: [
      {
        icon: FileText,
        text: "Chartered Accountant (CA)"
      },
      {
        icon: HandCoins,
        text: "Company Secretary (CS)"
      },
      {
        icon: LightbulbFilament,
        text: "Lawyer"
      },
      {
        icon: RocketLaunch,
        text: "IPR Consultant"
      }
    ]
  }
  return (
    <>

      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DELN23M1SD"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DELN23M1SD');
          `,
        }}
      />




      {/* <Header /> */}
      <HeroSection />
      <CompanySlider SlideData={CompliancesData} />
      {/* <Calendar /> */}
      <OurServices />

      <CompanySlider SlideData={SliderData} />
      <CounterSection CounterSectionData={CounterSectionData} />
      <FeaturesSection />
      <Calendar />
      <SecuritySolutions />

      <SolutionsSection SolutionData={SolutionData} />
      <ExperienceEnsurekarSection />

      {/* <OurStorySection /> */}

      {/* <StepGuideSection /> */}

      {/* <WhyEnsurekarSection /> */}
      {/* <IntegrationsSection /> */}

      {/* <TestimonialSection /> */}
      {/* <PricingSection /> */}

      <BlogSection />
           <GotQuestionsSection />
      {/* <CTASection />
        <Footer /> */}

    </>
  );
}
