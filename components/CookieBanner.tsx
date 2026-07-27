"use client";

import Link from "next/link";
import { btnTerracotta } from "@/lib/ui";
import { setConsent } from "@/lib/consent";
import { useConsent } from "@/lib/useConsent";
import { useIsHydrated } from "@/lib/hooks";

/**
 * GDPR consent banner.
 *
 * The choice is not cosmetic: it drives Google Consent Mode v2 (see setConsent
 * in lib/consent.ts and the defaults inline in app/layout.tsx) and gates the
 * Google Maps embed on the homepage. "Doar necesare" leaves every marketing and
 * analytics signal denied.
 */
export default function CookieBanner() {
  const isHydrated = useIsHydrated();
  const consent = useConsent();

  // Rendering nothing before hydration keeps the banner out of the static HTML,
  // so a returning visitor never sees it flash in before their stored choice is read.
  if (!isHydrated || consent !== null) return null;

  return (
    <div className="fixed bottom-5 left-5 right-5 z-50 mx-auto max-w-[650px] rounded-xl border border-line bg-paper p-6 shadow-xl transition-all duration-300 animate-slide-up md:left-auto md:right-8">
      <div className="flex flex-col gap-4">
        <div>
          <h4 className="font-serif text-[18px] font-semibold text-pine mb-1.5">
            Politica de Cookie-uri & Confidențialitate
          </h4>
          <p className="text-[13.5px] leading-relaxed text-muted">
            Folosim cookie-uri pentru a optimiza funcționarea site-ului, a analiza traficul și a îmbunătăți experiența ta. Prin apăsarea butonului „Acceptă tot”, ești de acord cu stocarea acestora. Poți citi detaliile în{" "}
            <Link href="/politica-de-confidentialitate" className="underline hover:text-pine">
              Politică de Confidențialitate
            </Link>{" "}
            și{" "}
            <Link href="/politica-de-cookie-uri" className="underline hover:text-pine">
              Politică de Cookie-uri
            </Link>.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-3 border-t border-line pt-4">
          <button
            onClick={() => setConsent("declined")}
            className="rounded-full border border-line-2 px-5 py-2.5 text-[13px] font-semibold text-forest hover:border-muted-2 transition-colors cursor-pointer"
          >
            Doar necesare
          </button>
          <button
            onClick={() => setConsent("accepted")}
            className={`${btnTerracotta} px-5 py-2.5 text-[13px] cursor-pointer`}
          >
            Acceptă tot
          </button>
        </div>
      </div>
    </div>
  );
}
