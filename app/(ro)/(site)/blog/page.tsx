import type { Metadata } from "next";
import BlogIndexPage, { blogIndexMetadata } from "@/components/pages/BlogIndexPage";

export const metadata: Metadata = blogIndexMetadata();

export default function Page() {
  return <BlogIndexPage />;
}
