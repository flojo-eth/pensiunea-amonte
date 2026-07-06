import Link from "next/link";
import Image from "next/image";
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
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://anpc.ro/ce-este-sal/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-90 transition-opacity"
            >
              <Image
                src="/anpc-sal.svg"
                alt="Soluționarea Alternativă a Litigiilor"
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
                alt="Soluționarea Online a Litigiilor"
                width={250}
                height={50}
                className="h-10 w-auto rounded-md"
              />
            </a>
          </div>
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
              href="https://wa.me/40747342280?text=Salut!%20A%C8%99%20dori%20s%C4%83%20verific%20disponibilitatea%20pentru%20o%20rezervare%20la%20Pensiunea%20Amonte."
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-paper/80 no-underline hover:text-paper"
            >
              WhatsApp
            </a>
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
            <div className="mt-1 flex flex-wrap gap-x-2 gap-y-1 text-sm text-paper/80">
              <a
                href="https://www.instagram.com/pensiunea.amonte?igsh=MXB3M2g4cHFuYWl6Ng=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-paper"
              >
                Instagram
              </a>
              <span className="opacity-40">·</span>
              <a
                href="https://www.facebook.com/pensiunea.amonte.avrig"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-paper"
              >
                Facebook
              </a>
              <span className="opacity-40">·</span>
              <a
                href="https://www.tiktok.com/@pensiunea.amonte?_r=1&_t=ZN-97nsYK9mblG"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-paper"
              >
                TikTok
              </a>
              <span className="opacity-40">·</span>
              <a
                href="https://ro.linkedin.com/showcase/pensiunea-amonte-avrig/?trk=affiliated-pages"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-paper"
              >
                LinkedIn
              </a>
            </div>
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
