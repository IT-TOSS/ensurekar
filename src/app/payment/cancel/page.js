// // File: /app/payment/cancel/page.js
// "use client";

// import React, { useState, useEffect, use } from "react";
// import { useSearchParams } from "next/navigation";
// import Link from "next/link";


// export default async function PaymentCancel() {

//   const [paymentData, setPaymentData] = useState(null);
//   const [paymentDataStatur, setPaymentDataStatur] = useState(false); 

//   useEffect(() => {
//     const encoded = new URLSearchParams(window.location.search).get('data');
//     if (encoded) {
//       try {
//         const decoded = JSON.parse(atob(encoded));
//         setPaymentData(decoded);
//         console.log(decoded, "Decoded Payment Data");
//       } catch (e) {
//         console.error("Failed to decode payment data:", e);
//       }
//     }
//   }, []);

//   // 
  
//   useEffect(() => {
//     const postPaymentData = async () => {
//       try {
//         const formData = new URLSearchParams();
//         for (const key in paymentData) {
//           formData.append(key, paymentData[key] ?? ""); // Handle nulls
//         }
  
//         const response = await axios.post(
//           'https://edueye.co.in/ensurekar/existing-site/orderidpost.php',
//           formData,
//           {
//             headers: {
//               'Content-Type': 'application/x-www-form-urlencoded',
//             },
//           }
//         );
  
//         console.log(response.data, "Response from server");
  
//         if (response.data.status === "success") {
//           setPaymentDataStatur(true);
//           console.log(response.data.message);
//         } else {
//           console.warn("Payment failed or not saved:", response.data.message);
//         }
//       } catch (error) {
//         console.error("Error posting payment data:", error);
//       }
//     };
  
//     if (paymentData && Object.keys(paymentData).length) {
//       postPaymentData();
//     }
//   }, []);
  




//   const searchParams = useSearchParams();
//   // const orderId = searchParams.get("order_id");
//   // const reason = searchParams.get("reason");
//   // const error = searchParams.get("error");

//   console.log(paymentData, "Payment Data");

//   // const tracking_id = paymentData.tracking_id;
//   const orderId = paymentData?.order_id || '';
//   const reason = paymentData?.order_status || '';
//   const error = paymentData?.status_message || '';
//   //------------------------------------------------------------------



//   //   const [paymentData, setPaymentData] = useState(null);
//   //   const [paymentDataStatur, setPaymentDataStatur] = useState(false); 

//   //   useEffect(() => {
//   //     const encoded = new URLSearchParams(window.location.search).get('data');
//   //     if (encoded) {
//   //       try {
//   //         const decoded = JSON.parse(atob(encoded));
//   //         console.log(decoded, " Decoded Payment Data");
//   //         setPaymentData(decoded);
//   //       } catch (e) {
//   //         console.error(" Failed to decode payment data:", e);
//   //       }
//   //     }
//   //   }, []);

//   //   // useEffect(() => {
//   //   //   const postPaymentData = async () => {
//   //   //     try {
//   //   //       const response = await axios.post('', paymentData, {
//   //   //         headers: {
//   //   //           'Content-Type': 'application/json'
//   //   //         }
//   //   //       });
//   //   //       console.log(response, "Response from server");
//   //   //       setPaymentDataStatur(true);

//   //   //     } catch (error) {
//   //   //       console.error("Error posting payment data:", error);
//   //   //     }
//   //   //   };

//   //   //   if (paymentData) {
//   //   //     postPaymentData();
//   //   //   }
//   //   // }, []);
//   // // const searchParams = useSearchParams();

//   //   console.log(paymentData, "Payment Data");

//   //   // const tracking_id = paymentData.tracking_id;

//   //   // const orderId = paymentData.order_id;
//   //   // const reason = paymentData.order_status;
//   //   // const error = paymentData.status_message;

//   //   // console.log(tracking_id, "tracking_id");


//   //   // const [paymentData, setPaymentData] = useState(null);

//   //   useEffect(() => {
//   //     const encoded = new URLSearchParams(window.location.search).get('data');
//   //     if (encoded) {
//   //       try {
//   //         const decoded = JSON.parse(atob(encoded));
//   //         setPaymentData(decoded);
//   //         console.log(decoded, "Decoded Payment Data");
//   //       } catch (e) {
//   //         console.error("Failed to decode payment data:", e);
//   //       }
//   //     }
//   //   }, []);



//   // const searchParams = useSearchParams();
//   // const orderId = searchParams.get("order_id");
//   // const reason = searchParams.get("reason");
//   // const error = searchParams.get("error");

//   // console.log(paymentData, "Payment Data");



//   return (
//     <div className="container mx-auto px-4 py-16 text-center">
//       <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg">
//         <div className="text-red-500 mb-4">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-16 w-16 mx-auto"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </div>

//         <h1 className="text-2xl font-bold mb-4">Payment Unsuccessful</h1>

//         <p className="mb-4">
//           Your payment could not be processed successfully.
//         </p>


//         {orderId && (
//           <>
//             <div className="mb-4 p-4 bg-gray-50 rounded">
//               <p><span className="font-semibold">Order ID:</span> {orderId}</p>
//             </div>
//           </>
//         )}

//         {/* <p className="background-red-500">{paymentDataStatur}</p> */}
//         {!paymentDataStatur && (
//           <p className="mb-4 p-4 bg-gray-50 rounded">
//             <span className="font-semibold">server error</span> {paymentDataStatur}
//           </p>
//         )}

//         {/* Display reason or error message */}

//         {(reason || error) && (
//           <p className="mb-6 text-red-600">
//             {reason || error === 'no_response' ? 'No response received from payment gateway.' :
//               error === 'decrypt_failed' ? 'Failed to process payment response.' :
//                 error === 'processing_failed' ? 'An error occurred while processing your payment.' :
//                   reason || 'Unknown error'}
//           </p>
//         )}

//         <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
//           <Link href="/checkout" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//             Try Again
//           </Link>

//           <Link href="/" className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50">
//             Return to Home
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";

export default function PaymentCancel() {
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

  const orderId = paymentData?.order_id || "";
  const reason = paymentData?.order_status || "";
  const error = paymentData?.status_message || "";

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="text-red-500 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold mb-4">Payment Unsuccessful</h1>

        <p className="mb-4">Your payment could not be processed successfully.</p>

        {orderId && (
          <div className="mb-4 p-4 bg-gray-50 rounded">
            <p>
              <span className="font-semibold">Order ID:</span> {orderId}
            </p>
          </div>
        )}


        {(reason || error) && (
          <p className="mb-6 text-red-600">
            {reason || error === "no_response"
              ? "No response received from payment gateway."
              : error === "decrypt_failed"
              ? "Failed to process payment response."
              : error === "processing_failed"
              ? "An error occurred while processing your payment."
              : reason || "Unknown error"}
          </p>
        )}

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link href="/checkout" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Try Again
          </Link>
          <Link href="/" className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
