import SectionHeading from "./SectionHeading";
import PlaceholderImage from "./PlaceholderImage";
import { SHOW_FNB } from "@/lib/retreat";

const container = "mx-auto max-w-[1280px] px-[clamp(20px,5vw,64px)]";

/**
 * Food & Beverage for /retreat-corporate.
 *
 * Every meal promise on the page lives in here, and nowhere else, so the whole
 * category can be switched off with a single flag. Renders nothing while
 * SHOW_FNB is false; the package section shows a neutral one-liner instead.
 *
 * A se activa doar după emiterea avizelor DSP/ANSVSA pentru CAEN 5611/5630.
 */
export default function FnbSection() {
  if (!SHOW_FNB) return null;

  return (
    <section className={`${container} py-[clamp(56px,7vw,96px)] border-t border-line`}>
      <div className="flex flex-wrap items-center gap-[clamp(32px,5vw,64px)]">
        <div className="flex-1 basis-[340px]">
          <SectionHeading eyebrow="Food & beverage" title="Masa, parte din experiență">
            Micul dejun este inclus. Cina se construiește ca meniu fix pentru
            grup, cu unul sau două preparate per masă, ca toată lumea să stea
            jos în același timp.
          </SectionHeading>
          <ul className="mt-7 space-y-3 pl-0 list-none">
            {[
              "Mic dejun inclus, servit la pensiune",
              "Cină cu meniu fix, gândit pentru un singur grup",
              "Opțiuni de bar și pachete de băuturi",
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
            Detalii și prețuri în oferta trimisă pentru perioada voastră.
          </p>
        </div>

        <div className="flex-1 basis-[340px]">
          <PlaceholderImage
            label="[ FOTO: masă lungă aranjată, cină la lumina caldă ]"
            alt="Masă lungă aranjată pentru cina unui grup la Pensiunea Amonte"
            className="aspect-[4/3] w-full rounded-xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
