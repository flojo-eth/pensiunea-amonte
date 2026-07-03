"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Eyebrow from "./Eyebrow";
import PlaceholderImage from "./PlaceholderImage";
import WhatsAppButton from "./WhatsAppButton";
import type { Room } from "@/lib/content";
import { btnTerracotta, btnOutlineDark } from "@/lib/ui";

const container = "mx-auto max-w-[1080px] px-[clamp(20px,5vw,64px)]";

export default function RoomDetailsClient({ room }: { room: Room }) {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    photo: string;
    index: number;
  } | null>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSelectedPhoto(null);
      }
    }
    if (selectedPhoto) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent page scrolling
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedPhoto]);

  // Fallback to main photo if room.photos is not present
  const allPhotos = room.photos && room.photos.length > 0 ? room.photos : [room.photo];

  return (
    <section className={`${container} py-[clamp(48px,6vw,88px)]`}>
      <Link
        href="/camere"
        className="text-sm font-semibold text-terracotta no-underline hover:underline"
      >
        ← Toate camerele
      </Link>

      {/* Main photo - clickable to open lightbox */}
      <button
        onClick={() => setSelectedPhoto({ photo: room.photo, index: allPhotos.indexOf(room.photo) !== -1 ? allPhotos.indexOf(room.photo) : 0 })}
        className="mt-6 aspect-[16/9] w-full text-left outline-none overflow-hidden rounded-xl group relative block"
      >
        <PlaceholderImage
          src={room.photo}
          alt={room.name}
          label={room.photoLabel}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-102"
          priority
          sizes="(max-width: 1080px) 100vw, 1080px"
        />
        {/* Hover overlay indicator */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="rounded-full bg-paper/95 px-5 py-2.5 text-sm font-semibold text-pine shadow-md">
            Vezi complet
          </span>
        </div>
      </button>

      <div className="mt-8 flex flex-wrap gap-[clamp(28px,4vw,56px)]">
        <div className="flex-1 basis-[320px]">
          <Eyebrow className="mb-3">Cazare</Eyebrow>
          <h1 className="m-0 font-serif text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.05] text-pine">
            {room.name}
          </h1>
          <div className="mt-2 text-[14px] text-muted-2">{room.spec}</div>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            {room.longDesc}
          </p>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {room.features.map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-[15px] text-[#33392f]">
                <span className="text-forest">✓</span> {f}
              </li>
            ))}
          </ul>
        </div>

        <aside className="flex-1 basis-[280px] self-start rounded-xl border border-line bg-card p-7">
          <div>
            <span className="font-serif text-[34px] font-semibold text-terracotta">
              {room.price}
            </span>
            <span className="text-[13px] text-muted-2"> lei / noapte</span>
          </div>
          <p className="mt-2 text-[14px] text-muted">Acces jacuzzi & saună inclus.</p>
          <div className="mt-5 flex flex-col gap-3">
            <WhatsAppButton className={`${btnTerracotta} w-full`}>
              Cere disponibilitate
            </WhatsAppButton>
            <Link href="/camere/tarife" className={`${btnOutlineDark} w-full`}>
              Vezi toate tarifele
            </Link>
          </div>
        </aside>
      </div>

      {/* Bottom room gallery */}
      {allPhotos.length > 1 && (
        <div className="mt-16 border-t border-line pt-12">
          <h2 className="font-serif text-[24px] font-semibold text-pine mb-6">
            Galerie foto
          </h2>
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4">
            {allPhotos.map((p, idx) => (
              <button
                key={p}
                onClick={() => setSelectedPhoto({ photo: p, index: idx })}
                className="group relative aspect-[4/3] w-full text-left outline-none overflow-hidden rounded-lg block"
              >
                <PlaceholderImage
                  src={p}
                  alt={`${room.name} - foto ${idx + 1}`}
                  label={room.photoLabel}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 transition-opacity duration-300"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute right-6 top-6 z-50 text-[36px] text-paper/85 hover:text-paper leading-none transition-colors"
            aria-label="Închide"
          >
            &times;
          </button>

          {/* Navigation arrows */}
          {allPhotos.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const prevIdx = (selectedPhoto.index - 1 + allPhotos.length) % allPhotos.length;
                  setSelectedPhoto({ photo: allPhotos[prevIdx], index: prevIdx });
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-[36px] text-paper/70 hover:text-paper p-3 leading-none transition-colors"
                aria-label="Precedenta"
              >
                &#10094;
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const nextIdx = (selectedPhoto.index + 1) % allPhotos.length;
                  setSelectedPhoto({ photo: allPhotos[nextIdx], index: nextIdx });
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-[36px] text-paper/70 hover:text-paper p-3 leading-none transition-colors"
                aria-label="Următoarea"
              >
                &#10095;
              </button>
            </>
          )}

          {/* Image container */}
          <div
            className="relative flex max-h-[85vh] max-w-[95vw] flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
          >
            <Image
              src={selectedPhoto.photo}
              alt={`${room.name} - complet`}
              width={1600}
              height={1200}
              className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              priority
            />
            {/* Title / Description */}
            <div className="absolute bottom-[-45px] left-0 right-0 text-center text-sm font-medium tracking-[0.5px] text-paper/90">
              {room.name} ({selectedPhoto.index + 1} / {allPhotos.length})
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
