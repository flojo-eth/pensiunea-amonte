import Link from "next/link";
import { href, type Lang, type RouteId } from "@/lib/i18n/config";

type Translated = Exclude<Lang, "ro">;

const TEXT: Record<Translated, { note: string; link: string }> = {
  en: {
    note: "This English version is a translation provided for convenience. The Romanian version is the legally binding text and prevails in case of any difference between the two.",
    link: "Read the Romanian version",
  },
  de: {
    note: "Diese deutsche Fassung ist eine Übersetzung, die zu Ihrer Information bereitgestellt wird. Rechtlich verbindlich ist die rumänische Fassung; bei Abweichungen hat sie Vorrang.",
    link: "Rumänische Fassung lesen",
  },
};

/**
 * Shown at the top of the translated legal pages. The Romanian text is the one
 * that binds Hostillo S.R.L.; the others are courtesy translations, and say so
 * before anything else.
 */
export default function LegalTranslationNote({ lang, page }: { lang: Translated; page: RouteId }) {
  const t = TEXT[lang];
  return (
    <p className="rounded-lg border-l-4 border-forest bg-pine/5 p-[clamp(14px,3vw,20px)] text-sm text-[#33392f]">
      {t.note}{" "}
      <Link href={href("ro", page)} hrefLang="ro" className="font-semibold text-forest underline underline-offset-2">
        {t.link}
      </Link>
      .
    </p>
  );
}
