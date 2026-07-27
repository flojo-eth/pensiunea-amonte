"use client";

import { useSyncExternalStore } from "react";
import { readConsent, subscribeConsent, type ConsentValue } from "./consent";

/**
 * Current consent, or null when the visitor has not chosen yet.
 *
 * Returns a primitive, so useSyncExternalStore can compare snapshots with
 * Object.is without re-rendering forever. The server snapshot is always null:
 * consent lives in localStorage and cannot be known while prerendering.
 */
export function useConsent(): ConsentValue | null {
  return useSyncExternalStore(subscribeConsent, readConsent, () => null);
}
