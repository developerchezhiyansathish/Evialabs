"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  HEADER_ACTIONS,
  INTERFACE_COPY,
  NAVIGATION,
} from "@/content/home";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 12);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "border-ink-200/80 bg-white/95 shadow-[0_8px_30px_rgba(11,11,11,0.07)] backdrop-blur-xl"
          : "border-ink-200 bg-white"
      }`}
    >
      <div className="site-container flex h-[72px] items-center justify-between gap-3 lg:h-20">
        <Link
          href="/"
          className="group inline-flex h-full min-h-11 shrink-0 items-center"
          aria-label={INTERFACE_COPY.logoAlt}
        >
          <Image
            src="/images/evia-labs.webp"
            alt={INTERFACE_COPY.logoAlt}
            width={512}
            height={200}
            priority
            sizes="(min-width: 1024px) 138px, 116px"
            className="block h-auto w-[116px] transition-[opacity,transform] duration-200 ease-standard group-hover:scale-[1.02] group-hover:opacity-85 lg:w-[138px]"
          />
        </Link>
        <nav
          className="hidden h-full min-w-0 lg:block"
          aria-label={INTERFACE_COPY.primaryNavigation}
        >
          <ul className="flex h-full items-center justify-center gap-2 xl:gap-3">
            {NAVIGATION.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`group relative inline-flex min-h-11 items-center px-1 text-[13px] leading-none font-normal tracking-[0.02em] whitespace-nowrap uppercase transition-colors duration-150 xl:px-1.5 ${
                    pathname === item.href
                      ? "text-brand-700"
                      : "text-ink-700 hover:text-brand-700"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-1 bottom-1.5 h-0.5 origin-left bg-brand-700 transition-transform duration-200 ease-out xl:inset-x-1.5 ${
                      pathname === item.href
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden h-full shrink-0 items-center gap-3 lg:flex">
          {HEADER_ACTIONS.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className={
                action.variant === "solid"
                  ? "inline-flex min-h-11 items-center justify-center rounded-chip border border-brand-700 bg-brand-700 px-4 text-[13px] leading-none font-normal tracking-[0.02em] whitespace-nowrap uppercase text-white transition-[background-color,transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-md active:translate-y-0 active:bg-brand-900 xl:px-5"
                  : "inline-flex min-h-11 items-center justify-center rounded-chip border border-brand-700 bg-white px-4 text-[13px] leading-none font-normal tracking-[0.02em] whitespace-nowrap uppercase text-brand-700 transition-[background-color,color,transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:bg-brand-700 hover:text-white hover:shadow-md active:translate-y-0 active:bg-brand-800 xl:px-5"
              }
            >
              {action.label}
            </Link>
          ))}
        </div>
        <MobileNav pathname={pathname} />
      </div>
    </header>
  );
}
