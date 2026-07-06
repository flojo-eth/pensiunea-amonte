import Image from "next/image";

type Props = {
  /** Bracketed hint shown until a real photo is dropped in. */
  label: string;
  /** When provided, renders an optimized next/image instead of the placeholder. */
  src?: string;
  alt?: string;
  className?: string;
  /** Diagonal-stripe tone: "light" on cream sections, "dark" on green ones. */
  tone?: "light" | "dark";
  priority?: boolean;
  sizes?: string;
  imgClassName?: string;
};

const STRIPES = {
  light:
    "repeating-linear-gradient(135deg,#e6e2d6,#e6e2d6 10px,#ded9cb 10px,#ded9cb 20px)",
  dark: "repeating-linear-gradient(135deg,#46563f,#46563f 11px,#3f4f39 11px,#3f4f39 22px)",
};

/**
 * Photos are placeholders for now. Pass `src` (a file in /public) and this
 * renders a real, optimized next/image; otherwise it shows a clearly-marked
 * striped placeholder so the owner knows exactly which photo goes where.
 */
export default function PlaceholderImage({
  label,
  src,
  alt,
  className = "",
  tone = "light",
  priority,
  sizes = "100vw",
  imgClassName = "",
}: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt ?? label.replace(/[[\]]/g, "").trim()}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${imgClassName}`}
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{ background: STRIPES[tone] }}
          role="img"
          aria-label={alt ?? label.replace(/[[\]]/g, "").trim()}
        >
          <span
            className="absolute bottom-2.5 left-3 font-mono text-[10px]"
            style={{ color: tone === "dark" ? "rgba(245,240,229,0.6)" : "#9a9684" }}
          >
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
