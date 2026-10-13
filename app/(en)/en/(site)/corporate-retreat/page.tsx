import type { Metadata } from "next";
import CorporatePage, { corporateMetadata } from "@/components/pages/CorporatePage";

export const metadata: Metadata = corporateMetadata("en");

export default function Page() {
  return <CorporatePage lang="en" />;
}
