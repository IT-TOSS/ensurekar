
import TablesComponent from "@/app/components/User-Component/tables";
import { Metadata } from "next/types";
export const dynamic = 'force-dynamic'; 
import { seoData as getSeoData } from "@/api/SEOSetup/seoSetup";

import { TransectionHistory } from "@/api/SEOSetup/transectionList";
import { TableTypes } from "../../../../types/table-types";

export const metadata = async (): Promise<Metadata> => {
  const seoData = await getSeoData({
    title: "Transactions",
    description:
      "View your transactions",
  });

  return {
    // name: seoData?.name,
    title: `Ensurekar ${"| " + seoData?.title}`,
    description: seoData?.description,
  };
};
const transactions = [
  {
    id: "#123456",
    purpose: "-",
    date: "2023-05-01",
    description: "Purchase",
    amount: -99.99,
  },
  {
    id: "#123457",
    purpose: "-",
    date: "2023-05-15",
    description: "Refund",
    amount: 49.99,
  },
  {
    id: "#123458",
    purpose: "-",
    date: "2023-05-30",
    description: "Purchase",
    amount: -79.99,
  },
];




  // const fetchTransactions = async () => await TransectionHistory();
  // fetchTransactions().then((data) => {
   
  //   transactionsData = data; 
  // });



export default async function Transactions() {
  const fetchTransactions = async () => {
    try {
      const data = await TransectionHistory();
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const data = await fetchTransactions();

  const transactionsDataFilter = (data: any) => {
    console.log("data", data);
    return data.map((item: any) => {
      return {
        id: item.transaction_id || "N/A",
        cart: item.cart || "N/A",
        amount: item.amount || "N/A",
        discount: item.discount || "N/A",
        paid: item.paid_amount || "N/A",
        mode: item.paymentMode || "N/A",
        status: item.status || "N/A",
        date: item.transactionDate || "N/A",
      };
    });
  };

  const itemsData = {
    header: "Transactions",
    description: "View your transactions",
    tableHead: ["Transaction ID", "Cart", "Amount", "Discount", "Paid", "Mode", "Status", "Date", "Action"],
    tableData: transactionsDataFilter(data),
  };

  return <TablesComponent itemsData={itemsData} />;
}
