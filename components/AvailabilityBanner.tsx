"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Terracotta strip above the nav.
 *
 * Route-aware on purpose. Everywhere else the strip is the one place a leisure
 * visitor is told the property also takes teams, so it points at the offer form
 * on /retreat-corporate. On that page the visitor is already there, so the line
 * switches from discovery to lead time. Same slot, different job.
 */
const DEFAULT_BANNER = {
  text: "Ultimele date libere pentru retreaturi de echipă",
  cta: "cere oferta →",
  href: "/retreat-corporate#cere-oferta",
};

const BY_ROUTE: Record<string, typeof DEFAULT_BANNER> = {
  "/retreat-corporate": {
    text: "Perioadele de toamnă pentru grupuri se rezervă cu 3-6 săptămâni înainte",
    cta: "cere oferta →",
    href: "/retreat-corporate#cere-oferta",
  },
};

export default function AvailabilityBanner() {
  const pathname = usePathname();
  const banner = BY_ROUTE[pathname] ?? DEFAULT_BANNER;

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
