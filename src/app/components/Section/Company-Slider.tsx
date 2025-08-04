"use client";

import React from "react";
import logo1 from "../../images/logo1.png";
import logo2 from "../../images/logo2.png";
import logo3 from "../../images/logo3.png";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"; // Import Autoplay CSS
import { Autoplay } from "swiper/modules"; // Correct import for Autoplay
import Link from "next/link";


interface SlideData {
  heading?: string;
  subHeading?: string;
  images: { src: string | StaticImageData; alt: string }[];
}

const CompanySlider = ({ SlideData }: { SlideData: SlideData }) => {
  const { heading, subHeading, images } = SlideData;
  console.log("CompanySlider Data:", SlideData);
  return (
    //<section className="stp-15 sbp-15 container grid grid-cols-12 gap-6 border-b border-strokeColor ">
    <section className="w-full pl-[50px] pt-6 pb-6 grid grid-cols-12 gap-6 border-b border-strokeColor bg-white dark:bg-light">
      <div className="col-span-12 sm:col-span-6 xl:col-span-4 flex items-center justify-center">
        <p className="text-xl lg:text-2xl text-bodyText relative after:absolute after:top-[55%] after:right-0 after:w-[50px] after:h-[2px] after:bg-bodyText max-xxl:after:content-none">
          {/* <span className="font-bold text-mainTextColor">7,000+</span> */}
          {heading}
        </p>
        <p>{subHeading}</p>
      </div>
      <div className="col-span-12 sm:col-span-6 xl:col-span-8 flex pt-4">
        <Swiper
          modules={[Autoplay]}
          direction="horizontal"
          spaceBetween={24}
          slidesPerView={4}
          className="continuous-continuous"
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={6000}
          style={{ width: 863 }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Link href="" className="flex justify-center items-center">
                {/* <Image src={image.src} alt={image.alt} 
                    width={120}
                    height={80}
                    className="object-contain"  /> */}
                <img
                  src= {`${image.src}`} //{typeof image.src === "string" ? ${image.src} : image.src.src}
                  alt={image.alt}
                  className="object-contain max-w-[100%] max-h-[auto]"
                  loading={index < 4 ? "eager" : "lazy"}
                  style={{
                    width: 'auto',
                    height: 'auto'
                  }}
                />

              </Link>
            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
};

export default CompanySlider;
