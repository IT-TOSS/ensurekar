'use client';
import { OrderHistoryOne } from "@/api/SEOSetup/ordersList";
import { motion } from "framer-motion";
import React from "react";

type PageProps = {
    params: {
        id: string;
    };
};

// const orderDetails = {
//     amount: "$120.00",
//     date: "January 10, 2025",
//     status: "Completed",
//     method: "Credit Card",
//     reference: "REF123456789",
// };

const Page = ({ params }: PageProps) => {
    const { id } = params;
    const fetchOrderHistory = async () => await OrderHistoryOne(id);

    const [orderDetails, setOrderDetails] = React.useState<any>(null);
    
    React.useEffect(() => {
        fetchOrderHistory().then((data) => {
        
            setOrderDetails([data]);
        });
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
                <div className="space-y-4">
                    { orderDetails && Object.entries(orderDetails).map(([key, value], index) => (
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
                    ))}
                </div>
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
