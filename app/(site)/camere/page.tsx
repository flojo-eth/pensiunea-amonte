import Link from "next/link";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import RoomCard from "@/components/RoomCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ROOMS } from "@/lib/content";
import { btnTerracotta } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Camere",
  description:
    "Camerele Pensiunii Amonte: cameră dublă cu vedere la munte și studio de familie. Balcon privat, acces la jacuzzi & saună, terasă panoramică.",
};

const container = "mx-auto max-w-[1280px] px-[clamp(20px,5vw,64px)]";

export default function CamerePage() {
  return (
    <section className={`${container} py-[clamp(56px,7vw,96px)]`}>
      <SectionHeading
        eyebrow="Cazare"
        title="Camerele noastre"
        className="mb-[clamp(36px,5vw,56px)]"
      >
        Spații generoase, lemn cald și vedere spre Munții Făgăraș. Acces la
        jacuzzi & saună și terasă panoramică.
      </SectionHeading>

      <div className="grid gap-6 sm:grid-cols-2">
        {ROOMS.map((room) => (
          <RoomCard key={room.slug} room={room} />
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-5">
        <Link href="/rezerva-acum" className={btnTerracotta}>
          Verifică disponibilitatea
        </Link>
        <Link
          href="/camere/tarife"
          className="text-sm font-semibold text-terracotta no-underline hover:underline"
        >
          Vezi tarifele detaliate →
        </Link>
      </div>
    </section>
  );
}
