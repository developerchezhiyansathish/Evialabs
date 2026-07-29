"use client";

import { motion, useReducedMotion } from "motion/react";
import { HiCheck } from "react-icons/hi2";

export function ProblemMarker() {
  const reduced = useReducedMotion();

  return (
    <div className="flex flex-col items-center" aria-hidden="true">
      <motion.span
        className="h-14 w-px origin-top bg-ink-300 sm:h-20"
        initial={{ opacity: 0, scaleY: reduced ? 1 : 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: reduced ? 0.4 : 0.75, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.span
        className="grid size-5 place-items-center rounded-full border border-brand-700 bg-white text-brand-700"
        initial={{ opacity: 0, scale: reduced ? 1 : 0.65 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          delay: reduced ? 0 : 0.45,
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <HiCheck size={11} strokeWidth={2} />
      </motion.span>
    </div>
  );
}
