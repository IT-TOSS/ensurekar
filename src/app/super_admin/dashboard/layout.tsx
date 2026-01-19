"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Provider } from "react-redux";
import store from "@/store";
import LoggedNavbarSuper from "../../components/admin-Sections/LoggedNavbarSuper";
import { useAdminSessionTimeout } from "@/hooks/useAdminSessionTimeout";

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const [isAuthChecked, setIsAuthChecked] = useState(false);

  // Initialize super admin session timeout (90 minutes)
  useAdminSessionTimeout(true);

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
      <div className="flex h-screen overflow-hidden">
        <LoggedNavbarSuper />
        <main className="flex-grow p-3 sm:p-6 ml-0 lg:ml-80 bg-gray-50 h-screen overflow-y-auto overflow-x-hidden">
          <div className="w-full min-h-0">
            {children}
          </div>
        </main>
      </div>
    </Provider>
  );
}
