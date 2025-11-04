
//--------------------------- this code accept page propes



// "use client"

// import { Check } from "phosphor-react"
// import { useEffect, useState } from "react"
// import { PiSealPercent } from "react-icons/pi"
// import { addToCart } from "@/store/store"
// import { useRouter } from "next/navigation"
// import { useDispatch } from "react-redux"
// import productImage from "../../images/recent_post_img1.png"
// import PackageLoading from "./PackageLoading"

// // interface PackageData {
// //   id: string
// //   planName: string
// //   Status: string
// //   Description: string
// //   Price: number
// //   PriceAfterDiscount: number
// //   instalments: string
// //   Features: string
// //   Page: string
// //   offers?: OfferData[]
// //   navigationUrl?: string
// //   onSelect?: () => void
// // }

// export interface PackageData {
//   id: string
//   planName: string
//   Status: string
//   Description: string
//   Price: number
//   PriceAfterDiscount: number
//   instalments: string
//   Features: string
//   page: string
//   offers: OfferData[]
//   navigationUrl?: string
//   onSelect?: () => void
//   actionType?: string
//   customPlanId?: string
//   customPlanName?: string
//   customPrice?: string
//   enableSelectButton?: boolean
//   selectButtonText?: string
// }


// interface OfferData {
//   id: string
//   planId: string
//   title: string
//   description: string
//   discountPercentage: number
//   validUntil: string
//   isActive: boolean
//   offerPrice?: number
// }

// interface planData {
//   heading: {
//     startText: string
//     blueText: string
//     endText: string
//   }
//   description: string
//   plansData: {
//     id: number
//     state: string
//     description: string
//     plans: {
//       planName: string
//       description: string
//       isActive: boolean
//       suggestionText?: string
//       happyText?: string
//       note?: {
//         heading: string
//         description: string
//       }
//       plan: {
//         id: string
//         price?: string
//         discount?: string
//         afterDiscount: string
//         laterPaid: {
//           amount: string
//           text: string
//           iconInfo: {
//             text: string
//             link: string
//           }
//         }
//         offers: {
//           imageUrl: string
//           isActive: boolean
//           heading: string
//           subHeading: string
//           description: string
//           knowMore: {
//             text: string
//             link: string
//           }
//         }[]
//         splitPayment: {
//           enabled: boolean
//           instalments: number
//           instalmentAmount: string
//           text: string
//           knowMore: {
//             text: string
//             link: string
//           }
//         }
//       }
//       features: {
//         heading: string[]
//         feature: string[]
//       }
//       recommendation: {
//         recommended: boolean
//         text: string
//       }
//     }[]
//   }[]
//   defaultState: string
//   defaultPlan: string
// }

// // Updated component props interface
// interface PlansSectionProps {
//   planData: planData
//   page?: string // Add optional page prop
// }

// const planData = {
//   heading: {
//     startText: "",
//     blueText: "Right plan",
//     endText: "for Your Business",
//   },
//   description: "Ensurekar incorporation experts register over 1500 companies every month.",

//   defaultState: "MP",
//   defaultPlan: "Standard",
// }

// // Updated component signature to accept page prop
// const PlansSection = ({ planData, page }: PlansSectionProps) => {   // page = "page1" also use default value if not provided
//   const { heading, description, defaultState, defaultPlan } = planData

//   const dispatch = useDispatch()
//   const router = useRouter()
//   const [isLoading, setIsLoading] = useState(true)
//   const [selectedState, setSelectedState] = useState(defaultState)
//   const [selectPlan, setSelectPlane] = useState(defaultPlan)

//   const handlePlanSelection = (planId: string, planName: string, price: string) => {
//     const userInfo = JSON.parse(localStorage.getItem("userInfo") || "null")
//     console.log("User Info:", userInfo)

//     const numericPrice = Number.parseFloat(price.replace(/[₹,]/g, ""))

//     const selectedPlan = {
//       id: `income-tax-plan-${planId}`,
//       name: `Income Tax Return Filing - ${planName}`,
//       price: numericPrice,
//       quantity: 1,
//       subtotal: numericPrice,
//       image: productImage,
//     }

//     dispatch(addToCart(selectedPlan))

//     if (userInfo && userInfo.email) {
//       router.push("/cart")
//     } else {
//       console.log("User is not logged in. Redirecting to login page.")
//       localStorage.setItem("redirectAfterLogin", "/cart")
//       router.push("/Login")
//     }
//   }

//   const WC_API_CONFIG = {
//     baseUrl: "https://edueye.co.in/ensurekar/wp-json/wc/v3",
//     consumerKey: "ck_1a163a1d803b2ed9c2c501a232692bd5ee3c2619",
//     consumerSecret: "cs_054aea9c8f7ddeef9b7ceb5fc45c56cd422ba4a2",
//   }

//   const mapFromProduct = (product: any): PackageData => {
//     const getMetaValue = (key: string) => {
//       const meta = product.meta_data?.find((m: any) => m.key === key)
//       return meta ? meta.value : ""
//     }

//     let offers: OfferData[] = []

//     try {
//       const offersData = getMetaValue("_plan_offers")
//       offers = offersData ? JSON.parse(offersData) : []
//     } catch (error) {
//       console.error("Error parsing offers data:", error)
//       offers = []
//     }

//     // const packageData: PackageData = {
//     //   id: product.id.toString(),
//     //   planName: product.name || "",
//     //   Status: product.status === "publish" ? "Active" : "Inactive",
//     //   Description: product.description || product.short_description || "",
//     //   Price: Number.parseFloat(product.regular_price) || 0,
//     //   PriceAfterDiscount: Number.parseFloat(product.sale_price) || Number.parseFloat(product.regular_price) || 0,
//     //   instalments: getMetaValue("_plan_installments") || "",
//     //   Features: getMetaValue("_plan_features") || "",
//     //   Page: getMetaValue("_plan_page") || product.categories?.[0]?.name || "",
//     //   offers: offers,
//     //   navigationUrl: "/cart",
//     // }
//     // const packageData: PackageData = {
//     //   id: product.id.toString(),
//     //   planName: product.name || "",
//     //   Status: product.status === "publish" ? "Active" : "Inactive",
//     //   Description: product.description || product.short_description || "",
//     //   Price: parseFloat(product.regular_price) || 0,
//     //   PriceAfterDiscount: parseFloat(product.sale_price) || parseFloat(product.regular_price) || 0,
//     //   instalments: getMetaValue("_plan_installments") || "",
//     //   Features: getMetaValue("_plan_features") || "",
//     //   page: getMetaValue("_plan_page") || product.categories?.[0]?.name || "",
//     //   offers: offers || [],
//     //   navigationUrl: "/cart",
//     //   actionType: getMetaValue("_plan_action_type") || "both",
//     //   customPlanId: getMetaValue("_plan_custom_id") || "",
//     //   customPlanName: getMetaValue("_plan_custom_name") || "",
//     //   customPrice: getMetaValue("_plan_custom_price") || "",
//     //   enableSelectButton: getMetaValue("_plan_enable_select_button") === "true",
//     //   selectButtonText: getMetaValue("_plan_select_button_text") || "Select Plan",
//     //   onSelect: undefined // Assign a function if needed
//     // }
//     const packageData: PackageData = {
//       id: product.id.toString(),
//       planName: product.name || "",
//       Status: product.status === "publish" ? "Active" : "Inactive",
//       Description: product.description || product.short_description || "",
//       Price: parseFloat(product.regular_price) || 0,
//       PriceAfterDiscount: parseFloat(product.sale_price) || parseFloat(product.regular_price) || 0,
//       instalments: getMetaValue("_plan_installments") || "",
//       Features: getMetaValue("_plan_features") || "",
//       page: getMetaValue("_plan_page") || product.categories?.[0]?.name || "",
//       offers: offers || [],
//       navigationUrl: "/cart",
//       actionType: getMetaValue("_plan_action_type") || "both",
//       customPlanId: getMetaValue("_plan_custom_id") || "",
//       customPlanName: getMetaValue("_plan_custom_name") || "",
//       customPrice: getMetaValue("_plan_custom_price") || "",
//       enableSelectButton: getMetaValue("_plan_enable_select_button") === "true",
//       selectButtonText: getMetaValue("_plan_select_button_text") || "Select Plan",
//       onSelect: undefined, // Assign a function if needed
//     }


//     packageData.onSelect = () =>{
//         console.log("Selected Package Data:", packageData)  
//         handlePlanSelection(packageData.id, packageData.planName, `₹${packageData.customPrice}`)
//     }

//     return packageData
//   }

//   const [gotPlansData, setGotPlansData] = useState<PackageData[]>([])

//   useEffect(() => {
//     const fetchPlans = async () => {
//       setIsLoading(true)
//       try {
//         const url = `${WC_API_CONFIG.baseUrl}/products?consumer_key=${WC_API_CONFIG.consumerKey}&consumer_secret=${WC_API_CONFIG.consumerSecret}&per_page=100`
//         const response = await fetch(url, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         })

//         if (!response.ok) {
//           throw new Error(`Failed to fetch plans: ${response.status}`)
//         }

//         const products = await response.json()
//         console.log("Fetching plans from:", products)

//         const mappedPlans = products.map(mapFromProduct)
//         // Updated filter to use the page prop instead of hardcoded "page1"
//         const filterdata = mappedPlans.filter((product: any) => product.Page === page)

//         console.log("Fetched plans:", filterdata)
//         setGotPlansData(filterdata)
//       } catch (error) {
//         console.error("Failed to fetch plans:", error)
//         alert("Failed to fetch plans. Please check your API credentials and try again.")
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     fetchPlans()
//   }, [page]) // Add page to dependency array

//   console.log("plans", gotPlansData)

//   const handleBuy = async (plan: any) => {
//     console.log("Selected Plan:", plan)
//     if (plan.onSelect) {
//       plan.onSelect()
//     } else {
//       console.log(plan)
//     }
//   }

//   console.log("gotPlansData", gotPlansData)

//   const handleStateChange = (selectedOption: any) => {
//     setSelectedState(selectedOption.value)
//   }

//   const handlePlanChange = (planName: string) => {
//     setSelectPlane(planName)
//   }

//   // Show loading component while data is being fetched
//   if (isLoading) {
//     return <PackageLoading />
//   }

//   return (
//     <section className="bg-[#F8FBFF] ">
//       <div id="pricing-package" className="md:pt-[80px] py-[52px] ">
//         <div className="p-4 flex flex-col gap-[16px] relative items-center">
//           <p className="text-black text-[24px] md:text-[34px] font-bold flex max-md:flex-col max-md:items-center md:gap-2 leading-normal">
//             {heading.startText} <span className="text-[#007AFF]">{heading.blueText}</span> {heading.endText}
//           </p>
//           <p className="text-[#606162] text-[14px] md:text-[16px] font-normal max-md:text-center md:mb-4">
//             {description}
//           </p>
//         </div>
//       </div>

//       {/* Plan Section */}
//       <div className=" max-md:flex flex max-md:flex-col flex-wrap md:flex max-md:gap-[16px]  items-start justify-around">
//         <div className="flex md:hidden justify-between items-center mx-auto  ">
//           {gotPlansData.map((plan) => (
//             <p
//               className={`text-[16px] px-4 py-1 text-[#8095A7] font-medium ${
//                 plan.planName === selectPlan ? "border-b-2 border-[#022B50] font-semibold" : ""
//               }`}
//               key={plan.id}
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
//               <p className="text-[24px] font-semibold text-[#171717]">{plan.planName}</p>

//               <p className="text-[16px]  md:h-[48px] font-normal group-hover:text-black duration-500 text-[#606162]">
//                 {plan.instalments}
//               </p>

//               {plan.Description && (
//                 <div className="flex flex-col mb-1">
//                   <p className="text-[14px] text-[#606162]">{/* {plan.Description} */}</p>
//                 </div>
//               )}

//               <div className="flex gap-3 items-center">
//                 <div className="relative w-fit">
//                   <p className="text-[12px] md:text-[16px] group-hover:text-gray-600 font-medium">{plan.Price}</p>
//                   <div className="border-b-[1px] translate-y-[-40%] md:top-[11px] rotate-[-16deg] border-[#E83E3E] w-full absolute top-[9px]"></div>
//                 </div>

//                 {plan.PriceAfterDiscount && (
//                   <div className="flex w-fit gap-[4px] bg-[#ECF8EB] rounded-lg px-[8px] p-2">
//                     <PiSealPercent size={14} color="#2cdb14" />
//                     <p className="text-[10px] text-[#3EB837]">
//                       {(((plan.Price - plan.PriceAfterDiscount) / plan.Price) * 100).toFixed(2)} % off
//                     </p>
//                   </div>
//                 )}
//               </div>

//               <div className="md:min-h-[95px]">
//                 <div className="flex gap-4 items-end">
//                   <p className="text-[32px] md:text-[46px] font-semibold text-[#171717]">{plan.PriceAfterDiscount}</p>
//                 </div>

//                 {(plan.Description || plan.Description) && (
//                   <div className="flex flex-row pb-[16px] items-center ">
//                     <p className="text-[18px] text-[#8095A7] group-hover:text-gray-700 duration-500 font-medium">
//                       {plan.Description.replace(/<[^>]*>/g, "")}
//                     </p>
//                   </div>
//                 )}

//                 <div className=" flex flex-col">
//                   {plan.offers?.map(
//                     (offer) =>
//                       offer.isActive && (
//                         <div
//                           key={offer.id}
//                           className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
//                         >
//                           <div className="flex flex-col gap-2 border px-6 py-8 bg-gradient-to-r from-blue-500 to-blue-300 ">
//                             <div>
//                               <h3 className="text-xl text-start font-extrabold text-white">{offer.title}</h3>
//                               <h3 className="text-start  font-extrabold text-white">{offer.description}</h3>
//                               <p className="text-[16px] text-green group-hover:text-gray-700 duration-500">
//                                 Discount: {offer.discountPercentage}%
//                               </p>
//                               <p>{offer.validUntil}</p>
//                               <p>{offer.offerPrice}</p>
//                             </div>
//                           </div>
//                         </div>
//                       ),
//                   )}
//                 </div>

//                 <div className="col-span-12 md:col-span-6  md:my- flex justify-center items-center">
//                   <div className="w-full">
//                     <div className="grid grid-cols-1 mt-4 ">
//                       <div className="col-span-2">
//                         <button
//                           className="py-2.5  bg-yellow-400 border  rounded  block text-center   hover:border-mainTextColo group-hover:border-black font-bold duration-500 w-full text-slate-800"
//                           onClick={() => handleBuy(plan)}
//                         >
//                           Releasing Shortly
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex flex-col gap-2">
//                   {plan.Features && (
//                     <p key={plan.Features} className="text-[16px] font-semibold mt-4 text-[#171717]">
//                       What you will get
//                     </p>
//                   )}

//                   {plan.Features.split(",").map((feature, index) => (
//                     <div key={index} className="flex gap-1 items-center justify-start">
//                       <div className="w-[25px] h-[25px] items-center flex">
//                         <Check color="#2cdb14" size={23} weight="bold" />
//                       </div>
//                       <p className="text-[14px] text-[#606162] group-hover:text-gray-700 duration-500">
//                         {feature.trim()}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default PlansSection



"use client"

import { Check } from "phosphor-react"
import { useEffect, useState } from "react"
import { PiSealPercent } from "react-icons/pi"
import { addToCart } from "@/store/store"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import productImage from "../../images/recent_post_img1.png"
import PackageLoading from "./PackageLoading"

export interface PackageData {
  id: string
  planName: string
  Status: string
  Description: string
  Price: number
  PriceAfterDiscount: number
  instalments: string
  Features: string
  page: string
  offers: OfferData[]
  navigationUrl?: string
  onSelect?: () => void
  actionType?: string
  customPlanId?: string
  customPlanName?: string
  customPrice?: string
  enableSelectButton?: boolean
  selectButtonText?: string
}

interface OfferData {
  id: string
  planId: string
  title: string
  description: string
  discountPercentage: number
  validUntil: string
  isActive: boolean
  offerPrice?: number
}

interface planData {
  heading: {
    startText: string
    blueText: string
    endText: string
  }
  description: string
  plansData: {
    id: number
    state: string
    description: string
    plans: {
      planName: string
      description: string
      isActive: boolean
      suggestionText?: string
      happyText?: string
      note?: {
        heading: string
        description: string
      }
      plan: {
        id: string
        price?: string
        discount?: string
        afterDiscount: string
        laterPaid: {
          amount: string
          text: string
          iconInfo: {
            text: string
            link: string
          }
        }
        offers: {
          imageUrl: string
          isActive: boolean
          heading: string
          subHeading: string
          description: string
          knowMore: {
            text: string
            link: string
          }
        }[]
        splitPayment: {
          enabled: boolean
          instalments: number
          instalmentAmount: string
          text: string
          knowMore: {
            text: string
            link: string
          }
        }
      }
      features: {
        heading: string[]
        feature: string[]
      }
      recommendation: {
        recommended: boolean
        text: string
      }
    }[]
  }[]
  defaultState: string
  defaultPlan: string
}

interface PlansSectionProps {
  planData: planData
  page?: string
}

// Default plan data
const defaultPlanData: planData = {
  heading: {
    startText: "",
    blueText: "Right plan",
    endText: "for Your Business",
  },
  description: "Ensurekar incorporation experts register over 1500 companies every month.",
  plansData: [],
  defaultState: "MP",
  defaultPlan: "Standard",
}

const PlansSection = ({ planData = defaultPlanData, page = "page1" }: PlansSectionProps) => {
  const { heading, description, defaultState, defaultPlan } = planData

  const dispatch = useDispatch()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [selectedState, setSelectedState] = useState(defaultState)
  const [selectPlan, setSelectPlane] = useState(defaultPlan)
  const [gotPlansData, setGotPlansData] = useState<PackageData[]>([])

  // const WC_API_CONFIG = {
  //   baseUrl: "https://edueye.co.in/ensurekar/wp-json/wc/v3",
  //   consumerKey: "ck_1a163a1d803b2ed9c2c501a232692bd5ee3c2619",
  //   consumerSecret: "cs_054aea9c8f7ddeef9b7ceb5fc45c56cd422ba4a2",
  // }

  const handlePlanSelection = (planId: string, planName: string, price: string) => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo") || "null")
      console.log("User Info:", userInfo)

      const numericPrice = parseFloat(price.replace(/[₹,]/g, ""))

      const selectedPlan = {
        id: `income-tax-plan-${planId}`,
        name: `Income Tax Return Filing - ${planName}`,
        price: numericPrice,
        quantity: 1,
        subtotal: numericPrice,
        image: productImage,
      }

      dispatch(addToCart(selectedPlan))

      if (userInfo && userInfo.email) {
        router.push("/cart")
      } else {
        console.log("User is not logged in. Redirecting to login page.")
        localStorage.setItem("redirectAfterLogin", "/cart")
        router.push("/Login")
      }
    } catch (error) {
      console.error("Error handling plan selection:", error)
    }
  }

  const mapFromProduct = (product: any): PackageData => {
    const getMetaValue = (key: string) => {
      const meta = product.meta_data?.find((m: any) => m.key === key)
      return meta ? meta.value : ""
    }

    let offers: OfferData[] = []

    try {
      const offersData = getMetaValue("_plan_offers")
      offers = offersData ? JSON.parse(offersData) : []
    } catch (error) {
      console.error("Error parsing offers data:", error)
      offers = []
    }

    const packageData: PackageData = {
      id: product.id.toString(),
      planName: product.name || "",
      Status: product.status === "publish" ? "Active" : "Inactive",
      Description: product.description || product.short_description || "",
      Price: parseFloat(product.regular_price) || 0,
      PriceAfterDiscount: parseFloat(product.sale_price) || parseFloat(product.regular_price) || 0,
      instalments: getMetaValue("_plan_installments") || "",
      Features: getMetaValue("_plan_features") || "",
      page: getMetaValue("_plan_page") || product.categories?.[0]?.name || "",
      offers: offers || [],
      navigationUrl: "/cart",
      actionType: getMetaValue("_plan_action_type") || "both",
      customPlanId: getMetaValue("_plan_custom_id") || "",
      customPlanName: getMetaValue("_plan_custom_name") || "",
      customPrice: getMetaValue("_plan_custom_price") || "",
      enableSelectButton: getMetaValue("_plan_enable_select_button") === "true",
      selectButtonText: getMetaValue("_plan_select_button_text") || "Select Plan",
    }

    packageData.onSelect = () => {
      console.log("Selected Package Data:", packageData)
      const priceToUse = packageData.customPrice || packageData.PriceAfterDiscount.toString()
      handlePlanSelection(packageData.id, packageData.planName, `₹${packageData.customPrice}`)
    }

    return packageData
  }

  useEffect(() => {
    const fetchPlans = async () => {
      setIsLoading(true)
      try {
        // Fetch from Next.js API route (which proxies to package.php) with page parameter
        const packageUrl = `/api/package?page=${encodeURIComponent(page)}`
        const packageResponse = await fetch(packageUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })

        if (!packageResponse.ok) {
          throw new Error(`Failed to fetch from package API: ${packageResponse.status}`)
        }

        const apiData = await packageResponse.json()
        console.log("Fetched plans from package.php:", apiData)
        
        // Map API response to PackageData format
        const mappedPlans: PackageData[] = apiData
          .filter((item: any) => item.recordType === "package" && item.page === page) // Filter by page and package type
          .map((item: any) => {
            // Find offers related to this package
            const packageOffers = apiData.filter(
              (offer: any) => offer.recordType === "offer" && offer.parentPackageId === item.id && offer.isOfferActive === "1"
            )

            // Transform offers to OfferData format
            const offers: OfferData[] = packageOffers.map((offer: any) => ({
              id: offer.id.toString(),
              planId: offer.parentPackageId?.toString() || item.id.toString(),
              title: offer.offerTitle || "",
              description: offer.offerDescription || "",
              discountPercentage: parseFloat(offer.discountPercentage) || 0,
              validUntil: offer.validUntil || "",
              isActive: offer.isOfferActive === "1" || offer.isOfferActive === 1,
              offerPrice: parseFloat(offer.offerPrice) || undefined,
            }))

            // If no offers from separate records, check if package has offer fields
            if (offers.length === 0 && item.isOfferActive === "1" && item.offerTitle) {
              offers.push({
                id: `offer-${item.id}`,
                planId: item.id.toString(),
                title: item.offerTitle || "",
                description: item.offerDescription || "",
                discountPercentage: parseFloat(item.discountPercentage) || 0,
                validUntil: item.validUntil || "",
                isActive: true,
                offerPrice: parseFloat(item.offerPrice) || undefined,
              })
            }

            const packageData: PackageData = {
              id: item.id.toString(),
              planName: item.planName || "",
              Status: item.Status || "Inactive",
              Description: item.Description || "",
              Price: parseFloat(item.Price) || 0,
              PriceAfterDiscount: parseFloat(item.PriceAfterDiscount) || parseFloat(item.Price) || 0,
              instalments: item.instalments || "",
              Features: item.Features || "",
              page: item.page || "",
              offers: offers,
              navigationUrl: item.navigationUrl || "/cart",
              actionType: item.actionType || "both",
              customPlanId: item.customPlanId || "",
              customPlanName: item.customPlanName || "",
              customPrice: item.customPrice || "",
              enableSelectButton: item.enableSelectButton === "1" || item.enableSelectButton === 1,
              selectButtonText: item.selectButtonText || "Select Plan",
            }

            // Set up onSelect handler
            packageData.onSelect = () => {
              console.log("Selected Package Data:", packageData)
              const priceToUse = packageData.customPrice || packageData.PriceAfterDiscount.toString()
              handlePlanSelection(packageData.id, packageData.planName, `₹${priceToUse}`)
            }

            return packageData
          })

        console.log("Mapped plans:", mappedPlans)
        setGotPlansData(mappedPlans)
        
        // Set first plan as selected if no plan is selected and plans exist
        if (mappedPlans.length > 0 && !mappedPlans.some((plan: PackageData) => plan.planName === selectPlan)) {
          setSelectPlane(mappedPlans[0].planName)
        }
      } catch (error) {
        console.error("Failed to fetch plans:", error)
        alert("Failed to fetch plans. Please check your API credentials and try again.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchPlans()
  }, [page])

  const handleBuy = (plan: PackageData) => {
    console.log("Selected Plan:", plan)
    if (plan.onSelect) {
      plan.onSelect()
    } else {
      console.log("No onSelect handler for plan:", plan)
    }
  }

  const handleStateChange = (selectedOption: any) => {
    setSelectedState(selectedOption.value)
  }

  const handlePlanChange = (planName: string) => {
    setSelectPlane(planName)
  }

  // Show loading component while data is being fetched
  if (isLoading) {
    return <PackageLoading />
  }

  return (
    <section className="bg-[#F8FBFF]">
      <div id="pricing-package" className="md:pt-[80px] py-[52px]">
        <div className="p-4 flex flex-col gap-[16px] relative items-center">
          <p className="text-black text-[24px] md:text-[34px] font-bold flex max-md:flex-col max-md:items-center md:gap-2 leading-normal">
            {heading.startText} <span className="text-[#007AFF]">{heading.blueText}</span> {heading.endText}
          </p>
          <p className="text-[#606162] text-[14px] md:text-[16px] font-normal max-md:text-center md:mb-4">
            {description}
          </p>
        </div>
      </div>

      {/* Plan Section */}
      <div className="max-md:flex flex max-md:flex-col flex-wrap md:flex max-md:gap-[16px] items-start justify-around">
        {/* Mobile plan selector */}
        <div className="flex md:hidden justify-between items-center mx-auto">
          {gotPlansData.map((plan) => (
            <p
              className={`text-[16px] px-4 py-1 text-[#8095A7] font-medium cursor-pointer ${
                plan.planName === selectPlan ? "border-b-2 border-[#022B50] font-semibold" : ""
              }`}
              key={plan.id}
              onClick={() => handlePlanChange(plan.planName)}
            >
              {plan.planName}
            </p>
          ))}
        </div>

        <div className="flex justify-center items-start flex-wrap mx-auto">
          {gotPlansData.map((plan) => (
            <div
              key={plan.id}
              className={`p-4 flex m-3 group relative flex-col gap-[10px] mx-4 md:w-[460px] my-[25px] md:mt-0 hover:bg-yellow-400 hover:border-[#007AFF] border-[1px] rounded-md shadow-[0px_0px_10px_rgba(104,104,104,0.08)] cursor-pointer transition delay-150 duration-500 ${
                plan.planName === selectPlan ? "md:block" : "max-md:hidden md:block"
              }`}
            >
              <p className="text-[24px] font-semibold text-[#171717]">{plan.planName}</p>

              <p className="text-[16px] md:h-[48px] font-normal group-hover:text-black duration-500 text-[#606162]">
                {plan.instalments}
              </p>

              {plan.Description && (
                <div className="flex flex-col mb-1">
                  <p className="text-[14px] text-[#606162]"></p>
                </div>
              )}

              <div className="flex gap-3 items-center">
                <div className="relative w-fit">
                  <p className="text-[12px] md:text-[16px] group-hover:text-gray-600 font-medium">₹{plan.Price}</p>
                  <div className="border-b-[1px] translate-y-[-40%] md:top-[11px] rotate-[-16deg] border-[#E83E3E] w-full absolute top-[9px]"></div>
                </div>

                {plan.PriceAfterDiscount && plan.PriceAfterDiscount < plan.Price && (
                  <div className="flex w-fit gap-[4px] bg-[#ECF8EB] rounded-lg px-[8px] p-2">
                    <PiSealPercent size={14} color="#2cdb14" />
                    <p className="text-[10px] text-[#3EB837]">
                      {(((plan.Price - plan.PriceAfterDiscount) / plan.Price) * 100).toFixed(2)}% off
                    </p>
                  </div>
                )}
              </div>

              <div className="md:min-h-[95px]">
                <div className="flex gap-4 items-end">
                  <p className="text-[32px] md:text-[46px] font-semibold text-[#171717]">
                    ₹{plan.customPrice || plan.PriceAfterDiscount}
                  </p>
                </div>

                {plan.Description && (
                  <div className="flex flex-row pb-[16px] items-center">
                    <p className="text-[18px] text-[#8095A7] group-hover:text-gray-700 duration-500 font-medium">
                      {plan.Description.replace(/<[^>]*>/g, "")}
                    </p>
                  </div>
                )}

                <div className="flex flex-col">
                  {plan.offers?.map(
                    (offer) =>
                      offer.isActive && (
                        <div
                          key={offer.id}
                          className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                        >
                          <div className="flex flex-col gap-2 border px-6 py-8 bg-gradient-to-r from-blue-500 to-blue-300">
                            <div>
                              <h3 className="text-xl text-start font-extrabold text-white">{offer.title}</h3>
                              <h3 className="text-start font-extrabold text-white">{offer.description}</h3>
                              <p className="text-[16px] text-green group-hover:text-gray-700 duration-500">
                                Discount: {offer.discountPercentage}%
                              </p>
                              <p className="text-white">{offer.validUntil}</p>
                              {offer.offerPrice && <p className="text-white">₹{offer.offerPrice}</p>}
                            </div>
                          </div>
                        </div>
                      ),
                  )}
                </div>

                <div className="col-span-12 md:col-span-6 flex justify-center items-center">
                  <div className="w-full">
                    <div className="grid grid-cols-1 mt-4">
                      <div className="col-span-2">
                        <button
                          className="py-2.5 bg-yellow-400 border rounded block text-center hover:border-black group-hover:border-black font-bold duration-500 w-full text-slate-800"
                          onClick={() => handleBuy(plan)}
                        >
                          {plan.selectButtonText || "Releasing Shortly"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  {plan.Features && (
                    <p className="text-[16px] font-semibold mt-4 text-[#171717]">
                      What you will get
                    </p>
                  )}

                  {plan.Features && plan.Features.split(",").map((feature, index) => (
                    <div key={index} className="flex gap-1 items-center justify-start">
                      <div className="w-[25px] h-[25px] items-center flex">
                        <Check color="#2cdb14" size={23} weight="bold" />
                      </div>
                      <p className="text-[14px] text-[#606162] group-hover:text-gray-700 duration-500">
                        {feature.trim()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlansSection