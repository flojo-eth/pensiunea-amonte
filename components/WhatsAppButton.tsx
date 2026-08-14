"use client";

import { WHATSAPP_URL } from "@/lib/content";
import { pushDataLayer } from "@/lib/gtm";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Override the destination if ever needed; defaults to the tracked WA link. */
  href?: string;
  /**
   * Tags the conversion with its origin, e.g. "retreat-corporate", so B2B and
   * leisure clicks can be told apart in GA4. Omitted for the site-wide CTAs.
   */
  pageSource?: string;
};

/**
 * The one tracked conversion on the site.
 *
 * Renders a REAL anchor - no preventDefault, no window.location. onClick only
 * pushes the GTM event, then default navigation proceeds. The event name must
 * stay exactly 'whatsapp_click' to match the GTM trigger / Google Ads conversion.
 */
export default function WhatsAppButton({
  children,
  className,
  href = WHATSAPP_URL,
  pageSource,
}: Props) {
  function handleClick() {
    pushDataLayer({
      event: "whatsapp_click",
      ...(pageSource ? { page_source: pageSource } : {}),
    });
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
