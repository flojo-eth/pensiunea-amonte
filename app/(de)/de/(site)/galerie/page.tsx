import type { Metadata } from "next";
import GalleryPage, { galleryMetadata } from "@/components/pages/GalleryPage";

export const metadata: Metadata = galleryMetadata("de");

export default function Page() {
  return <GalleryPage lang="de" />;
}
