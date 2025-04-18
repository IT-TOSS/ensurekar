// "use client";
// import { Check } from "phosphor-react";
// import React, { useEffect, useState } from "react";
// import { PiSealPercent, PiSealWarningBold } from "react-icons/pi";
// import Select from "react-select";
// import Link from "next/link";
// import Image from "next/image";
// import { div } from "framer-motion/client";

// interface planData {
//   heading: {
//     startText: string;
//     blueText: string;
//     endText: string;
//   };
//   description: string;
//   plansData: {
//     id: number;
//     state: string;
//     description: string;
//     plans: {
//       planName: string;
//       description: string;
//       isActive: boolean;
//       suggestionText?: string;
//       happyText?: string;
//       note?: {
//         heading: string;
//         description: string;
//       };
//       plan: {
//         id: string;
//         price?: string;
//         discount?: string;
//         afterDiscount: string;
//         laterPaid: {
//           amount: string;
//           text: string;
//           iconInfo: {
//             text: string;
//             link: string;
//           };
//         };
//         offers: {
//           imageUrl: string;
//           isActive: boolean;
//           heading: string;
//           subHeading: string;
//           description: string;
//           knowMore: {
//             text: string;
//             link: string;
//           };
//         }[];
//         splitPayment: {
//           enabled: boolean;
//           instalments: number;
//           instalmentAmount: string;
//           text: string;
//           knowMore: {
//             text: string;
//             link: string;
//           };
//         };
//       };
//       features: {
//         heading: string[];
//         feature: string[];
//       };
//       recommendation: {
//         recommended: boolean;
//         text: string;
//       };
//     }[];
//   }[];
//   defaultState: string;
//   defaultPlan: string;
//   statesOptions: {
//     value: string;
//     label: string;
//   }[];
// }
// const planData = {
//   heading: {
//     startText: "",
//     blueText: "Right plan",
//     endText: "for Your Business",
//   },
//   description:
//     "Ensurekar incorporation experts register over 1500 companies every month.",
//   plansData: [
//     {
//       id: 1,
//       state: "MP",
//       description: "",
//       plans: [
//         {
//           planName: "Standard",
//           description: "Perfect for initiating company registration",
//           isActive: true,
//           suggestionText: "",
//           happyText: "",
//           plan: {
//             id: "1",
//             price: "₹1499",
//             discount: "₹500 off",
//             afterDiscount: "₹999",
//             laterPaid: {
//               amount: "13,726",
//               text: "+ Govt. Fee (to be paid later)",
//               iconInfo: {
//                 text: "",
//                 link: "",
//               },
//             },

//             offers: [
//               {
//                 imageUrl: "",
//                 isActive: true,
//                 heading: "offer",
//                 subHeading: "Unlock partner benefits Post",
//                 description: "Post company incorporation worth Rs 4 lakhs",
//                 knowMore: {
//                   text: "visit here to grab the offer",
//                   link: "",
//                 },
//               },
//             ],
//             splitPayment: {
//               enabled: false,
//               instalments: 2,
//               instalmentAmount: "₹499.50",
//               text: "Split payment by 2 month with Zolvit Flex",
//               knowMore: {
//                 text: "",
//                 link: "",
//               },
//             },
//           },
//           features: {
//             heading: ["What you'll get"],
//             feature: [
//               "Company Name Reserved in 2-4 Days",
//               "Digital Signature Certificate (DSC) Issued in 4-7 Days",
//               " SPICe+ Form Filing Completed in 14 Days",
//               "Incorporation Certificate Issued in 14-21 Days",
//               "Company PAN and TAN",
//               "Director Identification Number (DIN) for Directors",
//             ],
//           },
//           recommendation: {
//             recommended: true,
//             text: "",
//           },
//         },
//         {
//           planName: "Fastrack",
//           isActive: true,
//           description: "Quick company registration in 7 to 14 days",
//           suggestionText: "",
//           happyText: "",
//           plan: {
//             id: "2",
//             price: "₹2999",
//             discount: "50% off",
//             afterDiscount: "₹1499",
//             laterPaid: {
//               amount: "13,726",
//               text: "+ Govt. Fee (to be paid later)",
//               iconInfo: {
//                 text: "",
//                 link: "",
//               },
//             },
//             offers: [
//               {
//                 imageUrl: "",
//                 heading: "",
//                 isActive: false,
//                 subHeading: "Unlock partner benefits Post",
//                 description: "Post company incorporation worth Rs 4 lakhs",
//                 knowMore: {
//                   text: "",
//                   link: "",
//                 },
//               },
//             ],
//             splitPayment: {
//               enabled: true,
//               instalments: 2,
//               instalmentAmount: "749.50",
//               text: "Split payment by 2 month with Zolvit Flex",
//               knowMore: {
//                 text: "",
//                 link: "",
//               },
//             },
//           },
//           features: {
//             heading: ["What you'll get"],
//             feature: [
//               "Expert-Guided Process",
//               "Company Name Reservation in Just 1-2 Days*",
//               "Digital Signature Certificate (DSC) Issued in 3-4 Days",
//               "SPICe+ Form Filing Completed in 5-7 Days*",
//               "Incorporation Certificate Delivered in 7-14 Days",
//               "Company PAN and TAN",
//               "Director Identification Number (DIN)",
//               "Digital Welcome Kit with a Post-Incorporation Compliance Checklist",
//             ],
//           },
//           recommendation: {
//             recommended: true,
//             text: "",
//           },
//         },
//         {
//           planName: "Premium",
//           isActive: true,
//           description:
//             "Top priority service + annual compliance to keep your business on track",
//           suggestionText: "",
//           happyText: "",
//           plan: {
//             id: "3",
//             price: "₹29,999",
//             discount: "17% off",
//             afterDiscount: "₹24,999",
//             laterPaid: {
//               amount: "13,726",
//               text: "+ Govt. Fee (to be paid later)",
//               iconInfo: {
//                 text: "",
//                 link: "",
//               },
//             },
//             offers: [
//               {
//                 imageUrl: "",
//                 heading: "",
//                 isActive: false,
//                 subHeading: "Unlock partner benefits Post",
//                 description: "Post company incorporation worth Rs 4 lakhs",
//                 knowMore: {
//                   text: "",
//                   link: "",
//                 },
//               },
//             ],
//             splitPayment: {
//               enabled: true,
//               instalments: 3,
//               instalmentAmount: "749.50",
//               text: "Split payment by 3 with Zolvit Flex",
//               knowMore: {
//                 text: "",
//                 link: "",
//               },
//             },
//           },
//           features: {
//             heading: ["What you'll get"],
//             feature: [
//               "Expert assisted process",
//               "Your company name is reserved in just 1 - 2 days*",
//               "DSC in just 3 - 4 days",
//               "SPICe+ form filing in 5 - 7 days*",
//               "Incorporation Certificate in 7 - 14 days",
//               "Company PAN+TAN",
//               "DIN for directors",
//               "Digital welcome kit that includes a checklist of all post-incorporation compliances",
//               "Appointment of Auditor - ADT 01",
//               "Issuance of share certificate",
//               "INC 20 A form filing",
//               "DIR 3 KYC (For 2 directors)",
//               "Accounting & Bookkeeping (Up to 100 transactions)",
//               "Financial statement preparation",
//               "Accounting software (1-year license)",
//               "AOC 4, MGT 7 & ADT filing",
//               "Annual filing (Up to turnover of 20 lakhs)",
//               "Facilitation of Annual General Meeting",
//               "Statutory regulations PF, ESI",
//               "One Year Income Tax filing (Up to turnover of 20 lakhs)",
//               "30-minute call with a senior CA/CS for your business planning",
//             ],
//           },
//           recommendation: {
//             recommended: true,
//             text: "",
//           },
//         },
//       ],
//     },
//     {
//       id: 2,
//       state: "DL",
//       description: "",
//       plans: [
//         {
//           planName: "Standard",
//           description: "Perfect for initiating company registration",
//           isActive: true,
//           suggestionText: "",
//           happyText: "",
//           plan: {
//             id: "4",
//             price: "₹1999",
//             discount: "₹500 off",
//             afterDiscount: "₹1499",
//             laterPaid: {
//               amount: "13,726",
//               text: "+ Govt. Fee (to be paid later)",
//               iconInfo: {
//                 text: "",
//                 link: "",
//               },
//             },
//             offers: [
//               {
//                 imageUrl: "",
//                 heading: "",
//                 isActive: false,
//                 subHeading: "Unlock partner benefits Post",
//                 description: "Post company incorporation worth Rs 4 lakhs",
//                 knowMore: {
//                   text: "",
//                   link: "",
//                 },
//               },
//             ],
//             splitPayment: {
//               enabled: false,
//               instalments: 2,
//               instalmentAmount: "₹499.50",
//               text: "Split payment by 3 with Zolvit Flex",
//               knowMore: {
//                 text: "",
//                 link: "",
//               },
//             },
//           },
//           features: {
//             heading: ["What you'll get"],
//             feature: [
//               "Expert assisted process",
//               "Your company name is reserved in just 2 - 4 days",
//               "DSC in just 4 - 7 days",
//               "SPICe+ form filing in 14 days*",
//               "Incorporation Certificate in 14 - 21 days",
//               "Company PAN+TAN",
//               "DIN for directors",
//             ],
//           },
//           recommendation: {
//             recommended: true,
//             text: "",
//           },
//         },
//         {
//           planName: "Fastrack",
//           isActive: true,
//           description: "Quick company registration in 7 to 14 days",
//           suggestionText: "",
//           happyText: "",
//           plan: {
//             id: "5",
//             price: "₹3999",
//             discount: "50% off",
//             afterDiscount: "₹1999",
//             laterPaid: {
//               amount: "13,726",
//               text: "+ Govt. Fee (to be paid later)",
//               iconInfo: {
//                 text: "",
//                 link: "",
//               },
//             },
//             offers: [
//               {
//                 imageUrl: "",
//                 heading: "",
//                 isActive: false,
//                 subHeading: "Unlock partner benefits Post",
//                 description: "Post company incorporation worth Rs 4 lakhs",
//                 knowMore: {
//                   text: "",
//                   link: "",
//                 },
//               },
//             ],
//             splitPayment: {
//               enabled: false,
//               instalments: 2,
//               instalmentAmount: "₹749.50",
//               text: "Split payment by 3 with Zolvit Flex",
//               knowMore: {
//                 text: "",
//                 link: "",
//               },
//             },
//           },
//           features: {
//             heading: ["What you'll get"],
//             feature: [
//               "Expert-Assisted Process",
//               "Company Name Reservation in 1-2 Days*",
//               "Digital Signature Certificate (DSC) in 3-4 Days",
//               "SPICe+ Form Filing in 5-7 Days*",
//               "Incorporation Certificate Issued in 7-14 Days",
//               "Company PAN and TAN",
//               "Director Identification Number (DIN)",
//               "Appointment of Auditor",
//               "Issuance of Share Certificates",
//               "INC 20A Form Filing",
//               "DIR 3 KYC for 2 Directors",
//               "Accounting & Bookkeeping (Up to 100 Transactions)",
//               "Financial Statement Preparation",
//               "1-Year License for Accounting Software",
//               "Filing of AOC 4, MGT 7 & ADT 1",
//               "Annual Filing (For Turnover Up to 20 Lakhs)",
//               "Facilitation of Annual General Meeting",
//               "Compliance with PF and ESI Statutory Regulations",
//               "One-Year Income Tax Filing (For Turnover Up to 20 Lakhs)",
//               "30-Minute Consultation Call with a Senior CA/CS for Business Planning",
//             ],
//           },
//           recommendation: {
//             recommended: true,
//             text: "",
//           },
//         },
//         {
//           planName: "Premium",
//           isActive: true,
//           description:
//             "Top priority service + annual compliance to keep your business on track",
//           suggestionText: "",
//           happyText: "",
//           plan: {
//             id: "6",
//             price: "₹39,999",
//             discount: "17% off",
//             afterDiscount: "₹32,999",
//             laterPaid: {
//               amount: "13,726",
//               text: "+ Govt. Fee (to be paid later)",
//               iconInfo: {
//                 text: "",
//                 link: "",
//               },
//             },
//             offers: [
//               {
//                 imageUrl: "",
//                 heading: "",
//                 isActive: false,
//                 subHeading: "Unlock partner benefits Post",
//                 description: "Post company incorporation worth Rs 4 lakhs",
//                 knowMore: {
//                   text: "",
//                   link: "",
//                 },
//               },
//             ],
//             splitPayment: {
//               enabled: true,
//               instalments: 3,
//               instalmentAmount: "749.50",
//               text: "Split payment by 3 with Zolvit Flex",
//               knowMore: {
//                 text: "",
//                 link: "",
//               },
//             },
//           },
//           features: {
//             heading: ["What you'll get"],
//             feature: [
//               "Expert assisted process",
//               "Your company name is reserved in just 1 - 2 days*",
//               " DSC in just 3 - 4 days",
//               "SPICe+ form filing in 5 - 7 days*",
//               "Incorporation Certificate in 7 - 14 days",
//               "Company PAN+TAN",
//               "DIN for directors",
//               "Digital welcome kit that includes a checklist of all post-incorporation compliances",
//               "Appointment of Auditor - ADT 01",
//               "Issuance of share certificate",
//               "INC 20 A form filing",
//               "DIR 3 KYC (For 2 directors)",
//               "Accounting & Bookkeeping (Up to 100 transactions)",
//               "Financial statement preparation",
//               "Accounting software (1-year license)",
//               "AOC 4, MGT 7 & ADT filing",
//               "Annual filing (Up to turnover of 20 lakhs)",
//               "Facilitation of Annual General Meeting",
//               "Statutory regulations PF, ESI",
//               "One Year Income Tax filing (Up to turnover of 20 lakhs)",
//               "30-minute call with a senior CA/CS for your business planning",
//             ],
//           },
//           recommendation: {
//             recommended: true,
//             text: "Yes, this is the best plan for you",
//           },
//         },
//       ],
//     },
//   ],
//   defaultState: "MP",
//   defaultPlan: "Standard",
//   statesOptions: [
//     { value: "AP", label: "Andhra Pradesh" },
//     { value: "AR", label: "Arunachal Pradesh" },
//     { value: "AS", label: "Assam" },
//     { value: "BR", label: "Bihar" },
//     { value: "CG", label: "Chhattisgarh" },
//     { value: "GA", label: "Goa" },
//     { value: "GJ", label: "Gujarat" },
//     { value: "HR", label: "Haryana" },
//     { value: "HP", label: "Himachal Pradesh" },
//     { value: "JK", label: "Jammu and Kashmir" },
//     { value: "JH", label: "Jharkhand" },
//     { value: "KA", label: "Karnataka" },
//     { value: "KL", label: "Kerala" },
//     { value: "MP", label: "Madhya Pradesh" },
//     { value: "MH", label: "Maharashtra" },
//     { value: "MN", label: "Manipur" },
//     { value: "ML", label: "Meghalaya" },
//     { value: "MZ", label: "Mizoram" },
//     { value: "NL", label: "Nagaland" },
//     { value: "OD", label: "Odisha" },
//     { value: "PB", label: "Punjab" },
//     { value: "RJ", label: "Rajasthan" },
//     { value: "SK", label: "Sikkim" },
//     { value: "TN", label: "T amil Nadu" },
//     { value: "TG", label: "Telangana" },
//     { value: "TR", label: "Tripura" },
//     { value: "UP", label: "Uttar Pradesh" },
//     { value: "UT", label: "Uttarakhand" },
//     { value: "WB", label: "West Bengal" },
//     { value: "AN", label: "Andaman and Nicobar Islands" },
//     { value: "CH", label: "Chandigarh" },
//     { value: "DN", label: "Dadra and Nagar Haveli" },
//     { value: "DD", label: "Daman and Diu" },
//     { value: "DL", label: "Delhi" },
//     { value: "LD", label: "Lakshadweep" },
//     { value: "PY", label: "Puducherry" },
//   ],
// };

// const PlansSection = ({ planData }: { planData: planData }) => {
//   const {
//     heading,
//     description,
//     plansData,
//     defaultState,
//     defaultPlan,
//     statesOptions,
//   } = planData;

//   const [selectedState, setSelectedState] = useState(defaultState);
//   const [selectPlan, setSelectPlane] = useState(defaultPlan);

//   const plan = plansData.find((plan) => plan.state === selectedState);
//   const plans = plan?.plans.filter((plan) => plan.isActive);
//   const handleBuy = (plan: any) => {
//     console.log(plan);

//      if (plan.onSelect) {
//        plan.onSelect();
//       } else {
//           console.log(plan);
//       }
    

//   };
//   useEffect(() => {
//     const plan = plansData.find((plan) => plan.state === selectedState);
//     setPlansData(plan?.plans.filter((plan) => plan.isActive) || []);
//   }, [selectedState, plansData]);
//   const [gotPlansData, setPlansData] = useState(plans || []);

//   const [splitPaymentStates, setSplitPaymentStates] = useState(
//     plansData.reduce((acc, plan) => {
//       acc[plan.id] = false;
//       return acc;
//     }, {} as { [key: number]: boolean })
//   );

//   const handleToggle = (id: number) => {
//     setSplitPaymentStates((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   const handleStateChange = (selectedOption: any) => {
//     setSelectedState(selectedOption.value);
//   };
//   const handlePlanChange = (planName: string) => {
//     setSelectPlane(planName);
//   };

//   return (
//     <section className="bg-[#F8FBFF] ">
//       <div id="pricing-package" className="md:pt-[80px] py-[52px] ">
//         <div className="pt-[82px] pb-[93px] bg-[#69aba7]  flex flex-col gap-[16px] relative items-center">
//           <p className="text-white text-[24px] md:text-[34px] font-bold flex max-md:flex-col max-md:items-center md:gap-2 leading-normal">
//             {heading.startText}{" "}
//             <span className="text-[#007AFF]">{heading.blueText}</span>{" "}
//             {heading.endText}
//           </p>
//           <p className="text-white text-[14px] md:text-[16px] font-normal max-md:text-center md:mb-4">
//             {description}

//           </p>
//         </div>
//         {/* <div className="flex flex-col w-full items-center justify-center">
//           <div className="flex md:flex-row flex-col md:w-[619px] w-[320px] px-[12px] items-center md:justify-between justify-center md:gap-[5px] md:py-[10px] py-[10px] border-[#53A3F9] rounded-[3px] bg-yellow-400 my-[16px]">
//             <div className="flex flex-col md:gap-[5px] gap-[2px]">
//               <p className="md:text-[18px] text-[14px] max-md:w-full text-[#022B50] md:text-left text-center font-medium">
//                 Select your state to view the Government Fee
//               </p>
//             </div>
//             <div className=" my-2 w-full md:max-w-[200px]">
//               <div className="cursor-pointer">
//                 <Select
//                   closeMenuOnSelect={true}
//                   options={statesOptions}
//                   defaultValue={statesOptions.find(
//                     (option) => option.value === selectedState
//                   )}
//                   onChange={handleStateChange}
//                   className="bg-[#CCE4FF]"
//                 />
//               </div>
//             </div>
//           </div>
//         </div> */}
//       </div>

//       {/* Plan Section */}
//       {/* <div className=" max-md:flex flex max-md:flex-col flex-wrap md:flex max-md:gap-[16px]  items-start justify-around">
//         <div className="flex md:hidden justify-between items-center mx-auto  ">
//           {gotPlansData.map((plan, index: number) => (
//             <p
//               className={`text-[16px] px-4 py-1 text-[#8095A7] font-medium ${
//                 plan.planName === selectPlan
//                   ? "border-b-2 border-[#022B50] font-semibold"
//                   : ""
//               }`}
//               key={index}
//               onClick={() => handlePlanChange(`${plan.planName}`)}
//             >
//               {plan.planName}
//             </p>
//           ))}
//         </div>
//         <div className="flex justify-center items-start flex-wrap mx-auto">
//           {gotPlansData.map((plan) => (
//             <div
//               key={plan.planName}
//               className={`p-4 flex m-3  group  relative flex-col gap-[10px] mx-4  md:w-[460px] my-[25px] md:mt-0 hover:bg-yellow-400 hover:border-[ #007AFF] border-[1px] rounded-md shadow-[0px_0px_10px_rgba(104,104,104,0.08)] animation cursor-pointer md:block transition delay-150 duration-500 ${
//                 plan.planName === selectPlan ? "" : "hidden"
//               }`}
//             >
//               <p className="text-[24px] font-semibold text-[#171717]">
//                 {plan.planName}
//               </p>
//               <p className="text-[16px]  md:h-[48px] font-normal group-hover:text-black duration-500 text-[#606162]">
//                 {plan.description}
//               </p>
//               {plan.recommendation.recommended && (
//                 <div className="flex flex-col mb-1">
//                   <p className="text-[14px] text-[#606162]">
//                     {plan.recommendation.text}
//                   </p>
//                 </div>
//               )}
//               <div className="flex gap-3 items-center">
//                 <div className="relative w-fit">
//                   <p className="text-[12px] md:text-[16px] group-hover:text-gray-600 font-medium">
//                     {plan.plan.price}
//                   </p>
//                   <div className="border-b-[1px] translate-y-[-40%] md:top-[11px] rotate-[-16deg] border-[#E83E3E] w-full absolute top-[9px]"></div>
//                 </div>
//                 {plan.plan.discount && (
//                   <div className="flex w-fit gap-[4px] bg-[#ECF8EB] rounded-lg px-[8px] p-2">
//                     <PiSealPercent size={14} color="#2cdb14" />
//                     <p className="text-[10px] text-[#3EB837]">
//                       {plan.plan.discount}
//                     </p>
//                   </div>
//                   )}
              
//               </div>

//               <div className="md:min-h-[95px]">
//                 <div className="flex gap-4 items-end">
//                   <p className="text-[32px] md:text-[46px] font-semibold text-[#171717]">
//                     {plan.plan.afterDiscount}
//                   </p>
//                 </div>
//                 {(plan.plan.laterPaid.amount || plan.plan.laterPaid.text)  && (
//                     <div className="flex flex-row pb-[16px] items-center ">
//                       <p className="text-[18px] text-[#8095A7] group-hover:text-gray-700 duration-500 font-medium">
//                         {plan.plan.laterPaid.amount} {plan.plan.laterPaid.text}
//                       </p>
                     
//                         <div
//                         className="relative flex group"
//                         title={plan.plan.laterPaid.iconInfo.text}
//                       > {plan.plan.laterPaid.amount && (
//                         <PiSealWarningBold
//                           size={20}
//                           color="#8095A7"
//                           className="mx-1 cursor-pointer"
//                         />
//                       )}
//                       </div>
                    
                      
//                     </div>
//                 )}

//                 {plan.plan.splitPayment.enabled && (
//                   <div className="flex gap-[6px]  items-center md:gap-[10px]">
//                     <div
//                       className="flex items-center cursor-pointer"
//                       onClick={() => {
//                         handleToggle(Number(plan.plan.id));
//                       }}
//                     >
//                       <div className="relative">
//                         <div className="block w-[40px] h-[25px] rounded-full border-[1px] border-[#022b50] bg-[#E5F0FF]"></div>
//                         <div
//                           className={`absolute top-[3px] transition-all duration-300 ease-in-out rounded-full ${
//                             splitPaymentStates[Number(plan.plan.id)]
//                               ? "left-[20px] w-[18px] h-[19px] bg-[#53A3F9]"
//                               : "left-[1px] w-[20px] h-[19px] bg-[#53A3F9]"
//                           }`}
//                         ></div>
//                       </div>
//                     </div>
//                     <div className="flex items-center">
//                       <p className="text-[12px] md:text-[14px] text-[#606162] font-medium ">
//                         {splitPaymentStates[Number(plan.plan.id)]
//                           ? `₹${(
//                               parseFloat(
//                                 plan.plan.afterDiscount
//                                   .replace("₹", "")
//                                   .replace(",", "")
//                               ) / plan.plan.splitPayment.instalments
//                             ).toFixed(2)} x ${
//                               plan.plan.splitPayment.instalments
//                             } months`
//                           : plan.plan.splitPayment.text}
//                         {plan.plan.splitPayment.knowMore.text ? (
//                           <a
//                             href={plan.plan.splitPayment.knowMore.link}
//                             className="text-[#007AFF]"
//                           >
//                             {plan.plan.splitPayment.knowMore.text}
//                           </a>
//                         ) : null}
//                       </p>
//                     </div>
//                   </div>
//                 )}

//                 <div className=" flex flex-col">
//                   {plan.plan.offers.map((offer, index) => (
//                     <>
//                       {offer.isActive && (
//                         <div className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
//                           <div
//                             key={index}
//                             className="flex flex-col gap-2 border px-6 py-8 bg-gradient-to-r from-blue-500 to-blue-300 "
//                           >
//                             {offer.imageUrl && (
//                               <div>
//                                 <Image
//                                   src={offer.imageUrl}
//                                   alt="offer"
//                                   className="w-full h-[50px] rounded-full"
//                                 />
//                               </div>
//                             )}

//                             <div>
//                               <h3 className="text-xl text-start font-extrabold text-white">
//                                 {offer.heading}
//                               </h3>
//                               <h3 className="text-start  font-extrabold text-white">
//                                 {offer.subHeading}
//                               </h3>
//                               <p className="text-[14px] text-white group-hover:text-gray-700 duration-500">
//                                 {offer.description}
//                               </p>

//                               {offer && offer.knowMore.text && (
//                                 <Link href={offer.knowMore.link || "#"}>
//                                   {offer.knowMore.text}
//                                 </Link>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </>
//                   ))}
//                 </div>
//                 <div className="col-span-12 md:col-span-6  md:my- flex justify-center items-center">
//                   <div className="w-full">
//                     <div className="grid grid-cols-1 mt-4 ">
//                       <div className="col-span-2">
//                         <button
//                           className="py-2.5  bg-yellow-400 border  rounded  block text-center   hover:border-mainTextColo group-hover:border-black font-bold duration-500 w-full text-slate-800"
//                           onClick={() => handleBuy(plan)}
//                         >
//                           Buy Now
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex flex-col gap-2">
//                   {plan.features.heading.map((feature, index) => (
//                     <p
//                       key={index}
//                       className="text-[16px] font-semibold mt-4 text-[#171717]"
//                     >
//                       {feature}
//                     </p>
//                   ))}
//                   {plan.features.feature.map((feature, index) => (
//                     <div
//                       key={index}
//                       className="flex gap-1 items-center justify-start"
//                     >
//                       <div className="w-[25px] h-[25px] items-center flex">
//                         {" "}
//                         <Check color="#2cdb14" size={23} weight="bold" />
//                       </div>

//                       <p className="text-[14px] text-[#606162] group-hover:text-gray-700 duration-500">
//                         {feature}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               {plan.happyText && (
//                 <div className="my-5">
//                   <h5 className="heading-7 font-bold group-hover:text-black-800 text-bodyText">
//                     {plan.happyText}
//                   </h5>
//                 </div>
//               )}
//               {plan.note && (
//                 <div className="my-5">
//                   <h5 className="heading-7 inline font-bold group-hover:text-black-800 text-bodyText">
//                     {plan.note.heading}
//                   </h5>
//                   <p className="inline">{plan.note.description}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div> 
//       </div>*/}

// <div className="max-w-7xl mx-auto px-4">
//   {/* Mobile Plan Navigation */}
//   <div className="flex md:hidden justify-center mb-6 overflow-x-auto whitespace-nowrap">
//     {gotPlansData.map((plan, index) => (
//       <button
//         key={index}
//         className={`px-5 py-2 text-base font-medium transition-colors ${
//           plan.planName === selectPlan
//             ? "text-blue-900 border-b-2 border-blue-900 font-semibold"
//             : "text-gray-500 hover:text-blue-800"
//         }`}
//         onClick={() => handlePlanChange(`${plan.planName}`)}
//       >
//         {plan.planName}
//       </button>
//     ))}
//   </div>

//   {/* Plans Container */}
//   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//     {gotPlansData.map((plan) => (
//       <div
//         key={plan.planName}
//         className={`relative rounded-lg transition-all duration-300 hover:shadow-xl ${
//           plan.planName === selectPlan ? "" : "hidden md:block"
//         }`}
//       >
//         {/* Card with hover state */}
//         <div className="h-full flex flex-col border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:border-blue-400 transition-all group">
//           {/* Plan Header */}
//           <div className="p-6 bg-white">
//             <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.planName}</h3>
//             <p className="text-gray-600 text-sm mb-4 h-12 group-hover:text-gray-800">{plan.description}</p>
            
//             {/* Recommendation Badge */}
//             {plan.recommendation.recommended && (
//               <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
//                 {plan.recommendation.text}
//               </div>
//             )}

//             {/* Price Display */}
//             <div className="mt-2 mb-6">
//               <div className="flex items-center gap-2">
//                 {plan.plan.price && (
//                   <span className="relative text-sm text-gray-500 line-through">
//                     {plan.plan.price}
//                   </span>
//                 )}
                
//                 {plan.plan.discount && (
//                   <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md flex items-center">
//                     <PiSealPercent size={14} className="mr-1" />
//                     {plan.plan.discount}
//                   </span>
//                 )}
//               </div>

//               <div className="flex items-end mt-1">
//                 <span className="text-4xl font-bold text-gray-900">{plan.plan.afterDiscount}</span>
//               </div>

//               {/* Later Paid Info */}
//               {(plan.plan.laterPaid.amount || plan.plan.laterPaid.text) && (
//                 <div className="flex items-center mt-2 text-gray-600 text-sm">
//                   <span>{plan.plan.laterPaid.amount} {plan.plan.laterPaid.text}</span>
//                   {plan.plan.laterPaid.amount && (
//                     <div className="ml-1 cursor-help" title={plan.plan.laterPaid.iconInfo?.text || ""}>
//                       <PiSealWarningBold size={16} className="text-gray-500" />
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>

//             {/* Split Payment Toggle */}
//             {plan.plan.splitPayment.enabled && (
//               <div className="flex items-center mb-4">
//                 <div
//                   className="flex items-center cursor-pointer mr-2"
//                   onClick={() => handleToggle(Number(plan.plan.id))}
//                 >
//                   <div className="relative w-10 h-5 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out border border-gray-300">
//                     <div 
//                       className={`absolute top-0.5 bottom-0.5 w-4 bg-blue-500 rounded-full transition-all duration-200 ease-in-out ${
//                         splitPaymentStates[Number(plan.plan.id)] ? "right-0.5" : "left-0.5"
//                       }`}
//                     ></div>
//                   </div>
//                 </div>
//                 <span className="text-xs text-gray-600">
//                   {splitPaymentStates[Number(plan.plan.id)]
//                     ? `₹${(
//                         parseFloat(
//                           plan.plan.afterDiscount
//                             .replace("₹", "")
//                             .replace(",", "")
//                         ) / plan.plan.splitPayment.instalments
//                       ).toFixed(2)} x ${plan.plan.splitPayment.instalments} months`
//                     : plan.plan.splitPayment.text}
//                   {plan.plan.splitPayment.knowMore.text && (
//                     <a
//                       href={plan.plan.splitPayment.knowMore.link}
//                       className="ml-1 text-blue-500 hover:underline"
//                     >
//                       {plan.plan.splitPayment.knowMore.text}
//                     </a>
//                   )}
//                 </span>
//               </div>
//             )}

//             {/* CTA Button */}
//             <button
//               className="w-full py-3 mt-4 mb-6 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
//               onClick={() => handleBuy(plan)}
//             >
//               Buy Now
//             </button>
//           </div>

//           {/* Special Offers */}
//           {plan.plan.offers.some(offer => offer.isActive) && (
//             <div className="px-6 py-3 bg-gray-50">
//               {plan.plan.offers.map((offer, index) => (
//                 offer.isActive && (
//                   <div key={index} className="mb-3 last:mb-0">
//                     <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-4 rounded-lg shadow">
//                       {offer.imageUrl && (
//                         <Image
//                           src={offer.imageUrl}
//                           alt="Offer"
//                           className="h-10 w-auto mb-2"
//                         />
//                       )}
//                       <h4 className="font-bold text-lg">{offer.heading}</h4>
//                       {offer.subHeading && <p className="font-semibold">{offer.subHeading}</p>}
//                       <p className="text-sm mt-1">{offer.description}</p>
//                       {offer.knowMore.text && (
//                         <Link href={offer.knowMore.link || "#"} className="text-white underline text-sm mt-2 inline-block">
//                           {offer.knowMore.text}
//                         </Link>
//                       )}
//                     </div>
//                   </div>
//                 )
//               ))}
//             </div>
//           )}

//           {/* Features List */}
//           <div className="px-6 py-4 bg-white flex-1">
//             {plan.features.heading.map((feature, index) => (
//               <h4 key={index} className="font-semibold text-gray-800 mt-4 first:mt-0">
//                 {feature}
//               </h4>
//             ))}
//             <ul className="mt-3 space-y-3">
//               {plan.features.feature.map((feature, index) => (
//                 <li key={index} className="flex items-start">
//                   <Check weight="bold" size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
//                   <span className="text-sm text-gray-600">{feature}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Additional Info Section */}
//           <div className="p-6 border-t border-gray-100 bg-white">
//             {plan.happyText && (
//               <p className="text-sm font-semibold text-gray-700 mb-3">{plan.happyText}</p>
//             )}
//             {plan.note && (
//               <div className="text-sm text-gray-600">
//                 <span className="font-semibold">{plan.note.heading}</span> {plan.note.description}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>
//     </section>
//   );
// };

// export default PlansSection;

//-----------------------------------------

// "use client";
// import React, { useState, useEffect } from "react";
// import { Check } from "phosphor-react";
// import { PiSealPercent, PiSealWarningBold } from "react-icons/pi";
// import Select, { SingleValue } from "react-select";
// import Link from "next/link";
// import Image from "next/image";

// interface PlanData {
//   heading: {
//     startText: string;
//     blueText: string;
//     endText: string;
//   };
//   description: string;
//   plansData: {
//     id: number;
//     state: string;
//     description: string;
//     plans: {
//       planName: string;
//       description: string;
//       isActive: boolean;
//       suggestionText?: string;
//       happyText?: string;
//       note?: {
//         heading: string;
//         description: string;
//       };
//       plan: {
//         id: string;
//         price?: string;
//         discount?: string;
//         afterDiscount: string;
//         laterPaid: {
//           amount: string;
//           text: string;
//           iconInfo: {
//             text: string;
//             link: string;
//           };
//         };
//         offers: {
//           imageUrl: string;
//           isActive: boolean;
//           heading: string;
//           subHeading: string;
//           description: string;
//           knowMore: {
//             text: string;
//             link: string;
//           };
//         }[];
//         splitPayment: {
//           enabled: boolean;
//           instalments: number;
//           instalmentAmount: string;
//           text: string;
//           knowMore: {
//             text: string;
//             link: string;
//           };
//         };
//       };
//       features: {
//         heading: string[];
//         feature: string[];
//       };
//       recommendation: {
//         recommended: boolean;
//         text: string;
//       };
//     }[];
//   }[];
//   defaultState: string;
//   defaultPlan: string;
//   statesOptions: {
//     value: string;
//     label: string;
//   }[];
// }

// const PricingPlans = ({ planData }: { planData: PlanData }) => {
//   const {
//     heading,
//     description,
//     plansData,
//     defaultState,
//     defaultPlan,
//     statesOptions,
//   } = planData;

//   const [selectedState, setSelectedState] = useState(defaultState);
//   const [selectPlan, setSelectPlan] = useState(defaultPlan);

//   const plan = plansData.find((plan) => plan.state === selectedState);
//   const plans = plan?.plans.filter((plan) => plan.isActive);

//   const handleBuy = (plan : any) => {
//     console.log("Selected plan:", plan);
//     if (plan.onSelect) {
//       plan.onSelect();
//     }
//   };

//   useEffect(() => {
//     const plan = plansData.find((plan : any) => plan.state === selectedState);
//     setPlansData(plan?.plans.filter((plan: { isActive: boolean }) => plan.isActive) || []);
//   }, [selectedState, plansData]);

//   const [gotPlansData, setPlansData] = useState(plans || []);

//   const [splitPaymentStates, setSplitPaymentStates] = useState(
//     plansData.reduce((acc: { [key: number]: boolean }, plan: { id: number }) => {
//       acc[plan.id] = false;
//       return acc;
//     }, {})
//   );

//   const handleToggle = (id: number) => {
//     setSplitPaymentStates((prev: { [key: number]: boolean }) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   const handleStateChange = (selectedOption: SingleValue<{ value: string; label: string }>) => {
//     if (selectedOption) {
//       setSelectedState(selectedOption.value);
//     }
//   };

//   const handlePlanChange = (planName: string) => {
//     setSelectPlan(planName);
//   };

//   return (
//     <section className="text-white w-full">
//       {/* Header Section */}
//       <div className="pt-[82px] pb-[93px] bg-[#69aba7]  flex flex-col gap-[16px] relative items-center">
//             <p className="text-white text-[24px] md:text-[34px] font-bold flex max-md:flex-col max-md:items-center md:gap-2 leading-normal">
//                 {heading.startText}{" "}
//                 <span className="text-[#007AFF]">{heading.blueText}</span>{" "}
//                 {heading.endText}
//             </p>
//             <p className="text-white text-[14px] md:text-[16px] font-normal max-md:text-center md:mb-4">
//                 {description}
//             </p>
//       </div>


//         {/* Plans Cards Container */ }
//         <div className="rounded-lg p-6 -mt-6 shadow-xl flex flex-col items-center">
//     {/* Plan Tabs - Mobile */}
//     <div className="flex md:hidden justify-around border-b mb-8 w-full">
//         {gotPlansData.map((plan: { planName: string;[key: string]: any }, index: number) => (
//             <button
//                 key={index}
//                 className={`px-3 py-2 text-sm ${
//                     plan.planName === selectPlan
//                         ? "border-b-2 border-teal-600 font-semibold text-teal-800"
//                         : "text-gray-500"
//                 }`}
//                 onClick={() => handlePlanChange(plan.planName)}
//             >
//                 {plan.planName}
//             </button>
//         ))}
//     </div>

//     {/* Plan Cards - Centered Grid with spacing for hover expansion */}
//     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
//         {gotPlansData.map((plan: { planName: string;[key: string]: any }) => (
//             <div
//                 key={plan.planName}
//                 className={`bg-white text-gray-800 border rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-110 ${
//                     plan.planName === selectPlan ? "md:block" : "hidden md:block"
//                 }`}
//             >
//                 {/* Card Header */}
//                 <div className="p-4 text-center bg-gray-50 border-b">
//                     <div className="h-16 flex items-center justify-center mb-2">
//                         {plan.planName.includes("Standard") && (
//                             <div className="w-10 h-10 text-teal-600">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                 </svg>
//                             </div>
//                         )}
//                         {plan.planName.includes("Fastrack") && (
//                             <div className="w-10 h-10 text-teal-600">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                                 </svg>
//                             </div>
//                         )}
//                         {plan.planName.includes("Premium") && (
//                             <div className="w-10 h-10 text-teal-600">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
//                                 </svg>
//                             </div>
//                         )}
//                     </div>
//                     <h3 className="text-sm font-semibold text-teal-800">eCA Assisted -</h3>
//                     <h4 className="text-base font-bold text-gray-800">{plan.planName}</h4>
//                     <p className="text-xs text-gray-500 mt-1 h-12 overflow-hidden">
//                         {plan.description}
//                     </p>
//                 </div>

//                 {/* Card Body */}
//                 <div className="p-4">
//                     <div className="text-center mb-4">
//                         <p className="text-xs text-gray-500 line-through">{plan.plan.price}</p>
//                         <p className="text-2xl font-bold text-gray-800">{plan.plan.afterDiscount}</p>
//                         <p className="text-xs text-gray-500">Base Price</p>
//                     </div>

//                     <button
//                         onClick={() => handleBuy(plan)}
//                         className="w-full py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
//                     >
//                         Buy Now
//                     </button>

//                     {/* Features */}
//                     <div className="mt-4 pt-4 border-t">
//                         {plan.features.feature.slice(0, 4).map((feature: string, index: number) => (
//                             <div key={index} className="flex items-start gap-2 mb-2">
//                                 <Check size={16} weight="bold" className="text-green-500 mt-1" />
//                                 <p className="text-xs text-gray-600">{feature}</p>
//                             </div>
//                         ))}
//                         {plan.features.feature.length > 4 && (
//                             <p className="text-xs text-teal-600 mt-2 text-center">
//                                 +{plan.features.feature.length - 4} more features
//                             </p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         ))}
//     </div>
// </div>
      
//     </section >
//   );
// };

// export default PricingPlans;


// 'use client';

// import React from 'react';

// type Plan = {
//   title: string;
//   description: string;
//   basePrice: string;
//   offerPrice: string;
// };

// const plans: Plan[] = [
//   {
//     title: 'eCA Assisted - Standard',
//     description: 'Includes salary income from one employer, single house property income or income from other sources.',
//     basePrice: '₹1499',
//     offerPrice: '₹1274',
//   },
//   {
//     title: 'eCA Assisted - Multiple Form 16',
//     description: 'Everything in Standard plus salary income from multiple employers.',
//     basePrice: '₹1999',
//     offerPrice: '₹1699',
//   },
//   {
//     title: 'eCA Assisted - Business Income',
//     description: 'Everything in Multiple Form 16 plus income from house property and income u/s 44AD & 44ADA.',
//     basePrice: '₹3124',
//     offerPrice: '₹2655',
//   },
//   {
//     title: 'eCA Assisted - Capital Gain',
//     description: 'Everything in Business Income plus capital gain income and relief u/s 89.',
//     basePrice: '₹4999',
//     offerPrice: '₹4249',
//   },
//   {
//     title: 'eCA Assisted - NRI',
//     description: 'Provides maximum tax benefit on your Indian income.',
//     basePrice: '₹9374',
//     offerPrice: '₹7968',
//   },
//   {
//     title: 'eCA Assisted - Foreign',
//     description: 'Covers all your foreign income and provides maximum benefit under DTAA.',
//     basePrice: '₹12499',
//     offerPrice: '₹10624',
//   },
// ];

// const PricingPlans = () => {
//   return (
//     <div className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-16">
//       <div className="text-center mb-10">
//         <h2 className="text-3xl font-bold text-gray-900">Income Tax Return Filing Pricing Plans</h2>
//         <p className="text-blue-700 mt-2 font-medium">
//           Select <span className="font-bold text-blue-900">The Product That’s Right For You</span>
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
//         {plans.map((plan, idx) => (
//           <div
//             key={idx}
//             className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition duration-300"
//           >
//             <div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">{plan.title}</h3>
//               <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
//               <div className="text-gray-700 mb-2">
//                 <p className="line-through text-sm">Base Price: {plan.basePrice}</p>
//                 <p className="text-xl font-bold text-green-600">₹ {plan.offerPrice}</p>
//                 <span className="text-xs text-gray-500">+ Taxes</span>
//               </div>
//             </div>
//             <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
//               Buy Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PricingPlans;

// // components/TaxFilingPlans.tsx
// import React from 'react';
// import Image from 'next/image';

// interface PlanProps {
//   title: string;
//   description: string;
//   originalPrice: number;
//   currentPrice: number;
//   icon: string;
// }

// const PricingPlan: React.FC<PlanProps> = ({ 
//   title, 
//   description, 
//   originalPrice, 
//   currentPrice, 
//   icon 
// }) => {
//   return (
//     <div className="flex flex-col items-center p-4 bg-white rounded-lg">
//       <div className="mb-4">
//         <Image src={icon} alt={title} width={40} height={40} />
//       </div>
      
//       <h3 className="text-sm font-medium text-gray-800">eCA Assisted - {title}</h3>
      
//       <p className="mt-2 text-xs text-gray-600 text-center h-20">{description}</p>
      
//       <div className="mt-4 w-full">
//         <div className="flex justify-between items-center text-xs text-gray-500">
//           <span>Base Price:</span>
//           <span className="line-through">₹{originalPrice}</span>
//         </div>
        
//         <div className="mt-1 flex justify-between items-center">
//           <span className="font-bold text-xl">₹{currentPrice}</span>
//         </div>
//       </div>
      
//       <button className="mt-4 w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
//         Buy Now
//       </button>
//     </div>
//   );
// };

// const TaxFilingPlans: React.FC = () => {
//   const plans = [
//     {
//       title: "Standard",
//       description: "Includes salary income from one employer & one house property income & income from other sources.",
//       originalPrice: 1499,
//       currentPrice: 1274,
//       icon: "/icons/document.svg"
//     },
//     {
//       title: "Multiple Form 16",
//       description: "Everything in Standard plus multiple Form 16 from multiple employers.",
//       originalPrice: 1999,
//       currentPrice: 1699,
//       icon: "/icons/multiple-documents.svg"
//     },
//     {
//       title: "Business Income",
//       description: "Everything in Multiple Form 16, House property and Income u/s 44AD & 44ADA.",
//       originalPrice: 3124,
//       currentPrice: 2655,
//       icon: "/icons/business.svg"
//     },
//     {
//       title: "Capital Gain",
//       description: "Everything in Business, Capital Gain Income and relief u/s 89.",
//       originalPrice: 4999,
//       currentPrice: 4249,
//       icon: "/icons/capital-gain.svg"
//     },
//     {
//       title: "NRI",
//       description: "Provides the maximum tax benefits on your Indian income.",
//       originalPrice: 9374,
//       currentPrice: 7968,
//       icon: "/icons/globe.svg"
//     },
//     {
//       title: "Foreign",
//       description: "Covers your earnings abroad and benefits under the maximum benefit under DTAA.",
//       originalPrice: 12499,
//       currentPrice: 10624,
//       icon: "/icons/globe-search.svg"
//     }
//   ];

//   return (
//     <div className=" w-full">    
//     <div className=' bg-teal-700 w-full '></div>
//       <div className="container bg-teal-700 mx-auto py-8 px-4">
//         <div className="text-center mb-4">
//           <h2 className="text-2xl font-bold text-white">Income Tax Return Filing Pricing Plans</h2>
//           <p className="text-white mt-1">
//             Select The <span className="text-yellow-300">Product That's Right For You</span>
//           </p>
//         </div>
        
//         <div className="bg-white p-4 rounded-lg shadow-lg">
//           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
//             {plans.map((plan, index) => (
//               <PricingPlan
//                 key={index}
//                 title={plan.title}
//                 description={plan.description}
//                 originalPrice={plan.originalPrice}
//                 currentPrice={plan.currentPrice}
//                 icon={plan.icon}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaxFilingPlans;

//-----------------------------

// "use client";
// import React, { useState, useEffect } from "react";
// import { Check } from "phosphor-react";
// import { PiSealPercent, PiSealWarningBold } from "react-icons/pi";
// import Select, { SingleValue } from "react-select";
// import Link from "next/link";
// import Image from "next/image";

// interface PlanData {
//   heading: {
//     startText: string;
//     blueText: string;
//     endText: string;
//   };
//   description: string;
//   plansData: {
//     id: number;
//     state: string;
//     description: string;
//     plans: {
//       planName: string;
//       description: string;
//       isActive: boolean;
//       suggestionText?: string;
//       happyText?: string;
//       note?: {
//         heading: string;
//         description: string;
//       };
//       plan: {
//         id: string;
//         price?: string;
//         discount?: string;
//         afterDiscount: string;
//         laterPaid: {
//           amount: string;
//           text: string;
//           iconInfo: {
//             text: string;
//             link: string;
//           };
//         };
//         offers: {
//           imageUrl: string;
//           isActive: boolean;
//           heading: string;
//           subHeading: string;
//           description: string;
//           knowMore: {
//             text: string;
//             link: string;
//           };
//         }[];
//         splitPayment: {
//           enabled: boolean;
//           instalments: number;
//           instalmentAmount: string;
//           text: string;
//           knowMore: {
//             text: string;
//             link: string;
//           };
//         };
//       };
//       features: {
//         heading: string[];
//         feature: string[];
//       };
//       recommendation: {
//         recommended: boolean;
//         text: string;
//       };
//     }[];
//   }[];
//   defaultState: string;
//   defaultPlan: string;
//   statesOptions: {
//     value: string;
//     label: string;
//   }[];
// }

// const PricingPlans = ({ planData }: { planData: PlanData }) => {
//   const {
//     heading,
//     description,
//     plansData,
//     defaultState,
//     defaultPlan,
//     statesOptions,
//   } = planData;

//   const [selectedState, setSelectedState] = useState(defaultState);
//   const [selectPlan, setSelectPlan] = useState(defaultPlan);

//   const plan = plansData.find((plan) => plan.state === selectedState);
//   const plans = plan?.plans.filter((plan) => plan.isActive);

//   const handleBuy = (plan : any) => {
//     console.log("Selected plan:", plan);
//     if (plan.onSelect) {
//       plan.onSelect();
//     }
//   };

//   useEffect(() => {
//     const plan = plansData.find((plan : any) => plan.state === selectedState);
//     setPlansData(plan?.plans.filter((plan: { isActive: boolean }) => plan.isActive) || []);
//   }, [selectedState, plansData]);

//   const [gotPlansData, setPlansData] = useState(plans || []);

//   const [splitPaymentStates, setSplitPaymentStates] = useState(
//     plansData.reduce((acc: { [key: number]: boolean }, plan: { id: number }) => {
//       acc[plan.id] = false;
//       return acc;
//     }, {})
//   );

//   const handleToggle = (id: number) => {
//     setSplitPaymentStates((prev: { [key: number]: boolean }) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   const handleStateChange = (selectedOption: SingleValue<{ value: string; label: string }>) => {
//     if (selectedOption) {
//       setSelectedState(selectedOption.value);
//     }
//   };

//   const handlePlanChange = (planName: string) => {
//     setSelectPlan(planName);
//   };

//   return (
//     <section className="text-white w-full">
//       {/* Header Section */}
//       <div className="pt-[82px] pb-[93px] bg-[#69aba7] flex flex-col gap-[16px] relative items-center">
//         <p className="text-white text-[24px] md:text-[34px] font-bold flex max-md:flex-col max-md:items-center md:gap-2 leading-normal">
//           {heading.startText}{" "}
//           <span className="text-[#007AFF]">{heading.blueText}</span>{" "}
//           {heading.endText}
//         </p>
//         <p className="text-white text-[14px] md:text-[16px] font-normal max-md:text-center md:mb-4">
//           {description}
//         </p>
//       </div>

//       {/* Plans Cards Container */}
//       <div className="bg-white -mt-6 p-6">
//         {/* Grid of cards */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
//           {/* Card 1 - Standard */}
//           <div className="bg-white border border-gray-200 rounded shadow flex flex-col">
//             <div className="p-3 flex flex-col items-center text-center">
//               <div className="w-12 h-12 flex items-center justify-center mb-1">
//                 <Image src="/tag-icon.png" alt="Tag Icon" width={25} height={25} />
//               </div>
//               <h3 className="text-gray-700 text-sm font-medium">eCA Assisted -</h3>
//               <h4 className="text-gray-900 text-md font-bold">Standard</h4>
//               <p className="text-xs text-gray-600 mt-1 h-10">
//                 Includes salary income from current employer, house property income & income from other sources.
//               </p>
//             </div>
            
//             <div className="mt-auto p-3 pt-0 flex flex-col items-center">
//               <p className="text-xs text-gray-500">Base Price:</p>
//               <p className="text-xs text-gray-400 line-through">₹1499</p>
//               <p className="text-xl font-bold text-gray-900">₹ 1274</p>
//               <p className="text-xs text-gray-500">+ Taxes</p>
//               <button className="mt-2 w-full py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
//                 Buy Now
//               </button>
//             </div>
//           </div>

//           {/* Card 2 - Multiple Form */}
//           <div className="bg-white border border-gray-200 rounded shadow flex flex-col">
//             <div className="p-3 flex flex-col items-center text-center">
//               <div className="w-12 h-12 flex items-center justify-center mb-1">
//                 <Image src="/documents-icon.png" alt="Documents Icon" width={25} height={25} />
//               </div>
//               <h3 className="text-gray-700 text-sm font-medium">eCA Assisted -</h3>
//               <h4 className="text-gray-900 text-md font-bold">Multiple Form</h4>
//               <p className="text-xs text-gray-600 mt-1 h-10">
//                 Everything in Standard plus salary income from multiple employers or other sources.
//               </p>
//             </div>
            
//             <div className="mt-auto p-3 pt-0 flex flex-col items-center">
//               <p className="text-xs text-gray-500">Base Price:</p>
//               <p className="text-xs text-gray-400 line-through">₹1999</p>
//               <p className="text-xl font-bold text-gray-900">₹ 1699</p>
//               <p className="text-xs text-gray-500">+ Taxes</p>
//               <button className="mt-2 w-full py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
//                 Buy Now
//               </button>
//             </div>
//           </div>

//           {/* Card 3 - Business Income */}
//           <div className="bg-white border border-gray-200 rounded shadow flex flex-col">
//             <div className="p-3 flex flex-col items-center text-center">
//               <div className="w-12 h-12 flex items-center justify-center mb-1">
//                 <Image src="/chart-icon.png" alt="Chart Icon" width={25} height={25} />
//               </div>
//               <h3 className="text-gray-700 text-sm font-medium">eCA Assisted -</h3>
//               <h4 className="text-gray-900 text-md font-bold">Business Income</h4>
//               <p className="text-xs text-gray-600 mt-1 h-10">
//                 Everything in Multiple Form plus business income and income on 44AD & 44ADA.
//               </p>
//             </div>
            
//             <div className="mt-auto p-3 pt-0 flex flex-col items-center">
//               <p className="text-xs text-gray-500">Base Price:</p>
//               <p className="text-xs text-gray-400 line-through">₹3124</p>
//               <p className="text-xl font-bold text-gray-900">₹ 2655</p>
//               <p className="text-xs text-gray-500">+ Taxes</p>
//               <button className="mt-2 w-full py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
//                 Buy Now
//               </button>
//             </div>
//           </div>

//           {/* Card 4 - Capital Gain */}
//           <div className="bg-white border border-gray-200 rounded shadow flex flex-col">
//             <div className="p-3 flex flex-col items-center text-center">
//               <div className="w-12 h-12 flex items-center justify-center mb-1">
//                 <Image src="/graph-icon.png" alt="Graph Icon" width={25} height={25} />
//               </div>
//               <h3 className="text-gray-700 text-sm font-medium">eCA Assisted -</h3>
//               <h4 className="text-gray-900 text-md font-bold">Capital Gain</h4>
//               <p className="text-xs text-gray-600 mt-1 h-10">
//                 Everything in Business Income plus capital gains sources and relief u/s 89.
//               </p>
//             </div>
            
//             <div className="mt-auto p-3 pt-0 flex flex-col items-center">
//               <p className="text-xs text-gray-500">Base Price:</p>
//               <p className="text-xs text-gray-400 line-through">₹4999</p>
//               <p className="text-xl font-bold text-gray-900">₹ 4249</p>
//               <p className="text-xs text-gray-500">+ Taxes</p>
//               <button className="mt-2 w-full py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
//                 Buy Now
//               </button>
//             </div>
//           </div>

//           {/* Card 5 - Global */}
//           <div className="bg-white border border-gray-200 rounded shadow flex flex-col">
//             <div className="p-3 flex flex-col items-center text-center">
//               <div className="w-12 h-12 flex items-center justify-center mb-1">
//                 <Image src="/globe-icon.png" alt="Globe Icon" width={25} height={25} />
//               </div>
//               <h3 className="text-gray-700 text-sm font-medium">eCA Assisted -</h3>
//               <h4 className="text-gray-900 text-md font-bold">Global</h4>
//               <p className="text-xs text-gray-600 mt-1 h-10">
//                 Provides maximum tax benefit for global income to include.
//               </p>
//             </div>
            
//             <div className="mt-auto p-3 pt-0 flex flex-col items-center">
//               <p className="text-xs text-gray-500">Base Price:</p>
//               <p className="text-xs text-gray-400 line-through">₹9374</p>
//               <p className="text-xl font-bold text-gray-900">₹ 7968</p>
//               <p className="text-xs text-gray-500">+ Taxes</p>
//               <button className="mt-2 w-full py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
//                 Buy Now
//               </button>
//             </div>
//           </div>

//           {/* Card 6 - Foreign */}
//           <div className="bg-white border border-gray-200 rounded shadow flex flex-col">
//             <div className="p-3 flex flex-col items-center text-center">
//               <div className="w-12 h-12 flex items-center justify-center mb-1">
//                 <Image src="/globe-search-icon.png" alt="Globe Search Icon" width={25} height={25} />
//               </div>
//               <h3 className="text-gray-700 text-sm font-medium">eCA Assisted -</h3>
//               <h4 className="text-gray-900 text-md font-bold">Foreign</h4>
//               <p className="text-xs text-gray-600 mt-1 h-10">
//                 Covers all your foreign income, DTAA, and maximum benefit under DTAA.
//               </p>
//             </div>
            
//             <div className="mt-auto p-3 pt-0 flex flex-col items-center">
//               <p className="text-xs text-gray-500">Base Price:</p>
//               <p className="text-xs text-gray-400 line-through">₹12499</p>
//               <p className="text-xl font-bold text-gray-900">₹ 10624</p>
//               <p className="text-xs text-gray-500">+ Taxes</p>
//               <button className="mt-2 w-full py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingPlans;


//-----------------------------------


"use client";
import React, { useState } from "react";
import Image from "next/image";

interface PlanData {
  heading: {
    startText: string;
    blueText: string;
    endText: string;
  };
  description: string;
  defaultState: string;
  defaultPlan: string;
  statesOptions: {
    value: string;
    label: string;
  }[];
}

// Define plan column data structure
interface PlanColumn {
  id: number;
  iconSrc: string;
  title: string;
  subtitle: string;
  description: string;
  originalPrice: string;
  discountedPrice: string;
  features: Record<string, boolean>;
}

// Define feature row structure
interface FeatureRow {
  id: string;
  name: string;
  tooltip?: string;
}

const PricingPlans = ({ planData }: { planData: PlanData }) => {
  const {
    heading,
    description,
    defaultState,
    defaultPlan,
    statesOptions,
  } = planData;

  const [selectedState, setSelectedState] = useState(defaultState);
  const [selectPlan, setSelectPlan] = useState(defaultPlan);
  const [selectedView, setSelectedView] = useState<number | null>(null);
  const [showFeatureComparison, setShowFeatureComparison] = useState(true);

  // Plan column data
  const plansData: PlanColumn[] = [
    {
      id: 1,
      iconSrc: "/tag-icon.png",
      title: "Basic Plan",
      subtitle: "",
      description: "Includes income from one employer, one house property & other sources.",
      originalPrice: "₹1499",
      discountedPrice: "₹499 ",
      features: {
        "Single Employer": true,
        "Multiple Employers": false,
        "One Residential Property": true,
        "multiple_house": false,
        "interest_other": true,
        "capital_gains": false,
        "presumptive": false,
        "section_44ad": false,
        "preparation_filing": true,
        "schedule": false,
        "foreign_tax": false,
        "form_67": false,
        "foreign_income": false,
        "non_resident": false,
        "computation": true,
        "examination": false,
        "data_import": true,
        "document_assistance": true,
        "verification": false
      }
    },
    {
      id: 2,
      iconSrc: "/documents-icon.png",
      title: "Multiple Employer Plan",
      subtitle: "",
      description: "Includes everything in Basic + income from multiple employers.",
      originalPrice: "₹1999",
      discountedPrice: "₹999",
      features: {
        "Single Employer": true,
        "Multiple Employers": true,
        "One Residential Property": true,
        "multiple_house": true,
        "interest_other": true,
        "capital_gains": false,
        "presumptive": false,
        "section_44ad": false,
        "preparation_filing": true,
        "schedule": false,
        "foreign_tax": false,
        "form_67": false,
        "foreign_income": false,
        "non_resident": false,
        "computation": true,
        "examination": false,
        "data_import": true,
        "document_assistance": true,
        "verification": false
      }
    },
    {
      id: 3,
      iconSrc: "/chart-icon.png",
      title: "Business Income Plan",
      subtitle: "",
      description: "Covers business/profession income, multiple properties & 44AD/44ADA.",
      originalPrice: "₹3124",
      discountedPrice: "₹1499",
      features: {
        "Single Employer": true,
        "Multiple Employers": true,
        "One Residential Property": true,
        "multiple_house": true,
        "interest_other": true,
        "capital_gains": false,
        "presumptive": true,
        "section_44ad": true,
        "preparation_filing": true,
        "schedule": false,
        "foreign_tax": false,
        "form_67": false,
        "foreign_income": false,
        "non_resident": false,
        "computation": true,
        "examination": true,
        "data_import": true,
        "document_assistance": true,
        "verification": true
      }
    },
    {
      id: 4,
      iconSrc: "/graph-icon.png",
      title: "Capital Gains Plan",
      subtitle: "",
      description: "Covers capital gains from investments & relief under Sec 89.",
      originalPrice: "₹4999",
      discountedPrice: "₹2499",
      features: {
        "Single Employer": true,
        "Multiple Employers": true,
        "One Residential Property": true,
        "multiple_house": true,
        "interest_other": true,
        "capital_gains": true,
        "presumptive": true,
        "section_44ad": true,
        "preparation_filing": true,
        "schedule": true,
        "foreign_tax": false,
        "form_67": false,
        "foreign_income": false,
        "non_resident": false,
        "computation": true,
        "examination": true,
        "data_import": true,
        "document_assistance": true,
        "verification": true
      }
    },
    {
      id: 5,
      iconSrc: "/globe-icon.png",
      title: "NRI Plan",
      subtitle: "",
      description: "Designed for NRIs with income in India & eligible tax benefits.",
      originalPrice: "₹9374",
      discountedPrice: "₹4999",
      features: {
        "Single Employer": true,
        "Multiple Employers": true,
        "One Residential Property": true,
        "multiple_house": true,
        "interest_other": true,
        "capital_gains": true,
        "presumptive": true,
        "section_44ad": true,
        "preparation_filing": true,
        "schedule": true,
        "foreign_tax": false,
        "form_67": false,
        "foreign_income": false,
        "non_resident": true,
        "computation": true,
        "examination": true,
        "data_import": true,
        "document_assistance": true,
        "verification": true
      }
    },
    {
      id: 6,
      iconSrc: "/globe-search-icon.png",
      title: "Foreign Income Plan",
      subtitle: "",
      description: "Covers global income and max benefits under DTAA.",
      originalPrice: "₹12499",
      discountedPrice: "₹7999",
      features: {
        "Single Employer": true,
        "Multiple Employers": true,
        "One Residential Property": true,
        "multiple_house": true,
        "interest_other": true,
        "capital_gains": true,
        "presumptive": true,
        "section_44ad": true,
        "preparation_filing": true,
        "schedule": true,
        "foreign_tax": true,
        "form_67": true,
        "foreign_income": true,
        "non_resident": false,
        "computation": true,
        "examination": true,
        "data_import": true,
        "document_assistance": true,
        "verification": true
      }
    }
  ];

  // Define feature categories and rows
  const featureCategories = [
    {
      category: "Salaried Income ",
      features: [
        { id: "Single Employer", name: "One employer" },
        { id: "Multiple Employers", name: "More than one" }
      ]
    },
    {
      category: "Income from",
      features: [
        { id: "One Residential Property", name: "One Residential Property"},// tooltip: "info" },
        { id: "multiple_house", name: "More than one House" }
      ]
    },
    {
      category: "Interest & Other Sources Income",
      features: [
        { id: "interest_other", name: "" }
      ]
    },
    {
      category: "Capital Gains",
      features: [
        { id: "capital_gains", name: "", tooltip: "info" }
      ]
    },
    {
      category: "Presumptive Income",
      features: [
        { id: "presumptive", name: "(Small/Business/Professionals)" }
      ]
    },
    {
      category: "Section 44AD/ADA/AE Income",
      features: [
        { id: "section_44ad", name: "" }
      ]
    },
    {
      category: "Tax ITR preparation & e-filing",
      features: [
        { id: "preparation_filing", name: "" }
      ]
    },
    {
      category: "ITR Schedule",
      features: [
        { id: "schedule", name: "" }
      ]
    },
    {
      category: "Foreign Tax Credit",
      features: [
        { id: "foreign_tax", name: "" }
      ]
    },
    {
      category: "Form 67",
      features: [
        { id: "form_67", name: "" }
      ]
    },
    {
      category: "Foreign Income",
      features: [
        { id: "foreign_income", name: "" }
      ]
    },
    {
      category: "Non-resident",
      features: [
        { id: "non_resident", name: "" }
      ]
    },
    {
      category: "Computation to minimize tax",
      features: [
        { id: "computation", name: "deductions" }
      ]
    },
    {
      category: "Examination of previous ITR",
      features: [
        { id: "examination", name: "" }
      ]
    },
    {
      category: "TRACES Data Import",
      features: [
        { id: "data_import", name: "" }
      ]
    },
    {
      category: "Document Assistance",
      features: [
        { id: "document_assistance", name: "" }
      ]
    },
    {
      category: "Verification of e-ITR help texts",
      features: [
        { id: "verification", name: "" }
      ]
    }
  ];

  const handleBuy = (id: number) => {
    console.log("Selected plan ID:", id);
  };

  const toggleView = (id: number | null) => {
    setSelectedView(id === selectedView ? null : id);
  };

  const toggleFeatureComparison = () => {
    setShowFeatureComparison(!showFeatureComparison);
  };

  return (
    <section className="text-black w-full">
      {/* Header Section */}
      <div className="pt-12 pb-16 bg-teal-700 flex flex-col gap-4 relative items-center">
        <h2 className="text-white text-xl md:text-3xl font-bold flex flex-col md:flex-row items-center md:gap-2 px-4 text-center">
          {heading.startText}{" "}
          <span className="text-blue-500">{heading.blueText}</span>{" "}
          {heading.endText}
        </h2>
        <p className="text-white text-sm md:text-base font-normal text-center px-4 md:mb-4">
          {description}
        </p>
      </div>

      {/* Plans Container */}
      <div className="bg-white -mt-6 px-2 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Desktop View */}
          <div className="hidden md:block">
            {/* Plans Header */}
            <div className="grid grid-cols-7 gap-1">
              <div className="col-span-1"></div>
              {plansData.map((plan) => (
                <div key={plan.id} className="col-span-1 p-4 border border-gray-200 rounded-t bg-white flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center mb-1 bg-gray-50 rounded-full">
                    <Image src={plan.iconSrc} alt={`${plan.title} Icon`} width={24} height={24} />
                  </div>
                  <h4 className="text-gray-700 text-xs font-medium">{plan.subtitle}</h4>
                  <h3 className="text-gray-900 text-sm font-bold">{plan.title}</h3>
                  <p className="text-xs text-gray-600 mt-1 h-12 overflow-hidden">
                    {plan.description.length > 70 ? `${plan.description.substring(0, 70)}...` : plan.description}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">Base Price:</p>
                  <p className="text-xs text-gray-400 line-through">{plan.originalPrice}</p>
                  <p className="text-lg font-bold text-gray-900">{plan.discountedPrice}</p>
                  <p className="text-xs text-gray-500">+ Taxes</p>
                  <button 
                    className="mt-2 w-full py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-xs transition-colors duration-300"
                    onClick={() => handleBuy(plan.id)}
                  >
                    Buy Now
                  </button>
                </div>
              ))}
            </div>

            {/* Feature Categories and Rows */}
            {featureCategories.map((category, catIndex) => (
              <div key={catIndex}>
                {/* Category Header */}
                <div className="grid grid-cols-7 gap-1">
                  <div className="col-span-1 p-2 bg-gray-50 border-b border-l border-gray-200">
                    <h4 className="text-xs font-medium text-gray-700">{category.category}</h4>
                  </div>
                  {/* Empty cells for plan columns */}
                  {plansData.map((plan) => (
                    <div key={plan.id} className="col-span-1 border-b border-gray-200"></div>
                  ))}
                </div>

                {/* Feature Rows */}
                {category.features.map((feature, featIndex) => (
                  <div key={`${catIndex}-${featIndex}`} className="grid grid-cols-7 gap-1">
                    <div className="col-span-1 p-2 pl-6 bg-white border-b border-l border-gray-200 flex items-center">
                      <span className="text-xs text-gray-600">{feature.name}</span>
                      {feature.tooltip && (
                        <span className="ml-1 text-gray-400 text-xs">ⓘ</span>
                      )}
                    </div>
                    {/* Plan feature availability */}
                    {plansData.map((plan) => (
                      <div key={plan.id} className="col-span-1 border-b border-gray-200 flex items-center justify-center p-2">
                        {plan.features[feature.id] ? (
                          <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="md:hidden">
            {/* Plan Selection Tabs */}
            <div className="flex overflow-x-auto pb-2 pt-2 scrollbar-hide">
              {plansData.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => toggleView(plan.id)}
                  className={`flex-shrink-0 px-4 py-2 text-xs font-medium rounded-md mr-2 ${
                    selectedView === plan.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {plan.title}
                </button>
              ))}
            </div>

            {/* Selected Plan Details or All Plans */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(selectedView === null ? plansData : plansData.filter(plan => plan.id === selectedView)).map((plan) => (
                <div key={plan.id} className="border border-gray-200 rounded-lg bg-white flex flex-col items-center text-center p-4">
                  <div className="w-12 h-12 flex items-center justify-center mb-2 bg-gray-50 rounded-full">
                    <Image src={plan.iconSrc} alt={`${plan.title} Icon`} width={24} height={24} />
                  </div>
                  <h4 className="text-gray-700 text-sm font-medium">{plan.subtitle}</h4>
                  <h3 className="text-gray-900 text-base font-bold">{plan.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {plan.description}
                  </p>
                  <div className="flex items-center justify-center mt-4 gap-4">
                    <div>
                      <p className="text-xs text-gray-500">Base Price:</p>
                      <p className="text-xs text-gray-400 line-through">{plan.originalPrice}</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-gray-900">{plan.discountedPrice}</p>
                      <p className="text-xs text-gray-500">+ Taxes</p>
                    </div>
                  </div>
                  <button 
                    className="mt-4 w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm transition-colors duration-300"
                    onClick={() => handleBuy(plan.id)}
                  >
                    Buy Now
                  </button>
                </div>
              ))}
            </div>

            {/* Toggle Feature Comparison Button */}
            <div className="my-4 flex justify-center">
              <button
                onClick={toggleFeatureComparison}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm transition-colors duration-300"
              >
                {showFeatureComparison ? "Hide Feature Comparison" : "Show Feature Comparison"}
              </button>
            </div>

            {/* Feature Comparison for Mobile */}
            {showFeatureComparison && (
              <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
                <div className="bg-gray-50 p-3 border-b border-gray-200">
                  <h3 className="text-gray-800 font-medium text-sm">Feature Comparison</h3>
                </div>
                
                {/* Feature Categories and Rows */}
                {featureCategories.map((category, catIndex) => (
                  <div key={catIndex} className="border-b border-gray-200 last:border-b-0">
                    {/* Category Header */}
                    <div className="bg-gray-50 p-2 border-t border-gray-200">
                      <h4 className="text-xs font-medium text-gray-700">{category.category}</h4>
                    </div>

                    {/* Feature Rows */}
                    {category.features.map((feature, featIndex) => (
                      <div key={`${catIndex}-${featIndex}`} className="p-2 pl-4">
                        <div className="grid grid-cols-6 gap-2 items-center">
                          <div className="col-span-3 text-xs text-gray-600">{feature.name || category.category}</div>
                          
                          {/* Plan feature availability - only show for selected plan in mobile view */}
                          {plansData.map((plan) => (
                            <div key={plan.id} className={`col-span-1/2 flex items-center justify-center ${selectedView !== null && plan.id !== selectedView ? 'hidden' : ''}`}>
                              <div className="text-xs font-medium">{plan.title.substring(0, 3)}</div>
                              <div className="ml-1">
                                {plan.features[feature.id] ? (
                                  <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  </div>
                                ) : (
                                  <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;