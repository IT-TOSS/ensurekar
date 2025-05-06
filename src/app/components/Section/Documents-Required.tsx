import Image from "next/image";
import React from "react";
// import manage_health_section_img from "../../images/manage_health_section_img.png"; 
import manage_health_section_img from "../../images/Documents For Shop and Establishment Registration.png.jpeg";
interface DocumentsRequiredData {
  title: string;
  heading: string;
  description: string;
  documentsRequired: {
    icon:string |JSX.Element,
     text: string 
}[];
}
const DocumentsRequired = ({
  DocumentsRequiredData,
}: {
  DocumentsRequiredData: DocumentsRequiredData;
}) => {
  const { title, heading, description, documentsRequired } =
    DocumentsRequiredData;
  return (
    <section className="stp-30 sbp-30">
      <div className="container grid grid-cols-12 gap-6 max-xxl:overflow-hidden">
        <div className="col-span-12 md:col-span-6">
          <div className="flex justify-start items-start">
            <div className="max-w-[600px] flex justify-start items-start flex-col">
              {title && (
                <p className="bg-p1 py-3 px-5 rounded-full text-white"> {title}</p>
              )}

              <h1 className="display-4 pt-4 pb-6 dark:text-white ">{heading}</h1>

              <p className="text-bodyText pb-8 dark:text-white">{description}</p>

              <ul className="flex items-start justify-between flex-wrap">
                {documentsRequired?.map((documents:any, index: number) => {
                  return (
                    <li className="max-w-50 mb-5 mr-2" key={index}>
                      <div className="flex justify-start items-start gap-2 dark:text-white">
                        <span className="block bg-softBg1 rounded-full p-3 text-s1 text-2xl">
                          {/* <i className="ph-fill ph-device-mobile"></i> */}
                          {documents.icon}
                        </span>
                        {documents.text}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-5 xxl:col-start-8 flex justify-center items-center">
          <Image src={manage_health_section_img} alt="image" height={392} width={525} />
        </div>
      </div>
    </section>
  );
};

export default DocumentsRequired;
