import type { NextConfig } from "next";

/**
 * Security headers.
 *
 * No Content-Security-Policy on purpose. GTM injects scripts at runtime, so a
 * CSP written blind would silently break analytics in production. If one is
 * wanted, ship it as Content-Security-Policy-Report-Only first and verify on a
 * preview deploy before enforcing.
 */
const securityHeaders = [
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
