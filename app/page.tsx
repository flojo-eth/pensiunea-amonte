import Image from "next/image";
const contactEmail = "contact@florinluca.ro";

const services = [
  {
    title: "Operare completă",
    desc: "Preluăm fluxul zilnic: rezervări, check-in/out, comunicare, coordonare servicii.",
  },
  {
    title: "Marketing & vânzare",
    desc: "Structură de funnel + execuție: website, conținut, SEO, ads, mesaje și follow-up.",
  },
  {
    title: "Evenimente & grupuri",
    desc: "Pachete și livrare simplificată pentru grupuri, evenimente private și sejururi.",
  },
  {
    title: "Digitalizare & standardizare",
    desc: "Procese + instrumente pentru consistență, control și decizii mai bune.",
  },
  {
    title: "Experiență premium",
    desc: "Detalii care se simt: ritm, claritate, ospitalitate, predictibilitate.",
  },
  {
    title: "Coordonare resurse",
    desc: "Personal, furnizori, curățenie externalizată — coordonate unitar, fără haos.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Audit & obiective",
    desc: "Înțelegem locația, constrângerile și țintele: ocupare, mix clienți, calitate.",
  },
  {
    step: "02",
    title: "Setup operațional",
    desc: "Rutine, responsabilități, standarde, instrumente. Totul devine repetabil.",
  },
  {
    step: "03",
    title: "Lansare & optimizare",
    desc: "Pornim, măsurăm, ajustăm. Îmbunătățim constant experiența și rezultatele.",
  },
];

const outcomes = [
  "Proces simplu, fără improvizații",
  "Comunicare profesionistă cu oaspeții",
  "Mai mulți clienți și rezervări",
  "Experiență consecventă pentru oaspeți",
  "Control operațional și claritate",
];

const differentiators = [
  {
    title: "Operare + growth, nu doar administrare",
    desc: "Combinăm livrarea operațională cu marketing, vânzare și poziționare premium, cu măsurare clară.",
  },
  {
    title: "Standardizare și control",
    desc: "Procese documentate, checklist-uri, rutine și raportare — ca să elimini improvizația și dependența de oameni-cheie.",
  },
  {
    title: "Corporate-ready din design",
    desc: "Pachete, flow-uri și standarde pentru grupuri: ofertare, contractare, timeline, livrare și feedback.",
  },
  {
    title: "Digital-first",
    desc: "Instrumente simple care cresc viteza și calitatea: comunicare, task management, evidențe, dashboard minimal.",
  },
];

const collaborationModel = [
  {
    title: "Claritate și organizare",
    desc: "Punem la punct procesele zilnice: rezervări, comunicare, roluri și responsabilități clare.",
  },
  {
    title: "Creștere venituri",
    desc: "Optimizăm tarifele, pachetele și modul în care vin și sunt gestionați clienții.",
  },
  {
    title: "Transparență totală",
    desc: "Stabilim câțiva indicatori simpli și urmărim constant progresul, cu raportare clară.",
  },
];

const faqs = [
  {
    q: "Lucrați doar cu pensiuni?",
    a: "Lucrăm cu pensiuni, vile sau locații turistice de toate dimensiunile. Ne potrivim cu proprietari care vor ordine în operațiuni, comunicare clară cu oaspeții și rezultate măsurabile.",
  },
  {
    q: "Cât durează până se văd rezultate?",
    a: "De obicei: (1) în primele 30 de zile: ordine în procese și comunicare, (2) 30–60 zile: rezultate vizibile în rezervări și feedback, (3) 60–90+ zile: ritm predictibil și control operațional mai bun.",
  },
  {
    q: "Ce informații ai nevoie ca să evaluăm o colaborare?",
    a: "Avem nevoie de: locație, capacitate, canale de vânzare folosite și rapoarte recente de ocupare și tarife — ca să facem o evaluare corectă.",
  },
  {
    q: "Oferiți și partea de marketing?",
    a: "Da. Facem marketing orientat spre rezultate: website eficient, conținut relevant, anunțuri și follow-up — toate integrate în operațiuni.",
  },
];

export default function Home() {
  return (
    <>
      {/* Sticky nav */}
      <nav className="sticky top-0 z-50 border-b border-neutral-900 bg-neutral-950/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <span className="text-sm font-semibold text-neutral-100">Smoooth</span>
          <div className="flex items-center gap-5 text-xs text-neutral-400">
            <a href="#what" className="hidden hover:text-neutral-200 sm:inline">Servicii</a>
            <a href="#process" className="hidden hover:text-neutral-200 sm:inline">Proces</a>
            <a href="#why" className="hidden hover:text-neutral-200 sm:inline">De ce noi</a>
            <a href="#faq" className="hidden hover:text-neutral-200 sm:inline">FAQ</a>
            <a
              href={`mailto:${contactEmail}?subject=Smoooth%20—%20discu%C8%9Bie%20colaborare`}
              className="rounded-lg bg-emerald-500 px-3 py-1.5 font-medium text-neutral-950 hover:bg-emerald-400"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="min-h-screen bg-neutral-950 text-neutral-50">
        {/* subtle background */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-14 sm:py-20">
          {/* top bar */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/40 px-3 py-1 text-xs text-neutral-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Smoooth — operare pensiuni
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <a href="#what" className="rounded-full border border-neutral-800 bg-neutral-900/30 px-3 py-1 hover:border-neutral-700">
                Operare pensiuni
              </a>
              <a href="#model" className="rounded-full border border-neutral-800 bg-neutral-900/30 px-3 py-1 hover:border-neutral-700">
                Corporate retreats
              </a>
              <a href="#why" className="hidden rounded-full border border-neutral-800 bg-neutral-900/30 px-3 py-1 hover:border-neutral-700 sm:inline-flex">
                Digital-first
              </a>
            </div>
          </div>

          {/* HERO */}
          <header className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Operare & administrare pensiuni,
                <span className="block text-neutral-300">fără fricțiune. Doar rezultate.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-300">
                Smoooth te ajută să operezi pensiunea fără stres și cu rezultate vizibile:
                ne ocupăm de organizarea zilnică, clarificăm responsabilitățile,
                comunicăm profesionist cu oaspeții și lucrăm ca tu să câștigi mai bine din
                locația ta, zi de zi.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${contactEmail}?subject=Smoooth%20—%20discu%C8%9Bie%20colaborare`}
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-medium text-neutral-950 hover:bg-emerald-400"
                >
                  Cere o discuție
                </a>

                <a
                  href="#what"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/20 px-5 py-3 text-sm font-medium text-neutral-50 hover:border-neutral-700"
                >
                  Servicii & model
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-neutral-800 bg-neutral-900/35 p-5">
                  <div className="text-xs text-neutral-400">Focus</div>
                  <div className="mt-2 text-sm text-neutral-200">Turiști, grupuri & evenimente</div>
                </div>
                <div className="rounded-2xl border border-neutral-800 bg-neutral-900/35 p-5">
                  <div className="text-xs text-neutral-400">Stil</div>
                  <div className="mt-2 text-sm text-neutral-200">Procese + standarde + ritm</div>
                </div>
                <div className="rounded-2xl border border-neutral-800 bg-neutral-900/35 p-5">
                  <div className="text-xs text-neutral-400">Abordare</div>
                  <div className="mt-2 text-sm text-neutral-200">Digital-first, fără haos</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-neutral-800 bg-neutral-900/30 p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 ring-1 ring-emerald-500/15">
                    <Image
                      src="/icon.png"
                      alt="Smoooth icon"
                      loading="eager"
                      fill
                      className="object-contain p-2 brightness-125 contrast-125"
                      priority
                    />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-neutral-500">
                    Smoooth
                  </div>
                </div>
                <div className="text-sm font-medium text-neutral-200">Pentru cine e potrivit</div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                  Proprietari de pensiuni și vile turistice care vor:
                  claritate în operațiuni,
                  mai mult control,
                  comunicare profesionistă cu oaspeții
                  și venituri mai bune — fără haos și fără bătăi de cap.
                  Lucrăm bine cu locații care au turiști individuali,
                  evenimente private (cununii, botezuri, aniversări),
                  weekend-uri sau grupuri.
                </p>

                <div className="mt-5 space-y-3">
                  {outcomes.map((x) => (
                    <div key={x} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/40 text-[11px] text-emerald-300">
                        ✓
                      </span>
                      <div className="text-sm text-neutral-200">{x}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-950/40 p-4">
                  <div className="text-xs text-neutral-400">Contact</div>
                  <a
                    href={`mailto:${contactEmail}?subject=Smoooth%20—%20brief%20colaborare`}
                    className="mt-1 block text-sm font-medium text-neutral-100 hover:text-neutral-50"
                  >
                    {contactEmail}
                  </a>
                  <div className="mt-2 text-xs text-neutral-500">
                    Trimite: locație, capacitate, obiectiv (leisure/corporate), status operare.
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* WHAT */}
          <section id="what" className="mt-16 sm:mt-20">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-tight">Ce facem concret</h2>
              <p className="max-w-2xl text-neutral-300">
                Acoperim tot ce ține de operarea și creșterea unei locații turistice, de la fluxul zilnic până la marketing și experiența oaspeților.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-3xl border border-neutral-800 bg-neutral-900/25 p-6 hover:border-neutral-700"
                >
                  <div className="text-sm font-medium text-neutral-100">{s.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-neutral-300">{s.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* PROCESS */}
          <section id="process" className="mt-16 sm:mt-20">
            <h2 className="text-2xl font-semibold tracking-tight">Cum lucrăm</h2>
            <p className="mt-3 max-w-2xl text-neutral-300">
              Un flow simplu, repetabil. Scopul: control, consistență și progres măsurabil.
            </p>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {processSteps.map((p) => (
                <div
                  key={p.step}
                  className="rounded-3xl border border-neutral-800 bg-neutral-900/25 p-6"
                >
                  <div className="text-xs text-neutral-400">{p.step}</div>
                  <div className="mt-2 text-sm font-medium text-neutral-100">{p.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-neutral-300">{p.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* DIFFERENTIATORS */}
          <section id="why" className="mt-16 sm:mt-20">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-tight">De ce Smoooth</h2>
              <p className="max-w-2xl text-neutral-300">
                Ne concentrăm pe un sistem complet: operare + standard + vânzare. Scopul este să obții
                rezultate măsurabile, nu doar „să meargă treaba".
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {differentiators.map((d) => (
                <div
                  key={d.title}
                  className="rounded-3xl border border-neutral-800 bg-neutral-900/25 p-6 hover:border-neutral-700"
                >
                  <div className="text-sm font-medium text-neutral-100">{d.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-neutral-300">{d.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* COLLABORATION MODEL */}
          <section id="model" className="mt-16 sm:mt-20">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold tracking-tight">Model de colaborare</h2>
              <p className="max-w-2xl text-neutral-300">
                Colaborarea se bazează pe 3 lucruri simple: ordine, creștere și transparență.
                Înțelegem obiectivele tale și stabilim un mod de lucru potrivit pentru locația ta.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {collaborationModel.map((c) => (
                <div key={c.title} className="rounded-3xl border border-neutral-800 bg-neutral-900/25 p-6">
                  <div className="text-sm font-medium text-neutral-100">{c.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-neutral-300">{c.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mt-16 sm:mt-20">
            <h2 className="text-2xl font-semibold tracking-tight">Întrebări frecvente</h2>
            <div className="mt-6 grid gap-4">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-3xl border border-neutral-800 bg-neutral-900/25 p-6">
                  <div className="text-sm font-medium text-neutral-100">{f.q}</div>
                  <div className="mt-2 text-sm leading-relaxed text-neutral-300">{f.a}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 sm:mt-20">
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/25 p-8 sm:p-10">
              <h3 className="text-xl font-semibold tracking-tight">
                Vrei să vezi dacă se potrivește pentru locația ta?
              </h3>
              <p className="mt-3 max-w-2xl text-neutral-300">
                Trimite un mesaj scurt cu locația, capacitatea și obiectivul tău și îți răspund cu pașii următori.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${contactEmail}?subject=Smoooth%20—%20solicitare%20discu%C8%9Bie&body=Salut%2C%0A%0ALoca%C8%9Bie%3A%20%0ACapacitate%3A%20%0AObiectiv%3A%20(leisure%2Fcorporate)%0AStatus%3A%20(operezi%20deja%20sau%20urmeaz%C4%83)%0A%0AMul%C8%9Bumesc`}
                  className="inline-flex items-center justify-center rounded-xl bg-neutral-50 px-5 py-3 text-sm font-medium text-neutral-950 hover:bg-neutral-200"
                >
                  Scrie-ne pe email
                </a>
                <a
                  href="#faq"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-800 px-5 py-3 text-sm font-medium text-neutral-50 hover:border-neutral-700"
                >
                  Întrebări frecvente
                </a>
              </div>
            </div>
          </section>

          <footer className="mt-14 border-t border-neutral-900 pt-8 text-xs text-neutral-500">
            © {new Date().getFullYear()} Smoooth — operare & administrare pensiuni
          </footer>
        </div>
      </main>
    </>
  );
}
