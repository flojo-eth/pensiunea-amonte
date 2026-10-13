import type { Metadata } from "next";
import BookPage, { bookMetadata } from "@/components/pages/BookPage";

export const metadata: Metadata = bookMetadata("ro");

export default function Page() {
  return <BookPage lang="ro" />;
}
