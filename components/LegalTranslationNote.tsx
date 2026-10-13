import Link from "next/link";

/**
 * Shown at the top of the English legal pages. The Romanian text is the one
 * that binds Hostillo S.R.L.; the English one is a courtesy translation, and
 * says so before anything else.
 */
export default function LegalTranslationNote({ romanianHref }: { romanianHref: string }) {
  return (
    <p className="rounded-lg border-l-4 border-forest bg-pine/5 p-[clamp(14px,3vw,20px)] text-sm text-[#33392f]">
      This English version is a translation provided for convenience. The
      Romanian version is the legally binding text and prevails in case of any
      difference between the two.{" "}
      <Link href={romanianHref} hrefLang="ro" className="font-semibold text-forest underline underline-offset-2">
        Read the Romanian version
      </Link>
      .
    </p>
  );
}
