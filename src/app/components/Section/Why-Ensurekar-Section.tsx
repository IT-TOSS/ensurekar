import React from "react";
import Image from "next/image";
import whyAccoupayCard_1 from "../../images/whyAccoupayCard_1.png";
import whyAccoupayCard_2 from "../../images/whyAccoupayCard_2.png";
import whyAccoupayCard_3 from "../../images/whyAccoupayCard_3.png";
import whyAccoupayCard_4 from "../../images/whyAccoupayCard_4.png";
import whyAccoupayCard_5 from "../../images/whyAccoupayCard_5.png";
import whyAccoupayCard_6 from "../../images/whyAccoupayCard_6.png";

const WhyEnsurekarSection = () => {
  
  return (
    <section className="bg-softBg1 stp-30 sbp-30 overflow-hidden">
      <div className="container">
        <div className="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start">
          <div className="max-w-[600px] flex justify-center items-start flex-col">
            {/* <p className="bg-p1 py-3 px-5 rounded-full text-white">
              Why Ensurekar
            </p> */}
            <h1 className="display-4 pt-4">
            A Platform for Your All Legal Finance And Tax's
            </h1>
          </div>
          <p className="text-bodyText max-w-[500px]">
          Achieve operational excellence with our expert guidance in legal, financial, and tax matters. Build the ideal workplace while ensuring compliance and efficiency.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6 stp-15">
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white p-6 xl:py-10 xl:px-15 flex flex-col items-center border border-white group hover:border-mainTextColor duration-700 hover:bg-s2 wow animate__animated animate__fadeInUp">
            <div className="">
              <Image src={whyAccoupayCard_1} alt="image" />
            </div>
            <h4 className="pt-8 heading-4">Affordable Professional Services</h4>
          </div>
          <div
            className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white p-6 xl:py-10 xl:px-15 flex flex-col items-center border border-white group hover:border-mainTextColor duration-700 hover:bg-s2 wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay=".2s"
          >
            <div className="">
              <Image src={whyAccoupayCard_2} alt="image" />
            </div>
            <h4 className="pt-8 heading-4">
            All Professional Services at One Place 
            </h4>
          </div>
          <div
            className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white p-6 xl:py-10 xl:px-15 flex flex-col items-center border border-white group hover:border-mainTextColor duration-700 hover:bg-s2 wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay=".4s"
          >
            <div className="">
              <Image src={whyAccoupayCard_3} alt="image" />
            </div>
            <h4 className="pt-8 heading-4">
            Easy Dashboard 
            </h4>
          </div>
          <div
            className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white p-6 xl:py-10 xl:px-15 flex flex-col items-center border border-white group hover:border-mainTextColor duration-700 hover:bg-s2 wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay=".6s"
          >
            <div className="">
              <Image src={whyAccoupayCard_4} alt="image" />
            </div>
            <h4 className="pt-8 heading-4">
            Security, Confidentiality 
            </h4>
          </div>
          <div
            className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white p-6 xl:py-10 xl:px-15 flex flex-col items-center border border-white group hover:border-mainTextColor duration-700 hover:bg-s2 wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay=".8s"
          >
            <div className="">
              <Image src={whyAccoupayCard_5} alt="image" />
            </div>
            <h4 className="pt-8 heading-4">
            Expert Network
            </h4>
          </div>
          <div
            className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white p-6 xl:py-10 xl:px-15 flex flex-col items-center border border-white group hover:border-mainTextColor duration-700 hover:bg-s2 wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="1s"
          >
            <div className="">
              <Image src={whyAccoupayCard_6} alt="image" />
            </div>
            <h4 className="pt-8 heading-4">
            Quick Customer Support
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEnsurekarSection;
