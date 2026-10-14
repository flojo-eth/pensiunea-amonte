import type { Metadata } from "next";
import EventsPage, { eventsMetadata } from "@/components/pages/EventsPage";

export const metadata: Metadata = eventsMetadata("de");

export default function Page() {
  return <EventsPage lang="de" />;
}
