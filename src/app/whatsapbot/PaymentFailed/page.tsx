"use client"

import { useSearchParams } from "next/navigation"
import { XCircle, RefreshCw, MessageCircle, ArrowLeft, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"

export default function PaymentFailed() {
  return (
    <Suspense fallback={<FallbackLoader />}>
      <PaymentFailedContent />
    </Suspense>
  )
}

function PaymentFailedContent() {
  const searchParams = useSearchParams()

  const orderId = searchParams.get("orderId") || "N/A"
  const amount = searchParams.get("amount") || "1.00"
  const error = decodeURIComponent(searchParams.get("error") || "Payment was cancelled or could not be processed")
  const paymentMethod = searchParams.get("paymentMethod") || "CCAvenue"
  const trackingId = searchParams.get("trackingId") || ""
  const bankRefNo = searchParams.get("bankRefNo") || ""

  const currentDate = new Date().toLocaleString("en-IN", {
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

  const handleRetry = () => window.history.back()
  const handleSupport = () => window.open("mailto:support@ensurekar.com", "_blank")
  const handleHelp = () => window.open("/Contact", "_blank")

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 space-y-4">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="relative bg-red-100 rounded-full p-4 animate-pulse">
              <XCircle className="h-12 w-12 text-red-600" />
            </div>
            <h2 className="text-xl font-semibold text-red-700">Payment Failed</h2>
            <p className="text-gray-600">We couldn't process your payment at this time.</p>
          </div>

          <div className="border border-red-200 bg-red-50 rounded-lg p-3 text-sm text-red-800 flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm space-y-2">
            <p><span className="font-medium">Order ID:</span> {orderId}</p>
            <p><span className="font-medium">Amount:</span> ₹{amount}</p>
            <p><span className="font-medium">Payment Method:</span> {paymentMethod}</p>
            {trackingId && <p><span className="font-medium">Tracking ID:</span> {trackingId}</p>}
            {bankRefNo && <p><span className="font-medium">Bank Ref No:</span> {bankRefNo}</p>}
            <p><span className="font-medium">Attempted At:</span> {currentDate}</p>
          </div>

          <div className="space-y-2">
            <button
              onClick={handleRetry}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md flex items-center justify-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Try Payment Again
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleSupport}
                className="border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 py-2 rounded-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                Support
              </button>
              <Link href="#">
                <button
                  className="border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 py-2 rounded-md flex items-center justify-center gap-2 w-full"
                >
                  {/* <ArrowLeft className="h-4 w-4" /> */}
                  Go Back
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 space-y-2 text-sm">
          <h3 className="font-medium text-orange-900">Common Issues & Solutions:</h3>
          <ul className="list-disc list-inside space-y-1 text-orange-800">
            {commonFailureReasons.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
          <button
            onClick={handleHelp}
            className="mt-2 border border-orange-300 text-orange-700 bg-transparent hover:bg-orange-100 px-4 py-2 rounded-md w-full"
          >
            Get Help Now
          </button>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center text-sm text-blue-700">
          🔒 Your payment information is always secure. Failed transactions do not compromise your account security.
        </div>
      </div>
    </div>
  )
}

function FallbackLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 p-4">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 text-center space-y-3 w-full max-w-sm">
        <div className="animate-spin h-10 w-10 border-b-2 border-red-600 mx-auto rounded-full"></div>
        <h3 className="text-lg font-semibold">Loading...</h3>
        <p className="text-gray-600 text-sm">Please wait while we load the payment status.</p>
      </div>
    </div>
  )
}
