"use client";
import React, { FormEvent, useEffect, useState } from "react";
import breadcrump_icon from "../../images/breadcrump_icon.png";
import BreadcrumbDataimage from "../../images/SGV-Types/Startup-Breadcrumb-Section.svg";
import { useRouter } from "next/navigation";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CaretRight, House, X } from "phosphor-react";
import confused from "../../images/confused.png";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "@/store";
import { addToCart, setInitialRoutes } from "@/store/store";
import { ContactForm } from "../../../../types/ContactUs";
import { ContactUs } from "@/api/SEOSetup/contact";
import { motion } from "framer-motion";

const BreadcrumbSection = ({
  BreadcrumbData //, scrollToPlans 
}: {
  BreadcrumbData: {
    title: string;
    id?: string;
    heading: string;
    subHeading?: string;
    description: string;
    image: string | StaticImageData;
    bottomHeading?: string;
    sampleLink?: string;
    cartDetails?: {
      id: number;
      name: string;
      price: number;
      quantity: number;
      subtotal: number;
      image: string | StaticImageData;
    };
  };
  //scrollToPlans: any
}) => {
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 180000);

    return () => clearTimeout(timer);
  }, []);
  const handleBuy = () => {




    // const { initialRoutes, isAuthenticated, authToken, userInfo } = themeConfig;
    // const urlId = window.location.pathname.split("/").pop();
    // dispatch(
    //   addToCart({
    //     id: BreadcrumbData.cartDetails?.id ?? urlId ?? 0,
    //     name: BreadcrumbData.cartDetails?.name ?? BreadcrumbData.heading,
    //     price: BreadcrumbData.cartDetails?.price ?? 100,
    //     quantity: BreadcrumbData.cartDetails?.quantity ?? 1,
    //     subtotal: BreadcrumbData.cartDetails?.subtotal ?? 100,
    //     image: BreadcrumbData.cartDetails?.image ?? BreadcrumbData.image,
    //   })
    // );
    // if (isAuthenticated && authToken && userInfo) {
    //   dispatch(setInitialRoutes("/cart"));
    //   router.push("/cart");
    // } else {
    //   dispatch(setInitialRoutes(window.location.pathname));
    //   router.push("/Login");
    // }
  };
  //  const hanleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data = Object.fromEntries(formData.entries());
  setIsOpen(false);
 const TalkToExpert : ContactForm = {
    firstName: data.firstName as string,
    lastName: data.lastName as string,
    email: data.email as string,
    subject: data.subject as string,
    message: "",
    origin: "Talk_To_Expert",
    phone: data.phone as string,
  };
  setMessage("Sending Message...");
  const response = await ContactUs(TalkToExpert);
  if (response.status === "success") {

    setMessage(response.message);
    setTimeout(() => {
      setMessage(null);
     
    }, 10000);
  } else {
    alert("Failed to send message");
  }
  }
  return (
    <>
      <section className="stp-30 sbp-30 bg-softBg1 relative max-xxl:overflow-hidden">
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
                {BreadcrumbData.title}
              </li>
            </ul>

            <h1 className="display-3 pt-4">{BreadcrumbData.heading}</h1>
            <div className="text-2xl font-bold mt-6">
              {BreadcrumbData.subHeading}
            </div>
            <p className="text-bodyText pt-2">{BreadcrumbData.description}</p>
            <div className="mt-10">
              <h3
                className="heading-6 font-semibold opacity-80 text-mainText "
                dangerouslySetInnerHTML={
                  BreadcrumbData.bottomHeading
                    ? { __html: BreadcrumbData.bottomHeading }
                    : undefined
                }
              ></h3>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-center flex-col items-center">
            <div className="flex justify-center items-center  flex-col">
              <div className="gap-6  p-5 flex  ">
                <button
                  className="py-2.5 min-w-[150px] bg-yellow-400 border rounded  block text-center   hover:border-mainTextColor font-bold duration-500 text-slate-800"
                  // onClick={handleBuy}
                  // onClick={scrollToPlans} // chnage by Hosting
                >
                  Start Now
                </button>

                <button
                  className="py-2.5 min-w-[150px] bg-yellow-400 border rounded  block text-center   hover:border-mainTextColor font-bold duration-500  text-slate-800"
                  onClick={handleOpenModal}
                >
                  Talk to expert
                </button>
              </div>

              {/* Still Confused ?{" "}
              <button
                className="text-blue-500 hover:underline"
                onClick={handleOpenModal}
              >
                click here
              </button> */}

              <div className=" md:flex items-center">
                {/* <Image
                  src={BreadcrumbData.image}
                  alt="image"
                  className=" h-64 w-96 border"
                /> */}
                <Image src={BreadcrumbDataimage} alt="image" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {isOpen && (
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleCloseModal}
        >
          <div
            className={`bg-white p-5 shadow-md rounded flex flex-col justify-center items-center relative transition-all transform duration-500 ${
              isOpen
                ? "scale-100 translate-y-0 opacity-100"
                : "scale-75 translate-y-10 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 transition duration-300"
              onClick={handleCloseModal}
            >
              <X weight="bold" size={24} />
            </button>
         
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-4xl mx-auto  ">
              {/* Left Side - Image */}
              <div className="flex items-center justify-center">
                {/* <img
                  src="https://via.placeholder.com/300"
                  alt="Confused Model"
                  className=""
                /> */}
                <Image
                  src={confused}
                  alt="image"
                  className="w-full max-w-xs"
                />
              </div>

              {/* Right Side - Form */}
              <div>
                <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">
                  Still Confused ? 
                </h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      className="border p-2 rounded-md w-full"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      className="border p-2 rounded-md w-full"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="border p-2 rounded-md w-full"
                  />
                  {/* <input
                    type="text"
                    placeholder="Subject"
                    className="border p-2 rounded-md w-full"
                  /> */}
                     <input
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    className="border p-2 rounded-md w-full"
                  />
                  <input
                    type="text"
                    value={BreadcrumbData.heading}
                    name="subject"
                    placeholder="Subject"
                    // className="placeholder:text-bodyText w-full outline-none"
                    className="placeholder:text-bodyText border p-2 rounded-md w-full "
                    readOnly
                  />
                  {/* <textarea
                    placeholder="Message"
                    className="border p-2 rounded-md w-full h-24"
                  /> */}
               
                 <div className="col-span-2">
                  <button type="submit"
                  className="py-2.5 bg-s2 border rounded block text-center hover:border-mainTextColor font-bold duration-500 w-full text-slate-800">
                    Connect With Us ..!!
                  </button>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
       <div>
        {message && (
          <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-300 ">
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
    </>
  );
};

export default BreadcrumbSection;
