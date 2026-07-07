import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import Link from "next/link";
import { btnPaper } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Galerie foto Pensiunea Amonte: exterior, jacuzzi & saună, camere, priveliște spre Munții Făgăraș și serile lângă firepit.",
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
        <GalleryGrid />
        <div className="mt-10 text-center">
          <Link href="/rezerva-acum" className={btnPaper}>
            Verifică disponibilitatea
          </Link>
        </div>
      </div>
    </section>
  );
}
