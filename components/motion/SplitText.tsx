"use client";

import {
  type CSSProperties,
  type ElementType,
  useEffect,
  useRef,
  useState,
} from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

type SplitTextProps = {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words" | "lines" | "words, chars";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: CSSProperties["textAlign"];
  highlightFrom?: string;
  onLetterAnimationComplete?: () => void;
};

export default function SplitText({
  tag = "p",
  text,
  className = "",
  delay = 50,
  duration = 1.25,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "left",
  highlightFrom,
  onLetterAnimationComplete,
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const completed = useRef(false);
  const onCompleteRef = useRef(onLetterAnimationComplete);
  const [fontsLoaded, setFontsLoaded] = useState(
    () => typeof document !== "undefined" && document.fonts.status === "loaded",
  );
  const reduced = useReducedMotion();

  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete;
  }, [onLetterAnimationComplete]);

  useEffect(() => {
    if (fontsLoaded) return;
    let active = true;
    document.fonts.ready.then(() => {
      if (active) setFontsLoaded(true);
    });
    return () => {
      active = false;
    };
  }, [fontsLoaded]);

  useGSAP(
    () => {
      const element = ref.current;
      if (!element || !text || !fontsLoaded || completed.current) return;

      const startPercent = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? Number.parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch?.[2] || "px";
      const sign =
        marginValue === 0
          ? ""
          : marginValue < 0
            ? `-=${Math.abs(marginValue)}${marginUnit}`
            : `+=${marginValue}${marginUnit}`;
      const start = `top ${startPercent}%${sign}`;

      if (reduced) {
        gsap.fromTo(
          element,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.45,
            scrollTrigger: { trigger: element, start, once: true },
            onComplete: () => {
              completed.current = true;
              onCompleteRef.current?.();
            },
          },
        );
        return;
      }

      const split = new GSAPSplitText(element, {
        type: splitType,
        smartWrap: true,
        wordsClass: "split-word",
        charsClass: "split-char",
        linesClass: "split-line",
        reduceWhiteSpace: false,
        aria: "auto",
      });

      if (highlightFrom) {
        const normalizedPhrase = highlightFrom.trim().toLowerCase();
        const normalizedText = text.toLowerCase();
        const phraseStart = normalizedText.indexOf(normalizedPhrase);
        if (phraseStart >= 0) {
          let cursor = 0;
          split.words.forEach((word) => {
            const wordText = word.textContent ?? "";
            const wordStart = normalizedText.indexOf(
              wordText.toLowerCase(),
              cursor,
            );
            cursor = Math.max(cursor, wordStart + wordText.length);
            if (wordStart >= phraseStart) word.classList.add("split-highlight");
          });
        }
      }

      const targets = splitType.includes("chars")
        ? split.chars
        : splitType.includes("words")
          ? split.words
          : split.lines;

      gsap.fromTo(targets, { ...from }, {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        willChange: "transform, opacity",
        force3D: true,
        scrollTrigger: {
          trigger: element,
          start,
          once: true,
          fastScrollEnd: true,
          anticipatePin: 0.4,
        },
        onComplete: () => {
          completed.current = true;
          gsap.set(targets, { clearProps: "willChange" });
          onCompleteRef.current?.();
        },
      });

      return () => split.revert();
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded,
        reduced,
        highlightFrom,
      ],
      scope: ref,
    },
  );

  const Tag = tag as ElementType;

  return (
    <Tag
      ref={ref}
      style={{
        textAlign,
        overflow: "hidden",
        display: "block",
        whiteSpace: "normal",
        overflowWrap: "break-word",
      }}
      className={`split-parent ${className}`}
    >
      {text}
    </Tag>
  );
}
