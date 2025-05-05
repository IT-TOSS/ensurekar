// "use client";

// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { ArrowBendDoubleUpRight } from "phosphor-react";
// import { useSelector } from "react-redux";
// import { IRootState } from "@/store";

// import { useDispatch } from "react-redux";
// import { setInitialRoutes } from "@/store/store";
// import { useRouter } from "next/navigation";
// import { tr } from "framer-motion/client";
// import axios from "axios";

// // import {
// //   TableTypes as tableType,
// //   TableCell,
// //   TableRow,
// //   TableData,
// // } from "../../../../types/table-types";

// interface TableTypes {
//   header: string;
//   description: string;
//   tableHead: string[];
//   tableData: {
//     id: string;
//     date?: string;
//     cart?: string;
//     description?: string;
//     discount?: number;
//     amount?: number;
//     status?: string;
//     paid?: number;
//     mode?: string;
//     isLink?: boolean;
//     total?: number;
//   }[];
// }

// const TablesComponent = ({ itemsData }: { itemsData: TableTypes }) => {
//   const { header, description, tableHead, tableData } = itemsData;
//   const themeConfig = useSelector((state: IRootState) => state.themeConfig);
//   const router = useRouter();
//   const dispatch = useDispatch();

//   // useEffect(() => {
//   //   // console.log("Table Data:", tableData);
//   //   // let OrderData :any =[];
//   //   const fetchOrders = async () => {
//   //     try {
//   //       // const data = await OrderHistoryAll();

//   //       let data;
//   //       try {
//   //         // Step 1: Get userInfo from localStorage
//   //         const userInfo = JSON.parse(localStorage.getItem("userInfo") || "null");
//   //         console.log("UserInfo:", userInfo);
//   //         const userGmail = userInfo?.email;
//   //         console.log("UserGmail:", userGmail);  


//   //         if (!userGmail) {
//   //           console.error("Gmail not found in localStorage userInfo.");
//   //           return;
//   //         }

//   //         // Step 2: Fetch all order data
//   //         const response = await axios.get(`https://edueye.co.in/ensurekar/existing-site/orderid_get.php`, {
//   //           headers: {
//   //             "Content-Type": "application/json",
//   //           },
//   //         });

//   //         console.log("OrderHistory response:", response.data);

//   //         // Step 3: Filter data for matching Gmail
//   //         const allData = response.data?.data || [];
//   //         console.log("All Data:", allData);
//   //         // console.log("Filtered Data:", allData.filter((item: { customer_email: string }) => {item.customer_email === userGmail}));
//   //         // const filteredData = allData.filter((item: { gmail: string }) => item.gmail === userGmail);
          
//   //         const filteredData = allData.filter((item: { customer_email: string }) =>
//   //           { item.customer_email === userGmail;
//   //             console.log("Filtered Data:", item.customer_email );
//   //             console.log("UserGmail:", item.customer_email === userGmail);
//   //           });
          
//   //         // Step 4: Show filtered data
//   //         console.log("Filtered OrderHistory data:", filteredData);
//   //         data = filteredData;

//   //       } catch (error) {
//   //         console.error("Error fetching or processing order data:", error);
//   //       }
//   //       return data;
//   //     } catch (error) {
//   //       console.log(error);
//   //       return [];
//   //     }
//   //   };
//   //   fetchOrders();

//   // }, [tableData]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         // Step 1: Get userInfo from localStorage
//         const userInfo = JSON.parse(localStorage.getItem("userInfo") || "null");
//         console.log("UserInfo:", userInfo);
  
//         const userGmail = userInfo?.email;
//         if (!userGmail) {
//           console.error("Gmail not found in localStorage userInfo.");
//           return;
//         }
  
//         // Step 2: Fetch all order data
//         const response = await axios.get("https://edueye.co.in/ensurekar/existing-site/orderid_get.php", {
//           headers: { "Content-Type": "application/json" },
//         });
  
//         const allData = response.data?.data || [];
//         console.log("All Order Data:", allData);
  
//         // Step 3: Filter orders by user's email
//         const filteredData = allData.filter((item: { customer_email: string }) => {
//           const isMatch = item.customer_email === userGmail;
//           console.log(`Checking ${item.customer_email} === ${userGmail} => ${isMatch}`);
//           return isMatch;
//         });
  
//         // Step 4: Log and use filtered data
//         console.log("Filtered OrderHistory data:", filteredData);
  
//         // You may want to set this to state if needed
//         // setTableData(filteredData);
  
//       } catch (error) {
//         console.error("Error fetching or processing order data:", error);
//       }
//     };
  
//     fetchOrders();
//   }, []);
  


//   const handleVisit = (id: string) => {
//     const currentPath = window.location.pathname;
//     dispatch(setInitialRoutes(`${currentPath}/${id}`));
//     router.push(`${currentPath}/${id}`);
//   };
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.3 }}
//       className="p-6"
//     >
//       <div className="bg-white bg-opacity-80 backdrop-blur-lg shadow-xl rounded-lg p-6 text-bodyText">
//         {/* <div>
//           <h2 className="text-2xl text-purple-700 font-bold mb-4">{header}</h2>
//         </div> */}
//         {/* {description && (
//           <div>
//             <p className="text-bodyText">{description}</p>
//           </div>
//         )} */}

//         <div className="overflow-x-auto">
//           <table className="w-full mt-4 border-collapse min-w-full">
//             <thead>
//               <tr className="bg-s2">
//                 {tableHead.map((head, index) => (
//                   <th key={index} className="text-bodyText p-4 text-left">
//                     {head}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {tableData.length === 0 && (
//                 <tr>
//                   <td
//                     colSpan={tableHead.length}
//                     className="px-6 py-4 text-center"
//                   >
//                     No data available
//                   </td>
//                 </tr>
//               )}
//               {tableData.length > 0 &&
//                 tableData.map((data, index) => (
//                   <motion.tr
//                     key={data.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.3, delay: index * 0.1 }}
//                   >
//                     <td className="px-6 py-4 whitespace-nowrap">{data.id}</td>


//                     {data.cart && (
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {data.cart}
//                       </td>
//                     )}

//                     <td
//                       className={`px-6 py-4 whitespace-nowrap ${(data.amount ?? 0) < 0
//                         ? "text-red-500"
//                         : "text-green-500"
//                         }`}
//                     >
//                       ₹{Math.abs(data.amount || 0).toFixed(2)}
//                     </td>
//                     {data.discount && (
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {data.discount}
//                       </td>
//                     )}
//                     {data.paid && (
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {data.paid}
//                       </td>
//                     )}
//                     {data.mode && (
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {data.mode}
//                       </td>
//                     )}
//                     {data.total && (
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {data.total}
//                       </td>
//                     )}
//                     {data.status && (
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span
//                           className={`px-4 py-2 rounded-full text-xs font-semibold ${getStatusColor(
//                             data.status || ""
//                           )}`}
//                         >
//                           {data.status || "N/A"}
//                         </span>
//                       </td>
//                     )}

//                     {data.date && (
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {data.date}
//                       </td>
//                     )}
//                     {/* {data.date && (
//                     <td className="px-6 py-4 whitespace-nowrap">{data.date}</td>
//                   )} */}
//                     {/* {data.description && (
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {data.description}
//                       </td>
//                     )} */}
//                     {/* {data.StatusName && (
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span
//                           className={`px-4 py-2 rounded-full text-xs font-semibold ${getStatusColor(
//                             data.StatusName
//                           )}`}
//                         >
//                           {data.status}
//                         </span>
//                       </td>
//                     )} */}
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       {/* <Link
//                         href={`/order/${data.id}`}
//                         className="text-blue-500 hover:underline"
//                       >
//                         Visit
//                       </Link> */}
//                       <button
//                         type="button"
//                         className="text-purple-700 hover:text-purple-900 focus:outline-none"
//                         aria-label="View Order"
//                         onClick={() => handleVisit(data.id)}
//                       >
//                         <ArrowBendDoubleUpRight size={30} />
//                       </button>
//                     </td>
//                   </motion.tr>
//                 ))}
//               {/* {tableData.map((data, index) => (
//                 <tr>
//                   <motion.td
//                     key={data.id}
//                     className="flex justify-between items-center border-b-2 p-2 border-black/5 text-gray-700"
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.1 * index, duration: 0.4 }}
//                     colSpan={6}
//                   >
//                     <span className="capitalize font-bold">{data.id}:</span>
//                     <span className="text-right text-bodyText">
//                       {JSON.stringify(data)}
//                     </span>
//                   </motion.td>
//                 </tr>
//               ))} */}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </motion.div>
//   );
// };
// function getStatusColor(status: string) {
//   switch (status) {
//     case "Delivered":
//       return "bg-green-100 text-green-800";
//     case "Shipped":
//       return "bg-blue-100 text-blue-800";
//     case "Processing":
//       return "bg-yellow-100 text-yellow-800";
//     default:
//       return "bg-gray-100 text-gray-800";
//   }
// }

// export default TablesComponent;


// ------------------------------


"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowBendDoubleUpRight } from "phosphor-react";
import { useSelector, useDispatch } from "react-redux";
import { setInitialRoutes } from "@/store/store";
import { useRouter } from "next/navigation";
import axios from "axios";
import { IRootState } from "@/store";

interface OrderData {
  id: string;
  date?: string;
  cart?: string;
  description?: string;
  discount?: number;
  amount?: number;
  status?: string;
  paid?: number;
  mode?: string;
  total?: number;
}

interface TableTypes {
  header: string;
  description: string;
  tableHead: string[];
  tableData: OrderData[];
}

const TablesComponent = ({ itemsData }: { itemsData: TableTypes }) => {
  const { header, description, tableHead } = itemsData;
  const [filteredData, setFilteredData] = useState<OrderData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const userInfo = JSON.parse(localStorage.getItem("userInfo") || "null");
        
        if (!userInfo?.email) {
          setError("User email not found. Please login again.");
          setLoading(false);
          return;
        }
        const userEmail = userInfo.email;
        const response = await axios.get("https://edueye.co.in/ensurekar/existing-site/orderid_get.php", {
          headers: { "Content-Type": "application/json" },
        });
        
        if (!response.data?.data) {
          setError("No order data received");
          setLoading(false);
          return;
        }
        console.log("OrderHistory response:", response.data);
        const allData = response.data.data;
        // const userOrders = allData.filter((item: { customer_email: string }) => 
        //   item.customer_email === userEmail
        // );

        const userOrders = allData.filter(
          (item: { customer_email: string; order_status: string }) =>
            item.customer_email === userEmail && item.order_status === "Success"
        );
        console.log("Filtered OrderHistory data:", userOrders);
        
        // Format the data to match the expected OrderData structure
        const formattedOrders = userOrders.map((order: any) => ({
          id: order.order_id || order.id || "N/A",
          amount: order.total_amount || 0,
          date: order.date || order.created_at || "N/A",
          status: order.order_status || "Processing",
          // Add any other fields that come from the API
          // cart: order.cart || "",
          // description: order.description || "",
          // discount: parseFloat(order.discount) || 0,
          // paid: parseFloat(order.paid) || 0,
          // mode: order.payment_method || "N/A",
          total: parseFloat(order.amount) || 0,
        }));
        
        setFilteredData(formattedOrders);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching or processing order data:", error);
        setError("Failed to load orders. Please try again later.");
        setLoading(false);
      }
    };
    
    fetchOrders();
  }, []);

  const handleVisit = (id: string) => {
    const currentPath = window.location.pathname;
    dispatch(setInitialRoutes(`${currentPath}/${id}`));
    router.push(`${currentPath}/${id}`);
  };

  // Helper function to determine status badge color
  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case "delivered":
        return "bg-green-100 text-green-800";
      case "shipped":
        return "bg-blue-100 text-blue-800";
      case "processing":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
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

        {loading ? (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-700"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
            {error}
          </div>
        ) : (
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
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan={tableHead.length} className="px-6 py-4 text-center">
                      No orders found
                    </td>
                  </tr>
                ) : (
                  filteredData.map((data, index) => (
                    <motion.tr
                      key={data.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">{data.id}</td>
                      
                      {data.cart && (
                        <td className="px-6 py-4 whitespace-nowrap">
                          {data.cart}
                        </td>
                      )}
                      
                      <td className={`px-6 py-4 whitespace-nowrap ${
                        (data.amount ?? 0) < 0 ? "text-red-500" : "text-green-500"
                      }`}>
                        ₹{Math.abs(data.amount || 0).toFixed(2)}
                      </td>
                      
                      {data.discount !== undefined && (
                        <td className="px-6 py-4 whitespace-nowrap">
                          {data.discount}
                        </td>
                      )}
                      
                      {data.paid !== undefined && (
                        <td className="px-6 py-4 whitespace-nowrap">
                          {data.paid}
                        </td>
                      )}
                      
                      {data.mode && (
                        <td className="px-6 py-4 whitespace-nowrap">
                          {data.mode}
                        </td>
                      )}
                      
                      {data.total !== undefined && (
                        <td className="px-6 py-4 whitespace-nowrap text-green-500">
                          {data.total}
                        </td>
                      )}
                      
                      {data.status && (
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-4 py-2 rounded-full text-xs font-semibold ${
                            getStatusColor(data.status)
                          }`}>
                            {data.status}
                          </span>
                        </td>
                      )}
                      
                      {data.date && (
                        <td className="px-6 py-4 whitespace-nowrap">
                          {data.date}
                        </td>
                      )}
                      
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          type="button"
                          className="text-purple-700 hover:text-purple-900 focus:outline-none"
                          aria-label="View Order"
                          onClick={() => handleVisit(data.id)}
                        >
                          <ArrowBendDoubleUpRight size={30} />
                        </button>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TablesComponent;