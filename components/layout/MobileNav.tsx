"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import {
  HEADER_ACTIONS,
  INTERFACE_COPY,
  NAVIGATION,
} from "@/content/home";

export function MobileNav({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-grid size-11 place-items-center rounded-ui text-ink-800 transition-colors duration-150 hover:bg-brand-50 hover:text-brand-700"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">
          {open ? INTERFACE_COPY.closeMenu : INTERFACE_COPY.openMenu}
        </span>
        {open ? <HiOutlineXMark size={24} /> : <HiOutlineBars3 size={24} />}
      </button>
      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-navigation"
            aria-label={INTERFACE_COPY.mobileNavigation}
            className="absolute inset-x-0 top-full border-b border-ink-200 bg-white shadow-[0_18px_35px_rgba(11,11,11,0.12)]"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.26, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="site-container py-3">
              <ul>
                {NAVIGATION.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={`flex min-h-12 items-center justify-between border-b border-ink-100 px-2 text-[13px] font-normal tracking-[0.02em] uppercase transition-colors duration-150 ${
                        pathname === item.href
                          ? "text-brand-700"
                          : "text-ink-800 hover:bg-brand-50 hover:text-brand-700"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`size-1.5 bg-brand-500 ${
                          pathname === item.href ? "opacity-100" : "opacity-0"
                        }`}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="grid gap-2 py-4 sm:grid-cols-2">
                {HEADER_ACTIONS.map((action) => (
                  <Link
                    key={action.label}
                    href={action.href}
                    onClick={() => setOpen(false)}
                    className={
                      action.variant === "solid"
                        ? "inline-flex min-h-12 items-center justify-center rounded-chip bg-brand-700 px-5 text-[13px] leading-none font-normal tracking-[0.02em] uppercase text-white transition-colors hover:bg-brand-800 active:bg-brand-900"
                        : "inline-flex min-h-12 items-center justify-center rounded-chip border border-brand-700 px-5 text-[13px] leading-none font-normal tracking-[0.02em] uppercase text-brand-700 transition-colors hover:bg-brand-700 hover:text-white active:bg-brand-800"
                    }
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
