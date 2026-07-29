import type { Metadata } from "next";
import "./globals.css";
import { dmSerif, inter } from "./fonts";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { SEO } from "@/content/home";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://evialabs.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SEO.title,
    template: "%s | EVIA Labs",
  },
  description: SEO.description,
  openGraph: {
    type: "website",
    siteName: "EVIA Labs",
    title: SEO.title,
    description: SEO.description,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
  },
  icons: {
    icon: [
      {
        url: "/images/evia-labs.webp",
        type: "image/webp",
      },
    ],
    shortcut: "/images/evia-labs.webp",
    apple: "/images/evia-labs.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll>
          <ScrollProgress />
          <Header />
          {children}
          <Footer />
          <WhatsAppFloat />
        </SmoothScroll>
      </body>
    </html>
  );
}
