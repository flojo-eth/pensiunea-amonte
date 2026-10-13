import { Cormorant_Garamond, Hanken_Grotesk } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CookieBanner from "@/components/CookieBanner";
import { GTM_ID } from "@/lib/site";
import { consentBootstrapScript } from "@/lib/consent";
import type { Lang } from "@/lib/i18n/config";
import "@/app/globals.css";

// Headings (serif) + body (sans), exposed as CSS variables for the Tailwind theme.
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
    <html lang={lang}>
      {/* The rule targets pages/_document; this is an App Router root layout,
          where a plain <head> is the documented way. It only exempts files
          under app/, which this shared component is not. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        {/* Google Consent Mode v2 defaults.
            A plain inline script, not next/script: it must run during HTML parse,
            before the GTM loader below, so every tag starts in a denied state.
            A returning visitor's stored choice is replayed here too — doing it
            later (from React) would leave GTM denied for the first 500 ms. */}
        <script dangerouslySetInnerHTML={{ __html: consentBootstrapScript() }} />
        {/* Google Tag Manager - GA4 (G-KX3GQHYHF6) is delivered through GTM.
            Active on staging so whatsapp_click can be verified in GTM Preview. */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body
        className={`${cormorant.variable} ${hanken.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Analytics />
        <SpeedInsights />
        <CookieBanner />
      </body>
    </html>
  );
}
