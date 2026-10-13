import type { Metadata } from "next";
import ServicesPage, { servicesMetadata } from "@/components/pages/ServicesPage";

export const metadata: Metadata = servicesMetadata("en");

export default function Page() {
  return <ServicesPage lang="en" />;
}
