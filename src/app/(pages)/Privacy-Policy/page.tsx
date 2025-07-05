"use client";
import BreadcrumpSection from '@/app/components/Breadcrump-Sections/Privacy-Policy'
import Link from 'next/link';
import { CheckCircle } from 'phosphor-react';
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <>
      <BreadcrumpSection />
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 dark:text-[#ddf3f0]">INTRODUCTION</h2>
        <p className='dark:text-[#ffffff]'>
          This Privacy Policy ("Policy") describes how Asanji Fintech Private Limited, operating under the brand name Ensurekar, a company incorporated under the Companies Act 2013, having its registered office at 2360, Tiwari Sadan, Wright Town, Jabalpur, Madhya Pradesh 482001, collects, uses, discloses, and safeguards your information.
        </p>
        <p className='dark:text-[#ffffff]'>
          The services rendered by Ensurekar facilitate:
        </p>
        <ul className="list-disc list-inside mb-4 dark:text-[#ffffff]">
          <li>e-filing of income tax returns, including ancillary activities by adding you as a client on the Income Tax Department's web portal to submit your Income-Tax Return ("ITR") and retrieve information, such as your ITR-V, refund status, 26AS, etc.</li>
          <li>easy filing of ITRs.</li>
          <li>manual filing of ITRs by allowing you to fill the requisite data in the ITRs.</li>
        </ul>
        <p className='dark:text-[#ffffff]'>
          These services (collectively referred to as "ERI Services") are provided through our website <a href="https://www.ensurekar.com" className="text-blue-500 underline">www.ensurekar.com</a> and/or our portals and technologies designed by Ensurekar.
        </p>
        <p className='dark:text-[#ffffff]'>
          We are committed to protecting your privacy in compliance with applicable laws, including the Information Technology Act, 2000 and rules made thereunder.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8 dark:text-[#ddf3f0]">INFORMATION WE COLLECT</h2>
        <ul className="list-disc list-inside mb-4 dark:text-[#ffffff]">
          <li>Personal Information: Name, gender, date of birth, contact number, email address, PAN, Aadhaar (voluntarily), bank account details, UPI ID, business details, educational qualifications, photograph, and signature.</li>
          <li>Tax Information: Income details, deductions, Form 16, refund status, Form 26AS, AIS, TIS, and other tax return data.</li>
          <li>Device Permissions: Access to SMS, phone calls, storage, or contact lists upon explicit user consent.</li>
          <li>Log Data: IP address, browser type, device name, operating system, date and time of access, pages visited, and usage statistics.</li>
          <li>Cookies and Tracking Technologies: Session data and interaction metrics.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 dark:text-[#ddf3f0]">USE OF INFORMATION</h2>
        <ul className="list-disc list-inside mb-4 dark:text-[#ffffff]">
          <li>Provide, manage, and improve ERI Services.</li>
          <li>File your ITR with the Income Tax Department.</li>
          <li>Contact you regarding account status, service updates, and alerts.</li>
          <li>Prevent fraudulent activities.</li>
          <li>Conduct audits, compliance checks, and record maintenance.</li>
          <li>Improve user experience and personalize the service.</li>
          <li>Aggregate user data (without personal identification) for analytics and internal purposes.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 dark:text-[#ddf3f0]">DISCLOSURE OF INFORMATION</h2>
        <ul className="list-disc list-inside mb-4 dark:text-[#ffffff]">
          <li>Government or statutory bodies as required by law.</li>
          <li>Third-party service providers under confidentiality agreements.</li>
          <li>Auditors, legal consultants, and compliance officers for internal purposes.</li>
          <li>Other entities if necessary for mergers, restructuring, or business transfers (with user notice).</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 dark:text-[#ddf3f0]">DATA RETENTION</h2>
        <ul className="list-disc list-inside mb-4 dark:text-[#ffffff]">
          <li>We retain your personal data as long as necessary to fulfill our service commitments, comply with laws, and resolve disputes.</li>
          <li>You can request correction of inaccurate data by contacting our Grievance Officer.</li>
          <li>You are responsible for ensuring the safety and confidentiality of your own submitted data.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 dark:text-[#ddf3f0]">INFORMATION SECURITY</h2>
        <p className='dark:text-[#ffffff]'>
          We adopt reasonable security practices and procedures including SSL encryption, firewalls, periodic assessments, and role-based access control. While we strive to protect your data, no method is 100% secure.
        </p>

        <h2 className="text-2xl font-bold mb-4 dark:text-[#ddf3f0] ">DISCLAIMER</h2>
        <p className='dark:text-[#ffffff]'>
          Ensurekar is not responsible for maintaining backup copies of user-submitted data. We are not liable for loss or damages arising from inadvertent data breaches, technical failures, or acts beyond our control.
        </p>

        <h2 className="text-2xl font-bold mb-4 dark:text-[#ddf3f0]">WITHDRAWAL OF CONSENT</h2>
        <p className='dark:text-[#ffffff]'>
          You may withdraw your consent by contacting us. Upon withdrawal, you must discontinue using the ERI Services. Access to services may be restricted if consent is withdrawn.
        </p>

        <h2 className="text-2xl font-bold mb-4 dark:text-[#ddf3f0]">CHANGES TO THIS POLICY</h2>
        <p className='dark:text-[#ffffff]'>
          We may update this Policy periodically. Continued use of our services after updates indicates your acceptance.
        </p >

        <h2 className="text-2xl font-bold mb-4">GOVERNING LAW & DISPUTE RESOLUTION</h2>
        <p className='dark:text-[#ffffff]'>
          This Policy is governed by Indian laws. Disputes shall be resolved via arbitration in Jabalpur, Madhya Pradesh. Courts in Jabalpur have exclusive jurisdiction.
        </p>

        <h2 className="text-2xl font-bold mb-4 dark:text-[#ddf3f0]">GRIEVANCE REDRESSAL</h2>
        <p className='dark:text-[#ffffff]'>
          For queries or complaints, contact:<br />
          <strong>Email:</strong> <a href="mailto:connect@ensurekar.in" className="text-blue-500 underline">connect@ensurekar.in</a><br />
          <strong>Registered Office:</strong> 2360, Tiwari Sadan, Wright Town, Jabalpur, Madhya Pradesh 482001.
        </p>
      </section>


      {/* <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">ENSUREKAR REFUND POLICY</h2>
        <p>
          At Ensurekar, we are committed to providing high-quality, efficient, and reliable tax, financial, legal, and startup support services through our technology-driven platform. Your satisfaction is our priority, and we strive to resolve any concerns quickly and fairly.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">30-DAY REFUND POLICY</h2>
        <p>
          You may request a refund within 30 days of your payment. However, please note:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Once access to the Ensurekar platform or services is provided, our core service obligation is considered fulfilled.</li>
          <li>Refund requests after service access are evaluated on a case-by-case basis, depending on the service stage and actual work completed.</li>
          <li>All approved refunds are subject to a 20% cancellation fee to cover administrative, processing, and third-party charges.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">CHANGE OF SERVICE</h2>
        <p>
          You may request to change your selected service to another available service within 7 days of payment. Requests beyond this period will be subject to management approval.
        </p>

        <h2 className="text-2xl font-bold mb-4">HOW TO REQUEST A REFUND</h2>
        <p>
          To initiate a refund request:
        </p>
        <ul className="list-decimal list-inside mb-4">
          <li>Log in to your Ensurekar dashboard and click on “Get Help” or “Not Satisfied.”</li>
          <li>Send an email to <a href="mailto:connect@ensurekar.in" className="text-blue-500 underline">connect@ensurekar.in</a> with the following details:
            <ul className="list-disc list-inside mt-2">
              <li>Payment details</li>
              <li>Service type</li>
              <li>Reason for refund</li>
            </ul>
          </li>
        </ul>
        <p>
          Our team will review your request and respond within 3–5 business days. Approved refunds are typically processed within 3–5 weeks.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">IMPORTANT DISCLAIMERS</h2>

        <h3 className="text-xl font-semibold mb-2">Government Fees, Penalties & Outcomes</h3>
        <p>
          Ensurekar is not liable for:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Government-imposed penalties</li>
          <li>Tax dues</li>
          <li>Legal obligations</li>
        </ul>
        <p>
          Clients are solely responsible for the accuracy of data submitted. We do not guarantee service outcomes where third-party agencies or government departments are involved.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Third-Party Delays & Rejections</h3>
        <p>
          Delays or rejections caused by external platforms such as MCA, GSTN, Income Tax, FSSAI, IP India, etc., or due to government policy or legal reasons, are beyond our control and cannot be used as grounds for refund claims.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Associates & External Consultants</h3>
        <p>
          In some cases, services may be delivered by verified independent professionals through the Ensurekar network. Ensurekar is not responsible for service delays caused by such independent consultants unless they are directly contracted by Ensurekar.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">FORCE MAJEURE</h2>
        <p>
          Ensurekar shall not be held liable for delays or non-performance resulting from events beyond our control, including but not limited to natural disasters, government actions, pandemics, war, labor disputes, internet outages, or other force majeure events.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">NEED ASSISTANCE?</h2>
        <p>
          For any queries or support, contact us:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Email: <a href="mailto:connect@ensurekar.in" className="text-blue-500 underline">connect@ensurekar.in</a></li>
          <li>Phone: +91 74707 56060</li>
          <li>Website: <a href="https://www.ensurekar.com" className="text-blue-500 underline">www.ensurekar.com</a></li>
        </ul>
        <p>
          We value your trust in Ensurekar and are here to support you every step of the way.
        </p>
      </section> */}


    </>
  )
}

export default PrivacyPolicy
