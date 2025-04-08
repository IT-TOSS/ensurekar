import { ContactForm } from "../../../types/ContactUs";
import { Item } from "../../../types/Items-Types";
import { GetCookie } from "./CookiesSetup";

const NEXT_PUBLIC_API_URL = '';//process.env.NEXT_PUBLIC_API_URL;

const ContactUs = async (data:ContactForm) => {
  const token = await GetCookie();
  const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/v1/contact/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization" :`Token ${token}`,
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  return response.json();
};

export { ContactUs };
