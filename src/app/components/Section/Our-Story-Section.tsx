"use client";

import { useEffect, useState } from "react";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

interface TimelineEvent {
  date: string;
  year: string;
  title: string;
  description: string;
  label?: string;
  link: string;
}

interface CompliancesData {
  title: string;
  heading: string;
  subHeading: string;
  description: string;
  eventsData: TimelineEvent[];
}

const eventsData = [
  // {
  //   label: "Company Founded",
  //   date: "July",
  //   year: "2015",
  //   title: "",
  //   description: "",
  //   link:'',
  // },
  {
    date: "30 SEP",
    year: "2024",
    title: "DPT-3",
    description:
      "Return of Deposits. Every company needs to file this return furnishing information about deposits and/or outstanding receipt of loan or money other than deposits.",
    link: "/",
  },
  {
    date: "30 MAR",
    year: "2024",
    title: "DIR-3 KYC",
    description:
      "Director KYC submission for DIN holders as of 31 March 2023. Every person who has a DIN allotted and the status of the DIN is Approved.",
    link: "/",
  },
  // {
  //   label: "Funded $300,000",
  //   date: "APR",
  //   year: "2017",
  //   title: "",
  //   description: "",
  //   link:''
  // },
  {
    date: "14 OCT",
    year: "2024",
    title: "Form ADT-1",
    description:
      "To be filed in less than 15 days from the conclusion of AGM. Every company should intimate the ROC about the appointment of an auditor.",
    link: "/",
  },
  {
    date: "30 OCT",
    year: "2024",
    title: "Form 8",
    description:
      "The form should be filed annually with the ROC. It is also known as the statement of accounts and solvency. Every LLP should submit the data of its profit or loss and balance sheet.",
    link: "/",
  },
  {
    date: "30 OCT",
    year: "2024",
    title: "Form AOC-4",
    description:
      "To be filed 30 days from the conclusion of AGM. Specified companies should file the financial statements with the ROC.",
    link: "/",
  },
  {
    date: "29 NOV",
    year: "2024",
    title: "MGT-7",
    description:
      "To be filed within 60 days from the conclusion of AGM. Every company should file an annual return, furnishing details about the company.",
    link: "/",
  },
  {
    date: "30 OCT",
    year: "2024",
    title: "MGT-14",
    description:
      "Filing of resolutions with the ROC regarding Board Report and Annual Accounts. The details of the resolutions passed should be filed. (Within 30 days of passing of Board Resolution).",
    link: "/",
  },
];

const CompliancesData = {
  title: "Compliances",
  heading: "Compliances",
  subHeading: "",
  description:"",
  eventsData: eventsData,
};

export default function Component() {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setEvents(eventsData);

    // Calculate the width based on the number of events
    const totalWidth = eventsData.length * 300; // Example width calculation
    setWidth(totalWidth);
  }, []);
const { title, heading, subHeading, description, eventsData } = CompliancesData;
  return (
    <section className="container mx-auto min-h-[700px] px-4 py-16">
       <h1 className="text-center font-bold text- heading-1 pb-5 my-10">
        { heading}
      </h1>
      <p className="text-center text-gray-600 mb-10">{description
      }</p>

      <div className="overflow-y-auto min-h-[400px]">
        <div className="relative ml-5">
          <div className="flex md:space-y-0 md:flex-row md:justify-between md:items-end">
            {events.map((event, index) => (
              <div className="flex justify-end" key={index}>
                {event.label && (
                  <div className="mr-10 ml-5">
                    <span className="bg-blue-500 absolute text-white text-xs flex py-4 my-5 flex-end font-bold  px-2 rounded bottom-3 transform -translate-x-1/2 rotate-90 whitespace-nowrap">
                      {event.label}
                      <div className="absolute align-center flex items-center top-5 -right-[22px] -rotate-90 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-t-blue border-blue-500  border-l-transparent border-r-transparent"></div>
                    </span>
                    <div className="absolute -bottom-[80px] transform -translate-x-1/2 text-center">
                      <div className="w-4 h-4 rounded-full z-10 cursor-pointer bg-gray-300 mx-auto"></div>
                      <div className="text-center text-nowrap">
                        {event.date} {event.year}
                      </div>
                    </div>
                  </div>
                )}

                {!event.label && (
                  <div className="bg-white p-6 mr-5 rounded-lg w-[300px] shadow-lg transition-all duration-300 relative">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <Link href={event.link}>
                      <button className="group inline-flex items-center bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                        Read More
                        <ChevronRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </Link>
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-b-white shadow-2xl border-l-transparent border-r-transparent rotate-180"></div>
                    <div className="absolute -bottom-[80px] left-1/2 transform -translate-x-1/2 text-center">
                      <div className="w-4 h-4 rounded-full z-10 cursor-pointer bg-gray-300 mx-auto"></div>
                      <div className="text-center text-nowrap">
                        {event.date} {event.year}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div
              className={`absolute ml-3 -z-10 -bottom-[51px] left-4  h-1 bg-gray-200 rounded-full`}
              style={{ width: `${width}px` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

