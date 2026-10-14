import type { Metadata } from "next";
import RatesPage, { ratesMetadata } from "@/components/pages/RatesPage";

export const metadata: Metadata = ratesMetadata("de");

export default function Page() {
  return <RatesPage lang="de" />;
}
