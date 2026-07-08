# Peter Misiati — Portfolio

A tier-1 software-engineer portfolio and **directory of work** for Peter Misiati,
Full-Stack Software Engineer. Built with **Next.js 16 (App Router)**, **React 19**,
**TypeScript** and **Tailwind CSS v4**, and exported as a fast static site.

## Pages

| Route            | Purpose                                                                   |
| ---------------- | ------------------------------------------------------------------------- |
| `/`              | Home — hero, stats, featured work, skills, experience, about, testimonial |
| `/work`          | The directory — filterable grid of every project                          |
| `/work/[slug]`   | Case study — problem, approach, architecture, highlights, impact          |
| `/about`         | Long-form bio, principles, full skills, experience                        |
| `/contact`       | Contact form + direct email / GitHub / LinkedIn                           |

Plus `sitemap.xml`, `robots.txt`, JSON-LD `Person` schema and per-project OG metadata.

## Editing content — one file

**All content lives in [`src/lib/portfolio.ts`](src/lib/portfolio.ts).** Change your
bio, add a skill, add a job — or add a whole project (which auto-creates its card on
the home grid, an entry in the `/work` directory, its own `/work/<slug>` case-study
page, and a sitemap entry) — by editing that one typed file. You never touch the page
components.

Items marked `// SAMPLE — replace` are realistic placeholders. Swap them for your real
work. To feature a project on the home page, set `featured: true`.

### Adding screenshots

Each project has a `media: []` array. Drop images into `public/` and add
`{ src: "/my-shot.png", alt: "…" }` entries — they replace the branded gradient cover
on the case-study page.

### Your résumé / CV

Put a PDF in `public/` and set `profile.resumeUrl` (e.g. `"/peter-misiati-cv.pdf"`) —
a Résumé button then appears in the hero.

## Contact form delivery

The form at `/contact` posts to a no-backend service ([FormSubmit](https://formsubmit.co))
that emails each enquiry to `profile.email`. The first submission triggers a one-time
activation email — click the link once and delivery is on for good.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
```

## Deployment

Static export (`output: 'export'`), so it deploys to any static host — Vercel,
Cloudflare Pages, Netlify, GitHub Pages. Set the build command to `npm run build` and
the output directory to `out`. Update `site.domain` in `src/lib/portfolio.ts` to your
real domain before launch (it drives canonical URLs, the sitemap and JSON-LD).

---

© 2026 Peter Misiati.
