"use client";

import { useEffect, useRef } from "react";
import type { Review } from "@/lib/content";

const SPEED_PX_PER_SEC = 32;
const RESUME_DELAY_MS = 2500;

export default function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  // Duplicate the list so scrollLeft can loop seamlessly at the halfway point.
  const loop = [...reviews, ...reviews];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    let lastTs = 0;

    const step = (ts: number) => {
      if (!lastTs) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;

      if (!pausedRef.current) {
        const half = track.scrollWidth / 2;
        track.scrollLeft += SPEED_PX_PER_SEC * dt;
        if (track.scrollLeft >= half) {
          track.scrollLeft -= half;
        }
      }
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const pause = () => {
    pausedRef.current = true;
    clearTimeout(resumeTimeoutRef.current);
  };

  const resumeSoon = () => {
    pausedRef.current = true;
    clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, RESUME_DELAY_MS);
  };

  const scrollByCard = (dir: 1 | -1) => {
    resumeSoon();
    trackRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onMouseEnter={pause}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
        onPointerDown={resumeSoon}
        onWheel={resumeSoon}
        onTouchStart={resumeSoon}
        className="flex gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {loop.map((r, i) => (
          <div
            key={i}
            className="flex w-[300px] shrink-0 flex-col rounded-[10px] bg-card p-8 sm:w-[340px]"
          >
            <div className="mb-[18px] text-[16px] tracking-[2px] text-terracotta">
              {r.stars}
            </div>
            <p className="mb-6 line-clamp-6 flex-1 font-serif text-[19px] leading-[1.45] text-[#33392f]">
              {r.text}
            </p>
            <div className="flex items-center gap-3">
              <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-forest text-[16px] font-semibold text-paper">
                {r.initial}
              </div>
              <div>
                <div className="text-[14.5px] font-semibold text-[#33392f]">
                  {r.name}
                </div>
                <div className="text-[12.5px] text-muted-2">{r.meta}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Recenzia anterioară"
        onClick={() => scrollByCard(-1)}
        className="absolute left-0 top-1/2 hidden -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-line-2 bg-card text-[18px] text-forest shadow-[0_2px_8px_rgba(40,44,38,0.12)] hover:border-muted-2 sm:flex sm:h-11 sm:w-11"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Recenzia următoare"
        onClick={() => scrollByCard(1)}
        className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-4 items-center justify-center rounded-full border border-line-2 bg-card text-[18px] text-forest shadow-[0_2px_8px_rgba(40,44,38,0.12)] hover:border-muted-2 sm:flex sm:h-11 sm:w-11"
      >
        ›
      </button>
    </div>
  );
}
