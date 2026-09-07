"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/content";
import WhatsAppButton from "./WhatsAppButton";

function scrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-pine/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-[clamp(20px,5vw,64px)] py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-card-2 no-underline"
          aria-label="Pensiunea Amonte - acasă"
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
            priority
            className="h-11 w-11 rounded-lg object-cover"
          />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[28px] font-bold tracking-[0.5px]">
              Amonte
            </span>
            <span className="mt-[3px] text-[9.5px] uppercase tracking-[3.5px] opacity-75">
              Pensiune montană
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="flex flex-wrap items-center gap-[clamp(14px,2vw,28px)]">
          {NAV_LINKS.map((l) =>
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
          <Link
            href="/rezerva-acum"
            onClick={scrollTop}
            className="hidden rounded-full bg-paper px-5 py-2.5 text-[13.5px] font-semibold text-pine no-underline hover:bg-card-2 sm:inline-block"
          >
            Rezervă
          </Link>

          {/* Hamburger — mobile only */}
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] rounded-lg sm:hidden"
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
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
          {NAV_LINKS.map((l) => (
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
          <Link
            href="/rezerva-acum"
            onClick={() => {
              setOpen(false);
              scrollTop();
            }}
            className="mt-4 rounded-full bg-paper py-3.5 text-center text-[15px] font-semibold text-pine no-underline hover:bg-card-2"
          >
            Rezervă acum
          </Link>
        </div>
        </div>
      </div>
    </header>
  );
}
