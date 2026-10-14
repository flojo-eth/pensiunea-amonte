import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import LegalTranslationNote from "@/components/LegalTranslationNote";
import { CONTACT } from "@/lib/content";
import { getContent, href } from "@/lib/i18n";

// German translation of app/(ro)/(site)/termeni-si-conditii. The Romanian
// version prevails; keep all three languages in step. The cancellation terms
// are read from the German CANCELLATION, as the other pages read their own.
export const metadata: Metadata = {
  ...pageMeta({
    lang: "de",
    title: "Allgemeine Geschäftsbedingungen",
    description: "Allgemeine Geschäftsbedingungen für die Leistungen der Pensiunea Amonte (Hostillo S.R.L.).",
    path: href("de", "terms"),
  }),
  robots: { index: false, follow: false },
};

const container = "mx-auto max-w-[850px] px-[clamp(20px,5vw,64px)] py-[clamp(48px,7vw,96px)]";

export default function AgbPage() {
  const { CANCELLATION } = getContent("de");
  return (
    <article className={container}>
      <SectionHeading
        as="h1"
        eyebrow="Rechtliches"
        title="Allgemeine Geschäftsbedingungen"
        className="mb-12"
      />

      <div className="text-[15px] leading-relaxed text-muted space-y-8 font-sans">
        <LegalTranslationNote lang="de" page="terms" />

        <p className="text-sm italic text-muted-2 border-b border-line pb-4">
          Pensiunea Amonte, betrieben von der Hostillo S.R.L. <br />
          Stand: 21. Juli 2026
        </p>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">1. Angaben zum Unternehmen</h2>
          <p>Die in diesem Dokument beschriebenen Beherbergungs- und Zusatzleistungen werden erbracht von:</p>
          <div className="bg-card border border-line rounded-lg p-5 space-y-2 text-sm text-[#33392f]">
            <p><strong>Hostillo S.R.L.</strong></p>
            <p>Steuernummer (CUI): 54352472</p>
            <p>Handelsregister-Nr.: J2026019997009</p>
            <p>Sitz: Strada Iazului nr. 23, Avrig, jud. Sibiu</p>
            <p>Betriebsstätte / Standort der Pension: {CONTACT.address}</p>
            <p>Geschäftsführer: Florin Luca</p>
            <p>E-Mail: {CONTACT.email}</p>
            <p>Telefon / WhatsApp: {CONTACT.phoneMobile}</p>
          </div>
          <p className="mt-4">
            im Folgenden <strong>„die Pension“</strong> oder <strong>„Hostillo“</strong>.
          </p>
          <p>
            Mit einer Buchung bestätigt die buchende Person (im Folgenden <strong>„der Gast“</strong> oder <strong>„der Kunde“</strong>), diese Allgemeinen Geschäftsbedingungen gelesen und verstanden zu haben und sie vollständig zu akzeptieren.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">2. Gegenstand</h2>
          <p>
            Dieses Dokument regelt die Bedingungen, zu denen die Hostillo S.R.L. den Gästen die Unterkünfte und die zugehörigen Einrichtungen der Pensiunea Amonte zur Verfügung stellt, sowie die Rechte und Pflichten der am Buchungsvorgang beteiligten Parteien.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">3. Buchung</h2>
          <p>
            3.1. Buchungen sind direkt (Website, WhatsApp, Telefon, E-Mail) oder über Online-Buchungsplattformen (Booking.com, Airbnb usw.) möglich; im letzteren Fall gelten zusätzlich die Bedingungen der jeweiligen Plattform.
          </p>
          <p>
            3.2. Eine Buchung gilt erst als bestätigt, wenn die verlangte Anzahlung geleistet wurde und die Pension eine schriftliche Bestätigung (E-Mail oder WhatsApp) versandt hat.
          </p>
          <p>
            3.3. Die übliche Anzahlung zur Bestätigung einer Buchung beträgt 30 % des Gesamtpreises des Aufenthalts, sofern nicht einvernehmlich ein fester Betrag vereinbart wird (z. B. bei Gruppenbuchungen oder Firmenveranstaltungen).
          </p>
          <p>
            3.4. Der Restbetrag wird bei Ankunft (beim Check-in) bar oder mit Karte bezahlt, sofern nicht schriftlich etwas anderes vereinbart wurde.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">4. Preise</h2>
          <p>
            4.1. Die angegebenen Preise verstehen sich in rumänischen Lei (RON) und enthalten die gesetzliche Mehrwertsteuer.
          </p>
          <p>
            4.2. Die Preise können je nach Saison, Zeitraum, Auslastung und Art der Veranstaltung variieren; der bei einer Buchung bestätigte Preis gilt für den betreffenden Aufenthalt, unabhängig von späteren Änderungen der Preisliste.
          </p>
          <p>
            4.3. Für Gruppenbuchungen und die Exklusivmiete der Pension gelten gesondert vereinbarte Preise und Bedingungen, die im Angebot mitgeteilt werden.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">5. Stornierung, Änderung und Nichterscheinen</h2>
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
          <p>6.1. Check-in: ab 15:00 Uhr.</p>
          <p>6.2. Check-out: bis 12:00 Uhr.</p>
          <p>
            6.3. Ein Check-in oder Check-out außerhalb dieser Zeiten kann im Voraus angefragt werden, ist abhängig von der Verfügbarkeit und kann mit zusätzlichen Kosten verbunden sein.
          </p>
          <p>
            6.4. Bei Ankunft muss der volljährige Gast, der eincheckt, einen gültigen Ausweis vorlegen, gemäß den gesetzlichen Vorschriften zur Gästemeldung.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">7. Hausordnung</h2>
          <p>
            7.1. Die Höchstbelegung jeder Einheit ist die bei der Buchung mitgeteilte und darf ohne vorherige Zustimmung der Pension nicht überschritten werden.
          </p>
          <p>
            7.2. Das Rauchen ist in den Unterkünften und in geschlossenen Gemeinschaftsräumen verboten.
          </p>
          <p>
            7.3. Wir bitten um Rücksicht auf die Ruhe und die anderen Gäste, besonders zwischen 22:00 und 8:00 Uhr.
          </p>
          <p>
            7.4. Minderjährige werden nur in Begleitung eines verantwortlichen Erwachsenen aufgenommen, der während des gesamten Aufenthalts die Aufsicht übernimmt.
          </p>
          <p>
            7.5. Die Nutzung von Einrichtungen wie Jacuzzi, Sauna oder Lagerfeuer erfolgt auf eigene Verantwortung der Gäste und unter Beachtung der vor Ort ausgehängten Hinweise.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">8. Haustiere</h2>
          <p>
            Die Pensiunea Amonte nimmt keine Haustiere von Gästen auf, unabhängig von Art oder Größe. Bruno, das Maskottchen der Pension, ist das einzige Tier, das auf dem Gelände lebt.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">9. Inbegriffene Einrichtungen</h2>
          <p>
            Der Übernachtungspreis umfasst den Zugang zu den allgemeinen Einrichtungen der Pension gemäß dem bestätigten Angebot bzw. der Buchung (z. B. Wohnzimmer mit Kamin, Panoramaterrasse, Kleinfeld-Fußballplatz, Tischtennis), im Rahmen der Öffnungszeiten und abhängig von Wetter und technischen Gegebenheiten.
          </p>
          <p>
            Der Erholungsbereich am Flussufer, auf der anderen Straßenseite gegenüber der Pension, gehört dem Grundstückseigentümer und zählt nicht zu den von der Hostillo S.R.L. betriebenen Einrichtungen; der Zugang erfolgt, sofern gestattet, auf eigene Verantwortung des Gastes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">10. Zusatzleistungen</h2>
          <p>
            Je nach Zeitraum und Anlass können bestimmte Zusatzleistungen verfügbar sein (z. B. private Veranstaltungen für Gruppen oder Firmenaktivitäten). Diese werden vor der Anreise gesondert und schriftlich zwischen der Pension und dem Gast bzw. Kunden vereinbart.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">11. Haftung</h2>
          <p>
            11.1. Die Hostillo S.R.L. trägt die gebotene Sorgfalt für die Sicherheit und den Komfort ihrer Gäste, haftet jedoch nicht für: verlorene, vergessene oder beschädigte persönliche Gegenstände; Verletzungen infolge der Nichtbeachtung der Hausordnung oder der Nutzungshinweise der Einrichtungen; Ereignisse höherer Gewalt.
          </p>
          <p>
            11.2. Der Gast haftet für jeden Schaden, den er während des Aufenthalts schuldhaft am Gebäude, an der Einrichtung oder an der Ausstattung der Pension verursacht.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">12. Höhere Gewalt</h2>
          <p>
            Keine Partei haftet für die Nichterfüllung ihrer vertraglichen Pflichten, wenn diese auf höhere Gewalt zurückzuführen ist (Naturkatastrophen, Notstand oder Alarmzustand, behördliche Anordnungen usw.); in diesem Fall vereinbaren die Parteien eine Verlegung des Aufenthalts oder die Erstattung der gezahlten Beträge, je nach Fall.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">13. Widerrufsrecht</h2>
          <p>
            Gemäß Art. 16 Buchst. l der rumänischen Dringlichkeitsverordnung Nr. 34/2014 über Verbraucherrechte sind Beherbergungsleistungen, bei denen der Vertrag einen bestimmten Termin oder Zeitraum vorsieht, vom 14-tägigen Widerrufsrecht ausgenommen, das allgemein für Fernabsatzverträge gilt. Für die Buchung gelten daher die in Abschnitt 5 beschriebenen Stornobedingungen.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">14. Verarbeitung personenbezogener Daten</h2>
          <p>
            14.1. Die vom Gast angegebenen personenbezogenen Daten (Name, Kontaktdaten, gegebenenfalls Ausweisdaten) werden von der Hostillo S.R.L. als Verantwortlicher gemäß der Verordnung (EU) 2016/679 (DSGVO) ausschließlich zur Verwaltung der Buchung, zur Erfüllung der gesetzlichen Pflichten zur Gästemeldung und für die Kommunikation rund um den Aufenthalt verarbeitet.
          </p>
          <p>
            14.2. Die Daten werden nicht an Dritte weitergegeben, außer wenn dies gesetzlich vorgeschrieben ist (z. B. an zuständige Behörden) oder an die Plattform, über die gebucht wurde.
          </p>
          <p>
            14.3. Der Gast kann seine Rechte nach der DSGVO (Auskunft, Berichtigung, Löschung, Widerspruch usw.) durch eine Anfrage an {CONTACT.email} ausüben.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">15. Bewertungen und Fotos</h2>
          <p>
            Die Pension behält sich vor, von Gästen verfasste Bewertungen auf eigenen Kanälen oder auf Buchungsplattformen zu veröffentlichen und in den Gemeinschaftsräumen der Pension aufgenommene Fotos zu Werbezwecken zu verwenden, sofern der Gast dem nicht ausdrücklich schriftlich widerspricht.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">16. Anwendbares Recht und Streitbeilegung</h2>
          <p>16.1. Diese Allgemeinen Geschäftsbedingungen unterliegen rumänischem Recht.</p>
          <p>
            16.2. Streitigkeiten werden einvernehmlich beigelegt; gelingt dies nicht, sind die rumänischen Gerichte am Sitz der Pension zuständig.
          </p>
          <p>
            16.3. Gäste, die Verbraucher sind, können sich an die rumänische Verbraucherschutzbehörde (ANPC, www.anpc.ro) oder an die EU-Plattform zur Online-Streitbeilegung (OS) wenden, erreichbar unter http://ec.europa.eu/consumers/odr.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">17. Schlussbestimmungen</h2>
          <p>
            Die Hostillo S.R.L. behält sich vor, dieses Dokument von Zeit zu Zeit zu aktualisieren; maßgeblich ist die zum Zeitpunkt der Buchungsbestätigung angezeigte Fassung. Bei Fragen erreichen die Gäste die Pension unter {CONTACT.email} oder per WhatsApp.
          </p>
          <p>
            Dieses Dokument ist eine Übersetzung der rumänischen Termeni și Condiții. Bei Abweichungen zwischen beiden Fassungen hat die rumänische Fassung Vorrang.
          </p>
        </section>
      </div>
    </article>
  );
}
