import { LuFactory, LuShieldCheck } from "react-icons/lu";
import { Reveal } from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import { PROBLEM } from "@/content/home";
import { ProblemMarker } from "./ProblemMarker";

const PROBLEM_ICONS = [LuShieldCheck, LuFactory] as const;

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

        <div className="mx-auto mt-9 grid max-w-7xl gap-5 md:grid-cols-2 sm:mt-11 md:gap-6">
          {PROBLEM.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph}>
              <article className="flex h-full min-h-60 flex-col rounded-card border border-ink-200 bg-ink-50 p-6 shadow-[0_12px_35px_rgba(11,11,11,0.04)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_18px_42px_rgba(47,75,28,0.10)] sm:p-8 lg:p-10">
                {(() => {
                  const Icon = PROBLEM_ICONS[index];
                  return (
                    <div className="grid size-12 place-items-center rounded-ui border border-brand-200 bg-white text-brand-700 sm:size-14">
                      <Icon size={27} strokeWidth={1.6} aria-hidden="true" />
                    </div>
                  );
                })()}
                <p className="mt-auto pt-10 text-[17px] leading-[1.7] font-normal text-ink-600 sm:leading-[1.75]">
                  {paragraph}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
