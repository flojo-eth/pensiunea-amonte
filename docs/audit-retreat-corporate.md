# Audit `/retreat-corporate` — Faza 1

Data: 14 septembrie 2026. Nicio modificare aplicată, doar constatări.

---

## Sumar: ce trebuie să știi înainte de Faza 2

Cinci lucruri schimbă planul din brief. Le pun primele, restul raportului le detaliază.

1. **Premisa despre `/about-us/` și `/rooms/` e parțial greșită.** Nu afișează conținut vechi de WordPress. Pe producție dau **404**. Ce ai văzut e un snippet învechit rămas în indexul Google, nu o pagină vie. Redirecturile rămân necesare, dar din alt motiv decât cel presupus.
2. **Contradicție de distanță în cod.** Restul site-ului spune constant *30 de minute de Sibiu*. Pagina de retreat spune *40 de minute*, în 5 locuri. Una dintre ele e greșită și trebuie să-mi spui care.
3. **Lista de cuvinte pentru grep-ul din 2.5 produce fals-pozitive garantate.** „masă" apare în *masă de ping-pong*, facilitate legitimă. Detaliez o variantă corectată mai jos.
4. **Nu există infrastructură de formular.** Zero route handlers în afară de `/api/calendar`, zero serviciu de email, zero componentă de formular. Varianta WhatsApp-first din brief e singura care nu adaugă dependențe.
5. **Poza cea mai importantă lipsește.** Nu există nicio fotografie cu oameni și niciuna cu sala în configurație de lucru. Singura poză de sală e în format portret, nepotrivită pentru sloturile landscape.

---

## 1. Starea rutei `/retreat-corporate`

| Verificare | Rezultat |
|---|---|
| Există în cod | Da, `app/(site)/retreat-corporate/page.tsx`, 19.543 octeți |
| Deploy-uită pe producție | Da, HTTP 200 |
| În sitemap | Da, `app/sitemap.ts:17` |
| Indexabilă | Da, `INDEXABLE = true`, fără `noindex` |

**Linkuri interne către pagină: zero.** Confirmat, exact cum ai observat extern.

- `NAV_LINKS` (`lib/content.ts`) are 5 intrări: Despre, Camere, Galerie, Împrejurimi, Servicii. Nu apare.
- Footerul folosește același `NAV_LINKS`, deci nici acolo.
- Homepage, cardul „Grup sau echipă": **confirmat**, `ctaHref: "whatsapp"` (`lib/content.ts`), butonul „Cere ofertă pentru grup" merge direct pe `wa.me`, nu pe pagină.
- `/servicii` nu o linkează.

Singura referință e în `AvailabilityBanner`, care schimbă mesajul bannerului *când ești deja* pe rută. Nu aduce trafic.

**Consecință:** pagina primește trafic doar din Ads sau din indexare directă. Nu are niciun link intern care să-i transmită autoritate.

---

## 2. Structura actuală, secțiune cu secțiune

12 secțiuni. Copy-ul a fost rescris o dată deja, în registru factual.

| # | Secțiune | H2 actual | Soarta propusă în v2 |
|---|---|---|---|
| 1 | Hero | H1: „Toată pensiunea. Doar echipa voastră." | Rescris (S1) |
| 2 | Bara de încredere | 4 celule | Extins la 6 (S2) |
| 3 | Poziționare | „Un offsite bun are nevoie de trei lucruri" | Păstrat, mutat mai jos |
| 4 | Spațiile | „Ce aveți la dispoziție" | Spart în S4 + S5 |
| 5 | Agendă | „Două zile la Amonte, în practică" | Păstrat, devine S7 |
| 6 | F&B | gated `SHOW_FNB` | Păstrat (S6) |
| 7 | Cazarea | „Toată lumea doarme la fața locului" | **Rescris ca tabel** (S3) |
| 8 | Locație | „Aproape de Sibiu, departe de tot restul" | Păstrat (S13) |
| 9 | Social proof | ascunsă, zero testimoniale reale | **Înlocuită** cu recenzii Google reale (S10) |
| 10 | Proces | „Trei pași până la rezervare" | Extins la 4 pași (S9) |
| 11 | FAQ | 6 întrebări | Extins la 12 (S11) |
| 12 | CTA final | „Verifică perioada înainte să dispară" | Rescris (S14) |

**Lipsesc complet față de briefingul v2:** tabelul de configurație a cazării, secțiunea de prețuri, formularul de cerere de ofertă, bara sticky pe mobil, recenziile reale.

**Ce se poate salva ca atare:** structura de agendă (are deja mecanismul `fnb: true` care filtrează itemii de masă din date, nu din CSS), cardurile de poziționare, blocul de locație.

Copy-ul actual e deja în registrul cerut, fără em dash, fără „piscină", cu formularea non-posesivă despre malul râului. Regulile din 2.1 sunt deja respectate în tot ce există acum.

---

## 3. Flag-uri

| Constantă | Fișier | Valoare | Scop |
|---|---|---|---|
| `SHOW_FNB` | `lib/retreat.ts:11` | `false` | Doar pagina de retreat |
| `SHOW_FB_AND_EVENTS` | `lib/site.ts:14` | **`true`** | Tot restul site-ului |
| `INDEXABLE` | `lib/site.ts:11` | `true` | robots + metadata |
| `SITE_URL` | `lib/site.ts:8` | `https://www.pensiunea-amonte.ro` | canonical, sitemap, JSON-LD |

**Nu există `SHOW_PRICING`.** Trebuie creat.

**Nu există distincție staging/producție pentru flag-uri.** Toate sunt constante hardcodate, aceleași pe orice deploy. Briefingul cere `SHOW_FNB = true` pe staging și `false` pe producție. Asta necesită o variabilă de mediu sau o derivare din `VERCEL_ENV`. Am nevoie de decizia ta, vezi întrebarea 3.

### Problema de fond a celor două flag-uri

`SHOW_FB_AND_EVENTS = true` face ca **restul site-ului să promoveze deschis mesele**, iar `SHOW_FNB = false` le ascunde pe pagina de retreat. Motivul invocat pentru al doilea, avizele DSP și ANSVSA, se aplică întregii firme, nu unei singure pagini.

Concret, azi pe producție:

- `/despre-noi` afișează „Mic dejun inclus" în lista de facilități și are întrebări de FAQ despre mese și bar.
- `AMENITIES` conține „Mic dejun" și „Cină la cerere", vizibile pe `/servicii` și pe homepage.
- **JSON-LD-ul `LodgingBusiness` emis pe fiecare pagină din grupul `(site)`, inclusiv pe `/retreat-corporate`, declară `Mic dejun` și `Cină la cerere` ca `amenityFeature`.**

Ultimul punct e cel care contează: copy-ul vizibil al paginii de retreat e curat, dar datele structurate citite de Google spun altceva, chiar pe aceeași pagină. Vezi întrebarea 1.

---

## 4. Tracking

- `lib/gtm.ts` expune `pushDataLayer(event)`, singurul punct de intrare. Fără date personale.
- `GTM_ID = "GTM-NTF57TM9"` (`lib/site.ts:23`), containerul din brief.
- `WhatsAppButton` acceptă deja un prop opțional `pageSource` și trimite:

```js
{ event: "whatsapp_click", page_source: "retreat-corporate" }
```

**Ce există:** `page_source` funcționează, verificat live pe producție, două CTA-uri pe pagină îl trimit corect.

**Ce lipsește:** `cta_position` (nu există deloc), `offer_request_submit` (nu există formular), `section_view` pentru prețuri (nu există secțiune).

`section_view` cu deduplicare pe sesiune cere `IntersectionObserver` plus `sessionStorage`. E fezabil, aproximativ 30 de linii într-un hook. Îl implementez dacă vrei, dar semnalez că valoarea lui analitică e mică față de `offer_request_submit`.

---

## 5. Redirecturi: premisa din brief e greșită

`next.config.ts` **nu conține niciun redirect**. Conține doar headere de securitate, CSP în Report-Only și configurația de imagini.

Testat live pe producție:

| URL | Cod | Destinație |
|---|---|---|
| `/about-us/` | 308 | `/about-us` |
| `/about-us` | **404** | — |
| `/rooms/` | 308 | `/rooms` |
| `/rooms` | **404** | — |
| `/contact/`, `/gallery/`, `/services/` | 308 | tot spre 404 |

Cele 308 sunt normalizarea automată de trailing slash din Next, nu redirecturi configurate de noi. Capătul lanțului e 404.

**Deci:** paginile vechi nu mai există și nu mai afișează nimic. Textul despre restaurant și „12 camere, 2 apartamente" pe care le-ai văzut sunt **snippet-uri vechi din indexul Google**, nu conținut viu. Google nu a recrawlat încă acele URL-uri, sau le-a recrawlat și le ține în index ca soft-404.

Redirecturile rămân necesare, dar pentru alt motiv: recuperezi autoritatea acumulată de URL-urile vechi și oprești 404-urile pentru cine dă click pe rezultatele vechi din Google. Nu repari conținut greșit.

**Nu am putut inventaria alte slug-uri vechi.** Nu există niciun fișier de migrare, sitemap vechi sau export WordPress în proiect. Grep-ul după `about-us`, `rooms`, `wp-content`, `wordpress` returnează zero rezultate. Ca să acopăr complet, am nevoie de lista din Search Console, vezi întrebarea 4.

---

## 6. Imagini disponibile

| Fișier | KB | Dimensiuni | Orientare |
|---|---|---|---|
| `servicii-facilitati/sala-pentru-grupuri.jpg` | 310 | 1920x2560 | **portret** |
| `servicii-facilitati/living-semineu.jpeg` | 329 | 2560x1707 | landscape |
| `semineu.jpeg` | 329 | 2560x1707 | landscape |
| `interior-living.jpeg` | 283 | 2560x1707 | landscape |
| `salon.jpeg` | 312 | 2560x1707 | landscape |
| `priveliste-fagaras.jpg` | 932 | 2560x1920 | landscape |
| `exterior-pensiune.jpeg` | 397 | 2268x2338 | aproape pătrat |
| `poza_hero.jpg` | 520 | 1600x2395 | portret |
| `jacuzzi-sauna.jpeg` | 129 | 960x1280 | portret |
| `firepit.jpeg` | 208 | 1280x960 | landscape |
| `servicii-facilitati/teren-fotbal.jpeg` | 214 | 1240x2204 | portret |
| `servicii-facilitati/ping-pong.jpeg` | 239 | 1172x1576 | portret |
| `servicii-facilitati/rezervare-integrala.jpeg` | 283 | 1240x1653 | portret |
| `camera-balcon/poza-pat.jpeg` | 292 | 1920x1080 | landscape |
| `camera-dubla-folder/poza-pat-si-camera.jpeg` | 402 | 1440x2560 | portret |
| `apartament/pat_dormitor.JPG` | 944 | 2560x1920 | landscape |
| `og-amonte.jpg` | 235 | 1200x630 | OG, gata |

**`semineu.jpeg` și `servicii-facilitati/living-semineu.jpeg` sunt identice byte cu byte.** Duplicat de 329 KB.

### Ce lipsește față de sloturile din brief

| Slot | Situație |
|---|---|
| S1 hero, exterior la ora aurie sau terasă **cu grupul** | Există exterior, dar **fără oameni**. Format aproape pătrat, prost pentru hero landscape. |
| S4 sala **în configurație de lucru** | **Critic.** Singura poză de sală e portret și nu arată o masă aranjată pentru ședință. E singura dovadă vizuală că spațiul de lucru există, iar acum nu o avem. |
| S5 firepit **cu oameni** | Există firepit gol. |
| S3 studio de familie | Există `apartament/pat_dormitor.JPG`, dar nu arată configurația de 4 locuri. |

**Nu există nicio fotografie cu oameni în cadru, nicăieri în proiect.** Pentru o pagină care vinde teambuilding, unde managerul decide în 60 de secunde uitându-se la poze, ăsta e cel mai mare gol. Recomand o sesiune foto cu un grup real înainte de a împinge trafic plătit.

---

## 7. Componente reutilizabile

| Componentă | Verdict |
|---|---|
| `ReviewsCarousel` | **Refolosibilă direct.** Primește deja `reviews: Review[]` ca prop, deci filtrarea pe grupuri se face din date, fără să modific componenta. |
| `ConsentMap` | **Refolosibilă direct.** Deja gatată pe consimțământ, cu placeholder și link extern. |
| `WhatsAppButton` | **Refolosibilă**, are deja `pageSource`. Trebuie extinsă cu `cta_position`. |
| `SectionHeading`, `Eyebrow`, `PlaceholderImage` | Refolosibile, sunt baza vizuală a paginii actuale. |
| `Lightbox`, `GalleryGrid` | Refolosibile dacă vrei galerie pe pagină. |
| `BookingCalendar` | **Nu recomand.** E legat de `/api/calendar` și de fluxul leisure pe camere individuale. Un grup întreabă „e liber weekendul X pentru toată pensiunea", altă întrebare. |
| `FnbSection` | Există, gatată corect. Necesită rescriere de conținut pentru S6. |
| `RetreatTestimonials` | **De eliminat.** A fost construită pentru testimoniale placeholder care nu au venit niciodată. `ReviewsCarousel` cu recenzii Google reale o înlocuiește complet. |

### Recenziile de grup confirmate

Toate trei există în `lib/content.ts`, verbatim, cu sursă Google:

- **Adrian Migiu:** „Am venit cu un grup mai mare și am închiriat toată pensiunea, cea mai bună alegere."
- **Dan Velcu:** „Un teambuilding de 2 zile care a semănat mai mult cu o vacanță bine organizată..."
- **Filip Mihaela:** „Locația ideală pentru un teambuilding reușit..."

`RATING_SUMMARY = { value: "5", count: 80 }`, deci cifrele din linia de încredere se pot prelua din sursă, nu hardcodate.

**Atenție:** recenzia lui Dan Velcu conține „Mâncarea a fost foarte bună". Intră sub excepția ta pentru citate verbatim, dar înseamnă că pe pagină va exista un cuvânt despre mâncare chiar cu `SHOW_FNB = false`. Confirmă că e acceptabil.

---

## 8. Problema cu grep-ul din 2.5

Lista de cuvinte, aplicată ca simplu `grep`, dă **fals-pozitive garantate**:

| Cuvânt | Se potrivește greșit în |
|---|---|
| `masă` | **„masă de ping-pong"**, facilitate legitimă din S5 |
| `mese` | substring în „mesele", dar și în alte forme |
| `bar` | substring în „bară", „Barcaciu" dacă apare fără diacritice |
| `cina` | substring în „vecina", „oficina" |

„Masă de ping-pong" e cerut explicit în S5 din briefingul tău, deci grep-ul ar raporta o încălcare pentru un text pe care tu îl vrei acolo.

**Propun în schimb:** grep cu delimitare de cuvânt, plus o listă explicită de excepții permise („masă de ping-pong", „mini fotbal"), plus excluderea blocului de recenzii din HTML înainte de căutare. Raportez rezultatul în forma asta, cu fals-pozitivele separate de încălcările reale.

---

## 9. Formularul din S12: ce e posibil azi

Proiectul **nu are** nicio infrastructură de formular:

- Un singur route handler, `app/api/calendar/route.ts`.
- Zero servicii de email în `package.json`, fără Resend, nodemailer sau SendGrid.
- Singurul formular existent pe site e un link extern către Google Forms (`GOOGLE_FORM_URL`), folosit ca alternativă la WhatsApp pe homepage și `/rezerva-acum`.

Deci:

- **Varianta 1 (WhatsApp cu mesaj precompletat):** fezabilă imediat, zero dependențe, consecventă cu tot site-ul. Recomand.
- **Varianta 2 (mailto):** fezabilă imediat. Limitare de semnalat: `mailto` cu body lung se comportă imprevizibil pe iOS și în unele webmailuri, iar dacă utilizatorul nu are client de mail configurat, butonul pare mort. O păstrez ca secundară, nu ca egală.
- **Varianta 3 (route handler + Resend):** ar fi cea mai fiabilă, dar cere o dependență nouă, o cheie API în Vercel și un domeniu verificat pentru trimitere. **Nu o implementez fără aprobarea ta.** Estimez o oră de lucru, plus configurarea DNS pentru SPF și DKIM, pe care ar trebui s-o faci tu.

Un avantaj real al variantei 3, dacă te interesează: e singura care îți lasă o urmă a cererilor independentă de telefonul cuiva. Cu WhatsApp, dacă Ioana scrie duminică seara și nimeni nu vede mesajul, nu există nimic care să te alerteze.

---

## 10. Întrebări deschise, în ordinea importanței

**1. Contradicția F&B.** Vrei ca `SHOW_FB_AND_EVENTS` să treacă și el pe `false`, adică site-ul să nu mai promoveze mesele nicăieri până la avize? Sau situația actuală e intenționată și `SHOW_FNB` are alt motiv decât cel scris în comentariu? De asta depinde și dacă scot „Mic dejun" și „Cină la cerere" din JSON-LD-ul global.

**2. 30 sau 40 de minute până la Sibiu?** Site-ul spune 30, pagina de retreat spune 40. Îmi trebuie cifra corectă pentru oraș și separat pentru aeroport. Briefingul spune „folosește exact distanța de pe homepage", adică 30, dar atunci trebuie să corectez pagina de retreat în 5 locuri, inclusiv un FAQ.

**3. Staging vs producție pentru flag-uri.** Nu există azi mecanismul. Preferi derivare automată din `VERCEL_ENV` (staging capătă `true` singur) sau o variabilă de mediu explicită pe care o setezi manual în Vercel?

**4. Slug-uri vechi.** Îmi trimiți lista completă din Search Console, secțiunea Pages, filtrată pe 404? Fără ea acopăr doar cele 5 pe care le-am testat.

**5. Datele pe care nu le am.** Toate marcajele din brief îmi lipsesc efectiv: capacitatea sălii în format U și teatru, dotările exacte, viteza WiFi, tariful de închiriere integrală, tariful pentru jacuzzi și saună, orele de check-in și check-out pentru grupuri, numărul de locuri de parcare, distanța până la aeroport și Brașov, configurația paturilor în camerele duble. Le las ca `[COMPLETEAZĂ]` vizibile pe staging, dar pagina nu poate merge pe producție cu ele.

**6. Prețul.** Briefingul propune „de la 5.500 lei pe noapte plus TVA". Nicăieri în proiect nu există un tarif de închiriere integrală, deci nu pot verifica. Confirmi cifra și dacă e cu sau fără TVA?

**7. Recenzia lui Dan Velcu** menționează mâncarea. Rămâne pe pagină sub excepția de citat verbatim?

---

## Ce propun pentru Faza 2, dacă aprobi

Ordinea de lucru, ca să nu se blocheze totul de datele lipsă:

1. Redirecturile 301, independente de restul. Se pot face și livra imediat.
2. Integrarea în navigație, footer, homepage, `/servicii`, `/rezerva-acum`. Independentă de conținut.
3. Restructurarea paginii cu `[COMPLETEAZĂ]` vizibile pe staging.
4. Formularul, varianta WhatsApp plus mailto.
5. Tracking extins, JSON-LD, sitemap.
6. Lighthouse și raportul final.

Aștept răspunsurile la întrebările 1, 2 și 3 înainte să încep. Restul pot fi completate pe parcurs.
