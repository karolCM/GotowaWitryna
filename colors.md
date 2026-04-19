
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