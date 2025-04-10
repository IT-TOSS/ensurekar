import { TableTypes } from "../../../../types/table-types";
import TablesComponent from "@/app/components/User-Component/tables";
export const dynamic = 'force-dynamic'; 

import { seoData as getSeoData } from "@/api/SEOSetup/seoSetup";

import { Metadata } from "next";
import { OrderHistoryAll } from "@/api/SEOSetup/ordersList";
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
      const data = await OrderHistoryAll();
     
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const filterOrders = (data: any) => {
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
