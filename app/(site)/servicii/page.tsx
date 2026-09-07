import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ServicesGridClient from "@/components/ServicesGridClient";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SERVICE_DETAILS } from "@/lib/content";
import { btnTerracotta, btnOutlineDark } from "@/lib/ui";

export const metadata: Metadata = pageMeta({
  title: "Servicii & facilități",
  description:
    "Servicii la Pensiunea Amonte: mic dejun inclus, jacuzzi & saună (contra cost), living cu șemineu, bar, terasă panoramică, firepit, biciclete electrice, parcare și WiFi gratuite.",
  path: "/servicii",
});

const container = "mx-auto max-w-[1280px] px-[clamp(20px,5vw,64px)]";
const pad = "py-[clamp(56px,7vw,96px)]";

export default function ServiciiPage() {
  return (
    <div>
      {/* ── FACILITĂȚI GRID ── */}
      <section className={`${container} ${pad}`}>
        <SectionHeading
        as="h1"
          eyebrow="Ce găsești la noi"
          title="Servicii & facilități"
          className="mb-[clamp(36px,5vw,56px)]"
        >
          Totul gândit ca să te simți ca acasă, doar cu priveliște mai bună.
        </SectionHeading>

        <ServicesGridClient />

        {/* Several amenities above (sala pentru grupuri, rezervare integrală)
            only make sense for whole-property bookings. */}
        <p className="mt-9 rounded-xl border border-line bg-card p-[clamp(18px,3vw,24px)] text-[15px] leading-relaxed text-muted">
          Pentru echipe și grupuri, pensiunea se poate închiria integral, cu sală
          de lucru și toate spațiile rezervate exclusiv vouă.{" "}
          <Link
            href="/retreat-corporate"
            className="font-semibold text-terracotta underline-offset-2 hover:underline"
          >
            Vezi condițiile pentru grupuri
          </Link>
          .
        </p>

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
