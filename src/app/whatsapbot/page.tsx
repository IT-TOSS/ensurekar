"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Loader2, AlertTriangle, CheckCircle, ChevronDown } from "lucide-react"
import React from "react"

// Custom Input Component
const Input = ({
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  maxLength,
  className = "",
  ...props
}: {
  id?: string
  type?: string
  placeholder?: string
  value: string
  onChange: (e: any) => void
  maxLength?: number
  className?: string
}) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      className={`w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base ${className}`}
      {...props}
    />
  )
}

// Custom Card Components
const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return <div className={`bg-white rounded-lg shadow-md sm:shadow-lg ${className}`}>{children}</div>
}

const CardHeader = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return <div className={`px-4 py-3 sm:px-6 sm:py-4 ${className}`}>{children}</div>
}

const CardTitle = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return <h3 className={`text-lg sm:text-xl font-semibold ${className}`}>{children}</h3>
}

const CardContent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return <div className={`px-4 pb-4 sm:px-6 sm:pb-6 ${className}`}>{children}</div>
}

// Custom Button Component
const Button = ({
  children,
  onClick,
  disabled = false,
  type = "button",
  className = "",
  size = "default",
  ...props
}: {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit"
  className?: string
  size?: "default" | "lg"
}) => {
  const sizeClasses =
    size === "lg" ? "px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg" : "px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base"
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${sizeClasses} rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
      disabled
        ? "bg-blue-600 text-gray-500 cursor-not-allowed"
        : "bg-blue-600 hover:bg-blue-700 text-blue-500 focus:ring-blue-500"
    } ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

// Custom Select Component
// const Select = ({
//   value,
//   onValueChange,
//   children,
//   className = "",
// }: {
//   value: string
//   onValueChange: (value: string) => void
//   children: React.ReactNode
//   className?: string
// }) => {
//   const [isOpen, setIsOpen] = useState(false)
//   return (
//     <div className={`relative ${className}`}>
//       <button
//         type="button"
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-left flex items-center justify-between text-sm sm:text-base"
//       >
//         <span>{value}</span>
//         <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
//       </button>
//       {isOpen && (
//         <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
//           {React.Children.map(children, (child) =>
//             React.cloneElement(child as any, {
//               onClick: () => {
//                 onValueChange((child as any).props.value)
//                 setIsOpen(false)
//               },
//             }),
//           )}
//         </div>
//       )}
//     </div>
//   )
// }

// const SelectItem = ({
//   value,
//   children,
//   onClick,
// }: {
//   value: string
//   children: React.ReactNode
//   onClick?: () => void
// }) => {
//   return (
//     <div onClick={onClick} className="px-3 py-2 sm:px-4 sm:py-3 hover:bg-gray-100 cursor-pointer text-sm sm:text-base">
//       {children}
//     </div>
//   )
// }

// Custom Alert Component
const Alert = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return <div className={`border rounded-lg p-3 sm:p-4 ${className}`}>{children}</div>
}

const AlertDescription = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-sm sm:text-base">{children}</div>
}

// Custom Badge Component
const Badge = ({
  children,
  variant = "default",
  className = "",
}: { children: React.ReactNode; variant?: "default" | "secondary" | "outline"; className?: string }) => {
  const variantClasses = {
    default: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-100 text-gray-800",
    outline: "border border-gray-300 bg-transparent text-gray-700",
  }
  return (
    <span
      className={`inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

interface PanData {
  name: string
  address: string
  city: string
  state: string
  zipCode: string
  mobile: string
  email: string
  fatherName?: string
  dateOfBirth?: string
  aadhaar?: string
  panNumber: string
}

interface BillingData {
  billingName: string
  address: string
  zipCode: string
  city: string
  state: string
  country: string
  mobile: string
  email: string
}

// PAN Info Display Component
const PanInfoCard = ({ panData }: { panData: PanData | null }) => {
  if (!panData) return null

  return (
    <Card className="border-green-200 bg-green-50/50">
      <CardHeader className="pb-2 sm:pb-3">
        <CardTitle className="text-base sm:text-lg text-green-800 flex items-center gap-2">
          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
          PAN Information Verified
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="space-y-1">
            <p className="text-xs sm:text-sm font-medium text-gray-600">Full Name</p>
            <p className="text-sm sm:text-base text-gray-900 break-words">{panData.name}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs sm:text-sm font-medium text-gray-600">PAN Number</p>
            <Badge variant="secondary" className="font-mono text-xs sm:text-sm">
              {panData.panNumber}
            </Badge>
          </div>
          {panData.fatherName && (
            <div className="space-y-1">
              <p className="text-xs sm:text-sm font-medium text-gray-600">Father's Name</p>
              <p className="text-sm sm:text-base text-gray-900 break-words">{panData.fatherName}</p>
            </div>
          )}
          {panData.aadhaar && (
            <div className="space-y-1">
              <p className="text-xs sm:text-sm font-medium text-gray-600">Aadhaar</p>
              <p className="text-sm sm:text-base text-gray-900 font-mono break-all">{panData.aadhaar}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// Billing Form Component (Read Only)
const BillingForm = ({
  panData,
  onDataChange,
}: {
  panData: PanData | null
  onDataChange: (data: BillingData) => void
}) => {
  const [formData, setFormData] = useState<BillingData>({
    billingName: "",
    address: "",
    zipCode: "",
    city: "",
    state: "",
    country: "India",
    mobile: "",
    email: "",
  })

  // Update form data when panData changes
  useEffect(() => {
    if (panData) {
      setFormData({
        billingName: panData.name || "",
        address: panData.address || "",
        zipCode: panData.zipCode || "",
        city: panData.city || "",
        state: panData.state || "",
        country: "India",
        mobile: panData.mobile || "",
        email: panData.email || "",
      })
    }
  }, [panData])

  useEffect(() => {
    onDataChange(formData)
  }, [formData, onDataChange])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base sm:text-lg">Billing Information (Read Only)</CardTitle>
        <p className="text-xs sm:text-sm text-gray-500">Information auto-filled from PAN data</p>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4">
        <div className="space-y-2">
          <label className="text-xs sm:text-sm font-medium text-gray-600">Billing Name</label>
          <div className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700 text-sm sm:text-base break-words">
            {formData.billingName || "Not available"}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs sm:text-sm font-medium text-gray-600">Address</label>
          <div className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700 text-sm sm:text-base break-words">
            {formData.address || "Not available"}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="space-y-2">
            <label className="text-xs sm:text-sm font-medium text-gray-600">Zip Code</label>
            <div className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700 text-sm sm:text-base">
              {formData.zipCode || "Not available"}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs sm:text-sm font-medium text-gray-600">City</label>
            <div className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700 text-sm sm:text-base break-words">
              {formData.city || "Not available"}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="space-y-2">
            <label className="text-xs sm:text-sm font-medium text-gray-600">State</label>
            <div className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700 text-sm sm:text-base break-words">
              {formData.state || "Not available"}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs sm:text-sm font-medium text-gray-600">Country</label>
            <div className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700 text-sm sm:text-base">
              {formData.country}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="space-y-2">
            <label className="text-xs sm:text-sm font-medium text-gray-600">Mobile Number</label>
            <div className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700 text-sm sm:text-base break-all">
              {formData.mobile || "Not available"}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs sm:text-sm font-medium text-gray-600">Email</label>
            <div className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700 text-sm sm:text-base break-all">
              {formData.email || "Not available"}
            </div>
          </div>
        </div>

        <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-md">
          <p className="text-xs sm:text-sm text-blue-700">
            <span className="font-medium">Note:</span> Billing information is automatically populated from your PAN data
            and cannot be modified.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

// Order Details Component
const OrderDetails = () => {
  const orderAmount = "1.00"
  const totalAmount = "INR 1.00"

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="text-base sm:text-lg">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs sm:text-sm text-gray-600">Order Number</span>
            <Badge variant="outline" className="font-mono text-xs">
              #1232212
            </Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs sm:text-sm text-gray-600">Order Amount</span>
            <span className="text-sm sm:text-base font-medium">{orderAmount}</span>
          </div>
          <div className="border-t pt-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-sm sm:text-base">Total Amount</span>
              <span className="font-semibold text-lg sm:text-xl">{totalAmount}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Error Display Component
const ErrorDisplay = ({ error, onRetry }: { error: string; onRetry: () => void }) => {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <Card className="border-red-200 bg-red-50/50">
      <CardContent className="p-4 sm:p-6 text-center">
        <AlertTriangle className="h-10 w-10 sm:h-12 sm:w-12 text-red-500 mx-auto mb-3 sm:mb-4" />
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Unable to Fetch PAN Data</h3>
        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 break-words">{error}</p>

        <div className="space-y-3">
          <Button onClick={onRetry} className="w-full">
            <Loader2 className="h-4 w-4 mr-2" />
            Retry
          </Button>

          <Button onClick={() => setShowDetails(!showDetails)} className="w-full bg-gray-600 hover:bg-gray-700">
            {showDetails ? "Hide" : "Show"} Debug Information
          </Button>
        </div>

        {showDetails && (
          <Alert className="mt-4 text-left border-red-200 bg-red-50">
            <AlertDescription>
              <div className="space-y-2">
                <p className="font-medium text-sm sm:text-base">Possible Solutions:</p>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                  <li>Check if the PAN number is valid</li>
                  <li>Verify API connectivity</li>
                  <li>Check server configuration</li>
                  <li>Contact support if the issue persists</li>
                </ul>
              </div>
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}

// Main Component
export default function HomePage() {
  const searchParams = useSearchParams()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [panData, setPanData] = useState<PanData | null>(null)
  const [billingData, setBillingData] = useState<BillingData | null>(null)
  const [paymentLoading, setPaymentLoading] = useState(false)

  const panNumber = searchParams.get("pan")

  useEffect(() => {
    if (panNumber) {
      fetchPanData(panNumber)
    } else {
      setError("PAN number not provided in URL parameters")
    }
  }, [panNumber])

  const fetchPanData = async (pan: string) => {
    setLoading(true)
    setError("")
    setPanData(null)

    try {
      const response = await fetch("/api/whatsapbot/fetch-pan-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ panNumber: pan }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch PAN data")
      }

      if (data.success && data.panData) {
        setPanData(data.panData)
      } else {
        throw new Error("No data received from API")
      }
    } catch (err) {
      console.error("PAN fetch error:", err)
      setError(err instanceof Error ? err.message : "An error occurred while fetching PAN data")
    } finally {
      setLoading(false)
    }
  }

  const handleBillingDataChange = (data: BillingData) => {
    setBillingData(data)
  }

  const handlePayment = async () => {
    if (!billingData) {
      setError("Please wait for billing information to load")
      return
    }

    // Clear any previous errors
    setError("")
    setPaymentLoading(true)

    try {
      console.log("Initiating payment with {/*CCAvenue format...*/} and now Razorpay")

      const orderData = {
        orderNumber: `ORD${Date.now()}`, // Generate unique order ID
        amount: "1.00",
        currency: "INR",
      }

      // Call payment initiation API (now using CCAvenue format)
      // const response = await fetch("/api/whatsapbot/razorpay/create_order", {
      const response = await fetch("/api/whatsapbot/initiate-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          billingData,
          orderData,
          panNumber,
        }),
      })

      console.log("Payment API response status:", response.status)

      const data = await response.json()
      console.log("Payment API response data:", data)

      if (!response.ok) {
        throw new Error(data.error || `HTTP ${response.status}: Failed to initiate payment`)
      }

      if (data.success && data.encryptedData && data.accessCode && data.formUrl) {
        console.log("Creating CCAvenue form and submitting...")

        // Create and submit CCAvenue form (like your implementation)
        const form = document.createElement("form")
        form.method = "POST"
        form.action = data.formUrl

        // Add encrypted request
        const encRequestInput = document.createElement("input")
        encRequestInput.type = "hidden"
        encRequestInput.name = "encRequest"
        encRequestInput.value = data.encryptedData
        form.appendChild(encRequestInput)

        // Add access code
        const accessCodeInput = document.createElement("input")
        accessCodeInput.type = "hidden"
        accessCodeInput.name = "access_code"
        accessCodeInput.value = data.accessCode
        form.appendChild(accessCodeInput)

        // Submit form
        document.body.appendChild(form)
        form.submit()
      } else {
        throw new Error(data.error || "Payment data not received from server")
      }
    } catch (err) {
      console.error("Payment initiation error:", err)
      const errorMessage = err instanceof Error ? err.message : "Unknown error occurred"
      setError(`Payment Error: ${errorMessage}`)
    } finally {
      setPaymentLoading(false)
    }
  }

  const handleRetry = () => {
    if (panNumber) {
      fetchPanData(panNumber)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-sm sm:max-w-md">
          <CardContent className="p-6 sm:p-8 text-center">
            <Loader2 className="h-10 w-10 sm:h-12 sm:w-12 animate-spin text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-semibold mb-2">Fetching PAN Data</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3">Please wait while we verify your information...</p>
            {panNumber && (
              <Badge variant="outline" className="mt-3 font-mono text-xs sm:text-sm break-all">
                {panNumber}
              </Badge>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  if (error && !panData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="w-full max-w-sm sm:max-w-md">
          <ErrorDisplay error={error} onRetry={handleRetry} />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-4 sm:py-6 lg:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Secure Payment Portal</h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-3 sm:mb-4">
            Complete your billing information to proceed
          </p>
          {panNumber && (
            <Badge variant="outline" className="mt-2 font-mono text-xs sm:text-sm break-all">
              PAN: {panNumber}
            </Badge>
          )}
        </div>

        <div className="space-y-4 sm:space-y-6">
          {panData && <PanInfoCard panData={panData} />}

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
            <div className="xl:col-span-2">
              <BillingForm panData={panData} onDataChange={handleBillingDataChange} />
            </div>
            <div className="order-first xl:order-last">
              <OrderDetails />
            </div>
          </div>

          {error && (
            <Alert className="border-red-200 bg-red-50">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div className="text-red-800 break-words">
                  <AlertDescription>{error}</AlertDescription>
                </div>
              </div>
            </Alert>
          )}

          <div className="text-center">
            <Button
              onClick={handlePayment}
              disabled={!billingData || paymentLoading}
              size="lg"
              className="w-full sm:w-auto sm:min-w-[300px] max-w-md"
            >
              {paymentLoading ? (
                <>
                  <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 mr-2 animate-spin" />
                  Processing Payment...
                </>
              ) : (
                "Proceed to Payment"
              )}
            </Button>
            <p className="text-xs sm:text-sm text-gray-500 mt-2 px-4">
              Your payment will be processed securely using industry-standard encryption
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}




// razorpay.tsx

// "use client"

// import { useState, useEffect } from "react"
// import { useSearchParams } from "next/navigation"
// import { Loader2, AlertTriangle, CheckCircle } from "lucide-react"
// import type React from "react"
// import Script from "next/script"

// // Custom Input Component
// const Input = ({
//   id,
//   type = "text",
//   placeholder,
//   value,
//   onChange,
//   maxLength,
//   className = "",
//   ...props
// }: {
//   id?: string
//   type?: string
//   placeholder?: string
//   value: string
//   onChange: (e: any) => void
//   maxLength?: number
//   className?: string
// }) => {
//   return (
//     <input
//       id={id}
//       type={type}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       maxLength={maxLength}
//       className={`w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base ${className}`}
//       {...props}
//     />
//   )
// }

// // Custom Card Components
// const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
//   return <div className={`bg-white rounded-lg shadow-md sm:shadow-lg ${className}`}>{children}</div>
// }

// const CardHeader = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
//   return <div className={`px-4 py-3 sm:px-6 sm:py-4 ${className}`}>{children}</div>
// }

// const CardTitle = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
//   return <h3 className={`text-lg sm:text-xl font-semibold ${className}`}>{children}</h3>
// }

// const CardContent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
//   return <div className={`px-4 pb-4 sm:px-6 sm:pb-6 ${className}`}>{children}</div>
// }

// // Custom Button Component
// const Button = ({
//   children,
//   onClick,
//   disabled = false,
//   type = "button",
//   className = "",
//   size = "default",
//   ...props
// }: {
//   children: React.ReactNode
//   onClick?: () => void
//   disabled?: boolean
//   type?: "button" | "submit"
//   className?: string
//   size?: "default" | "lg"
// }) => {
//   const sizeClasses =
//     size === "lg" ? "px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg" : "px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base"

//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       disabled={disabled}
//       className={`${sizeClasses} rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
//         disabled
//           ? "bg-gray-400 text-gray-600 cursor-not-allowed"
//           : "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500"
//       } ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   )
// }

// // Custom Alert Component
// const Alert = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
//   return <div className={`border rounded-lg p-3 sm:p-4 ${className}`}>{children}</div>
// }

// const AlertDescription = ({ children }: { children: React.ReactNode }) => {
//   return <div className="text-sm sm:text-base">{children}</div>
// }

// // Custom Badge Component
// const Badge = ({
//   children,
//   variant = "default",
//   className = "",
// }: { children: React.ReactNode; variant?: "default" | "secondary" | "outline"; className?: string }) => {
//   const variantClasses = {
//     default: "bg-blue-100 text-blue-800",
//     secondary: "bg-gray-100 text-gray-800",
//     outline: "border border-gray-300 bg-transparent text-gray-700",
//   }

//   return (
//     <span
//       className={`inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium ${variantClasses[variant]} ${className}`}
//     >
//       {children}
//     </span>
//   )
// }

// interface PanData {
//   name: string
//   address: string
//   city: string
//   state: string
//   zipCode: string
//   mobile: string
//   email: string
//   fatherName?: string
//   dateOfBirth?: string
//   aadhaar?: string
//   panNumber: string
// }

// interface BillingData {
//   billingName: string
//   address: string
//   zipCode: string
//   city: string
//   state: string
//   country: string
//   mobile: string
//   email: string
// }

// // Declare Razorpay type
// declare global {
//   interface Window {
//     Razorpay: any
//   }
// }

// // PAN Info Display Component
// const PanInfoCard = ({ panData }: { panData: PanData | null }) => {
//   if (!panData) return null

//   return (
//     <Card className="border-green-200 bg-green-50/50">
//       <CardHeader className="pb-2 sm:pb-3">
//         <CardTitle className="text-base sm:text-lg text-green-800 flex items-center gap-2">
//           <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
//           PAN Information Verified
//         </CardTitle>
//       </CardHeader>
//       <CardContent className="space-y-3 sm:space-y-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//           <div className="space-y-1">
//             <p className="text-xs sm:text-sm font-medium text-gray-600">Full Name</p>
//             <p className="text-sm sm:text-base text-gray-900 break-words">{panData.name}</p>
//           </div>
//           <div className="space-y-1">
//             <p className="text-xs sm:text-sm font-medium text-gray-600">PAN Number</p>
//             <Badge variant="secondary" className="font-mono text-xs sm:text-sm">
//               {panData.panNumber}
//             </Badge>
//           </div>
//           {panData.fatherName && (
//             <div className="space-y-1">
//               <p className="text-xs sm:text-sm font-medium text-gray-600">Father's Name</p>
//               <p className="text-sm sm:text-base text-gray-900 break-words">{panData.fatherName}</p>
//             </div>
//           )}
//           {panData.aadhaar && (
//             <div className="space-y-1">
//               <p className="text-xs sm:text-sm font-medium text-gray-600">Aadhaar</p>
//               <p className="text-sm sm:text-base text-gray-900 font-mono break-all">{panData.aadhaar}</p>
//             </div>
//           )}
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

// // Billing Form Component (Read Only)
// const BillingForm = ({
//   panData,
//   onDataChange,
// }: {
//   panData: PanData | null
//   onDataChange: (data: BillingData) => void
// }) => {
//   const [formData, setFormData] = useState<BillingData>({
//     billingName: "",
//     address: "",
//     zipCode: "",
//     city: "",
//     state: "",
//     country: "India",
//     mobile: "",
//     email: "",
//   })

//   // Update form data when panData changes
//   useEffect(() => {
//     if (panData) {
//       setFormData({
//         billingName: panData.name || "",
//         address: panData.address || "",
//         zipCode: panData.zipCode || "",
//         city: panData.city || "",
//         state: panData.state || "",
//         country: "India",
//         mobile: panData.mobile || "",
//         email: panData.email || "",
//       })
//     }
//   }, [panData])

//   useEffect(() => {
//     onDataChange(formData)
//   }, [formData, onDataChange])

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle className="text-base sm:text-lg">Billing Information (Read Only)</CardTitle>
//         <p className="text-xs sm:text-sm text-gray-500">Information auto-filled from PAN data</p>
//       </CardHeader>
//       <CardContent className="space-y-3 sm:space-y-4">
//         <div className="space-y-2">
//           <label className="text-xs sm:text-sm font-medium text-gray-600">Billing Name</label>
//           <div className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700 text-sm sm:text-base break-words">
//             {formData.billingName || "Not available"}
//           </div>
//         </div>
//         <div className="space-y-2">
//           <label className="text-xs sm:text-sm font-medium text-gray-600">Address</label>
//           <div className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700 text-sm sm:text-base break-words">
//             {formData.address || "Not available"}
//           </div>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//           <div className="space-y-2">
//             <label className="text-xs sm:text-sm font-medium text-gray-600">Zip Code</label>
//             <div className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700 text-sm sm:text-base">
//               {formData.zipCode || "Not available"}
//             </div>
//           </div>
//           <div className="space-y-2">
//             <label className="text-xs sm:text-sm font-medium text-gray-600">City</label>
//             <div className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700 text-sm sm:text-base break-words">
//               {formData.city || "Not available"}
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//           <div className="space-y-2">
//             <label className="text-xs sm:text-sm font-medium text-gray-600">State</label>
//             <div className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700 text-sm sm:text-base break-words">
//               {formData.state || "Not available"}
//             </div>
//           </div>
//           <div className="space-y-2">
//             <label className="text-xs sm:text-sm font-medium text-gray-600">Country</label>
//             <div className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700 text-sm sm:text-base">
//               {formData.country}
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//           <div className="space-y-2">
//             <label className="text-xs sm:text-sm font-medium text-gray-600">Mobile Number</label>
//             <div className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700 text-sm sm:text-base break-all">
//               {formData.mobile || "Not available"}
//             </div>
//           </div>
//           <div className="space-y-2">
//             <label className="text-xs sm:text-sm font-medium text-gray-600">Email</label>
//             <div className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700 text-sm sm:text-base break-all">
//               {formData.email || "Not available"}
//             </div>
//           </div>
//         </div>
//         <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-md">
//           <p className="text-xs sm:text-sm text-blue-700">
//             <span className="font-medium">Note:</span> Billing information is automatically populated from your PAN data
//             and cannot be modified.
//           </p>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

// // Order Details Component
// const OrderDetails = () => {
//   const orderAmount = "1.00"
//   const totalAmount = "INR 1.00"

//   return (
//     <Card className="h-fit">
//       <CardHeader>
//         <CardTitle className="text-base sm:text-lg">Order Summary</CardTitle>
//       </CardHeader>
//       <CardContent className="space-y-3 sm:space-y-4">
//         <div className="space-y-3">
//           <div className="flex justify-between items-center">
//             <span className="text-xs sm:text-sm text-gray-600">Order Number</span>
//             <Badge variant="outline" className="font-mono text-xs">
//               #1232212
//             </Badge>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-xs sm:text-sm text-gray-600">Order Amount</span>
//             <span className="text-sm sm:text-base font-medium">{orderAmount}</span>
//           </div>
//           <div className="border-t pt-3">
//             <div className="flex justify-between items-center">
//               <span className="font-semibold text-sm sm:text-base">Total Amount</span>
//               <span className="font-semibold text-lg sm:text-xl">{totalAmount}</span>
//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

// // Error Display Component
// const ErrorDisplay = ({ error, onRetry }: { error: string; onRetry: () => void }) => {
//   const [showDetails, setShowDetails] = useState(false)

//   return (
//     <Card className="border-red-200 bg-red-50/50">
//       <CardContent className="p-4 sm:p-6 text-center">
//         <AlertTriangle className="h-10 w-10 sm:h-12 sm:w-12 text-red-500 mx-auto mb-3 sm:mb-4" />
//         <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Unable to Fetch PAN Data</h3>
//         <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 break-words">{error}</p>
//         <div className="space-y-3">
//           <Button onClick={onRetry} className="w-full">
//             <Loader2 className="h-4 w-4 mr-2" />
//             Retry
//           </Button>
//           <Button onClick={() => setShowDetails(!showDetails)} className="w-full bg-gray-600 hover:bg-gray-700">
//             {showDetails ? "Hide" : "Show"} Debug Information
//           </Button>
//         </div>
//         {showDetails && (
//           <Alert className="mt-4 text-left border-red-200 bg-red-50">
//             <AlertDescription>
//               <div className="space-y-2">
//                 <p className="font-medium text-sm sm:text-base">Possible Solutions:</p>
//                 <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
//                   <li>Check if the PAN number is valid</li>
//                   <li>Verify API connectivity</li>
//                   <li>Check server configuration</li>
//                   <li>Contact support if the issue persists</li>
//                 </ul>
//               </div>
//             </AlertDescription>
//           </Alert>
//         )}
//       </CardContent>
//     </Card>
//   )
// }

// // Main Component
// export default function HomePage() {
//   const searchParams = useSearchParams()
//   const [error, setError] = useState("")
//   const [loading, setLoading] = useState(false)
//   const [panData, setPanData] = useState<PanData | null>(null)
//   const [billingData, setBillingData] = useState<BillingData | null>(null)
//   const [paymentLoading, setPaymentLoading] = useState(false)
//   const [razorpayLoaded, setRazorpayLoaded] = useState(false)

//   const panNumber = searchParams.get("pan")

//   useEffect(() => {
//     if (panNumber) {
//       fetchPanData(panNumber)
//     } else {
//       setError("PAN number not provided in URL parameters")
//     }
//   }, [panNumber])

//   const fetchPanData = async (pan: string) => {
//     setLoading(true)
//     setError("")
//     setPanData(null)

//     try {
//       const response = await fetch("/api/whatsapbot/fetch-pan-data", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ panNumber: pan }),
//       })

//       const data = await response.json()

//       if (!response.ok) {
//         throw new Error(data.error || "Failed to fetch PAN data")
//       }

//       if (data.success && data.panData) {
//         setPanData(data.panData)
//       } else {
//         throw new Error("No data received from API")
//       }
//     } catch (err) {
//       console.error("PAN fetch error:", err)
//       setError(err instanceof Error ? err.message : "An error occurred while fetching PAN data")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleBillingDataChange = (data: BillingData) => {
//     setBillingData(data)
//   }

//   const handlePayment = async () => {
//     if (!billingData) {
//       setError("Please wait for billing information to load")
//       return
//     }

//     if (!razorpayLoaded) {
//       setError("Razorpay is still loading. Please try again in a moment.")
//       return
//     }

//     // Clear any previous errors
//     setError("")
//     setPaymentLoading(true)

//     try {
//       console.log("Initiating payment with Razorpay...")

//       const orderData = {
//         orderNumber: `ORD${Date.now()}`, // Generate unique order ID
//         amount: "1.00",
//         currency: "INR",
//       }

//       // Call Razorpay payment initiation API
//       const response = await fetch("/api/whatsapbot/razorpay/create-order", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           billingData,
//           orderData,
//           panNumber,
//         }),
//       })

//       console.log("Razorpay API response status:", response.status)
//       const data = await response.json()
//       console.log("Razorpay API response data:", data)

//       if (!response.ok) {
//         throw new Error(data.error || `HTTP ${response.status}: Failed to create Razorpay order`)
//       }

//       if (data.success && data.order) {
//         console.log("Opening Razorpay checkout...")

//         // Configure Razorpay options
//         const options = {
//           key: data.keyId, // Razorpay Key ID
//           amount: data.order.amount, // Amount in paise
//           currency: data.order.currency,
//           name: "Ensurekar",
//           description: "Payment for services",
//           order_id: data.order.id,
//           prefill: {
//             name: billingData.billingName,
//             email: billingData.email,
//             contact: billingData.mobile,
//           },
//           notes: {
//             pan_number: panNumber,
//             order_number: orderData.orderNumber,
//           },
//           theme: {
//             color: "#2563eb",
//           },
//           handler: (response: any) => {
//             console.log("Payment successful:", response)
//             // Redirect to success page with payment details
//             const successUrl = new URL("/whatsapbot/PaymentSuccessful", window.location.origin)
//             successUrl.searchParams.set("orderId", orderData.orderNumber)
//             successUrl.searchParams.set("amount", orderData.amount)
//             successUrl.searchParams.set("razorpayPaymentId", response.razorpay_payment_id)
//             successUrl.searchParams.set("razorpayOrderId", response.razorpay_order_id)
//             successUrl.searchParams.set("razorpaySignature", response.razorpay_signature)
//             successUrl.searchParams.set("paymentMethod", "Razorpay")

//             window.location.href = successUrl.toString()
//           },
//           modal: {
//             ondismiss: () => {
//               console.log("Payment modal closed")
//               setPaymentLoading(false)
//             },
//           },
//         }

//         // Create Razorpay instance and open checkout
//         const razorpay = new window.Razorpay(options)

//         razorpay.on("payment.failed", (response: any) => {
//           console.error("Payment failed:", response.error)

//           // Redirect to failure page
//           const failureUrl = new URL("/whatsapbot/PaymentFailed", window.location.origin)
//           failureUrl.searchParams.set("orderId", orderData.orderNumber)
//           failureUrl.searchParams.set("amount", orderData.amount)
//           failureUrl.searchParams.set("error", response.error.description || "Payment failed")
//           failureUrl.searchParams.set("paymentMethod", "Razorpay")

//           window.location.href = failureUrl.toString()
//         })

//         razorpay.open()
//       } else {
//         throw new Error(data.error || "Order creation failed")
//       }
//     } catch (err) {
//       console.error("Payment initiation error:", err)
//       const errorMessage = err instanceof Error ? err.message : "Unknown error occurred"
//       setError(`Payment Error: ${errorMessage}`)
//       setPaymentLoading(false)
//     }
//   }

//   const handleRetry = () => {
//     if (panNumber) {
//       fetchPanData(panNumber)
//     }
//   }

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
//         <Card className="w-full max-w-sm sm:max-w-md">
//           <CardContent className="p-6 sm:p-8 text-center">
//             <Loader2 className="h-10 w-10 sm:h-12 sm:w-12 animate-spin text-blue-600 mx-auto mb-3 sm:mb-4" />
//             <h3 className="text-base sm:text-lg font-semibold mb-2">Fetching PAN Data</h3>
//             <p className="text-sm sm:text-base text-gray-600 mb-3">Please wait while we verify your information...</p>
//             {panNumber && (
//               <Badge variant="outline" className="mt-3 font-mono text-xs sm:text-sm break-all">
//                 {panNumber}
//               </Badge>
//             )}
//           </CardContent>
//         </Card>
//       </div>
//     )
//   }

//   if (error && !panData) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
//         <div className="w-full max-w-sm sm:max-w-md">
//           <ErrorDisplay error={error} onRetry={handleRetry} />
//         </div>
//       </div>
//     )
//   }

//   return (
//     <>
//       {/* Load Razorpay Script */}
//       <Script
//         src="https://checkout.razorpay.com/v1/checkout.js"
//         onLoad={() => {
//           console.log("Razorpay script loaded")
//           setRazorpayLoaded(true)
//         }}
//         onError={() => {
//           console.error("Failed to load Razorpay script")
//           setError("Failed to load payment gateway. Please refresh the page.")
//         }}
//       />

//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-4 sm:py-6 lg:py-8">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//           <div className="text-center mb-6 sm:mb-8">
//             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Secure Payment Portal</h1>
//             <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-3 sm:mb-4">
//               Complete your billing information to proceed
//             </p>
//             {panNumber && (
//               <Badge variant="outline" className="mt-2 font-mono text-xs sm:text-sm break-all">
//                 PAN: {panNumber}
//               </Badge>
//             )}
//           </div>

//           <div className="space-y-4 sm:space-y-6">
//             {panData && <PanInfoCard panData={panData} />}

//             <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
//               <div className="xl:col-span-2">
//                 <BillingForm panData={panData} onDataChange={handleBillingDataChange} />
//               </div>
//               <div className="order-first xl:order-last">
//                 <OrderDetails />
//               </div>
//             </div>

//             {error && (
//               <Alert className="border-red-200 bg-red-50">
//                 <div className="flex items-start gap-2">
//                   <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 mt-0.5 flex-shrink-0" />
//                   <div className="text-red-800 break-words">
//                     <AlertDescription>{error}</AlertDescription>
//                   </div>
//                 </div>
//               </Alert>
//             )}

//             <div className="text-center">
//               <Button
//                 onClick={handlePayment}
//                 disabled={!billingData || paymentLoading || !razorpayLoaded}
//                 size="lg"
//                 className="w-full sm:w-auto sm:min-w-[300px] max-w-md"
//               >
//                 {paymentLoading ? (
//                   <>
//                     <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 mr-2 animate-spin" />
//                     Processing Payment...
//                   </>
//                 ) : !razorpayLoaded ? (
//                   <>
//                     <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 mr-2 animate-spin" />
//                     Loading Payment Gateway...
//                   </>
//                 ) : (
//                   "Proceed to Payment"
//                 )}
//               </Button>
//               <p className="text-xs sm:text-sm text-gray-500 mt-2 px-4">
//                 Your payment will be processed securely using Razorpay
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
