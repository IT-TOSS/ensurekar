"use client";

import Link from "next/link";
import { CaretDown } from "phosphor-react";
import React, { useState } from "react";
import navigations from "../../../public/data/navigation-routes.json";
interface SubOption {
  title: string;
  link: string;
}

interface SubMenu {
  title: string;
  link: string;
  options: SubOption[];
}

const DesktopNavbar: React.FC = () => {
  const options: any[] = navigations;

  const [hoveredMainMenu, setHoveredMainMenu] = useState<number | null>(null);
  const [hoveredSubMenu, setHoveredSubMenu] = useState<number | null>(null);
  const [active, setActive] = useState<string>("");

  return (
    <nav className="max-lg:hidden">
      <ul className="flex justify-center mx-3 items-center gap-1">
        {options.map((option: any, index: number) => (
          <li
            key={index}
            className={`flex text-nowrap group menu justify-center items-center gap-1 relative rounded-lg  hover:shadow-[0px_2px_0px_0px_#FFBF3F]
              subMenuTitle hover:cursor-pointer ${
                active === option.title
                  ? "shadow-[0px_2px_0px_0px_#FFBF3F]"
                  : ""
              }
              `}
            onMouseEnter={() => setHoveredMainMenu(index)}
            onMouseLeave={() => setHoveredMainMenu(null)}
          >
            {/* Main Menu Title */}
            {option && option.link ? (
              <Link href={option.link} onClick={() => setActive(option.title)}>
                <p className="flex justify-center items-center gap-1 text-nowrap relative px-2 py-2 rounded-lg">
                  {option.title}
                </p>
              </Link>
            ) : (
              <div
                className="flex justify-center items-center gap-1 text-[rgb(28 176 175)]  relative px-1 py-2 rounded-lg"
                onClick={() => setActive(option.title)}
              >
                {option.title}
                <CaretDown
                  weight="bold"
                  className="inline-block group-hover:rotate-180 duration-700"
                />
              </div>
            )}

            {/* Show SubMenu Titles on Hover */}
            {hoveredMainMenu === index &&
              (option.subMenu || option.mircoOptions) && (
                <ul
                  className={`absolute px-2 top-10 left-0 pointer-events-none group-hover:pointer-events-auto flex justify-start items-start flex-col py-6 gap-3 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:z-50 bg-s1  text-white/80 rounded-lg group-hover:translate-y-0 group-hover:scale-100 translate-y-8 scale-75 duration-500 transform transition-all ease-in-out `}
                >
                  {option.subMenu?.map((sub: SubMenu, subIndex: number) => (
                    <li
                      key={subIndex}
                      className={`cursor-pointer px-2 text-start text-nowrap relative duration-500 subMenuItem ${hoveredSubMenu === subIndex ? "text-s2" : ""}`}
                      onMouseEnter={() => setHoveredSubMenu(subIndex)}
                      onMouseLeave={() => setHoveredSubMenu(null)}
                      onClick={() => setActive(option.title)}
                    >
                      <Link href={sub.link || "#"} className="hover:translate-x-2 transition-transform duration-500  hover:text-s2">
                        {sub.title}
                      </Link>
                      {hoveredSubMenu === subIndex && sub.options  && (
                        <ul className={`absolute left-full bg-s1 p-3 top-0 z-50 shadow-lg rounded-lg py-3   duration-300  group-hover:opacity-100 ${hoveredSubMenu === subIndex ? "text-s2" : ""}`}>
                          {sub.options.map(
                            (
                              subOption: SubOption,
                              subOptionIndex: number
                            ) => (
                              <li
                                key={subOptionIndex}
                                className={`px-6 py-1.5 hover:translate-x-2 transition-transform  duration-500 hover:text-s2 subMenuItem ${hoveredSubMenu === subIndex ? "text-s2" : ""}`}
                                // onClick={() => setActive(option.title)}
                              >
                                <Link href={subOption.link} className=" text-white/80  hover:translate-x-2 transition-transform duration-500 hover:text-s2">
                                  {subOption.title}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </li>
                  ))}

                  {option.mircoOptions?.map(
                    (mircoOption: SubOption, mircoOptionIndex: number) => (
                      <li
                        key={mircoOptionIndex}
                        className="px-6 py-1.5 hover:translate-x-2 transition-transform duration-500 text-nowrap  hover:text-s2 subMenuItem"
                      >
                        <Link href={mircoOption.link}>
                          {mircoOption.title}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { DesktopNavbar };
