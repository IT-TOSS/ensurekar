"use client"
import Link from 'next/link'
import { Binoculars, ChatCentered, Desktop } from 'phosphor-react'
import React from 'react'

const GotQuestionsSection = () => {
  return (
    <section className="sbp-30 overflow-hidden">
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center max-xxl:overflow-hidden">
            <div
              className="max-w-[700px] text-center flex justify-center items-center flex-col"
            >
              {/* <p
                className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white wow animate__animated animate__zoomIn"
              >
                Contact
              </p> */}

              <h1
                className="display-4 pt-4 pb-4 lg:pb-6 wow animate__animated animate__fadeInUp dark:text-white"
              >
                Have you Secured Your Business?
              </h1>

              <p
                className="text-bodyText wow animate__animated animate__fadeInDown dark:text-white"
              >
               You Can Save Your Business With Ensurekar. </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 stp-15">
          <div
            className="col-span-12 min-[450px]:col-span-6 md:col-span-3 wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
          >
            <div className="flex justify-center items-center flex-col">
              <div className="text-7xl text-s1">
                <Binoculars weight="fill"/>
              </div>
              <h4 className="heading-4 pb-4 pt-3 dark:text-white">Legal</h4>
              <p className="pb-5 text-center dark:text-white">
              Proper Documentation Will Help You Legally
              </p>
              <Link href="/others/shareholder-agreement" className="text-s1 underline font-medium">
                Learn More
              </Link>
            </div>
          </div>
          <div
            className="col-span-12 min-[450px]:col-span-6 md:col-span-3 wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay=".2s"
          >
            <div className="flex justify-center items-center flex-col">
              <div className="text-7xl text-s1">
                <Desktop weight="fill"/>
              </div>
              <h4 className="heading-4 pb-4 pt-3 dark:text-white"> Branding</h4>
              <p className="pb-5 text-center dark:text-white">
        
              Save Your Brand and Logo
              </p>
              <Link href="/trade-mark-ip/trademark-registration" className="text-s1 underline font-medium">
              Learn More
              </Link>
            </div>
          </div>
          <div
            className="col-span-12 min-[450px]:col-span-6 md:col-span-3 wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay=".4s"
          >
            <div className="flex justify-center items-center flex-col">
              <div className="text-7xl text-s1">
              <Binoculars weight='fill'/>
              </div>
              <h4 className="heading-4 pb-4 pt-3 dark:text-white">Compliances  </h4>
              <p className="pb-5 text-center dark:text-white">
              Timely Compliances Can Save from Late Fees and Penalties
              </p>
              <Link href="/mca-compliances" className="text-s1 underline font-medium">
              Learn More
              </Link>
            </div>
          </div>
          <div
            className="col-span-12 min-[450px]:col-span-6 md:col-span-3 wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay=".6s"
          >
            <div className="flex justify-center items-center flex-col">
              <div className="text-7xl text-s1">
                <ChatCentered weight='fill'/>
              </div>
              <h4 className="heading-4 pb-4 pt-3 dark:text-white">Financially </h4>
              <p className="pb-5 text-center dark:text-white">
          Keeping Proper Books of Accounting Will Save Your Time and Money            </p>
              <Link href="/accounting/accounting-and-tax-bookkeeping" className="text-s1 underline font-medium">
              Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GotQuestionsSection
