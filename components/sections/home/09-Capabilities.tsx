import { Reveal } from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import { CAPABILITIES_PROCESS } from "@/content/home";
import { ProcessTimeline } from "./ProcessTimeline";

export default async function Capabilities() {
  return (
    <section
      id="capabilities"
      className="section-shell scroll-mt-20 overflow-hidden bg-ink-50"
    >
      <div className="site-container">
        <SplitText
          tag="h2"
          text={CAPABILITIES_PROCESS.h2}
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

        <div className="mt-6 grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(520px,1fr)] lg:items-end lg:gap-10 xl:grid-cols-[minmax(0,0.9fr)_minmax(620px,1.1fr)] xl:gap-14">
          <SplitText
            tag="p"
            text={CAPABILITIES_PROCESS.headline}
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
            <p className="max-w-[56ch] text-[17px] leading-[1.7] font-normal text-ink-600 sm:leading-[1.75] lg:ml-auto lg:text-right">
              {CAPABILITIES_PROCESS.introduction}
            </p>
          </Reveal>
        </div>

        <ProcessTimeline />
      </div>
    </section>
  );
}
