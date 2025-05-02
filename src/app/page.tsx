"use client"

import React, { lazy } from "react";
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
import logo1 from "./images/logo1.png";
import logo2 from "./images/logo2.png";
import logo3 from "./images/logo3.png";
import { FileText, LightbulbFilament, RocketLaunch } from "phosphor-react";
import { HandCoins } from "lucide-react";
import CTASection from "./components/Section/CTA-Section";
import Footer from "./components/footer";
import Header from "./components/Header";
export default function Home() {
  const CounterSectionData = [
    { number: 25000, text: "Client Served" },
    { number: 2000, text: "Startup Guidance and Support" },
    { number: 50, text: "Cities at Present" },
  ];
  const CompliancesData = {
    heading: "Upcoming Compliances",
    subHeading: "",
    images: [
      { src: logo1, alt: "logo1" },
      { src: logo2, alt: "logo2" },
      { src: logo3, alt: "logo3" },
      { src: logo1, alt: "logo1" },
      { src: logo2, alt: "logo2" },
      { src: logo3, alt: "logo3" },
      { src: logo1, alt: "logo1" },
      { src: logo2, alt: "logo2" },
      { src: logo3, alt: "logo3" },
      { src: logo3, alt: "logo3" },
      { src: logo2, alt: "logo2" },
    ],
  };
  const SliderData = {
    heading: "Business and customer with us",
    subHeading: "",
    images: [
      { src: logo1, alt: "logo1" },
      { src: logo2, alt: "logo2" },
      { src: logo3, alt: "logo3" },
      { src: logo1, alt: "logo1" },
      { src: logo2, alt: "logo2" },
      { src: logo3, alt: "logo3" },
      { src: logo1, alt: "logo1" },
      { src: logo2, alt: "logo2" },
      { src: logo3, alt: "logo3" },
      { src: logo3, alt: "logo3" },
      { src: logo2, alt: "logo2" },
    ],
  };
  const SolutionData = {
    heading: "Talk To Experts",
    subHeading: "50+ Trusted CA, CS & Legal Experts are here To Grow Your Business ",
    propertiesData: [
      {
        icon: FileText,
        text: "Charted Accountant"
      },
      {
        icon: HandCoins,
        text: "Company Secretary"
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

      


      {/* <Header /> */}
      <HeroSection />
      <CompanySlider SlideData={CompliancesData} />
      <OurServices />

      <CompanySlider SlideData={SliderData} />
      <CounterSection CounterSectionData={CounterSectionData} />
      <FeaturesSection />
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
