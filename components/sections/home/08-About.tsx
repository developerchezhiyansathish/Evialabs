import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { Reveal } from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import { ABOUT_CONTENT, CREDENTIALS } from "@/content/home";

export default async function About() {
  return (
    <section
      id="about"
      className="section-shell scroll-mt-20 overflow-hidden bg-ink-900"
    >
      <div className="site-container grid items-stretch gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-16 xl:gap-24">
        <Reveal className="order-2 h-full lg:order-1">
          <div className="group relative mx-auto h-full w-full max-w-[720px]">
            <div
              className="absolute -bottom-3 -right-3 h-[88%] w-[88%] rounded-media border border-brand-700 bg-brand-900 sm:-bottom-5 sm:-right-5"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-media border border-ink-700 bg-ink-800 shadow-[0_28px_70px_rgba(0,0,0,0.32)] lg:aspect-auto lg:h-full">
              <Image
                src={ABOUT_CONTENT.image}
                alt={ABOUT_CONTENT.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 94vw"
                className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.035]"
              />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5 sm:bottom-5 sm:left-5 sm:right-5">
                {CREDENTIALS.slice(0, 4).map((credential) => (
                  <span
                    key={credential}
                    className="rounded-chip border border-white/30 bg-ink-900/80 px-2.5 py-1 text-[10px] font-normal text-white backdrop-blur-sm"
                  >
                    {credential}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="order-1 min-w-0 lg:order-2">
          <SplitText
            tag="h2"
            text={ABOUT_CONTENT.h2}
            splitType="words"
            delay={55}
            duration={0.55}
            ease="power3.out"
            from={{ opacity: 0, y: 14 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="-30px"
            className="text-[11px] font-normal tracking-[0.14em] text-brand-400 uppercase"
          />

          <SplitText
            tag="p"
            text={ABOUT_CONTENT.headline}
            splitType="words, chars"
            delay={14}
            duration={0.68}
            ease="power4.out"
            from={{ opacity: 0, yPercent: 105, rotateX: -55 }}
            to={{ opacity: 1, yPercent: 0, rotateX: 0 }}
            threshold={0.16}
            rootMargin="-20px"
            className="mt-6 max-w-[18ch] font-display text-[clamp(2rem,4.2vw,3.125rem)] leading-[1.06] font-normal tracking-[-0.02em] text-white"
          />

          <div className="mt-7 max-w-[64ch] space-y-5">
            {ABOUT_CONTENT.paragraphs.map((paragraph) => (
              <Reveal key={paragraph}>
                <p className="text-sm leading-[1.7] font-normal text-ink-300 sm:text-base sm:leading-[1.75]">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <Link
              href="/about"
              className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-chip border border-brand-400 px-5 text-sm font-normal text-brand-400 transition-[background-color,color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-brand-400 hover:text-ink-950 hover:shadow-lg"
            >
              {ABOUT_CONTENT.cta}
              <HiArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
