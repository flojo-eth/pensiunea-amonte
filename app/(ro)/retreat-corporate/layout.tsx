import SiteShell from "@/components/SiteShell";

/** The corporate landing: outside (site) so it gets LandingHeader instead of
 *  the nav. Banner, footer and the site-wide JSON-LD stay as everywhere else. */
export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteShell lang="ro" landing>{children}</SiteShell>;
}
