import React from 'react'
import Company_People_Group from "../../images/SGV-Types/Company-People-Group.svg"
import Image, { StaticImageData } from 'next/image'


interface OnlineProcessData {
    title?:string;
    heading?:string;
    description?:string;
    onlineProcesses:{icon:string,text:string}[];
    imageUrl?:string|StaticImageData;

}
const OnlineProcessforEmployers = ({OnlineProcessData}:{OnlineProcessData:OnlineProcessData}) => {
   
    const {title,description,heading,onlineProcesses} = OnlineProcessData;
  return (
    <section className="stp-30 sbp-30 bg-softBg1 overflow-hidden">
    <div
      className="xxl:mr-[calc((100%-6px)/2)] max-xxl:container grid grid-cols-12 lg:gap-6 xxl:gap-32"
    >
      <div
        className="col-span-12 lg:col-span-6 flex justify-start items-start self-stretch max-lg:order-2"
      >
        <Image
          src={Company_People_Group}
          alt="image"
          className="w-full h-full"
        />
      </div>
      <div
        className="col-span-12 lg:col-span-6 flex justify-center items-start flex-col"
      >
        <p className="bg-p1 py-3 px-5 rounded-full text-white">
         {title}
        </p>

        <h2 className="display-4 pt-4 pb-6">
        {heading}
        </h2>

        <p className="text-bodyText">
    {description}
        </p>

        <ol className='my-5 flex flex-wrap items-start justify-between'>
                {onlineProcesses.map((process, index: number) => {
                    return (
                        <li className="md:max-w-[200px] mb-5  mr-2" key={index}>
                            <div className="flex justify-start  items-start gap-2">
                                <span className="block bg-white rounded-full p-3 text-s1 text-2xl">
                                    {/* <i className="ph-fill ph-device-mobile"></i> */}
                                    {process.icon}
                                </span>
                                {process.text}
                            </div>
                        </li>
                    );
                })}
        </ol>
      </div>
    </div>
  </section>
  )
}

export default OnlineProcessforEmployers
