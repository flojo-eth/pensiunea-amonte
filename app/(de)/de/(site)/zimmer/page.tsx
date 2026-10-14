import type { Metadata } from "next";
import RoomsPage, { roomsMetadata } from "@/components/pages/RoomsPage";

export const metadata: Metadata = roomsMetadata("de");

export default function Page() {
  return <RoomsPage lang="de" />;
}
