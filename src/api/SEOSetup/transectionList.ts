import { GetCookie } from "./CookiesSetup";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

const TransectionHistory = async () => {
  const token = await GetCookie();
  const response = await fetch(
    `${NEXT_PUBLIC_API_URL}/api/v1/transaction/all/`,
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
const TransectionHistoryOne = async (id:string) => {
    console.log("TransectionHistoryOne");
  const response = await fetch(
    `${NEXT_PUBLIC_API_URL}/api/v1/transaction/${id}/`,
    // 'https://ensurekar.pythonanywhere.com/api/v1/transaction/1/',
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

export { TransectionHistory,TransectionHistoryOne };
