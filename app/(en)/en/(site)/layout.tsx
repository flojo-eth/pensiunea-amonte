import SiteShell from "@/components/SiteShell";

/** Banner, nav, footer and the site-wide JSON-LD, around every English page
 *  except /en/book-now, which stays distraction-free. */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteShell lang="en">{children}</SiteShell>;
}
