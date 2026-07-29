import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  openGraph: { title: "Blog" },
  twitter: { title: "Blog" },
};

export default function BlogPage() {
  return (
    <section className="section-shell">
      <div className="site-container">
        <h1 className="font-display text-[clamp(2.25rem,4.2vw,3.125rem)] text-ink-900">
          Blog
        </h1>
      </div>
    </section>
  );
}
