"use client";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/Contact";
import { Envelope, MapPin, PencilSimple, PhoneCall } from "phosphor-react";
import React, { FormEvent } from "react";
import Image from "next/image";
import contact_page_img from "../../images/Office.png";
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
    console.log(response);
    if (response.message ===  'Email sent successfully') {
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

        <div className="col-span-12 md:col-span-7 xl:col-start-6 overflow-hidden">
          <Image
            src={contact_page_img}
            alt="image"
            className="hover:scale-110 duration-500 w-full h-full"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
