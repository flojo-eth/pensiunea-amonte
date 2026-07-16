import Link from "next/link";
import type { Room } from "@/lib/content";
import PlaceholderImage from "./PlaceholderImage";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-[10px] bg-card shadow-[0_1px_3px_rgba(40,44,38,0.06)]">
      <Link href={`/camere/${room.slug}`} className="block group relative">
        {(() => {
          const leftVal = room.cardPhotos?.[0] ?? room.photos?.[0] ?? room.photo;
          const rightVal = room.cardPhotos?.[1] ?? room.photos?.[1];

          const left = typeof leftVal === "string" ? leftVal : (leftVal as any)?.src;
          const leftImgClass = typeof leftVal === "string" ? "" : (leftVal as any)?.imgClassName;

          const right = typeof rightVal === "string" ? rightVal : (rightVal as any)?.src;
          const rightImgClass = typeof rightVal === "string" ? "" : (rightVal as any)?.imgClassName;

          return right ? (
            <div className="grid aspect-[4/3] grid-cols-2 gap-[2px]">
              <PlaceholderImage
                src={left}
                alt={room.name}
                label={room.photoLabel}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                imgClassName={leftImgClass}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <PlaceholderImage
                src={right}
                alt={room.name}
                label={room.photoLabel}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                imgClassName={rightImgClass}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ) : (
            <PlaceholderImage
              src={left}
              alt={room.name}
              label={room.photoLabel}
              className="aspect-[4/3]"
              imgClassName={leftImgClass}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          );
        })()}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
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
