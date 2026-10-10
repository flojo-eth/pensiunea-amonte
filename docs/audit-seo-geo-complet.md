# Audit SEO / GEO și audit complet al site-ului

Data: 10 octombrie 2026. Nicio modificare de cod aplicată, doar constatări.

**Cum a fost făcut.** Build de producție local (`VERCEL_ENV=production`), servit cu `next start`, apoi:
HTML-ul generat citit pentru fiecare din cele 17 pagini, randare în Chromium cu JavaScript pornit și oprit,
Lighthouse pe mobil pentru 4 pagini, verificare la 375 px lățime, `tsc`, `lint`, `npm audit` și o scanare a
textului vizibil după regulile de conținut din `CLAUDE.md`.

**Ce nu am putut verifica.** Site-ul live (`www.pensiunea-amonte.ro`) este blocat de politica de rețea a
mediului cloud. Deci nu am testat: redirectul apex → www, headerele reale de pe Vercel, dacă firewall-ul
Vercel blochează boții AI (GPTBot, ClaudeBot, PerplexityBot) și datele reale de viteză (CrUX). Cifrele de
performanță de mai jos sunt locale, fără CDN, și sunt doar orientative.

**Gradare:** 🔴 critic · 🟠 mare · 🟡 mediu · ⚪ mic

---

## Sumar: primele 8 lucruri

1. 🔴 **Datele structurate (JSON-LD) nu există în HTML-ul livrat.** Apar doar după ce rulează JavaScript.
   Boții AI și orice crawler care nu execută JS nu văd nimic: nici `BedAndBreakfast`, nici FAQ-urile, nici
   breadcrumb-urile. Verificat pe toate paginile. Reparația e mică, dar atinge blocurile schema.org, deci
   cere aprobarea lui Flo.
2. 🔴 **Next.js 16.1.6 are o vulnerabilitate critică și mai multe mari** raportate de `npm audit`.
   Reparația e un upgrade minor, la 16.4.0.
3. 🟠 **Fapte contradictorii între pagini.** Balcon la fiecare unitate sau nu, foc de tabără inclus sau
   contra cost, termen de rezervare 3-6 sau 6-8 săptămâni, un preț pe persoană care nu iese din niciun
   tarif. Un motor AI care citește site-ul preia oricare dintre variante.
4. 🟠 **Placeholder vizibil pe `/despre-noi`** (`[ echipa Amonte ]`), interzis explicit de `CLAUDE.md`.
5. 🟠 **Încălcări ale regulilor de conținut** pe pagini indexate: linii de pauză (—, –) pe `/servicii`,
   cuvinte în engleză vizibile („Social proof", „next steps", „events private", „Coffee break", „Lounge").
6. 🟠 **Homepage-ul nu spune unde e în titlu și în H1.** Titlul nu conține „Sibiu", „Făgăraș" sau „Avrig",
   iar H1-ul e un slogan.
7. 🟠 **Paginile de camere sunt subțiri:** în jur de 180 de cuvinte cu tot cu meniu și footer, fără
   suprafață, tip de pat, baie, dotări sau număr de unități.
8. 🟠 **Contrast insuficient** pe culoarea terracotta, folosită pentru text mic, linkuri, banner și butonul
   principal de conversie (3,1 până la 3,7 față de minimul 4,5).

---

# Partea 1. Audit SEO și GEO

GEO (Generative Engine Optimization) înseamnă cât de ușor poate un motor AI (ChatGPT, Perplexity, Google AI
Overviews, Claude) să înțeleagă, să creadă și să citeze site-ul. Contează: textul să fie în HTML, faptele să
fie concrete și consecvente, entitatea să fie clar definită în date structurate.

## 1.1 Ce funcționează deja bine

- **Canonical corect pe toate paginile**, fiecare pe propriul URL, cu `www`. Problema veche (8 pagini
  duplicate ale homepage-ului) e rezolvată.
- **`og:image` prezent pe toate paginile** și `og:url` corect pe toate paginile indexabile.
- **Un singur H1 pe fiecare pagină.** Toate imaginile au `alt`.
- **Textul paginilor e randat pe server**, deci e vizibil fără JavaScript. Doar JSON-LD-ul nu e (vezi 1.2).
- **Redirecturile 301** pentru URL-urile vechi de WordPress funcționează (`/about-us`, `/rooms`, `/contact`
  etc.).
- **NAP consecvent** peste tot unde e vizibil: `Valea Avrigului nr. 642, jud. Sibiu, 555200, România`.
- **Timpii de condus sunt acum consecvenți:** 40 de minute până la Sibiu peste tot. Contradicția 30/40 din
  auditul din septembrie nu mai există.
- **`robots.txt` permite tot**, inclusiv boții AI, și indică sitemap-ul.
- **Bloc de răspuns direct** pe `/despre-noi`, plus FAQ-uri vizibile identice cu cele din schema.
- **Recenziile nu sunt marcate ca `Review`/`AggregateRating`**, ceea ce e corect (Google interzice recenziile
  „self-serving").
- **Paginile legale sunt `noindex`**, cum spune `CLAUDE.md`.
- Pe mobil, la 375 px, nicio pagină nu are scroll orizontal și nu apar erori JavaScript.

## 1.2 🔴 JSON-LD-ul nu e în HTML

Toate cele patru blocuri sunt randate cu `next/script` (`<Script type="application/ld+json">`):

- `app/(site)/layout.tsx:80` (BedAndBreakfast, pe toate paginile din grup)
- `app/(site)/despre-noi/page.tsx:162` (AboutPage + FAQPage)
- `app/(site)/retreat-corporate/page.tsx:75` (FAQPage)
- `components/Breadcrumbs.tsx:44` (BreadcrumbList)

`next/script` nu scrie un tag `<script type="application/ld+json">` în HTML. Pune conținutul în payload-ul
React (`self.__next_f.push`) și îl injectează în pagină abia după hidratare.

Verificat în Chromium:

| Pagina | JS oprit | JS pornit |
|---|---|---|
| `/` | nimic | BedAndBreakfast |
| `/despre-noi` | nimic | BedAndBreakfast, AboutPage + FAQPage |
| `/retreat-corporate` | nimic | BedAndBreakfast, FAQPage, BreadcrumbList |
| `/evenimente` | nimic | BedAndBreakfast, BreadcrumbList |
| `/camere`, `/galerie`, `/servicii`, camere | nimic | BedAndBreakfast |
| `/rezerva-acum` | nimic | nimic (e în afara grupului `(site)`) |

**Consecință.** Google randează JavaScript, deci probabil vede datele, dar cu întârziere (al doilea val de
indexare). Boții AI (GPTBot, ClaudeBot, PerplexityBot) în general nu execută JavaScript, deci pentru ei site-ul
nu are nicio dată structurată. Asta anulează tot efortul pus în FAQ-uri, NAP și coordonate în schema.

**Reparația** (documentația Next recomandă exact asta): un `<script>` simplu în loc de `<Script>`:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd).replace(/</g, "\\u003c") }}
/>
```

Patru fișiere, conținutul blocurilor rămâne identic. **Atinge blocurile schema.org, deci aștept aprobarea lui
Flo înainte să o fac.**

## 1.3 🟠 Fapte contradictorii

Pentru GEO, astea contează cel mai mult după 1.2: un motor AI citează ce găsește, iar două variante pe același
site scad încrederea în ambele.

| Subiect | Varianta A | Varianta B |
|---|---|---|
| Balcon | „Fiecare unitate are balcon și baie proprie" (`lib/retreat.ts:58`) și „8 camere duble cu balcon și vedere la munte" (`lib/retreat.ts:34`) | Un tip de cameră se numește „Cameră cu Balcon", cu „vedere la pădure"; „Cameră Dublă Deluxe" nu menționează balcon |
| Foc de tabără | Inclus în tarif (`termeni-si-conditii/page.tsx:150`) | „disponibil pentru grupuri, contra cost" (`lib/content.ts:303`, pe `/servicii`) |
| Șemineu | „foișor cu șemineu" (Termeni §9) | „living cu șemineu" peste tot în rest |
| Când rezervi | Banner pe `/retreat-corporate`: toamna, „cu 3-6 săptămâni înainte" (`AvailabilityBanner.tsx:22`) | FAQ pe aceeași pagină: pentru septembrie și octombrie, „6 până la 8 săptămâni" (`lib/retreat.ts:299`) |
| Preț pe persoană | „Cazare de la 225 lei / persoană pe noapte" (`camere/tarife/page.tsx:60`) | Din tarifele afișate ies 200 (studio 800/4), 275, 300 sau 325. 225 nu iese din niciunul |
| Mic dejun la studio | „micul dejun este inclus în tarif" (`/despre-noi`) | Lista de dotări a studioului nu îl menționează, celelalte trei camere da |
| Parcare | „Parcare gratuită" | „parcare privată" / „Parcare la proprietate, interioară și exterioară" |
| Rating | Comentariul din cod: 4,9 din 77 recenzii (`lib/content.ts:427`) | Afișat: 4,9 din 114 recenzii |

Toate cer răspunsul proprietarului, vezi întrebările de la final.

## 1.4 🟠 Homepage: titlu, H1, descriere

| | Acum | Problemă |
|---|---|---|
| Titlu (54) | Pensiunea Amonte - Pensiune montană în Valea Avrigului | Lipsesc Sibiu, Făgăraș, jacuzzi. „Valea Avrigului" e căutat rar comparativ cu „Sibiu" |
| H1 | Locul unde liniștea îți încarcă sufletul | Slogan, fără niciun termen de căutare sau loc |
| Descriere (172) | … | Trunchiată de Google în jur de 155-160 de caractere |

Propunere de titlu: `Pensiunea Amonte, Valea Avrigului | Cazare la munte lângă Sibiu, cu jacuzzi și saună`.
H1-ul poate rămâne sloganul dacă primul paragraf din hero devine o propoziție factuală (ce, unde, câte locuri),
ca blocul de răspuns direct de pe `/despre-noi`.

## 1.5 Tabel pe pagini

Cuvinte = text vizibil total, inclusiv meniu, banner și footer (aproximativ 150 de cuvinte comune).

| Pagina | Titlu | Descriere | H1 | Cuvinte | Problema principală |
|---|---|---|---|---|---|
| `/` | 54 | 🟡 172 | slogan | 2202 | Titlu și H1 fără loc (1.4) |
| `/camere` | 25 | 140 | Camerele noastre | 247 | Descrierea numește 2 din 4 tipuri de cameră |
| `/camere/tarife` | 32 | 🟡 169 | Tarife | 199 | „225 lei/persoană" neverificabil; descrierea numește doar 2 camere |
| `/camere/camera-dubla-deluxe` | 38 | 106 | ✓ | 179 | Subțire (1.6) |
| `/camere/camera-dubla-vedere-munte` | 50 | 108 | ✓ | 185 | Subțire; `og:image` portret |
| `/camere/studio-de-familie` | 36 | 🟡 64 | ✓ | 177 | Descriere de 64 de caractere, fără loc; `og:image` de 944 KB |
| `/camere/camera-cu-balcon` | 35 | 108 | ✓ | 178 | Subțire |
| `/servicii` | 40 | 🟡 183 | ✓ | 401 | Linii de pauză în 5 locuri (2.2) |
| `/activitati-in-zona` | 37 | 🟡 171 | ✓ | 243 | Distanțe vagi: „în apropiere" de 5 ori |
| `/despre-noi` | 🟡 84 | 🟡 169 | ✓ | 1359 | Titlu cu numele de două ori; placeholder vizibil |
| `/galerie` | 26 | 129 | Momente de la Amonte | 173 | Zero text, H1 fără cuvânt-cheie |
| `/rezerva-acum` | 31 | 151 | ✓ | 216 | Fără JSON-LD deloc (în afara grupului `(site)`) |
| `/evenimente` | 52 | 🟡 171 | ✓ | 1051 | „Social proof" vizibil |
| `/retreat-corporate` | 🟡 72 | 146 | ✓ | 2181 | Titlu trunchiat posibil; „Social proof", „next steps" |
| Pagini legale | ✓ | ✓ | ✓ | | `og:url` și `og:title` ale homepage-ului (nu folosesc `pageMeta()`) |

## 1.6 🟠 Paginile de camere

Sunt paginile la care răspunde un motor AI când cineva întreabă „ce camere are Pensiunea Amonte" sau „are
studio pentru 4 persoane?". Acum au: nume, 2 propoziții, 4-6 dotări, preț. Lipsesc:

- suprafața în m², tipul și mărimea patului, baie cu duș sau cadă;
- dotări uzuale: aer condiționat, TV, frigider, uscător de păr, seif;
- **câte unități din fiecare tip** există (8 camere duble împărțite cum, între Deluxe, Vedere munte și Balcon?);
- etaj, acces fără trepte, pat suplimentar sau pătuț pentru copii;
- breadcrumb (`Acasă › Camere › Studio de familie`) și date structurate pentru cameră (`HotelRoom` cu
  `occupancy`, `bed`, `amenityFeature`).

Descrierile meta (`desc`) sunt generice și nu conțin locul. Exemplu pentru studio: „Studio de familie pentru
4 persoane la Pensiunea Amonte, Valea Avrigului, lângă Sibiu: pat matrimonial, canapea extensibilă, mic dejun
inclus."

## 1.7 🟡 Entitate și date structurate (după ce 1.2 e reparat)

Toate punctele de mai jos ating schema, deci sunt propuneri pentru Flo, nu modificări.

- **Nu există entitățile `WebSite` și `Organization`.** `AboutPage` trimite la `#website`
  (`despre-noi/page.tsx:87`), care nu e definit nicăieri: referință moartă. Operatorul (Hostillo S.R.L., CUI
  54352472) apare doar în text, nu ca entitate legată de pensiune.
- **`sameAs` conține parametri de tracking:** `?igsh=…` la Instagram, `?_r=1&_t=…` la TikTok,
  `?trk=affiliated-pages` la LinkedIn (`lib/content.ts:38-41`). Pentru recunoașterea entității trebuie URL-urile
  curate ale profilurilor.
- **`BedAndBreakfast` ar putea primi:** `numberOfRooms` (10), `description`, `logo`, `paymentAccepted`
  (Termeni §3.4: cash și card), `availableLanguage`, `smokingAllowed: false`, `parentOrganization`.
  Fără `starRating`: regula din `CLAUDE.md` interzice orice clasificare până la certificatul ANT.
- **`/activitati-in-zona`** ar putea avea o listă `ItemList` de `TouristAttraction`, odată ce distanțele sunt
  confirmate.
- **BreadcrumbList** există doar pe `/evenimente` și `/retreat-corporate`.
- `/rezerva-acum` nu are niciun bloc JSON-LD, pentru că trăiește în afara grupului `(site)`.

## 1.8 🟡 Imaginile de share (`og:image`)

Conversia trece prin WhatsApp, iar pagina B2B primește trafic din LinkedIn, deci preview-ul contează.

| Pagina | Imagine | Dimensiuni | Greutate |
|---|---|---|---|
| implicit | `og-amonte.jpg` | 1200x630 ✓ | 235 KB ✓ |
| `/retreat-corporate`, `/evenimente` | `exterior-pensiune.jpeg` | 2268x2338, aproape pătrat | 397 KB |
| `/camere/studio-de-familie` | `apartament/pat_dormitor.JPG` | 2560x1920 | 944 KB |
| `/camere/camera-dubla-vedere-munte` | `poza-pat-si-camera.jpeg` | 1440x2560, portret | 402 KB |

WhatsApp nu afișează adesea preview-ul pentru imagini mai mari de aproximativ 300 KB, iar LinkedIn taie
imaginile pătrate și portret. Recomandare: câte o variantă 1200x630, sub 300 KB, pentru fiecare pagină care
are imagine proprie.

## 1.9 🟡 Recenziile

- **Datele sunt relative și înghețate:** „acum o lună", „acum 10 luni". Au fost copiate la o dată anume și
  îmbătrânesc fără să se schimbe. `CLAUDE.md` cere recenzii „cu datele lor reale": lună și an absolute
  („septembrie 2026").
- **Fiecare recenzie apare de două ori în HTML** (`ReviewsCarousel.tsx:22` dublează lista pentru bucla
  infinită). Crawlerele și cititoarele de ecran văd 24 de recenzii în loc de 12. A doua copie ar trebui
  ascunsă cu `aria-hidden` și `inert`.

## 1.10 🟡 Conținut subțire și vag

- **`/galerie`**: niciun paragraf. Două-trei propoziții despre ce se vede (camere, spa, terasă, priveliștea
  spre Făgăraș) și un H1 care conține „Pensiunea Amonte" ar ajuta.
- **`/activitati-in-zona`**: „în apropiere" apare de 5 ori, plus „sezonier" și „în zonă". Pentru întrebări de
  tipul „ce poți face lângă Avrig" un motor AI preferă distanțe concrete în km sau minute. Regula „fără cifre
  inventate" se aplică, deci trebuie confirmate de proprietar.
- **`/despre-noi`** are două TODO-uri care sunt exact semnale de încredere: din ce an funcționează pensiunea și
  ce include pachetul de evenimente (`despre-noi/page.tsx:200`, `:328`).

## 1.11 ⚪ Mărunte

- `app/sitemap.ts:21`: `lastModified` e momentul build-ului, identic pentru toate URL-urile. Google ignoră un
  `lastmod` care se schimbă la fiecare deploy. Mai bine o dată reală per pagină sau deloc.
- Nu există `/llms.txt`. Valoare mică, dar costă 10 minute: un rezumat cu faptele de bază și linkurile
  principale.
- Pagina 404 emite simultan `robots: noindex` și `googlebot: index, follow`. Fără efect practic (statusul e
  404), dar contradictoriu.
- „team building" (3 apariții) și „teambuilding" (9). Forma folosită în căutări e „teambuilding".
- `ConsentMap.tsx:8` caută pe hartă „Pensiunea Amonte, Avrig, Romania". Nu e vizibil, dar coordonatele sau
  place_id-ul ar fi mai precise.

---

# Partea 2. Audit complet

## 2.1 Securitate și dependențe

🔴 **`next@16.1.6`, fixat exact în `package.json`.** `npm audit --omit=dev` raportează 8 vulnerabilități:
1 critică, 5 mari, 2 moderate. Cea critică este Next.js însuși, cu peste 30 de advisory-uri, printre care XSS
în App Router, cache poisoning pe paginile SSG/ISR și mai multe probleme în Image Optimization (folosit aici
prin `next/image`). O parte vizează self-hosting, middleware sau Server Actions, pe care site-ul nu le
folosește, dar nu toate. **Reparația: `next@16.4.0` și `eslint-config-next` la aceeași versiune**, upgrade
minor. Restul (postcss, sharp, nanoid, brace-expansion, source-map-js, qs) se rezolvă prin același upgrade
sau prin `npm audit fix`.

Restul e în regulă:

- Headere de securitate bune: `nosniff`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`, HSTS.
- ⚪ CSP e încă în `Report-Only`. Comentariul din `next.config.ts` spune să fie trecut pe enforcing după câteva
  zile de trafic real. Merită verificat dacă rapoartele din consolă s-au liniștit.
- ⚪ `X-Powered-By: Next.js` se poate opri cu `poweredByHeader: false`.
- `/api/calendar` e corect: scope read-only, cache de 5 minute, semnalează `stale` când nu poate citi, nu
  loghează credențialele.

## 2.2 Regulile de conținut din `CLAUDE.md`

**Linii de pauză (—, –) în textul nostru.** Vizibile pe pagini:

| Unde | Text |
|---|---|
| `/servicii` (`lib/content.ts:268`) | „Zona SPA — jacuzzi & saună" |
| `/servicii` (`lib/content.ts:270`) | „Saună: 2–3 sesiuni pe zi" |
| `/servicii` (`lib/content.ts:282`) | „Cină la cerere — disponibilă în weekend, meniu restrâns de 2–3 preparate" |
| `/servicii` (`lib/content.ts:303`) | „Foc de tabără — disponibil pentru grupuri, contra cost" |
| `/rezerva-acum`, când calendarul nu se încarcă (`BookingCalendar.tsx:275`) | „orientative — te rugăm să confirmi" |
| Termeni §5 și §7.3 | „din partea noastră — locul tău", „disponibilitate — scrie-ne", „22:00–08:00" |
| Antetul celor 3 pagini legale | „Pensiunea Amonte – operată de Hostillo S.R.L." |
| Politica de confidențialitate | „cardului — acestea", „Pynbooking – PMS" |

Și în textul pentru cititoare de ecran: etichetele lightbox-urilor (`RoomDetailsClient.tsx:143`,
`GalleryGrid.tsx:57`, `ServicesGridClient.tsx:58`), plus `priceRange: "550–800 RON"` în JSON-LD.

**Cuvinte în engleză în textul vizibil:**

| Unde | Text |
|---|---|
| `/evenimente:181`, `/retreat-corporate:395` | eyebrow „Social proof" |
| `/retreat-corporate` (`lib/retreat.ts:182`) | „Decizii și next steps" |
| `/despre-noi:183` | „retreaturi și events private" |
| `/retreat-corporate` (`FnbSection.tsx:35`) | „Coffee break pe toată durata șederii" |
| homepage (`page.tsx:129`) | `alt="Bar & Lounge"` |
| `/despre-noi:113` | „Relaxare & wellness" |
| `/despre-noi:31`, `:129` | „Bernese Mountain Dog", în timp ce restul site-ului spune „ciobănescul de Berna" |

Citatul lui Dan Velcu („Bernese Mountain Dog-ul") e o recenzie verbatim și rămâne.

**Placeholder vizibil.** `/despre-noi:262` randează `PlaceholderImage` fără `src`, adică o cutie cu dungi și
eticheta `[ echipa Amonte ]`. Soluția din `CLAUDE.md`: secțiunea fără poză până apare fotografia, ca la
`LEISURE`.

**Respectate:** zero apariții „piscină"; malul râului e „peste drum" și e declinat explicit în Termeni; nicio
clasificare cu stele sau margarete pentru pensiune; „foc de tabără", nu „firepit"; formatul NAP corect.

**De lămurit:**

- **Prețuri publicate.** `CLAUDE.md` spune „No published prices", în contextul tarifelor de grup. Tarifele
  camerelor (550-800 lei) sunt însă afișate pe homepage, `/camere`, `/camere/tarife`, pe fiecare cameră și în
  JSON-LD. Presupun că e intenționat pentru cazarea individuală, dar trebuie confirmat.
- **Bannerul permanent „Ultimele date libere pentru retreaturi de echipă"** apare pe toate paginile, tot
  timpul. Dacă nu e adevărat în orice moment, e o afirmație de raritate falsă: nu se potrivește cu registrul
  factual cerut și poate fi o practică comercială înșelătoare.

## 2.3 Convențiile de cod din `CLAUDE.md`

**Conținut în JSX** (regula: tot copy-ul în `lib/content.ts` sau `lib/retreat.ts`):

- `/despre-noi`: cele 14 FAQ-uri, `FEATURES`, `FACILITIES` și lista de locații stau în pagină.
- `FnbSection.tsx:33-37`: lista de mese.
- `/evenimente`: `CARDS`.
- `/camere/tarife:60`: paragraful cu „225 lei".
- `RoomDetailsClient.tsx:101`: „Zonă de relaxare (jacuzzi & saună) la cerere."

**NAP și fapte duplicate de mână** (regula: o singură sursă, `CONTACT`):

- Telefonul scris de mână în FAQ-ul „Cum rezerv?" (`despre-noi/page.tsx:55`) și în `BookingCalendar.tsx:327`.
- Adresa scrisă pe trei rânduri de mână (`despre-noi/page.tsx:349-351`) și `streetAddress` scris de mână în
  JSON-LD (`(site)/layout.tsx:49`).
- Emailul scris de mână de 3 ori în Termeni.
- **Politica de anulare e copiată de mână în Termeni §5**, în loc să citească `CANCELLATION`. A divergat deja
  (punctuația diferă). Dacă se schimbă termenul de 7 sau 28 de zile, Termenii rămân în urmă.
- „40 de minute" e scris separat în 13 locuri, deși `DRIVE_SIBIU` există în `lib/retreat.ts`. Unul are și o
  greșeală de gramatică: titlul „40 minute de Sibiu" (`despre-noi/page.tsx:133`), corect „40 de minute".

**Altele:**

- Două flag-uri care se suprapun: `SHOW_FB_AND_EVENTS` (constantă în `lib/site.ts`) și `SHOW_FNB` (derivat din
  `VERCEL_ENV` în `lib/flags.ts`).
- Paginile legale nu folosesc `pageMeta()`, deci moștenesc `og:url` și `og:title` de la homepage.
- `btnSmall` din `lib/ui.ts` nu e folosit nicăieri.

**Documentație și comentarii învechite.** Riscul real e că induc în eroare următoarea persoană sau următorul
agent:

- `README.md` e textul generic de la `create-next-app`.
- `.github/copilot-instructions.md` descrie fonturile Geist și `app/page.tsx`. Ambele sunt greșite.
- `docs/audit-retreat-corporate.md` descrie o stare care nu mai există: fără redirecturi, flag-uri hardcodate,
  30 vs 40 de minute. Merită o notă „depășit" în antet.
- `lib/site.ts:10`, `app/robots.ts:5`, `app/sitemap.ts:5`, `app/layout.tsx:44` vorbesc încă despre staging
  `noindex` și migrare.
- `lib/content.ts:2` spune „there is no custom form"; formularul de ofertă există.
- `lib/content.ts:232` spune că mesele sunt „active pe staging".
- `lib/retreat.ts:1-4` spune că intrările fără poză apar ca placeholder; nu mai e adevărat.
- Numele pachetului e încă `florinluca-site`.

## 2.4 Accesibilitate

🟠 **Contrast.** Terracotta `#a9743f` e folosită pentru text mic, linkuri, eyebrow-uri, banner și butonul
principal:

| Combinație | Contrast | Minim AA |
|---|---|---|
| terracotta pe cream | 3,42 | 4,5 |
| terracotta pe sand | 3,13 | 4,5 |
| text paper pe buton terracotta | 3,49 | 4,5 |
| text banner pe terracotta | 3,66 | 4,5 |

Lighthouse a semnalat 18 elemente pe homepage și 42 pe `/retreat-corporate`. O nuanță ca `#8a5a2b` trece
peste tot (5,0 pe cream, 4,6 pe sand, 5,1 ca fundal de buton). E o decizie de brand: se poate păstra
`#a9743f` pentru suprafețe mari și folosi nuanța închisă doar pentru text și butoane.

🟡 **Caruselul de recenzii:**

- se derulează singur din JavaScript și ignoră `prefers-reduced-motion`; regula din `globals.css` oprește doar
  animațiile CSS;
- nu are buton de pauză pentru tastatură și touch (WCAG 2.2.2);
- citește fiecare recenzie de două ori;
- bucla `requestAnimationFrame` rulează permanent, chiar și când caruselul nu e pe ecran.

⚪ **Mărunte:**

- Bannerul de cookie-uri folosește `h4` fără `h3` înainte.
- Linkul logo-ului are `aria-label="Pensiunea Amonte - acasă"`, care nu conține textul vizibil „Pensiune
  montană" (WCAG 2.5.3).
- `RoomCard` dă același `alt` ambelor poze.

**Bine făcut:** skip link, focus vizibil, lightbox cu focus trap și Escape, formular cu etichete și erori
anunțate, `lang="ro"`.

## 2.5 Performanță

Lighthouse pe mobil, local, cu throttling simulat și fără CDN. Valorile sunt orientative:

| Pagina | Perf | A11y | Best practices | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| `/` | 73 | 94 | 96 | 100 | 5,2 s | 0 | 350 ms |
| `/retreat-corporate` | 73 | 95 | 96 | 100 | 5,4 s | 0 | 320 ms |
| `/camere/studio-de-familie` | 79 | 94 | 96 | 100 | 5,3 s | 0 | 130 ms |
| `/galerie` | 90 | 94 | 96 | 100 | 3,5 s | 0 | 80 ms |

CLS 0 peste tot e foarte bine. LCP-ul ține de imaginea hero, iar TBT-ul de GTM și de bucla caruselului de pe
paginile cu recenzii. Înainte de orice optimizare, merită comparate cu datele reale din Vercel Speed Insights
sau Search Console (Core Web Vitals). Erorile din consolă apărute local (GTM blocat, `/_vercel/insights`
absent) sunt artefacte ale mediului de test, nu probleme reale.

## 2.6 Tracking și consimțământ

Implementarea respectă `CLAUDE.md`: `whatsapp_click` pleacă doar din `pushWhatsAppClick()`, cu setul complet
de chei și `page_source` citit la click; `offer_request_submit` trimite exact cheile din tabel; footerul trimite
`footer`. Consent Mode v2 pornește pe `denied`, harta Google e blocată până la acord.

De verificat în GTM, fără modificări în cod (zonă protejată):

- **Chei care trec de la un eveniment la altul.** `whatsapp_click` nu golește `group_size`, `nights`,
  `channel`, iar `offer_request_submit` nu golește `event_label`, `event_category`. Contează doar dacă un tag
  al unui eveniment citește cheile celuilalt.
- ⚪ Iframe-ul `noscript` al GTM se încarcă pentru vizitatorii fără JavaScript, unde Consent Mode nu poate
  acționa.

Vercel Analytics se încarcă fără consimțământ, dar nu folosește cookie-uri și e menționat în politica de
cookie-uri. E în regulă.

## 2.7 Verificări tehnice

| Verificare | Rezultat |
|---|---|
| `tsc --noEmit` | curat |
| `npm run lint` | curat |
| `npm run build` | reușit, 25 de rute statice |
| Erori JavaScript în pagină | niciuna |
| Scroll orizontal la 375 px | niciunul, pe 12 pagini |
| Imagini nefolosite sau duplicate în `public/` | niciuna |

---

# Plan de lucru propus

**P0, imediat**

1. JSON-LD ca `<script>` simplu în cele 4 locuri (1.2). *Cere aprobarea lui Flo.*
2. `next` la 16.4.0 (2.1).
3. Scos placeholder-ul de pe `/despre-noi` (2.2).
4. Liniile de pauză și cuvintele în engleză (2.2). Doar copy, fără risc.
5. Răspunsurile la contradicțiile din 1.3, apoi corectarea lor.

**P1, în 1-2 săptămâni**

6. Titlu, H1 și descriere pentru homepage. Descrieri meta sub 160 de caractere. Titlul `/despre-noi`.
7. Paginile de camere: fapte, descrieri, breadcrumb (1.6).
8. Imagini `og:image` 1200x630, sub 300 KB (1.8).
9. Recenzii cu date absolute; carusel cu copia ascunsă și reduced motion (1.9, 2.4).
10. Nuanța de contrast pentru text și butoane (2.4). *Decizie de brand.*

**P2, când e timp**

11. `WebSite` + `Organization`, `sameAs` curate, câmpuri noi în `BedAndBreakfast` (1.7). *Cere aprobarea lui Flo.*
12. Distanțe confirmate pe `/activitati-in-zona` și listă de atracții în schema.
13. `lastmod` real în sitemap, `/llms.txt`.
14. Curățenie: copy mutat din JSX, NAP dintr-o singură sursă, Termeni §5 din `CANCELLATION`, comentarii și
    documentație la zi, paginile legale pe `pageMeta()`.

---

# Întrebări pentru Flo

1. **Aprobi mutarea JSON-LD pe `<script>` simplu?** Conținutul blocurilor rămâne identic, se schimbă doar
   felul în care ajung în HTML.
2. **Balcon:** are fiecare unitate balcon? Ce priveliște are fiecare tip? Câte unități sunt din fiecare tip
   (Deluxe, Vedere munte, Balcon)?
3. **Focul de tabără** e inclus în tarif sau contra cost?
4. **Există un foișor cu șemineu**, separat de living?
5. **Termen de rezervare pentru grupuri toamna:** 3-6 sau 6-8 săptămâni?
6. **De unde vine „de la 225 lei / persoană"?** Din tarifele afișate nu iese.
7. **Studioul de familie** are mic dejun inclus?
8. **Tarifele camerelor** rămân publice? `CLAUDE.md` spune „No published prices".
9. **Bannerul „Ultimele date libere"** e adevărat acum? Îl păstrăm permanent?
10. **Distanțele pentru atracții** marcate „în apropiere": ai cifre confirmate?
11. **Din ce an funcționează pensiunea** sub Hostillo (TODO-ul de pe `/despre-noi`)?
12. **Live:** în Vercel, la Firewall, e activă blocarea boților AI? Dacă da, pentru GEO trebuie dezactivată.
