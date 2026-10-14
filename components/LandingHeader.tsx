import Image from "next/image";
import LanguageMenu from "./LanguageMenu";
import type { Lang } from "@/lib/i18n/config";
import { UI } from "@/lib/i18n/ui";

/**
 * Header for the corporate landing page: the nav bar's look, without the nav.
 *
 * The page is meant to keep a visitor on it until they ask for an offer, like
 * /rezerva-acum. So the logo is not a link and there are no menu items; only
 * the language picker stays, since someone who landed in the wrong language
 * still needs a way out of that.
 */
export default function LandingHeader({ lang }: { lang: Lang }) {
  const t = UI[lang].nav;
  return (
    <header className="sticky top-0 z-40 bg-pine/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-[clamp(20px,5vw,64px)] py-4">
        <div className="flex items-center gap-3 text-card-2">
          <Image
            src="/logo_amonte.jpg"
            alt="Pensiunea Amonte"
            width={44}
            height={44}
            priority
            className="h-11 w-11 rounded-lg object-cover"
          />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[28px] font-bold tracking-[0.5px]">Amonte</span>
            <span className="mt-[3px] text-[9.5px] uppercase tracking-[3.5px] opacity-75">
              {t.tagline}
            </span>
          </span>
        </div>
        <LanguageMenu />
      </div>
    </header>
  );
}
