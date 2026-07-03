import { notFound } from "next/navigation";
import type { Metadata } from "next";
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
  return {
    title: room.name,
    description: room.desc,
    alternates: { canonical: `/camere/${room.slug}` },
  };
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
