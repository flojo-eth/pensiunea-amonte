# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server on port 3000 (hot reload)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No tests exist. If adding tests, place them in a `tests/` folder.

## Architecture

Single-page marketing site for Smoooth (Romanian pension/villa management). Built with Next.js 16 App Router, React 19, TypeScript (strict), and Tailwind CSS v4.

**All content lives in `app/page.tsx`** - services, process steps, FAQs, etc. are inline data arrays rendered via `.map()`. There are no API routes, no data fetching, and no nested routes.

- `app/layout.tsx` - root layout, metadata (SEO/OG), font definitions (`--font-geist-sans`, `--font-geist-mono`)
- `app/page.tsx` - entire landing page (~415 lines, single component)
- `app/globals.css` - Tailwind v4 import + CSS custom properties for theme colors and dark mode

## Conventions

- Reuse existing CSS font variables (`--font-geist-sans`, `--font-geist-mono`) rather than importing new fonts
- Use `@/*` path alias for shared utilities if needed
- Tailwind v4 is imported via PostCSS (`@import "tailwindcss"` in globals.css) - no `tailwind.config.js` file
- Dark-first color scheme: neutral-950 background, neutral-50 text, emerald-500/cyan-500 accents
- Deployment target: Vercel (no special env vars required)
