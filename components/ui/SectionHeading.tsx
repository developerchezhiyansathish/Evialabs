import { Eyebrow } from "./Eyebrow";
import { GraduatedRule } from "./GraduatedRule";
import { RevealHeading } from "@/components/motion/RevealHeading";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  heading: string;
};

export function SectionHeading({
  index,
  eyebrow,
  heading,
}: SectionHeadingProps) {
  return (
    <header className="max-w-3xl">
      <Eyebrow index={index}>{eyebrow}</Eyebrow>
      <h2 className="mt-5 font-display text-[clamp(1.875rem,4.2vw,3.125rem)] leading-[1.08] text-ink-900">
        <RevealHeading>{heading}</RevealHeading>
      </h2>
      <div className="mt-8">
        <GraduatedRule />
      </div>
    </header>
  );
}
