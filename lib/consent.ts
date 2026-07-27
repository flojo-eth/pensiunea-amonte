// Server-safe half of the consent layer: constants, plain functions and the
// inline bootstrap script. Deliberately free of React imports so app/layout.tsx
// (a server component) can build the inline script from the same source of truth.
// The hook lives in lib/useConsent.ts.

export const CONSENT_KEY = "cookie-consent";
export type ConsentValue = "accepted" | "declined";

/** Fired on the window when the visitor's choice changes in this tab. */
export const CONSENT_EVENT = "amonte:consent";

/** Google Consent Mode v2 signals, granted once the visitor accepts. */
const GRANTED = {
  ad_storage: "granted",
  ad_user_data: "granted",
  ad_personalization: "granted",
  analytics_storage: "granted",
} as const;

const DENIED = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
} as const;

/**
 * Inline script for <head>, before the GTM loader.
 *
 * It must run during HTML parse so every tag starts denied. It also replays a
 * returning visitor's stored choice here rather than from React — waiting for
 * hydration would leave GTM denied for the first several hundred milliseconds
 * and lose the pageview of a visitor who already accepted.
 */
export function consentBootstrapScript() {
  return `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
gtag('consent','default',${JSON.stringify({
    ...DENIED,
    functionality_storage: "granted",
    security_storage: "granted",
    wait_for_update: 500,
  })});
try{if(localStorage.getItem('${CONSENT_KEY}')==='accepted'){gtag('consent','update',${JSON.stringify(
    GRANTED,
  )});}}catch(e){}`;
}

export function readConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "accepted" || v === "declined" ? v : null;
  } catch {
    // Safari private mode and similar throw on localStorage access.
    return null;
  }
}

/** Records the choice, tells GTM about it, and notifies subscribers. */
export function setConsent(value: ConsentValue) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* choice still applies for this page view */
  }
  window.gtag?.("consent", "update", value === "accepted" ? GRANTED : DENIED);
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function subscribeConsent(onChange: () => void) {
  window.addEventListener(CONSENT_EVENT, onChange);
  // Keep other open tabs in step when the choice is made in one of them.
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CONSENT_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}
