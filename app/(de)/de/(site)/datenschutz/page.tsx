import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import LegalTranslationNote from "@/components/LegalTranslationNote";
import { CONTACT } from "@/lib/content";
import { href } from "@/lib/i18n/config";

// German translation of app/(ro)/(site)/politica-de-confidentialitate. The
// Romanian version prevails; keep all three languages in step.
export const metadata: Metadata = {
  ...pageMeta({
    lang: "de",
    title: "Datenschutzerklärung (DSGVO)",
    description: "Datenschutzerklärung und Verarbeitung personenbezogener Daten in der Pensiunea Amonte.",
    path: href("de", "privacy"),
  }),
  robots: { index: false, follow: false },
};

const container = "mx-auto max-w-[850px] px-[clamp(20px,5vw,64px)] py-[clamp(48px,7vw,96px)]";

export default function DatenschutzPage() {
  return (
    <article className={container}>
      <SectionHeading
        as="h1"
        eyebrow="Rechtliches"
        title="Datenschutzerklärung"
        className="mb-12"
      />

      <div className="text-[15px] leading-relaxed text-muted space-y-8 font-sans">
        <LegalTranslationNote lang="de" page="privacy" />

        <p className="text-sm italic text-muted-2 border-b border-line pb-4">
          Verarbeitung personenbezogener Daten, Pensiunea Amonte / Hostillo S.R.L. <br />
          Stand: 19. Oktober 2026
        </p>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">1. Verantwortlicher</h2>
          <p><strong>Hostillo S.R.L.</strong></p>
          <div className="bg-card border border-line rounded-lg p-5 space-y-2 text-sm text-[#33392f]">
            <p>Steuernummer (CUI): 54352472</p>
            <p>Handelsregister-Nr.: J2026019997009</p>
            <p>Sitz: Strada Iazului nr. 23, Avrig, jud. Sibiu</p>
            <p>Betriebsstätte: {CONTACT.address}</p>
            <p>Geschäftsführer: Florin Luca</p>
            <p>E-Mail für Datenschutzanfragen: {CONTACT.email}</p>
            <p>Telefon / WhatsApp: {CONTACT.phoneMobile}</p>
          </div>
          <p className="mt-4">
            Die Hostillo S.R.L. („wir“, „Hostillo“, „die Pension“) ist <strong>Verantwortlicher</strong> im Sinne der Verordnung (EU) 2016/679 („DSGVO“) und des rumänischen Gesetzes Nr. 190/2018.
          </p>
          <p>
            Wir haben keinen Datenschutzbeauftragten benannt, da dies für unsere Tätigkeit nicht vorgeschrieben ist; Anfragen zu personenbezogenen Daten richten Sie bitte direkt an die oben genannte E-Mail-Adresse.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">2. Welche Daten wir erheben</h2>

          <h3 className="font-semibold text-pine mt-2">2.1. Daten, die Sie uns direkt mitteilen</h3>
          <ul className="list-disc pl-5 space-y-2 text-[#33392f]">
            <li><strong>Bei der Buchung:</strong> Vor- und Nachname, Telefon, E-Mail, Anzahl der Personen, Aufenthaltszeitraum, Vorlieben oder besondere Wünsche.</li>
            <li><strong>Beim Check-in:</strong> Angaben aus Personalausweis oder Reisepass (Name, persönliche Identifikationsnummer oder Serie und Nummer des Dokuments, Staatsangehörigkeit), gemäß der gesetzlichen Pflicht zur Meldung der beherbergten Gäste.</li>
            <li><strong>Bei der Zahlung:</strong> die zur Zahlungsabwicklung nötigen Daten (vollständige Kartendaten speichern wir nicht; sie werden direkt vom POS-Terminal bzw. der Zahlungs-App der Bank verarbeitet).</li>
            <li><strong>Korrespondenz:</strong> Nachrichten per E-Mail, WhatsApp oder über die Formulare der Website.</li>
          </ul>

          <h3 className="font-semibold text-pine mt-4">2.2. Automatisch erhobene Daten</h3>
          <p>
            Über Cookies und ähnliche Technologien auf pensiunea-amonte.ro: IP-Adresse, Geräte- und Browsertyp, besuchte Seiten, Nutzungsverhalten (Google Analytics 4) und Interaktion mit Anzeigen (Google Ads, Meta).
          </p>

          <h3 className="font-semibold text-pine mt-4">2.3. Daten von Dritten</h3>
          <ul className="list-disc pl-5 space-y-2 text-[#33392f]">
            <li>Von Buchungsplattformen, wenn Sie über diese buchen: Booking.com, Airbnb.</li>
            <li>Aus dem Buchungsverwaltungssystem (Pynbooking, PMS/Booking Engine), das die Buchungsdaten unabhängig vom Kanal zusammenführt.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">3. Zwecke und Rechtsgrundlagen der Verarbeitung</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-line text-sm text-left border border-line rounded-lg">
              <thead className="bg-card font-semibold text-pine">
                <tr>
                  <th className="px-4 py-3 border-r border-line">Zweck</th>
                  <th className="px-4 py-3">Rechtsgrundlage (Art. 6 DSGVO)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line text-[#33392f]">
                <tr>
                  <td className="px-4 py-3 border-r border-line font-medium">Verwaltung und Bestätigung der Buchung, Kommunikation vor und nach dem Aufenthalt</td>
                  <td className="px-4 py-3">Vertragserfüllung (Art. 6 Abs. 1 lit. b)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-line font-medium">Check-in und Gästemeldung, Meldungen an Behörden (soweit zutreffend)</td>
                  <td className="px-4 py-3">Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-line font-medium">Rechnungsstellung und Buchhaltung</td>
                  <td className="px-4 py-3">Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-line font-medium">Zahlungsabwicklung</td>
                  <td className="px-4 py-3">Vertragserfüllung / rechtliche Verpflichtung</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-line font-medium">Analyse der Website-Nutzung (Google Analytics 4)</td>
                  <td className="px-4 py-3">Einwilligung (Art. 6 Abs. 1 lit. a)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-line font-medium">Werbung und Remarketing (Google Ads)</td>
                  <td className="px-4 py-3">Einwilligung (Art. 6 Abs. 1 lit. a)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-line font-medium">Werbung und Remarketing auf Facebook und Instagram (Meta Pixel, Conversions API)</td>
                  <td className="px-4 py-3">Einwilligung (Art. 6 Abs. 1 lit. a)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-line font-medium">Beantwortung von Anfragen und Nachrichten</td>
                  <td className="px-4 py-3">Berechtigtes Interesse (Art. 6 Abs. 1 lit. f)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-line font-medium">Beilegung etwaiger Streitigkeiten</td>
                  <td className="px-4 py-3">Berechtigtes Interesse (Art. 6 Abs. 1 lit. f)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">4. An wen wir Daten weitergeben</h2>
          <p>
            Ihre Daten können, soweit unbedingt erforderlich, folgenden Kategorien von Empfängern (Auftragsverarbeitern oder gemeinsam Verantwortlichen) zugänglich sein:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#33392f]">
            <li><strong>Pynbooking:</strong> das Buchungsverwaltungssystem (PMS/Booking Engine), mit dem Ihre Buchung verwaltet wird.</li>
            <li><strong>SmartBill:</strong> das Rechnungs- und Verwaltungssystem, zur Ausstellung von Rechnungen.</li>
            <li><strong>Banca Transilvania:</strong> zur Zahlungsabwicklung (POS/mPOS).</li>
            <li><strong>Google Ireland Ltd.:</strong> Google Analytics 4 und Google Ads, zur Reichweitenmessung und Werbung (sofern Sie nicht notwendigen Cookies zugestimmt haben).</li>
            <li><strong>Meta Platforms Ireland Ltd.:</strong> Meta Pixel und Conversions API, zur Messung und Ausspielung von Anzeigen auf Facebook und Instagram (sofern Sie nicht notwendigen Cookies zugestimmt haben), sowie WhatsApp, wenn Sie es für die Kommunikation mit der Pension nutzen.</li>
            <li><strong>Booking.com / Airbnb:</strong> wenn die Buchung über die jeweilige Plattform erfolgt ist.</li>
            <li><strong>Behörden:</strong> Polizei oder andere zuständige Stellen für die Gästemeldung, die Steuerbehörde und andere Behörden, soweit gesetzlich vorgeschrieben.</li>
          </ul>
          <p>Wir verkaufen oder vermieten Ihre Daten nicht an Dritte für deren eigene Werbezwecke.</p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">5. Übermittlungen außerhalb des Europäischen Wirtschaftsraums</h2>
          <p>
            Einige der oben genannten Anbieter (Google, Meta) können Daten auf Servern außerhalb des EWR verarbeiten. Diese Übermittlungen stützen sich auf die von der Europäischen Kommission genehmigten Standardvertragsklauseln oder auf andere von der DSGVO anerkannte Garantien, die von diesen Anbietern umgesetzt werden.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">6. Speicherdauer</h2>
          <ul className="list-disc pl-5 space-y-2 text-[#33392f]">
            <li><strong>Buchungsdaten und Korrespondenz:</strong> für die Dauer des Vertragsverhältnisses, zuzüglich der gesetzlichen Verjährungsfrist (3 Jahre ab Ende des Aufenthalts), zur Abwehr etwaiger Ansprüche.</li>
            <li><strong>Rechnungen und Buchhaltungsunterlagen:</strong> 10 Jahre, gemäß dem rumänischen Buchführungsgesetz Nr. 82/1991.</li>
            <li><strong>Daten der Gästemeldung:</strong> für die in den Vorschriften für Beherbergungsbetriebe festgelegten Fristen.</li>
            <li><strong>Cookies:</strong> für die im Einwilligungsbanner der Website angegebene Dauer (Analyse- und Marketing-Cookies können jederzeit in den Einstellungen des Browsers oder der Website gelöscht werden).</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">7. Ihre Rechte</h2>
          <p>Als betroffene Person haben Sie das Recht auf:</p>
          <ul className="list-disc pl-5 space-y-2 text-[#33392f]">
            <li><strong>Auskunft</strong> über die Daten, die wir über Sie verarbeiten;</li>
            <li><strong>Berichtigung</strong> unrichtiger oder unvollständiger Daten;</li>
            <li><strong>Löschung</strong> („Recht auf Vergessenwerden“), im gesetzlichen Rahmen (nicht für Daten, die wir gesetzlich aufbewahren müssen, etwa Rechnungen);</li>
            <li><strong>Einschränkung</strong> der Verarbeitung, unter bestimmten Voraussetzungen;</li>
            <li><strong>Widerspruch</strong> gegen eine Verarbeitung auf Grundlage berechtigter Interessen oder gegen Direktwerbung;</li>
            <li><strong>Datenübertragbarkeit</strong> der von Ihnen direkt bereitgestellten Daten, in einem strukturierten Format;</li>
            <li><strong>Widerruf der Einwilligung</strong> jederzeit, für Verarbeitungen auf Grundlage einer Einwilligung (z. B. Analyse- oder Marketing-Cookies), ohne dass die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung berührt wird.</li>
          </ul>
          <p>
            Zur Ausübung dieser Rechte erreichen Sie uns unter <strong>{CONTACT.email}</strong>. Wir antworten innerhalb von höchstens 30 Tagen.
          </p>
          <p>
            Sie haben außerdem das Recht, Beschwerde bei der <strong>rumänischen Datenschutzaufsichtsbehörde (ANSPDCP)</strong> einzulegen, <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="underline">www.dataprotection.ro</a>.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">8. Datensicherheit</h2>
          <p>
            Wir treffen angemessene technische und organisatorische Maßnahmen, um Daten vor unbefugtem Zugriff, Verlust oder versehentlicher Offenlegung zu schützen (Zugriff nur für befugtes Personal, gesicherte Konten und Plattformen für Buchungsverwaltung und Rechnungsstellung).
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">9. Cookies</h2>
          <p>Die Website pensiunea-amonte.ro verwendet Cookies:</p>
          <ul className="list-disc pl-5 space-y-2 text-[#33392f]">
            <li><strong>Notwendige:</strong> für den grundlegenden Betrieb der Website (keine Einwilligung erforderlich);</li>
            <li><strong>Analyse (Google Analytics 4):</strong> um zu verstehen, wie die Website genutzt wird;</li>
            <li><strong>Marketing (Google Ads, Meta Pixel):</strong> um relevante Anzeigen zu zeigen, auch auf Facebook und Instagram, und den Erfolg von Kampagnen zu messen.</li>
          </ul>
          <p>
            Analyse- und Marketing-Cookies werden nur mit Ihrer Einwilligung verwendet, die Sie über das Banner beim ersten Besuch erteilen. Sie können Ihre Einstellungen jederzeit über den Link „Cookie-Einstellungen“ unten auf jeder Seite oder in Ihrem Browser ändern.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">10. Daten von Minderjährigen</h2>
          <p>
            Wir erheben nicht wissentlich Daten von unbegleiteten Minderjährigen. Daten von Minderjährigen, die in einer Buchung enthalten sind, werden von der erwachsenen Person angegeben und verwaltet, die bucht oder eincheckt.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">11. Änderungen dieser Erklärung</h2>
          <p>
            Diese Erklärung kann von Zeit zu Zeit aktualisiert werden; maßgeblich ist die zum Zeitpunkt der Verarbeitung auf der Website veröffentlichte Fassung. Wir empfehlen, sie regelmäßig zu lesen.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">12. Kontakt</h2>
          <p>
            Für alle Fragen zur Verarbeitung Ihrer personenbezogenen Daten: <a href={`mailto:${CONTACT.email}`} className="underline">{CONTACT.email}</a>.
          </p>
        </section>
      </div>
    </article>
  );
}
