"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import { AUDIENCES } from "@/lib/content";
import { btnTerracotta, btnOutlineDark } from "@/lib/ui";

export default function AudiencesGridClient() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (expandedIndex !== null && cardRefs.current[expandedIndex]) {
      // Întârziere scurtă pentru ca animația de expandare a cardului să ruleze parțial,
      // astfel încât poziția finală de scroll să fie calculată corect.
      const timer = setTimeout(() => {
        cardRefs.current[expandedIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [expandedIndex]);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {AUDIENCES.map((audience, idx) => {
        const isExpanded = expandedIndex === idx;

        return (
          <div
            key={audience.title}
            ref={(el) => { cardRefs.current[idx] = el; }}
            className={`group relative flex flex-col rounded-[10px] border overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
              isExpanded
                ? "border-sand bg-card-2 shadow-lg"
                : "border-forest bg-pine hover:bg-pine/90 hover:shadow-md"
            }`}
          >
            {/* The toggle is a real <button>, not the whole card: the expanded panel
                contains a CTA link, and nesting a link inside a button is invalid.
                Collapsed, this button covers the entire card, so mouse behaviour
                is unchanged — but it is now reachable by keyboard. */}
            <button
              type="button"
              onClick={() => setExpandedIndex(isExpanded ? null : idx)}
              aria-expanded={isExpanded}
              aria-controls={`audience-panel-${idx}`}
              className={`w-full cursor-pointer p-[30px] flex flex-col items-center justify-center min-h-[140px] transition-all duration-500 outline-none focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-terracotta ${isExpanded ? 'pb-0 min-h-[100px]' : ''}`}
            >
              <span
                aria-hidden="true"
                className={`absolute top-4 right-4 transition-colors ${isExpanded ? "text-pine/50 z-10" : "text-paper/50 group-hover:text-paper"}`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {isExpanded ? (
                    <>
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </>
                  ) : (
                    <>
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </>
                  )}
                </svg>
              </span>
              <h3 className={`m-0 font-serif text-[28px] font-semibold text-center transition-colors duration-500 ${isExpanded ? "text-pine" : "text-paper"}`}>
                {audience.title}
              </h3>
              {!isExpanded && (
                <span className="mt-3 text-xs tracking-wider text-paper/70 uppercase">
                  Apasă pentru detalii
                </span>
              )}
            </button>

            {/* Hidden content that expands on click.
                `inert` while collapsed: the panel stays in the DOM for the
                animation, so without it the hidden CTA link would still be
                tabbable and announced by screen readers. */}
            <div
              id={`audience-panel-${idx}`}
              inert={!isExpanded}
              className={`grid transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-[30px] pt-2 flex flex-col h-full">
                  <span className="text-[12.5px] font-semibold uppercase tracking-[1.5px] text-terracotta text-center block mb-4">
                    {audience.tagline}
                  </span>
                  <p className="flex-1 text-[15px] leading-relaxed text-muted text-center m-0">
                    {audience.body}
                  </p>
                  <ul className="mt-6 border-t border-line pt-5 space-y-3 m-0 p-0 list-none">
                    {audience.highlights.map((h) => (
                      <li key={h} className="flex items-center justify-center gap-2.5 text-[14px] font-medium text-[#33392f]">
                        <span className="text-forest text-[11px]" aria-hidden="true">✓</span> {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    {audience.ctaHref === "whatsapp" ? (
                      <WhatsAppButton className={`${btnTerracotta} w-full text-center`}>
                        {audience.ctaLabel}
                      </WhatsAppButton>
                    ) : (
                      <Link
                        href={audience.ctaHref}
                        className={`${btnOutlineDark} block w-full text-center`}
                      >
                        {audience.ctaLabel}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
