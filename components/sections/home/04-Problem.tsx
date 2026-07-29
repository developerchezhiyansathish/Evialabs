import { Reveal } from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import { PROBLEM } from "@/content/home";
import { ProblemMarker } from "./ProblemMarker";

export default async function Problem() {
  return (
    <section
      id="problem"
      className="section-shell scroll-mt-20 overflow-hidden bg-white"
    >
      <div className="site-container">
        <ProblemMarker />

        <SplitText
          tag="h2"
          text={PROBLEM.h2}
          splitType="words"
          delay={55}
          duration={0.55}
          ease="power3.out"
          from={{ opacity: 0, y: 14 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.2}
          rootMargin="-30px"
          textAlign="center"
          className="mx-auto mt-5 text-[11px] font-normal tracking-[0.14em] text-brand-700 uppercase"
        />

        <SplitText
          tag="p"
          text={PROBLEM.headline}
          splitType="words, chars"
          delay={14}
          duration={0.68}
          ease="power4.out"
          from={{ opacity: 0, yPercent: 105, rotateX: -55 }}
          to={{ opacity: 1, yPercent: 0, rotateX: 0 }}
          threshold={0.16}
          rootMargin="-20px"
          textAlign="center"
          className="mx-auto mt-7 max-w-[22ch] font-display text-[clamp(2rem,4.6vw,3.375rem)] leading-[1.08] font-normal tracking-[-0.02em] text-ink-900"
        />

        <SplitText
          tag="h3"
          text={PROBLEM.h3}
          splitType="words"
          delay={35}
          duration={0.6}
          ease="power3.out"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.2}
          rootMargin="-20px"
          textAlign="center"
          className="mx-auto mt-9 max-w-[42ch] font-display text-[clamp(1.25rem,2.6vw,1.75rem)] leading-snug font-normal text-brand-700 sm:mt-11"
        />

        <div className="mx-auto mt-9 grid max-w-7xl border-y border-ink-200 md:grid-cols-3 sm:mt-11">
          {PROBLEM.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph}>
              <div
                className={`flex h-full items-start px-2 py-7 sm:px-6 sm:py-8 lg:px-8 ${
                  index > 0
                    ? "border-t border-ink-200 md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <p className="text-sm leading-[1.7] font-normal text-ink-600 sm:text-base sm:leading-[1.75]">
                  {paragraph}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
