"use client";

import { useState, useEffect } from "react";
import PlaceholderImage from "./PlaceholderImage";
import { GALLERY } from "@/lib/content";
import Image from "next/image";

export default function GalleryGrid() {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    photo: string;
    label: string;
  } | null>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSelectedPhoto(null);
      }
    }
    if (selectedPhoto) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scrolling when open
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedPhoto]);

  return (
    <>
      <div className="grid auto-rows-[220px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3.5">
        {GALLERY.map((g) => (
          <button
            key={g.label}
            onClick={() => setSelectedPhoto({ photo: g.photo, label: g.label })}
            className={`group relative text-left outline-none overflow-hidden rounded-lg ${
              g.span === 2 ? "row-span-2" : ""
            }`}
          >
            <PlaceholderImage
              src={g.photo}
              alt={g.label}
              label={g.label}
              tone="dark"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* Hover overlay indicator */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="rounded-full bg-paper/95 px-4 py-2 text-xs font-semibold text-pine shadow-md">
                Vezi complet
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 transition-opacity duration-300"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute right-6 top-6 z-50 text-[36px] text-paper/80 hover:text-paper leading-none transition-colors"
            aria-label="Închide"
          >
            &times;
          </button>

          {/* Image container */}
          <div
            className="relative flex max-h-[85vh] max-w-[95vw] flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
          >
            <Image
              src={selectedPhoto.photo}
              alt={selectedPhoto.label}
              width={1600}
              height={1200}
              className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              priority
            />
            {/* Title / Description */}
            <div className="absolute bottom-[-40px] left-0 right-0 text-center text-sm font-medium tracking-[0.5px] text-paper/90">
              {selectedPhoto.label}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
