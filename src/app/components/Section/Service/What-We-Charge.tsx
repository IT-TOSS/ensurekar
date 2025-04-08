import Image, { StaticImageData } from "next/image";
import { CheckCircle } from "phosphor-react";
import React from "react";
 
interface WhatWeChargeData {
    title:string,
    heading:string,
    description:string,
    charges:string[],
    footerMessage?:{
        startText:string,
        middleText:string,
        endText:string,
    },
    imageUrl:StaticImageData
}
const WhatWeCharge = ({WhatWeChargeData}:{WhatWeChargeData:WhatWeChargeData}) => {

  const { title, heading, description, charges, footerMessage, imageUrl } =
    WhatWeChargeData;
  return (
    <section className="bg-softBg1 stp-30 sbp-30">
      <div className="container grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6">
          <div className="flex flex-col justify-start items-start">
            {title && (
              <p className="bg-p1 py-3 px-5 rounded-full text-white">{title}</p>
            )}
            <h1 className="display-4 pt-4 pb-4 lg:pb-6">{heading}</h1>
            <p className="text-bodyText pb-6 lg:pb-8">{description}</p>

            <ul className="flex flex-col gap-6 justify-center items-start w-full">
              {charges.map((charge, index) => (
                <li className="flex  items-center pb-1 w-full" key={index}>
                  <div className="text-s1 text-3xl">
                    <CheckCircle weight="fill" className="mr-3" />
                  </div>
                  <div>
                    <p className="text-bodyText text-start pt-1">{charge}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="xxl:col-start-8 col-span-12 lg:col-span-6 xxl:col-span-5 overflow-hidden flex justify-center items-center">
          <Image
            src={imageUrl}
            alt="image"
            className="object-fit hover:scale-110 duration-500 w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeCharge;
