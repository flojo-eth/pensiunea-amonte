import Link from "next/link";
import type { Metadata } from "next";
import BookingCalendar from "@/components/BookingCalendar";
import PlaceholderImage from "@/components/PlaceholderImage";
import { CONTACT, GOOGLE_FORM_URL, CANCELLATION } from "@/lib/content";

export const metadata: Metadata = {
  title: "Rezervă acum",
  description:
    "Verifică disponibilitatea și rezervă-ți sejurul la Pensiunea Amonte, în Valea Avrigului - la 30 de minute de Sibiu. Jacuzzi & saună, terasă panoramică.",
  alternates: { canonical: "/rezerva-acum" },
};

export default function RezervaAcumPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Logo only header — distraction-free conversion page */}
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

      <section className="mx-auto max-w-[1100px] px-[clamp(20px,5vw,64px)] py-[clamp(40px,6vw,72px)]">
        <h1 className="m-0 max-w-[20ch] font-serif text-[clamp(36px,6vw,56px)] font-semibold leading-[1.08] text-pine">
          Rezervă-ți evadarea la munte
        </h1>
        <p className="mt-4 max-w-[58ch] text-[clamp(16px,2vw,19px)] leading-relaxed text-muted">
          Alege perioada dorită și te contactăm în cel mai scurt timp cu
          disponibilitatea.
        </p>

        {/* 5-photo grid */}
        <div className="mt-9 grid grid-cols-2 gap-3.5 sm:grid-cols-5">
          {[
            { src: "/exterior-pensiune.jpeg", alt: "Exterior pensiune" },
            { src: "/camera-balcon.jpeg", alt: "Cameră cu balcon" },
            { src: "/poza_hero.jpg", alt: "Pensiunea Amonte" },
            { src: "/camera-dubla-folder/1-din-2.jpg", alt: "Cameră dublă" },
            { src: "/jacuzzi-sauna.jpeg", alt: "Jacuzzi & saună" },
          ].map((p, i) => (
            <PlaceholderImage
              key={p.src}
              src={p.src}
              alt={p.alt}
              label={p.alt}
              className={`aspect-square rounded-lg ${i === 4 ? "col-span-2 sm:col-span-1" : ""}`}
              priority={i < 2}
              sizes="(max-width: 640px) 50vw, 25vw"
            />
          ))}
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14 items-start">
          {/* Calendar — appears first on mobile */}
          <div className="lg:sticky lg:top-8 h-fit">
            <BookingCalendar />
          </div>

          {/* Info column */}
          <div className="flex flex-col gap-6">
            {/* Cancellation policy */}
            <div className="rounded-xl border border-line bg-card p-[clamp(20px,4vw,28px)]">
              <span className="text-xs font-semibold uppercase tracking-[1px] text-terracotta">
                {CANCELLATION.eyebrow}
              </span>
              <div className="mt-4 rounded-lg bg-pine/5 p-[clamp(14px,3vw,20px)] border-l-4 border-forest">
                <h3 className="m-0 font-serif text-[clamp(17px,2.5vw,21px)] font-bold text-pine leading-snug">
                  {CANCELLATION.promiseTitle}
                </h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-muted m-0">
                  {CANCELLATION.promiseSub}
                </p>
              </div>
              <ul className="mt-5 space-y-3 pl-0 list-none">
                {CANCELLATION.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[13.5px] leading-relaxed text-[#33392f]"
                  >
                    <span
                      className="text-forest mt-1 text-[11px]"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 mb-0 text-[12.5px] leading-relaxed text-muted-2 italic">
                {CANCELLATION.note}
              </p>
            </div>

            {/* Direct contact card */}
            <div className="rounded-xl border border-line bg-card p-[clamp(20px,4vw,28px)]">
              <h3 className="font-serif text-[20px] font-semibold text-pine m-0">
                Sau contactează-ne direct
              </h3>
              <p className="text-[14px] text-muted m-0 mt-2">
                Dacă ai întrebări speciale sau preferi să discutăm detaliile
                telefonic.
              </p>
              <div className="flex flex-col gap-3 mt-4">
                <a
                  href={`tel:${CONTACT.phoneMobile.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-[15px] font-medium text-pine no-underline hover:text-terracotta transition-colors"
                >
                  <span className="text-forest">✆</span>{" "}
                  {CONTACT.phoneMobile}
                </a>
                <a
                  href={`tel:${CONTACT.phoneLandline.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-[15px] font-medium text-pine no-underline hover:text-terracotta transition-colors"
                >
                  <span className="text-forest">✆</span>{" "}
                  {CONTACT.phoneLandline}
                </a>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[15px] font-medium text-pine no-underline hover:text-terracotta transition-colors"
                >
                  <span className="text-forest">✉</span> Formular de contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
