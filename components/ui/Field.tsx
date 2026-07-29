import type { InputHTMLAttributes } from "react";

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function Field({ label, error, id, ...props }: FieldProps) {
  return (
    <div>
      <label className="mb-2 block font-semibold text-ink-800" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="min-h-11 w-full rounded-ui border border-ink-300 bg-white px-3 text-ink-800"
        {...props}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-sm text-ink-800" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
