"use client";

import React, { useState, useEffect, use } from "react";
import { DesktopNavbar } from "./Desktop-Navbar";
import Link from "next/link";
import MobileNavbar from "./Mobile-Navbar";
import Image from "next/image";
import Logo from "../images/ensure_logo.png";
import { ArrowUpRight, PhoneCall, ShoppingCart, SignIn } from "phosphor-react";
import { Sign } from "crypto";
import { HeartIcon, User, UserCheck } from "lucide-react";
import MenuItemsComponent from "./Menu-Items";
import { useSelector } from "react-redux";
import { IRootState } from "@/store";
import { div } from "framer-motion/client";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isLogin, setLogin] = useState(false);
  // for log in when back grount color is black the text is not visiable------------

  const [textColor, settextColor] = useState(true);
  const [BgColor, setBgColor] = useState('');


  // const bgColor = window.getComputedStyle(header).backgroundColor;

  // Handle sidebar toggle for mobile
  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const isAuthenticated =
    useSelector((state: IRootState) => state.themeConfig.isAuthenticated) || false;
  const Token = useSelector((state: IRootState) => state.themeConfig.authToken) || false;


  useEffect(() => {

    // const header = document.getElementById("headerID");
    // // let bgColor = '';


    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        settextColor(false);
        // setBgColor(window.getComputedStyle(header).backgroundColor);
      } else {
        setIsScrolled(false);
        settextColor(true);
        // setBgColor(window.getComputedStyle(header).backgroundColor);
      }
    };
    //  if(BgColor ==="rgb(255, 255, 255)")
    //   console.log("black")
    //   else
    //   console.log("hello")

    // ${textColor ?"text-[#007676]":'' }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    if (Token !== null && Token !== undefined && Token !== "" && isAuthenticated) {
      setLogin(true);
    } else
      setLogin(false);
  }, [isAuthenticated, Token]);
  const handleMenu = () => {
    setOpenMenu(!isOpenMenu);
  };


  return (
    <header
      className={`fixed w-full z-50  transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
    >
      <div className="top-0 left-0 right-0 z-50 header flex justify-center">
        <div className={`flex justify-between items-center  text-s1 py-6`}>
          <div className="pb-1 flex justify-between items-start md:items-center gap-5">
            <button
              className="lg:hidden text-3xl mobileMenuOpenButton"
              onClick={handleSidebar}
            >
              ☰
            </button>
            <Link href="/" className="mr-5">
              <Image src={Logo} alt="Ensurekar logo" />
            </Link>
          </div>
          {/* Desktop Menu Start */}
          <DesktopNavbar />
          {/* Desktop Menu End */}
          <div className="flex justify-end items-center gap-2 sm:gap-6 xl:gap-10  max-sm:hidden font-bold">
            <div className="flex justify-between items-center gap-1">
              <div className="flex justify-between items-center gap-1">
                {/* <PhoneCall className="bg-s1 rounded-full text-s2 p-2 md:p-3 text-lg lg:text-2xl !leading-none"/> */}
                <Link href="tel:+917470756060">
                  <PhoneCall
                    size={40}
                    className=" w-[50px] h-[50px] bg-s1 rounded-full text-s2 p-2 md:p-3 text-lg lg:text-2xl !leading-none"
                    color="#fad000"
                  />
                </Link>
              </div>
              {/* <Link
                href="tel:+917470756060"
                className="max-xl:hidden text-nowrap font-semibold"
              >
               +91 8878440844
              </Link> */}
            </div>
            {/* <Link
              href="/Contact"
              className="flex text-nowrap justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-amber-300 border border-gray-600 text-mainTextColor group font-medim"
            >
              Knowledge Section
              <ArrowUpRight
                weight="bold"
                className="group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl !leading-[0]"
              />
            </Link> */}
            <div className="flex gap-x-2 mr-2">
              {isLogin ? (
                <Link href={"/cart"} className="flex border-black hover:border-opacity-25 duration-300  border-2 px-3 border-opacity-0 rounded py-2 justify-center items-center">
                  <ShoppingCart size={32} />
                </Link>
              ) :
                <Link
                  href={"/Login"}
                  className="bg-yellow-400 px-5 py-2 flex justify-center hover:border-opacity-25 items-center rounded-full border-2 hover:border-black font-bold cursor-pointer duration-500"
                >
                  <SignIn size={32} weight="duotone" /> <p>Sign In</p>
                </Link>
              }


            </div>
          </div>

          { isLogin   && 
            (
          
          <div
            className=" border flex flex-col relative group items-center rounded justify-center gap-x-1 cursor-pointer p-1 h-10 w-10"
            onClick={handleMenu}
          >
            {/* <span
              className={`h-1 w-6 mx-2 absolute group-hover:bg-black duration-300 bg-black/60 rounded ${
                isOpenMenu ? "rotate-45 w-6" : "w-8 mb-4"
              }`}
            ></span>
            <span
              className={`h-1 w-6 mx-2  group-hover:bg-black duration-300 bg-black/60 rounded ${
                isOpenMenu ? "hidden" : ""
              }`}
            ></span>
            <span
              className={`h-1 w-6  absolute group-hover:bg-black duration-300 bg-black/60 rounded ${
                isOpenMenu ? "-rotate-45 w-6" : "w-8 px-2 -mb-4"
              }`}
            ></span> */}
            {isAuthenticated ? <UserCheck size={32} /> : <User size={32} />}

          </div>
            )
          }
        </div>
      </div>

      {/* Mobile Menu Start */}
      <MobileNavbar Sidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      {/* Mobile Menu End */}
      {isOpenMenu && (
        <div onClick={() => setOpenMenu(!isOpenMenu)} >
          <MenuItemsComponent />
        </div>
      )}
    </header>
  );
};

export default Header;
