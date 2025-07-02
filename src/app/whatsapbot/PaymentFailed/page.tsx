import React from "react"
import { XCircle } from "lucide-react"
import Link from "next/link"

// Custom Button Component
const Button = ({
  children,
  variant = "default",
  className = "",
  ...props
}: {
  children: React.ReactNode
  variant?: "default" | "outline"
  className?: string
}) => {
  const baseClasses =
    "px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
  const variantClasses =
    variant === "outline"
      ? "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-gray-500"
      : "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500"

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default function PaymentFailed({
  searchParams,
}: {
  searchParams: { orderId?: string }
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 flex items-center justify-center py-8">
      <div className="max-w-md w-full mx-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <XCircle className="h-16 w-16 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-red-600">Payment Failed</h2>
        </div>
        <div className="text-center space-y-4">
          <p className="text-gray-600">Your payment could not be processed. Please try again.</p>
          {searchParams.orderId && (
            <div className="bg-gray-100 p-3 rounded">
              <p className="text-sm text-gray-600">Order ID:</p>
              <p className="font-semibold">{searchParams.orderId}</p>
            </div>
          )}
          <div className="pt-4 space-y-2">
            <Link href="/">
              <Button className="w-full">Try Again</Button>
            </Link>
            <Link href="/support">
              <Button variant="outline" className="w-full bg-transparent">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
