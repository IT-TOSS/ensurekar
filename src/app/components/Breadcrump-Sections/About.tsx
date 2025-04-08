"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import about_vector from "../../images/about_vector.png";
import aboutVideoImg from "../../images/aboutVideoImg.png";
import circleIcon from "../../images/circleIcon.png";
import Link from "next/link";
import { CaretRight, House, Play } from "phosphor-react";

interface BreadcrumbData {
  title: string;
  heading: string;
  description: string;
  image?: StaticImageData | string | undefined | null;
  video?: string | JSX.Element | undefined | null;
}

const BreadcrumbSection = ({
  BreadcrumbData,
}: {
  BreadcrumbData: BreadcrumbData;
}) => {
  const { title, heading, description, image, video } = BreadcrumbData;
  return (
    <section className="pt-24 lg:stp-30 sbp-30 bg-softBg1 relative">
      <Image
        src={circleIcon}
        alt="image"
        className="absolute top-60 -left-20 max-lg:h-[400px] max-sm:hidden"
      />
      <Image
        src={about_vector}
        alt="image"
        className="absolute top-36 right-0 xl:right-28 max-lg:hidden"
      />
      <div className="container pb-10">
        <ul className="flex justify-start items-center gap-1">
          <li>
            <Link href="/" className="flex justify-start items-center gap-1">
              <House />
              <span className="hover:text-s2 duration-300">Home</span>
            </Link>
          </li>
          <li className="flex justify-start items-center gap-1">
            <CaretRight />
            About Us
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center items-center pb-10 lg:pb-16 xl:pb-24">
          <div className="max-w-[600px] text-center flex justify-center items-center flex-col">
            <p className="bg-p1 py-3 px-5 rounded-full text-white">{title}</p>
            <h1 className="display-4 pt-4 pb-6">{heading}</h1>
            <p className="text-bodyText">{description}</p>
          </div>
        </div>
        <div
          className={`stp-30 sbp-30 w-[80%] h-[300px] bg-cover md:h-[400px] lg:h-[500px] xl:h-[600px] xxl:h-[800px] flex justify-center items-center z-10 relative after:absolute after:inset-0 after:bg-black/20`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <button
            className="bg-softBg1 text-s1 p-6 lg:p-6 rounded-full text-3xl lg:text-5xl hover:bg-s2 hover:text-white duration-500 relative flex justify-center items-center z-20 leading-[0] videoModalButtonOpen"
            onClick={() => {
              const videoElement = document.createElement("iframe");
              if (videoElement) {
                if (typeof video === "string") {
                  videoElement.src = video;
                }
                videoElement.allow =
                  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                videoElement.allowFullscreen = true;
                videoElement.style.width = "100%";
                videoElement.style.height = "100%";
                videoElement.style.border = "none";
                videoElement.style.borderRadius = "20px";
                videoElement.style.position = "absolute";
                videoElement.style.top = "0";
                videoElement.style.left = "0";
                videoElement.style.zIndex = "1000";
                videoElement.style.backgroundColor = "black";
                videoElement.style.display = "block";
                videoElement.style.margin = "auto";
                videoElement.style.padding = "0";
                videoElement.style.overflow = "hidden";
                videoElement.style.maxWidth = "100%";
                videoElement.style.maxHeight = "100%";
                videoElement.style.minWidth = "100%";
                videoElement.style.minHeight = "100%";
                videoElement.style.objectFit = "cover";
                videoElement.style.objectPosition = "center";
                videoElement.style.transition = "all 0.3s ease";
                videoElement.style.transform = "scale(1)";
                videoElement.style.opacity = "1";
                videoElement.style.visibility = "visible";
                videoElement.style.pointerEvents = "auto";
                videoElement.style.userSelect = "auto";
                videoElement.style.cursor = "pointer";
                videoElement.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.2)";
                videoElement.style.backdropFilter = "blur(10px)";
                videoElement.style.clipPath = "inset(0px)";
                videoElement.style.filter = "none";
                videoElement.style.maskImage = "none";
                videoElement.style.maskSize = "auto";
                videoElement.style.maskPosition = "center";
                videoElement.style.maskRepeat = "no-repeat";
                videoElement.style.maskClip = "border-box";
                videoElement.style.webkitMaskImage = "none";
                videoElement.style.webkitMaskSize = "auto";
              }

              videoElement.className = "w-full h-full object-cover";
              const parentElement = document.querySelector(
                ".videoModalButtonOpen"
              )?.parentElement;
              if (parentElement) {
                parentElement.innerHTML = "";
                parentElement.appendChild(videoElement);
              }
            }}
          >
            <Play weight="fill" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbSection;
