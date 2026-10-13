import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import ServicesGridClient from "@/components/ServicesGridClient";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getContent, getCopy, href, type Lang } from "@/lib/i18n";
import { btnTerracotta, btnOutlineDark } from "@/lib/ui";

export function servicesMetadata(lang: Lang): Metadata {
  return pageMeta({ lang, ...getCopy(lang).services.meta, path: href(lang, "services") });
}

const container = "mx-auto max-w-[1280px] px-[clamp(20px,5vw,64px)]";
const pad = "py-[clamp(56px,7vw,96px)]";

export default function ServicesPage({ lang }: { lang: Lang }) {
  const t = getCopy(lang).services;
  const { AMENITIES, SERVICE_DETAILS, WHATSAPP_URL } = getContent(lang);
  return (
    <div>
      {/* ── FACILITĂȚI GRID ── */}
      <section className={`${container} ${pad}`}>
        <SectionHeading
          as="h1"
          eyebrow={t.eyebrow}
          title={t.title}
          className="mb-[clamp(36px,5vw,56px)]"
        >
          {t.lead}
        </SectionHeading>

        <ServicesGridClient items={AMENITIES} />

        {/* Several amenities above (sala pentru grupuri, rezervare integrală)
            only make sense for whole-property bookings. */}
        <p className="mt-9 rounded-xl border border-line bg-card p-[clamp(18px,3vw,24px)] text-[15px] leading-relaxed text-muted">
          {t.groups}{" "}
          <Link
            href={href(lang, "corporate")}
            className="font-semibold text-terracotta underline-offset-2 hover:underline"
          >
            {t.groupsLink}
          </Link>
          .
        </p>

      </section>

      {/* ── SERVICE DETAIL SECTIONS ── */}
      <section className={`border-t border-line bg-sand`}>
        <div className={`${container} ${pad}`}>
          <SectionHeading
            eyebrow={t.detailsEyebrow}
            title={t.detailsTitle}
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
          <WhatsAppButton href={WHATSAPP_URL} className={btnTerracotta}>
            {t.whatsapp}
          </WhatsAppButton>
          <Link href={href(lang, "rooms")} className={btnOutlineDark}>
            {t.rooms}
          </Link>
        </div>
      </section>
    </div>
  );
}
