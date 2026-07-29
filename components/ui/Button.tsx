import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
};

export function Button({ href, children }: ButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center justify-center rounded-ui bg-brand-700 px-5 font-semibold text-white transition-colors duration-150 hover:bg-brand-800 active:bg-brand-900"
    >
      {children}
    </Link>
  );
}
