// Languages, and the address of every page in each one.
//
// Romanian is the default and keeps the URLs it has always had. English lives
// under /en with English slugs. This file is client-safe on purpose: the
// language switcher and pushWhatsAppClick() both map addresses with it.

export const LANGS = ["ro", "en"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "ro";

/** Open Graph locale per language. */
export const OG_LOCALE: Record<Lang, string> = { ro: "ro_RO", en: "en_US" };

/** Each language's name in that language, for the switcher's accessible labels. */
export const LANG_NAMES: Record<Lang, string> = { ro: "Română", en: "English" };

/** Every page, by a language-neutral id. */
export const ROUTES = {
  home: { ro: "/", en: "/en" },
  about: { ro: "/despre-noi", en: "/en/about-us" },
  rooms: { ro: "/camere", en: "/en/rooms" },
  rates: { ro: "/camere/tarife", en: "/en/rooms/rates" },
  gallery: { ro: "/galerie", en: "/en/gallery" },
  activities: { ro: "/activitati-in-zona", en: "/en/things-to-do" },
  services: { ro: "/servicii", en: "/en/services" },
  events: { ro: "/evenimente", en: "/en/events" },
  corporate: { ro: "/retreat-corporate", en: "/en/corporate-retreat" },
  book: { ro: "/rezerva-acum", en: "/en/book-now" },
  privacy: { ro: "/politica-de-confidentialitate", en: "/en/privacy-policy" },
  cookies: { ro: "/politica-de-cookie-uri", en: "/en/cookie-policy" },
  terms: { ro: "/termeni-si-conditii", en: "/en/terms-and-conditions" },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteId = keyof typeof ROUTES;

/** id of the offer form section on the corporate page, the target of every "cere oferta" link. */
export const OFFER_FORM_ANCHOR: Record<Lang, string> = { ro: "cere-oferta", en: "request-an-offer" };

/** Room slugs: the Romanian one is the room's id, the English one its English URL. */
export const ROOM_SLUGS = {
  "camera-dubla-deluxe": "deluxe-double-room",
  "camera-dubla-vedere-munte": "mountain-view-double-room",
  "studio-de-familie": "family-studio",
  "camera-cu-balcon": "double-room-with-balcony",
} as const satisfies Record<string, string>;

export type RoomId = keyof typeof ROOM_SLUGS;

export function href(lang: Lang, id: RouteId): string {
  return ROUTES[id][lang];
}

export function roomHref(lang: Lang, id: RoomId): string {
  return lang === "ro" ? `${ROUTES.rooms.ro}/${id}` : `${ROUTES.rooms.en}/${ROOM_SLUGS[id]}`;
}

/** Both language versions of a page, for hreflang and the switcher. */
export function pagePaths(id: RouteId): Record<Lang, string> {
  return ROUTES[id];
}

export function roomPaths(id: RoomId): Record<Lang, string> {
  return { ro: roomHref("ro", id), en: roomHref("en", id) };
}

export function langOf(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ro";
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
    const id =
      from === "ro"
        ? (slug in ROOM_SLUGS ? (slug as RoomId) : undefined)
        : (Object.keys(ROOM_SLUGS) as RoomId[]).find((k) => ROOM_SLUGS[k] === slug);
    if (id) return roomHref(target, id);
  }
  return ROUTES.home[target];
}

/**
 * Both language versions of any path, plus x-default (Romanian), for hreflang
 * in the page metadata and in the sitemap.
 */
export function hreflangPaths(pathname: string): Record<Lang | "x-default", string> {
  const ro = counterpartPath(pathname, "ro");
  return { ro, en: counterpartPath(pathname, "en"), "x-default": ro };
}

/**
 * The Romanian address of the current page, whatever language it is shown in.
 * Lets tracking report one language-neutral page_source per page, so an
 * English visitor on the corporate page still sends "retreat-corporate".
 */
export function canonicalRoPath(pathname: string): string {
  return langOf(pathname) === "ro" ? stripTrailingSlash(pathname) : counterpartPath(pathname, "ro");
}
