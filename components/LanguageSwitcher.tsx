"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { counterpartPath, langOf, LANG_NAMES, LANGS } from "@/lib/i18n/config";
import { UI } from "@/lib/i18n/ui";

/**
 * "RO / EN", linking to the same page in the other language.
 *
 * A plain <a>, not next/link: each language has its own root layout, so the
 * switch is a full page load either way, and saying so keeps Next from
 * prefetching the other language's whole layout on every page.
 */
export default function LanguageSwitcher({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const pathname = usePathname() ?? "/";
  const current = langOf(pathname);
  const idle = tone === "dark" ? "text-paper/60 hover:text-paper" : "text-muted-2 hover:text-pine";
  const active = tone === "dark" ? "text-paper" : "text-pine";
  const separator = tone === "dark" ? "text-paper/30" : "text-muted-2/50";

  return (
    <div
      role="group"
      aria-label={UI[current].nav.languages}
      className="flex items-center gap-1.5 text-[12.5px] font-semibold tracking-[1px]"
    >
      {LANGS.map((l, i) => (
        <Fragment key={l}>
          {i > 0 && (
            <span aria-hidden="true" className={separator}>
              /
            </span>
          )}
          {l === current ? (
            <span aria-current="true" className={`px-1 py-2 ${active}`}>
              <span className="sr-only">{LANG_NAMES[l]}</span>
              <span aria-hidden="true">{l.toUpperCase()}</span>
            </span>
          ) : (
            <a
              href={counterpartPath(pathname, l)}
              hrefLang={l}
              lang={l}
              aria-label={LANG_NAMES[l]}
              className={`px-1 py-2 no-underline ${idle}`}
            >
              {l.toUpperCase()}
            </a>
          )}
        </Fragment>
      ))}
    </div>
  );
}
