
import { seoData as getSeoData } from "@/api/SEOSetup/seoSetup";

import { Metadata } from "next";
import { GetUserProfile } from "@/api/SEOSetup/userProfile";
import AccountSettings from "@/app/components/User-Component/AccoutSettings";
export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getSeoData({
    title: "Settings",
    description:
      "Update your account settings",
  });

  return {
    // name: seoData?.name,
    title: `Ensurekar ${"| " + seoData?.title}`,
    description: seoData?.description,
  };
};

// Fetch user profile data directly in the server component
export default  function SettingsPage() {

   return <AccountSettings />;
   
}