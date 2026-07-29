# CLAUDE.md — EVIA Labs Website

Project instructions for Claude Code. Read this fully before touching any file.

---

## 1. Project

**EVIA Labs** — a WHO-GMP-track nutraceutical contract manufacturer in Nellore, India.
Domain: `evialabs.in` · Agency: Drig Digital · Client contact: Sudhir Reddy

This is a **B2B lead-generation website, not e-commerce**. There is no cart, no
checkout, no pricing page, no user accounts. The single job of every page is to
produce a qualified manufacturing inquiry from procurement managers, pharma
founders and medical directors in India, the EU, the Middle East and Asia.

Seven pages, in nav order:
`Home` · `About Us` · `Products` · `Services` · `Capabilities & Process` · `Blog` · `Contact Us`

The homepage is the priority build. Everything else follows its design system.

---

## 2. Stack

| Concern | Choice | Notes |
|---|---|---|
| Framework | Next.js (App Router) + TypeScript | Server Components by default |
| Styling | Tailwind CSS v4 | CSS-first `@theme` config, no `tailwind.config.js` |
| Component motion | **Motion** (`motion`, import `motion/react`) | Formerly Framer Motion. Do **not** install `framer-motion` |
| Scroll motion | **GSAP** + **ScrollTrigger** (`gsap`, `@gsap/react`) | `useGSAP` hook only |
| Smooth scroll | **Lenis** (`lenis`, import `lenis/react`) | Not `@studio-freight/*` — those are retired |
| Icons | **react-icons** | Import from subpaths only |
| Email | **Nodemailer** | SMTP, Node runtime route handler |
| Validation | **Zod** | Shared schema, client + server |
| Database | MongoDB (Mongoose) | Phase 2 — CMS + inquiry log. Not needed for the static homepage build |
| Hosting | Hostinger Business Plan | **Not Vercel.** See §10 |

```bash
npm i next react react-dom
npm i motion gsap @gsap/react lenis react-icons nodemailer zod
npm i -D tailwindcss @tailwindcss/postcss typescript @types/node @types/react @types/nodemailer
```

---

## 3. THE CONTENT RULE — read this twice

**All homepage copy is SEO-locked. It is final, client-approved, keyword-targeted
text. Never rewrite, shorten, summarise, paraphrase, "improve", correct, or omit
any word, heading, label, placeholder, option value or CTA string.**

This includes copy that looks wrong. Two known issues exist and are deliberate
until the client rules on them — reproduce them exactly:

- Products H2 reads `Pharmacuetical` (misspelling of *Pharmaceutical*).
- Fourth product H3 reads `Powders (Sachets): Single-Serve, Sachets: Single-Serve, High Standard.` (duplicated phrase).

If you believe copy needs to change, **say so in your reply and leave the code
untouched.** Do not fix it in passing.

**All copy lives in `content/home.ts` as typed constants.** No hard-coded strings
in JSX. This is what stops copy drifting during refactors.

```ts
// content/home.ts
export const HERO = {
  eyebrow: "Nellore, India / Contract Manufacturing",
  h1: "Created by Nutraceutical Manufacturers Who Won't Compromise On Quality.",
  sub: [
    "Many nutraceutical manufacturers in India overlook essential aspects like ingredient quality, product testing, and documentation. EVIA Labs was established to provide a more dependable solution.",
    "Located in Nellore, India, EVIA Labs specializes in contract manufacturing of nutraceuticals, offering tablets, capsules, and powders for B2B pharmaceutical and nutraceutical marketing companies. Our manufacturing practices reflect a commitment to quality, compliance, and precision, rooted in over twenty years of experience in the pharmaceutical industry by our founding team.",
  ],
} as const;
```

Use typographic apostrophes (`'`) and em/en dashes exactly as they appear in the
source document. Do not normalise `—` to `-`.

### Locked homepage section order

Never reorder, merge, or lazy-drop a section.

```
01 Hero
02 Trust Badges Strip
03 Manufacturing Inquiry Form   ← yes, this early. Intentional.
04 The Problem We Solve
05 Why Choose EVIA Labs?
06 Our Products
07 Our Services
08 About EVIA Labs
09 Our Capabilities & Process
10 Our Clients & Partners
11 Contact CTA Strip
12 Footer
```

---

## 4. Design tokens

Defined once in `app/globals.css`. Never hard-code a hex value in a component.

```css
@import "tailwindcss";
@import "lenis/dist/lenis.css";

@theme {
  /* Primary — Lima */
  --color-brand-50:  #F4FBEA;
  --color-brand-100: #E5F6D1;
  --color-brand-200: #CCEDA9;
  --color-brand-300: #ABE076;
  --color-brand-400: #8CD04B;
  --color-brand-500: #6DB52D;
  --color-brand-600: #539020;
  --color-brand-700: #406E1D;
  --color-brand-800: #36581C;
  --color-brand-900: #2F4B1C;
  --color-brand-950: #16290A;

  /* Neutral — Storm Dust */
  --color-ink-50:  #FAFAFA;
  --color-ink-100: #F5F5F5;
  --color-ink-200: #E6E6E6;
  --color-ink-300: #D3D3D3;
  --color-ink-400: #A3A3A3;
  --color-ink-500: #636363;
  --color-ink-600: #535353;
  --color-ink-700: #404040;
  --color-ink-800: #272727;
  --color-ink-900: #1A1A1A;
  --color-ink-950: #0B0B0B;

  --font-display: var(--font-dm-serif);
  --font-sans:    var(--font-inter);

  --radius-chip:  4px;
  --radius-ui:    8px;
  --radius-card:  16px;
  --radius-media: 28px;

  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Colour roles — enforce these, they are accessibility requirements

| Role | Token | Why |
|---|---|---|
| Primary button fill, green body text, links | `brand-700` `#406E1D` | 5.99:1 on white ✓ |
| Button hover / active | `brand-800` / `brand-900` | |
| **Accent only** — dots, ticks, focus glow, active bars, ≤4px marks | `brand-500` `#6DB52D` | **2.54:1 on white — never text, never a button fill** |
| Soft fills, chips, icon backplates | `brand-50` + `brand-200` hairline | |
| Body copy | `ink-800` `#272727` | |
| Secondary copy | `ink-600` `#535353` | 7.56:1 ✓ |
| Captions | `ink-500` `#636363` | |
| Hairlines, dividers, card borders | `ink-200` `#E6E6E6` | |
| Dark section only | bg `ink-900`, body `ink-300`, accent `brand-400` | |

`brand-400` `#8CD04B` and `brand-500` are **only** legible on the dark section.
Do not use `ink-400` `#A3A3A3` for text on white — it is 2.49:1 and decorative only.

**One gradient exists on the entire site:** the final CTA strip,
`linear-gradient(135deg, #406E1D, #2F4B1C)`. Do not add others.

### Typography

`DM Serif Display` (headings, regular weight only) + `Inter` (body/UI).
Loaded via `next/font/google` — never a `<link>` to Google Fonts.

```ts
// app/fonts.ts
import { DM_Serif_Display, Inter } from "next/font/google";

export const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-serif",
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
```

Apply both variables on `<html>` in the root layout.

Scale (desktop → mobile): H1 68→38 · H2 46→30 · H3 26→21 · lead 20→17 · body 17→16 · caption 14.
Body measure caps at ~68ch. Eyebrows: Inter, 12px, uppercase, `tracking-[0.14em]`, `tabular-nums`, `brand-700`.

### Signature devices — use these three, and nothing else decorative

1. **Batch-stamp eyebrow** — a 6px `brand-500` square, then uppercase tabular Inter (`▪ SEC 04 / OUR PRODUCTS`).
2. **Graduated rule** — 1px `ink-200` divider carrying 6px vertical ticks at uneven intervals (lab glassware markings).
3. **Pharmacopoeia chip** — `brand-50` fill, `brand-200` hairline, `brand-700` text, 4px radius (`IP` `USP` `BP` `JP` `FSSAI Licensed`).

No glowing orbs, particles, mesh gradients, cursor followers, tilt cards, or
typewriter text. Glassmorphism appears in exactly **two** places sitewide: the
hero credential chips and the scrolled sticky header.

---

## 5. Structure

```
app/
  layout.tsx                 # fonts, <SmoothScroll>, header, footer, metadata
  template.tsx               # page-enter transition (see §7)
  page.tsx                   # homepage — composes sections in locked order
  globals.css                # @theme tokens
  fonts.ts
  (routes)/about|products|services|capabilities|blog|contact/page.tsx
  api/inquiry/route.ts       # Nodemailer handler — runtime = "nodejs"
components/
  providers/SmoothScroll.tsx # Lenis + GSAP ticker sync — the ONLY RAF loop
  layout/Header.tsx  MobileNav.tsx  Footer.tsx  WhatsAppFloat.tsx  ScrollProgress.tsx
  sections/home/             # one file per locked section, named 01..12
  ui/Button.tsx  Card.tsx  Eyebrow.tsx  GraduatedRule.tsx  Chip.tsx  Field.tsx
  motion/Reveal.tsx  RevealHeading.tsx  Parallax.tsx
content/home.ts              # ALL copy. Single source of truth.
lib/schema.ts  mailer.ts  utils.ts
hooks/useReducedMotion.ts
public/images/
```

**Conventions**

- Server Components by default. `"use client"` only where a hook, event handler, or animation genuinely needs it — push it to the leaf, never the page.
- Sections are `async` Server Components; the animated wrapper inside them is the client boundary.
- Name section files by their locked index: `01-Hero.tsx`, `02-TrustStrip.tsx`, … Order is then unmissable in the file tree.
- Every section is a `<section>` with a stable `id` used by nav anchors.
- Import react-icons from subpaths only: `import { HiOutlineShieldCheck } from "react-icons/hi2"` — never `from "react-icons"`.
- Icons: thin-line family (`hi2` / `lu`), 1.5px stroke feel, 24px, `brand-700`.

---

## 6. Smooth scroll — Lenis + GSAP

**There must be exactly one requestAnimationFrame loop in the app.** Lenis and
GSAP each ship their own; running both causes jitter and desynced ScrollTriggers.
GSAP's ticker drives Lenis. This is the single most common bug in this stack.

```tsx
// components/providers/SmoothScroll.tsx
"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => lenis.raf(time * 1000); // GSAP is seconds, Lenis is ms
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(tick);
    };
  }, []);

  // Reduced motion: skip Lenis entirely, fall back to native scroll.
  if (reduced) return <>{children}</>;

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{ lerp: 0.1, duration: 1.2, syncTouch: false, autoRaf: false }}
    >
      {children}
    </ReactLenis>
  );
}
```

Rules:

- `autoRaf: false` is mandatory — it disables Lenis's own loop so GSAP drives it.
- `smoothTouch` is a removed option. Use `syncTouch`, and leave it `false` — smooth scroll on touch feels laggy and hurts mobile conversion.
- Use `useLenis()` + `lenis.scrollTo(target)` for anchor nav, never `element.scrollIntoView()`.
- Call `ScrollTrigger.refresh()` after fonts load and after any above-fold image loads, or trigger positions will be measured against the wrong layout height.
- Never set `overflow: hidden` on `html`/`body` for Lenis. It runs on native scroll — `position: sticky`, anchors, and keyboard scrolling all keep working, and they must.

---

## 7. Motion

**Division of labour — do not blur it:**

| Use | For |
|---|---|
| **Motion** (`motion/react`) | Component state, mount/unmount, `whileInView` reveals, hover/tap, form step transitions, page-enter transitions |
| **GSAP + ScrollTrigger** | Anything scroll-position-bound: timeline spine fill, parallax, pinned or scrubbed sequences, the section-progress line |
| **CSS** | Simple hovers, colour shifts, focus rings. Don't reach for a library for a 140ms colour change |

### Timing tokens

```
micro    140ms  ease-standard    hovers, focus, colour
standard 260ms  ease-standard    step transitions, menus
reveal   700ms  ease-out-expo    scroll entrances
hero     900ms  ease-out-expo    hero media only
```

### Reveal defaults

24px upward translate + fade, triggered at 20% intersection, children staggered
60–80ms. **`viewport={{ once: true }}` always** — nothing re-animates on scroll-back.
Headings reveal with a line-by-line clip-path wipe upward.

Only four signature moments exist on the homepage. Do not add a fifth:
hero image settle → form step transitions + confirmation check draw →
process timeline spine fill → CTA strip texture drift.

### Page transitions

Next.js App Router does **not** support `AnimatePresence` exit animations on
navigation out of the box — the outgoing route unmounts before Motion can animate
it. Do not attempt the "FrozenRouter" workaround; it breaks on `router.refresh()`
and Server Action revalidation.

Use `app/template.tsx` for enter-only transitions. `template.tsx` remounts on every
navigation, which is exactly what we want:

```tsx
// app/template.tsx
"use client";
import { motion } from "motion/react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.main>
  );
}
```

On route change, also call `lenis.scrollTo(0, { immediate: true })` and
`ScrollTrigger.refresh()` — otherwise the new page inherits the old scroll
position and stale trigger measurements.

### GSAP in React

Always `useGSAP` from `@gsap/react` with a scope ref. Never bare `useEffect` +
`gsap.to` — it leaks tweens and ScrollTriggers across Fast Refresh.

```tsx
"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function TimelineSpine() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(".spine-fill", {
      scaleY: 1,
      ease: "none",
      scrollTrigger: { trigger: scope.current, start: "top 70%", end: "bottom 80%", scrub: true },
    });
  }, { scope });

  return <div ref={scope}>{/* … */}</div>;
}
```

### Reduced motion — non-negotiable

Under `prefers-reduced-motion`: **reduce, don't remove.** Keep opacity fades.
Drop all translation, parallax, drift, scrub, marquee, and Lenis itself. The
timeline spine renders fully filled. The confirmation check appears without drawing.
Gate with `useReducedMotion()` from `motion/react` and with
`ScrollTrigger.matchMedia` / `gsap.matchMedia()` on the GSAP side.

---

## 8. The inquiry form

The homepage's primary conversion asset. **All 15 fields and every option value
from `content/home.ts` must render** — the 3-step wizard is a presentation
device, not permission to cut fields.

Steps map to the source document's own groupings:
`01 Contact Information` → `02 Product Requirements` → `03 Additional Information`

**Requirements**

- One Zod schema in `lib/schema.ts`, imported by both the client form and the route handler. Never validate on the client only.
- Validate per step on `Continue`; block advance on error.
- Every input has a bound `<label htmlFor>`. Errors are announced via `role="alert"` and `aria-live="polite"`, and `aria-invalid` is set on the field.
- On step change, move focus to the new step's heading (`tabIndex={-1}`) so keyboard and screen-reader users aren't stranded.
- Spam: a hidden honeypot field plus a minimum time-to-submit check. No CAPTCHA — it costs conversions on a B2B form.
- Rate-limit the route handler by IP.
- File upload: accept `.pdf .doc .docx .xls .xlsx .png .jpg` only, 10MB cap, validate MIME server-side, send as a Nodemailer attachment. Never write uploads to the web root.
- Success replaces the card with the confirmation panel and the exact confirmation copy from `content/home.ts`.

**Route handler**

```ts
// app/api/inquiry/route.ts
export const runtime = "nodejs";      // REQUIRED — Nodemailer opens TCP sockets,
export const dynamic = "force-dynamic"; // which the Edge runtime cannot do.
```

Never import `lib/mailer.ts` into a Client Component or into middleware.

**SMTP env vars** (`.env.local`, never committed — commit `.env.example` instead):

```
SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=
SMTP_PASS=
MAIL_FROM="EVIA Labs Website <no-reply@evialabs.in>"
MAIL_TO=
```

Send **two** emails: the internal notification to `MAIL_TO`, and an
acknowledgement to the enquirer. Send the acknowledgement with `Promise.allSettled`
so a bounce on the auto-reply never fails the user's submission. If the internal
mail throws, still persist the inquiry (MongoDB, Phase 2) and return success — a
lead must never be lost to an SMTP hiccup. Log the failure.

---

## 9. Accessibility & SEO

**Floor — verify before any PR is considered done**

- WCAG 2.1 AA. Every text/background pair ≥ 4.5:1. Use the token roles in §4 and this holds automatically.
- Visible keyboard focus everywhere: 2px `brand-700` ring, 2px offset, plus a soft `brand-500` glow. Never `outline: none` without a replacement.
- All interactive targets ≥ 44×44px.
- Exactly one `<h1>` per page. Heading levels descend without skipping — the source document's `<H1>/<H2>/<H3>` markers map directly to real heading tags.
- Never signal state by colour alone (the form's selected pill cards carry a check glyph, not just a green border).
- All images need real `alt`. Decorative background art gets `alt=""` + `aria-hidden`.
- The client-logo placeholder slots are `aria-hidden` until real logos land.
- The "Note: Insert client logos…" line is an **internal build note**. Render it behind a `SHOW_BUILD_NOTES` flag and strip it before launch.

**SEO**

- Metadata via the App Router `metadata` export. Homepage values are locked:
  - title (62 chars): `EVIA Labs | Nutraceutical Manufacturers- Pharmaceutical-Graded`
  - description (155 chars): `EVIA Labs is one of India's WHO GMP-certified nutraceutical manufacturers. We make pharma-grade tablets, capsules and more for B2B marketers and exporters.`
- JSON-LD: `Organization` + `LocalBusiness` on the homepage, `Product` on product pages, `BreadcrumbList` sitewide.
- `app/sitemap.ts` and `app/robots.ts` — generated, not static files.
- Open Graph + Twitter cards on every route.
- **Never render locked copy inside a Client Component that only appears after hydration or on scroll.** Reveal animations must animate opacity/transform on content that is already in the server-rendered HTML. If a crawler can't see the copy in the initial payload, the SEO work is wasted — this is the highest-risk interaction between our motion system and the site's actual purpose.

---

## 10. Deployment — Hostinger, not Vercel

The proposal specifies Hostinger Business Plan. That changes several defaults:

- `output: "standalone"` in `next.config.ts`, run under Node with PM2 or Hostinger's Node app manager.
- `next/image` optimisation is not free here. Install `sharp` and confirm the Node version supports it, or configure a custom loader. Do **not** blanket-set `unoptimized: true` — the hero LCP depends on it.
- No Vercel Edge, no ISR-on-CDN. Prefer static generation (`generateStaticParams`) and revalidate on demand.
- Set `NEXT_PUBLIC_SITE_URL=https://evialabs.in` for absolute OG and sitemap URLs.
- Confirm outbound SMTP ports are open on the plan before wiring the form — this is a common Hostinger gotcha and it silently breaks lead capture.

**Performance budget:** LCP < 2.0s · CLS < 0.05 · INP < 200ms.
Hero and product imagery as AVIF/WebP with explicit `width`/`height`. Lazy-load
everything below the fold. `priority` on the hero image only.

---

## 11. Commands

```bash
npm run dev
npm run build          # must pass with zero TS errors before any commit
npm run lint
npm run typecheck
```

---

## 12. Working agreements

- **Ask before assuming on copy.** If a string isn't in `content/home.ts`, don't invent it — ask.
- **One section per change.** Don't refactor three sections in a single pass; this design has deliberately non-repeating layouts and a "helpful" abstraction across them will flatten it.
- **Don't unify the section layouts into one generic component.** Each of the 12 sections has an intentionally distinct structure. A shared `<Section>` for padding and max-width is fine; a shared `<CardGrid>` used everywhere is not.
- **Don't add dependencies** without flagging it first. The stack above is deliberate and the bundle budget is tight.
- **Don't add a fifth signature animation, a second gradient, or a third glassmorphism surface.** Restraint is the design.
- Every PR states: sections touched, copy verified unchanged, contrast checked, reduced-motion verified, `npm run build` clean.