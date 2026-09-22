import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Eyebrow from "@/components/Eyebrow";
import PlaceholderImage from "@/components/PlaceholderImage";
import WhatsAppButton from "@/components/WhatsAppButton";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMeta } from "@/lib/seo";
import {
  GROUP_REVIEWS,
  RATING_SUMMARY,
  CONTACT,
  PRIVATE_EVENTS_WHATSAPP,
  whatsappUrl,
} from "@/lib/content";
import { btnTerracotta, btnOutlineDark } from "@/lib/ui";

export const metadata: Metadata = pageMeta({
  title: "Evenimente la Amonte, lângă Sibiu",
  description:
    "Pensiunea se închiriază integral pentru un singur grup: 24 de locuri, mese pregătite la fața locului și un singur interlocutor. Retreaturi corporate și evenimente private.",
  path: "/evenimente",
  image: "/exterior-pensiune.jpeg",
});

const EVENTS_PAGE_SOURCE = "evenimente";

// Secțiunea video rămâne ascunsă cât timp materialul lipsește: un placeholder
// vizibil pe o pagină indexată arată a lucrare neterminată. Ca s-o pornești,
// pune /public/video/evenimente.mp4 și /public/video/evenimente-poster.jpg,
// apoi treci asta pe true.
const SHOW_VIDEO = false;

const CARDS = [
  {
    eyebrow: "Corporate",
    title: "Retreat și teambuilding",
    body: "Offsite de echipă în exclusivitate, cu sală de lucru, agendă flexibilă și tot ce ține de logistică rezolvat înainte să ajungeți.",
    points: ["Sală pentru grupuri", "Ofertă completă în 24 de ore lucrătoare", "Factură pe firmă"],
    photo: "/retreat/sala-evenimente.jpg",
    photoLabel: "[ FOTO: sala aranjată în format boardroom sau U, cu echipa la masă ]",
    alt: "Sala pentru grupuri de la Pensiunea Amonte, cu scaune aranjate pentru o prezentare",
    href: "/retreat-corporate",
    cta: "Vezi pagina pentru echipe",
    whatsapp: false as const,
  },
  {
    eyebrow: "Privat",
    title: "Evenimente private",
    body: "Aniversări, botezuri, petreceri de familie sau escapade cu prietenii, cu toată proprietatea rezervată doar pentru voi.",
    points: ["Până la 24 de locuri de cazare", "Mese pregătite la pensiune", "Un singur grup odată"],
    photo: "/salon.jpeg",
    photoLabel: "[ FOTO: salon aranjat pentru un eveniment privat ]",
    alt: "Salonul Pensiunii Amonte, pregătit pentru un eveniment privat",
    href: PRIVATE_EVENTS_WHATSAPP,
    cta: "Întreabă pe WhatsApp",
    whatsapp: true as const,
  },
];

const container = "mx-auto max-w-[1280px] px-[clamp(20px,5vw,64px)]";
const sectionPad = "py-[clamp(56px,7vw,96px)]";

export default function EvenimentePage() {
  return (
    <>
      {/* ── INTRO ── */}
      <section className={`${container} pt-[clamp(28px,4vw,44px)] pb-[clamp(40px,5vw,64px)]`}>
        <Breadcrumbs
          id="schema-evenimente-breadcrumb"
          items={[{ label: "Acasă", href: "/" }, { label: "Evenimente" }]}
        />

        <div className="mt-7 max-w-[62ch]">
          <Eyebrow className="mb-4">Evenimente</Eyebrow>
          <h1 className="m-0 font-serif text-[clamp(36px,5.4vw,64px)] font-semibold leading-[1.05] text-pine">
            Evenimente la Amonte
          </h1>
          <p className="mt-6 mb-0 text-[clamp(16px,2vw,19px)] leading-relaxed text-muted">
            Pensiunea se închiriază integral, pentru un singur grup odată, fără
            alți oaspeți în curte. Sunt 24 de locuri de cazare, iar mesele se
            pregătesc la fața locului, pentru tot grupul.
          </p>
          <p className="mt-5 mb-0 text-[14px] text-muted-2">
            {RATING_SUMMARY.value} din 5 pe Google, din {RATING_SUMMARY.count} de recenzii
          </p>
        </div>
      </section>

      {/* ── CELE DOUĂ DIRECȚII ── */}
      <section className={`${container} pb-[clamp(48px,6vw,80px)]`}>
        <div className="grid gap-7 md:grid-cols-2">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-line bg-card"
            >
              <PlaceholderImage
                src={c.photo}
                alt={c.alt}
                label={c.photoLabel}
                className="aspect-[16/10] w-full"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="flex flex-1 flex-col p-[clamp(22px,4vw,34px)]">
                <Eyebrow className="mb-3">{c.eyebrow}</Eyebrow>
                <h2 className="m-0 font-serif text-[clamp(24px,3vw,32px)] font-semibold leading-tight text-pine">
                  {c.title}
                </h2>
                <p className="mt-3 mb-0 text-[15px] leading-relaxed text-muted">
                  {c.body}
                </p>
                <ul className="mt-5 mb-0 flex-1 space-y-2.5 pl-0 list-none">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[14.5px] text-[#33392f]">
                      <span className="mt-1 text-[11px] text-forest" aria-hidden="true">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  {c.whatsapp ? (
                    // /evenimente-private nu există încă; până atunci intenția
                    // merge direct pe WhatsApp, cu sursă proprie în GA4.
                    <WhatsAppButton
                      href={c.href}
                      pageSource="evenimente-private-cta"
                      className={`${btnTerracotta} block w-full text-center`}
                    >
                      {c.cta}
                    </WhatsAppButton>
                  ) : (
                    <Link href={c.href} className={`${btnOutlineDark} block w-full text-center`}>
                      {c.cta}
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── VIDEO ── */}
      {SHOW_VIDEO && (
        <section className={`${sectionPad} bg-sand`}>
          <div className={container}>
            <SectionHeading
              eyebrow="Cum arată"
              title="Locul, pe scurt"
              center
              className="mb-[clamp(28px,4vw,44px)]"
            />
            <div className="mx-auto max-w-[900px] overflow-hidden rounded-2xl border border-line bg-card">
              {/* Player nativ, fără autoplay: sunetul pornit din senin alungă
                  vizitatorul. `poster` previne saltul de layout cât se încarcă. */}
              <video
                controls
                preload="metadata"
                playsInline
                poster="/video/evenimente-poster.jpg"
                className="aspect-video w-full bg-pine"
              >
                <source src="/video/evenimente.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="mx-auto mt-4 mb-0 max-w-[900px] text-[13.5px] text-muted-2">
              Videoclipul rulează doar la cererea vizitatorului, fără pornire
              automată.
            </p>
          </div>
        </section>
      )}

      {/* ── RECENZII ── */}
      {GROUP_REVIEWS.length > 0 && (
        <section className={sectionPad}>
          <div className={container}>
            <SectionHeading
              eyebrow="Social proof"
              title="Ce spun grupurile care au fost"
              center
              className="mb-[clamp(28px,4vw,44px)]"
            />
          </div>
          <ReviewsCarousel reviews={GROUP_REVIEWS} />
        </section>
      )}

      {/* ── CTA ── */}
      <section className={`${sectionPad} border-t border-line bg-card-2`}>
        <div className={`${container} text-center`}>
          <Eyebrow className="mb-4">Hai să vorbim</Eyebrow>
          <h2 className="mx-auto m-0 max-w-[22ch] font-serif text-[clamp(30px,4.2vw,48px)] font-semibold leading-[1.06] text-pine">
            Spune-ne ce fel de eveniment ai în minte
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-[16px] leading-relaxed text-muted">
            Câți sunteți și când. Restul îl construim împreună.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton
              href={whatsappUrl(
                "Bună ziua! Aș dori informații despre organizarea unui eveniment la Pensiunea Amonte.",
              )}
              pageSource={EVENTS_PAGE_SOURCE}
              ctaPosition="final"
              className={`${btnTerracotta} px-8 py-4`}
            >
              Scrie-ne pe WhatsApp
            </WhatsAppButton>
          </div>
          <p className="mt-6 mb-0 text-[14.5px] text-muted">
            <a href={`tel:${CONTACT.phoneMobile.replace(/\s/g, "")}`} className="text-forest no-underline hover:underline">
              {CONTACT.phoneMobile}
            </a>
            {" · "}
            <a href={`mailto:${CONTACT.email}`} className="text-forest no-underline hover:underline">
              {CONTACT.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
