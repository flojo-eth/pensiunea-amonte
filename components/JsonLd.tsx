/**
 * Structured data, written straight into the prerendered HTML.
 *
 * Deliberately a plain <script>, not next/script: next/script ships the payload
 * in the React flight data and injects it only after hydration, so crawlers
 * that do not run JavaScript (most AI bots) saw no structured data at all.
 * `<` is escaped so no string in the data can close the tag early.
 */
export default function JsonLd({ id, data }: { id?: string; data: object }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
