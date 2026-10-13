"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { canonicalRoPath, href, OFFER_FORM_ANCHOR, ROUTES } from "@/lib/i18n/config";
import { useLang } from "@/lib/i18n/useLang";
import { UI } from "@/lib/i18n/ui";

/**
 * Terracotta strip above the nav.
 *
 * Route-aware on purpose. Everywhere else the strip is the one place a leisure
 * visitor is told the property also takes teams, so it points at the offer form
 * on /retreat-corporate. On that page the visitor is already there, so the line
 * switches from discovery to lead time. Same slot, different job.
 */
export default function AvailabilityBanner() {
  const pathname = usePathname();
  const lang = useLang();
  const t = UI[lang].banner;
  const onCorporate = canonicalRoPath(pathname) === ROUTES.corporate.ro;
  const banner = {
    ...(onCorporate ? t.corporate : t.default),
    href: `${href(lang, "corporate")}#${OFFER_FORM_ANCHOR[lang]}`,
  };

  return (
    <div className="bg-terracotta px-5 py-3 text-center text-sm font-medium tracking-[0.3px] text-[#fbf4e9]">
      {banner.text} ·{" "}
      <Link
        href={banner.href}
        className="font-semibold text-[#fbf4e9] underline-offset-2 hover:underline"
      >
        {banner.cta}
      </Link>
    </div>
  );
}
