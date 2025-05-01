// "use client";
// import { Check } from "phosphor-react";
// import React, { useEffect, useState } from "react";
// import { PiSealPercent, PiSealWarningBold } from "react-icons/pi";
// import Select from "react-select";
// import Link from "next/link";
// import Image from "next/image";
// import axios from "axios";

// interface Plan {
//   planName: string;
//   description: string;
//   isActive: boolean;
//   suggestionText?: string;
//   happyText?: string;
//   note?: { heading: string; description: string };
//   plan: {
//     id: string;
//     price?: string;
//     discount?: string;
//     afterDiscount: string;
//     laterPaid: {
//       amount: string;
//       text: string;
//       iconInfo: {
//         text: string;
//         link: string;
//       };
//     };
//     offers: {
//       imageUrl: string;
//       isActive: boolean;
//       heading: string;
//       subHeading: string;
//       description: string;
//       knowMore: {
//         text: string;
//         link: string;
//       };
//     }[];
//     splitPayment: {
//       enabled: boolean;
//       instalments: number;
//       instalmentAmount: string;
//       text: string;
//       knowMore: {
//         text: string;
//         link: string;
//       };
//     };
//   };
//   features: {
//     heading: string[];
//     feature: string[];
//   };
//   recommendation: {
//     recommended: boolean;
//     text: string;
//   };
// }

// interface StatePlanGroup {
//   state: string;
//   state_name: string;
//   plans: Plan[];
// }

// const DynamicPlansSection = () => {
//   const [plansData, setPlansData] = useState<{ [key: string]: StatePlanGroup }>({});
//   const [selectedState, setSelectedState] = useState<string>("MP");
//   const [selectPlan, setSelectPlan] = useState<string>("Standard");
//   const [heading, setHeading] = useState({
//     startText: "Pick the",
//     blueText: "Business Plan",
//     endText: "for Your Goals",
//   });
//   const [description, setDescription] = useState("Our Incorporation Expert's Know What is your Need");
//   const [statesOptions, setStatesOptions] = useState<{ value: string; label: string }[]>([]);
//   const [splitPaymentStates, setSplitPaymentStates] = useState<{ [key: string]: boolean }>({});
//   const [filteredPlans, setFilteredPlans] = useState<Plan[]>([]);

  
// useEffect(() => {
//   const fetchPlans = async () => {
//     try {
//       const response = await axios.get("/api/getPlans");
//       console.log("Response:data", response);

      
//       console.log("Response:", response.data);
      
//       // With Axios, the data is already parsed as JSON
//       const data = response.data;
//       setFilteredPlans(data);
      
//       if (data) {
//         const grouped = groupPlans(data);
//         setPlansData(grouped);
//         const states = Object.values(grouped).map(group => ({ value: group.state, label: group.state_name }));
//         setStatesOptions(states);
//         const toggleStates: { [key: string]: boolean } = {};
//         Object.values(grouped).forEach(group => {
//           group.plans.forEach(p => {
//             toggleStates[p.plan.id] = false;
//           });
//         });
//         setSplitPaymentStates(toggleStates);
//         const initialPlans = grouped[selectedState]?.plans.filter(p => p.isActive) || [];
//         setFilteredPlans(initialPlans);
//       }
//     } catch (error) {
//       console.error("Error fetching plans:", error);
//     }
//   };

//   fetchPlans();
// }, []);

//   useEffect(() => {
//     const updatedPlans = plansData[selectedState]?.plans.filter(p => p.isActive) || [];
//     setFilteredPlans(updatedPlans);
//   }, [selectedState, plansData]);

//   const groupPlans = (data: any[]): { [key: string]: StatePlanGroup } => {
//     const byState: { [key: string]: StatePlanGroup } = {};
//     data.forEach(item => {
//       const plan: Plan = {
//         planName: item.plan_name,
//         description: item.plan_description,
//         isActive: item.is_active,
//         suggestionText: item.suggestion_text,
//         happyText: item.happy_text,
//         note: item.note_heading ? {
//           heading: item.note_heading,
//           description: item.note_description || "",
//         } : undefined,
//         plan: {
//           id: item.id.toString(),
//           price: item.price,
//           discount: item.discount,
//           afterDiscount: item.after_discount,
//           laterPaid: {
//             amount: item.later_paid_amount || "",
//             text: item.later_paid_text || "",
//             iconInfo: {
//               text: item.later_paid_icon_info_text || "",
//               link: item.later_paid_icon_info_link || "",
//             },
//           },
//           offers: [
//             {
//               imageUrl: item.offer_image_url || "",
//               isActive: item.offer_is_active || false,
//               heading: item.offer_heading || "",
//               subHeading: item.offer_sub_heading || "",
//               description: item.offer_description || "",
//               knowMore: {
//                 text: item.offer_know_more_text || "",
//                 link: item.offer_know_more_link || "",
//               },
//             },
//           ],
//           splitPayment: {
//             enabled: item.split_payment_enabled || false,
//             instalments: item.split_payment_instalments || 0,
//             instalmentAmount: item.split_payment_instalment_amount || "",
//             text: item.split_payment_text || "",
//             knowMore: {
//               text: item.split_payment_know_more_text || "",
//               link: item.split_payment_know_more_link || "",
//             },
//           },
//         },
//         features: {
//           heading: item.feature_heading ? [item.feature_heading] : ["What you'll get"],
//           feature: JSON.parse(item.feature_list || "[]"),
//         },
//         recommendation: {
//           recommended: item.is_recommended || false,
//           text: item.recommendation_text || "",
//         },
//       };

//       if (!byState[item.state_code]) {
//         byState[item.state_code] = {
//           state: item.state_code,
//           state_name: item.state_name,
//           plans: [],
//         };
//       }
//       byState[item.state_code].plans.push(plan);
//     });
//     return byState;
//   };

//   const handleToggle = (id: string) => {
//     setSplitPaymentStates(prev => ({
//       ...prev,
//       [id]: !prev[id]
//     }));
//   };

//   const handleStateChange = (option: any) => {
//     setSelectedState(option.value);
//     setSelectPlan("Standard");
//   };

//   const handlePlanChange = (planName: string) => setSelectPlan(planName);
//   const handleBuy = (plan: Plan) => console.log("Buying:", plan);

//   if (!filteredPlans.length) return <div className="text-center py-10">Loading plans...</div>;

//   const selectedPlanData = filteredPlans.find(p => p.planName === selectPlan) || filteredPlans[0];

//   if (!selectedPlanData) return <div className="text-center py-10">No plans available for this state</div>;

//   return (
//     <section className="bg-[#F8FBFF]">
//       <div id="pricing-package" className="md:pt-[80px] py-[52px]">
//         <div className="p-4 flex flex-col gap-[16px] relative items-center">
//           <p className="text-black text-[24px] md:text-[34px] font-bold flex max-md:flex-col max-md:items-center md:gap-2 leading-normal">
//             {heading.startText}{" "}
//             <span className="text-[#007AFF]">{heading.blueText}</span>{" "}
//             {heading.endText}
//           </p>
//           <p className="text-[#606162] text-[14px] md:text-[16px] font-normal max-md:text-center md:mb-4">
//             {description}
//           </p>
//         </div>
//       </div>

//       {/* State Selection Dropdown */}
//       <div className="mx-auto max-w-3xl mb-8 px-4">
//         <Select
//           options={statesOptions}
//           value={statesOptions.find(opt => opt.value === selectedState)}
//           onChange={handleStateChange}
//           placeholder="Select State"
//           className="text-base"
//         />
//       </div>

//       {/* Plan Section */}
//       <div className="max-md:flex flex max-md:flex-col flex-wrap md:flex max-md:gap-[16px] items-start justify-around">
//         <div className="flex md:hidden justify-between items-center mx-auto">
//           {filteredPlans.map((plan, index) => (
//             <p
//               className={`text-[16px] px-4 py-1 text-[#8095A7] font-medium ${
//                 plan.planName === selectPlan
//                   ? "border-b-2 border-[#022B50] font-semibold"
//                   : ""
//               }`}
//               key={index}
//               onClick={() => handlePlanChange(plan.planName)}
//             >
//               {plan.planName}
//             </p>
//           ))}
//         </div>
        
//         {/* Desktop Plan Selection Tabs */}
//         <div className="hidden md:flex justify-center w-full mb-6">
//           {filteredPlans.map((plan, index) => (
//             <button
//               key={index}
//               className={`px-6 py-3 text-[16px] font-medium transition-all ${
//                 plan.planName === selectPlan
//                   ? "bg-blue-100 text-blue-700 border-b-2 border-blue-700"
//                   : "text-[#8095A7] hover:bg-gray-100"
//               }`}
//               onClick={() => handlePlanChange(plan.planName)}
//             >
//               {plan.planName}
//             </button>
//           ))}
//         </div>
        
//         <div className="flex justify-center items-start flex-wrap mx-auto">
//           {filteredPlans.map((plan) => (
//             <div
//               key={plan.planName}
//               className={`p-4 flex m-3 group relative flex-col gap-[10px] mx-4 md:w-[460px] my-[25px] md:mt-0 hover:bg-yellow-50 hover:border-[#007AFF] border-[1px] rounded-md shadow-[0px_0px_10px_rgba(104,104,104,0.08)] transition delay-150 duration-500 ${
//                 plan.planName === selectPlan ? "" : "hidden"
//               }`}
//             >
//               <p className="text-[24px] font-semibold text-[#171717]">
//                 {plan.planName}
//               </p>
//               <p className="text-[16px] md:h-[48px] font-normal group-hover:text-black duration-500 text-[#606162]">
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
//                 {plan.plan.price && (
//                   <div className="relative w-fit">
//                     <p className="text-[12px] md:text-[16px] group-hover:text-gray-600 font-medium">
//                       {plan.plan.price}
//                     </p>
//                     <div className="border-b-[1px] translate-y-[-40%] md:top-[11px] rotate-[-16deg] border-[#E83E3E] w-full absolute top-[9px]"></div>
//                   </div>
//                 )}
//                 {plan.plan.discount && (
//                   <div className="flex w-fit gap-[4px] bg-[#ECF8EB] rounded-lg px-[8px] p-2">
//                     <PiSealPercent size={14} color="#2cdb14" />
//                     <p className="text-[10px] text-[#3EB837]">
//                       {plan.plan.discount}
//                     </p>
//                   </div>
//                 )}
//               </div>

//               <div className="md:min-h-[95px]">
//                 <div className="flex gap-4 items-end">
//                   <p className="text-[32px] md:text-[46px] font-semibold text-[#171717]">
//                     {plan.plan.afterDiscount}
//                   </p>
//                 </div>
//                 {(plan.plan.laterPaid.amount || plan.plan.laterPaid.text) && (
//                   <div className="flex flex-row pb-[16px] items-center">
//                     <p className="text-[18px] text-[#8095A7] group-hover:text-gray-700 duration-500 font-medium">
//                       {plan.plan.laterPaid.amount} {plan.plan.laterPaid.text}
//                     </p>
                    
//                     {plan.plan.laterPaid.amount && plan.plan.laterPaid.iconInfo.text && (
//                       <div
//                         className="relative flex group"
//                         title={plan.plan.laterPaid.iconInfo.text}
//                       >
//                         <PiSealWarningBold
//                           size={20}
//                           color="#8095A7"
//                           className="mx-1 cursor-pointer"
//                         />
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 {plan.plan.splitPayment.enabled && (
//                   <div className="flex gap-[6px] items-center md:gap-[10px]">
//                     <div
//                       className="flex items-center cursor-pointer"
//                       onClick={() => handleToggle(plan.plan.id)}
//                     >
//                       <div className="relative">
//                         <div className="block w-[40px] h-[25px] rounded-full border-[1px] border-[#022b50] bg-[#E5F0FF]"></div>
//                         <div
//                           className={`absolute top-[3px] transition-all duration-300 ease-in-out rounded-full ${
//                             splitPaymentStates[plan.plan.id]
//                               ? "left-[20px] w-[18px] h-[19px] bg-[#53A3F9]"
//                               : "left-[1px] w-[20px] h-[19px] bg-[#53A3F9]"
//                           }`}
//                         ></div>
//                       </div>
//                     </div>
//                     <div className="flex items-center">
//                       <p className="text-[12px] md:text-[14px] text-[#606162] font-medium">
//                         {splitPaymentStates[plan.plan.id]
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
//                         {plan.plan.splitPayment.knowMore.text && (
//                           <a
//                             href={plan.plan.splitPayment.knowMore.link}
//                             className="text-[#007AFF] ml-1"
//                           >
//                             {plan.plan.splitPayment.knowMore.text}
//                           </a>
//                         )}
//                       </p>
//                     </div>
//                   </div>
//                 )}

//                 <div className="flex flex-col my-4">
//                   {plan.plan.offers.map((offer, index) => (
//                     <React.Fragment key={index}>
//                       {offer.isActive && (
//                         <div className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 my-2">
//                           <div
//                             className="flex flex-col gap-2 border px-6 py-8 bg-gradient-to-r from-blue-500 to-blue-300"
//                           >
//                             {offer.imageUrl && (
//                               <div>
//                                 <Image
//                                   src={offer.imageUrl}
//                                   alt="offer"
//                                   width={100}
//                                   height={50}
//                                   className="w-full h-[50px] rounded-full"
//                                 />
//                               </div>
//                             )}

//                             <div>
//                               <h3 className="text-xl text-start font-extrabold text-white">
//                                 {offer.heading}
//                               </h3>
//                               <h3 className="text-start font-extrabold text-white">
//                                 {offer.subHeading}
//                               </h3>
//                               <p className="text-[14px] text-white group-hover:text-gray-700 duration-500">
//                                 {offer.description}
//                               </p>

//                               {offer.knowMore.text && (
//                                 <Link href={offer.knowMore.link || "#"} className="text-white underline mt-2 inline-block">
//                                   {offer.knowMore.text}
//                                 </Link>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </React.Fragment>
//                   ))}
//                 </div>
                
//                 <div className="my-4 flex justify-center items-center">
//                   <button
//                     className="py-2.5 bg-yellow-400 border rounded block text-center hover:border-black font-bold duration-500 w-full text-slate-800"
//                     onClick={() => handleBuy(plan)}
//                   >
//                     Buy Now
//                   </button>
//                 </div>

//                 <div className="flex flex-col gap-2 mt-4">
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
//       </div>
//     </section>
//   );
// };

// export default DynamicPlansSection;


"use client";
import React, { useEffect, useState } from "react";
import { Check } from "phosphor-react";
import { PiSealPercent, PiSealWarningBold } from "react-icons/pi";
import Select from "react-select";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

// Type definitions for better type safety
interface Plan {
  planName: string;
  description: string;
  isActive: boolean;
  suggestionText?: string;
  happyText?: string;
  note?: { heading: string; description: string };
  plan: {
    id: string;
    price?: string;
    discount?: string;
    afterDiscount: string;
    laterPaid: {
      amount: string;
      text: string;
      iconInfo: {
        text: string;
        link: string;
      };
    };
    offers: {
      imageUrl: string;
      isActive: boolean;
      heading: string;
      subHeading: string;
      description: string;
      knowMore: {
        text: string;
        link: string;
      };
    }[];
    splitPayment: {
      enabled: boolean;
      instalments: number;
      instalmentAmount: string;
      text: string;
      knowMore: {
        text: string;
        link: string;
      };
    };
  };
  features: {
    heading: string[];
    feature: string[];
  };
  recommendation: {
    recommended: boolean;
    text: string;
  };
}

interface StatePlanGroup {
  state: string;
  state_name: string;
  plans: Plan[];
}

const DynamicPlansSection = () => {
  // State management
  const [plansData, setPlansData] = useState<{ [key: string]: StatePlanGroup }>({});
  const [selectedState, setSelectedState] = useState<string>("MP");
  const [selectedPlan, setSelectedPlan] = useState<string>("Standard");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [splitPaymentStates, setSplitPaymentStates] = useState<{ [key: string]: boolean }>({});
  const [filteredPlans, setFilteredPlans] = useState<Plan[]>([]);
  const [statesOptions, setStatesOptions] = useState<{ value: string; label: string }[]>([]);
  
  // Section content
  const [heading] = useState({
    startText: "Pick the",
    blueText: "Business Plan",
    endText: "for Your Goals"
  });
  const [description] = useState("Our Incorporation Expert's Know What is your Need");

  // Fetch plans data
  useEffect(() => {
    const fetchPlans = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://edueye.co.in/ensurekar/wp-json/wc/v3/products?consumer_key=ck_1a163a1d803b2ed9c2c501a232692bd5ee3c2619&consumer_secret=cs_054aea9c8f7ddeef9b7ceb5fc45c56cd422ba4a2");
        const data = response.data;

        console.log("Response:data", data.data);
        const grouped = groupPlans(data.data);
        console.log("Grouped Plans:", grouped);

        console.log(Array.isArray(data.data))
        
        if (data && Array.isArray(data.data)) {
          setPlansData(grouped);
          console.log("Plans Data:", plansData);
          
          // Create states dropdown options
          const states = Object.values(grouped).map(group => ({ 
            value: group.state, 
            label: group.state_name 
          }));
          setStatesOptions(states);
          
          // Initialize split payment toggle states
          const toggleStates: { [key: string]: boolean } = {};
          Object.values(grouped).forEach(group => {
            group.plans.forEach(p => {
              toggleStates[p.plan.id] = false;
            });
          });
          setSplitPaymentStates(toggleStates);
          
          // Set initial filtered plans based on default state
          const initialPlans = grouped[selectedState]?.plans.filter(p => p.isActive) || [];
          setFilteredPlans(initialPlans);
          
          // Set initial selected plan if available
          if (initialPlans.length > 0) {
            setSelectedPlan(initialPlans[0].planName);
          }
        } else {
          setError("Invalid data format received from server");
        }
      } catch (error) {
        console.error("Error fetching plans:", error);
        setError("Failed to load plans. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  // Update filtered plans when state changes
  useEffect(() => {
    const updatedPlans = plansData[selectedState]?.plans.filter(p => p.isActive) || [];
    setFilteredPlans(updatedPlans);
    
    // Reset selected plan to first one when state changes
    if (updatedPlans.length > 0) {
      setSelectedPlan(updatedPlans[0].planName);
    }
  }, [selectedState, plansData]);

  // // Helper function to transform API data into our Plan structure
  const groupPlans = (data: any[]): { [key: string]: StatePlanGroup } => {
    const byState: { [key: string]: StatePlanGroup } = {};
    
    data.forEach(item => {
      // Skip invalid items
      if (!item.state_code || !item.plan_name) return;
      
      const plan: Plan = {
        planName: item.plan_name,
        description: item.plan_description || "",
        isActive: Boolean(item.is_active),
        suggestionText: item.suggestion_text || "",
        happyText: item.happy_text || "",
        note: item.note_heading ? {
          heading: item.note_heading,
          description: item.note_description || "",
        } : undefined,
        plan: {
          id: item.id.toString(),
          price: item.price || "",
          discount: item.discount || "",
          afterDiscount: item.after_discount || "₹0",
          laterPaid: {
            amount: item.later_paid_amount || "",
            text: item.later_paid_text || "",
            iconInfo: {
              text: item.later_paid_icon_info_text || "",
              link: item.later_paid_icon_info_link || "",
            },
          },
          offers: [
            {
              imageUrl: item.offer_image_url || "",
              isActive: Boolean(item.offer_is_active),
              heading: item.offer_heading || "",
              subHeading: item.offer_sub_heading || "",
              description: item.offer_description || "",
              knowMore: {
                text: item.offer_know_more_text || "",
                link: item.offer_know_more_link || "",
              },
            },
          ],
          splitPayment: {
            enabled: Boolean(item.split_payment_enabled),
            instalments: parseInt(item.split_payment_instalments) || 0,
            instalmentAmount: item.split_payment_instalment_amount || "",
            text: item.split_payment_text || "",
            knowMore: {
              text: item.split_payment_know_more_text || "",
              link: item.split_payment_know_more_link || "",
            },
          },
        },
        features: {
          heading: item.feature_heading ? [item.feature_heading] : ["What you'll get"],
          feature: Array.isArray(item.feature_list) 
            ? item.feature_list 
            : safeJsonParse(item.feature_list, []),
        },
        recommendation: {
          recommended: Boolean(item.is_recommended),
          text: item.recommendation_text || "",
        },
      };

      // Create state group if it doesn't exist
      if (!byState[item.state_code]) {
        byState[item.state_code] = {
          state: item.state_code,
          state_name: item.state_name || item.state_code,
          plans: [],
        };
      }
      
      byState[item.state_code].plans.push(plan);
    });
    
    return byState;
  };

  // // Safely parse JSON with a fallback value
  const safeJsonParse = (jsonString: string | null | undefined, fallback: any = []) => {
    if (!jsonString) return fallback;
    try {
      return JSON.parse(jsonString);
    } catch (e) {
      console.error("Error parsing JSON:", e);
      return fallback;
    }
  };

  // // Event handlers
  // const handleToggle = (id: string) => {
  //   setSplitPaymentStates(prev => ({
  //     ...prev,
  //     [id]: !prev[id]
  //   }));
  // };

  // const handleStateChange = (option: any) => {
  //   setSelectedState(option.value);
  // };

  // const handlePlanChange = (planName: string) => setSelectedPlan(planName);
  
  // const handleBuy = (plan: Plan) => {
  //   console.log("Buying plan:", plan);
  //   // Implement your checkout logic here
  //   alert(`Initiating purchase for ${plan.planName} plan`);
  // };

  // // Calculate split payment amount
  // const calculateSplitAmount = (priceString: string, installments: number) => {
  //   const price = parseFloat(priceString.replace(/[₹,]/g, ""));
  //   return isNaN(price) ? "₹0" : `₹${(price / installments).toFixed(2)}`;
  // };

  // // Render loading state
  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center py-20">
  //       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  //     </div>
  //   );
  // }

  // // Render error state
  // if (error) {
  //   return (
  //     <div className="text-center py-10 text-red-500">
  //       <p className="text-xl font-semibold mb-2">Something went wrong</p>
  //       <p>{error}</p>
  //       <button 
  //         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
  //         onClick={() => window.location.reload()}
  //       >
  //         Try Again
  //       </button>
  //     </div>
  //   );
  // }

  // // Render empty state
  // if (!filteredPlans.length) {
  //   return (
  //     <div className="text-center py-10">
  //       <p className="text-xl">No plans available for this state</p>
  //     </div>
  //   );
  // }

  // // Find the selected plan data
  // const selectedPlanData = filteredPlans.find(p => p.planName === selectedPlan) || filteredPlans[0];

  return (
    // <section className="bg-[#F8FBFF] px-4 py-8 md:py-16">
    //   {/* Section Header */}
    //   <div id="pricing-package" className="max-w-6xl mx-auto">
    //     <div className="flex flex-col gap-4 text-center mb-12">
    //       <h2 className="text-3xl md:text-4xl font-bold">
    //         {heading.startText}{" "}
    //         <span className="text-blue-600">{heading.blueText}</span>{" "}
    //         {heading.endText}
    //       </h2>
    //       <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
    //         {description}
    //       </p>
    //     </div>

    //     {/* State Selection Dropdown */}
    //     <div className="max-w-md mx-auto mb-10">
    //       <Select
    //         options={statesOptions}
    //         value={statesOptions.find(opt => opt.value === selectedState)}
    //         onChange={handleStateChange}
    //         placeholder="Select State"
    //         className="text-base"
    //         classNamePrefix="react-select"
    //         isSearchable
    //       />
    //     </div>

    //     {/* Plan Tabs */}
    //     <div className="flex justify-center mb-8 border-b">
    //       {filteredPlans.map((plan, index) => (
    //         <button
    //           key={index}
    //           className={`px-6 py-3 text-base font-medium transition-all ${
    //             plan.planName === selectedPlan
    //               ? "text-blue-700 border-b-2 border-blue-700 -mb-px"
    //               : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
    //           }`}
    //           onClick={() => handlePlanChange(plan.planName)}
    //         >
    //           {plan.planName}
    //           {plan.recommendation.recommended && (
    //             <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
    //               Recommended
    //             </span>
    //           )}
    //         </button>
    //       ))}
    //     </div>

    //     {/* Plan Cards */}
    //     <div className="flex justify-center flex-wrap max-w-6xl mx-auto">
    //       {filteredPlans.map((plan) => (
    //         <div
    //           key={plan.planName}
    //           className={`relative mx-4 my-6 max-w-lg w-full rounded-lg border shadow-lg transition-all duration-300 ${
    //             plan.planName === selectedPlan 
    //               ? "border-blue-400 scale-100"
    //               : "hidden md:block md:opacity-50 md:scale-95 md:hover:opacity-80"
    //           }`}
    //         >
    //           {/* Recommendation Badge */}
    //           {plan.recommendation.recommended && (
    //             <div className="absolute -top-3 right-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
    //               Recommended
    //             </div>
    //           )}
              
    //           {/* Plan Header */}
    //           <div className="p-6 border-b">
    //             <h3 className="text-2xl font-bold text-gray-800">{plan.planName}</h3>
    //             <p className="text-gray-600 mt-2 min-h-[48px]">{plan.description}</p>
                
    //             {/* Price Section */}
    //             <div className="mt-4">
    //               <div className="flex items-center gap-3 mb-2">
    //                 {plan.plan.price && (
    //                   <div className="relative">
    //                     <p className="text-gray-500 line-through">{plan.plan.price}</p>
    //                   </div>
    //                 )}
    //                 {plan.plan.discount && (
    //                   <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-md">
    //                     <PiSealPercent size={14} />
    //                     <span className="text-xs font-medium">{plan.plan.discount}</span>
    //                   </div>
    //                 )}
    //               </div>
                  
    //               <div className="flex items-end gap-2">
    //                 <span className="text-4xl font-bold text-gray-900">{plan.plan.afterDiscount}</span>
    //               </div>
                  
    //               {(plan.plan.laterPaid.amount || plan.plan.laterPaid.text) && (
    //                 <div className="flex items-center mt-2 text-gray-600">
    //                   <p className="text-sm">
    //                     {plan.plan.laterPaid.amount} {plan.plan.laterPaid.text}
    //                   </p>
    //                   {plan.plan.laterPaid.iconInfo.text && (
    //                     <div title={plan.plan.laterPaid.iconInfo.text} className="ml-1">
    //                       <PiSealWarningBold size={16} className="text-gray-500" />
    //                     </div>
    //                   )}
    //                 </div>
    //               )}
    //             </div>
                
    //             {/* Split Payment Toggle */}
    //             {plan.plan.splitPayment.enabled && (
    //               <div className="flex items-center gap-3 mt-4 p-3 bg-blue-50 rounded-md">
    //                 <div className="flex items-center">
    //                   <button 
    //                     onClick={() => handleToggle(plan.plan.id)}
    //                     className="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    //                     style={{ backgroundColor: splitPaymentStates[plan.plan.id] ? '#3B82F6' : '#E5E7EB' }}
    //                     aria-pressed={splitPaymentStates[plan.plan.id]}
    //                   >
    //                     <span className="sr-only">Toggle split payment</span>
    //                     <span
    //                       aria-hidden="true"
    //                       className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
    //                         splitPaymentStates[plan.plan.id] ? 'translate-x-5' : 'translate-x-0'
    //                       }`}
    //                     ></span>
    //                   </button>
    //                 </div>
    //                 <div>
    //                   <p className="text-sm text-gray-700">
    //                     {splitPaymentStates[plan.plan.id]
    //                       ? `${calculateSplitAmount(plan.plan.afterDiscount, plan.plan.splitPayment.instalments)} x ${plan.plan.splitPayment.instalments} months`
    //                       : plan.plan.splitPayment.text}
    //                   </p>
    //                   {plan.plan.splitPayment.knowMore.text && (
    //                     <Link 
    //                       href={plan.plan.splitPayment.knowMore.link || "#"} 
    //                       className="text-xs text-blue-600 hover:underline"
    //                     >
    //                       {plan.plan.splitPayment.knowMore.text}
    //                     </Link>
    //                   )}
    //                 </div>
    //               </div>
    //             )}
    //           </div>
              
    //           {/* Offers Section */}
    //           <div className="p-6">
    //             {plan.plan.offers.map((offer, index) => (
    //               offer.isActive && (
    //                 <div key={index} className="mb-6 overflow-hidden rounded-lg shadow-sm transition-transform hover:shadow-md hover:scale-[1.02]">
    //                   <div className="p-5 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
    //                     {offer.imageUrl && (
    //                       <div className="mb-3">
    //                         <Image
    //                           src={offer.imageUrl}
    //                           alt={offer.heading}
    //                           width={100}
    //                           height={50}
    //                           className="h-12 object-contain"
    //                         />
    //                       </div>
    //                     )}
    //                     <h4 className="font-bold text-lg">{offer.heading}</h4>
    //                     <h5 className="font-semibold mb-2">{offer.subHeading}</h5>
    //                     <p className="text-sm opacity-90">{offer.description}</p>
                        
    //                     {offer.knowMore.text && (
    //                       <Link 
    //                         href={offer.knowMore.link || "#"} 
    //                         className="inline-block mt-3 text-sm text-white hover:underline"
    //                       >
    //                         {offer.knowMore.text}
    //                       </Link>
    //                     )}
    //                   </div>
    //                 </div>
    //               )
    //             ))}
                
    //             {/* Buy Button */}
    //             <button
    //               className="w-full py-3 px-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
    //               onClick={() => handleBuy(plan)}
    //             >
    //               Buy Now
    //             </button>
                
    //             {/* Features Section */}
    //             <div className="mt-8">
    //               {plan.features.heading.map((heading, index) => (
    //                 <h4 key={index} className="font-semibold text-gray-800 mt-4 mb-3">
    //                   {heading}
    //                 </h4>
    //               ))}
                  
    //               <ul className="space-y-3">
    //                 {plan.features.feature.map((feature, index) => (
    //                   <li key={index} className="flex items-start">
    //                     <div className="flex-shrink-0 mt-1">
    //                       <Check className="h-5 w-5 text-green-500" weight="bold" />
    //                     </div>
    //                     <span className="ml-2 text-gray-600">{feature}</span>
    //                   </li>
    //                 ))}
    //               </ul>
    //             </div>
                
    //             {/* Additional Notes */}
    //             {plan.happyText && (
    //               <div className="mt-6 p-3 bg-blue-50 rounded text-gray-800">
    //                 <p className="font-medium">{plan.happyText}</p>
    //               </div>
    //             )}
                
    //             {plan.note && (
    //               <div className="mt-4 text-sm text-gray-700">
    //                 <span className="font-semibold">{plan.note.heading}</span> {plan.note.description}
    //               </div>
    //             )}
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>

    <>
    helo</>
  );
};

export default DynamicPlansSection;