"use client";

import BreadcrumbSection from '@/app/components/Breadcrump-Sections/TermsConditions'
import CTASection from '@/app/components/Section/CTA-Section';
import Link from 'next/link';
import { CheckCircle } from 'phosphor-react';
import React from 'react'

const TermsConditions = () => {
  return (
    <>
      <BreadcrumbSection/>
      <section className="container stp-30 sbp-30 flex flex-col gap-2">
        {/* <div className="flex justify-start items-start flex-col">
          <p className="bg-p1 py-3 px-5 text-white rounded-full">
            Terms & Conditions
          </p>
          <h2 className="display-4 py-6">Terms & Conditions</h2>
          <p className="text-bodyText">
          Acceptance of Terms
          </p>
        </div> */}

        <div className=" ">
          <h3 className="heading-1 py-6 dark:text-[#d2f7f2]">Acceptance of Terms</h3>
          <p className="text-bodyText dark:text-[#d2f7f2]">
          By accessing and using EnsureKar's platform, you agree to comply with these Terms & Conditions. If you do not agree, please refrain from using our services.
          </p>
        
        </div>

        <div className="">
          <h3 className="heading-2 py-6 dark:text-[#d2f7f2]">Services Offered</h3>
          <p className="text-bodyText dark:text-[#d2f7f2]">
          EnsureKar provides fintech solutions, including legal, tax, and finance services such as business incorporation, government registrations, accounting, documentation, and annual compliance.
          </p>

          
        </div>

        <div className="">
          <h3 className="heading-3 py-6 dark:text-[#d2f7f2]">Client Responsibilities</h3>
          <p className="text-bodyText dark:text-[#d2f7f2]">
          Users agree to:
          </p>
          <ul className="pt-6 flex flex-col gap-4 dark:text-[#d2f7f2]">
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
              <CheckCircle />
              </span>
              <p>Provide accurate and complete information during registration and service use.</p>
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
              <CheckCircle />
              </span>
              <p>Not engage in fraudulent activities or misuse the platform.</p>
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
              <CheckCircle />
              </span>
              <p>Comply with all applicable laws and regulations.</p>
            </li>
           
          </ul>
        </div>

        <div className="">
          <h3 className="heading-3 py-6 dark:text-[#d2f7f2]">Limitation of Liability</h3>
          <p className="text-bodyText dark:text-[#d2f7f2]">
          EnsureKar is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our platform or services. Users are responsible for ensuring their compliance with legal and tax regulations.
          </p>
        </div>

        <div className="">
          <h3 className="heading-3 py-6 dark:text-[#d2f7f2]">Termination of Services</h3>
          <p className="text-bodyText dark:text-[#d2f7f2]">
          We reserve the right to suspend or terminate accounts if users violate our terms, engage in illegal activities, or provide false information.
          </p>
        </div>

        <div className="">
          <h3 className="heading-3 py-6 dark:text-[#d2f7f2]">Governing Law & Dispute Resolution</h3>
          <p className="text-bodyText dark:text-[#d2f7f2]">
          These Terms & Conditions are governed by the laws of India. Any disputes shall be resolved through arbitration in [City, State], as per Indian Arbitration laws.
          </p>
        </div>

        <div className="">
          <h3 className="heading-3 py-6 dark:text-[#d2f7f2]"> Contact Information</h3>
          <p className="text-bodyText dark:text-[#d2f7f2]">
          For any queries regarding our Terms & Conditions, contact us at <Link href="mailto:connect@ensurekar.in" className='text-blue-800 ' >connect@ensurekar.in</Link>.
          </p>
        </div>

        {/* <div className="">
          <h3 className="heading-3 py-6">Intellectual Property</h3>
          <p className="text-bodyText">
            At [Ensurekar], we are committed to maintaining transparency in our
            data practices. As we continually strive to enhance our Accounting &
            Payroll Processing Services, updates to our Privacy Policy may
            occur. Any changes made will be communicated to you through
            prominent notifications on our website or other appropriate
            channels.
          </p>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Termination of Services</h3>
          <p className="text-bodyText">
            Either party, [Your Company] or the client, reserves the right to
            terminate Accounting & Payroll Processing Services under certain
            conditions. Termination may occur for reasons such as breach of
            contract, non-payment, or mutual agreement. A notice period and
            specific termination procedures are outlined in our Terms &
            Conditions. Upon termination, any outstanding fees become due, and
            relevant data and documents are returned promptly. We value
            transparent and respectful communication throughout our engagement,
            and termination
          </p>

          <ul className="pt-6 flex flex-col gap-3">
            <li>
              <p className="font-medium pb-4">1. Ownership</p>
              <p
                className="pl-4 relative text-bodyText after:absolute after:left-0 after:top-3 after:w-[4px] after:h-[4px] after:rounded-full after:bg-bodyText"
              >
                Any intellectual property, including but not limited to
                software, tools, and proprietary methodologies developed by
                [Your Company] during the provision of services, shall remain
                the exclusive property of [Ensurekar].
              </p>
            </li>
            <li>
              <p className="font-medium pb-4">2. License</p>
              <p
                className="pl-4 relative text-bodyText after:absolute after:left-0 after:top-3 after:w-[4px] after:h-[4px] after:rounded-full after:bg-bodyText"
              >
                Clients are granted a non-exclusive, non-transferable license to
                use any deliverables or intellectual property provided by [Your
                Company] solely for the purpose of utilizing the Accounting &
                Payroll Processing Services.
              </p>
            </li>
            <li>
              <p className="font-medium pb-4">3. Confidentiality</p>
              <p
                className="pl-4 relative text-bodyText after:absolute after:left-0 after:top-3 after:w-[4px] after:h-[4px] after:rounded-full after:bg-bodyText"
              >
                Clients agree to treat all intellectual property and proprietary
                information as confidential, refraining from disclosing or
                reproducing such materials without explicit written consent from
                [Ensurekar].
              </p>
            </li>
          </ul>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Dispute Resolution</h3>
          <p className="text-bodyText">
            Dispute Resolution for Accounting & Payroll Processing Services: In
            the event of any dispute arising from the use of [Your Company]'s
            Accounting & Payroll Processing Services, both parties agree to
            engage in good-faith negotiations to reach a resolution. If a
            resolution cannot be achieved through negotiation, the parties agree
            to pursue mediation or arbitration in accordance with [Applicable
            Jurisdiction] laws. Any legal proceedings shall take place in the
            courts of [Applicable Jurisdiction]. Both [Your Company] and the
            client commit to cooperating in the resolution process to ensure a
            fair and timely outcome.
          </p>
        </div> */}
      </section>
      
    </>
  )
}

export default TermsConditions
