import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import LegalTranslationNote from "@/components/LegalTranslationNote";
import { href } from "@/lib/i18n/config";

// German translation of app/(ro)/(site)/politica-de-cookie-uri. The Romanian
// version prevails; keep all three languages in step.
export const metadata: Metadata = {
  ...pageMeta({
    lang: "de",
    title: "Cookie-Richtlinie",
    description: "Wie die Website der Pensiunea Amonte Cookies verwendet.",
    path: href("de", "cookies"),
  }),
  robots: { index: false, follow: false },
};

const container = "mx-auto max-w-[850px] px-[clamp(20px,5vw,64px)] py-[clamp(48px,7vw,96px)]";

export default function CookieRichtliniePage() {
  return (
    <article className={container}>
      <SectionHeading
        as="h1"
        eyebrow="Rechtliches"
        title="Cookie-Richtlinie"
        className="mb-12"
      />

      <div className="text-[15px] leading-relaxed text-muted space-y-8 font-sans">
        <LegalTranslationNote lang="de" page="cookies" />

        <p className="text-sm italic text-muted-2 border-b border-line pb-4">
          Pensiunea Amonte, betrieben von der Hostillo S.R.L. <br />
          Stand: 21. Juli 2026
        </p>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">1. Was sind Cookies?</h2>
          <p>
            Ein „Cookie“ ist eine kleine Textdatei aus Buchstaben und Zahlen, die auf dem Computer, dem Mobilgerät oder einem anderen Gerät gespeichert wird, mit dem ein Nutzer auf das Internet zugreift.
          </p>
          <p>
            Ein Cookie wird gesetzt, wenn ein Webserver eine Anfrage an einen Browser (z. B. Chrome, Safari, Firefox) sendet, und ist vollständig „passiv“: Es enthält keine Software, keine Viren und keine Spyware und kann nicht auf Informationen auf der Festplatte des Nutzers zugreifen.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">2. Wofür werden Cookies verwendet?</h2>
          <p>
            Diese Dateien ermöglichen es, das Gerät des Nutzers wiederzuerkennen und Inhalte passend zu seinen Vorlieben darzustellen.
          </p>
          <p>
            Cookies dienen dazu, anonyme, zusammengefasste Statistiken zu erstellen, mit denen wir verstehen, wie Besucher unsere Seiten nutzen, damit wir deren Aufbau und Inhalt verbessern können, ohne jemanden persönlich zu identifizieren.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">3. Welche Cookies verwenden wir?</h2>
          <p>Wir verwenden zwei Arten von Cookies: Sitzungs-Cookies und dauerhafte Cookies.</p>
          <ul className="list-disc pl-5 space-y-2 text-[#33392f]">
            <li><strong>Sitzungs-Cookies</strong> sind temporäre Dateien, die auf dem Gerät des Nutzers bleiben, bis die Sitzung endet oder die Anwendung (der Webbrowser) geschlossen wird.</li>
            <li><strong>Dauerhafte Cookies</strong> bleiben für einen in den Parametern des Cookies festgelegten Zeitraum auf dem Gerät des Nutzers oder bis der Nutzer sie manuell löscht.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">4. Arten von Cookies auf dieser Website</h2>
          <p>Unsere Website verwendet Cookies für folgende Zwecke:</p>

          <div className="space-y-4 pt-2">
            <div className="bg-card border border-line rounded-lg p-5">
              <h3 className="font-semibold text-pine mb-2">4.1. Unbedingt notwendige (funktionale) Cookies</h3>
              <p className="text-sm">
                Sie sind für das ordnungsgemäße Funktionieren der Website unerlässlich und ermöglichen es Ihnen, zu navigieren und Grundfunktionen zu nutzen (etwa Kontaktformulare oder das Speichern Ihrer Navigationsauswahl). Diese Cookies erfassen keine Informationen, die für Werbung oder zur Verfolgung Ihrer Aktivitäten im Internet genutzt werden können. Sie erfordern keine vorherige Einwilligung.
              </p>
            </div>

            <div className="bg-card border border-line rounded-lg p-5">
              <h3 className="font-semibold text-pine mb-2">4.2. Analyse- und Statistik-Cookies</h3>
              <p className="text-sm">
                Sie helfen uns zu verstehen, wie Besucher mit unserer Website interagieren (z. B. welche Seiten am häufigsten aufgerufen werden und wie man sich auf der Website bewegt). Wir verwenden <strong>Google Analytics 4</strong>, das nur aktiviert wird, wenn Sie über das Cookie-Banner zustimmen.
              </p>
              <p className="text-sm mt-3">
                Außerdem nutzen wir die integrierten Dienste unseres Hosting-Anbieters, <strong>Vercel Analytics</strong> und <strong>Vercel Speed Insights</strong>, die anonym die Zahl der Besuche und die Ladegeschwindigkeit der Seiten messen. Sie verwenden keine Cookies, speichern nichts auf Ihrem Gerät und erfassen keine Daten, die Sie identifizieren könnten; deshalb laufen sie ohne Einwilligung.
              </p>
            </div>

            <div className="bg-card border border-line rounded-lg p-5">
              <h3 className="font-semibold text-pine mb-2">4.3. Marketing- und Werbe-Cookies</h3>
              <p className="text-sm">
                Sie werden verwendet, um Besucher über Websites hinweg zu verfolgen, mit dem Ziel, Anzeigen zu zeigen, die für den einzelnen Nutzer relevant und ansprechend sind (z. B. über <strong>Google Ads</strong>-Kampagnen). Sie sind nur aktiv, wenn Sie ihnen über unser Einwilligungsbanner zustimmen.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">5. Wie können Sie Cookies blockieren oder löschen?</h2>
          <p>
            Sie können Ihre auf unserer Website erteilte Einwilligung jederzeit ändern, indem Sie Ihre Auswahl im Cookie-Banner zurücksetzen oder die Cookies in Ihrem Browser löschen.
          </p>
          <p>
            Außerdem können Sie Cookies in Ihrem Browser grundsätzlich einschränken oder deaktivieren. Diese Einstellungen finden Sie in der Regel im Menü „Optionen“ oder „Einstellungen“ Ihres Browsers:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#33392f]">
            <li><a href="https://support.google.com/chrome/answer/95647?hl=de" target="_blank" rel="noopener noreferrer" className="underline">Cookie-Einstellungen in Google Chrome</a></li>
            <li><a href="https://support.apple.com/de-de/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="underline">Cookie-Einstellungen in Apple Safari</a></li>
            <li><a href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen" target="_blank" rel="noopener noreferrer" className="underline">Cookie-Einstellungen in Mozilla Firefox</a></li>
            <li><a href="https://support.microsoft.com/de-de/windows/löschen-und-verwalten-von-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="underline">Cookie-Einstellungen in Microsoft Edge</a></li>
          </ul>
          <p className="pt-2 text-sm">
            Bitte beachten Sie: Wenn Sie Cookies vollständig deaktivieren, funktionieren einige Bereiche oder Dienste der Website möglicherweise nicht oder nur eingeschränkt.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">6. Sicherheit und Datenschutz</h2>
          <p>
            Cookies sind KEINE Viren! Sie bestehen aus reinem Text. Sie enthalten keinen Programmcode, können also weder ausgeführt werden noch sich selbst starten. Daher können sie sich auch nicht in andere Netzwerke kopieren oder vervielfältigen.
          </p>
          <p>
            Da sie Informationen über Vorlieben und Browserverlauf der Nutzer speichern können, lassen sich Cookies dennoch als eine Form von Spyware missbrauchen. Viele Anti-Spyware-Programme markieren Cookies deshalb regelmäßig zur Löschung, wenn sie nach Viren oder Spyware suchen.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">7. Änderungen dieser Cookie-Richtlinie</h2>
          <p>
            Die Hostillo S.R.L. behält sich vor, diese Cookie-Richtlinie im Einklang mit den gesetzlichen Anforderungen zu ändern. Änderungen werden auf dieser Seite veröffentlicht und durch das Datum am Anfang des Dokuments kenntlich gemacht.
          </p>
        </section>
      </div>
    </article>
  );
}
