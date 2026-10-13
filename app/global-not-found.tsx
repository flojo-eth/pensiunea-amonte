import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { btnTerracotta } from "@/lib/ui";

// Each language has its own root layout, so there is no single layout to build
// a 404 from. This page answers every unmatched URL, in both languages, and is
// rendered on the server in full (a catch-all route only sent an empty shell).
const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["600"], display: "swap" });
const hanken = Hanken_Grotesk({ variable: "--font-hanken", subsets: ["latin"], weight: ["400", "600"], display: "swap" });

export const metadata: Metadata = {
  title: "Pagina nu a fost găsită | Pensiunea Amonte",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="ro">
      <body className={`${cormorant.variable} ${hanken.variable} antialiased`}>
        <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
          <span className="font-serif text-[64px] font-semibold leading-none text-forest">404</span>
          <h1 className="mt-4 font-serif text-[clamp(26px,4vw,40px)] font-semibold text-pine">
            Pagina nu a fost găsită
          </h1>
          <p className="mt-3 max-w-[40ch] text-[16px] leading-relaxed text-muted">
            Se pare că ai luat o potecă greșită. Hai înapoi la pensiune.
          </p>
          <Link href="/" className={`${btnTerracotta} mt-7`}>
            Înapoi acasă
          </Link>
          <p lang="en" className="mt-10 text-[14px] text-muted-2">
            Page not found.{" "}
            <Link href="/en" className="text-forest underline underline-offset-2">
              Back to the English site
            </Link>
          </p>
        </main>
      </body>
    </html>
  );
}
