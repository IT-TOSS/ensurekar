// File: /app/payment/success/page.js
"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";

export default function PaymentSuccess() {

  
  const [paymentData, setPaymentData] = useState(null);
  const [paymentDataStatus, setPaymentDataStatus] = useState(false);

  useEffect(() => {
    const encoded = new URLSearchParams(window.location.search).get("data");
    if (encoded) {
      try {
        const decoded = JSON.parse(atob(encoded));
        setPaymentData(decoded);
        console.log(decoded, "Decoded Payment Data");
      } catch (e) {
        console.error("Failed to decode payment data:", e);
      }
    }
  }, []);

  useEffect(() => {
    const postPaymentData = async () => {
      try {
        const formData = new URLSearchParams();

        for (const key in paymentData) {
          const value = paymentData[key];
          if (value !== null && value !== undefined && value !== "") {
            formData.append(key, value);
          }
        }

        const response = await axios.post(
          "https://edueye.co.in/ensurekar/existing-site/orderidpost.php",
          formData,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        console.log(response.data, "Response from server");

        if (response.data.status === "success") {
          setPaymentDataStatus(true);
        } else {
          console.warn("Payment not saved:", response.data.message);
        }
      } catch (error) {
        console.error("Error posting payment data:", error);
      }
    };

    if (paymentData && Object.keys(paymentData).length) {
      postPaymentData();
    }
  }, [paymentData]);

  // const searchParams = useSearchParams();
  // const orderId = searchParams.get("order_id");
  // const trackingId = searchParams.tracking_id;

  const orderId = paymentData?.order_id || "";
  const reason = paymentData?.order_status || "";
  const error = paymentData?.status_message || "";

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="text-green-500 mb-4">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-16 w-16 mx-auto" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
        
        <p className="mb-4">
          Thank you for your purchase. Your order has been successfully processed.
        </p>
        
        <div className="mb-6 p-4 bg-gray-50 rounded">
          <p className="mb-2"><span className="font-semibold">Order ID:</span> {orderId || 'N/A'}</p>
          {/* {trackingId && (
            <p><span className="font-semibold">Transaction ID:</span> {trackingId}</p>
          )} */}
        </div>
        
        <p className="mb-6">
          You will receive a confirmation email shortly with your order details.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Return to Home
          </Link>
          
          <Link href="/orders" className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50">
            View My Orders
          </Link>
        </div>
      </div>
    </div>
  );
}