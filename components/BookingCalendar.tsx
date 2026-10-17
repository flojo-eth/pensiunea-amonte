"use client";

import { useState, useEffect, useCallback } from "react";
import { pushWhatsAppClick } from "@/lib/gtm";
import { useIsHydrated } from "@/lib/hooks";
import { CONTACT, GOOGLE_FORM_URL, WHATSAPP_NUMBER } from "@/lib/content";
import { AVAILABILITY_MONTHS } from "@/lib/availability";
import { useLang } from "@/lib/i18n/useLang";
import { UI, type UiStrings } from "@/lib/i18n/ui";

type Strings = UiStrings["calendar"];

// ── Helpers (zero deps) ──────────────────────────────────────────────

/** yyyy-MM-dd */
function toKey(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function isBetween(d: Date, from: Date, to: Date) {
  const t = d.getTime();
  return t >= from.getTime() && t <= to.getTime();
}

function formatDate(d: Date, locale: string) {
  return d.toLocaleDateString(locale, { day: "numeric", month: "short", year: "numeric" });
}

function daysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function startDayOfWeek(year: number, month: number) {
  const d = new Date(year, month, 1).getDay();
  return d === 0 ? 6 : d - 1; // Monday = 0
}

function startOfToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}


/** Pre-hydration placeholder. Mirrors the real calendar's box so nothing shifts. */
function CalendarSkeleton({ t }: { t: Strings }) {
  return (
    <div
      className="flex flex-col rounded-2xl border border-line bg-card p-[clamp(20px,4vw,32px)]"
      aria-busy="true"
    >
      <div className="text-center mb-5">
        <h2 className="font-serif text-[clamp(22px,3vw,28px)] font-semibold text-pine mb-1">
          {t.title}
        </h2>
        <p className="text-[14px] text-muted">
          {t.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-7 mb-1">
        {t.days.map((d) => (
          <div
            key={d}
            className="py-2 text-center text-[12px] font-semibold uppercase tracking-wider text-muted-2"
          >
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7" aria-hidden="true">
        {Array.from({ length: 42 }, (_, i) => (
          <div key={i} className="aspect-square" />
        ))}
      </div>
      <p className="mt-5 pt-5 border-t border-line text-center text-[14px] text-muted">
        {t.loading}
      </p>
    </div>
  );
}

/** The whole guesthouse sleeps 24, so no request can ask for more. */
const MAX_GUESTS = 24;

/** "−  2  +" with a label: a number input would bring up a keyboard on a phone. */
function GuestStepper({
  label,
  value,
  min,
  max,
  onChange,
  t,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
  t: Strings;
}) {
  const btn =
    "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-line-2 text-[18px] leading-none text-pine transition-colors hover:border-muted-2 disabled:cursor-not-allowed disabled:opacity-30";
  return (
    <div className="flex items-center justify-between gap-4 py-2">
      <span className="text-[15px] font-medium text-pine">{label}</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className={btn}
          onClick={() => onChange(value - 1)}
          disabled={value <= min}
          aria-label={`${t.fewer}: ${label}`}
        >
          −
        </button>
        <span aria-live="polite" className="w-6 text-center text-[16px] font-semibold text-pine">
          {value}
        </span>
        <button
          type="button"
          className={btn}
          onClick={() => onChange(value + 1)}
          disabled={value >= max}
          aria-label={`${t.more}: ${label}`}
        >
          +
        </button>
      </div>
    </div>
  );
}

// ── Component ────────────────────────────────────────────────────────

export default function BookingCalendar() {
  // `today` must NOT be computed during render. /rezerva-acum is statically
  // prerendered, so a render-time date gets baked into the HTML at build time and
  // then disagrees with the browser on every subsequent day — a hydration mismatch
  // that shows visitors the build month with the wrong days disabled. The month in
  // view is therefore stored as an offset from "now", which is stable across
  // server and client, and the actual date is only read once hydrated.
  const isHydrated = useIsHydrated();
  const [monthOffset, setMonthOffset] = useState(0);
  const t = UI[useLang()].calendar;
  const format = (d: Date) => formatDate(d, t.locale);

  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  // Sent in the WhatsApp message, so the reply can quote the right rooms.
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);

  const [blockedKeys, setBlockedKeys] = useState<Set<string>>(new Set());
  // True when availability could not be read. The API fails open (empty list), so
  // without this the calendar would silently present booked dates as free.
  const [availabilityUnknown, setAvailabilityUnknown] = useState(false);

  // Fetch blocked dates from API
  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/calendar", { signal: controller.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then((data) => {
        if (Array.isArray(data.blockedDates)) {
          setBlockedKeys(new Set<string>(data.blockedDates));
        }
        if (data.stale) setAvailabilityUnknown(true);
      })
      .catch((err: unknown) => {
        if (err instanceof Error && err.name === "AbortError") return;
        setAvailabilityUnknown(true);
      });
    return () => controller.abort();
  }, []);

  // Navigation
  const prevMonth = () => setMonthOffset((o) => Math.max(0, o - 1));
  // No further than /api/calendar reads ahead: beyond that every day would
  // look free whether it is booked or not.
  const lastOffset = AVAILABILITY_MONTHS - 1;
  const nextMonth = () => setMonthOffset((o) => Math.min(lastOffset, o + 1));

  // Can't go before the current month
  const canPrev = monthOffset > 0;
  const canNext = monthOffset < lastOffset;

  // Click handler
  const handleDayClick = useCallback(
    (d: Date) => {
      if (!checkIn || (checkIn && checkOut)) {
        // Start new selection
        setCheckIn(d);
        setCheckOut(null);
      } else {
        // Complete the range
        if (d.getTime() <= checkIn.getTime()) {
          setCheckIn(d);
          setCheckOut(null);
        } else {
          setCheckOut(d);
        }
      }
    },
    [checkIn, checkOut],
  );

  // WhatsApp link
  const whatsappHref = checkIn && checkOut
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        t.message(format(checkIn), format(checkOut), t.guests(adults, children)),
      )}`
    : null;

  // Everything below depends on the current date, so it is only rendered once
  // hydrated. The skeleton keeps the same footprint to avoid a layout shift.
  if (!isHydrated) return <CalendarSkeleton t={t} />;

  const today = startOfToday();
  const view = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);
  const month = view.getMonth();
  const year = view.getFullYear();

  // Build calendar grid
  const totalDays = daysInMonth(year, month);
  const offset = startDayOfWeek(year, month);

  const cells: (Date | null)[] = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let d = 1; d <= totalDays; d++) cells.push(new Date(year, month, d));

  // Determine visual range end for hover preview
  const rangeEnd = checkOut ?? (checkIn && hoveredDate && hoveredDate.getTime() > checkIn.getTime() ? hoveredDate : null);

  return (
    <div className="flex flex-col rounded-2xl border border-line bg-card p-[clamp(20px,4vw,32px)]">
      {/* Header */}
      <div className="text-center mb-5">
        <h2 className="font-serif text-[clamp(22px,3vw,28px)] font-semibold text-pine mb-1">
          {t.title}
        </h2>
        <p className="text-[14px] text-muted">
          {t.subtitle}
        </p>
      </div>

      {/* Month nav */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevMonth}
          disabled={!canPrev}
          className="flex h-9 w-9 items-center justify-center rounded-full text-pine hover:bg-sand transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label={t.prevMonth}
        >
          ‹
        </button>
        <span className="font-serif text-[18px] font-semibold text-pine">
          {t.months[month]} {year}
        </span>
        <button
          onClick={nextMonth}
          disabled={!canNext}
          className="flex h-9 w-9 items-center justify-center rounded-full text-pine hover:bg-sand transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label={t.nextMonth}
        >
          ›
        </button>
      </div>

      {/* Day-of-week header */}
      <div className="grid grid-cols-7 mb-1">
        {t.days.map((d) => (
          <div key={d} className="py-2 text-center text-[12px] font-semibold uppercase tracking-wider text-muted-2">
            {d}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7">
        {cells.map((date, i) => {
          if (!date) {
            return <div key={`empty-${i}`} className="aspect-square" />;
          }

          const key = toKey(date);
          const isPast = date.getTime() < today.getTime();
          const isBlocked = blockedKeys.has(key);
          const isDisabled = isPast || isBlocked;

          const isCheckIn = checkIn && sameDay(date, checkIn);
          const isCheckOut = checkOut && sameDay(date, checkOut);
          const isInRange = checkIn && rangeEnd && !isCheckIn && !isCheckOut && isBetween(date, checkIn, rangeEnd);
          const isToday = sameDay(date, today);

          let cellClass = "relative flex aspect-square items-center justify-center text-[14px] transition-colors ";

          if (isDisabled) {
            cellClass += "text-muted-2/40 cursor-not-allowed";
            if (isBlocked && !isPast) cellClass += " line-through";
          } else if (isCheckIn || isCheckOut) {
            cellClass += "bg-pine text-paper font-semibold rounded-full cursor-pointer";
          } else if (isInRange) {
            cellClass += "bg-pine/10 text-pine cursor-pointer";
          } else {
            cellClass += "text-pine hover:bg-sand rounded-full cursor-pointer";
            if (isToday) cellClass += " font-bold";
          }

          return (
            <button
              key={key}
              disabled={isDisabled}
              onClick={() => handleDayClick(date)}
              onMouseEnter={() => !isDisabled && setHoveredDate(date)}
              onMouseLeave={() => setHoveredDate(null)}
              className={cellClass}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>

      {/* Availability feed unreachable — say so rather than implying everything is free */}
      {availabilityUnknown && (
        <p
          role="status"
          className="mt-4 rounded-lg bg-terracotta/10 px-4 py-3 text-center text-[13px] leading-relaxed text-[#7c531f]"
        >
          {t.unknown}
        </p>
      )}

      {/* Selected range display */}
      <div className="mt-5 pt-5 border-t border-line">
        <div className="text-center text-[15px] font-medium text-pine min-h-[24px] mb-4">
          {checkIn && checkOut ? (
            <>{format(checkIn)} → {format(checkOut)}</>
          ) : checkIn ? (
            <span className="text-muted">{t.pickCheckout}</span>
          ) : (
            <span className="text-muted-2">{t.nothingSelected}</span>
          )}
        </div>

        {/* Guests: part of the WhatsApp message, never of the dataLayer. */}
        <div className="mb-4 divide-y divide-line border-y border-line">
          <GuestStepper label={t.adults} value={adults} min={1} max={MAX_GUESTS - children} onChange={setAdults} t={t} />
          <GuestStepper label={t.children} value={children} min={0} max={MAX_GUESTS - adults} onChange={setChildren} t={t} />
        </div>

        {/* WhatsApp CTA */}
        <a
          href={whatsappHref ?? "#"}
          target={whatsappHref ? "_blank" : undefined}
          rel={whatsappHref ? "noopener noreferrer" : undefined}
          onClick={(e) => { 
            if (!whatsappHref) {
              e.preventDefault(); 
            } else {
              // page_source se deduce din calea curentă ("rezerva-acum").
              pushWhatsAppClick({
                eventCategory: "conversion",
                eventLabel: "Rezervare WhatsApp",
              });
            }
          }}
          className={`flex w-full items-center justify-center gap-2 rounded-full py-4 text-[16px] font-semibold transition-colors ${
            whatsappHref
              ? "bg-terracotta text-paper hover:bg-[#96652f] cursor-pointer"
              : "bg-terracotta/40 text-paper/60 cursor-not-allowed"
          }`}
        >
          {t.cta}
        </a>

        {/* Fallback contact */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[14px] text-muted">
          {t.fallback === "form" ? (
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-forest no-underline hover:underline"
            >
              {t.fallbackLabel}
            </a>
          ) : (
            <a
              href={`mailto:${CONTACT.email}`}
              className="font-medium text-forest no-underline hover:underline"
            >
              {t.fallbackLabel}
            </a>
          )}
          <a href={`tel:${CONTACT.phoneMobile.replace(/\s/g, "")}`} className="no-underline hover:text-ink">
            ✆ {CONTACT.phoneMobile}
          </a>
        </div>
      </div>
    </div>
  );
}
