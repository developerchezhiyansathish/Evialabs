import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  openGraph: { title: "Products" },
  twitter: { title: "Products" },
};

export default function ProductsPage() {
  return (
    <section className="section-shell">
      <div className="site-container">
        <h1 className="font-display text-[clamp(2.25rem,4.2vw,3.125rem)] text-ink-900">
          Products
        </h1>
      </div>
    </section>
  );
}
