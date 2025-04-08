"use client";

import { IRootState } from "@/store";
import { setAuth } from "@/store/store";
import { th } from "framer-motion/client";
import { User } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { DotsThreeOutlineVertical, Envelope, LinkedinLogo, PhoneCall, VideoCamera, WhatsappLogo } from "phosphor-react";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";
const CLIENT_SECRET = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || "";
const REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI || "";

const TOKEN_URL = "https://oauth2.googleapis.com/token";

interface User {
  Fname: string;
  Lname: string;
  email: string;
  picture: string | StaticImageData | JSX.Element;
  given_name: string;
  family_name: string;
  verified_email: boolean;
}

const Dashboard: React.FC = () => {
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const dispatch = useDispatch();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  

  // useEffect(() => {
  //   const fetchUserInfo = async () => {
  //     const urlParams = new URLSearchParams(window.location.search);
  //     const code = urlParams.get("code");

  //     if (code) {
  //       try {
  //         // Exchange authorization code for access token
  //         const tokenResponse = await fetch(TOKEN_URL, {
  //           method: "POST",
  //           headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //           body: new URLSearchParams({
  //             code,
  //             client_id: CLIENT_ID,
  //             client_secret: CLIENT_SECRET,
  //             redirect_uri: REDIRECT_URI,
  //             grant_type: "authorization_code",
  //           }).toString(),
  //         });

  //         const tokenData = await tokenResponse.json();

  //         const { access_token } = tokenData;

  //         if (access_token) {
  //           const userInfoResponse = await fetch(
  //             "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
  //             {
  //               headers: { Authorization: `Bearer ${access_token}` },
  //             }
  //           );

  //           const userInfo = await userInfoResponse.json();

  //           if (userInfo)
  //             dispatch(
  //               setAuth({
  //                 isAuthenticated:
  //                   userInfo.verified_email === true ? true : false,
  //                 userInfo: {
  //                   Fname: userInfo.given_name,
  //                   Lname: userInfo.family_name,
  //                   email: userInfo.email,
  //                   username: userInfo.email,
  //                   contact: "",
  //                   role: "",
  //                   picture: userInfo.picture,
  //                 },
  //                 Token: access_token,
  //               })
  //             );
  //         }
  //       } catch (error) {
  //         console.error("Error fetching user info:", error);
  //       }
  //     }

  //     const userInfo: User = {
  //       ...themeConfig.userInfo,
  //       given_name: themeConfig.userInfo.Fname,
  //       family_name: themeConfig.userInfo.Lname,
  //       verified_email: themeConfig.isAuthenticated === true,
  //       picture: themeConfig.userInfo.picture as string | StaticImageData,
  //     };
  //     console.log(userInfo);
  //     setUser(userInfo);

  //     // const newUrl = window.location.origin + window.location.pathname;
  //     // window.history.pushState({ path: newUrl }, "", newUrl);
  //   };

  //   fetchUserInfo();
  // }, []);

  // useEffect(() => {
  //   const user = {
  //     ...themeConfig.userInfo,
  //     given_name: themeConfig.userInfo.Fname,
  //     family_name: themeConfig.userInfo.Lname,
  //     verified_email: themeConfig.isAuthenticated,
  //   };


  //   if (!tsonfig.userInfo]);



  // if (!user) return <div>Loading...</div>;

  return (
    // <div className="flex flex-col  justify-center bg-softBg1 text-s1 p-5 mx-2 rounded-2xl shadow-lg">
    //   <div className="flex flex-row items-center justify-center gap-4 ">
    //     <Image
    //       src={typeof user.picture === "string" || (typeof user.picture === "object" && 'src' in user.picture) ? user.picture : "/fallback-profile.png"}
    //       alt="Profile"
    //       width="75"
    //       height="75"
    //       // onError={(e) => (e.currentTarget.src = "/fallback-profile.png")} // fallback image
    //       style={{ borderRadius: "50%" }}
    //       className="shadow-lg"
    //     />
    //     <div className="flex flex-col text-bodyText">
    //       <h1 className="font-bold  text-2xl text-">
    //         {user.Fname || ""} {user.Lname || ""}
    //       </h1>
    //       <p className="font-medium text-bodyText">{user.email}</p>
    //     </div>
    //     <button className="border bg-slate-300 shadow-lg rounded-full p-2">
    //       <DotsThreeOutlineVertical size={24} />
    //     </button>
    //   </div>
    //   <div className="flex gap-x-3 my-5">
    //     <button className="rounded-full hover:bg-black hover:text-[#faf4f4] border shadow-lg duration-300  p-1.5"><Envelope className="m-2" size={24}/></button>
    //     <button className="rounded-full hover:bg-black hover:text-[#faf4f4] border shadow-lg duration-300  p-1.5"><WhatsappLogo className="m-2" size={24}/></button>
    //     <button className="rounded-full hover:bg-black hover:text-[#faf4f4] border shadow-lg duration-300  p-1.5"><VideoCamera className="m-2" size={24}/></button>
    //     <button className="rounded-full hover:bg-black hover:text-[#faf4f4] border shadow-lg duration-300  p-1.5"><LinkedinLogo className="m-2" size={24}/></button>
    //   </div>
    //   <p>
    //     Verified Email : {themeConfig.isAuthenticated === true ? "Yes" : "No"}
    //   </p>
    // </div>

    <div className="border border-gray-400 flex flex-col items-center justify-center text-s1 p-5 mx-2 rounded-2xl shadow-lg ">
      <div className="max-w-[1200px] w-full mx-auto bg-[#eafaf8] shadow-md p-4 min-w-[600px] rounded-lg flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-xl font-semibold mr-4">Search Here any modal </h1>
        <form className="flex space-x-2 mt-2 md:mt-0">
          <input
            type="search"
            placeholder="Search"
            className="border border-gray-300 p-2 rounded-md focus:outline-none"
            aria-label="Search"
          // value={}
          // onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="border border-gray-400 bg-[#eafaf8] px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition"
          >
            Search
          </button>
        </form>
      </div>
      <div className="  w-full bg-white shadow-md p-6 rounded-lg mt-4 flex justify-between items-center border-l-4 border-teal-500 ">
        User
      </div>
      <div className="flex flex-wrap justify-start space-x-2 md:space-x-4 mt-6 w-full">

        <button
          className="border border-gray-400 bg-[#eafaf8] px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition"
          onClick={() => router.push("/admindashboard/profile")}
        >
          UserData
        </button>

        <button
          className="border border-gray-400 bg-[#eafaf8] px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition"          
        >
          UserDoc
        </button>

        <button
          className="border border-gray-400 bg-[#eafaf8] px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition"
      
        >
          Invoice
        </button>

        <button
          className="border border-gray-400 bg-[#eafaf8] px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition"
         
        >
          Other
        </button>
      </div>

    </div>
  );
};

export default Dashboard;
