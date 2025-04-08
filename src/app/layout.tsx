"user client"
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/footer";
import ScrollTotop from "./components/Scroll-To-top";
import CTASection from "./components/Section/CTA-Section";
import { Suspense } from "react";
import CoolLoading from "./loading";
import StoreProvider from "@/store/StoreProvider";
import { seoData as getSeoData } from "@/api/SEOSetup/seoSetup";
import ClientLayoutWrapper from "./components/ClientLayoutWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = async (): Promise<Metadata> => {
  const seoData = await getSeoData({ alias: "home_page"});
  return {
    title: `Ensurekar ${"| " + seoData?.title}`,
    description: seoData?.description,
    keywords: Array.isArray(seoData?.keywords) ? seoData.keywords.join(", ") : "Ensurekar",
    openGraph: {
      title: seoData?.title || "Ensurekar",
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
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LR5Y5BEPCE"
        ></script>
        <script src="https://app.mbgcart.com/webchat/plugin.js?v=5"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `ktt10.setup({id:"em6rzr7K54HJ",accountId:"1191307",color:"#006dff"})`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function gtag(){
                var dataLayer = window.dataLayer || [];
                dataLayer.push(arguments);
              }

              gtag('js', new Date());

              gtag('config', 'G-LR5Y5BEPCE');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <StoreProvider>
          <ClientLayoutWrapper
            header={<Header />}
            footer={<Footer />}
            ctaSection={<CTASection />}
            scrollToTop={<ScrollTotop />}
          >
            <Suspense fallback={<CoolLoading />}>{children}</Suspense>
          </ClientLayoutWrapper>
        </StoreProvider>
      </body>
    </html>
  );
}