import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Termeni și Condiții",
  description: "Termenii și condițiile de utilizare a serviciilor Pensiunii Amonte (Hostillo S.R.L.).",
};

const container = "mx-auto max-w-[850px] px-[clamp(20px,5vw,64px)] py-[clamp(48px,7vw,96px)]";

export default function TermeniPage() {
  return (
    <article className={container}>
      <SectionHeading
        eyebrow="Aspecte legale"
        title="Termeni și Condiții"
        className="mb-12"
      />
      
      <div className="text-[15px] leading-relaxed text-muted space-y-8 font-sans">
        <p className="text-sm italic text-muted-2 border-b border-line pb-4">
          Pensiunea Amonte – operată de Hostillo S.R.L. <br />
          Ultima actualizare: 21.07.2026
        </p>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">1. Date de identificare</h2>
          <p>Serviciile de cazare și serviciile conexe descrise în prezentul document sunt prestate de:</p>
          <div className="bg-card border border-line rounded-lg p-5 space-y-2 text-sm text-[#33392f]">
            <p><strong>Hostillo S.R.L.</strong></p>
            <p>CUI: 54352472</p>
            <p>Nr. Reg. Com.: J2026019997009</p>
            <p>Sediul social: Strada Iazului nr. 23, Avrig, jud. Sibiu</p>
            <p>Punct de lucru / locația pensiunii: Valea Avrigului nr. 642, Avrig, jud. Sibiu</p>
            <p>Administrator: Florin Luca</p>
            <p>E-mail: contact@pensiunea-amonte.ro</p>
            <p>Telefon / WhatsApp: 0747342280</p>
          </div>
          <p className="mt-4">
            denumită în continuare <strong>„Pensiunea”</strong> sau <strong>„Hostillo”</strong>.
          </p>
          <p>
            Prin efectuarea unei rezervări, persoana care rezervă (denumită în continuare <strong>„Oaspete”</strong> sau <strong>„Client”</strong>) confirmă că a citit, a înțeles și acceptă în integralitate prezenții Termeni și Condiții.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">2. Obiectul</h2>
          <p>
            Prezentul document reglementează condițiile în care Hostillo S.R.L. pune la dispoziția Oaspeților spațiile de cazare și facilitățile aferente la Pensiunea Amonte, precum și drepturile și obligațiile părților implicate în procesul de rezervare.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">3. Rezervarea</h2>
          <p>
            3.1. Rezervarea se poate realiza direct (site, WhatsApp, telefon, e-mail) sau prin intermediul platformelor de rezervări online (Booking.com, Airbnb etc.), caz în care se aplică suplimentar și termenii platformei respective.
          </p>
          <p>
            3.2. O rezervare este considerată confirmată numai după achitarea avansului solicitat și primirea unei confirmări scrise (e-mail sau WhatsApp) din partea Pensiunii.
          </p>
          <p>
            3.3. Avansul standard pentru confirmarea rezervării este de 30% din valoarea totală a sejurului, cu excepția cazurilor în care se stabilește de comun acord o sumă fixă (ex. rezervări de grup, evenimente corporate).
          </p>
          <p>
            3.4. Diferența de plată se achită la sosire (check-in), cash sau cu cardul, cu excepția cazului în care s-a convenit altfel în scris.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">4. Tarife</h2>
          <p>
            4.1. Tarifele afișate sunt exprimate în lei (RON) și includ TVA conform legislației în vigoare.
          </p>
          <p>
            4.2. Tarifele pot varia în funcție de sezon, perioadă, ocupare și tipul de eveniment; tariful confirmat printr-o rezervare rămâne valabil pentru sejurul respectiv, indiferent de eventualele modificări ulterioare ale listei de prețuri.
          </p>
          <p>
            4.3. Pentru rezervările de grup / închirierea integrală a pensiunii se aplică tarife și condiții stabilite separat, comunicate în ofertă.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">5. Politica de anulare, modificare și neprezentare</h2>
          <p>
            Rezervarea ta confirmată este garantată. O rezervare confirmată la Amonte nu se anulează niciodată din partea noastră — locul tău rămâne al tău.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#33392f]">
            <li>Rezervarea se confirmă printr-un avans de 30% (sau o sumă stabilită de comun acord).</li>
            <li>Anulare cu cel puțin 7 zile înainte de sosire: avansul se restituie integral.</li>
            <li>Anulare cu mai puțin de 7 zile înainte de sosire: avansul se reține.</li>
            <li>Neprezentare (no-show): se reține avansul.</li>
            <li>Pentru închirierea integrală a pensiunii (grupuri), termenul de anulare gratuită este de 28 de zile înainte de sosire, având în vedere rezervarea întregului spațiu.</li>
            <li>Modificarea datelor este posibilă în funcție de disponibilitate — scrie-ne pe WhatsApp și găsim o soluție.</li>
          </ul>
          <p className="pt-2 text-sm italic">
            Politica de mai sus se aplică rezervărilor directe (WhatsApp, telefon, site). Rezervările făcute prin Booking.com, Airbnb sau alte platforme de rezervare online respectă politica de anulare a platformei respective, afișată la momentul rezervării.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">6. Check-in / Check-out</h2>
          <p>6.1. Check-in: începând cu ora 15:00.</p>
          <p>6.2. Check-out: până la ora 12:00.</p>
          <p>
            6.3. Check-in/check-out în afara acestor intervale poate fi solicitat în avans și este supus disponibilității, putând implica un cost suplimentar.
          </p>
          <p>
            6.4. La sosire, Oaspetele major care efectuează check-in-ul are obligația de a prezenta un document de identitate valabil, în conformitate cu prevederile legale privind evidența turiștilor.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">7. Regulament de sejur</h2>
          <p>
            7.1. Capacitatea maximă a fiecărei unități de cazare este cea comunicată la rezervare și nu poate fi depășită fără acordul prealabil al Pensiunii.
          </p>
          <p>
            7.2. Este interzis fumatul în interiorul unităților de cazare și al spațiilor comune închise.
          </p>
          <p>
            7.3. Se solicită respectarea liniștii și a celorlalți oaspeți, în special în intervalul orar 22:00–08:00.
          </p>
          <p>
            7.4. Minorii sunt acceptați doar însoțiți de un adult responsabil, care răspunde de supravegherea acestora pe toată durata sejurului.
          </p>
          <p>
            7.5. Utilizarea facilităților precum jacuzzi, saună sau focul de tabără se face pe propria răspundere a Oaspeților, cu respectarea instrucțiunilor afișate la fața locului.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">8. Animale de companie</h2>
          <p>
            Pensiunea Amonte nu acceptă animale de companie ale oaspeților, indiferent de specie sau dimensiune. Bruno, mascota pensiunii, este singurul animal rezident la proprietate.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">9. Facilități incluse</h2>
          <p>
            Tariful de cazare include accesul la facilitățile generale ale pensiunii, conform descrierii din oferta/rezervarea confirmată (ex. foișor cu șemineu, terasă panoramică, foc de tabără, teren de minifotbal, tenis de masă), disponibile în limita programului de funcționare și a condițiilor meteo/tehnice.
          </p>
          <p>
            Zona de relaxare de pe malul râului, situată vizavi de pensiune, aparține proprietarului terenului și nu face parte din facilitățile administrate de Hostillo S.R.L.; accesul, dacă este permis, se face pe propria răspundere a Oaspetelui.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">10. Servicii suplimentare</h2>
          <p>
            Anumite servicii suplimentare pot fi disponibile în funcție de perioadă și context (ex. organizare de evenimente private pentru grupuri, activități corporate), acestea fiind convenite separat, în scris, între Pensiune și Oaspete/Client, anterior sosirii.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">11. Răspundere</h2>
          <p>
            11.1. Hostillo S.R.L. depune diligențele necesare pentru siguranța și confortul Oaspeților, însă nu răspunde pentru: bunuri personale pierdute, uitate sau deteriorate; accidentări rezultate din nerespectarea regulamentului de sejur sau a instrucțiunilor de utilizare a facilităților; evenimente cauzate de forță majoră.
          </p>
          <p>
            11.2. Oaspetele răspunde material pentru orice pagubă produsă din culpă proprie asupra imobilului, mobilierului sau echipamentelor pensiunii pe durata sejurului.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">12. Forța majoră</h2>
          <p>
            Niciuna dintre părți nu răspunde pentru neexecutarea obligațiilor contractuale dacă aceasta se datorează unui eveniment de forță majoră (calamități naturale, stare de urgență/alertă, decizii ale autorităților etc.), caz în care părțile vor conveni reprogramarea sejurului sau restituirea sumelor achitate, după caz.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">13. Dreptul de retragere</h2>
          <p>
            În conformitate cu art. 16 lit. l) din OUG nr. 34/2014 privind drepturile consumatorilor, serviciile de cazare, atunci când contractul prevede o dată sau o perioadă de executare specifică, sunt exceptate de la dreptul de retragere de 14 zile aplicabil, în general, contractelor încheiate la distanță. Rezervarea rămâne, prin urmare, guvernată de politica de anulare descrisă la secțiunea 5.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">14. Prelucrarea datelor cu caracter personal</h2>
          <p>
            14.1. Datele cu caracter personal furnizate de Oaspete (nume, date de contact, date din actul de identitate, după caz) sunt prelucrate de Hostillo S.R.L. în calitate de operator, în conformitate cu Regulamentul (UE) 2016/679 (GDPR), exclusiv în scopul gestionării rezervării, al îndeplinirii obligațiilor legale de evidență a turiștilor și al comunicării legate de sejur.
          </p>
          <p>
            14.2. Datele nu sunt transmise către terți, cu excepția situațiilor impuse de lege (ex. autorități competente) sau a platformei prin care s-a efectuat rezervarea.
          </p>
          <p>
            14.3. Oaspetele își poate exercita drepturile prevăzute de GDPR (acces, rectificare, ștergere, opoziție etc.) printr-o solicitare transmisă la contact@pensiunea-amonte.ro.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">15. Recenzii și fotografii</h2>
          <p>
            Pensiunea își rezervă dreptul de a publica recenziile lăsate de Oaspeți pe canalele proprii sau pe platformele de rezervare, precum și de a utiliza fotografii realizate în spațiile comune ale pensiunii în scop de promovare, cu excepția cazurilor în care Oaspetele se opune expres, în scris.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">16. Legea aplicabilă. Soluționarea litigiilor</h2>
          <p>16.1. Prezenții Termeni și Condiții sunt guvernați de legea română.</p>
          <p>
            16.2. Orice litigiu se va soluționa pe cale amiabilă; în caz contrar, competența revine instanțelor române de la sediul Pensiunii.
          </p>
          <p>
            16.3. Oaspetele consumator se poate adresa Autorității Naționale pentru Protecția Consumatorilor (ANPC, www.anpc.ro) sau platformei de Soluționare a Litigiilor Online (SOL), disponibilă la http://ec.europa.eu/consumers/odr.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-[22px] font-semibold text-pine">17. Dispoziții finale</h2>
          <p>
            Hostillo S.R.L. își rezervă dreptul de a actualiza periodic prezentul document; versiunea aplicabilă este cea afișată la momentul confirmării rezervării. Pentru orice întrebări, Oaspeții pot contacta Pensiunea la contact@pensiunea-amonte.ro sau prin WhatsApp.
          </p>
        </section>
      </div>
    </article>
  );
}
