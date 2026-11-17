// Server-safe half of the consent layer: constants, plain functions and the
// inline bootstrap script. Deliberately free of React imports so
// components/RootDocument.tsx (a server component) can build the inline script
// from the same source of truth.
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
 * Inline script for <head>.
 *
 * Basic consent mode: Google Tag Manager is not loaded at all until the
 * visitor accepts, so no request reaches Google or Meta before that (not even
 * the cookieless pings of advanced mode, which still send the IP address).
 * Flo's call, November 2026.
 *
 * The script defines window.__loadGtm, which injects GTM once, and calls it
 * right away for a returning visitor who already accepted. It runs during
 * HTML parse so that visitor's pageview is not lost waiting for hydration.
 * The Consent Mode signals stay as a second layer: default denied, granted
 * on accept.
 */
export function consentBootstrapScript(gtmId: string) {
  return `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
gtag('consent','default',${JSON.stringify({
    ...DENIED,
    functionality_storage: "granted",
    security_storage: "granted",
  })});
window.__loadGtm=function(){if(window.__gtmLoaded)return;window.__gtmLoaded=true;
dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var j=document.createElement('script');j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id=${gtmId}';
document.head.appendChild(j);};
try{if(localStorage.getItem('${CONSENT_KEY}')==='accepted'){gtag('consent','update',${JSON.stringify(
    GRANTED,
  )});window.__loadGtm();}}catch(e){}`;
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
  // Basic consent mode: GTM loads only now, and only on accept.
  if (value === "accepted") window.__loadGtm?.();
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

/**
 * Forgets the stored choice so the banner asks again (footer "Setări cookie").
 * Signals go back to denied until the visitor answers: withdrawing consent
 * must be as easy as giving it.
 */
export function resetConsent() {
  try {
    window.localStorage.removeItem(CONSENT_KEY);
  } catch {
    /* nothing stored to forget */
  }
  window.gtag?.("consent", "update", DENIED);
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
