"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { counterpartPath, langOf, LANG_NAMES, LANGS } from "@/lib/i18n/config";
import { UI } from "@/lib/i18n/ui";

/**
 * The language picker in the desktop nav: "RO ▾", opening a short list.
 *
 * A dropdown rather than the inline "RO / EN / DE": with three languages the
 * inline list pushed the nav onto a second line on tablets. It looks like the
 * Events submenu next to it, but opens on click rather than hover, so it works
 * the same with a finger on a tablet as with a mouse. Escape, a click outside
 * or focus leaving it closes it.
 *
 * Plain <a> links, as in LanguageSwitcher: changing language is a full load.
 */
export default function LanguageMenu() {
  const pathname = usePathname() ?? "/";
  const current = langOf(pathname);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls="language-menu"
        aria-label={`${UI[current].nav.languages}: ${LANG_NAMES[current]}`}
        onClick={() => setOpen((v) => !v)}
        className="flex cursor-pointer items-center px-1 py-2 text-[12.5px] font-semibold tracking-[1px] text-paper/90 hover:text-paper"
      >
        {current.toUpperCase()}
        <span
          aria-hidden="true"
          className={`ml-1.5 inline-block text-[10px] transition-transform ${open ? "rotate-180" : ""}`}
        >
          ▾
        </span>
      </button>
      <div id="language-menu" hidden={!open} className="absolute right-0 top-full z-50 min-w-[160px] pt-3">
        <ul className="m-0 list-none rounded-xl border border-paper/15 bg-pine p-2 shadow-xl">
          {LANGS.map((l) => (
            <li key={l}>
              {l === current ? (
                <span aria-current="true" className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-paper">
                  {LANG_NAMES[l]}
                </span>
              ) : (
                <a
                  href={counterpartPath(pathname, l)}
                  hrefLang={l}
                  lang={l}
                  className="block rounded-lg px-3 py-2.5 text-sm text-paper/85 no-underline hover:bg-paper/10 hover:text-paper"
                >
                  {LANG_NAMES[l]}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
