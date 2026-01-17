"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { X, CaretRight } from "phosphor-react";
import Image from "next/image";
import Logo from "../images/ensure_logo.png";
import navigations from "../../../public/data/navigation-routes.json"

interface Option {
  title: string;
  link?: string;
  subMenu?: Option[];
  options?: Option[];
  mircoOptions?: Option[];
}

const MobileNavbar = ({
  Sidebar,
  setOpenSidebar,
}: {
  Sidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const options: Option[] = navigations;

  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const [openSubOptions, setOpenSubOptions] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleSubMenu = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
    setOpenSubOptions(null); // Reset suboptions when opening a new menu
  };

  const toggleSubOptions = (index: number) => {
    setOpenSubOptions(openSubOptions === index ? null : index);
  };

  // Handle click outside the menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenSidebar(false);
      }
    };

    if (Sidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [Sidebar, setOpenSidebar]);

  if (!Sidebar) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex justify-start items-start bg-black bg-opacity-50 transition-opacity duration-300"
    >
      <nav
        ref={menuRef}
        className="h-full bg-s2 p-5 overflow-hidden z-[999] w-fit max-w-[85vw] transition-transform transform ease-in-out duration-300 flex flex-col"
      >
        <div className="flex justify-between items-center w-full py-3 sm:py-4 flex-shrink-0">
          <Link href="/">
            <Image src={Logo} alt="logo" className="w-40 sm:w-50 mr-3" />
          </Link>
          <i
            className="text-2xl sm:text-3xl cursor-pointer hover:opacity-70 transition-opacity"
            onClick={() => setOpenSidebar(false)}
          >
            <X weight="bold" />
          </i>
        </div>

        <ul className="text-base sm:text-lg mt-3 flex gap-1 sm:gap-2 items-start flex-col pl-2 sm:pl-3 flex-1 overflow-y-hidden overflow-x-hidden">
          {options.map((option, index) => (
            <li key={index}>
              {option.subMenu ? (
                <div className="flex flex-col">
                  {/* Title with submenu */}
                  <div
                    className="flex justify-between items-center cursor-pointer transition-all ease-in duration-300 py-1"
                    onClick={() => toggleSubMenu(index)}
                  >
                    <span className="font-medium text-lg sm:text-xl">{option.title}</span>
                    <CaretRight
                      weight="bold"
                      className={`text-lg sm:text-xl pl-1 transform transition-transform duration-500 ${
                        openSubMenu === index ? "rotate-90" : ""
                      }`}
                    />
                  </div>

                  {/* Submenu options */}
                  {openSubMenu === index && (
                    <div className="pl-3 sm:pl-4 transition-all ease-in duration-300">
                      {option.subMenu.map((subOption, subIndex) => (
                        <div key={subIndex} className="flex flex-col mt-1">
                          <div
                            className="cursor-pointer flex justify-between items-center transition-all ease-in duration-300 py-0.5"
                            onClick={() => toggleSubOptions(subIndex)}
                          >
                            <Link href={subOption?.link ||"#"} className="text-sm sm:text-base">{subOption.title}</Link>

                            {subOption.options && (
                              <CaretRight
                                weight="bold"
                                className={`text-base sm:text-lg pl-1 transform transition-transform duration-500 ${
                                  openSubOptions === subIndex ? "rotate-90" : ""
                                }`}
                              />
                            )}
                          </div>

                          {/* Sub-options under the submenu */}
                          {openSubOptions === subIndex && subOption.options && (
                            <ul className="pl-3 sm:pl-4 flex flex-col mt-1">
                              {subOption.options.map((opt, optIndex) => (
                                <li
                                  key={optIndex}
                                  className="relative pl-5 sm:pl-6 before:content-['\00BB'] before:absolute before:left-0 before:text-sm sm:text-base before:font-bold before:text-gray-500 py-0.5"
                                >
                                  <Link
                                    href={opt.link || "#"}
                                    className="text-sm sm:text-base"
                                    onClick={() => setOpenSidebar(false)}
                                  >
                                    {opt.title} 
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : option.mircoOptions ? (
                <div className="flex flex-col">
                  {/* Title with micro-options */}
                  <div
                    className="flex justify-between items-center cursor-pointer transition-all ease-in duration-300 py-1"
                    onClick={() => toggleSubMenu(index)}
                  >
                    <span className="font-medium text-lg sm:text-xl">{option.title}</span>
                    <CaretRight
                      weight="bold"
                      className={`text-lg sm:text-xl pl-1 transform transition-transform duration-500 ${
                        openSubMenu === index ? "rotate-90" : ""
                      }`}
                    />
                  </div>

                  {/* Micro-options */}
                  {openSubMenu === index && (
                    <ul className="pl-3 sm:pl-4 flex flex-col mt-1 transition-all ease-in duration-300">
                      {option.mircoOptions.map((opt, optIndex) => (
                        <li
                          key={optIndex}
                          className="relative pl-5 sm:pl-6 before:content-['\00BB'] before:absolute before:left-0 before:text-sm sm:text-base before:font-bold before:text-gray-500 py-0.5"
                        >
                          <Link
                            href={opt.link || "#"}
                            className="text-sm sm:text-base"
                            onClick={() => setOpenSidebar(false)}
                          >
                            {opt.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={option.link || "#"}
                  className="cursor-pointer py-1 text-lg sm:text-xl"
                  onClick={() => setOpenSidebar(false)}
                >
                  {option.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavbar;
