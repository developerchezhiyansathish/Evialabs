"use client";

import Image from "next/image";
import Link from "next/link";
import {
  type KeyboardEvent,
  type UIEvent,
  useRef,
  useState,
} from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  HiArrowRight,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi2";
import { PRODUCTS } from "@/content/home";

export function ProductSlider() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const reduced = useReducedMotion();

  const goTo = (index: number) => {
    const bounded = Math.max(0, Math.min(index, PRODUCTS.items.length - 1));
    const container = track.current;
    const card = container?.children.item(bounded) as HTMLElement | null;
    if (!container || !card) return;

    container.scrollTo({
      left: card.offsetLeft - container.offsetLeft,
      behavior: reduced ? "auto" : "smooth",
    });
    setActive(bounded);
  };

  const updateActiveSlide = (event: UIEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    const cards = Array.from(container.children) as HTMLElement[];
    if (!cards.length) return;

    const nearest = cards.reduce(
      (result, card, index) => {
        const distance = Math.abs(
          card.offsetLeft - container.offsetLeft - container.scrollLeft,
        );
        return distance < result.distance ? { index, distance } : result;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    );
    if (nearest.index !== active) setActive(nearest.index);
  };

  const toggleCard = (index: number) => {
    setExpanded((current) => (current === index ? null : index));
  };

  const handleCardKey = (
    event: KeyboardEvent<HTMLElement>,
    index: number,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleCard(index);
    }
  };

  return (
    <div className="mt-10 sm:mt-12">
      <div
        ref={track}
        onScroll={updateActiveSlide}
        className="product-slider -mx-2 flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 pb-4 sm:gap-5 lg:gap-6"
      >
        {PRODUCTS.items.map((product, index) => (
          <motion.article
            key={product.h3}
            tabIndex={0}
            aria-expanded={expanded === index}
            data-expanded={expanded === index ? "true" : "false"}
            onClick={() => toggleCard(index)}
            onKeyDown={(event) => handleCardKey(event, index)}
            className="product-card group relative aspect-[4/5] min-w-0 basis-[86%] shrink-0 snap-start overflow-hidden rounded-card bg-ink-900 outline-offset-4 sm:basis-[62%] lg:basis-[42%] xl:basis-[32%]"
            initial={{ opacity: 0, y: reduced ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{
              duration: 0.7,
              delay: index * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              sizes="(min-width: 1280px) 32vw, (min-width: 1024px) 42vw, (min-width: 640px) 62vw, 86vw"
              className="product-card-image object-cover transition-transform duration-700 ease-out-expo"
            />
            <div className="product-card-shade absolute inset-0" aria-hidden="true" />
            <div className="product-card-content absolute inset-x-0 bottom-0 z-10 p-5 text-white sm:p-6 lg:p-7">
              <p className="mb-3 text-[10px] font-normal tracking-[0.14em] text-brand-300 uppercase">
                {String(index + 1).padStart(2, "0")} / {PRODUCTS.h2}
              </p>
              <h3 className="font-display text-[clamp(1.125rem,2vw,1.375rem)] leading-tight font-normal">
                {product.h3}
              </h3>
              <div className="product-card-details">
                <p className="mt-4 text-[17px] leading-[1.65] font-normal text-ink-200">
                  {product.description}
                </p>
                <Link
                  href="#inquiry"
                  onClick={(event) => event.stopPropagation()}
                  className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-chip border border-white/65 px-4 text-sm font-normal text-white transition-[background-color,color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-brand-800"
                >
                  {product.cta}
                  <HiArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between gap-5">
        <div className="flex items-center gap-2" aria-hidden="true">
          {PRODUCTS.items.map((product, index) => (
            <span
              key={product.h3}
              className={`h-1 rounded-full transition-[width,background-color] duration-300 ${
                active === index ? "w-8 bg-brand-700" : "w-3 bg-ink-300"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label={PRODUCTS.previousSlide}
            disabled={active === 0}
            onClick={() => goTo(active - 1)}
            className="inline-grid size-11 place-items-center rounded-ui border border-ink-300 bg-white text-ink-800 transition-[border-color,background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:border-brand-700 hover:bg-brand-700 hover:text-white disabled:pointer-events-none disabled:opacity-35"
          >
            <HiChevronLeft size={19} />
          </button>
          <button
            type="button"
            aria-label={PRODUCTS.nextSlide}
            disabled={active === PRODUCTS.items.length - 1}
            onClick={() => goTo(active + 1)}
            className="inline-grid size-11 place-items-center rounded-ui border border-ink-300 bg-white text-ink-800 transition-[border-color,background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:border-brand-700 hover:bg-brand-700 hover:text-white disabled:pointer-events-none disabled:opacity-35"
          >
            <HiChevronRight size={19} />
          </button>
        </div>
      </div>
    </div>
  );
}
