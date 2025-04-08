"use client";
import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import logo1 from "../../images/logo1.png";

const CompaniesAct = () => {
  const BenefitsData = useMemo(() => [
    {
      imageUrl: "",
      title: "Limited Liability Protection",
      description:
        "The legal liability of a private limited company's stockholders is restricted. You will be responsible for paying the liabilities of the company as a shareholder to the extent of your contribution. This protects your personal assets to cover the company's debts.",
    },
    {
      imageUrl: "",
      title: "Separate Legal Entity",
      description:
        "The company in itself is recognised as a legal entity and is responsible for the management of its liabilities and assets. This prevents the creditors from claiming personal assets of the directors and shareholders for money recovery.",
    },
    {
      imageUrl: "",
      title: "Easy to Raise Capital",
      description:
        "A registered private limited company is perceived as a legal entity and is capable of raising funds. Entrepreneurs can raise capital through equity and expand their business within the provided time limits of the liability.",
    },
    {
      imageUrl: "",
      title: "Perpetual Succession",
      description:
        "Registered private limited company functions continuously until it is officially dissolved and this is called perpetual succession. It is a state where the death of any founders of the company does not affect its existence.",
    },
    {
      imageUrl: "",
      title: "Owning Property",
      description:
        "Private companies are treated as separate legal entities and can own properties acquired and cell under their name. This helps the company manage its assets independently of the personal assets of the shareholders.",
    },
    {
      imageUrl: "",
      title: "Trustworthiness",
      description:
        "Registered private limited companies provide access to director information and other crucial data of the company. This increases the trust factor of the general public and the investor. All the important details of the company and the directors are published in the MCA portal",
    },
    {
      imageUrl: "",
      title: "Dual Relationship",
      description:
        "Members of a private limited company can act as both shareholders and employees of the company. This improves the company's operational efficiency and overall governance.",
    },
    {
      imageUrl: "",
      title: "Free and Easy Transferability of Shares",
      description:
        "Unlike public limited companies, In a private limited company, shares can be easily transferred from one person to another without having an impact on the company's operations. This provides greater flexibility for shareholders and also makes it attractive for investors",
    },
    {
      imageUrl: "",
      title: "Capacity to Sue and Be Sued",
      description:
        "The company can initiate legal proceedings and can also have legal actions taken in its name. This ensures that all the legal matters handled in the company's name protect the shareholders from their personal liability.",
    },
    {
      imageUrl: "",
      title: "Borrowing Capacity",
      description:
        "Private limited companies, when registered, have better access to funding from banks and other financial institutions. This enables the company to fund itself and operate as a separate legal entity in the future.",
    },
  ], []);

  const [benefits, setBenefits] = useState<any[]>([]);

  useEffect(() => {
    setBenefits(BenefitsData);
  }, [BenefitsData]);

  return (
    <div className="container stp-30 sbp-10">
      <div className="flex flex-col items-center">
        <h3 className="heading-3">
          Private Limited Company
          <span className="text-blue-600">- An Overview</span>
        </h3>

        <div className="border text-center my-8 p-4 shadow-inner shadow-cyan">
          <h4 className="heading-4 mb-5">
            {" "}
            <span className="text-blue-600">{'"'}</span>Companies Act, 2013
            (India)<span className="text-blue-600 text-semibold">{'"'}</span>
          </h4>
          <p className="text-bodyText">
            This act governs the incorporation, regulation, and winding up of
            companies in India. It specifies the procedures for registering a
            private limited company with the Registrar of Companies (ROC)
          </p>
        </div>

        <div className="flex flex-wrap md:flex-nowrap items-center justify-center">
          <div className="md:w-1/6 mb-4 md:mb-0 flex items-center justify-center">
            <Image
              src={logo1}
              alt="image"
              className="hover:scale-110 duration-500 w-full h-full md:w-auto md:h-auto"
            />
          </div>
          <div className="p-5 md:w-5/6">
            <p>
              A private limited company is a business entity where ownership is
              restricted to a small number of shareholders, and shares cannot be
              publicly traded. Here the shareholder liability is limited to
              their investment in the company and can have up to 200
              shareholders. The shares are not publicly traded. The company's
              registration and operations are governed by the Register of
              Companies (ROC). The directors have to submit their Director
              Identification Number (DIN) and Digital Signature Certificate
              (DSC) for incorporation. Documents like the Memorandum of
              Association (MoA) and Articles of Association (AoA) have to be
              submitted in the MCA portal. Post registration, the Ministry of
              Corporate Affairs (MCA)will provide the incorporation certificate
              and will display the company's details on the website.
            </p>
          </div>
        </div>

        <div className="my-5 text-center">
          <h3 className="heading-3 my-4">
            <span className="text-blue-600">Advantages</span> of Registering as
            a Private Limited Company
          </h3>
          <p className="p-5">
            One of the major advantages of a private limited company is that it
            provides a flexible management structure. Apart from this, it also
            has perpetual succession, which means it has a continued or
            Perpetual existence until it is legally dissolved. Here are some
            other benefits of registering as a Private limited company:
          </p>
          <div className="flex flex-wrap items-center justify-around">
            {benefits.map((benefit: any) => (
              <div
                key={benefit.title}
                className="flex flex-col items-center gap-4 bg-slate-100 rounded p-3 m-3 flex-grow max-w-[400px] min-h-[380px]"
              >
                <div className="border w-[70px] h-[70px]">
                  <Image src={benefit.imageUrl} alt="img" />
                </div>
                <h5 className="text-center heading-5">{benefit.title}</h5>
                <p className="text-center px-5 mb-5">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="flex my-5 flex-col  items-center justify-center align-center text-start">
            <div className="my-8 flex flex-wrap  items-center gap-3 md:flex-nowrap">
              <div className="md:w-1/2 xl:w-1/2">
                <h3 className="heading-3">
                  {" "}
                  <span className="text-blue-600">
                    Eligibility Criteria{" "}
                  </span>{" "}
                  for Private Limited Company Online Registration{" "}
                </h3>
                <p className="p-3">
                  As per MCA guidelines, a private limited company must be
                  registered with at least two directors and shareholders. While
                  stockholders may be either natural people or corporate
                  entities, directors must be people. Additionally, a registered
                  office address in India is mandatory. The following criterias
                  must be met while filing for private limited company
                  registration:
                </p>
                <ul className="text-start list-disc">
                  <li>
                    The applicant's minimum age should be eighteen years old
                  </li>
                  <li>The applicant must be a citizen or resident of India</li>
                  <li>There should be between 200 and 300 members</li>
                  <li>Minimum number of Directors or shareholders must be 2</li>
                </ul>
              </div>
              <div className="md:w-1/3 xl:w-1/4 p-5 flex items-center justify-center align-center mx-auto">
                <Image
                  src={logo1}
                  alt="image"
                  className="w-48 h-48 md:w-64 md:h-64 xl:w-80 xl:h-80 "
                />
              </div>
            </div>
            <div className="my-8 flex flex-wrap  items-center gap-3 md:flex-nowrap">
              <div className="md:w-1/3 xl:w-1/4 p-5 flex items-center justify-center align-center mx-auto">
                <Image
                  src={logo1}
                  alt="image"
                  className="w-48 h-48 md:w-64 md:h-64 xl:w-80 xl:h-80"
                />
              </div>
              <div className="md:w-1/2 xl:w-1/2">
                <h3 className="heading-3">
                  <span className="text-blue-600">Checklist </span> for Private
                  Limited Company Registration
                </h3>
                <p className="p-3">
                  As per the MCA, a checklist has to be met for registering your
                  company. Here is a clear outline of a checklist for private
                  limited company registration to follow
                </p>
                <ul className="text-start list-disc">
                  <li>At least 2 Directors</li>
                  <li>Directors and shareholders can be the same person</li>
                  <li>All the Directors should have DIN and DSC</li>
                  <li>Have the minimum Authorised share capital</li>
                  <li>Have the minimum Paid up share capital</li>
                  <li>Draft and MoA and AoA</li>
                  <li>Need details of the company working address</li>
                  <li>NOC and Rental Agreement from the landlord</li>
                </ul>
              </div>
            </div>
            <div className="my-8 flex flex-wrap  items-center gap-3 md:flex-nowrap">
              <div className="md:w-1/2 xl:w-1/2">
                <h3 className="heading-3">
                  {" "}
                  PVT Ltd Company Registration
                  <span className="text-blue-600"> Documents Required</span>
                </h3>
                <p className="p-3">
                  The following necessary documents are crucial for Private
                  Limited Company registration in India:
                </p>
                <ul className="text-start list-disc">
                  <li> Photographs of directors in passport size</li>
                  <li>Residential address proof for directors</li>
                  <li>Photo identification proof for directors</li>
                  <li>Sample signatures</li>
                  <li>
                    {" "}
                    A self-declaration confirming directorship in other
                    companies
                  </li>
                  <li>Lease/Rent agreement for the registered office</li>
                  <li> Letter of no objection from the property owner </li>
                  <li> Aadhaar card </li>
                  <li>PAN card</li>
                  <li>Director Identification Number (DIN) </li>
                  <li>Digital Signature Certificate (DSC)</li>
                  <li>Memorandum of Association (MOA)</li>
                  <li>Articles of Association (AoA)</li>
                </ul>
              </div>
              <div className="md:w-1/3 xl:w-1/4 p-5 flex items-center justify-center align-center mx-auto">
                <Image
                  src={logo1}
                  alt="image"
                  className="w-48 h-48 md:w-64 md:h-64 xl:w-80 xl:h-80 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesAct;
