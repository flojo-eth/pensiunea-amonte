"use client";

import { useId, useState } from "react";
import { WHATSAPP_NUMBER, CONTACT } from "@/lib/content";
import { NIGHT_OPTIONS, MEAL_OPTIONS, RETREAT_PAGE_SOURCE } from "@/lib/retreat";
import { pushDataLayer } from "@/lib/gtm";
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
  const [f, setF] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;

  /** Returns the freshly computed errors, so callers never read stale state. */
  function validate() {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (!f.name.trim()) e.name = "Spune-ne cum te cheamă.";
    if (!f.company.trim()) e.company = "Completează numele firmei.";
    if (!f.email.trim()) e.email = "Avem nevoie de un email pentru ofertă.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Emailul nu pare valid.";
    if (!f.groupSize.trim()) e.groupSize = "Câți sunteți, aproximativ?";
    if (!f.period.trim()) e.period = "Spune-ne ce perioadă ai în minte.";
    if (!f.consent) e.consent = "Avem nevoie de acordul tău ca să îți răspundem.";
    setErrors(e);
    return e;
  }

  function compose() {
    const lines = [
      "Bună ziua! Aș dori o ofertă pentru un grup la Pensiunea Amonte.",
      "",
      `Nume: ${f.name}`,
      `Firmă: ${f.company}`,
      `Email: ${f.email}`,
      ...(f.phone.trim() ? [`Telefon: ${f.phone}`] : []),
      `Număr de persoane: ${f.groupSize}`,
      `Perioada dorită: ${f.period}`,
      `Număr de nopți: ${f.nights}`,
      `Sală de lucru: ${f.needsRoom}`,
      ...(showFnb && f.meals.length ? [`Mese dorite: ${f.meals.join(", ")}`] : []),
      ...(f.message.trim() ? ["", `Mesaj: ${f.message}`] : []),
    ];
    return lines.join("\n");
  }

  function track(channel: "whatsapp" | "email") {
    // No personal data reaches the dataLayer, only the shape of the request.
    pushDataLayer({
      event: "offer_request_submit",
      page_source: RETREAT_PAGE_SOURCE,
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
      const subject = `Cerere ofertă grup ${f.company} ${f.period}`.trim();
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
          <label className={label} htmlFor={id("name")}>Numele tău</label>
          <input id={id("name")} className={field} value={f.name} autoComplete="name"
            onChange={(e) => setF({ ...f, name: e.target.value })} {...aria("name")} />
          {err("name")}
        </div>
        <div>
          <label className={label} htmlFor={id("company")}>Firma</label>
          <input id={id("company")} className={field} value={f.company} autoComplete="organization"
            onChange={(e) => setF({ ...f, company: e.target.value })} {...aria("company")} />
          {err("company")}
        </div>
        <div>
          <label className={label} htmlFor={id("email")}>Email</label>
          <input id={id("email")} type="email" className={field} value={f.email} autoComplete="email"
            onChange={(e) => setF({ ...f, email: e.target.value })} {...aria("email")} />
          {err("email")}
        </div>
        <div>
          <label className={label} htmlFor={id("phone")}>Telefon (opțional)</label>
          <input id={id("phone")} type="tel" className={field} value={f.phone} autoComplete="tel"
            onChange={(e) => setF({ ...f, phone: e.target.value })} />
        </div>
        <div>
          <label className={label} htmlFor={id("groupSize")}>Număr de persoane</label>
          <input id={id("groupSize")} className={field} value={f.groupSize} placeholder="de exemplu 18"
            onChange={(e) => setF({ ...f, groupSize: e.target.value })} {...aria("groupSize")} />
          {err("groupSize")}
        </div>
        <div>
          <label className={label} htmlFor={id("nights")}>Număr de nopți</label>
          <select id={id("nights")} className={field} value={f.nights}
            onChange={(e) => setF({ ...f, nights: e.target.value })}>
            {NIGHT_OPTIONS.map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor={id("period")}>Perioada dorită</label>
          <input id={id("period")} className={field} value={f.period} placeholder="de exemplu 9-11 octombrie"
            onChange={(e) => setF({ ...f, period: e.target.value })} {...aria("period")} />
          {err("period")}
        </div>
        <div>
          <label className={label} htmlFor={id("needsRoom")}>Aveți nevoie de sala de lucru?</label>
          <select id={id("needsRoom")} className={field} value={f.needsRoom}
            onChange={(e) => setF({ ...f, needsRoom: e.target.value })}>
            <option value="da">Da</option>
            <option value="nu">Nu</option>
          </select>
        </div>

        {showFnb && (
          <fieldset className="sm:col-span-2 m-0 border-0 p-0">
            <legend className={label}>Mese dorite</legend>
            <div className="flex flex-wrap gap-4">
              {MEAL_OPTIONS.map((m) => (
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
          <label className={label} htmlFor={id("message")}>Mesaj (opțional)</label>
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
              Sunt de acord ca datele să fie folosite pentru a primi oferta, conform{" "}
              <a href="/politica-de-confidentialitate" className="text-terracotta underline underline-offset-2">
                politicii de confidențialitate
              </a>
              .
            </span>
          </label>
          {err("consent")}
        </div>
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <button type="button" onClick={() => submit("whatsapp")} className={`${btnTerracotta} cursor-pointer`}>
          Trimite pe WhatsApp
        </button>
        <button type="button" onClick={() => submit("email")} className={`${btnOutlineDark} cursor-pointer`}>
          Trimite pe email
        </button>
      </div>
      <p className="mt-4 mb-0 text-[13px] text-muted-2">
        Primești oferta completă în 24 de ore lucrătoare.
      </p>
    </div>
  );
}
