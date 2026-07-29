export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-card border border-ink-200 bg-white p-6 shadow-sm">
      {children}
    </div>
  );
}
