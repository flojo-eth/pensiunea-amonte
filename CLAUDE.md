# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server on port 3000 (hot reload)
npm run build    # Production build
npm run start    # Serve the production build
npm run lint     # ESLint — currently clean, keep it that way
```

No tests exist. If adding tests, place them in a `tests/` folder.

## Environment

`/api/calendar` needs a Google service account. These live in `.env.local` (gitignored, never committed) and must be set in Vercel:

- `GOOGLE_CLIENT_EMAIL`
- `GOOGLE_PRIVATE_KEY` — the route rewrites `\n` into real newlines
- `GOOGLE_CALENDAR_ID`

The scope is `calendar.readonly`. Never log or echo these values.

## Architecture

Marketing site for **Pensiunea Amonte**, a guesthouse in Valea Avrigului (Sibiu). Next.js 16 App Router, React 19, TypeScript (strict), Tailwind CSS v4. Content is in Romanian; conversion runs through WhatsApp, not an on-site form.

```
app/
  layout.tsx              root: fonts, metadata defaults, Consent Mode + GTM, CookieBanner
  (site)/                 route group: adds AvailabilityBanner + Nav + Footer + LodgingBusiness JSON-LD
    page.tsx              homepage
    camere/               listing, tarife, [slug] (SSG, dynamicParams = false)
    despre-noi/ galerie/ servicii/ activitati-in-zona/
    politica-*/ termeni-si-conditii/   legal pages, noindex
  rezerva-acum/           deliberately OUTSIDE (site): no nav/footer, distraction-free
  api/calendar/route.ts   the only server code; revalidate = 300
lib/
  content.ts              all site content (rooms, amenities, activities, reviews, FAQs)
  seo.ts                  pageMeta() — canonical + Open Graph per page
  consent.ts              consent constants + inline bootstrap (server-safe, no React)
  useConsent.ts           the consent hook (client only)
  site.ts  ui.ts  gtm.ts  hooks.ts
```

There is no CMS and no data fetching outside `/api/calendar`.

## Conventions and traps

**Metadata — always use `pageMeta()` from `lib/seo.ts` for new pages.** Next merges metadata *shallowly*. A page that omits `alternates` inherits the parent canonical (this previously made 8 pages declare themselves duplicates of the homepage), and a page that sets a partial `openGraph` **drops `og:image`** rather than merging it. `pageMeta()` emits both in full.

**Never compute dates during render in a client component.** Pages are statically prerendered, so `new Date()` at render time bakes the build date into the HTML and desynchronises from the browser. Use `useIsHydrated()` from `lib/hooks.ts` and read the date only once hydrated — see `BookingCalendar`.

**`/api/calendar` fails open.** On error it returns an empty blocked list plus `stale: true`. The client must surface that, or booked dates get presented as available.

**Consent gates third-party embeds.** GTM starts denied via the inline script in `app/layout.tsx`; anything that sets third-party cookies (e.g. the Maps embed) must be gated on `useConsent()` — see `ConsentMap`.

**Tailwind v4 outline trap.** `outline-none` sets `--tw-outline-style: none`, and `outline-2` resolves `outline-style` from that variable — so a focus ring needs `focus-visible:outline-solid` too, or it silently never renders.

**Other:**
- Fonts are `--font-cormorant` (serif headings) and `--font-hanken` (sans body), exposed through `@theme` in `globals.css` as `--font-serif` / `--font-sans`. Reuse them; don't import new fonts.
- Colors come from the `@theme` tokens in `globals.css` (cream/sand/pine/forest/terracotta). Prefer tokens over arbitrary hex values.
- `SectionHeading` renders `h2` by default; pass `as="h1"` when it is the page title.
- Tailwind v4 via PostCSS — there is no `tailwind.config.js`.
- Use the `@/*` path alias.
- Deploy target: Vercel.
