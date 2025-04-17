
import { User } from "../../../types/User-Type";
import { SetCookie } from "./CookiesSetup";
import { GetUserProfile } from "./userProfile";
const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;

if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI) {
  throw new Error("Missing required environment variables");
}
const TOKEN_URL = "https://oauth2.googleapis.com/token";

const getUserDataFromGoogle = async (accessToken: string) => {
  const response = await fetch(
    "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  return response.json();
};

const UserInfo = async (code: string) => {
  let tokenUse = true
  if (code.trim() !='' && tokenUse) {
    try {
      // Exchange authorization code for access token
      const tokenResponse = await fetch(TOKEN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          code,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          redirect_uri: REDIRECT_URI,
          grant_type: "authorization_code",
        }).toString(),
      });

      if (!tokenResponse.ok) {
        throw new Error("Failed to fetch access token");
      }
      tokenUse = false
      const tokenData = await tokenResponse.json();
      const accessToken = tokenData.access_token;

      if (!accessToken) {
        throw new Error("Access token not found");
      }
      const userData = await getUserDataFromGoogle(accessToken);
      console.log(userData);
      const postdata = {
        email: userData.email,
        picture: userData.picture,
        isAuthenticated: userData.verified_email,
        Fname: userData.given_name,
        Lname: userData.family_name,
        // id: userData.id,
        contactNo:'',
        password:''
      };
      const response = await PostToServer(postdata);
      console.log(response);
     const Profile = {
      isAuthenticated: true,
      userInfo : {
        username: response.profile.username,
        email: response.profile.email,
        Fname: response.profile.first_name,
        Lname: response.profile.last_name,
        contact: response.profile.contactNo || "N/A",
        role: response.profile.role || "N/A",
        picture: response.profile.picture || postdata.picture || "N/A",
      },
      Token: response.token,
     }
     if(response.message === "success" && response.status === 200){

       await SetCookie(response.token)
      
      // console.log(await GetUserProfile()) // include user bank details, identity ,contect info. Want  
      return { Profile };
     }else{
        throw new Error("Failed to fetch user data");
      }

    } catch (error) {
      console.error("Error fetching user info:", error);
      throw error;
    }
  } else {
    console.log("code nhi aaya ");
    throw new Error("Authorization code not found");
  }
};

const HandleGoogleLogin = () => {
  const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";
  const REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI || "";

  const AUTH_URL = `https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&access_type=offline`;

  // new URLSearchParams(AUTH_URL);
};

const PostToServer = async (data: User) => {
  const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
 
  const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/v1/auth/`, {
  // const response = await fetch(`http://localhost:8000/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
  
    throw new Error("Failed to fetch user data");
  }
  const responseData = await response.json();
  await SetCookie(responseData.token);
  return responseData;
  
};

export { UserInfo, HandleGoogleLogin, PostToServer };
