# Facilitator Misiati — Official Website

The personal-brand and booking site for **Emmanuel Misiati**, professional Master of
Ceremonies, experiential facilitator & moderator (Nairobi, Kenya). Built with
**Next.js 16 (App Router)**, **React 19**, **TypeScript** and **Tailwind CSS v4**,
exported as a fast static site.

The design is *structured postmodernism* — huge deconstructed type, one loud red
(#A61C1C), collage photography with hard paper-cut shadows, print grain, marquee
tickers — with a deliberately boring, conversion-first booking path (sticky
"Check availability" CTA + floating WhatsApp chat).

## Pages

| Route        | Purpose                                                                  |
| ------------ | ------------------------------------------------------------------------ |
| `/`          | Hero, client ticker, stats, Signature Framework, featured work, testimonials, pricing |
| `/services`  | Three packages with open KES pricing, add-ons, booking process, FAQ       |
| `/work`      | Case studies: WEConnect Africa, AccelerateHER 2.0, Founders Exchange, youth work |
| `/about`     | Bio, credentials, current roles, client wall, philosophy                  |
| `/contact`   | Enquiry form (FormSubmit → email), WhatsApp / phone / LinkedIn lines      |

Plus `sitemap.xml`, `robots.txt`, JSON-LD `Person` + `Service` schema.

## Editing content — one file

**Every word lives in [`src/lib/content.ts`](src/lib/content.ts).** Prices,
packages, testimonials, case studies, FAQ, contact details — edit that one typed
file and the pages re-render around it. Photos live in `public/images/`.

Before launch, update in `content.ts`:

- `site.domain` — the real domain (drives canonical URLs, sitemap, JSON-LD)
- `profile.linkedin` — the exact LinkedIn profile URL

## Contact form delivery

The form posts to [FormSubmit](https://formsubmit.co), which emails each enquiry to
`profile.email`. The first submission triggers a one-time activation email — click
the link once and delivery is on permanently.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
```

## Deployment

Static export (`output: 'export'`) — deploys to any static host (Vercel, Cloudflare
Pages, Netlify, GitHub Pages). Build command `npm run build`, output directory `out`.

---

© 2026 Emmanuel Misiati.
