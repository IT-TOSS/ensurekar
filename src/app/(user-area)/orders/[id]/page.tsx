
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
//                     axios.get("/api/orderid-get", {
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
    subtotal?: number;
    gst?: number;
    totalWithGst?: number;
    tracking_id?: string;
    items?: Array<{
        name: string;
        quantity: number;
        price: number;
        subtotal?: number;
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
                    axios.get("/api/orderid-get", {
                        headers: { "Content-Type": "application/json" },
                    }).catch(err => null),

                    // OrderHistoryOne(id).catch(err => null)
                ]);

                // Process API response
                if (apiResponse?.data?.data) {
                    const allData = apiResponse.data.data;
                    // Get all items for this order (multiple rows can have same order_id)
                    const orderItems = allData.filter((item: any) => item.order_id === id);
                    
                    if (orderItems.length > 0) {
                        // Use first order item for customer/order info
                        const firstOrder = orderItems[0];
                        
                        // Build items array from all order rows
                        const items = orderItems.map((orderItem: any) => ({
                            name: orderItem.item_name || "Product/Service Item",
                            quantity: parseInt(orderItem.item_quantity) || 1,
                            price: parseFloat(orderItem.item_price) || 0,
                            subtotal: parseFloat(orderItem.item_subtotal) || (parseFloat(orderItem.item_price) * parseInt(orderItem.item_quantity))
                        }));

                        // Calculate subtotal from all items
                        const subtotal = items.reduce((sum: number, item: { subtotal: number }) => sum + item.subtotal, 0);
                        const gstAmount = subtotal * 0.18;
                        const totalWithGst = subtotal + gstAmount;

                        setOrderDetails({
                            id: firstOrder.order_id || "N/A",
                            amount: `${firstOrder.total_amount || totalWithGst.toFixed(2)}`,
                            date: formatDate(firstOrder.created_at || firstOrder.date || "N/A"),
                            status: firstOrder.order_status || "Processing",
                            method: firstOrder.payment_mode || "N/A",
                            reference: firstOrder.order_id || "N/A",
                            total: parseFloat(firstOrder.total_amount) || totalWithGst,
                            subtotal: subtotal,
                            gst: gstAmount,
                            totalWithGst: totalWithGst,
                            tracking_id: firstOrder.tracking_id || "N/A",
                            items: items,
                            customer: {
                                name: firstOrder.customer_name || "Customer",
                                email: firstOrder.customer_email || "customer@example.com",
                                address: firstOrder.customer_address || firstOrder.billing_address || "Customer Address not found"
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
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                    @media print {
                        /* Page settings */
                        @page {
                            margin: 1.5cm;
                            size: A4 portrait;
                        }
                        
                        /* Reset body */
                        html, body {
                            background: white !important;
                            margin: 0 !important;
                            padding: 0 !important;
                            width: 100% !important;
                            height: auto !important;
                        }
                        
                        /* Hide everything by default using visibility */
                        body * {
                            visibility: hidden;
                        }
                        
                        /* Show invoice print root and all its children */
                        .invoice-print-root,
                        .invoice-print-root * {
                            visibility: visible !important;
                        }
                        
                        /* Position invoice at top */
                        .invoice-print-root {
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 100%;
                            background: white !important;
                            margin: 0 !important;
                            padding: 0 !important;
                        }
                        
                        /* Remove wrapper backgrounds */
                        .invoice-print-root > div {
                            background: white !important;
                            padding: 0 !important;
                            margin: 0 !important;
                        }
                        
                        .invoice-print-root > div > div {
                            background: white !important;
                            padding: 0 !important;
                            margin: 0 !important;
                            max-width: 100% !important;
                        }
                        
                        /* Hide print buttons */
                        .no-print {
                            display: none !important;
                            visibility: hidden !important;
                        }
                        
                        /* Invoice container */
                        .invoice-container {
                            background: white !important;
                            box-shadow: none !important;
                            border: 1px solid #ddd !important;
                            margin: 0 auto !important;
                            padding: 20px !important;
                            page-break-after: avoid;
                            page-break-inside: avoid;
                            width: 100% !important;
                            max-width: 100% !important;
                        }
                        
                        /* Ensure all text is black and visible */
                        .invoice-container,
                        .invoice-container * {
                            color: #000000 !important;
                            background: white !important;
                        }
                        
                        /* Responsive text in print */
                        .invoice-container h1 {
                            font-size: 20px !important;
                        }
                        
                        .invoice-container h2 {
                            font-size: 16px !important;
                        }
                        
                        .invoice-container p,
                        .invoice-container span {
                            font-size: 12px !important;
                        }
                        
                        /* Table styling */
                        .invoice-container table {
                            page-break-inside: avoid;
                            width: 100% !important;
                            border-collapse: collapse !important;
                            font-size: 11px !important;
                        }
                        
                        .invoice-container table th,
                        .invoice-container table td {
                            border: 1px solid #ddd !important;
                            color: #000000 !important;
                            background: white !important;
                            padding: 8px 12px !important;
                        }
                        
                        .invoice-container table thead th {
                            background: #f3f4f6 !important;
                            color: #000000 !important;
                            font-weight: 600 !important;
                        }
                        
                        /* Image styling */
                        .invoice-container img {
                            max-width: 120px !important;
                            height: auto !important;
                        }
                        
                        /* Company info responsive in print */
                        .invoice-container .flex {
                            display: flex !important;
                        }
                        
                        @media print and (max-width: 600px) {
                            .invoice-container {
                                padding: 15px !important;
                            }
                            
                            .invoice-container table th,
                            .invoice-container table td {
                                padding: 6px 8px !important;
                                font-size: 10px !important;
                            }
                        }
                        
                        /* Remove animations */
                        * {
                            animation: none !important;
                            transition: none !important;
                        }
                    }
                `
            }} />
            <div className="invoice-print-root">
                <div className="py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-8 bg-gray-50 min-h-screen">
                    <div className="max-w-4xl mx-auto">
                {loading ? (
                    <div className="text-center py-12 sm:py-16">
                        <p className="text-sm sm:text-base text-gray-500">Loading invoice details...</p>
                    </div>
                ) : error ? (
                    <div className="text-center py-12 sm:py-16">
                        <p className="text-sm sm:text-base text-red-500">{error}</p>
                    </div>
                ) : orderDetails && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="invoice-container bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden print:shadow-none print:border-none"
                    >
                        {/* Header with actions */}
                        <div className="no-print flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 sm:p-6 border-b border-gray-200 bg-gray-50">
                            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Invoice</h1>
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
                                <button
                                    onClick={handlePrint}
                                    className="flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors text-sm sm:text-base w-full sm:w-auto"
                                >
                                    <PrinterIcon size={18} />
                                    <span>Print</span>
                                </button>
                                <button
                                    onClick={handleDownload}
                                    className="flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors text-sm sm:text-base w-full sm:w-auto"
                                >
                                    <Download size={18} />
                                    <span>Download</span>
                                </button>
                            </div>
                        </div>

                        {/* Invoice Content */}
                        <div className="p-4 sm:p-6 md:p-8">
                            {/* Company Header with Logo */}
                            <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-6 sm:mb-8">
                                <div className="w-full lg:w-auto">
                                    <div className="h-12 sm:h-16 w-36 sm:w-48 relative bg-white flex items-center justify-center mb-3 sm:mb-2">
                                        <Image 
                                            src={ensureLogo} 
                                            alt="Ensurekar Logo" 
                                            width={150} 
                                            height={50}
                                            className="object-contain"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-1">{companyInfo.name}</h2>
                                        <p className="text-xs sm:text-sm text-gray-600 break-words">{companyInfo.address}</p>
                                        <p className="text-xs sm:text-sm text-gray-600">Email: <span className="break-all">{companyInfo.email}</span></p>
                                        <p className="text-xs sm:text-sm text-gray-600">Phone: {companyInfo.phone}</p>
                                        <p className="text-xs sm:text-sm text-gray-600">Website: {companyInfo.website}</p>
                                        <p className="text-xs sm:text-sm text-gray-600">GST: {companyInfo.gst}</p>
                                    </div>
                                </div>

                                <div className="w-full lg:w-auto lg:text-right">
                                    <div className="text-left lg:text-right">
                                        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-1">INVOICE</h1>
                                        <p className="text-xs sm:text-sm text-gray-600 mb-1 break-all">
                                            <span className="font-semibold">Invoice No:</span> INV-{orderDetails.id}
                                        </p>
                                        <p className="text-xs sm:text-sm text-gray-600 mb-1">
                                            <span className="font-semibold">Date:</span> {orderDetails.date}
                                        </p>
                                        <p className="text-xs sm:text-sm text-gray-600 mb-1">
                                            <span className="font-semibold">Status:</span>
                                            <span className={`ml-1 ${orderDetails.status.toLowerCase() === 'completed' || orderDetails.status.toLowerCase() === 'success' ? 'text-green-600' :
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
                            <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-gray-50 rounded-lg">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Bill To:</h3>
                                <p className="text-sm sm:text-base text-gray-700 font-medium break-words">{orderDetails.customer?.name || "Customer"}</p>
                                <p className="text-xs sm:text-sm text-gray-600 break-all">{orderDetails.customer?.email || "Email not provided"}</p>
                                <p className="text-xs sm:text-sm text-gray-600 break-words">{orderDetails.customer?.address || "Address not provided"}</p>
                            </div>

                            {/* Order Items Table */}
                            <div className="mb-6 sm:mb-8 overflow-x-auto -mx-4 sm:mx-0">
                                <div className="inline-block min-w-full align-middle">
                                    <table className="w-full border-collapse min-w-[600px] sm:min-w-0">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="py-2 sm:py-3 px-2 sm:px-4 text-left text-xs sm:text-sm text-gray-700 font-semibold border-b">Item</th>
                                                <th className="py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm text-gray-700 font-semibold border-b">Quantity</th>
                                                <th className="py-2 sm:py-3 px-2 sm:px-4 text-right text-xs sm:text-sm text-gray-700 font-semibold border-b">Price</th>
                                                <th className="py-2 sm:py-3 px-2 sm:px-4 text-right text-xs sm:text-sm text-gray-700 font-semibold border-b">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orderDetails.items ? orderDetails.items.map((item, index) => (
                                                <tr key={index} className="border-b border-gray-200">
                                                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-700 break-words">{item.name}</td>
                                                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-center text-xs sm:text-sm text-gray-700">{item.quantity}</td>
                                                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-right text-xs sm:text-sm text-gray-700">₹{item.price.toFixed(2)}</td>
                                                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-right text-xs sm:text-sm text-gray-700">₹{(item.subtotal || (item.quantity * item.price)).toFixed(2)}</td>
                                                </tr>
                                            )) : (
                                                <tr className="border-b border-gray-200">
                                                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-700">Order Item</td>
                                                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-center text-xs sm:text-sm text-gray-700">1</td>
                                                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-right text-xs sm:text-sm text-gray-700">₹{orderDetails.total.toFixed(2)}</td>
                                                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-right text-xs sm:text-sm text-gray-700">₹{orderDetails.total.toFixed(2)}</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Summary */}
                            <div className="flex justify-end mb-6 sm:mb-8">
                                <div className="w-full sm:w-auto sm:min-w-[280px]">
                                    <div className="flex justify-between py-2 border-b border-gray-200">
                                        <span className="text-sm sm:text-base font-medium text-gray-600">Subtotal:</span>
                                        <span className="text-sm sm:text-base text-gray-800">₹{(orderDetails.subtotal || orderDetails.total).toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-200">
                                        <span className="text-sm sm:text-base font-medium text-gray-600">GST (18%):</span>
                                        <span className="text-sm sm:text-base text-gray-800">₹{(orderDetails.gst || (orderDetails.total * 0.18)).toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between py-3 font-bold">
                                        <span className="text-base sm:text-lg text-gray-800">Total:</span>
                                        <span className="text-base sm:text-lg text-gray-800">₹{(orderDetails.totalWithGst || (orderDetails.total * 1.18)).toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Information */}
                            <div className="mb-6 sm:mb-8">
                                <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">Payment Information:</h3>
                                <p className="text-xs sm:text-sm text-gray-600 break-all">
                                    <span className="font-medium">Reference:</span> {orderDetails.reference}
                                </p>
                                {orderDetails.tracking_id && orderDetails.tracking_id !== "N/A" && (
                                    <p className="text-xs sm:text-sm text-gray-600 break-all">
                                        <span className="font-medium">Tracking ID:</span> {orderDetails.tracking_id}
                                    </p>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="text-center text-gray-500 text-xs sm:text-sm mt-6 sm:mt-8">
                                <p className="mb-1">If you have any questions about this invoice, please contact us.</p>
                                <p className="break-all">{companyInfo.email} | {companyInfo.phone}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;