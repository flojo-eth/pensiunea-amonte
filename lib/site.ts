// Single source of truth for site-wide identity, URLs and indexing.
//
// Staging note: florinluca.ro is staging only — the live content stays on
// pensiunea-amonte.ro, so the prototype must NOT be indexed. At migration time
// flip the two constants below (SITE_URL + INDEXABLE) and nothing else changes.
export const SITE_URL = "https://florinluca.ro";
export const INDEXABLE = false;

export const SITE_NAME = "Pensiunea Amonte";
export const SITE_TAGLINE = "Pensiune montană";
export const SITE_DESCRIPTION =
  "Pensiunea Amonte — refugiu de munte în Valea Avrigului, la poalele Munților Făgăraș, la 30 de minute de Sibiu. 10 spații de cazare, jacuzzi & saună, terasă panoramică, sală pentru grupuri.";

// Google Tag Manager container — GA4 (G-KX3GQHYHF6) is delivered through GTM,
// so it is never added manually. Stays active on staging for GTM Preview tests.
export const GTM_ID = "GTM-NTF57TM9";
