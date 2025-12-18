"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, ReactNode } from "react";
import { BookOpenText, Gift, Dice6, Bitcoin, CreditCard } from "lucide-react";

type NavItem = { label: string; href: string; items?: NavItem[] };
type SocialItem = { label: string; href: string; icon?: ReactNode };

type HeaderProps = {
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  onLogoClickHref?: string;
  nav?: NavItem[];
  socials?: SocialItem[];
  sticky?: boolean;
  shadow?: boolean;
  containerClassName?: string;
};

const defaultNav: NavItem[] = [
  {
    label: "カジノレビュー",
    href: "/reviews",
    items: [
      { label: "カジノレビュー一覧", href: "/reviews" },
    ],
  },
  {
    label: "ボーナス",
    href: "/bonuses",
    items: [
      { label: "ボーナス一覧", href: "/bonuses" },
      { label: "入金不要ボーナス", href: "/bonuses/no-deposit" },
      { label: "賭け条件なしボーナス", href: "/bonuses/no-wagering" },
    ],
  },
  {
    label: "スロット",
    href: "/slots",
    items: [
      { label: "スロット一覧", href: "/slots" },
    ],
  },
  {
    label: "仮想通貨",
    href: "/payment/bitcoin",
    items: [
      { label: "ビットコイン", href: "/payment/bitcoin" },
      { label: "イーサリアム", href: "/payment/ethereum" },
      { label: "仮想通貨カジノ", href: "/payment/crypto" },
    ],
  },
  {
    label: "決済方法",
    href: "/payment",
    items: [
      { label: "決済方法一覧", href: "/payment" },
      { label: "銀行振込", href: "/payment/bank-transfer" },
      { label: "クレジットカード", href: "/payment/visa" },
    ],
  },
];


function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export default function Header({
  logoSrc = "/tsu-logo.png",
  logoAlt = "CasinoTsu",
  logoWidth = 160,
  logoHeight = 48,
  onLogoClickHref = "/",
  nav = defaultNav,
  socials = [],
  sticky = true,
  shadow = true,
  containerClassName = "",
}: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [mobileOpenMenus, setMobileOpenMenus] = useState<Record<number, boolean>>({});
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
      }
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  useEffect(() => {
    const onPointerDown = (e: MouseEvent | PointerEvent) => {
      if (openMenu === null) return;
      const root = headerRef.current;
      if (!root) return;
      if (!root.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openMenu]);

  const headerClasses = [
    "bg-white",
    sticky ? "sticky top-0 z-50" : "",
    shadow ? "shadow-md" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header ref={headerRef} className={headerClasses}>
      <div className={`mx-auto max-w-screen-xl px-4 py-3 flex items-center justify-between ${containerClassName}`}>
        <Link href={onLogoClickHref} className="flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded">
          {logoSrc ? (
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={logoWidth}
              height={logoHeight}
              className="h-12 w-auto"
              priority
            />
          ) : (
            <span className="text-lg font-bold">CasinoTsu</span>
          )}
          <span className="sr-only">Go to homepage</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-6 text-base font-semibold">
          {nav.map((item, idx) => {
            const hasChildren = item.items && item.items.length > 0;
            const isOpen = openMenu === idx;
            const Icon = getTopIcon(item.href, idx);
            if (!hasChildren) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[#0019b2] hover:text-[#0019b2]/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0019b2] rounded inline-flex items-center gap-1"
                >
                  {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
                  <span>{item.label}</span>
                </Link>
              );
            }
            return (
              <div key={item.href} className="relative">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 text-[#0019b2] hover:text-[#0019b2]/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0019b2] rounded"
                  aria-haspopup="menu"
                  aria-expanded={isOpen}
                  onClick={() => setOpenMenu((cur) => (cur === idx ? null : idx))}
                >
                  {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
                  <span>{item.label}</span>
                  <svg className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {isOpen && (
                  <div
                    role="menu"
                    className="absolute left-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black/5 py-2 z-50"
                  >
                    {item.items!.map((child) => {
                      const isMainPage = child.href === item.href;
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2 text-sm text-[#0019b2] hover:text-[#0019b2]/70 transition-colors focus:outline-none ${
                            isMainPage ? 'font-bold' : ''
                          }`}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3 text-[#0019b2]">
            {socials.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                aria-label={s.label}
                className="hover:text-[#0019b2]/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0019b2] rounded"
              >
                {s.icon ?? (
                  <span className="text-xs font-semibold">{s.label}</span>
                )}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="lg:hidden p-1 text-[#0019b2] hover:text-[#0019b2]/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0019b2] rounded"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <IconMenu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden border-t ${open ? "block" : "hidden"}`}
        role="dialog"
        aria-label="Mobile menu"
      >
        <div className="mx-auto max-w-screen-xl px-4 py-3">
          <nav className="flex flex-col text-base font-semibold">
            {nav.map((item, idx) => {
              const hasChildren = item.items && item.items.length > 0;
              const isOpen = !!mobileOpenMenus[idx];
              const Icon = getTopIcon(item.href, idx);
              if (!hasChildren) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="py-2 text-[#0019b2] hover:text-[#0019b2]/70 transition-colors inline-flex items-center gap-2"
                    onClick={() => setOpen(false)}
                  >
                    {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
                    <span>{item.label}</span>
                  </Link>
                );
              }
              return (
                <div key={item.href} className="border-b last:border-b-0">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between py-2 text-[#0019b2] hover:text-[#0019b2]/70"
                    aria-expanded={isOpen}
                    onClick={() => setMobileOpenMenus((m) => ({ ...m, [idx]: !m[idx] }))}
                  >
                    <span className="inline-flex items-center gap-2">
                      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
                      <span>{item.label}</span>
                    </span>
                    <svg className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="pb-2 pl-2">
                      {item.items!.map((child) => {
                        const isMainPage = child.href === item.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block py-1 pl-2 text-[#0019b2] hover:text-[#0019b2]/70 transition-colors ${
                              isMainPage ? 'font-bold' : ''
                            }`}
                            onClick={() => setOpen(false)}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
          {socials.length > 0 && (
            <div className="mt-4 flex items-center gap-4 text-gray-600">
              {socials.map((s) => (
                <Link key={s.href} href={s.href} aria-label={s.label} className="hover:text-[#0019b2]/70 transition-colors">
                  {s.icon ?? <span className="text-xs font-semibold">{s.label}</span>}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function getTopIcon(href: string, index: number) {
  // Attach icons to the five primary items in order:
  // Reviews, Bonus, Slot, Crypto, Payment
  // Fallback to href matching in case order changes.
  if (index === 0 || href.startsWith("/reviews")) return BookOpenText;
  if (index === 1 || href.startsWith("/bonus") || href.startsWith("/bonuses")) return Gift;
  if (index === 2 || href.startsWith("/slots")) return Dice6;
  if (index === 3 || href.startsWith("/crypto")) return Bitcoin;
  if (index === 4 || href.startsWith("/payment")) return CreditCard;
  return undefined;
}
