# Misiati & Associates — Website

Official website for **Misiati & Associates, Certified Public Accountants of Kenya** (Bungoma).
Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript** and **Tailwind CSS v4**.

## Pages

| Route       | Purpose                                                             |
| ----------- | ------------------------------------------------------------------ |
| `/`         | Home — hero, credentials, services, industries, testimonials, CTA  |
| `/about`    | Firm story, mission, managing partner profile, team                |
| `/services` | Full services, industries served, how-we-work, contact-for-quote   |
| `/contact`  | Contact form, phone/WhatsApp/email, opening hours, office maps      |

Plus `sitemap.xml`, `robots.txt` and an `/api/contact` form handler.

## Editing content

**All firm information lives in one file:** [`src/lib/firm.ts`](src/lib/firm.ts).
Change a phone number, add a service, add a testimonial or team member there and it
updates everywhere on the site — no need to touch the page code.

- `firm` — name, contacts, phones, hours, offices, credentials, mission, history
- `services` — the service cards (set `featured: true` to show on the home page)
- `industries` — sectors served
- `team` — team members
- `testimonials` / `notableClients` — social proof

### Adding photos later

The design currently uses a branded monogram in place of photographs. When the
firm provides photos (managing partner, offices, team), drop them into `public/`
and swap them into the hero (`src/app/page.tsx`), the About profile
(`src/app/about/page.tsx`) and the team cards using `next/image`.

## Contact form email delivery

The form at `/contact` posts to `src/app/api/contact/route.ts`. Out of the box it
validates submissions and offers the visitor a WhatsApp / email fallback so nothing
is lost. To receive enquiries as **real email**, create a free account at
[resend.com](https://resend.com) and set these environment variables in hosting:

```
RESEND_API_KEY=re_xxxxxxxx
CONTACT_TO=jsmisiati@gmail.com          # where enquiries are sent
CONTACT_FROM=info@misiatiassociates.co.ke   # a verified sender
```

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Deployment

The site is a standard Next.js app and deploys to any Node host. Recommended:
[Vercel](https://vercel.com) — connect the repo, add the env vars above, and point the
`www.misiatiassociates.co.ke` domain at it.

---

© 2026 Misiati & Associates, Certified Public Accountants of Kenya.
