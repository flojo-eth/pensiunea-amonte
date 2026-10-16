"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { WHATSAPP_NUMBER, CONTACT } from "@/lib/content";
import { href } from "@/lib/i18n/config";
import { useLang } from "@/lib/i18n/useLang";
import { UI } from "@/lib/i18n/ui";
import { btnTerracotta, btnOutlineDark } from "@/lib/ui";

/**
 * Request form for private events, the first of the four booking steps on
 * /evenimente-private (form, visit, offer, deposit).
 *
 * Built like OfferRequestForm, without a backend: submitting composes the
 * message and hands it to WhatsApp or to the visitor's mail client. The phone
 * is required and the email is not, because the next step is a call to set
 * up a visit to the guesthouse.
 *
 * No dataLayer push yet, on purpose: the only form event, offer_request_submit,
 * is mapped in GTM to the corporate conversion. Private events get their own
 * tracking once Flo configures it; until then this form reports nothing.
 *
 * `eventTypes` arrive from the server in the page's language.
 */
type Props = { eventTypes: string[] };

type Fields = {
  name: string;
  phone: string;
  email: string;
  type: string;
  date: string;
  guests: string;
  setting: string;
  message: string;
  consent: boolean;
};

const label = "block text-[13px] font-semibold text-pine mb-1.5";
const field =
  "w-full rounded-lg border border-line-2 bg-card px-4 py-3 text-[15px] text-ink outline-none focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-terracotta";

export default function EventRequestForm({ eventTypes }: Props) {
  const lang = useLang();
  const t = UI[lang].eventForm;
  const types = [...eventTypes, t.otherType];
  const [f, setF] = useState<Fields>({
    name: "",
    phone: "",
    email: "",
    type: types[0],
    date: "",
    guests: "",
    setting: t.settings[0].value,
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;

  /** Returns the freshly computed errors, so callers never read stale state. */
  function validate() {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (!f.name.trim()) e.name = t.errors.name;
    if (!f.phone.trim()) e.phone = t.errors.phone;
    if (f.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = t.errors.emailInvalid;
    if (!f.date.trim()) e.date = t.errors.date;
    if (!f.guests.trim()) e.guests = t.errors.guests;
    if (!f.consent) e.consent = t.errors.consent;
    setErrors(e);
    return e;
  }

  function compose() {
    const m = t.compose;
    const setting = t.settings.find((s) => s.value === f.setting)?.label ?? "";
    return [
      m.greeting,
      "",
      `${m.name}: ${f.name}`,
      `${m.phone}: ${f.phone}`,
      ...(f.email.trim() ? [`${m.email}: ${f.email}`] : []),
      `${m.type}: ${f.type}`,
      `${m.date}: ${f.date}`,
      `${m.guests}: ${f.guests}`,
      `${m.setting}: ${setting}`,
      ...(f.message.trim() ? ["", `${m.message}: ${f.message}`] : []),
    ].join("\n");
  }

  function submit(channel: "whatsapp" | "email") {
    const found = validate();
    const firstError = Object.keys(found)[0];
    if (firstError) {
      document.getElementById(id(firstError))?.focus();
      return;
    }
    const body = compose();
    if (channel === "whatsapp") {
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`,
        "_blank",
        "noopener",
      );
    } else {
      const subject = `${t.compose.subject} ${f.type} ${f.date}`.trim();
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
    // Not a <form>, as in OfferRequestForm: each button submits on its own.
    <div className="rounded-2xl border border-line bg-card p-[clamp(22px,4vw,36px)]">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor={id("name")}>{t.labels.name}</label>
          <input id={id("name")} className={field} value={f.name} autoComplete="name"
            onChange={(e) => setF({ ...f, name: e.target.value })} {...aria("name")} />
          {err("name")}
        </div>
        <div>
          <label className={label} htmlFor={id("phone")}>{t.labels.phone}</label>
          <input id={id("phone")} type="tel" className={field} value={f.phone} autoComplete="tel"
            onChange={(e) => setF({ ...f, phone: e.target.value })} {...aria("phone")} />
          {err("phone")}
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor={id("email")}>{t.labels.email}</label>
          <input id={id("email")} type="email" className={field} value={f.email} autoComplete="email"
            onChange={(e) => setF({ ...f, email: e.target.value })} {...aria("email")} />
          {err("email")}
        </div>
        <div>
          <label className={label} htmlFor={id("type")}>{t.labels.type}</label>
          <select id={id("type")} className={field} value={f.type}
            onChange={(e) => setF({ ...f, type: e.target.value })}>
            {types.map((type) => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>
        <div>
          <label className={label} htmlFor={id("date")}>{t.labels.date}</label>
          <input id={id("date")} className={field} value={f.date} placeholder={t.placeholders.date}
            onChange={(e) => setF({ ...f, date: e.target.value })} {...aria("date")} />
          {err("date")}
        </div>
        <div>
          <label className={label} htmlFor={id("guests")}>{t.labels.guests}</label>
          <input id={id("guests")} inputMode="numeric" className={field} value={f.guests} placeholder={t.placeholders.guests}
            onChange={(e) => setF({ ...f, guests: e.target.value })} {...aria("guests")} />
          {err("guests")}
        </div>
        <div>
          <label className={label} htmlFor={id("setting")}>{t.labels.setting}</label>
          <select id={id("setting")} className={field} value={f.setting}
            onChange={(e) => setF({ ...f, setting: e.target.value })}>
            {t.settings.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
        </div>
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
      <p className="mt-4 mb-0 text-[13px] text-muted-2">{t.footnote}</p>
    </div>
  );
}
