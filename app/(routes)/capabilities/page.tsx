import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capabilities & Process",
  openGraph: { title: "Capabilities & Process" },
  twitter: { title: "Capabilities & Process" },
};

export default function CapabilitiesPage() {
  return (
    <section className="section-shell">
      <div className="site-container">
        <h1 className="font-display text-[clamp(2.25rem,4.2vw,3.125rem)] text-ink-900">
          Capabilities &amp; Process
        </h1>
      </div>
    </section>
  );
}
