import Eyebrow from "./Eyebrow";

type Props = {
  eyebrow: string;
  title: string;
  children?: React.ReactNode; // optional lead paragraph
  tone?: "light" | "dark";
  center?: boolean;
  className?: string;
  /**
   * Heading level. Defaults to h2 — the right choice for a section inside a page
   * that already has an h1. Pass "h1" when this heading *is* the page title, so
   * the page does not start its outline at h2 with nothing above it.
   */
  as?: "h1" | "h2";
};

/** Section rhythm: eyebrow → serif heading → optional lead text. */
export default function SectionHeading({
  eyebrow,
  title,
  children,
  tone = "light",
  center = false,
  className = "",
  as: Heading = "h2",
}: Props) {
  const heading = tone === "dark" ? "text-card-2" : "text-pine";
  const lead = tone === "dark" ? "text-paper/80" : "text-muted";
  return (
    <div className={`${center ? "text-center" : ""} ${className}`}>
      <Eyebrow tone={tone} className="mb-4">
        {eyebrow}
      </Eyebrow>
      <Heading
        className={`font-serif font-semibold leading-[1.05] ${heading} text-[clamp(34px,4.5vw,56px)]`}
      >
        {title}
      </Heading>
      {children ? (
        <p
          className={`mt-4 text-[17px] leading-relaxed ${lead} ${center ? "mx-auto max-w-[50ch]" : "max-w-2xl"}`}
        >
          {children}
        </p>
      ) : null}
    </div>
  );
}
