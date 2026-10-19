import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import CurrentYear from "./CurrentYear";
import WhatsAppButton from "./WhatsAppButton";
import { CONTACT, WEBSITE, SOCIAL_PROFILES, OPERATOR } from "@/lib/content";
import { getContent, href, type Lang } from "@/lib/i18n";
import { UI } from "@/lib/i18n/ui";

export default function Footer({ lang }: { lang: Lang }) {
  const t = UI[lang].footer;
  const { NAV_LINKS, WHATSAPP_URL } = getContent(lang);
  return (
    <footer className="bg-pine-dark px-[clamp(20px,5vw,64px)] pb-10 pt-[clamp(48px,6vw,72px)] text-paper/70">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-start justify-between gap-8">
        <div>
          <div className="font-serif text-[30px] font-bold leading-none text-paper">
            Amonte
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-[3.5px] opacity-70">
            {t.tagline}
          </div>
          <p className="mt-[18px] max-w-[36ch] text-sm leading-relaxed">
            {t.blurb}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://anpc.ro/ce-este-sal/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-90 transition-opacity"
            >
              <Image
                src="/anpc-sal.svg"
                alt={t.salAlt}
                width={250}
                height={50}
                className="h-10 w-auto rounded-md"
              />
            </a>
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-90 transition-opacity"
            >
              <Image
                src="/anpc-sol.svg"
                alt={t.solAlt}
                width={250}
                height={50}
                className="h-10 w-auto rounded-md"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-[clamp(32px,5vw,72px)]">
          <div className="flex flex-col gap-2.5">
            <div className="mb-1 text-xs uppercase tracking-[1px] text-paper/60">
              {t.explore}
            </div>
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-paper/80 no-underline hover:text-paper"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="mb-1 text-xs uppercase tracking-[1px] text-paper/60">
              {t.contact}
            </div>
            {/* Era un <a> cu URL scris de mână, deci clicurile din footer nu
                ajungeau deloc în dataLayer. `page_source: footer` le ține
                separate de CTA-urile de pagină, ca să nu umfle conversiile. */}
            <WhatsAppButton
              href={WHATSAPP_URL}
              pageSource="footer"
              className="text-sm text-paper/80 no-underline hover:text-paper"
            >
              WhatsApp
            </WhatsAppButton>
            <a
              href={`tel:${CONTACT.phoneMobile.replace(/\s/g, "")}`}
              className="text-sm text-paper/80 no-underline hover:text-paper"
            >
              {CONTACT.phoneMobile}
            </a>
            <a
              href={WEBSITE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-paper/80 no-underline hover:text-paper"
            >
              {WEBSITE.replace("https://", "")}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-sm text-paper/80 no-underline hover:text-paper"
            >
              {CONTACT.email}
            </a>
            {/* Same list feeds `sameAs` in the JSON-LD — see lib/content.ts */}
            <div className="mt-1 flex flex-wrap gap-x-2 gap-y-1 text-sm text-paper/80">
              {SOCIAL_PROFILES.map((s, i) => (
                <Fragment key={s.url}>
                  {i > 0 && <span className="opacity-40">·</span>}
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-paper"
                  >
                    {s.label}
                  </a>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1280px] border-t border-paper/10 pt-[22px] text-[13px] text-paper/60 flex flex-wrap justify-between gap-4">
        <div>
          © <CurrentYear fallback={new Date().getFullYear()} /> {t.rights}{" "}
          <a
            href={OPERATOR.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-paper/80 underline underline-offset-2 hover:text-paper"
          >
            {OPERATOR.name}
          </a>
          .
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[12px]">
          <Link href={href(lang, "terms")} className="no-underline hover:underline hover:text-paper">
            {t.terms}
          </Link>
          <Link href={href(lang, "privacy")} className="no-underline hover:underline hover:text-paper">
            {t.privacy}
          </Link>
          <Link href={href(lang, "cookies")} className="no-underline hover:underline hover:text-paper">
            {t.cookies}
          </Link>
          <CookieSettingsButton className="cursor-pointer border-0 bg-transparent p-0 text-inherit hover:underline hover:text-paper">
            {t.cookieSettings}
          </CookieSettingsButton>
        </div>
      </div>
    </footer>
  );
}
