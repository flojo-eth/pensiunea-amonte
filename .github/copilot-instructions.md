# Instructions for AI coding assistants

The authoritative guide for this repository is [`CLAUDE.md`](../CLAUDE.md) at the root: architecture, known traps, tracking rules, content rules, what must not be touched without the owner's approval, and the deploy rule. Read it before changing anything; it applies to every assistant, not only Claude.

The short version:

- Marketing site for Pensiunea Amonte. Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS v4, deployed on Vercel. Content is in Romanian.
- All copy lives in `lib/content.ts` and `lib/retreat.ts`, never in JSX.
- New pages use `pageMeta()` from `lib/seo.ts`. Structured data goes through `components/JsonLd`.
- `whatsapp_click` is pushed only by `pushWhatsAppClick()` in `lib/gtm.ts`.
- A push to `main` is a production deploy.
