import type { Metadata } from "next";
import HomePage, { homeMetadata } from "@/components/pages/HomePage";

export const metadata: Metadata = homeMetadata("en");

export default function Page() {
  return <HomePage lang="en" />;
}
