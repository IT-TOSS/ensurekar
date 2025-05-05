import { TableTypes } from "../../../../types/table-types";
import TablesComponent from "@/app/components/User-Component/tables";

import { seoData as getSeoData } from "@/api/SEOSetup/seoSetup";

import { Metadata } from "next";
import { OrderHistoryAll } from "@/api/SEOSetup/ordersList";
import axios from "axios";
export const metadata = async (): Promise<Metadata> => {
  const seoData = await getSeoData({
    title: "Orders",
    description:
      "View your order history",
  });

  return {
    // name: seoData?.name,
    title: `Ensurekar ${"| " + seoData?.title}`,
    description: seoData?.description,
  };
};


export default async function OrderList() {
    const orders = [
        {
          id: "1",
          date: "2023-05-01",
          amount: 99.99,
          status: "Delivered",
          isLink: true,
        },
        {
          id: "2",
          date: "2023-05-15",
          amount: 149.99,
          status: "Shipped",
          isLink: true,
        },
        {
          id: "3",
          date: "2023-05-30",
          amount: 79.99,
          status: "Processing",
          isLink: true,
        },
      ];
  

  // let OrderData :any =[];
  const fetchOrders = async () => {
    try {
      // const data = await OrderHistoryAll();

      let data;
      try {
        // Step 1: Get userInfo from localStorage
        const userInfo = JSON.parse(localStorage.getItem("userInfo") || "null");
        const userGmail = userInfo?.gmail;
      
        if (!userGmail) {
          console.error("Gmail not found in localStorage userInfo.");
          return;
        }
      
        // Step 2: Fetch all order data
        const response = await axios.get(`https://edueye.co.in/ensurekar/existing-site/orderid_get.php`, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("OrderHistory response:", response.data);
      
        // Step 3: Filter data for matching Gmail
        const allData = response.data?.data || [];
        const filteredData = allData.filter((item: { gmail: string }) => item.gmail === userGmail);
      
        // Step 4: Show filtered data
        console.log("Filtered OrderHistory data:", filteredData);
        data=filteredData;
        
      } catch (error) {
        console.error("Error fetching or processing order data:", error);
      }
      

     
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  // const filterOrders = (data: any) => {
  //   return data.map((item: any) => {
  //     return {
  //       id: item.id || "N/A",
  //       date: item.OrderDate || "N/A",
  //       amount: item.amount || "N/A",
  //       total: item.total || "N/A",
  //       status: item.StatusName || "N/A",
  //       isLink: true,
  //     };
  //   });
  // };

  const filterOrders = (jsonData: string) => {
    try {
      const data = JSON.parse(jsonData); // Convert JSON string to array
  
      if (!Array.isArray(data)) {
        throw new Error("Parsed data is not an array");
      }
  
      return data.map((item: any) => {
        return {
          id: item.id || "N/A",
          date: item.OrderDate || "N/A",
          amount: item.amount || "N/A",
          total: item.total || "N/A",
          status: item.StatusName || "N/A",
          isLink: true,
        };
      });
    } catch (error) {
      console.error("Invalid JSON input:", error);
      return [];
    }
  };

  const OrderData: TableTypes = {
    header: "Order History",
    description: "View your order history",
    tableHead: ["Order ID",  "Amount", "Total", "Status","Date","Action"],
    tableData: filterOrders(await fetchOrders()),
  };

  return (
    <TablesComponent itemsData={OrderData} />
  );
}