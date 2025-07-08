"use client";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/careerinensurekar"
import { Envelope, MapPin, PencilSimple, PhoneCall, Briefcase, Clock } from "phosphor-react";
import React, { FormEvent } from "react";
import Image from "next/image";
import contact_page_img from "../images/contact_page_img.png";
import { ContactUs } from "@/api/SEOSetup/contact";
import { motion } from "framer-motion";

const Contact = () => {

  const [message, setMessage] = React.useState<string | null>(null);
  interface ContactForm {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
    origin: string;
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    const contactForm: ContactForm = {
      firstName: data.firstName as string,
      lastName: data.lastName as string,
      email: data.email as string,
      subject: data.subject as string,
      message: data.message as string,
      origin: "contact",
    };
    const response = await ContactUs(contactForm);
    if (response.status === 'success') {
      setMessage(response.message);
      setTimeout(() => {
        setMessage(null);
      }, 10000);
    } else {
      setMessage("Failed to send message");
    }
  }

  return (
    <div>
      <BreadcrumbSection />
      <div>
        {message && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 duration-300">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-10 rounded shadow-lg text-center"
            >
              <div>
                <h3 className="text-2xl font-bold mb-5">Message</h3>
                <p className="font-semibold text-bodyText">{message}</p>

              </div>
              <div className="flex justify-end mr-5 mt-5">
                <button
                  onClick={() => setMessage(null)}
                  className="mt-4 py-2 px-4 bg-s2 text-bodyText font-bold rounded"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>

      {/* Job Vacancies Section */}
      <section className="container grid grid-cols-12 stp-30 sbp-30">
        <div className="col-span-12 text-center mb-10">
          <h2 className="display-4 pb-5 dark:text-white">Current Job Openings</h2>
          <p className="text-bodyText dark:text-white">Join our team and grow your career with us</p>
        </div>

        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vacancy 1 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="bg-p1 text-white text-2xl rounded-full p-3 mr-4">
                <Briefcase weight="fill" />
              </div>
              <div>
                <h3 className="heading-3 dark:text-white">Business Development Executive</h3>
                <p className="text-bodyText dark:text-gray-300">Full-time • Experience: 1-3 years</p>
              </div>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2 dark:text-white">Key Responsibilities:</h4>
              <ul className="text-bodyText text-sm space-y-1 dark:text-gray-300">
                <li>• Identify and develop new business opportunities</li>
                <li>• Build and maintain client relationships</li>
                <li>• Achieve sales targets and KPIs</li>
                <li>• Prepare proposals and presentations</li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2 dark:text-white">Requirements:</h4>
              <ul className="text-bodyText text-sm space-y-1 dark:text-gray-300">
                <li>• Bachelor's degree in Business/Marketing</li>
                <li>• Excellent communication skills</li>
                <li>• Strong negotiation abilities</li>
                <li>• Experience in B2B sales preferred</li>
              </ul>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-bodyText text-sm dark:text-gray-300">
                <Clock weight="fill" className="mr-2" />
                <span>Apply by: 31st July 2025</span>
              </div>
              {/* <button className="py-2 px-4 bg-p1 text-white border border-p1 hover:bg-s2 hover:border-mainTextColor hover:text-mainTextColor duration-500 rounded">
                Apply Now
              </button> */}
            </div>
          </div>

          {/* Vacancy 2 */}
          {/* <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="bg-p1 text-white text-2xl rounded-full p-3 mr-4">
                <Briefcase weight="fill" />
              </div>
              <div>
                <h3 className="heading-3 dark:text-white">Digital Marketing Specialist</h3>
                <p className="text-bodyText dark:text-gray-300">Full-time • Experience: 2-4 years</p>
              </div>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2 dark:text-white">Key Responsibilities:</h4>
              <ul className="text-bodyText text-sm space-y-1 dark:text-gray-300">
                <li>• Develop and execute digital marketing campaigns</li>
                <li>• Manage social media platforms and content</li>
                <li>• SEO/SEM optimization and analytics</li>
                <li>• Create engaging content for various channels</li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2 dark:text-white">Requirements:</h4>
              <ul className="text-bodyText text-sm space-y-1 dark:text-gray-300">
                <li>• Bachelor's degree in Marketing/Communications</li>
                <li>• Proficiency in Google Analytics, AdWords</li>
                <li>• Experience with social media management</li>
                <li>• Creative thinking and analytical skills</li>
              </ul>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-bodyText text-sm dark:text-gray-300">
                <Clock weight="fill" className="mr-2" />
                <span>Apply by: 31st July 2025</span>
              </div>
              {/* <button className="py-2 px-4 bg-p1 text-white border border-p1 hover:bg-s2 hover:border-mainTextColor hover:text-mainTextColor duration-500 rounded">
                Apply Now
              </button> *}
            </div>
          </div> */}
        </div>
      </section>

      <section className="container grid grid-cols-12 stp-30 sbp-30">
        <div className="col-span-12 lg:col-span-8 lg:col-start-3 grid grid-cols-12 gap-4 lg:gap-6">
          <div className="flex flex-col justify-start items-start p-4 lg:p-8 bg-p1 text-white w-full col-span-12 sm:col-span-4 border border-p1 hover:bg-s2 hover:text-mainTextColor hover:border-mainTextColor duration-500 group">
            <div className="bg-white text-p1 text-2xl rounded-full p-4 group-hover:text-white group-hover:bg-mainTextColor duration-500 !leading-[0]">
              <Envelope weight="fill" />
            </div>
            <h4 className="heading-4 pt-5 pb-2">Chat with Us</h4>
            <a href="mailto:Infoensurekar@gmail.com">Infoensurekar@gmail.com</a>
          </div>
          <div className="flex flex-col justify-start items-start p-4 lg:p-8 bg-p1 text-white w-full col-span-12 sm:col-span-4 border border-p1 hover:bg-s2 hover:text-mainTextColor hover:border-mainTextColor duration-500 group">
            <div className="bg-white text-p1 text-2xl rounded-full p-4 group-hover:text-white group-hover:bg-mainTextColor duration-500 !leading-[0]">
              <PhoneCall weight="fill" />
            </div>
            <h4 className="heading-4 pt-5 pb-2">Contact us </h4>
            <a href="tel:Ensurekar@gmail.com">7470756060, 8878440844</a>
          </div>
          <div className="flex flex-col justify-start items-start p-4 lg:p-8 bg-p1 text-white w-full col-span-12 sm:col-span-4 border border-p1 hover:bg-s2 hover:text-mainTextColor hover:border-mainTextColor duration-500 group">
            <div className="bg-white text-p1 text-2xl rounded-full p-4 group-hover:text-white group-hover:bg-mainTextColor duration-500 !leading-[0]">
              <MapPin weight="fill" />
            </div>
            <h4 className="heading-4 pt-5 pb-2">Visit Our Office</h4>
            <p>2360 Tiwari Sadan , Wright Town , Jabalpur</p>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8 lg:col-start-3 border p-4 sm:p-6 lg:p-10">
          <h4 className="heading-4 pb-6">Fill the Form Below</h4>

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
            <div className="col-span-2 sm:col-span-1">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="placeholder:text-bodyText py-4 px-8 border w-full"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="placeholder:text-bodyText py-4 px-8 border w-full"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1 py-4 px-8 border flex justify-start items-center gap-2">
              <span className="text-xl text-bodyText">
                <Envelope weight="fill" />
              </span>
              <input
                type="email"
                name="email"
                placeholder="Type email address"
                className="placeholder:text-bodyText w-full outline-none"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1 py-4 px-8 border flex justify-start items-center gap-2">
              <span className="text-xl text-bodyText">
                <PencilSimple weight="fill" />
              </span>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="placeholder:text-bodyText w-full outline-none"
                required
              />
            </div>
            <div className="col-span-2 py-4 px-8 border flex justify-start items-center gap-2">
              <textarea
                name="message"
                placeholder="Type Your message..."
                className="placeholder:text-bodyText w-full outline-none h-[200px]"
                required
              ></textarea>
            </div>
            <div className="col-span-2 table-checkbox flex justify-between items-center max-[400px]:flex-col max-[400px]:items-start gap-5">
              {/* <label className="flex justify-start items-center gap-2">
                <input type="checkbox" className=" " />
                <span>Subscribe to our newsletter.</span>
              </label> */}
              <button className="py-2 sm:py-3 px-4 sm:px-6 bg-p1 text-white block text-center border border-p1 hover:bg-s2 hover:border-mainTextColor hover:text-mainTextColor duration-500">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="container grid grid-cols-12 gap-6 sbp-30">
        <div className="col-span-12 md:col-span-5 xl:col-span-4 flex flex-col justify-center items-start">
          <h2 className="display-4 pb-5 dark:text-white">Our Office</h2>
          <p className="text-bodyText pb-8 lg:pb-15 dark:text-white">
            If you prefer an in-person meeting, our office is open during
            business hours.
          </p>

          <ul className="flex flex-col gap-6 lg:gap-10">
            <li className="flex justify-start items-start gap-3">
              <div className="bg-mainTextColor text-white text-3xl p-3 rounded-full !leading-[0]">
                <MapPin weight="fill" />
              </div>
              <div className="">
                <h4 className="heading-4 pb-1 dark:text-white">Jabalpur, Madhya Pradesh</h4>
                <p className="dark:text-white">2360 Tiwari Sadan, Jabalpur, Madhya Pradesh</p>
              </div>
            </li>
          </ul>
        </div>

        {/* <div className="col-span-12 md:col-span-7 xl:col-start-6 overflow-hidden">
          <Image
            src={contact_page_img}
            alt="image"
            className="hover:scale-110 duration-500 w-full h-full"
          />
        </div> */}
        <div className="col-span-12 md:col-span-7 xl:col-start-6 overflow-hidden">
          <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.1872076984246!2d79.9189809743064!3d23.163366511061255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981af39ce977003%3A0xec01b518cc9bc2d6!2sEnsurekar!5e0!3m2!1sen!2sin!4v1746511287857!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full border-0 hover:scale-110 duration-500"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Contact;