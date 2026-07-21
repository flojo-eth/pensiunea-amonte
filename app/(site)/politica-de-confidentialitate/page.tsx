import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Politică de Confidențialitate (GDPR)",
  description: "Politica de confidențialitate și prelucrare a datelor cu caracter personal la Pensiunea Amonte.",
};

const container = "mx-auto max-w-[850px] px-[clamp(20px,5vw,64px)] py-[clamp(48px,7vw,96px)]";

export default function PoliticaConfidentialitatePage() {
  return (
    <article className={container}>
      <SectionHeading
        eyebrow="Aspecte legale"
        title="Politică de Confidențialitate"
        className="mb-12"
      />

      <div className="text-[15px] leading-relaxed text-muted space-y-8 font-sans">
        <p className="text-sm italic text-muted-2 border-b border-line pb-4">
          Prelucrarea datelor cu caracter personal – Pensiunea Amonte / Hostillo S.R.L. <br />
          Ultima actualizare: 21.07.2026
        </p>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">1. Date de identificare operator</h2>
          <p><strong>Hostillo S.R.L.</strong></p>
          <div className="bg-card border border-line rounded-lg p-5 space-y-2 text-sm text-[#33392f]">
            <p>CUI: 54352472</p>
            <p>Nr. Reg. Com.: J2026019997009</p>
            <p>Sediul social: Strada Iazului nr. 23, Avrig, jud. Sibiu</p>
            <p>Punct de lucru: Valea Avrigului nr. 642, Avrig, jud. Sibiu</p>
            <p>Administrator: Florin Luca</p>
            <p>E-mail contact date personale: contact@pensiunea-amonte.ro</p>
            <p>Telefon / WhatsApp: 0747342280</p>
          </div>
          <p className="mt-4">
            Hostillo S.R.L. (&quot;noi&quot;, &quot;Hostillo&quot;, &quot;Pensiunea&quot;) acționează în calitate de <strong>operator de date cu caracter personal</strong>, în sensul Regulamentului (UE) 2016/679 (&quot;GDPR&quot;) și al Legii nr. 190/2018.
          </p>
          <p>
            Nu am desemnat un responsabil cu protecția datelor (DPO), aceasta nefiind obligatorie pentru activitatea noastră; orice solicitare privind datele personale se adresează direct la adresa de e-mail de mai sus.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">2. Ce date colectăm</h2>
          
          <h3 className="font-semibold text-pine mt-2">2.1. Date furnizate direct de dumneavoastră</h3>
          <ul className="list-disc pl-5 space-y-2 text-[#33392f]">
            <li><strong>La rezervare:</strong> nume, prenume, telefon, e-mail, număr de persoane, perioada sejurului, preferințe/cereri speciale.</li>
            <li><strong>La check-in:</strong> date din actul de identitate/pașaport (nume, CNP/serie și număr, cetățenie), conform obligației legale de evidență a turiștilor cazați.</li>
            <li><strong>La plată:</strong> date necesare procesării plății (nu stocăm datele complete ale cardului — acestea sunt procesate direct de terminalul POS/aplicația de plată a băncii).</li>
            <li><strong>Corespondență:</strong> mesaje transmise prin e-mail, WhatsApp sau formularele de pe site.</li>
          </ul>

          <h3 className="font-semibold text-pine mt-4">2.2. Date colectate automat</h3>
          <p>
            Prin cookie-uri și tehnologii similare de pe site-ul pensiunea-amonte.ro: adresă IP, tip dispozitiv/browser, pagini vizitate, comportament de navigare (Google Analytics 4), interacțiune cu reclamele (Google Ads).
          </p>

          <h3 className="font-semibold text-pine mt-4">2.3. Date primite de la terți</h3>
          <ul className="list-disc pl-5 space-y-2 text-[#33392f]">
            <li>Din platformele de rezervare, atunci când rezervarea este făcută prin acestea: Booking.com, Airbnb.</li>
            <li>Din sistemul de gestiune a rezervărilor (Pynbooking – PMS/Booking Engine), care centralizează datele rezervării indiferent de canal.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">3. Scopurile și temeiul legal al prelucrării</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-line text-sm text-left border border-line rounded-lg">
              <thead className="bg-card font-semibold text-pine">
                <tr>
                  <th className="px-4 py-3 border-r border-line">Scop</th>
                  <th className="px-4 py-3">Temei legal (GDPR art. 6)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line text-[#33392f]">
                <tr>
                  <td className="px-4 py-3 border-r border-line font-medium">Gestionarea și confirmarea rezervării, comunicare pre/post-sejur</td>
                  <td className="px-4 py-3">Executarea contractului (art. 6 alin. 1 lit. b)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-line font-medium">Check-in și evidența turiștilor cazați, raportări către autorități (unde e cazul)</td>
                  <td className="px-4 py-3">Obligație legală (art. 6 alin. 1 lit. c)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-line font-medium">Facturare și evidență contabilă</td>
                  <td className="px-4 py-3">Obligație legală (art. 6 alin. 1 lit. c)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-line font-medium">Procesarea plăților</td>
                  <td className="px-4 py-3">Executarea contractului / obligație legală</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-line font-medium">Analiza traficului pe site (Google Analytics 4)</td>
                  <td className="px-4 py-3">Consimțământ (art. 6 alin. 1 lit. a)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-line font-medium">Publicitate și remarketing (Google Ads)</td>
                  <td className="px-4 py-3">Consimțământ (art. 6 alin. 1 lit. a)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-line font-medium">Răspuns la solicitări/mesaje</td>
                  <td className="px-4 py-3">Interes legitim (art. 6 alin. 1 lit. f)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r border-line font-medium">Soluționarea eventualelor litigii</td>
                  <td className="px-4 py-3">Interes legitim (art. 6 alin. 1 lit. f)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">4. Cui transmitem datele</h2>
          <p>
            Datele dumneavoastră pot fi accesate, în limita strict necesară, de următoarele categorii de destinatari (împuterniciți sau operatori asociați):
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#33392f]">
            <li><strong>Pynbooking:</strong> sistemul de gestiune a rezervărilor (PMS/Booking Engine) folosit pentru administrarea rezervării dumneavoastră.</li>
            <li><strong>SmartBill:</strong> sistemul de facturare și gestiune, pentru emiterea facturilor.</li>
            <li><strong>Banca Transilvania:</strong> pentru procesarea plăților (POS/mPOS).</li>
            <li><strong>Google Ireland Ltd.:</strong> Google Analytics 4 și Google Ads, pentru măsurarea traficului și publicitate (dacă v-ați exprimat consimțământul pentru cookie-uri neesențiale).</li>
            <li><strong>Meta Platforms:</strong> dacă folosiți canalul WhatsApp pentru comunicare cu pensiunea.</li>
            <li><strong>Booking.com / Airbnb:</strong> dacă rezervarea a fost făcută prin platforma respectivă.</li>
            <li><strong>Autorități publice:</strong> Poliția/organele abilitate pentru evidența turiștilor, autoritatea fiscală, alte autorități, atunci când legea o impune.</li>
          </ul>
          <p>Nu vindem și nu închiriem datele dumneavoastră unor terți în scop de marketing al acestora.</p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">5. Transferuri de date în afara Spațiului Economic European</h2>
          <p>
            Unii dintre furnizorii de mai sus (Google, Meta) pot procesa date pe servere situate în afara SEE. Aceste transferuri se realizează pe baza clauzelor contractuale standard aprobate de Comisia Europeană sau a altor mecanisme de protecție recunoscute de GDPR, asigurate de furnizorii respectivi.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">6. Durata păstrării datelor</h2>
          <ul className="list-disc pl-5 space-y-2 text-[#33392f]">
            <li><strong>Date de rezervare și corespondență:</strong> pe durata relației contractuale, plus termenul legal de prescripție (3 ani de la finalul sejurului), pentru apărarea unor eventuale pretenții.</li>
            <li><strong>Facturi și documente contabile:</strong> 10 ani, conform Legii contabilității nr. 82/1991.</li>
            <li><strong>Date de evidență a turiștilor:</strong> conform termenelor prevăzute de legislația specifică activității de cazare.</li>
            <li><strong>Cookie-uri:</strong> conform duratelor stabilite în bannerul de consimțământ de pe site (cookie-urile analitice/de marketing pot fi șterse oricând din preferințele browserului sau ale site-ului).</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">7. Drepturile dumneavoastră</h2>
          <p>În calitate de persoană vizată, aveți dreptul de a solicita:</p>
          <ul className="list-disc pl-5 space-y-2 text-[#33392f]">
            <li><strong>Acces</strong> la datele pe care le prelucrăm despre dumneavoastră;</li>
            <li><strong>Rectificarea</strong> datelor inexacte sau incomplete;</li>
            <li><strong>Ștergerea datelor</strong> (&quot;dreptul de a fi uitat&quot;), în limitele legale (nu se aplică datelor pe care avem obligația legală de a le păstra, ex. facturi);</li>
            <li><strong>Restricționarea</strong> prelucrării, în anumite condiții;</li>
            <li><strong>Opoziția</strong> față de prelucrarea bazată pe interes legitim sau față de marketingul direct;</li>
            <li><strong>Portabilitatea</strong> datelor furnizate direct de dumneavoastră, în format structurat;</li>
            <li><strong>Retragerea consimțământului</strong> oricând, pentru prelucrările bazate pe consimțământ (ex. cookie-uri de analiză/marketing), fără a afecta legalitatea prelucrării anterioare retragerii.</li>
          </ul>
          <p>
            Pentru exercitarea oricăruia dintre aceste drepturi, ne puteți contacta la <strong>contact@pensiunea-amonte.ro</strong>. Vom răspunde în termen de cel mult 30 de zile.
          </p>
          <p>
            Aveți, de asemenea, dreptul de a depune o plângere la <strong>Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</strong>, <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="underline">www.dataprotection.ro</a>.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">8. Securitatea datelor</h2>
          <p>
            Aplicăm măsuri tehnice și organizatorice rezonabile pentru protejarea datelor împotriva accesului neautorizat, pierderii sau divulgării accidentale (acces limitat la personalul autorizat, conturi și platforme securizate pentru gestiunea rezervărilor și facturare).
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">9. Cookie-uri</h2>
          <p>Site-ul pensiunea-amonte.ro utilizează cookie-uri:</p>
          <ul className="list-disc pl-5 space-y-2 text-[#33392f]">
            <li><strong>Necesare:</strong> pentru funcționarea de bază a site-ului (nu necesită consimțământ);</li>
            <li><strong>Analitice (Google Analytics 4):</strong> pentru a înțelege modul de utilizare a site-ului;</li>
            <li><strong>De marketing (Google Ads):</strong> pentru afișarea de reclame relevante și măsurarea eficienței campaniilor.</li>
          </ul>
          <p>
            Cookie-urile analitice și de marketing sunt folosite doar cu consimțământul dumneavoastră, exprimat prin bannerul afișat la prima vizită. Vă puteți schimba preferințele oricând din setările indicate pe site sau din setările browserului.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">10. Datele minorilor</h2>
          <p>
            Nu colectăm în mod intenționat date ale minorilor neînsoțiți. Datele minorilor incluși într-o rezervare sunt furnizate și gestionate de adultul care efectuează rezervarea/check-in-ul.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">11. Modificarea politicii</h2>
          <p>
            Această politică poate fi actualizată periodic; versiunea aplicabilă este cea publicată pe site la data prelucrării. Vă recomandăm să o consultați periodic.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">12. Contact</h2>
          <p>
            Pentru orice întrebare legată de prelucrarea datelor dumneavoastră cu caracter personal: <a href="mailto:contact@pensiunea-amonte.ro" className="underline">contact@pensiunea-amonte.ro</a>.
          </p>
        </section>
      </div>
    </article>
  );
}
