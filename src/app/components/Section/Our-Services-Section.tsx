"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const OurServices = () => {
  const Data = {
    title: "Our Services at a Glance",
    sub_title:
      "Complete the entire process and chat with us from your dashboard!",
    Service_options: [
      {
        name_of_service: "Register Your Business",
        subServices: [
          {
            title: "Private Limited Company Registration",
            price: "999",
            priceNote: "please enquire for pricing",
            tax: "GST and Govt. fees extra.",
            description: [
              "DIN and DSC for two Directors",
              "Name Approval Certificate",
              "Drafting of MoA & AoA",
              "Registration fees and stamp duty",
              "Company Incorporation Certificate",
              "Company PAN and TAN",
              "Zero Balance Current Account",
              "&more",
            ],
            plan_type: "month",
            know_more: "/pvt-ltd-incorporation",
          },
          {
            title: "Limited Liability Partnership",
            price: "1999",
            priceNote: "please enquire for pricing",
            tax: "GST and Govt. fees extra.",
            description: [
              "DIN and DSC for two Directors",
              "Name Approval Certificate",
              "Drafting of MoA & AoA",
              "Registration fees and stamp duty",
              "Company Incorporation Certificate",
              "Company PAN and TAN",
              "Zero Balance Current Account",
              "&more",
            ],
            plan_type: "month",
            know_more: "/limited-liability-partnership-registration",
          },
          {
            title: "One Person Company",
            price: "999",
            priceNote: "please enquire for pricing",
            tax: "GST and Govt. fees extra.",
            description: [
              "DIN and DSC for the Director",
              "Guidance for choosing the company name",
              "Name Approval Certificate",
              "Company PAN and TAN",
              "Drafting of MoA & AoA",
              "Registration fees and stamp duty",
              "Company Incorporation Certificate",
              "&more",
            ],
            plan_type: "month",
            know_more: "/one-person-company",
          },
          {
            title: "Partnership Firm",
            price: "2499",
            priceNote: "please enquire for pricing",
            tax: "GST and Govt. fees extra.",
            description: [
              "Guidance on setting up a partnership firm",
              "Drafting Partnership Deed",
              "Two rounds of iterations",
              "&more",
            ],
            plan_type: "month",
            know_more: "/partnership-registration",
          },
        ],
      },
      {
        name_of_service: "Get Licenses and Registrations",
        subServices: [
          {
            title: "Shops & Establishments License",
            price: "1999",
            priceNote: "please enquire for pricing",
            tax: "Government fees + applicable taxes and charges extra",
            description: [
              " Opening a commercial establishment? It is mandatory to get a Shops & Establishments License. Experts will handle the entire process for you and get you your license at the earliest.",
            ],
            plan_type: undefined,
            know_more: "/labour-compliance/shop-and-establishment-registration",
          },
          {
            title: "FSSAI Registration",
            price: "799",
            priceNote: "please enquire for pricing",
            tax: "Government fees + applicable taxes and charges extra",
            plan_type: undefined,
            know_more: "/fssai-food-license",
            description: [
              "Every business operating in the food industry must register under FSSAI. You get guidance in choosing the right type of license for your business. Our experts will take care of the filing process and explain how to run your business as per the FSSAI rules to avoid being penalised.",
            ],
          },
          {
            title: "ISO Certification",
            price: "1499",
            priceNote: "please enquire for pricing",
            tax: "Government fees + applicable taxes and charges extra",
            plan_type: undefined,
            know_more: "/iso-certification",
            description: [
              "ISO certification assists every business with a mark of quality and high standards. With us, you get assistance with picking the right type of ISO certification for your business and we work with you on connecting with a trustworthy vendor and walking you through the entire process.",
            ],
          },
          {
            title: "Import and Export Code",
            price: "1499",
            priceNote: "please enquire for pricing",
            tax: "Government fees + applicable taxes and charges extra",
            plan_type: undefined,
            know_more: "/import-export-code",
            description: [
              "Want to be involved in an import/export business? You need an Import and Export Code for it. Get your IEC at the earliest with Vakilsearch. Our support team will guide you through the process and hand you your IEC on a silver platter",
            ],
          },
        ],
      },
      {
        name_of_service: "Protect Your Intellectual Property",
        subServices: [
          {
            title: "Trademark Registration",
            price: "1499",
            priceNote: "please enquire for pricing",
            tax: "Government fees + applicable taxes and charges extra",
            plan_type: undefined,
            know_more: "/trade-mark-ip/trademark-registration",
            description: [
              "Your brand name is how your customers identify you. So protect it by registering a trademark with Vakilsearch. Our experts help you pick the right trademark classes and register your trademark for you. You can start using the symbol in 24 hours!",
            ],
          },
          {
            title: "Trademark Watch",
            price: "499",
            priceNote: "please enquire for pricing",
            tax: "Government fees + applicable taxes and charges extra",
            plan_type: undefined,
            know_more: "/trade-mark-name-search",
            description: [
              "Trademark Watch ensures that no one tries to register a mark similar to your registered trademark. With our team of experts and sophisticated tools, we will watch out for businesses trying to register a mark similar to yours and send you timely reports on the same",
            ],
          },
          {
            title: "Copyright Registration",
            price: "499",
            priceNote: "please enquire for pricing",
            tax: "Government fees + applicable taxes and charges extra",
            plan_type: undefined,
            know_more: "/trade-mark-ip/copyright-registration",
            description: [
              "Your work is your pride, but today it is easier than ever for people to steal your work and use it without your permission. Many creators don't copyright their work because of the hassle. With Vakilsearch you get the protection without the hassle as we take care of the entire process for you.",
            ],
          },
          {
            title: "Patent Registration",
            price: undefined,
            priceNote: "please enquire for pricing",
            tax: "*Price depends on the scope of work",
            plan_type: undefined,
            know_more: "",
            description: [
              "Inventing something is hard, but protecting your invention can be harder! Registering and getting a patent is difficult, but not with Vakilsearch. From patent search and listing the different uses of your invention to filing for patent protection, our experts take care of the complicated processes so that you get the due credit for your invention.",
            ],
          },
        ],
      },
      {
        name_of_service: "Easy Tax Registration and Filing",
        subServices: [
          {
            title: "GST Registration",
            price: "399",
            priceNote: "please enquire for pricing",
            tax: "Applicable taxes and charges extra",
            plan_type: undefined,
            know_more: "/gst-and-other-indirect-tax/gst-registration",
            description: [
              "Get GST registration done for your business easily through Vakilsearch. Our experts will walk you through the entire process and file for you. We ensure you get your GSTIN at the earliest.",
            ],
          },
          {
            title: "Professional Tax Registration",
            price: "5999",
            priceNote: "please enquire for pricing",
            tax: "Government fees + applicable taxes and charges extra",
            offer: "3 interest free payments powered by",
            paymentIcon: "",
            plan_type: undefined,
            know_more: "/labour-compliance/professional-tax-registration",
            description: [
              "Professional life is hard enough, so why bother about the complicated process of professional tax registration when you can get the experts at Vakilsearch to do it for you?",
            ],
          },
          {
            title: "Income Tax Returns",
            price: undefined,
            priceNote: "please enquire for pricing",
            tax: "*Price depends on the scope of work",
            plan_type: undefined,
            know_more: "/income-tax-fillings",
            description: [
              "Understanding the latest rules and available exemptions every year to file your tax returns can be nerve- wracking. Or you can get it done effortlessly through Vakilsearch!",
            ],
          },
          {
            title: "TDS Return",
            price: undefined,
            priceNote: "please enquire for pricing",
            tax: "*Price depend's on the scope of work",
            plan_type: undefined,
            know_more: "/",
            description: [
              "An employer or company that has valid TAN - Tax Collection and Deduction Account Number can file for TDS return. Any individual or business who makes a particular payment which is stated under the I-T Act needs to deduct tax at source.",
            ],
          },
        ],
      },
      {
        name_of_service: "Mandatory Compliances",
        subServices: [
          {
            title: "Maintain Your Account",
            price: undefined,
            priceNote: "please enquire for pricing",
            tax: "*Price depends on the scope of work",
            plan_type: undefined,
            know_more: "",
            description: [
              "The book-keeping and accounting service includes basic financial consultation, bookkeeping, preparation of accurate annual financial statements and monthly reports, assistance in designing invoices, and taxation advice by financial experts. A steal-deal for the price we offer!",
            ],
          },
          {
            title: "Annual Compliance Package for Pvt. Ltd. company",
            price: undefined,
            priceNote: "please enquire for pricing",
            tax: "*Price depends on the scope of work",
            plan_type: undefined,
            know_more: "",
            description: [
              "The annual compliance tasks call for 9 different (and tedious) tasks which you would require different professionals to handle. We have consolidated the professionals so you can get it all done at a nominal price through a single package with Vakilsearch!",
            ],
          },
          {
            title: "Due Diligence",
            price: undefined,
            priceNote: "please enquire for pricing",
            tax: "*Price depends on the scope of work",
            plan_type: undefined,
            know_more: "",
            description: [
              "Due diligence involves assessing major aspects like business, legal, or/and financial aspects of a company. You can get it done easily using Vakilsearch's due diligence package instead of going through the hassle of engaging multiple professionals.",
            ],
          },
          {
            title: "Secretarial Audit Package for Companies",
            price: undefined,
            priceNote: "please enquire for pricing",
            tax: "*Price depends on the scope of work",
            plan_type: undefined,
            know_more: "",
            description: [
              "A secretarial audit is conducted to check if the company is compliant with all the relevant Acts including the Companies Act, 2013. This is mandatory for certain companies and can be a hectic task. Let our experts take up the audit for you!",
            ],
          },
        ],
      },
    ],
  };

  interface Service {
    title: string;
    price: string | undefined;
    tax: string;
    description: string[];
    plan_type: string | undefined;
    know_more: string | undefined;
  }

  interface ServiceOption {
    name_of_service: string;
    subServices: Service[];
  }

  interface DataStructure {
    title: string;
    sub_title: string;
    Service_options: ServiceOption[];
  }

  const [servicesData, setServicesData] = useState<DataStructure | null>(null);
  const [subServices, setSubServices] = useState<Service[]>([]);
  const [tabs, setTabs] = useState("Register Your Business");

  useEffect(() => {
    setSubServices(servicesData?.Service_options[0].subServices || []);
    setTabs(servicesData?.Service_options[0].name_of_service || "");
  }, [servicesData]);

  const toggleTabs = (name: string, subServices: any) => {
    setTabs(name);
    setSubServices(subServices);
  };

  useEffect(() => {
    setServicesData(Data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="bg-softBg1 stp-30  sbp-30 overflow-hidden">
      <div className="w-full ">
        <div className="flex justify-center items-center">
          <div className="text-center flex justify-center items-center flex-col">
            <div className="flex justify-center items-center">
              <div className="flex justify-center  flex-col">
                <div className=" flex justify-center items-center flex-col">
                  {/* <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp">
                    Services
                  </p> */}
                  <h4 className="display-4  text-start py-5 lg:pb-6 wow animate__animated animate__fadeInDown">
                    Our Services at a Glance
                  </h4>
                  <div className="flex flex-wrap flex-row my-5 font-bold justify-center items-center">
                    {servicesData?.Service_options?.map(
                      (service: any, index: number) => (
                        <button
                          key={index}
                          onClick={() =>
                            toggleTabs(
                              service.name_of_service,
                              service?.subServices
                            )
                          }
                          className={`text-lg font-semibold mr-5 mb-2 hover:underline underline-offset-[8px] decoration-2  ${
                            tabs === service.name_of_service
                              ? "underline text-blue-600"
                              : ""
                          }`}
                        >
                          {service.name_of_service}
                        </button>
                      )
                    )}
                  </div>
                </div>
                <div className=" my-5 pb-10  w-full bg-white rounded-xl">
                  <h1 className="heading-3 text-center my-14 ">{tabs}</h1>
                  <div className="my-5 flex flex-wrap justify-center items-center  gap-5  ">
                    {subServices.map((service: any, index: number) => (
                      <div
                        key={index}
                        className="max-w-[290px] flex flex-col gap-5 min-h-[550px] bg-white justify-between p-5 rounded-lg shadow-lg border border-white group hover:border-mainTextColor duration-700 hover:bg-s2 wow animate__animated animate__fadeInUp"
                      >
                        <div className="flex flex-col justify-between">
                          <h5 className="text-lg font-semibold min-h-[50px]">
                            {service.title}
                          </h5>
                          <div>
                            <div className="flex justify-center my-3">
                              <div className="bg-zinc-100 flex p-3 flex-col max-w-[220px] font-medium rounded-lg text-slate-950 text-center">
                                {service.price ? (
                                  <>
                                    {" "}
                                    <p className="text-sm">Starting from</p>
                                    <div className="text-5xl flex justify-center leading-none font-semibold">
                                      <span className="text-3xl mr-[3px]">
                                        ₹
                                      </span>
                                      {service.price}
                                    </div>
                                  </>
                                ) : (
                                  <p className="text-sm pb-1">
                                    {service.priceNote}
                                  </p>
                                )}

                                <p className="text-sm">{service.tax}</p>
                              </div>
                            </div>
                            {service.description &&
                              service.description.length === 1}
                            <ul
                              className={`${
                                service.description &&
                                service.description.length != 1
                                  ? "list-disc"
                                  : ""
                              } flex flex-col p-3 flex-wrap content-center items-cente`}
                            >
                              {service.description.map(
                                (desc: string, index: number) => (
                                  <li key={index} className="text-start">
                                    {desc}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>

                        <Link
                          href={service.know_more}
                          className="text-blue-700 hover:underline flex justify-center"
                        >
                          Know More
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
