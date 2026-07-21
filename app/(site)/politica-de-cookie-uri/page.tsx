import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Politică de Cookie-uri",
  description: "Politica de utilizare a modulelor cookie pe site-ul Pensiunii Amonte.",
  robots: {
    index: false,
    follow: false,
  },
};

const container = "mx-auto max-w-[850px] px-[clamp(20px,5vw,64px)] py-[clamp(48px,7vw,96px)]";

export default function PoliticaCookieuriPage() {
  return (
    <article className={container}>
      <SectionHeading
        eyebrow="Aspecte legale"
        title="Politică de Cookie-uri"
        className="mb-12"
      />

      <div className="text-[15px] leading-relaxed text-muted space-y-8 font-sans">
        <p className="text-sm italic text-muted-2 border-b border-line pb-4">
          Pensiunea Amonte – operată de Hostillo S.R.L. <br />
          Ultima actualizare: 21.07.2026
        </p>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">1. Ce sunt modulele cookie?</h2>
          <p>
            Un &quot;cookie&quot; este un fișier text de mici dimensiuni, format din litere și cifre, care va fi stocat pe computerul, dispozitivul mobil sau alte echipamente ale unui utilizator de pe care se accesează internetul.
          </p>
          <p>
            Cookie-ul este instalat prin solicitarea transmisă de către un web-server unui browser (ex: Chrome, Safari, Firefox) și este complet &quot;pasiv&quot; (nu conține programe software, viruși sau spyware și nu poate accesa informațiile de pe hard-driverul utilizatorului).
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">2. La ce sunt utilizate cookie-urile?</h2>
          <p>
            Aceste fișiere fac posibilă recunoașterea terminalului utilizatorului și prezentarea conținutului într-un mod relevant, adaptat preferințelor utilizatorului. 
          </p>
          <p>
            Cookie-urile sunt utilizate în pregătirea unor statistici anonime agregate care ne ajută să înțelegem cum un utilizator beneficiază de paginile noastre web, permițându-ne îmbunătățirea structurii și conținutului lor, fără a permite identificarea personală a utilizatorului.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">3. Ce cookie-uri folosim?</h2>
          <p>Folosim două tipuri de cookie-uri: per sesiune și fixe (persistente).</p>
          <ul className="list-disc pl-5 space-y-2 text-[#33392f]">
            <li><strong>Cookie-urile de sesiune</strong> sunt fișiere temporare ce rămân în terminalul utilizatorului până la terminarea sesiunii sau închiderea aplicației (browserului web).</li>
            <li><strong>Cookie-urile fixe (persistente)</strong> rămân pe terminalul utilizatorului pe o perioadă definită de parametrii cookie-ului sau până sunt șterse manual de utilizator.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">4. Clasificarea cookie-urilor utilizate pe acest site</h2>
          <p>Site-ul nostru utilizează cookie-uri pentru următoarele scopuri:</p>
          
          <div className="space-y-4 pt-2">
            <div className="bg-card border border-line rounded-lg p-5">
              <h3 className="font-semibold text-pine mb-2">4.1. Cookie-uri strict necesare (Funcționale)</h3>
              <p className="text-sm">
                Sunt esențiale pentru buna funcționare a site-ului, permițându-vă să navigați și să folosiți funcțiile de bază (cum ar fi formularele de contact sau reținerea opțiunilor de navigare). Aceste cookie-uri nu colectează informații care pot fi folosite pentru marketing sau pentru a vă monitoriza activitatea pe internet. Nu necesită consimțământul dumneavoastră prealabil.
              </p>
            </div>

            <div className="bg-card border border-line rounded-lg p-5">
              <h3 className="font-semibold text-pine mb-2">4.2. Cookie-uri de analiză și statistică</h3>
              <p className="text-sm">
                Ne ajută să înțelegem cum interacționează vizitatorii cu site-ul nostru (ex. ce pagini sunt cele mai accesate, cum se navighează pe site). Folosim <strong>Google Analytics 4</strong> și serviciile integrate <strong>Vercel Analytics</strong> pentru a colecta aceste date în mod anonim. Activarea lor se face doar pe baza consimțământului exprimat prin bannerul de cookies.
              </p>
            </div>

            <div className="bg-card border border-line rounded-lg p-5">
              <h3 className="font-semibold text-pine mb-2">4.3. Cookie-uri de marketing și publicitate</h3>
              <p className="text-sm">
                Sunt utilizate pentru a monitoriza vizitatorii pe site-uri. Intenția este de a afișa reclame relevante și antrenante pentru utilizatorii individuali (de exemplu, prin campanii <strong>Google Ads</strong>). Acestea sunt active doar dacă alegeți să le acceptați prin intermediul bannerului nostru de consimțământ.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">5. Cum puteți opri sau șterge cookie-urile?</h2>
          <p>
            Puteți să vă modificați consimțământul acordat pe site-ul nostru oricând, prin resetarea opțiunilor din bannerul de cookies sau prin ștergerea cookie-urilor din browser.
          </p>
          <p>
            În plus, browserul utilizat pentru accesarea paginilor web permite limitarea sau dezactivarea cookie-urilor în mod implicit. Aceste setări pot fi găsite de regulă în meniul &quot;Opțiuni&quot; sau &quot;Preferințe&quot; al browserului dumneavoastră:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#33392f]">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="underline">Setări cookie în Google Chrome</a></li>
            <li><a href="https://support.apple.com/ro-ro/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="underline">Setări cookie în Apple Safari</a></li>
            <li><a href="https://support.mozilla.org/ro/kb/stergerea-cookie-urilor" target="_blank" rel="noopener noreferrer" className="underline">Setări cookie în Mozilla Firefox</a></li>
            <li><a href="https://support.microsoft.com/ro-ro/windows/ștergerea-și-gestionarea-modulelor-cookie-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="underline">Setări cookie în Microsoft Edge</a></li>
          </ul>
          <p className="pt-2 text-sm">
            Atenție: Dezactivarea completă a cookie-urilor poate duce la funcționarea defectuoasă sau limitată a anumitor secțiuni sau servicii ale site-ului.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">6. Securitate și probleme legate de confidențialitate</h2>
          <p>
            Cookie-urile NU sunt viruși! Ele folosesc formate tip plain text. Nu sunt alcătuite din bucăți de cod, așa că nu pot fi executate și nu pot auto-run-a. În consecință, nu se pot duplica sau replica pe alte rețele pentru a se rula sau replica din nou.
          </p>
          <p>
            Deoarece pot fi folosite pentru a stoca informații despre preferințele și istoricul de navigare al utilizatorilor, cookie-urile pot fi totuși folosite ca o formă de Spyware. Multe produse anti-spyware marchează în mod constant cookie-urile pentru a fi șterse în cadrul procedurilor de ștergere/scanare anti-virus/anti-spyware.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">7. Modificări ale politicii de cookie-uri</h2>
          <p>
            Hostillo S.R.L. își rezervă dreptul de a modifica această Politică de Cookie-uri în concordanță cu cerințele legale. Modificările vor fi publicate pe această pagină și vor fi marcate prin data actualizării de la începutul documentului.
          </p>
        </section>
      </div>
    </article>
  );
}
