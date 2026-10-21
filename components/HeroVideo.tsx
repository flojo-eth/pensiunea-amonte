"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Background video that actually autoplays on phones.
 *
 * React sets `muted` as a property, not an attribute, when it creates the
 * element on the client (after a client-side navigation), and iOS Safari and
 * in-app browsers then refuse to autoplay. So: force muted both ways and call
 * play() once mounted. If the browser still refuses, the poster stays.
 */
export default function HeroVideo({ poster, className, children }: { poster: string; className?: string; children: ReactNode }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute("muted", "");
    v.play().catch(() => {
      /* autoplay refused: the poster remains */
    });
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      aria-hidden="true"
      className={className}
    >
      {children}
    </video>
  );
}
