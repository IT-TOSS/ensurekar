// 'use client';
// import { OrderHistoryOne } from "@/api/SEOSetup/ordersList";
// import { motion } from "framer-motion";
// import React, { useEffect } from "react";
// import axios from "axios";
// import { useState } from "react";

// type PageProps = {
//     params: {
//         id: string;
//     };
// };

// // const orderDetails = {
// //     amount: "$120.00",
// //     date: "January 10, 2025",
// //     status: "Completed",
// //     method: "Credit Card",
// //     reference: "REF123456789",
// // };

// const Page = ({ params }: PageProps) => {


//     const { id } = params;
//     const fetchOrderHistory = async () => await OrderHistoryOne(id);

//     const [orderDetails, setOrderDetails] = React.useState<any>(null);
//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 const response = await axios.get("https://edueye.co.in/ensurekar/existing-site/orderid_get.php", {
//                     headers: { "Content-Type": "application/json" },
//                 });

//                 if (!response.data?.data) {
//                     console.error("No order data received");
//                     return;
//                 }
//                 console.log("OrderHistory response:", response.data);
//                 const allData = response.data.data;
//                 const userOrders = allData.filter((item: { customer_email: string; order_id: string }) =>
//                     item.order_id === id
//                 );
//                 console.log("Filtered OrderHistory data:", userOrders);
//                 const formattedOrders = userOrders.map((order: any) => ({
//                     id: order.order_id || order.id || "N/A",
//                     amount: order.total_amount || 0,
//                     date: order.date || order.created_at || "N/A",
//                     status: order.order_status || "Processing",
//                     method: order.payment_method || "N/A",
//                     reference: order.order_id || "N/A",
//                     total: parseFloat(order.amount) || 0,
//                 }));

//                 setOrderDetails(formattedOrders);
//                 // setLoading(false);
//             } catch (error) {
//                 console.error("Error fetching or processing order data:", error);
//                 // setError("Failed to load orders. Please try again later.");
//                 // setLoading(false);
//             }
//         };

//         fetchOrders();
//     }, []);




//     React.useEffect(() => {
//         fetchOrderHistory().then((data) => {

//             setOrderDetails([data]);
//         });
//     }, [id]);
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
//                     Order Details
//                 </motion.h1>
//                 <p className="text-sm text-gray-500 mb-6">
//                     Order ID: <span className="font-medium text-gray-800">{id}</span>
//                 </p>
//                 <div className="space-y-4">
//                     {orderDetails && Object.entries(orderDetails).map(([key, value], index) => (
//                         <motion.div
//                             key={key}
//                             className="flex justify-between items-center border-b-2 p-2 border-black/5 text-gray-700"
//                             initial={{ opacity: 0, x: -20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: 0.1 * index, duration: 0.4 }}
//                         >
//                             <span className="capitalize font-bold">{key}:</span>
//                             <span className="text-right text-bodyText">{String(value)}</span>
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
    id: string;
    amount: string;
    date: string;
    status: string;
    method: string;
    reference: string;
    total: number;
    tracking_id?: string; // Added tracking_id as an optional property
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
                // Try both data sources
                const [apiResponse, localResponse] = await Promise.all([
                    axios.get("https://edueye.co.in/ensurekar/existing-site/orderid_get.php", {
                        headers: { "Content-Type": "application/json" },
                    }).catch(err => null),

                    OrderHistoryOne(id).catch(err => null)
                ]);

                // Process API response
                if (apiResponse?.data?.data) {
                    const allData = apiResponse.data.data;
                    const userOrder = allData.find((item: any) => item.order_id === id);

                    if (userOrder) {
                        setOrderDetails({
                            id: userOrder.order_id || "N/A",
                            amount: `$${userOrder.total_amount || '0.00'}`,
                            date: userOrder.date || userOrder.created_at || "N/A",
                            status: userOrder.order_status || "Processing",
                            method: userOrder.payment_method || "N/A",
                            reference: userOrder.order_id || "N/A",
                            total: parseFloat(userOrder.amount) || 0,
                            tracking_id: userOrder.tracking_id || "N/A",
                        });
                        setLoading(false);
                        return;
                    }
                }

                // If API response didn't have matching order, try local data
                if (localResponse) {
                    setOrderDetails({
                        id: localResponse.id || id,
                        amount: localResponse.amount || "$0.00",
                        date: localResponse.date || "N/A",
                        status: localResponse.status || "Processing",
                        method: localResponse.method || "N/A",
                        reference: localResponse.reference || id,
                        total: localResponse.total || 0,
                        tracking_id: localResponse.tracking_id || "N/A",
                    });
                    setLoading(false);
                    return;
                }

                // No data found in either source
                setError("Order not found");
                setLoading(false);
            } catch (error) {
                console.error("Error fetching order data:", error);
                setError("Failed to load order details. Please try again later.");
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
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-lg w-full p-6 bg-white rounded-lg shadow-lg border border-gray-200"
            >
                <motion.h1
                    className="text-2xl font-bold text-gray-800 mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                >
                    Order Details
                </motion.h1>
                <p className="text-sm text-gray-500 mb-6">
                    Order ID: <span className="font-medium text-gray-800">{id}</span>
                </p>

                {loading && (
                    <div className="text-center py-8">
                        <p className="text-gray-500">Loading order details...</p>
                    </div>
                )}

                {error && (
                    <div className="text-center py-8">
                        <p className="text-red-500">{error}</p>
                    </div>
                )}

                {!loading && !error && orderDetails && (
                    <div className="space-y-4">
                        {Object.entries(orderDetails).map(([key, value], index) => (
                            key !== 'id' && (
                                <motion.div
                                    key={key}
                                    className="flex justify-between items-center border-b-2 p-2 border-black/5 text-gray-700"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                                >
                                    <span className="capitalize font-bold">{key}:</span>
                                    <span className="text-right text-bodyText">{String(value)}</span>
                                </motion.div>
                            )
                        ))}
                    </div>
                )}

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                    className="mt-6 text-center"
                >
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Page;