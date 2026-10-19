"use client";

import type { ReactNode } from "react";
import { resetConsent } from "@/lib/consent";

/** Reopens the cookie banner by forgetting the stored choice. */
export default function CookieSettingsButton({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <button type="button" onClick={resetConsent} className={className}>
      {children}
    </button>
  );
}
