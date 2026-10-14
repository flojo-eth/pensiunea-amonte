import type { Metadata } from "next";
import ActivitiesPage, { activitiesMetadata } from "@/components/pages/ActivitiesPage";

export const metadata: Metadata = activitiesMetadata("de");

export default function Page() {
  return <ActivitiesPage lang="de" />;
}
