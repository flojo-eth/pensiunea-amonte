"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { canonicalRoPath, href, OFFER_FORM_ANCHOR, ROUTES } from "@/lib/i18n/config";
import { useLang } from "@/lib/i18n/useLang";
import { UI } from "@/lib/i18n/ui";

/**
 * Terracotta strip above the nav.
 *
 * Route-aware on purpose: each page group gets the line that fits it.
 * - /retreat-corporate: teams for next year, to the offer form on the page.
 * - /evenimente and /evenimente-private: private events, to the events page.
 * - everywhere else: next year's bookings are open, to the booking page.
 */
export default function AvailabilityBanner() {
  const pathname = usePathname();
  const lang = useLang();
  const t = UI[lang].banner;
  const ro = canonicalRoPath(pathname);
  const banner =
    ro === ROUTES.corporate.ro
      ? { ...t.corporate, href: `${href(lang, "corporate")}#${OFFER_FORM_ANCHOR[lang]}` }
      : ro === ROUTES.events.ro || ro === ROUTES.privateEvents.ro
        ? { ...t.events, href: href(lang, "privateEvents") }
        : { ...t.default, href: href(lang, "book") };

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
