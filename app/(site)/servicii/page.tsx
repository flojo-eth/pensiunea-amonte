import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import WhatsAppButton from "@/components/WhatsAppButton";
import { AMENITIES, SERVICE_DETAILS } from "@/lib/content";
import { btnTerracotta, btnOutlineDark } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Servicii & facilități",
  description:
    "Servicii la Pensiunea Amonte: mic dejun inclus, jacuzzi & saună (contra cost), living cu șemineu, bar, terasă panoramică, firepit, biciclete electrice, parcare și WiFi gratuite.",
};

const container = "mx-auto max-w-[1280px] px-[clamp(20px,5vw,64px)]";
const pad = "py-[clamp(56px,7vw,96px)]";

export default function ServiciiPage() {
  return (
    <div>
      {/* ── FACILITĂȚI GRID ── */}
      <section className={`${container} ${pad}`}>
        <SectionHeading
          eyebrow="Ce găsești la noi"
          title="Servicii & facilități"
          className="mb-[clamp(36px,5vw,56px)]"
        >
          Totul gândit ca să te simți ca acasă, doar cu priveliște mai bună.
        </SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AMENITIES.map((a) => (
            <div
              key={a.label}
              className="flex flex-col overflow-hidden rounded-[10px] border border-sand bg-card-2"
            >
              <PlaceholderImage
                src={a.photo}
                alt={a.label}
                label={a.photoLabel}
                className="aspect-[4/3] w-full"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="flex items-center gap-3 p-[22px] border-t border-sand bg-card">
                <span className="text-[22px] leading-none">{a.icon}</span>
                <span className="text-[16px] font-semibold text-pine">
                  {a.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <WhatsAppButton className={btnTerracotta}>
            Cere disponibilitate pe WhatsApp
          </WhatsAppButton>
        </div>
      </section>

      {/* ── SERVICE DETAIL SECTIONS ── */}
      <section className={`border-t border-line bg-sand`}>
        <div className={`${container} ${pad}`}>
          <SectionHeading
            eyebrow="Detalii"
            title="Tot ce trebuie să știi"
            className="mb-[clamp(40px,5vw,64px)]"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_DETAILS.map((s) => (
              <div
                key={s.id}
                className="rounded-xl border border-line bg-card p-7 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[26px] leading-none">{s.icon}</span>
                  <h3 className="m-0 font-serif text-[18px] font-semibold text-pine leading-snug">
                    {s.title}
                  </h3>
                </div>
                <ul className="flex flex-col gap-2.5 flex-1">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-muted"
                    >
                      <span className="mt-[3px] shrink-0 text-forest text-[11px]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {s.note && (
                  <p className="mt-1 text-[12.5px] leading-relaxed text-muted-2 border-t border-line pt-3">
                    {s.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={`${container} py-[clamp(40px,5vw,64px)]`}>
        <div className="flex flex-wrap items-center gap-4">
          <WhatsAppButton className={btnTerracotta}>
            Scrie-ne pentru detalii
          </WhatsAppButton>
          <Link href="/camere" className={btnOutlineDark}>
            Descoperă camerele →
          </Link>
        </div>
      </section>
    </div>
  );
}
