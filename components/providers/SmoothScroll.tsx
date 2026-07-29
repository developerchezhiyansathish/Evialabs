"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

function LenisGsapBridge() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    if (!lenis) return;

    lenis.start();
    lenis.resize();
    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    let active = true;
    const refresh = () => {
      if (!active) return;
      lenis.resize();
      ScrollTrigger.refresh();
    };

    document.fonts.ready.then(refresh);
    window.addEventListener("load", refresh);

    return () => {
      active = false;
      window.removeEventListener("load", refresh);
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(tick);
    };
  }, [lenis]);

  useEffect(() => {
    if (!lenis) return;

    lenis.scrollTo(0, { immediate: true, force: true });
    const refreshCall = gsap.delayedCall(0, () => {
      lenis.resize();
      ScrollTrigger.refresh();
    });

    return () => {
      refreshCall.kill();
    };
  }, [lenis, pathname]);

  return null;
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduced = useReducedMotion();

  if (reduced) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        smoothWheel: true,
        lerp: 0.085,
        wheelMultiplier: 0.9,
        touchMultiplier: 1,
        syncTouch: false,
        overscroll: true,
        anchors: { offset: -80 },
      }}
    >
      <LenisGsapBridge />
      {children}
    </ReactLenis>
  );
}
