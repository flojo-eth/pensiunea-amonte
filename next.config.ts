import type { NextConfig } from "next";

/**
 * Content-Security-Policy, in REPORT-ONLY mode.
 *
 * Report-Only observes and reports; it blocks nothing. That is deliberate — GTM
 * injects scripts at runtime, so an enforced policy written blind would silently
 * break analytics in production.
 *
 * How to graduate it to enforcing:
 *   1. Leave this deployed for a few days of real traffic.
 *   2. Open the browser console on the live site and look for
 *      "[Report Only] Refused to ..." messages — each one names a source this
 *      policy would have blocked.
 *   3. Add any legitimate source to the right directive below.
 *   4. Only once the reports are quiet, rename the header key to
 *      "Content-Security-Policy" (drop "-Report-Only").
 *
 * 'unsafe-inline' and 'unsafe-eval' are required by Google Tag Manager, which
 * evaluates container code at runtime. Removing them means moving to a
 * nonce-based policy, which in turn requires rendering the pages dynamically —
 * a real trade-off against the current fully-static output.
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://*.google-analytics.com https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://*.googletagmanager.com https://*.google-analytics.com https://*.google.com https://*.gstatic.com",
  "font-src 'self' data:",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://va.vercel-scripts.com",
  // The consent-gated Google Maps embed
  "frame-src https://*.google.com https://*.googletagmanager.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

/**
 * Security headers.
 */
const securityHeaders = [
  { key: "Content-Security-Policy-Report-Only", value: csp },
  // Stop browsers from MIME-sniffing a response into something executable.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Full URL same-origin, origin only cross-origin, nothing downgraded to http.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Clickjacking: the site never needs to be framed by a third party.
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // The site asks for none of these; deny them up front.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  // Vercel already sends HSTS; stating it here keeps it true on any host.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  images: {
    // AVIF first: ~20-30% smaller than WebP on photography, which is all this site serves.
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
