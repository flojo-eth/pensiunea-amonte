import type { Metadata } from "next";
import AboutPage, { aboutMetadata } from "@/components/pages/AboutPage";

export const metadata: Metadata = aboutMetadata("de");

export default function Page() {
  return <AboutPage lang="de" />;
}
