"use client";

import { SearchIcon } from 'lucide-react';
import React from 'react';

const BrandnameSearch = () => {
  const handleBrandnameSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Your search logic here
    console.log("Search button clicked");
  };

  return (
    <section className="stp-30 sbp-30 bg-softBg2 flex items-center justify-center relative max-xxl:overflow-hidden">
      <div className="">
        <div className="bg-gray-100 flex md:w-full flex-wrap justify-center items-center p-2.5 rounded-lg">
          <div className="flex p-2 w-72 md:mr-5 my-2.5 border items-center justify-center space-x-4">
            <SearchIcon className="h-6 w-6 opacity-30" />
            <input
              className="bg-gray-100 md:w-full outline-none"
              type="text"
              placeholder="Search your brandname here"
            />
          </div>

          <button
            className="md:min-w-[200px] items-center p-2 bg-yellow-400 border rounded mx-auto text-center cursor-pointer hover:border-mainTextColor font-bold duration-500 text-slate-800"
            onClick={handleBrandnameSearch}
          >
            Search Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandnameSearch;
