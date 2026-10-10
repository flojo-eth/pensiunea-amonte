---
name: audit-seo-geo
description: Audit complet al unui site web (SEO, GEO, securitate, conținut, accesibilitate, performanță), verificat pe build-ul de producție, cu raport în docs/. Cu argumentul "runda 2", verifică reparațiile față de auditul anterior.
argument-hint: "[runda 2] [URL site live]"
disable-model-invocation: true
---

Fă un audit complet al acestui proiect: SEO, GEO (vizibilitatea în motoarele AI), securitate, conținut, accesibilitate și performanță. Doar constatări: nu modifica cod.

Argumente primite: $ARGUMENTS
- Dacă argumentele conțin „runda", aplică secțiunea „Runda 2" de la final.
- Dacă conțin un URL, acela e site-ul live de verificat.

## Înainte de orice
- Citește CLAUDE.md, README și orice alt fișier de reguli (AGENTS.md, .cursorrules, copilot-instructions). Regulile de conținut și listele „nu atinge fără aprobare" de acolo devin criterii de audit.
- Dacă există deja un audit în docs/, citește-l. Dacă argumentele cer runda 2, aplică secțiunea „Runda 2".
- Identifică stack-ul, comenzile de build și start și toate rutele publice.

## Metoda: verifică ce primește crawlerul, nu doar sursa
1. Rulează typecheck, lint și build-ul de producție, cu variabilele de mediu de producție (de exemplu VERCEL_ENV=production). Servește build-ul local.
2. Descarcă HTML-ul generat pentru fiecare rută, plus robots.txt, sitemap.xml, manifestul, /llms.txt, o pagină 404 și redirecturile vechi.
3. Randează fiecare pagină în Chromium (Playwright) cu JavaScript OPRIT și PORNIT și compară rezultatele. Textul, JSON-LD-ul și linkurile trebuie să existe și fără JS, pentru că boții AI nu rulează JavaScript.
4. Extrage textul vizibil, inclusiv alt, aria-label și title, și scanează-l după regulile de conținut ale proiectului.
5. Rulează Lighthouse pe mobil pe 3-4 pagini reprezentative. Homepage-ul rulează-l de 3 ori, pentru că rezultatele locale variază mult.
6. Verifică la 375 px lățime: scroll orizontal și erori JavaScript.
7. Încearcă site-ul live: redirectul apex/www, headerele, accesul pentru GPTBot, ClaudeBot și PerplexityBot. Dacă rețeaua îl blochează, spune clar ce n-ai putut verifica și nu inventa rezultate.

## Ce verifici

### SEO tehnic, pe fiecare pagină
Fă un tabel cu: titlul (lungime), descrierea (lungime; peste ~160 de caractere e tăiată), canonical, robots, og:title, og:url, og:image, H1 (unul singur, cu termeni de căutare și locul), numărul de cuvinte și dacă JSON-LD-ul e prezent fără JS.
Verifică și:
- sitemap-ul (lastmod real sau deloc) și robots.txt;
- redirecturile 301 și pagina 404;
- linkurile interne și alt-ul la imagini;
- imaginile og:image: 1200x630, sub 300 KB, ca să apară preview-ul în WhatsApp.

### GEO
- JSON-LD:
  - scris în HTML-ul livrat, nu injectat după hidratare;
  - JSON valid, cu @id-uri care se leagă între ele;
  - entități complete: Organization, WebSite și tipul de business potrivit;
  - sameAs fără parametri de tracking.
- Fapte contradictorii între pagini: capacități, distanțe, prețuri, ce e inclus și ce e contra cost, termene, politici. Pune-le într-un tabel „Varianta A / Varianta B", cu fișier:linie.
- Fapte concrete. Paginile trebuie să răspundă direct la ce ar întreba un utilizator un AI: unde, cât costă, ce include, cât de departe, pentru câte persoane. Semnalează:
  - formulările vagi („în apropiere");
  - datele relative care îmbătrânesc („acum o lună");
  - TODO-urile care ascund informații.
- Conținutul subțire, H1-urile fără termeni de căutare, paginile fără text.
- Boții AI să nu fie blocați în robots.txt sau în firewall (de exemplu Vercel); verifică dacă există /llms.txt.

### Securitate
- npm audit (sau echivalentul), separat pentru dependențele de producție și cele de dezvoltare, plus versiunea framework-ului față de advisory-urile cunoscute.
- Headere: CSP, HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy, X-Powered-By.
- Rutele API și codul de server:
  - autentificarea și cache-ul;
  - ce se întâmplă la eroare;
  - secrete logate sau expuse în client, inclusiv variabile publice cu date sensibile.
- Scripturi și embed-uri terțe încărcate înainte de consimțământ (GDPR).

### Conținut și regulile proiectului
- Fiecare regulă din CLAUDE.md, verificată pe textul randat, cu locul exact.
- Copy scris direct în template sau JSX acolo unde regula cere o sursă unică.
- Date de contact (NAP) duplicate de mână.

### Accesibilitate
- Contrastul: raporturile calculate și o nuanță propusă care trece AA.
- Ordinea titlurilor și label-in-name.
- Animații care ignoră prefers-reduced-motion.
- Focusul și formularele.

### Performanță
- LCP, CLS, TBT și greutatea paginii.
- Imagini supradimensionate, JavaScript inutil, bucle care rulează în fundal.
- Spune clar că valorile măsurate local sunt orientative.

### Cod și documentație
Comentarii și documentație învechite, cod mort, TODO-uri, convenții din CLAUDE.md încălcate.

## Raportul
- Scrie-l în română, în docs/audit-seo-geo-complet.md.
- Începe cu metoda și cu ce nu ai putut verifica, apoi „Sumar: primele 8 lucruri".
- Gradare: 🔴 critic · 🟠 mare · 🟡 mediu · ⚪ mic.
- Fiecare constatare are fișier:linie și dovada (ce ai văzut în HTML, în browser sau în audit), nu presupuneri.
- Separă ce merge bine de ce nu merge.
- Pentru tot ce atinge zonele protejate din CLAUDE.md (tracking, schema.org etc.), descrie reparația și marchează „cere aprobare".
- Încheie cu un plan P0 / P1 / P2 și cu întrebările pentru proprietar, adică faptele pe care doar el le știe.
- Fă commit doar cu raportul, pe branch-ul de lucru. Nu face push pe main.

## Runda 2 (dacă există deja un audit)
Verifică fiecare constatare din auditul anterior pe codul actual, cu aceeași metodă, și scrie docs/audit-seo-geo-runda-N.md cu:
- un tabel de status (✅ rezolvat · 🟡 parțial · ❌ rămas · ❔ decizie), cu dovada pentru fiecare constatare;
- constatările noi, inclusiv cele introduse de reparații;
- măsurătorile înainte și după;
- ce a rămas de făcut.
