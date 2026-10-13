import type { Metadata } from "next";
import RootDocument from "@/components/RootDocument";
import { rootMetadata } from "@/lib/seo";

export const metadata: Metadata = rootMetadata("ro");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootDocument lang="ro">{children}</RootDocument>;
}
