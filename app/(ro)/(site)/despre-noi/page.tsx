import type { Metadata } from "next";
import AboutPage, { aboutMetadata } from "@/components/pages/AboutPage";

export const metadata: Metadata = aboutMetadata("ro");

export default function Page() {
  return <AboutPage lang="ro" />;
}
