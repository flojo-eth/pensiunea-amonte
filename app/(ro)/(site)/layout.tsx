import SiteShell from "@/components/SiteShell";

/** Banner, nav, footer and the site-wide JSON-LD, around every Romanian page
 *  except /rezerva-acum, which stays distraction-free. */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteShell lang="ro">{children}</SiteShell>;
}
