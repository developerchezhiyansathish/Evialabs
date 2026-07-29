# EVIA Labs Website

Responsive B2B lead-generation website for EVIA Labs, a nutraceutical contract
manufacturer based in Nellore, India.

The project uses the Next.js App Router, TypeScript, Tailwind CSS, GSAP, Lenis,
Motion, Nodemailer, and Zod. Project-specific design and implementation
requirements are documented in [`claude.md`](./claude.md).

## Features

- Responsive sticky navigation and mobile menu
- Animated homepage sections with viewport-triggered text reveals
- GSAP SplitText heading animations
- Lenis smooth scrolling connected to the GSAP ticker
- Animated product slider and continuous client-logo loop
- Responsive manufacturing-process timeline
- Multi-step manufacturing inquiry form
- Server-side form validation, upload validation, honeypot protection, and
  basic rate limiting
- Internal inquiry email and customer acknowledgement email through SMTP
- SEO metadata, robots file, sitemap, and organization structured data
- Reduced-motion support
- Next.js standalone production output

## Requirements

- Node.js 20.9 or newer
- npm 10 or newer
- SMTP credentials for inquiry-form delivery

## Local Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create the local environment file:

   ```bash
   copy .env.example .env.local
   ```

   On macOS or Linux:

   ```bash
   cp .env.example .env.local
   ```

3. Add valid SMTP and deployment values to `.env.local`.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical production URL used by metadata, robots, and sitemap |
| `SMTP_HOST` | Yes | SMTP server hostname |
| `SMTP_PORT` | Yes | SMTP port, commonly `587` for STARTTLS or `465` for TLS |
| `SMTP_SECURE` | Yes | Use `true` with implicit TLS, otherwise `false` |
| `SMTP_USER` | Yes | SMTP account username |
| `SMTP_PASS` | Yes | SMTP account password or application password |
| `MAIL_FROM` | Yes | Sender name and email address |
| `MAIL_TO` | Yes | Internal recipient for manufacturing inquiries |

Never commit `.env.local` or production credentials. Only `.env.example` is
tracked.

## Available Scripts

```bash
npm run dev        # Start the development server
npm run build      # Create the optimized production build
npm run start      # Start the production server
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript without emitting files
```

Before committing or deploying, run:

```bash
npm run typecheck
npm run lint
npm run build
```

## Project Structure

```text
app/
  api/inquiry/        Manufacturing inquiry API route
  layout.tsx          Global metadata, header, footer, and providers
  page.tsx            Homepage section composition
components/
  layout/             Header, navigation, footer, and scroll progress
  motion/             Reusable reveal and SplitText components
  providers/          Lenis and GSAP smooth-scroll integration
  sections/home/      Homepage section components
  ui/                 Shared interface components
content/
  home.ts             Centralized homepage and interface copy
hooks/                Shared React hooks
lib/
  mailer.ts           Nodemailer delivery
  schema.ts           Zod form and upload validation
public/
  images/             Brand and generated website imagery
  logos/              Client and partner logo assets
```

## Inquiry Form

The inquiry form submits multipart form data to `POST /api/inquiry`.

Accepted optional attachments:

- PDF
- DOC or DOCX
- XLS or XLSX
- PNG
- JPG or JPEG

The maximum upload size is 10 MB. Successful submissions send an internal
notification to `MAIL_TO` and an acknowledgement to the submitted email
address.

The current in-memory rate limiter is appropriate for a single Node process.
For multi-instance or serverless production deployments, replace it with a
shared store such as Redis.

## Content and Assets

Homepage copy and interface labels are maintained in
[`content/home.ts`](./content/home.ts). Keep reusable copy centralized there
instead of duplicating it inside components.

Brand imagery is stored in `public/images`, while partner logo assets are
stored in `public/logos`. The header and favicon use the EVIA Labs brand image;
the footer uses `public/images/evia-labs-white.webp`.

## Production Deployment

The project uses `output: "standalone"` in `next.config.ts` and includes
`sharp` for production image handling.

For Hostinger or another Node.js host:

1. Use Node.js 20.9 or newer.
2. Add every environment variable listed above.
3. Confirm the hosting plan allows outbound SMTP connections.
4. Run `npm run build`.
5. Start the application with `npm run start`, or deploy the generated
   standalone server according to the host's Node.js workflow.

Form submissions will return a service-unavailable response if SMTP
configuration is missing or mail delivery fails.
