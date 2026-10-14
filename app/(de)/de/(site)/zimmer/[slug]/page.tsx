import type { Metadata } from "next";
import RoomPage, { roomMetadata, roomSlugs } from "@/components/pages/RoomPage";

export function generateStaticParams() {
  return roomSlugs("de");
}

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return roomMetadata("de", (await params).slug);
}

export default async function Page({ params }: Props) {
  return <RoomPage lang="de" slug={(await params).slug} />;
}
