# What I need from you before this site is launch-ready

The site is fully built and working end to end right now — every page, section, and
interaction is in place. Real logo and rider photography are now wired in (see "Received"
below). What's left is marked `PLACEHOLDER` throughout `lib/content.ts` and the page files.

---

## Received so far ✅

- [x] **Logo** — processed into `public/logo/`: a transparent full lockup
  (`logo-mark-transparent.png`), an icon-only crop (`logo-icon-transparent.png`, used in the
  nav/footer), and favicon sizes (32/180/512px + `app/favicon.ico`). The original had a solid
  black background baked in, which I chroma-keyed to real transparency so it sits cleanly on
  the site's dark-green background instead of showing a mismatched black box.
- [x] **Rider hero photo** (Sea Link shot) — in use as the homepage hero background (Riders
  slide) and the "For Riders" audience section image.
- [ ] **Not used**: the group photo with other delivery riders (Swiggy/Zomato/Blinkit/Flipkart
  in frame). It shows real, identifiable third-party brand logos — using it on Green Drift's
  own marketing site would imply a partnership/endorsement that doesn't exist, which is a
  trademark risk regardless of the image being AI-generated. If you want a similar "shared
  road" visual, it'd need either those brands' permission or a version without their logos.

---

## 1. Logo & brand assets

- [x] Logo mark (done — see above)
- [ ] **Favicon** — done, generated from the logo mark
- [ ] **Brand color values** — currently using `#8fe05a` / `#2f7d32` / `#0a0f0c`, extracted
  from your logo. Let me know if these should be adjusted to exact brand hex codes.

## 2. Photography / video (still the biggest gap)

- [x] Rider hero photo (Sea Link) — done
- [ ] **Partner/fleet hero photo** — a hub or fleet shot for the Partners hero slide and
  audience section (currently a drift-curve placeholder, honestly labeled)
- [ ] **Advertise hero photo** — a Green Drift EV in a real (or mocked) brand-wrap livery,
  without real third-party logos unless you have permission from that brand
- [ ] **Franchisee dashboard screenshots** — once the real dashboard exists, or a designed
  mockup in the meantime (site currently shows a coded approximation)
- [ ] **Rider testimonial photos** (see below)

## 3. Real numbers (currently all `PLACEHOLDER`)

- [ ] **Trust strip stats** (`lib/content.ts` → `trustStrip`): riders on the road, cities live,
  deliveries completed, CO₂ saved — only include ones you can back with a real, dated figure
- [ ] **Rider plan pricing** (`app/riders/page.tsx` → `plans`): ₹/day, ₹/week, ₹/month by
  vehicle class
- [ ] **Franchise tier figures** (`app/partners/page.tsx` → `tiers`): confirmed ticket size for
  Starter/Growth/Hub-Level, and whatever payout language is legally cleared to publish
- [ ] **Savings calculator assumptions** (`components/SavingsCalculator.tsx` →
  `ASSUMPTIONS`): real fuel cost, EV rental cost, and charging cost per day

## 4. Real stories

- [ ] **3+ rider testimonials** — name (or first name, with consent), a quote in their own
  words, optionally a photo or video link
- [ ] **Delivery/aggregator or investor logos** you have permission to display, if any exist

## 5. Operational details

- [ ] **Live cities** (`lib/content.ts` → `contact.cities`) — currently just "Mumbai"
- [ ] **Contact email** and any additional office locations
- [ ] **Advertising reporting capability** — confirm what the fleet telematics system can
  actually measure before firming up the Advertise page's claims

## 6. Legal / compliance sign-off

- [ ] Franchise/payout language on the Partners page needs legal review before publishing
- [ ] Terms & Privacy pages are now scaffolded (`app/terms`, `app/privacy`) but contain
  placeholder text only — need real content from counsel before launch, especially since the
  contact form and rider KYC flow will be collecting real personal data

## 7. Still-open engineering items

- [ ] **Contact form destination** — `app/api/contact/route.ts` now validates and logs
  submissions, but the actual send-somewhere step (email provider, CRM webhook, or database)
  is still a `TODO` in that file — tell me which you'd prefer and I'll wire it up
- [ ] **Font hosting** — currently loaded via a `<link>` tag to Google Fonts at runtime; fine
  for launch, but self-hosting (`next/font/local`) is worth doing later for performance

---

## How to send this back to me

Whatever's easiest — drop files/text directly in chat, or just tell me the numbers and I'll
wire them into `lib/content.ts` and the relevant page files myself.

