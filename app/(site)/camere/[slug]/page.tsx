import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import PlaceholderImage from "@/components/PlaceholderImage";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ROOMS, getRoom } from "@/lib/content";
import { btnTerracotta, btnOutlineDark } from "@/lib/ui";

const container = "mx-auto max-w-[1080px] px-[clamp(20px,5vw,64px)]";

export function generateStaticParams() {
  return ROOMS.map((r) => ({ slug: r.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) return {};
  return {
    title: room.name,
    description: room.desc,
    alternates: { canonical: `/camere/${room.slug}` },
  };
}

export default async function RoomPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) notFound();

  return (
    <section className={`${container} py-[clamp(48px,6vw,88px)]`}>
      <Link
        href="/camere"
        className="text-sm font-semibold text-terracotta no-underline hover:underline"
      >
        ← Toate camerele
      </Link>

      <PlaceholderImage
        src={room.photo}
        alt={room.name}
        label={room.photoLabel}
        className="mt-6 aspect-[16/9] rounded-xl"
        priority
        sizes="(max-width: 1080px) 100vw, 1080px"
      />

      <div className="mt-8 flex flex-wrap gap-[clamp(28px,4vw,56px)]">
        <div className="flex-1 basis-[320px]">
          <Eyebrow className="mb-3">Cazare</Eyebrow>
          <h1 className="m-0 font-serif text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.05] text-pine">
            {room.name}
          </h1>
          <div className="mt-2 text-[14px] text-muted-2">{room.spec}</div>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            {room.longDesc}
          </p>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {room.features.map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-[15px] text-[#33392f]">
                <span className="text-forest">✓</span> {f}
              </li>
            ))}
          </ul>
        </div>

        <aside className="flex-1 basis-[280px] self-start rounded-xl border border-line bg-card p-7">
          <div>
            <span className="font-serif text-[34px] font-semibold text-terracotta">
              {room.price}
            </span>
            <span className="text-[13px] text-muted-2"> lei / noapte</span>
          </div>
          <p className="mt-2 text-[14px] text-muted">Mic dejun inclus.</p>
          <div className="mt-5 flex flex-col gap-3">
            <WhatsAppButton className={`${btnTerracotta} w-full`}>
              Cere disponibilitate
            </WhatsAppButton>
            <Link href="/camere/tarife" className={`${btnOutlineDark} w-full`}>
              Vezi toate tarifele
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
