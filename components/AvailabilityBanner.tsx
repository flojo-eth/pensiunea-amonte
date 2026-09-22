"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Terracotta strip above the nav.
 *
 * Route-aware on purpose: the default line sells scarcity ("ultimele locuri"),
 * which reads wrong on /retreat-corporate, where the offer is exclusivity of the
 * whole property. Same slot, different promise.
 */
const DEFAULT_BANNER = {
  text: "Ultimele locuri disponibile pentru weekend-urile din sezon - rezervă din timp",
  cta: "cere disponibilitate →",
  href: "/rezerva-acum",
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
