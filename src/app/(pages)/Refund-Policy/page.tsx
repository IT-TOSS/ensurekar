"use client";
import React from "react";
import breadcrump_icon from "../../images/breadcrump_icon.png";
import breadcrumb_img_24 from "../../images/breadcrumb_img_24.png";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, House } from "lucide-react";
import { CaretRight } from "phosphor-react";
const page = () => {
  return (
    <div>
      <section className="stp-30 bg-softBg1 relative max-xxl:overflow-hidden">
        <Image
          src={breadcrump_icon}
          alt="image"
          className="absolute bottom-0 left-[-10%] xxl:left-0 max-lg:hidden"
        />
        <div className="container grid grid-cols-12 gap-6 max-md:stp-15 relative z-10">
          <div className="col-span-12 md:col-span-6 flex justify-center items-start flex-col">
            <ul className="flex justify-start items-center gap-1 flex-wrap">
              <li>
                <Link
                  href="/"
                  className="flex justify-start items-center gap-1"
                >
                  <House />
                  <span className="hover:text-s2 duration-300">Home</span>
                </Link>
              </li>

              <li className="flex justify-start items-center gap-1">
                <CaretRight />
                Privacy Policy
              </li>
            </ul>

            <h1 className="display-3 pt-4">Refund Policy</h1>

            <p className="text-bodyText pt-6">Effective Date: 04/07/2024</p>
            <p className="text-bodyText pt-6">
              By using our services, you acknowledge that you have read,
              understood, and agreed to our Refund Policy
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-center items-center">
            <Image
              src={breadcrumb_img_24}
              alt="image"
              className="object-fit max-sm:max-h-[300px]"
            />
          </div>
        </div>
      </section>
      <section className="container stp-30 sbp-30 flex flex-col gap-2">


        <div className="text-bodyText dark:text-[#ddf3f0]">
          <h3 className="heading-1 py-6">Ensurekar Refund Policy</h3>
          <p>
            At Ensurekar, we are committed to providing high-quality, efficient, and reliable tax, financial, legal, and startup support services through our technology-driven platform. Your satisfaction is our priority, and we strive to resolve any concerns quickly and fairly.
          </p>

          <h3 className="heading-2 py-6">30-Day Refund Policy</h3>
          <ul className="list-disc pl-6">
            <li>You may request a refund within 30 days of your payment. However, please note:</li>
            <ul className="list-disc pl-6">
              <li>Once access to the Ensurekar platform or services is provided, we consider our core service obligation as fulfilled.</li>
              <li>Any refund request after this point is evaluated on a case-by-case basis, depending on the service stage and actual work completed.</li>
              <li>All approved refunds are subject to a 20% cancellation fee to cover administrative, processing, and third-party charges.</li>
            </ul>
          </ul>

          <h3 className="heading-2 py-6">Change of Service</h3>
          <p>
            If you wish to change your selected service to another available service, you may do so within 7 days of payment. Requests beyond this window will be subject to management approval.
          </p>

          <h3 className="heading-2 py-6">How to Request a Refund</h3>
          <p>To initiate a refund request:</p>
          <ul className="list-decimal pl-6">
            <li>Log in to your Ensurekar dashboard and click on “Get Help” or “Not Satisfied.”</li>
            <li>Send an email to <a href="mailto:connect@ensurekar.in" className="text-p1">connect@ensurekar.in</a> with:
              <ul className="list-disc pl-6">
                <li>Payment details</li>
                <li>Service type</li>
                <li>Reason for refund</li>
              </ul>
            </li>
          </ul>
          <p>
            Our team will review your request and respond within 3–5 business days. Refunds, if approved, are typically processed within 3–5 weeks.
          </p>

          <h3 className="heading-2 py-6">Important Disclaimers</h3>
          <p className="mt-4 font-bold">Government Fees, Penalties & Outcomes</p>
          <p>
            Ensurekar is not liable for any:
          </p>
          <ul className="list-disc pl-6">
            <li>Government-imposed penalties</li>
            <li>Tax dues</li>
            <li>Legal obligations</li>
          </ul>
          <p>
            The client is solely responsible for accuracy in the data submitted. We do not guarantee service outcomes where third-party agencies or government departments are involved.
          </p>

          <p className="mt-4 font-bold">Third-Party Delays & Rejections</p>
          <p>
            Delays caused by external platforms such as MCA, GSTN, Income Tax, FSSAI, IP India, etc., or rejection due to government policy or legal issues, are outside our control and cannot be used as grounds for refund claims.
          </p>

          <p className="mt-4 font-bold">Associates & External Consultants</p>
          <p>
            In some cases, services may be delivered by verified independent professionals through the Ensurekar network. We are not responsible for service delays caused by independent consultants unless they are contracted directly by Ensurekar.
          </p>

          <h3 className="heading-2 py-6">Force Majeure</h3>
          <p>
            Ensurekar shall not be liable for delays or non-performance due to events beyond its control, including but not limited to natural disasters, government actions, pandemics, war, labor disputes, internet outages, or other force majeure events.
          </p>

          <h3 className="heading-2 py-6">Need Assistance?</h3>
          <p>
            Contact our support team at:
          </p>
          <ul className="pl-6">
            <li>Email: <a href="mailto:connect@ensurekar.in" className="text-p1">connect@ensurekar.in</a></li>
            <li>Phone: +91 74707 56060</li>
            <li>Website: <a href="https://www.ensurekar.com" className="text-p1">www.ensurekar.com</a></li>
          </ul>
          <p className="mt-4">
            We are here to support you at every step and value your trust in Ensurekar.
          </p>
        </div>
        {/* <div className="">
          <h3 className="heading-1 py-6 dark:text-[#ddf3f0]">
            We don't share personal information.
          </h3>
          <p className="text-bodyText dark:text-[#ddf3f0]">
            We thank you and appreciate your service or product purchase with us
            on our Website www.Ensurekar.com (hereinafter referred to as
            “Ensurekar”). Please read this policy and the Ensurekar terms and
            conditions carefully as they will give you important information and
            guidelines about your rights and obligations as our customer, with
            respect to any purchase or service we provide to you.{" "}
          </p>
          <p className="text-bodyText dark:text-[#ddf3f0]">
            We make every effort to provide the service to you as per the
            specifications and timelines mentioned against each service or
            product purchased by you from Ensurekar, however if, due to any
            reason, we are unable to provide to you the service or product you
            purchased from us, then you shall be entitled to a refund which
            shall be subject on the following situations:{" "}
          </p>
        </div>

        <div className="">
          <h3 className="heading-2 py-6 dark:text-[#ddf3f0]">Services Offered</h3>
          <p className="text-bodyText dark:text-[#ddf3f0]">
            EnsureKar provides fintech solutions, including legal, tax, and
            finance services such as business incorporation, government
            registrations, accounting, documentation, and annual compliance.
          </p>
          <ul className="pt-6 flex flex-col gap-4">
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <CheckCircle />
              </span>
              <p className="ml-2 dark:text-white">
                The Refund shall be only considered in the event there is a
                clear, visible deficiency with the service or product purchased
                from Ensurekar.
              </p>
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <CheckCircle />
              </span>
              <p className="ml-2 dark:text-[#ddf3f0]">
                In the event a customer has paid for a service and then requests
                for a refund only because there was a change in mind, the refund
                shall not be considered as there is no fault, defect, or onus on
                Ensurekar.
              </p>
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <CheckCircle />
              </span>
              <p className="ml-2 dark:text-[#ddf3f0]">
                Refund requests shall not be entertained after the work has been
                shared with you in the event of change of mind. However, we
                shall give you the option of using the amount paid for by you,
                for an alternative service in Ensurekar amounting to the same
                value and the said amount could be applied in part or whole
                towards the said new service.
              </p>
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <CheckCircle />
              </span>
              <p className="ml-2 dark:text-[#ddf3f0]">
                If the request for a refund has been raised 30 (thirty) days
                after the purchase of a service or product has been completed
                and the same has been intimated and indicated via email or
                through any form of communication stating that the work has been
                completed, then, such refund request shall be deemed invalid and
                shall not be considered.
              </p>
            </li>
          </ul>
          <p className="text-bodyText mt-5 dark:text-[#ddf3f0]">
            If the request for the refund has been approved by Ensurekar, the
            same shall be processed and intimated to you via email. This refund
            process could take a minimum of 15 (fifteen) business days to
            process and shall be credited to your bank account accordingly. We
            shall handle the refund process with care and ensure that the money
            spent by you is returned to you at the earliest.
          </p>
        </div>

        <div className="mt-5">
          <h3 className="display-3 py-6  text-center dark:text-[#ddf3f0]">Privacy Policy</h3>
          <p className="text-bodyText dark:text-[#ddf3f0]">We don't share personal information.</p>
          <p className="heading-1 mt-5 text-[#ddf3f0]"> 1. GENERAL</p>
          <ul className="pt-6 flex flex-col gap-4">
            <li className="flex justify-start items-start gap-1 text-[#ddf3f0]">
              <b>a)</b> This document is an electronic record in terms of
              Information Technology Act, 2000 and rules there under as
              applicable and the amended provisions pertaining to electronic
              records in various statutes as amended by the Information
              Technology Act, 2000. This electronic record is generated by a
              computer system and does not require any physical or digital
              signatures.
            </li>
            <li className="flex justify-start items-start gap-1 text-[#ddf3f0]">
              <b>b)</b> This document is published in accordance with the
              provisions of Rule 3 (1) of the Information Technology
              (Intermediaries guidelines) Rules, 2011 that require publishing
              the rules and regulations, privacy policy and Terms of Use for
              access or usage of Ensurekar.com.
            </li>
            <li className="flex justify-start items-start gap-1 text-[#ddf3f0]">
              <b>c)</b> The domain name www.Ensurekar.com ("Website"), is owned
              and operated by Ensurekar Legal solutions Pvt. Ltd. (“Company”) a
              Private Company limited by shares, incorporated under the
              provisions of the Companies Act, 2013, and having its registered
              office at Prince Info Park, No.81-B, 5th floor, A-Block, 2nd main
              road, Ambattur Industrial Estate Chennai - 600058, where such
              expression shall, unless repugnant to the context thereof, be
              deemed to include its respective representatives, administrators,
              employees, directors, officers, agents and their successors and
              assigns.
            </li>
            <li className="flex justify-start flex-col items-start gap-1 text-[#ddf3f0]">
              <div>
                {" "}
                <b className="inline-block"> d)</b> For the purpose of this
                Privacy Policy (“Policy”), wherever the context so requires,
              </div>

              <div>
                <b>i)</b> The term ‘You’ &‘User’ shall mean any legal person or
                entity accessing or using the services provided on this Website,
                who is competent to enter into binding contracts, as per the
                provisions of the Indian Contract Act, 1872;
              </div>
              <div>
                {" "}
                <b>ii)</b> The terms ‘We’, ‘Us’& ‘Our’ shall mean the Website
                and/or the Company, as the context so requires.
              </div>
              <div>
                {" "}
                <b>iii)</b> The terms ‘Party’ & ‘Parties’ shall respectively be
                used to refer to the User and the Company individually and
                collectively, as the context so requires.
              </div>
            </li>
            <li className="flex justify-start items-start gap-1 text-[#ddf3f0]">
              <b>e)</b> The headings of each section in this Policy are only for
              the purpose of organizing the various provisions under this Policy
              in an orderly manner, and shall not be used by either Party to
              interpret the provisions contained herein in any manner. Further,
              it is specifically agreed to by the Parties that the headings
              shall have no legal or contractual value.
            </li>
            <li className="flex justify-start items-start gap-1 text-[#ddf3f0]">
              <b>f)</b> The use of the Website by the User is solely governed by
              this Policy as well as the Terms of Use of the Website (“Terms”,
              available at www.Ensurekar.com), and any modifications or
              amendments made thereto by the Company from time to time, at its
              sole discretion. Visiting the home page of the Website and/or
              using any of the services provided on the Website shall be deemed
              to signify the User’s unequivocal acceptance of this Policy and
              the aforementioned Terms, and the User expressly agrees to be
              bound by the same. The User expressly agrees and acknowledges that
              the Terms and Policy are co-terminus, and that expiry /
              termination of either one will lead to the termination of the
              other.
            </li>
            <li className="flex justify-start items-start gap-1 text-[#ddf3f0]">
              <b>g)</b> The User unequivocally agrees that this Policy and the
              aforementioned Terms constitute a legally binding agreement
              between the User and the Company, and that the User shall be
              subject to the rules, guidelines, policies, terms, and conditions
              applicable to any service that is provided by the Website, and
              that the same shall be deemed to be incorporated into the Terms,
              and shall be treated as part and parcel of the same. The User
              acknowledges and agrees that no signature or express act is
              required to make these Terms and the Policy binding on the User,
              and that the User’s act of visiting any part of the Website
              constitutes the User’s full and final acceptance of the Policy and
              the aforementioned Terms.
            </li>
            <li className="flex justify-start items-start gap-1 text-[#ddf3f0]">
              <b>h)</b> The Parties expressly agree that the Company retains the
              sole and exclusive right to amend or modify the Policy and the
              aforementioned Terms without any prior permission or intimation to
              the User, and the User expressly agrees that any such amendments
              or modifications shall come into effect immediately. The User has
              a duty to periodically check the Policy and Terms, and stay
              updated on theirprovisions and requirements. If the User continues
              to use the Website following such a change, the User will be
              deemed to have consented to any and all amendments / modifications
              made to the Policy and Terms. In so far as the User complies with
              the Policy and Terms, he/she is granted a personal, non-exclusive,
              non-transferable, revocable, limited privilege to enter, access
              and use the Website.
            </li>
          </ul>
          <ul className="pt-6 flex flex-col gap-4 dark:text-[#ddf3f0]">
            <li className="flex justify-start items-start flex-col gap-1 ">
              <h1 className="heading-1 my-2">
                2. COLLECTION OF PERSONAL AND OTHER INFORMATION
              </h1>
              <ul className="pl-4">
                <li className="flex justify-start items-start gap-1">
                  <b>a)</b> The User expressly agrees and acknowledges that the
                  Company collects and stores the User’s personal information,
                  which is provided by the User from time to time on the
                  Website, including but not limited to the User’s user name,
                  passwords, email address, name, address, age, date of birth,
                  sex, nationality, shopping preferences, browsing history,
                  etc., as well as any images or other information
                  uploaded/published by the User on the Website. The User is
                  aware that this information will be used by the
                  Company/Website to provide services and features targeted at
                  the User, that are most likely to meet the User’s needs, and
                  also to customize and improve the Website to make its users’
                  experiences safer and easier.
                </li>
                <li className="flex justify-start items-start gap-1">
                  <b>b)</b> The User is aware that the Company/Website may
                  automatically track certain information about the User based
                  upon the User’s IP address and the User’s behaviour on the
                  Website, and the User expressly consents to the same. The User
                  is aware that this information is used to do internal research
                  on user demographics, interests, and behaviour, to enable the
                  Company/Website to better understand, and cater to the
                  interests of its users. The User is expressly made aware that
                  such information may include the URL that the User visited
                  prior to accessing the Website, the URL which the User
                  subsequently visits (whether or not these URLs form a part of
                  the Website), the User’s computer & web browser information,
                  the User’s IP address, etc.
                </li>
                <li className="flex justify-start items-start gap-1">
                  <b>c)</b> If the User chooses to purchase products / services
                  from the Website, the User consents to allowing the
                  Company/Website to collect information about the User’s buying
                  behaviour and trends.
                </li>
              </ul>
            </li>
            <li className="flex justify-start flex-col items-start gap-1 ">
              <p className="heading-1 mt-5 ">3. COOKIES</p>
              <ul className="pl-4">
                <li className="flex justify-start items-start gap-1">
                  <b>a)</b> The User is aware that a ‘Cookie’ is a small piece
                  of information stored by a web server on a web browser so it
                  can later be traced back from that particular browser, and
                  that cookies are useful for enabling the browser to remember
                  information specific to a given user, including but not
                  limited to a User’s login identification, password, etc. The
                  User is aware that the Website places both permanent and
                  temporary cookies in the User’s computer's hard drive and web
                  browser, and does hereby expressly consent to the same.
                </li>
                <li className="flex justify-start items-start gap-1">
                  <b>b)</b> The User is further aware that the Website uses data
                  collection devices such as cookies on certain pages of the
                  Website to help analyse web page flow, measure promotional
                  effectiveness, and promote trust and safety, and that certain
                  features of the Website are only available through the use of
                  such cookies. While the User is free to decline the Website’s
                  cookies if the User’s browser permits, the User may
                  consequently be unable to use certain features on the Website.
                </li>
                <li className="flex justify-start items-start gap-1">
                  <b>c)</b> Additionally, the User is aware that he/she might
                  encounter ‘cookies’ or other similar devices on certain pages
                  of the Website that are placed by third parties or affiliates
                  of the Company/Website. The User expressly agrees and
                  acknowledges that the Company/Website does not control the use
                  of such cookies/other devices by third parties, that the
                  Company/Website is in no way responsible for the same, and
                  that the User assumes any and all risks in this regard.
                </li>
              </ul>
            </li>
            <li className="flex justify-start flex-col items-start gap-1 ">
              <p className="heading-1 mt-5">
                4. DIVULGING/SHARING OF PERSONAL INFORMATION
              </p>
              <ul className="pl-4">
                <li className="flex justify-start items-start gap-1">
                  <b>a)</b> The User is aware that the Website/Company may share
                  the User’s personal information with other corporate entities
                  and affiliates to help detect and prevent identity theft,
                  fraud and other potentially illegal acts; correlate related or
                  multiple accounts to prevent abuse of the Website’s services;
                  and to facilitate joint or co-branded services, where such
                  services are provided by more than one corporate entity.
                </li>
                <li className="flex justify-start items-start gap-1">
                  <b>b)</b> The User is aware that the Website/Company may
                  disclose personal information if required to do so by law or
                  if the Website/Company in good faith believes that such
                  disclosure is reasonably necessary to respond to subpoenas,
                  court orders, or other legal processes. The Website/Company
                  may also disclose the User’s personal information to law
                  enforcement offices, third party rights owners, or other third
                  parties if it believes that such disclosure is reasonably
                  necessary to enforce the Terms or Policy; respond to claims
                  that an advertisement, posting or other content violates the
                  rights of a third party; or protect the rights, property or
                  personal safety of its users, or the general public.
                </li>
                <li className="flex justify-start items-start gap-1">
                  <b>c)</b> The User is further aware that the Website/Company
                  and its affiliates may share / sell some or all of the User’s
                  personal information with other business entities should the
                  Company/Website (or its assets) plan to merge with, or be
                  acquired by such business entity, or in the event of
                  re-organization, amalgamation, or restructuring of the
                  Company’s business. Such business entity or new entity will
                  continue to be bound be the Terms and Policy, as may be
                  amended from time to time.
                </li>
              </ul>
            </li>
            <li className="flex justify-start flex-col items-start gap-1 ">
              <p className="heading-1 mt-5">5. SECURITY</p>
              <p>
                Transactions on the Website are secure and protected. Any
                information entered by the User when transacting on the Website
                is encrypted to protect the User against unintentional
                disclosure to third parties. The User’s credit and debit card
                information is not received, stored by or retained by the
                Company / Website in any manner. This information is supplied by
                the User directly to the relevant payment gateway which is
                authorized to handle the information provided, and is compliant
                with the regulations and requirements of various banks and
                institutions and payment franchisees that it is associated with.
              </p>
            </li>
            <li className="flex justify-start flex-col items-start gap-1 ">
              <p className="heading-1 mt-5">
                6. THIRD PARTY ADVERTISEMENTS / PROMOTIONS
              </p>
              <p>
                The User is aware that the Company/Website uses third-party
                advertising companies to serve ads to the users of the Website.
                The User is aware that these companies may use information
                relating to the User’s visits to the Website and other websites
                in order to provide customised advertisements to the User.
                Furthermore, the Website may contain links to other websites
                that may collect personally identifiable information about the
                User. The Company/Website is not responsible for the privacy
                practices or the content of any of the aforementioned linked
                websites, and the User expressly acknowledges the same and
                agrees that any and all risks associated will be borne entirely
                by the User.
              </p>
            </li>
            <li className="flex flex-col justify-start items-start gap-1">
              <p className="heading-1 mt-5">7. USER’S CONSENT</p>
              <p>
                By using the Website and/ or by providing information to the
                Company through the Website, the User consents to the collection
                and use of the information disclosed by the User on the Website
                in accordance with this Policy, including but not limited to the
                User’s consent the Company/Website sharing/divulging the User’s
                information, as per the terms contained hereinabove in Section 4
                of the Policy.
              </p>
            </li>
            <li className="flex justify-start flex-col items-start gap-1">
              <p className="heading-1 mt-5">8. GRIEVANCE OFFICER</p>
              <p>
                In accordance with Information Technology Act 2000 and rules
                made there under, the name and contact details of the Grievance
                Officer are provided below: Nishant Shah (E-mail:
                nishant@vakilsearch.com)
              </p>
            </li>
            <li className="flex justify-start flex-col items-start gap-1">
              <p className="heading-1 mt-5">
                9. DISPUTE RESOLUTION AND JURISDICTION
              </p>
              <ul className="pl-4">
                <li className="flex justify-start items-start gap-1">
                  <b>a)</b> Mediation: In case of any dispute between the
                  parties, the Parties will attempt to resolve the same amicably
                  amongst themselves, to the mutual satisfaction of both
                  Parties. In the event that the Parties are unable to reach
                  such an amicable solution within thirty (30) days of one Party
                  communicating the existence of a dispute to the other Party,
                  the dispute will be resolved by arbitration, as detailed
                  hereinbelow.
                </li>
                <li className="flex justify-start items-start gap-1">
                  <b>b)</b> Arbitration: In the event that the Parties are
                  unable to amicably resolve a dispute by mediation, said
                  dispute will be referred to arbitration by a sole arbitrator
                  to be appointed by the Company, and the award passed by such
                  sole arbitrator will be valid and binding on both Parties. The
                  Parties shall bear their own costs for the proceedings,
                  although the sole arbitrator may, in his/her sole discretion,
                  direct either Party to bear the entire cost of the
                  proceedings. The arbitration shall be conducted in English,
                  and the seat of Arbitration shall be the city of Mumbai in the
                  state of Maharashtra, India.
                </li>
              </ul>
              <p>
                The Parties expressly agree that the Terms, Policy and any other
                agreements entered into between the Parties are governed by the
                laws, rules and regulations of India, and that the Courts at
                Chennai, Tamil Nadu, shall have exclusive jurisdiction over any
                disputes arising between the Parties.
              </p>
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <h3 className="display-3 py-6 text-center dark:text-[#ddf3f0]">Terms of Services</h3>
          <p className="text-bodyText dark:text-[#ddf3f0]">
            Please read these Terms and Conditions carefully before using this
            site.
          </p>
          <div className="text-bodyText mt-5 dark:text-[#ddf3f0]">
            <h4 className="heading-4">1. WELCOME TO ENSUREKAR.COM!</h4>
            <p>
              Since we will not be meeting face to face, it is important to set
              out the terms of the agreement clearly in advance. If you have any
              queries about Ensurekar, please do not hesitate to contact us. In
              this agreement, we have referred to the Ensurekar service as the
              "service", to you as the "user" and to our agreement as the
              "agreement". If you wish to use our “Common Needs” feature, you
              affirm that you are more than 18 years of age and are fully able
              and competent to enter into the terms, conditions, obligations,
              affirmations, representations, and warranties consequent to the
              creation of the documents, and are aware of the same. Kindly call
              us for further assistance.
            </p>
            <h4 className="heading-4 mt-5">
              2. ENSUREKAR.COM ONLY PROVIDES A MEDIUM FOR INTERACTION
            </h4>
            <p>
              Ensurekar is an internet portal that facilitates communication
              between legal professionals and potential users of legal services.
              Ensurekar acts as a venue for providers and consumers of legal
              services to exchange information with the goal of eventually
              forming a professional relationship. Ensurekar does not guarantee
              that users will successfully find an advocate/lawyer/attorney
              through this system. Ensurekar takes no position and offers no
              opinion on when or if a lawyer-client relationship has been
              formed. In order to provide an optimal forum for lawyers and
              clients, Ensurekar does not involve itself in the agreements
              between lawyers and clients or the actual representation of
              clients. Therefore, we cannot ensure the completion of the
              agreement or the integrity of either party. The user, and not
              Ensurekar, is solely responsible for assessing the integrity,
              honesty, and trustworthiness of all persons with whom the user
              communicates on this service.
            </p>
            <ul className="pl-4 mt-4">
              <li className="flex justify-start items-start gap-1">
                <b>a)</b> Disclaimer of lawyer-client relationship: Ensurekar is
                not an agent of lawyers. It only facilitates the communication
                of lawyers and potential clients. Any electronic communication
                sent to Ensurekar alone will not create a lawyer-client
                relationship between the user and Ensurekar, such being
                expressly denied.
              </li>
              <li className="flex justify-start items-start gap-1">
                <b>b)</b> Ensurekar does not promote any User: Ensurekar seeks
                to help every needy litigant find lawyers best suited to his/her
                needs. Ensurekar is not intended to be a source of advertising
                or solicitation and the contents of the website should not be
                construed as legal advice. Ensurekar may recommend subscribing
                lawyers if they match a user’s requirements, but not otherwise.
                Transmission, receipt or use of Ensurekar does not constitute or
                create a lawyer-client relationship. No recipients of content
                from this website should act, or refrain from acting, based upon
                any or all of the contents of this site. We welcome the user to
                study the profiles of lawyers independently and make an informed
                choice.
              </li>
              <li className="flex justify-start items-start gap-1">
                <b>c)</b> Specifically, Ensurekar does not provide any avenue
                for solicitation: Ensurekar hides information about clients from
                lawyers until the client communicates with the lawyers directly
                or online. Therefore, the lawyers are not allowed to view
                private information about potential clients.
              </li>
              <li className="flex justify-start items-start gap-1">
                <b>d)</b> Ensurekar does not provide Legal Advice: Ensurekar
                ‘Common Needs’ feature uses only user supplied content to
                produce basic documents. The information provided in the ‘FAQs’
                section also does not amount to legal advice, such merely being
                commonly asked queries about Will making, Lease Agreement
                drafting, Cheque Dishonour notices, Money recovery notices,
                Power of Attorney to collect rent and other documents which may
                be added from time to time. Users are advised to consult lawyers
                if they need specialized guidance on any of these documents.
              </li>
              <li className="flex justify-start items-start gap-1">
                <b>e)</b> 'Common Needs'- Resale of Forms Prohibited: Ensurekar
                grants you a limited, personal, non-exclusive, non-transferable
                license to use our “Common Needs” feature for your own personal
                use, or if you are an attorney or professional, for your client.
                Except as otherwise provided, you acknowledge and agree that you
                have no right to modify, edit, copy, reproduce, create
                derivative works of, reverse engineer, alter, enhance or in any
                way exploit any of the Forms in any manner, except for
                modifications in filling out the Forms for your authorized use.
              </li>
              <li className="flex justify-start items-start gap-1">
                <b>f)</b> Disclaimer of representations by users: Ensurekar
                makes no representation, guarantee, or warranty (express or
                implied) as to the legal ability, competence, or quality of
                representation which may be provided by any of the lawyers or
                law firms which are listed through this site or any affiliate
                thereof.
              </li>
            </ul>
            <p className="mt-4">
              Please note that neither Ensurekar, nor any of its subsidiaries or
              employees are advocates. We are not a law firm and we do not
              provide legal advice. Nothing on our website or material sent to
              you in our communication is to be construed as legal advice.
            </p>
            <p className="mt-4">
              Our website, blog and other material is only for the purpose of
              spreading information and awareness and are not substitutes for
              the advices or services of an advocate or legal professional.
            </p>
            <p className="mt-4">
              Wherever required in order to fulfill your needs, we will
              facilitate a connection with a suitable professional such as
              lawyers, chartered accountants or company secretaries. Please bear
              in mind that such professionals are not our representatives,
              agents or employees. Our site and services are only one source of
              information among the many sources that are available to you. You
              may wish to consider multiple sources in order to make an informed
              decision.
            </p>
            <p className="mt-4">
              The decision to engage any of these professionals is an important
              one, and one that you must make carefully based solely on your own
              judgment. If you agree to avail of the services on our website,
              you are giving us permission to make this selection on your
              behalf. If you disagree with these terms and conditions, or do not
              want us to choose a suitable professional to fulfill your request,
              please do not use our services.
            </p>
            <p className="mt-4">
              We constantly strive to keep our content and documents accurate,
              current and up-to-date. However, because of changes in the law and
              regulations, we cannot and do not guarantee that any or all of the
              information on the site and other communication is completely
              current.
            </p>
            <p className="mt-4">
              Please be advised that sometimes, the law, legal requirements,
              rules and regulations are location specific and may differ from
              location to location. The general information or other material we
              provide cannot fit every situation or circumstance.
            </p>
            <p className="mt-4">
              Our sites and services are not intended to create any
              advocate-client relationship, and your use of our sites and
              services does not and will not in any circumstance create any such
              relationship between you and us.
            </p>
            <h4 className="heading-4 mt-5">3. USER GUIDELINES</h4>
            <p>
              The users of Ensurekar are granted a nonexclusive, limited right
              to access and use the service in accordance with the rules that
              are described in this contract. In order to keep this system
              attractive and useful for all users, it is important that users
              follow the rules of the system. Ensurekar reserves the right to
              deny further access to its service to any user who violates these
              rules, is the subject of complaints by other Ensurekar users or
              for any other reason.
            </p>
            <p className="mt-4">
              Users engaged in any of the following activities on our system
              will not be tolerated:
            </p>
            <ul className="pl-4 mt-4">
              <li>Foul or otherwise inappropriate language.</li>
              <li>Racist, hateful, or otherwise offensive comments.</li>
              <li>
                Promote or provide instructional information about illegal
                activities, or promoting physical harm or injury against any
                group or individual.
              </li>
              <li>
                {" "}
                Defame any person or group which includes people of all ages,
                races, religions, and nationalities.
              </li>
              <li>
                Violate the rights of another, including but not limited to the
                intellectual property rights of another. This includes using the
                service for acts of copyright, trademark, patent, trade secret,
                or other intellectual property infringement, including but not
                limited to offering pirated computer programs or links to such
                programs, information used to circumvent manufacturer-installed
                copy-protect devices, including serial or registration numbers
                for software programs, or any type of cracker utilities (this
                also includes files which are solely intended for game
                emulation).
              </li>
              <li>Violate Internet standards.</li>
              <li>
                Use the service for displaying harassing, abusive, threatening,
                harmful, vulgar, obscene, or tortuous material or invading
                other's privacy.
              </li>
              <li>
                Interfere with or disrupting the service or servers or networks
                connected to the service by posting advertisements or links to
                competing services, transmitting "junk mail", "spam", "chain
                letters", or unsolicited mass distribution of e-mail.
              </li>
              <li>
                Compromise the security of the service Ensurekar provides.
                Please do not try to gain access to system areas private to
                Ensurekar, or to other users.
              </li>
            </ul>
            <div>
              <h1 className="heading-4 mt-5">
                4. DISCLAIMER OF INFORMATION OBTAINED ON THE SERVICE AND SOME
                USER SUPPLIED CONTENT
              </h1>
              <b>a)</b> Disclaimer of information obtained on the Service
              <p className="pt-4">
                Ensurekar provides lawyers and potential clients with a forum
                whereby people who need legal representation or help are
                connected to providers of it. Ensurekar is a resource for
                informational purposes and is intended, but not promised or
                guaranteed to be correct, complete, and up-to-date. The
                accuracy, completeness or adequacy of Ensurekar is not warranted
                or guaranteed. Ensurekar further assumes no liability for the
                interpretation and/or use of the information contained on this
                website. The owner of this website does not intend links from
                this site to other websites to be referrals to, endorsements of,
                or affiliations with the linked entities. Ensurekar is not
                responsible for, and makes no representations or warranties
                about the contents of websites to which links may be provided
                from this website.
              </p>
              <p className="pt-4">
                Ensurekar will make every effort to ensure that promotional
                material of a user trying to promote himself on the website is
                deleted. Apart from this, the opinions and views expressed are
                those of the individual users of the service and do not reflect
                those of Ensurekar. Data submitted by other users (lay persons)
                is not verified or reviewed in any way before it appears on the
                Ensurekar website. Please use due caution when using this site.
              </p>
              <p className="pt-4">
                Ensurekar makes every effort to verify that lawyers who
                subscribe to the service are licensed and in good standing with
                the local bar at the time of registration. However, Ensurekar
                cannot track, verify, or monitor the standing of lawyers using
                the Service. Therefore, Ensurekar makes no representation
                regarding the status, standing or ability of lawyers or law firm
                that is listed on the site. Users are urged to make their own
                independent investigation and evaluation of lawyers or law firm
                being considered. The determination of the need for legal
                services and the choice of lawyers are extremely important
                decisions and should not be based solely on claims of expertise,
                or on the cost of rendering the requested legal services.
              </p>
              <p className="pt-4">
                Ensurekar is not responsible for, and in no way endorses any
                description or indication of specialization or limitation of
                practice by lawyers or law firm. Efforts will be made to avoid
                false information, but please be aware that no agency or board
                may have certified such lawyers as a specialists or experts in
                any indicated field of law practice. In addition, lawyers
                claiming specialization is not necessarily any more competent
                than other lawyers. It is up to the user to question the lawyers
                on the factual basis of any statement they make, ask for the
                names of the certifying agencies, and verify all information.
              </p>
              <p className="pt-4">
                Users are encouraged to use caution when reviewing any
                information submitted by lawyers and other parties. Although
                Ensurekar requires lawyers to comply with all regulations
                governing lawyers conduct, it is impossible for Ensurekar to
                monitor lawyers' integrity.
              </p>
              <p className="my-5 font-semibold">
                Ensurekar in no way endorses the content or legality of any
                offers, statements, or promises made by lawyers or any other
                parties, on or off this site.
              </p>
              <b>b)</b> Disclaimer of content supplied by users in the form of
              reviews, comments, communications, and other content
              <p className="pt-4">
                At various locations on the Site, Ensurekar may permit visitors
                to post reviews, comments, and other content (the "user
                content"). Ensurekar is not the publisher or author of such user
                content. It only stores and disseminates the ideas and opinions
                that Ensurekar members may choose to post and distribute as user
                content. Ensurekar disclaims all responsibility for this
                content. If any offending material is brought to the notice of
                Ensurekar, it will be deleted as soon as is possible. Whether
                such material is indeed offending will be finally be left to the
                discretion of Ensurekar.
              </p>
              <h4 className="heading-4 mt-5">5. LIMITATIONS ON USE</h4>
              <p>
                The contents of Ensurekar are for personal use only and not for
                commercial exploitation. You may not decompile, reverse
                engineer, disassemble, rent, lease, loan, sell, sublicense, or
                create derivative works from Ensurekar. Nor may you use any
                network monitoring or discovery software to determine the site
                architecture, or extract information about usage or users. You
                may not use any robot, spider, other automatic device, or manual
                process to monitor or copy the contents without taking prior
                written permission from Ensurekar. You may not copy, modify,
                reproduce, republish, distribute, display, or transmit for
                commercial, non-profit or public purposes all or any portion of
                Ensurekar, except to the extent permitted above. You may not use
                or otherwise export or re-export Ensurekar or any portion
                available on or through Ensurekar in violation of the export
                control laws and regulations of India. Any unauthorized use of
                Ensurekar or its content is prohibited.
              </p>
              <h4 className="heading-4 mt-5">6. CONFIDENTIALITY</h4>
              <p>
                Ensurekar makes every effort to maintain the confidentiality of
                any information submitted by users to our system and our
                database of lawyers. The user is however warned that the use of
                the internet or e-mail for confidential or sensitive information
                is susceptible to risks that inevitably arise on this medium.
                Additionally, because Ensurekar cannot control the conduct of
                others, we cannot guarantee that this information will remain
                confidential. Please use caution in deciding what information to
                input into the System. Do not make any confessions or
                admissions. The user should preferably describe their issue or
                dispute in the general terms only. Specific information should
                only be revealed after the user has selected an
                advocate/lawyer/attorney and made contact outside the service
                (e.g. via telephone or appointment). Subscribing lawyers using
                this service should refrain from asking any user to reveal any
                specific or confidential information through the service.
                Ensurekar is not responsible for the release or improper use of
                such information by users or any release due to error or failure
                in the System.
              </p>
              <h4 className="heading-4 mt-5">7. INDEMNIFICATION</h4>
              <p>
                The user agrees that Ensurekar is not responsible for any harm
                that his/her use of this service may cause. The user agrees to
                indemnify, defend, and hold Ensurekar harmless from and against
                any and all liability and costs incurred in connection with any
                loss, liability, claim, demand, damage, and expenses arising
                from or in connection with the contents or use of the service.
                The user agrees that this defense and indemnity shall also apply
                to any breach by the user of the agreement or the foregoing
                representations, warranties and covenants. The user further
                agrees that this defense and indemnity shall include without
                limitation of lawyers fees and costs. The user also agrees that
                this defense and indemnity shall apply to Ensurekar, its
                founders, officers and employees. Ensurekar reserves the right,
                at its own expense, to assume the exclusive defense and control
                of any matter otherwise subject to indemnification by the user
                and the user shall not in any event settle any matter without
                the written consent of Ensurekar.
              </p>
              <h4 className="heading-4 mt-5">
                8. COMMUNICATIONS AND OTHER DATA
              </h4>
              <p>
                Ensurekar is not responsible for any loss of data resulting from
                accidental or deliberate deletion, network or system outages,
                backup failure, file corruption, or any other reasons.
              </p>
              <h4 className="heading-4 mt-5">
                9. LICENSE OF YOUR CONTENTS TO Ensurekar
              </h4>
              <p>
                By uploading content to or submitting any materials for use on
                Ensurekar, you grant (or warrant that the owner of such rights
                has expressly granted) Ensurekar a perpetual, royalty-free,
                irrevocable, non-exclusive right and license to use, reproduce,
                modify, adapt, publish, translate, create derivative works from
                and distribute such materials or incorporate such materials into
                any form, medium, or technology now known or later developed.
                Ensurekar however gives an assurance that any information of a
                sensitive nature will not be intentionally disclosed and
                revealed to any third party.
              </p>
              <h4 className="heading-4 mt-5">
                10. Ensurekar PROPRIETARY RIGHTS
              </h4>
              <p>
                Except as expressly provided in these terms and conditions,
                nothing contained herein shall be construed as conferring any
                license or right, by implication, estoppels or otherwise, under
                copyright or other intellectual property rights. The user agrees
                that the content and Web Site are protected by copyright,
                trademark, service marks, patents or other proprietary rights
                and laws. The user acknowledges and agrees that the user is
                permitted to use this material and information only as expressly
                authorized by Ensurekar, and may not copy, reproduce, transmit,
                distribute, or create derivative works of such content or
                information without express authorization. The user acknowledges
                and agrees that Ensurekar can display images and text throughout
                the Service. Users cannot extract and publish any information
                from the system, either electronically or in print, without the
                permission of Ensurekar and the permission of all other
                concerned parties. This is not a complete list - other things on
                the system are also Ensurekar property. Contact Ensurekar before
                copying anything from the system with plans of reproducing it or
                distributing it.
              </p>
              <h4 className="heading-4 mt-5">11. LINKING TO Ensurekar.COM</h4>
              <p>
                Users are welcome to provide links to the homepage of Ensurekar,
                provided they do not remove or obscure, by framing or otherwise,
                any portion of the homepage and that you discontinue providing
                links to the site if requested by Ensurekar.
              </p>
              <h4 className="heading-4 mt-5">12. ADVERTISERS</h4>
              <p>
                Ensurekar may contain advertising and sponsorship. Advertisers
                and sponsors are responsible for ensuring that material
                submitted for inclusion on Ensurekar is accurate and complies
                with applicable laws. Ensurekar will not be responsible for the
                illegality of or any error or inaccuracy in advertisers' or
                sponsors' materials.
              </p>
              <h4 className="heading-4 mt-5">13. REGISTRATION</h4>
              <p>
                Certain sections of Ensurekar may require you to register. If
                registration is requested, you agree to provide Ensurekar with
                accurate and complete registration information. It is your
                responsibility to inform Ensurekar of any changes to that
                information. Each registration is for a single person only,
                unless specifically designated otherwise on the registration
                page. Ensurekar does not permit a) any other person using the
                registered sections under your name; or b) access through a
                single name being made available to multiple users on a network.
                You are responsible for preventing such unauthorized use. If you
                believe there has been unauthorized use, please notify Ensurekar
                immediately by contacting us. If we find that unauthorized use
                is being made of Ensurekar and the services we provide, the
                right of any or many users may be terminated.
              </p>
              <h4 className="heading-4 mt-5">14. ERRORS AND CORRECTIONS</h4>
              <p>
                Ensurekar does not represent or warrant that the service will be
                error-free, free of viruses or other harmful components, or that
                defects will be corrected. Ensurekar may make improvements
                and/or changes to its features, functionality or service at any
                time.
              </p>
              <h4 className="heading-4 mt-5">15. THIRD PARTY CONTENT</h4>
              <p>
                Third party content may appear on Ensurekar or may be accessible
                via links from Ensurekar. Ensurekar is not responsible for and
                assumes no liability for any mistakes, misstatements of law,
                defamation, slander, libel, omissions, falsehood, obscenity or
                profanity in the statements, opinions, representations or any
                other form of information contained in any third party content
                appearing on Ensurekar. You understand that the information and
                opinions in the third party content is neither endorsed by nor
                does it reflect the belief of Ensurekar.
              </p>
              <h4 className="heading-4 mt-5">16. UNLAWFUL ACTIVITY</h4>
              <p>
                Ensurekar reserves the right to investigate complaints or
                reported violations of the Agreement and to take any action
                Ensurekar deems appropriate including but not limited to
                reporting any suspected unlawful activity to law enforcement
                officials, regulators, or other third parties and disclosing any
                information necessary or appropriate to such persons or entities
                relating to user profiles, e-mail addresses, usage history,
                posted materials, IP addresses and traffic information.
              </p>
              <h4 className="heading-4 mt-5">17. REMEDIES FOR VIOLATIONS</h4>
              <p>
                Ensurekar reserves the right to seek all remedies available at
                law and in equity for violations of the Agreement, including but
                not limited to the right to block access from a particular
                Internet address to Ensurekar and its features.
              </p>
              <h4 className="heading-4 mt-5">18. CONFLICTS CHECKS</h4>
              <p>
                The user understands that registered lawyers will not be able to
                and will not perform a check for conflicts of interest between
                the user and other clients of the registered lawyers prior to
                responding to a request. Conflict checks require the user to
                provide their name and contact information and the identity of
                any affiliated entities, opposing individuals and entities, and
                such other information as lawyers may require. Conflict checks
                by registered lawyers who obtains information from the user
                through this service are not possible since submissions by the
                user to subscribing lawyers are not sufficient to conduct such a
                check.
              </p>
              <h4 className="heading-4 mt-5">19. SEVERABILITY OF PROVISIONS</h4>
              <p>
                The Agreement and the Privacy Policy constitute the entire
                agreement with respect to the use of the service provided by
                Ensurekar. If any provision of these terms and conditions is
                unlawful, void or unenforceable then that provision shall be
                deemed severable from the remaining provisions and shall not
                affect their validity and enforceability.
              </p>
              <h4 className="heading-4 mt-5">
                20. MODIFICATIONS TO TERMS OF USE
              </h4>
              <p>
                Ensurekar may change the agreement at any time. The user will be
                responsible for checking the Terms and Conditions before use.
                Use of the service after the change will indicate acceptance of
                the new terms and conditions.
              </p>
              <h4 className="heading-4 mt-5">21. MODIFICATIONS TO SERVICE </h4>
              <p>
                Ensurekar reserves the right to modify or discontinue,
                temporarily or permanently, the service with or without notice
                to the user. The user agrees that Ensurekar shall not be liable
                to the user or any third party for any modification or
                discontinuance of the service. The user acknowledges and agrees
                that any termination of service under any provision of this
                agreement may be effected without prior notice, and acknowledges
                and agrees that Ensurekar may immediately delete data and files
                in the user's account and bar any further access to such files
                or the Service.
              </p>
              <h4 className="heading-4 mt-5">
                22. DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY{" "}
              </h4>
              <p className="mt-2">
                A great danger for Ensurekar, and for all operators of online
                systems, is that we might be held accountable for the wrongful
                actions of our users. If one user libels another user, the
                injured user might blame us, even though the first user was
                really at fault. If a user uploads a program with a computer
                virus, and the other users' computers are damaged, we might be
                blamed even though a user left the virus on our System. If a
                user transmits illegal or improper information to another user,
                we might be blamed even though we did nothing more than
                unknowingly carry the message from one user to another.
                Accordingly, we need all users to accept responsibility for
                their own acts, and to accept that an act by another user that
                damages them must not be blamed on us, but only on the other
                user.
              </p>
              <p className="py-3">
                Although it is the goal of Ensurekar to provide users with
                reliable and quality systems, we may make mistakes or experience
                system failure from time to time. Such problems are inevitable
                in operating a system of this size. We would not be able to make
                this system available to users if we had to accept blame or
                financial liability for any usability problems, system failures
                or errors, or mistakes or damages of any kind. In order to
                continue offering and improving our service, Ensurekar must deny
                any warranties on this service and state that our liability for
                any problems connected with the use of our system is strictly
                limited.
              </p>
              <p>These needs are accomplished by the following disclaimers:</p>
              <p>
                <b>a) Disclaimer of Warranties</b>
                <br />
                The user expressly agrees that use of the service is at the
                user's sole risk. The service is provided on an "as is" and "as
                available" basis. Ensurekar expressly disclaims all warranties
                of any kind, whether express or implied, including, but not
                limited to the implied warranties of merchantability, fitness
                for a particular purpose and non-infringement. Ensurekar makes
                no warranty that the service will meet a user's requirements,
                that the service will be uninterrupted, timely, secure, or
                error-free; nor does Ensurekar make any warranty as to the
                results that may be obtained from the use of the service or as
                to the accuracy or reliability of any information obtained
                through the service or that defects in the software will be
                corrected. Ensurekar makes no warranty regarding any goods or
                services purchased or information obtained through the service
                or any transactions entered into through the service. <br />
                No advice or information, whether oral or written, obtained by
                the User from Ensurekar shall create any warranty not expressly
                stated herein.
              </p>
              <p>
                <b>b) Limitation of Liability</b>
                <br /> The user agrees that Ensurekar shall not be liable for
                any direct, indirect, incidental, special or consequential
                damages resulting from the use or the inability to use the
                service or for the cost of procurement of substitute goods and
                services or resulting from any goods or services purchased or
                obtained or messages received or transactions entered into
                through or from the service or resulting from unauthorized
                access to or alteration of user's transmissions or data,
                including, but not limited to damages for loss of profits, use,
                data or other intangibles, even if Ensurekar has been advised of
                the possibility of such damages. The user further agrees that
                Ensurekar shall not be liable for any damages arising from
                interruption, suspension or termination of service, including,
                but not limited to direct, indirect, incidental, special,
                consequential or exemplary damages, whether or not such
                interruption, suspension or termination was justified,
                negligent, intentional or inadvertent.
              </p>
              <h4 className="heading-4 mt-5">23. ARBITRATION</h4>
              <p>
                Any controversy or claim arising out of or relating to this
                Agreement or Ensurekar services shall be settled by binding
                Arbitration in accordance with laws of India. Any such
                controversy or claim shall be arbitrated on an individual basis,
                and shall not be consolidated in any arbitration with any claim
                or controversy of any other party. Any other dispute or
                disagreement of a legal nature will also be decided in
                accordance with the laws of India, and the Courts of Chennai
                shall have jurisdiction in all such cases.
              </p>
              <h4 className="heading-4 mt-5">24. OWNERSHIP</h4>
              <p>
                This Site is owned and operated by Ensurekar. All right, title
                and interest in and to the materials provided on this Site,
                including but not limited to information, documents, logos,
                graphics, sounds and images (the "Materials") are owned by
                Ensurekar. Except as otherwise expressly provided by Ensurekar,
                none of the materials may be copied, reproduced, republished,
                downloaded, uploaded, posted, displayed, transmitted or
                distributed in any way and nothing on this Site shall be
                construed to confer any license under any of Ensurekar's
                intellectual property rights, whether by estoppel, implication
                or otherwise. Contact us if you have any questions about
                obtaining such licenses. Ensurekar does not sell, license, lease
                or otherwise provide any of the materials other than those
                specifically identified as being provided by Ensurekar. Any
                rights not expressly granted herein are reserved by Ensurekar.
              </p>
              <h4 className="heading-4 mt-5">25. ENTIRE AGREEMENT</h4>
              <p>
                This agreement constitutes the entire and whole agreement
                between user and Ensurekar, and is intended as a complete and
                exclusive statement of the terms of the agreement. This
                agreement shall supersede all other communications between
                Ensurekar and its users with respect to the subject matter
                hereof and supersedes and replaces all prior or contemporaneous
                understandings or agreements, written or oral, regarding such
                subject matter. If at any time you find these Terms and
                Conditions unacceptable or if you do not agree to these Terms
                and Conditions, please do not use this Site. We may revise these
                Terms and Conditions at any time without notice to you. It is
                your responsibility to review these Terms and Conditions
                periodically.
              </p>
              <p className="my-5">
                By using Ensurekar services or accessing the Ensurekar site, you
                acknowledge that you have read these terms and conditions and
                agree to be bound by them.
              </p>
              <h4 className="heading-4 mt-5">26. INDEMNIFICATION</h4>
              <p>
                You agree to defend, indemnify and hold harmless Ensurekar, our
                officers, directors, shareholders, employees and agents from and
                against any and all claims, liabilities, damages, losses or
                expenses, including reasonable attorneys' fees and costs,
                arising out of or in any way connected with your access to or
                use of the site and the materials.
              </p>
              <h4 className="heading-4 mt-5">
                27. CANCELLATION AND REFUND POLICY
              </h4>
              <p className="pt-2">
                We strive to ensure that the services you avail through our
                website are to your full satisfaction, and are the best in the
                Industry at extremely reasonable and affordable rates. However,
                there may arise situations when you desire a refund. Firstly,
                when you pay for the services but later on decide that you do
                not wish to avail them. Secondly, when there is a delay in the
                services offered from our side, beyond the time frame we have
                intimated to you, due to human error i.e., factors for which we
                are solely responsible. Thirdly, although we highly doubt it,
                you might find our services unsatisfactory. In all three
                situations, kindly send in an e-mail to on the Ticket that has
                been created in your name, marking a copy to
                attention@Ensurekar.com. We would like to clarify that only
                refunds of the professional fees component of the charges paid
                by you shall be considered for a refund.
              </p>
              <p className="pt-2">
                Upon receiving your mail, the Senior Management at Ensurekar
                shall decide on whether your request for a refund should be
                processed, contingent on the reasons for such a request. Please
                note that we reserve the right to take the final and binding
                decision with regard to requests for refund. Most importantly,
                we wish to clarify that in cases outside our control, including
                but not limited to national holidays, department holidays,
                delays on the part of the Government of India, the respective
                State Governments, Our affiliates or elsewhere, acts of war,
                acts of God, earthquake, riot, sabotage, labour shortage or
                dispute, internet interruption, power disruption, lack of phone
                network connectivity, technical failures, breakage of sea cable,
                hacking, piracy, we shall not liable for any delays.
              </p>
              <p className="pt-2">
                If we confirm your request for refund, subject to the terms and
                conditions mentioned herein or elsewhere, we will send you an
                e-mail seeking the details required to refund the amount which
                may include your Bank Account details such as the account number
                and the IFS code of the branch in question. Kindly note that it
                will take us a minimum of about 48-72 working hours from the
                receipt of all such information to process the refund and
                initate the transfer.
              </p>
              <p className="pt-2">
                {" "}
                We reiterate once again that only the professional fees paid for
                our services shall be refunded, subject to the discretion of the
                Senior Management at Ensurekar.com.
              </p>
              <p className="pt-2">
                We assure you that we are continuously working to improve our
                services and are we are welcome to any suggestions from your
                end. For any other queries please contact out customer service
                desk at Ensurekar.com.
              </p>
              <p className="my-5 text-center">
                We appreciate your interest and support and we welcome you to
                our community!
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="display-3 py-6 text-center dark:text-[#ddf3f0]">Cookie policy –</h3>
          <p className="text-bodyText dark:text-[#ddf3f0]">
            <b> We don't share personal information.</b> <br />
            By using this website, you're confirming that you're happy to accept
            our use of cookies. This page tells you more about what cookies are
            and how we use them.
          </p>
          <div className="text-bodyText mt-5 gap-y-5 dark:text-[#ddf3f0]">
            <h4 className="heading-4 mt-3">1.What are cookies?</h4>
            <p className="mt-3">Cookies are small data files that are placed onto your computer's hard drive or in your web browser memory when you visit a website. Almost every website uses cookies.</p>
            <h4 className="heading-4 mt-3"> 2.What are cookies for?</h4>
            <p className="mt-3">Cookies help to make your experience of using a website better. For example, they can remember the information you supply as you register with a website so that you can sign in with one click next time. What cookies don't do is store any confidential information about you personally.</p>
            <p className="mt-1">The cookies on our website simply allow us to track generic usage of our website - not your individual usage behaviour.</p>
            <h4 className="heading-4 mt-3">3.Are cookies safe?</h4>
            <p className="mt-3">Yes, they are. Cookies are small text files. They can't look into your computer or read any personal information or other material on your hard drive. Cookies can't transmit viruses or install anything harmful on your computer.</p>
            <h4 className="heading-4 mt-3">4. Why should I keep cookies turned on?</h4>
            <p className="mt-3">We would like you to keep cookies active on your computer during your visits to our website because parts of the site rely on them to work properly. For example, you would not be able to view a location map without them.</p>
            
          </div>
        </div> */}


        {/**------------------------------------------ */}

        {/* <div className="">
          <h3 className="heading-3 py-6">Limitation of Liability</h3>
          <p className="text-bodyText">
          EnsureKar is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our platform or services. Users are responsible for ensuring their compliance with legal and tax regulations.
          </p>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Termination of Services</h3>
          <p className="text-bodyText">
          We reserve the right to suspend or terminate accounts if users violate our terms, engage in illegal activities, or provide false information.
          </p>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Governing Law & Dispute Resolution</h3>
          <p className="text-bodyText">
          These Terms & Conditions are governed by the laws of India. Any disputes shall be resolved through arbitration in [City, State], as per Indian Arbitration laws.
          </p>
        </div>

        <div className="">
          <h3 className="heading-3 py-6"> Contact Information</h3>
          <p className="text-bodyText">
          For any queries regarding our Terms & Conditions, contact us at <Link href="mailto:connect@ensurekar.in" className='text-blue-800'>connect@ensurekar.in</Link>.
          </p>
        </div> */}

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
    </div>
  );
};

export default page;


