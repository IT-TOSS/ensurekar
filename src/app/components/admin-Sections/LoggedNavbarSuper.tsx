"use client";

import Image from "next/image";
import Logo from "../../images/ensure_logo.png";
import Link from "next/link";
import {
  ArrowFatLinesLeft,
  Question,
  ShoppingCart,
  ListPlus,
} from "phosphor-react";
import { 
  LogOut, 
  Home, 
  Menu, 
  User, 
  Users, 
  Crown,
  Shield,
  Settings,
  BarChart3,
  Database,
  FileText,
  Bell,
  HelpCircle,
  Activity,
  TrendingUp,
  UserCheck,
  Package,
  Globe,
  Lock
} from "lucide-react";
import React, { useState } from "react";
import { logout } from "@/store/themeConfigSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const LoggedNavbarSuper = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { name: "Dashboard", link: "/dashboard", icon: <BarChart3 size={20} /> },
    { name: "Profile", link: "/dashboard/profile", icon: <User size={20} /> },
    { name: "All Users", link: "/dashboard/users", icon: <Users size={20} /> },
    { name: "All Admins", link: "/dashboard/admins", icon: <UserCheck size={20} /> },
    { name: "Packages", link: "/dashboard/packages", icon: <Package size={20} /> },
    // { name: "Orders", link: "/dashboard/orders", icon: <ShoppingCart size={20} /> },
    { name: "Company Slider", link: "/dashboard/logo-system", icon: <Globe size={20} /> },
    { name: "Blog Management", link: "/dashboard/blog", icon: <FileText size={20} /> },
    { name: "Analytics", link: "/dashboard/analytics", icon: <TrendingUp size={20} /> },
    // { name: "Database", link: "/dashboard/database", icon: <Database size={20} /> },
    { name: "Reports", link: "/dashboard/reports", icon: <FileText size={20} /> },
    // { name: "Activity Log", link: "/dashboard/activity-log", icon: <Activity size={20} /> },
    { name: "Settings", link: "/dashboard/settings", icon: <Settings size={20} /> },
    { name: "Help", link: "/dashboard/help", icon: <HelpCircle size={20} /> },
  ];

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("superAdminAuth");
    router.push("/super_admin");
  };

  // Shared UI block
  const SidebarContent = (
    // <div className="flex flex-col h-full justify-between p-4 bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900 shadow-lg">
    <div className="flex flex-col h-full justify-between p-4 bg-[#eafaf8] shadow-lg">

      {/* Top Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image alt="Ensurekar Logo" src={Logo} className="w-12 h-12 object-contain" />
              <div className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-1">
                <Crown className="w-4 h-4 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-[#1a8b82] font-bold text-sm">Ensurekar</h2>
              <p className="text-[#1a8b82] text-xs">Super Admin Panel</p>
            </div>
          </div>
          {/* Close button (mobile only) */}
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden bg-white/20 p-1 rounded-full hover:bg-white/30 text-white"
          >
            <ArrowFatLinesLeft size={20} />
          </button>
        </div>

        <div className="space-y-1 overflow-y-auto max-h-96">
          {routes.map((item) => (
            <Link
              key={item.name}
              href={`/super_admin${item.link}`}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 p-3 font-medium rounded-lg hover:bg-white/10 transition-all duration-200 text-black hover:text-[#1a8b82] group"
            >
              <div className="group-hover:scale-110 transition-transform duration-200">
                {item.icon}
              </div>
              <span className="text-sm">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="space-y-4">
        {/* Notifications */}
        <div className="bg-white/10 rounded-lg p-3">
          <div className="flex items-center gap-2 text-black text-sm">
            <Bell size={16} />
            <span>Notifications</span>
            <div className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          //className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-lg p-3 hover:from-red-600 hover:to-pink-600 transition-all duration-200 shadow-lg"
          className="w-full flex items-center justify-center gap-2 bg-[#16a34a] text-white font-bold rounded-lg p-3 hover:bg-[#ffbf3f] hover:text-black transition-all duration shadow-lg"

        >
          <LogOut size={20} /> Logout
        </button>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-purple-200">
          <Link href="/super_admin" className="flex items-center gap-1 hover:text-white transition-colors">
            <Home size={14} /> Home
          </Link>
          <span>|</span>
          <div className="flex items-center gap-1">
            <Shield size={14} />
            <span>v2.0</span>
          </div>
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
          className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md shadow-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        {SidebarContent}
      </div>

      {/* Desktop Sidebar (always visible and fixed) */}
      <div className="hidden lg:flex lg:flex-col lg:w-80 lg:h-screen lg:fixed lg:top-0 lg:left-0 lg:z-30">
        {SidebarContent}
      </div>
    </>
  );
};

export default LoggedNavbarSuper;
