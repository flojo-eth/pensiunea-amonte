"use client";

import { useState, useEffect } from "react";
import PlaceholderImage from "./PlaceholderImage";
import Lightbox from "./Lightbox";
import type { GalleryItem } from "@/lib/content";
import { useLang } from "@/lib/i18n/useLang";
import { UI } from "@/lib/i18n/ui";
import Image from "next/image";

/** `items` arrive from the server in the page's language. */
export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const lb = UI[useLang()].lightbox;
  const [selected, setSelected] = useState<number | null>(null);
  const selectedPhoto = selected !== null ? items[selected] : null;

  // Escape, the scroll lock and focus management live in <Lightbox>; only the
  // arrow-key navigation between photos is this component's concern.
  useEffect(() => {
    if (selected === null) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight") setSelected((i) => i !== null ? (i + 1) % items.length : null);
      if (e.key === "ArrowLeft") setSelected((i) => i !== null ? (i - 1 + items.length) % items.length : null);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected, items.length]);

  return (
    <>
      <div className="grid auto-rows-[220px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3.5">
        {items.map((g, idx) => (
          <button
            key={g.label}
            onClick={() => setSelected(idx)}
            className={`group relative text-left outline-none focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta overflow-hidden rounded-lg ${
              g.span === 2 ? "row-span-2" : ""
            }`}
          >
            <PlaceholderImage
              src={g.photo}
              alt={g.label}
              label={g.label}
              tone="dark"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <span className="text-[12px] font-semibold text-paper/90 tracking-wide">
                {g.label}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && selected !== null && (
        <Lightbox
          label={lb.galleryLabel(selectedPhoto.label, selected + 1, items.length)}
          onClose={() => setSelected(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelected(null)}
            className="absolute right-6 top-6 z-50 text-[36px] text-paper/80 hover:text-paper leading-none transition-colors"
            aria-label={lb.close}
          >
            &times;
          </button>

          {/* Left / Right arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); setSelected((i) => i !== null ? (i - 1 + items.length) % items.length : null); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-[36px] text-paper/70 hover:text-paper p-3 leading-none transition-colors"
            aria-label={lb.prev}
          >&#10094;</button>
          <button
            onClick={(e) => { e.stopPropagation(); setSelected((i) => i !== null ? (i + 1) % items.length : null); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-[36px] text-paper/70 hover:text-paper p-3 leading-none transition-colors"
            aria-label={lb.next}
          >&#10095;</button>

          {/* Image container */}
          <div
            className="relative flex max-h-[85vh] max-w-[85vw] flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedPhoto.photo}
              alt={selectedPhoto.label}
              width={1600}
              height={1200}
              className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              loading="eager"
            />
          </div>

          {/* Label + counter */}
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <span className="text-[13px] font-medium text-paper/80 tracking-wide">
              {selectedPhoto.label} &nbsp;·&nbsp; {selected + 1} / {items.length}
            </span>
          </div>
        </Lightbox>
      )}
    </>
  );
}
