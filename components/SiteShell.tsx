import JsonLd from "@/components/JsonLd";
import AvailabilityBanner from "@/components/AvailabilityBanner";
import Nav from "@/components/Nav";
import LandingHeader from "@/components/LandingHeader";
import Footer from "@/components/Footer";
import { SITE_NAME } from "@/lib/site";
import {
  CONTACT,
  WEBSITE,
  GPS_LAT,
  GPS_LNG,
  POSTAL_CODE,
  CHECK_IN,
  CHECK_OUT,
  SCHEMA_IMAGES,
  SOCIAL_PROFILES,
  GOOGLE_MAPS_URL,
  PRICE_RANGE,
} from "@/lib/content";
import { getContent, getCopy, type Lang } from "@/lib/i18n";
import { UI } from "@/lib/i18n/ui";

// Appears on every (site) page. /rezerva-acum lives outside this route group
// deliberately (conversion landing, no nav distractions).
//
// @type is BedAndBreakfast — a subtype of LodgingBusiness, so nothing is lost
// versus the generic type, and it describes a 10-room guesthouse with breakfast
// included more accurately than "Hotel" would.
//
// Deliberately NO aggregateRating/review here. LodgingBusiness inherits from
// LocalBusiness, and Google disallows "self-serving" reviews — those a business
// publishes about itself on its own site — as well as reviews aggregated from
// third-party sites. Both would apply to the Google reviews shown in
// ReviewsCarousel, and marking them up risks a Spammy-structured-markup manual
// action. The star ratings in search come from Google Business Profile instead.
//
// One entity in both languages: the @ids are the same on the Romanian and the
// English pages, and only the text fields (description, amenity names, payment
// methods, inLanguage) follow the page. The address stays in Romanian on both.
function lodgingJsonLd(lang: Lang) {
  const site = getCopy(lang).site;
  const { AMENITIES } = getContent(lang);

  // The operator, as on the legal pages. Its registered office is deliberately
  // left out: a second address next to the guesthouse would blur the local NAP.
  const organization = {
    "@type": "Organization",
    "@id": `${WEBSITE}/#organization`,
    name: "Hostillo S.R.L.",
    legalName: "Hostillo S.R.L.",
    taxID: "54352472",
    url: WEBSITE,
  };

  const website = {
    "@type": "WebSite",
    "@id": `${WEBSITE}/#website`,
    url: WEBSITE,
    name: SITE_NAME,
    inLanguage: site.inLanguage,
    publisher: { "@id": `${WEBSITE}/#organization` },
  };

  const lodging = {
    "@type": "BedAndBreakfast",
    "@id": `${WEBSITE}/#lodging`,
    parentOrganization: { "@id": `${WEBSITE}/#organization` },
    description: site.description,
    logo: `${WEBSITE}/logo_amonte.jpg`,
    numberOfRooms: 10,
    // Termeni §3.4 (cash sau card la check-in) și §7.2 (fumatul interzis în interior).
    paymentAccepted: site.paymentAccepted,
    smokingAllowed: false,
    name: SITE_NAME,
    url: WEBSITE,
    image: SCHEMA_IMAGES,
    telephone: CONTACT.phoneMobile.replace(/\s/g, ""),
    email: CONTACT.email,
    priceRange: PRICE_RANGE,
    currenciesAccepted: "RON",
    sameAs: SOCIAL_PROFILES.map((s) => s.url),
    hasMap: GOOGLE_MAPS_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Valea Avrigului nr. 642",
      addressLocality: "Valea Avrigului",
      addressRegion: "Sibiu",
      postalCode: POSTAL_CODE,
      addressCountry: "RO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GPS_LAT,
      longitude: GPS_LNG,
    },
    checkinTime: CHECK_IN,
    checkoutTime: CHECK_OUT,
    petsAllowed: false,
    maximumAttendeeCapacity: 24,
    amenityFeature: AMENITIES.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a.label,
      value: true,
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website, lodging],
  };
}

/** Wraps all standard pages with banner + nav + footer. The booking page
 *  lives outside this shell, so it stays distraction-free.
 *
 *  `landing` swaps the nav for LandingHeader (logo and language picker only),
 *  for the corporate page: same banner, footer and JSON-LD, no way into the
 *  rest of the site from the top of the page. */
export default function SiteShell({
  lang,
  landing = false,
  children,
}: {
  lang: Lang;
  landing?: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd id="schema-lodging" data={lodgingJsonLd(lang)} />
      {/* Invisible until focused. Lets a keyboard user jump the promo banner and
          the whole nav instead of tabbing through them on every page. */}
      <a
        href="#continut"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-paper focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-pine focus:shadow-lg focus:outline-solid focus:outline-2 focus:outline-offset-2 focus:outline-terracotta"
      >
        {UI[lang].layout.skipToContent}
      </a>
      <AvailabilityBanner />
      {landing ? <LandingHeader lang={lang} /> : <Nav links={getContent(lang).NAV_LINKS} />}
      {/* tabIndex -1 so the skip link can actually move focus here, not just scroll */}
      <main id="continut" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <Footer lang={lang} />
    </>
  );
}
