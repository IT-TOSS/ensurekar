import Image from "next/image";
import Logo from "../images/ensure_logo.png";
import Link from "next/link";
import {
  ArrowFatLinesLeft,
  Bell,
  CreditCard,
  Gear,
  Heart,
  ListNumbers,
  Question,
  ShoppingCart,
  ListPlus,

} from "phosphor-react";
import { LogOut, Home, User } from "lucide-react";
import React, { use } from "react";
import { logout } from "@/store/themeConfigSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const LoggedNavbar = () => {
    const dispatch = useDispatch();
    const route = useRouter();
  type routeData = {
    name: string;
    link: string;
    icon?: string | JSX.Element;
  };
  const routeData: routeData[] = [
    // { name: "profile", link: "/", icon: <User size={32} /> },
    { name: "User Details", link: "/profile", icon: <User size={32} /> },
    { name: "Package", link: "/Package", icon: <ShoppingCart size={32} /> },
    { name: "Order", link: "/Order", icon: <ListPlus size={32} /> },
    // { name: "Settings", link: "/settings", icon: <Gear size={32} /> },
    { name: "Help", link: "/help", icon: <Question size={32} /> }
  ];
  const handleClose = () => {
    console.log("close");
    dispatch(logout());
    route.push("/");
  };
  const hanldeLogout = () => {
    dispatch(logout());
    route.push("/admindashboard/Login");
   };
  return (
    <nav className=" border p-3 h-screen  bg-softBg1 w-72  flex flex-col  justify-between shadow-lg">
      <div className="flex  flex-col justify-center">
        <div className="flex items-center justify-center">
          <Image
            alt="profile-image"
            src={Logo}
            className="my-3 mr-5 animate-pulse"
          />
          <div
            onClick={handleClose}
            className="rounded-full bg-white p-2 cursor-pointer hover:bg-gray-200 hover:text-primary  hover:shadow-lg "
          >
            <ArrowFatLinesLeft size={25}  />
          </div>
        </div>
        {/* <div className="flex items-center justify-center gap-2">
      <Image
        alt="profile-image"
        src={Logo}
        className="rounded-full"
        width={50}
        height={50}
      />
      <div className="flex flex-col">
        <p className="font-bold">John Doe</p>
        <p className="text-xs text-gray-500">
          <span className="text-green-500">Active</span> |{" "}
          <span className="text-red-500">Inactive</span>
        </p>
      </div>
    </div> */}
        <div className="flex flex-col  text-bodyText items-center justify-start h-[500px] overflow-auto mx-3 my-5">
          {routeData.map((route) => (
            <Link
              key={route.name + route.link + "nav"}
              href={"/admindashboard" + route.link}
              className="py-2 flex items-center text- gap-x-2 font-bold hover:bg-white hover:duration-200 w-full rounded p-2 pl-1 my-1"
            >
              <p className="rounded-full mr-2">{route.icon}</p>
              {route.name}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <button
          className="w-full flex justify-center gap-x-5 items-center bg-green-600 text-white rounded p-2 my-3 font-bold"
          onClick={hanldeLogout}
        >
          {" "}
          <LogOut size={30} /> <p>Logout</p>
        </button>
        <div className="px-2 font-bold flex justify-between gap-x-5 items-center">
          <Link href="/admindashboard" className="flex gap-x-2">
            {" "}
            <Home size={24} /> Home
          </Link>{" "}
          <p>|</p>
          <p>version 1.0</p>
        </div>
      </div>
    </nav>
  );
};

export default LoggedNavbar;
