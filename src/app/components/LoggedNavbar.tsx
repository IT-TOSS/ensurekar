// import Image from "next/image";
// import Logo from "../images/ensure_logo.png";
// import Link from "next/link";
// import {
//   ArrowFatLinesLeft,
//   Bell,
//   CreditCard,
//   Gear,
//   Heart,
//   ListNumbers,
//   Question,
//   ShoppingCart,
//   ListPlus,

// } from "phosphor-react";
// import { LogOut, Home, User } from "lucide-react";
// import React, { use } from "react";
// import { logout } from "@/store/themeConfigSlice";
// import { useDispatch } from "react-redux";
// import { useRouter } from "next/navigation";

// const LoggedNavbar = () => {
//     const dispatch = useDispatch();
//     const route = useRouter();
//   type routeData = {
//     name: string;
//     link: string;
//     icon?: string | JSX.Element;
//   };
//   const routeData: routeData[] = [
//     { name: "profile", link: "/", icon: <User size={32} /> },
//     { name: "User Details", link: "/profile", icon: <User size={32} /> },
//     { name: "Package", link: "/package", icon: <ShoppingCart size={32} /> },
//     { name: "Order", link: "/order", icon: <ListPlus size={32} /> },
//     // { name: "Settings", link: "/settings", icon: <Gear size={32} /> },
//     { name: "Help", link: "/help", icon: <Question size={32} /> }
//   ];
//   const handleClose = () => {
//     console.log("close");
//     dispatch(logout());
//     route.push("/");
//   };
//   const hanldeLogout = () => {
//     dispatch(logout());
//     localStorage.removeItem("adminAuth");
//     route.push("/admin/Login");
//    };
//   return (
//     <nav className=" border p-3 h-screen  bg-softBg1 w-72  flex flex-col  justify-between shadow-lg">
//       <div className="flex  flex-col justify-center">
//         <div className="flex items-center justify-center">
//           <Image
//             alt="profile-image"
//             src={Logo}
//             className="my-3 mr-5 animate-pulse"
//           />
//           <div
//             onClick={handleClose}
//             className="rounded-full bg-white p-2 cursor-pointer hover:bg-gray-200 hover:text-primary  hover:shadow-lg "
//           >
//             <ArrowFatLinesLeft size={25}  />
//           </div>
//         </div>
//         <div className="flex flex-col  text-bodyText items-center justify-start h-[500px] overflow-auto mx-3 my-5">
//           {routeData.map((route) => (
//             <Link
//               key={route.name + route.link + "nav"}
//               href={"/admin" + route.link}
//               className="py-2 flex items-center text- gap-x-2 font-bold hover:bg-white hover:duration-200 w-full rounded p-2 pl-1 my-1"
//             >
//               <p className="rounded-full mr-2">{route.icon}</p>
//               {route.name}
//             </Link>
//           ))}
//         </div>
//       </div>

//       <div>
//         <button
//           className="w-full flex justify-center gap-x-5 items-center bg-green-600 text-white rounded p-2 my-3 font-bold"
//           onClick={hanldeLogout}
//         >
//           {" "}
//           <LogOut size={30} /> <p>Logout</p>
//         </button>
//         <div className="px-2 font-bold flex justify-between gap-x-5 items-center">
//           <Link href="/admind" className="flex gap-x-2 dark:text-white" >
//             {" "}
//             <Home size={24}  /> Home
//           </Link>{" "}
//           <p className="dark:text-white">|</p>
//           <p className="dark:text-white">version 1.0</p>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default LoggedNavbar;
//-----------------

// ui

// "use client";

// import Image from "next/image";
// import Logo from "../images/ensure_logo.png";
// import Link from "next/link";
// import {
//   ArrowFatLinesLeft,
//   Bell,
//   CreditCard,
//   Gear,
//   Heart,
//   ListNumbers,
//   Question,
//   ShoppingCart,
//   ListPlus,
// } from "phosphor-react";
// import { LogOut, Home, Menu, User } from "lucide-react";
// import React, { useState } from "react";
// import { logout } from "@/store/themeConfigSlice";
// import { useDispatch } from "react-redux";
// import { useRouter } from "next/navigation";

// const LoggedNavbar = () => {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const [isOpen, setIsOpen] = useState(false); // For mobile toggle

//   type RouteData = {
//     name: string;
//     link: string;
//     icon?: JSX.Element;
//   };

//   const routes: RouteData[] = [
//     { name: "Profile", link: "/", icon: <User size={20} /> },
//     { name: "User Details", link: "/profile", icon: <User size={20} /> },
//     { name: "Package", link: "/package", icon: <ShoppingCart size={20} /> },
//     { name: "Order", link: "/order", icon: <ListPlus size={20} /> },
//     { name: "Help", link: "/help", icon: <Question size={20} /> },
//   ];

//   const handleLogout = () => {
//     dispatch(logout());
//     localStorage.removeItem("adminAuth");
//     router.push("/admin/Login");
//   };

//   return (
//     <>
//       {/* Toggle Button for Mobile */}
//       <div className="lg:hidden fixed top-4 left-4 z-50">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="p-2 bg-white rounded-md shadow-md focus:outline-none"
//         >
//           <Menu size={24} />
//         </button>
//       </div>

//       {/* Sidebar */}
//       <nav
//         className={`
//           fixed top-0 left-0 h-full bg-softBg1 z-40 shadow-lg 
//           transform transition-transform duration-300 ease-in-out
//           ${isOpen ? "translate-x-0" : "-translate-x-full"} 
//           lg:translate-x-0 lg:static lg:w-72
//         `}
//       >
//         <div className="flex flex-col h-full justify-between p-4">
//           {/* Top Section */}
//           <div>
//             <div className="flex items-center justify-between mb-6">
//               <Image
//                 alt="logo"
//                 src={Logo}
//                 className="w-32 h-auto animate-pulse"
//               />
//               {/* Close button (mobile) */}
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="lg:hidden bg-white p-1 rounded-full hover:bg-gray-200"
//               >
//                 <ArrowFatLinesLeft size={20} />
//               </button>
//             </div>

//             {/* Nav Links */}
//             <div className="space-y-2 overflow-y-auto">
//               {routes.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={`/admin${item.link}`}
//                   className="flex items-center gap-3 p-2 text-sm font-medium rounded hover:bg-white transition"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.icon}
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Bottom Section */}
//           <div className="space-y-4">
//             <button
//               onClick={handleLogout}
//               className="w-full flex items-center justify-center gap-2 bg-green-600 text-white font-bold rounded p-2"
//             >
//               <LogOut size={20} /> Logout
//             </button>
//             <div className="flex items-center justify-between text-sm text-gray-700 dark:text-white">
//               <Link href="/admind" className="flex items-center gap-1">
//                 <Home size={16} /> Home
//               </Link>
//               <span>|</span>
//               <span>v1.0</span>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default LoggedNavbar;


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
import { LogOut, Home, Menu, User } from "lucide-react";
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
    { name: "User Details", link: "/profile", icon: <User size={20} /> },
    { name: "Package", link: "/package", icon: <ShoppingCart size={20} /> },
    { name: "Order", link: "/order", icon: <ListPlus size={20} /> },
    { name: "Help", link: "/help", icon: <Question size={20} /> },
  ];

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
