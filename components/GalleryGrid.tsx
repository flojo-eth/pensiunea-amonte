"use client";

import { useState, useEffect } from "react";
import PlaceholderImage from "./PlaceholderImage";
import { GALLERY } from "@/lib/content";
import Image from "next/image";

export default function GalleryGrid() {
  const [selected, setSelected] = useState<number | null>(null);
  const selectedPhoto = selected !== null ? GALLERY[selected] : null;

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") setSelected((i) => i !== null ? (i + 1) % GALLERY.length : null);
      if (e.key === "ArrowLeft") setSelected((i) => i !== null ? (i - 1 + GALLERY.length) % GALLERY.length : null);
    }
    if (selected !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <div className="grid auto-rows-[220px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3.5">
        {GALLERY.map((g, idx) => (
          <button
            key={g.label}
            onClick={() => setSelected(idx)}
            className={`group relative text-left outline-none overflow-hidden rounded-lg ${
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
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4"
          onClick={() => setSelected(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelected(null)}
            className="absolute right-6 top-6 z-50 text-[36px] text-paper/80 hover:text-paper leading-none transition-colors"
            aria-label="Închide"
          >
            &times;
          </button>

          {/* Left / Right arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); setSelected((i) => i !== null ? (i - 1 + GALLERY.length) % GALLERY.length : null); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-[36px] text-paper/70 hover:text-paper p-3 leading-none transition-colors"
            aria-label="Precedenta"
          >&#10094;</button>
          <button
            onClick={(e) => { e.stopPropagation(); setSelected((i) => i !== null ? (i + 1) % GALLERY.length : null); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-[36px] text-paper/70 hover:text-paper p-3 leading-none transition-colors"
            aria-label="Următoarea"
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
              priority
            />
          </div>

          {/* Label + counter */}
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <span className="text-[13px] font-medium text-paper/80 tracking-wide">
              {selectedPhoto.label} &nbsp;·&nbsp; {selected + 1} / {GALLERY.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
