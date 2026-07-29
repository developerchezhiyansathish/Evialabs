import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { Reveal } from "@/components/motion/Reveal";
import SplitText from "@/components/motion/SplitText";
import { PRODUCTS } from "@/content/home";
import { ProductSlider } from "./ProductSlider";

export default async function Products() {
  return (
    <section
      id="products"
      className="section-shell scroll-mt-20 overflow-hidden bg-white"
    >
      <div className="site-container">
        <SplitText
          tag="h2"
          text={PRODUCTS.h2}
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

        <div className="mt-6 grid items-start gap-7 lg:grid-cols-[minmax(0,1.12fr)_minmax(320px,0.88fr)] lg:gap-14 xl:gap-20">
          <SplitText
            tag="p"
            text={PRODUCTS.headline}
            splitType="words, chars"
            delay={13}
            duration={0.68}
            ease="power4.out"
            from={{ opacity: 0, yPercent: 105, rotateX: -55 }}
            to={{ opacity: 1, yPercent: 0, rotateX: 0 }}
            threshold={0.16}
            rootMargin="-20px"
            className="max-w-[23ch] font-display text-[clamp(2rem,4.2vw,3.125rem)] leading-[1.06] font-normal tracking-[-0.02em] text-ink-900"
          />

          <Reveal>
            <div className="lg:ml-auto lg:max-w-[52ch] lg:text-right">
              <p className="text-[clamp(0.9375rem,1.5vw,1.125rem)] leading-[1.7] font-normal text-ink-600 sm:leading-[1.75]">
                {PRODUCTS.introduction}
              </p>
              <Link
                href="/products"
                className="group mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-normal text-brand-700"
              >
                {PRODUCTS.viewAll}
                <HiArrowRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>
        </div>

        <ProductSlider />
      </div>
    </section>
  );
}
