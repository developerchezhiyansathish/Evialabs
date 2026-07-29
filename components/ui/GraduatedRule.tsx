export function GraduatedRule() {
  return (
    <div className="relative h-1 border-t border-ink-200" aria-hidden="true">
      {[12, 31, 57, 82].map((left) => (
        <span
          key={left}
          className="absolute -top-px h-1.5 w-px bg-ink-300"
          style={{ left: `${left}%` }}
        />
      ))}
    </div>
  );
}
