import Link from "next/link";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ROOMS } from "@/lib/content";
import { btnTerracotta } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Tarife cazare",
  description:
    "Tarifele Pensiunii Amonte: cameră dublă cu vedere la munte - 600 lei/noapte (mic dejun inclus), studio de familie de la 800 lei/noapte. Cere disponibilitate pe WhatsApp.",
};

const container = "mx-auto max-w-[1280px] px-[clamp(20px,5vw,64px)]";

export default function TarifePage() {
  return (
    <section className={`${container} py-[clamp(56px,7vw,96px)]`}>
      <SectionHeading
        eyebrow="Cazare"
        title="Tarife"
        className="mb-[clamp(36px,5vw,56px)]"
      >
        Cere disponibilitatea pentru datele tale pe WhatsApp și îți trimitem o
        ofertă personalizată.
      </SectionHeading>

      <div className="overflow-hidden rounded-[12px] border border-line bg-card">
        {ROOMS.map((room, i) => (
          <div
            key={room.slug}
            className={`flex flex-wrap items-center justify-between gap-4 p-6 sm:p-8 ${
              i > 0 ? "border-t border-line" : ""
            }`}
          >
            <div className="basis-[260px]">
              <h2 className="font-serif text-[24px] font-semibold text-pine">
                <Link
                  href={`/camere/${room.slug}`}
                  className="no-underline hover:underline"
                >
                  {room.name}
                </Link>
              </h2>
              <div className="mt-1 text-[13.5px] text-muted-2">{room.spec}</div>
            </div>
            <div className="text-right">
              <span className="font-serif text-[32px] font-semibold text-terracotta">
                {room.price}
              </span>
              <span className="text-[13px] text-muted-2"> lei / noapte</span>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-[14.5px] leading-relaxed text-muted">
        Cazare de la 225 lei / persoană pe noapte. Pentru grupuri, sejururi mai
        lungi sau perioade speciale, scrie-ne și îți facem o ofertă.
      </p>

      <div className="mt-8">
        <WhatsAppButton className={btnTerracotta}>
          Cere disponibilitate pe WhatsApp
        </WhatsAppButton>
      </div>
    </section>
  );
}
