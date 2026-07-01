import Link from "next/link";
import { CONTACT, NAV_LINKS, WEBSITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-pine-dark px-[clamp(20px,5vw,64px)] pb-10 pt-[clamp(48px,6vw,72px)] text-paper/70">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-start justify-between gap-8">
        <div>
          <div className="font-serif text-[30px] font-bold leading-none text-paper">
            Amonte
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-[3.5px] opacity-70">
            Pensiune montană
          </div>
          <p className="mt-[18px] max-w-[36ch] text-sm leading-relaxed">
            Pensiune boutique în Valea Avrigului, la poalele Munților Făgăraș.
          </p>
        </div>

        <div className="flex flex-wrap gap-[clamp(32px,5vw,72px)]">
          <div className="flex flex-col gap-2.5">
            <div className="mb-1 text-xs uppercase tracking-[1px] text-paper/45">
              Navigare
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
            <div className="mb-1 text-xs uppercase tracking-[1px] text-paper/45">
              Contact
            </div>
            <a
              href={WEBSITE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-paper/80 no-underline hover:text-paper"
            >
              {WEBSITE.replace("https://", "")}
            </a>
            <a
              href={`tel:${CONTACT.phoneMobile.replace(/\s/g, "")}`}
              className="text-sm text-paper/80 no-underline hover:text-paper"
            >
              {CONTACT.phoneMobile}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-sm text-paper/80 no-underline hover:text-paper"
            >
              {CONTACT.email}
            </a>
            <span className="text-sm">
              Instagram · Facebook · TikTok: {CONTACT.social}
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1280px] border-t border-paper/10 pt-[22px] text-[13px] opacity-60">
        © {new Date().getFullYear()} Pensiunea Amonte. Toate drepturile
        rezervate.
      </div>
    </footer>
  );
}
