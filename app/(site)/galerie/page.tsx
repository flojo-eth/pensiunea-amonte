import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import WhatsAppButton from "@/components/WhatsAppButton";
import { GALLERY } from "@/lib/content";
import { btnPaper } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Galerie foto Pensiunea Amonte: exterior, jacuzzi & saună, mic dejun, camere, priveliște spre Munții Făgăraș și serile lângă firepit.",
};

const container = "mx-auto max-w-[1280px] px-[clamp(20px,5vw,64px)]";

export default function GaleriePage() {
  return (
    <section className={`bg-pine py-[clamp(56px,7vw,96px)]`}>
      <div className={container}>
        <SectionHeading
          eyebrow="Galerie"
          title="Momente de la Amonte"
          tone="dark"
          center
          className="mb-[clamp(36px,5vw,56px)]"
        />
        <div className="grid auto-rows-[220px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3.5">
          {GALLERY.map((g) => (
            <PlaceholderImage
              key={g.label}
              src={g.photo}
              alt={g.label}
              label={g.label}
              tone="dark"
              className={`rounded-lg ${g.span === 2 ? "row-span-2" : ""}`}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <WhatsAppButton className={btnPaper}>
            Cere disponibilitate pe WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
