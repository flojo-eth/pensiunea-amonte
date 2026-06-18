import Link from "next/link";
import type { Room } from "@/lib/content";
import PlaceholderImage from "./PlaceholderImage";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-[10px] bg-card shadow-[0_1px_3px_rgba(40,44,38,0.06)]">
      <Link href={`/camere/${room.slug}`} className="block">
        <PlaceholderImage
          src={room.photo}
          alt={room.name}
          label={room.photoLabel}
          className="aspect-[4/3]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>
      <div className="flex flex-1 flex-col p-[26px]">
        <h3 className="font-serif text-[26px] font-semibold text-pine">
          <Link href={`/camere/${room.slug}`} className="no-underline hover:underline">
            {room.name}
          </Link>
        </h3>
        <div className="mb-4 mt-1.5 text-[13.5px] text-muted-2">{room.spec}</div>
        <p className="mb-[22px] flex-1 text-[14.5px] leading-relaxed text-muted">
          {room.desc}
        </p>
        <div className="flex items-baseline justify-between border-t border-line pt-[18px]">
          <div>
            <span className="font-serif text-[30px] font-semibold text-terracotta">
              {room.price}
            </span>
            <span className="text-[13px] text-muted-2"> lei / noapte</span>
          </div>
          <Link
            href={`/camere/${room.slug}`}
            className="rounded-full border border-line-2 px-4 py-2.5 text-[13.5px] font-semibold text-forest no-underline hover:border-muted-2"
          >
            Detalii
          </Link>
        </div>
      </div>
    </div>
  );
}
