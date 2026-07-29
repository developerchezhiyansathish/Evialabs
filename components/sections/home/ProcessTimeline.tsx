"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CAPABILITIES_PROCESS } from "@/content/home";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ProcessTimeline() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".timeline-fill",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: scope.current,
              start: "top 72%",
              end: "bottom 72%",
              scrub: 0.8,
            },
          },
        );

        gsap.utils.toArray<HTMLElement>(".process-item").forEach((item) => {
          const content = item.querySelector(".process-content");
          const node = item.querySelector(".process-node");

          gsap.fromTo(
            content,
            { opacity: 0.32, y: 28 },
            {
              opacity: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top 82%",
                end: "top 58%",
                scrub: 0.45,
              },
            },
          );

          gsap.fromTo(
            node,
            {
              backgroundColor: "var(--color-ink-50)",
              color: "var(--color-brand-700)",
              scale: 0.88,
            },
            {
              backgroundColor: "var(--color-brand-700)",
              color: "white",
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top 76%",
                end: "top 60%",
                scrub: 0.35,
              },
            },
          );
        });
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".timeline-fill", { scaleY: 1 });
        gsap.set(".process-content", { opacity: 1, y: 0 });
        gsap.set(".process-node", {
          backgroundColor: "var(--color-brand-700)",
          color: "white",
          scale: 1,
        });
      });

      return () => media.revert();
    },
    { scope },
  );

  return (
    <div ref={scope} className="relative mt-14 sm:mt-16 lg:mt-20">
      <div
        className="absolute bottom-0 left-5 top-0 w-px bg-ink-200 md:left-1/2 md:-translate-x-1/2"
        aria-hidden="true"
      >
        <div className="timeline-fill h-full origin-top bg-brand-700" />
      </div>

      <ol>
        {CAPABILITIES_PROCESS.steps.map((step, index) => {
          const placeLeft = index % 2 === 0;
          return (
            <li
              key={step.h3}
              className="process-item relative min-h-52 pb-14 pl-16 last:min-h-0 last:pb-0 md:min-h-60 md:pl-0 md:pb-16"
            >
              <span
                className="process-node absolute left-0 top-0 z-10 grid size-10 place-items-center rounded-ui border border-brand-700 bg-ink-50 text-xs font-medium text-brand-700 md:left-1/2 md:-translate-x-1/2"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <article
                className={`process-content rounded-card border border-ink-200 bg-white p-5 shadow-[0_12px_35px_rgba(11,11,11,0.04)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_18px_42px_rgba(47,75,28,0.10)] sm:p-7 md:w-[calc(50%-3.5rem)] ${
                  placeLeft
                    ? "md:mr-auto md:text-right"
                    : "md:ml-auto md:text-left"
                }`}
              >
                <h3 className="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] leading-tight font-normal text-ink-900">
                  {step.h3}
                </h3>
                <p className="mt-4 text-sm leading-[1.7] font-normal text-ink-600 sm:text-base sm:leading-[1.75]">
                  {step.description}
                </p>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
