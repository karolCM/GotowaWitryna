# GotowaWitryna — Design System & Brand Guidelines

> Dokument opisuje kompletny system designu marki GotowaWitryna. Służy jako punkt odniesienia dla każdego nowego komponentu, strony lub materiału marketingowego.

---

## 1. Tożsamość marki

### Misja
Profesjonalne strony internetowe dla małych, lokalnych firm — gotowe w 24 godziny, bez angażowania czasu właściciela.

### Persona marki
- **Ton komunikacji:** Ekspercki, ale przystępny. Konkretny, bez żargonu technicznego.
- **Charakter:** Pomocny, szybki, godny zaufania, nowoczesny.
- **Unikamy:** technicznych terminów, ogólników, pasywnego języka.

### Logo
```
Gotowa Witryna
^^^^^^ ^^^^^^^
navy   orange gradient
```
- Wordmark: `Gotowa` w `#1B2A4A` (primary-950) + `Witryna` w gradiencie od `#F97316` do `#EA580C`
- Font: **Outfit Bold** (font-display)
- Nie używamy oddzielnej ikony/sygnet — logo to sam tekst

---

## 2. Paleta kolorów

### Kolory główne

| Token | Hex | Użycie |
|-------|-----|--------|
| `primary-950` | `#1B2A4A` | Tekst nagłówków, ciemne tła, CTA dark |
| `primary-900` | `#102A43` | Ciemne sekcje tła |
| `primary-700` | `#334E68` | Pomocnicze teksty na ciemnym tle |

### Kolor akcentowy — Orange (główny CTA)

| Token | Hex | Użycie |
|-------|-----|--------|
| `accent-50` | `#FFF7ED` | Tła banerów, badge backgrounds |
| `accent-100` | `#FFEDD5` | Hover tła, badge borders fill |
| `accent-200` | `#FED7AA` | Delikatne bordera |
| `accent-400` | `#FB923C` | Ikony, highlights |
| `accent-500` | `#F97316` | **Kolor główny CTA — primary brand color** |
| `accent-600` | `#EA580C` | Hover state dla accent-500, gradienty |
| `accent-700` | `#C2410C` | Aktywny / pressed state |

### Gradient markowy
```css
/* Używany na przyciskach CTA, akcentach, ikonie logo */
background: linear-gradient(135deg, #F97316 0%, #EA580C 100%);

/* Tekst gradient */
background: linear-gradient(to right, #F97316, #EA580C);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### Kolory tła sekcji

| Kolor | Hex | Token | Kiedy |
|-------|-----|-------|-------|
| Biały | `#FFFFFF` | `white` | Główne sekcje treści |
| Szary jasny | `#F8F9FA` | `bg-light` / `gray-50` | Sekcje alternujące |
| Orange tint | `from-orange-50 to-white` | — | Hero, sekcje akcentowane |
| Dark navy | `#1B2A4A` | `primary-950` | CTA finalne, footer |

### Kolory tekstu

| Token | Hex | Użycie |
|-------|-----|--------|
| `text-primary` | `#1E293B` | Nagłówki, ważna treść |
| `text-secondary` | `#64748B` | Body text, opisy, podpisy |
| `gray-600` | `#4B5563` | Alternatywny body text |
| `gray-500` | `#6B7280` | Muted text, labels |

### Kolory statusów

| Status | Hex | Użycie |
|--------|-----|--------|
| Success | `#22C55E` | Checkmarki, powodzenie formularza |
| Error/Before | `#EF4444` | X-marki, stany "before" |
| Warning | `#FBBF24` | Gwiazdki ocen, wyróżnienia |

---

## 3. Typografia

### Font Stack
```css
--font-display: "Outfit", "DM Sans", system-ui, sans-serif;
--font-body:    "DM Sans", system-ui, sans-serif;
```

**Import (Google Fonts):**
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
```

### Skala typograficzna

| Rola | Klasa Tailwind | Rozmiar | Font | Weight |
|------|---------------|---------|------|--------|
| Hero H1 | `text-4xl sm:text-5xl lg:text-[58px]` | 36–58px | Outfit | 800 (extrabold) |
| Section H2 | `text-3xl sm:text-4xl lg:text-[42px]` | 30–42px | Outfit | 700 (bold) |
| Card H3 | `text-xl` | 20px | Outfit | 700 (bold) |
| Body large | `text-lg sm:text-xl` | 18–20px | DM Sans | 400 |
| Body base | `text-base` | 16px | DM Sans | 400 |
| Body small | `text-sm` | 14px | DM Sans | 400–500 |
| Label/Badge | `text-sm` | 14px | DM Sans | 700 (bold) |
| Micro | `text-xs` | 12px | DM Sans | 400–600 |

### Zasady typograficzne
- **Line-height nagłówków:** `leading-[1.1]` dla hero, `leading-tight` dla section headings
- **Line-height body:** `leading-relaxed` (1.625)
- **Letter-spacing banerów/labelek:** `tracking-wider` lub `tracking-widest`
- **Uppercase:** tylko dla małych labelek sekcji i banerów statusu (np. "Wszystko w cenie", "Nasze rozwiązanie")

---

## 4. Spacing & Layout

### Container
```css
.container-custom {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}
```

### Section padding
```css
.section-padding {
  padding-top: 100px;
  padding-bottom: 100px;
}
/* Mobile */
@media (max-width: 768px) {
  .section-padding {
    padding-top: 64px;
    padding-bottom: 64px;
  }
}
```

### Grid layouts

| Kontekst | Grid | Gap |
|----------|------|-----|
| 2-kolumnowy (hero, problem) | `grid lg:grid-cols-2` | `gap-12 lg:gap-16` |
| 3-kolumnowy (features, pricing, how-it-works) | `grid md:grid-cols-3` | `gap-6`–`gap-8` |
| 4-kolumnowy (industries) | `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4` | `gap-4` |
| Before/After | `grid grid-cols-1 lg:grid-cols-[1fr_80px_1fr]` | `gap-0` |

### Spacing tokens (najczęściej używane)

| Wartość | px | Użycie |
|---------|----|--------|
| `gap-4` | 16px | Kafelki, małe gridy |
| `gap-6` | 24px | Feature cards, standard grid |
| `gap-8` | 32px | Pricing cards, większe gridy |
| `gap-12` | 48px | Section columns |
| `mb-6` | 24px | Po nagłówkach sekcji |
| `mb-8` / `mb-10` | 32–40px | Po subheadline w hero |
| `mb-14` / `mb-16` | 56–64px | Po header sekcji przed gridem |
| `p-6` / `p-8` | 24–32px | Padding kart |

---

## 5. Komponenty UI

### 5.1 Badge / Label sekcji

```tsx
<span className="inline-block text-sm font-bold text-orange-600 uppercase tracking-wider mb-4 px-4 py-2 rounded-full bg-orange-50 border border-orange-200">
  Nasze rozwiązanie
</span>
```

**Zasady:**
- Zawsze uppercase
- Zawsze nad nagłówkiem H2 sekcji
- Kolor: `text-orange-600` + `bg-orange-50` + `border-orange-200`
- Rounded-full, px-4 py-2

---

### 5.2 Przyciski (CTAs)

#### Primary CTA
```tsx
<a className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all duration-300">
  Otrzymaj darmowe demo
  <ArrowRight size={20} />
</a>
```

#### Secondary CTA
```tsx
<a className="inline-flex items-center gap-2 px-10 py-4 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold rounded-xl transition-all duration-300">
  Zobacz jak to działa
</a>
```

#### Reguły buttonów
| Atrybut | Wartość |
|---------|---------|
| Padding | `px-10 py-4` (primary), `px-6 py-3` (secondary) |
| Border-radius | `rounded-xl` (12px) |
| Font weight | `font-semibold` (600) |
| Transition | `transition-all duration-300` |
| Hover primary | `hover:from-orange-600 hover:to-orange-700` + shadow |
| Hover secondary | `hover:bg-gray-900 hover:text-white` |
| Motion | `whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}` |

---

### 5.3 Karty (Cards)

#### Feature Card
```tsx
<div className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-orange-200 transition-all duration-500 cursor-pointer overflow-hidden">
  {/* Ikona */}
  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 group-hover:from-orange-500 group-hover:to-orange-600 flex items-center justify-center mb-6 transition-all duration-500">
    <Icon size={32} className="text-orange-600 group-hover:text-white" />
  </div>
  <h3 className="font-display text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600">
    Tytuł
  </h3>
  <p className="text-gray-600 leading-relaxed">Opis</p>
</div>
```

**Anatomia karty:**
- `rounded-2xl` (16px) — border radius
- `border-2 border-gray-100` → `hover:border-orange-200`
- Padding: `p-6` lub `p-8`
- Ikona: `w-14/16 h-14/16 rounded-xl/2xl` z gradientem orange (zmiana na hover)
- Hover: `whileHover={{ y: -8 }}` (Framer Motion)

#### Trust Badge (mały)
```tsx
<div className="flex items-center gap-2.5 px-4 py-2 rounded-lg bg-white border border-orange-100 shadow-sm">
  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
    <Icon size={16} className="text-white" />
  </div>
  <span className="text-sm font-medium text-gray-900">Bez zobowiązań</span>
</div>
```

---

### 5.4 Sekcja nagłówka (Header pattern)

Każda sekcja zaczyna się od wycentrowanego bloku:

```tsx
<div className="text-center max-w-3xl mx-auto mb-16">
  {/* Badge */}
  <span className="inline-block text-sm font-bold text-orange-600 uppercase tracking-wider mb-4 px-4 py-2 rounded-full bg-orange-50 border border-orange-200">
    Label sekcji
  </span>

  {/* H2 */}
  <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 leading-tight mb-6">
    Nagłówek z{" "}
    <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
      akcentowanym słowem
    </span>
    .
  </h2>

  {/* Lead */}
  <p className="text-lg text-gray-600">
    Opis sekcji — jeden do dwóch zdań.
  </p>
</div>
```

**Reguły nagłówków sekcji:**
- Max-width: `max-w-3xl mx-auto`
- Marginowanie: `mb-16` po headerze
- Gradient accent: zawsze na 1–2 kluczowych słowach w H2
- Lead paragraph: `text-lg text-gray-600`

---

### 5.5 Ikony

- **Biblioteka:** [Lucide React](https://lucide.dev)
- **Rozmiary:** `size={14}` (micro) / `size={16}` (small) / `size={20}` (medium) / `size={24}` (large) / `size={28-32}` (featured)
- **Stroke width:** domyślnie 2, czasem `stroke-2` explicite
- **Ikony w kółkach/kafelkach:** zawsze centrowane w `flex items-center justify-center`

---

### 5.6 Formularz

```tsx
<input
  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 outline-none transition-all duration-300"
/>
<label className="block text-sm font-semibold text-gray-900 mb-2">
  Label
</label>
```

**Reguły formularzy:**
- `rounded-xl` (12px)
- Border: `border-2 border-gray-200` → focus `border-orange-500`
- Focus ring: `focus:ring-4 focus:ring-orange-500/20`
- Spacing wewnętrzny: `px-4 py-3`
- Label: `text-sm font-semibold text-gray-900 mb-2`

---

### 5.7 FAQ Accordion

```tsx
<button
  className="w-full flex items-center justify-between py-6 text-left group"
  aria-expanded={open}
>
  <span className="font-display text-lg md:text-xl text-gray-900 group-hover:text-orange-600 transition-colors pr-8">
    Pytanie?
  </span>
  <motion.span animate={{ rotate: open ? 180 : 0 }}>
    <ChevronDown size={20} />
  </motion.span>
</button>
```

- Separator: `border-b border-gray-200 last:border-0`
- Animacja rozwinięcia: Framer Motion `height: 0 → "auto"`
- Padding: `py-6` per item

---

### 5.8 Pricing Card

```tsx
<div className={`relative rounded-3xl p-8 pt-12 border-2 ${
  popular
    ? "border-orange-300 shadow-xl bg-gradient-to-br from-orange-50 to-white"
    : "border-gray-200 bg-white hover:border-orange-200 hover:shadow-lg"
}`}>
  {/* Popular badge */}
  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
    <span className="px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold uppercase rounded-full shadow-lg">
      Najpopularniejszy
    </span>
  </div>
  ...
</div>
```

- `rounded-3xl` (24px) dla pricing cards
- Popular badge: absolutne pozycjonowanie `-top-4`
- Cena: `text-5xl font-extrabold` z gradientem dla popular

---

## 6. System cieni

```css
/* Premium shadow system — oparty na orange glow */
.shadow-premium-sm  { box-shadow: 0 2px 8px -2px rgba(249,115,22,.10), 0 4px 12px -4px rgba(249,115,22,.05); }
.shadow-premium-md  { box-shadow: 0 4px 16px -4px rgba(249,115,22,.15), 0 8px 24px -6px rgba(249,115,22,.10); }
.shadow-premium-lg  { box-shadow: 0 8px 24px -4px rgba(249,115,22,.20), 0 16px 40px -8px rgba(249,115,22,.15); }
.shadow-premium-xl  { box-shadow: 0 12px 32px -4px rgba(249,115,22,.25), 0 24px 48px -12px rgba(249,115,22,.20); }
```

**Użycie:**
| Kontekst | Cień |
|----------|------|
| Karty domyślne | brak / `shadow-sm` |
| Karty na hover | `hover:shadow-lg` |
| Floating elements | `shadow-premium-lg` |
| Pricing popular | `shadow-xl` |
| CTA button primary | `shadow-lg hover:shadow-orange-500/30` |

---

## 7. Animacje

### Biblioteka
**Framer Motion** — wszystkie animacje w projekcie

### Wzorce wejścia (enter animations)

```tsx
// Fade up — domyślny dla elementów
{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } }

// Fade up delayed (stagger)
{ initial: { opacity: 0, y: 30 }, transition: { duration: 0.5, delay: index * 0.1 } }

// Fade from left
{ initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.7 } }

// Fade from right
{ initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.8, delay: 0.3 } }

// Scale in (for badges, popups)
{ initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.5 } }
```

### Scroll-triggered (useInView)
```tsx
const ref = useRef<HTMLDivElement>(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });

// Trigger: animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
```

### Hover animations
```tsx
// Karty
whileHover={{ y: -8 }}

// Przyciski
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}

// Trust badges
whileHover={{ scale: 1.05 }}

// Nav links
whileHover={{ y: -2 }}

// Social icons
whileHover={{ scale: 1.1, y: -2 }}
```

### Continuous animations (nieskończone)
```tsx
// Rotating icon (badge)
animate={{ rotate: [0, 360] }}
transition={{ duration: 3, repeat: Infinity, ease: "linear" }}

// Floating element
animate={{ y: [0, -15, 0] }}
transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}

// Breathing glow
animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}

// Scroll indicator
animate={{ y: [0, 12, 0] }}
transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
```

### Stagger (lista elementów)
```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
```

### Timing conventions

| Typ | Duration |
|-----|----------|
| Mikro (badge, scale) | `0.3–0.4s` |
| Standard (fade) | `0.5–0.6s` |
| Slow (hero H1, slide) | `0.7–0.8s` |
| Transition border/color | `duration-300` |
| Transition shadow/card | `duration-400–500` |
| Easing premium | `[0.22, 1, 0.36, 1]` |

---

## 8. Efekty tła

### Animated blobs (hero sections)
```tsx
<motion.div
  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-100/50 to-orange-200/30 blur-[120px]"
/>
```

### Grid pattern overlay
```tsx
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]" />
```

### Glassmorphism
```css
.glass {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

---

## 9. Border radius conventions

| Kontekst | Klasa | px |
|----------|-------|----|
| Duże karty / pricing | `rounded-3xl` | 24px |
| Standardowe karty | `rounded-2xl` | 16px |
| Małe karty / kafelki | `rounded-xl` | 12px |
| Przyciski | `rounded-xl` | 12px |
| Inputy | `rounded-xl` | 12px |
| Ikony w kafelkach | `rounded-xl` lub `rounded-2xl` | 12–16px |
| Ikony w kółkach | `rounded-full` | — |
| Badge / pill | `rounded-full` | — |
| Małe elementy | `rounded-lg` | 8px |

---

## 10. Struktura sekcji (page pattern)

Kolejność sekcji na stronie głównej:

```
1. Navbar (fixed, transparent → solid on scroll)
2. Hero          — white/orange-tint bg, min-h-[100dvh]
3. SocialProofBar — dark bg, logos
4. Problem       — white bg, left content / right cards
5. Solution      — gray-50 bg, before/after comparison
6. Process       — gray-50 bg, 3-step numbered
7. Features      — gray-50 bg, 3-col grid
8. Industries    — white bg, 4-col grid z linkami
9. Pricing       — white→blue-50 gradient, 3 cards
10. Comparison   — white bg, table
11. Portfolio    — gray-50 bg, mockups
12. Testimonials — white bg, cards
13. FAQ          — white bg, accordion
14. CTAFinal     — primary-950 bg, dark form
15. Footer       — primary-950 gradient, 3-col
```

**Alternacja tła sekcji:** white → gray-50 → white → gray-50 (nie dwie white lub dwie gray-50 obok siebie).

---

## 11. Dostępność

- **Focus visible:** `outline: 2px solid #F97316; outline-offset: 2px` na wszystkich elementach interaktywnych
- **aria-expanded:** na accordion buttons
- **aria-label:** na ikonach bez tekstu (social links, hamburger)
- **Kontrast:** tekst `text-gray-600` (#4B5563) na białym tle spełnia WCAG AA
- **Semantyczny HTML:** `<section>`, `<nav>`, `<main>`, `<footer>`, `<h1>`→`<h3>` (nie pomijamy poziomów)
- **Scroll smooth:** `scroll-behavior: smooth` na `<html>`

---

## 12. SEO conventions (Next.js)

### Metadata pattern per page
```tsx
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Tytuł strony | GotowaWitryna",       // max ~60 znaków
    description: "Opis strony...",                 // max ~155 znaków
    keywords: ["słowo kluczowe", ...],
    alternates: { canonical: "https://gotowawitryna.pl/sciezka" },
    openGraph: {
      title: "...", description: "...", url: "...",
      siteName: "GotowaWitryna", locale: "pl_PL", type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }]
    },
    twitter: { card: "summary_large_image", ... },
    robots: { index: true, follow: true }
  };
}
```

### JSON-LD schemas używane w projekcie
- `ProfessionalService` — strona główna
- `FAQPage` — strona główna + landing pages branżowe
- `Service` — landing pages branżowe
- `BreadcrumbList` — landing pages branżowe

### URL structure
```
/ — strona główna
/branza/[slug] — landing pages branżowe (12 stron)
/regulamin
/polityka-prywatnosci
/sitemap.xml — auto-generated
/robots.txt — auto-generated
```

---

## 13. Tech Stack

| Warstwa | Technologia |
|---------|-------------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v4 |
| Animacje | Framer Motion |
| Ikony | Lucide React |
| Język | TypeScript (strict) |
| Fonty | Google Fonts (Outfit + DM Sans) |
| Analytics | Google Analytics (G-WL1JTXW3D6) |
| Rendering | SSG (generateStaticParams) |

---

## 14. Checklist nowego komponentu

Przed dodaniem nowego komponentu lub sekcji sprawdź:

- [ ] Używa kolorów z palety (nie hardcode hex)
- [ ] Badge sekcji nad H2 (uppercase, orange pill)
- [ ] Gradient accent na kluczowym słowie w H2
- [ ] Animacja wejścia z `useInView` + `once: true`
- [ ] Hover state na kartach (`y: -8` lub `scale: 1.02`)
- [ ] `rounded-2xl` lub `rounded-3xl` na kartach
- [ ] `border-2` border z hover zmianą na orange
- [ ] Alternacja tła sekcji (white/gray-50)
- [ ] Responsive: mobile-first, breakpointy `sm:` `md:` `lg:`
- [ ] `font-display` (Outfit) na nagłówkach, `font-body` (DM Sans) na tekście
- [ ] `aria-*` atrybuty na elementach interaktywnych
- [ ] `"use client"` dyrektywę jeśli używa hooks/framer-motion
