"use client";

import logo from "./app/images/ensure_logo.png"

const themeConfig = {
  locale: "en", // en, da, de, el, es, fr, hu, it, ja, pl, pt, ru, sv, tr, zh, hi
  theme: "light", // light, dark, system
  menu: "vertical", // vertical, collapsible-vertical, horizontal
  layout: "full", // full, boxed-layout
  rtlClass: "ltr", // rtl, ltr
  animation: "", // animate__fadeIn, animate__fadeInDown, animate__fadeInUp, animate__fadeInLeft, animate__fadeInRight, animate__slideInDown, animate__slideInLeft, animate__slideInRight, animate__zoomIn
  navbar: "navbar-sticky", // navbar-sticky, navbar-floating, navbar-static
  semidark: false,
  authToken:
    typeof window !== "undefined" ? localStorage.getItem("Token") || "" : "",
  initialRoutes: typeof window !== "undefined" ? window.location.pathname : "",
  SeoData : {
    title: "Ensurekar | Legal & Financial Services: Company Reg., GST, Startup Registration.",
    description: "Register your company with Ensurekar and get started on your business journey. Online legal services are designed to help startups and SMEs in India.",
    icon: "",
    url: "",
    image: logo,
    short_description: "",
  }
};

export default themeConfig;
