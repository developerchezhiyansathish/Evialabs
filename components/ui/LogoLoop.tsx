"use client";

import gsap from "gsap";
import { useReducedMotion } from "motion/react";
import Image from "next/image";
import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export type LogoLoopItem = {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
};

type LogoLoopProps = {
  logos: readonly LogoLoopItem[];
  speed?: number;
  hoverSpeed?: number;
  gap?: number;
  ariaLabel?: string;
  className?: string;
};

const MIN_COPIES = 2;
const COPY_HEADROOM = 2;
const VELOCITY_SMOOTHING = 0.28;

function LogoLoop({
  logos,
  speed = 64,
  hoverSpeed = 24,
  gap = 18,
  ariaLabel = "Client and partner logos",
  className = "",
}: LogoLoopProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const sequenceRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(speed);
  const lastTimeRef = useRef<number | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [sequenceWidth, setSequenceWidth] = useState(0);
  const [hovered, setHovered] = useState(false);
  const reducedMotion = useReducedMotion();

  const measure = useCallback(() => {
    const container = containerRef.current;
    const sequence = sequenceRef.current;
    if (!container || !sequence) return;

    setContainerWidth(container.getBoundingClientRect().width);
    setSequenceWidth(sequence.getBoundingClientRect().width);
  }, []);

  useEffect(() => {
    measure();

    const observer = new ResizeObserver(measure);
    if (containerRef.current) observer.observe(containerRef.current);
    if (sequenceRef.current) observer.observe(sequenceRef.current);

    const images = sequenceRef.current?.querySelectorAll("img") ?? [];
    images.forEach((image) => {
      if (!image.complete) image.addEventListener("load", measure);
    });

    return () => {
      observer.disconnect();
      images.forEach((image) => image.removeEventListener("load", measure));
    };
  }, [measure]);

  const copyCount = useMemo(() => {
    if (!containerWidth || !sequenceWidth) return MIN_COPIES;
    return Math.max(
      MIN_COPIES,
      Math.ceil(containerWidth / sequenceWidth) + COPY_HEADROOM,
    );
  }, [containerWidth, sequenceWidth]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (reducedMotion || sequenceWidth <= 0) {
      gsap.set(track, { x: 0 });
      return;
    }

    lastTimeRef.current = null;
    const tick = (time: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
        return;
      }

      const delta = Math.min(0.1, Math.max(0, time - lastTimeRef.current));
      lastTimeRef.current = time;
      const targetVelocity = hovered ? hoverSpeed : speed;
      const blend = 1 - Math.exp(-delta / VELOCITY_SMOOTHING);
      velocityRef.current += (targetVelocity - velocityRef.current) * blend;
      offsetRef.current =
        (offsetRef.current + velocityRef.current * delta) % sequenceWidth;

      gsap.set(track, {
        x: -offsetRef.current,
        force3D: true,
      });
    };

    gsap.ticker.add(tick);
    return () => {
      gsap.ticker.remove(tick);
      lastTimeRef.current = null;
    };
  }, [hoverSpeed, hovered, reducedMotion, sequenceWidth, speed]);

  const logoSequence = (copyIndex: number) => (
    <div
      ref={copyIndex === 0 ? sequenceRef : undefined}
      className="logo-loop__sequence"
      style={{ gap }}
      aria-hidden={copyIndex > 0 || undefined}
    >
      {logos.map((logo, logoIndex) => (
        <div
          className="logo-loop__item"
          key={`${copyIndex}-${logo.src}-${logoIndex}`}
          title={logo.title}
        >
          <Image
            src={logo.src}
            alt={copyIndex === 0 ? logo.alt : ""}
            width={logo.width ?? 220}
            height={logo.height ?? 80}
            draggable={false}
            loading="lazy"
            unoptimized
          />
        </div>
      ))}
    </div>
  );

  if (!logos.length) return null;

  return (
    <div
      ref={containerRef}
      className={`logo-loop ${className}`}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        ref={trackRef}
        className={`logo-loop__track${reducedMotion ? " logo-loop__track--static" : ""}`}
      >
        {Array.from({ length: reducedMotion ? 1 : copyCount }, (_, index) =>
          logoSequence(index),
        )}
      </div>
    </div>
  );
}

export default memo(LogoLoop);
