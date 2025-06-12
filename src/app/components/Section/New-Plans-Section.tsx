
//-----------------------------------


// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// interface PlanData {
//   heading: {
//     startText: string;
//     blueText: string;
//     endText: string;
//   };
//   description: string;
//   defaultState: string;
//   defaultPlan: string;
//   statesOptions: {
//     value: string;
//     label: string;
//   }[];
// }

// // Define plan column data structure
// interface PlanColumn {
//   id: number;
//   iconSrc: string;
//   title: string;
//   subtitle: string;
//   description: string;
//   originalPrice: string;
//   discountedPrice: string;
//   features: Record<string, boolean>;
// }

// // Define feature row structure
// interface FeatureRow {
//   id: string;
//   name: string;
//   tooltip?: string;
// }

// const PricingPlans = ({ planData }: { planData: PlanData }) => {
//   const {
//     heading,
//     description,
//     defaultState,
//     defaultPlan,
//     statesOptions,
//   } = planData;

//   const [selectedState, setSelectedState] = useState(defaultState);
//   const [selectPlan, setSelectPlan] = useState(defaultPlan);
//   const [selectedView, setSelectedView] = useState<number | null>(null);
//   const [showFeatureComparison, setShowFeatureComparison] = useState(true);

//   // Plan column data
//   const plansData: PlanColumn[] = [
//     {
//       id: 1,
//       iconSrc: "/tag-icon.png",
//       title: "Basic Plan",
//       subtitle: "",
//       description: "Includes income from one employer, one house property & other sources.",
//       originalPrice: "₹1499",
//       discountedPrice: "₹499 ",
//       features: {
//         "Single Employer": true,
//         "Multiple Employers": false,
//         "One Residential Property": true,
//         "multiple_house": false,
//         "interest_other": true,
//         "capital_gains": false,
//         "presumptive": false,
//         "section_44ad": false,
//         "preparation_filing": true,
//         "schedule": false,
//         "foreign_tax": false,
//         "form_67": false,
//         "foreign_income": false,
//         "non_resident": false,
//         "computation": true,
//         "examination": false,
//         "data_import": true,
//         "document_assistance": true,
//         "verification": false
//       }
//     },
//     {
//       id: 2,
//       iconSrc: "/documents-icon.png",
//       title: "Multiple Employer Plan",
//       subtitle: "",
//       description: "Includes everything in Basic + income from multiple employers.",
//       originalPrice: "₹1999",
//       discountedPrice: "₹999",
//       features: {
//         "Single Employer": true,
//         "Multiple Employers": true,
//         "One Residential Property": true,
//         "multiple_house": true,
//         "interest_other": true,
//         "capital_gains": false,
//         "presumptive": false,
//         "section_44ad": false,
//         "preparation_filing": true,
//         "schedule": false,
//         "foreign_tax": false,
//         "form_67": false,
//         "foreign_income": false,
//         "non_resident": false,
//         "computation": true,
//         "examination": false,
//         "data_import": true,
//         "document_assistance": true,
//         "verification": false
//       }
//     },
//     {
//       id: 3,
//       iconSrc: "/chart-icon.png",
//       title: "Business Income Plan",
//       subtitle: "",
//       description: "Covers business/profession income, multiple properties & 44AD/44ADA.",
//       originalPrice: "₹3124",
//       discountedPrice: "₹1499",
//       features: {
//         "Single Employer": true,
//         "Multiple Employers": true,
//         "One Residential Property": true,
//         "multiple_house": true,
//         "interest_other": true,
//         "capital_gains": false,
//         "presumptive": true,
//         "section_44ad": true,
//         "preparation_filing": true,
//         "schedule": false,
//         "foreign_tax": false,
//         "form_67": false,
//         "foreign_income": false,
//         "non_resident": false,
//         "computation": true,
//         "examination": true,
//         "data_import": true,
//         "document_assistance": true,
//         "verification": true
//       }
//     },
//     {
//       id: 4,
//       iconSrc: "/graph-icon.png",
//       title: "Capital Gains Plan",
//       subtitle: "",
//       description: "Covers capital gains from investments & relief under Sec 89.",
//       originalPrice: "₹4999",
//       discountedPrice: "₹2499",
//       features: {
//         "Single Employer": true,
//         "Multiple Employers": true,
//         "One Residential Property": true,
//         "multiple_house": true,
//         "interest_other": true,
//         "capital_gains": true,
//         "presumptive": true,
//         "section_44ad": true,
//         "preparation_filing": true,
//         "schedule": true,
//         "foreign_tax": false,
//         "form_67": false,
//         "foreign_income": false,
//         "non_resident": false,
//         "computation": true,
//         "examination": true,
//         "data_import": true,
//         "document_assistance": true,
//         "verification": true
//       }
//     },
//     {
//       id: 5,
//       iconSrc: "/globe-icon.png",
//       title: "NRI Plan",
//       subtitle: "",
//       description: "Designed for NRIs with income in India & eligible tax benefits.",
//       originalPrice: "₹9374",
//       discountedPrice: "₹4999",
//       features: {
//         "Single Employer": true,
//         "Multiple Employers": true,
//         "One Residential Property": true,
//         "multiple_house": true,
//         "interest_other": true,
//         "capital_gains": true,
//         "presumptive": true,
//         "section_44ad": true,
//         "preparation_filing": true,
//         "schedule": true,
//         "foreign_tax": false,
//         "form_67": false,
//         "foreign_income": false,
//         "non_resident": true,
//         "computation": true,
//         "examination": true,
//         "data_import": true,
//         "document_assistance": true,
//         "verification": true
//       }
//     },
//     {
//       id: 6,
//       iconSrc: "/globe-search-icon.png",
//       title: "Foreign Income Plan",
//       subtitle: "",
//       description: "Covers global income and max benefits under DTAA.",
//       originalPrice: "₹12499",
//       discountedPrice: "₹7999",
//       features: {
//         "Single Employer": true,
//         "Multiple Employers": true,
//         "One Residential Property": true,
//         "multiple_house": true,
//         "interest_other": true,
//         "capital_gains": true,
//         "presumptive": true,
//         "section_44ad": true,
//         "preparation_filing": true,
//         "schedule": true,
//         "foreign_tax": true,
//         "form_67": true,
//         "foreign_income": true,
//         "non_resident": false,
//         "computation": true,
//         "examination": true,
//         "data_import": true,
//         "document_assistance": true,
//         "verification": true
//       }
//     }
//   ];

//   // Define feature categories and rows
//   const featureCategories = [
//     {
//       category: "Salaried Income ",
//       features: [
//         { id: "Single Employer", name: "One employer" },
//         { id: "Multiple Employers", name: "More than one" }
//       ]
//     },
//     {
//       category: "Income from",
//       features: [
//         { id: "One Residential Property", name: "One Residential Property"},// tooltip: "info" },
//         { id: "multiple_house", name: "More than one House" }
//       ]
//     },
//     {
//       category: "Interest & Other Sources Income",
//       features: [
//         { id: "interest_other", name: "" }
//       ]
//     },
//     {
//       category: "Capital Gains",
//       features: [
//         { id: "capital_gains", name: "", tooltip: "info" }
//       ]
//     },
//     {
//       category: "Presumptive Income",
//       features: [
//         { id: "presumptive", name: "(Small/Business/Professionals)" }
//       ]
//     },
//     {
//       category: "Section 44AD/ADA/AE Income",
//       features: [
//         { id: "section_44ad", name: "" }
//       ]
//     },
//     {
//       category: "Tax ITR preparation & e-filing",
//       features: [
//         { id: "preparation_filing", name: "" }
//       ]
//     },
//     {
//       category: "ITR Schedule",
//       features: [
//         { id: "schedule", name: "" }
//       ]
//     },
//     {
//       category: "Foreign Tax Credit",
//       features: [
//         { id: "foreign_tax", name: "" }
//       ]
//     },
//     {
//       category: "Form 67",
//       features: [
//         { id: "form_67", name: "" }
//       ]
//     },
//     {
//       category: "Foreign Income",
//       features: [
//         { id: "foreign_income", name: "" }
//       ]
//     },
//     {
//       category: "Non-resident",
//       features: [
//         { id: "non_resident", name: "" }
//       ]
//     },
//     {
//       category: "Computation to minimize tax",
//       features: [
//         { id: "computation", name: "deductions" }
//       ]
//     },
//     {
//       category: "Examination of previous ITR",
//       features: [
//         { id: "examination", name: "" }
//       ]
//     },
//     {
//       category: "TRACES Data Import",
//       features: [
//         { id: "data_import", name: "" }
//       ]
//     },
//     {
//       category: "Document Assistance",
//       features: [
//         { id: "document_assistance", name: "" }
//       ]
//     },
//     {
//       category: "Verification of e-ITR help texts",
//       features: [
//         { id: "verification", name: "" }
//       ]
//     }
//   ];

//   const handleBuy = (id: number) => {
//     console.log("Selected plan ID:", id);
//   };

//   const toggleView = (id: number | null) => {
//     setSelectedView(id === selectedView ? null : id);
//   };

//   const toggleFeatureComparison = () => {
//     setShowFeatureComparison(!showFeatureComparison);
//   };

//   return (
//     <section className="text-black w-full">
//       {/* Header Section */}
//       <div className="pt-12 pb-16 bg-teal-700 flex flex-col gap-4 relative items-center">
//         <h2 className="text-white text-xl md:text-3xl font-bold flex flex-col md:flex-row items-center md:gap-2 px-4 text-center">
//           {heading.startText}{" "}
//           <span className="text-blue-500">{heading.blueText}</span>{" "}
//           {heading.endText}
//         </h2>
//         <p className="text-white text-sm md:text-base font-normal text-center px-4 md:mb-4">
//           {description}
//         </p>
//       </div>

//       {/* Plans Container */}
//       <div className="bg-white -mt-6 px-2 md:px-6">
//         <div className="max-w-7xl mx-auto">
//           {/* Desktop View */}
//           <div className="hidden md:block">
//             {/* Plans Header */}
//             <div className="grid grid-cols-7 gap-1">
//               <div className="col-span-1"></div>
//               {plansData.map((plan) => (
//                 <div key={plan.id} className="col-span-1 p-4 border border-gray-200 rounded-t bg-white flex flex-col items-center text-center">
//                   <div className="w-12 h-12 flex items-center justify-center mb-1 bg-gray-50 rounded-full">
//                     <Image src={plan.iconSrc} alt={`${plan.title} Icon`} width={24} height={24} />
//                   </div>
//                   <h4 className="text-gray-700 text-xs font-medium">{plan.subtitle}</h4>
//                   <h3 className="text-gray-900 text-sm font-bold">{plan.title}</h3>
//                   <p className="text-xs text-gray-600 mt-1 h-12 overflow-hidden">
//                     {plan.description.length > 70 ? `${plan.description.substring(0, 70)}...` : plan.description}
//                   </p>
//                   <p className="text-xs text-gray-500 mt-2">Base Price:</p>
//                   <p className="text-xs text-gray-400 line-through">{plan.originalPrice}</p>
//                   <p className="text-lg font-bold text-gray-900">{plan.discountedPrice}</p>
//                   <p className="text-xs text-gray-500">+ Taxes</p>
//                   <button 
//                     className="mt-2 w-full py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-xs transition-colors duration-300"
//                     onClick={() => handleBuy(plan.id)}
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               ))}
//             </div>

//             {/* Feature Categories and Rows */}
//             {featureCategories.map((category, catIndex) => (
//               <div key={catIndex}>
//                 {/* Category Header */}
//                 <div className="grid grid-cols-7 gap-1">
//                   <div className="col-span-1 p-2 bg-gray-50 border-b border-l border-gray-200">
//                     <h4 className="text-xs font-medium text-gray-700">{category.category}</h4>
//                   </div>
//                   {/* Empty cells for plan columns */}
//                   {plansData.map((plan) => (
//                     <div key={plan.id} className="col-span-1 border-b border-gray-200"></div>
//                   ))}
//                 </div>

//                 {/* Feature Rows */}
//                 {category.features.map((feature, featIndex) => (
//                   <div key={`${catIndex}-${featIndex}`} className="grid grid-cols-7 gap-1">
//                     <div className="col-span-1 p-2 pl-6 bg-white border-b border-l border-gray-200 flex items-center">
//                       <span className="text-xs text-gray-600">{feature.name}</span>

//                     </div>
//                     {/* Plan feature availability */}
//                     {plansData.map((plan) => (
//                       <div key={plan.id} className="col-span-1 border-b border-gray-200 flex items-center justify-center p-2">
//                         {plan.features[feature.id] ? (
//                           <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
//                             <svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                               <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
//                             </svg>
//                           </div>
//                         ) : (
//                           <div className="w-4 h-4 rounded-full bg-gray-200"></div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>

//           {/* Mobile View */}
//           <div className="md:hidden">
//             {/* Plan Selection Tabs */}
//             <div className="flex overflow-x-auto pb-2 pt-2 scrollbar-hide">
//               {plansData.map((plan) => (
//                 <button
//                   key={plan.id}
//                   onClick={() => toggleView(plan.id)}
//                   className={`flex-shrink-0 px-4 py-2 text-xs font-medium rounded-md mr-2 ${
//                     selectedView === plan.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
//                   }`}
//                 >
//                   {plan.title}
//                 </button>
//               ))}
//             </div>

//             {/* Selected Plan Details or All Plans */}
//             <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {(selectedView === null ? plansData : plansData.filter(plan => plan.id === selectedView)).map((plan) => (
//                 <div key={plan.id} className="border border-gray-200 rounded-lg bg-white flex flex-col items-center text-center p-4">
//                   <div className="w-12 h-12 flex items-center justify-center mb-2 bg-gray-50 rounded-full">
//                     <Image src={plan.iconSrc} alt={`${plan.title} Icon`} width={24} height={24} />
//                   </div>
//                   <h4 className="text-gray-700 text-sm font-medium">{plan.subtitle}</h4>
//                   <h3 className="text-gray-900 text-base font-bold">{plan.title}</h3>
//                   <p className="text-sm text-gray-600 mt-2">
//                     {plan.description}
//                   </p>
//                   <div className="flex items-center justify-center mt-4 gap-4">
//                     <div>
//                       <p className="text-xs text-gray-500">Base Price:</p>
//                       <p className="text-xs text-gray-400 line-through">{plan.originalPrice}</p>
//                     </div>
//                     <div>
//                       <p className="text-lg font-bold text-gray-900">{plan.discountedPrice}</p>
//                       <p className="text-xs text-gray-500">+ Taxes</p>
//                     </div>
//                   </div>
//                   <button 
//                     className="mt-4 w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm transition-colors duration-300"
//                     onClick={() => handleBuy(plan.id)}
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               ))}
//             </div>

//             {/* Toggle Feature Comparison Button */}
//             <div className="my-4 flex justify-center">
//               <button
//                 onClick={toggleFeatureComparison}
//                 className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm transition-colors duration-300"
//               >
//                 {showFeatureComparison ? "Hide Feature Comparison" : "Show Feature Comparison"}
//               </button>
//             </div>

//             {/* Feature Comparison for Mobile */}
//             {showFeatureComparison && (
//               <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
//                 <div className="bg-gray-50 p-3 border-b border-gray-200">
//                   <h3 className="text-gray-800 font-medium text-sm">Feature Comparison</h3>
//                 </div>

//                 {/* Feature Categories and Rows */}
//                 {featureCategories.map((category, catIndex) => (
//                   <div key={catIndex} className="border-b border-gray-200 last:border-b-0">
//                     {/* Category Header */}
//                     <div className="bg-gray-50 p-2 border-t border-gray-200">
//                       <h4 className="text-xs font-medium text-gray-700">{category.category}</h4>
//                     </div>

//                     {/* Feature Rows */}
//                     {category.features.map((feature, featIndex) => (
//                       <div key={`${catIndex}-${featIndex}`} className="p-2 pl-4">
//                         <div className="grid grid-cols-6 gap-2 items-center">
//                           <div className="col-span-3 text-xs text-gray-600">{feature.name || category.category}</div>

//                           {/* Plan feature availability - only show for selected plan in mobile view */}
//                           {plansData.map((plan) => (
//                             <div key={plan.id} className={`col-span-1/2 flex items-center justify-center ${selectedView !== null && plan.id !== selectedView ? 'hidden' : ''}`}>
//                               <div className="text-xs font-medium">{plan.title.substring(0, 3)}</div>
//                               <div className="ml-1">
//                                 {plan.features[feature.id] ? (
//                                   <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
//                                     <svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                       <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
//                                     </svg>
//                                   </div>
//                                 ) : (
//                                   <div className="w-4 h-4 rounded-full bg-gray-200"></div>
//                                 )}
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingPlans;



// --------------------------------------


// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// interface PlanData {
//   heading: {
//     startText: string;
//     blueText: string;
//     endText: string;
//   };
//   description: string;
//   defaultState: string;
//   defaultPlan: string;
//   statesOptions: {
//     value: string;
//     label: string;
//   }[];
// }

// // Define plan column data structure
// interface PlanColumn {
//   id: number;
//   iconSrc: string;
//   title: string;
//   subtitle: string;
//   description: string;
//   originalPrice: string;
//   discountedPrice: string;
//   discount?: string;
//   features: Record<string, boolean>;
//   recommendation?: {
//     recommended: boolean;
//     text: string;
//   };
//   laterPaid?: {
//     amount: string;
//     text: string;
//     iconInfo?: {
//       text: string;
//       link: string;
//     };
//   };
//   offers?: {
//     imageUrl: string;
//     isActive: boolean;
//     heading: string;
//     subHeading: string;
//     description: string;
//     knowMore?: {
//       text: string;
//       link: string;
//     };
//   }[];
//   splitPayment?: {
//     enabled: boolean;
//     instalments: number;
//     instalmentAmount: string;
//     text: string;
//     knowMore?: {
//       text: string;
//       link: string;
//     };
//   };
//   onSelect?: () => void;
//   navigationUrl?: string;
// }

// // Define feature row structure
// interface FeatureRow {
//   id: string;
//   name: string;
//   tooltip?: string;
// }

// const PricingPlans = ({ planData }: { planData: PlanData }) => {
//   const {
//     heading,
//     description,
//     defaultState,
//     defaultPlan,
//     statesOptions,
//   } = planData;

//   const [selectedState, setSelectedState] = useState(defaultState);
//   const [selectPlan, setSelectPlan] = useState(defaultPlan);
//   const [selectedView, setSelectedView] = useState<number | null>(null);
//   const [showFeatureComparison, setShowFeatureComparison] = useState(true);
//   const [splitPaymentStates, setSplitPaymentStates] = useState<Record<number, boolean>>({});

//   // Plan column data - enhanced with features from second page
//   // const plansData: PlanColumn[] = [
//   //   {
//   //     id: 1,
//   //     iconSrc: "/tag-icon.png",
//   //     title: "Basic Plan",
//   //     subtitle: "",
//   //     description: "Includes income from one employer, one house property & other sources.",
//   //     originalPrice: "₹1499",
//   //     discountedPrice: "₹499",
//   //     discount: "₹1000 off",
//   //     features: {
//   //       "Single Employer": true,
//   //       "Multiple Employers": false,
//   //       "One Residential Property": true,
//   //       "multiple_house": false,
//   //       "interest_other": true,
//   //       "capital_gains": false,
//   //       "presumptive": false,
//   //       "section_44ad": false,
//   //       "preparation_filing": true,
//   //       "schedule": false,
//   //       "foreign_tax": false,
//   //       "form_67": false,
//   //       "foreign_income": false,
//   //       "non_resident": false,
//   //       "computation": true,
//   //       "examination": false,
//   //       "data_import": true,
//   //       "document_assistance": true,
//   //       "verification": false
//   //     },
//   //     recommendation: {
//   //       recommended: true,
//   //       text: ""
//   //     },
//   //     laterPaid: {
//   //       amount: "₹13,726",
//   //       text: "+ Govt. Fee (to be paid later)",
//   //       iconInfo: {
//   //         text: "Government fees vary by state",
//   //         link: ""
//   //       }
//   //     },
//   //     offers: [
//   //       {
//   //         imageUrl: "",
//   //         isActive: true,
//   //         heading: "Special Offer",
//   //         subHeading: "Unlock partner benefits",
//   //         description: "Post incorporation worth Rs 2 lakhs",
//   //         knowMore: {
//   //           text: "Learn more",
//   //           link: "#"
//   //         }
//   //       }
//   //     ],
//   //     splitPayment: {
//   //       enabled: true,
//   //       instalments: 2,
//   //       instalmentAmount: "₹249.50",
//   //       text: "Split payment by 2 months",
//   //       knowMore: {
//   //         text: "Learn more",
//   //         link: "#"
//   //       }
//   //     },
//   //     navigationUrl: "/cart"
//   //   },
//   //   {
//   //     id: 2,
//   //     iconSrc: "/documents-icon.png",
//   //     title: "Multiple Employer Plan",
//   //     subtitle: "",
//   //     description: "Includes everything in Basic + income from multiple employers.",
//   //     originalPrice: "₹1999",
//   //     discountedPrice: "₹999",
//   //     discount: "50% off",
//   //     features: {
//   //       "Single Employer": true,
//   //       "Multiple Employers": true,
//   //       "One Residential Property": true,
//   //       "multiple_house": true,
//   //       "interest_other": true,
//   //       "capital_gains": false,
//   //       "presumptive": false,
//   //       "section_44ad": false,
//   //       "preparation_filing": true,
//   //       "schedule": false,
//   //       "foreign_tax": false,
//   //       "form_67": false,
//   //       "foreign_income": false,
//   //       "non_resident": false,
//   //       "computation": true,
//   //       "examination": false,
//   //       "data_import": true,
//   //       "document_assistance": true,
//   //       "verification": false
//   //     },
//   //     recommendation: {
//   //       recommended: true,
//   //       text: ""
//   //     },
//   //     laterPaid: {
//   //       amount: "₹13,726",
//   //       text: "+ Govt. Fee (to be paid later)",
//   //       iconInfo: {
//   //         text: "Government fees vary by state",
//   //         link: ""
//   //       }
//   //     },
//   //     splitPayment: {
//   //       enabled: true,
//   //       instalments: 2,
//   //       instalmentAmount: "₹499.50",
//   //       text: "Split payment by 2 months",
//   //       knowMore: {
//   //         text: "Learn more",
//   //         link: "#"
//   //       }
//   //     },
//   //     navigationUrl: "/cart"
//   //   },
//   //   {
//   //     id: 3,
//   //     iconSrc: "/chart-icon.png",
//   //     title: "Business Income Plan",
//   //     subtitle: "",
//   //     description: "Covers business/profession income, multiple properties & 44AD/44ADA.",
//   //     originalPrice: "₹3124",
//   //     discountedPrice: "₹1499",
//   //     discount: "52% off",
//   //     features: {
//   //       "Single Employer": true,
//   //       "Multiple Employers": true,
//   //       "One Residential Property": true,
//   //       "multiple_house": true,
//   //       "interest_other": true,
//   //       "capital_gains": false,
//   //       "presumptive": true,
//   //       "section_44ad": true,
//   //       "preparation_filing": true,
//   //       "schedule": false,
//   //       "foreign_tax": false,
//   //       "form_67": false,
//   //       "foreign_income": false,
//   //       "non_resident": false,
//   //       "computation": true,
//   //       "examination": true,
//   //       "data_import": true,
//   //       "document_assistance": true,
//   //       "verification": true
//   //     },
//   //     recommendation: {
//   //       recommended: true,
//   //       text: ""
//   //     },
//   //     laterPaid: {
//   //       amount: "₹13,726",
//   //       text: "+ Govt. Fee (to be paid later)",
//   //       iconInfo: {
//   //         text: "Government fees vary by state",
//   //         link: ""
//   //       }
//   //     },
//   //     splitPayment: {
//   //       enabled: true,
//   //       instalments: 3,
//   //       instalmentAmount: "₹499.67",
//   //       text: "Split payment by 3 months",
//   //       knowMore: {
//   //         text: "Learn more",
//   //         link: "#"
//   //       }
//   //     },
//   //     navigationUrl: "/cart"
//   //   },
//   //   {
//   //     id: 4,
//   //     iconSrc: "/graph-icon.png",
//   //     title: "Capital Gains Plan",
//   //     subtitle: "",
//   //     description: "Covers capital gains from investments & relief under Sec 89.",
//   //     originalPrice: "₹4999",
//   //     discountedPrice: "₹2499",
//   //     discount: "50% off",
//   //     features: {
//   //       "Single Employer": true,
//   //       "Multiple Employers": true,
//   //       "One Residential Property": true,
//   //       "multiple_house": true,
//   //       "interest_other": true,
//   //       "capital_gains": true,
//   //       "presumptive": true,
//   //       "section_44ad": true,
//   //       "preparation_filing": true,
//   //       "schedule": true,
//   //       "foreign_tax": false,
//   //       "form_67": false,
//   //       "foreign_income": false,
//   //       "non_resident": false,
//   //       "computation": true,
//   //       "examination": true,
//   //       "data_import": true,
//   //       "document_assistance": true,
//   //       "verification": true
//   //     },
//   //     recommendation: {
//   //       recommended: true,
//   //       text: ""
//   //     },
//   //     laterPaid: {
//   //       amount: "₹13,726",
//   //       text: "+ Govt. Fee (to be paid later)",
//   //       iconInfo: {
//   //         text: "Government fees vary by state",
//   //         link: ""
//   //       }
//   //     },
//   //     splitPayment: {
//   //       enabled: true,
//   //       instalments: 3,
//   //       instalmentAmount: "₹833",
//   //       text: "Split payment by 3 months",
//   //       knowMore: {
//   //         text: "Learn more",
//   //         link: "#"
//   //       }
//   //     },
//   //     navigationUrl: "/checkout/capital-gains-plan"
//   //   },
//   //   {
//   //     id: 5,
//   //     iconSrc: "/globe-icon.png",
//   //     title: "NRI Plan",
//   //     subtitle: "",
//   //     description: "Designed for NRIs with income in India & eligible tax benefits.",
//   //     originalPrice: "₹9374",
//   //     discountedPrice: "₹4999",
//   //     discount: "47% off",
//   //     features: {
//   //       "Single Employer": true,
//   //       "Multiple Employers": true,
//   //       "One Residential Property": true,
//   //       "multiple_house": true,
//   //       "interest_other": true,
//   //       "capital_gains": true,
//   //       "presumptive": true,
//   //       "section_44ad": true,
//   //       "preparation_filing": true,
//   //       "schedule": true,
//   //       "foreign_tax": false,
//   //       "form_67": false,
//   //       "foreign_income": false,
//   //       "non_resident": true,
//   //       "computation": true,
//   //       "examination": true,
//   //       "data_import": true,
//   //       "document_assistance": true,
//   //       "verification": true
//   //     },
//   //     recommendation: {
//   //       recommended: true,
//   //       text: ""
//   //     },
//   //     laterPaid: {
//   //       amount: "₹13,726",
//   //       text: "+ Govt. Fee (to be paid later)",
//   //       iconInfo: {
//   //         text: "Government fees vary by state",
//   //         link: ""
//   //       }
//   //     },
//   //     splitPayment: {
//   //       enabled: true,
//   //       instalments: 3,
//   //       instalmentAmount: "₹1,666.33",
//   //       text: "Split payment by 3 months",
//   //       knowMore: {
//   //         text: "Learn more",
//   //         link: "#"
//   //       }
//   //     },
//   //     navigationUrl: "/checkout/nri-plan"
//   //   },
//   //   {
//   //     id: 6,
//   //     iconSrc: "/globe-search-icon.png",
//   //     title: "Foreign Income Plan",
//   //     subtitle: "",
//   //     description: "Covers global income and max benefits under DTAA.",
//   //     originalPrice: "₹12499",
//   //     discountedPrice: "₹7999",
//   //     discount: "36% off",
//   //     features: {
//   //       "Single Employer": true,
//   //       "Multiple Employers": true,
//   //       "One Residential Property": true,
//   //       "multiple_house": true,
//   //       "interest_other": true,
//   //       "capital_gains": true,
//   //       "presumptive": true,
//   //       "section_44ad": true,
//   //       "preparation_filing": true,
//   //       "schedule": true,
//   //       "foreign_tax": true,
//   //       "form_67": true,
//   //       "foreign_income": true,
//   //       "non_resident": false,
//   //       "computation": true,
//   //       "examination": true,
//   //       "data_import": true,
//   //       "document_assistance": true,
//   //       "verification": true
//   //     },
//   //     recommendation: {
//   //       recommended: true,
//   //       text: ""
//   //     },
//   //     laterPaid: {
//   //       amount: "₹13,726",
//   //       text: "+ Govt. Fee (to be paid later)",
//   //       iconInfo: {
//   //         text: "Government fees vary by state",
//   //         link: ""
//   //       }
//   //     },
//   //     splitPayment: {
//   //       enabled: true,
//   //       instalments: 3,
//   //       instalmentAmount: "₹2,666.33",
//   //       text: "Split payment by 3 months",
//   //       knowMore: {
//   //         text: "Learn more",
//   //         link: "#"
//   //       }
//   //     },
//   //     navigationUrl: "/checkout/foreign-income-plan"
//   //   }
//   // ];

//   // Define feature categories and rows - unchanged
//   const featureCategories = [
//     {
//       category: "Salaried Income ",
//       features: [
//         { id: "Single Employer", name: "One employer" },
//         { id: "Multiple Employers", name: "More than one" }
//       ]
//     },
//     {
//       category: "Income from",
//       features: [
//         { id: "One Residential Property", name: "One Residential Property"},
//         { id: "multiple_house", name: "More than one House" }
//       ]
//     },
//     {
//       category: "Interest & Other Sources Income",
//       features: [
//         { id: "interest_other", name: "" }
//       ]
//     },
//     {
//       category: "Capital Gains",
//       features: [
//         { id: "capital_gains", name: "", tooltip: "info" }
//       ]
//     },
//     {
//       category: "Presumptive Income",
//       features: [
//         { id: "presumptive", name: "(Small/Business/Professionals)" }
//       ]
//     },
//     {
//       category: "Section 44AD/ADA/AE Income",
//       features: [
//         { id: "section_44ad", name: "" }
//       ]
//     },
//     {
//       category: "Tax ITR preparation & e-filing",
//       features: [
//         { id: "preparation_filing", name: "" }
//       ]
//     },
//     {
//       category: "ITR Schedule",
//       features: [
//         { id: "schedule", name: "" }
//       ]
//     },
//     {
//       category: "Foreign Tax Credit",
//       features: [
//         { id: "foreign_tax", name: "" }
//       ]
//     },
//     {
//       category: "Form 67",
//       features: [
//         { id: "form_67", name: "" }
//       ]
//     },
//     {
//       category: "Foreign Income",
//       features: [
//         { id: "foreign_income", name: "" }
//       ]
//     },
//     {
//       category: "Non-resident",
//       features: [
//         { id: "non_resident", name: "" }
//       ]
//     },
//     {
//       category: "Computation to minimize tax",
//       features: [
//         { id: "computation", name: "deductions" }
//       ]
//     },
//     {
//       category: "Examination of previous ITR",
//       features: [
//         { id: "examination", name: "" }
//       ]
//     },
//     {
//       category: "TRACES Data Import",
//       features: [
//         { id: "data_import", name: "" }
//       ]
//     },
//     {
//       category: "Document Assistance",
//       features: [
//         { id: "document_assistance", name: "" }
//       ]
//     },
//     {
//       category: "Verification of e-ITR help texts",
//       features: [
//         { id: "verification", name: "" }
//       ]
//     }
//   ];

//   const handleBuy = (plan: PlanColumn) => {
//     console.log("Selected plan ID:", plan.id);

//     // If plan has onSelect function, call it
//     if (plan.onSelect) {
//       plan.onSelect();
//     } else {
//       // Navigate to plan's URL if available
//       if (plan.navigationUrl) {
//         window.location.href = plan.navigationUrl;
//       }
//     }
//   };

//   const toggleView = (id: number | null) => {
//     setSelectedView(id === selectedView ? null : id);
//   };

//   const toggleFeatureComparison = () => {
//     setShowFeatureComparison(!showFeatureComparison);
//   };

//   const toggleSplitPayment = (id: number) => {
//     setSplitPaymentStates(prev => ({
//       ...prev,
//       [id]: !prev[id]
//     }));
//   };

//   return (
//     <section className="text-black w-full">
//       {/* Header Section */}
//       <div className="pt-12 pb-16 bg-teal-700 flex flex-col gap-4 relative items-center">
//         <h2 className="text-white text-xl md:text-3xl font-bold flex flex-col md:flex-row items-center md:gap-2 px-4 text-center">
//           {heading.startText}{" "}
//           <span className="text-blue-500">{heading.blueText}</span>{" "}
//           {heading.endText}
//         </h2>
//         <p className="text-white text-sm md:text-base font-normal text-center px-4 md:mb-4">
//           {description}
//         </p>
//       </div>

//       {/* Plans Container */}
//       <div className="bg-white -mt-6 px-2 md:px-6">
//         <div className="max-w-7xl mx-auto">
//           {/* Desktop View */}
//           <div className="hidden md:block">
//             {/* Plans Header */}
//             <div className="grid grid-cols-7 gap-1">
//               <div className="col-span-1"></div>
//               {plansData.map((plan) => (
//                 <div key={plan.id} className="col-span-1 p-4 border border-gray-200 rounded-t bg-white flex flex-col items-center text-center">
//                   <div className="w-12 h-12 flex items-center justify-center mb-1 bg-gray-50 rounded-full">
//                     <Image src={plan.iconSrc} alt={`${plan.title} Icon`} width={24} height={24} />
//                   </div>
//                   <h4 className="text-gray-700 text-xs font-medium">{plan.subtitle}</h4>
//                   <h3 className="text-gray-900 text-sm font-bold">{plan.title}</h3>
//                   <p className="text-xs text-gray-600 mt-1 h-12 overflow-hidden">
//                     {plan.description.length > 70 ? `${plan.description.substring(0, 70)}...` : plan.description}
//                   </p>
//                   <p className="text-xs text-gray-500 mt-2">Base Price:</p>
//                   <div className="flex items-center justify-center gap-2">
//                     <p className="text-xs text-gray-400 line-through">{plan.originalPrice}</p>
//                     {plan.discount && (
//                       <span className="bg-green-100 text-green-600 text-xs px-1 py-0.5 rounded">
//                         {plan.discount}
//                       </span>
//                     )}
//                   </div>
//                   <p className="text-lg font-bold text-gray-900">{plan.discountedPrice}</p>
//                   <p className="text-xs text-gray-500">+ Taxes</p>

//                   {plan.laterPaid && (
//                     <p className="text-xs text-gray-600 mt-1">
//                       {plan.laterPaid.amount} {plan.laterPaid.text}
//                     </p>
//                   )}

//                   {plan.splitPayment && plan.splitPayment.enabled && (
//                     <div className="flex items-center text-xs text-blue-600 mt-1 cursor-pointer" 
//                          onClick={() => toggleSplitPayment(plan.id)}>
//                       <span>{splitPaymentStates[plan.id] ? 
//                         `₹${(parseFloat(plan.discountedPrice.replace("₹", "").replace(",", "")) / plan.splitPayment.instalments).toFixed(2)} × ${plan.splitPayment.instalments} months` : 
//                         plan.splitPayment.text}
//                       </span>
//                     </div>
//                   )}

//                   <button 
//                     className="mt-2 w-full py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-xs transition-colors duration-300"
//                     onClick={() => handleBuy(plan)}
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               ))}
//             </div>

//             {/* Feature Categories and Rows */}
//             {featureCategories.map((category, catIndex) => (
//               <div key={catIndex}>
//                 {/* Category Header */}
//                 <div className="grid grid-cols-7 gap-1">
//                   <div className="col-span-1 p-2 bg-gray-50 border-b border-l border-gray-200">
//                     <h4 className="text-xs font-medium text-gray-700">{category.category}</h4>
//                   </div>
//                   {/* Empty cells for plan columns */}
//                   {plansData.map((plan) => (
//                     <div key={plan.id} className="col-span-1 border-b border-gray-200"></div>
//                   ))}
//                 </div>

//                 {/* Feature Rows */}
//                 {category.features.map((feature, featIndex) => (
//                   <div key={`${catIndex}-${featIndex}`} className="grid grid-cols-7 gap-1">
//                     <div className="col-span-1 p-2 pl-6 bg-white border-b border-l border-gray-200 flex items-center">
//                       <span className="text-xs text-gray-600">{feature.name}</span>
//                     </div>
//                     {/* Plan feature availability */}
//                     {plansData.map((plan) => (
//                       <div key={plan.id} className="col-span-1 border-b border-gray-200 flex items-center justify-center p-2">
//                         {plan.features[feature.id] ? (
//                           <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
//                             <svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                               <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
//                             </svg>
//                           </div>
//                         ) : (
//                           <div className="w-4 h-4 rounded-full bg-gray-200"></div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>

//           {/* Mobile View */}
//           <div className="md:hidden">
//             {/* Plan Selection Tabs */}
//             <div className="flex overflow-x-auto pb-2 pt-2 scrollbar-hide">
//               {plansData.map((plan) => (
//                 <button
//                   key={plan.id}
//                   onClick={() => toggleView(plan.id)}
//                   className={`flex-shrink-0 px-4 py-2 text-xs font-medium rounded-md mr-2 ${
//                     selectedView === plan.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
//                   }`}
//                 >
//                   {plan.title}
//                 </button>
//               ))}
//             </div>

//             {/* Selected Plan Details or All Plans */}
//             <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {(selectedView === null ? plansData : plansData.filter(plan => plan.id === selectedView)).map((plan) => (
//                 <div key={plan.id} className="border border-gray-200 rounded-lg bg-white flex flex-col items-center text-center p-4">
//                   <div className="w-12 h-12 flex items-center justify-center mb-2 bg-gray-50 rounded-full">
//                     <Image src={plan.iconSrc} alt={`${plan.title} Icon`} width={24} height={24} />
//                   </div>
//                   <h4 className="text-gray-700 text-sm font-medium">{plan.subtitle}</h4>
//                   <h3 className="text-gray-900 text-base font-bold">{plan.title}</h3>
//                   <p className="text-sm text-gray-600 mt-2">
//                     {plan.description}
//                   </p>
//                   <div className="flex items-center justify-center mt-4 gap-4">
//                     <div>
//                       <p className="text-xs text-gray-500">Base Price:</p>
//                       <div className="flex items-center gap-2">
//                         <p className="text-xs text-gray-400 line-through">{plan.originalPrice}</p>
//                         {plan.discount && (
//                           <span className="bg-green-100 text-green-600 text-xs px-1 py-0.5 rounded">
//                             {plan.discount}
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                     <div>
//                       <p className="text-lg font-bold text-gray-900">{plan.discountedPrice}</p>
//                       <p className="text-xs text-gray-500">+ Taxes</p>
//                     </div>
//                   </div>

//                   {plan.laterPaid && (
//                     <p className="text-xs text-gray-600 mt-2">
//                       {plan.laterPaid.amount} {plan.laterPaid.text}
//                     </p>
//                   )}

//                   {plan.splitPayment && plan.splitPayment.enabled && (
//                     <div className="flex items-center text-xs text-blue-600 mt-2 cursor-pointer" 
//                          onClick={() => toggleSplitPayment(plan.id)}>
//                       <span>{splitPaymentStates[plan.id] ? 
//                         `₹${(parseFloat(plan.discountedPrice.replace("₹", "").replace(",", "")) / plan.splitPayment.instalments).toFixed(2)} × ${plan.splitPayment.instalments} months` : 
//                         plan.splitPayment.text}
//                       </span>
//                     </div>
//                   )}

//                   {plan.offers && plan.offers.some(offer => offer.isActive) && (
//                     <div className="mt-4 w-full bg-blue-50 border border-blue-200 rounded-md p-3 text-left">
//                       <h5 className="text-blue-800 font-medium text-sm">
//                         {plan.offers.find(offer => offer.isActive)?.heading}
//                       </h5>
//                       <p className="text-blue-600 text-xs mt-1">
//                         {plan.offers.find(offer => offer.isActive)?.description}
//                       </p>
//                     </div>
//                   )}

//                   <button 
//                     className="mt-4 w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm transition-colors duration-300"
//                     onClick={() => handleBuy(plan)}
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               ))}
//             </div>

//             {/* Toggle Feature Comparison Button */}
//             <div className="my-4 flex justify-center">
//               <button
//                 onClick={toggleFeatureComparison}
//                 className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm transition-colors duration-300"
//               >
//                 {showFeatureComparison ? "Hide Feature Comparison" : "Show Feature Comparison"}
//               </button>
//             </div>

//             {/* Feature Comparison for Mobile */}
//             {showFeatureComparison && (
//               <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
//                 <div className="bg-gray-50 p-3 border-b border-gray-200">
//                   <h3 className="text-gray-800 font-medium text-sm">Feature Comparison</h3>
//                 </div>

//                 {/* Feature Categories and Rows */}
//                 {featureCategories.map((category, catIndex) => (
//                   <div key={catIndex} className="border-b border-gray-200 last:border-b-0">
//                     {/* Category Header */}
//                     <div className="bg-gray-50 p-2 border-t border-gray-200">
//                       <h4 className="text-xs font-medium text-gray-700">{category.category}</h4>
//                     </div>

//                     {/* Feature Rows */}
//                     {category.features.map((feature, featIndex) => (
//                       <div key={`${catIndex}-${featIndex}`} className="p-2 pl-4">
//                         <div className="grid grid-cols-6 gap-2 items-center">
//                           <div className="col-span-3 text-xs text-gray-600">{feature.name || category.category}</div>

//                           {/* Plan feature availability - only show for selected plan in mobile view */}
//                           {plansData.map((plan) => (
//                             <div key={plan.id} className={`col-span-1/2 flex items-center justify-center ${selectedView !== null && plan.id !== selectedView ? 'hidden' : ''}`}>
//                               <div className="text-xs font-medium">{plan.title.substring(0, 3)}</div>
//                               <div className="ml-1">
//                                 {plan.features[feature.id] ? (
//                                   <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
//                                     <svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                       <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
//                                     </svg>
//                                   </div>
//                                 ) : (
//                                   <div className="w-4 h-4 rounded-full bg-gray-200"></div>
//                                 )}
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingPlans;




// sechnage for //-----------------------------------------------


// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// // Define data structures
// interface PlanData {
//   heading: {
//     startText: string;
//     blueText: string;
//     endText: string;
//   };
//   description: string;
//   defaultState: string;
//   defaultPlan: string;
//   statesOptions: {
//     value: string;
//     label: string;
//   }[];
// }

// interface PlanColumn {
//   id: number;
//   iconSrc: string;
//   title: string;
//   subtitle: string;
//   description: string;
//   originalPrice: string;
//   discountedPrice: string;
//   discount?: string;
//   features: Record<string, boolean>;
//   recommendation?: {
//     recommended: boolean;
//     text: string;
//   };
//   laterPaid?: {
//     amount: string;
//     text: string;
//     iconInfo?: {
//       text: string;
//       link: string;
//     };
//   };
//   offers?: {
//     imageUrl: string;
//     isActive: boolean;
//     heading: string;
//     subHeading: string;
//     description: string;
//     knowMore?: {
//       text: string;
//       link: string;
//     };
//   }[];
//   splitPayment?: {
//     enabled: boolean;
//     instalments: number;
//     instalmentAmount: string;
//     text: string;
//     knowMore?: {
//       text: string;
//       link: string;
//     };
//   };
//   onSelect?: () => void;
//   navigationUrl?: string;
// }

// interface FeatureCategory {
//   category: string;
//   features: {
//     id: string;
//     name: string;
//     tooltip?: string;
//   }[];
// }

// interface PricingPlansProps {
//   planData: PlanData;
//   plansData: PlanColumn[];
//   featureCategories?: FeatureCategory[];
// }

// // Feature categories definition
// const defaultFeatureCategories: FeatureCategory[] = [
//   {
//     category: "Salaried Income",
//     features: [
//       { id: "Single Employer", name: "Single Employer" },
//       { id: "Multiple Employers", name: "Multiple Employers" }
//     ]
//   },
//   {
//     category: "Income from",
//     features: [
//       { id: "One Residential Property", name: "One Residential Property" },
//       { id: "multiple_house", name: "More than one House" }
//     ]
//   },
//   {
//     category: "Other Sources ",
//     features: [
//       { id: "interest_other", name: "(Interest, Dividends, etc.)" }
//     ]
//   },
//   {
//     category: "Capital Market Gains",
//     features: [
//       { id: "capital_gains", name: "(Stocks/Mutual Funds)", tooltip: "info" }
//     ]
//   },
//   {
//     category: "",
//     features: [
//       { id: "presumptive", name: "Crypto & Digital Asset Reporting" }
//     ]
//   },
//   {
//     category: "",
//     features: [
//       { id: "section_44ad", name: "Presumptive Business Income (44AD/44ADA)" }
//     ]
//   },
//   {
//     category: "",
//     features: [
//       { id: "preparation_filing", name: "Effortless Tax Form Fill & E-Submission" }
//     ]
//   },
//   {
//     category: "",
//     features: [
//       { id: "schedule", name: "Foreign Asset Declaration (FA)" }
//     ]
//   },
//   {
//     category: "",
//     features: [
//       { id: "foreign_tax", name: "Foreign Tax Rebate Claim" }
//     ]
//   },
//   {
//     category: "",
//     features: [
//       { id: "form_67", name: "Submission of Form 67" }
//     ]
//   },
//   {
//     category: "",
//     features: [
//       { id: "foreign_income", name: "Income from Global Sources" }
//     ]
//   },
//   {
//     category: "",
//     features: [
//       { id: "non_resident", name: "Non-Resident Tax Status Filing" }
//     ]
//   },
//   {
//     category: "",
//     features: [
//       { id: "computation", name: "Smart Suggestions for Saving More Tax" }
//     ]
//   },
//   {
//     category: "",
//     features: [
//       { id: "examination", name: "Review of Last Year's Tax Returns" }
//     ]
//   },
//   {
//     category: "",
//     features: [
//       { id: "data_import", name: "Auto Import from 26AS" }
//     ]
//   },
//   {
//     category: "",
//     features: [
//       { id: "document_assistance", name: "Auto Import from 26AS" }
//     ]
//   },
//   {
//     category: "",
//     features: [
//       { id: "verification", name: "Advanced DIY Support Tools" }
//     ]
//   }
// ];

// const PricingPlans: React.FC<PricingPlansProps> = ({
//   planData,
//   plansData,
//   featureCategories = defaultFeatureCategories
// }) => {
//   const {
//     heading,
//     description,
//     // defaultState,
//     // defaultPlan
//     // statesOptions,
//   } = planData;

//   // const [selectedState, setSelectedState] = useState(defaultState);
//   // const [selectPlan, setSelectPlan] = useState(defaultPlan);
//   const [selectedView, setSelectedView] = useState<number | null>(null);
//   const [showFeatureComparison, setShowFeatureComparison] = useState(true);
//   const [splitPaymentStates, setSplitPaymentStates] = useState<Record<number, boolean>>({});

//   const handleBuy = (plan: PlanColumn) => {
//     console.log("Selected plan ID:", plan.id);

//     // If plan has onSelect function, call it
//     if (plan.onSelect) {
//       plan.onSelect();
//     } else {
//       // Navigate to plan's URL if available
//       if (plan.navigationUrl) {
//         window.location.href = plan.navigationUrl;
//       }
//     }
//   };

//   const toggleView = (id: number | null) => {
//     setSelectedView(id === selectedView ? null : id);
//   };

//   const toggleFeatureComparison = () => {
//     setShowFeatureComparison(!showFeatureComparison);
//   };

//   const toggleSplitPayment = (id: number) => {
//     setSplitPaymentStates(prev => ({
//       ...prev,
//       [id]: !prev[id]
//     }));
//   };

//   const FeatureCheckmark = ({ isAvailable }: { isAvailable: boolean }) => (
//     <div className={`w-4 h-4 rounded-full ${isAvailable ? 'bg-green-500' : 'bg-gray-200'} flex items-center justify-center`}>
//       {isAvailable && (
//         <svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//       )}
//     </div>
//   );

//   const PlanCard = ({ plan, isMobile = false }: { plan: PlanColumn, isMobile?: boolean }) => (
//     <div
//       className={`
//       ${isMobile ? 'p-4' : 'p-6 border border-gray-200 rounded-lg'} 
//       bg-white flex flex-col items-center text-center
//       transition-all duration-300 ease-in-out
//       hover:shadow-lg hover:scale-105 hover:-translate-y-1
//       h-full min-h-70 z-10 relative overflow-hidden
//     `}
//     >
//          <div className="sticky top-0 bg-white pt-4 pb-2 w-full z-20">
//         <div className="w-16 h-16 flex items-center justify-center mb-3 bg-gray-50 rounded-full mx-auto">
//           <Image src={plan.iconSrc} alt={`${plan.title} Icon`} width={30} height={30} />
//         </div>
  
//                <div className="flex flex-col items-center h-18">
//           <h4 className="text-gray-700 text-sm font-medium">{plan.subtitle}</h4>
//           <h3 className="text-gray-900 text-base font-bold mt-1">{plan.title}</h3>
//         </div>
//       </div>
  
     
//       <div className="w-full mt-2 flex flex-col flex-1">
        
//         <div className={`${isMobile ? 'h-auto' : 'h-19'} w-full`}>
//           <p className="text-sm text-gray-600">
//             {!isMobile && plan.description.length > 85
//               ? `${plan.description.substring(0, 85)}...`
//               : plan.description}
//           </p>
//         </div>
  
        
//         <div className="mt-4 mb-2 flex flex-col justify-center">
//           <p className="text-sm text-gray-500">Base Price:</p>
//           <div className="flex items-center justify-center gap-2 mt-1">
//             <p className="text-sm text-gray-400 line-through">{plan.originalPrice}</p>
//             {plan.discount && (
//               <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
//                 {plan.discount}
//               </span>
//             )}
//           </div>
//           <p className="text-xl font-bold text-gray-900 mt-2">{plan.discountedPrice}</p>
//           <p className="text-xs text-gray-500 mt-1">+ Taxes</p>
//         </div>
//         {isMobile && plan.offers && plan.offers.some(offer => offer.isActive) && (
//             <div className="mt-4 w-full bg-blue-50 border border-blue-200 rounded-md p-3 text-left">
//               <h5 className="text-blue-800 font-medium text-sm">
//                 {plan.offers.find(offer => offer.isActive)?.heading}
//               </h5>
//               <p className="text-blue-600 text-xs mt-1">
//                 {plan.offers.find(offer => offer.isActive)?.description}
//               </p>
//             </div>
//           )}
  
//         <div className="w-full mt-auto">
//           <button
//             className={`
//             ${isMobile ? 'mt-6 py-3 text-sm' : 'mt-4 py-2 text-sm'} 
//             w-full text-white bg-[#53c1b1] border-1 hover:text-black hover:bg-[#53c1b1] rounded-md 
//             transition-colors duration-300 font-medium
//           `}
//             onClick={() => handleBuy(plan)}
//           >
//             Buy Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <section className="text-black w-full">
//       {/* Header Section */}
//       <div className="p-[100px] pt-37 pb-71 bg-[#53c1b1] flex flex-col gap-4 relative items-center dark:text-white">
//         <h2 className="text-black text-[48px] font-bold flex flex-col md:flex-row items-center md:gap-2 px-4 text-center">
//           {heading.startText}{" "}
//           <span className="text-blue-500">{heading.blueText}</span>{" "}
//           {heading.endText}
//         </h2>
//         <p className="text-black text-sm md:text-base font-[16px]  text-center px-4 md:mb-4">
//           {description}
//         </p>
//       </div>

//       {/* Plans Container */}
//       <div className="bg-white -mt-6 px-2 md:px-6">
//         <div className="max-w-7xl mx-auto">
//           {/* Desktop View */}
//           <div className="hidden md:block">
//             {/* Plans Header */}
//             <div className="grid grid-cols-7 gap-1">
//               <div className="col-span-1"></div>
//               {plansData.map((plan) => (
//                 <div key={plan.id} className="col-span-1 z-1000">
//                   <PlanCard plan={plan} />
//                 </div>
//               ))}
//             </div>
//             {featureCategories.map((category, catIndex) => (
//               <div key={catIndex}>
              
//                 <div className="grid grid-cols-7 gap-1">
//                   <div className="col-span-1 p-2 bg-gray-50 border-b border-l border-gray-200">
//                     <h4 className="text-xs font-medium text-gray-700">{category.category}</h4>
//                   </div>
             
//                   {plansData.map((plan) => (
//                     <div key={plan.id} className="col-span-1 border-b border-gray-200"></div>
//                   ))}
//                 </div>

//                 {category.features.map((feature, featIndex) => (
//                   <div key={`${catIndex}-${featIndex}`} className="grid grid-cols-7 gap-1">
//                     <div className="col-span-1 p-2 pl-6 bg-white border-b border-l border-gray-200 flex items-center">
//                       <span className="text-xs text-gray-600">{feature.name}</span>
//                     </div>
                    
//                     {plansData.map((plan) => (
//                       <div key={plan.id} className="col-span-1 border-b border-gray-200 flex items-center justify-center p-2">
//                         <FeatureCheckmark isAvailable={plan.features[feature.id]} />
//                       </div>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             ))}


//           </div>

//           <div className="md:hidden">
        
//             <div className="flex overflow-x-auto pb-2 pt-2 scrollbar-hide">
//               {plansData.map((plan) => (
//                 <button
//                   key={plan.id}
//                   onClick={() => toggleView(plan.id)}
//                   className={`flex-shrink-0 px-4 py-2 text-xs font-medium rounded-md mr-2 ${selectedView === plan.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
//                     }`}
//                 >
//                   {plan.title}
//                 </button>
//               ))}
//             </div>


//             <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {(selectedView === null ? plansData : plansData.filter(plan => plan.id === selectedView)).map((plan) => (
//                 <div key={plan.id} className="border border-gray-200 rounded-lg">
//                   <PlanCard plan={plan} isMobile={true} />
//                 </div>
//               ))}
//             </div>

//             <div className="my-4 flex justify-center">
//               <button
//                 onClick={toggleFeatureComparison}
//                 className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm transition-colors duration-300"
//               >
//                 {showFeatureComparison ? "Hide Feature Comparison" : "Show Feature Comparison"}
//               </button>
//             </div>

     
//             {showFeatureComparison && (
//               <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
//                 <div className="bg-gray-50 p-3 border-b border-gray-200">
//                   <h3 className="text-gray-800 font-medium text-sm">Feature Comparison</h3>
//                 </div>

     
//                 {featureCategories.map((category, catIndex) => (
//                   <div key={catIndex} className="border-b border-gray-200 last:border-b-0">
//                     {/* Category Header */}
//                     <div className="bg-gray-50 p-2 border-t border-gray-200">
//                       <h4 className="text-xs font-medium text-gray-700">{category.category}</h4>
//                     </div>

                  
//                     {category.features.map((feature, featIndex) => (
//                       <div key={`${catIndex}-${featIndex}`} className="p-2 pl-4">
//                         <div className="grid grid-cols-6 gap-2 items-center">
//                           <div className="col-span-3 text-xs text-gray-600">{feature.name || category.category}</div>

                        
//                           {plansData.map((plan) => (
//                             <div key={plan.id} className={`col-span-1/2 flex items-center justify-center ${selectedView !== null && plan.id !== selectedView ? 'hidden' : ''}`}>
//                               <div className="text-xs font-medium">{plan.title.substring(0, 3)}</div>
//                               <div className="ml-1">
//                                 <FeatureCheckmark isAvailable={plan.features[feature.id]} />
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingPlans;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Define data structures
interface PlanData {
  heading: {
    startText: string;
    blueText: string;
    endText: string;
  };
  description: string;
  defaultState: string;
  defaultPlan: string;
  
}

interface PlanColumn {
  id: number;
  iconSrc: string;
  title: string;
  subtitle: string;
  description: string;
  originalPrice: string;
  discountedPrice: string;
  discount?: string;
  features: Record<string, boolean>;
  recommendation?: {
    recommended: boolean;
    text: string;
  };
  laterPaid?: {
    amount: string;
    text: string;
    iconInfo?: {
      text: string;
      link: string;
    };
  };
  offers?: {
    imageUrl: string;
    isActive: boolean;
    heading: string;
    subHeading: string;
    description: string;
    knowMore?: {
      text: string;
      link: string;
    };
  }[];
  splitPayment?: {
    enabled: boolean;
    instalments: number;
    instalmentAmount: string;
    text: string;
    knowMore?: {
      text: string;
      link: string;
    };
  };
  onSelect?: () => void;
  navigationUrl?: string;
}

interface FeatureCategory {
  category: string;
  features: {
    id: string;
    name: string;
    tooltip?: string;
  }[];
}

interface PricingPlansProps {
  planData: PlanData;
  plansData: PlanColumn[];
  featureCategories?: FeatureCategory[];
}

// Feature categories definition
const defaultFeatureCategories: FeatureCategory[] = [
  {
    category: "Salaried Income",
    features: [
      { id: "Single Employer", name: "Single Employer" },
      { id: "Multiple Employers", name: "Multiple Employers" }
    ]
  },
  {
    category: "Income from",
    features: [
      { id: "One Residential Property", name: "One Residential Property" },
      { id: "multiple_house", name: "More than one House" }
    ]
  },
  {
    category: "Other Sources ",
    features: [
      { id: "interest_other", name: "(Interest, Dividends, etc.)" }
    ]
  },
  {
    category: "Capital Market Gains",
    features: [
      { id: "capital_gains", name: "(Stocks/Mutual Funds)", tooltip: "info" }
    ]
  },
  {
    category: "",
    features: [
      { id: "presumptive", name: "Crypto & Digital Asset Reporting" }
    ]
  },
  {
    category: "",
    features: [
      { id: "section_44ad", name: "Presumptive Business Income (44AD/44ADA)" }
    ]
  },
  {
    category: "",
    features: [
      { id: "preparation_filing", name: "Effortless Tax Form Fill & E-Submission" }
    ]
  },
  {
    category: "",
    features: [
      { id: "schedule", name: "Foreign Asset Declaration (FA)" }
    ]
  },
  {
    category: "",
    features: [
      { id: "foreign_tax", name: "Foreign Tax Rebate Claim" }
    ]
  },
  {
    category: "",
    features: [
      { id: "form_67", name: "Submission of Form 67" }
    ]
  },
  {
    category: "",
    features: [
      { id: "foreign_income", name: "Income from Global Sources" }
    ]
  },
  {
    category: "",
    features: [
      { id: "non_resident", name: "Non-Resident Tax Status Filing" }
    ]
  },
  {
    category: "",
    features: [
      { id: "computation", name: "Smart Suggestions for Saving More Tax" }
    ]
  },
  {
    category: "",
    features: [
      { id: "examination", name: "Review of Last Year's Tax Returns" }
    ]
  },
  {
    category: "",
    features: [
      { id: "data_import", name: "Auto Import from 26AS" }
    ]
  },
  {
    category: "",
    features: [
      { id: "document_assistance", name: "Auto Import from 26AS" }
    ]
  },
  {
    category: "",
    features: [
      { id: "verification", name: "Advanced DIY Support Tools" }
    ]
  }
];

const PricingPlans: React.FC<PricingPlansProps> = ({
  planData,
  plansData,
  featureCategories = defaultFeatureCategories
}) => {
  const {
    heading,
    description,
    // defaultState,
    // defaultPlan
    // statesOptions,
  } = planData;

  // const [selectedState, setSelectedState] = useState(defaultState);
  // const [selectPlan, setSelectPlan] = useState(defaultPlan);
  const [selectedView, setSelectedView] = useState<number | null>(null);
  const [showFeatureComparison, setShowFeatureComparison] = useState(true);
  const [splitPaymentStates, setSplitPaymentStates] = useState<Record<number, boolean>>({});

  const handleBuy = (plan: PlanColumn) => {
    console.log("Selected plan ID:", plan.id);

    // If plan has onSelect function, call it
    if (plan.onSelect) {
      plan.onSelect();
    } 
    // else {
      // Navigate to plan's URL if available
    //   if (plan.navigationUrl) {
    //     window.location.href = plan.navigationUrl;
    //   }
    // }
  };

  const toggleView = (id: number | null) => {
    setSelectedView(id === selectedView ? null : id);
  };

  const toggleFeatureComparison = () => {
    setShowFeatureComparison(!showFeatureComparison);
  };

  const toggleSplitPayment = (id: number) => {
    setSplitPaymentStates(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Updated checkmark component to match the design in the image
  const FeatureCheckmark = ({ isAvailable }: { isAvailable: boolean }) => (
    <div className="flex items-center justify-center">
      {isAvailable ? (
        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ) : (
        <div className="w-6 h-6 rounded-full border border-gray-200 bg-gray-100"></div>
      )}
    </div>
  );

  const PlanCard = ({ plan, isMobile = false }: { plan: PlanColumn, isMobile?: boolean }) => (
    <div
      className={`
      ${isMobile ? 'p-4' : 'p-6 border border-gray-200 rounded-lg'} 
      bg-white flex flex-col items-center text-center
      transition-all duration-300 ease-in-out
      hover:shadow-lg hover:scale-105 hover:-translate-y-1
      h-full min-h-70 z-10 relative overflow-hidden
    `}
    >
      <div className="sticky top-0 bg-white pt-4 pb-2 w-full z-20">
        <div className="w-16 h-16 flex items-center justify-center mb-3 bg-gray-50 rounded-full mx-auto">
          <Image src={plan.iconSrc} alt={`${plan.title} Icon`} width={30} height={30} />
        </div>
  
        <div className="flex flex-col items-center h-18">
          <h4 className="text-gray-700 text-sm font-medium">{plan.subtitle}</h4>
          <h3 className="text-gray-900 text-base font-bold mt-1">{plan.title}</h3>
        </div>
      </div>
  
     
      <div className="w-full mt-2 flex flex-col flex-1">
        
        <div className={`${isMobile ? 'h-auto' : 'h-19'} w-full`}>
          <p className="text-sm text-gray-600">
            {!isMobile && plan.description.length > 85
              ? `${plan.description.substring(0, 85)}...`
              : plan.description}
          </p>
        </div>
  
        
        <div className="mt-4 mb-2 flex flex-col justify-center">
          <p className="text-sm text-gray-500">Base Price:</p>
          <div className="flex items-center justify-center gap-2 mt-1">
            <p className="text-sm text-gray-400 line-through">{plan.originalPrice}</p>
            {plan.discount && (
              <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
                {plan.discount}
              </span>
            )}
          </div>
          <p className="text-xl font-bold text-gray-900 mt-2">{plan.discountedPrice}</p>
          <p className="text-xs text-gray-500 mt-1">+ Taxes</p>
        </div>
        {isMobile && plan.offers && plan.offers.some(offer => offer.isActive) && (
            <div className="mt-4 w-full bg-blue-50 border border-blue-200 rounded-md p-3 text-left">
              <h5 className="text-blue-800 font-medium text-sm">
                {plan.offers.find(offer => offer.isActive)?.heading}
              </h5>
              <p className="text-blue-600 text-xs mt-1">
                {plan.offers.find(offer => offer.isActive)?.description}
              </p>
            </div>
          )}
  
        <div className="w-full mt-auto">
          <button
            className={`
            ${isMobile ? 'mt-6 py-3 text-sm' : 'mt-4 py-2 text-sm'} 
            w-full text-white bg-[#53c1b1] border-1 hover:text-black hover:bg-[#53c1b1] rounded-md 
            transition-colors duration-300 font-medium
          `}
            onClick={() => handleBuy(plan)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="text-black w-full">
      {/* Header Section */}
      <div className="p-[100px] pt-37 pb-71 bg-[#53c1b1] flex flex-col gap-4 relative items-center dark:text-white">
        <h2 className="text-black text-[48px] font-bold flex flex-col md:flex-row items-center md:gap-2 px-4 text-center">
          {heading.startText}{" "}
          <span className="text-blue-500">{heading.blueText}</span>{" "}
          {heading.endText}
        </h2>
        <p className="text-black text-sm md:text-base font-[16px] text-center px-4 md:mb-4">
          {description}
        </p>
      </div>

      {/* Plans Container */}
      <div className="bg-white -mt-6 px-2 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Desktop View */}
          <div className="hidden md:block">
            {/* Plans Header */}
            <div className="grid grid-cols-7 gap-4">
              <div className="col-span-1"></div>
              {plansData.map((plan) => (
                <div key={plan.id} className="col-span-1 z-10">
                  <PlanCard plan={plan} />
                </div>
              ))}
            </div>
            
            {/* Feature Categories and Features */}
            <div className="mt-8 border border-gray-200 rounded-lg overflow-hidden">
              {featureCategories.map((category, catIndex) => (
                <div key={catIndex} className="border-b border-gray-200 last:border-b-0">
                  {/* Category Header */}
                  {category.category && (
                    <div className="bg-gray-50 p-4 border-b border-gray-200">
                      <h4 className="text-gray-800 font-medium">{category.category}</h4>
                    </div>
                  )}
                  
                  {/* Category Features */}
                  {category.features.map((feature, featIndex) => (
                    <div key={`${catIndex}-${featIndex}`} className="grid grid-cols-7 gap-4 p-4 border-b border-gray-200 last:border-b-0">
                      <div className="col-span-1 flex items-center">
                        <span className="text-gray-700">{feature.name}</span>
                        {feature.tooltip && (
                          <div className="ml-2 text-gray-400 cursor-help">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </div>
                        )}
                      </div>
                      
                      {/* Plan Checkmarks */}
                      {plansData.map((plan) => (
                        <div key={plan.id} className="col-span-1 flex items-center justify-center">
                          <FeatureCheckmark isAvailable={plan.features[feature.id]} />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden">
            {/* Plan Selection Tabs */}
            <div className="flex overflow-x-auto pb-2 pt-2 scrollbar-hide">
              {plansData.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => toggleView(plan.id)}
                  className={`flex-shrink-0 px-4 py-2 text-xs font-medium rounded-md mr-2 ${selectedView === plan.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
                    }`}
                >
                  {plan.title}
                </button>
              ))}
            </div>

            {/* Display Selected or All Plans */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(selectedView === null ? plansData : plansData.filter(plan => plan.id === selectedView)).map((plan) => (
                <div key={plan.id} className="border border-gray-200 rounded-lg">
                  <PlanCard plan={plan} isMobile={true} />
                </div>
              ))}
            </div>

            {/* Feature Comparison Toggle */}
            <div className="my-4 flex justify-center">
              <button
                onClick={toggleFeatureComparison}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm transition-colors duration-300"
              >
                {showFeatureComparison ? "Hide Feature Comparison" : "Show Feature Comparison"}
              </button>
            </div>

            {/* Mobile Feature Comparison */}
            {showFeatureComparison && (
              <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
                <div className="bg-gray-50 p-3 border-b border-gray-200">
                  <h3 className="text-gray-800 font-medium text-sm">Feature Comparison</h3>
                </div>

                {/* Categories */}
                {featureCategories.map((category, catIndex) => (
                  <div key={catIndex} className="border-b border-gray-200 last:border-b-0">
                    {/* Category Header */}
                    {category.category && (
                      <div className="bg-gray-50 p-2 border-t border-gray-200">
                        <h4 className="text-xs font-medium text-gray-700">{category.category}</h4>
                      </div>
                    )}

                    {/* Features */}
                    {category.features.map((feature, featIndex) => (
                      <div key={`${catIndex}-${featIndex}`} className="p-2 pl-4">
                        <div className="grid grid-cols-6 gap-2 items-center">
                          <div className="col-span-3 text-xs text-gray-600">{feature.name}</div>

                          {/* Plan Checkmarks - Mobile */}
                          {plansData.map((plan) => (
                            <div key={plan.id} className={`col-span-1/2 flex items-center justify-center ${selectedView !== null && plan.id !== selectedView ? 'hidden' : ''}`}>
                              <div className="text-xs font-medium mr-1">{plan.title.substring(0, 3)}</div>
                              <FeatureCheckmark isAvailable={plan.features[feature.id]} />
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


//--////////////

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// // Define data structures
// interface PlanData {
//   heading: {
//     startText: string;
//     blueText: string;
//     endText: string;
//   };
//   description: string;
//   defaultState: string;
//   defaultPlan: string;
//   statesOptions: {
//     value: string;
//     label: string;
//   }[];
// }

// interface PlanColumn {
//   id: number;
//   iconSrc: string;
//   title: string;
//   subtitle: string;
//   description: string;
//   originalPrice: string;
//   discountedPrice: string;
//   discount?: string;
//   features: Record<string, boolean>;
//   recommendation?: {
//     recommended: boolean;
//     text: string;
//   };
//   laterPaid?: {
//     amount: string;
//     text: string;
//     iconInfo?: {
//       text: string;
//       link: string;
//     };
//   };
//   offers?: {
//     imageUrl: string;
//     isActive: boolean;
//     heading: string;
//     subHeading: string;
//     description: string;
//     knowMore?: {
//       text: string;
//       link: string;
//     };
//   }[];
//   splitPayment?: {
//     enabled: boolean;
//     instalments: number;
//     instalmentAmount: string;
//     text: string;
//     knowMore?: {
//       text: string;
//       link: string;
//     };
//   };
//   onSelect?: () => void;
//   navigationUrl?: string;
// }

// interface FeatureCategory {
//   category: string;
//   features: {
//     id: string;
//     name: string;
//     tooltip?: string;
//   }[];
// }

// interface PricingPlansProps {
//   planData: PlanData;
//   plansData: PlanColumn[];
//   featureCategories?: FeatureCategory[];
// }

// // Feature categories definition
// const defaultFeatureCategories: FeatureCategory[] = [
//   {
//     category: "Salary Income",
//     features: [
//       { id: "single_employer", name: "1. One employer" },
//       { id: "multiple_employers", name: "2. More than one employer" }
//     ]
//   },
//   {
//     category: "House Property Income",
//     features: [
//       { id: "single_house", name: "1. Single House" },
//       { id: "multiple_house", name: "2. Multiple House" }
//     ]
//   },
//   {
//     category: "Interest & Other Sources Income",
//     features: [
//       { id: "interest_other", name: "(Interest, Dividends, etc.)" }
//     ]
//   },
//   {
//     category: "Capital Gains",
//     features: [
//       { id: "capital_gains", name: "(Stocks/Mutual Funds)", tooltip: "info" }
//     ]
//   },
//   {
//     category: "",
//     features: [
//       { id: "presumptive", name: "Crypto & Digital Asset Reporting" }
//     ]
//   },
//   {
//     category: "",
//     features: [
//       { id: "section_44ad", name: "Presumptive Business Income (44AD/44ADA)" }
//     ]
//   },
//   {
//     category: "",
//     features: [
//       { id: "preparation_filing", name: "Effortless Tax Form Fill & E-Submission" }
//     ]
//   },
//   {
//     category: "",
//     features: [
//       { id: "schedule", name: "Foreign Asset Declaration (FA)" }
//     ]
//   },
//   {
//     category: "",
//     features: [
//       { id: "foreign_tax", name: "Foreign Tax Rebate Claim" }
//     ]
//   },
//   {
//     category: "",
//     features: [
//       { id: "form_67", name: "Submission of Form 67" }
//     ]
//   },
//   {
//     category: "",
//     features: [
//       { id: "foreign_income", name: "Income from Global Sources" }
//     ]
//   },
//   {
//     category: "",
//     features: [
//       { id: "non_resident", name: "Non-Resident Tax Status Filing" }
//     ]
//   },
//   {
//     category: "",
//     features: [
//       { id: "computation", name: "Smart Suggestions for Saving More Tax" }
//     ]
//   },
//   {
//     category: "",
//     features: [
//       { id: "examination", name: "Review of Last Year's Tax Returns" }
//     ]
//   },
//   {
//     category: "",
//     features: [
//       { id: "data_import", name: "Auto Import from 26AS" }
//     ]
//   },
//   {
//     category: "",
//     features: [
//       { id: "document_assistance", name: "Auto Import from 26AS" }
//     ]
//   },
//   {
//     category: "",
//     features: [
//       { id: "verification", name: "Advanced DIY Support Tools" }
//     ]
//   }
// ];

// const PricingPlans: React.FC<PricingPlansProps> = ({
//   planData,
//   plansData,
//   featureCategories = defaultFeatureCategories
// }) => {
//   const {
//     heading,
//     description,
//     // defaultState,
//     // defaultPlan
//     // statesOptions,
//   } = planData;

//   // const [selectedState, setSelectedState] = useState(defaultState);
//   // const [selectPlan, setSelectPlan] = useState(defaultPlan);
//   const [selectedView, setSelectedView] = useState<number | null>(null);
//   const [showFeatureComparison, setShowFeatureComparison] = useState(true);
//   const [splitPaymentStates, setSplitPaymentStates] = useState<Record<number, boolean>>({});

//   const handleBuy = (plan: PlanColumn) => {
//     console.log("Selected plan ID:", plan.id);

//     // If plan has onSelect function, call it
//     if (plan.onSelect) {
//       plan.onSelect();
//     } else {
//       // Navigate to plan's URL if available
//       if (plan.navigationUrl) {
//         window.location.href = plan.navigationUrl;
//       }
//     }
//   };

//   const toggleView = (id: number | null) => {
//     setSelectedView(id === selectedView ? null : id);
//   };

//   const toggleFeatureComparison = () => {
//     setShowFeatureComparison(!showFeatureComparison);
//   };

//   const toggleSplitPayment = (id: number) => {
//     setSplitPaymentStates(prev => ({
//       ...prev,
//       [id]: !prev[id]
//     }));
//   };

//   // Updated checkmark component to match the design in the image
//   const FeatureCheckmark = ({ isAvailable }: { isAvailable: boolean }) => (
//     <div className="flex items-center justify-center">
//       {isAvailable ? (
//         <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
//           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </div>
//       ) : (
//         <div className="w-6 h-6 rounded-full border border-gray-200 bg-gray-100"></div>
//       )}
//     </div>
//   );

//   const PlanCard = ({ plan, isMobile = false }: { plan: PlanColumn, isMobile?: boolean }) => (
//     <div
//       className={`
//       ${isMobile ? 'p-4' : 'p-6 border border-gray-200 rounded-lg'} 
//       bg-white flex flex-col items-center text-center
//       transition-all duration-300 ease-in-out
//       hover:shadow-lg hover:scale-105 hover:-translate-y-1
//       h-full min-h-70 z-10 relative overflow-hidden
//     `}
//     >
//       <div className="sticky top-0 bg-white pt-4 pb-2 w-full z-20">
//         <div className="w-16 h-16 flex items-center justify-center mb-3 bg-gray-50 rounded-full mx-auto">
//           <Image src={plan.iconSrc} alt={`${plan.title} Icon`} width={30} height={30} />
//         </div>
  
//         <div className="flex flex-col items-center h-18">
//           <h4 className="text-gray-700 text-sm font-medium">{plan.subtitle}</h4>
//           <h3 className="text-gray-900 text-base font-bold mt-1">{plan.title}</h3>
//         </div>
//       </div>
  
     
//       <div className="w-full mt-2 flex flex-col flex-1">
        
//         <div className={`${isMobile ? 'h-auto' : 'h-19'} w-full`}>
//           <p className="text-sm text-gray-600">
//             {!isMobile && plan.description.length > 85
//               ? `${plan.description.substring(0, 85)}...`
//               : plan.description}
//           </p>
//         </div>
  
        
//         <div className="mt-4 mb-2 flex flex-col justify-center">
//           <p className="text-sm text-gray-500">Base Price:</p>
//           <div className="flex items-center justify-center gap-2 mt-1">
//             <p className="text-sm text-gray-400 line-through">{plan.originalPrice}</p>
//             {plan.discount && (
//               <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
//                 {plan.discount}
//               </span>
//             )}
//           </div>
//           <p className="text-xl font-bold text-gray-900 mt-2">{plan.discountedPrice}</p>
//           <p className="text-xs text-gray-500 mt-1">+ Taxes</p>
//         </div>
//         {isMobile && plan.offers && plan.offers.some(offer => offer.isActive) && (
//             <div className="mt-4 w-full bg-blue-50 border border-blue-200 rounded-md p-3 text-left">
//               <h5 className="text-blue-800 font-medium text-sm">
//                 {plan.offers.find(offer => offer.isActive)?.heading}
//               </h5>
//               <p className="text-blue-600 text-xs mt-1">
//                 {plan.offers.find(offer => offer.isActive)?.description}
//               </p>
//             </div>
//           )}
  
//         <div className="w-full mt-auto">
//           <button
//             className={`
//             ${isMobile ? 'mt-6 py-3 text-sm' : 'mt-4 py-2 text-sm'} 
//             w-full text-white bg-[#53c1b1] border-1 hover:text-black hover:bg-[#53c1b1] rounded-md 
//             transition-colors duration-300 font-medium
//           `}
//             onClick={() => handleBuy(plan)}
//           >
//             Buy Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <section className="text-black w-full">
//       {/* Header Section */}
//       <div className="p-[100px] pt-37 pb-71 bg-[#53c1b1] flex flex-col gap-4 relative items-center dark:text-white">
//         <h2 className="text-black text-[48px] font-bold flex flex-col md:flex-row items-center md:gap-2 px-4 text-center">
//           {heading.startText}{" "}
//           <span className="text-blue-500">{heading.blueText}</span>{" "}
//           {heading.endText}
//         </h2>
//         <p className="text-black text-sm md:text-base font-[16px] text-center px-4 md:mb-4">
//           {description}
//         </p>
//       </div>

//       {/* Plans Container */}
//       <div className="bg-white -mt-6 px-2 md:px-6">
//         <div className="max-w-7xl mx-auto">
//           {/* Desktop View */}
//           <div className="hidden md:block">
//             {/* Plans Header */}
//             <div className="grid grid-cols-7 gap-4">
//               <div className="col-span-1"></div>
//               {plansData.map((plan) => (
//                 <div key={plan.id} className="col-span-1 z-10">
//                   <PlanCard plan={plan} />
//                 </div>
//               ))}
//             </div>
            
//             {/* Feature Categories and Features */}
//             <div className="mt-8 border border-gray-200 rounded-lg overflow-hidden">
//               {featureCategories.map((category, catIndex) => {
//                 // Check if this category should have grouped features
//                 // const hasGroupedFeatures = 
//                 //   category.category === "Salary Income" || 
//                 //   category.category === "House Property Income";
                
//                 return (
//                   <div key={catIndex} className="border-b border-gray-200 last:border-b-0">
//                     {/* Category Header */}
//                     {category.category && (
//                       <div className="bg-gray-50 p-4 border-b border-gray-200">
//                         <h4 className="text-gray-800 font-medium">{category.category}</h4>
//                       </div>
//                     )}
                    
//                     {
//                     // hasGroupedFeatures ? (
//                     //   // Grouped features display
//                     //   <div className="grid grid-cols-7 gap-4 p-4">
//                     //     <div className="col-span-1">
//                     //       {category.features.map((feature, featIndex) => (
//                     //         <div key={`${catIndex}-${featIndex}`} className="mb-4 last:mb-0">
//                     //           <span className="text-gray-700">{feature.name}</span>
//                     //         </div>
//                     //       ))}
//                     //     </div>
                        
//                     //     {/* Plan Checkmarks in columns */}
//                     //     {plansData.map((plan) => (
//                     //       <div key={plan.id} className="col-span-1">
//                     //         {category.features.map((feature, featIndex) => (
//                     //           <div key={`${plan.id}-${feature.id}`} className="flex items-center justify-center mb-4 last:mb-0">
//                     //             <FeatureCheckmark isAvailable={plan.features[feature.id]} />
//                     //           </div>
//                     //         ))}
//                     //       </div>
//                     //     ))}
//                     //   </div>
//                     // ) : (
//                       // Standard feature display
//                       category.features.map((feature, featIndex) => (
//                         <div key={`${catIndex}-${featIndex}`} className="grid grid-cols-7 gap-4 p-4 border-b border-gray-200 last:border-b-0">
//                           <div className="col-span-1 flex items-center">
//                             <span className="text-gray-700">{feature.name}</span>
//                             {feature.tooltip && (
//                               <div className="ml-2 text-gray-400 cursor-help">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                   <circle cx="12" cy="12" r="10"></circle>
//                                   <path d="M12 16v-4"></path>
//                                   <path d="M12 8h.01"></path>
//                                 </svg>
//                               </div>
//                             )}
//                           </div>
                          
//                           {/* Plan Checkmarks */}
//                           {plansData.map((plan) => (
//                             <div key={plan.id} className="col-span-1 flex items-center justify-center">
//                               <FeatureCheckmark isAvailable={plan.features[feature.id]} />
//                             </div>
//                           ))}
//                         </div>
//                       ))
//                     // )
//                     }
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Mobile View */}
//           <div className="md:hidden">
//             {/* Plan Selection Tabs */}
//             <div className="flex overflow-x-auto pb-2 pt-2 scrollbar-hide">
//               {plansData.map((plan) => (
//                 <button
//                   key={plan.id}
//                   onClick={() => toggleView(plan.id)}
//                   className={`flex-shrink-0 px-4 py-2 text-xs font-medium rounded-md mr-2 ${
//                     selectedView === plan.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
//                   }`}
//                 >
//                   {plan.title}
//                 </button>
//               ))}
//             </div>

//             {/* Display Selected or All Plans */}
//             <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {(selectedView === null ? plansData : plansData.filter(plan => plan.id === selectedView)).map((plan) => (
//                 <div key={plan.id} className="border border-gray-200 rounded-lg">
//                   <PlanCard plan={plan} isMobile={true} />
//                 </div>
//               ))}
//             </div>

//             {/* Feature Comparison Toggle */}
//             <div className="my-4 flex justify-center">
//               <button
//                 onClick={toggleFeatureComparison}
//                 className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm transition-colors duration-300"
//               >
//                 {showFeatureComparison ? "Hide Feature Comparison" : "Show Feature Comparison"}
//               </button>
//             </div>

//             {/* Mobile Feature Comparison */}
//             {showFeatureComparison && (
//               <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
//                 <div className="bg-gray-50 p-3 border-b border-gray-200">
//                   <h3 className="text-gray-800 font-medium text-sm">Feature Comparison</h3>
//                 </div>

//                 {/* Categories */}
//                 {featureCategories.map((category, catIndex) => {
//                   // Check if this category should have grouped features
//                   const hasGroupedFeatures = 
//                     category.category === "Salary Income" || 
//                     category.category === "House Property Income";
                  
//                   return (
//                     <div key={catIndex} className="border-b border-gray-200 last:border-b-0">
//                       {/* Category Header */}
//                       {category.category && (
//                         <div className="bg-gray-50 p-2 border-t border-gray-200">
//                           <h4 className="text-xs font-medium text-gray-700">{category.category}</h4>
//                         </div>
//                       )}

//                       {/* Features */}
//                       <div className="p-2 pl-4">
//                         {category.features.map((feature, featIndex) => (
//                           <div key={`${catIndex}-${featIndex}`} className="grid grid-cols-6 gap-2 items-center mb-2 last:mb-0">
//                             <div className="col-span-3 text-xs text-gray-600">{feature.name}</div>

//                             {/* Plan Checkmarks - Mobile */}
//                             {plansData.map((plan) => (
//                               <div key={plan.id} className={`col-span-1/2 flex items-center justify-center ${
//                                 selectedView !== null && plan.id !== selectedView ? 'hidden' : ''
//                               }`}>
//                                 <div className="text-xs font-medium mr-1">{plan.title.substring(0, 3)}</div>
//                                 <FeatureCheckmark isAvailable={plan.features[feature.id]} />
//                               </div>
//                             ))}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingPlans;
