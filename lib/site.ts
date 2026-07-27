// Single source of truth for site-wide identity, URLs and indexing.
//
// MUST include the www: Vercel serves the site on www and 308-redirects the
// apex to it. Declaring the apex here made every canonical, every sitemap entry
// and the robots.txt sitemap line point at a URL that immediately redirects.
// Keep this in step with WEBSITE in lib/content.ts and with the Vercel domain
// configuration — if the redirect direction ever flips, both must follow.
export const SITE_URL = "https://www.pensiunea-amonte.ro";

// Indexarea activată pentru producție
export const INDEXABLE = true;

// F&B și events active în producție conform confirmării
export const SHOW_FB_AND_EVENTS = true;

export const SITE_NAME = "Pensiunea Amonte";
export const SITE_TAGLINE = "Pensiune montană";
export const SITE_DESCRIPTION =
  "Pensiunea Amonte - refugiu de munte în Valea Avrigului, la poalele Munților Făgăraș, la 30 de minute de Sibiu. 10 spații de cazare, jacuzzi & saună, terasă panoramică, sală pentru grupuri.";

// Google Tag Manager container - GA4 (G-KX3GQHYHF6) is delivered through GTM,
// so it is never added manually. Stays active on staging for GTM Preview tests.
export const GTM_ID = "GTM-NTF57TM9";
