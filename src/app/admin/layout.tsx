// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import Logo from "../images/ensure_logo.png";
// import {
//   ArrowFatLinesLeft,
//   Bell,
//   Car,
//   CreditCard,
//   Gear,
//   Heart,
//   ListNumbers,
//   Question,
//   ShoppingCart,
// } from "phosphor-react";
// import { Home, LogOut, User } from "lucide-react";
// import { Provider, useSelector } from "react-redux";
// import store, { IRootState } from "@/store";
// import { logout } from "@/store/themeConfigSlice";
// import LoggedNavbar from "../components/LoggedNavbar";
// import { usePathname } from 'next/navigation'

// export default function Layout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {

//     const pathname = usePathname()

//   console.log(pathname)
//   const hideNavbar = pathname === '/admin/Login'

//   console.log(hideNavbar)

//   return (
//     <Provider store={store}>
//       {/* <nav className="bg-softBg1 p-3 shadow-lg flex justify-between items-center">

//     </nav> */}
//       <div className="flex stp-1 sbp-1">

//         {/* <LoggedNavbar/> */}
//         {!hideNavbar && <LoggedNavbar />}
//         <aside className="">{children}</aside>
//       </div>
//     </Provider>
//   );
// }
//----------------------------------------------------------------------------------------------
"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Provider } from "react-redux";
import store from "@/store";
import LoggedNavbar from "../components/LoggedNavbar";
import { useAdminSessionTimeout } from "@/hooks/useAdminSessionTimeout";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const [isAuthChecked, setIsAuthChecked] = useState(false);

  // Initialize admin session timeout (90 minutes)
  useAdminSessionTimeout(false);

  useEffect(() => {
    const adminAuth = localStorage.getItem("adminAuth");

    const isLoggedIn = !!adminAuth;

    const isLoginPage = pathname === "/admin/Login";

    if (!isLoggedIn && !isLoginPage) {
      router.push("/admin/Login");
    }

    if (isLoggedIn && isLoginPage) {
      router.push("/admin");
    }

    setIsAuthChecked(true);
  }, [pathname, router]);

  if (!isAuthChecked) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const hideNavbar = pathname === "/admin/Login";

  return (
    <Provider store={store}>
      <div className={`flex ${hideNavbar ? 'h-screen w-full' : 'h-screen overflow-hidden'}`}>
        {!hideNavbar && <LoggedNavbar />}
        <aside className={`flex-grow ml-0 lg:ml-72 ${hideNavbar ? 'flex items-center justify-center w-full h-full' : 'overflow-y-auto'}`}>{children}</aside>
      </div>
    </Provider>
  );
}
//----------------------------------------------------------------------------------------------

// "use client";

// import { useEffect, useState } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import { Provider } from "react-redux";
// import store from "@/store";
// import LoggedNavbar from "../components/LoggedNavbar";

// export default function Layout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();
//   const router = useRouter();

//   const [isAuthChecked, setIsAuthChecked] = useState(false);

//   useEffect(() => {
//     const adminAuth = localStorage.getItem("adminAuth");

//     const isLoggedIn = !!adminAuth;
//     const isLoginPage = pathname === "/admin/Login";

//     if (!isLoggedIn && !isLoginPage) {
//       router.push("/admin/Login");
//     }

//     if (isLoggedIn && isLoginPage) {
//       router.push("/admin");
//     }

//     setIsAuthChecked(true);
//   }, [pathname, router]);

//   if (!isAuthChecked) return null;

//   const hideNavbar = pathname === "/admin/Login" || pathname === "/super_admin";

//   return (
//     <Provider store={store}>
//       <div className="flex h-screen">
//         {!hideNavbar && (
//           <div className="fixed top-0 left-0">
//             <LoggedNavbar />
//           </div>
//         )}
//         <aside className="flex-grow ml-64 overflow-auto">
//           {children}
//         </aside>
//       </div>
//     </Provider>

//   );
// }
