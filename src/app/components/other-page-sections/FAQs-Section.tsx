"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import sliceIcon from '../../images/sliceIcon.png';
import faq_illus from '../../images/faq_illus.png';
import { Minus, Plus } from 'phosphor-react';
import { usePathname } from 'next/navigation';
import { useFaqs } from '@/hooks/useFaqs';

const FAQsSection = () => {
  const pathname = usePathname();
  // State to track which FAQ is open
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Function to toggle the FAQ item
  const toggleFAQ = (index: number) => {
    if (openFAQ === index) {
      setOpenFAQ(null); // Close if the same item is clicked
    } else {
      setOpenFAQ(index); // Open the clicked FAQ
    }
  };

  // DB-driven FAQs (real-time, no redeploy). Fallback to static FAQs.
  const { faqs: fetchedFaqs } = useFaqs(pathname || "global");
  const faqs = fetchedFaqs?.length
    ? fetchedFaqs
    : [
        {
          question: "What services does Ensurekar offer?",
          answer:
            "Ensurekar offers a comprehensive suite of services, including accounting, payroll processing, tax preparation, financial advisory, and global payroll solutions.",
        },
        {
          question: "How does the accounting process work?",
          answer:
            "Ensurekar’s accounting process starts with gathering financial data, processing it for accuracy, and generating detailed reports for decision-making.",
        },
      ];

  const heroQuestion = faqs?.[0]?.question || "FAQs";
  const heroAnswer = faqs?.[0]?.answer || "";

  return (
    <div>
      <section className="stp-30 sbp-30 relative">
        <Image
          src={sliceIcon}
          alt="image"
          className="absolute top-0 left-0 -rotate-90 max-md:h-[80px]"
        />
        <div className="container">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center max-xxl:overflow-hidden">
              <div className="max-w-[700px] text-center flex justify-center items-center flex-col">
                <p
                  className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp"
                >
                  FAQs
                </p>

                <h1
                  className="display-4 pt-4 pb-4 lg:pb-6 wow animate__animated animate__fadeInDown"
                >
                  {heroQuestion}
                </h1>

                <p className="text-bodyText wow animate__animated animate__fadeInUp">
                  {heroAnswer}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 stp-15 max-xl:gap-6">
            <div
              className="col-span-12 lg:col-span-6 xl:col-span-5 flex justify-center items-center overflow-hidden"
            >
              <Image
                src={faq_illus}
                alt="image"
                className="hover:scale-110 duration-500 w-full h-full"
              />
            </div>

            <div className="col-span-12 lg:col-span-6 xl:col-start-7 flex flex-col gap-4 md:gap-6">
              {faqs.map((QA, index) => {
                return (
                  <div
                    key={index}
                    className={`flex justify-between items-start gap-2 p-3 md:p-5 xl:p-6 border faqItem duration-1000 cursor-pointer ${
                      openFAQ === index + 1 ? 'faqItemOpen' : 'faqItemClose'
                    }`}
                    onClick={() => toggleFAQ(index + 1)}
                  >
                    <div>
                      <h4 className="heading-4">{QA.question}</h4>
                      <div
                        className={`faqAnswer overflow-hidden duration-1000 ${
                          openFAQ === index + 1 ? 'faqOpen' : 'faqClose'
                        }`}
                      >
                        <p className="pt-5">{QA.answer}</p>
                      </div>
                    </div>

                    {/* Toggle Icon with rotation */}
                    <div className="relative">
                      <div
                        className={`transform duration-500 ${
                          openFAQ === index + 1 ? 'rotate-180' : 'rotate-0'
                        }`}
                      >
                        {openFAQ === index + 1 ? <Minus size={24} /> : <Plus size={24} />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQsSection;