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

The form at `/contact` (`src/components/contact-form.tsx`) submits to a free,
no-backend form service ([FormSubmit](https://formsubmit.co)) which emails each
enquiry to the address in `firm.contact.email`. It works on a fully static host
with no server or API keys.

**One-time activation:** the first time the live form is submitted, FormSubmit
sends an activation email to that inbox — click the link once and delivery is on
for good. To change the destination or provider, edit `FORM_ENDPOINT` in
`contact-form.tsx`. The form always offers a WhatsApp / email fallback too, so a
visitor can reach the firm instantly regardless.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
```

## Deployment — Cloudflare Pages

The site is a **static export** (`output: 'export'` in `next.config.ts`), so it
deploys to any static host. On **Cloudflare Pages**, connect this GitHub repo and use:

| Setting | Value |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node version | 20 or newer |

After the first deploy, add the custom domain `misiatiassociates.co.ke` (and
`www`) in the Pages project — since the domain's DNS is on Cloudflare, the records
are created automatically.

---

© 2026 Misiati & Associates, Certified Public Accountants of Kenya.
