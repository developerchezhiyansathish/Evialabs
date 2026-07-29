import {
  LuClipboardCheck,
  LuFactory,
  LuMicroscope,
  LuShieldCheck,
} from "react-icons/lu";
import SplitText from "@/components/motion/SplitText";
import { CREDENTIALS, HOME_SECTIONS, TRUST_STRIP } from "@/content/home";

const TRUST_ICONS = [LuShieldCheck, LuClipboardCheck, LuFactory] as const;

export default async function TrustStrip() {
  return (
    <section
      id="trust"
      aria-label={HOME_SECTIONS.trust}
      className="bg-strip text-white"
    >
      <div className="site-container py-8 sm:py-9">
        <div className="grid gap-0 sm:grid-cols-3">
          {TRUST_STRIP.items.map((item, index) => {
            const Icon = TRUST_ICONS[index];
            return (
              <div
                key={item}
                className={`flex min-h-24 flex-col items-center justify-center gap-3 border-white/20 px-4 py-5 text-center sm:min-h-20 sm:py-1 ${
                  index > 0
                    ? "border-t sm:border-l sm:border-t-0"
                    : ""
                }`}
              >
                <Icon
                  size={23}
                  strokeWidth={1.8}
                  className="shrink-0 text-white"
                  aria-hidden="true"
                />
                <SplitText
                  text={item}
                  tag="p"
                  splitType="words"
                  delay={55}
                  duration={0.55}
                  ease="power3.out"
                  from={{ opacity: 0, y: 12 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.2}
                  rootMargin="-20px"
                  textAlign="center"
                  className="text-[13px] leading-snug font-normal text-white"
                />
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex flex-col items-center justify-center gap-4 border-t border-white/20 pt-5 sm:mt-6 sm:flex-row sm:flex-wrap sm:gap-x-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CREDENTIALS.slice(0, 4).map((credential, index) => (
              <span key={credential} className="flex items-center gap-2">
                <span className="rounded-chip border border-white/80 px-2.5 py-0.5 text-[10px] leading-none font-normal text-white">
                  {credential}
                </span>
                {index < 3 ? (
                  <span className="text-xs text-white/75" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </span>
            ))}
          </div>

          <div className="flex max-w-full items-center justify-center gap-3 text-center">
            <LuMicroscope
              size={19}
              strokeWidth={1.8}
              className="shrink-0"
              aria-hidden="true"
            />
            <SplitText
              text={TRUST_STRIP.formulation}
              tag="p"
              splitType="words"
              delay={35}
              duration={0.5}
              ease="power3.out"
              from={{ opacity: 0, y: 10 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.2}
              rootMargin="-20px"
              textAlign="center"
              className="text-[12px] leading-relaxed font-normal text-white sm:text-[13px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
