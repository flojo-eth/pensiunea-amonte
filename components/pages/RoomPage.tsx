import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import RoomDetailsClient from "@/components/RoomDetailsClient";
import { getContent, roomHref, roomIdFromSlug, ROOM_SLUGS, type Lang } from "@/lib/i18n";

/** The URL slugs of every room, for generateStaticParams. */
export function roomSlugs(lang: Lang) {
  return getContent(lang).ROOMS.map((r) => ({
    slug: ROOM_SLUGS[r.slug][lang],
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
