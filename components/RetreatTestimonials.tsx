import SectionHeading from "./SectionHeading";
import { PUBLISHABLE_TESTIMONIALS } from "@/lib/retreat";

const container = "mx-auto max-w-[1280px] px-[clamp(20px,5vw,64px)]";

/**
 * Corporate testimonials.
 *
 * Renders nothing until at least one entry in lib/retreat.ts is marked
 * isPlaceholder: false. That guard is deliberate: an invented quote attributed
 * to a real company is a legal problem, not a copy shortcut, so the section
 * stays invisible rather than shipping filler.
 */
export default function RetreatTestimonials() {
  if (PUBLISHABLE_TESTIMONIALS.length === 0) return null;

  return (
    <section className={`${container} py-[clamp(56px,7vw,96px)] border-t border-line`}>
      <SectionHeading
        eyebrow="Ce spun echipele"
        title="Grupuri care au lucrat aici"
        center
        className="mb-[clamp(36px,5vw,56px)]"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PUBLISHABLE_TESTIMONIALS.map((t) => (
          <figure
            key={t.quote}
            className="m-0 flex flex-col rounded-xl border border-line bg-card p-[clamp(20px,4vw,28px)]"
          >
            <blockquote className="m-0 flex-1 text-[15px] leading-relaxed text-[#33392f]">
              {t.quote}
            </blockquote>
            <figcaption className="mt-5 border-t border-line pt-4 text-[13.5px]">
              <span className="font-semibold text-pine">{t.author}</span>
              <span className="block text-muted-2">{t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
