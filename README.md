# Pensiunea Amonte

Site-ul pensiunii din Valea Avrigului, județul Sibiu: [www.pensiunea-amonte.ro](https://www.pensiunea-amonte.ro).

Next.js 16 (App Router), React 19, TypeScript strict, Tailwind CSS v4. Găzduit pe Vercel. Fără CMS și fără bază de date: tot textul stă în `lib/content.ts` și `lib/retreat.ts`.

## Rulare locală

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producție
npm run start    # servește build-ul de producție
npm run lint
```

Ruta `/api/calendar` citește disponibilitatea din Google Calendar și are nevoie de trei variabile în `.env.local`: `GOOGLE_CLIENT_EMAIL`, `GOOGLE_PRIVATE_KEY`, `GOOGLE_CALENDAR_ID`. Fișierul nu se comite.

## Deploy

Un push pe `main` publică automat pe Vercel. Nu există alt pas de confirmare.

## Reguli

Arhitectura, capcanele cunoscute, regulile de tracking și de conținut sunt în [`CLAUDE.md`](CLAUDE.md). Citește-l înainte de orice modificare.
