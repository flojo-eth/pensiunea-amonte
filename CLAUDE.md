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

Never run `npm run build` while the dev server is running: both write to `.next/`
and the dev server then serves stale, broken modules until `.next` is deleted.

**Verifying is part of the change.** Run `tsc --noEmit`, `lint` and `build` after
every edit. For anything visible, check it in a browser against the production
build, and read the generated HTML, the accessibility tree or the dataLayer
rather than trusting a screenshot — a screenshot will not show a wrong canonical,
a missing dataLayer key or a dropped `og:image`. After fixing a bug, grep for the
same pattern elsewhere; it usually has a second instance.

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
    evenimente/           hub: corporate + private, with Breadcrumbs
    retreat-corporate/    B2B landing (teambuilding / retreat); content in lib/retreat.ts
    politica-*/ termeni-si-conditii/   legal pages, noindex
  rezerva-acum/           deliberately OUTSIDE (site): no nav/footer, distraction-free
  api/calendar/route.ts   the only server code; revalidate = 300
lib/
  content.ts              site-wide content + the canonical NAP (CONTACT)
  retreat.ts              content for /retreat-corporate, kept separate
  seo.ts                  pageMeta() — canonical + Open Graph per page
  flags.ts                SHOW_FNB / SHOW_PRICING, derived from VERCEL_ENV (server-only)
  gtm.ts                  pushWhatsAppClick() — the only source of whatsapp_click
  consent.ts              consent constants + inline bootstrap (server-safe, no React)
  useConsent.ts           the consent hook (client only)
  site.ts  ui.ts  hooks.ts
```

There is no CMS and no data fetching outside `/api/calendar`.

**Content never lives in JSX.** Copy, rooms, reviews and FAQs belong in
`lib/content.ts` (or `lib/retreat.ts` for the B2B page). The NAP has one source:
`CONTACT` in `lib/content.ts`. The legal pages read `CONTACT.address` rather than
repeating it, so it cannot drift.

## Conventions and traps

**Metadata — always use `pageMeta()` from `lib/seo.ts` for new pages.** Next merges metadata *shallowly*. A page that omits `alternates` inherits the parent canonical (this previously made 8 pages declare themselves duplicates of the homepage), and a page that sets a partial `openGraph` **drops `og:image`** rather than merging it. `pageMeta()` emits both in full.

**Feature flags are server-only.** `lib/flags.ts` reads `process.env.VERCEL_ENV`, which has no `NEXT_PUBLIC_` prefix. A client component that imports the module directly gets the development values, silently. Read flags in a server component and pass the value down as a prop — see `OfferRequestForm`'s `showFnb`.

**Never compute dates during render in a client component.** Pages are statically prerendered, so `new Date()` at render time bakes the build date into the HTML and desynchronises from the browser. Use `useIsHydrated()` from `lib/hooks.ts` and read the date only once hydrated — see `BookingCalendar`.

**`/api/calendar` fails open.** On error it returns an empty blocked list plus `stale: true`. The client must surface that, or booked dates get presented as available.

**Consent gates third-party embeds.** GTM starts denied via the inline script in `app/layout.tsx`; anything that sets third-party cookies (e.g. the Maps embed) must be gated on `useConsent()` — see `ConsentMap`.

**Tailwind v4 outline trap.** `outline-none` sets `--tw-outline-style: none`, and `outline-2` resolves `outline-style` from that variable — so a focus ring needs `focus-visible:outline-solid` too, or it silently never renders.

**Tailwind specificity comes from stylesheet order, not className order.** Listing a utility later in `className` does not make it win. This has bitten twice: `text-forest` lost to `btnOutlineLight`'s `text-paper` and left a button invisible, and `pl-0` on the same element as `px-[clamp(...)]` zeroed only the left side. When a utility appears not to apply, check the generated CSS.

**No visible placeholders on indexed pages.** `PlaceholderImage` renders a striped box with a `[ FOTO: … ]` label when it has no `src`, which reads as unfinished work to a visitor. Render only entries that have a photo (see the `LEISURE` grid), and keep sections whose asset is missing behind a flag (see `SHOW_VIDEO` on `/evenimente`).

**Other:**
- Fonts are `--font-cormorant` (serif headings) and `--font-hanken` (sans body), exposed through `@theme` in `globals.css` as `--font-serif` / `--font-sans`. Reuse them; don't import new fonts.
- Colors come from the `@theme` tokens in `globals.css` (cream/sand/pine/forest/terracotta). Prefer tokens over arbitrary hex values.
- `SectionHeading` renders `h2` by default; pass `as="h1"` when it is the page title. Its `eyebrow` prop is required.
- `Breadcrumbs` drives the visible trail and the `BreadcrumbList` JSON-LD from one array.
- Tailwind v4 via PostCSS — there is no `tailwind.config.js`.
- Use the `@/*` path alias.
- Deploy target: Vercel.

## Tracking

Google Ads conversions are defined in GA4 and mapped in GTM. **No conversion ID
or label belongs in this code** — the site only emits clean dataLayer events.

| Event | Source | Keys |
| --- | --- | --- |
| `whatsapp_click` | every WhatsApp button, via `pushWhatsAppClick()` | `page_source`, `cta_position`, `event_label`, `event_category` |
| `offer_request_submit` | the offer form on the B2B page | `page_source`, `cta_position`, `group_size`, `nights`, `channel` |

**GTM keeps the last value of every key it has seen.** A push that omits a key
does not clear it — GTM reads the previous value. Because the dataLayer survives
client-side navigation, a WhatsApp click on `/rezerva-acum` was reporting
`page_source: "retreat-corporate"` and firing the corporate conversion for an
ordinary booking. So:

- every conversion push writes the **full** key set, with explicit `null` where a
  field does not apply;
- `whatsapp_click` has exactly one source, `pushWhatsAppClick()` in `lib/gtm.ts`
  — never push it by hand;
- `page_source` is derived from the pathname **at click time**, not at mount.
  `/retreat-corporate` yields exactly `retreat-corporate`, `/` yields `home`. An
  explicit `pageSource` prop wins, and is only for CTAs that do not belong to
  their page (the footer sends `footer`).

## Content rules

Romanian, factual register, no brochure language. Guest reviews are quoted
verbatim, with their real names and dates, but they are still published content
and the rules below apply to them too.

- **No em or en dashes** anywhere in our own copy. Use commas, full stops or a plain hyphen.
- **No invented numbers.** Capacities, distances and durations must be confirmed. The current drive times were measured and confirmed by the owner.
- **No published group prices.** Group and corporate rates are negotiated per group; `SHOW_PRICING` keeps the price block on `/retreat-corporate` off on purpose, and the page promises a complete offer within 24 working hours instead. Room rates for individual stays are a different matter: they are public on purpose, on the room pages, `/camere/tarife` and in `priceRange`.
- **Never the word "piscină", anywhere**, including inside guest reviews and inside descriptions of nearby attractions. There is no pool. Two reviews that mentioned one were removed from the carousel; do not reinstate them.
- **No star or daisy classification** until the ANT certificate is issued. Do not state a category for the guesthouse anywhere.
- **The riverside area belongs to the landowner.** Always "peste drum", never "a noastră", "grădina noastră" or anything that implies we run it. The Terms disclaim it explicitly; keep that in step.
- **Romanian words, not English ones:** "foc de tabără", never "firepit"; "zonă de relaxare", never "lounge". Proper names are exempt: the nearby attraction really is called Beach Club Avrig, so it keeps its name.
- **The NAP format is fixed:** `Valea Avrigului nr. 642, jud. Sibiu, 555200, România`, with no separate "Avrig" locality. The company's registered office (Strada Iazului nr. 23, Avrig) is a different address and stays as it is.

**Authorised and promotable:** restaurant and bar (CAEN 5611, 5630, DSP and
ANSVSA since September 2026) and the spa, jacuzzi and sauna (CAEN 9623, since
late September 2026). Meals, the bar, the signature cocktail and paid spa access
may all be described as services. `SHOW_FNB` and `SHOW_FB_AND_EVENTS` stay on;
they are kept for editorial control, not for compliance.

## Consent and third-party embeds

Every external embed goes through consent. Google Maps is rendered only by
`components/ConsentMap`, which waits for the visitor to accept and offers a
per-visit "Afișează harta" override that does not change the stored choice.

Never drop a raw `<iframe>` into a page. `/despre-noi` carried one for months
and loaded Google cookies before anyone had agreed to anything. Any new embed
(map, video, booking widget, social feed) is either gated the same way or it
does not ship.

## Do not touch without Flo's approval

These are configured outside the code and a well-meant edit can silently break
reporting or rankings:

- the corporate tracking setup and the GTM mapping;
- the dataLayer event names and their keys (`whatsapp_click`, `offer_request_submit`);
- the schema.org blocks and the values that feed them (`AMENITIES` reaches `amenityFeature`).

Describe what you would change and wait.

## Deploying

**A push to `main` is a deploy.** Vercel builds and publishes automatically,
with no further confirmation step. So: commit locally, show Flo exactly what
changes, and wait for his word before pushing. This holds even for a one-word
copy fix.
