

const NEXT_PUBLIC_API_URL =  ' ' ;//process.env.NEXT_PUBLIC_API_URL;
 
import { GetCookie } from './CookiesSetup';
interface InitialFormData {
  personal: {
    userName: string;
    firstName: string;
    lastName: string;
    fatherName: string;
    DOB: string;
    sex: string;
    maritalStatus: string;
  };
  company: {
    company: string;
    organisationType: string;
  };
  identity: {
    pan: string;
    aadhar: string;
    din: string;
    addressProof: string;
    addressProofName: string;
    nationality: string;
  };
  bank: {
    bank: string;
    accountHolderName: string;
    accountNumber: string;
    ifsc: string;
  };
  address: {
    address: string;
    state: string;
    city: string;
    pin: string;
    email: string;
    secondaryEmail: string;
    contactNo: string;
    secondaryContact: string;
  };
}
const GetUserProfile = async (Method?: string | undefined ,data?:InitialFormData|undefined) => {
const token = await GetCookie();
console.log(Method,data)
  if (!token) {
    throw new Error("Access token not found");
  }
  const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/v1/profile/`, {
    // const response = await fetch(`http://localhost:4000/api/v1/profile/`, {
    method: Method || "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization" :`Token ${token}`,
    },
    body: JSON.stringify(data),

  });
 
  const responseData = await response.json();
  console.log(responseData);
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  return responseData;
};

export { GetUserProfile };
