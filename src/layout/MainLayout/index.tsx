'use client';

import { lazy, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

const Header = lazy(() => import('./Header'));
const Footer = lazy(() => import('./Footer'));

export default function MainLayout({ children }: { children: ReactNode}) {
  const pathname = usePathname();

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
