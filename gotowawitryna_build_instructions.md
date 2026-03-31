# GotowaWitryna.pl — Instrukcje budowy strony

## Dokument przeznaczony dla: AI Agent (builder)
## Wersja: 1.0
## Data: 2026-03-31
## Język strony: Polski

---

## 1. DESIGN BRIEF

### 1.1 O produkcie

GotowaWitryna.pl to usługa "website-as-a-service" dla polskich małych firm i jednoosobowych działalności gospodarczych. Klient podaje link do swojego profilu na Facebooku lub Instagramie, a my w ciągu 24 godzin przygotowujemy mu gotową, profesjonalną stronę internetową. Następnie utrzymujemy ją, publikujemy artykuły blogowe i obsługujemy lead magnety — za stałą miesięczną opłatę. Klient nie musi nic robić.

### 1.2 Grupa docelowa

- **Kto:** Właściciele małych firm i JDG w Polsce — fryzjerzy, kosmetyczki, mechanicy, budowlańcy, restauratorzy, trenerzy personalni, fotografowie, rzemieślnicy, lokalni usługodawcy
- **Wiek:** 28-55 lat
- **Profil techniczny:** Niski. Używają Facebooka do promocji, ale nie potrafią (lub nie chcą) budować strony internetowej. Nie znają WordPressa, nie wiedzą co to hosting. Maja problem z wysokim kosztem utrzymania, zmian i aktualizacji na stronie. maja opensource cms i nie wiedza jak go uzywac.
- **Motywacja:** Chcą wyglądać profesjonalnie, pojawiać się w Google, budować zaufanie klientów — ale nie mają czasu ani wiedzy technicznej.
- **Obiekcje:** "To pewnie drogie", "Nie mam czasu na obsługę strony", "Nie znam się na technologii", "Facebook mi wystarczy"
- **Język:** Prosty, bezpośredni, bez żargonu technicznego. Mów do nich jak do sąsiada, nie jak do klienta korporacji.

### 1.3 Ton komunikacji

- **Bezpośredni** — mów wprost, co klient dostaje i ile to kosztuje
- **Ludzki** — nie korporacyjny, nie nadęty. "Zrobimy Ci stronę" zamiast "Dostarczamy kompleksowe rozwiązania cyfrowe"
- **Pewny siebie** — nie "spróbujemy", tylko "zrobimy". Nie "możemy pomóc", tylko "załatwiamy to za Ciebie"
- **Empatyczny** — rozumiemy, że klient jest zajęty prowadzeniem firmy i nie ma czasu na technologię
- **Bez żargonu** — zero słów: "deployment", "hosting", "SSL", "CMS", "responsive". Zamiast tego: "strona działa na telefonie", "bezpieczna kłódka w przeglądarce", "Twój adres w internecie"

### 1.4 Styl wizualny

#### Paleta kolorów

| Rola | Kolor | Hex | Zastosowanie |
|------|-------|-----|-------------|
| Primary | Ciemny granat | `#1B2A4A` | Nagłówki, nawigacja, footer |
| Accent | Energetyczny pomarańcz | `#F97316` | Buttony CTA, wyróżnienia, liczby |
| Accent secondary | Ciepły żółty | `#FBBF24` | Ikony, badge, akcenty hover |
| Background light | Jasny szary-cream | `#F8F9FA` | Tła sekcji alternate |
| Background white | Biały | `#FFFFFF` | Główne tła sekcji |
| Text primary | Ciemny grafit | `#1E293B` | Tekst body |
| Text secondary | Szary | `#64748B` | Opisy, podtekst |
| Success | Zielony | `#22C55E` | Checkmarki, potwierdzenia |
| Border | Jasny szary | `#E2E8F0` | Obramowania kart, divider |

#### Typografia

| Element | Font | Waga | Rozmiar (desktop) | Rozmiar (mobile) |
|---------|------|------|--------------------|------------------|
| H1 (hero) | Inter / System | 800 (ExtraBold) | 48-56px | 32-36px |
| H2 (sekcje) | Inter / System | 700 (Bold) | 36-40px | 26-30px |
| H3 (karty) | Inter / System | 600 (SemiBold) | 22-24px | 18-20px |
| Body | Inter / System | 400 (Regular) | 16-18px | 15-16px |
| Body large | Inter / System | 400 | 20px | 17px |
| Small / caption | Inter / System | 400 | 14px | 13px |
| Button | Inter / System | 600 | 16px | 15px |
| Badge / tag | Inter / System | 500 | 13px | 12px |

#### Spacing & Layout

- Max content width: `1200px`
- Section padding: `80px` vertical (desktop), `48px` (mobile)
- Grid: 12-kolumnowy, gap `24px`
- Border radius — karty: `12px`, buttony: `8px`, badge: `full/rounded`
- Cienie — karty: `0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -2px rgba(0,0,0,0.05)`
- Cienie hover: `0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.04)`

#### Ikonografia

- Styl: Lucide Icons lub Heroicons — liniowe (outline), grubość 1.5-2px
- Rozmiar w kartach: `24px`
- Rozmiar w feature listach: `20px`
- Kolor ikon: accent pomarańcz (`#F97316`) lub primary granat (`#1B2A4A`)
- Ikony w kołach: tło `#FFF7ED` (pomarańczowy light), ikona `#F97316`

#### Animacje

- Scroll reveal: fade-up z `opacity: 0 → 1`, `translateY: 20px → 0`, duration `600ms`, ease-out
- Stagger na kartach: delay `100ms` między kolejnymi
- Hover na kartach: `translateY: -4px` + zwiększenie cienia, transition `300ms`
- Hover na buttonach: lekkie rozjaśnienie background + scale `1.02`
- Liczniki (social proof): count-up animation przy wejściu w viewport
- Żadnych skomplikowanych animacji — strona ma się ładować szybko i działać na słabych telefonach

#### Zdjęcia / Grafiki

- Styl: Realne zdjęcia małych firm (fryzjer przy pracy, mechanik w warsztacie, kosmetyczka z klientką). Nie stockowe korporacyjne. Jeśli brak prawdziwych zdjęć — użyj ilustracji w stylu line-art lub flat illustration z akcentami pomarańczowymi.
- Mockupy stron: Pokaż ekrany laptopów/telefonów z przykładowymi stronami (demo).
- Format: WebP z fallback na JPEG. Lazy loading na wszystkim poniżej fold.

---

## 2. STRUKTURA STRONY (SITEMAP)

Strona to **multi-page** z anchor navigation + osobne podstrony prawne.

```
gotowawitryna.pl/
├── index.html (single-page z sekcjami)
│   ├── #hero
│   ├── #social-proof-bar
│   ├── #problem
│   ├── #rozwiazanie
│   ├── #proces
│   ├── #co-dostajesz
│   ├── #branze
│   ├── #cennik
│   ├── #porownanie
│   ├── #realizacje
│   ├── #opinie
│   ├── #faq
│   ├── #cta-final
│   └── #footer
├── /polityka-prywatnosci
└── /regulamin
...
```

---

## 3. CONTENT — SEKCJA PO SEKCJI

### 3.1 NAWIGACJA (sticky top)

```
Logo: GotowaWitryna (tekst, bez grafiki)

Menu items:
- Jak to działa
- Co dostajesz
- Cennik
- Realizacje
- FAQ

CTA button (prawy róg): "Otrzymaj darmowe demo →"
```

**Zachowanie:**
- Sticky na scroll, z backdrop-blur i cieniem po zjechaniu
- Mobile: hamburger menu, pełnoekranowy overlay
- CTA button zawsze widoczny, nawet na mobile (w hamburgerze na górze)

---

### 3.2 HERO

**Layout:** Dwie kolumny na desktop (60/40). Lewa: tekst + CTA. Prawa: mockup telefonu z przykładową stroną. Na mobile: single column, tekst nad mockupem.

**Badge (nad H1):**
```
⚡ Gotowa strona w 24 godziny
```
Styl: mały badge z tłem `#FFF7ED`, tekst pomarańczowy, rounded-full.

**H1:**
```
Twoja firma zasługuje na profesjonalną stronę internetową.
My ją zbudujemy — z tego, co już masz.
```

**Podtytuł (body large, kolor text-secondary):**
```
Podaj nam link do Twojego profilu na Facebooku. W ciągu 24 godzin przygotujemy
dla Ciebie gotową stronę www — z Twoimi zdjęciami, ofertą i opinią klientów.
Bez angażowania Twojego czasu. Sprawdzisz projekt za darmo, zanim podejmiesz decyzję.
```

**CTA — dwa buttony obok siebie:**
```
[Primary]  "Otrzymaj darmowe demo →"  (pomarańczowy, duży)
[Secondary] "Zobacz jak to działa ↓"   (outlined, granat)
```

**Pod CTA — trust indicators (inline, mały tekst + ikony):**
```
✓ Bez zobowiązań    ✓ Gotowe w 24h    ✓ Pełna obsługa techniczna
```

**Prawa kolumna:**
Mockup telefonu (lub laptop + telefon) z widoczną przykładową stroną — np. strona fikcyjnego salonu fryzjerskiego. Strona w mockupie powinna wyglądać realistycznie i profesjonalnie.

---

### 3.3 SOCIAL PROOF BAR

**Layout:** Pełna szerokość, tło jasnoszare (`#F8F9FA`), wąski pasek (padding `20px`).

**Treść — 3-4 metryki w rzędzie:**
```
🔥 47 stron uruchomionych    ⭐ 4.9/5 średnia ocena    ⏱️ < 24h czas realizacji demo    💼 12 branż obsługiwanych
```

Styl: liczby duże i bold (pomarańcz), tekst mały i szary. Flex row z gap, centered.

> UWAGA DLA AGENTA: Liczby mogą być aktualizowane dynamicznie. Na start mogą być niższe — ważne, żeby sekcja istniała i była łatwo edytowalna.

---

### 3.4 SEKCJA "PROBLEM" (dlaczego potrzebujesz strony)

**ID:** `#problem`

**Layout:** Dwie kolumny. Lewa: tekst. Prawa: ilustracja lub zdjęcie osoby patrzącej na telefon z wyrażeniem frustracji / zamyślenia.

**Tag nad H2:**
```
DLACZEGO TO WAŻNE
```
Styl: uppercase, mały, letter-spacing, kolor pomarańczowy.

**H2:**
```
Sam profil na Facebooku to dziś za mało.
```

**Body text:**
```
Twoi klienci szukają usług w Google — nie na Facebooku. Gdy ktoś wpisze
"fryzjer Radom" albo "mechanik Wrocław", wyskakują firmy ze stronami
internetowymi. Bez własnej strony jesteś dla tych klientów niewidoczny.

A nawet gdy ktoś trafi na Twój profil na Facebooku — widzi chaotyczny
wall postów, nie uporządkowaną ofertę. Brak strony www to sygnał:
"ta firma może nie jest poważna".
```

**3 karty pod tekstem:**

```
Karta 1:
Ikona: Search (lupa)
Tytuł: "Nie ma Cię w Google"
Tekst: "71% polskich firm ma stronę internetową. Twoja konkurencja już tam
jest. Klienci, którzy szukają Twoich usług w okolicy, trafiają do nich
zamiast do Ciebie."

Karta 2:
Ikona: Shield (tarcza)
Tytuł: "Facebook to nie Twoja własność"
Tekst: "Twoje treści, zdjęcia, opinie klientów — wszystko jest własnością
Mety. Zmiana algorytmu, blokada konta, awaria serwisu — i Twoja firma
znika z sieci z dnia na dzień."

Karta 3:
Ikona: Eye (oko)
Tytuł: "Brak profesjonalnego wizerunku"
Tekst: "Strona www to pierwsza rzecz, którą sprawdza klient, zanim zadzwoni.
Brak strony to brak zaufania. Własna witryna mówi: ta firma jest
stabilna, profesjonalna i godna zaufania."
```

---

### 3.5 SEKCJA "ROZWIĄZANIE" (co robimy)

**ID:** `#rozwiazanie`

**Layout:** Centered text + wizualna transformacja (before/after lub schemat)

**Tag:**
```
NASZE ROZWIĄZANIE
```

**H2:**
```
Przenosimy Twój biznes z Facebooka na profesjonalną stronę www.
A potem się nią zajmujemy — za Ciebie.
```

**Body text:**
```
Nie musisz nic wiedzieć o technologii. Nie musisz pisać tekstów.
Nie musisz szukać hostingu. Podajesz nam link do swojego profilu
— a my robimy resztę. Budujemy stronę z Twoich najlepszych zdjęć
i postów, piszemy teksty ofertowe, podpinamy domenę, uruchamiamy
blog i lead magnety. I utrzymujemy to wszystko co miesiąc.
```

**Wizualizacja — "Before → After":**

Dwie karty obok siebie z strzałką między nimi:

```
BEFORE:
- Chaotyczny profil FB
- Brak w Google
- Zero kontroli nad treścią
- Klienci nie mogą znaleźć oferty

→ (strzałka z animacją)

AFTER:
- Profesjonalna strona www
- Widoczność w Google
- Pełna kontrola nad wizerunkiem
- Klienci trafiają prosto na ofertę
- Blog i lead magnety zbierają leady
```

---

### 3.6 SEKCJA "PROCES" (jak to działa)

**ID:** `#proces`

**Layout:** 4 kroki w rzędzie (desktop) / kolumna (mobile), z numeracją i linią łączącą.

**Tag:**
```
JAK TO DZIAŁA
```

**H2:**
```
4 proste kroki do Twojej nowej strony.
```

**Kroki:**

```
KROK 1
Ikona: Link (link chain)
Tytuł: "Podaj nam link"
Tekst: "Wpisz adres swojego profilu na Facebooku lub Instagramie.
To wszystko, czego od Ciebie potrzebujemy."
Czas: "2 minuty"

KROK 2
Ikona: Cpu (procesor / AI)
Tytuł: "My tworzymy Twój projekt"
Tekst: "Analizujemy Twoje zdjęcia, posty i opinie. Wybieramy
najlepsze materiały i budujemy z nich profesjonalną stronę."
Czas: "do 24 godzin"

KROK 3
Ikona: Eye (podgląd)
Tytuł: "Sprawdzasz i oceniasz"
Tekst: "Dostajesz link do gotowego projektu. Przeglądasz go na
telefonie i komputerze. Mówisz, co zmienić — albo akceptujesz."
Czas: "bez pośpiechu"

KROK 4
Ikona: Rocket (rakieta)
Tytuł: "Uruchamiamy Twoją stronę"
Tekst: "Podpinamy domenę, aktywujemy hosting i SSL. Twoja strona
jest online. Od tego momentu zajmujemy się wszystkim."
Czas: "1 dzień"
```

**Pod krokami — podkreślenie:**
```
"Od Twojego linka do gotowej strony — maksymalnie 48 godzin.
A projekt demo otrzymujesz za darmo."
```

---

### 3.7 SEKCJA "CO DOSTAJESZ" (features / all-inclusive)

**ID:** `#co-dostajesz`

**Layout:** H2 centered + grid kart (3×2 na desktop, 1 kolumna na mobile)

**Tag:**
```
WSZYSTKO W CENIE
```

**H2:**
```
Jedna usługa. Kompletne rozwiązanie. Zero pracy po Twojej stronie.
```

**Podtytuł:**
```
Nie płacisz osobno za hosting, domenę, zmiany czy teksty.
Wszystko jest wliczone w miesięczny abonament.
```

**Karty (6 sztuk):**

```
Karta 1:
Ikona: Layout (układ strony)
Tytuł: "Profesjonalna strona www"
Tekst: "Zaprojektowana specjalnie dla Twojej branży. Z Twoimi
zdjęciami, ofertą i danymi kontaktowymi. Wygląda świetnie na
telefonie, tablecie i komputerze."

Karta 2:
Ikona: PenTool (pisanie)
Tytuł: "Teksty i copywriting"
Tekst: "Piszemy wszystkie teksty na stronę — od opisu firmy po
ofertę usług. Na bazie Twoich postów z social media, w języku
który trafia do Twoich klientów."

Karta 3:
Ikona: FileText (artykuł)
Tytuł: "Blog z artykułami SEO"
Tekst: "Co miesiąc publikujemy artykuły na Twoim blogu,
zoptymalizowane pod Google. Dzięki temu Twoja strona rośnie
w wynikach wyszukiwania z każdym miesiącem."

Karta 4:
Ikona: Magnet (magnes)
Tytuł: "Lead magnety dla Twojej branży"
Tekst: "Przygotowujemy darmowe materiały (poradniki, checklisty,
kalkulatory), które zbierają adresy e-mail potencjalnych klientów.
Ty dostajesz gotowe leady."

Karta 5:
Ikona: Globe (kula ziemska)
Tytuł: "Domena + hosting + SSL"
Tekst: "Twój własny adres w internecie (np. twojafirma.pl),
szybki serwer i bezpieczne połączenie — wszystko podpięte
i utrzymywane przez nas."

Karta 6:
Ikona: Wrench (klucz)
Tytuł: "Obsługa techniczna i zmiany"
Tekst: "Chcesz zmienić zdjęcie? Dodać nową usługę? Zaktualizować
cennik? Napisz do nas — zrobimy to za Ciebie. Nie musisz logować
się do żadnego panelu."
```

---

### 3.8 SEKCJA "BRANŻE" (dla kogo)

**ID:** `#branze`

**Layout:** H2 centered + grid ikon branżowych (4×2 na desktop) z nazwami branż pod spodem

**Tag:**
```
DLA KOGO TO JEST
```

**H2:**
```
Stworzone dla lokalnych firm, które chcą rosnąć.
```

**Podtytuł:**
```
Obsługujemy dziesiątki branż. Każdą stronę dopasowujemy
do specyfiki Twojej działalności.
```

**Branże (grid ikon):**

```
💇 Fryzjerzy i barberzy
💅 Salony kosmetyczne
🔧 Warsztaty samochodowe
🏗️ Firmy budowlane i remontowe
🍕 Restauracje i gastronomia
📸 Fotografowie
🏋️ Trenerzy personalni
🏠 Usługi dla domu (sprzątanie, ogrodnictwo)
🎨 Rzemieślnicy i artyści
⚖️ Doradcy i konsultanci
🐕 Usługi dla zwierząt
🚚 Transport i przeprowadzki
```

> UWAGA DLA AGENTA: Użyj ikon (Lucide) zamiast emoji w produkcyjnej wersji. Emoji tutaj są placeholderami do identyfikacji branży.

**Pod gridem:**
```
"Nie widzisz swojej branży? Napisz do nas — obsługujemy praktycznie
każdy lokalny biznes."
```

---

### 3.9 SEKCJA "CENNIK"

**ID:** `#cennik`

**Layout:** 3 karty cenowe w rzędzie (desktop), środkowa wyróżniona jako "Najpopularniejszy". Na mobile — kolumna, Biznes na górze.

**Tag:**
```
CENNIK
```

**H2:**
```
Prosta, przejrzysta cena. Bez ukrytych kosztów.
```

**Podtytuł:**
```
Wybierz pakiet, który pasuje do Twojej firmy. Możesz go zmienić
w dowolnym momencie.
```

**Toggle nad cenami:**
```
[ Z opłatą startową ]  /  [ 0 zł na start (umowa 12 mc) ]
```
Aktywny wariant podświetlony. Toggle zmienia wyświetlane ceny.

---

**PAKIET START**

```
Nagłówek: START
Podtytuł: "Profesjonalna wizytówka w sieci"

Wariant A (z opłatą startową):
  Cena setup: 499 zł netto (jednorazowo)
  Cena: 149 zł netto / miesiąc
  Umowa: brak minimum, miesięczne wypowiedzenie

Wariant B (0 zł na start):
  Cena setup: 0 zł
  Cena: 199 zł netto / miesiąc
  Umowa: minimum 12 miesięcy

Co zawiera:
✓ Strona one-page (landing page)
✓ Profesjonalny copywriting
✓ Domena .pl + hosting + SSL
✓ Responsywność (telefon, tablet, komputer)
✓ 2 artykuły blogowe / miesiąc
✓ 1 lead magnet branżowy
✓ Formularz kontaktowy z powiadomieniami e-mail
✓ Google Business Profile — konfiguracja
✓ Podstawowe SEO on-page
✓ Drobne zmiany treści (do 2h / miesiąc)

CTA button: "Zamów darmowe demo →"
```

---

**PAKIET BIZNES** ⭐ Najpopularniejszy

```
Badge: "NAJPOPULARNIEJSZY" (pomarańczowy badge u góry karty)
Nagłówek: BIZNES
Podtytuł: "Pełna strona z marketingiem"

Wariant A:
  Cena setup: 999 zł netto
  Cena: 249 zł netto / miesiąc

Wariant B:
  Cena setup: 0 zł
  Cena: 349 zł netto / miesiąc
  Umowa: 12 mc

Co zawiera:
✓ Wszystko z pakietu Start
✓ Strona multi-page (do 5 podstron)
✓ 4 artykuły blogowe / miesiąc
✓ 2 lead magnety (rotacja sezonowa)
✓ Integracja Google Analytics + miesięczny raport
✓ Widget social media na stronie
✓ Pop-upy CTA / exit intent
✓ Zmiany treści (do 4h / miesiąc)

CTA button: "Zamów darmowe demo →"

Wyróżnienie: Cała karta ma delikatne obramowanie pomarańczowe
lub cień mocniejszy niż pozostałe.
```

---

**PAKIET PREMIUM**

```
Nagłówek: PREMIUM
Podtytuł: "Maksymalny wzrost online"

Wariant A:
  Cena setup: 1 499 zł netto
  Cena: 399 zł netto / miesiąc

Wariant B:
  Cena setup: 0 zł
  Cena: 549 zł netto / miesiąc
  Umowa: 12 mc

Co zawiera:
✓ Wszystko z pakietu Biznes
✓ Strona rozbudowana (do 10 podstron)
✓ 8 artykułów blogowych / miesiąc
✓ Newsletter — konfiguracja + automatyzacja
✓ Landing pages pod kampanie reklamowe
✓ Testy A/B przycisków i formularzy
✓ Priorytetowe wsparcie (odpowiedź do 4h)
✓ Zmiany treści (do 8h / miesiąc)

CTA button: "Zamów darmowe demo →"
```

---

**Pod cennikiem — nota:**
```
Wszystkie ceny netto (+ 23% VAT). Cena obejmuje absolutnie
wszystko — bez ukrytych opłat za hosting, domenę czy zmiany.
Faktura VAT co miesiąc. Płatność kartą lub przelewem.
```

---

### 3.10 SEKCJA "PORÓWNANIE"

**ID:** `#porownanie`

**Layout:** Tabela porównawcza. GotowaWitryna wyróżniona kolorem.

**Tag:**
```
PORÓWNANIE
```

**H2:**
```
Jak wypadamy na tle alternatyw?
```

**Tabela:**

```
|                           | GotowaWitryna     | Agencja           | Freelancer        | Zrób to sam (Wix/KlikAI) |
|---------------------------|-------------------|-------------------|-------------------|--------------------------|
| Koszt na start            | od 0 zł           | 2 500 – 9 000 zł  | 1 500 – 3 000 zł  | 0 zł                     |
| Koszt miesięczny          | od 149 zł         | 0 zł (brak obsługi)| 0 zł (brak obsługi)| 39 – 99 zł              |
| Czas realizacji           | 24 – 48h          | 4 – 8 tygodni     | 2 – 4 tygodnie    | Kilka godzin (sam)       |
| Artykuły blogowe          | ✓ W cenie         | ✗ Osobna opłata   | ✗ Osobna opłata   | ✗ Sam piszesz            |
| Lead magnety              | ✓ W cenie         | ✗ Osobna opłata   | ✗                 | ✗                        |
| Obsługa techniczna        | ✓ W cenie         | ✗ Osobna opłata   | ✗ Za każdą zmianę | ✗ Sam ogarniasz          |
| Hosting + domena + SSL    | ✓ W cenie         | ✗ Osobno          | ✗ Osobno          | ✓ Częściowo              |
| Zmiany treści w cenie     | ✓ Do Xh/mc        | ✗ Płatne          | ✗ Płatne          | ✓ Sam robisz             |
| Twój wkład czasu          | ~5 min (podaj link)| Wiele godzin      | Wiele godzin      | Wiele godzin             |
```

> UWAGA DLA AGENTA: Kolumna "GotowaWitryna" powinna być wizualnie wyróżniona — np. tło lekko pomarańczowe, header pogrubiony. Checkmarki (✓) w kolorze zielonym, iksy (✗) w szarym.

---

### 3.11 SEKCJA "REALIZACJE"

**ID:** `#realizacje`

**Layout:** Grid 3 kolumny (desktop), karty z mockupami stron.

**Tag:**
```
REALIZACJE
```

**H2:**
```
Zobacz przykładowe strony, które stworzyliśmy.
```

**Podtytuł:**
```
Każda z tych stron powstała na bazie profilu na Facebooku —
w mniej niż 24 godziny.
```

**Karty realizacji (3-6 sztuk):**

Każda karta zawiera:
- Mockup strony (screenshot w ramce laptopa/telefonu)
- Nazwa branży (np. "Salon fryzjerski")
- Krótki opis: "Strona stworzona na bazie profilu z 340 postami i 127 opiniami"
- Badge: "Start" / "Biznes" / "Premium" (jaki pakiet)

```
Realizacja 1:
Branża: Salon fryzjerski
Opis: "Profesjonalna wizytówka z galerią fryzur, cennikiem i systemem rezerwacji."
Pakiet: Biznes

Realizacja 2:
Branża: Warsztat samochodowy
Opis: "Strona z wyceną usług, mapą dojazdu i formularzem umawiania na wizytę."
Pakiet: Start

Realizacja 3:
Branża: Restauracja
Opis: "Menu online, rezerwacja stolików i galeria wnętrza z profilu na Instagramie."
Pakiet: Biznes

Realizacja 4:
Branża: Trener personalny
Opis: "Oferta treningów, lead magnet z planem 7-dniowym i zapisy na konsultację."
Pakiet: Premium

Realizacja 5:
Branża: Firma budowlana
Opis: "Portfolio realizacji z Facebooka, kalkulator wyceny i formularz kontaktowy."
Pakiet: Biznes

Realizacja 6:
Branża: Salon kosmetyczny
Opis: "Cennik zabiegów, galeria efektów, blog z poradami i system rezerwacji."
Pakiet: Premium
```

> UWAGA DLA AGENTA: Na start mogą to być demo / fikcyjne realizacje zbudowane do celów prezentacyjnych. Mockupy powinny wyglądać realistycznie i profesjonalnie. Docelowo zostaną zastąpione prawdziwymi case studies.

---

### 3.12 SEKCJA "OPINIE"

**ID:** `#opinie`

**Layout:** Karuzela / slider z kartami opinii (3 widoczne na desktop, 1 na mobile). Auto-slide co 5s z opcją manualną.

**Tag:**
```
OPINIE KLIENTÓW
```

**H2:**
```
Co mówią nasi klienci.
```

**Karty opinii (placeholder — do zastąpienia prawdziwymi):**

```
Opinia 1:
Imię: Anna K.
Branża: Salon kosmetyczny, Wrocław
Tekst: "Wysłałam link do Facebooka w poniedziałek, a we wtorek rano
miałam gotowy projekt strony. Byłam w szoku, jak dobrze to wygląda.
Polecam każdemu, kto nie ma czasu na bawienie się w technologię."
Ocena: ⭐⭐⭐⭐⭐

Opinia 2:
Imię: Marek W.
Branża: Warsztat samochodowy, Kraków
Tekst: "Latami zastanawiałem się nad stroną, ale ceny agencji mnie
odstraszały. Tutaj za 149 zł miesięcznie mam stronę, blog i ktoś
się tym za mnie zajmuje. W końcu jestem w Google."
Ocena: ⭐⭐⭐⭐⭐

Opinia 3:
Imię: Katarzyna L.
Branża: Trener personalny, Warszawa
Tekst: "Lead magnet, który mi przygotowali, zbiera 10-15 maili
tygodniowo. Połowa z nich umawia się na konsultację. Strona
zwróciła się w pierwszym miesiącu."
Ocena: ⭐⭐⭐⭐⭐

Opinia 4:
Imię: Tomasz B.
Branża: Firma budowlana, Lublin
Tekst: "Nie musiałem nic robić. Podałem Facebooka, powiedziałem co
chcę zmienić w demo — i tyle. Blog piszą za mnie, zmiany robią
w jeden dzień. Dokładnie to, czego szukałem."
Ocena: ⭐⭐⭐⭐⭐
```

> UWAGA DLA AGENTA: Placeholdery. Zastąpić prawdziwymi opiniami po zebraniu. Na start można oznaczyć subtelnie jako "Opinie beta-testerów" lub ukryć sekcję do czasu uzyskania prawdziwych testimoniali.

---

### 3.13 SEKCJA "FAQ"

**ID:** `#faq`

**Layout:** Accordion (kliknij pytanie → rozwiń odpowiedź). Dwie kolumny na desktop (po 4-5 pytań w każdej), jedna kolumna na mobile.

**Tag:**
```
FAQ
```

**H2:**
```
Najczęstsze pytania.
```

**Pytania i odpowiedzi:**

```
P: Ile muszę na to poświęcić czasu?
O: Dosłownie 2-5 minut. Podajesz nam link do swojego profilu na
Facebooku lub Instagramie — i to wszystko. My robimy całą resztę.
Jedyny moment, gdy angażujesz się bardziej, to przegląd gotowego
projektu i ewentualne uwagi.

P: Czy muszę znać się na technologii?
O: Absolutnie nie. Nie musisz wiedzieć co to hosting, domena czy
WordPress. My zajmujemy się całą technologią. Jeśli umiesz wysłać
wiadomość na Messengerze — to umiesz współpracować z nami.

P: Ile kosztuje strona?
O: Pakiet Start to 149 zł netto miesięcznie (+ jednorazowa opłata
startowa 499 zł) lub 199 zł netto miesięcznie z umową na 12 miesięcy
bez opłaty startowej. W cenie masz wszystko — stronę, hosting,
domenę, blog, lead magnet i obsługę techniczną.

P: Czy mogę zobaczyć stronę przed zapłatą?
O: Tak! Projekt demo przygotowujemy za darmo i bez zobowiązań.
Dopiero gdy go zaakceptujesz, uruchamiamy stronę i zaczyna się
abonament.

P: Co to jest lead magnet?
O: To darmowy materiał (np. poradnik PDF, checklista, kalkulator),
który umieszczamy na Twojej stronie. Klient pobiera go w zamian za
podanie swojego adresu e-mail — a Ty dostajesz kontakt do potencjalnego
klienta. Przygotowujemy go za Ciebie, dopasowany do Twojej branży.

P: Co jeśli projekt mi się nie spodoba?
O: Wprowadzamy poprawki na podstawie Twoich uwag — bez dodatkowych
opłat. Jeśli mimo poprawek nie chcesz kontynuować — nic nie płacisz.
Nie podpisujesz żadnej umowy na etapie demo.

P: Ile czekam na gotową stronę?
O: Projekt demo otrzymujesz w ciągu 24 godzin od podania linka do
profilu. Po akceptacji — uruchomienie strony na żywo trwa kolejne 24h.
Łącznie: od Twojego linka do działającej strony w mniej niż 48 godzin.

P: Co dostaje moja firma każdego miesiąca?
O: W zależności od pakietu: 2-8 artykułów blogowych zoptymalizowanych
pod Google, lead magnet branżowy, pełną obsługę techniczną (hosting,
bezpieczeństwo, aktualizacje), a także Twoje drobne zmiany treści
realizowane na bieżąco.

P: Czy strona będzie widoczna w Google?
O: Tak. Każdą stronę optymalizujemy pod SEO (pojawianie się w Google).
Dodatkowo artykuły blogowe, które publikujemy co miesiąc, stopniowo
zwiększają Twoją widoczność na frazy, których szukają Twoi klienci.

P: Czy mogę zrezygnować?
O: Tak. Jeśli wybrałeś wariant z opłatą startową — wypowiadasz umowę
z miesięcznym okresem wypowiedzenia, bez kar. Jeśli wybrałeś wariant
"0 zł na start" — umowa trwa minimum 12 miesięcy, a potem również
przechodzi na miesięczne wypowiedzenie.

P: Kto jest właścicielem strony?
O: Domena jest rejestrowana na Twoje dane — należy do Ciebie. Treści
na stronie (teksty, zdjęcia) są Twoją własnością. Jeśli zrezygnujesz
z usługi, możesz przenieść domenę do innego dostawcy.
```

---

### 3.14 SEKCJA "CTA FINAL" (zamknięcie)

**ID:** `#cta-final`

**Layout:** Full-width, tło gradient z primary granatu do ciemniejszego granatu. Tekst biały. Centered.

**H2:**
```
Twoja profesjonalna strona czeka.
Podaj link — resztą zajmiemy się my.
```

**Podtytuł:**
```
Darmowy projekt w 24h. Bez zobowiązań. Decydujesz po zobaczeniu efektu.
```

**Formularz inline (3 pola + button):**
```
[Nazwa firmy       ]
[Adres e-mail      ]
[Link do profilu FB / IG]

[ Otrzymaj darmowe demo → ]  (pomarańczowy button, duży)
```

**Pod formularzem (trust):**
```
🔒 Twoje dane są bezpieczne. Nie spamujemy.
Używamy ich wyłącznie do przygotowania Twojego projektu.
```

---

### 3.15 FOOTER

**Layout:** 3 kolumny na desktop, stacked na mobile. Tło: ciemny granat (`#1B2A4A`). Tekst: biały/jasnoszary.

```
KOLUMNA 1 — Branding
Logo: GotowaWitryna (biały)
Tekst: "Profesjonalne strony internetowe
dla małych firm. Z Twojego social media,
w 24 godziny."

KOLUMNA 2 — Linki
- Jak to działa
- Co dostajesz
- Cennik
- Realizacje
- FAQ

KOLUMNA 3 — Kontakt
E-mail: kontakt@gotowawitryna.pl
Telefon: [numer]
Social media ikony: Facebook, Instagram, LinkedIn

---

Dolny pasek:
"© 2026 GotowaWitryna. Wszystkie prawa zastrzeżone."
Linki: Polityka prywatności | Regulamin
```

---

## 4. WYMAGANIA TECHNICZNE

### 4.1 Stack

| Warstwa | Technologia |
|---------|-------------|
| Framework | Next.js 14+ (App Router) lub Astro 4+ |
| Styling | Tailwind CSS 3+ |
| Animacje | Framer Motion (React) lub CSS animations |
| Formularze | React Hook Form + walidacja Zod |
| Email form submit | API route → webhook (np. do Make/Zapier/własny backend) |
| Hosting | Vercel lub Cloudflare Pages |
| Analytics | Google Analytics 4 + Google Tag Manager |
| CMS (opcjonalnie) | Sanity lub Contentful (do realizacji/opinii/FAQ) |

### 4.2 Performance targets

| Metryka | Cel |
|---------|-----|
| Lighthouse Performance | > 95 |
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Total page weight | < 500KB (bez zdjęć) |
| Time to Interactive | < 3s na 3G |

### 4.3 SEO on-page

- **Title tag:** `GotowaWitryna — Profesjonalna strona www dla Twojej firmy w 24h`
- **Meta description:** `Podaj link do Facebooka, a my zbudujemy Ci profesjonalną stronę www w 24 godziny. Hosting, blog, lead magnety i obsługa techniczna w cenie. Od 149 zł/mc.`
- **OG image:** Mockup strony z logiem GotowaWitryna, rozmiar 1200×630px
- **Structured data:** LocalBusiness + FAQPage schema
- **Canonical URL:** `https://www.gotowawitryna.pl/`
- **Robots:** `index, follow`
- **Sitemap:** automatycznie generowany
- **hreflang:** `pl` (na start, `en-GB` po ekspansji UK)

### 4.4 Formularze

**Formularz kontaktowy (hero + CTA final):**

Pola:
1. `company_name` — tekst, wymagany, placeholder "Nazwa firmy"
2. `email` — email, wymagany, walidacja formatu
3. `social_link` — URL, wymagany, walidacja (facebook.com/* lub instagram.com/*), placeholder "Link do profilu (Facebook lub Instagram)"

Walidacja:
- Frontend: inline validation, red border + komunikat pod polem
- Social link: regex sprawdzający czy to link do FB/IG. Jeśli nie — komunikat "Podaj link do profilu na Facebooku lub Instagramie"

Po submicie:
- Button zmienia się na "Wysłano! ✓" (zielony, disabled)
- Pojawia się komunikat: "Dziękujemy! Twój projekt demo będzie gotowy w ciągu 24 godzin. Sprawdź skrzynkę e-mail."
- Dane idą do:
  - Webhook (np. Make/Zapier) → CRM
  - Email notification do zespołu
  - Opcjonalnie: auto-response do klienta z potwierdzeniem

### 4.5 Cookies & GDPR

- Cookie banner: minimalistyczny, na dole ekranu
- Opcja "Akceptuję" / "Tylko niezbędne"
- Google Analytics ładowany dopiero po akceptacji
- Polityka prywatności i regulamin jako osobne podstrony

### 4.6 Responsywność (breakpoints)

| Breakpoint | Szerokość | Uwagi |
|------------|-----------|-------|
| Mobile | < 640px | Single column, hamburger menu |
| Tablet | 640–1024px | 2 kolumny, karty cenowe stacked |
| Desktop | > 1024px | Pełny layout, 3 kolumny cennika |
| Large desktop | > 1280px | Max-width 1200px, centered |

---

## 5. PLIKI / ASSETY DO PRZYGOTOWANIA

| Plik | Format | Opis |
|------|--------|------|
| Logo | SVG + PNG | Tekst "GotowaWitryna", wariant jasny i ciemny |
| OG Image | PNG 1200×630 | Mockup strony z logiem, do social sharing |
| Favicon | ICO + SVG | Litera "G" lub ikona symboliczna |
| Mockupy realizacji | PNG/WebP | 6 mockupów stron w ramkach urządzeń |
| Ikony branż | SVG (Lucide) | 12 ikon branżowych |
| Hero mockup | PNG/WebP | Telefon/laptop z przykładową stroną |
| Before/After | SVG/ilustracja | Wizualizacja transformacji FB → strona |

---

## 6. PODSUMOWANIE PRIORYTETÓW DLA AGENTA

### Must have (wersja MVP)
1. ✅ Nawigacja sticky z CTA
2. ✅ Hero z formularzem i mockupem
3. ✅ Social proof bar
4. ✅ Sekcja Problem (3 karty)
5. ✅ Sekcja Proces (4 kroki)
6. ✅ Sekcja Co Dostajesz (6 kart)
7. ✅ Cennik (3 pakiety z toggle)
8. ✅ Porównanie (tabela)
9. ✅ FAQ (accordion)
10. ✅ CTA Final z formularzem
11. ✅ Footer
12. ✅ Mobile responsive
13. ✅ SEO meta tags + OG
14. Sekcja Branże (grid ikon)
15. Sekcja Realizacje (mockupy)
16. Sekcja Opinie (karuzela)
17. Cookie banner
18. Scroll animations (fade-up)
19. Count-up animation na social proof bar
20. Sanity CMS integration dla edytowalnego contentu

### Future
21. Panel klienta (Filament)
22. Automatyczne generowanie demo z linku FB
23. Stripe checkout integration
24. Blog na gotowawitryna.pl (meta-SEO)
25. Referral program landing page
26. Wersja angielska (UK expansion)
