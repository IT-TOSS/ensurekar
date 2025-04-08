import { desc, div, li } from "framer-motion/client";
import Link from "next/link";
import React from "react";

interface WhoShouldBuyData {
  title: string;
  heading: string;
  subHeading: string;
  rolesData: {
    heading: string;
    description: string;
    roles: {
      icon: string;
      title: string;
      description: string;
      link?: string;
    }[];
  };
  rolesDescription?: {
    heading?: string;
    description?: string;
    roledesc?: { heading?: string; description?: string; list?: string[] }[];
  };
}

const WhoShouldBuy = ({
  WhoShouldBuyData,
}: {
  WhoShouldBuyData: WhoShouldBuyData;
}) => {
  const { title, heading, subHeading, rolesData, rolesDescription } =
    WhoShouldBuyData;
  return (
    <section className="bg-softBg1 stp-30 sbp-30 max-xxl:overflow-hidden">
      <div className="container gap-6">
        <div className="col-span-12 lg:col-span-12 flex flex-col justify-center items-center">
          <div className="max-w-[1000px] text-center flex justify-center items-center flex-col">
            {title && (
              <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white">
                {title}
              </p>
            )}

            <h1 className="display-4 pt-4 pb-4 lg:pb-6">{heading}</h1>

            <p className="text-bodyText">{subHeading}</p>
          </div>
          <div>
            <h1 className="display-4 pt-4 pb-4 lg:pb-6">{rolesData.heading}</h1>

            <p className="text-bodyText text-center">{rolesData.description}</p>

            <div className="grid grid-cols-12 stp-15 gap-10">
              {rolesData.roles.map((role, index) => (
                <div
                  key={index}
                  className="col-span-12 sm:col-span-6 md:col-span-4  wow animate__animated animate__fadeInUp"
                  data-wow-duration="1.3s"
                >
                  <div className="flex justify-center items-center min-w-60 flex-col p-6 xl:p-10 group border border-strokeColor hover:bg-s2 hover:border-mainTextColor duration-500">
                    <div className="bg-softBg1 p-4 rounded-full text-s1 group-hover:bg-mainTextColor group-hover:text-white duration-500 text-5xl">
                      {role.icon}
                    </div>
                    <h4 className="font-semibold pb-5 pt-8 text-wrap">
                      {role.title}
                    </h4>
                    <p className="text-bodyText lg:pr-4">{role.description}</p>
                    {role.link && (
                  
                    <Link
                      className="text-mainTextColor bg-white border border-mainTextColor rounded-full p-2 mt-5 duration-500 hover:bg-mainTextColor hover:text-white"
                      href={role.link ||"#"}
                    >Register Now</Link>
                  )}
                  </div>
                </div>
              ))}
            </div>
          </div>
      
          {rolesDescription && (
            <div className="my-5">
              <div className="text-center">
                <h1 className="display-4 pt-4 pb-4 lg:pb-6">
                  {rolesDescription.heading}
                </h1>
                <p className="text-bodyText">{rolesDescription.description}</p>
              </div>
              <div className="flex flex-col">
                {rolesDescription.roledesc?.map((data, index: number) => (
                  <div key={index} className="text-start  items-start">
                    {data.heading && (
                        <h1 className="text-2xl font-medium pt-4 pb-4 lg:pb-6">
                        {data.heading}
                      </h1>
                      )}
                  

                    <p className="text-bodyText ml-3">{data.description}</p>
                    <ul className="m-5 ml-7 list-disc">
                      {data.list?.length != undefined &&
                        data.list.map((listData, Index: number) => (
                          <li key={Index}>{listData}</li>
                        ))}{" "}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhoShouldBuy;
