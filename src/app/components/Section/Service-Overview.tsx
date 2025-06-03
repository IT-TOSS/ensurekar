"use client";

import Image, { StaticImageData } from "next/image";
import logo1 from "../../images/logo1.png";

interface OverviewData {
  heading?: string;
  meta?: string;
  introduction?: {
    heading: string;
    description: string[];
  };
  advantagesInfo: {
    heading: string;
    meta?: string;
    description: string;
    advantages: {
      imageUrl: string;
      heading: string;
      details: string;
      note?: {
        heading?: string;
        description?: string;
      };
    }[];
    bottomText?: string;
  };
  eligibilityCriteria: {
    imageData: {
      imageUrl: StaticImageData;
      imageDirection: string;
    };
    heading: {
      start: string;
      blueText: string;
      end: string;
    };
    subHeading: string;
    startingDescription: string;
    endingDescription: string;
    requiredSteps?: {
      heading: string;
      description: string;
      steps: { heading: string; description: string }[];
    }[];
  }[];
}

const ServiceOverview = ({ OverviewData }: { OverviewData: OverviewData }) => {
  if (!OverviewData) return <div>loading...</div>;
  const { heading, meta, introduction, advantagesInfo, eligibilityCriteria } =
    OverviewData;

  return (
    <div className="container stp-30 sbp-10">
      <div className="flex flex-col items-center">
        {(heading || meta) && (
          <h3 className="heading-3 text-center dork:text-white">
            <span className="text-mainTextColor dark:text-white">{heading}</span>

            <span className="text-blue-600 ">
              {" "}
              {meta ? " - " : ""} {meta}
            </span>
          </h3>
        )}

        {/* Introduction */}
        {(introduction?.heading || introduction?.description.length !== 0) && (
          <div className={`${introduction?.heading ? "border shadow-inner my-8 p-4 " : ""}  shadow-cyan max-w-[1000px]`}>
            <h4 className="heading-4 my-5 text-center ">
              {introduction?.heading && (
                <span className="text-blue-600 ">{'"'}</span>
              )}{" "}
              <span className="text-mainTextColor dark:text-blue-600 ">{introduction?.heading}</span>{" "}
              {introduction?.heading && (
                <span className="text-blue-600">{'"'}</span>
              )}
            </h4>

            {introduction?.description.map((answer: any, index) => (
              <p key={index} className="text-bodyText text-start mb-2 dark:text-white">
                {answer}
              </p>
            ))}
          </div>
        )}

        <div className="my-5 text-center">
          <h3 className="heading-3 my-4">
            <span className="text-blue-600 dark:text-white"> {advantagesInfo?.heading} </span>{" "}
            <span className="text-mainTextColor dark:text-white">{advantagesInfo?.meta}</span>
          </h3>
          {advantagesInfo?.description && (
            <p className="p-5 dark:text-white">{advantagesInfo?.description}</p>
          )}

          <div className="flex flex-wrap justify-center items-center">
            {advantagesInfo?.advantages?.map((advantage, index) => (
              <div
                key={advantage.heading}
                className="flex flex-col justify-between items-center bg-slate-100 rounded p-3 m-3 w-full sm:w-[45%] max-w-[45%] min-h-[280px] dark:text-white"
              >
                <h5 className="text-center heading-5 text-black dark:text-black">{advantage.heading}</h5>
                {/* insert Image */}
                {/* <div className="border w-[70px] h-[70px] mx-auto">
                <Image src={advantage.imageUrl} alt="img" />
              </div> */}
                <div className="relative  w-[162px] h-[142px] ">

                  <Image
                    src={advantage.imageUrl}
                    alt="img"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-center px-5 mb-2 text-black dark:text-black">{advantage.details}</p>
                {advantage.note && (
                  <div>
                    <h6 className="text-start mr-2 font-bold inline mt-1 dark:text-white">
                      {advantage.note?.heading}
                    </h6>
                    <p className="inline mb-5 dark:text-white">
                      {advantage.note?.description}
                    </p>
                  </div>
                )}
              </div>
            ))}

            {advantagesInfo?.bottomText && (
              <div className="my-10 w-full text-center dark:text-white">
                <span className="font-bold heading-4 text-bodyText  dark:text-white">
                  {advantagesInfo.bottomText}
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-col items-center my-5 text-center">
            {eligibilityCriteria && eligibilityCriteria?.map((criteria) => (
              <div
                key={criteria.heading?.start}
                className={`flex flex-col md:flex-row ${criteria.imageData.imageDirection === "right"
                    ? "md:flex-row-reverse"
                    : "md:flex-row"
                  } items-center my-6 text-center`}
              >
                {/* Image */}
                <div className="mx-5 mb-4 md:mb-0 w-full md:w-1/3 flex justify-center">
                  <Image
                    src={criteria.imageData.imageUrl || logo1}
                    alt="Related"
                    className="w-full max-w-[250px] h-auto"
                  />
                </div>

                {/* Content */}
                <div className="w-full md:w-2/3 text-center md:text-left ">
                  <h3 className="heading-3 my-5 dark:text-blue-600 ">
                    {criteria.heading.start}{" "}
                    <span className="dark:text-blue-600 ">
                      {criteria.heading.blueText}
                    </span>{" "}
                    <span className="dark:text-white">

                      {criteria.heading.end}
                    </span>
                  </h3>

                  <h3 className="font-semibold mt-4">
                    <span className="dark:text-white">{criteria.subHeading}</span>
                    {/* {criteria.subHeading} */}

                  </h3>

                  <ul
                    className={`text-start ml-5  ${(criteria.requiredSteps ?? []).length > 1
                        ? "list-disc"
                        : "disc-none"
                      }`}
                  >
                    <p className="my-3 dark:text-white">{criteria.startingDescription}</p>
                    {criteria.requiredSteps?.map((step) => (
                      <li key={step.heading} className="my-6">
                        <h4 className="heading-5 md:text-2xl font-bold dark:text-white">
                          {step.heading}
                        </h4>
                        <p>{step.description}</p>
                        <ul className="pl-5 list-disc">
                          {step.steps.map((subStep) => (
                            <li key={subStep.heading} className="my-2">
                              {subStep.heading && (
                                <h5 className="font-bold inline dark:text-white ">
                                  {subStep.heading}:{" "}
                                </h5>
                              )}
                              <p className="inline dark:text-white">{subStep.description}</p>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                    <p className="py-5 dark:text-white">{criteria.endingDescription}</p>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOverview;
