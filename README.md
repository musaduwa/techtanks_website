# techtanks.tech — registration desk prototype
*Stage 4 · 21 October 2026 · Static HTML and CSS, no framework, no build step. Open `index.html` in a browser.*

## What this is
A click-through of the new website for the team and for Telgenix: the home page, the registration desk with the two calls to action (*I own a phone* → call 315, free, plus a seller lead form / *I am a company*), the six-step dealer journey with the free model check, the three service pages (Dealer Registration, Importer Registration, Manufacturer Programme), the rate card, the tracking page, the Type Approval service page, Our work, About and Contact. Revised 26 October 2026: individuals register free through 315, so the site sells nothing to phone owners. The copy is `../content/SITE_COPY.md` word for word; the styling is Brand Guide v2 (`assets/tokens.css`).

The real site will be built by Engr. Musa Duwa in the React codebase from the Claude Code brief. This prototype is the reference for layout, wording and behaviour.

## What is demo data (remove or replace before launch)
| Item | Where | What it is |
|---|---|---|
| Sample register | `assets/sample-register.js` | 115 current-model entries from the Commission's public Type Approval register of mobile phones (downloaded 19–20 October 2026): Galaxy A05–A57 and S23–S25, Tecno Spark/Pop/Camon, Infinix Hot/Note/Smart, itel A50–P65, Redmi 13–15 and Note 14–15, iPhone 15 and 16. **Not the full register** (2,515 certificates). A model missing here may still be Type Approved. The live site queries the current register. |
| Tracking records | `site.js`, `DEMO` | Four invented tracking numbers (TT-482913, TT-770034, TT-115207, TT-209911) with masked, invented IMEI numbers. Any other `TT-` number shows a sample record. |
| Form submissions | `site.js` | Nothing is sent anywhere. Forms validate required fields and show a confirmation with an invented tracking number. No name, phone number or IMEI number leaves the browser. |
| File upload | `dealer.html` | Disabled. |
| Orange banner | every page | "Prototype for review" — remove at launch. |

## Placeholders the copy still carries
Written as `[…]` in the pages: licence number (once issued), dealer and importer price tiers, turnaround promise for the model check, the Commission's document list per upload, case-study one-liners, WhatsApp number. All are listed in `../content/SITE_COPY.md` as `[UNKNOWN — …]`.

## Files
```
index.html  register.html  owner.html  dealer.html  importer.html  manufacturer.html
check.html  track.html  type-approval.html  work.html  about.html  contact.html
styles.css      — all page styles; imports assets/tokens.css
site.js         — menu, model check, form handling, tracking lookup
assets/tokens.css          — Brand Guide v2 design tokens (drop-in for the 2022 colors.css)
assets/sample-register.js  — demo register (see above)
assets/sprite.svg            — the TechTanks icon set (Brand Guide v2 §6b), inlined into every page by build_site.py
assets/logo-secondary.png, logo-secondary-white.png, icon.png, pattern-white.png
assets/Oswald-Medium.ttf, Oswald-Regular.ttf, NunitoSans-Regular.ttf
```
`../build_site.py` regenerates the twelve pages from one shared shell (header, footer with the co-branding line, scripts).

## Accessibility and privacy choices
Mobile first, 16 px gutters, 48 px touch targets, body text 16 px, visible labels on every field, status shown as word plus colour, skip link, focus rings, contrast pairs from Brand Guide §4 (small orange text uses orange-700). The tracking page shows IMEI numbers masked and no personal data. No Apple or Commission logos anywhere; both are named in words only.
