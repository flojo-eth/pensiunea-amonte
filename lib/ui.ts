// Shared pill-button styles (radius 999px) from the prototype, kept in one
// place so every CTA looks identical.
const base =
  "inline-flex items-center justify-center rounded-full font-semibold transition-colors";

/** Terracotta - the primary conversion CTA. */
export const btnTerracotta = `${base} bg-terracotta text-paper px-7 py-4 text-[15px] hover:bg-[#96652f]`;

/** Paper fill - primary action on dark (green) backgrounds. */
export const btnPaper = `${base} bg-paper text-pine px-7 py-4 text-[15px] hover:bg-card-2`;

/** Outline on dark backgrounds. */
export const btnOutlineLight = `${base} border border-paper/55 text-paper px-7 py-4 text-[15px] hover:border-paper`;

/** Outline on light backgrounds. */
export const btnOutlineDark = `${base} border border-line-2 text-forest px-7 py-4 text-[15px] hover:border-muted-2`;

/** Small pill (used inside cards). */
export const btnSmall = `${base} border border-line-2 text-forest px-4 py-2.5 text-[13.5px] hover:border-muted-2`;
