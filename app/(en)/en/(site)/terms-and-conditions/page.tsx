import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import LegalTranslationNote from "@/components/LegalTranslationNote";
import { CONTACT } from "@/lib/content";
import { getContent, href } from "@/lib/i18n";

// English translation of app/(ro)/(site)/termeni-si-conditii. The Romanian
// version prevails; keep the two in step when either changes. The cancellation
// terms are read from the English CANCELLATION, as the Romanian page reads its own.
export const metadata: Metadata = {
  ...pageMeta({
    lang: "en",
    title: "Terms and Conditions",
    description: "Terms and conditions for the services of Pensiunea Amonte (Hostillo S.R.L.).",
    path: href("en", "terms"),
  }),
  robots: { index: false, follow: false },
};

const container = "mx-auto max-w-[850px] px-[clamp(20px,5vw,64px)] py-[clamp(48px,7vw,96px)]";

export default function TermsPage() {
  const { CANCELLATION } = getContent("en");
  return (
    <article className={container}>
      <SectionHeading
        as="h1"
        eyebrow="Legal"
        title="Terms and Conditions"
        className="mb-12"
      />

      <div className="text-[15px] leading-relaxed text-muted space-y-8 font-sans">
        <LegalTranslationNote lang="en" page="terms" />

        <p className="text-sm italic text-muted-2 border-b border-line pb-4">
          Pensiunea Amonte, operated by Hostillo S.R.L. <br />
          Last updated: July 21, 2026
        </p>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">1. Company details</h2>
          <p>The accommodation and related services described in this document are provided by:</p>
          <div className="bg-card border border-line rounded-lg p-5 space-y-2 text-sm text-[#33392f]">
            <p><strong>Hostillo S.R.L.</strong></p>
            <p>Tax ID (CUI): 54352472</p>
            <p>Trade Register no.: J2026019997009</p>
            <p>Registered office: Strada Iazului nr. 23, Avrig, jud. Sibiu</p>
            <p>Place of business and guesthouse location: {CONTACT.address}</p>
            <p>Director: Florin Luca</p>
            <p>Email: {CONTACT.email}</p>
            <p>Phone / WhatsApp: {CONTACT.phoneMobile}</p>
          </div>
          <p className="mt-4">
            hereinafter <strong>&quot;the Guesthouse&quot;</strong> or <strong>&quot;Hostillo&quot;</strong>.
          </p>
          <p>
            By making a booking, the person booking (hereinafter <strong>&quot;the Guest&quot;</strong> or <strong>&quot;the Client&quot;</strong>) confirms that they have read, understood and fully accept these Terms and Conditions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">2. Scope</h2>
          <p>
            This document sets out the conditions under which Hostillo S.R.L. makes the accommodation and related facilities at Pensiunea Amonte available to Guests, as well as the rights and obligations of the parties involved in the booking process.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">3. Booking</h2>
          <p>
            3.1. Bookings can be made directly (website, WhatsApp, phone, email) or through online booking platforms (Booking.com, Airbnb, etc.), in which case that platform&apos;s terms also apply.
          </p>
          <p>
            3.2. A booking is considered confirmed only after the requested deposit has been paid and the Guesthouse has sent a written confirmation (email or WhatsApp).
          </p>
          <p>
            3.3. The standard deposit to confirm a booking is 30% of the total value of the stay, except where a fixed amount is agreed between the parties (for example, group bookings or corporate events).
          </p>
          <p>
            3.4. The balance is paid on arrival (at check-in), in cash or by card, unless otherwise agreed in writing.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">4. Rates</h2>
          <p>
            4.1. Rates are shown in Romanian lei (RON) and include VAT under the legislation in force.
          </p>
          <p>
            4.2. Rates may vary by season, dates, occupancy and type of event; the rate confirmed for a booking remains valid for that stay, regardless of any later changes to the price list.
          </p>
          <p>
            4.3. Group bookings and whole-property rentals are subject to separately agreed rates and conditions, set out in the offer.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">5. Cancellations, changes and no-shows</h2>
          <p>
            {CANCELLATION.promiseTitle} {CANCELLATION.promiseSub}
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#33392f]">
            {CANCELLATION.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <p className="pt-2 text-sm italic">{CANCELLATION.note}</p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">6. Check-in / Check-out</h2>
          <p>6.1. Check-in: from 3:00 p.m. (15:00).</p>
          <p>6.2. Check-out: by 12:00 p.m. (noon).</p>
          <p>
            6.3. Check-in or check-out outside these times can be requested in advance, is subject to availability and may involve an extra charge.
          </p>
          <p>
            6.4. On arrival, the adult Guest checking in must present a valid identity document, as required by the legal provisions on guest registration.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">7. House rules</h2>
          <p>
            7.1. The maximum capacity of each unit is the one stated at booking and may not be exceeded without the Guesthouse&apos;s prior consent.
          </p>
          <p>
            7.2. Smoking is not allowed inside the units or in enclosed shared spaces.
          </p>
          <p>
            7.3. Please respect the quiet and the other guests, especially between 10 p.m. and 8 a.m.
          </p>
          <p>
            7.4. Minors are accepted only when accompanied by a responsible adult, who supervises them for the entire stay.
          </p>
          <p>
            7.5. Guests use facilities such as the hot tub, the sauna or the campfire at their own risk, following the instructions displayed on site.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">8. Pets</h2>
          <p>
            Pensiunea Amonte does not accept guests&apos; pets, whatever their species or size. Bruno, the guesthouse mascot, is the only animal living on the property.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">9. Included facilities</h2>
          <p>
            The accommodation rate includes access to the guesthouse&apos;s general facilities, as described in the confirmed offer or booking (for example, the living room with fireplace, the panoramic terrace, the small soccer field and table tennis), available within their opening hours and subject to weather and technical conditions.
          </p>
          <p>
            The relaxation area on the riverbank, across the road from the guesthouse, belongs to the landowner and is not one of the facilities run by Hostillo S.R.L.; access, where permitted, is at the Guest&apos;s own risk.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">10. Additional services</h2>
          <p>
            Some additional services may be available depending on the period and context (for example, private events for groups or corporate activities). These are agreed separately, in writing, between the Guesthouse and the Guest or Client before arrival.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">11. Liability</h2>
          <p>
            11.1. Hostillo S.R.L. takes due care for the safety and comfort of its Guests, but is not liable for: personal belongings that are lost, forgotten or damaged; injuries resulting from failure to follow the house rules or the instructions for using the facilities; events caused by force majeure.
          </p>
          <p>
            11.2. The Guest is liable for any damage they cause through their own fault to the building, furniture or equipment of the guesthouse during the stay.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">12. Force majeure</h2>
          <p>
            Neither party is liable for failing to perform its contractual obligations if this is due to a force majeure event (natural disasters, a state of emergency or alert, decisions of the authorities, etc.), in which case the parties will agree to reschedule the stay or refund the amounts paid, as appropriate.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">13. Right of withdrawal</h2>
          <p>
            Under Art. 16(l) of Government Emergency Ordinance no. 34/2014 on consumer rights, accommodation services are exempt from the 14-day right of withdrawal that generally applies to distance contracts, where the contract provides for a specific date or period of performance. The booking is therefore governed by the cancellation policy described in section 5.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">14. Processing of personal data</h2>
          <p>
            14.1. Personal data provided by the Guest (name, contact details, identity document details where applicable) is processed by Hostillo S.R.L. as data controller, in accordance with Regulation (EU) 2016/679 (GDPR), solely to manage the booking, to meet the legal obligations on guest registration and for communication about the stay.
          </p>
          <p>
            14.2. Data is not passed on to third parties, except where required by law (for example, to the competent authorities) or to the platform through which the booking was made.
          </p>
          <p>
            14.3. The Guest can exercise their GDPR rights (access, rectification, erasure, objection, etc.) by sending a request to {CONTACT.email}.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">15. Reviews and photos</h2>
          <p>
            The Guesthouse reserves the right to publish reviews left by Guests on its own channels or on booking platforms, and to use photos taken in the guesthouse&apos;s shared spaces for promotional purposes, unless the Guest expressly objects in writing.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">16. Governing law and disputes</h2>
          <p>16.1. These Terms and Conditions are governed by Romanian law.</p>
          <p>
            16.2. Any dispute will be settled amicably; failing that, it falls under the jurisdiction of the Romanian courts for the place of the Guesthouse&apos;s registered office.
          </p>
          <p>
            16.3. A Guest acting as a consumer may contact the National Authority for Consumer Protection (ANPC, www.anpc.ro) or the EU Online Dispute Resolution (ODR) platform, available at http://ec.europa.eu/consumers/odr.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">17. Final provisions</h2>
          <p>
            Hostillo S.R.L. reserves the right to update this document from time to time; the version that applies is the one displayed when the booking is confirmed. For any questions, Guests can contact the Guesthouse at {CONTACT.email} or on WhatsApp.
          </p>
          <p>
            This document is an English translation of the Romanian Termeni și Condiții. In case of any difference between the two, the Romanian version prevails.
          </p>
        </section>
      </div>
    </article>
  );
}
