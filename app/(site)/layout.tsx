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
} from "@/lib/content";

// LodgingBusiness appears on every (site) page. /rezerva-acum lives outside
// this route group deliberately (conversion landing, no nav distractions).
const lodgingJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": `${WEBSITE}/#lodging`,
  name: SITE_NAME,
  url: WEBSITE,
  telephone: CONTACT.phoneMobile.replace(/\s/g, ""),
  email: CONTACT.email,
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
      <script
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
