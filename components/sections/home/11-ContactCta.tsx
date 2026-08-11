import { Reveal } from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import { CONTACT_CTA } from "@/content/home";
import Link from "next/link";

export default async function ContactCta() {
  return (
    <section
      id="contact-cta"
      className="contact-cta relative scroll-mt-20 overflow-hidden py-[clamp(4rem,8vw,7rem)] text-white"
    >
      <div className="site-container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_auto] lg:items-end lg:gap-16">
          <div className="text-center lg:text-left">
            <SplitText
              tag="h2"
              text={CONTACT_CTA.h2}
              splitType="words"
              delay={55}
              duration={0.55}
              ease="power3.out"
              from={{ opacity: 0, y: 14 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.2}
              rootMargin="-30px"
              textAlign="inherit"
              className="text-[11px] font-normal tracking-[0.14em] text-brand-200 uppercase"
            />

            <SplitText
              tag="p"
              text={CONTACT_CTA.headline}
              splitType="words, chars"
              delay={13}
              duration={0.68}
              ease="power4.out"
              from={{ opacity: 0, yPercent: 105, rotateX: -55 }}
              to={{ opacity: 1, yPercent: 0, rotateX: 0 }}
              threshold={0.16}
              rootMargin="-20px"
              textAlign="inherit"
              className="mt-5 max-w-[22ch] font-display text-[clamp(2rem,4.2vw,3.125rem)] leading-[1.06] font-normal tracking-[-0.02em] text-white max-lg:mx-auto"
            />

            <Reveal className="mt-6">
              <p className="max-w-[66ch] text-[17px] leading-[1.7] font-normal text-white/80 sm:leading-[1.75] max-lg:mx-auto">
                {CONTACT_CTA.body}
              </p>
            </Reveal>
          </div>

          <Reveal className="flex flex-col justify-center gap-3 sm:flex-row lg:self-end lg:justify-end">
            {CONTACT_CTA.actions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={`contact-cta__button ${
                  action.variant === "bright"
                    ? "contact-cta__button--bright"
                    : "contact-cta__button--light"
                }`}
              >
                <span>{action.label}</span>
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
