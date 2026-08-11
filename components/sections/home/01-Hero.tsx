import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { Reveal } from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import { HERO } from "@/content/home";
import { HeroMedia } from "./HeroMedia";

export default async function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100svh-72px)] overflow-hidden bg-white py-12 sm:py-16 lg:min-h-[calc(100svh-80px)] lg:py-20"
    >
      <div
        className="absolute inset-y-0 right-0 hidden w-[48%] bg-brand-50 lg:block"
        aria-hidden="true"
      />
      <div className="site-container relative grid items-center gap-14 lg:grid-cols-[minmax(0,1.06fr)_minmax(380px,0.94fr)] lg:gap-16 xl:gap-24">
        <div className="min-w-0">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-normal uppercase tracking-[0.14em] text-ink-700 tabular-nums sm:text-xs">
              <span className="size-1.5 shrink-0 bg-brand-500" aria-hidden="true" />
              {HERO.eyebrow}
            </p>
          </Reveal>

          <SplitText
            tag="h1"
            text={HERO.h1}
            splitType="words, chars"
            delay={16}
            duration={0.72}
            ease="power4.out"
            from={{ opacity: 0, yPercent: 110, rotateX: -65 }}
            to={{ opacity: 1, yPercent: 0, rotateX: 0 }}
            threshold={0.12}
            rootMargin="-20px"
            highlightFrom={HERO.highlight}
            className="mt-6 max-w-[21ch] font-display text-[clamp(2rem,4.6vw,3.375rem)] leading-[1.04] font-normal tracking-[-0.02em] text-ink-900"
          />

          <div className="mt-7 max-w-[65ch] space-y-4 text-[17px] leading-[1.65] font-normal text-ink-600">
            {HERO.sub.map((paragraph) => (
              <Reveal key={paragraph}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              {HERO.actions.map((action) =>
                action.variant === "primary" ? (
                  <Link
                    key={action.label}
                    href={action.href}
                    className="hero-liquid-button min-h-12 justify-center px-5 text-center text-[13px] sm:min-h-11"
                  >
                    <span>{action.label}</span>
                    <HiArrowRight className="relative z-[2] shrink-0" size={17} />
                  </Link>
                ) : (
                  <Link
                    key={action.label}
                    href={action.href}
                    className="group inline-flex min-h-11 items-center justify-center gap-2 px-2 text-[13px] font-normal text-ink-800 transition-colors duration-150 hover:text-brand-700 sm:justify-start"
                  >
                    <span>{action.label}</span>
                    <HiArrowRight
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      size={17}
                    />
                  </Link>
                ),
              )}
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-3 border-t border-ink-200 pt-6 sm:mt-12 sm:pt-7">
            {HERO.stats.map((stat, index) => (
              <Reveal key={stat.label}>
                <div
                  className={`min-w-0 ${
                    index > 0 ? "border-l border-ink-200 pl-3 sm:pl-6" : ""
                  }`}
                >
                  <p className="truncate font-display text-[clamp(1.125rem,2.5vw,1.5rem)] leading-tight text-brand-700">
                    {typeof stat.value === "number" ? (
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    ) : (
                      stat.value
                    )}
                  </p>
                  <p className="mt-1 text-[9px] leading-tight font-normal tracking-[0.1em] text-ink-600 uppercase sm:text-[10px]">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="rounded-media bg-brand-50 px-3 py-10 sm:px-10 sm:py-14 lg:bg-transparent lg:p-0">
          <HeroMedia />
        </div>
      </div>
    </section>
  );
}
