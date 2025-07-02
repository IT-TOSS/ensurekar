"use client"
import type React from "react"
import { XCircle, RefreshCw, MessageCircle, ArrowLeft, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

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
  variant = "default",
  size = "default",
  className = "",
  ...props
}: {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  variant?: "default" | "outline"
  size?: "default" | "sm"
  className?: string
}) => {
  const baseClasses = "font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md"
  const sizeClasses =
    size === "sm" ? "px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm" : "px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base"
  const variantClasses =
    variant === "outline"
      ? "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-gray-500"
      : "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500"

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  )
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

// Custom Alert Component
const Alert = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return <div className={`border rounded-lg p-3 sm:p-4 ${className}`}>{children}</div>
}

const AlertDescription = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return <div className={`text-sm ${className}`}>{children}</div>
}

// Custom Separator Component
const Separator = ({ className = "" }: { className?: string }) => {
  return <hr className={`border-gray-200 ${className}`} />
}

// Payment Failed Content Component
function PaymentFailedContent() {
  const searchParams = useSearchParams()

  const orderId = searchParams.get("orderId") || "N/A"
  const amount = searchParams.get("amount") || "1.00"
  const error = searchParams.get("error") || "Payment was cancelled or could not be processed"
  const paymentMethod = searchParams.get("paymentMethod") || "Online Payment"
  const trackingId = searchParams.get("trackingId")

  const currentDate = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  const commonFailureReasons = [
    "Payment was cancelled by user",
    "Insufficient funds in your account",
    "Card expired or blocked",
    "Network connectivity issues",
    "Bank server temporarily unavailable",
    "Incorrect payment details",
    "Session timeout",
  ]

  const handleRetryPayment = () => {
    // Navigate back to payment page
    window.history.back()
  }

  const handleContactSupport = () => {
    // You can implement support contact functionality here
    window.open("mailto:support@ensurekar.com", "_blank")
  }

  const handleGetHelp = () => {
    // Navigate to support page or open chat
    window.open("/support", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center py-4 sm:py-8 px-4">
      <div className="w-full max-w-sm sm:max-w-lg space-y-4 sm:space-y-6">
        {/* Main Failure Card */}
        <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center pb-3 sm:pb-4">
            <div className="mx-auto mb-3 sm:mb-4 relative">
              <div className="absolute inset-0 bg-red-100 rounded-full animate-pulse"></div>
              <div className="relative bg-red-100 rounded-full p-3 sm:p-4">
                <XCircle className="h-12 w-12 sm:h-16 sm:w-16 text-red-600" />
              </div>
            </div>
            <CardTitle className="text-xl sm:text-2xl text-red-700 mb-2">Payment Failed</CardTitle>
            <p className="text-sm sm:text-base text-gray-600">We couldn't process your payment at this time</p>
          </CardHeader>

          <CardContent className="space-y-4 sm:space-y-6">
            {/* Error Alert */}
            <Alert className="border-red-200 bg-red-50">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <AlertDescription className="text-red-800 break-words">{decodeURIComponent(error)}</AlertDescription>
              </div>
            </Alert>

            {/* Transaction Details */}
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
                  <div>
                    <p className="text-gray-600 font-medium text-xs sm:text-sm">Order ID</p>
                    <Badge variant="secondary" className="font-mono mt-1 text-xs break-all">
                      #{orderId}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium text-xs sm:text-sm">Amount</p>
                    <p className="font-semibold text-gray-900 text-base sm:text-lg">₹{amount}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium text-xs sm:text-sm">Payment Method</p>
                    <p className="font-medium text-xs sm:text-sm break-words">{paymentMethod}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium text-xs sm:text-sm">Attempted At</p>
                    <p className="font-medium text-xs sm:text-sm break-words">{currentDate}</p>
                  </div>
                  {trackingId && (
                    <div className="sm:col-span-2">
                      <p className="text-gray-600 font-medium text-xs sm:text-sm">Tracking ID</p>
                      <Badge variant="secondary" className="font-mono mt-1 text-xs break-all">
                        {trackingId}
                      </Badge>
                    </div>
                  )}
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center justify-center space-x-2 text-red-700">
                <XCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="font-medium text-sm sm:text-base">Transaction Failed</span>
              </div>
            </div>

            <Separator />

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleRetryPayment}
                className="w-full flex items-center gap-2 bg-blue-600 hover:bg-blue-700 justify-center"
              >
                <RefreshCw className="h-3 w-3 sm:h-4 sm:w-4" />
                Try Payment Again
              </Button>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <Button
                  variant="outline"
                  onClick={handleContactSupport}
                  className="flex items-center gap-1 sm:gap-2 bg-transparent justify-center"
                >
                  <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                  Support
                </Button>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full flex items-center gap-1 sm:gap-2 bg-transparent justify-center"
                  >
                    <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                    Home
                  </Button>
                </Link>
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-center text-xs sm:text-sm text-gray-500 space-y-1">
              <p>No amount has been deducted from your account.</p>
              <p>If you continue to face issues, please contact our support team.</p>
            </div>
          </CardContent>
        </Card>

        {/* Common Issues & Solutions */}
        <Card className="bg-orange-50/80 backdrop-blur-sm border-orange-200">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg text-orange-900">Common Issues & Solutions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              {commonFailureReasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-2 text-xs sm:text-sm">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-orange-800 break-words">{reason}</span>
                </div>
              ))}
            </div>
            <Separator className="bg-orange-200" />
            <div className="text-center">
              <p className="text-xs sm:text-sm text-orange-700 mb-3">
                Still having trouble? Our support team is available 24/7
              </p>
              <Button
                variant="outline"
                size="sm"
                className="text-orange-700 border-orange-300 bg-transparent hover:bg-orange-100"
                onClick={handleGetHelp}
              >
                Get Help Now
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <Card className="bg-blue-50/80 backdrop-blur-sm border-blue-200">
          <CardContent className="p-3 sm:p-4 text-center">
            <h4 className="font-medium text-blue-900 mb-2 text-sm sm:text-base">🔒 Your Security Matters</h4>
            <p className="text-xs sm:text-sm text-blue-700">
              Your payment information is always encrypted and secure. Failed transactions do not compromise your
              account security.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Main component with Suspense wrapper
export default function PaymentFailed() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center py-4 sm:py-8 px-4">
          <Card className="w-full max-w-sm sm:max-w-lg shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-red-600 mx-auto mb-3 sm:mb-4"></div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Loading...</h3>
              <p className="text-sm sm:text-base text-gray-600">Please wait while we load the payment status</p>
            </CardContent>
          </Card>
        </div>
      }
    >
      <PaymentFailedContent />
    </Suspense>
  )
}
