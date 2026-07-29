"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ScrollProgress() {
  const progress = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        progress.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          transformOrigin: "left",
          scrollTrigger: {
            start: 0,
            end: "max",
            scrub: true,
          },
        },
      );
    });
    return () => media.revert();
  });

  return (
    <div
      ref={progress}
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-brand-500"
      aria-hidden="true"
    />
  );
}
