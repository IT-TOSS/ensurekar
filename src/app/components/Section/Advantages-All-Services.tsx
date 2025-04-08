import React from "react";
import Image, { StaticImageData } from "next/image";
import Rocket_With_Men from "../../images/SGV-Types/Rocket-With-Men.svg";

interface AdvantagesData {
  title: string;
  heading: string;
  description: string;
  image: StaticImageData;
  advantages: { title: string; description: string; icon: React.ReactNode | StaticImageData |string }[];
}

const ServiceAdvantages = ({
  AdvantagesData,
}: {
  AdvantagesData: AdvantagesData;
}) => {
  const { title, heading, description, image, advantages } = AdvantagesData;
  return (
    <section className="stp-30 sbp-30">
      <div className="container grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6 xxl:col-span-5 flex justify-start items-start flex-col">

          {title?<p className="bg-p1 py-3 px-5 rounded-full text-white">{title}</p>:""}
          <h2 className="display-4 pt-4 pb-6 dark:text-white">{heading}</h2>
          <p className="text-bodyText pb-6 lg:pb-10 dark:text-white">{description}</p>
          <div className="flex justify-center items-center w-full overflow-hidden">
            <Image
              src={image}
              alt="image"
              className="hover:scale-110 duration-500 w-full h-full"
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 xxl:col-start-7 flex flex-col gap-6 xl:gap-10 justify-center items-start pb-6 xl:pb-12">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex justify-start items-start gap-4">
              <div className="text-s1 text-2xl sm:text-3xl p-1 sm:p-2 max-w-[50px] max-h-[50px] rounded-full  !leading-[0]">
              {
                typeof advantage.icon === "string" ? (
                  <Image src={advantage.icon} alt="icon" />
                ) : advantage.icon instanceof Object && 'src' in advantage.icon ? (
                  <Image src={advantage.icon as StaticImageData} height={50} width={50} alt="icon" />
                ) : (
                  advantage.icon
                )
              }
              </div>
              <div className="">
                <h4 className="heading-4 dark:text-white">{advantage.title}</h4>
                <p className="text-bodyText pt-3 dark:text-white">{advantage.description}</p>
              </div>
            </div>
          ))}
       
        </div>
      </div>
    </section>
  );
};

export default ServiceAdvantages;
