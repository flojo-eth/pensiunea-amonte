import { Cormorant_Garamond, Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CookieBanner from "@/components/CookieBanner";
import { GTM_ID } from "@/lib/site";
import { consentBootstrapScript } from "@/lib/consent";
import type { Lang } from "@/lib/i18n/config";
import "@/app/globals.css";

// Headings (serif) + body (sans), exposed as CSS variables for the Tailwind theme.
// The variable classes go on <html>, not <body>: globals.css defines
// --font-serif / --font-sans at :root from these, and a variable that only
// exists on <body> is undefined there, so every font fell back to the system
// sans. That was live until October 2026.
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/**
 * The <html> document shared by both root layouts, app/(ro) and app/(en).
 *
 * Each language has its own root layout so that <html lang> is right in the
 * prerendered HTML, which is what crawlers and screen readers read. Everything
 * else (consent defaults, GTM, analytics, the cookie banner) is the same, so it
 * lives here once.
 */
export default function RootDocument({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang} className={`${cormorant.variable} ${hanken.variable}`}>
      {/* The rule targets pages/_document; this is an App Router root layout,
          where a plain <head> is the documented way. It only exempts files
          under app/, which this shared component is not. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        {/* Basic consent mode: Consent Mode defaults, plus the GTM loader,
            which runs only once the visitor has accepted (lib/consent.ts).
            A plain inline script, not next/script: it must run during HTML
            parse, so a returning visitor who accepted keeps their pageview.
            GA4 (G-KX3GQHYHF6) and Meta Pixel are delivered through GTM. */}
        <script dangerouslySetInnerHTML={{ __html: consentBootstrapScript(GTM_ID) }} />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
        <CookieBanner />
      </body>
    </html>
  );
}
