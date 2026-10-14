import type { Metadata } from "next";
import CorporatePage, { corporateMetadata } from "@/components/pages/CorporatePage";

export const metadata: Metadata = corporateMetadata("ro");

export default function Page() {
  return <CorporatePage lang="ro" />;
}
