import { ContactForm } from "../../../types/ContactUs";
import { Item } from "../../../types/Items-Types";
import { GetCookie } from "./CookiesSetup";

const NEXT_PUBLIC_API_URL = '' ;// process.env.NEXT_PUBLIC_API_URL;

const ContactUs = async (data:ContactForm) => {
  try {
    // const token = await GetCookie();
    //const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/v1/contact/`, {
    // change by krishna
    const response = await fetch(`/api/Gmail`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Authorization" :`Token ${token}`,
      },
      body: JSON.stringify(data),
    });
    
    const responseData = await response.json();
    
    if (!response.ok) {
      // Get actual error message from API response
      const errorMessage = responseData?.error || responseData?.details || responseData?.message || `HTTP ${response.status}: ${response.statusText}`;
      throw new Error(errorMessage);
    }
    
    return responseData;
  } catch (error) {
    // If it's already an Error, re-throw it
    if (error instanceof Error) {
      throw error;
    }
    // Otherwise wrap it
    throw new Error(error instanceof Error ? error.message : 'Failed to send message');
  }
};

export { ContactUs };
