"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { WHATSAPP_NUMBER, CONTACT } from "@/lib/content";
import { NIGHT_OPTIONS, RETREAT_PAGE_SOURCE } from "@/lib/retreat";
import { pushDataLayer } from "@/lib/gtm";
import { href } from "@/lib/i18n/config";
import { useLang } from "@/lib/i18n/useLang";
import { UI } from "@/lib/i18n/ui";
import { btnTerracotta, btnOutlineDark } from "@/lib/ui";

/**
 * Offer request form.
 *
 * No backend on purpose: the site converts on WhatsApp, and adding a route
 * handler would mean a mail provider, an API key and DNS records for SPF and
 * DKIM. Submitting composes the message and hands it to WhatsApp (primary) or
 * to the visitor's mail client (secondary).
 *
 * `showFnb` arrives as a prop rather than being imported: lib/flags.ts reads
 * process.env.VERCEL_ENV, which is server-only, so a client component that
 * imported it directly would silently get the development value.
 *
 * The labels and the composed message follow the page's language. What reaches
 * the dataLayer does not: `page_source` stays "retreat-corporate" and `nights`
 * is one of NIGHT_OPTIONS, so the two languages report as one funnel.
 */
type Props = { showFnb: boolean };

type Fields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  groupSize: string;
  period: string;
  nights: string;
  needsRoom: string;
  meals: string[];
  message: string;
  consent: boolean;
};

const EMPTY: Fields = {
  name: "",
  company: "",
  email: "",
  phone: "",
  groupSize: "",
  period: "",
  nights: NIGHT_OPTIONS[1],
  needsRoom: "da",
  meals: [],
  message: "",
  consent: false,
};

const label = "block text-[13px] font-semibold text-pine mb-1.5";
const field =
  "w-full rounded-lg border border-line-2 bg-card px-4 py-3 text-[15px] text-ink outline-none focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-terracotta";

export default function OfferRequestForm({ showFnb }: Props) {
  const lang = useLang();
  const t = UI[lang].offerForm;
  const [f, setF] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;

  /** Returns the freshly computed errors, so callers never read stale state. */
  function validate() {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (!f.name.trim()) e.name = t.errors.name;
    if (!f.company.trim()) e.company = t.errors.company;
    if (!f.email.trim()) e.email = t.errors.emailMissing;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = t.errors.emailInvalid;
    if (!f.groupSize.trim()) e.groupSize = t.errors.groupSize;
    if (!f.period.trim()) e.period = t.errors.period;
    if (!f.consent) e.consent = t.errors.consent;
    setErrors(e);
    return e;
  }

  function compose() {
    const m = t.compose;
    const lines = [
      m.greeting,
      "",
      `${m.name}: ${f.name}`,
      `${m.company}: ${f.company}`,
      `${m.email}: ${f.email}`,
      ...(f.phone.trim() ? [`${m.phone}: ${f.phone}`] : []),
      `${m.groupSize}: ${f.groupSize}`,
      `${m.period}: ${f.period}`,
      `${m.nights}: ${f.nights}`,
      `${m.needsRoom}: ${f.needsRoom === "da" ? m.yes : m.no}`,
      ...(showFnb && f.meals.length ? [`${m.meals}: ${f.meals.join(", ")}`] : []),
      ...(f.message.trim() ? ["", `${m.message}: ${f.message}`] : []),
    ];
    return lines.join("\n");
  }

  function track(channel: "whatsapp" | "email") {
    // No personal data reaches the dataLayer, only the shape of the request.
    // cta_position e trimis explicit null: altfel GTM ar păstra valoarea de la
    // ultimul click pe un buton WhatsApp și ar lipi-o pe acest eveniment.
    pushDataLayer({
      event: "offer_request_submit",
      page_source: RETREAT_PAGE_SOURCE,
      cta_position: null,
      group_size: f.groupSize,
      nights: f.nights,
      channel,
    });
  }

  function submit(channel: "whatsapp" | "email") {
    const found = validate();
    const firstError = Object.keys(found)[0];
    if (firstError) {
      // Focus the first field in error, read from the fresh result rather than
      // from `errors` state, which still holds the previous render's value here.
      document.getElementById(id(firstError))?.focus();
      return;
    }
    track(channel);
    const body = compose();
    if (channel === "whatsapp") {
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`,
        "_blank",
        "noopener",
      );
    } else {
      const subject = `${t.compose.subject} ${f.company} ${f.period}`.trim();
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  }

  const err = (k: keyof Fields) =>
    errors[k] ? (
      <span id={`${id(k)}-err`} role="alert" className="mt-1.5 block text-[12.5px] text-[#a1341f]">
        {errors[k]}
      </span>
    ) : null;

  const aria = (k: keyof Fields) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${id(k)}-err` : undefined,
  });

  return (
    // Not a <form>: submission is handled per button, and a real form element
    // would navigate away on Enter before the handler could compose the message.
    <div className="rounded-2xl border border-line bg-card p-[clamp(22px,4vw,36px)]">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor={id("name")}>{t.labels.name}</label>
          <input id={id("name")} className={field} value={f.name} autoComplete="name"
            onChange={(e) => setF({ ...f, name: e.target.value })} {...aria("name")} />
          {err("name")}
        </div>
        <div>
          <label className={label} htmlFor={id("company")}>{t.labels.company}</label>
          <input id={id("company")} className={field} value={f.company} autoComplete="organization"
            onChange={(e) => setF({ ...f, company: e.target.value })} {...aria("company")} />
          {err("company")}
        </div>
        <div>
          <label className={label} htmlFor={id("email")}>{t.labels.email}</label>
          <input id={id("email")} type="email" className={field} value={f.email} autoComplete="email"
            onChange={(e) => setF({ ...f, email: e.target.value })} {...aria("email")} />
          {err("email")}
        </div>
        <div>
          <label className={label} htmlFor={id("phone")}>{t.labels.phone}</label>
          <input id={id("phone")} type="tel" className={field} value={f.phone} autoComplete="tel"
            onChange={(e) => setF({ ...f, phone: e.target.value })} />
        </div>
        <div>
          <label className={label} htmlFor={id("groupSize")}>{t.labels.groupSize}</label>
          <input id={id("groupSize")} className={field} value={f.groupSize} placeholder={t.placeholders.groupSize}
            onChange={(e) => setF({ ...f, groupSize: e.target.value })} {...aria("groupSize")} />
          {err("groupSize")}
        </div>
        <div>
          <label className={label} htmlFor={id("nights")}>{t.labels.nights}</label>
          <select id={id("nights")} className={field} value={f.nights}
            onChange={(e) => setF({ ...f, nights: e.target.value })}>
            {NIGHT_OPTIONS.map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor={id("period")}>{t.labels.period}</label>
          <input id={id("period")} className={field} value={f.period} placeholder={t.placeholders.period}
            onChange={(e) => setF({ ...f, period: e.target.value })} {...aria("period")} />
          {err("period")}
        </div>
        <div>
          <label className={label} htmlFor={id("needsRoom")}>{t.labels.needsRoom}</label>
          <select id={id("needsRoom")} className={field} value={f.needsRoom}
            onChange={(e) => setF({ ...f, needsRoom: e.target.value })}>
            <option value="da">{t.yes}</option>
            <option value="nu">{t.no}</option>
          </select>
        </div>

        {showFnb && (
          <fieldset className="sm:col-span-2 m-0 border-0 p-0">
            <legend className={label}>{t.labels.meals}</legend>
            <div className="flex flex-wrap gap-4">
              {t.mealOptions.map((m) => (
                <label key={m} className="flex items-center gap-2 text-[14px] text-ink">
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-[#a9743f]"
                    checked={f.meals.includes(m)}
                    onChange={(e) =>
                      setF({
                        ...f,
                        meals: e.target.checked
                          ? [...f.meals, m]
                          : f.meals.filter((x) => x !== m),
                      })
                    }
                  />
                  {m}
                </label>
              ))}
            </div>
          </fieldset>
        )}

        <div className="sm:col-span-2">
          <label className={label} htmlFor={id("message")}>{t.labels.message}</label>
          <textarea id={id("message")} rows={3} className={field} value={f.message}
            onChange={(e) => setF({ ...f, message: e.target.value })} />
        </div>

        <div className="sm:col-span-2">
          <label className="flex items-start gap-3 text-[13.5px] leading-relaxed text-muted">
            <input
              id={id("consent")}
              type="checkbox"
              className="mt-1 h-4 w-4 shrink-0 accent-[#a9743f]"
              checked={f.consent}
              onChange={(e) => setF({ ...f, consent: e.target.checked })}
              {...aria("consent")}
            />
            <span>
              {t.consent}{" "}
              <Link href={href(lang, "privacy")} className="text-terracotta underline underline-offset-2">
                {t.consentLink}
              </Link>
              .
            </span>
          </label>
          {err("consent")}
        </div>
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <button type="button" onClick={() => submit("whatsapp")} className={`${btnTerracotta} cursor-pointer`}>
          {t.sendWhatsApp}
        </button>
        <button type="button" onClick={() => submit("email")} className={`${btnOutlineDark} cursor-pointer`}>
          {t.sendEmail}
        </button>
      </div>
      <p className="mt-4 mb-0 text-[13px] text-muted-2">
        {t.footnote}
      </p>
    </div>
  );
}
