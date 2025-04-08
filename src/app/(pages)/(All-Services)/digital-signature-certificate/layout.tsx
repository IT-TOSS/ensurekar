import type { Metadata } from "next";
import { seoData as getSeoData } from "@/api/SEOSetup/seoSetup";


export const metadata = async (): Promise<Metadata> => {
  const seoData = await getSeoData({ alias: "digital_signature_certificate"});
  console.log(seoData);
  return {
    // name: seoData?.name,
    title: `Ensurekar ${"| " + seoData?.title}`,
    description: seoData?.description,
    // url: seoData?.url || "https://ensurekar.com", // No trailing slash
    // image: seoData?.image,
    // keywords: seoData?.keywords,
    // short_description:seoData?.short_description,
    keywords: Array.isArray(seoData?.keywords) ? seoData.keywords.join(", ") : "Ensurekar",
    openGraph: {
      title:  seoData?.title || "Ensurekar",
      description: seoData?.short_description || seoData?.description || "Ensurekar",
      url: seoData?.url || "https://ensurekar.in",
      images: [
        {
          url: typeof seoData?.image === 'string' ? seoData.image : "https://www.ensurekar.in/_next/image?url=%2F_next%…tic%2Fmedia%2Fensure_logo.6a70bcd4.png&w=256&q=75",
          width: 800,
          height: 600,
          alt: "Ensurekar",
        },
      ],
    },

  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
