'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/src/components/ui/sheet';
import { mainNavItems } from '@/src/data/navigation';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label],
    );
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          className="lg:hidden p-2 text-gray-700 transition-colors hover:text-indigo-600"
          aria-label="メニューを開く"
        >
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 p-0">
        <SheetTitle className="sr-only">ナビゲーションメニュー</SheetTitle>
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <span className="text-lg font-bold text-gray-900">メニュー</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="p-1 text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-1">
            {mainNavItems.map((item) =>
              item.children ? (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => toggleExpand(item.label)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${expandedItems.includes(item.label) ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {expandedItems.includes(item.label) && (
                    <ul className="ml-3 mt-1 space-y-0.5 border-l-2 border-indigo-100 pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
