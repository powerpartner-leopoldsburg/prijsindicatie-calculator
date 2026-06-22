# Powerpartner Design System

A brand & UI system for **Powerpartner**, a Belgian solar-panel and home-battery installation company. This system lets design agents produce on-brand interfaces, landing pages, ads and assets that match Powerpartner's strict visual identity and Dutch, informal tone of voice.

> **Source of truth:** `uploads/CLAUDE.md` (the company's AI-agent brand brief). Everything here is derived from it. No Figma file or live codebase was provided — the brand brief is authoritative. If you have access to the live GHL landing pages or the Canva Brand Kit (`kAFseh5BvV4`), cross-check against those.

## Company context

- **Powerpartner** — zonnepanelen, thuisbatterijen, EMS, laadpalen.
- **Locatie:** Vaartstraat 23, 3970 Leopoldsburg, België.
- **Markten:** Belgisch Limburg (BE) + zuidelijk Noord-Brabant (NL) + Nederlands Limburg. Split BE/NL content always.
- **Social proof:** 1550+ succesvolle installaties · 9+ jaar ervaring · ★★★★★ Google Reviews.
- **Partnermerken:** Huawei, AlphaESS, SAJ, Kstar, Julix. Powerpartner werkt met top merken om Vendor lock in te voorkomen. Zo helpen we ook om voor iedere bestaande installatie een geschikte uitbreiding te regelen.
- **De afspraak ís het product** — er kan geen offerte zonder gratis huisbezoek. Elke CTA stuurt naar het boeken van een gratis adviesgesprek.

## Products / surfaces represented

- **Marketing landing pages** (the primary surface) — `/zonnepanelen`, `/batterij`, `/laadpalen`, `/algemeen`. Built in `ui_kits/landing/`.
- Solar savings calculator (mentioned in the brief; not yet recreated here).
- Website: https//:www.powerpartner.be/

---

## CONTENT FUNDAMENTALS

How Powerpartner writes.

- **Taal:** altijd Nederlands, tenzij expliciet anders gevraagd.
- **Aanspreekvorm:** **altijd je / jij / jouw** — nooit u/uw. Te formeel = off-brand.
- **Toon:** warm en persoonlijk, als een deskundige buurman — niet als een bedrijf. "Limburgs nuchter": direct, bescheiden, eerlijk. Laat zien wat je *doet*.
- **Aanpak:** educatief, nooit pusherig. Geen hoge-druk verkoop. Eerlijk en transparant, geen overdreven claims.
- **Technisch maar toegankelijk:** leg complexe dingen simpel uit, vermijd jargon.
- **Emoji:** spaarzaam / functioneel (bv. ✓, ★, vlaggen 🇧🇪🇳🇱 voor regiokeuze). Nooit als decoratieve "slop". Sterren (★) zijn de review-taal.
- **CTA:** één duidelijke CTA per pagina, altijd richting gratis adviesgesprek.

**Woorden die we gebruiken:** besparen, slim, eigen energie, controle, vrijblijvend, op maat, betrouwbaar, lokaal, ervaring, vakmanschap, onafhankelijk, toekomstbestendig.

**Woorden die we vermijden:** verplichtingen, contract, *investering* (zeg "besparing"), duur, complex, goedkoop, ongevraagd jargon.

**Voorbeelden (echte brand-copy):**

- H1: "Haal eindelijk alles uit je zonnepanelen"
- Sub: "Een thuisbatterij verhoogt je zelfverbruik van 28% naar 75%. Yanco legt je precies uit wat dat voor jou betekent."
- Hook BE: "Slechts 28% van je zonnestroom gebruik je zelf. De rest? Weg."
- Hook NL: "De salderingsregeling verdwijnt. Ben jij voorbereid?"
- CTA: "Plan je gratis adviesgesprek →"

---

## VISUAL FOUNDATIONS

- **Kleur:** strikt vijf merkkleuren — dark `#1a1a1a`, green `#22a551`, yellow `#fcc909`, white `#ffffff`, light gray `#f5f5f5`. **Nooit** blauw/paars/roze/rood/oranje. Groen is de CTA/actiekleur; geel is accent/badge; donker is tekst & donkere secties. Afgeleide tinten (hover/press/soft surface) blijven binnen de groen/geel familie. Zie `tokens/colors.css`.
- **Gradients:** standaard plat. Een subtiele merk-gradient (groen→donkergroen of donker→iets-lichter) is toegestaan **alleen waar het de look rijker maakt** (bv. een hero-paneel) — nooit als algemene achtergrond, nooit blauwig/paars. Tokens: `--pp-gradient-green`, `--pp-gradient-dark`.
- **Typografie:** één familie, **Montserrat**. Headings Bold 700 (display tot 64px, strakke letter-spacing −0.02em); body Regular 400, line-height 1.6. Eyebrow-labels: 12px, Bold, uppercase, 0.08em tracking, groen.
- **Spacing:** 4px-basis, ruime en professionele ritmiek. Secties \~96px verticaal. Container max 1200px, smal 760px.
- **Achtergronden:** vlakke kleurvlakken — wit, light-gray (`#f5f5f5`) voor afwisselende secties, donker (`#1a1a1a`) voor social-proof / contrastsecties. Geen patronen, geen textuur. Foto's: echte installatie-/woningbeelden (warm, natuurlijk daglicht, Limburgs/Brabants); hier als gelabelde placeholders tot echte beelden worden geleverd.
- **Animatie:** subtiel. Smooth transitions 150–300ms (`--transition-*`), ease. Geen bounce, geen oneindige decoratieve loops. Hover = kleur/lift; press = 1px naar beneden.
- **Hover states:** CTA's verdonkeren (`--pp-green-hover` / `--pp-yellow-hover`); outline krijgt groene rand; ghost krijgt soft-green vlak; cards liften 2px met subtiele schaduw.
- **Press states:** lichte translateY(1px) "indruk", of donkerdere press-kleur.
- **Borders:** 1px `#e5e5e5` standaard; 2px groen voor focus en actieve keuzes. Voorkeur voor borders boven zware schaduwen.
- **Schaduwen:** flat-first. Schaduwen subtiel en spaarzaam (`--shadow-sm/md/lg`), vooral op hover of zwevende kaarten (survey, prijskaartje). Geen glassmorphism/neumorphism.
- **Focus:** groene focus-ring `--shadow-focus` (3px, 30% groen).
- **Corner radius:** consistent en niet overdreven — md 8px (buttons/inputs/cards), lg 12px / xl 20px (panelen), pill voor badges/tags.
- **Kaarten:** witte achtergrond, 1px border, radius 12px, optioneel 4px groene bovenrand-accent; plat in rust, subtiele lift op hover.
- **Transparantie/blur:** zeer beperkt — alleen de sticky header (lichte blur + 96% wit).
- **Layout:** sticky header met logo links + één CTA rechts; landingspagina's hebben geen footer-navigatie (één exit-punt voor maximale conversie).

---

## ICONOGRAPHY

- **Systeem:** SVG-iconen, **Lucide of Heroicons** (stroke-stijl, \~1.5–2px). Geen emoji als functionele UI-iconen. Lijn-iconen passen bij de strakke, professionele look. Wanneer iconen nodig zijn en er geen merkset is, gebruik Lucide via CDN (`https://unpkg.com/lucide-static`) of inline Heroicons — gelijke stroke-weight.
- **Unicode als accent:** ster `★` (reviews/rating), pijl `→` (CTA's), vinkje `✓` (bevestiging/voordelen) en regio-vlaggen 🇧🇪 🇳🇱 worden functioneel gebruikt.
- **Geen** hand-getekende of AI-gegenereerde iconen/illustraties.
- **Logo's & merk-assets** staan in `assets/` (zie hieronder) — gebruik altijd de officiële logobestanden, genereer nooit een logo met AI.

### `assets/`

| Bestand | Gebruik |
| --- | --- |
| `logo-full.png` | Volledige horizontale lockup met tagline "Empowering Green Innovation" |
| `logo-wordmark-dark.png` | Wordmark + mark, donkere tekst (op licht) |
| `logo-wordmark-white.png` | Wordmark + mark, witte tekst (op donker) |
| `logo-wordmark.svg` | Vector wordmark |
| `icon-mark.png` / `icon-150.png` | Cirkelvormige mark (groen+geel) — favicon/app |
| `icon-mark-square.png` | Mark op vierkant — social avatar |
| `logo-200x150.png`, `logo-alt.png` | Aanvullende logovarianten |

---

## INDEX / manifest

**Root**

- `styles.css` — global entry point (`@import` van alle tokens + font). Consumers linken dit.
- `readme.md` — dit bestand.
- `SKILL.md` — Agent-Skill wrapper (voor Claude Code / download).

**`tokens/`** — `fonts.css` (Montserrat), `colors.css`, `typography.css`, `spacing.css`, `effects.css`.

**`foundations/`** — specimen cards (Design System tab): kleuren, type, spacing, radius, elevation, logo's.

**`components/`** — herbruikbare primitives:

- `core/` — **Button**, **Badge**, **Card**
- `forms/` — **Input**, **Checkbox**
- `marketing/` — **Stat**, **TrustBar**, **Testimonial**

**`ui_kits/landing/`** — conversie-landingspagina (Batterij), interactieve survey. Composeert de primitives. Zie `ui_kits/landing/README.md`.

**`assets/`** — logo's en mark-varianten.

### Namespace

Componenten zijn beschikbaar via `window.PowerpartnerDesignSystem_5b2f24` in card/kit HTML (geladen via `_ds_bundle.js`, dat automatisch wordt gegenereerd).
