declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
  }
}

/** Pushes an event onto the GTM dataLayer. No-op during SSR. */
export function pushDataLayer(event: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

/** "/" → "home"; "/retreat-corporate" → "retreat-corporate" (fără slash, ca să se potrivească triggerul corporate). */
function pageSourceFromPath() {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, "");
  return path === "" ? "home" : path;
}

type WhatsAppClickFields = {
  /** Etichetă pentru CTA-urile care nu țin de pagina lor ("footer"). Implicit, calea curentă. */
  pageSource?: string;
  ctaPosition?: string;
  eventLabel?: string;
  eventCategory?: string;
};

/**
 * Singurul loc din care pleacă `whatsapp_click`.
 *
 * GTM ține ultima valoare a fiecărei chei în modelul lui, deci un push care
 * omite `page_source` lasă în loc valoarea paginii anterioare, iar GTM o
 * citește pe aceea. Pe navigare client-side, un click de pe /rezerva-acum
 * ajungea astfel raportat ca `retreat-corporate` si pornea conversia
 * corporate pentru o rezervare obisnuita. De aceea scriem intotdeauna setul
 * complet de chei, cu null explicit acolo unde câmpul nu se aplică, iar calea
 * se citeste în momentul clickului, nu la montarea componentei.
 */
export function pushWhatsAppClick(fields: WhatsAppClickFields = {}) {
  if (typeof window === "undefined") return;
  pushDataLayer({
    event: "whatsapp_click",
    page_source: fields.pageSource ?? pageSourceFromPath(),
    cta_position: fields.ctaPosition ?? null,
    event_label: fields.eventLabel ?? null,
    event_category: fields.eventCategory ?? null,
  });
}

export {};
