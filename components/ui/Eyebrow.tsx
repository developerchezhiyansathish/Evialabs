type EyebrowProps = {
  index: string;
  children: React.ReactNode;
};

export function Eyebrow({ index, children }: EyebrowProps) {
  return (
    <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700 tabular-nums">
      <span className="size-1.5 bg-brand-500" aria-hidden="true" />
      <span>
        SEC {index} / {children}
      </span>
    </p>
  );
}
