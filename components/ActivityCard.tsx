import type { Activity } from "@/lib/content";
import PlaceholderImage from "./PlaceholderImage";

export default function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <div className="overflow-hidden rounded-[10px] border border-sand bg-card-2">
      <div className="relative">
        {activity.photos ? (
          <div className="grid aspect-[16/10] grid-cols-2 gap-[2px]">
            <PlaceholderImage
              src={activity.photos[0]}
              alt={activity.name}
              label={activity.photoLabel}
              className="h-full"
              sizes="(max-width: 768px) 50vw, 17vw"
            />
            <PlaceholderImage
              src={activity.photos[1]}
              alt={activity.name}
              label={activity.photoLabel}
              className="h-full"
              sizes="(max-width: 768px) 50vw, 17vw"
            />
          </div>
        ) : (
          <PlaceholderImage
            src={activity.photo}
            alt={activity.name}
            label={activity.photoLabel}
            className="aspect-[16/10]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
        <span className="absolute left-3 top-3 rounded-full bg-pine/85 px-[11px] py-[5px] text-[11px] font-semibold text-paper">
          {activity.dist}
        </span>
      </div>
      <div className="px-[22px] py-5">
        <h3 className="font-serif text-[22px] font-semibold text-pine">
          {activity.name}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-[#6e6f66]">
          {activity.desc}
        </p>
      </div>
    </div>
  );
}
