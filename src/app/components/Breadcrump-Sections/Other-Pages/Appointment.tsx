import React from 'react';
import Image from 'next/image';
import breadcrump_icon from "../../../images/breadcrump_icon.png";
import breadcrumb_img_8 from "../../../images/breadcrumb_img_8.png";


import Link from 'next/link';
import { CaretRight, House } from 'phosphor-react';
const BreadcrumpSection = () => {
  return (
    <section className="stp-30 bg-softBg1 relative max-xxl:overflow-hidden">
      <Image
        src={breadcrump_icon}
        alt="image"
        className="absolute bottom-0 left-[-10%] xxl:left-0 max-lg:hidden"
      />
      <div
        className="container grid grid-cols-12 gap-6 max-md:stp-15 relative z-10"
      >
        <div
          className="col-span-12 md:col-span-6 flex justify-center items-start flex-col"
        >
          <ul className="flex justify-start items-center gap-1 flex-wrap">
            <li>
              <Link
                href="/"
                className="flex justify-start items-center gap-1"
              >
                <House/>
                <span className="hover:text-s2 duration-300">Home</span>
              </Link>
            </li>

            <li className="flex justify-start items-center gap-1">
              <CaretRight/>
              Appointment
            </li>
          </ul>

          <h1 className="display-3 pt-4">Appointment</h1>

          <p className="text-bodyText pt-6">
            At Ensurekar, we understand the importance of personalized service.
            Book an appointment with our experts to discuss your accounting.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 flex justify-center items-center">
          <Image
            src={breadcrumb_img_8}
            alt="image"
            className="object-fit max-sm:max-h-[300px]"
          />
        </div>
      </div>
    </section>
  )
}

export default BreadcrumpSection;
