import { Reveal } from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import LogoLoop from "@/components/ui/LogoLoop";
import { CLIENTS_PARTNERS } from "@/content/home";

export default async function Clients() {
  return (
    <section
      id="clients"
      className="section-shell scroll-mt-20 overflow-hidden bg-white"
    >
      <div className="site-container">
        <SplitText
          tag="h2"
          text={CLIENTS_PARTNERS.h2}
          splitType="words"
          delay={55}
          duration={0.55}
          ease="power3.out"
          from={{ opacity: 0, y: 14 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.2}
          rootMargin="-30px"
          textAlign="center"
          className="text-center text-[11px] font-normal tracking-[0.14em] text-brand-700 uppercase"
        />

        <SplitText
          tag="p"
          text={CLIENTS_PARTNERS.headline}
          splitType="words, chars"
          delay={12}
          duration={0.68}
          ease="power4.out"
          from={{ opacity: 0, yPercent: 105, rotateX: -55 }}
          to={{ opacity: 1, yPercent: 0, rotateX: 0 }}
          threshold={0.16}
          rootMargin="-20px"
          textAlign="center"
          className="mx-auto mt-6 max-w-[28ch] text-center font-display text-[clamp(2rem,4.2vw,3.125rem)] leading-[1.06] font-normal tracking-[-0.02em] text-ink-900"
        />

        <Reveal className="mx-auto mt-7 max-w-[74ch]">
          <p className="text-center text-[clamp(0.9375rem,1.4vw,1.125rem)] leading-[1.7] font-normal text-ink-600 sm:leading-[1.75]">
            {CLIENTS_PARTNERS.body}
          </p>
        </Reveal>

        <Reveal className="mt-12 md:mt-16">
          <div aria-hidden="true">
            <LogoLoop
              logos={CLIENTS_PARTNERS.logos}
              speed={66}
              hoverSpeed={28}
              gap={18}
              ariaLabel={CLIENTS_PARTNERS.logoAriaLabel}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
