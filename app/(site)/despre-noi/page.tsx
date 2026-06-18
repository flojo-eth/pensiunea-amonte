import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import WhatsAppButton from "@/components/WhatsAppButton";
import { STATS } from "@/lib/content";
import { btnTerracotta } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Despre noi",
  description:
    "Pensiunea Amonte, o casă de munte în Valea Avrigului, la poalele Munților Făgăraș: rafinament, ospitalitate autentică și liniște, la 30 de minute de Sibiu.",
};

const container = "mx-auto max-w-[1280px] px-[clamp(20px,5vw,64px)]";

export default function DesprePage() {
  return (
    <section className={`${container} py-[clamp(56px,7vw,96px)] flex flex-wrap items-center gap-[clamp(36px,5vw,72px)]`}>
      <div className="flex-1 basis-[380px]">
        <SectionHeading
          eyebrow="Despre noi"
          title="O casă de munte construită pentru tihnă."
        />
        <p className="mt-6 text-[17px] leading-relaxed text-muted">
          Situată la poalele Munților Făgăraș, în Valea Avrigului, Pensiunea
          Amonte îmbină rafinamentul cu ospitalitatea autentică. Camere
          generoase cu vedere spre munte, living cu șemineu și terasă panoramică.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-muted">
          Te răsfățăm cu mic dejun inclus, zonă de relaxare cu jacuzzi și saună
          și liniștea pe care doar muntele o știe da — la doar 30 de minute de
          Sibiu.
        </p>
        <div className="mt-7 flex flex-wrap gap-9">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-[38px] leading-none text-forest">
                {s.value}
              </div>
              <div className="mt-1.5 text-[13px] text-muted-2">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <WhatsAppButton className={btnTerracotta}>
            Cere disponibilitate pe WhatsApp
          </WhatsAppButton>
        </div>
      </div>
      <div className="flex flex-1 basis-[360px] gap-4">
        <PlaceholderImage
          src="/interior-living.jpg"
          alt="Living cu șemineu"
          label="[ interior / living ]"
          className="aspect-[3/4] flex-[1.3] rounded-md"
          sizes="(max-width: 768px) 60vw, 30vw"
        />
        <div className="flex flex-1 flex-col gap-4">
          <PlaceholderImage src="/semineu.jpg" alt="Șemineu" label="[ șemineu ]" className="flex-1 rounded-md" sizes="30vw" />
          <PlaceholderImage src="/detaliu-lemn.jpg" alt="Detaliu lemn" label="[ detaliu lemn ]" className="flex-1 rounded-md" sizes="30vw" />
        </div>
      </div>
    </section>
  );
}
