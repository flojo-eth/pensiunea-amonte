import Link from "next/link";

/** Terracotta availability strip above the nav. */
export default function AvailabilityBanner() {
  return (
    <div className="bg-terracotta px-5 py-3 text-center text-sm font-medium tracking-[0.3px] text-[#fbf4e9]">
      Ultimele locuri disponibile pentru weekend-urile din sezon - rezervă din timp ·{" "}
      <Link href="/rezerva-acum" className="font-semibold text-[#fbf4e9] underline-offset-2 hover:underline">
        cere disponibilitate →
      </Link>
    </div>
  );
}
