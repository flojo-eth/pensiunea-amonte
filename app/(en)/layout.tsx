import type { Metadata } from "next";
import RootDocument from "@/components/RootDocument";
import { rootMetadata } from "@/lib/seo";

// Root layout for the English site. Every English page lives under /en, so
// <html lang="en"> is right in the prerendered HTML from the first byte.
export const metadata: Metadata = rootMetadata("en");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
