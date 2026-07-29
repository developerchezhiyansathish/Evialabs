"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
};

export function AnimatedCounter({
  value,
  suffix = "",
}: AnimatedCounterProps) {
  const element = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!element.current) return;

      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const counter = { value: 0 };
        gsap.to(counter, {
          value,
          duration: 1.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element.current,
            start: "top 88%",
            once: true,
          },
          onUpdate: () => {
            if (element.current) {
              element.current.textContent = `${Math.round(counter.value)}${suffix}`;
            }
          },
        });
      });
      return () => media.revert();
    },
    { scope: element, dependencies: [value, suffix] },
  );

  return (
    <span ref={element}>
      {value}
      {suffix}
    </span>
  );
}
