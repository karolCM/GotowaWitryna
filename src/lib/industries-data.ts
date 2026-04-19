export interface PainPoint {
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface IndustryData {
  slug: string;
  name: string;
  nameDative: string;
  emoji: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    badge: string;
    headline: string;
    headlineAccent: string;
    headlineSuffix: string;
    subheadline: string;
  };
  painPoints: PainPoint[];
  benefits: Benefit[];
  leadMagnet: string;
  faq: FAQItem[];
}

export const industries: IndustryData[] = [
  {
    slug: "fryzjerzy-barberzy",
    name: "Fryzjerzy i barberzy",
    nameDative: "dla fryzjera i barbera",
    emoji: "scissors",
    seo: {
      title: "Strona internetowa dla fryzjera i barbera | GotowaWitryna",
      description:
        "Profesjonalna strona www dla salonu fryzjerskiego i barbera. Zbudujemy ją z Twojego Facebooka w 24h — z galerią stylizacji, cennikiem i widocznością w Google. Od 149 zł/mc.",
      keywords: ["strona internetowa dla fryzjera", "strona www salon fryzjerski", "strona dla barbera", "strona barber shop", "strona fryzjerska", "strona www fryzjer", "strona internetowa salon fryzjerski"],
    },
    hero: {
      badge: "Strona www dla fryzjera i barbera",
      headline: "Klienci szukają fryzjera w Google.",
      headlineAccent: "Czy Cię tam znajdą?",
      headlineSuffix: "",
      subheadline:
        "Zbudujemy profesjonalną stronę Twojego salonu z Twoich postów na Facebooku — z galerią stylizacji, cennikiem usług i formularzem rezerwacji. Gotowe w 24 godziny. Bez Twojego zaangażowania.",
    },
    painPoints: [
      {
        title: "Rezerwacje przez Messengera to strata czasu",
        description:
          "Bez strony www każde zapytanie o termin trafia na Twój prywatny czat. Strona internetowa automatyzuje ten proces — klient widzi ofertę i zostawia kontakt, a Ty dostajesz zgłoszenie mailem.",
      },
      {
        title: "Twoje stylizacje giną w chaosie postów na FB",
        description:
          "Galeria na Facebooku jest nieuporządkowana i trudna w przeglądaniu. Strona www prezentuje Twoje realizacje jak profesjonalne portfolio — każda stylizacja widoczna od razu, na każdym urządzeniu.",
      },
      {
        title: "Konkurencyjne salony są wyżej w Google Maps",
        description:
          "Gdy klient wpisuje 'fryzjer [Twoje miasto]', na górze wyskakują salony ze stronami www. Bez własnej strony i skonfigurowanego Google Business Profile jesteś dla tej grupy klientów niewidoczny.",
      },
    ],
    benefits: [
      {
        title: "Galeria stylizacji i realizacji",
        description:
          "Prezentujemy Twoje najlepsze prace w estetycznej galerii zdjęć. Klient widzi poziom Twojej pracy zanim w ogóle zadzwoni.",
      },
      {
        title: "Cennik usług fryzjerskich",
        description:
          "Przejrzysty cennik strzyżenia, koloryzacji, zabiegów i barbering — klienci wiedzą czego się spodziewać i nie pytają o ceny na Messengerze.",
      },
      {
        title: "Formularz rezerwacji i kontaktowy",
        description:
          "Klienci mogą zostawiać prośbę o termin przez stronę — Ty dostajesz powiadomienie e-mail. Możemy też zintegrować zewnętrzny system rezerwacji.",
      },
      {
        title: "Widoczność w Google na frazy lokalne",
        description:
          "Optymalizujemy stronę pod 'fryzjer [miasto]', 'barber [miasto]'. Co miesiąc publikujemy artykuł blogowy, który stopniowo buduje Twoją pozycję.",
      },
      {
        title: "Lead magnet branżowy",
        description:
          "Przygotowujemy darmowy poradnik, który zbiera maile klientek — masz gotową bazę do powiadomień o promocjach.",
      },
    ],
    leadMagnet: "Jak dbać o włosy po koloryzacji — poradnik dla klientek salonu",
    faq: [
      {
        question: "Czy na stronie fryzjera mogę zbierać rezerwacje online?",
        answer:
          "Tak. Umieszczamy formularz kontaktowy, przez który klienci proszą o termin. Możemy też zintegrować zewnętrzny system rezerwacji (np. Booksy, Calendly) jeśli go używasz.",
      },
      {
        question: "Czy galeria stylizacji będzie na bieżąco aktualizowana?",
        answer:
          "Tak — wyślij nam nowe zdjęcia mailem, a my dodamy je do galerii w ramach miesięcznego abonamentu. Bez dodatkowych opłat, bez limitów zdjęć.",
      },
      {
        question: "Czy strona pomoże mi pojawiać się w Google Maps?",
        answer:
          "Tak. Konfigurujemy Twój Google Business Profile, dzięki czemu salon pojawia się w wynikach Google Maps i lokalnych wynikach wyszukiwania na frazy 'fryzjer [miasto]'.",
      },
    ],
  },
  {
    slug: "salony-kosmetyczne",
    name: "Salony kosmetyczne",
    nameDative: "dla salonu kosmetycznego",
    emoji: "sparkles",
    seo: {
      title: "Strona internetowa dla salonu kosmetycznego | GotowaWitryna",
      description:
        "Profesjonalna strona www dla salonu kosmetycznego i beauty. Zbudujemy ją z Twojego Facebooka w 24h — z galerią efektów, cennikiem zabiegów i widocznością w Google. Od 149 zł/mc.",
      keywords: ["strona internetowa salon kosmetyczny", "strona www salon beauty", "strona dla kosmetyczki", "strona salon urody", "strona kosmetyczna", "strona www manicure", "strona internetowa dla kosmetyczki"],
    },
    hero: {
      badge: "Strona www dla salonu kosmetycznego",
      headline: "Twoje zabiegi zasługują na",
      headlineAccent: "profesjonalną wizyówkę",
      headlineSuffix: "w internecie.",
      subheadline:
        "Zbudujemy stronę Twojego salonu beauty z najlepszych zdjęć z Facebooka — z galerią efektów, cennikiem zabiegów i możliwością rezerwacji. Gotowe w 24 godziny.",
    },
    painPoints: [
      {
        title: "Klientki nie mogą znaleźć Twojego cennika",
        description:
          "Bez strony każda zainteresowana musi pisać wiadomość lub dzwonić, żeby zapytać o ceny. Strona www z przejrzystym cennikiem odpowiada na to pytanie 24/7.",
      },
      {
        title: "Efekty zabiegów giną wśród przypadkowych postów",
        description:
          "Facebook miesza Twoje realizacje z innymi postami. Strona www to dedykowana galeria before/after — klientka widzi Twój poziom od razu, bez scrollowania.",
      },
      {
        title: "Nowe klientki wybierają salony widoczne w Google",
        description:
          "Szukając 'salon kosmetyczny [miasto]' Google wyświetla najpierw firmy ze stronami internetowymi. Jeśli Cię tam nie ma, tracisz klientki, które nigdy o Tobie nie słyszały.",
      },
    ],
    benefits: [
      {
        title: "Galeria efektów i zdjęć before/after",
        description:
          "Pokazujemy efekty Twoich zabiegów — manicure, stylizacji rzęs, depilacji czy pielęgnacji twarzy. Klientka widzi jakość zanim przyjdzie na wizytę.",
      },
      {
        title: "Cennik zabiegów i pakiety",
        description:
          "Przejrzysty cennik podzielony na kategorie zabiegów. Koniec z pytaniami o ceny na czacie — klientka znajdzie wszystko na stronie.",
      },
      {
        title: "Formularz rezerwacji online",
        description:
          "Klientki zostawiają prośbę o termin przez formularz — Ty dostajesz powiadomienie. Możliwa integracja z Booksy lub innym systemem rezerwacji.",
      },
      {
        title: "Blog o pielęgnacji i urodzie",
        description:
          "Co miesiąc publikujemy artykuły o pielęgnacji paznokci, skóry czy rzęs — pozycjonowane pod frazy, których szukają Twoje klientki.",
      },
      {
        title: "Lead magnet beauty",
        description:
          "Darmowy materiał zbierający maile przyszłych klientek — np. poradnik o pielęgnacji skóry.",
      },
    ],
    leadMagnet: "5 błędów w pielęgnacji skóry, które popełnia każda kobieta — bezpłatny przewodnik",
    faq: [
      {
        question: "Czy strona może pokazywać efekty moich zabiegów?",
        answer:
          "Tak — tworzymy dedykowaną galerię realizacji z opisami zabiegów. Możesz przesyłać nam nowe zdjęcia w każdej chwili, a my dodajemy je w ramach abonamentu.",
      },
      {
        question: "Czy mogę mieć osobne podstrony dla każdego rodzaju zabiegu?",
        answer:
          "W pakietach Biznes i Premium tworzymy stronę multi-page — możesz mieć oddzielne podstrony dla manicure, stylizacji rzęs, zabiegów na twarz i innych usług.",
      },
      {
        question: "Czy strona pomoże mi zbierać stałe klientki?",
        answer:
          "Tak — lead magnet (np. bezpłatny poradnik do pobrania) zbiera adresy e-mail zainteresowanych klientek. Masz bazę, do której możesz wysyłać informacje o promocjach i nowościach.",
      },
    ],
  },
  {
    slug: "warsztaty-samochodowe",
    name: "Warsztaty samochodowe",
    nameDative: "dla warsztatu samochodowego",
    emoji: "wrench",
    seo: {
      title: "Strona internetowa dla warsztatu samochodowego | GotowaWitryna",
      description:
        "Profesjonalna strona www dla warsztatu samochodowego i mechanika. Zbudujemy ją z Twojego Facebooka w 24h — z cennikiem usług, galerią realizacji i widocznością w Google. Od 149 zł/mc.",
      keywords: ["strona internetowa warsztat samochodowy", "strona www dla mechanika", "strona serwis samochodowy", "strona mechanik", "strona dla warsztatu", "strona www auto serwis", "strona internetowa mechanik samochodowy"],
    },
    hero: {
      badge: "Strona www dla warsztatu samochodowego",
      headline: "Kierowcy szukają mechanika w Google.",
      headlineAccent: "Czy Twój warsztat jest tam widoczny?",
      headlineSuffix: "",
      subheadline:
        "Zbudujemy profesjonalną stronę Twojego warsztatu z Twoich postów na Facebooku — z listą usług, cennikiem, galerią realizacji i opiniami klientów. Gotowe w 24 godziny.",
    },
    painPoints: [
      {
        title: "Klienci dzwonią, zamiast znaleźć odpowiedź na stronie",
        description:
          "Bez strony www klienci muszą dzwonić po każdą informację — ceny, godziny otwarcia, dostępność. Strona odpowiada na te pytania automatycznie, uwalniając Twój czas.",
      },
      {
        title: "Opinie klientów są rozproszone po Facebooku i Google",
        description:
          "Dobre opinie to najskuteczniejszy argument sprzedażowy w motoryzacji. Strona www zbiera je w jednym miejscu i prezentuje nowym klientom, zanim zdecydują się zadzwonić.",
      },
      {
        title: "Nowy serwis w okolicy kradnie Twoich klientów dzięki stronie www",
        description:
          "Kierowca, który widzi profesjonalną stronę konkurencji, a Ciebie tylko jako stary profil FB — wybierze konkurencję. Strona to sygnał: ten warsztat jest godny zaufania.",
      },
    ],
    benefits: [
      {
        title: "Lista usług i cennik",
        description:
          "Przejrzysta lista: wymiana opon, przeglądy, diagnostyka, naprawy — z orientacyjnymi cenami. Klient wie czego się spodziewać i nie pyta przez telefon.",
      },
      {
        title: "Galeria realizacji i napraw",
        description:
          "Zdjęcia skomplikowanych napraw, zmodyfikowanych aut, wymian sezonowych. Budują zaufanie i pokazują poziom Twojego warsztatu.",
      },
      {
        title: "Opinie klientów w widocznym miejscu",
        description:
          "Prezentujemy opinie klientów z Google i Facebooka na stronie głównej. Nowy klient od razu widzi, że możesz mu zaufać.",
      },
      {
        title: "Formularz wyceny i rezerwacji",
        description:
          "Klient opisuje problem, zostawia dane — Ty dostajesz lead mailem. Bez odbierania telefonów w środku naprawy.",
      },
      {
        title: "Widoczność w Google lokalnie",
        description:
          "Optymalizacja pod 'mechanik [miasto]', 'wymiana opon [miasto]'. Google Business Profile skonfigurowany — Twój warsztat pojawia się w Maps.",
      },
    ],
    leadMagnet: "Kiedy warto wymienić opony — praktyczny kalendarz kierowcy",
    faq: [
      {
        question: "Czy strona warsztatu może przyjmować zapisy online?",
        answer:
          "Tak — formularz na stronie zbiera zgłoszenia (opis problemu, kontakt, preferowany termin) i przesyła je mailem do Ciebie. Możemy też zintegrować prosty kalendarz rezerwacji.",
      },
      {
        question: "Czy mogę pokazywać na stronie ceny usług?",
        answer:
          "Oczywiście. Umieszczamy cennik lub orientacyjne widełki cenowe. Klienci chętniej kontaktują się, gdy wiedzą mniej więcej ile zapłacą — to usuwa barierę pierwszego kontaktu.",
      },
      {
        question: "Czy strona pomoże mi zdobywać klientów spoza stałej bazy?",
        answer:
          "Tak — artykuły blogowe (np. 'kiedy wymienić klocki hamulcowe', 'jak przygotować auto do zimy') pozycjonują Twój warsztat na frazy, których szukają nowi kierowcy w Twojej okolicy.",
      },
    ],
  },
  {
    slug: "firmy-budowlane",
    name: "Firmy budowlane i remontowe",
    nameDative: "dla firmy budowlanej i remontowej",
    emoji: "hardhat",
    seo: {
      title: "Strona internetowa dla firmy budowlanej i remontowej | GotowaWitryna",
      description:
        "Profesjonalna strona www dla firmy budowlanej, remontowej i wykończeniowej. Zbudujemy ją z Twojego Facebooka w 24h — z portfolio realizacji, wyceną i widocznością w Google. Od 149 zł/mc.",
      keywords: ["strona internetowa firma budowlana", "strona www firma remontowa", "strona dla firmy budowlanej", "strona ekipa remontowa", "strona www wykończenia", "strona internetowa budowlanka", "strona dla ekipy remontowej"],
    },
    hero: {
      badge: "Strona www dla firmy budowlanej",
      headline: "Twoje realizacje budują zaufanie.",
      headlineAccent: "Pokaż je na profesjonalnej stronie.",
      headlineSuffix: "",
      subheadline:
        "Zbudujemy stronę Twojej firmy remontowej z Twoich zdjęć realizacji z Facebooka — z portfolio, wyceną online i widocznością w Google. Gotowe w 24 godziny.",
    },
    painPoints: [
      {
        title: "Klienci nie mogą ocenić jakości Twojej pracy bez portfolio",
        description:
          "Zdjęcia na FB są nieuporządkowane i nieczytelne. Portfolio na stronie www prezentuje Twoje najlepsze realizacje — zanim i po remoncie — i przekonuje klienta zanim w ogóle zadzwoni.",
      },
      {
        title: "Zapytania o wycenę trafiają do dziesiątek firm naraz",
        description:
          "Klient, który nie może ocenić Twojego poziomu z internetu, pyta o wycenę wszystkich z rzędu. Profesjonalna strona wyróżnia Cię z tłumu i sprawia, że klient chce właśnie Ciebie.",
      },
      {
        title: "Firmy ze stronami www dostają więcej zleceń",
        description:
          "Badania pokazują, że ponad 70% klientów sprawdza firmę w internecie przed zleceniem remontu. Bez strony odpadasz już na pierwszym etapie — zanim w ogóle porozmawiasz z klientem.",
      },
    ],
    benefits: [
      {
        title: "Portfolio realizacji before/after",
        description:
          "Prezentujemy Twoje najlepsze remonty, wykończenia i budowy — z opisami, zakresem prac i zdjęciami. Klient natychmiast widzi Twój poziom.",
      },
      {
        title: "Formularz wyceny",
        description:
          "Klient opisuje projekt (metraż, zakres prac, miasto) przez formularz — Ty dostajesz lead mailem i możesz przygotować wycenę.",
      },
      {
        title: "Lista usług budowlanych",
        description:
          "Remonty mieszkań, wykończenia pod klucz, malowanie, glazura, instalacje — wszystko jasno opisane.",
      },
      {
        title: "Opinie i referencje",
        description:
          "Zbieramy i prezentujemy opinie zadowolonych klientów — w branży remontowej to najsilniejszy argument.",
      },
      {
        title: "Widoczność lokalna w Google",
        description:
          "Pozycjonowanie na frazy 'firma remontowa [miasto]', 'wykończenie mieszkania [region]'. Artykuły blogowe budują autorytet i pozycję w wyszukiwarce.",
      },
    ],
    leadMagnet: "Jak zaplanować remont mieszkania krok po kroku — praktyczny checklist",
    faq: [
      {
        question: "Czy na stronie mogę pokazać konkretne realizacje z opisem?",
        answer:
          "Tak — tworzymy stronę portfolio z opisem każdej realizacji: zakres prac, czas realizacji, lokalizacja. Ceny można podać orientacyjnie lub jako wycenę indywidualną.",
      },
      {
        question: "Czy strona pomoże mi zdobywać klientów z danego regionu?",
        answer:
          "Tak — optymalizujemy stronę pod lokalne frazy (np. 'remonty mieszkań Warszawa Mokotów'). Co miesiąc publikujemy artykuły branżowe, które budują Twoją widoczność w Google w wybranym obszarze.",
      },
      {
        question: "Co to jest lead magnet dla firmy remontowej?",
        answer:
          "Przygotujemy np. bezpłatny checklist 'Jak zaplanować remont mieszkania krok po kroku'. Klient pobiera go ze strony w zamian za adres e-mail — Ty dostajesz kontakt do osoby planującej remont.",
      },
    ],
  },
  {
    slug: "restauracje-gastronomia",
    name: "Restauracje i gastronomia",
    nameDative: "dla restauracji i gastronomii",
    emoji: "restaurant",
    seo: {
      title: "Strona internetowa dla restauracji i gastronomii | GotowaWitryna",
      description:
        "Profesjonalna strona www dla restauracji, kawiarni i baru. Zbudujemy ją z Twojego Facebooka w 24h — z menu, rezerwacją stolika i widocznością w Google. Od 149 zł/mc.",
      keywords: ["strona internetowa restauracja", "strona www kawiarnia", "strona dla restauracji", "strona gastronomia", "strona www menu restauracja", "strona internetowa bar", "strona dla gastronomii", "strona restauracja online"],
    },
    hero: {
      badge: "Strona www dla restauracji",
      headline: "Gdzie zjeść w Twoim mieście?",
      headlineAccent: "Twoja restauracja musi być pierwsza w Google.",
      headlineSuffix: "",
      subheadline:
        "Zbudujemy stronę Twojej restauracji lub kawiarni z Twoich zdjęć z Facebooka — z menu, rezerwacją stolika i widocznością w Google Maps. Gotowe w 24 godziny.",
    },
    painPoints: [
      {
        title: "Klienci nie mogą znaleźć Twojego menu online",
        description:
          "Goście szukają menu przed wizytą — jeśli nie ma go na stronie, wybierają restaurację, gdzie menu jest dostępne od razu. Bez strony tracisz tych klientów już na etapie wyszukiwania.",
      },
      {
        title: "Rezerwacje stolików to ręczny chaos",
        description:
          "Telefony, Messenger, komentarze pod postem — rezerwacje napływają z każdego miejsca. Formularz rezerwacyjny na stronie zbiera wszystko w jednym miejscu i redukuje pomyłki.",
      },
      {
        title: "TripAdvisor i Google Maps bez strony to za mało",
        description:
          "Profil na portalach to dobry start, ale profesjonalna strona www buduje prawdziwe zaufanie — pokazuje atmosferę lokalu, historię kuchni, specjalności i aktualne menu.",
      },
    ],
    benefits: [
      {
        title: "Menu online z sezonowymi aktualizacjami",
        description:
          "Prezentujemy Twoje menu w czytelnej formie — z cenami, zdjęciami i podziałem na kategorie. Zmiana cen lub dań w ramach abonamentu bez dopłat.",
      },
      {
        title: "Formularz rezerwacji stolika",
        description:
          "Goście rezerwują stolik przez stronę — podają liczbę osób, datę i godzinę. Ty dostajesz powiadomienie e-mail. Koniec z chaosem rezerwacyjnym.",
      },
      {
        title: "Galeria zdjęć dań i lokalu",
        description:
          "Profesjonalna galeria zdjęć jedzenia i wnętrza lokalu. Klient jeszcze przed wyjściem z domu wie, na jaką atmosferę może liczyć.",
      },
      {
        title: "Widoczność w Google Maps",
        description:
          "Konfigurujemy Google Business Profile i pozycjonujemy pod 'restauracja [miasto]', 'kawiarnia [dzielnica]'. Goście znajdą Cię pierwszego.",
      },
      {
        title: "Strona z historią lokalu",
        description:
          "Opowiadamy historię Twojego miejsca, filozofię kuchni, chef's story. To buduje emocjonalną więź z gośćmi i wyróżnia Cię na tle anonimowych restauracji.",
      },
    ],
    leadMagnet: "5 przepisów szefa kuchni, których nigdzie nie znajdziesz — ekskluzywny e-book",
    faq: [
      {
        question: "Czy menu na stronie można często aktualizować?",
        answer:
          "Tak — wyślij nam nowe menu mailem, a my zaktualizujemy je na stronie w ramach abonamentu. Dotyczy to też cen, specjalności tygodnia i sezonowych ofert.",
      },
      {
        question: "Czy strona może obsługiwać rezerwacje stolików?",
        answer:
          "Tak — umieszczamy formularz rezerwacyjny. Można też zintegrować zewnętrzne systemy rezerwacji restauracyjnych, jeśli ich używasz.",
      },
      {
        question: "Czy strona pomoże mi wypromować się na Google Maps?",
        answer:
          "Zdecydowanie. Konfigurujemy Google Business Profile połączony ze stroną, co znacząco poprawia widoczność w lokalnych wynikach wyszukiwania i Maps.",
      },
    ],
  },
  {
    slug: "fotografowie",
    name: "Fotografowie",
    nameDative: "dla fotografa",
    emoji: "camera",
    seo: {
      title: "Strona internetowa dla fotografa | Portfolio fotograficzne | GotowaWitryna",
      description:
        "Profesjonalna strona portfolio dla fotografa. Zbudujemy ją z Twojego Facebooka w 24h — z galerią zdjęć, cennikiem sesji i widocznością w Google. Od 149 zł/mc.",
      keywords: ["strona internetowa fotograf", "portfolio fotografa", "strona www dla fotografa", "strona fotograf ślubny", "strona fotograf noworodkowy", "strona www portfolio foto", "strona dla fotografa", "portfolio fotograficzne"],
    },
    hero: {
      badge: "Strona portfolio dla fotografa",
      headline: "Twoje zdjęcia mówią wszystko.",
      headlineAccent: "Niech mówią to we właściwym miejscu.",
      headlineSuffix: "",
      subheadline:
        "Zbudujemy profesjonalne portfolio fotograficzne z Twoich najlepszych prac — z podziałem na kategorie sesji, cennikiem i formularzem kontaktowym. Gotowe w 24 godziny.",
    },
    painPoints: [
      {
        title: "Facebook niszczy jakość Twoich zdjęć",
        description:
          "Facebook kompresuje zdjęcia i obniża ich jakość. Twoje prace — którymi wyróżniasz się na rynku — wyglądają gorzej niż powinny. Na własnej stronie prezentujesz je w pełnej rozdzielczości.",
      },
      {
        title: "Klienci nie widzą Twojego stylu fotografii od razu",
        description:
          "Na Facebooku styl gubi się wśród przypadkowych postów. Portfolio na stronie www pokazuje spójny styl artystyczny, który przyciąga dokładnie tych klientów, którym pasujesz.",
      },
      {
        title: "Pary młode szukają fotografa ślubnego w Google, nie na FB",
        description:
          "Klient, który planuje sesję, wpisuje w Google 'fotograf ślubny [miasto]' lub 'fotograf noworodkowy [miasto]'. Bez strony www nie ma Cię w tych wynikach.",
      },
    ],
    benefits: [
      {
        title: "Portfolio z podziałem na kategorie",
        description:
          "Sesje ślubne, noworodkowe, biznesowe, produktowe — każda kategoria ma swój dział. Klient od razu trafia do zdjęć, które go interesują.",
      },
      {
        title: "Galeria w pełnej rozdzielczości",
        description:
          "Prezentujemy Twoje prace w najwyższej możliwej jakości — bez kompresji i bez reklam innych fotografów obok.",
      },
      {
        title: "Cennik pakietów fotograficznych",
        description:
          "Przejrzysty cennik sesji z opisem tego, co zawiera każdy pakiet. Klient wie czego się spodziewać i kontaktuje się gotowy do decyzji.",
      },
      {
        title: "Formularz zapytania o termin",
        description:
          "Klienci opisują sesję (rodzaj, data, lokalizacja) przez formularz — Ty dostajesz leady mailem, bez niepotrzebnych rozmów wstępnych.",
      },
      {
        title: "Blog fotograficzny i SEO",
        description:
          "Artykuły o fotografii ślubnej, sesji rodzinnej, przygotowaniach — budują Twój autorytet i pozycję w Google na frazy klientów.",
      },
    ],
    leadMagnet: "Jak wybrać fotografa ślubnego — 10 pytań, które musisz zadać przed podpisaniem umowy",
    faq: [
      {
        question: "Czy mogę mieć stronę z kilkoma galeriami dla różnych typów sesji?",
        answer:
          "Tak — tworzymy oddzielne galerie dla każdej kategorii: sesje ślubne, nasześceńskie, noworodkowe, biznesowe. Klient od razu trafia do zdjęć, które go interesują.",
      },
      {
        question: "Czy zdjęcia na stronie będą wyświetlane w wysokiej jakości?",
        answer:
          "Tak — optymalizujemy zdjęcia pod kątem szybkości ładowania, zachowując przy tym jak najwyższą jakość wizualną. Znacznie lepiej niż na Facebooku czy Instagramie.",
      },
      {
        question: "Czy strona fotografa pomoże mi pojawiać się w Google?",
        answer:
          "Zdecydowanie. Optymalizujemy stronę pod lokalne frazy (np. 'fotograf ślubny Kraków'). Artykuły blogowe o fotografii budują pozycję na dłuższe zapytania klientów.",
      },
    ],
  },
  {
    slug: "trenerzy-personalni",
    name: "Trenerzy personalni",
    nameDative: "dla trenera personalnego",
    emoji: "dumbbell",
    seo: {
      title: "Strona internetowa dla trenera personalnego | GotowaWitryna",
      description:
        "Profesjonalna strona www dla trenera personalnego i fitness coacha. Zbudujemy ją z Twojego Facebooka w 24h — z ofertą treningów i widocznością w Google. Od 149 zł/mc.",
      keywords: ["strona internetowa trener personalny", "strona www personal trainer", "strona dla trenera", "strona fitness coach", "strona trener fitness", "strona www trening personalny", "strona trener personalny"],
    },
    hero: {
      badge: "Strona www dla trenera personalnego",
      headline: "Twoi klienci szukają trenera w Google.",
      headlineAccent: "Zdobadź ich przed konkurencją.",
      headlineSuffix: "",
      subheadline:
        "Zbudujemy stronę Twojej oferty treningowej z Twoich postów z Facebooka — z pakietami treningowymi, transformacjami klientów i formularzem zapisu. Gotowe w 24 godziny.",
    },
    painPoints: [
      {
        title: "Transformacje klientów giną w feedzie Instagrama",
        description:
          "Zdjęcia before/after to Twój najmocniejszy argument sprzedażowy. Na własnej stronie prezentujemy je w dedykowanej sekcji — klient widzi efekty zanim zdecyduje się skontaktować.",
      },
      {
        title: "Klienci nie widzą Twojej filozofii treningu",
        description:
          "To, co Cię wyróżnia jako trenera, ginie w krótkich postach. Strona www daje Ci przestrzeń na opowiedzenie swojej historii, metodologii i podejścia.",
      },
      {
        title: "Pracujesz tylko z klientami z polecenia, a chcesz rosnąć",
        description:
          "Polecenia to podstawa, ale mają swój limit. Strona www + SEO lokalne sprawia, że nowi klienci z Google trafiają bezpośrednio do Ciebie.",
      },
    ],
    benefits: [
      {
        title: "Oferta pakietów treningowych",
        description:
          "Przejrzyste pakiety z opisem zakresu, liczby treningów i cen. Klient wie, co dostaje za swoje pieniądze i kontaktuje się zdecydowany.",
      },
      {
        title: "Galeria transformacji i efektów",
        description:
          "Prezentujemy efekty pracy Twoich klientów (za ich zgodą) — to najsilniejszy dowód społeczny i argument dla nowych klientów.",
      },
      {
        title: "Twoja historia i filozofia treningu",
        description:
          "Certyfikaty, doświadczenie, specjalizacje, podejście do treningu. Klient wybiera trenera, któremu ufa — strona buduje to zaufanie przed pierwszym kontaktem.",
      },
      {
        title: "Formularz zapisu na trening",
        description:
          "Klient wypełnia krótki formularz (cel treningowy, dostępność, poziom zaawansowania) — Ty dostajesz leada i możesz go zakwalifikować przed rozmową.",
      },
      {
        title: "Blog o treningu i żywieniu",
        description:
          "Artykuły o treningach, diecie i lifestyleu — pozycjonują Cię jako eksperta i budują widoczność w Google.",
      },
    ],
    leadMagnet: "Plan treningowy na 4 tygodnie dla początkujących — bezpłatny PDF",
    faq: [
      {
        question: "Czy mogę mieć na stronie plan treningowy do pobrania jako lead magnet?",
        answer:
          "Tak — przygotujemy lead magnet (np. bezpłatny plan treningowy jako PDF), który klient pobiera w zamian za adres e-mail. Budujesz bazę klientów zainteresowanych Twoją ofertą.",
      },
      {
        question: "Czy strona może pokazywać opinie i transformacje moich klientów?",
        answer:
          "Oczywiście — tworzymy sekcję z opiniami i galerią efektów (za zgodą klientów). To najskuteczniejszy element budujący zaufanie nowych klientów.",
      },
      {
        question: "Czy strona trenera pomoże mi zdobywać klientów lokalnie?",
        answer:
          "Tak — optymalizujemy pod frazy 'trener personalny [miasto]'. Artykuły blogowe o treningach budują Twój autorytet ekspercki i widoczność w Google.",
      },
    ],
  },
  {
    slug: "uslugi-dla-domu",
    name: "Usługi dla domu",
    nameDative: "dla usług domowych",
    emoji: "home",
    seo: {
      title: "Strona internetowa dla usług domowych — hydraulik, elektryk, sprzątanie | GotowaWitryna",
      description:
        "Profesjonalna strona www dla hydraulika, elektryka, firmy sprzątającej i innych usług dla domu. Zbudujemy ją z Twojego Facebooka w 24h. Od 149 zł/mc.",
      keywords: ["strona internetowa hydraulik", "strona www elektryk", "strona firma sprzątająca", "strona usługi dla domu", "strona www usługi remontowe", "strona internetowa dla hydraulika", "strona www malarz", "strona instalator"],
    },
    hero: {
      badge: "Strona www dla usług domowych",
      headline: "Klienci szukają hydraulika, elektryka",
      headlineAccent: "i sprzątaczki w Google.",
      headlineSuffix: "Czy Cię tam znajdą?",
      subheadline:
        "Zbudujemy stronę Twojej firmy usługowej z Twoich postów z Facebooka — z listą usług, obszarem działania i formularzem wyceny. Gotowe w 24 godziny.",
    },
    painPoints: [
      {
        title: "Klienci dzwonią w złym momencie po informacje",
        description:
          "Bez strony klient musi dzwonić, żeby dowiedzieć się czy działasz w jego rejonie, co oferujesz i ile to kosztuje. Strona odpowiada na wszystkie te pytania.",
      },
      {
        title: "Ogłoszenia na OLX to wyścig cenowy bez końca",
        description:
          "Na platformach ogłoszeniowych klienci wybierają najtańszego. Własna strona www buduje zaufanie i pozwala komunikować jakość zamiast tylko cenę.",
      },
      {
        title: "Opinia ustna ma swój limit zasięgu",
        description:
          "Polecenia od znajomych to świetne źródło klientów, ale dochodzą do wąskiego kręgu. Strona www z SEO dociera do każdego, kto szuka Twoich usług w okolicy.",
      },
    ],
    benefits: [
      {
        title: "Lista usług i zakres działania",
        description:
          "Przejrzysta lista tego, co robisz, i mapa obszarów, w których działasz. Klient od razu sprawdza, czy dotrze do niego.",
      },
      {
        title: "Formularz wyceny online",
        description:
          "Klient opisuje problem i zostawia kontakt. Ty dostajesz lead mailem i dzwonisz tylko do osób z realnym zapotrzebowaniem.",
      },
      {
        title: "Galeria realizacji",
        description:
          "Zdjęcia wykonanych prac — zainstalowanych urządzeń, naprawionych awarii, efektów sprzątania. Budują zaufanie i wyróżniają Cię na tle konkurencji bez strony.",
      },
      {
        title: "Opinie i referencje",
        description:
          "Prezentujemy opinie klientów — w usługach domowych zaufanie jest kluczowe. Nowy klient chce wiedzieć, że wpuszcza do domu sprawdzoną firmę.",
      },
      {
        title: "Widoczność lokalna w Google",
        description:
          "Optymalizacja pod frazy 'hydraulik [miasto]', 'elektryk [dzielnica]', 'sprzątanie [miasto]'. Artykuły blogowe budują Twoją widoczność miesiąc po miesiącu.",
      },
    ],
    leadMagnet: "10 najczęstszych awarii domowych i kiedy wezwać fachowca — praktyczny poradnik",
    faq: [
      {
        question: "Czy strona może pokazywać obszar, na którym działam?",
        answer:
          "Tak — umieszczamy listę miejscowości i dzielnic, w których świadczysz usługi. Możemy też dodać mapę. To eliminuje niepotrzebne zapytania spoza Twojego zasięgu.",
      },
      {
        question: "Czy strona hydraulika lub elektryka jest trudna w utrzymaniu?",
        answer:
          "Nie — o to dbamy my. Aktualizacje, bezpieczeństwo, hosting, zmiany treści — wszystko w cenie abonamentu. Ty skupiasz się na pracy, my na stronie.",
      },
      {
        question: "Jak szybko zacznę pojawiać się w Google po uruchomieniu strony?",
        answer:
          "Pierwsze efekty SEO pojawiają się zwykle po 4-8 tygodniach. Z każdym miesiącem i artykułem blogowym Twoja pozycja rośnie. To inwestycja, która działa przez lata.",
      },
    ],
  },
  {
    slug: "rzemieslnicy-artysci",
    name: "Rzemięślnicy i artyści",
    nameDative: "dla rzemięślnika i artysty",
    emoji: "palette",
    seo: {
      title: "Strona internetowa dla rzemięślnika i artysty | GotowaWitryna",
      description:
        "Profesjonalna strona portfolio dla rzemięślnika, artysty i twórcy. Zbudujemy ją z Twojego Facebooka w 24h — z galerią prac, sklepem i widocznością w Google. Od 149 zł/mc.",
      keywords: ["strona internetowa rzemięślnik", "strona portfolio artysta", "strona www twórca", "strona sklep rękodziełnictwo", "strona dla artysty", "strona www rękodziełnictwo", "strona internetowa kowal", "strona stolarz"],
    },
    hero: {
      badge: "Strona www dla rzemięślnika i artysty",
      headline: "Twoje rzemiosło jest wyjątkowe.",
      headlineAccent: "Czas, żeby świat to zobaczył.",
      headlineSuffix: "",
      subheadline:
        "Zbudujemy profesjonalne portfolio lub sklep online z Twoich prac — z galerią realizacji, formularzem zamówień i widocznością w Google. Gotowe w 24 godziny.",
    },
    painPoints: [
      {
        title: "Twoje prace zasługują na lepszą prezentację niż Facebook",
        description:
          "Rękodzieło i sztuka potrzebują przestrzeni. Własna strona www prezentuje Twoje prace w spójnej, estetycznej galerii — bez reklam, bez chaosu, bez kompresji zdjęć.",
      },
      {
        title: "Klienci nie wiedzą jak zamówić Twoje wyroby",
        description:
          "Bez jasnego procesu zamówień klienci rezygnują. Strona www z formularzem zamówień i opisem procesu produkcji zamienia zainteresowanie w sprzedaż.",
      },
      {
        title: "Platformy handlowe pobierają prowizję i chowają Cię wśród setek innych",
        description:
          "Na Etsy czy Allegro konkurujesz z tysiącami twórców, a platforma pobiera prowizje. Własna strona to Twój prywatny sklep — zero prowizji, pełna kontrola nad marką.",
      },
    ],
    benefits: [
      {
        title: "Galeria prac i portfolio",
        description:
          "Prezentujemy Twoje realizacje w profesjonalnej galerii — z opisami techniki, materiałów i możliwości personalizacji. Klient widzi Twój styl i chce właśnie Twoje prace.",
      },
      {
        title: "Formularz zamówień indywidualnych",
        description:
          "Klient opisuje swoje wymagania, rozmiar, materiały, termin. Ty dostajesz kompletne zapytanie i możesz wycenić pracę bez tłumaczenia wszystkiego od nowa.",
      },
      {
        title: "Twoja historia i proces twórczy",
        description:
          "Opowiadamy Twoją historię jako twórcy — skąd pochodzi Twoja pasja, jak powstają Twoje wyroby, jakie materiały używasz.",
      },
      {
        title: "Sklep online (opcjonalnie)",
        description:
          "Możemy dodać sklep online do sprzedaży gotowych prac — klienci zamawiają i płacą bezpośrednio na stronie.",
      },
      {
        title: "Widoczność w Google",
        description:
          "Pozycjonowanie na frazy 'meble na zamówienie [miasto]', 'biżuteria handmade [miasto]'. Blog o procesie twórczym buduje zasięg organiczny.",
      },
    ],
    leadMagnet: "Jak wybrać idealny prezent na zamówienie — poradnik dla kupujących rękodzieło",
    faq: [
      {
        question: "Czy mogę sprzedawać swoje prace bezpośrednio przez stronę?",
        answer:
          "Tak — w pakietach Biznes i Premium możemy zintegrować sklep online lub formularz zamówień z płatnością. Klienci zamawiają i płacą bezpośrednio na Twojej stronie.",
      },
      {
        question: "Czy strona pomoże mi dotrzeć do klientów szukających rękodzieła?",
        answer:
          "Tak — optymalizujemy pod frazy specyficzne dla Twojej specjalizacji (np. 'meble z drewna na zamówienie Warszawa'). Artykuły o procesie twórczym budują zasięg na dłuższe frazy.",
      },
      {
        question: "Jak często mogę aktualizować galerię o nowe prace?",
        answer:
          "Kiedy chcesz — wyślij nam zdjęcia mailem, a my dodajemy je do galerii w ramach abonamentu. Bez limitów, bez dodatkowych opłat.",
      },
    ],
  },
  {
    slug: "doradcy-konsultanci",
    name: "Doradcy i konsultanci",
    nameDative: "dla doradcy i konsultanta",
    emoji: "chart",
    seo: {
      title: "Strona internetowa dla doradcy i konsultanta | GotowaWitryna",
      description:
        "Profesjonalna strona www dla doradcy biznesowego, konsultanta i coacha. Zbudujemy ją z Twojego Facebooka w 24h — z ofertą, artykułami eksperckimi i formularzem. Od 149 zł/mc.",
      keywords: ["strona internetowa doradca biznesowy", "strona www konsultant", "strona dla doradcy", "strona coach", "strona www doradca finansowy", "strona internetowa dla konsultanta", "strona doradca prawny", "strona ekspert"],
    },
    hero: {
      badge: "Strona www dla doradcy i konsultanta",
      headline: "Twoja wiedza to Twój produkt.",
      headlineAccent: "Niech strona www sprzedaje ją za Ciebie.",
      headlineSuffix: "",
      subheadline:
        "Zbudujemy profesjonalną stronę ekspercką z Twoich postów z Facebooka — z ofertą usług, artykułami budującymi autorytet i formularzem zapytań. Gotowe w 24 godziny.",
    },
    painPoints: [
      {
        title: "Klienci nie mogą ocenić Twojej ekspertyzy bez strony",
        description:
          "Zanim klient zapłaci za konsultację, chce sprawdzić Twój autorytet. Profesjonalna strona z case studies, artykułami i certyfikatami buduje ten autorytet przed pierwszym kontaktem.",
      },
      {
        title: "LinkedIn nie zastępuje własnej strony",
        description:
          "LinkedIn jest dobry do sieci kontaktów, ale nie do pozycjonowania w Google. Własna strona to Twoja platforma — bez algorytmów, z pełną kontrolą przekazu.",
      },
      {
        title: "Polecenia od klientów mają naturalny limit",
        description:
          "Dobry doradca rośnie przez polecenia — ale to ograniczone źródło. Strona www ze sprawnym SEO sprawia, że klienci szukający Twoich usług w Google trafiają bezpośrednio do Ciebie.",
      },
    ],
    benefits: [
      {
        title: "Strona usług i procesów pracy",
        description:
          "Jasno opisana oferta, proces współpracy krok po kroku, typowe wyniki dla klientów. Klient rozumie co dostaje i jak wygląda praca z Tobą.",
      },
      {
        title: "Sekcja o Tobie i Twoim doświadczeniu",
        description:
          "Historia zawodowa, certyfikaty, specjalizacje, klientela. Budujesz zaufanie i autorytet eksperta — nawet zanim klient się z Tobą skontaktuje.",
      },
      {
        title: "Case studies i wyniki klientów",
        description:
          "Prezentujemy konkretne rezultaty Twojej pracy (anonimowo lub za zgodą klienta). To najsilniejszy argument dla nowych klientów B2B.",
      },
      {
        title: "Blog ekspercki z artykułami SEO",
        description:
          "Co miesiąc artykuły w Twojej dziedzinie — budują autorytet, pozycję w Google i przyciągają klientów, którzy szukają odpowiedzi na konkretne pytania biznesowe.",
      },
      {
        title: "Formularz zapytania i kwalifikacji",
        description:
          "Klient opisuje swój problem i potrzeby przez formularz. Ty kwalifikujesz leady przed rozmową — rozmawiasz tylko z osobami, którym możesz realnie pomóc.",
      },
    ],
    leadMagnet: "5 błędów, które kosztują firmy tysiące złotych rocznie — bezpłatny raport eksperta",
    faq: [
      {
        question: "Czy strona doradcy może mieć blog ekspercki?",
        answer:
          "Tak — w każdym pakiecie tworzymy blog z artykułami. Co miesiąc publikujemy materiały eksperckie w Twojej dziedzinie, optymalizowane pod SEO. Budujesz autorytet i widoczność jednocześnie.",
      },
      {
        question: "Czy mogę mieć stronę w języku angielskim na potrzeby klientów zagranicznych?",
        answer:
          "Tak — możemy stworzyć dwujęzyczną stronę lub osobną wersję anglojęzyczną. Omów to z nami przy zamówieniu demo.",
      },
      {
        question: "Jak strona doradcy różni się od zwykłej strony firmowej?",
        answer:
          "Strona doradcy kładzie nacisk na autorytet eksperta: Twoją historię, certyfikaty, case studies i artykuły. To strona, która sprzedaje Twoją wiedzę — a nie tylko listę usług.",
      },
    ],
  },
  {
    slug: "uslugi-dla-zwierzat",
    name: "Usługi dla zwierząt",
    nameDative: "dla usług dla zwierząt",
    emoji: "paw",
    seo: {
      title: "Strona internetowa dla groomera, weterynarza i hotelu dla zwierząt | GotowaWitryna",
      description:
        "Profesjonalna strona www dla groomera, weterynarza, hotelu dla psów i kota oraz innych usług dla zwierząt. Zbudujemy ją z Twojego Facebooka w 24h. Od 149 zł/mc.",
      keywords: ["strona internetowa groomer", "strona www salon dla psów", "strona weterynarz", "strona hotel dla zwierząt", "strona www usługi dla zwierząt", "strona dla groomera", "strona internetowa psi fryzjer", "strona opieka nad zwierzętami"],
    },
    hero: {
      badge: "Strona www dla usług dla zwierząt",
      headline: "Właściciele zwierząt szukają Cię w Google.",
      headlineAccent: "Bądź pierwszym wyborem w Twojej okolicy.",
      headlineSuffix: "",
      subheadline:
        "Zbudujemy stronę Twojego salonu dla psów, hotelu dla zwierząt lub kliniki z Twoich postów na Facebooku — z galerią, cennikiem i rezerwacją. Gotowe w 24 godziny.",
    },
    painPoints: [
      {
        title: "Właściciele zwierząt ufają tylko sprawdzonym opiniom",
        description:
          "Przed powierzeniem psa groomerowi lub hotelowi, właściciel szuka opinii. Strona www z sekcją recenzji, galerią zwierząt i opisem procesu opieki buduje zaufanie przed pierwszym telefonem.",
      },
      {
        title: "Terminy groomerów są zajęte przez stałych klientów",
        description:
          "Nowi klienci nie wiedzą kiedy mają wolny termin. Strona z informacją o dostępności lub formularzem zapisu sprawia, że dochodzą do Ciebie gotowi na konkretny termin.",
      },
      {
        title: "Bez strony tracisz klientów przeprowadzających się do okolicy",
        description:
          "Nowy mieszkaniec, który szuka 'groomer [dzielnica]' w Google, trafi do konkurencji, jeśli Cię tam nie ma. Strona www + Google Maps to Twój stały kanał pozyskiwania nowych klientów.",
      },
    ],
    benefits: [
      {
        title: "Galeria zadowolonych zwierząt",
        description:
          "Zdjęcia psów i kotów po zabiegach groomerskich, szczęśliwych gości hotelu, pacjentów — najbardziej angażująca treść w mediach społecznościowych przekuta w portfolio.",
      },
      {
        title: "Cennik usług i pakietów",
        description:
          "Jasny cennik groomerski, cennik hotelu (za dobę, z wyżywieniem, z zabawą) lub cennik weterynaryjny. Właściciel planuje wizytę, znając koszty z góry.",
      },
      {
        title: "Formularz rezerwacji",
        description:
          "Właściciel wybiera usługę, podaje rasę i wagę zwierzaka, wybiera termin. Ty dostajesz kompletne zgłoszenie mailem — mniej rozmów wstępnych.",
      },
      {
        title: "Informacje o zasadach opieki",
        description:
          "Opisujemy Twoje standardy pracy, używane produkty, certyfikaty. Właściciele zwierząt są wymagający — szczegóły na stronie przekonują ich zanim pojawi się konkurencja.",
      },
      {
        title: "Widoczność lokalna w Google",
        description:
          "Pozycjonowanie na frazy 'groomer [miasto]', 'hotel dla psów [miasto]'. Blog o pielęgnacji i opiece nad zwierzętami buduje zasięg organiczny miesiąc po miesiącu.",
      },
    ],
    leadMagnet: "Jak przygotować psa do pierwszej wizyty u groomera — poradnik dla właściciela",
    faq: [
      {
        question: "Czy strona może mieć galerię zdjęć zwierząt po zabiegach?",
        answer:
          "Oczywiście — to jeden z najważniejszych elementów. Tworzymy galerię z najpiękniejszymi efektami Twojej pracy. Wyślij nam zdjęcia, a my regularnie ją aktualizujemy.",
      },
      {
        question: "Czy właściciele mogą rezerwować terminy przez stronę?",
        answer:
          "Tak — formularz rezerwacji zbiera wszystkie niezbędne informacje (rasa, waga, usługa, termin). Możliwa też integracja z zewnętrznymi systemami rezerwacji.",
      },
      {
        question: "Czy strona pomoże mi pojawiać się w Google Maps?",
        answer:
          "Tak — konfigurujemy Google Business Profile połączony ze stroną. Twój salon lub hotel pojawia się w mapach lokalnych dla właścicieli zwierząt szukających usług w okolicy.",
      },
    ],
  },
  {
    slug: "transport-przeprowadzki",
    name: "Transport i przeprowadzki",
    nameDative: "dla firmy transportowej",
    emoji: "truck",
    seo: {
      title: "Strona internetowa dla firmy transportowej i przeprowadzek | GotowaWitryna",
      description:
        "Profesjonalna strona www dla firmy transportowej, przeprowadzkowej i kurierskiej. Zbudujemy ją z Twojego Facebooka w 24h — z cennikiem, wycenami i widocznością w Google. Od 149 zł/mc.",
      keywords: ["strona internetowa firma transportowa", "strona www przeprowadzki", "strona dla firmy przeprowadzkowej", "strona transport", "strona www usługi transportowe", "strona internetowa dla przewoźnika", "strona przeprowadzki cennik", "strona bus do przeprowadzki"],
    },
    hero: {
      badge: "Strona www dla firmy transportowej",
      headline: "Klienci szukają firmy do przeprowadzki",
      headlineAccent: "w Google, nie na OLX.",
      headlineSuffix: "",
      subheadline:
        "Zbudujemy stronę Twojej firmy transportowej z Twoich postów z Facebooka — z cennikiem, formularzem wyceny i opiniami klientów. Gotowe w 24 godziny.",
    },
    painPoints: [
      {
        title: "Na OLX i platformach wygrywasz tylko ceną",
        description:
          "Portale ogłoszeniowe to wyścig do dna — klient wybiera najtańszego, bez względu na jakość. Własna strona pozwala komunikować wartość: terminowość, ostrożność, doświadczenie.",
      },
      {
        title: "Klienci boją się powierzyć dobytek nieznanej firmie",
        description:
          "Przeprowadzka to stres. Klient, który nie może sprawdzić Cię w internecie, wybiera firmę ze stroną pełną zdjęć, opinii i informacji. Bez tego odpadasz przy pierwszej selekcji.",
      },
      {
        title: "Wyceny telefoniczne zajmują godziny tygodniowo",
        description:
          "Bez formularza na stronie każdy klient dzwoni z tymi samymi pytaniami. Formularz wyceny zbiera wszystkie dane (metraż, odległość, piętro, terminy) zanim porozmawiasz.",
      },
    ],
    benefits: [
      {
        title: "Formularz wyceny przeprowadzki",
        description:
          "Klient podaje metraż mieszkania, odległość, piętro, termin i specjalne wymagania. Ty dostajesz kompletne dane do przygotowania oferty — bez rozmowy wstępnej.",
      },
      {
        title: "Cennik i pakiety usług",
        description:
          "Orientacyjny cennik (np. za km, za godzinę, za metraż) lub pakiety przeprowadzkowe. Klient widzi rząd wielkości cen i kontaktuje się gotowy na realne rozmowy.",
      },
      {
        title: "Flota i możliwości techniczne",
        description:
          "Opisujemy Twoją flotę, ładowność, zasięg, dostępne usługi dodatkowe (pakowanie, wnoszenie). Klient ocenia czy możesz zrealizować jego zlecenie.",
      },
      {
        title: "Opinie i referencje",
        description:
          "W transporcie zaufanie to podstawa. Prezentujemy opinie zadowolonych klientów i liczbę zrealizowanych przeprowadzek — to Twój najmocniejszy argument.",
      },
      {
        title: "Widoczność lokalna i regionalna",
        description:
          "Pozycjonowanie na frazy 'przeprowadzki [miasto]', 'firma transportowa [region]'. Blog z poradami przeprowadzkowymi buduje Twoją pozycję w Google.",
      },
    ],
    leadMagnet: "Kompletna checklista przeprowadzki — co zrobić tydzień, dzień i w dniu przeprowadzki",
    faq: [
      {
        question: "Czy strona może obsługiwać zapytania o wycenę?",
        answer:
          "Tak — formularz wyceny zbiera wszystkie potrzebne informacje: lokalizacje, metraż, piętro, termin, specjalne wymagania. Ty dostajesz kompletne zapytanie mailem i możesz przygotować ofertę.",
      },
      {
        question: "Czy mogę na stronie pokazać swoją flotę i możliwości?",
        answer:
          "Oczywiście — tworzymy sekcję o flocie (rodzaje aut, ładowność, dostępne usługi). Klient od razu sprawdza, czy możesz obsłużyć jego przeprowadzkę.",
      },
      {
        question: "Jak szybko zacznę dostawać zapytania ze strony?",
        answer:
          "Pierwsze zapytania mogą pojawić się już w pierwszych tygodniach. Wyniki SEO rosną z każdym miesiącem — po 3-6 miesiącach strona staje się regularnym źródłem leadów.",
      },
    ],
  },
];

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getAllSlugs(): string[] {
  return industries.map((i) => i.slug);
}
