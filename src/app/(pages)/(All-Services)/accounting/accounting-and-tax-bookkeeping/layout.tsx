import type { Metadata } from "next";
import { seoData as getSeoData } from "@/api/SEOSetup/seoSetup";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await getSeoData({ alias: "accounting_and_bookkeeping" });
    return {
      title: `Ensurekar ${seoData?.title ? "| " + seoData.title : ""}`,
      description: seoData?.description || "Professional Accounting and Bookkeeping Services for Your Business",
      keywords: Array.isArray(seoData?.keywords) ? seoData.keywords.join(", ") : "Ensurekar, Accounting, Bookkeeping",
      openGraph: {
        title: seoData?.title || "Ensurekar - Accounting and Bookkeeping",
        description: seoData?.short_description || seoData?.description || "Professional Accounting and Bookkeeping Services",
        url: seoData?.url || "https://ensurekar.in",
        images: [
          {
            url: typeof seoData?.image === 'string' ? seoData.image : "https://www.ensurekar.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fensure_logo.6a70bcd4.png&w=256&q=75",
            width: 800,
            height: 600,
            alt: "Ensurekar",
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Ensurekar | Accounting and Bookkeeping",
      description: "Professional Accounting and Bookkeeping Services for Your Business",
      keywords: "Ensurekar, Accounting, Bookkeeping",
    };
  }
}

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
