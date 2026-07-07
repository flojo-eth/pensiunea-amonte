"use client";

import { useState, useEffect, useCallback } from "react";

// ── Helpers (zero deps) ──────────────────────────────────────────────

const MONTHS_RO = [
  "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie",
  "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie",
];
const DAYS_RO = ["Lu", "Ma", "Mi", "Jo", "Vi", "Sâ", "Du"];

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

function formatRo(d: Date) {
  return d.toLocaleDateString("ro-RO", { day: "numeric", month: "short", year: "numeric" });
}

function daysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function startDayOfWeek(year: number, month: number) {
  const d = new Date(year, month, 1).getDay();
  return d === 0 ? 6 : d - 1; // Monday = 0
}

// ── Component ────────────────────────────────────────────────────────

export default function BookingCalendar() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);

  const [blockedKeys, setBlockedKeys] = useState<Set<string>>(new Set());

  // Fetch blocked dates from API
  useEffect(() => {
    fetch("/api/calendar")
      .then((r) => r.json())
      .then((data) => {
        if (data.blockedDates) {
          setBlockedKeys(new Set(data.blockedDates));
        }
      })
      .catch(() => {});
  }, []);

  // Navigation
  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(year - 1); }
    else setMonth(month - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(year + 1); }
    else setMonth(month + 1);
  };

  // Can't go before current month
  const canPrev = year > today.getFullYear() || (year === today.getFullYear() && month > today.getMonth());

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
    ? `https://wa.me/40747342280?text=${encodeURIComponent(
        `Salut! Aș dori să verific disponibilitatea pentru o rezervare la Pensiunea Amonte în perioada ${formatRo(checkIn)} - ${formatRo(checkOut)}.`,
      )}`
    : null;

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
          Alege perioada dorită
        </h2>
        <p className="text-[14px] text-muted">
          Selectează ziua de sosire și ziua de plecare
        </p>
      </div>

      {/* Month nav */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevMonth}
          disabled={!canPrev}
          className="flex h-9 w-9 items-center justify-center rounded-full text-pine hover:bg-sand transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Luna anterioară"
        >
          ‹
        </button>
        <span className="font-serif text-[18px] font-semibold text-pine">
          {MONTHS_RO[month]} {year}
        </span>
        <button
          onClick={nextMonth}
          className="flex h-9 w-9 items-center justify-center rounded-full text-pine hover:bg-sand transition-colors"
          aria-label="Luna următoare"
        >
          ›
        </button>
      </div>

      {/* Day-of-week header */}
      <div className="grid grid-cols-7 mb-1">
        {DAYS_RO.map((d) => (
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

      {/* Selected range display */}
      <div className="mt-5 pt-5 border-t border-line">
        <div className="text-center text-[15px] font-medium text-pine min-h-[24px] mb-4">
          {checkIn && checkOut ? (
            <>{formatRo(checkIn)} → {formatRo(checkOut)}</>
          ) : checkIn ? (
            <span className="text-muted">Selectează data de plecare</span>
          ) : (
            <span className="text-muted-2">Nicio perioadă selectată</span>
          )}
        </div>

        {/* WhatsApp CTA */}
        <a
          href={whatsappHref ?? "#"}
          target={whatsappHref ? "_blank" : undefined}
          rel={whatsappHref ? "noopener noreferrer" : undefined}
          onClick={(e) => { if (!whatsappHref) e.preventDefault(); }}
          className={`flex w-full items-center justify-center gap-2 rounded-full py-4 text-[16px] font-semibold transition-colors ${
            whatsappHref
              ? "bg-terracotta text-paper hover:bg-[#96652f] cursor-pointer"
              : "bg-terracotta/40 text-paper/60 cursor-not-allowed"
          }`}
        >
          Verifică disponibilitatea pe WhatsApp
        </a>

        {/* Fallback contact */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[14px] text-muted">
          <a
            href="https://forms.gle/Ft4iFEuRJUfbyAPV6"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-forest no-underline hover:underline"
          >
            Sau completează formularul →
          </a>
          <a href="tel:+40747342280" className="no-underline hover:text-ink">
            ✆ +40 747 342 280
          </a>
        </div>
      </div>
    </div>
  );
}
