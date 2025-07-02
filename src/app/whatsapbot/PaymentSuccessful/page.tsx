"use client"
import type React from "react"
import { CheckCircle, Download, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"

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

// Custom Separator Component
const Separator = ({ className = "" }: { className?: string }) => {
  return <hr className={`border-gray-200 ${className}`} />
}

interface PaymentSuccessProps {
  searchParams: {
    orderId?: string
    amount?: string
    paymentMethod?: string
    trackingId?: string
  }
}

export default function PaymentSuccessful({ searchParams }: PaymentSuccessProps) {
  const { orderId, amount = "1.00", paymentMethod = "Online Payment", trackingId } = searchParams
  const currentDate = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
console.log("Downloading receipt for order:", orderId)
  const handleDownloadReceipt = () => {
    // Implement receipt download functionality
    console.log("Downloading receipt for order:", orderId)
    // You can implement PDF generation here
  }

  const handleEmailReceipt = () => {
    // Implement email receipt functionality
    console.log("Emailing receipt for order:", orderId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100 flex items-center justify-center py-4 sm:py-8 px-4">
      <div className="w-full max-w-sm sm:max-w-lg space-y-4 sm:space-y-6">
        {/* Success Card */}
        <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center pb-3 sm:pb-4">
            <div className="mx-auto mb-3 sm:mb-4 relative">
              <div className="absolute inset-0 bg-green-100 rounded-full animate-ping"></div>
              <div className="relative bg-green-100 rounded-full p-3 sm:p-4">
                <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-600" />
              </div>
            </div>
            <CardTitle className="text-xl sm:text-2xl text-green-700 mb-2">Payment Successful!</CardTitle>
            <p className="text-sm sm:text-base text-gray-600">Your transaction has been completed successfully</p>
          </CardHeader>

          <CardContent className="space-y-4 sm:space-y-6">
            {/* Transaction Details */}
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
                  {orderId && (
                    <div>
                      <p className="text-gray-600 font-medium text-xs sm:text-sm">Order ID</p>
                      <Badge variant="secondary" className="font-mono mt-1 text-xs break-all">
                        #{orderId}
                      </Badge>
                    </div>
                  )}
                  <div>
                    <p className="text-gray-600 font-medium text-xs sm:text-sm">Amount Paid</p>
                    <p className="font-semibold text-green-700 text-base sm:text-lg">₹{amount}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium text-xs sm:text-sm">Payment Method</p>
                    <p className="font-medium text-xs sm:text-sm break-words">{paymentMethod}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium text-xs sm:text-sm">Date & Time</p>
                    <p className="font-medium text-xs sm:text-sm break-words">{currentDate}</p>
                  </div>
                  {trackingId && (
                    <div className="sm:col-span-2">
                      <p className="text-xs sm:text-sm font-medium text-gray-600">Tracking ID</p>
                      <Badge variant="outline" className="font-mono mt-1 text-xs break-all">
                        {trackingId}
                      </Badge>
                    </div>
                  )}
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center justify-center space-x-2 text-green-700">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="font-medium text-sm sm:text-base">Transaction Completed</span>
              </div>
            </div>

            <Separator />

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <Button
                  variant="outline"
                  onClick={handleDownloadReceipt}
                  className="flex items-center gap-1 sm:gap-2 bg-transparent justify-center"
                >
                  <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Download</span>
                  <span className="sm:hidden">PDF</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={handleEmailReceipt}
                  className="flex items-center gap-1 sm:gap-2 bg-transparent justify-center"
                >
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                  Email
                </Button>
              </div>

              <Link href="/" className="block">
                <Button className="w-full flex items-center gap-2 justify-center">
                  <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>

            {/* Additional Info */}
            <div className="text-center text-xs sm:text-sm text-gray-500 space-y-1">
              <p>A confirmation email has been sent to your registered email address.</p>
              <p>Please save this receipt for your records.</p>
            </div>
          </CardContent>
        </Card>

        {/* Support Card */}
        <Card className="bg-blue-50/80 backdrop-blur-sm border-blue-200">
          <CardContent className="p-3 sm:p-4 text-center">
            <h4 className="font-medium text-blue-900 mb-2 text-sm sm:text-base">Need Help?</h4>
            <p className="text-xs sm:text-sm text-blue-700 mb-3">
              If you have any questions about your payment, our support team is here to help.
            </p>
            <Button variant="outline" size="sm" className="text-blue-700 border-blue-300 bg-transparent">
              Contact Support
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
