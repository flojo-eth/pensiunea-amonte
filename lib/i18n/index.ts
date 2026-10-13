// Hands each page the content for its language. Server-side: the content
// modules are large, so client components receive what they need as props
// (or read lib/i18n/ui.ts) instead of importing this.

import * as contentRo from "@/lib/content";
import * as retreatRo from "@/lib/retreat";
import { COPY as copyRo, type Copy } from "@/lib/copy";
import type { Lang } from "./config";

export * from "./config";

/** The exports of lib/content.ts that change with the language. */
type ContentKeys =
  | "WHATSAPP_URL"
  | "LOCATION"
  | "STATS"
  | "ROOMS"
  | "AMENITIES"
  | "SERVICE_DETAILS"
  | "ACTIVITIES"
  | "GALLERY"
  | "RATING_SUMMARY"
  | "REVIEWS"
  | "GROUP_REVIEWS"
  | "PRIVATE_EVENTS_WHATSAPP"
  | "NAV_LINKS"
  | "AUDIENCES"
  | "HOSTS"
  | "CANCELLATION"
  | "ABOUT_FAQ_BASE"
  | "ABOUT_FAQ_FB"
  | "ABOUT_FEATURES"
  | "ABOUT_FACILITIES"
  | "ABOUT_FACILITIES_FB"
  | "ROOM_SPA_NOTE"
  | "EVENT_CARDS";

/** The exports of lib/retreat.ts that change with the language. */
type RetreatKeys =
  | "RETREAT_WHATSAPP_MESSAGE"
  | "ROOM_CONFIG"
  | "ROOM_NOTES"
  | "WORKSPACES"
  | "LEISURE"
  | "AGENDA"
  | "PRICING_LINES"
  | "PRICING_FNB_LINES"
  | "BOOKING_STEPS"
  | "FAQ"
  | "ACCESS_POINTS"
  | "FNB_ITEMS";

export type Content = Pick<typeof contentRo, ContentKeys>;
export type Retreat = Pick<typeof retreatRo, RetreatKeys>;

const CONTENT: Record<Lang, Content> = { ro: contentRo, en: contentRo };
const RETREAT: Record<Lang, Retreat> = { ro: retreatRo, en: retreatRo };
const COPY: Record<Lang, Copy> = { ro: copyRo, en: copyRo };

export const getContent = (lang: Lang) => CONTENT[lang];
export const getRetreat = (lang: Lang) => RETREAT[lang];
export const getCopy = (lang: Lang) => COPY[lang];
