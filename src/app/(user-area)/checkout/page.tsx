import Checkout from '@/app/components/Section/Checkout'
import React from 'react'

import { seoData as getSeoData } from "@/api/SEOSetup/seoSetup";

import { Metadata } from "next";
export const metadata = async (): Promise<Metadata> => {
  const seoData = await getSeoData({
    title: "Checkout",
    description:
      "Checkout your cart",
  });

  return {
    // name: seoData?.name,
    title: `Ensurekar ${"| " + seoData?.title}`,
    description: "checkout",
  };
};
const page = () => {
  return (
    <>
      <Checkout />
    </>
  )
}

export default page
