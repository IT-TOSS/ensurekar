"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import sliceIcon from "../../images/sliceIcon.png";
import faq_illus from "../../images/faq_illus.png";
import { usePathname } from "next/navigation";
import { useFaqs } from "@/hooks/useFaqs";

import { ArrowLeft, ArrowRight, Minus, Plus } from "phosphor-react";

interface FAQsData {
  title?: string;
  heading?: string;
  description?: string;
  imageUrl?: StaticImageData | string;
  FAQs?: { question: string; answer: string }[];
}
type FAQItem = { question: string; answer: string; id?: number };

function normalizeRouteName(raw: string | undefined | null): string {
  const s = String(raw || "").trim();
  if (!s) return "global";
  if (s.toLowerCase() === "global") return "global";
  // Allow passing "limited-liability-partnership-registration" without leading slash
  return s.startsWith("/") ? s : `/${s}`;
}

const FAQsServicesSection = ({
  FAQsData,
  routeName,
}: {
  FAQsData?: FAQsData;
  routeName?: string;
}) => {
  const { title = "FAQs", heading = "", description = "", FAQs = [], imageUrl } = FAQsData || {};
  const pathname = usePathname();
  const resolvedRouteName = useMemo(
    () => normalizeRouteName(routeName || pathname || "global"),
    [routeName, pathname]
  );
  const { faqs: fetchedFaqs, isLoading, error } = useFaqs(resolvedRouteName);

  const effectiveFaqs: FAQItem[] = useMemo(() => {
    // Prefer DB-driven FAQs (global + page-specific). Fallback to page's static data.
    if (fetchedFaqs?.length) return fetchedFaqs as any;
    return (FAQs || []) as any;
  }, [fetchedFaqs, FAQs]);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const [currentPage, setCurrentPage] = useState(0);

  const numPages = Math.ceil((effectiveFaqs?.length || 0) / 5);

  const toggleFAQ = (index: number) => {
    if (openFAQ === index) {
      setOpenFAQ(null); 
    } else {
      setOpenFAQ(index); 
    }
  };

  const handlePagination = (direction: "left" | "right") => {
    if (direction === "left" && currentPage > 0) {
      setCurrentPage((p) => p - 1);
      setOpenFAQ(null);
    } else if (direction === "right" && currentPage < numPages - 1) {
      setCurrentPage((p) => p + 1);
      setOpenFAQ(null);
    }
  };

  useEffect(() => {
    // When route changes, reset pagination/accordion.
    setCurrentPage(0);
    setOpenFAQ(null);
  }, [resolvedRouteName]);

  useEffect(() => {
    // If list size changes (e.g. after fetch), keep page index valid.
    if (currentPage > 0 && currentPage > numPages - 1) {
      setCurrentPage(0);
      setOpenFAQ(null);
    }
  }, [currentPage, numPages]);

  const displayedFAQs = (effectiveFaqs || []).slice(currentPage * 5, (currentPage + 1) * 5);

  return (
    <div>
      <section className="stp-30 sbp-30  relative">
        <Image
          src={sliceIcon}
          alt="image"
          className="absolute top-0 left-0 -rotate-90 max-md:h-[80px]"
        />
        <div className="container">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center max-xxl:overflow-hidden">
              <div className="max-w-[700px] text-center flex justify-center items-center flex-col">
                <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp">
                  {title}
                </p>

                <h1 className="display-4 pt-4 pb-4 lg:pb-6 wow animate__animated animate__fadeInDown dark:text-white">
                  {heading}
                </h1>

                <p className="text-bodyText wow animate__animated animate__fadeInUp dark:text-white">
                  {description}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 stp-15 max-xl:gap-6">
            {imageUrl && (
                 <div className="col-span-12 lg:col-span-6 xl:col-span-5 flex justify-center items-center overflow-hidden">
                 <Image
                   src={imageUrl}
                   alt="image"
                   className="hover:scale-110 duration-500 w-full"
                 />
               </div>
              )}
         

            <div className={`col-span-12 ${imageUrl ? "lg:col-span-6 xl:col-start-7 flex flex-col gap-4 md:gap-6" : "flex flex-col gap-4 md:gap-6"}`}>
              {isLoading && !effectiveFaqs?.length && (
                <div className="p-4 border rounded-md bg-white/50 dark:bg-black/10 dark:text-white">
                  Loading FAQs...
                </div>
              )}

              {!isLoading && !!error && !effectiveFaqs?.length && (
                <div className="p-4 border rounded-md bg-white/50 dark:bg-black/10 dark:text-white">
                  Failed to load FAQs.
                </div>
              )}

              {!isLoading && !error && !effectiveFaqs?.length && (
                <div className="p-4 border rounded-md bg-white/50 dark:bg-black/10 dark:text-white">
                  No FAQs found for this page.
                </div>
              )}

              {displayedFAQs?.map((QA: any, index: number) => {
                const globalIndex = currentPage * 5 + index;
                return (
                  <div
                    key={QA?.id ?? globalIndex}
                    className={`flex justify-between items-start gap-2 p-3 md:p-5 xl:p-6 border faqItem duration-1000 cursor-pointer  ${
                      openFAQ === globalIndex ? "faqItemOpen" : "faqItemClose"
                    } dark:text-white`}
                    onClick={() => toggleFAQ(globalIndex)}
                  >
                    <div>
                      <h4 className="heading-4 dark:text-white">{QA.question}</h4>
                      <div
                        className={`faqAnswer overflow-hidden duration-1000  ${
                          openFAQ === globalIndex ? "faqOpen" : "faqClose"
                        }`}
                      >
                        <p className="pt-5 ">{QA.answer}</p>
                      </div>
                    </div>

                    {/* Toggle Icon with rotation */}
                    <div className="relative">
                      <div
                        className={`transform duration-500 ${
                          openFAQ === globalIndex ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        {openFAQ === globalIndex ? (
                          <Minus size={24} />
                        ) : (
                          <Plus size={24} />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              {numPages > 1 && (
              <div className="flex mt-5 justify-between">
                <div
                  className={`cursor-pointer text-nowrap group max-sm:text-sm gap-3 py-2 md:py-3 px-3 md:px-6 bg-amber-300 border border-gray-600 text-mainTextColor font-medium min-w-[150px] flex items-center justify-center ${currentPage === 0 ? "opacity-50 pointer-events-none" : ""}`}
                  onClick={() => handlePagination("left")}
                >
                  <button className="font-bold flex  items-center justify-center">
                    {" "}
                    <ArrowLeft
                      weight="bold"
                      className="transition-transform inline mr-2 group-hover:-translate-x-1"
                    />
                    Pre
                  </button>
                </div>
                <div
                  className={`cursor-pointer text-nowrap group max-sm:text-sm gap-3 py-2 md:py-3 px-3 md:px-6 bg-amber-300 border border-gray-600 text-mainTextColor font-medium min-w-[150px] flex items-center justify-center ${currentPage === numPages - 1 ? "opacity-50 pointer-events-none" : ""}`}
                  onClick={() => handlePagination("right")}
                >
                  <button className="font-bold flex  items-center justify-center">
                    {" "}
                    Next
                    <ArrowRight
                      weight="bold"
                      className="ml-2 transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQsServicesSection;
