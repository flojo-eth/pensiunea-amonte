import SectionHeading from "./SectionHeading";
import PlaceholderImage from "./PlaceholderImage";
import { SHOW_FNB } from "@/lib/flags";

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

        <div className="flex-1 basis-[340px]">
          <PlaceholderImage
            label="[ FOTO: masă lungă aranjată pentru grup, cină la lumina caldă ]"
            alt="Masă lungă aranjată pentru cina unui grup la Pensiunea Amonte"
            className="aspect-[4/3] w-full rounded-xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
