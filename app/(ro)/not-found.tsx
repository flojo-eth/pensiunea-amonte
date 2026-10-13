import Link from "next/link";
import { btnTerracotta } from "@/lib/ui";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
      <span className="font-serif text-[64px] font-semibold leading-none text-forest">
        404
      </span>
      <h1 className="mt-4 font-serif text-[clamp(26px,4vw,40px)] font-semibold text-pine">
        Pagina nu a fost găsită
      </h1>
      <p className="mt-3 max-w-[40ch] text-[16px] leading-relaxed text-muted">
        Se pare că ai luat o potecă greșită. Hai înapoi la pensiune.
      </p>
      <Link href="/" className={`${btnTerracotta} mt-7`}>
        Înapoi acasă
      </Link>
    </main>
  );
}
