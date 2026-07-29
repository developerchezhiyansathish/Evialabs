"use client";

import { motion, useReducedMotion } from "motion/react";

export function RevealHeading({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();

  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ opacity: 0, y: reduced ? 0 : "100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}
