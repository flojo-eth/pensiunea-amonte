// Hands each page the content for its language. Server-side: the content
// modules are large, so client components receive what they need as props
// (or read lib/i18n/ui.ts) instead of importing this.

import * as contentRo from "@/lib/content";
import * as contentEn from "@/lib/content.en";
import * as retreatRo from "@/lib/retreat";
import * as retreatEn from "@/lib/retreat.en";
import { COPY as copyRo, type Copy } from "@/lib/copy";
import { COPY as copyEn } from "@/lib/copy.en";
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

// Typed maps: if the English modules miss an export listed above, or give it
// a different shape, this is where the build fails.
const CONTENT: Record<Lang, Content> = { ro: contentRo, en: contentEn };
const RETREAT: Record<Lang, Retreat> = { ro: retreatRo, en: retreatEn };
const COPY: Record<Lang, Copy> = { ro: copyRo, en: copyEn };

export const getContent = (lang: Lang) => CONTENT[lang];
export const getRetreat = (lang: Lang) => RETREAT[lang];
export const getCopy = (lang: Lang) => COPY[lang];
