"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowBendDoubleUpRight } from "phosphor-react";
import { useSelector } from "react-redux";
import { IRootState } from "@/store";

import { useDispatch } from "react-redux";
import { setInitialRoutes } from "@/store/store";
import { useRouter } from "next/navigation";
import { tr } from "framer-motion/client";

// import {
//   TableTypes as tableType,
//   TableCell,
//   TableRow,
//   TableData,
// } from "../../../../types/table-types";

interface TableTypes {
  header: string;
  description: string;
  tableHead: string[];
  tableData: {
    id: string;
    date?: string;
    cart?: string;
    description?: string;
    discount?: number;
    amount?: number;
    status?: string;
    paid?: number;
    mode?: string;
    isLink?: boolean;
    total?: number;
  }[];
}

const TablesComponent = ({ itemsData }: { itemsData: TableTypes }) => {
  const { header, description, tableHead, tableData } = itemsData;
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const router = useRouter();
  const dispatch = useDispatch();


  const handleVisit = (id: string) => {
    const currentPath = window.location.pathname;
    dispatch(setInitialRoutes(`${currentPath}/${id}`));
    router.push(`${currentPath}/${id}`);
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="p-6"
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-lg shadow-xl rounded-lg p-6 text-bodyText">
        {/* <div>
          <h2 className="text-2xl text-purple-700 font-bold mb-4">{header}</h2>
        </div> */}
        {/* {description && (
          <div>
            <p className="text-bodyText">{description}</p>
          </div>
        )} */}

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
              {tableData.length === 0 && (
                <tr>
                  <td
                    colSpan={tableHead.length}
                    className="px-6 py-4 text-center"
                  >
                    No data available
                  </td>
                </tr>
              )}
              {tableData.length > 0 &&
                tableData.map((data, index) => (
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

                    <td
                      className={`px-6 py-4 whitespace-nowrap ${
                        (data.amount ?? 0) < 0
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      ₹{Math.abs(data.amount || 0).toFixed(2)}
                    </td>
                    {data.discount && (
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data.discount}
                      </td>
                    )}
                    {data.paid && (
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data.paid}
                      </td>
                    )}
                    {data.mode && (
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data.mode}
                      </td>
                    )}
                    {data.total && (
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data.total}
                      </td>
                    )}
                      {data.status &&(
  <td className="px-6 py-4 whitespace-nowrap">
  <span
    className={`px-4 py-2 rounded-full text-xs font-semibold ${getStatusColor(
      data.status || ""
    )}`}
  >
    {data.status || "N/A"}
  </span>
</td>
                      )}
                  
                    {data.date && (
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data.date}
                      </td>
                    )}
                    {/* {data.date && (
                    <td className="px-6 py-4 whitespace-nowrap">{data.date}</td>
                  )} */}
                    {/* {data.description && (
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data.description}
                      </td>
                    )} */}
                    {/* {data.StatusName && (
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-4 py-2 rounded-full text-xs font-semibold ${getStatusColor(
                            data.StatusName
                          )}`}
                        >
                          {data.status}
                        </span>
                      </td>
                    )} */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      {/* <Link
                        href={`/order/${data.id}`}
                        className="text-blue-500 hover:underline"
                      >
                        Visit
                      </Link> */}
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
                ))}
              {/* {tableData.map((data, index) => (
                <tr>
                  <motion.td
                    key={data.id}
                    className="flex justify-between items-center border-b-2 p-2 border-black/5 text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    colSpan={6}
                  >
                    <span className="capitalize font-bold">{data.id}:</span>
                    <span className="text-right text-bodyText">
                      {JSON.stringify(data)}
                    </span>
                  </motion.td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};
function getStatusColor(status: string) {
  switch (status) {
    case "Delivered":
      return "bg-green-100 text-green-800";
    case "Shipped":
      return "bg-blue-100 text-blue-800";
    case "Processing":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

export default TablesComponent;
