"use client";
import { Check } from "phosphor-react";
import React, { use, useEffect, useState } from "react";
import { PiSealPercent, PiSealWarningBold } from "react-icons/pi";
import Select from "react-select";
import Link from "next/link";
import Image from "next/image";
import { div } from "framer-motion/client";
import axios from "axios";
import { addToCart } from "@/store/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import productImage from "../../images/recent_post_img1.png";



interface PackageData {
    id: string
    planName: string
    Status: string
    Description: string
    Price: number
    PriceAfterDiscount: number
    instalments: string
    Features: string
    Page: string
    offers?: OfferData[]
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
        startText: string;
        blueText: string;
        endText: string;
    };
    description: string;
    plansData: {
        id: number;
        state: string;
        description: string;
        plans: {
            planName: string;
            description: string;
            isActive: boolean;
            suggestionText?: string;
            happyText?: string;
            note?: {
                heading: string;
                description: string;
            };
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
        }[];
    }[];
    defaultState: string;
    defaultPlan: string;

}
const planData = {
    heading: {
        startText: "",
        blueText: "Right plan",
        endText: "for Your Business",
    },
    description:
        "Ensurekar incorporation experts register over 1500 companies every month.",
    plansData: [
        {
            id: 1,
            state: "MP",
            description: "",
            plans: [
                {
                    planName: "Standard",
                    description: "Perfect for initiating company registration",
                    isActive: true,
                    suggestionText: "",
                    happyText: "",
                    plan: {
                        id: "1",
                        price: "₹1499",
                        discount: "₹500 off",
                        afterDiscount: "₹999",
                        laterPaid: {
                            amount: "13,726",
                            text: "+ Govt. Fee (to be paid later)",
                            iconInfo: {
                                text: "",
                                link: "",
                            },
                        },

                        offers: [
                            {
                                imageUrl: "",
                                isActive: true,
                                heading: "offer",
                                subHeading: "Unlock partner benefits Post",
                                description: "Post company incorporation worth Rs 4 lakhs",
                                knowMore: {
                                    text: "visit here to grab the offer",
                                    link: "",
                                },
                            },
                        ],
                        splitPayment: {
                            enabled: false,
                            instalments: 2,
                            instalmentAmount: "₹499.50",
                            text: "Split payment by 2 month with Zolvit Flex",
                            knowMore: {
                                text: "",
                                link: "",
                            },
                        },
                    },
                    features: {
                        heading: ["What you'll get"],
                        feature: [
                            "Company Name Reserved in 2-4 Days",
                            "Digital Signature Certificate (DSC) Issued in 4-7 Days",
                            " SPICe+ Form Filing Completed in 14 Days",
                            "Incorporation Certificate Issued in 14-21 Days",
                            "Company PAN and TAN",
                            "Director Identification Number (DIN) for Directors",
                        ],
                    },
                    recommendation: {
                        recommended: true,
                        text: "",
                    },
                },
                {
                    planName: "Fastrack",
                    isActive: true,
                    description: "Quick company registration in 7 to 14 days",
                    suggestionText: "",
                    happyText: "",
                    plan: {
                        id: "2",
                        price: "₹2999",
                        discount: "50% off",
                        afterDiscount: "₹1499",
                        laterPaid: {
                            amount: "13,726",
                            text: "+ Govt. Fee (to be paid later)",
                            iconInfo: {
                                text: "",
                                link: "",
                            },
                        },
                        offers: [
                            {
                                imageUrl: "",
                                heading: "",
                                isActive: false,
                                subHeading: "Unlock partner benefits Post",
                                description: "Post company incorporation worth Rs 4 lakhs",
                                knowMore: {
                                    text: "",
                                    link: "",
                                },
                            },
                        ],
                        splitPayment: {
                            enabled: true,
                            instalments: 2,
                            instalmentAmount: "749.50",
                            text: "Split payment by 2 month with Zolvit Flex",
                            knowMore: {
                                text: "",
                                link: "",
                            },
                        },
                    },
                    features: {
                        heading: ["What you'll get"],
                        feature: [
                            "Expert-Guided Process",
                            "Company Name Reservation in Just 1-2 Days*",
                            "Digital Signature Certificate (DSC) Issued in 3-4 Days",
                            "SPICe+ Form Filing Completed in 5-7 Days*",
                            "Incorporation Certificate Delivered in 7-14 Days",
                            "Company PAN and TAN",
                            "Director Identification Number (DIN)",
                            "Digital Welcome Kit with a Post-Incorporation Compliance Checklist",
                        ],
                    },
                    recommendation: {
                        recommended: true,
                        text: "",
                    },
                },
                {
                    planName: "Premium",
                    isActive: true,
                    description:
                        "Top priority service + annual compliance to keep your business on track",
                    suggestionText: "",
                    happyText: "",
                    plan: {
                        id: "3",
                        price: "₹29,999",
                        discount: "17% off",
                        afterDiscount: "₹24,999",
                        laterPaid: {
                            amount: "13,726",
                            text: "+ Govt. Fee (to be paid later)",
                            iconInfo: {
                                text: "",
                                link: "",
                            },
                        },
                        offers: [
                            {
                                imageUrl: "",
                                heading: "",
                                isActive: false,
                                subHeading: "Unlock partner benefits Post",
                                description: "Post company incorporation worth Rs 4 lakhs",
                                knowMore: {
                                    text: "",
                                    link: "",
                                },
                            },
                        ],
                        splitPayment: {
                            enabled: true,
                            instalments: 3,
                            instalmentAmount: "749.50",
                            text: "Split payment by 3 with Zolvit Flex",
                            knowMore: {
                                text: "",
                                link: "",
                            },
                        },
                    },
                    features: {
                        heading: ["What you'll get"],
                        feature: [
                            "Expert assisted process",
                            "Your company name is reserved in just 1 - 2 days*",
                            "DSC in just 3 - 4 days",
                            "SPICe+ form filing in 5 - 7 days*",
                            "Incorporation Certificate in 7 - 14 days",
                            "Company PAN+TAN",
                            "DIN for directors",
                            "Digital welcome kit that includes a checklist of all post-incorporation compliances",
                            "Appointment of Auditor - ADT 01",
                            "Issuance of share certificate",
                            "INC 20 A form filing",
                            "DIR 3 KYC (For 2 directors)",
                            "Accounting & Bookkeeping (Up to 100 transactions)",
                            "Financial statement preparation",
                            "Accounting software (1-year license)",
                            "AOC 4, MGT 7 & ADT filing",
                            "Annual filing (Up to turnover of 20 lakhs)",
                            "Facilitation of Annual General Meeting",
                            "Statutory regulations PF, ESI",
                            "One Year Income Tax filing (Up to turnover of 20 lakhs)",
                            "30-minute call with a senior CA/CS for your business planning",
                        ],
                    },
                    recommendation: {
                        recommended: true,
                        text: "",
                    },
                },
            ],
        },
        {
            id: 2,
            state: "DL",
            description: "",
            plans: [
                {
                    planName: "Standard",
                    description: "Perfect for initiating company registration",
                    isActive: true,
                    suggestionText: "",
                    happyText: "",
                    plan: {
                        id: "4",
                        price: "₹1999",
                        discount: "₹500 off",
                        afterDiscount: "₹1499",
                        laterPaid: {
                            amount: "13,726",
                            text: "+ Govt. Fee (to be paid later)",
                            iconInfo: {
                                text: "",
                                link: "",
                            },
                        },
                        offers: [
                            {
                                imageUrl: "",
                                heading: "",
                                isActive: false,
                                subHeading: "Unlock partner benefits Post",
                                description: "Post company incorporation worth Rs 4 lakhs",
                                knowMore: {
                                    text: "",
                                    link: "",
                                },
                            },
                        ],
                        splitPayment: {
                            enabled: false,
                            instalments: 2,
                            instalmentAmount: "₹499.50",
                            text: "Split payment by 3 with Zolvit Flex",
                            knowMore: {
                                text: "",
                                link: "",
                            },
                        },
                    },
                    features: {
                        heading: ["What you'll get"],
                        feature: [
                            "Expert assisted process",
                            "Your company name is reserved in just 2 - 4 days",
                            "DSC in just 4 - 7 days",
                            "SPICe+ form filing in 14 days*",
                            "Incorporation Certificate in 14 - 21 days",
                            "Company PAN+TAN",
                            "DIN for directors",
                        ],
                    },
                    recommendation: {
                        recommended: true,
                        text: "",
                    },
                },
                {
                    planName: "Fastrack",
                    isActive: true,
                    description: "Quick company registration in 7 to 14 days",
                    suggestionText: "",
                    happyText: "",
                    plan: {
                        id: "5",
                        price: "₹3999",
                        discount: "50% off",
                        afterDiscount: "₹1999",
                        laterPaid: {
                            amount: "13,726",
                            text: "+ Govt. Fee (to be paid later)",
                            iconInfo: {
                                text: "",
                                link: "",
                            },
                        },
                        offers: [
                            {
                                imageUrl: "",
                                heading: "",
                                isActive: false,
                                subHeading: "Unlock partner benefits Post",
                                description: "Post company incorporation worth Rs 4 lakhs",
                                knowMore: {
                                    text: "",
                                    link: "",
                                },
                            },
                        ],
                        splitPayment: {
                            enabled: false,
                            instalments: 2,
                            instalmentAmount: "₹749.50",
                            text: "Split payment by 3 with Zolvit Flex",
                            knowMore: {
                                text: "",
                                link: "",
                            },
                        },
                    },
                    features: {
                        heading: ["What you'll get"],
                        feature: [
                            "Expert-Assisted Process",
                            "Company Name Reservation in 1-2 Days*",
                            "Digital Signature Certificate (DSC) in 3-4 Days",
                            "SPICe+ Form Filing in 5-7 Days*",
                            "Incorporation Certificate Issued in 7-14 Days",
                            "Company PAN and TAN",
                            "Director Identification Number (DIN)",
                            "Appointment of Auditor",
                            "Issuance of Share Certificates",
                            "INC 20A Form Filing",
                            "DIR 3 KYC for 2 Directors",
                            "Accounting & Bookkeeping (Up to 100 Transactions)",
                            "Financial Statement Preparation",
                            "1-Year License for Accounting Software",
                            "Filing of AOC 4, MGT 7 & ADT 1",
                            "Annual Filing (For Turnover Up to 20 Lakhs)",
                            "Facilitation of Annual General Meeting",
                            "Compliance with PF and ESI Statutory Regulations",
                            "One-Year Income Tax Filing (For Turnover Up to 20 Lakhs)",
                            "30-Minute Consultation Call with a Senior CA/CS for Business Planning",
                        ],
                    },
                    recommendation: {
                        recommended: true,
                        text: "",
                    },
                },
                {
                    planName: "Premium",
                    isActive: true,
                    description:
                        "Top priority service + annual compliance to keep your business on track",
                    suggestionText: "",
                    happyText: "",
                    plan: {
                        id: "6",
                        price: "₹39,999",
                        discount: "17% off",
                        afterDiscount: "₹32,999",
                        laterPaid: {
                            amount: "13,726",
                            text: "+ Govt. Fee (to be paid later)",
                            iconInfo: {
                                text: "",
                                link: "",
                            },
                        },
                        offers: [
                            {
                                imageUrl: "",
                                heading: "",
                                isActive: false,
                                subHeading: "Unlock partner benefits Post",
                                description: "Post company incorporation worth Rs 4 lakhs",
                                knowMore: {
                                    text: "",
                                    link: "",
                                },
                            },
                        ],
                        splitPayment: {
                            enabled: true,
                            instalments: 3,
                            instalmentAmount: "749.50",
                            text: "Split payment by 3 with Zolvit Flex",
                            knowMore: {
                                text: "",
                                link: "",
                            },
                        },
                    },
                    features: {
                        heading: ["What you'll get"],
                        feature: [
                            "Expert assisted process",
                            "Your company name is reserved in just 1 - 2 days*",
                            " DSC in just 3 - 4 days",
                            "SPICe+ form filing in 5 - 7 days*",
                            "Incorporation Certificate in 7 - 14 days",
                            "Company PAN+TAN",
                            "DIN for directors",
                            "Digital welcome kit that includes a checklist of all post-incorporation compliances",
                            "Appointment of Auditor - ADT 01",
                            "Issuance of share certificate",
                            "INC 20 A form filing",
                            "DIR 3 KYC (For 2 directors)",
                            "Accounting & Bookkeeping (Up to 100 transactions)",
                            "Financial statement preparation",
                            "Accounting software (1-year license)",
                            "AOC 4, MGT 7 & ADT filing",
                            "Annual filing (Up to turnover of 20 lakhs)",
                            "Facilitation of Annual General Meeting",
                            "Statutory regulations PF, ESI",
                            "One Year Income Tax filing (Up to turnover of 20 lakhs)",
                            "30-minute call with a senior CA/CS for your business planning",
                        ],
                    },
                    recommendation: {
                        recommended: true,
                        text: "Yes, this is the best plan for you",
                    },
                },
            ],
        },
    ],
    defaultState: "MP",
    defaultPlan: "Standard",

};





const PlansSection = ({ planData }: { planData: planData }) => {
    const {
        heading,
        description,
        // plansData,
        defaultState,
        defaultPlan,
    } = planData;


    const dispatch = useDispatch();
    const router = useRouter();


    const [selectedState, setSelectedState] = useState(defaultState);
    const [selectPlan, setSelectPlane] = useState(defaultPlan);

    const handlePlanSelection = (planId: string, planName: string, price: string) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo') || 'null');
    console.log("User Info:", userInfo); 
    const numericPrice = parseFloat(price.replace(/[₹,]/g, ''));
     const selectedPlan = {
       id: `income-tax-plan-${planId}`,
       name: `Income Tax Return Filing - ${planName}`,
       price: numericPrice,
       quantity: 1,
       subtotal: numericPrice,
       image: productImage
     };
     dispatch(addToCart(selectedPlan));
    if (userInfo && userInfo.email) 
    {
      router.push("/cart");
 
    } else {
    console.log("User is not logged in. Redirecting to login page.");
    localStorage.setItem("redirectAfterLogin", "/cart");
    router.push("/Login");
    }
  };

    // const plan = plansData.find((plan) => plan.state === selectedState);
    // const plans = plan?.plans.filter((plan) => plan.isActive);

    const WC_API_CONFIG = {
        baseUrl: "https://edueye.co.in/ensurekar/wp-json/wc/v3",
        consumerKey: "ck_1a163a1d803b2ed9c2c501a232692bd5ee3c2619",
        consumerSecret: "cs_054aea9c8f7ddeef9b7ceb5fc45c56cd422ba4a2",
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

        return {
            id: product.id.toString(),
            planName: product.name || "",
            Status: product.status === "publish" ? "Active" : "Inactive",
            Description: product.description || product.short_description || "",
            Price: Number.parseFloat(product.regular_price) || 0,
            PriceAfterDiscount: Number.parseFloat(product.sale_price) || Number.parseFloat(product.regular_price) || 0,
            instalments: getMetaValue("_plan_installments") || "",
            Features: getMetaValue("_plan_features") || "",
            Page: getMetaValue("_plan_page") || product.categories?.[0]?.name || "",
            offers: offers,
        }
    }
    const [gotPlansData, setGotPlansData] = useState<PackageData[]>([]);


    useEffect(() => {
        const fetchPlans = async () => {
            // setIsLoading(true)
            try {
                const url = `${WC_API_CONFIG.baseUrl}/products?consumer_key=${WC_API_CONFIG.consumerKey}&consumer_secret=${WC_API_CONFIG.consumerSecret}&per_page=100`

                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })

                if (!response.ok) {
                    throw new Error(`Failed to fetch plans: ${response.status}`)
                }

                const products = await response.json()
                console.log("Fetching plans from:", products)
                const mappedPlans = products.map(mapFromProduct)
                const filterdata = mappedPlans.filter((product: any) => product.Page === "page1")
                //   setPlans(mappedPlans)
                console.log("Fetched plans:", filterdata)
                setGotPlansData(filterdata);
            } catch (error) {
                console.error("Failed to fetch plans:", error)
                alert("Failed to fetch plans. Please check your API credentials and try again.")
            } finally {
                //   setIsLoading(false)
            }
        }

        fetchPlans();
    }, []);
    console.log("plans", gotPlansData);

    onSelect: () => handlePlanSelection("2", "Fastrack", "₹1,999")

    const handleBuy = async (plan: any) => {

       
        // console.log(plan);

        //  if (plan.onSelect) {
        //    plan.onSelect();
        //   } else {
        //       console.log(plan);
        //   }
    };
    // useEffect(() => {
    //     const plan = plansData.find((plan) => plan.state === selectedState);
    //     setPlansData(plan?.plans.filter((plan) => plan.isActive) || []);
    // }, [selectedState, plansData]);
    // const [gotPlansData, setPlansData] = useState([] as PackageData[]);
    // setPlansData(plans);
    console.log("gotPlansData", gotPlansData);

    // const [splitPaymentStates, setSplitPaymentStates] = useState(
    //     plansData.reduce((acc, plan) => {
    //         acc[plan.id] = false;
    //         return acc;
    //     }, {} as { [key: number]: boolean })
    // );

    // const handleToggle = (id: number) => {
    //     setSplitPaymentStates((prev) => ({
    //         ...prev,
    //         [id]: !prev[id],
    //     }));
    // };

    const handleStateChange = (selectedOption: any) => {
        setSelectedState(selectedOption.value);
    };
    const handlePlanChange = (planName: string) => {
        setSelectPlane(planName);
    };

    return (
        <section className="bg-[#F8FBFF] ">
            <div id="pricing-package" className="md:pt-[80px] py-[52px] ">
                <div className="p-4 flex flex-col gap-[16px] relative items-center">
                    <p className="text-black text-[24px] md:text-[34px] font-bold flex max-md:flex-col max-md:items-center md:gap-2 leading-normal">
                        {heading.startText}{" "}
                        <span className="text-[#007AFF]">{heading.blueText}</span>{" "}
                        {heading.endText}
                    </p>
                    <p className="text-[#606162] text-[14px] md:text-[16px] font-normal max-md:text-center md:mb-4">
                        {description}
                    </p>
                </div>
            </div>

            {/* Plan Section */}
            <div className=" max-md:flex flex max-md:flex-col flex-wrap md:flex max-md:gap-[16px]  items-start justify-around">
                <div className="flex md:hidden justify-between items-center mx-auto  ">
                    {gotPlansData.map((plan) => (
                        <p
                            className={`text-[16px] px-4 py-1 text-[#8095A7] font-medium ${plan.planName === selectPlan
                                ? "border-b-2 border-[#022B50] font-semibold"
                                : ""
                                }`}
                            key={plan.id}
                            onClick={() => handlePlanChange(`${plan.planName}`)}
                        >
                            {plan.planName}
                        </p>
                    ))}
                </div>
                <div className="flex justify-center items-start flex-wrap mx-auto">
                    {gotPlansData.map((plan) => (
                        <div
                            key={plan.planName}
                            className={`p-4 flex m-3  group  relative flex-col gap-[10px] mx-4  md:w-[460px] my-[25px] md:mt-0 hover:bg-yellow-400 hover:border-[ #007AFF] border-[1px] rounded-md shadow-[0px_0px_10px_rgba(104,104,104,0.08)] animation cursor-pointer md:block transition delay-150 duration-500 ${plan.planName === selectPlan ? "" : "hidden"
                                }`}
                        >
                            <p className="text-[24px] font-semibold text-[#171717]">
                                {plan.planName}
                            </p>
                            <p className="text-[16px]  md:h-[48px] font-normal group-hover:text-black duration-500 text-[#606162]">
                                {plan.instalments}
                            </p>
                            {plan.Description && (
                                <div className="flex flex-col mb-1">
                                    <p className="text-[14px] text-[#606162]">
                                        {/* {plan.Description} */}
                                    </p>
                                </div>
                            )}
                            <div className="flex gap-3 items-center">
                                <div className="relative w-fit">
                                    <p className="text-[12px] md:text-[16px] group-hover:text-gray-600 font-medium">
                                        {plan.Price}
                                    </p>
                                    <div className="border-b-[1px] translate-y-[-40%] md:top-[11px] rotate-[-16deg] border-[#E83E3E] w-full absolute top-[9px]"></div>
                                </div>
                                {plan.PriceAfterDiscount && (
                                    <div className="flex w-fit gap-[4px] bg-[#ECF8EB] rounded-lg px-[8px] p-2">
                                        <PiSealPercent size={14} color="#2cdb14" />
                                        <p className="text-[10px] text-[#3EB837]">
                                            {/* {plan.PriceAfterDiscount} */}
                                              {(((plan.Price - plan.PriceAfterDiscount) / plan.Price) * 100).toFixed(2)} % off
                                        </p>
                                    </div>
                                )}

                            </div>

                            <div className="md:min-h-[95px]">
                                <div className="flex gap-4 items-end">
                                    <p className="text-[32px] md:text-[46px] font-semibold text-[#171717]">
                                        {plan.PriceAfterDiscount}
                                    </p>
                                </div>
                                {(plan.Description || plan.Description) && (
                                    <div className="flex flex-row pb-[16px] items-center ">
                                        <p className="text-[18px] text-[#8095A7] group-hover:text-gray-700 duration-500 font-medium">
                                            {plan.Description.replace(/<[^>]*>/g, '')}
                                        </p>

                                        {/* <div
                                            className="relative flex group"
                                            title={plan.plan.laterPaid.iconInfo.text}
                                        > {plan.plan.laterPaid.amount && (
                                            <PiSealWarningBold
                                                size={20}
                                                color="#8095A7"
                                                className="mx-1 cursor-pointer"
                                            />
                                        )}
                                        </div> */}


                                    </div>
                                )}

                                {/* {plan.plan.splitPayment.enabled && (
                                    <div className="flex gap-[6px]  items-center md:gap-[10px]">
                                        <div
                                            className="flex items-center cursor-pointer"
                                            onClick={() => {
                                                handleToggle(Number(plan.plan.id));
                                            }}
                                        >
                                            <div className="relative">
                                                <div className="block w-[40px] h-[25px] rounded-full border-[1px] border-[#022b50] bg-[#E5F0FF]"></div>
                                                <div
                                                    className={`absolute top-[3px] transition-all duration-300 ease-in-out rounded-full ${splitPaymentStates[Number(plan.plan.id)]
                                                        ? "left-[20px] w-[18px] h-[19px] bg-[#53A3F9]"
                                                        : "left-[1px] w-[20px] h-[19px] bg-[#53A3F9]"
                                                        }`}
                                                ></div>
                                            </div>
                                        </div>
                                        {/* <div className="flex items-center">
                                            <p className="text-[12px] md:text-[14px] text-[#606162] font-medium ">
                                                {splitPaymentStates[Number(plan.plan.id)]
                                                    ? `₹${(
                                                        parseFloat(
                                                            plan.plan.afterDiscount
                                                                .replace("₹", "")
                                                                .replace(",", "")
                                                        ) / plan.plan.splitPayment.instalments
                                                    ).toFixed(2)} x ${plan.plan.splitPayment.instalments
                                                    } months`
                                                    : plan.plan.splitPayment.text}
                                                {plan.plan.splitPayment.knowMore.text ? (
                                                    <a
                                                        href={plan.plan.splitPayment.knowMore.link}
                                                        className="text-[#007AFF]"
                                                    >
                                                        {plan.plan.splitPayment.knowMore.text}
                                                    </a>
                                                ) : null}
                                            </p>
                                        </div> *}
                                    </div>
                                )} */}

                                <div className=" flex flex-col">
                                    {plan.offers?.map((offer) => (
                                        <>
                                            {offer.isActive && (
                                                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                                                    <div
                                                        key={offer.id}
                                                        className="flex flex-col gap-2 border px-6 py-8 bg-gradient-to-r from-blue-500 to-blue-300 "
                                                    >
                                                        {/* {offer.imageUrl && (
                                                            <div>
                                                                <Image
                                                                    src={offer.imageUrl}
                                                                    alt="offer"
                                                                    className="w-full h-[50px] rounded-full"
                                                                />
                                                            </div>
                                                        )} */}

                                                        <div>
                                                            <h3 className="text-xl text-start font-extrabold text-white">
                                                                {offer.title}
                                                            </h3>
                                                            <h3 className="text-start  font-extrabold text-white">
                                                                {offer.description}
                                                            </h3>
                                                            <p className="text-[16px] text-green group-hover:text-gray-700 duration-500">
                                                                Discount: {offer.discountPercentage}%
                                                            </p>
                                                            <p>
                                                                {offer.validUntil}
                                                            </p>
                                                            <p>
                                                                {offer.offerPrice}
                                                            </p>

                                                            {/* {offer && offer.knowMore.text && (
                                                                <Link href={offer.knowMore.link || "#"}>
                                                                    {offer.knowMore.text}
                                                                </Link>
                                                            )} */}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    ))}
                                </div>
                                <div className="col-span-12 md:col-span-6  md:my- flex justify-center items-center">
                                    <div className="w-full">
                                        <div className="grid grid-cols-1 mt-4 ">
                                            <div className="col-span-2">
                                                <button
                                                    className="py-2.5  bg-yellow-400 border  rounded  block text-center   hover:border-mainTextColo group-hover:border-black font-bold duration-500 w-full text-slate-800"
                                                    onClick={() => handleBuy(plan)}
                                                >
                                                    {/* Buy Now */}
                                                    Releasing Shortly
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    {plan.Features && ( (
                                        <p
                                            key={plan.Features}
                                            className="text-[16px] font-semibold mt-4 text-[#171717]"
                                        >
                                            {/* {plan.Features} */}
                                            What you will get
                                        </p>
                                    ))}

                                    {/* {plan.features.feature.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-1 items-center justify-start"
                                        >
                                            <div className="w-[25px] h-[25px] items-center flex">
                                                {" "}
                                                <Check color="#2cdb14" size={23} weight="bold" />
                                            </div>

                                            <p className="text-[14px] text-[#606162] group-hover:text-gray-700 duration-500">
                                                {feature}
                                            </p>
                                        </div>
                                    ))} */}
                                    {plan.Features.split(',').map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-1 items-center justify-start"
                                        >
                                            <div className="w-[25px] h-[25px] items-center flex">
                                                {" "}
                                                <Check color="#2cdb14" size={23} weight="bold" />
                                            </div>

                                            <p className="text-[14px] text-[#606162] group-hover:text-gray-700 duration-500">
                                                {feature.trim()}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* {plan.happyText && (
                                <div className="my-5">
                                    <h5 className="heading-7 font-bold group-hover:text-black-800 text-bodyText">
                                        {plan.happyText}
                                    </h5>
                                </div>
                            )}
                            {plan.note && (
                                <div className="my-5">
                                    <h5 className="heading-7 inline font-bold group-hover:text-black-800 text-bodyText">
                                        {plan.note.heading}
                                    </h5>
                                    <p className="inline">{plan.note.description}</p>
                                </div>
                            )} */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlansSection;

