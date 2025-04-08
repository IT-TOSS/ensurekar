"use client";
import BreadcrumpSection from '@/app/components/Breadcrump-Sections/Privacy-Policy'
import Link from 'next/link';
import { CheckCircle } from 'phosphor-react';
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <>
    <BreadcrumpSection/>
      <section className="container stp-30 sbp-30 flex flex-col gap-2">
        <div className="flex justify-start items-start flex-col">
          <p className="bg-p1 py-3 px-5 text-white rounded-full"> Introduction</p>
          <h2 className="display-4 py-6">Privacy Policy</h2>
          <p className="text-bodyText">
          EnsureKar ("Company," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, store, and disclose your personal information when you use our fintech platform, which provides legal, tax, and finance services. By using our services, you consent to the data practices described in this policy.
          </p>
        </div>

        <div className="">
          <h3 className="heading-1 py-6">Information We Collect</h3>
          <p className="text-bodyText">
          We collect the following types of information:
          </p>

          <ul className="pt-6 flex flex-col gap-4">
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1 !leading-[0]">
                <CheckCircle weight='fill'/>
              </span>
              <b>Personal Information :</b> Name, email address, phone number, government-issued IDs, financial data, and any other data necessary for registration and compliance.
            </li>
          
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1 !leading-[0]">
                <CheckCircle weight='fill'/>
              </span>
              <b>Business Information :</b>Company name, incorporation details, GST details, tax information, and financial records.
            </li>
          
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1 !leading-[0]">
                <CheckCircle weight='fill'/>
              </span>
              <b>Transactional Data :</b> Payment records, billing information, and order details.
            </li>
          
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1 !leading-[0]">
                <CheckCircle weight='fill'/>
              </span>
              <b>Technical Data :</b>IP address, device type, browser details, and usage patterns to enhance user experience and security.
            </li>
          
          
          
          </ul>
        </div>

        <div className="">
          <h3 className="heading-2 py-6">How We Use Your Information</h3>
          <p className="text-bodyText">
          We use collected data to:
          </p>
            <ul className="pt-6 flex flex-col gap-4">
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1 !leading-[0]">
              <CheckCircle weight='fill'/>
              </span>
              Provide and manage our services, including company incorporation, tax filings, and compliance support.
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1 !leading-[0]">
              <CheckCircle weight='fill'/>
              </span>
              Process transactions and payments securely.
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1 !leading-[0]">
              <CheckCircle weight='fill'/>
              </span>
              Enhance user experience through personalization.
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1 !leading-[0]">
              <CheckCircle weight='fill'/>
              </span>
              Ensure regulatory compliance and prevent fraudulent activities.
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1 !leading-[0]">
              <CheckCircle weight='fill'/>
              </span>
              Communicate with users for customer support, updates, and promotions.
            </li>
            </ul>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Data Sharing & Disclosure</h3>
          <p className="text-bodyText">
          We do not sell or rent your personal information. However, we may share data with:
          </p>
            <ul className="pt-6 flex flex-col gap-4">
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1 !leading-[0]">
              <CheckCircle weight='fill'/>
              </span>
              Government agencies for legal compliance and regulatory requirements.
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1 !leading-[0]">
              <CheckCircle weight='fill'/>
              </span>
              Third-party service providers for payment processing, document verification, and customer support.
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1 !leading-[0]">
              <CheckCircle weight='fill'/>
              </span>
              Business partners, such as financial institutions and incubators, where necessary.
            </li>
          
            </ul>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Data Security</h3>
          <p className="text-bodyText">
          We implement strong security measures, including encryption, access controls, and regular audits, to protect your data. However, no system is completely secure, and we encourage users to take precautions when sharing personal information online.
          </p>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Your Rights</h3>
          <p className="text-bodyText">
          You have the right to:
          </p>

          <ul className="pt-6 flex flex-col gap-4">
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1 !leading-[0]">
              <CheckCircle weight='fill'/>
              </span>
              Access, update, or delete your personal data.
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1 !leading-[0]">
              <CheckCircle weight='fill'/>
              </span>
              Opt-out of marketing communications.
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1 !leading-[0]">
              <CheckCircle weight='fill'/>
              </span>
              Request information on how your data is processed.
            </li>
           
          </ul>
          <p className="text-bodyText my-5">
          For any data-related requests, contact us at <Link href="mailto:connect@ensurekar.in" className='text-blue-800'>connect@ensurekar.in</Link>
          </p>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Changes to This Policy</h3>
          <p className="text-bodyText">
          We may update this Privacy Policy from time to time. The latest version will always be available on our website.
          </p>
        </div>

        {/* <div className="">
          <h3 className="heading-3 py-6">Children's privacy</h3>
          <p className="text-bodyText">
            At Ensurekar, we are committed to protecting the privacy of all users,
            including children. Our Accounting & Payroll Processing Services are
            not intended for individuals under the age of 18. We do not
            knowingly collect or process personal information from children. If
            you believe that we have inadvertently collected information from a
            child, please contact us immediately, and we will take prompt steps
            to delete such data.
          </p>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Changes to the privacy policy</h3>
          <p className="text-bodyText">
            At [Ensurekar], we are committed to maintaining transparency in our
            data practices. As we continually strive to enhance our Accounting &
            Payroll Processing Services, updates to our Privacy Policy may
            occur. Any changes made will be communicated to you through
            prominent notifications on our website or other appropriate
            channels. We encourage you to periodically review our Privacy Policy
            for the latest information on how we handle your data. Rest assured,
            our commitment to your privacy remains steadfast, and changes are
            made to ensure compliance with evolving regulations and to enhance
            your overall experience. If you have any questions about changes to
            the policy, please contact us for clarification
          </p>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Contact information</h3>
          <p className="text-bodyText">
            If you have any questions or concerns regarding our Privacy Policy
            or the handling of your personal information, please contact us at
            <span className="text-p1">Ensurekar@gmail.com</span>
          </p>
        </div> */}
      </section>
    </>
  )
}

export default PrivacyPolicy
