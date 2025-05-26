
'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
  ctaSection: React.ReactNode;
  scrollToTop: React.ReactNode;
}

export default function ClientLayoutWrapper({
  children,
  header,
  footer,
  ctaSection,
  scrollToTop,
}: ClientLayoutWrapperProps) {
  const pathname = usePathname();
  // const isAdminDashboard = pathname === '/Adman' || pathname?.startsWith('/Adman/');
  const isAdminDashboard =  pathname === '/Adman' ||  pathname?.startsWith('/Adman/') ||  pathname === '/admin' ||  pathname?.startsWith('/admin/');

  return (
    <>
      {!isAdminDashboard && header}
      {/* <LoggedNavbar/> */}
      {children}
      {!isAdminDashboard && ctaSection}
      {!isAdminDashboard && footer}
      {scrollToTop}
    </>
  );
}