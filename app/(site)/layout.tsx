import Script from "next/script";
import AvailabilityBanner from "@/components/AvailabilityBanner";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE_NAME } from "@/lib/site";
import {
  CONTACT,
  AMENITIES,
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
const lodgingJsonLd = {
  "@context": "https://schema.org",
  "@type": "BedAndBreakfast",
  "@id": `${WEBSITE}/#lodging`,
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

/** Wraps all standard pages with banner + nav + footer. The /rezerva-acum
 *  conversion landing lives outside this group, so it stays distraction-free. */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="schema-lodging"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd) }}
      />
      <AvailabilityBanner />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
