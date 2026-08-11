import Link from "next/link";
import {
  LuBadgeCheck,
  LuBuilding2,
  LuFlaskConical,
  LuPackageCheck,
  LuTag,
} from "react-icons/lu";
import { HiArrowRight } from "react-icons/hi2";
import { Reveal } from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import { SERVICES_CONTENT } from "@/content/home";

const SERVICE_ICONS = [
  LuBuilding2,
  LuTag,
  LuFlaskConical,
  LuPackageCheck,
  LuBadgeCheck,
] as const;

export default async function Services() {
  return (
    <section
      id="services"
      className="section-shell scroll-mt-20 overflow-hidden bg-ink-50"
    >
      <div className="site-container">
        <SplitText
          tag="h2"
          text={SERVICES_CONTENT.h2}
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
            text={SERVICES_CONTENT.headline}
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
            <div className="lg:ml-auto lg:max-w-[60ch] lg:text-right">
              <p className="text-[17px] leading-[1.7] font-normal text-ink-600 sm:leading-[1.75]">
                {SERVICES_CONTENT.introduction}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5 xl:mt-16">
          {SERVICES_CONTENT.items.map((service, index) => {
            const Icon = SERVICE_ICONS[index];
            const columnClass =
              index === 0
                ? "lg:col-span-7"
                : index === 1
                  ? "lg:col-span-5"
                  : "lg:col-span-4";
            const surfaceClass =
              index === 0
                ? "bg-brand-50"
                : index === 1
                  ? "bg-ink-100"
                  : "bg-white";

            return (
              <Reveal key={service.h3} className={columnClass}>
                <article
                  className={`service-card group relative isolate flex h-full min-h-72 overflow-hidden rounded-card border border-ink-200 p-6 sm:p-8 ${surfaceClass} ${
                    index < 2 ? "lg:min-h-[350px]" : "lg:min-h-[310px]"
                  }`}
                >
                  <div className="relative z-10 flex w-full flex-col">
                    <div className="service-card-icon grid size-12 place-items-center rounded-ui border border-brand-200 bg-white text-brand-700 transition-[background-color,border-color,color,transform] duration-500">
                      <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
                    </div>

                    <div className="mt-auto pt-12">
                      <h3 className="service-card-heading font-display text-[clamp(1.25rem,2.7vw,2rem)] leading-tight font-normal text-ink-900 transition-colors duration-500">
                        {service.h3}
                      </h3>
                      <div className="mt-4 space-y-3">
                        {service.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="service-card-copy text-[17px] leading-[1.7] text-ink-600 transition-colors duration-500"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      <Link
                        href="/services"
                        className="service-card-link mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-normal text-brand-700 transition-[color,transform] duration-300 group-hover:translate-x-1"
                      >
                        {service.cta}
                        <HiArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-9 flex justify-center sm:justify-end">
            <Link
              href="/services"
              className="hero-liquid-button min-h-12 justify-center px-6 text-sm"
            >
              <span>{SERVICES_CONTENT.viewAll}</span>
              <HiArrowRight className="relative z-[2]" size={17} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
