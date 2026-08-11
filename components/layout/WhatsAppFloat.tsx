"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { HiArrowUp } from "react-icons/hi2";
import { FOOTER_CONTENT } from "@/content/home";

export function WhatsAppFloat() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setShowBackToTop(window.scrollY > 320);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`grid size-12 place-items-center rounded-full border border-ink-200 bg-white text-ink-800 shadow-[0_10px_26px_rgba(11,11,11,0.16)] transition-[opacity,transform,background-color,color] duration-200 hover:-translate-y-1 hover:bg-brand-700 hover:text-white focus-visible:outline-brand-700 ${
          showBackToTop
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-90 opacity-0"
        }`}
      >
        <HiArrowUp size={20} aria-hidden="true" />
      </button>

      <a
        href={`https://wa.me/${FOOTER_CONTENT.contact.phoneHref.replace(/\D/g, "")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with EVIA Labs on WhatsApp"
        className="grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_rgba(37,211,102,0.34)] transition-transform duration-200 hover:-translate-y-1 hover:scale-105 focus-visible:outline-[#128C7E]"
      >
        <FaWhatsapp size={29} aria-hidden="true" />
      </a>
    </div>
  );
}
