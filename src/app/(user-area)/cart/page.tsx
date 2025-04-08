import Cart from "@/app/components/Section/Cart";
import { seoData as getSeoData } from "@/api/SEOSetup/seoSetup";

import { Metadata } from "next";
export const metadata = async (): Promise<Metadata> => {
  const seoData = await getSeoData({
    title: "Cart",
    description:
      "View your cart",
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
      <Cart />
    </div>
  );
};

export default page;
