import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import WhatsAppButton from "@/components/WhatsAppButton";
import { AMENITIES } from "@/lib/content";
import { btnTerracotta } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Servicii & facilități",
  description:
    "Servicii la Pensiunea Amonte: jacuzzi & saună, living cu șemineu, bar / lounge, terasă panoramică, firepit, sală pentru grupuri, mini teren de fotbal, ping-pong, parcare și WiFi gratuite.",
};

const container = "mx-auto max-w-[1280px] px-[clamp(20px,5vw,64px)]";

export default function ServiciiPage() {
  return (
    <section className={`${container} py-[clamp(56px,7vw,96px)]`}>
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
  );
}
