export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex min-h-8 items-center rounded-chip border border-brand-200 bg-brand-50 px-3 text-sm font-semibold text-brand-700">
      {children}
    </span>
  );
}
