import Wishlist from "@/app/components/Section/Wishlist";
import { seoData as getSeoData } from "@/api/SEOSetup/seoSetup";

import { Metadata } from "next";
export const metadata = async (): Promise<Metadata> => {
  const seoData = await getSeoData({
    title: "Wishlist",
    description:
      "in wishlist you can add your favourite products and view them later",
  });

  return {
    // name: seoData?.name,
    title: `Ensurekar ${"| " + seoData?.title}`,
    description: seoData?.description,
  };
};
const page = () => {
  return (
    <div className="">
      <Wishlist />
    </div>
  );
};

export default page;
