"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../images/ensure_logo.png";
import {
  ArrowFatLinesLeft,
  Bell,
  Car,
  CreditCard,
  Gear,
  Heart,
  ListNumbers,
  Question,
  ShoppingCart,
} from "phosphor-react";
import { Home, LogOut, User } from "lucide-react";
import { Provider, useSelector } from "react-redux";
import store, { IRootState } from "@/store";
import { logout } from "@/store/themeConfigSlice";
import LoggedNavbar from "../components/LoggedNavbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <Provider store={store}>
      {/* <nav className="bg-softBg1 p-3 shadow-lg flex justify-between items-center">

    </nav> */}
      <div className="flex stp-30 sbp-30 ">
        
        <LoggedNavbar/>
        <aside className="">{children}</aside>
      </div>
    </Provider>
  );
}
