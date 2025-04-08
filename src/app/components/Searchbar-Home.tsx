
"use client"
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SearchbarHome = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const router = useRouter();

  const searchData = [
    { title: "GST Registration", link: "/gst-and-other-indirect-tax/gst-registration" },
    { title: "GST Filing", link: "/gst-and-other-indirect-tax/gst-filing" },
    { title: "Nidhi Company Registration", link: "/nidhi-company-registration" },
    { title: "Digital Signature Certificate (DSC)", link: "/digital-signature-certificate" },
    {
      title: "Private Limited Registration",
      link: "/pvt-ltd-incorporation",
    },
    {
      title: "LLP Registration",
      link: "/limited-liability-partnership-registration",
    },
    {
      title: "Udyam/ MSME Registration",
      link: "/msme-registration",
    },
    {
      title: "Trade Mark Registration",
      link: "/trade-mark-ip/trademark-registration",
    },
    {
      title: "Startup India Registration",
      link: "/startup-india/registration",
    },
    {
      title: "Income Tax",
      link: "/accounting/income-tax-assessment",
    },
   
    {
      title: "Annual Compliance",
      link: "/mca-compliances",
    },
  ];

  const filteredData = searchData.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e:any) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % filteredData.length);
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prevIndex) => (prevIndex - 1 + filteredData.length) % filteredData.length);
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      router.push(filteredData[selectedIndex].link);
    }
  };

  useEffect(() => {
    if (isFocused) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFocused, selectedIndex, filteredData]);

  return (
    <div className="relative">
      <div
        className={`flex items-center pr-5 pl-2 transition-all duration-300 ease-in-out ${
          isFocused
            ? "bg-white shadow-lg ring-2 ring-blue-500"
            : "bg-white/90 shadow"
        } rounded-full`}
      >
        <input
          type="text"
          placeholder='Try Search "GST Registration"'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full py-2.5 pl-4 pr-4 text-lg text-gray-700 bg-transparent rounded-full focus:outline-none"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <Search
          className={`w-6 h-6 transition-all duration-300 ${
            isFocused ? "text-blue-500" : "text-gray-400"
          }`}
        />
      </div>

      {/* Suggestions Dropdown */}
      { query && (
        <div className="absolute left-0 w-full mt-1 max-h-96 overflow-x-auto  bg-white dark:bg-black border rounded-lg shadow-lg">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`block px-4 py-2 hover:bg-blue-100 text-gray-700 ${
                  selectedIndex === index ? "bg-blue-100" : ""
                }`}
              >
                {item.title}
              </Link>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchbarHome;