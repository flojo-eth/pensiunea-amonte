"use client";

import { useState } from "react";
import { CONTACT, GOOGLE_MAPS_URL } from "@/lib/content";
import { useConsent } from "@/lib/useConsent";

const EMBED_SRC =
  "https://maps.google.com/maps?q=Pensiunea%20Amonte,%20Avrig,%20Romania&t=&z=13&ie=UTF8&iwloc=&output=embed";

/**
 * Google Maps embed, gated on cookie consent.
 *
 * The embed sets Google cookies as soon as it loads, so it must not render
 * before the visitor agrees. Visitors who decline still get the address and a
 * link out to Maps — declining costs them no information, only the inline frame.
 * "Afișează harta" is a per-visit override and deliberately does not change the
 * stored consent.
 */
export default function ConsentMap() {
  const consent = useConsent();
  const [loadedOnce, setLoadedOnce] = useState(false);

  const show = consent === "accepted" || loadedOnce;

  return (
    <div className="relative min-h-[340px] flex-[1.4] basis-[380px] overflow-hidden rounded-xl bg-[#e9e8e2]">
      {show ? (
        <iframe
          src={EMBED_SRC}
          title="Harta - Pensiunea Amonte, Valea Avrigului"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
          <p className="m-0 max-w-[38ch] text-[14px] leading-relaxed text-muted">
            Harta este încărcată de Google și poate seta cookie-uri. O afișăm
            doar cu acordul tău.
          </p>
          <p className="m-0 text-[15px] font-medium text-[#33392f]">
            {CONTACT.address}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setLoadedOnce(true)}
              className="cursor-pointer rounded-full border border-line-2 bg-card px-5 py-2.5 text-[13px] font-semibold text-forest transition-colors hover:border-muted-2"
            >
              Afișează harta
            </button>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-semibold text-forest underline-offset-2 hover:underline"
            >
              Deschide în Google Maps →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
