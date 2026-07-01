"use client";

import { WHATSAPP_URL } from "@/lib/content";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Override the destination if ever needed; defaults to the tracked WA link. */
  href?: string;
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
}: Props) {
  function handleClick() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "whatsapp_click" });
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
