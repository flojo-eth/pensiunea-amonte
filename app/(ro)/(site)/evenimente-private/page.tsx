import type { Metadata } from "next";
import PrivateEventsPage, { privateEventsMetadata } from "@/components/pages/PrivateEventsPage";

export const metadata: Metadata = privateEventsMetadata("ro");

export default function Page() {
  return <PrivateEventsPage lang="ro" />;
}
