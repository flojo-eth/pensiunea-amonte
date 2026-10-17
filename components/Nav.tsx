"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { NavLink } from "@/lib/content";
import { href } from "@/lib/i18n/config";
import { useLang } from "@/lib/i18n/useLang";
import { UI } from "@/lib/i18n/ui";
import WhatsAppButton from "./WhatsAppButton";
import LanguageSwitcher from "./LanguageSwitcher";
import LanguageMenu from "./LanguageMenu";

function scrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/** `links` arrive from the server in the page's language (see SiteShell). */
export default function Nav({ links }: { links: readonly NavLink[] }) {
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const lang = useLang();
  const t = UI[lang].nav;

  return (
    <header className="sticky top-0 z-40 bg-pine/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-[clamp(20px,5vw,64px)] py-4">
        {/* Logo */}
        <Link
          href={href(lang, "home")}
          className="flex items-center gap-3 text-card-2 no-underline"
          aria-label={t.logoAria}
          onClick={() => {
            setOpen(false);
            scrollTop();
          }}
        >
          <Image
            src="/logo_amonte.jpg"
            alt="Pensiunea Amonte"
            width={44}
            height={44}
            // Above the fold but tiny: load it right away, without claiming
            // the bandwidth the hero image needs.
            loading="eager"
            className="h-11 w-11 rounded-lg object-cover"
          />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[28px] font-bold tracking-[0.5px]">
              Amonte
            </span>
            <span className="mt-[3px] text-[9.5px] uppercase tracking-[3.5px] opacity-75">
              {t.tagline}
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="flex flex-wrap items-center gap-[clamp(14px,2vw,28px)]">
          {links.map((l) =>
            l.children ? (
              /* State-driven rather than CSS-only: the submenu has to open on
                 hover AND on keyboard focus, and a purely CSS version has to
                 stay focusable while invisible, which makes it depend on
                 cascade order that is easy to break later. Explicit state also
                 buys Escape-to-close for free. */
              <div
                key={l.href}
                className="relative hidden sm:block"
                onMouseEnter={() => setSubmenu(l.href)}
                onMouseLeave={() => setSubmenu(null)}
                onFocus={() => setSubmenu(l.href)}
                onBlur={(e) => {
                  // Only close when focus leaves the whole group, not when it
                  // moves between the parent link and its children.
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) setSubmenu(null);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setSubmenu(null);
                }}
              >
                <Link
                  href={l.href}
                  onClick={scrollTop}
                  aria-expanded={submenu === l.href}
                  className="text-sm font-medium text-paper/90 no-underline hover:text-paper"
                >
                  {l.label}
                  <span
                    aria-hidden="true"
                    className={`ml-1.5 inline-block text-[10px] transition-transform ${submenu === l.href ? "rotate-180" : ""}`}
                  >
                    ▾
                  </span>
                </Link>
                <div
                  hidden={submenu !== l.href}
                  className="absolute left-0 top-full z-50 min-w-[232px] pt-3"
                >
                  <ul className="m-0 list-none rounded-xl border border-paper/15 bg-pine p-2 shadow-xl">
                    {l.children.map((c) =>
                      c.whatsapp ? (
                        <li key={c.label}>
                          <WhatsAppButton
                            href={c.href}
                            pageSource={c.pageSource}
                            className="block rounded-lg px-3 py-2.5 text-sm text-paper/85 no-underline hover:bg-paper/10 hover:text-paper"
                          >
                            {c.label}
                          </WhatsAppButton>
                        </li>
                      ) : (
                        <li key={c.label}>
                          <Link
                            href={c.href}
                            onClick={scrollTop}
                            className="block rounded-lg px-3 py-2.5 text-sm text-paper/85 no-underline hover:bg-paper/10 hover:text-paper"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                onClick={scrollTop}
                className="hidden text-sm font-medium text-paper/90 no-underline hover:text-paper sm:inline"
              >
                {l.label}
              </Link>
            ),
          )}
          {/* Desktop and tablet: a dropdown, narrow enough to keep the nav on
              one line. On a phone the logo leaves no room next to the
              hamburger, so the full list sits in the menu below instead. */}
          <div className="hidden sm:block">
            <LanguageMenu />
          </div>
          <Link
            href={href(lang, "book")}
            onClick={scrollTop}
            className="hidden rounded-full bg-paper px-5 py-2.5 text-[13.5px] font-semibold text-pine no-underline hover:bg-card-2 sm:inline-block"
          >
            {t.book}
          </Link>

          {/* Hamburger — mobile only */}
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] rounded-lg sm:hidden"
            aria-label={open ? t.closeMenu : t.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-[2px] w-6 rounded-full bg-paper transition-all duration-200 ${open ? "translate-y-[8px] rotate-45" : ""}`}
            />
            <span
              className={`block h-[2px] w-6 rounded-full bg-paper transition-all duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-[2px] w-6 rounded-full bg-paper transition-all duration-200 ${open ? "-translate-y-[8px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows,border-color] duration-300 sm:hidden ${open ? "grid-rows-[1fr] border-t border-paper/10" : "grid-rows-[0fr] border-transparent"}`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col px-[clamp(20px,5vw,64px)] pb-5 pt-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => {
                setOpen(false);
                scrollTop();
              }}
              className={`border-b border-paper/10 py-4 text-[17px] font-medium no-underline ${pathname === l.href ? "text-paper" : "text-paper/75 hover:text-paper"}`}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex justify-center border-b border-paper/10 py-2">
            <LanguageSwitcher />
          </div>
          <Link
            href={href(lang, "book")}
            onClick={() => {
              setOpen(false);
              scrollTop();
            }}
            className="mt-4 rounded-full bg-paper py-3.5 text-center text-[15px] font-semibold text-pine no-underline hover:bg-card-2"
          >
            {t.bookNow}
          </Link>
        </div>
        </div>
      </div>
    </header>
  );
}
