"use client";
import React, { useState, useEffect, useRef } from "react";

import { menuItemsType } from "../../../../types/menu-types";
import { useRouter } from "next/navigation";

import { useSelector } from "react-redux";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import { useDispatch } from "react-redux";
import { setInitialRoutes } from "@/store/store";
import { IRootState } from "@/store";

interface OptionType {
  value: string;
  label: string;
}

const Selectmenu = ({
  tabs,
  setPageTitle,
}: {
  tabs: menuItemsType[];
  setPageTitle?: (title: string) => void;
}) => {
  const initialRoutes =
    useSelector((state: IRootState) => state.themeConfig.initialRoutes) || "";

  const navigation = useRouter();
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.title);
  const dispatch = useDispatch();
  const containerRef = useRef<HTMLDivElement>(null);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);

  const handleChange = (option: OptionType | null) => {
    setSelectedOption(option);
    if (option) {
      localStorage.setItem("selectedOption", JSON.stringify(option));
      navigation.push(option.value);
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowPrevButton(scrollLeft > 0);
      setShowNextButton(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleActivetab = (link: string, title: string) => {
    console.log(link);
    setActiveTab(link);

    console.log(initialRoutes);
    dispatch(setInitialRoutes(link));
    if (setPageTitle) {
      setPageTitle(title);
    }
  };

  useEffect(() => {
    let currentRoute = initialRoutes || "/dashboard"; // Default to "/dashboard"
  
    const tab = tabs.find((tab) => tab.link === currentRoute);
    if (tab) {
      setActiveTab(tab.link);
      if (setPageTitle) {
        setPageTitle(tab.title);
      }
    } else {
      setActiveTab("/dashboard"); // Fallback to Profile
      if (setPageTitle) {
        setPageTitle("Profile");
      }
    }
  }, [tabs]);

  const navigate = useRouter();
   const isAuthenticated =
      useSelector((state: IRootState) => state.themeConfig.isAuthenticated) || false;
    const Token =   useSelector((state: IRootState) => state.themeConfig.authToken) || "";
    const [isLogin, setLogin] = useState(false);
  
 useEffect(() => {
    if (Token && isAuthenticated) {
      setLogin(true);
    } else {
      setLogin(false);
    }
 }, [isAuthenticated, Token]);

 useEffect(() => {
   const timer = setTimeout(() => {
     if (!isLogin) {
       navigate.push("/Login");
     }
   }, 5000);
   return () => clearTimeout(timer);
 }, [isLogin, navigate]);




  return (
    <div className="mb-4">
      <div className="w-full flex justify-between items-center">
        {showPrevButton && (
          <button
            onClick={scrollLeft}
            className="bg-primary mr-2 hover:bg-purple-200 duration-300 p-2 bg-purple-100 rounded-full font-bold"
          >
            <ArrowLeft size={32} />
          </button>
        )}
        <div
          ref={containerRef}
          className="rounded-xl w-full bg-softBg1 p-3 gap-x-3 flex justify-between overflow-x-auto scrollbar-hide "
          style={{ scrollbarWidth: "thin" }}
        >
          {tabs.map((tab) => (

            (tab.link === "/dashboard")?
              <Link
              key={"Profile"}
              href={"/dashboard"}
              className={` font-bold px-3 py-2 rounded min-w-[100px] duration-300  text-center ${
                activeTab === tab.link
                  ? "text-black bg-s2"
                  : "hover:text-black text-bodyText hover:bg-s2"
              }`}
              onClick={() => handleActivetab(tab.link, tab.title)}
              >
              {tab.title}
              </Link>
            :
            <Link
              key={tab.title}
              href={tab.link}
              className={` font-bold px-3 py-2 rounded min-w-[100px] duration-300  text-center ${
                activeTab === tab.link
                  ? "text-black bg-s2"
                  : "hover:text-black text-bodyText hover:bg-s2"
              }`}
              onClick={() => handleActivetab(tab.link, tab.title)}
            >
              {tab.title}
            </Link>
          ))}
        </div>
        {showNextButton && (
          <button
            onClick={scrollRight}
            className="bg-primary ml-2 hover:bg-purple-200 duration-300 p-2 bg-purple-100 rounded-full font-bold"
          >
            <ArrowRight size={32} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Selectmenu;
