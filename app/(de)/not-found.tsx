import Link from "next/link";
import { btnTerracotta } from "@/lib/ui";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
      <span className="font-serif text-[64px] font-semibold leading-none text-forest">
        404
      </span>
      <h1 className="mt-4 font-serif text-[clamp(26px,4vw,40px)] font-semibold text-pine">
        Seite nicht gefunden
      </h1>
      <p className="mt-3 max-w-[40ch] text-[16px] leading-relaxed text-muted">
        Sieht aus, als hätten Sie einen falschen Weg genommen. Zurück zur Pension.
      </p>
      <Link href="/de" className={`${btnTerracotta} mt-7`}>
        Zur Startseite
      </Link>
    </main>
  );
}
