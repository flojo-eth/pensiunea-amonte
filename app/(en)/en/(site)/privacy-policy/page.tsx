import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import LegalTranslationNote from "@/components/LegalTranslationNote";
import { CONTACT } from "@/lib/content";
import { href } from "@/lib/i18n/config";

// English translation of app/(ro)/(site)/politica-de-confidentialitate. Legal
// text stays in JSX, one file per language: it is read as a whole document,
// and the Romanian version prevails. Keep the two in step when either changes.
export const metadata: Metadata = {
  ...pageMeta({
    lang: "en",
    title: "Privacy Policy (GDPR)",
    description: "Privacy policy and processing of personal data at Pensiunea Amonte.",
    path: href("en", "privacy"),
  }),
  robots: { index: false, follow: false },
};

const container = "mx-auto max-w-[850px] px-[clamp(20px,5vw,64px)] py-[clamp(48px,7vw,96px)]";

export default function PrivacyPolicyPage() {
  return (
    <article className={container}>
      <SectionHeading
        as="h1"
        eyebrow="Legal"
        title="Privacy Policy"
        className="mb-12"
      />

      <div className="text-[15px] leading-relaxed text-muted space-y-8 font-sans">
        <LegalTranslationNote lang="en" page="privacy" />

        <p className="text-sm italic text-muted-2 border-b border-line pb-4">
          Processing of personal data, Pensiunea Amonte / Hostillo S.R.L. <br />
          Last updated: July 21, 2026
        </p>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">1. Data controller</h2>
          <p><strong>Hostillo S.R.L.</strong></p>
          <div className="bg-card border border-line rounded-lg p-5 space-y-2 text-sm text-[#33392f]">
            <p>Tax ID (CUI): 54352472</p>
            <p>Trade Register no.: J2026019997009</p>
            <p>Registered office: Strada Iazului nr. 23, Avrig, jud. Sibiu</p>
            <p>Place of business: {CONTACT.address}</p>
            <p>Director: Florin Luca</p>
            <p>Personal data contact email: {CONTACT.email}</p>
            <p>Phone / WhatsApp: {CONTACT.phoneMobile}</p>
          </div>
          <p className="mt-4">
            Hostillo S.R.L. (&quot;we&quot;, &quot;Hostillo&quot;, &quot;the Guesthouse&quot;) acts as the <strong>data controller</strong> within the meaning of Regulation (EU) 2016/679 (&quot;GDPR&quot;) and Romanian Law no. 190/2018.
          </p>
          <p>
            We have not appointed a data protection officer (DPO), as one is not required for our activity; any request about personal data can be sent directly to the email address above.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">2. What data we collect</h2>

          <h3 className="font-semibold text-pine mt-2">2.1. Data you give us directly</h3>
          <ul className="list-disc pl-5 space-y-2 text-[#33392f]">
            <li><strong>When you book:</strong> first and last name, phone, email, number of guests, dates of stay, preferences or special requests.</li>
            <li><strong>At check-in:</strong> details from your ID card or passport (name, personal identification number or document series and number, citizenship), as required by the legal obligation to keep a register of guests.</li>
            <li><strong>When you pay:</strong> the data needed to process the payment (we do not store full card details; these are processed directly by the bank&apos;s POS terminal or payment app).</li>
            <li><strong>Correspondence:</strong> messages sent by email, WhatsApp or through the forms on the website.</li>
          </ul>

          <h3 className="font-semibold text-pine mt-4">2.2. Data collected automatically</h3>
          <p>
            Through cookies and similar technologies on pensiunea-amonte.ro: IP address, device and browser type, pages visited, browsing behavior (Google Analytics 4) and interaction with ads (Google Ads).
          </p>

          <h3 className="font-semibold text-pine mt-4">2.3. Data received from third parties</h3>
          <ul className="list-disc pl-5 space-y-2 text-[#33392f]">
            <li>From booking platforms, when you book through them: Booking.com, Airbnb.</li>
            <li>From the booking management system (Pynbooking, PMS/Booking Engine), which centralizes booking data whatever the channel.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">3. Purposes and legal basis for processing</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-line text-sm text-left border border-line rounded-lg">
              <thead className="bg-card font-semibold text-pine">
                <tr>
                  <th className="px-4 py-3 border-r border-line">Purpose</th>
                  <th className="px-4 py-3">Legal basis (GDPR Art. 6)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line text-[#33392f]">
                <tr>
                  <td className="px-4 py-3 border-r border-line font-medium">Managing and confirming your booking, communication before and after your stay</td>
                  <td className="px-4 py-3">Performance of a contract (Art. 6(1)(b))</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-line font-medium">Check-in and guest registration, reporting to the authorities (where applicable)</td>
                  <td className="px-4 py-3">Legal obligation (Art. 6(1)(c))</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-line font-medium">Invoicing and accounting records</td>
                  <td className="px-4 py-3">Legal obligation (Art. 6(1)(c))</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-line font-medium">Payment processing</td>
                  <td className="px-4 py-3">Performance of a contract / legal obligation</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-line font-medium">Website traffic analysis (Google Analytics 4)</td>
                  <td className="px-4 py-3">Consent (Art. 6(1)(a))</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-line font-medium">Advertising and remarketing (Google Ads)</td>
                  <td className="px-4 py-3">Consent (Art. 6(1)(a))</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-line font-medium">Replying to requests and messages</td>
                  <td className="px-4 py-3">Legitimate interest (Art. 6(1)(f))</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-line font-medium">Resolving any disputes</td>
                  <td className="px-4 py-3">Legitimate interest (Art. 6(1)(f))</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">4. Who we share data with</h2>
          <p>
            Your data may be accessed, strictly to the extent necessary, by the following categories of recipients (processors or joint controllers):
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#33392f]">
            <li><strong>Pynbooking:</strong> the booking management system (PMS/Booking Engine) used to manage your booking.</li>
            <li><strong>SmartBill:</strong> the invoicing and management system, used to issue invoices.</li>
            <li><strong>Banca Transilvania:</strong> for payment processing (POS/mPOS).</li>
            <li><strong>Google Ireland Ltd.:</strong> Google Analytics 4 and Google Ads, for traffic measurement and advertising (if you have consented to non-essential cookies).</li>
            <li><strong>Meta Platforms:</strong> if you use WhatsApp to communicate with the guesthouse.</li>
            <li><strong>Booking.com / Airbnb:</strong> if you booked through that platform.</li>
            <li><strong>Public authorities:</strong> the police or other competent bodies for guest registration, the tax authority and other authorities, where the law requires it.</li>
          </ul>
          <p>We do not sell or rent your data to third parties for their own marketing.</p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">5. Transfers outside the European Economic Area</h2>
          <p>
            Some of the providers above (Google, Meta) may process data on servers located outside the EEA. These transfers rely on the standard contractual clauses approved by the European Commission or on other safeguards recognized by the GDPR, put in place by those providers.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">6. How long we keep data</h2>
          <ul className="list-disc pl-5 space-y-2 text-[#33392f]">
            <li><strong>Booking data and correspondence:</strong> for the duration of the contractual relationship, plus the statutory limitation period (3 years from the end of the stay), to defend against any claims.</li>
            <li><strong>Invoices and accounting documents:</strong> 10 years, under Accounting Law no. 82/1991.</li>
            <li><strong>Guest registration data:</strong> for the periods set by the legislation specific to accommodation services.</li>
            <li><strong>Cookies:</strong> for the durations set in the consent banner on the website (analytics and marketing cookies can be deleted at any time from your browser or website preferences).</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">7. Your rights</h2>
          <p>As a data subject, you have the right to request:</p>
          <ul className="list-disc pl-5 space-y-2 text-[#33392f]">
            <li><strong>Access</strong> to the data we process about you;</li>
            <li><strong>Rectification</strong> of inaccurate or incomplete data;</li>
            <li><strong>Erasure</strong> (&quot;the right to be forgotten&quot;), within legal limits (it does not apply to data we are legally required to keep, such as invoices);</li>
            <li><strong>Restriction</strong> of processing, under certain conditions;</li>
            <li><strong>Objection</strong> to processing based on legitimate interest or to direct marketing;</li>
            <li><strong>Portability</strong> of the data you provided directly, in a structured format;</li>
            <li><strong>Withdrawal of consent</strong> at any time, for processing based on consent (such as analytics or marketing cookies), without affecting the lawfulness of processing carried out before the withdrawal.</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at <strong>{CONTACT.email}</strong>. We will reply within 30 days at most.
          </p>
          <p>
            You also have the right to lodge a complaint with the <strong>National Supervisory Authority for Personal Data Processing (ANSPDCP)</strong>, <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="underline">www.dataprotection.ro</a>.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">8. Data security</h2>
          <p>
            We apply reasonable technical and organizational measures to protect data against unauthorized access, loss or accidental disclosure (access limited to authorized staff, secure accounts and platforms for booking management and invoicing).
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">9. Cookies</h2>
          <p>The website pensiunea-amonte.ro uses cookies:</p>
          <ul className="list-disc pl-5 space-y-2 text-[#33392f]">
            <li><strong>Necessary:</strong> for the basic operation of the website (no consent required);</li>
            <li><strong>Analytics (Google Analytics 4):</strong> to understand how the website is used;</li>
            <li><strong>Marketing (Google Ads):</strong> to show relevant ads and measure how well campaigns perform.</li>
          </ul>
          <p>
            Analytics and marketing cookies are only used with your consent, given through the banner shown on your first visit. You can change your preferences at any time from the settings on the website or in your browser.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">10. Children&apos;s data</h2>
          <p>
            We do not knowingly collect data from unaccompanied minors. Data about minors included in a booking is provided and managed by the adult who makes the booking or checks in.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">11. Changes to this policy</h2>
          <p>
            This policy may be updated from time to time; the version that applies is the one published on the website at the time of processing. We recommend checking it periodically.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">12. Contact</h2>
          <p>
            For any question about the processing of your personal data: <a href={`mailto:${CONTACT.email}`} className="underline">{CONTACT.email}</a>.
          </p>
        </section>
      </div>
    </article>
  );
}
