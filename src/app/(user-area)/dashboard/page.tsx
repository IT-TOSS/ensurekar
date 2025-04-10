
import Profile from "@/app/components/User-Component/profile";
import { Metadata } from "next/types";
import { seoData as getSeoData } from "@/api/SEOSetup/seoSetup";
export const dynamic = 'force-dynamic';

import React, { useEffect, useState } from "react";
// import { UserInfo } from "@/api/SEOSetup/fetchuser";
import { GetUserProfile } from "@/api/SEOSetup/userProfile";
import { ProfileData } from "../../../../types/Profile-Data";


export const metadata = async (): Promise<Metadata> => {
  const seoData = await getSeoData({
    title: "Profile",
    description:
      "in profile you can view your profile, orders, transactions, cart, wishlist, settings and help",
  });
  console.log(seoData);
  return {
    // name: seoData?.name,
    title: `Ensurekar ${"| " + seoData?.title}`,
    description: seoData?.description,
  };
};


const page = () => {
 

  const MetricData = [
    { name: "Jan", purchases: 4000, returns: 2400 },
    { name: "Feb", purchases: 3000, returns: 1398 },
    { name: "Mar", purchases: 2000, returns: 9800 },
    { name: "Apr", purchases: 2780, returns: 3908 },
    { name: "May", purchases: 1890, returns: 4800 },
    { name: "Jun", purchases: 2390, returns: 3800 },
  ];

  // const tabs = ["Bank", "Contact", "Business", "Analytics","Settings"];
  const tabs = [ "Identity","Bank", "Contact"];



  // return <Profile MetricData={MetricData} profileData={profileData} Othertabs={tabs} />;
  return <Profile MetricData={MetricData}  Othertabs={tabs} />;
};

export default page;
