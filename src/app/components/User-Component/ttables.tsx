"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowBendDoubleUpRight } from "phosphor-react";
import { useSelector, useDispatch } from "react-redux";
import { setInitialRoutes } from "@/store/store";
import { useRouter } from "next/navigation";
import axios from "axios";
import { IRootState } from "@/store";

// Well-defined types for better type safety
interface Order {
    order_id: string;
    tracking_id: string;
    customer_email: string;
    total_amount: number;
    amount: number;
    date: string;
    created_at?: string;
    payment_status: string;
    payment_mode: string;
    cart?: string;
    description?: string;
    discount?: number;
    paid?: number;
    order_status?: string; // Added property
}

interface OrderData {
    order_id: string;
    tracking_id?: string;
    date: string;
    cart?: string;
    description?: string;
    discount?: number;
    amount: number;
    status: string;
    paid?: number;
    mode: string;
    total?: number;
}

interface TableTypes {
    header: string;
    description: string;
    tableHead: string[];
    tableData?: OrderData[]; // Made optional since we're fetching data
}

// Constants to avoid magic strings
const API_URL = "https://edueye.co.in/ensurekar/existing-site/orderid_get.php";
const LOCAL_STORAGE_KEY = "userInfo";

const OrderHistoryTable = ({ itemsData }: { itemsData: TableTypes }) => {
    const { header, description, tableHead } = itemsData;
    const [orders, setOrders] = useState<OrderData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        fetchOrders();
    }, []);

    // Separated fetch logic for better readability
    const fetchOrders = async () => {
        try {
            setLoading(true);
            const userInfo = getUserFromLocalStorage();

            if (!userInfo?.email) {
                setError("User email not found. Please login again.");
                setLoading(false);
                return;
            }

            const response = await axios.get(API_URL, {
                headers: { "Content-Type": "application/json" },
            });

            if (!response.data?.data) {
                setError("No order data received");
                setLoading(false);
                return;
            }

            const allData = response.data.data;
            const userOrders = allData.filter((item: { customer_email: string }) =>
                item.customer_email === userInfo.email
            );
            console.log("Filtered OrderHistory data:", userOrders);

            const formattedOrders = formatOrderData(userOrders);
            setOrders(formattedOrders);
        } catch (error) {
            console.error("Error fetching or processing order data:", error);
            setError("Failed to load orders. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    // Helper functions for better organization
    const getUserFromLocalStorage = () => {
        try {
            return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "null");
        } catch (e) {
            console.error("Error parsing user info from localStorage:", e);
            return null;
        }
    };

    const formatOrderData = (ordersData: Order[]): OrderData[] => {
        return ordersData.map((order) => ({
            order_id: order.order_id || "N/A",
            tracking_id: order.tracking_id || "N/A",
            cart: order.cart || "N/A",
            amount: order.total_amount || 0,
            description: order.description,
            // paid: order.paid ? "Success" : "Failed",
            status: order.order_status || "N/A",
            date: order.date || order.created_at || "N/A",
            total: parseFloat(order.amount?.toString() || "0") || 0,
            discount: order.discount,
            mode: order.payment_status ? "Success" : "Failed",
        }));
    };

    const handleViewOrder = (id: string) => {
        const currentPath = window.location.pathname;
        dispatch(setInitialRoutes(`${currentPath}/${id}`));
        router.push(`${currentPath}/${id}`);
    };

    const getStatusColor = (status: string) => {
        const statusMap: Record<string, string> = {
            delivered: "bg-green-100 text-green-800",
            shipped: "bg-blue-100 text-blue-800",
            processing: "bg-yellow-100 text-yellow-800",
            cancelled: "bg-red-100 text-red-800",
        };

        return statusMap[status?.toLowerCase()] || "bg-gray-100 text-gray-800";
    };

    // Separated rendering logic for better readability
    const renderTableContent = () => {
        if (loading) {
            return (
                <div className="flex justify-center items-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-700"></div>
                </div>
            );
        }

        if (error) {
            return (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                    {error}
                </div>
            );
        }

        return (
            <div className="overflow-x-auto">
                <table className="w-full mt-4 border-collapse min-w-full">
                    <thead>
                        <tr className="bg-s2">
                            {tableHead.map((head, index) => (
                                <th key={index} className="text-bodyText p-4 text-left">
                                    {head}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {orders.length === 0 ? (
                            <tr>
                                <td colSpan={tableHead.length} className="px-6 py-4 text-center">
                                    No orders found
                                </td>
                            </tr>
                        ) : (
                            orders.map((order, index) => (
                                <OrderRow
                                    key={order.order_id}
                                    order={order}
                                    index={index}
                                    getStatusColor={getStatusColor}
                                    onViewOrder={handleViewOrder}
                                />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="p-6"
        >
            <div className="bg-white bg-opacity-80 backdrop-blur-lg shadow-xl rounded-lg p-6 text-bodyText">
                {header && <h2 className="text-2xl text-purple-700 font-bold mb-4">{header}</h2>}
                {description && <p className="text-bodyText mb-4">{description}</p>}
                {renderTableContent()}
            </div>
        </motion.div>
    );
};

// Separated component for each order row
interface OrderRowProps {
    order: OrderData;
    index: number;
    getStatusColor: (status: string) => string;
    onViewOrder: (id: string) => void;
}

const OrderRow = ({ order, index, getStatusColor, onViewOrder }: OrderRowProps) => {
    return (
        <motion.tr
            key={order.order_id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
        >
            <td className="px-6 py-4 whitespace-nowrap">{order.tracking_id}</td>

            {order.cart && (
                <td className="px-6 py-4 whitespace-nowrap">
                    {order.cart}
                </td>
            )}

            <td className={`px-6 py-4 whitespace-nowrap ${(order.amount) < 0 ? "text-red-500" : "text-green-500"
                }`}>
                ₹{Math.abs(order.amount).toFixed(2)}
            </td>

            {order.discount !== undefined && (
                <td className="px-6 py-4 whitespace-nowrap">
                    {order.discount}
                </td>
            )}
            {order.total !== undefined && (
                <td className="px-6 py-4 whitespace-nowrap text-green-500">
                    {order.total}
                </td>
            )}

            {order.mode && (
                <td className="px-6 py-4 whitespace-nowrap">
                    {order.mode}
                </td>
            )}

            {/* {order.paid !== undefined && (
                <td className="px-6 py-4 whitespace-nowrap">
                    {order.paid}
                </td>
            )} */}


            {order.status && (
                <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-4 py-2 rounded-full text-xs font-semibold ${getStatusColor(order.status)
                        }`}>
                        {order.status}
                    </span>
                </td>
            )}

            {order.date && (
                <td className="px-6 py-4 whitespace-nowrap">
                    {order.date}
                </td>
            )}

            <td className="px-6 py-4 whitespace-nowrap">
                <button
                    type="button"
                    className="text-purple-700 hover:text-purple-900 focus:outline-none"
                    aria-label="View Order"
                    onClick={() => onViewOrder(order.order_id)}
                >
                    <ArrowBendDoubleUpRight size={30} />
                </button>
            </td>
        </motion.tr>
    );
};

export default OrderHistoryTable;