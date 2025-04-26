"use client";

import  { usePathname } from "next/navigation"
import { Provider, useSelector } from "react-redux";
import store, { IRootState } from "@/store";
import { logout } from "@/store/themeConfigSlice";
//import LoggedNavbar from "../components/LoggedNavbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  console.log(pathName)
 
  return (
    <Provider store={store}>
      <div className="flex">
        {/* {
          pathName !== "/admindashboard/Login" && pathName !== "/admindashboard/Register"?
         ( <LoggedNavbar/> )
        : null
        } */}
        
        <aside className="flex justify-center items-center w-full h-full">
      {children}
    </aside>
      </div>
    </Provider>
  );
}



