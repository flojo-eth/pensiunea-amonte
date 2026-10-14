import SiteShell from "@/components/SiteShell";

/** Banner, nav, footer and the site-wide JSON-LD, around every German page
 *  except /de/jetzt-buchen, which stays distraction-free. */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteShell lang="de">{children}</SiteShell>;
}
