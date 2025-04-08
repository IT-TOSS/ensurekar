"use client"
import BreadcrumpSection from '@/app/components/Breadcrump-Sections/Other-Pages/Case-Study-Details'
import React from 'react'
import Image from 'next/image'
import case_study_details_post_thumbnail from "../../../../images/case_study_details_post_thumbnail.png"
import case_study_post_image from "../../../../images/case_study_post_image.png"
import { CalendarBlank, CheckCircle, DotsThree, DribbbleLogo, FacebookLogo, InstagramLogo, Link, MapPin, TwitterLogo, User, WindowsLogo } from 'phosphor-react'
const CaseStudyDetails = () => {
  return (
    <>
      <BreadcrumpSection/>
      <section className="container grid grid-cols-12 gap-6 stp-30 sbp-30">
      <div className="col-span-12 lg:col-span-8">
        <div className="overflow-hidden">
          <Image
            src={case_study_details_post_thumbnail}
            alt="image"
            className="hover:scale-110 duration-500 w-full h-full"
          />
        </div>
        <h2 className="display-4 pt-6 lg:pt-10">
          A Case Study On Optimal Payroll Processing.
        </h2>
        <p className="pt-4 lg:pt-6">
          Discover how our optimal payroll processing solution transformed David
          operations. We streamlined manual processes, ensuring efficiency and
          compliance with changing regulations. By implementing advanced payroll
          software, we achieved significant time savings and reduced errors. The
          result?
        </p>
        <h3 className="heading-1 pt-6 lg:pt-10">Challenges Faced</h3>
        <p className="py-6">
          David Warner confronted multifaceted challenges in payroll processing,
          including cumbersome manual procedures, frequent errors, and the
          complexity of staying compliant with evolving tax and labor
          regulations. The manual processes not only consumed valuable time but
          also resulted in dissatisfaction among employees due to errors in
          payroll calculations. Navigating the intricacies of compliance proved
          to be a significant hurdle. This case study delves into how our team
          identified and addressed these challenges head-on, implementing a
          tailored solution
        </p>
        <ul className="flex flex-col gap-5">
          <li className="flex justify-start items-start gap-3">
            <div className="text-p1 text-3xl">
              <CheckCircle/>
            </div>
            <div className="">
              <h5 className="heading-5">Manual Processes</h5>
              <p className="flex justify-center items-center text-bodyText">
               
                <DotsThree className='text-3xl !leading-[0]' />
                Relying on time-consuming and error-prone manual accounting
                procedures.
              </p>
            </div>
          </li>
          <li className="flex justify-start items-start gap-3">
            <div className="text-p1 text-3xl">
            <CheckCircle/>
            </div>
            <div className="">
              <h5 className="heading-5">Payroll Complexity</h5>
              <p className="flex justify-center items-center text-bodyText">
                <i className="ph ph-dot text-3xl !leading-[0]"></i>
                Struggling with the complexities of payroll processing and
                compliance.
              </p>
            </div>
          </li>
          <li className="flex justify-start items-start gap-3">
            <div className="text-p1 text-3xl">
            <CheckCircle/>
            </div>
            <div className="">
              <h5 className="heading-5">Efficiency Concerns</h5>
              <p className="flex justify-center items-center text-bodyText">
                <i className="ph ph-dot text-3xl !leading-[0]"></i>

                Facing inefficiencies in their financial workflows affecting
                overall productivity.
              </p>
            </div>
          </li>
        </ul>
        <h3 className="heading-2 pt-6 lg:pt-10">Our Approach</h3>
        <p>
          Our approach involved a meticulous audit of existing processes,
          identifying pain points, and tailoring solutions to meet the unique
          needs of David Warner. By seamlessly integrating advanced accounting
          and payroll software, we automated workflows, enhancing both speed and
          precision. Throughout the transition, our team provided comprehensive
          training to ensure a smooth adaptation.
        </p>
        <h4 className="heading-3 pt-6 lg:pt-10 pb-4 lg:pb-6">Implementation</h4>
        <p>
          During implementation, we executed a seamless transition from manual
          to automated processes, ensuring minimal disruption to [Client Name]'s
          operations. Comprehensive employee training facilitated a smooth
          adaptation to the new systems
        </p>
        <div
          className="pt-6 xl:pt-10 flex justify-between items-center gap-6 max-md:flex-col"
        >
          <div className="flex justify-between items-center gap-6 overflow-hidden">
            <Image
              src={case_study_post_image}
              alt="image"
              className="hover:scale-110 duration-500 w-full h-full"
            />
          </div>
          <div className="">
            <ul className="flex flex-col gap-5">
              <li className="flex justify-start items-start gap-3">
                <div className="text-p1 text-3xl">
                  <CheckCircle/>

                </div>
                <div className="">
                  <h5 className="heading-5">Smooth Transition</h5>
                  <p className="flex justify-center items-center text-bodyText">
                    <i className="ph ph-dot text-3xl !leading-[0]"></i>
                    Executed a seamless transition from manual to
                  </p>
                </div>
              </li>
              <li className="flex justify-start items-start gap-3">
                <div className="text-p1 text-3xl">
                <CheckCircle/>

                </div>
                <div className="">
                  <h5 className="heading-5">Employee Training</h5>
                  <p className="flex justify-center items-center text-bodyText">
                    <i className="ph ph-dot text-3xl !leading-[0]"></i>
                    Provided training sessions to ensure a smooth
                  </p>
                </div>
              </li>
              <li className="flex justify-start items-start gap-3">
                <div className="text-p1 text-3xl">
                <CheckCircle/>

                </div>
                <div className="">
                  <h5 className="heading-5">Testing and Quality</h5>
                  <p className="flex justify-center items-center text-bodyText">
                    <i className="ph ph-dot text-3xl !leading-[0]"></i>
                    Rigorous testing to guarantee accuracy, security,
                  </p>
                </div>
              </li>
              <li className="flex justify-start items-start gap-3">
                <div className="text-p1 text-3xl">
                  <CheckCircle/>
                </div>
                <div className="">
                  <h5 className="heading-5">Efficiency Gains</h5>
                  <p className="flex justify-center items-center text-bodyText">
                    <i className="ph ph-dot text-3xl !leading-[0]"></i>
                    Marked reduction in processing time
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <h4 className="heading-3 pt-6 xl:pt-10 pb-6">Results Achieved</h4>
        <p className="pb-10">
          The implemented solutions yielded remarkable results for David.
          Processing time significantly reduced, leading to increased overall
          efficiency. Notably, errors were minimized, enhancing accuracy and
          financial integrity. Adherence to tax regulations and
          industry-specific compliance standards improved significantly,
        </p>
        <p className="bg-s2 border border-mainTextColor p-10 font-medium text-xl">
          "David has seen a remarkable transformation in our accounting and
          payroll processes. Ensurekar tailored solutions have not only saved us
          time but also enhanced accuracy, providing a level of efficiency we
          didn't think possible."
        </p>
        <h4 className="heading-3 py-10 pb-6">Conclusion</h4>
        <p className="pb-10">
          In conclusion, our Accounting & Payroll Processing Services have
          proven to be instrumental in overcoming challenges, fostering
          efficiency, and ensuring compliance for David Warner.
        </p>
      </div>

      <div className="col-span-12 lg:col-span-4">
        <div className="flex flex-col gap-6 sticky top-32">
          <div
            className="border p-6 lg:p-8 flex flex-col gap-6 justify-start items-start"
          >
            <div
              className="flex justify-start items-center gap-4 pb-6 lg:pb-6 border-b w-full last:border-none last:pb-0"
            >
              <div className="text-2xl bg-p1 text-white p-4 !leading-[0]">
                <User weight='fill'/>
              </div>
              <div className="">
                <h5 className="heading-5">Client</h5>
                <p className="text-bodyText">David Warner</p>
              </div>
            </div>
            <div
              className="flex justify-start items-center gap-4 pb-6 lg:pb-6 border-b w-full last:border-none last:pb-0"
            >
              <div className="text-2xl bg-p1 text-white p-4 !leading-[0]">
                <CalendarBlank weight='fill'/>
              </div>
              <div className="">
                <h5 className="heading-5">Date</h5>
                <p className="text-bodyText">15 - January - 2024</p>
              </div>
            </div>
            <div
              className="flex justify-start items-center gap-4 pb-6 lg:pb-6 border-b w-full last:border-none last:pb-0"
            >
              <div className="text-2xl bg-p1 text-white p-4 !leading-[0]">
                <WindowsLogo weight='fill'/>
              </div>
              <div className="">
                <h5 className="heading-5">Category</h5>
                <p className="text-bodyText">Payroll Processing</p>
              </div>
            </div>
            <div
              className="flex justify-start items-center gap-4 pb-6 lg:pb-6 border-b w-full last:border-none last:pb-0"
            >
              <div className="text-2xl bg-p1 text-white p-4 !leading-[0]">
                <MapPin weight='fill'/>
              </div>
              <div className="">
                <h5 className="heading-5">Location</h5>
                <p className="text-bodyText">Garuda, 99 INA</p>
              </div>
            </div>
          </div>
          <div className="border p-6 lg:p-10">
            <h5
              className="heading-5 pb-2 relative after:absolute after:bottom-0 after:left-0 after:w-[20px] after:h-[2px] after:bg-p1"
            >
              Follow Us
            </h5>
            <ul
              className="flex justify-start items-center gap-2 text-white group pt-5"
            >
              <li className="">
                <a
                  href="/facebook.com"
                  className="bg-p1 rounded-full p-3 text-xl hover:text-mainTextColor hover:bg-s2 duration-500 hover:-translate-y-1 !leading-[0] flex justify-center items-center w-full"
                >
                  <FacebookLogo className='block w-full'/>
                </a>
              </li>
              <li className="">
                <a
                  href="/twitter.com"
                  className="bg-p1 rounded-full p-3 text-xl hover:text-mainTextColor hover:bg-s2 duration-500 hover:-translate-y-1 !leading-[0] flex justify-center items-center w-full"
                >
                  <TwitterLogo className='block w-full'/>
                </a>
              </li>
              <li className="">
                <a
                  href="/instagram.com"
                  className="bg-p1 rounded-full p-3 text-xl hover:text-mainTextColor hover:bg-s2 duration-500 hover:-translate-y-1 !leading-[0] flex justify-center items-center w-full"
                >
                  <InstagramLogo className='block w-full'/>
                </a>
              </li>
              <li className="">
                <a
                  href="/dribbble"
                  className="bg-p1 rounded-full p-3 text-xl hover:text-mainTextColor hover:bg-s2 duration-500 hover:-translate-y-1 !leading-[0] flex justify-center items-center w-full"
                >
                  <DribbbleLogo className='block w-full'/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default CaseStudyDetails
