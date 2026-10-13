import type { Metadata } from "next";
import RoomPage, { roomMetadata, roomSlugs } from "@/components/pages/RoomPage";

export function generateStaticParams() {
  return roomSlugs("ro");
}

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return roomMetadata("ro", (await params).slug);
}

export default async function Page({ params }: Props) {
  return <RoomPage lang="ro" slug={(await params).slug} />;
}
