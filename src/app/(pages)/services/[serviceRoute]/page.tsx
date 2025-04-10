import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import Image from "next/image";
import Rocket_With_Men from "../../../images/SGV-Types/Rocket-With-Men.svg";
import Company_People_Group from "../../../images/SGV-Types/Company-People-Group.svg";
import CompaniesAct from "@/app/components/Section/Companies-Act";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import FAQsSection from "@/app/components/other-page-sections/FAQs-Section";
import TestimonialSection from "@/app/components/Section/Testimonial-Section";

const ServicePage = async ({
  params,
}: {
  params: { serviceRoute: string };
}) => {
  const baseUrl = process.env.PUBLIC_URL || "/";

  const response = await fetch(
    `${baseUrl}/api/services/${params.serviceRoute}`,
    { cache: "no-store" }
  );
 
  if (!response.ok) {
    return <div>Failed to load service data</div>;
  }
  const data = await response.json();

  return (
    <div className="">
      <BreadcrumbSection BreadcrumbData={data.BreadcrumbSectionInfo}  />
        <section className="stp-30 sbp-30">
          <div className="container grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-6 xxl:col-span-5 flex justify-start items-start flex-col">
              <p className="bg-p1 py-3 px-5 rounded-full text-white">
                {data.title}
              </p>
              <h2 className="display-4 pt-4 pb-6">
                Tailored Solutions for {data.heading}
              </h2>
              <p className="text-bodyText pb-6 lg:pb-10">
                Ensurekar is dedicated to supporting the financial health of your
                dental practice. From payroll solutions for dental professionals
                to compliance management,
              </p>
              <div className="flex justify-center items-center w-full overflow-hidden">
                <Image
                  src={Rocket_With_Men}
                  alt="image"
                  className="hover:scale-110 duration-500 w-full h-full"
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 xxl:col-start-7 flex flex-col gap-6 xl:gap-10 justify-center items-center pb-6 xl:pb-12">
              <div className="flex justify-start items-start gap-4">
                <div className="text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1 !leading-[0]">
                  <i className="ph-fill ph-tooth"></i>
                </div>
                <div className="">
                  <h4 className="heading-4">Payroll for Dental Professionals</h4>
                  <p className="text-bodyText pt-3">
                    Accurate and efficient payroll processing tailored to meet the
                    unique needs of dental professionals. Ensure your dedicated
                    team
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start gap-4">
                <div className="text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1 !leading-[0]">
                  <i className="ph-fill ph-users-three"></i>
                </div>
                <div className="">
                  <h4 className="heading-4">Compliance Management</h4>
                  <p className="text-bodyText pt-3">
                    Stay compliant with the ever-evolving regulations in the
                    dental industry. Our services include compliance management
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start gap-4">
                <div className="text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1 !leading-[0]">
                  <i className="ph-fill ph-user"></i>
                </div>
                <div className="">
                  <h4 className="heading-4">
                    Financial Advisory for Dental Practices
                  </h4>
                  <p className="text-bodyText pt-3">
                    Navigate the financial landscape of dental care with our
                    expert advisory services. From budgeting to strategic
                    planning,
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start gap-4">
                <div className="text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1 !leading-[0]">
                  <i className="ph-fill ph-users-three"></i>
                </div>
                <div className="">
                  <h4 className="heading-4">Dental Consulting</h4>
                  <p className="text-bodyText pt-3">
                    Receive personalized consulting services to address the unique
                    challenges of your dental practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      <section className="stp-30 sbp-30 bg-softBg1 overflow-hidden">
        <div className="xxl:ml-[calc((100%-1296px)/2)] max-xxl:container grid grid-cols-12 lg:gap-6 xxl:gap-32">
          <div className="col-span-12 lg:col-span-6 flex justify-start items-start self-stretch order-2">
            <Image
              src={Company_People_Group}
              alt="image"
              className="w-full h-full"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 flex justify-center items-start flex-col">
            <p className="bg-p1 py-3 px-5 rounded-full text-white">
              All in one
            </p>

            <h2 className="display-4 pt-4 pb-6">{data.title} </h2>

            <p className="text-bodyText">
              {data.BreadcrumbSectionInfo.description}
            </p>
          </div>
        </div>
      </section>
      <CompaniesAct  />
      {/* <RegisterSteps RegisterSteps={data.BreadcrumbSectionInfo}/> */}
      <FAQsSection />
      <section className="sbp-30 stp-30">
        <div className="container">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center max-xxl:overflow-hidden">
              <div className="max-w-[700px] text-center flex justify-center items-center flex-col">
                <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white">
                  Why Choose Us
                </p>

                <h1 className="display-4 pt-4 pb-4 lg:pb-6">
                  Why Choose Ensurekar for Dentist Services?
                </h1>

                <p className="text-bodyText">
                  Ensurekar is dedicated to supporting the financial health of
                  your dental practice. From payroll solutions for dental
                  professionals to compliance management.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 stp-15">
            <div className="col-span-12 md:col-span-4 flex justify-center items-center flex-col">
              <div className="text-7xl text-s1">
                <i className="ph-fill ph-tooth"></i>
              </div>
              <h4 className="heading-4 pb-4 pt-3 text-center">
                Dental Industry Expertise
              </h4>
              <p className="text-center">
                Our team understands the specific needs and challenges of the
                dental industry, providing tailored solutions.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 flex justify-center items-center flex-col">
              <div className="text-7xl text-s1">
                {/* <Headphones weight="fill" /> */}
              </div>
              <h4 className="heading-4 pb-4 pt-3 text-center">
                Financial Support
              </h4>
              <p className="text-center">
                Beyond payroll, we offer a range of financial services to
                support the overall health of your dental practice.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 flex justify-center items-center flex-col">
              <div className="text-7xl text-s1">
                <i className="ph-fill ph-webhooks-logo"></i>
              </div>
              <h4 className="heading-4 pb-4 pt-3 text-center">
                Technology Integration
              </h4>
              <p className="text-center">
                Stay ahead with technology-driven solutions that enhance
                efficiency and compliance in the dental care sector.
              </p>
            </div>
          </div>
        </div>
      </section>
      <TestimonialSection />
    </div>
  );
};

export default ServicePage;
