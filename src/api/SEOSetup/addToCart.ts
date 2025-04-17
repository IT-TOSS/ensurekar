import { Item } from "../../../types/Items-Types";
import { GetCookie } from "./CookiesSetup";

const NEXT_PUBLIC_API_URL = '/'; // process.env.NEXT_PUBLIC_API_URL;

const AddToCartArray = async (cartItems: Item[]) => {
  const token = await GetCookie();
  // const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/v1/cart/`, {
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/v1/cart/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization" :`Token ${token}`,
    },
    body: JSON.stringify(cartItems),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  return response.json();
};

export { AddToCartArray };
