"use client";

import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

/**
 * The current year, read in the browser.
 *
 * The footer is server-rendered inside statically prerendered pages, so a bare
 * `new Date().getFullYear()` freezes at build time — the copyright would still
 * read the old year every January until the next deploy.
 *
 * The server keeps rendering `fallback` (the build year), and the client swaps
 * in the real one after hydration. useSyncExternalStore is what makes the two
 * differ legitimately, without a hydration mismatch warning.
 */
export default function CurrentYear({ fallback }: { fallback: number }) {
  const year = useSyncExternalStore(
    noopSubscribe,
    () => new Date().getFullYear(),
    () => fallback,
  );
  return <>{year}</>;
}
