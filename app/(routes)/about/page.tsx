import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  openGraph: { title: "About Us" },
  twitter: { title: "About Us" },
};

export default function AboutPage() {
  return (
    <section className="section-shell">
      <div className="site-container">
        <h1 className="font-display text-[clamp(2.25rem,4.2vw,3.125rem)] text-ink-900">
          About Us
        </h1>
      </div>
    </section>
  );
}
