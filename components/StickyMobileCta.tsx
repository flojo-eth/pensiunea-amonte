"use client";

import WhatsAppButton from "./WhatsAppButton";
import { whatsappUrl } from "@/lib/content";
import { RETREAT_WHATSAPP_MESSAGE, RETREAT_PAGE_SOURCE } from "@/lib/retreat";

/**
 * Fixed conversion bar, mobile only.
 *
 * Most of this page's traffic lands from LinkedIn and Ads on a phone, where the
 * hero CTA scrolls away within one swipe. The page adds bottom padding of its
 * own so this never covers the final section.
 */
export default function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-card/95 px-4 py-3 backdrop-blur-sm md:hidden">
      <div className="flex gap-3">
        <WhatsAppButton
          href={whatsappUrl(RETREAT_WHATSAPP_MESSAGE)}
          pageSource={RETREAT_PAGE_SOURCE}
          ctaPosition="sticky"
          className="flex-1 rounded-full bg-terracotta px-4 py-3 text-center text-[14px] font-semibold text-paper no-underline"
        >
          WhatsApp
        </WhatsAppButton>
        <a
          href="#cere-oferta"
          className="flex-1 rounded-full border border-forest px-4 py-3 text-center text-[14px] font-semibold text-forest no-underline"
        >
          Cere oferta
        </a>
      </div>
    </div>
  );
}
