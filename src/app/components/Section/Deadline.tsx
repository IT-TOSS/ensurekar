
import { Question } from 'phosphor-react';
import React from 'react'


interface DeadlineData
    {
        title: string;
        heading: string;
        subHeading: string;
        DeadlinesData: {
          heading: string;
          description: string;
          benefits: {
            title: string;
            description: string;
          }[];
        };
        bottomText: string;
      }

const Deadline = ({DeadlineData}:{DeadlineData:DeadlineData}) => {
const {title,heading,subHeading,DeadlinesData,bottomText} = DeadlineData
  return (
    <section className="stp-30 sbp-30">
   
    <h1 className="display-4 mb-5 lg:pb-6 text-center">{heading}</h1>
    <p className="text-bodyText text-center">{subHeading}</p>

    <div className="container mt-10 flex flex-wrap justify-center items-start ">
        {DeadlinesData.benefits.map((benefits, index) => {
          return (
            <div className="max-w-[350px] m-4" key={index}>
              <div className="flex justify-start items-center flex-col">
              
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

    <h3 className='mt-10 font-bold md:text-xl  ml-5 text-start'>{bottomText}</h3>
  </section>
  )
}

export default Deadline
