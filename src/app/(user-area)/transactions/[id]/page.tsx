// 'use client';
// import { TransectionHistoryOne } from "@/api/SEOSetup/transectionList";
// import { motion } from "framer-motion";
// import React from "react";

// type PageProps = {
//     params: {
//         id: string;
//     };
// };

// // const transactionDetails = {
// //     amount: "$120.00",
// //     date: "January 10, 2025",
// //     status: "Completed",
// //     method: "Credit Card",
// //     reference: "REF123456789",
// // };

// const Page = ({ params }: PageProps) => {
//     const { id } = params;
// const fetchTransactionDetails = async () => await TransectionHistoryOne(id);

// const [transactionDetails, setTransactionDetails] = React.useState<any>(null);

// React.useEffect(() => {
//     fetchTransactionDetails().then((data) => {
    
//         setTransactionDetails([data]);
//     });
// }, [id]);

//     return (
//         <div className="flex items-center justify-center">
//             <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//                 className="max-w-lg w-full p-6 bg-white rounded-lg shadow-lg border border-gray-200"
//             >
//                 <motion.h1
//                     className="text-2xl font-bold text-gray-800 mb-4"
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.1, duration: 0.5 }}
//                 >
//                     {/* {heading} */}
//                 </motion.h1>
//                 <p className="text-sm text-gray-500 mb-6">
//                     Transaction ID: <span className="font-medium text-gray-800">{id}</span>
//                 </p>
//                 <div className="space-y-4">
//                     {transactionDetails && Object.entries(transactionDetails).map(([key, value], index) => (
//                         <motion.div
//                             key={key}
//                             className="flex justify-between items-center text-gray-700"
//                             initial={{ opacity: 0, x: -20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: 0.1 * index, duration: 0.4 }}
//                         >
//                             <span className="capitalize font-medium">{key}:</span>
//                             <span className="text-right text-indigo-600">{value as React.ReactNode}</span>
//                         </motion.div>
//                     ))}
//                 </div>
//                 <motion.div
//                     initial={{ scale: 0.8, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
//                     className="mt-6 text-center"
//                 >
                  
//                 </motion.div>
//             </motion.div>
//         </div>
//     );
// };

// export default Page;


'use client';
import { OrderHistoryOne } from "@/api/SEOSetup/ordersList";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import axios from "axios";

type PageProps = {
    params: {
        id: string;
    };
};

type OrderDetail = {
    // id: string;
    order_id: string;
    tracking_id?: string;
    bank_ref_no?: string;
    order_status: string;
    failure_message?: string;
    payment_mode: string;
    currency: string;
    amount: string;
    billing_name: string;
    billing_address: string;
    billing_city: string;
    billing_state: string;
    billing_zip: string;
    billing_country: string;
    billing_tel: string;
    billing_email: string;
    merchant_param1?: string;
    payment_status?: string;
    delivery_status?: string;
    customer_name?: string;
    customer_email?: string;
    customer_phone?: string;
    customer_address?: string;
    item_id?: string;
    item_name?: string;
    item_price?: string;
    item_quantity?: string;
    item_subtotal?: string;
    
    total_amount: string;
    created_at: string;
};

const Page = ({ params }: PageProps) => {
    const { id } = params;
    const [orderDetails, setOrderDetails] = useState<OrderDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchOrderData = async () => {
            setLoading(true);
            setError(null);

            try {
                const [apiResponse, localResponse] = await Promise.all([
                    axios.get("/api/orderid-get", {
                        headers: { "Content-Type": "application/json" },
                    }).catch(() => null),
                    OrderHistoryOne(id).catch(() => null),
                ]);

                const extractDetails = (data: any): OrderDetail => ({
                    // id: data.id || id,
                    order_id: data.order_id || "N/A",
                    tracking_id: data.tracking_id || "N/A",
                    bank_ref_no: data.bank_ref_no || "N/A",
                    order_status: data.order_status || "Pending",
                    failure_message: data.failure_message || "N/A",
                    payment_mode: data.payment_method || "N/A",
                    currency: data.currency || "INR",
                    amount: data.amount || "0.00",
                    billing_name: data.billing_name || "N/A",
                    billing_address: data.billing_address || "N/A",
                    billing_city: data.billing_city || "N/A",
                    billing_state: data.billing_state || "N/A",
                    billing_zip: data.billing_zip || "N/A",
                    billing_country: data.billing_country || "N/A",
                    billing_tel: data.billing_tel || "N/A",
                    billing_email: data.billing_email || "N/A",
                    merchant_param1: data.merchant_param1 || "N/A",
                    payment_status: data.payment_status || "N/A",
                    delivery_status: data.delivery_status || "N/A",
                    customer_name: data.customer_name || "N/A",
                    customer_email: data.customer_email || "N/A",
                    customer_phone: data.customer_phone || "N/A",
                    customer_address: data.customer_address || "N/A",
                    item_id: data.item_id || "N/A",
                    item_name: data.item_name || "N/A",
                    item_price: data.item_price || "0",
                    item_quantity: data.item_quantity || "1",
                    item_subtotal: data.item_subtotal || "0.00",
                    // image_src: data.image_src || "",
                    // image_height: data.image_height || "100",
                    // image_width: data.image_width || "100",
                    total_amount: data.total_amount || "0.00",
                    created_at: data.created_at || data.date || "N/A",
                });

                if (apiResponse?.data?.data) {
                    const allData = apiResponse.data.data;
                    const userOrder = allData.find((item: any) => item.order_id === id);
                    if (userOrder) {
                        setOrderDetails(extractDetails(userOrder));
                        setLoading(false);
                        return;
                    }
                }

                if (localResponse) {
                    setOrderDetails(extractDetails(localResponse));
                    setLoading(false);
                    return;
                }

                setError("Order not found");
                setLoading(false);
            } catch (err) {
                console.error("Error fetching order:", err);
                setError("Failed to load order details.");
                setLoading(false);
            }
        };

        fetchOrderData();
    }, [id]);

    return (
        <div className="flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl w-full p-6 bg-white rounded-lg shadow-md"
            >
                <h1 className="text-2xl font-semibold mb-4">Order Details</h1>
                <p className="text-sm text-gray-500 mb-6">Order ID: <span className="font-medium">{id}</span></p>

                {loading && <p className="text-center">Loading...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}

                {!loading && !error && orderDetails && (
                    <div className="space-y-3">
                        {Object.entries(orderDetails).map(([key, value]) => (
                            <div key={key} className="flex justify-between border-b pb-1 text-sm">
                                <span className="font-medium capitalize">{key.replace(/_/g, ' ')}:</span>
                                <span className="text-gray-700 text-right">{value}</span>
                            </div>
                        ))}

                        
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default Page;
