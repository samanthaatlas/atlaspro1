'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { buttonVariants } from '@/components/ui/buttonVariants';
import { cn } from '@/utils/Helpers';
import { useMenu } from '@/hooks/UseMenu';

const navItems = [
  {
    href: '/features',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      </svg>
    ),
  },
  {
    href: '/analytics',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
];

export const Navbar = () => {
  const t = useTranslations('Navbar');
  const { showMenu, handleToggleMenu } = useMenu();
  const isCollapsed = false;

  return (
    <>
      {/* Mobile menu button */}
      <button
        type="button"
        onClick={handleToggleMenu}
        className="fixed right-4 top-4 z-40 rounded-lg p-2 text-primary hover:bg-primary/10 lg:hidden"
      >
        {showMenu ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        )}
      </button>

      {/* Side navigation */}
      <nav
        className={cn(
          "fixed left-0 top-0 z-30 flex h-full w-[4.5rem] flex-col border-r bg-background p-3 transition-transform lg:translate-x-0",
          showMenu ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo */}
        <Link href="/" className="mb-8 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8 text-primary">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.29 7 12 12 20.71 7" />
            <line x1="12" y1="22" x2="12" y2="12" />
          </svg>
        </Link>

        <div className="flex h-full flex-col items-center justify-between gap-8">
          {/* Navigation Links */}
          <div className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center justify-center rounded-lg text-primary transition-all",
                  isCollapsed ? "h-8 w-8" : "h-10 w-10",
                  "hover:bg-primary/10"
                )}
              >
                {item.icon}
              </Link>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col gap-4">
            <LocaleSwitcher />
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {showMenu && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={handleToggleMenu}
        />
      )}
    </>
  );
};
