'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { mainNavItems } from '@/src/data/navigation';
import { MobileNav } from './mobile-nav';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/src/components/ui/navigation-menu';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed z-40 h-16 top-0 left-0 right-0 w-full flex items-center backdrop-blur-md border-b transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 border-gray-200 shadow-md shadow-gray-200/50'
        : 'bg-white/80 border-gray-100 shadow-sm'
    }`}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/tsu-logo.png"
              alt="CasinoTsu"
              width={140}
              height={38}
              className="h-8 w-auto sm:h-9"
              priority
            />
          </Link>

          <NavigationMenu className="hidden lg:flex flex-1 justify-end">
            <NavigationMenuList>
              {mainNavItems.map((item) =>
                item.children ? (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuTrigger className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-indigo-600 bg-transparent hover:bg-indigo-50/60 data-[state=open]:bg-indigo-50/60 data-[state=open]:text-indigo-600 rounded-lg">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-[220px]">
                      <ul className="py-1">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={child.href}
                                className="block px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                              >
                                {child.label}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors rounded-lg hover:bg-indigo-50/60 inline-flex items-center"
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
