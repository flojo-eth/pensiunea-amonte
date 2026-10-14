import type { Metadata } from "next";
import RootDocument from "@/components/RootDocument";
import { rootMetadata } from "@/lib/seo";

// Root layout for the German site. Every German page lives under /de, so
// <html lang="de"> is right in the prerendered HTML from the first byte.
export const metadata: Metadata = rootMetadata("de");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootDocument lang="de">{children}</RootDocument>;
}
