import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
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

      <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {AMENITIES.map((a) => (
          <div
            key={a.label}
            className="flex items-center gap-3.5 rounded-lg border border-sand bg-card-2 p-[22px]"
          >
            <span className="text-[22px] leading-none">{a.icon}</span>
            <span className="text-[15px] font-medium text-[#33392f]">
              {a.label}
            </span>
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
