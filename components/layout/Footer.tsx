import Image from "next/image";
import Link from "next/link";
import { FiMail, FiShare2 } from "react-icons/fi";
import { FOOTER_CONTENT, INTERFACE_COPY } from "@/content/home";

export function Footer() {
  return (
    <footer
      id="footer"
      className="overflow-hidden border-t border-white/10 bg-[#181818] text-ink-300"
    >
      <div className="site-container">
        <div className="grid gap-11 py-14 sm:grid-cols-2 sm:gap-x-10 md:py-20 lg:grid-cols-[1.2fr_1fr_1fr_1.15fr] lg:gap-16">
          <div className="max-w-[270px] sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label={INTERFACE_COPY.logoAlt}
              className="group relative block h-[54px] w-[150px]"
            >
              <Image
                src="/images/evia-labs-white.webp"
                alt={INTERFACE_COPY.logoAlt}
                fill
                sizes="150px"
                className="object-contain object-left transition-[opacity,transform] duration-300 group-hover:scale-[1.025] group-hover:opacity-80"
              />
            </Link>

            <p className="mt-5 text-sm leading-[1.7] text-ink-400">
              {FOOTER_CONTENT.description}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={`mailto:${FOOTER_CONTENT.contact.email}`}
                aria-label={FOOTER_CONTENT.social.emailLabel}
                className="footer-social"
              >
                <FiMail aria-hidden="true" />
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent("EVIA Labs")}&body=${encodeURIComponent("Discover EVIA Labs: https://evialabs.in")}`}
                aria-label={FOOTER_CONTENT.social.shareLabel}
                className="footer-social"
              >
                <FiShare2 aria-hidden="true" />
              </a>
            </div>
          </div>

          {FOOTER_CONTENT.columns.map((column) => (
            <nav key={column.title} aria-label={`${column.title} links`}>
              <h2 className="text-[11px] font-normal tracking-[0.14em] text-white uppercase">
                {column.title}
              </h2>
              <ul className="mt-5 space-y-1">
                {column.links.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="footer-link">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="text-[11px] font-normal tracking-[0.14em] text-white uppercase">
              {FOOTER_CONTENT.contact.title}
            </h2>
            <address className="mt-5 max-w-[245px] text-sm leading-[1.65] not-italic text-ink-400">
              <p>{FOOTER_CONTENT.contact.address}</p>
              <div className="mt-5 flex flex-col items-start">
                <a
                  href={`mailto:${FOOTER_CONTENT.contact.email}`}
                  className="footer-contact-link"
                >
                  {FOOTER_CONTENT.contact.email}
                </a>
                <a
                  href={`tel:${FOOTER_CONTENT.contact.phoneHref}`}
                  className="footer-contact-link"
                >
                  {FOOTER_CONTENT.contact.phoneLabel}
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 text-[10px] leading-relaxed tracking-[0.1em] text-ink-500 uppercase sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3">
            <p>
              © {new Date().getFullYear()} {FOOTER_CONTENT.copyright}
            </p>
            <p>
              {FOOTER_CONTENT.credit.prefix}{" "}
              <a
                href={FOOTER_CONTENT.credit.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-400 transition-colors duration-200 hover:text-brand-300"
              >
                {FOOTER_CONTENT.credit.label}
              </a>
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {FOOTER_CONTENT.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-chip border border-white/10 bg-white/[0.03] px-2 py-1 text-[9px] leading-none tracking-[0.08em] text-ink-500 uppercase"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
