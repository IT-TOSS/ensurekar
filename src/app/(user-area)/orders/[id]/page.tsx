
// 'use client';
// import { OrderHistoryOne } from "@/api/SEOSetup/ordersList";
// import { motion } from "framer-motion";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// type PageProps = {
//     params: {
//         id: string;
//     };
// };

// type OrderDetail = {
//     id: string;
//     amount: string;
//     date: string;
//     status: string;
//     method: string;
//     reference: string;
//     total: number;
//     tracking_id?: string; // Added tracking_id as an optional property
// };

// const Page = ({ params }: PageProps) => {
//     const { id } = params;
//     const [orderDetails, setOrderDetails] = useState<OrderDetail | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchOrderData = async () => {
//             setLoading(true);
//             setError(null);

//             try {
//                 // Try both data sources
//                 const [apiResponse, localResponse] = await Promise.all([
//                     axios.get("https://edueye.co.in/ensurekar/existing-site/orderid_get.php", {
//                         headers: { "Content-Type": "application/json" },
//                     }).catch(err => null),

//                     OrderHistoryOne(id).catch(err => null)
//                 ]);

//                 // Process API response
//                 if (apiResponse?.data?.data) {
//                     const allData = apiResponse.data.data;
//                     const userOrder = allData.find((item: any) => item.order_id === id);

//                     if (userOrder) {
//                         setOrderDetails({
//                             id: userOrder.order_id || "N/A",
//                             amount: `${userOrder.total_amount || '0.00'}`,
//                             date: userOrder.date || userOrder.created_at || "N/A",
//                             status: userOrder.order_status || "Processing",
//                             method: userOrder.payment_method || "N/A",
//                             reference: userOrder.order_id || "N/A",
//                             total: parseFloat(userOrder.amount) || 0,
//                             tracking_id: userOrder.tracking_id || "N/A",
//                         });
//                         setLoading(false);
//                         return;
//                     }
//                 }

//                 // If API response didn't have matching order, try local data
//                 if (localResponse) {
//                     setOrderDetails({
//                         id: localResponse.id || id,
//                         amount: localResponse.amount || "0.00",
//                         date: localResponse.date || "N/A",
//                         status: localResponse.status || "Processing",
//                         method: localResponse.method || "N/A",
//                         reference: localResponse.reference || id,
//                         total: localResponse.total || 0,
//                         tracking_id: localResponse.tracking_id || "N/A",
//                     });
//                     setLoading(false);
//                     return;
//                 }

//                 // No data found in either source
//                 setError("Order not found");
//                 setLoading(false);
//             } catch (error) {
//                 console.error("Error fetching order data:", error);
//                 setError("Failed to load order details. Please try again later.");
//                 setLoading(false);
//             }
//         };

//         fetchOrderData();
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

//                 {loading && (
//                     <div className="text-center py-8">
//                         <p className="text-gray-500">Loading order details...</p>
//                     </div>
//                 )}

//                 {error && (
//                     <div className="text-center py-8">
//                         <p className="text-red-500">{error}</p>
//                     </div>
//                 )}

//                 {!loading && !error && orderDetails && (
//                     <div className="space-y-4">
//                         {Object.entries(orderDetails).map(([key, value], index) => (
//                             key !== 'id' && (
//                                 <motion.div
//                                     key={key}
//                                     className="flex justify-between items-center border-b-2 p-2 border-black/5 text-gray-700"
//                                     initial={{ opacity: 0, x: -20 }}
//                                     animate={{ opacity: 1, x: 0 }}
//                                     transition={{ delay: 0.1 * index, duration: 0.4 }}
//                                 >
//                                     <span className="capitalize font-bold">{key}:</span>
//                                     <span className="text-right text-bodyText">{String(value)}</span>
//                                 </motion.div>
//                             )
//                         ))}
//                     </div>
//                 )}

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
import Image from "next/image"; 
import ensureLogo from "../../../images/ensure_logo.png"; 
import { Download, PrinterIcon } from "lucide-react";

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
    tracking_id?: string;
    items?: Array<{
        name: string;
        quantity: number;
        price: number;
    }>;
    customer?: {
        name: string;
        email: string;
        address: string;
    };
};

const Page = ({ params }: PageProps) => {
    const { id } = params;
    const [orderDetails, setOrderDetails] = useState<OrderDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // For demo purposes - normally these would come from your database
    const companyInfo = {
        name: "ensurekar",
        address: "2360 Tiwari Sadan, Jabalpur, Madhya Pradesh",
        email: "infoensurekar@gmail.com",
        phone: "+91 7470756060",
        website: "ensurekar.com",
        gst: "comming soon",
    };

    useEffect(() => {
        const fetchOrderData = async () => {
            setLoading(true);
            setError(null);

            try {
                // Try both data sources
                const [apiResponse] = await Promise.all([
                    axios.get("https://edueye.co.in/ensurekar/existing-site/orderid_get.php", {
                        headers: { "Content-Type": "application/json" },
                    }).catch(err => null),

                    // OrderHistoryOne(id).catch(err => null)
                ]);

                // Process API response
                if (apiResponse?.data?.data) {
                    const allData = apiResponse.data.data;
                    const userOrder = allData.find((item: any) => item.order_id === id);

                    if (userOrder) {
                        // Mock items for demonstration - in production, fetch actual items
                        const mockItems = [
                            {
                                name: "Product/Service Item",
                                quantity: 1,
                                price: parseFloat(userOrder.total_amount) || 0
                            }
                        ];

                        setOrderDetails({
                            id: userOrder.order_id || "N/A",
                            amount: `${userOrder.total_amount || '0.00'}`,
                            date: formatDate(userOrder.date || userOrder.created_at || "N/A"),
                            status: userOrder.order_status || "Processing",
                            method: userOrder.payment_method || "N/A",
                            reference: userOrder.order_id || "N/A",
                            total: parseFloat(userOrder.total_amount) || 0,
                            tracking_id: userOrder.tracking_id || "N/A",
                            items: mockItems,
                            customer: {
                                name: userOrder.customer_name || "Customer",
                                email: userOrder.customer_email || "customer@example.com",
                                address: userOrder.shipping_address || "Customer Address not found"
                            }
                        });
                        setLoading(false);
                        return;
                    }
                }

                // If API response didn't have matching order, try local data
                // if (localResponse) {
                //     // Mock items for demonstration
                //     const mockItems = [
                //         {
                //             name: "Product/Service Item",
                //             quantity: 1,
                //             price: localResponse.total || 0
                //         }
                //     ];

                //     setOrderDetails({
                //         id: localResponse.id || id,
                //         amount: localResponse.amount || "0.00",
                //         date: formatDate(localResponse.date || "N/A"),
                //         status: localResponse.status || "Processing",
                //         method: localResponse.method || "N/A",
                //         reference: localResponse.reference || id,
                //         total: localResponse.total || 0,
                //         tracking_id: localResponse.tracking_id || "N/A",
                //         items: mockItems,
                //         customer: {
                //             name: "Customer Name",
                //             email: "customer@example.com",
                //             address: "Customer Address"
                //         }
                //     });
                //     setLoading(false);
                //     return;
                // }

                // No data found in either source
                setError("Order not found");
                setLoading(false);
            } catch (error) {
                console.error("Error fetching order data:", error);
                setError("Failed to load invoice details. Please try again later.");
                setLoading(false);
            }
        };

        fetchOrderData();
    }, [id]);

    const formatDate = (dateString: string) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch (e) {
            return dateString;
        }
    };

    const handlePrint = () => {
        window.print();
    };

    const handleDownload = () => {
        window.print(); 
    };

    return (
        <div className="py-8 px-4 md:px-8 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto">
                {loading ? (
                    <div className="text-center py-16">
                        <p className="text-gray-500">Loading invoice details...</p>
                    </div>
                ) : error ? (
                    <div className="text-center py-16">
                        <p className="text-red-500">{error}</p>
                    </div>
                ) : orderDetails && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden print:shadow-none print:border-none"
                    >
                        {/* Header with actions */}
                        <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-gray-50 print:hidden">
                            <h1 className="text-2xl font-bold text-gray-800">Invoice</h1>
                            <div className="flex space-x-4">
                                <button
                                    onClick={handlePrint}
                                    className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                                >
                                    <PrinterIcon size={18} />
                                    Print
                                </button>
                                <button
                                    onClick={handleDownload}
                                    className="flex items-center gap-2 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
                                >
                                    <Download size={18} />
                                    Download
                                </button>
                            </div>
                        </div>

                        {/* Invoice Content */}
                        <div className="p-6 md:p-8">
                            {/* Company Header with Logo */}
                            <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                                <div className="mb-4 md:mb-0">
                                    <div className="h-16 w-48 relative bg-white flex items-center justify-center mb-2">
                                        {/* Replace with your actual logo */}
                                        {/* <div className="text-gray-500 font-bold">YOUR LOGO</div> */}
                                            <Image src={ensureLogo} alt="Your Logo" width={150} height={50} />
                                        {/* <div className="mb-4">
                                        </div> */}
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-bold text-gray-800">{companyInfo.name}</h2>
                                        <p className="text-sm text-gray-600">{companyInfo.address}</p>
                                        <p className="text-sm text-gray-600">Email: {companyInfo.email}</p>
                                        <p className="text-sm text-gray-600">Phone: {companyInfo.phone}</p>
                                        <p className="text-sm text-gray-600">Website: {companyInfo.website}</p>
                                        <p className="text-sm text-gray-600">GST: {companyInfo.gst}</p>
                                    </div>
                                </div>

                                <div className="mt-4 md:mt-0">
                                    <div className="text-right">
                                        <h1 className="text-2xl font-bold text-gray-800 mb-1">INVOICE</h1>
                                        <p className="text-gray-600 mb-1"><span className="font-semibold">Invoice No:</span> INV-{orderDetails.id}</p>
                                        <p className="text-gray-600 mb-1"><span className="font-semibold">Date:</span> {orderDetails.date}</p>
                                        <p className="text-gray-600 mb-1">
                                            <span className="font-semibold">Status:</span>
                                            <span className={`ml-1 ${orderDetails.status.toLowerCase() === 'completed' ? 'text-green-600' :
                                                    orderDetails.status.toLowerCase() === 'processing' ? 'text-yellow-600' :
                                                        'text-red-600'
                                                }`}>
                                                {orderDetails.status}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Customer Information */}
                            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Bill To:</h3>
                                <p className="text-gray-700 font-medium">{orderDetails.customer?.name || "Customer"}</p>
                                <p className="text-gray-600">{orderDetails.customer?.email || "Email not provided"}</p>
                                <p className="text-gray-600">{orderDetails.customer?.address || "Address not provided"}</p>
                            </div>

                            {/* Order Items Table */}
                            <div className="mb-8 overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">Item</th>
                                            <th className="py-3 px-4 text-center text-gray-700 font-semibold border-b">Quantity</th>
                                            <th className="py-3 px-4 text-right text-gray-700 font-semibold border-b">Price</th>
                                            <th className="py-3 px-4 text-right text-gray-700 font-semibold border-b">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orderDetails.items ? orderDetails.items.map((item, index) => (
                                            <tr key={index} className="border-b border-gray-200">
                                                <td className="py-4 px-4 text-gray-700">{item.name}</td>
                                                <td className="py-4 px-4 text-center text-gray-700">{item.quantity}</td>
                                                <td className="py-4 px-4 text-right text-gray-700">₹{item.price.toFixed(2)}</td>
                                                <td className="py-4 px-4 text-right text-gray-700">₹{(item.quantity * item.price).toFixed(2)}</td>
                                            </tr>
                                        )) : (
                                            <tr className="border-b border-gray-200">
                                                <td className="py-4 px-4 text-gray-700">Order Item</td>
                                                <td className="py-4 px-4 text-center text-gray-700">1</td>
                                                <td className="py-4 px-4 text-right text-gray-700">₹{orderDetails.total.toFixed(2)}</td>
                                                <td className="py-4 px-4 text-right text-gray-700">₹{orderDetails.total.toFixed(2)}</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Summary */}
                            <div className="flex justify-end mb-8">
                                <div className="w-full max-w-xs">
                                    <div className="flex justify-between py-2 border-b border-gray-200">
                                        <span className="font-medium text-gray-600">Subtotal:</span>
                                        <span className="text-gray-800">₹{orderDetails.total.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-200">
                                        <span className="font-medium text-gray-600">GST (18%):</span>
                                        <span className="text-gray-800">₹{(orderDetails.total * 0.18).toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between py-3 font-bold">
                                        <span className="text-gray-800">Total:</span>
                                        <span className="text-gray-800">₹{(orderDetails.total * 1.18).toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Information */}
                            <div className="mb-8">
                                <h3 className="font-semibold text-gray-800 mb-2">Payment Information:</h3>
                                {/* <p className="text-gray-600"><span className="font-medium">Method:</span> {orderDetails.method}</p> */}
                                <p className="text-gray-600"><span className="font-medium">Reference:</span> {orderDetails.reference}</p>
                                {orderDetails.tracking_id && (
                                    <p className="text-gray-600"><span className="font-medium">Tracking ID:</span> {orderDetails.tracking_id}</p>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="text-center text-gray-500 text-sm mt-8">
                                <p>If you have any questions about this invoice, please contact us.</p>
                                <p>{companyInfo.email} | {companyInfo.phone}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Page;