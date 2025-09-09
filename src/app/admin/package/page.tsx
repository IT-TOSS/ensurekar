// "use client"

// import { useState, useEffect } from "react"

// interface PackageData {
//   id: string
//   planName: string
//   Status: string
//   Description: string
//   Price: number
//   PriceAfterDiscount: number
//   instalments: string
//   Features: string
//   Page: string
//   offers?: OfferData[]
//   navigationUrl?: string
//   onSelect?: () => void
//   // New fields for onSelect configuration
//   enableSelectButton?: boolean
//   selectButtonText?: string
//   customPlanId?: string
//   customPlanName?: string
//   customPrice?: string
//   actionType?: "navigate" | "function" | "both"
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

// interface PlanSelectionData {
//   planId: string
//   planName: string
//   price: string
//   timestamp: string
//   userAgent?: string
//   selectedAt: Date
// }

// //  API configuration
// const WC_API_CONFIG = {
//   baseUrl: "https://edueye.co.in/ensurekar/wp-json/wc/v3",
//   consumerKey: "ck_1a163a1d803b2ed9c2c501a232692bd5ee3c2619",
//   consumerSecret: "cs_054aea9c8f7ddeef9b7ceb5fc45c56cd422ba4a2",
// }

// const Page = () => {
//   const [showUserDetailsModal, setShowUserDetailsModal] = useState(false)
//   const [showUserCreatModal, setShowUserCreatModal] = useState(false)
//   const [showOfferModal, setShowOfferModal] = useState(false)
//   const [selectedPlan, setSelectedPlan] = useState<PackageData | null>(null)
//   const [plans, setPlans] = useState<PackageData[]>([])
//   const [isLoading, setIsLoading] = useState(false)
//   const [updateMode, setUpdateMode] = useState(false)
//   const [searchTerm, setSearchTerm] = useState("")
//   const [activeOfferTab, setActiveOfferTab] = useState<"details" | "offers">("details")

//   // New state for plan selection tracking
//   const [isSelectingPlan, setIsSelectingPlan] = useState(false)
//   const [selectionMessage, setSelectionMessage] = useState("")

//   const [formData, setFormData] = useState<PackageData>({
//     id: "",
//     planName: "",
//     Status: "",
//     Description: "",
//     Price: 0,
//     PriceAfterDiscount: 0,
//     instalments: "",
//     Features: "",
//     Page: "",
//     offers: [],
//     navigationUrl: "/cart",
//     onSelect: undefined,
//     enableSelectButton: true,
//     selectButtonText: "Select Plan",
//     customPlanId: "",
//     customPlanName: "",
//     customPrice: "",
//     actionType: "both",
//   })

//   const [offerFormData, setOfferFormData] = useState<OfferData>({
//     id: "",
//     planId: "",
//     title: "",
//     description: "",
//     discountPercentage: 0,
//     validUntil: "",
//     isActive: true,
//     offerPrice: 0,
//   })

//   useEffect(() => {
//     fetchPlans()
//     // Initialize plans with sample offers
//     const samplePlans = [
//       {
//         id: "1",
//         planName: "Premium Plan",
//         Status: "Active",
//         Description: "Our premium subscription plan",
//         Price: 1000,
//         PriceAfterDiscount: 800,
//         instalments: "3 months",
//         Features: "Feature 1, Feature 2, Feature 3",
//         Page: "Premium",
//         offers: [
//           {
//             id: "offer1",
//             planId: "1",
//             title: "New Year Special",
//             description: "Get 30% off on premium plan",
//             discountPercentage: 30,
//             validUntil: "2024-01-31",
//             isActive: true,
//             offerPrice: 560,
//           },
//         ],
//         navigationUrl: "/cart",
//         onSelect: () => handlePlanSelection("1", "Premium Plan", "₹800"),
//         enableSelectButton: true,
//         selectButtonText: "Choose Premium",
//         customPlanId: "1",
//         customPlanName: "Premium Plan",
//         customPrice: "₹800",
//         actionType: "both",
//       },
//       {
//         id: "2",
//         planName: "Multiple Employer Plan",
//         Status: "Active",
//         Description: "Perfect for multiple employers",
//         Price: 1200,
//         PriceAfterDiscount: 999,
//         instalments: "6 months",
//         Features: "Multi-employer support, Advanced features, Priority support",
//         Page: "Business",
//         offers: [],
//         navigationUrl: "/checkout",
//         onSelect: () => handlePlanSelection("2", "Multiple Employer Plan", "₹999"),
//         enableSelectButton: true,
//         selectButtonText: "Select Business Plan",
//         customPlanId: "2",
//         customPlanName: "Multiple Employer Plan",
//         customPrice: "₹999",
//         actionType: "both",
//       },
//       {
//         id: "3",
//         planName: "Basic Plan",
//         Status: "Active",
//         Description: "Great for getting started",
//         Price: 500,
//         PriceAfterDiscount: 399,
//         instalments: "1 month",
//         Features: "Basic features, Email support, Standard access",
//         Page: "Starter",
//         offers: [],
//         navigationUrl: "/payment",
//         onSelect: () => handlePlanSelection("3", "Basic Plan", "₹399"),
//         enableSelectButton: true,
//         selectButtonText: "Get Started",
//         customPlanId: "3",
//         customPlanName: "Basic Plan",
//         customPrice: "₹399",
//         actionType: "both",
//       },
//     ]
//   }, [])

//   // Convert PackageData to product format
//   const mapToProduct = (planData: PackageData) => {
//     const featuresArray = planData.Features ? planData.Features.split(",").map((f) => f.trim()) : []

//     return {
//       name: planData.planName,
//       type: "simple",
//       regular_price: planData.Price.toString(),
//       sale_price: planData.PriceAfterDiscount.toString(),
//       description: planData.Description,
//       short_description: `${planData.instalments} installment plan`,
//       status: planData.Status.toLowerCase() === "active" ? "publish" : "draft",
//       catalog_visibility: "visible",
//       featured: false,
//       categories: [
//         {
//           name: planData.Page || "General Plans",
//         },
//       ],
//       attributes: [
//         {
//           name: "Features",
//           options: featuresArray,
//           visible: true,
//           variation: false,
//         },
//         {
//           name: "Installments",
//           options: [planData.instalments],
//           visible: true,
//           variation: false,
//         },
//         {
//           name: "Page Category",
//           options: [planData.Page],
//           visible: true,
//           variation: false,
//         },
//       ],
//       meta_data: [
//         {
//           key: "_plan_features",
//           value: planData.Features,
//         },
//         {
//           key: "_plan_installments",
//           value: planData.instalments,
//         },
//         {
//           key: "_plan_page",
//           value: planData.Page,
//         },
//         {
//           key: "_plan_offers",
//           value: JSON.stringify(planData.offers || []),
//         },
//         {
//           key: "_plan_navigation_url",
//           value: planData.navigationUrl || "/cart",
//         },
//         {
//           key: "_plan_enable_select_button",
//           value: planData.enableSelectButton ? "true" : "false",
//         },
//         {
//           key: "_plan_select_button_text",
//           value: planData.selectButtonText || "Select Plan",
//         },
//         {
//           key: "_plan_custom_plan_id",
//           value: planData.customPlanId || planData.id,
//         },
//         {
//           key: "_plan_custom_plan_name",
//           value: planData.customPlanName || planData.planName,
//         },
//         {
//           key: "_plan_custom_price",
//           value: planData.customPrice || `₹${planData.PriceAfterDiscount}`,
//         },
//         {
//           key: "_plan_action_type",
//           value: planData.actionType || "both",
//         },
//       ],
//     }
//   }

//   // Convert product to PackageData format
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

//     // Add navigation URL and onSelect function
//     const navigationUrl = getMetaValue("_plan_navigation_url") || "/cart"
//     const enableSelectButton = getMetaValue("_plan_enable_select_button") === "true"
//     const selectButtonText = getMetaValue("_plan_select_button_text") || "Select Plan"
//     const customPlanId = getMetaValue("_plan_custom_plan_id") || product.id.toString()
//     const customPlanName = getMetaValue("_plan_custom_plan_name") || product.name || ""
//     const customPrice =
//       getMetaValue("_plan_custom_price") ||
//       `₹${Number.parseFloat(product.sale_price) || Number.parseFloat(product.regular_price) || 0}`
//     const actionType = getMetaValue("_plan_action_type") || "both"

//     const onSelect = enableSelectButton
//       ? () => handlePlanSelection(customPlanId, customPlanName, customPrice)
//       : undefined

//     return {
//       id: product.id.toString(),
//       planName: product.name || "",
//       Status: product.status === "publish" ? "Active" : "Inactive",
//       Description: product.description || product.short_description || "",
//       Price: Number.parseFloat(product.regular_price) || 0,
//       PriceAfterDiscount: Number.parseFloat(product.sale_price) || Number.parseFloat(product.regular_price) || 0,
//       instalments: getMetaValue("_plan_installments") || "",
//       Features: getMetaValue("_plan_features") || "",
//       Page: getMetaValue("_plan_page") || product.categories?.[0]?.name || "",
//       offers: offers,
//       navigationUrl: navigationUrl,
//       onSelect: onSelect,
//       enableSelectButton: enableSelectButton,
//       selectButtonText: selectButtonText,
//       customPlanId: customPlanId,
//       customPlanName: customPlanName,
//       customPrice: customPrice,
//       actionType: actionType,
//     }
//   }

//   // Fetch plans from API
//   const fetchPlans = async () => {
//     setIsLoading(true)
//     try {
//       const url = `${WC_API_CONFIG.baseUrl}/products?consumer_key=${WC_API_CONFIG.consumerKey}&consumer_secret=${WC_API_CONFIG.consumerSecret}&per_page=100`
//       const response = await fetch(url, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })

//       if (!response.ok) {
//         throw new Error(`Failed to fetch plans: ${response.status}`)
//       }

//       const products = await response.json()
//       const mappedPlans = products.map(mapFromProduct)
//       setPlans(mappedPlans)
//       console.log("Fetched plans:", mappedPlans)
//     } catch (error) {
//       console.error("Failed to fetch plans:", error)
//       alert("Failed to fetch plans. Please check your API credentials and try again.")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   // Create new plan
//   const postPlanToAPI = async (planData: PackageData) => {
//     try {
//       console.log("Creating plan:", planData)
//       const Product = mapToProduct(planData)
//       const url = `${WC_API_CONFIG.baseUrl}/products?consumer_key=${WC_API_CONFIG.consumerKey}&consumer_secret=${WC_API_CONFIG.consumerSecret}`

//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(Product),
//       })

//       if (!response.ok) {
//         const errorData = await response.json()
//         console.error("API error response:", errorData)
//         throw new Error(`API request failed with status ${response.status}: ${errorData.message || "Unknown error"}`)
//       }

//       const result = await response.json()
//       console.log("Plan created successfully:", result)
//       return result
//     } catch (error) {
//       console.error("Failed to create plan:", error)
//       throw error
//     }
//   }

//   // Update plan
//   const updatePlanInAPI = async (planData: PackageData) => {
//     try {
//       console.log("Updating plan:", planData)
//       const Product = mapToProduct(planData)
//       const url = `${WC_API_CONFIG.baseUrl}/products/${planData.id}?consumer_key=${WC_API_CONFIG.consumerKey}&consumer_secret=${WC_API_CONFIG.consumerSecret}`

//       const response = await fetch(url, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(Product),
//       })

//       if (!response.ok) {
//         const errorData = await response.json()
//         console.error("API error response:", errorData)
//         throw new Error(`Failed to update plan: ${response.status}`)
//       }

//       const result = await response.json()
//       console.log("Plan updated successfully:", result)
//       return result
//     } catch (error) {
//       console.error("Failed to update plan:", error)
//       throw error
//     }
//   }

//   // Delete plan
//   const deletePlanFromAPI = async (id: string) => {
//     try {
//       const url = `${WC_API_CONFIG.baseUrl}/products/${id}?consumer_key=${WC_API_CONFIG.consumerKey}&consumer_secret=${WC_API_CONFIG.consumerSecret}&force=true`
//       const response = await fetch(url, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })

//       if (!response.ok) {
//         throw new Error(`Failed to delete plan: ${response.status}`)
//       }

//       const result = await response.json()
//       console.log("Plan deleted successfully:", result)
//       return result
//     } catch (error) {
//       console.error("Failed to delete plan:", error)
//       throw error
//     }
//   }

//   // ✅ UPDATED FUNCTION - Now sends data to server
//   const handlePlanSelection = async (planId: string, planName: string, price: string) => {
//     console.log("Plan selected:", { planId, planName, price })

//     // Set loading state
//     setIsSelectingPlan(true)
//     setSelectionMessage("")

//     try {
//       // Prepare data to send to server
//       const selectionData: PlanSelectionData = {
//         planId,
//         planName,
//         price,
//         timestamp: new Date().toISOString(),
//         userAgent: navigator.userAgent,
//         selectedAt: new Date(),
//       }

//       // Send data to server
//       const response = await fetch("/api/plan-selection", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(selectionData),
//       })

//       if (!response.ok) {
//         throw new Error(`Server error: ${response.status}`)
//       }

//       const result = await response.json()
//       console.log("Server response:", result)

//       // Update selected plan state
//       const selectedPlanData = plans.find((plan) => plan.id === planId)
//       if (selectedPlanData) {
//         setSelectedPlan(selectedPlanData)
//       }

//       // Show success message
//       setSelectionMessage(`✅ Plan "${planName}" selected successfully! Data sent to server.`)

//       // Optional: Navigate based on plan configuration
//       const plan = plans.find((p) => p.id === planId)
//       if (plan && plan.navigationUrl && (plan.actionType === "navigate" || plan.actionType === "both")) {
//         // You can implement navigation here
//         console.log(`Would navigate to: ${plan.navigationUrl}`)
//         // window.location.href = plan.navigationUrl
//       }
//     } catch (error) {
//       console.error("Failed to process plan selection:", error)
//       setSelectionMessage(`❌ Failed to select plan: ${error instanceof Error ? error.message : "Unknown error"}`)
//     } finally {
//       setIsSelectingPlan(false)

//       // Clear message after 5 seconds
//       setTimeout(() => {
//         setSelectionMessage("")
//       }, 5000)
//     }
//   }

//   const handleChange = (e: any) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: name === "Price" || name === "PriceAfterDiscount" ? (value === "" ? "" : Number(value)) : value,
//     }))
//   }

//   const handleOfferChange = (e: any) => {
//     const { name, value, type, checked } = e.target
//     setOfferFormData((prev) => {
//       const updatedOffer = {
//         ...prev,
//         [name]: type === "checkbox" ? checked : name === "discountPercentage" ? Number(value) : value,
//       }

//       // Calculate offer price when discount percentage changes
//       if (name === "discountPercentage" && selectedPlan) {
//         const discountAmount = (selectedPlan.PriceAfterDiscount * Number(value)) / 100
//         updatedOffer.offerPrice = selectedPlan.PriceAfterDiscount - discountAmount
//       }

//       return updatedOffer
//     })
//   }

//   const handleCreatePlan = async () => {
//     // Validation
//     if (!formData.planName || !formData.Status || !formData.Price) {
//       alert("Please fill in all required fields (Plan Name, Status, and Price).")
//       return
//     }

//     setIsLoading(true)
//     try {
//       if (updateMode && selectedPlan) {
//         // Update existing plan
//         const updatedPlan = { ...formData, id: selectedPlan.id }
//         await updatePlanInAPI(updatedPlan)
//         setPlans(plans.map((plan) => (plan.id === selectedPlan.id ? updatedPlan : plan)))
//         setUpdateMode(false)
//         alert("Plan updated successfully!")
//       } else {
//         // Create new plan
//         const newPlan = { ...formData, id: Date.now().toString(), offers: [] }
//         const createdProduct = await postPlanToAPI(newPlan)
//         // Update the plan with the actual product ID
//         const createdPlan = mapFromProduct(createdProduct)
//         setPlans([...plans, createdPlan])
//         alert("Plan created successfully!")
//       }
//       setShowUserCreatModal(false)
//       resetForm()
//     } catch (error) {
//       alert(`Failed to save plan: ${error instanceof Error ? error.message : "Unknown error"}`)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleCreateOffer = async () => {
//     if (!offerFormData.title || !offerFormData.description || !selectedPlan) {
//       alert("Please fill in all required fields.")
//       return
//     }

//     const newOffer = {
//       ...offerFormData,
//       id: Date.now().toString(),
//       planId: selectedPlan.id,
//     }

//     // Update the selected plan with the new offer
//     const updatedPlan = {
//       ...selectedPlan,
//       offers: [...(selectedPlan.offers || []), newOffer],
//     }

//     try {
//       // Update in API
//       await updatePlanInAPI(updatedPlan)
//       // Update local state
//       setPlans(plans.map((plan) => (plan.id === selectedPlan.id ? updatedPlan : plan)))
//       setSelectedPlan(updatedPlan)
//       setShowOfferModal(false)
//       resetOfferForm()
//       alert("Offer created successfully!")
//     } catch (error) {
//       alert(`Failed to create offer: ${error instanceof Error ? error.message : "Unknown error"}`)
//     }
//   }

//   const resetForm = () => {
//     setFormData({
//       id: "",
//       planName: "",
//       Status: "",
//       Description: "",
//       Price: 0,
//       PriceAfterDiscount: 0,
//       instalments: "",
//       Features: "",
//       Page: "",
//       offers: [],
//       navigationUrl: "/cart",
//       onSelect: undefined,
//       enableSelectButton: true,
//       selectButtonText: "Select Plan",
//       customPlanId: "",
//       customPlanName: "",
//       customPrice: "",
//       actionType: "both",
//     })
//   }

//   const resetOfferForm = () => {
//     setOfferFormData({
//       id: "",
//       planId: "",
//       title: "",
//       description: "",
//       discountPercentage: 0,
//       validUntil: "",
//       isActive: true,
//       offerPrice: 0,
//     })
//   }

//   const handleViewPlan = (plan: PackageData) => {
//     setSelectedPlan(plan)
//     setActiveOfferTab("details")
//     setShowUserDetailsModal(true)
//   }

//   const handleUpdatePlan = () => {
//     if (selectedPlan) {
//       setFormData({ ...selectedPlan })
//       setShowUserDetailsModal(false)
//       setUpdateMode(true)
//       setShowUserCreatModal(true)
//     }
//   }

//   const handleDeletePlan = async (id: string) => {
//     if (!confirm("Are you sure you want to delete this plan? This action cannot be undone.")) {
//       return
//     }

//     setIsLoading(true)
//     try {
//       await deletePlanFromAPI(id)
//       const updatedPlans = plans.filter((plan) => plan.id !== id)
//       setPlans(updatedPlans)
//       setShowUserDetailsModal(false)
//       alert("Plan deleted successfully!")
//     } catch (error) {
//       alert(`Failed to delete plan: ${error instanceof Error ? error.message : "Unknown error"}`)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleDeleteOffer = async (offerId: string) => {
//     if (!confirm("Are you sure you want to delete this offer?") || !selectedPlan) {
//       return
//     }

//     const updatedOffers = selectedPlan.offers?.filter((offer) => offer.id !== offerId) || []
//     const updatedPlan = { ...selectedPlan, offers: updatedOffers }

//     try {
//       await updatePlanInAPI(updatedPlan)
//       setPlans(plans.map((plan) => (plan.id === selectedPlan.id ? updatedPlan : plan)))
//       setSelectedPlan(updatedPlan)
//       alert("Offer deleted successfully!")
//     } catch (error) {
//       alert(`Failed to create offer: ${error instanceof Error ? error.message : "Unknown error"}`)
//     }
//   }

//   const toggleOfferStatus = async (offerId: string) => {
//     if (!selectedPlan) return

//     const updatedOffers =
//       selectedPlan.offers?.map((offer) => (offer.id === offerId ? { ...offer, isActive: !offer.isActive } : offer)) ||
//       []

//     const updatedPlan = { ...selectedPlan, offers: updatedOffers }

//     try {
//       await updatePlanInAPI(updatedPlan)
//       setPlans(plans.map((plan) => (plan.id === selectedPlan.id ? updatedPlan : plan)))
//       setSelectedPlan(updatedPlan)
//     } catch (error) {
//       alert(`Failed to update offer: ${error instanceof Error ? error.message : "Unknown error"}`)
//     }
//   }

//   const filteredPlans = plans.filter(
//     (plan) =>
//       plan.planName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       plan.id?.includes(searchTerm) ||
//       plan.PriceAfterDiscount?.toString().includes(searchTerm),
//   )

//   const getActiveOffers = (plan: PackageData) => {
//     return plan.offers?.filter((offer) => offer.isActive) || []
//   }

//   const getBestOffer = (plan: PackageData) => {
//     const activeOffers = getActiveOffers(plan)
//     if (activeOffers.length === 0) return null

//     return activeOffers.reduce((best, current) =>
//       current.discountPercentage > best.discountPercentage ? current : best,
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Selection Status Message */}
//         {selectionMessage && (
//           <div
//             className={`mb-4 p-4 rounded-lg ${
//               selectionMessage.includes("✅")
//                 ? "bg-green-50 border border-green-200 text-green-800"
//                 : "bg-red-50 border border-red-200 text-red-800"
//             }`}
//           >
//             <div className="flex items-center">
//               <span className="text-sm font-medium">{selectionMessage}</span>
//             </div>
//           </div>
//         )}

//         {/* Header Section */}
//         <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-800 mb-2">Plan Management</h1>
//               <p className="text-gray-600">Manage your subscription plans and their exclusive offers</p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 items-center">
//               <div className="bg-blue-50 px-4 py-2 rounded-lg">
//                 <span className="text-sm text-gray-600">Total Plans: </span>
//                 <span className="font-semibold text-blue-600">{plans.length}</span>
//               </div>
//               <div className="bg-green-50 px-4 py-2 rounded-lg">
//                 <span className="text-sm text-gray-600">Plans with Offers: </span>
//                 <span className="font-semibold text-green-600">
//                   {plans.filter((plan) => getActiveOffers(plan).length > 0).length}
//                 </span>
//               </div>
//               <div className="flex gap-2">
//                 <input
//                   type="search"
//                   placeholder="Search plans..."
//                   className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <button
//                   className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-md hover:shadow-lg"
//                   onClick={() => {
//                     setUpdateMode(false)
//                     resetForm()
//                     setShowUserCreatModal(true)
//                   }}
//                 >
//                   Create New Plan
//                 </button>
//                 <button
//                   className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
//                   onClick={fetchPlans}
//                   disabled={isLoading}
//                 >
//                   {isLoading ? "Refreshing..." : "Refresh"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Plans Table */}
//         <div className="bg-white shadow-lg rounded-xl overflow-hidden">
//           {isLoading ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
//               <span className="ml-3 text-lg text-gray-600">Loading plans...</span>
//             </div>
//           ) : filteredPlans.length > 0 ? (
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
//                   <tr>
//                     <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                       Plan ID
//                     </th>
//                     <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                       Plan Name
//                     </th>
//                     <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                       Status
//                     </th>
//                     <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                       Pricing
//                     </th>
//                     <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                       Offers
//                     </th>
//                     <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                   {filteredPlans.map((plan, index) => {
//                     const bestOffer = getBestOffer(plan)
//                     const activeOffers = getActiveOffers(plan)
//                     return (
//                       <tr
//                         key={plan.id}
//                         className={`hover:bg-gray-50 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-gray-25"}`}
//                       >
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">#{plan.id}</td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-sm text-gray-500 truncate max-w-xs">{plan.Page}</div>
//                           <div className="text-sm font-medium text-gray-900">{plan.planName}</div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <span
//                             className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
//                               plan.Status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
//                             }`}
//                           >
//                             {plan.Status}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex flex-col">
//                             <span className="line-through text-gray-500 text-sm">₹{plan.Price}</span>
//                             <span className="text-sm font-semibold text-green-600">₹{plan.PriceAfterDiscount}</span>
//                             {bestOffer && (
//                               <span className="text-xs font-bold text-orange-600">
//                                 Offer: ₹{bestOffer.offerPrice?.toFixed(0)} ({bestOffer.discountPercentage}% off)
//                               </span>
//                             )}
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           {activeOffers.length > 0 ? (
//                             <div className="flex items-center space-x-2">
//                               <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800">
//                                 {activeOffers.length} Active
//                               </span>
//                               {bestOffer && (
//                                 <span className="text-xs text-orange-600 font-medium">
//                                   Up to {bestOffer.discountPercentage}% OFF
//                                 </span>
//                               )}
//                             </div>
//                           ) : (
//                             <span className="text-xs text-gray-400">No offers</span>
//                           )}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-center">
//                           <div className="flex gap-2 justify-center">
//                             <button
//                               className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
//                               onClick={() => handleViewPlan(plan)}
//                             >
//                               View Details
//                             </button>
//                             {/* {plan.onSelect && plan.enableSelectButton && (
//                               <button
//                                 className="bg-green-100 hover:bg-green-200 text-green-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//                                 onClick={plan.onSelect}
//                                 disabled={isSelectingPlan}
//                               >
//                                 {isSelectingPlan ? "Processing..." : plan.selectButtonText || "Select Plan"}
//                               </button>
//                             )} */}
//                           </div>
//                         </td>
//                       </tr>
//                     )
//                   })}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             <div className="text-center py-16">
//               <div className="mx-auto h-24 w-24 text-gray-300 mb-4">
//                 <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1}
//                     d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-lg font-medium text-gray-900 mb-2">No plans found</h3>
//               <p className="text-gray-500">Get started by creating your first plan or check your API connection.</p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Plan Details Modal with Offers */}
//       {showUserDetailsModal && selectedPlan && (
//         <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4">
//           <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
//             <div className="p-6 border-b border-gray-200">
//               <h2 className="text-2xl font-bold text-gray-800">Plan Management</h2>
//               <p className="text-gray-600">{selectedPlan.planName}</p>
//             </div>

//             {/* Tab Navigation */}
//             <div className="flex border-b border-gray-200">
//               <button
//                 className={`px-6 py-4 text-sm font-medium ${
//                   activeOfferTab === "details"
//                     ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
//                     : "text-gray-500 hover:text-gray-700"
//                 }`}
//                 onClick={() => setActiveOfferTab("details")}
//               >
//                 Plan Details
//               </button>
//               <button
//                 className={`px-6 py-4 text-sm font-medium ${
//                   activeOfferTab === "offers"
//                     ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
//                     : "text-gray-500 hover:text-gray-700"
//                 }`}
//                 onClick={() => setActiveOfferTab("offers")}
//               >
//                 Special Offers ({selectedPlan.offers?.length || 0})
//               </button>
//             </div>

//             <div className="p-6">
//               {/* Plan Details Tab */}
//               {activeOfferTab === "details" && (
//                 <div className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-4">
//                       <div>
//                         <label className="text-sm font-medium text-gray-500">Plan ID</label>
//                         <p className="text-lg font-mono text-gray-900">#{selectedPlan.id}</p>
//                       </div>
//                       <div>
//                         <label className="text-sm font-medium text-gray-500">Plan Name</label>
//                         <p className="text-lg text-gray-900">{selectedPlan.planName}</p>
//                       </div>
//                       <div>
//                         <label className="text-sm font-medium text-gray-500">Status</label>
//                         <span
//                           className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
//                             selectedPlan.Status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
//                           }`}
//                         >
//                           {selectedPlan.Status}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="space-y-4">
//                       <div>
//                         <label className="text-sm font-medium text-gray-500">Regular Price</label>
//                         <p className="text-lg text-gray-500 line-through">₹{selectedPlan.Price}</p>
//                       </div>
//                       <div>
//                         <label className="text-sm font-medium text-gray-500">Sale Price</label>
//                         <p className="text-xl font-semibold text-green-600">₹{selectedPlan.PriceAfterDiscount}</p>
//                       </div>
//                       <div>
//                         <label className="text-sm font-medium text-gray-500">Plan name dis.</label>
//                         <p className="text-lg text-gray-900">{selectedPlan.instalments}</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div>
//                     <label className="text-sm font-medium text-gray-500">Description</label>
//                     <p className="text-gray-900 mt-1">{selectedPlan.Description}</p>
//                   </div>

//                   <div>
//                     <label className="text-sm font-medium text-gray-500">Features</label>
//                     <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
//                       {selectedPlan.Features?.split(",").map((feature, index) => (
//                         <div key={index} className="flex items-center space-x-2">
//                           <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                           <span className="text-gray-700">{feature.trim()}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Offers Tab */}
//               {activeOfferTab === "offers" && (
//                 <div className="space-y-6">
//                   <div className="flex justify-between items-center">
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-800">Special Offers</h3>
//                       <p className="text-gray-600">Create and manage exclusive offers for this plan</p>
//                     </div>
//                     <button
//                       className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-md hover:shadow-lg"
//                       onClick={() => {
//                         resetOfferForm()
//                         setOfferFormData((prev) => ({ ...prev, planId: selectedPlan.id }))
//                         setShowOfferModal(true)
//                       }}
//                     >
//                       Create New Offer
//                     </button>
//                   </div>

//                   {selectedPlan.offers && selectedPlan.offers.length > 0 ? (
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       {selectedPlan.offers.map((offer) => (
//                         <div
//                           key={offer.id}
//                           className={`bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-2 transition-all duration-200 ${
//                             offer.isActive
//                               ? "border-orange-200 hover:border-orange-300 shadow-md hover:shadow-lg"
//                               : "border-gray-200 opacity-75"
//                           }`}
//                         >
//                           <div className="flex justify-between items-start mb-4">
//                             <div className="flex-1">
//                               <h4 className="text-lg font-bold text-gray-800 mb-2">{offer.title}</h4>
//                               <p className="text-gray-600 text-sm mb-3">{offer.description}</p>
//                             </div>
//                             <span
//                               className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
//                                 offer.isActive ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
//                               }`}
//                             >
//                               {offer.isActive ? "Active" : "Inactive"}
//                             </span>
//                           </div>

//                           <div className="space-y-3">
//                             <div className="flex items-center justify-between">
//                               <span className="text-sm text-gray-500">Discount:</span>
//                               <span className="text-xl font-bold text-orange-600">{offer.discountPercentage}% OFF</span>
//                             </div>
//                             <div className="flex items-center justify-between">
//                               <span className="text-sm text-gray-500">Offer Price:</span>
//                               <span className="text-lg font-semibold text-green-600">
//                                 ₹{offer.offerPrice?.toFixed(0)}
//                               </span>
//                             </div>
//                             <div className="flex items-center justify-between">
//                               <span className="text-sm text-gray-500">Valid Until:</span>
//                               <span className="text-sm font-medium text-gray-800">
//                                 {new Date(offer.validUntil).toLocaleDateString()}
//                               </span>
//                             </div>
//                           </div>

//                           <div className="mt-6 flex gap-2">
//                             <button
//                               className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//                                 offer.isActive
//                                   ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
//                                   : "bg-green-100 text-green-800 hover:bg-green-200"
//                               }`}
//                               onClick={() => toggleOfferStatus(offer.id)}
//                             >
//                               {offer.isActive ? "Deactivate" : "Activate"}
//                             </button>
//                             <button
//                               className="px-4 py-2 bg-red-100 text-red-800 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors"
//                               onClick={() => handleDeleteOffer(offer.id)}
//                             >
//                               Delete
//                             </button>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   ) : (
//                     <div className="text-center py-12">
//                       <div className="mx-auto h-16 w-16 text-gray-300 mb-4">
//                         <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={1}
//                             d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
//                           />
//                         </svg>
//                       </div>
//                       <h3 className="text-lg font-medium text-gray-900 mb-2">No offers yet</h3>
//                       <p className="text-gray-500 mb-4">Create your first special offer to attract more customers.</p>
//                       <button
//                         className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200"
//                         onClick={() => {
//                           resetOfferForm()
//                           setOfferFormData((prev) => ({ ...prev, planId: selectedPlan.id }))
//                           setShowOfferModal(true)
//                         }}
//                       >
//                         Create First Offer
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>

//             <div className="p-6 border-t border-gray-200 flex flex-wrap gap-3 justify-end">
//               <button
//                 className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
//                 onClick={handleUpdatePlan}
//               >
//                 Edit Plan
//               </button>
//               <button
//                 className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
//                 onClick={() => handleDeletePlan(selectedPlan.id)}
//               >
//                 Delete Plan
//               </button>
//               <button
//                 className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
//                 onClick={() => setShowUserDetailsModal(false)}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Create/Update Plan Modal */}
//       {showUserCreatModal && (
//         <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4">
//           <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//             <div className="p-6 border-b border-gray-200">
//               <h2 className="text-2xl font-bold text-gray-800">{updateMode ? "Update Plan" : "Create New Plan"}</h2>
//             </div>

//             <div className="p-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Category/Page *</label>
//                     <input
//                       name="Page"
//                       type="text"
//                       value={formData.Page}
//                       onChange={handleChange}
//                       placeholder="e.g., Premium Plans, Basic Plans"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Plan Name *</label>
//                     <input
//                       name="planName"
//                       value={formData.planName}
//                       onChange={handleChange}
//                       placeholder="Enter plan name"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Status *</label>
//                     <select
//                       name="Status"
//                       value={formData.Status}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     >
//                       <option value="">Select Status</option>
//                       <option value="Active">Active (Published)</option>
//                       <option value="Inactive">Inactive (Draft)</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Regular Price *</label>
//                     <input
//                       name="Price"
//                       type="number"
//                       value={formData.Price}
//                       onChange={handleChange}
//                       placeholder="Enter regular price"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Sale Price *</label>
//                     <input
//                       name="PriceAfterDiscount"
//                       type="number"
//                       value={formData.PriceAfterDiscount}
//                       onChange={handleChange}
//                       placeholder="Enter sale price"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Plan name dis.</label>
//                     <input
//                       name="instalments"
//                       value={formData.instalments}
//                       onChange={handleChange}
//                       placeholder="e.g., 3 months, 6 months"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
//                     <textarea
//                       name="Description"
//                       value={formData.Description}
//                       onChange={handleChange}
//                       placeholder="Brief description of the plan"
//                       rows={3}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Features</label>
//                 <textarea
//                   name="Features"
//                   value={formData.Features}
//                   onChange={handleChange}
//                   placeholder="Enter features separated by commas (e.g., Feature 1, Feature 2, Feature 3)"
//                   rows={4}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 ></textarea>
//               </div>

//               <div className="mt-6 space-y-6">
//                 <div className="border-t border-gray-200 pt-6">
//                   <h3 className="text-lg font-semibold text-gray-800 mb-4">Plan Selection Configuration</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Navigation URL</label>
//                         <input
//                           name="navigationUrl"
//                           value={formData.navigationUrl || ""}
//                           onChange={handleChange}
//                           placeholder="/cart, /checkout, /payment"
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Select Button Text</label>
//                         <input
//                           name="selectButtonText"
//                           value={formData.selectButtonText || ""}
//                           onChange={handleChange}
//                           placeholder="Select Plan, Choose Premium, Get Started"
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Action Type</label>
//                         <select
//                           name="actionType"
//                           value={formData.actionType || "both"}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         >
//                           <option value="navigate">Navigate Only</option>
//                           <option value="function">Function Only</option>
//                           <option value="both">Both Navigate & Function</option>
//                         </select>
//                       </div>
//                     </div>
//                     <div className="space-y-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Custom Plan ID (for onSelect)
//                         </label>
//                         <input
//                           name="customPlanId"
//                           value={formData.customPlanId || ""}
//                           onChange={handleChange}
//                           placeholder="Leave empty to use plan ID"
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Custom Plan Name (for onSelect)
//                         </label>
//                         <input
//                           name="customPlanName"
//                           value={formData.customPlanName || ""}
//                           onChange={handleChange}
//                           placeholder="Leave empty to use plan name"
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Custom Price (for onSelect)
//                         </label>
//                         <input
//                           name="customPrice"
//                           value={formData.customPrice || ""}
//                           onChange={handleChange}
//                           placeholder="₹999, Leave empty to use sale price"
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mt-4">
//                     <div className="flex items-center">
//                       <input
//                         name="enableSelectButton"
//                         type="checkbox"
//                         checked={formData.enableSelectButton || false}
//                         onChange={(e) => setFormData((prev) => ({ ...prev, enableSelectButton: e.target.checked }))}
//                         className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                       />
//                       <label className="ml-2 block text-sm text-gray-700">
//                         Enable "Select Plan" button for this plan
//                       </label>
//                     </div>
//                   </div>

//                   {formData.enableSelectButton && (
//                     <div className="mt-4 p-4 bg-blue-50 rounded-lg">
//                       <h4 className="text-sm font-semibold text-blue-800 mb-2">Preview Configuration:</h4>
//                       <div className="text-sm text-blue-700 space-y-1">
//                         <p>
//                           <strong>Button Text:</strong> {formData.selectButtonText || "Select Plan"}
//                         </p>
//                         <p>
//                           <strong>Navigation:</strong> {formData.navigationUrl || "/cart"}
//                         </p>
//                         <p>
//                           <strong>Function Call:</strong> handlePlanSelection("
//                           {formData.customPlanId || formData.id || "ID"}", "
//                           {formData.customPlanName || formData.planName || "Plan Name"}", "
//                           {formData.customPrice || `₹${formData.PriceAfterDiscount || 0}`}")
//                         </p>
//                         <p>
//                           <strong>Action Type:</strong> {formData.actionType || "both"}
//                         </p>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div className="p-6 border-t border-gray-200 flex gap-3 justify-end">
//               <button
//                 className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
//                 onClick={handleCreatePlan}
//                 disabled={isLoading}
//               >
//                 {isLoading ? "Processing..." : updateMode ? "Update Plan" : "Create Plan"}
//               </button>
//               <button
//                 className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
//                 onClick={() => setShowUserCreatModal(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Create Offer Modal */}
//       {showOfferModal && (
//         <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4">
//           <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
//             <div className="p-6 border-b border-gray-200">
//               <h2 className="text-2xl font-bold text-gray-800">Create Special Offer</h2>
//               <p className="text-gray-600">For: {selectedPlan?.planName}</p>
//             </div>

//             <div className="p-6 space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Offer Title *</label>
//                 <input
//                   name="title"
//                   value={offerFormData.title}
//                   onChange={handleOfferChange}
//                   placeholder="e.g., Summer Sale, Black Friday Deal"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
//                 <textarea
//                   name="description"
//                   value={offerFormData.description}
//                   onChange={handleOfferChange}
//                   placeholder="Describe your offer..."
//                   rows={3}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Discount Percentage *</label>
//                 <input
//                   name="discountPercentage"
//                   type="number"
//                   min="0"
//                   max="100"
//                   value={offerFormData.discountPercentage}
//                   onChange={handleOfferChange}
//                   placeholder="e.g., 25"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 />
//               </div>

//               {offerFormData.discountPercentage > 0 && selectedPlan && (
//                 <div className="bg-orange-50 p-4 rounded-lg">
//                   <div className="flex justify-between items-center">
//                     <span className="text-sm text-gray-600">Original Price:</span>
//                     <span className="text-sm line-through text-gray-500">₹{selectedPlan.PriceAfterDiscount}</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-sm text-gray-600">Offer Price:</span>
//                     <span className="text-lg font-bold text-orange-600">₹{offerFormData.offerPrice?.toFixed(0)}</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-sm text-gray-600">You Save:</span>
//                     <span className="text-sm font-semibold text-green-600">
//                       ₹{(selectedPlan.PriceAfterDiscount - (offerFormData.offerPrice || 0)).toFixed(0)}
//                     </span>
//                   </div>
//                 </div>
//               )}

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Valid Until</label>
//                 <input
//                   name="validUntil"
//                   type="date"
//                   value={offerFormData.validUntil}
//                   onChange={handleOfferChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 />
//               </div>

//               <div className="flex items-center">
//                 <input
//                   name="isActive"
//                   type="checkbox"
//                   checked={offerFormData.isActive}
//                   onChange={handleOfferChange}
//                   className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
//                 />
//                 <label className="ml-2 block text-sm text-gray-700">Activate offer immediately</label>
//               </div>
//             </div>

//             <div className="p-6 border-t border-gray-200 flex gap-3 justify-end">
//               <button
//                 className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-colors duration-200"
//                 onClick={handleCreateOffer}
//               >
//                 Create Offer
//               </button>
//               <button
//                 className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
//                 onClick={() => setShowOfferModal(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Page



"use client"

import { useState, useEffect, useMemo } from "react"

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
  navigationUrl?: string
  onSelect?: () => void
  // New fields for onSelect configuration
  enableSelectButton?: boolean
  selectButtonText?: string
  customPlanId?: string
  customPlanName?: string
  customPrice?: string
  actionType?: "navigate" | "function" | "both"
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

interface PlanSelectionData {
  planId: string
  planName: string
  price: string
  timestamp: string
  userAgent?: string
  selectedAt: Date
}

//  API configuration
const WC_API_CONFIG = {
  baseUrl: "https://edueye.co.in/ensurekar/wp-json/wc/v3",
  consumerKey: "ck_1a163a1d803b2ed9c2c501a232692bd5ee3c2619",
  consumerSecret: "cs_054aea9c8f7ddeef9b7ceb5fc45c56cd422ba4a2",
}

const Page = () => {
  const [showUserDetailsModal, setShowUserDetailsModal] = useState(false)
  const [showUserCreatModal, setShowUserCreatModal] = useState(false)
  const [showOfferModal, setShowOfferModal] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<PackageData | null>(null)
  const [plans, setPlans] = useState<PackageData[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [updateMode, setUpdateMode] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeOfferTab, setActiveOfferTab] = useState<"details" | "offers">("details")

  // New state for plan selection tracking
  const [isSelectingPlan, setIsSelectingPlan] = useState(false)
  const [selectionMessage, setSelectionMessage] = useState("")

  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

  const filteredPlans = plans.filter(
    (plan) =>
      plan.planName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.id?.includes(searchTerm) ||
      plan.PriceAfterDiscount?.toString().includes(searchTerm),
  )

  const groupedPlans = useMemo(() => {
    const groups: { [key: string]: PackageData[] } = {}
    filteredPlans.forEach((plan) => {
      const page = plan.Page || "Uncategorized"
      if (!groups[page]) {
        groups[page] = []
      }
      groups[page].push(plan)
    })
    return groups
  }, [filteredPlans])

  const toggleSection = (page: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(page)) {
      newExpanded.delete(page)
    } else {
      newExpanded.add(page)
    }
    setExpandedSections(newExpanded)
  }

  const [formData, setFormData] = useState<PackageData>({
    id: "",
    planName: "",
    Status: "",
    Description: "",
    Price: 0,
    PriceAfterDiscount: 0,
    instalments: "",
    Features: "",
    Page: "",
    offers: [],
    navigationUrl: "/cart",
    onSelect: undefined,
    enableSelectButton: true,
    selectButtonText: "Select Plan",
    customPlanId: "",
    customPlanName: "",
    customPrice: "",
    actionType: "both",
  })

  const [offerFormData, setOfferFormData] = useState<OfferData>({
    id: "",
    planId: "",
    title: "",
    description: "",
    discountPercentage: 0,
    validUntil: "",
    isActive: true,
    offerPrice: 0,
  })

  useEffect(() => {
    fetchPlans()
    // Initialize plans with sample offers
    const samplePlans = [
      {
        id: "1",
        planName: "Premium Plan",
        Status: "Active",
        Description: "Our premium subscription plan",
        Price: 1000,
        PriceAfterDiscount: 800,
        instalments: "3 months",
        Features: "Feature 1, Feature 2, Feature 3",
        Page: "Premium",
        offers: [
          {
            id: "offer1",
            planId: "1",
            title: "New Year Special",
            description: "Get 30% off on premium plan",
            discountPercentage: 30,
            validUntil: "2024-01-31",
            isActive: true,
            offerPrice: 560,
          },
        ],
        navigationUrl: "/cart",
        onSelect: () => handlePlanSelection("1", "Premium Plan", "₹800"),
        enableSelectButton: true,
        selectButtonText: "Choose Premium",
        customPlanId: "1",
        customPlanName: "Premium Plan",
        customPrice: "₹800",
        actionType: "both",
      },
      {
        id: "2",
        planName: "Multiple Employer Plan",
        Status: "Active",
        Description: "Perfect for multiple employers",
        Price: 1200,
        PriceAfterDiscount: 999,
        instalments: "6 months",
        Features: "Multi-employer support, Advanced features, Priority support",
        Page: "Business",
        offers: [],
        navigationUrl: "/checkout",
        onSelect: () => handlePlanSelection("2", "Multiple Employer Plan", "₹999"),
        enableSelectButton: true,
        selectButtonText: "Select Business Plan",
        customPlanId: "2",
        customPlanName: "Multiple Employer Plan",
        customPrice: "₹999",
        actionType: "both",
      },
      {
        id: "3",
        planName: "Basic Plan",
        Status: "Active",
        Description: "Great for getting started",
        Price: 500,
        PriceAfterDiscount: 399,
        instalments: "1 month",
        Features: "Basic features, Email support, Standard access",
        Page: "Starter",
        offers: [],
        navigationUrl: "/payment",
        onSelect: () => handlePlanSelection("3", "Basic Plan", "₹399"),
        enableSelectButton: true,
        selectButtonText: "Get Started",
        customPlanId: "3",
        customPlanName: "Basic Plan",
        customPrice: "₹399",
        actionType: "both",
      },
    ]
  }, [])

  // Convert PackageData to product format
  const mapToProduct = (planData: PackageData) => {
    const featuresArray = planData.Features ? planData.Features.split(",").map((f) => f.trim()) : []

    return {
      name: planData.planName,
      type: "simple",
      regular_price: planData.Price.toString(),
      sale_price: planData.PriceAfterDiscount.toString(),
      description: planData.Description,
      short_description: `${planData.instalments} installment plan`,
      status: planData.Status.toLowerCase() === "active" ? "publish" : "draft",
      catalog_visibility: "visible",
      featured: false,
      categories: [
        {
          name: planData.Page || "General Plans",
        },
      ],
      attributes: [
        {
          name: "Features",
          options: featuresArray,
          visible: true,
          variation: false,
        },
        {
          name: "Installments",
          options: [planData.instalments],
          visible: true,
          variation: false,
        },
        {
          name: "Page Category",
          options: [planData.Page],
          visible: true,
          variation: false,
        },
      ],
      meta_data: [
        {
          key: "_plan_features",
          value: planData.Features,
        },
        {
          key: "_plan_installments",
          value: planData.instalments,
        },
        {
          key: "_plan_page",
          value: planData.Page,
        },
        {
          key: "_plan_offers",
          value: JSON.stringify(planData.offers || []),
        },
        {
          key: "_plan_navigation_url",
          value: planData.navigationUrl || "/cart",
        },
        {
          key: "_plan_enable_select_button",
          value: planData.enableSelectButton ? "true" : "false",
        },
        {
          key: "_plan_select_button_text",
          value: planData.selectButtonText || "Select Plan",
        },
        {
          key: "_plan_custom_plan_id",
          value: planData.customPlanId || planData.id,
        },
        {
          key: "_plan_custom_plan_name",
          value: planData.customPlanName || planData.planName,
        },
        {
          key: "_plan_custom_price",
          value: planData.customPrice || `₹${planData.PriceAfterDiscount}`,
        },
        {
          key: "_plan_action_type",
          value: planData.actionType || "both",
        },
      ],
    }
  }

  // Convert product to PackageData format
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

    // Add navigation URL and onSelect function
    const navigationUrl = getMetaValue("_plan_navigation_url") || "/cart"
    const enableSelectButton = getMetaValue("_plan_enable_select_button") === "true"
    const selectButtonText = getMetaValue("_plan_select_button_text") || "Select Plan"
    const customPlanId = getMetaValue("_plan_custom_plan_id") || product.id.toString()
    const customPlanName = getMetaValue("_plan_custom_plan_name") || product.name || ""
    const customPrice =
      getMetaValue("_plan_custom_price") ||
      `₹${Number.parseFloat(product.sale_price) || Number.parseFloat(product.regular_price) || 0}`
    const actionType = getMetaValue("_plan_action_type") || "both"

    const onSelect = enableSelectButton
      ? () => handlePlanSelection(customPlanId, customPlanName, customPrice)
      : undefined

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
      navigationUrl: navigationUrl,
      onSelect: onSelect,
      enableSelectButton: enableSelectButton,
      selectButtonText: selectButtonText,
      customPlanId: customPlanId,
      customPlanName: customPlanName,
      customPrice: customPrice,
      actionType: actionType,
    }
  }

  // Fetch plans from API
  const fetchPlans = async () => {
    setIsLoading(true)
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
      const mappedPlans = products.map(mapFromProduct)
      setPlans(mappedPlans)
      console.log("Fetched plans:", mappedPlans)
    } catch (error) {
      console.error("Failed to fetch plans:", error)
      alert("Failed to fetch plans. Please check your API credentials and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  // Create new plan
  const postPlanToAPI = async (planData: PackageData) => {
    try {
      console.log("Creating plan:", planData)
      const Product = mapToProduct(planData)
      const url = `${WC_API_CONFIG.baseUrl}/products?consumer_key=${WC_API_CONFIG.consumerKey}&consumer_secret=${WC_API_CONFIG.consumerSecret}`

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Product),
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error("API error response:", errorData)
        throw new Error(`API request failed with status ${response.status}: ${errorData.message || "Unknown error"}`)
      }

      const result = await response.json()
      console.log("Plan created successfully:", result)
      return result
    } catch (error) {
      console.error("Failed to create plan:", error)
      throw error
    }
  }

  // Update plan
  const updatePlanInAPI = async (planData: PackageData) => {
    try {
      console.log("Updating plan:", planData)
      const Product = mapToProduct(planData)
      const url = `${WC_API_CONFIG.baseUrl}/products/${planData.id}?consumer_key=${WC_API_CONFIG.consumerKey}&consumer_secret=${WC_API_CONFIG.consumerSecret}`

      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Product),
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error("API error response:", errorData)
        throw new Error(`Failed to update plan: ${response.status}`)
      }

      const result = await response.json()
      console.log("Plan updated successfully:", result)
      return result
    } catch (error) {
      console.error("Failed to update plan:", error)
      throw error
    }
  }

  // Delete plan
  const deletePlanFromAPI = async (id: string) => {
    try {
      const url = `${WC_API_CONFIG.baseUrl}/products/${id}?consumer_key=${WC_API_CONFIG.consumerKey}&consumer_secret=${WC_API_CONFIG.consumerSecret}&force=true`
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to delete plan: ${response.status}`)
      }

      const result = await response.json()
      console.log("Plan deleted successfully:", result)
      return result
    } catch (error) {
      console.error("Failed to delete plan:", error)
      throw error
    }
  }

  // ✅ UPDATED FUNCTION - Now sends data to server
  const handlePlanSelection = async (planId: string, planName: string, price: string) => {
    console.log("Plan selected:", { planId, planName, price })

    // Set loading state
    setIsSelectingPlan(true)
    setSelectionMessage("")

    try {
      // Prepare data to send to server
      const selectionData: PlanSelectionData = {
        planId,
        planName,
        price,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        selectedAt: new Date(),
      }

      // Send data to server
      const response = await fetch("/api/plan-selection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectionData),
      })

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`)
      }

      const result = await response.json()
      console.log("Server response:", result)

      // Update selected plan state
      const selectedPlanData = plans.find((plan) => plan.id === planId)
      if (selectedPlanData) {
        setSelectedPlan(selectedPlanData)
      }

      // Show success message
      setSelectionMessage(`✅ Plan "${planName}" selected successfully! Data sent to server.`)

      // Optional: Navigate based on plan configuration
      const plan = plans.find((p) => p.id === planId)
      if (plan && plan.navigationUrl && (plan.actionType === "navigate" || plan.actionType === "both")) {
        // You can implement navigation here
        console.log(`Would navigate to: ${plan.navigationUrl}`)
        // window.location.href = plan.navigationUrl
      }
    } catch (error) {
      console.error("Failed to process plan selection:", error)
      setSelectionMessage(`❌ Failed to select plan: ${error instanceof Error ? error.message : "Unknown error"}`)
    } finally {
      setIsSelectingPlan(false)

      // Clear message after 5 seconds
      setTimeout(() => {
        setSelectionMessage("")
      }, 5000)
    }
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "Price" || name === "PriceAfterDiscount" ? (value === "" ? "" : Number(value)) : value,
    }))
  }

  const handleOfferChange = (e: any) => {
    const { name, value, type, checked } = e.target
    setOfferFormData((prev) => {
      const updatedOffer = {
        ...prev,
        [name]: type === "checkbox" ? checked : name === "discountPercentage" ? Number(value) : value,
      }

      // Calculate offer price when discount percentage changes
      if (name === "discountPercentage" && selectedPlan) {
        const discountAmount = (selectedPlan.PriceAfterDiscount * Number(value)) / 100
        updatedOffer.offerPrice = selectedPlan.PriceAfterDiscount - discountAmount
      }

      return updatedOffer
    })
  }

  const handleCreatePlan = async () => {
    // Validation
    if (!formData.planName || !formData.Status || !formData.Price) {
      alert("Please fill in all required fields (Plan Name, Status, and Price).")
      return
    }

    setIsLoading(true)
    try {
      if (updateMode && selectedPlan) {
        // Update existing plan
        const updatedPlan = { ...formData, id: selectedPlan.id }
        await updatePlanInAPI(updatedPlan)
        setPlans(plans.map((plan) => (plan.id === selectedPlan.id ? updatedPlan : plan)))
        setUpdateMode(false)
        alert("Plan updated successfully!")
      } else {
        // Create new plan
        const newPlan = { ...formData, id: Date.now().toString(), offers: [] }
        const createdProduct = await postPlanToAPI(newPlan)
        // Update the plan with the actual product ID
        const createdPlan = mapFromProduct(createdProduct)
        setPlans([...plans, createdPlan])
        alert("Plan created successfully!")
      }
      setShowUserCreatModal(false)
      resetForm()
    } catch (error) {
      alert(`Failed to save plan: ${error instanceof Error ? error.message : "Unknown error"}`)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCreateOffer = async () => {
    if (!offerFormData.title || !offerFormData.description || !selectedPlan) {
      alert("Please fill in all required fields.")
      return
    }

    const newOffer = {
      ...offerFormData,
      id: Date.now().toString(),
      planId: selectedPlan.id,
    }

    // Update the selected plan with the new offer
    const updatedPlan = {
      ...selectedPlan,
      offers: [...(selectedPlan.offers || []), newOffer],
    }

    try {
      // Update in API
      await updatePlanInAPI(updatedPlan)
      // Update local state
      setPlans(plans.map((plan) => (plan.id === selectedPlan.id ? updatedPlan : plan)))
      setSelectedPlan(updatedPlan)
      setShowOfferModal(false)
      resetOfferForm()
      alert("Offer created successfully!")
    } catch (error) {
      alert(`Failed to create offer: ${error instanceof Error ? error.message : "Unknown error"}`)
    }
  }

  const resetForm = () => {
    setFormData({
      id: "",
      planName: "",
      Status: "",
      Description: "",
      Price: 0,
      PriceAfterDiscount: 0,
      instalments: "",
      Features: "",
      Page: "",
      offers: [],
      navigationUrl: "/cart",
      onSelect: undefined,
      enableSelectButton: true,
      selectButtonText: "Select Plan",
      customPlanId: "",
      customPlanName: "",
      customPrice: "",
      actionType: "both",
    })
  }

  const resetOfferForm = () => {
    setOfferFormData({
      id: "",
      planId: "",
      title: "",
      description: "",
      discountPercentage: 0,
      validUntil: "",
      isActive: true,
      offerPrice: 0,
    })
  }

  const handleViewPlan = (plan: PackageData) => {
    setSelectedPlan(plan)
    setActiveOfferTab("details")
    setShowUserDetailsModal(true)
  }

  const handleUpdatePlan = () => {
    if (selectedPlan) {
      setFormData({ ...selectedPlan })
      setShowUserDetailsModal(false)
      setUpdateMode(true)
      setShowUserCreatModal(true)
    }
  }

  const handleDeletePlan = async (id: string) => {
    if (!confirm("Are you sure you want to delete this plan? This action cannot be undone.")) {
      return
    }

    setIsLoading(true)
    try {
      await deletePlanFromAPI(id)
      const updatedPlans = plans.filter((plan) => plan.id !== id)
      setPlans(updatedPlans)
      setShowUserDetailsModal(false)
      alert("Plan deleted successfully!")
    } catch (error) {
      alert(`Failed to delete plan: ${error instanceof Error ? error.message : "Unknown error"}`)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteOffer = async (offerId: string) => {
    if (!confirm("Are you sure you want to delete this offer?") || !selectedPlan) {
      return
    }

    const updatedOffers = selectedPlan.offers?.filter((offer) => offer.id !== offerId) || []
    const updatedPlan = { ...selectedPlan, offers: updatedOffers }

    try {
      await updatePlanInAPI(updatedPlan)
      setPlans(plans.map((plan) => (plan.id === selectedPlan.id ? updatedPlan : plan)))
      setSelectedPlan(updatedPlan)
      alert("Offer deleted successfully!")
    } catch (error) {
      alert(`Failed to create offer: ${error instanceof Error ? error.message : "Unknown error"}`)
    }
  }

  const toggleOfferStatus = async (offerId: string) => {
    if (!selectedPlan) return

    const updatedOffers =
      selectedPlan.offers?.map((offer) => (offer.id === offerId ? { ...offer, isActive: !offer.isActive } : offer)) ||
      []

    const updatedPlan = { ...selectedPlan, offers: updatedOffers }

    try {
      await updatePlanInAPI(updatedPlan)
      setPlans(plans.map((plan) => (plan.id === selectedPlan.id ? updatedPlan : plan)))
      setSelectedPlan(updatedPlan)
    } catch (error) {
      alert(`Failed to update offer: ${error instanceof Error ? error.message : "Unknown error"}`)
    }
  }

  const getActiveOffers = (plan: PackageData) => {
    return plan.offers?.filter((offer) => offer.isActive) || []
  }

  const getBestOffer = (plan: PackageData) => {
    const activeOffers = getActiveOffers(plan)
    if (activeOffers.length === 0) return null

    return activeOffers.reduce((best, current) =>
      current.discountPercentage > best.discountPercentage ? current : best,
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Selection Status Message */}
        {selectionMessage && (
          <div
            className={`mb-4 p-4 rounded-lg ${selectionMessage.includes("✅")
                ? "bg-green-50 border border-green-200 text-green-800"
                : "bg-red-50 border border-red-200 text-red-800"
              }`}
          >
            <div className="flex items-center">
              <span className="text-sm font-medium">{selectionMessage}</span>
            </div>
          </div>
        )}

        {/* Header Section */}
        <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Plan Management</h1>
              <p className="text-gray-600">Manage your subscription plans and their exclusive offers</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="bg-blue-50 px-4 py-2 rounded-lg">
                <span className="text-sm text-gray-600">Total Plans: </span>
                <span className="font-semibold text-blue-600">{plans.length}</span>
              </div>
              <div className="bg-green-50 px-4 py-2 rounded-lg">
                <span className="text-sm text-gray-600">Plans with Offers: </span>
                <span className="font-semibold text-green-600">
                  {plans.filter((plan) => getActiveOffers(plan).length > 0).length}
                </span>
              </div>
              <div className="flex gap-2">
                <input
                  type="search"
                  placeholder="Search plans..."
                  className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg font-medium"
                  onClick={() => {
                    setUpdateMode(false)
                    resetForm()
                    setShowUserCreatModal(true)
                  }}
                >
                  Create New Plan
                </button>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg font-medium"
                  onClick={fetchPlans}
                  disabled={isLoading}
                >
                  {isLoading ? "Refreshing..." : "Refresh"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Plans Table */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              <span className="ml-3 text-lg text-gray-600">Loading plans...</span>
            </div>
          ) : Object.keys(groupedPlans).length > 0 ? (
            <div className="space-y-4 p-4">
              {Object.entries(groupedPlans).map(([page, plans]) => (
                <div key={page} className="border border-gray-200 rounded-lg overflow-hidden">
                  {/* Subtitle Section Header */}
                  <div
                    className="bg-[#a7d8d3] px-6 py-4 cursor-pointer hover:bg-[#ffbf3f] transition-all duration-200 border-b border-blue-100"
                    onClick={() => toggleSection(page)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-medium text-black mb-1">{page}</h3>
                        <p className="text-sm text-black">
                          {plans.length} plan{plans.length !== 1 ? "s" : ""}
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-black font-medium">
                          {expandedSections.has(page) ? "Click to collapse" : "Click to expand"}
                        </span>
                        <svg
                          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${expandedSections.has(page) ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Collapsible Table Content */}
                  {expandedSections.has(page) && (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Plan ID
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Plan Name
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Status
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Pricing
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Offers
                            </th>
                            <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {plans.map((plan, index) => {
                            const bestOffer = getBestOffer(plan)
                            const activeOffers = getActiveOffers(plan)
                            return (
                              <tr
                                key={plan.id}
                                className={`hover:bg-gray-50 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-gray-25"}`}
                              >
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">
                                  #{plan.id}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm font-medium text-gray-900">{plan.planName}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span
                                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${plan.Status === "Active"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-red-100 text-red-800"
                                      }`}
                                  >
                                    {plan.Status}
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex flex-col">
                                    <span className="line-through text-gray-500 text-sm">₹{plan.Price}</span>
                                    <span className="text-sm font-semibold text-green-600">
                                      ₹{plan.PriceAfterDiscount}
                                    </span>
                                    {bestOffer && (
                                      <span className="text-xs font-bold text-orange-600">
                                        Offer: ₹{bestOffer.offerPrice?.toFixed(0)} ({bestOffer.discountPercentage}% off)
                                      </span>
                                    )}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {activeOffers.length > 0 ? (
                                    <div className="flex items-center space-x-2">
                                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800">
                                        {activeOffers.length} Active
                                      </span>
                                      {bestOffer && (
                                        <span className="text-xs text-orange-600 font-medium">
                                          Up to {bestOffer.discountPercentage}% OFF
                                        </span>
                                      )}
                                    </div>
                                  ) : (
                                    <span className="text-xs text-gray-400">No offers</span>
                                  )}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                  <div className="flex gap-2 justify-center">
                                    <button
                                      className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                                      onClick={() => handleViewPlan(plan)}
                                    >
                                      View Details
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="mx-auto h-24 w-24 text-gray-300 mb-4">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No plans found</h3>
              <p className="text-gray-500">Get started by creating your first plan or check your API connection.</p>
            </div>
          )}
        </div>
      </div>

      {/* Plan Details Modal with Offers */}
      {showUserDetailsModal && selectedPlan && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">Plan Management</h2>
              <p className="text-gray-600">{selectedPlan.planName}</p>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200">
              <button
                className={`px-6 py-4 text-sm font-medium ${activeOfferTab === "details"
                    ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                    : "text-gray-500 hover:text-gray-700"
                  }`}
                onClick={() => setActiveOfferTab("details")}
              >
                Plan Details
              </button>
              <button
                className={`px-6 py-4 text-sm font-medium ${activeOfferTab === "offers"
                    ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                    : "text-gray-500 hover:text-gray-700"
                  }`}
                onClick={() => setActiveOfferTab("offers")}
              >
                Special Offers ({selectedPlan.offers?.length || 0})
              </button>
            </div>

            <div className="p-6">
              {/* Plan Details Tab */}
              {activeOfferTab === "details" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-500">Plan ID</label>
                        <p className="text-lg font-mono text-gray-900">#{selectedPlan.id}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Plan Name</label>
                        <p className="text-lg text-gray-900">{selectedPlan.planName}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Status</label>
                        <span
                          className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${selectedPlan.Status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                            }`}
                        >
                          {selectedPlan.Status}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-500">Regular Price</label>
                        <p className="text-lg text-gray-500 line-through">₹{selectedPlan.Price}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Sale Price</label>
                        <p className="text-xl font-semibold text-green-600">₹{selectedPlan.PriceAfterDiscount}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Plan name dis.</label>
                        <p className="text-lg text-gray-900">{selectedPlan.instalments}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-500">Description</label>
                    <p className="text-gray-900 mt-1">{selectedPlan.Description}</p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-500">Features</label>
                    <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedPlan.Features?.split(",").map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">{feature.trim()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Offers Tab */}
              {activeOfferTab === "offers" && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Special Offers</h3>
                      <p className="text-gray-600">Create and manage exclusive offers for this plan</p>
                    </div>
                    <button
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-md hover:shadow-lg"
                      onClick={() => {
                        resetOfferForm()
                        setOfferFormData((prev) => ({ ...prev, planId: selectedPlan.id }))
                        setShowOfferModal(true)
                      }}
                    >
                      Create New Offer
                    </button>
                  </div>

                  {selectedPlan.offers && selectedPlan.offers.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedPlan.offers.map((offer) => (
                        <div
                          key={offer.id}
                          className={`bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-2 transition-all duration-200 ${offer.isActive
                              ? "border-orange-200 hover:border-orange-300 shadow-md hover:shadow-lg"
                              : "border-gray-200 opacity-75"
                            }`}
                        >
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex-1">
                              <h4 className="text-lg font-bold text-gray-800 mb-2">{offer.title}</h4>
                              <p className="text-gray-600 text-sm mb-3">{offer.description}</p>
                            </div>
                            <span
                              className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${offer.isActive ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                                }`}
                            >
                              {offer.isActive ? "Active" : "Inactive"}
                            </span>
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">Discount:</span>
                              <span className="text-xl font-bold text-orange-600">{offer.discountPercentage}% OFF</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">Offer Price:</span>
                              <span className="text-lg font-semibold text-green-600">
                                ₹{offer.offerPrice?.toFixed(0)}
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">Valid Until:</span>
                              <span className="text-sm font-medium text-gray-800">
                                {new Date(offer.validUntil).toLocaleDateString()}
                              </span>
                            </div>
                          </div>

                          <div className="mt-6 flex gap-2">
                            <button
                              className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${offer.isActive
                                  ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                                  : "bg-green-100 text-green-800 hover:bg-green-200"
                                }`}
                              onClick={() => toggleOfferStatus(offer.id)}
                            >
                              {offer.isActive ? "Deactivate" : "Activate"}
                            </button>
                            <button
                              className="px-4 py-2 bg-red-100 text-red-800 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors"
                              onClick={() => handleDeleteOffer(offer.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="mx-auto h-16 w-16 text-gray-300 mb-4">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No offers yet</h3>
                      <p className="text-gray-500 mb-4">Create your first special offer to attract more customers.</p>
                      <button
                        className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200"
                        onClick={() => {
                          resetOfferForm()
                          setOfferFormData((prev) => ({ ...prev, planId: selectedPlan.id }))
                          setShowOfferModal(true)
                        }}
                      >
                        Create First Offer
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="p-6 border-t border-gray-200 flex flex-wrap gap-3 justify-end">
              <button
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                onClick={handleUpdatePlan}
              >
                Edit Plan
              </button>
              <button
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                onClick={() => handleDeletePlan(selectedPlan.id)}
              >
                Delete Plan
              </button>
              <button
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setShowUserDetailsModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create/Update Plan Modal */}
      {showUserCreatModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">{updateMode ? "Update Plan" : "Create New Plan"}</h2>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category/Page *</label>
                    <input
                      name="Page"
                      type="text"
                      value={formData.Page}
                      onChange={handleChange}
                      placeholder="e.g., Premium Plans, Basic Plans"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Plan Name *</label>
                    <input
                      name="planName"
                      value={formData.planName}
                      onChange={handleChange}
                      placeholder="Enter plan name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status *</label>
                    <select
                      name="Status"
                      value={formData.Status}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Status</option>
                      <option value="Active">Active (Published)</option>
                      <option value="Inactive">Inactive (Draft)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Regular Price *</label>
                    <input
                      name="Price"
                      type="number"
                      value={formData.Price}
                      onChange={handleChange}
                      placeholder="Enter regular price"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sale Price *</label>
                    <input
                      name="PriceAfterDiscount"
                      type="number"
                      value={formData.PriceAfterDiscount}
                      onChange={handleChange}
                      placeholder="Enter sale price"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Plan name dis.</label>
                    <input
                      name="instalments"
                      value={formData.instalments}
                      onChange={handleChange}
                      placeholder="e.g., 3 months, 6 months"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      name="Description"
                      value={formData.Description}
                      onChange={handleChange}
                      placeholder="Brief description of the plan"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Features</label>
                <textarea
                  name="Features"
                  value={formData.Features}
                  onChange={handleChange}
                  placeholder="Enter features separated by commas (e.g., Feature 1, Feature 2, Feature 3)"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div className="mt-6 space-y-6">
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Plan Selection Configuration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Navigation URL</label>
                        <input
                          name="navigationUrl"
                          value={formData.navigationUrl || ""}
                          onChange={handleChange}
                          placeholder="/cart, /checkout, /payment"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select Button Text</label>
                        <input
                          name="selectButtonText"
                          value={formData.selectButtonText || ""}
                          onChange={handleChange}
                          placeholder="Select Plan, Choose Premium, Get Started"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Action Type</label>
                        <select
                          name="actionType"
                          value={formData.actionType || "both"}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="navigate">Navigate Only</option>
                          <option value="function">Function Only</option>
                          <option value="both">Both Navigate & Function</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Custom Plan ID (for onSelect)
                        </label>
                        <input
                          name="customPlanId"
                          value={formData.customPlanId || ""}
                          onChange={handleChange}
                          placeholder="Leave empty to use plan ID"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Custom Plan Name (for onSelect)
                        </label>
                        <input
                          name="customPlanName"
                          value={formData.customPlanName || ""}
                          onChange={handleChange}
                          placeholder="Leave empty to use plan name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Custom Price (for onSelect)
                        </label>
                        <input
                          name="customPrice"
                          value={formData.customPrice || ""}
                          onChange={handleChange}
                          placeholder="₹999, Leave empty to use sale price"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center">
                      <input
                        name="enableSelectButton"
                        type="checkbox"
                        checked={formData.enableSelectButton || false}
                        onChange={(e) => setFormData((prev) => ({ ...prev, enableSelectButton: e.target.checked }))}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label className="ml-2 block text-sm text-gray-700">
                        Enable "Select Plan" button for this plan
                      </label>
                    </div>
                  </div>

                  {formData.enableSelectButton && (
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <h4 className="text-sm font-semibold text-blue-800 mb-2">Preview Configuration:</h4>
                      <div className="text-sm text-blue-700 space-y-1">
                        <p>
                          <strong>Button Text:</strong> {formData.selectButtonText || "Select Plan"}
                        </p>
                        <p>
                          <strong>Navigation:</strong> {formData.navigationUrl || "/cart"}
                        </p>
                        <p>
                          <strong>Function Call:</strong> handlePlanSelection("
                          {formData.customPlanId || formData.id || "ID"}", "
                          {formData.customPlanName || formData.planName || "Plan Name"}", "
                          {formData.customPrice || `₹${formData.PriceAfterDiscount || 0}`}")
                        </p>
                        <p>
                          <strong>Action Type:</strong> {formData.actionType || "both"}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex gap-3 justify-end">
              <button
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
                onClick={handleCreatePlan}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : updateMode ? "Update Plan" : "Create Plan"}
              </button>
              <button
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setShowUserCreatModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Offer Modal */}
      {showOfferModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">Create Special Offer</h2>
              <p className="text-gray-600">For: {selectedPlan?.planName}</p>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Offer Title *</label>
                <input
                  name="title"
                  value={offerFormData.title}
                  onChange={handleOfferChange}
                  placeholder="e.g., Summer Sale, Black Friday Deal"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                <textarea
                  name="description"
                  value={offerFormData.description}
                  onChange={handleOfferChange}
                  placeholder="Describe your offer..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Discount Percentage *</label>
                <input
                  name="discountPercentage"
                  type="number"
                  min="0"
                  max="100"
                  value={offerFormData.discountPercentage}
                  onChange={handleOfferChange}
                  placeholder="e.g., 25"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {offerFormData.discountPercentage > 0 && selectedPlan && (
                <>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Original Price:</span>
                      <span className="text-sm line-through text-gray-500">₹{selectedPlan.PriceAfterDiscount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Offer Price:</span>
                      <span className="text-lg font-bold text-orange-600">₹{offerFormData.offerPrice?.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">You Save:</span>
                      <span className="text-sm font-semibold text-green-600">
                        ₹{(selectedPlan.PriceAfterDiscount - (offerFormData.offerPrice || 0)).toFixed(0)}
                      </span>
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Valid Until</label>
                <input
                  name="validUntil"
                  type="date"
                  value={offerFormData.validUntil}
                  onChange={handleOfferChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="flex items-center">
                <input
                  name="isActive"
                  type="checkbox"
                  checked={offerFormData.isActive}
                  onChange={handleOfferChange}
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">Activate offer immediately</label>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex gap-3 justify-end">
              <button
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-colors duration-200"
                onClick={handleCreateOffer}
              >
                Create Offer
              </button>
              <button
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setShowOfferModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Page
