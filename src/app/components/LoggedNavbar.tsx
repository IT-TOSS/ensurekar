"use client";

import Image from "next/image";
import Logo from "../images/ensure_logo.png";
import Link from "next/link";
import {
  ArrowFatLinesLeft,
  Question,
  ShoppingCart,
  ListPlus,
} from "phosphor-react";
import { LogOut, Home, Menu, User, Users } from "lucide-react";
import React, { useState } from "react";
import { logout } from "@/store/themeConfigSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const LoggedNavbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false); // Toggle for mobile sidebar

  const routes = [
    { name: "Profile", link: "/", icon: <User size={20} /> },
    { name: "Register User", link: "/profile", icon: <Users size={20} /> },
    { name: "Package", link: "/package", icon: <ShoppingCart size={20} /> },
    { name: "Company Slider", link: "/logoSystem", icon: <ListPlus size={20} /> },
    { name: "Admin", link: "/all-Admin", icon: <ListPlus size={20} /> },
  ];
  // { name: "Help", link: "/help", icon: <Question size={20} /> },

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("adminAuth");
    router.push("/admin/Login");
  };

  // Shared UI block
  const SidebarContent = (
    <div className="flex flex-col h-full justify-between p-4 bg-softBg1 shadow-lg">
      {/* Top Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <Image alt="logo" src={Logo} className="w-32 h-auto animate-pulse" />
          {/* Close button (mobile only) */}
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden bg-white p-1 rounded-full hover:bg-gray-200"
          >
            <ArrowFatLinesLeft size={20} />
          </button>
        </div>

        <div className="space-y-2 overflow-y-auto">
          {routes.map((item) => (
            <Link
              key={item.name}
              href={`/admin${item.link}`}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 p-2 font-semibold rounded hover:bg-white transition"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="space-y-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 bg-green-600 text-white font-bold rounded p-2"
        >
          <LogOut size={20} /> Logout
        </button>
        <div className="flex items-center justify-between text-sm text-gray-700 dark:text-white">
          <Link href="/admin" className="flex items-center gap-1 text-black">
            <Home size={16} className="text-black"  /> Home
          </Link>
          <span className="text-black">|</span>
          <span className="text-black">v1.0</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle button (hidden on lg and up) */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 bg-white rounded-md shadow-md"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-softBg1 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        {SidebarContent}
      </div>

      {/* Desktop Sidebar (always visible) */}
      <div className="hidden lg:flex lg:flex-col lg:w-72 lg:h-screen">
        {SidebarContent}
      </div>
    </>
  );
};

export default LoggedNavbar;
