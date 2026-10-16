// Languages, and the address of every page in each one.
//
// Romanian is the default and keeps the URLs it has always had. English lives
// under /en and German under /de, each with its own slugs (ASCII only: "ueber",
// not "über", so the URLs survive being copied anywhere). This file is
// client-safe on purpose: the
// language switcher and pushWhatsAppClick() both map addresses with it.

export const LANGS = ["ro", "en", "de"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "ro";

/** Open Graph locale per language. */
export const OG_LOCALE: Record<Lang, string> = { ro: "ro_RO", en: "en_US", de: "de_DE" };

/** Each language's name in that language, for the switcher's accessible labels. */
export const LANG_NAMES: Record<Lang, string> = { ro: "Română", en: "English", de: "Deutsch" };

/** Every page, by a language-neutral id. */
export const ROUTES = {
  home: { ro: "/", en: "/en", de: "/de" },
  about: { ro: "/despre-noi", en: "/en/about-us", de: "/de/ueber-uns" },
  rooms: { ro: "/camere", en: "/en/rooms", de: "/de/zimmer" },
  rates: { ro: "/camere/tarife", en: "/en/rooms/rates", de: "/de/zimmer/preise" },
  gallery: { ro: "/galerie", en: "/en/gallery", de: "/de/galerie" },
  activities: { ro: "/activitati-in-zona", en: "/en/things-to-do", de: "/de/ausflugsziele" },
  services: { ro: "/servicii", en: "/en/services", de: "/de/leistungen" },
  events: { ro: "/evenimente", en: "/en/events", de: "/de/veranstaltungen" },
  privateEvents: { ro: "/evenimente-private", en: "/en/private-events", de: "/de/private-feiern" },
  corporate: { ro: "/retreat-corporate", en: "/en/corporate-retreat", de: "/de/firmen-retreat" },
  book: { ro: "/rezerva-acum", en: "/en/book-now", de: "/de/jetzt-buchen" },
  privacy: { ro: "/politica-de-confidentialitate", en: "/en/privacy-policy", de: "/de/datenschutz" },
  cookies: { ro: "/politica-de-cookie-uri", en: "/en/cookie-policy", de: "/de/cookie-richtlinie" },
  terms: { ro: "/termeni-si-conditii", en: "/en/terms-and-conditions", de: "/de/agb" },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteId = keyof typeof ROUTES;

/** id of the offer form section on the corporate page, the target of every "cere oferta" link. */
export const OFFER_FORM_ANCHOR: Record<Lang, string> = {
  ro: "cere-oferta",
  en: "request-an-offer",
  de: "angebot-anfordern",
};

/** Room slugs per language. The Romanian one doubles as the room's id. */
export const ROOM_SLUGS = {
  "camera-dubla-deluxe": {
    ro: "camera-dubla-deluxe",
    en: "deluxe-double-room",
    de: "deluxe-doppelzimmer",
  },
  "camera-dubla-vedere-munte": {
    ro: "camera-dubla-vedere-munte",
    en: "mountain-view-double-room",
    de: "doppelzimmer-mit-bergblick",
  },
  "studio-de-familie": {
    ro: "studio-de-familie",
    en: "family-studio",
    de: "familienstudio",
  },
  "camera-cu-balcon": {
    ro: "camera-cu-balcon",
    en: "double-room-with-balcony",
    de: "doppelzimmer-mit-balkon",
  },
} as const satisfies Record<string, Record<Lang, string>>;

export type RoomId = keyof typeof ROOM_SLUGS;
const ROOM_IDS = Object.keys(ROOM_SLUGS) as RoomId[];

/** The room whose slug in `lang` is `slug`, if any. */
export function roomIdFromSlug(lang: Lang, slug: string): RoomId | undefined {
  return ROOM_IDS.find((id) => ROOM_SLUGS[id][lang] === slug);
}

export function href(lang: Lang, id: RouteId): string {
  return ROUTES[id][lang];
}

export function roomHref(lang: Lang, id: RoomId): string {
  return `${ROUTES.rooms[lang]}/${ROOM_SLUGS[id][lang]}`;
}

/** Every language version of a page, for hreflang and the switcher. */
export function pagePaths(id: RouteId): Record<Lang, string> {
  return ROUTES[id];
}

export function roomPaths(id: RoomId): Record<Lang, string> {
  return Object.fromEntries(LANGS.map((l) => [l, roomHref(l, id)])) as Record<Lang, string>;
}

export function langOf(pathname: string): Lang {
  const prefixed = LANGS.find(
    (l) => l !== DEFAULT_LANG && (pathname === `/${l}` || pathname.startsWith(`/${l}/`)),
  );
  return prefixed ?? DEFAULT_LANG;
}

function stripTrailingSlash(p: string) {
  return p.length > 1 ? p.replace(/\/+$/, "") : p;
}

/**
 * The same page in the other language, or that language's home page when
 * there is no match. Used by the language switcher.
 */
export function counterpartPath(pathname: string, target: Lang): string {
  const path = stripTrailingSlash(pathname);
  const from = langOf(path);
  if (from === target) return path;

  for (const id of Object.keys(ROUTES) as RouteId[]) {
    if (ROUTES[id][from] === path) return ROUTES[id][target];
  }
  const roomBase = ROUTES.rooms[from] + "/";
  if (path.startsWith(roomBase)) {
    const slug = path.slice(roomBase.length);
    const id = roomIdFromSlug(from, slug);
    if (id) return roomHref(target, id);
  }
  return ROUTES.home[target];
}

/**
 * Every language version of any path, plus x-default (Romanian), for hreflang
 * in the page metadata and in the sitemap.
 */
export function hreflangPaths(pathname: string): Record<Lang | "x-default", string> {
  const paths = Object.fromEntries(LANGS.map((l) => [l, counterpartPath(pathname, l)]));
  return { ...paths, "x-default": paths[DEFAULT_LANG] } as Record<Lang | "x-default", string>;
}

/**
 * The Romanian address of the current page, whatever language it is shown in.
 * Lets tracking report one language-neutral page_source per page, so an
 * English visitor on the corporate page still sends "retreat-corporate".
 */
export function canonicalRoPath(pathname: string): string {
  return langOf(pathname) === "ro" ? stripTrailingSlash(pathname) : counterpartPath(pathname, "ro");
}
