import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import RoomDetailsClient from "@/components/RoomDetailsClient";
import { ROOMS, getRoom } from "@/lib/content";

export function generateStaticParams() {
  return ROOMS.map((r) => ({ slug: r.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) return {};
  // The room's own hero photo makes the WhatsApp share preview show that room
  // rather than the generic exterior shot.
  return pageMeta({
    title: room.name,
    description: room.desc,
    path: `/camere/${room.slug}`,
    image: room.photo,
  });
}

export default async function RoomPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) notFound();

  return <RoomDetailsClient room={room} />;
}
