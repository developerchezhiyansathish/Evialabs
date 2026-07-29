import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  openGraph: { title: "Services" },
  twitter: { title: "Services" },
};

export default function ServicesPage() {
  return (
    <section className="section-shell">
      <div className="site-container">
        <h1 className="font-display text-[clamp(2.25rem,4.2vw,3.125rem)] text-ink-900">
          Services
        </h1>
      </div>
    </section>
  );
}
