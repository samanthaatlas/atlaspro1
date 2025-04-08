'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';

import { buttonVariants } from '@/components/ui/button';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { ToggleMenuButton } from '@/components/ToggleMenuButton';
import { useMenu } from '@/hooks/UseMenu';
import { cn } from '@/utils/Helpers';
import { Logo } from '@/templates/Logo';
import { FeaturesMenu } from '@/features/landing/FeaturesMenu';

const navItems = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    href: '/'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
      </svg>
    ),
    href: '/features'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M12 2a10 10 0 1 0 10 10H12V2Z" />
        <path d="M21 12a9 9 0 1 1-9-9" />
        <path d="M12 2a9 9 0 0 1 9 9" />
      </svg>
    ),
    href: '/analytics'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
    href: '/docs'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    href: '/team'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    ),
    href: '/notifications'
  }
];

export const Navbar = () => {
  const t = useTranslations('Navbar');
  const { showMenu, handleToggleMenu } = useMenu();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed left-4 top-4 z-50 lg:hidden">
        <ToggleMenuButton onClick={handleToggleMenu} />
      </div>

      {/* Side Navigation */}
      <nav className={cn(
        "fixed right-0 top-0 z-40 flex h-screen flex-col items-center border-l border-border/40 bg-black p-4 transition-all duration-300",
        isCollapsed ? "w-[48px]" : "w-[72px]"
      )}>
        {/* Toggle button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="mb-8 flex h-10 w-10 items-center justify-center rounded-lg text-primary transition-colors hover:bg-primary/10"
          aria-label={isCollapsed ? "Expand menu" : "Collapse menu"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
            {isCollapsed ? (
              <path d="m9 18 6-6-6-6" />
            ) : (
              <path d="m15 18-6-6 6-6" />
            )}
          </svg>
        </button>

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
            <Link
              href="/sign-up"
              className={buttonVariants({
                variant: 'default',
                size: 'icon',
                className: cn(
                  'bg-primary hover:bg-primary/90',
                  isCollapsed ? 'h-8 w-8' : 'h-10 w-10'
                ),
              })}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("transition-all", isCollapsed ? "size-4" : "size-5")}>
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Link>
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
