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
        "Profesjonalna strona www dla salonu fryzjerskiego i barbera. Zbudujemy ja z Twojego Facebooka w 24h -- z galeria stylizacji, cennikiem i widocznoscia w Google. Od 149 zl/mc.",
      keywords: [
        "strona internetowa dla fryzjera",
        "strona www salon fryzjerski",
        "strona dla barbera",
        "strona barber shop",
        "strona fryzjerska",
        "strona www fryzjer",
        "strona internetowa salon fryzjerski",
      ],
    },
    hero: {
      badge: "Strona www dla fryzjera i barbera",
      headline: "Klienci szukaja fryzjera w Google.",
      headlineAccent: "Czy Cie tam znajda?",
      headlineSuffix: "",
      subheadline:
        "Zbudujemy profesjonalna strone Twojego salonu z Twoich postow na Facebooku -- z galeria stylizacji, cennikiem uslug i formularzem rezerwacji. Gotowe w 24 godziny. Bez Twojego zaangazowania.",
    },
    painPoints: [
      {
        title: "Rezerwacje przez Messengera to strata czasu",
        description:
          "Bez strony www kazde zapytanie o termin trafia na Twoj prywatny czat. Strona internetowa automatyzuje ten proces -- klient widzi oferte i zostawia kontakt, a Ty dostajesz zgloszenie mailem.",
      },
      {
        title: "Twoje stylizacje gina w chaosie postow na FB",
        description:
          "Galeria na Facebooku jest nieuporz?dkowana i trudna w przegladaniu. Strona www prezentuje Twoje realizacje jak profesjonalne portfolio -- kazda stylizacja widoczna od razu, na kazdym urzadzeniu.",
      },
      {
        title: "Konkurencyjne salony sa wyzej w Google Maps",
        description:
          "Gdy klient wpisuje 'fryzjer [Twoje miasto]', na gorze wyskakuja salony ze stronami www. Bez wlasnej strony i skonfigurowanego Google Business Profile jestes dla tej grupy klientow niewidoczny.",
      },
    ],
    benefits: [
      {
        title: "Galeria stylizacji i realizacji",
        description:
          "Prezentujemy Twoje najlepsze prace w estetycznej galerii zdiec. Klient widzi poziom Twojej pracy zanim w ogole zadzwoni.",
      },
      {
        title: "Cennik uslug fryzjerskich",
        description:
          "Przejrzysty cennik strzy?enia, koloryzacji, zabiegow i barbering -- klienci wiedza czego sie spodziewac i nie pytaja o ceny na Messengerze.",
      },
      {
        title: "Formularz rezerwacji i kontaktowy",
        description:
          "Klienci moga zostawiac prosbe o termin przez strone -- Ty dostajesz powiadomienie e-mail. Mozemy tez zintegrowac zewnetrzny system rezerwacji.",
      },
      {
        title: "Widocznosc w Google na frazy lokalne",
        description:
          "Optymalizujemy strone pod 'fryzjer [miasto]', 'barber [miasto]'. Co miesiac publikujemy artykul blogowy, ktory stopniowo buduje Twoja pozycje.",
      },
      {
        title: "Lead magnet branzowy",
        description:
          "Przygotowujemy darmowy poradnik, ktory zbiera maile klientek -- masz gotowa baze do powiadomien o promocjach.",
      },
    ],
    leadMagnet: "Jak dbac o wlosy po koloryzacji -- poradnik dla klientek salonu",
    faq: [
      {
        question: "Czy na stronie fryzjera moge zbierac rezerwacje online?",
        answer:
          "Tak. Umieszczamy formularz kontaktowy, przez ktory klienci prosza o termin. Mozemy tez zintegrowac zewnetrzny system rezerwacji (np. Booksy, Calendly) jesli go uzywasz.",
      },
      {
        question: "Czy galeria stylizacji bedzie na biezaco aktualizowana?",
        answer:
          "Tak -- wyslij nam nowe zdjecia mailem, a my dodamy je do galerii w ramach miesiecznego abonamentu. Bez dodatkowych oplat, bez limitow zdiec.",
      },
      {
        question: "Czy strona pomoze mi pojawiac sie w Google Maps?",
        answer:
          "Tak. Konfigurujemy Twoj Google Business Profile, dzieki czemu salon pojawia sie w wynikach Google Maps i lokalnych wynikach wyszukiwania na frazy 'fryzjer [miasto]'.",
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
        "Profesjonalna strona www dla salonu kosmetycznego i beauty. Zbudujemy ja z Twojego Facebooka w 24h -- z galeria efektow, cennikiem zabiegow i widocznoscia w Google. Od 149 zl/mc.",
      keywords: [
        "strona internetowa salon kosmetyczny",
        "strona www salon beauty",
        "strona dla kosmetyczki",
        "strona salon urody",
        "strona kosmetyczna",
        "strona www manicure",
        "strona internetowa dla kosmetyczki",
      ],
    },
    hero: {
      badge: "Strona www dla salonu kosmetycznego",
      headline: "Twoje zabiegi zasluguja na",
      headlineAccent: "profesjonalna wizytowke",
      headlineSuffix: "w internecie.",
      subheadline:
        "Zbudujemy strone Twojego salonu beauty z najlepszych zdiec z Facebooka -- z galeria efektow, cennikiem zabiegow i mozliwoscia rezerwacji. Gotowe w 24 godziny.",
    },
    painPoints: [
      {
        title: "Klientki nie moga znalezc Twojego cennika",
        description:
          "Bez strony kazda zainteresowana musi pisac wiadomosc lub dzwonic, zeby zapytac o ceny. Strona www z przejrzystym cennikiem odpowiada na to pytanie 24/7.",
      },
      {
        title: "Efekty zabiegow gina wsrod przypadkowych postow",
        description:
          "Facebook miesza Twoje realizacje z innymi postami. Strona www to dedykowana galeria before/after -- klientka widzi Twoj poziom od razu, bez scrollowania.",
      },
      {
        title: "Nowe klientki wybieraja salony widoczne w Google",
        description:
          "Szukajac 'salon kosmetyczny [miasto]' Google wyswietla najpierw firmy ze stronami internetowymi. Jesli Cie tam nie ma, tracisz klientki, ktore nigdy o Tobie nie slyszaly.",
      },
    ],
    benefits: [
      {
        title: "Galeria efektow i zdiec before/after",
        description:
          "Pokazujemy efekty Twoich zabiegow -- manicure, stylizacji rz?s, depilacji czy pielegnacji twarzy. Klientka widzi jakosc zanim przyjdzie na wizyte.",
      },
      {
        title: "Cennik zabiegow i pakiety",
        description:
          "Przejrzysty cennik podzielony na kategorie zabiegow. Koniec z pytaniami o ceny na czacie -- klientka znajdzie wszystko na stronie.",
      },
      {
        title: "Formularz rezerwacji online",
        description:
          "Klientki zostawiaja prosbe o termin przez formularz -- Ty dostajesz powiadomienie. Mozliwa integracja z Booksy lub innym systemem rezerwacji.",
      },
      {
        title: "Blog o pielegnacji i urodzie",
        description:
          "Co miesiac publikujemy artykuly o pielegnacji paznokci, skory czy rz?s -- pozycjonowane pod frazy, ktorych szukaja Twoje klientki.",
      },
      {
        title: "Lead magnet beauty",
        description:
          "Darmowy material zbierajacy maile przyszlych klientek -- np. poradnik o pielegnacji skory.",
      },
    ],
    leadMagnet: "5 bledow w pielegnacji skory, ktore popelnia kazda kobieta -- bezplatny przewodnik",
    faq: [
      {
        question: "Czy strona moze pokazywac efekty moich zabiegow?",
        answer:
          "Tak -- tworzymy dedykowana galerie realizacji z opisami zabiegow. Mozesz przesylac nam nowe zdjecia w kazdej chwili, a my dodajemy je w ramach abonamentu.",
      },
      {
        question: "Czy moge miec osobne podstrony dla kazdego rodzaju zabiegu?",
        answer:
          "W pakietach Biznes i Premium tworzymy strone multi-page -- mozesz miec oddzielne podstrony dla manicure, stylizacji rz?s, zabiegow na twarz i innych uslug.",
      },
      {
        question: "Czy strona pomoze mi zbierac stale klientki?",
        answer:
          "Tak -- lead magnet (np. bezplatny poradnik do pobrania) zbiera adresy e-mail zainteresowanych klientek. Masz baze, do ktorej mozesz wysylac informacje o promocjach i nowosc iach.",
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
        "Profesjonalna strona www dla warsztatu samochodowego i mechanika. Zbudujemy ja z Twojego Facebooka w 24h -- z cennikiem uslug, galeria realizacji i widocznoscia w Google. Od 149 zl/mc.",
      keywords: [
        "strona internetowa warsztat samochodowy",
        "strona www dla mechanika",
        "strona serwis samochodowy",
        "strona mechanik",
        "strona dla warsztatu",
        "strona www auto serwis",
        "strona internetowa mechanik samochodowy",
      ],
    },
    hero: {
      badge: "Strona www dla warsztatu samochodowego",
      headline: "Kierowcy szukaja mechanika w Google.",
      headlineAccent: "Czy Twoj warsztat jest tam widoczny?",
      headlineSuffix: "",
      subheadline:
        "Zbudujemy profesjonalna strone Twojego warsztatu z Twoich postow na Facebooku -- z lista uslug, cennikiem, galeria realizacji i opinia klientow. Gotowe w 24 godziny.",
    },
    painPoints: [
      {
        title: "Klienci dzwonia, zamiast znalezc odpowiedz na stronie",
        description:
          "Bez strony www klienci musza dzwonic po kazda informacje -- ceny, godziny otwarcia, dostepnosc. Strona odpowiada na te pytania automatycznie, uwalniajac Twoj czas.",
      },
      {
        title: "Opinie klientow sa rozproszone po Facebooku i Google",
        description:
          "Dobre opinie to najskuteczniejszy argument sprzedazowy w motoryzacji. Strona www zbiera je w jednym miejscu i prezentuje nowym klientom, zanim zdecyduja sie zadzwonic.",
      },
      {
        title: "Nowy serwis w okolicy kradnie Twoich klientow dzieki stronie www",
        description:
          "Kierowca, ktory widzi profesjonalna strone konkurencji, a Ciebie tylko jako stary profil FB -- wybierze konkurencje. Strona to sygnal: ten warsztat jest godny zaufania.",
      },
    ],
    benefits: [
      {
        title: "Lista uslug i cennik",
        description:
          "Przejrzysta lista: wymiana opon, przeglady, diagnostyka, naprawy -- z orientacyjnymi cenami. Klient wie czego sie spodziewac i nie pyta przez telefon.",
      },
      {
        title: "Galeria realizacji i napraw",
        description:
          "Zdjecia skomplikowanych napraw, zmodyfikowanych aut, wymian sezonowych. Buduja zaufanie i pokazuja poziom Twojego warsztatu.",
      },
      {
        title: "Opinie klientow w widocznym miejscu",
        description:
          "Prezentujemy opinie klientow z Google i Facebooka na stronie glownej. Nowy klient od razu widzi, ze moze Ci zaufac.",
      },
      {
        title: "Formularz wyceny i rezerwacji",
        description:
          "Klient opisuje problem, zostawia dane -- Ty dostajesz lead mailem. Bez odbierania telefonow w srodku naprawy.",
      },
      {
        title: "Widocznosc w Google lokalnie",
        description:
          "Optymalizacja pod 'mechanik [miasto]', 'wymiana opon [miasto]'. Google Business Profile skonfigurowany -- Twoj warsztat pojawia sie w Maps.",
      },
    ],
    leadMagnet: "Kiedy warto wymienic opony -- praktyczny kalendarz kierowcy",
    faq: [
      {
        question: "Czy strona warsztatu moze przyjmowac zapisy online?",
        answer:
          "Tak -- formularz na stronie zbiera zgloszenia (opis problemu, kontakt, preferowany termin) i przesyla je mailem do Ciebie. Mozemy tez zintegrowac prosty kalendarz rezerwacji.",
      },
      {
        question: "Czy moge pokazywac na stronie ceny uslug?",
        answer:
          "Oczywiscie. Umieszczamy cennik lub orientacyjne wiidelki cenowe. Klienci chetniej kontaktuja sie, gdy wiedza mniej wiecej ile zap?aca -- to usuwa bariere pierwszego kontaktu.",
      },
      {
        question: "Czy strona pomoze mi zdobywac klientow spoza stalej bazy?",
        answer:
          "Tak -- artykuly blogowe (np. 'kiedy wymienic klocki hamulcowe', 'jak przygotowac auto do zimy') pozycjonuja Twoj warsztat na frazy, ktorych szukaja nowi kierowcy w Twojej okolicy.",
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
        "Profesjonalna strona www dla firmy budowlanej, remontowej i wykonczeniowej. Zbudujemy ja z Twojego Facebooka w 24h -- z portfolio realizacji, wycena i widocznoscia w Google. Od 149 zl/mc.",
      keywords: [
        "strona internetowa firma budowlana",
        "strona www firma remontowa",
        "strona dla firmy budowlanej",
        "strona ekipa remontowa",
        "strona www wykonczenia",
        "strona internetowa budowlanka",
        "strona dla ekipy remontowej",
      ],
    },
    hero: {
      badge: "Strona www dla firmy budowlanej",
      headline: "Twoje realizacje buduja zaufanie.",
      headlineAccent: "Pokaz je na profesjonalnej stronie.",
      headlineSuffix: "",
      subheadline:
        "Zbudujemy strone Twojej firmy remontowej z Twoich zdiec realizacji z Facebooka -- z portfolio, wycena online i widocznoscia w Google. Gotowe w 24 godziny.",
    },
    painPoints: [
      {
        title: "Klienci nie moga ocenic jakosci Twojej pracy bez portfolio",
        description:
          "Zdjecia na FB sa nieuporz?dkowane i nieczytelne. Portfolio na stronie www prezentuje Twoje najlepsze realizacje -- zanim i po remoncie -- i przekonuje klienta zanim w ogole zadzwoni.",
      },
      {
        title: "Zapytania o wycene trafiaja do dziesiatek firm naraz",
        description:
          "Klient, ktory nie moze ocenic Twojego poziomu z internetu, pyta o wycene wszystkich z rzedu. Profesjonalna strona wyróznia Cie z tlumu i sprawia, ze klient chce wlasnie Ciebie.",
      },
      {
        title: "Firmy ze stronami www dostaja wiecej zlecen",
        description:
          "Badania pokazuja, ze ponad 70% klientow sprawdza firme w internecie przed zleceniem remontu. Bez strony odpadasz juz na pierwszym etapie -- zanim w ogole porozmawiasz z klientem.",
      },
    ],
    benefits: [
      {
        title: "Portfolio realizacji before/after",
        description:
          "Prezentujemy Twoje najlepsze remonty, wykonczenia i budowy -- z opisami, zakresem prac i zdjeciami. Klient natychmiast widzi Twoj poziom.",
      },
      {
        title: "Formularz wyceny",
        description:
          "Klient opisuje projekt (metraz, zakres prac, miasto) przez formularz -- Ty dostajesz lead mailem i mozesz przygotowac wycene.",
      },
      {
        title: "Lista uslug budowlanych",
        description:
          "Remonty mieszkan, wykonczenia pod klucz, malowanie, glazura, instalacje -- wszystko jasno opisane.",
      },
      {
        title: "Opinie i referencje",
        description:
          "Zbieramy i prezentujemy opinie zadowolonych klientow -- w branzy remontowej to najsilniejszy argument.",
      },
      {
        title: "Widocznosc lokalna w Google",
        description:
          "Pozycjonowanie na frazy 'firma remontowa [miasto]', 'wykonczenie mieszkania [region]'. Artykuly blogowe buduja autorytet i pozycje w wyszukiwarce.",
      },
    ],
    leadMagnet: "Jak zaplanowac remont mieszkania krok po kroku -- praktyczny checklist",
    faq: [
      {
        question: "Czy na stronie moge pokazac konkretne realizacje z opisem?",
        answer:
          "Tak -- tworzymy strone portfolio z opisem kazdej realizacji: zakres prac, czas realizacji, lokalizacja. Ceny mozna podac orientacyjnie lub jako wycene indywidualna.",
      },
      {
        question: "Czy strona pomoze mi zdobywac klientow z danego regionu?",
        answer:
          "Tak -- optymalizujemy strone pod lokalne frazy (np. 'remonty mieszkan Warszawa Mokotow'). Co miesiac publikujemy artykuly branzowe, ktore buduja Twoja widocznosc w Google w wybranym obszarze.",
      },
      {
        question: "Co to jest lead magnet dla firmy remontowej?",
        answer:
          "Przygotujemy np. bezplatny checklist 'Jak zaplanowac remont mieszkania krok po kroku'. Klient pobiera go ze strony w zamian za adres e-mail -- Ty dostajesz kontakt do osoby planujacej remont.",
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
        "Profesjonalna strona www dla restauracji, kawiarni i baru. Zbudujemy ja z Twojego Facebooka w 24h -- z menu, rezerwacja stolika i widocznoscia w Google. Od 149 zl/mc.",
      keywords: [
        "strona internetowa restauracja",
        "strona www kawiarnia",
        "strona dla restauracji",
        "strona gastronomia",
        "strona www menu restauracja",
        "strona internetowa bar",
        "strona dla gastronomii",
        "strona restauracja online",
      ],
    },
    hero: {
      badge: "Strona www dla restauracji",
      headline: "Gdzie zjesc w Twoim miescie?",
      headlineAccent: "Twoja restauracja musi byc pierwsza w Google.",
      headlineSuffix: "",
      subheadline:
        "Zbudujemy strone Twojej restauracji lub kawiarni z Twoich zdiec z Facebooka -- z menu, rezerwacja stolika i widocznoscia w Google Maps. Gotowe w 24 godziny.",
    },
    painPoints: [
      {
        title: "Klienci nie moga znalezc Twojego menu online",
        description:
          "Goscie szukaja menu przed wizyta -- jesli nie ma go na stronie, wybieraja restauracje, gdzie menu jest dostepne od razu. Bez strony tracisz tych klientow juz na etapie wyszukiwania.",
      },
      {
        title: "Rezerwacje stoliko to reczny chaos",
        description:
          "Telefony, Messenger, komentarze pod postem -- rezerwacje naplywaja z kazdego miejsca. Formularz rezerwacyjny na stronie zbiera wszystko w jednym miejscu i redukuje pomylki.",
      },
      {
        title: "TripAdvisor i Google Maps bez strony to za malo",
        description:
          "Profil na portalach to dobry start, ale profesjonalna strona www buduje prawdziwe zaufanie -- pokazuje atmosfere lokalu, chef's story, specjalnosci i aktualne menu.",
      },
    ],
    benefits: [
      {
        title: "Menu online z sezonowymi aktualizacjami",
        description:
          "Prezentujemy Twoje menu w czytelnej formie -- z cenami, zdjeciami i podzialem na kategorie. Zmiana cen lub dan w ramach abonamentu bez doplat.",
      },
      {
        title: "Formularz rezerwacji stolika",
        description:
          "Goscie rezerwuja stolik przez strone -- podaja liczbe osob, date i godzine. Ty dostajesz powiadomienie e-mail. Koniec z chaosem rezerwacyjnym.",
      },
      {
        title: "Galeria zdiec dan i lokalu",
        description:
          "Profesjonalna galeria zdiec jedzenia i wnetrza lokalu. Klient jeszcze przed wyjsciem z domu wie, na jaka atmosfere moze liczyc.",
      },
      {
        title: "Widocznosc w Google Maps",
        description:
          "Konfigurujemy Google Business Profile i pozycjonujemy pod 'restauracja [miasto]', 'kawiarnia [dzielnica]'. Goscie znajda Cie pierwszego.",
      },
      {
        title: "Strona z historia lokalu",
        description:
          "Opowiadamy historie Twojego miejsca, filozofie kuchni, chef's story. To buduje emocjonalna wiez z goscmi i wyróznia Cie na tle anonimowych restauracji.",
      },
    ],
    leadMagnet: "5 przepisow szefa kuchni, ktorych nigdzie nie znajdziesz -- ekskluzywny e-book",
    faq: [
      {
        question: "Czy menu na stronie mozna czesto aktualizowac?",
        answer:
          "Tak -- wyslij nam nowe menu mailem, a my zaktualizujemy je na stronie w ramach abonamentu. Dotyczy to tez cen, specjalnosci tygodnia i sezonowych ofert.",
      },
      {
        question: "Czy strona moze obslugiwac rezerwacje stoliko?",
        answer:
          "Tak -- umieszczamy formularz rezerwacyjny. Mozna tez zintegrowac zewnetrzne systemy rezerwacji restauracyjnych, jesli ich uzywasz.",
      },
      {
        question: "Czy strona pomoze mi wypromowac sie na Google Maps?",
        answer:
          "Zdecydowanie. Konfigurujemy Google Business Profile polaczony ze strona, co znaczaco poprawia widocznosc w lokalnych wynikach wyszukiwania i Maps.",
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
        "Profesjonalna strona portfolio dla fotografa. Zbudujemy ja z Twojego Facebooka w 24h -- z galeria zdiec, cennikiem sesji i widocznoscia w Google. Od 149 zl/mc.",
      keywords: [
        "strona internetowa fotograf",
        "portfolio fotografa",
        "strona www dla fotografa",
        "strona fotograf slubny",
        "strona fotograf noworodkowy",
        "strona www portfolio foto",
        "strona dla fotografa",
        "portfolio fotograficzne",
      ],
    },
    hero: {
      badge: "Strona portfolio dla fotografa",
      headline: "Twoje zdjecia mowia wszystko.",
      headlineAccent: "Niech mowia to we wlasciwym miejscu.",
      headlineSuffix: "",
      subheadline:
        "Zbudujemy profesjonalne portfolio fotograficzne z Twoich najlepszych prac -- z podzialem na kategorie sesji, cennikiem i formularzem kontaktowym. Gotowe w 24 godziny.",
    },
    painPoints: [
      {
        title: "Facebook niszczy jakosc Twoich zdiec",
        description:
          "Facebook kompresuje zdjecia i obniza ich jakosc. Twoje prace -- ktorymi wyrózniasz sie na rynku -- wygladaja gorzej niz powinny. Na wlasnej stronie prezentujesz je w pelnej rozdzielczosci.",
      },
      {
        title: "Klienci nie widza Twojego stylu fotografii od razu",
        description:
          "Na Facebooku styl gubi sie wsrod przypadkowych postow. Portfolio na stronie www pokazuje spojny styl artystyczny, ktory przyciaga dokladnie tych klientow, ktorym pasujesz.",
      },
      {
        title: "Pary mlode szukaja fotografa slubnego w Google, nie na FB",
        description:
          "Klient, ktory planuje sesje, wpisuje w Google 'fotograf slubny [miasto]' lub 'fotograf noworodkowy [miasto]'. Bez strony www nie ma Cie w tych wynikach.",
      },
    ],
    benefits: [
      {
        title: "Portfolio z podzialem na kategorie",
        description:
          "Sesje slubne, noworodkowe, biznesowe, produktowe -- kazda kategoria ma swoj dzial. Klient od razu trafia do zdiec, ktore go interesuja.",
      },
      {
        title: "Galeria w pelnej rozdzielczosci",
        description:
          "Prezentujemy Twoje prace w najwyzszej mozliwej jakosci -- bez kompresji i bez reklam innych fotografow obok.",
      },
      {
        title: "Cennik pakietow fotograficznych",
        description:
          "Przejrzysty cennik sesji z opisem tego, co zawiera kazdy pakiet. Klient wie czego sie spodziewac i kontaktuje sie gotowy do decyzji.",
      },
      {
        title: "Formularz zapytania o termin",
        description:
          "Klienci opisuja sesje (rodzaj, data, lokalizacja) przez formularz -- Ty dostajesz leady mailem, bez niepotrzebnych rozmow wstepnych.",
      },
      {
        title: "Blog fotograficzny i SEO",
        description:
          "Artykuly o fotografii slubnej, sesji rodzinnej, przygotowaniach -- buduja Twoj autorytet i pozycje w Google na frazy klientow.",
      },
    ],
    leadMagnet: "Jak wybrac fotografa slubnego -- 10 pytan, ktore musisz zadac przed podpisaniem umowy",
    faq: [
      {
        question: "Czy moge miec strone z kilkoma galeriami dla roznych typow sesji?",
        answer:
          "Tak -- tworzymy oddzielne galerie dla kazdej kategorii: sesje slubne, narzeczeenskie, noworodkowe, biznesowe. Klient od razu trafia do zdiec, ktore go interesuja.",
      },
      {
        question: "Czy zdjecia na stronie beda wyswietlane w wysokiej jakosci?",
        answer:
          "Tak -- optymalizujemy zdjecia pod katem szybkosci ladowania, zachowujac przy tym jak najwyzsza jakosc wizualna. Znacznie lepiej niz na Facebooku czy Instagramie.",
      },
      {
        question: "Czy strona fotografa pomoze mi pojawiac sie w Google?",
        answer:
          "Zdecydowanie. Optymalizujemy strone pod lokalne frazy (np. 'fotograf slubny Krakow'). Artykuly blogowe o fotografii buduja pozycje na dluzsze zapytania klientow.",
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
        "Profesjonalna strona www dla trenera personalnego i fitness coacha. Zbudujemy ja z Twojego Facebooka w 24h -- z oferta treningow, widocznoscia w Google. Od 149 zl/mc.",
      keywords: [
        "strona internetowa trener personalny",
        "strona www personal trainer",
        "strona dla trenera",
        "strona fitness coach",
        "strona trener fitness",
        "strona www trening personalny",
        "strona trener personalny",
      ],
    },
    hero: {
      badge: "Strona www dla trenera personalnego",
      headline: "Twoi klienci szukaja trenera w Google.",
      headlineAccent: "Zdobadz ich przed konkurencja.",
      headlineSuffix: "",
      subheadline:
        "Zbudujemy strone Twojej oferty treningowej z Twoich postow z Facebooka -- z pakietami treningowymi, transformacjami klientow i formularzem zapisu. Gotowe w 24 godziny.",
    },
    painPoints: [
      {
        title: "Transformacje klientow gina w feed Instagrama",
        description:
          "Zdjecia before/after to Twoj najmocniejszy argument sprzedazowy. Na wlasnej stronie prezentujemy je w dedykowanej sekcji -- klient widzi efekty zanim zdecyduje sie skontaktowac.",
      },
      {
        title: "Klienci nie widza Twojej filozofii treningu",
        description:
          "To, co Cie wyróznia jako trenera, ginie w krotkich postach. Strona www daje Ci przestrzen na opowiedzenie swojej historii, metodologii i podejscia.",
      },
      {
        title: "Pracujesz tylko z klientami z polecenia, a chcesz rosnac",
        description:
          "Polecenia to podstawa, ale maja swoj limit. Strona www + SEO lokalne sprawia, ze nowi klienci z Google trafiaja bezposrednio do Ciebie.",
      },
    ],
    benefits: [
      {
        title: "Oferta pakietow treningowych",
        description:
          "Przejrzyste pakiety z opisem zakresu, liczby treningow i cen. Klient wie, co dostaje za swoje pieniadze i kontaktuje sie zdecydowany.",
      },
      {
        title: "Galeria transformacji i efektow",
        description:
          "Prezentujemy efekty pracy Twoich klientow (za ich zgoda) -- to najsilniejszy dowod spoleczny i argument dla nowych klientow.",
      },
      {
        title: "Twoja historia i filozofia treningu",
        description:
          "Certyfikaty, doswiadczenie, specjalizacje, podejscie do treningu. Klient wybiera trenera, ktoremu ufa -- strona buduje to zaufanie przed pierwszym kontaktem.",
      },
      {
        title: "Formularz zapisu na trening",
        description:
          "Klient wypelnia krotki formularz (cel treningowy, dostepnosc, poziom zaawansowania) -- Ty dostajesz leada i mozesz go zakwalifikowac przed rozmowa.",
      },
      {
        title: "Blog o treningu i zywieniu",
        description:
          "Artykuly o treningach, diecie i lifestyleu -- pozycjonuja Cie jako eksperta i buduja widocznosc w Google.",
      },
    ],
    leadMagnet: "Plan treningowy na 4 tygodnie dla poczatkujacych -- bezplatny PDF",
    faq: [
      {
        question: "Czy moge miec na stronie plan treningowy do pobrania jako lead magnet?",
        answer:
          "Tak -- przygotujemy lead magnet (np. bezplatny plan treningowy jako PDF), ktory klient pobiera w zamian za adres e-mail. Budujesz baze klientow zainteresowanych Twoja oferta.",
      },
      {
        question: "Czy strona moze pokazywac opinie i transformacje moich klientow?",
        answer:
          "Oczywiscie -- tworzymy sekcje z opiniami i galeria efektow (za zgoda klientow). To najskuteczniejszy element budujacy zaufanie nowych klientow.",
      },
      {
        question: "Czy strona trenera pomoze mi zdobywac klientow lokalnie?",
        answer:
          "Tak -- optymalizujemy pod frazy 'trener personalny [miasto]'. Artykuly blogowe o treningach buduja Twoj autorytet ekspercki i widocznosc w Google.",
      },
    ],
  },
  {
    slug: "uslugi-dla-domu",
    name: "Uslugi dla domu",
    nameDative: "dla uslug domowych",
    emoji: "home",
    seo: {
      title: "Strona internetowa dla uslug domowych -- hydraulik, elektryk, sprzatanie | GotowaWitryna",
      description:
        "Profesjonalna strona www dla hydraulika, elektryka, firmy sprzatajacej i innych uslug dla domu. Zbudujemy ja z Twojego Facebooka w 24h. Od 149 zl/mc.",
      keywords: [
        "strona internetowa hydraulik",
        "strona www elektryk",
        "strona firma sprzatajaca",
        "strona uslugi dla domu",
        "strona www uslugi remontowe",
        "strona internetowa dla hydraulika",
        "strona www malarz",
        "strona instalator",
      ],
    },
    hero: {
      badge: "Strona www dla uslug domowych",
      headline: "Klienci szukaja hydraulika, elektryka",
      headlineAccent: "i sprzataczki w Google.",
      headlineSuffix: "Czy Cie tam znajda?",
      subheadline:
        "Zbudujemy strone Twojej firmy uslugowej z Twoich postow z Facebooka -- z lista uslug, obszarem dzialania i formularzem wyceny. Gotowe w 24 godziny.",
    },
    painPoints: [
      {
        title: "Klienci dzwonia w zlym momencie po informacje",
        description:
          "Bez strony klient musi dzwonic, zeby dowiedziec sie czy dzialasz w jego rejonie, co oferujesz i ile to kosztuje. Strona odpowiada na wszystkie te pytania.",
      },
      {
        title: "Ogloszenia na OLX to wyscig cenowy bez konca",
        description:
          "Na platformach ogloszeniowych klienci wybieraja najtanszego. Wlasna strona www buduje zaufanie i pozwala komunikowac jakosc zamiast tylko cene.",
      },
      {
        title: "Opinia ustna ma swoj limit zasiegu",
        description:
          "Polecenia od znajomych to swietne zrodlo klientow, ale docieraja do waskiego kregu. Strona www z SEO dociera do kazdego, kto szuka Twoich uslug w okolicy.",
      },
    ],
    benefits: [
      {
        title: "Lista uslug i zakres dzialania",
        description:
          "Przejrzysta lista tego, co robisz, i mapa obszarow, w ktorych dzialasz. Klient od razu sprawdza, czy dotrze do niego.",
      },
      {
        title: "Formularz wyceny online",
        description:
          "Klient opisuje problem i zostawia kontakt. Ty dostajesz lead mailem i dzwonisz tylko do osob z realnym zapotrzebowaniem.",
      },
      {
        title: "Galeria realizacji",
        description:
          "Zdjecia wykonanych prac -- zainstalowanych urzadzen, naprawionych awarii, efektow sprzatania. Buduja zaufanie i wyrózniaja Cie na tle konkurencji bez strony.",
      },
      {
        title: "Opinie i referencje",
        description:
          "Prezentujemy opinie klientow -- w uslugach domowych zaufanie jest kluczowe. Nowy klient chce wiedziec, ze wpuszcza do domu sprawdzona firme.",
      },
      {
        title: "Widocznosc lokalna w Google",
        description:
          "Optymalizacja pod frazy 'hydraulik [miasto]', 'elektryk [dzielnica]', 'sprzatanie [miasto]'. Artykuly blogowe buduja Twoja widocznosc miesiac po miesiacu.",
      },
    ],
    leadMagnet: "10 najczestszych awarii domowych i kiedy wezwac fachowca -- praktyczny poradnik",
    faq: [
      {
        question: "Czy strona moze pokazywac obszar, na ktorym dzialamy?",
        answer:
          "Tak -- umieszczamy liste miejscowosci i dzielnic, w ktorych swiadczysz uslugi. Mozemy tez dodac mape. To eliminuje niepotrzebne zapytania spoza Twojego zasiegu.",
      },
      {
        question: "Czy strona hydraulika lub elektryka jest trudna w utrzymaniu?",
        answer:
          "Nie -- o to dbamy my. Aktualizacje, bezpieczenstwo, hosting, zmiany tresci -- wszystko w cenie abonamentu. Ty skupiasz sie na pracy, my na stronie.",
      },
      {
        question: "Jak szybko zaczn? pojawiac sie w Google po uruchomieniu strony?",
        answer:
          "Pierwsze efekty SEO pojawiaja sie zwykle po 4-8 tygodniach. Z kazdym miesiacem i artykulem blogowym Twoja pozycja rosnie. To inwestycja, ktora dziala przez lata.",
      },
    ],
  },
  {
    slug: "rzemieslnicy-artysci",
    name: "Rzemieslnicy i artysci",
    nameDative: "dla rzemieslnika i artysty",
    emoji: "palette",
    seo: {
      title: "Strona internetowa dla rzemieslnika i artysty | GotowaWitryna",
      description:
        "Profesjonalna strona portfolio dla rzemieslnika, artysty i tworcy. Zbudujemy ja z Twojego Facebooka w 24h -- z galeria prac, sklepem i widocznoscia w Google. Od 149 zl/mc.",
      keywords: [
        "strona internetowa rzemieslnik",
        "strona portfolio artysta",
        "strona www tworca",
        "strona sklep rekodzielnictwo",
        "strona dla artysty",
        "strona www rekodzielnictwo",
        "strona internetowa kowal",
        "strona stolarz",
      ],
    },
    hero: {
      badge: "Strona www dla rzemieslnika i artysty",
      headline: "Twoje rzemioslko jest wyjatkowe.",
      headlineAccent: "Czas, zeby swiat to zobaczyl.",
      headlineSuffix: "",
      subheadline:
        "Zbudujemy profesjonalne portfolio lub sklep online z Twoich prac -- z galeria realizacji, formularzem zamowien i widocznoscia w Google. Gotowe w 24 godziny.",
    },
    painPoints: [
      {
        title: "Twoje prace zasluguja na lepsza prezentacje niz Facebook",
        description:
          "Rekodzielnictwo i sztuka potrzebuja przestrzeni. Wlasna strona www prezentuje Twoje prace w spojnej, estetycznej galerii -- bez reklam, bez chaosu, bez kompresji zdiec.",
      },
      {
        title: "Klienci nie wiedza jak zamowic Twoje wyroby",
        description:
          "Bez jasnego procesu zamowien klienci rezygnuja. Strona www z formularzem zamowien i opisem procesu produkcji zamienia zainteresowanie w sprzedaz.",
      },
      {
        title: "Platformy handlowe pobieraja prowizje i chowaja Cie wsrod setek innych",
        description:
          "Na Etsy czy Allegro konkurujesz z tysi?cami tworcow, a platforma pobiera prowizje. Wlasna strona to Twoj prywatny sklep -- zero prowizji, pelna kontrola nad marka.",
      },
    ],
    benefits: [
      {
        title: "Galeria prac i portfolio",
        description:
          "Prezentujemy Twoje realizacje w profesjonalnej galerii -- z opisami techniki, materialow i mozliwosci personalizacji. Klient widzi Twoj styl i chce wlasnie Twoje prace.",
      },
      {
        title: "Formularz zamowien indywidualnych",
        description:
          "Klient opisuje swoje wymagania, rozmiar, materialy, termin. Ty dostajesz kompletne zapytanie i mozesz wycenic prace bez tlumaczenia wszystkiego od nowa.",
      },
      {
        title: "Twoja historia i proces tworczy",
        description:
          "Opowiadamy Twoja historie jako tworcy -- skad pochodzi Twoja pasja, jak powstaja Twoje wyroby, jakie materialy uzywasz.",
      },
      {
        title: "Sklep online (opcjonalnie)",
        description:
          "Mozemy dodac sklep online do sprzedazy gotowych prac -- klienci zamawiaja i placa bezposrednio na stronie.",
      },
      {
        title: "Widocznosc w Google",
        description:
          "Pozycjonowanie na frazy 'meble na zamowienie [miasto]', 'bizuteria handmade [miasto]'. Blog o procesie tworczym buduje zasieg organiczny.",
      },
    ],
    leadMagnet: "Jak wybrac idealny prezent na zamowienie -- poradnik dla kupujacych rekodzielnictwo",
    faq: [
      {
        question: "Czy moge sprzedawac swoje prace bezposrednio przez strone?",
        answer:
          "Tak -- w pakietach Biznes i Premium mozemy zintegrowac sklep online lub formularz zamowien z platnoscia. Klienci zamawiaja i placa bezposrednio na Twojej stronie.",
      },
      {
        question: "Czy strona pomoze mi dotrzec do klientow szukajacych rekodzielnictwa?",
        answer:
          "Tak -- optymalizujemy pod frazy specyficzne dla Twojej specjalizacji (np. 'meble z drewna na zamowienie Warszawa'). Artykuly o procesie tworczym buduja zasieg na dluzsze frazy.",
      },
      {
        question: "Jak czesto moge aktualizowac galerie o nowe prace?",
        answer:
          "Kiedy chcesz -- wyslij nam zdjecia mailem, a my dodajemy je do galerii w ramach abonamentu. Bez limitow, bez dodatkowych oplat.",
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
        "Profesjonalna strona www dla doradcy biznesowego, konsultanta i coacha. Zbudujemy ja z Twojego Facebooka w 24h -- z oferta, artykulami eksperckimi i formularzem. Od 149 zl/mc.",
      keywords: [
        "strona internetowa doradca biznesowy",
        "strona www konsultant",
        "strona dla doradcy",
        "strona coach",
        "strona www doradca finansowy",
        "strona internetowa dla konsultanta",
        "strona doradca prawny",
        "strona ekspert",
      ],
    },
    hero: {
      badge: "Strona www dla doradcy i konsultanta",
      headline: "Twoja wiedza to Twoj produkt.",
      headlineAccent: "Niech strona www sprzedaje ja za Ciebie.",
      headlineSuffix: "",
      subheadline:
        "Zbudujemy profesjonalna strone ekspercka z Twoich postow z Facebooka -- z oferta uslug, artykulami budujacymi autorytet i formularzem zapytan. Gotowe w 24 godziny.",
    },
    painPoints: [
      {
        title: "Klienci nie moga ocenic Twojej ekspertyzy bez strony",
        description:
          "Zanim klient zaplace za konsultacje, chce sprawdzic Twoj autorytet. Profesjonalna strona z case studies, artykulami i certyfikatami buduje ten autorytet przed pierwszym kontaktem.",
      },
      {
        title: "LinkedIn nie zastepuje wlasnej strony",
        description:
          "LinkedIn jest dobry do sieci kontaktow, ale nie do pozycjonowania w Google. Wlasna strona to Twoja platforma -- bez algorytmow, z pelna kontrola przekazu.",
      },
      {
        title: "Polecenia od klientow maja naturalny limit",
        description:
          "Dobry doradca rosnie przez polecenia -- ale to ograniczone zrodlo. Strona www ze sprawnym SEO sprawia, ze klienci szukajacy Twoich uslug w Google trafiaja bezposrednio do Ciebie.",
      },
    ],
    benefits: [
      {
        title: "Strona uslug i procesow pracy",
        description:
          "Jasno opisana oferta, proces wspolpracy krok po kroku, typowe wyniki dla klientow. Klient rozumie co dostaje i jak wyglada praca z Toba.",
      },
      {
        title: "Sekcja o Tobie i Twoim doswiadczeniu",
        description:
          "Historia zawodowa, certyfikaty, specjalizacje, klientela. Budujesz zaufanie i autorytet eksperta -- nawet zanim klient sie z Toba skontaktuje.",
      },
      {
        title: "Case studies i wyniki klientow",
        description:
          "Prezentujemy konkretne rezultaty Twojej pracy (anonimowo lub za zgoda klienta). To najsilniejszy argument dla nowych klientow B2B.",
      },
      {
        title: "Blog ekspercki z artykulami SEO",
        description:
          "Co miesiac artykuly w Twojej dziedzinie -- buduja autorytet, pozycje w Google i przyciagaja klientow, ktorzy szukaja odpowiedzi na konkretne pytania biznesowe.",
      },
      {
        title: "Formularz zapytania i kwalifikacji",
        description:
          "Klient opisuje swoj problem i potrzeby przez formularz. Ty kwalifikujesz leady przed rozmowa -- rozmawiasz tylko z osobami, ktorym mozesz realnie pomoc.",
      },
    ],
    leadMagnet: "5 bledow, ktore kosztuja firmy tysiace zlotych rocznie -- bezplatny raport eksperta",
    faq: [
      {
        question: "Czy strona doradcy moze miec blog ekspercki?",
        answer:
          "Tak -- w kazdym pakiecie tworzymy blog z artykulami. Co miesiac publikujemy materialy eksperckie w Twojej dziedzinie, optymalizowane pod SEO. Budujesz autorytet i widocznosc jednoczesnie.",
      },
      {
        question: "Czy moge miec strone w jezyku angielskim na potrzeby klientow zagranicznych?",
        answer:
          "Tak -- mozemy stworzyc dwujezyczna strone lub osobna wersje anglojezyczna. Omow to z nami przy zamowieniu demo.",
      },
      {
        question: "Jak strona doradcy rózni sie od zwyklej strony firmowej?",
        answer:
          "Strona doradcy kladzie nacisk na autorytet eksperta: Twoja historie, certyfikaty, case studies i artykuly. To strona, ktora sprzedaje Twoja wiedze -- a nie tylko liste uslug.",
      },
    ],
  },
  {
    slug: "uslugi-dla-zwierzat",
    name: "Uslugi dla zwierzat",
    nameDative: "dla uslug dla zwierzat",
    emoji: "paw",
    seo: {
      title: "Strona internetowa dla groomera, weterynarza i hotelu dla zwierzat | GotowaWitryna",
      description:
        "Profesjonalna strona www dla groomera, weterynarza, hotelu dla psow i kota oraz innych uslug dla zwierzat. Zbudujemy ja z Twojego Facebooka w 24h. Od 149 zl/mc.",
      keywords: [
        "strona internetowa groomer",
        "strona www salon dla psow",
        "strona weterynarz",
        "strona hotel dla zwierzat",
        "strona www uslugi dla zwierzat",
        "strona dla groomera",
        "strona internetowa psi fryzjer",
        "strona opieka nad zwierzetami",
      ],
    },
    hero: {
      badge: "Strona www dla uslug dla zwierzat",
      headline: "Wlasciciele zwierzat szukaja Cie w Google.",
      headlineAccent: "Badz pierwszym wyborem w Twojej okolicy.",
      headlineSuffix: "",
      subheadline:
        "Zbudujemy strone Twojego salonu dla psow, hotelu dla zwierzat lub kliniki z Twoich postow na Facebooku -- z galeria, cennikiem i rezerwacja. Gotowe w 24 godziny.",
    },
    painPoints: [
      {
        title: "Wlasciciele zwierzat ufaja tylko sprawdzonym opiniom",
        description:
          "Przed powierzeniem psa groomerowi lub hotelowi, wlasciciel szuka opinii. Strona www z sekcja recenzji, galeria zwierzat i opisem procesu opieki buduje zaufanie przed pierwszym telefonem.",
      },
      {
        title: "Terminy groomerow sa zajete przez stalych klientow",
        description:
          "Nowi klienci nie wiedza kiedy maja wolny termin. Strona z informacja o dostepnosci lub formularzem zapisu sprawia, ze docieraja do Ciebie gotowi na konkretny termin.",
      },
      {
        title: "Bez strony tracisz klientow przeprowadzajacych sie do okolicy",
        description:
          "Nowy mieszkaniec, ktory szuka 'groomer [dzielnica]' w Google, trafi do konkurencji, jesli Cie tam nie ma. Strona www + Google Maps to Twoj staly kanal pozyskiwania nowych klientow.",
      },
    ],
    benefits: [
      {
        title: "Galeria zadowolonych zwierzat",
        description:
          "Zdjecia psow i kotow po zabiegach groomerskich, szczesliwych gosci hotelu, pacjentow -- najbardziej angazujaca tresc w mediach spolecznosciowych przekuta w portfolio.",
      },
      {
        title: "Cennik uslug i pakietow",
        description:
          "Jasny cennik groomerski, cennik hotelu (za dobe, z wyzywieniem, z zabawa) lub cennik weterynaryjny. Wlasciciel planuje wizyte, znajac koszty z gory.",
      },
      {
        title: "Formularz rezerwacji",
        description:
          "Wlasciciel wybiera usluge, podaje rase i wage zwierzaka, wybiera termin. Ty dostajesz kompletne zgloszenie mailem -- mniej rozmow wstepnych.",
      },
      {
        title: "Informacje o zasadach opieki",
        description:
          "Opisujemy Twoje standardy pracy, uzywane produkty, certyfikaty. Wlasciciele zwierzat sa wymagajacy -- szczegoly na stronie przekonuja ich zanim pojawi sie konkurencja.",
      },
      {
        title: "Widocznosc lokalna w Google",
        description:
          "Pozycjonowanie na frazy 'groomer [miasto]', 'hotel dla psow [miasto]'. Blog o pielegnacji i opiece nad zwierzetami buduje zasieg organiczny miesiac po miesiacu.",
      },
    ],
    leadMagnet: "Jak przygotowac psa do pierwszej wizyty u groomera -- poradnik dla wlasciciela",
    faq: [
      {
        question: "Czy strona moze miec galerie zdiec zwierzat po zabiegach?",
        answer:
          "Oczywiscie -- to jeden z najwazniejszych elementow. Tworzymy galerie z najpiekszkimi efektami Twojej pracy. Wyslij nam zdjecia, a my regularnie ja aktualizujemy.",
      },
      {
        question: "Czy wlasciciele moga rezerwowac terminy przez strone?",
        answer:
          "Tak -- formularz rezerwacji zbiera wszystkie niezbedne informacje (rasa, waga, usluga, termin). Mozliwa tez integracja z zewnetrznymi systemami rezerwacji.",
      },
      {
        question: "Czy strona pomoze mi pojawiac sie w Google Maps?",
        answer:
          "Tak -- konfigurujemy Google Business Profile polaczony ze strona. Twoj salon lub hotel pojawia sie w mapach lokalnych dla wlascicieli zwierzat szukajacych uslug w okolicy.",
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
        "Profesjonalna strona www dla firmy transportowej, przeprowadzkowej i kurierskiej. Zbudujemy ja z Twojego Facebooka w 24h -- z cennikiem, wycenami i widocznoscia w Google. Od 149 zl/mc.",
      keywords: [
        "strona internetowa firma transportowa",
        "strona www przeprowadzki",
        "strona dla firmy przeprowadzkowej",
        "strona transport",
        "strona www uslugi transportowe",
        "strona internetowa dla przewoznika",
        "strona przeprowadzki cennik",
        "strona bus do przeprowadzki",
      ],
    },
    hero: {
      badge: "Strona www dla firmy transportowej",
      headline: "Klienci szukaja firmy do przeprowadzki",
      headlineAccent: "w Google, nie na OLX.",
      headlineSuffix: "",
      subheadline:
        "Zbudujemy strone Twojej firmy transportowej z Twoich postow z Facebooka -- z cennikiem, formularzem wyceny i opiniami klientow. Gotowe w 24 godziny.",
    },
    painPoints: [
      {
        title: "Na OLX i platformach wygrywasz tylko cena",
        description:
          "Portale ogloszeniowe to wyscig do dna -- klient wybiera najtanszego, bez wzgledu na jakosc. Wlasna strona pozwala komunikowac wartosc: termninowosc, ostroznosc, doswiadczenie.",
      },
      {
        title: "Klienci boja sie powierzyc dobytek nieznanej firmie",
        description:
          "Przeprowadzka to stres. Klient, ktory nie moze sprawdzic Cie w internecie, wybiera firme ze strona pelna zdiec, opinii i informacji. Bez tego odpadasz przy pierwszej selekcji.",
      },
      {
        title: "Wyceny telefoniczne zajmuja godziny tygodniowo",
        description:
          "Bez formularza na stronie kazdy klient dzwoni z tymi samymi pytaniami. Formularz wyceny zbiera wszystkie dane (metraz, odleglosc, pietro, terminy) zanim porozmawiasz.",
      },
    ],
    benefits: [
      {
        title: "Formularz wyceny przeprowadzki",
        description:
          "Klient podaje metraz mieszkania, odleglosc, pietro, termin i specjalne wymagania. Ty dostajesz kompletne dane do przygotowania oferty -- bez rozmowy wstepnej.",
      },
      {
        title: "Cennik i pakiety uslug",
        description:
          "Orientacyjny cennik (np. za km, za godzine, za metraz) lub pakiety przeprowadzkowe. Klient widzi rzad wielkosci cen i kontaktuje sie gotowy na realne rozmowy.",
      },
      {
        title: "Flota i mozliwosci techniczne",
        description:
          "Opisujemy Twoja flote, ladownosc, zasieg, dostepne uslugi dodatkowe (pakowanie, wnosenie). Klient ocenia czy mozesz zrealizowac jego zlecenie.",
      },
      {
        title: "Opinie i referencje",
        description:
          "W transporcie zaufanie to podstawa. Prezentujemy opinie zadowolonych klientow i liczbe zrealizowanych przeprowadzek -- to Twoj najmocniejszy argument.",
      },
      {
        title: "Widocznosc lokalna i regionalna",
        description:
          "Pozycjonowanie na frazy 'przeprowadzki [miasto]', 'firma transportowa [region]'. Blog z poradami przeprowadzkowymi buduje Twoja pozycje w Google.",
      },
    ],
    leadMagnet: "Kompletna checklista przeprowadzki -- co zrobic tydzien, dzien i w dniu przeprowadzki",
    faq: [
      {
        question: "Czy strona moze obslugiwac zapytania o wycene?",
        answer:
          "Tak -- formularz wyceny zbiera wszystkie potrzebne informacje: lokalizacje, metraz, pietro, termin, specjalne wymagania. Ty dostajesz kompletne zapytanie mailem i mozesz przygotowac oferte.",
      },
      {
        question: "Czy moge na stronie pokazac swoja flote i mozliwosci?",
        answer:
          "Oczywiscie -- tworzymy sekcje o flocie (rodzaje aut, ladownosc, dostepne uslugi). Klient od razu sprawdza, czy mozesz obslugiwac jego przeprowadzke.",
      },
      {
        question: "Jak szybko zaczn? dostawac zapytania ze strony?",
        answer:
          "Pierwsze zapytania moga pojawic sie juz w pierwszych tygodniach. Wyniki SEO rosna z kazdym miesiacem -- po 3-6 miesiacach strona staje sie regularnym zrodlem leadow.",
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
