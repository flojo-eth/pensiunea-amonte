import type { Metadata } from "next";
import RoomPage, { roomMetadata, roomSlugs } from "@/components/pages/RoomPage";

export function generateStaticParams() {
  return roomSlugs("en");
}

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return roomMetadata("en", (await params).slug);
}

export default async function Page({ params }: Props) {
  return <RoomPage lang="en" slug={(await params).slug} />;
}
