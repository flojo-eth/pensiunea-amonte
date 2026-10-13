import type { Metadata } from "next";
import ServicesPage, { servicesMetadata } from "@/components/pages/ServicesPage";

export const metadata: Metadata = servicesMetadata("ro");

export default function Page() {
  return <ServicesPage lang="ro" />;
}
