import Link from "next/link";
import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CONTACT, GOOGLE_FORM_URL } from "@/lib/content";
import { btnTerracotta } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Rezervă acum",
  description:
    "Rezervă-ți evadarea la munte la Pensiunea Amonte, în Valea Avrigului - la 30 de minute de Sibiu. Cazare de la 225 lei/persoană, jacuzzi & saună. Scrie pe WhatsApp.",
  alternates: { canonical: "/rezerva-acum" },
};

const PHOTOS = [
  { src: "/exterior-pensiune.jpeg", alt: "Exterior pensiune" },
  { src: "/camera-balcon.jpeg", alt: "Cameră cu balcon" },
  { src: "/jacuzzi-sauna.jpeg", alt: "Jacuzzi & saună" },
  { src: "/priveliste-fagaras.jpg", alt: "Priveliște spre Făgăraș" },
];

export default function RezervaAcumPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Logo only - no full nav, single goal: WhatsApp click. */}
      <header className="border-b border-sand px-[clamp(20px,5vw,64px)] py-5">
        <Link
          href="/"
          className="flex flex-col leading-none text-pine no-underline"
        >
          <span className="font-serif text-[28px] font-bold tracking-[0.5px]">
            Amonte
          </span>
          <span className="mt-[3px] text-[9.5px] uppercase tracking-[3.5px] text-muted-2">
            Pensiune montană
          </span>
        </Link>
      </header>

      <section className="mx-auto max-w-[1000px] px-[clamp(20px,5vw,64px)] py-[clamp(40px,6vw,72px)]">
        <h1 className="m-0 max-w-[20ch] font-serif text-[clamp(36px,6vw,68px)] font-semibold leading-[1.04] text-pine">
          Rezervă-ți evadarea la munte în Valea Avrigului
        </h1>
        <p className="mt-5 max-w-[58ch] text-[clamp(17px,2vw,21px)] leading-relaxed text-muted">
          Pensiune premium, la doar 30 de minute de Sibiu. Liniște, natură și
          confort în inima Munților Făgăraș.
        </p>

        {/* 4-photo grid */}
        <div className="mt-9 grid grid-cols-2 gap-3.5 sm:grid-cols-4">
          {PHOTOS.map((p, i) => (
            <PlaceholderImage
              key={p.src}
              src={p.src}
              alt={p.alt}
              label={p.alt}
              className="aspect-square rounded-lg"
              priority={i < 2}
              sizes="(max-width: 640px) 50vw, 25vw"
            />
          ))}
        </div>

        {/* Price anchor */}
        <p className="mt-9 font-serif text-[clamp(22px,3vw,30px)] font-semibold text-pine">
          Cazare de la{" "}
          <span className="text-terracotta">225 lei / persoană</span> pe noapte
          <span className="block text-[16px] font-normal text-muted">
            Jacuzzi & saună inclus
          </span>
        </p>

        {/* Primary conversion */}
        <div className="mt-7 flex flex-col items-start gap-4">
          <WhatsAppButton
            className={`${btnTerracotta} px-9 py-[18px] text-[17px]`}
          >
            Verifică disponibilitatea pe WhatsApp
          </WhatsAppButton>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px] text-muted">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-forest no-underline hover:underline"
            >
              Sau completează formularul →
            </a>
            <a
              href={`tel:${CONTACT.phoneMobile.replace(/\s/g, "")}`}
              className="no-underline hover:text-ink"
            >
              ✆ {CONTACT.phoneMobile} · {CONTACT.phoneLandline}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
