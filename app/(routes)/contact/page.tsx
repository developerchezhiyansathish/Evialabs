import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  openGraph: { title: "Contact Us" },
  twitter: { title: "Contact Us" },
};

export default function ContactPage() {
  return (
    <section className="section-shell">
      <div className="site-container">
        <h1 className="font-display text-[clamp(2.25rem,4.2vw,3.125rem)] text-ink-900">
          Contact Us
        </h1>
      </div>
    </section>
  );
}
