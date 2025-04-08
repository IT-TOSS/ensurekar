"use client";

import React from "react";
import sliceIcon from "../../images/sliceIcon.png";
import testimonial10 from "../../images/testimonial10.png";
import testimonial9 from "../../images/testimonial9.png";
import testimonial7 from "../../images/testimonial7.png";
import testimonial8 from "../../images/testimonial8.png";
import testimonial6 from "../../images/testimonial6.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
const TestimonialSection = () => {

  
  return (
    <section className="stp-30 sbp-30 relative sponsors">
      <div className="overflow-hidden">
        <Image
          src={sliceIcon}
          alt="image"
          className="absolute top-0 right-2 -rotate-90 max-md:h-[80px]"
        />
      </div>
      <div className="container">
        <div className="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start">
          <div className="max-w-[600px] flex justify-center items-start flex-col">
            <p className="bg-p1 py-3 px-5 rounded-full text-white">
              Testimonial
            </p>
            <h1 className="display-4 pt-4 dark:text-white">Ensurekar Customer Stories</h1>
          </div>
          <p className="text-bodyText max-w-[500px] dark:text-white">
            Startups thrive with Ensurekar. Their flexible payroll solutions have
            been instrumental in our journey, providing the support
          </p>
        </div>
      </div>
      <div className="stp-15">
        <div className="swiper testimonial-carousel">
          <div className="swiper-wrapper !flex !justify-center !items-center">
            <Swiper
              modules={[Autoplay]} // Properly pass the Autoplay module
              direction="horizontal"
              spaceBetween={24}
              slidesPerView={4}
              className="continuous-continuous"

              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                reverseDirection: false,
              }}
              speed={6000}
            >
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white dark:text-white">
                      "Ensurekar's payroll solutions have transformed HR processes
                      at Retail Innovations Ltd. The user-friendly platform"
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial10}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white dark:text-white">Isabelle McKinney</p>
                        <p className="dark:text-white"> Product Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's payroll solutions have transformed HR processes
                      at Retail Innovations Ltd. The user-friendly platform"
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial9}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">Amy Gutierrez</p>
                        <p>CFO, Solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white daek:text-white">
                      "Ensurekar's personalized service has been a game-changer
                      for my small business. Efficient payroll processing.
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial8}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">John D</p>
                        <p>Small Business Owner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's personalized service has been a game-changer
                      for my small business. Efficient payroll processing."
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial7}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">Hunter Romero</p>
                        <p className="dark:text-white">HR Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's payroll solutions have transformed HR processes
                      at Retail Innovations Ltd. The user-friendly platform"
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial6}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">Ora Wong</p>
                        <p>Finance Director</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's personalized service has been a game-changer
                      for my small business. Efficient payroll processing.
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial8}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">John D</p>
                        <p>Small Business Owner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's personalized service has been a game-changer
                      for my small business. Efficient payroll processing."
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial7}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">Hunter Romero</p>
                        <p className="dark:text-white">HR Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's payroll solutions have transformed HR processes
                      at Retail Innovations Ltd. The user-friendly platform"
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial6}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">Ora Wong</p>
                        <p>Finance Director</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's payroll solutions have transformed HR processes
                      at Retail Innovations Ltd. The user-friendly platform"
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial10}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">Isabelle McKinney</p>
                        <p>Product Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's payroll solutions have transformed HR processes
                      at Retail Innovations Ltd. The user-friendly platform"
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial9}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">Amy Gutierrez</p>
                        <p>CFO, Solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's personalized service has been a game-changer
                      for my small business. Efficient payroll processing.
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial8}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">John D</p>
                        <p>Small Business Owner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's personalized service has been a game-changer
                      for my small business. Efficient payroll processing."
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial7}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">Hunter Romero</p>
                        <p className="dark:text-white">HR Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's payroll solutions have transformed HR processes
                      at Retail Innovations Ltd. The user-friendly platform"
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial6}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">Ora Wong</p>
                        <p>Finance Director</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's personalized service has been a game-changer
                      for my small business. Efficient payroll processing.
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial8}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">John D</p>
                        <p>Small Business Owner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's personalized service has been a game-changer
                      for my small business. Efficient payroll processing."
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial7}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">Hunter Romero</p>
                        <p className="dark:text-white">HR Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's payroll solutions have transformed HR processes
                      at Retail Innovations Ltd. The user-friendly platform"
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial6}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">Ora Wong</p>
                        <p>Finance Director</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's payroll solutions have transformed HR processes
                      at Retail Innovations Ltd. The user-friendly platform"
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial10}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">Isabelle McKinney</p>
                        <p>Product Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's payroll solutions have transformed HR processes
                      at Retail Innovations Ltd. The user-friendly platform"
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial9}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">Amy Gutierrez</p>
                        <p>CFO, Solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's personalized service has been a game-changer
                      for my small business. Efficient payroll processing.
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial8}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">John D</p>
                        <p>Small Business Owner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's personalized service has been a game-changer
                      for my small business. Efficient payroll processing."
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial7}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">Hunter Romero</p>
                        <p className="dark:text-white">HR Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's payroll solutions have transformed HR processes
                      at Retail Innovations Ltd. The user-friendly platform"
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial6}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">Ora Wong</p>
                        <p>Finance Director</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's personalized service has been a game-changer
                      for my small business. Efficient payroll processing.
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial8}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">John D</p>
                        <p>Small Business Owner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's personalized service has been a game-changer
                      for my small business. Efficient payroll processing."
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial7}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">Hunter Romero</p>
                        <p className="dark:text-white">HR Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's payroll solutions have transformed HR processes
                      at Retail Innovations Ltd. The user-friendly platform"
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial6}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">Ora Wong</p>
                        <p>Finance Director</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="pt-6">
        <div className="swiper testimonial-carousel2">
          <div className="swiper-wrapper !flex !justify-center !items-center">
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
            >
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's payroll solutions have transformed HR processes
                      at Retail Innovations Ltd. The user-friendly platform"
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial10}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">Isabelle McKinney</p>
                        <p>Product Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's payroll solutions have transformed HR processes
                      at Retail Innovations Ltd. The user-friendly platform"
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial9}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">Amy Gutierrez</p>
                        <p>CFO, Solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's personalized service has been a game-changer
                      for my small business. Efficient payroll processing.
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial8}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">John D</p>
                        <p>Small Business Owner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's personalized service has been a game-changer
                      for my small business. Efficient payroll processing."
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial7}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">Hunter Romero</p>
                        <p className="dark:text-white">HR Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's payroll solutions have transformed HR processes
                      at Retail Innovations Ltd. The user-friendly platform"
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial6}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">Ora Wong</p>
                        <p>Finance Director</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's personalized service has been a game-changer
                      for my small business. Efficient payroll processing.
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial8}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">John D</p>
                        <p>Small Business Owner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's personalized service has been a game-changer
                      for my small business. Efficient payroll processing."
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial7}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">Hunter Romero</p>
                        <p className="dark:text-white">HR Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="border border-strokeColor p-12 flex flex-col justify-center items-center hover:bg-s2 hover:border-mainTextColor duration-700">
                    <p className="center dark:text-white dark:text-white">
                      "Ensurekar's payroll solutions have transformed HR processes
                      at Retail Innovations Ltd. The user-friendly platform"
                    </p>
                    <div className="flex gap-3 pt-3">
                      <div className="">
                        <Image
                          src={testimonial6}
                          alt="image"
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="text-lg fon-medium dark:text-white">Ora Wong</p>
                        <p>Finance Director</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
