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

export {};
