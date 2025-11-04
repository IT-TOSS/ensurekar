"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Provider } from "react-redux";
import store from "@/store";
import LoggedNavbarSuper from "../../components/admin-Sections/LoggedNavbarSuper";

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    const superAdminAuth = localStorage.getItem("superAdminAuth");

    const isLoggedIn = !!superAdminAuth;
    const isLoginPage = pathname === "/super_admin";

    if (!isLoggedIn && !isLoginPage) {
      router.push("/super_admin");
    }

    if (isLoggedIn && isLoginPage) {
      router.push("/super_admin/dashboard");
    }

    setIsAuthChecked(true);
  }, [pathname, router]);

  if (!isAuthChecked) return null;

  return (
    <Provider store={store}>
      <div className="flex min-h-screen">
        <LoggedNavbarSuper />
        <main className="flex-grow p-3 sm:p-6 ml-0 lg:ml-80 bg-gray-50 min-h-screen overflow-x-auto">
          <div className="w-full">
            {children}
          </div>
        </main>
      </div>
    </Provider>
  );
}
