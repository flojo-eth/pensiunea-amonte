import type { Metadata } from "next";
import PrivateEventsPage, { privateEventsMetadata } from "@/components/pages/PrivateEventsPage";

export const metadata: Metadata = privateEventsMetadata("de");

export default function Page() {
  return <PrivateEventsPage lang="de" />;
}
