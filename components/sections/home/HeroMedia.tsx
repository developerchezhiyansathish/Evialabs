"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CREDENTIALS, HERO } from "@/content/home";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function HeroMedia() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: scope.current,
            start: "top 86%",
            once: true,
          },
        });

        timeline
          .fromTo(
            ".hero-photo",
            { scale: 1.08 },
            { scale: 1, duration: 1.15, ease: "power3.out" },
            0,
          )
          .to(
            ".media-curtain-left",
            { xPercent: -102, duration: 0.95, ease: "power4.inOut" },
            0,
          )
          .to(
            ".media-curtain-right",
            { xPercent: 102, duration: 0.95, ease: "power4.inOut" },
            0,
          )
          .fromTo(
            ".media-shine",
            { xPercent: -240 },
            { xPercent: 340, duration: 0.8, ease: "power2.inOut" },
            0.72,
          )
          .fromTo(
            ".media-badge",
            { opacity: 0, y: 10 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.06,
              ease: "power3.out",
            },
            0.75,
          );
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".media-curtain-left", ".media-curtain-right", ".media-shine"], {
          display: "none",
        });
        gsap.fromTo(
          ".hero-photo",
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: scope.current,
              start: "top 90%",
              once: true,
            },
          },
        );
      });

      return () => media.revert();
    },
    { scope },
  );

  return (
    <div ref={scope} className="relative mx-auto w-full max-w-[590px]">
      <div
        className="absolute -left-3 -top-3 h-[88%] w-[88%] rounded-card bg-brand-200 sm:-left-5 sm:-top-5"
        aria-hidden="true"
      />
      <div className="relative aspect-[4/5] overflow-hidden rounded-card border border-white/70 bg-white shadow-[0_24px_60px_rgba(47,75,28,0.18)]">
        <Image
          src="/images/evia-hero-manufacturing.png"
          alt={HERO.imageAlt}
          fill
          priority
          sizes="(min-width: 1024px) 43vw, (min-width: 640px) 70vw, 94vw"
          className="hero-photo object-cover"
        />
        <div
          className="media-curtain-left absolute inset-y-0 left-0 z-10 w-1/2 bg-brand-50"
          aria-hidden="true"
        />
        <div
          className="media-curtain-right absolute inset-y-0 right-0 z-10 w-1/2 bg-brand-50"
          aria-hidden="true"
        />
        <div
          className="media-shine pointer-events-none absolute inset-y-[-10%] left-[-10%] z-20 w-[18%] rotate-12 bg-white/45 blur-md"
          aria-hidden="true"
        />
        <div className="absolute left-3 top-3 z-30 flex flex-wrap gap-1.5 sm:left-5 sm:top-5">
          <span className="media-badge rounded-chip border border-brand-200 bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-brand-700 backdrop-blur-sm">
            {CREDENTIALS[4]}
          </span>
        </div>
        <div className="absolute bottom-3 right-3 z-30 flex gap-1 sm:bottom-5 sm:right-5">
          {CREDENTIALS.slice(0, 4).map((credential) => (
            <span
              key={credential}
              className="media-badge rounded-chip bg-ink-900 px-2 py-1 text-[9px] font-semibold text-white"
            >
              {credential}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
