
import { Question } from 'phosphor-react';
import React from 'react'


interface BenefitData
    {
        title: string;
        heading: string;
        subHeading: string;
        benefitsData: {
          heading: string;
          description: string;
          benefits: {
            icon: string | JSX.Element;
            title: string;
            description: string;
          }[];
        };
      }

const BenefitSection = ({BenefitData}:{BenefitData:BenefitData}) => {
const {title,heading,subHeading,benefitsData} = BenefitData
  return (
    <section className="bg-softBg1 stp-30 sbp-30">
   
    <h1 className="display-4 mb-5 lg:pb-6 text-center">{heading}</h1>
    <p className="text-bodyText text-center">{subHeading}</p>

    <div className="container mt-10 flex flex-wrap justify-center items-start ">
        {benefitsData.benefits.map((benefits, index) => {
          return (
            <div className="max-w-[350px] m-4" key={index}>
              <div className="flex justify-start items-center flex-col">
                <div className="text-5xl text-s1">
                  {benefits.icon}
                </div>
                <h4 className="heading-4 pt-6 pb-3 text-center">
                 {benefits.title}
                </h4>
                <p className="text-center lg:px-4 xxl:px-8">
                 {benefits.description}
                </p>
              </div>
            </div>
          );
        })}
    
      
    </div>
  </section>
  )
}

export default BenefitSection
