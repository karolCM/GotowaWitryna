import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Regulamin — GotowaWitryna",
  description:
    "Regulamin świadczenia usług drogą elektroniczną przez GotowaWitryna.",
};

export default function Regulamin() {
  return (
    <LegalLayout title="Regulamin" lastUpdated="8 lutego 2026">
      <section>
        <h2>1. Postanowienia ogólne</h2>
        <ol>
          <li>
            Niniejszy regulamin (dalej: <strong>Regulamin</strong>) określa
            zasady świadczenia usług drogą elektroniczną za pośrednictwem
            serwisu internetowego dostępnego pod adresem gotowawitryna.pl
            (dalej: <strong>Serwis</strong>).
          </li>
          <li>
            Właścicielem i operatorem Serwisu jest GotowaWitryna (dalej:{" "}
            <strong>Usługodawca</strong>).
          </li>
          <li>
            Korzystanie z Serwisu oznacza akceptację niniejszego Regulaminu
            oraz{" "}
            <a href="/polityka-prywatnosci">Polityki prywatności</a>.
          </li>
        </ol>
      </section>

      <section>
        <h2>2. Definicje</h2>
        <ul>
          <li>
            <strong>Użytkownik</strong> — osoba fizyczna, prawna lub jednostka
            organizacyjna korzystająca z Serwisu.
          </li>
          <li>
            <strong>Usługa</strong> — przygotowanie projektu strony
            internetowej na podstawie materiałów z profilu społecznościowego
            Użytkownika.
          </li>
          <li>
            <strong>Zgłoszenie</strong> — przesłanie formularza kontaktowego
            z danymi Użytkownika i linkiem do profilu społecznościowego.
          </li>
          <li>
            <strong>Projekt demo</strong> — wstępna propozycja strony
            internetowej przygotowana na podstawie Zgłoszenia, prezentowana
            Użytkownikowi do oceny.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Zakres usług</h2>
        <ol>
          <li>
            Usługodawca świadczy usługi polegające na projektowaniu
            i&nbsp;wdrażaniu stron internetowych na podstawie materiałów
            dostępnych w profilach społecznościowych Użytkownika.
          </li>
          <li>
            Zakres usługi obejmuje: analizę profilu społecznościowego, dobór
            materiałów graficznych, przygotowanie tekstów (copywriting),
            projekt strony, wdrożenie techniczne (domena, hosting,
            certyfikat SSL).
          </li>
          <li>
            Przesłanie Zgłoszenia nie stanowi zawarcia umowy. Umowa zostaje
            zawarta dopiero po zaakceptowaniu Projektu demo przez Użytkownika
            oraz potwierdzeniu warunków współpracy przez Usługodawcę.
          </li>
        </ol>
      </section>

      <section>
        <h2>4. Zgłoszenie i realizacja</h2>
        <ol>
          <li>
            Użytkownik przesyła Zgłoszenie za pośrednictwem formularza
            w&nbsp;Serwisie, podając nazwę firmy, adres e-mail oraz link do
            profilu społecznościowego.
          </li>
          <li>
            Usługodawca przygotowuje Projekt demo zazwyczaj w ciągu 24–48
            godzin roboczych od otrzymania Zgłoszenia.
          </li>
          <li>
            Użytkownik nie ponosi żadnych kosztów związanych z przygotowaniem
            Projektu demo.
          </li>
          <li>
            Po zaakceptowaniu Projektu demo, Usługodawca przedstawia ofertę
            cenową i warunki realizacji. Dalsze prace rozpoczynają się po
            akceptacji oferty przez Użytkownika.
          </li>
        </ol>
      </section>

      <section>
        <h2>5. Prawa i obowiązki Użytkownika</h2>
        <ol>
          <li>
            Użytkownik oświadcza, że posiada prawa do materiałów
            udostępnianych za pośrednictwem profilu społecznościowego lub
            posiada odpowiednie zgody na ich wykorzystanie.
          </li>
          <li>
            Użytkownik zobowiązuje się podać prawdziwe dane kontaktowe
            w&nbsp;formularzu Zgłoszenia.
          </li>
          <li>
            Użytkownik ma prawo do rezygnacji z usługi na każdym etapie przed
            zaakceptowaniem oferty cenowej, bez ponoszenia kosztów.
          </li>
        </ol>
      </section>

      <section>
        <h2>6. Prawa autorskie</h2>
        <ol>
          <li>
            Prawa autorskie do Projektu demo przysługują Usługodawcy do
            momentu zawarcia umowy i opłacenia usługi.
          </li>
          <li>
            Po opłaceniu usługi prawa do projektu strony internetowej
            przechodzą na Użytkownika w zakresie określonym w umowie.
          </li>
          <li>
            Usługodawca zastrzega sobie prawo do prezentowania zrealizowanych
            projektów w swoim portfolio, chyba że Użytkownik wyrazi sprzeciw
            na piśmie.
          </li>
        </ol>
      </section>

      <section>
        <h2>7. Odpowiedzialność</h2>
        <ol>
          <li>
            Usługodawca dokłada wszelkich starań, aby usługi świadczone za
            pośrednictwem Serwisu były realizowane na najwyższym poziomie.
          </li>
          <li>
            Usługodawca nie ponosi odpowiedzialności za przerwy w działaniu
            Serwisu wynikające z przyczyn technicznych niezależnych od
            Usługodawcy.
          </li>
          <li>
            Usługodawca nie ponosi odpowiedzialności za treści publikowane
            przez Użytkownika w profilach społecznościowych.
          </li>
        </ol>
      </section>

      <section>
        <h2>8. Reklamacje</h2>
        <ol>
          <li>
            Reklamacje dotyczące świadczonych usług można zgłaszać drogą
            mailową na adres podany w Serwisie.
          </li>
          <li>
            Usługodawca rozpatruje reklamacje w terminie 14 dni roboczych od
            daty ich otrzymania.
          </li>
        </ol>
      </section>

      <section>
        <h2>9. Postanowienia końcowe</h2>
        <ol>
          <li>
            Usługodawca zastrzega sobie prawo do zmiany Regulaminu.
            O&nbsp;wszelkich zmianach Użytkownicy zostaną poinformowani
            poprzez Serwis.
          </li>
          <li>
            W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie
            mają przepisy prawa polskiego.
          </li>
          <li>
            Wszelkie spory wynikające z korzystania z Serwisu będą rozpatrywane
            przez sąd właściwy dla siedziby Usługodawcy.
          </li>
        </ol>
      </section>
    </LegalLayout>
  );
}
