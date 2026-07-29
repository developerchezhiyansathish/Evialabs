import Hero from "@/components/sections/home/01-Hero";
import TrustStrip from "@/components/sections/home/02-TrustStrip";
import InquiryForm from "@/components/sections/home/03-InquiryForm";
import Problem from "@/components/sections/home/04-Problem";
import WhyChoose from "@/components/sections/home/05-WhyChoose";
import Products from "@/components/sections/home/06-Products";
import Services from "@/components/sections/home/07-Services";
import About from "@/components/sections/home/08-About";
import Capabilities from "@/components/sections/home/09-Capabilities";
import Clients from "@/components/sections/home/10-Clients";
import ContactCta from "@/components/sections/home/11-ContactCta";
import { SITE } from "@/content/home";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nellore",
      addressCountry: "IN",
    },
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <TrustStrip />
      <InquiryForm />
      <Problem />
      <WhyChoose />
      <Products />
      <Services />
      <About />
      <Capabilities />
      <Clients />
      <ContactCta />
    </>
  );
}
