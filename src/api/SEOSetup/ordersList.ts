import { GetCookie } from "./CookiesSetup";
// export const dynamic = 'force-dynamic';

const NEXT_PUBLIC_API_URL =  '' ; //process.env.NEXT_PUBLIC_API_URL;

const OrderHistoryAll = async () => {

  const token = await GetCookie();
  console.log("OrderHistory all token",token);
  const response = await fetch(
    `${NEXT_PUBLIC_API_URL}/api/v1/order/all/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization" :`Token ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
 
  return response.json();
};
const OrderHistoryOne = async (id:string) => {
    console.log("OrderHistory one");
  const response = await fetch(
    `${NEXT_PUBLIC_API_URL}/api/v1/order/${id}/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  
  return response.json();
};

export { OrderHistoryAll,OrderHistoryOne };
