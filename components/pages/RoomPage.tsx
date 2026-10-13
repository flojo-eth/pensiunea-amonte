import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import RoomDetailsClient from "@/components/RoomDetailsClient";
import { getContent, roomHref, ROOM_SLUGS, type Lang, type RoomId } from "@/lib/i18n";

/** Romanian slug (the room id) from the slug in the URL, in either language. */
function roomIdFromSlug(lang: Lang, slug: string): RoomId | undefined {
  const ids = Object.keys(ROOM_SLUGS) as RoomId[];
  return lang === "ro" ? ids.find((id) => id === slug) : ids.find((id) => ROOM_SLUGS[id] === slug);
}

/** The URL slugs of every room, for generateStaticParams. */
export function roomSlugs(lang: Lang) {
  return getContent(lang).ROOMS.map((r) => ({
    slug: lang === "ro" ? r.slug : ROOM_SLUGS[r.slug],
  }));
}

function findRoom(lang: Lang, slug: string) {
  const id = roomIdFromSlug(lang, slug);
  return getContent(lang).ROOMS.find((r) => r.slug === id);
}

export function roomMetadata(lang: Lang, slug: string): Metadata {
  const room = findRoom(lang, slug);
  if (!room) return {};
  // The room's own hero photo makes the WhatsApp share preview show that room
  // rather than the generic exterior shot.
  return pageMeta({
    lang,
    title: room.name,
    description: room.metaDesc,
    path: roomHref(lang, room.slug),
    image: room.photo,
  });
}

export default function RoomPage({ lang, slug }: { lang: Lang; slug: string }) {
  const room = findRoom(lang, slug);
  if (!room) notFound();

  return <RoomDetailsClient room={room} spaNote={getContent(lang).ROOM_SPA_NOTE} />;
}
