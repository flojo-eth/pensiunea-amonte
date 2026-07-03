"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";
import { AMENITIES } from "@/lib/content";

export default function ServicesGridClient() {
  const [selected, setSelected] = useState<number | null>(null);
  const selectedAmenity = selected !== null ? AMENITIES[selected] : null;

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") setSelected((i) => i !== null ? (i + 1) % AMENITIES.length : null);
      if (e.key === "ArrowLeft") setSelected((i) => i !== null ? (i - 1 + AMENITIES.length) % AMENITIES.length : null);
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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {AMENITIES.map((a, idx) => (
          <button
            key={a.label}
            onClick={() => setSelected(idx)}
            className="flex flex-col text-left outline-none overflow-hidden rounded-[10px] border border-sand bg-card-2 group relative transition-shadow duration-300 hover:shadow-[0_4px_12px_rgba(40,44,38,0.08)]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <PlaceholderImage
                src={a.photo}
                alt={a.label}
                label={a.photoLabel}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Subtle hover overlay indicator */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            <div className="flex items-center gap-3 p-[22px] border-t border-sand bg-card w-full">
              <span className="text-[22px] leading-none">{a.icon}</span>
              <span className="text-[16px] font-semibold text-pine">
                {a.label}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedAmenity && selected !== null && (
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
            onClick={(e) => { e.stopPropagation(); setSelected((i) => i !== null ? (i - 1 + AMENITIES.length) % AMENITIES.length : null); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-[36px] text-paper/70 hover:text-paper p-3 leading-none transition-colors"
            aria-label="Precedenta"
          >&#10094;</button>
          <button
            onClick={(e) => { e.stopPropagation(); setSelected((i) => i !== null ? (i + 1) % AMENITIES.length : null); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-[36px] text-paper/70 hover:text-paper p-3 leading-none transition-colors"
            aria-label="Următoarea"
          >&#10095;</button>

          {/* Image container */}
          <div
            className="relative flex max-h-[80vh] w-full max-w-[90vw] sm:max-w-[80vw] flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedAmenity.photo ? (
              <Image
                src={selectedAmenity.photo}
                alt={selectedAmenity.label}
                width={1600}
                height={1200}
                className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              />
            ) : (
              <div className="relative aspect-[4/3] w-full max-w-[640px] rounded-lg overflow-hidden border border-sand shadow-2xl">
                <PlaceholderImage
                  label={selectedAmenity.photoLabel}
                  alt={selectedAmenity.label}
                  tone="dark"
                  className="h-full w-full"
                />
              </div>
            )}
          </div>

          {/* Label + counter */}
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <span className="text-[14px] font-semibold text-paper/90 tracking-wide bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
              {selectedAmenity.icon} {selectedAmenity.label} &nbsp;·&nbsp; {selected + 1} / {AMENITIES.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
