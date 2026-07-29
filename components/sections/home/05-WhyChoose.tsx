import {
  LuFlaskConical,
  LuHandshake,
  LuShieldCheck,
} from "react-icons/lu";
import { Reveal } from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import { WHY_CHOOSE } from "@/content/home";

const WHY_ICONS = [LuShieldCheck, LuHandshake, LuFlaskConical] as const;

export default async function WhyChoose() {
  return (
    <section
      id="why-evia"
      className="section-shell scroll-mt-20 overflow-hidden bg-ink-50"
    >
      <div className="site-container">
        <SplitText
          tag="h2"
          text={WHY_CHOOSE.h2}
          splitType="words"
          delay={55}
          duration={0.55}
          ease="power3.out"
          from={{ opacity: 0, y: 14 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.2}
          rootMargin="-30px"
          className="text-[11px] font-normal tracking-[0.14em] text-brand-700 uppercase"
        />

        <div className="mt-6 grid items-start gap-7 lg:grid-cols-[minmax(0,1.12fr)_minmax(320px,0.88fr)] lg:items-end lg:gap-14 xl:gap-20">
          <SplitText
            tag="p"
            text={WHY_CHOOSE.headline}
            splitType="words, chars"
            delay={13}
            duration={0.68}
            ease="power4.out"
            from={{ opacity: 0, yPercent: 105, rotateX: -55 }}
            to={{ opacity: 1, yPercent: 0, rotateX: 0 }}
            threshold={0.16}
            rootMargin="-20px"
            className="max-w-[21ch] font-display text-[clamp(2rem,4.2vw,3.125rem)] leading-[1.06] font-normal tracking-[-0.02em] text-ink-900"
          />

          <Reveal className="lg:self-end">
            <p className="max-w-[52ch] text-[clamp(0.9375rem,1.5vw,1.125rem)] leading-[1.7] font-normal text-ink-600 sm:leading-[1.75] lg:ml-auto lg:text-right">
              {WHY_CHOOSE.introduction}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 border-y border-ink-200 sm:mt-16">
          {WHY_CHOOSE.items.map((item, index) => {
            const Icon = WHY_ICONS[index];
            return (
              <Reveal key={item.h3}>
                <article
                  className={`why-row group relative isolate overflow-hidden px-2 py-9 sm:px-6 sm:py-11 lg:px-10 lg:py-12 ${
                    index > 0 ? "border-t border-ink-200" : ""
                  }`}
                >
                  <div className="relative z-10 grid grid-cols-[56px_minmax(0,1fr)] items-start gap-5 sm:grid-cols-[76px_minmax(0,1fr)_56px] sm:gap-8 lg:grid-cols-[100px_minmax(0,1fr)_72px] lg:gap-10">
                    <p
                      className="why-row-number font-display text-[clamp(2.75rem,5vw,4rem)] leading-none text-brand-300 transition-colors duration-500"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <div className="min-w-0">
                      <h3 className="why-row-heading font-display text-[clamp(1.25rem,2.6vw,1.875rem)] leading-tight font-normal text-ink-900 transition-colors duration-500">
                        {item.h3}
                      </h3>
                      <div className="mt-4 max-w-[88ch] space-y-4">
                        {item.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-sm leading-[1.7] font-normal text-ink-600 sm:text-base sm:leading-[1.75]"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="why-row-icon col-start-2 grid size-12 place-items-center rounded-full border border-brand-200 bg-white text-brand-700 shadow-sm transition-[opacity,transform,border-color,background-color,color] duration-500 sm:col-start-auto sm:size-14 md:translate-x-6 md:opacity-0 lg:size-16">
                      <Icon
                        size={27}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
