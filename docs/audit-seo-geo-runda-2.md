# Audit SEO / GEO, runda 2: verificarea reparațiilor

Data: 10 octombrie 2026. Cod verificat: `main` la `1127857` (10 commit-uri după auditul din aceeași
dimineață, `docs/audit-seo-geo-complet.md`). Nicio modificare de cod aplicată, doar constatări.

**Metoda e aceeași ca în runda 1:**

- build de producție local (`VERCEL_ENV=production`), servit cu `next start`;
- HTML-ul generat citit pentru toate cele 17 pagini;
- randare în Chromium cu JavaScript pornit și oprit;
- validarea fiecărui bloc JSON-LD;
- scanarea textului vizibil după regulile din `CLAUDE.md`;
- Lighthouse pe mobil pe aceleași 4 pagini;
- verificare la 375 px, `tsc`, `lint`, `npm audit`.

Site-ul live rămâne inaccesibil din mediul cloud (politica de rețea).

**Legendă:** ✅ rezolvat · 🟡 parțial · ❌ rămas · ❔ decizie

---

## Sumar

Din cele 8 probleme principale ale rundei 1, **6 sunt rezolvate complet** și verificate în HTML-ul generat.
Rămân deschise titlul și H1-ul homepage-ului și contrastul culorii terracotta. Paginile de camere sunt
rezolvate doar parțial.

| # | Problema principală din runda 1 | Acum |
|---|---|---|
| 1 | JSON-LD vizibil doar după JavaScript | ✅ Prezent în HTML pe toate paginile din `(site)`, JSON valid, toate `@id`-urile se leagă |
| 2 | Next.js 16.1.6 vulnerabil | ✅ 16.4.0, `npm audit --omit=dev`: **0 vulnerabilități** (înainte 8, una critică) |
| 3 | Fapte contradictorii | ✅ 7 din 8 rezolvate; rămâne doar formularea despre parcare, minoră |
| 4 | Placeholder vizibil pe `/despre-noi` | ✅ Secțiunea apare doar cu text până există poza |
| 5 | Linii de pauză și cuvinte în engleză | ✅ Zero linii de pauză în textul randat. 🟡 Rămân „Coffee break" și „offsite" |
| 6 | Homepage fără loc în titlu și H1 | ❌ Neschimbat |
| 7 | Pagini de camere subțiri | 🟡 Au primit numărul de unități, balconul, micul dejun. Lipsesc suprafața, paturile, dotările |
| 8 | Contrast terracotta | ❌ Neschimbat: 18 elemente pe homepage, 42 pe `/retreat-corporate` |

**Ce trebuie făcut în continuare, în ordine:**

1. Titlul, H1-ul și descrierea homepage-ului.
2. Contrastul.
3. Faptele de pe paginile de camere.
4. Imaginile de share.
5. Datele absolute la recenzii.

Toate sunt detaliate mai jos.

---

## 1. Verificarea punct cu punct

### 1.1 SEO și GEO

| Constatare din runda 1 | Status | Verificat |
|---|---|---|
| JSON-LD injectat după hidratare | ✅ | Cu JS oprit: `Organization + WebSite + BedAndBreakfast` pe toate paginile, plus `AboutPage + FAQPage`, `FAQPage`, `BreadcrumbList` unde trebuie. Un singur bloc de fiecare, fără dubluri după hidratare. `<` e escapat în `components/JsonLd.tsx` |
| Lipsesc `WebSite` și `Organization`, referința `#website` e moartă | ✅ | Graful are acum `#organization` (Hostillo, CUI), `#website`, `#lodging`, legate prin `@id`. Nicio referință nerezolvată pe nicio pagină |
| `sameAs` cu parametri de tracking | ✅ | Toate 4 URL-urile sunt curate |
| Balcon la toate unitățile, contradictoriu | ✅ | Toate cele 4 tipuri au „Balcon privat"; `ROOM_CONFIG` spune „8 camere duble cu balcon" |
| Foc de tabără inclus sau contra cost | ✅ | „Loc amenajat pentru foc de tabără, în aer liber"; Termenii nu îl mai listează |
| „foișor cu șemineu" | ✅ | Înlocuit cu „living cu șemineu" |
| Termen de rezervare 3-6 vs 6-8 săptămâni | ✅ | Bannerul și FAQ-ul spun 3-6 |
| „de la 225 lei / persoană" | ✅ | Eliminat |
| Mic dejun la studio | ✅ | Apare în lista de dotări |
| Comentariul cu 77 de recenzii | ✅ | Trimite acum la `RATING_SUMMARY` |
| Câte unități din fiecare tip | ✅ | Deluxe 2, Vedere munte 4, Balcon 2, Studio 2. Total 10, se potrivește cu restul site-ului |
| TODO: din ce an funcționează | ✅ | „din 2024, iar Hostillo o administrează din mai 2026" |
| Recenziile dublate în HTML | ✅ | O singură dată în HTML-ul prerandat; copia pentru buclă apare doar după hidratare, cu `aria-hidden` și `inert` |
| `lastmod` = momentul build-ului | ✅ | Scos din sitemap |
| Formulări diferite despre parcare | ❌ | „Parcare gratuită", „parcare privată", „Parcare la proprietate, interioară și exterioară". Nu se contrazic, dar un motor AI vede trei variante |
| Titlu și H1 homepage | ❌ | Neschimbate (vezi 3.1) |
| Descrieri meta peste 160 de caractere | ❌ | `/` 172, `/servicii` 183, `/activitati-in-zona` 171, `/evenimente` 171, `/camere/tarife` 169, `/despre-noi` 169 |
| Titlul `/despre-noi` (84 de caractere, numele de două ori) | ❌ | Neschimbat |
| Descrierile `/camere` și `/camere/tarife` numesc 2 din 4 tipuri | ❌ | Neschimbate |
| Paginile de camere subțiri | 🟡 | Vezi 3.3 |
| Câmpuri în plus pentru `BedAndBreakfast` | ❌ | `numberOfRooms`, `description`, `logo`, `paymentAccepted`, `smokingAllowed` încă lipsesc. *Cere aprobarea lui Flo* |
| BreadcrumbList doar pe 2 pagini | ❌ | Tot `/evenimente` și `/retreat-corporate` |
| `og:image` grele sau cu format greșit | ❌ | Vezi 3.4 |
| Date relative la recenzii („acum o lună") | ❌ | Toate 12 sunt încă relative |
| `/galerie` fără text | ❌ | 173 de cuvinte, toate din meniu și footer |
| Distanțe vagi pe `/activitati-in-zona` | ❌ | „în apropiere" de 5 ori |
| `/llms.txt` | ❌ | 404 |
| Pagina 404 cu meta robots contradictorii | ❌ | Tot `noindex` și `googlebot: index, follow` |
| „team building" vs „teambuilding" | 🟡 | 10 la 2. Cele 2 rămase sunt pe `/despre-noi` |
| Harta caută „Avrig" | ❌ | `ConsentMap.tsx:8`, nevizibil, minor |

### 1.2 Securitate și cod

| Constatare din runda 1 | Status | Verificat |
|---|---|---|
| Next.js vulnerabil | ✅ | 16.4.0, 0 vulnerabilități în dependențele de producție |
| CSP în Report-Only | ❔ | Neschimbat; de trecut pe enforcing când rapoartele din consolă sunt liniștite |
| `X-Powered-By: Next.js` | ❌ | Încă trimis |
| Copy în JSX | 🟡 | FAQ-urile, atuurile și facilitățile de pe `/despre-noi`, mesele, cardurile de evenimente și nota de pe camere sunt în `lib/`. Rămân în JSX lista de locații de pe `/despre-noi` (12 intrări), paragraful nou cu „din 2024" și textele homepage-ului |
| NAP scris de mână | ✅ | Adresa de pe `/despre-noi`, telefonul și numărul WhatsApp din calendar, emailul și telefonul din Termeni și din Confidențialitate vin acum din `CONTACT` |
| Termeni §5 copiat de mână | ✅ | Citește `CANCELLATION` |
| „40 minute de Sibiu" (gramatică) | ✅ | „40 de minute" |
| „40 de minute" scris în multe locuri | ❌ | 12 locuri, `DRIVE_SIBIU` folosit doar pe `/retreat-corporate`. Minor cât timp cifra nu se schimbă |
| Paginile legale fără `pageMeta()` | ✅ | `og:url` și `og:title` sunt acum ale paginii, nu ale homepage-ului |
| Documentație și comentarii învechite | ✅ | README real, `copilot-instructions.md` corect, auditul vechi marcat, comentariile despre staging corectate, pachetul redenumit |
| `btnSmall` nefolosit | ✅ | Scos. Vezi 2.1 pentru comentariul rămas orfan |
| Tarifele camerelor publice | ✅ | Decis și scris în `CLAUDE.md` |
| Bannerul permanent „Ultimele date libere" | ❔ | Încă pe toate paginile |

### 1.3 Accesibilitate și performanță

| Constatare din runda 1 | Status | Verificat |
|---|---|---|
| Contrast terracotta (3,1 până la 3,7) | ❌ | Același token `#a9743f`. Lighthouse: 18 elemente pe `/`, 42 pe `/retreat-corporate` |
| Caruselul ignoră `prefers-reduced-motion` | ❌ | Derularea din JavaScript nu verifică preferința |
| Carusel fără pauză pentru tastatură și touch | ❌ | Doar hover |
| Bucla `requestAnimationFrame` rulează și când caruselul nu e pe ecran | ❌ | Neschimbat |
| `h4` în bannerul de cookie-uri | ❌ | Neschimbat |
| `aria-label` al logo-ului fără textul vizibil | ❌ | Neschimbat |
| Același `alt` pe ambele poze din `RoomCard` | ❌ | Neschimbat |
| Fără date reale de viteză | ✅ | Vercel Speed Insights instalat, iar politica de cookie-uri îl descrie corect |

---

## 2. Constatări noi

### 2.1 ⚪ Comentariu orfan în `lib/ui.ts`

`btnSmall` a fost șters, dar comentariul lui a rămas ultima linie din fișier:
`/** Small pill (used inside cards). */`.

### 2.2 🟡 Cuvinte în engleză rămase

| Unde | Text |
|---|---|
| `/retreat-corporate` (`lib/retreat.ts`, `FNB_ITEMS`) | „Coffee break pe toată durata șederii" (mutat din JSX, dar netradus) |
| `/evenimente` (`lib/content.ts`, `EVENT_CARDS`) | „Offsite de echipă în exclusivitate" |
| `/retreat-corporate` FAQ (`lib/retreat.ts:263`) | „Pentru un offsite de conducere" |

„Offsite" exista și în runda 1, dar nu l-am semnalat atunci. Variante: „pauze de cafea pe toată durata
șederii", „ieșire de echipă", „retreat de conducere".

### 2.3 ⚪ Numele „Cameră cu Balcon" nu mai deosebește nimic

Acum toate cele 10 unități au balcon. Ce o deosebește de fapt e vederea spre pădure, deja în descriere.
Un nume ca „Cameră dublă cu vedere la pădure" ar fi mai clar pentru vizitatori și pentru motoarele AI.

Redenumirea schimbă și slug-ul `/camere/camera-cu-balcon`, deci ar cere un redirect 301. E o decizie
pentru Flo, nu o reparație.

### 2.4 ℹ️ `npm audit` pe dependențele de dezvoltare

Apar 5 vulnerabilități mari, toate în lanțul `eslint-config-next` → `fast-glob` → `micromatch` → `braces`.
Sunt doar în unealta de lint, nu ajung în site. Soluția propusă de npm (downgrade la `eslint-config-next@14`)
nu are sens; se rezolvă la următorul patch al pachetului.

---

## 3. Ce rămâne, cu detalii

### 3.1 🟠 Homepage

| | Acum |
|---|---|
| Titlu (54) | Pensiunea Amonte - Pensiune montană în Valea Avrigului |
| H1 | Locul unde liniștea îți încarcă sufletul |
| Descriere (172) | trunchiată de Google în jur de 155-160 de caractere |

Propunere, la fel ca în runda 1: titlul `Pensiunea Amonte, Valea Avrigului | Cazare la munte lângă Sibiu, cu
jacuzzi și saună` și o propoziție factuală în hero (ce, unde, câte locuri). H1-ul poate rămâne sloganul.

### 3.2 🟠 Contrast

Neschimbat. O nuanță ca `#8a5a2b` ar trece peste tot:

| Combinație | Contrast | Minim AA |
|---|---|---|
| `#8a5a2b` pe cream | 5,0 | 4,5 |
| `#8a5a2b` pe sand | 4,6 | 4,5 |
| text paper pe buton `#8a5a2b` | 5,1 | 4,5 |

Se poate păstra `#a9743f` pentru suprafețe mari și folosi nuanța închisă doar pentru text și butoane.
E o decizie de brand.

### 3.3 🟡 Paginile de camere

Acum au, pe lângă descriere: capacitatea, numărul de unități, mic dejun, balcon, vederea, încălzirea în
pardoseală. Pentru întrebările la care răspunde un motor AI lipsesc încă:

- suprafața în m², tipul și mărimea patului, baie cu duș sau cadă;
- aer condiționat, TV, frigider, uscător de păr;
- pat suplimentar sau pătuț pentru copii;
- breadcrumb și date structurate pentru cameră (`HotelRoom`);
- descrieri meta cu locul. Studioul are încă 64 de caractere, fără Sibiu sau Valea Avrigului.

### 3.4 🟡 Imaginile de share

Neschimbate:

| Pagina | Imagine | Dimensiuni | Greutate |
|---|---|---|---|
| `/retreat-corporate`, `/evenimente` | `exterior-pensiune.jpeg` | 2268x2338, aproape pătrat | 398 KB |
| `/camere/studio-de-familie` | `pat_dormitor.JPG` | 2560x1920 | 945 KB |
| `/camere/camera-dubla-vedere-munte` | `poza-pat-si-camera.jpeg` | 1440x2560, portret | 403 KB |

Pentru WhatsApp și LinkedIn: câte o variantă 1200x630, sub 300 KB.

### 3.5 🟡 Recenziile

Toate 12 au încă date relative („acum o lună", „acum 10 luni"). `CLAUDE.md` cere datele reale: lună și an.

---

## 4. Măsurători, înainte și după

| | Runda 1 | Runda 2 |
|---|---|---|
| `tsc`, `lint`, `build` | curate | curate |
| Vulnerabilități în producție (`npm audit --omit=dev`) | 8 (1 critică, 5 mari) | **0** |
| Pagini cu JSON-LD vizibil fără JavaScript | 0 din 17 | **16 din 17** (doar `/rezerva-acum` nu are, fiind în afara grupului) |
| Linii de pauză în textul vizibil | 13 | **0** |
| Cuvinte în engleză în textul vizibil | 7 semnalate (plus „offsite", ratat atunci) | 3: „Coffee break" și „offsite" de două ori |
| Placeholdere vizibile | 1 | **0** |
| Fapte contradictorii | 8 | 1 (parcarea, minor) |
| Elemente cu contrast insuficient (`/` și `/retreat-corporate`) | 18 și 42 | 18 și 42 |
| Scroll orizontal la 375 px | 0 | 0 |
| Erori JavaScript în pagină | 0 | 0 |
| CLS | 0 | 0 |

**Lighthouse.** Am rulat homepage-ul de 3 ori pe același build și am obținut 59, 96 și 92 la performanță,
deci rezultatele locale variază prea mult ca să compar cele două runde. Ce e stabil: CLS 0 peste tot,
accesibilitate 94-95, best practices 96, SEO 100. Acum că Speed Insights e instalat, cifrele reale vin
din Vercel după câteva zile de trafic; acelea contează.

Erorile din consolă (GTM blocat, `/_vercel/*` absent) sunt artefacte ale mediului local, nu probleme reale.

---

## 5. Ce mai e de făcut

**Fără aprobare, doar copy și cod:**

1. Titlu, H1 și descriere pe homepage; descrierile meta sub 160 de caractere; titlul `/despre-noi`.
2. „Coffee break" și „offsite" (2.2); cele 2 „team building" rămase.
3. Descrierile meta ale camerelor, `/camere` și `/camere/tarife`, cu toate cele 4 tipuri și cu locul.
4. Imaginile de share 1200x630.
5. Caruselul: `prefers-reduced-motion`, buton de pauză, oprit când nu e pe ecran.
6. `h4` → `h2` în bannerul de cookie-uri, `aria-label` al logo-ului, `alt` diferit pe a doua poză din `RoomCard`.
7. Comentariul orfan din `lib/ui.ts`, `poweredByHeader: false`.

**Cu decizia lui Flo:**

8. Nuanța de contrast (brand).
9. Câmpuri noi în `BedAndBreakfast`, `HotelRoom` pe camere, breadcrumb pe camere (schema.org).
10. Bannerul „Ultimele date libere": rămâne permanent?
11. Redenumirea „Cameră cu Balcon" (cere redirect).

**Cu date de la proprietar:**

12. Suprafețe, paturi și dotări pe camere.
13. Distanțele pentru atracțiile marcate „în apropiere".
14. Datele reale (lună și an) ale celor 12 recenzii.
15. O singură formulare pentru parcare.
