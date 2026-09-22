import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { SHOW_FNB } from "@/lib/flags";

const MEAL_PHOTO = "/retreat/masa-mare-living.jpg";

const container = "mx-auto max-w-[1280px] px-[clamp(20px,5vw,64px)]";

/**
 * Meals for /retreat-corporate.
 *
 * Every meal promise on the page lives in here and in the flag-gated entries of
 * lib/retreat.ts, so the whole category stays one switch away. DSP and ANSVSA
 * approvals were obtained in September 2026, so SHOW_FNB is now true; the gate
 * remains for editorial control.
 *
 * Deliberately never calls Amonte a restaurant: it is a guesthouse that feeds
 * the group staying there, not a venue open to the public.
 */
export default function FnbSection() {
  if (!SHOW_FNB) return null;

  return (
    <section className={`${container} py-[clamp(56px,7vw,96px)] border-t border-line`}>
      <div className="flex flex-wrap items-center gap-[clamp(32px,5vw,64px)]">
        <div className="flex-1 basis-[340px]">
          <SectionHeading eyebrow="Mesele" title="Mesele echipei">
            Micul dejun este inclus. Prânzul și cina se pregătesc la pensiune
            pentru tot grupul, ca toată lumea să stea jos în același timp.
          </SectionHeading>
          <ul className="mt-7 space-y-3 pl-0 list-none">
            {[
              "Mic dejun inclus în închirierea integrală",
              "Prânz și cină pregătite la pensiune pentru tot grupul",
              "Coffee break pe toată durata șederii",
              "Două variante de meniu, una tradițională și una modernă, trimise ca PDF odată cu oferta",
              "Bar disponibil pentru grup pe durata șederii",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[15px] leading-relaxed text-[#33392f]"
              >
                <span className="mt-1 text-[11px] text-forest" aria-hidden="true">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[14px] italic text-muted">
            Tarifele pentru mese se regăsesc în oferta trimisă pentru perioada
            voastră.
          </p>
        </div>

        <div className="relative aspect-[4/3] w-full flex-1 basis-[340px] overflow-hidden rounded-xl">
          {/* The source photo is portrait (1086x1448) in a 4:3 box, so a plain
              object-cover crops it to a tight, zoomed-in horizontal strip.
              Backdrop: same photo, blurred and scaled past the edges (so the
              soft blur border never peeks in) to fill the box with a
              continuation of the scene's own colours instead of empty bars. */}
          <Image
            src={MEAL_PHOTO}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="scale-110 object-cover blur-2xl"
          />
          {/* Foreground: object-contain shows the whole frame, zoomed out
              relative to the cover-cropped version, nothing cut off. */}
          <Image
            src={MEAL_PHOTO}
            alt="Masa mare din livingul Pensiunii Amonte, unde ia loc tot grupul"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="relative object-contain"
          />
        </div>
      </div>
    </section>
  );
}
