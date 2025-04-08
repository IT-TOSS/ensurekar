import { Metadata } from "next";

import React, { Suspense, lazy } from "react";
import { seoData as getSeoData } from "@/api/SEOSetup/seoSetup";
const Selectmenu = lazy(
  () => import("../components/User-Component/select-menu")
);

const Loading = () => <div className="text-center  my-10">Loading...</div>;

export const metadata = async (): Promise<Metadata> => {
  const seoData = await getSeoData({
    title: "User Area",
    description:
      "Here you can view your profile, orders, transactions, cart, wishlist, settings and help",
  });
  console.log(seoData);
  return {
    // name: seoData?.name,
    title: `Ensurekar ${"| " + seoData?.title}`,
    description: seoData?.description,
  };
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tabs = [
    { link: "/dashboard", title: "Profile" },
    { link: "/orders", title: "Orders" },
    { link: "/transactions", title: "Transactions" },
    { link: "/cart", title: "Cart" },
    { link: "/wishlist", title: "Wishlist" },
    { link: "/settings", title: "Settings" },
    // { link: "/help", title: "Help" },
  ];

  return (
    <div className="stp-30 sbp-30 container mx-auto ">
      <nav className=" mb-4 py-5">
        <Suspense fallback={<Loading />}>
          <Selectmenu tabs={tabs} />
        </Suspense>
      </nav>

      <div className="">{children}</div>
    </div>
  );
}
