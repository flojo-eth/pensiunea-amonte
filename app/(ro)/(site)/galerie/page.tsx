import type { Metadata } from "next";
import GalleryPage, { galleryMetadata } from "@/components/pages/GalleryPage";

export const metadata: Metadata = galleryMetadata("ro");

export default function Page() {
  return <GalleryPage lang="ro" />;
}
