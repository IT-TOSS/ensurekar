import { Icon } from "lucide-react";
import React from "react";

interface ServiceCoveredProps {
  ServiceCoveredData: {
    title: string;
    heading: string;
    subHeading: string;
    description: string;
    image: string;
    services: {
      title: string;
      description: string;
      icon: JSX.Element;
    }[];
  };
}

const ServiceCovered = ({ ServiceCoveredData }: ServiceCoveredProps) => {
  const { title, heading, subHeading, description, image, services } =
    ServiceCoveredData;
  return (
    <section className="stp-30 sbp-30">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center max-xxl:overflow-hidden">
          <div className="max-w-[700px] text-center flex justify-center items-center flex-col">
            {title && (
              <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white">
                {title}
              </p>
            )}

            <h1 className="display-4 pt-4 pb-4 lg:pb-6 dark:text-white">{heading}</h1>

            <p className="text-bodyText dark:text-white">{description}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto stp-15">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="h-full wow animate__animated animate__fadeInUp"
              data-wow-duration="1.3s"
            >
              <div className="flex justify-start items-start flex-col p-2 group border border-strokeColor hover:bg-s2 hover:border-mainTextColor duration-500">
          <div className="bg-softBg1 p-4 rounded-full text-s1 group-hover:bg-mainTextColor group-hover:text-white duration-500 text-5xl  ">
            {service.icon}
          </div>
          <h4 className="heading-4 pb-5 pt-8 dark:text-white">{service.title}</h4>
          <p className="text-bodyText lg:pr-4 dark:text-white">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCovered;
