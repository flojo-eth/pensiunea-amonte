import type { Metadata } from "next";
import RatesPage, { ratesMetadata } from "@/components/pages/RatesPage";

export const metadata: Metadata = ratesMetadata("ro");

export default function Page() {
  return <RatesPage lang="ro" />;
}
