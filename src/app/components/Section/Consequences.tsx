import React from "react";
import Company_People_Group from "../../images/SGV-Types/Company-People-Group.svg";
import Image, { StaticImageData } from "next/image";

interface ConsequencesData {
  title?: string;
  heading?: string;
  description?: string;
  onlineProcesses: { icon: string; heading: string; description: string }[];
  imageUrl?: string | StaticImageData;
}
const Consequences = ({
  ConsequencesData,
}: {
  ConsequencesData: ConsequencesData;
}) => {
  const { title, description, heading, onlineProcesses } = ConsequencesData;
  return (
    <section className="stp-30 sbp-30 bg-softBg1 overflow-hidden">
      <div className="xxl:mr-[calc((100%-6px)/2)] max-xxl:container grid grid-cols-12 lg:gap-6 xxl:gap-32">
        <div className="col-span-12 lg:col-span-6 flex justify-start items-start self-stretch max-lg:order-2">
          <Image
            src={Company_People_Group}
            alt="image"
            className="w-full h-full"
          />
        </div>
        <div className="col-span-12 lg:col-span-6 flex justify-center items-start flex-col">
          <p className="bg-p1 py-3 px-5 rounded-full text-white">{title}</p>

          <h2 className="display-4 pt-4 pb-6">{heading}</h2>

          <p className="text-bodyText">{description}</p>

          <ol className="my-5 flex flex-wrap items-start justify-between">
            {onlineProcesses.map((process, index: number) => {
              return (
                <li className="md:max-w-[230px] mx-auto mb-5  mr-2" key={index}>
                  <div className="flex justify-center  flex-col items-center gap-2">
                    <span className="block bg-white mx-auto rounded-full p-3 text-s1 text-2xl">
                      {process.icon}
                    </span>
                    <div>
                      <h4 className="font-bold text-center">{process.heading}</h4>
                    </div>
                    <div>
                      <p className="text-bodyText text-center pt-3">
                        {process.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Consequences;
