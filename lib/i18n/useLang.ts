"use client";

import { usePathname } from "next/navigation";
import { langOf, type Lang } from "./config";

/**
 * Language of the current page, for client components.
 *
 * Read from the URL rather than from context: every English page lives under
 * /en, so the path already says it, and no provider has to wrap the tree.
 * Server components do not use this; they receive `lang` as a prop.
 */
export function useLang(): Lang {
  return langOf(usePathname() ?? "/");
}
