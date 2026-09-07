/**
 * Feature flags, derived from the deployment environment.
 *
 * One source of truth, no manual environment variables to keep in sync across
 * Vercel projects. `VERCEL_ENV` is set by Vercel itself: "production" on the
 * production domain, "preview" on every branch and PR deploy, and undefined
 * locally (treated as "development").
 *
 * IMPORTANT: `process.env.VERCEL_ENV` is inlined only on the server, because it
 * carries no NEXT_PUBLIC_ prefix. Read these flags in server components and
 * pass the value down as a prop when a client component needs it. Importing
 * this module directly into a client component would silently yield the
 * development values in the browser.
 */

type DeployEnv = "production" | "preview" | "development";

type Flags = {
  /**
   * Food & beverage: the meals section, the FAQ entry about meals, the meal
   * items in the sample agenda and the meals field in the offer form.
   *
   * DSP and ANSVSA approvals for CAEN 5611 and 5630 were obtained in September
   * 2026, so this is now true everywhere. The flag is kept for editorial
   * control, not for compliance: it stays as the single switch for the whole
   * F&B category if the offer ever changes.
   */
  SHOW_FNB: boolean;
  /** Indicative pricing block. Off would hide prices and keep the CTA only. */
  SHOW_PRICING: boolean;
};

const PRODUCTION: Flags = {
  SHOW_FNB: true,
  SHOW_PRICING: true,
};

const STAGING: Flags = {
  SHOW_FNB: true,
  SHOW_PRICING: true,
};

const BY_ENV: Record<DeployEnv, Flags> = {
  production: PRODUCTION,
  preview: STAGING,
  development: STAGING,
};

const CURRENT_ENV: DeployEnv =
  (process.env.VERCEL_ENV as DeployEnv | undefined) ?? "development";

export const FLAGS = BY_ENV[CURRENT_ENV];
export const { SHOW_FNB, SHOW_PRICING } = FLAGS;
