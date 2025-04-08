import React from "react";
import Image, { StaticImageData } from "next/image";
interface AllInOneData {
  title?: string;
  heading: string;
  description: string[];
  image: StaticImageData | string;
}
const All_In_One_ServiceSection = ({
  AllInOneData,
}: {
  AllInOneData: AllInOneData;
}) => {
  const { title, heading, description, image } = AllInOneData;

  return (
    <section className="stp-30 sbp-30 bg-softBg1 overflow-hidden">
      <div className="xxl:ml-[calc((100%-1296px)/2)] max-xxl:container grid grid-cols-12 lg:gap-6 xxl:gap-32">
        <div className="col-span-12 lg:col-span-6 flex justify-start items-start self-stretch order-2">
          <Image src={image} alt="image" className="w-full h-full" />
        </div>
        <div className="col-span-12 lg:col-span-6 flex justify-center items-start flex-col">
          {title && (
            <p className="bg-p1 py-3 px-5 rounded-full text-white">{title}</p>
          )}

          <h2 className="display-4 pt-4 pb-6">{heading}</h2>
          {/* Description */}
          {description &&
            description.map((answer: any, index) => (
              <p key={index} className="text-bodyText text-start mb-2">
                {answer}
              </p>
            ))}
        </div>
      </div>
    </section>
  );
};

export default All_In_One_ServiceSection;
