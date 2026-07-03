"use client";

import { useState } from "react";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import { AUDIENCES } from "@/lib/content";
import { btnTerracotta, btnOutlineDark } from "@/lib/ui";

export default function AudiencesGridClient() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {AUDIENCES.map((audience, idx) => {
        const isExpanded = expandedIndex === idx;

        return (
          <div
            key={audience.title}
            onClick={() => setExpandedIndex(isExpanded ? null : idx)}
            className={`group relative flex flex-col rounded-[10px] border cursor-pointer overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
              isExpanded 
                ? "border-sand bg-card-2 shadow-lg" 
                : "border-forest bg-pine hover:bg-pine/90 hover:shadow-md"
            }`}
          >
            {/* Front indicator (small pulse or icon) */}
            {!isExpanded && (
              <div className="absolute top-4 right-4 text-paper/50 group-hover:text-paper transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
            )}
            {isExpanded && (
               <div className="absolute top-4 right-4 text-pine/50 hover:text-pine transition-colors z-10">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <line x1="18" y1="6" x2="6" y2="18"></line>
                   <line x1="6" y1="6" x2="18" y2="18"></line>
                 </svg>
               </div>
            )}

            {/* Front of card */}
            <div className={`p-[30px] flex flex-col items-center justify-center min-h-[140px] transition-all duration-500 ${isExpanded ? 'pb-0 min-h-[100px]' : ''}`}>
              <h3 className={`m-0 font-serif text-[28px] font-semibold text-center transition-colors duration-500 ${isExpanded ? "text-pine" : "text-paper"}`}>
                {audience.title}
              </h3>
              {!isExpanded && (
                <span className="mt-3 text-xs tracking-wider text-paper/70 uppercase">
                  Apasă pentru detalii
                </span>
              )}
            </div>

            {/* Hidden content that expands on click */}
            <div 
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
                  <div className="mt-8" onClick={(e) => e.stopPropagation()}>
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
