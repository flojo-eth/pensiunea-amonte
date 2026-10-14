"use client";

import WhatsAppButton from "./WhatsAppButton";
import { RETREAT_PAGE_SOURCE } from "@/lib/retreat";
import { OFFER_FORM_ANCHOR } from "@/lib/i18n/config";
import { useLang } from "@/lib/i18n/useLang";
import { UI } from "@/lib/i18n/ui";

/**
 * Fixed conversion bar, mobile only.
 *
 * Most of this page's traffic lands from LinkedIn and Ads on a phone, where the
 * hero CTA scrolls away within one swipe. The page adds bottom padding of its
 * own so this never covers the final section.
 *
 * `whatsappHref` comes from the page, with the message in its language.
 */
export default function StickyMobileCta({ whatsappHref }: { whatsappHref: string }) {
  const lang = useLang();
  const t = UI[lang].sticky;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-card/95 px-4 py-3 backdrop-blur-sm md:hidden">
      <div className="flex gap-3">
        {/* The offer form leads: filled, on the left. WhatsApp stays as the
            quicker alternative, outlined, on the right. */}
        <a
          href={`#${OFFER_FORM_ANCHOR[lang]}`}
          className="flex-1 rounded-full bg-terracotta px-4 py-3 text-center text-[14px] font-semibold text-paper no-underline"
        >
          {t.requestOffer}
        </a>
        <WhatsAppButton
          href={whatsappHref}
          pageSource={RETREAT_PAGE_SOURCE}
          ctaPosition="sticky"
          className="flex-1 rounded-full border border-forest px-4 py-3 text-center text-[14px] font-semibold text-forest no-underline"
        >
          {t.whatsapp}
        </WhatsAppButton>
      </div>
    </div>
  );
}
