# Green Drift — Website

The EV rental platform website for Green Drift — built for Riders, Franchisee Partners,
Advertisers, and last-mile delivery companies.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.
Visual direction takes cues from Green Drift Energy's full-bleed hero/product-carousel pattern and
Green Drift Electric's interactive rider-savings calculator and stat-driven trust sections — rebuilt
from scratch in Green Drift's own palette and voice, not copied assets or code.

---

## 1. Project structure

```
green-drift-website/
├── app/                      # Next.js App Router — one folder per route
│   ├── layout.tsx            # Root layout: fonts, <Nav>, <Footer>
│   ├── page.tsx               # Homepage
│   ├── globals.css           # Design tokens + base styles
│   ├── riders/page.tsx
│   ├── partners/page.tsx
│   ├── advertise/page.tsx
│   ├── hubs/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/                # Reusable UI building blocks
│   ├── Nav.tsx / Footer.tsx
│   ├── Hero.tsx                # Ather-style full-bleed rotating hero
│   ├── TrustStrip.tsx
│   ├── AudienceSection.tsx     # Riders / Partners / Advertisers blocks
│   ├── HowItWorks.tsx
│   ├── SavingsCalculator.tsx   # Zypp-style interactive EV-vs-petrol slider
│   ├── Departments.tsx
│   ├── Roadmap.tsx             # Vision timeline, ends at "2029 Pan-India Hubs"
│   ├── Testimonials.tsx
│   ├── ClosingCta.tsx
│   └── Reveal.tsx              # Shared scroll-reveal animation wrapper
├── lib/
│   └── content.ts              # ALL site copy lives here — edit this file first
├── public/
│   ├── logo/                   # Put logo files here
│   └── images/                 # Put photography/renders here
├── CONTENT-AND-ASSETS-CHECKLIST.md   # What to send back before this goes live
├── tailwind.config.ts           # Color tokens, type scale
└── package.json
```

**Content-first workflow**: almost every piece of copy on the site — hero headlines, stats,
plan names, roadmap phases — lives in `lib/content.ts`. You can update most of the site by
editing that one file, without touching component code.

---

## 2. Run it locally

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To check it builds cleanly for production:

```bash
npm run build
npm start
```

---

## 3. Push to GitHub

```bash
cd green-drift-website
git init
git add .
git commit -m "Initial commit — Green Drift website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

(Replace `<your-username>/<your-repo>` with your actual GitHub repo. Create the empty repo on
GitHub first if you haven't already — don't initialize it with a README there, since this
project already has one.)

---

## 4. Deploy to Vercel

**Option A — via the Vercel dashboard (easiest):**
1. Push this repo to GitHub (above).
2. Go to vercel.com → **Add New Project** → import the GitHub repo.
3. Framework preset: Vercel auto-detects **Next.js** — no config needed.
4. Click **Deploy**. You'll get a live `*.vercel.app` URL in ~1–2 minutes.
5. Add a custom domain under **Project → Settings → Domains** once you have one.

**Option B — via CLI:**
```bash
npm install -g vercel
vercel login
vercel          # deploys a preview
vercel --prod   # promotes to production
```

Every push to `main` will auto-deploy once the GitHub repo is connected to the Vercel project.

---

## 5. Before this goes live — read `CONTENT-AND-ASSETS-CHECKLIST.md`

The site is fully built and functional right now, but a lot of it is intentionally marked
`PLACEHOLDER` — pricing, stats, testimonials, and imagery that need real, confirmed content
before this is a live public site. That checklist file lists exactly what's needed and where
it plugs in.

---

## 6. Known items to revisit

- `npm audit` currently flags advisories in `next` and some dev-only ESLint tooling. The
  pinned Next version (14.2.35) is the latest patched release on the 14.x line — a jump to
  Next 15/16 is a bigger migration and worth doing as a deliberate follow-up, not bundled into
  this first build. Run `npm audit fix` (non-breaking fixes only) before production launch.
- Google Fonts are loaded via a `<link>` tag in `app/layout.tsx` (not `next/font/google`) so
  the build never depends on network access to fonts.googleapis.com. This is more portable
  across CI/build environments; if you'd rather self-host the fonts for performance, drop the
  `.woff2` files into `public/fonts/` and switch to `next/font/local` — happy to do this once
  you're closer to launch.
- The contact form in `app/contact/page.tsx` is UI-only — it needs a real submit handler
  (an API route, a service like Formspree, or a CRM webhook) before it can actually send
  anything.
