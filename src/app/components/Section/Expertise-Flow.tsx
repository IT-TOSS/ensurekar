import React from "react";
import taxation_services_img from "../../images/taxation_services_img.png";
import Image, { StaticImageData } from "next/image";
import { CoinsIcon } from "lucide-react";
interface ExpertiseFlowData {
    title: string;
    heading: string;
    description: string;
    image: string|StaticImageData;
    flowData: {
        icon: JSX.Element | string;
        title: string;
        description: string;
    }[];
    }
const ExpertiseFlow = ({ExpertiseFlowData}:{ExpertiseFlowData:ExpertiseFlowData}) => {
 
  const { title, heading, description, image, flowData } = ExpertiseFlowData;
  return (
    <section className="stp-30 sbp-30">
      <div className="container grid grid-cols-12 gap-6 max-xxl:overflow-hidden">
        <div className="col-span-12 lg:col-span-6 xxl:col-span-5">
          <div className="flex justify-start items-start flex-col">
            { title && <p className="bg-p1 py-3 px-5 rounded-full text-white">{title}</p> }
            <h2 className="display-4 pt-4 pb-6 dark:text-white">
             {heading}
            </h2>
            <p className="text-bodyText pb-10 dark:text-white">
             {description}
            </p>
            {/* <div className="flex justify-center items-center w-full overflow-hidden">
              <Image
                src={image}
                alt="image"
                className="hover:scale-110 duration-500 w-full h-full"
              />
            </div> */}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 xxl:col-start-7 flex flex-col gap-6 xl:gap-10 justify-start items-start">
            {flowData.map((data, index) => (
                <div key={index} className="flex justify-start items-start gap-4">
                    <div className="text-s1 !leading-[0] text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1">
                     {data.icon }
                       
                        {/* <i className="ph-fill ph-coin"></i> */}
                    </div>
                    <div className="">
                        <h4 className="heading-4 dark:text-white">{data.title}</h4>
                        <p className="text-bodyText pt-3 dark:text-white">
                        {data.description}
                        </p>
                    </div>
                </div>
            ))}
         
        </div>
      </div>
    </section>
  );
};

export default ExpertiseFlow;
