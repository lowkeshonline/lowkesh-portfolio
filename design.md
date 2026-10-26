---
name: Editorial Portfolio
colors:
  page: "#090909"
  surface: "#0d0e0c"
  foreground: "#efeeea"
  body: "#c2c0ba"
  muted: "#8a8781"
  border: "#1e1e1c"
  accent: "#c6d2ba"
typography:
  display: Instrument Serif
  body: Geist
  code: JetBrains Mono
layout:
  max-width: 760px
  section-gap: 92px
  status-bar: 32px
---

## Visual direction

Build a near-black editorial page with a centered 760px column, generous whitespace, and a fixed 32px status bar. Type and hairlines carry the design: an oversized italic serif name, quiet sans body copy, and tiny uppercase mono metadata. Avoid colorful cards, large rounded panels, and dashboard-style chrome. The only accent is a muted sage used for live data, status dots, and active controls.

## Page structure

Home sections are numbered and separated by a label plus a rule that fills the remaining width:

- Hero: `Lokesh` / `Chonga.` on two lines, two short paragraphs, keyboard hints, and a hairline footer with role, location, and scroll cue.
- `01 · Work`: compact project rows with index, title, status, year, description, stack, and Live/Code links.
- `02 · Activity`: real GitHub contributions pulled from the jogruber API and LeetCode submissions pulled from LeetCode's GraphQL calendar, behind a GitHub/LeetCode toggle (GitHub is the default). The current year is truncated to today; previous years show all twelve months. Include a year picker, total, legend, and profile link for the active source.
- `03 · Experience` and `04 · Education`: two-column rows with dates on the left and outcome-focused copy on the right.
- `05 · Stack & uses`: a terminal window with tabs, a prompt, and mono key/value rows.
- `06 · Writing`: compact post rows with date, title, summary, reading time, and arrow.
- `07 · Now`: a status card and a large italic working principle.
- `08 · Contact`: email, oversized `Lokesh.` wordmark, motto, copyright, and bottom bar.

A fixed social dock sits at the bottom center on every page. It may overlap the content edge, matching the reference.

## Typography

- Instrument Serif italic for the hero name, page titles, the footer wordmark, and the working principle.
- Geist for body copy, project titles, navigation, and controls.
- JetBrains Mono for section labels, dates, counts, tech stacks, keyboard hints, and terminal content.
- Body text stays around 16px with a comfortable measure. Metadata stays small but legible.

## Interaction

- `W` jumps to work, `E` opens email, and `⌘K` / `Ctrl+K` opens the command palette.
- The palette groups sections, pages, elsewhere links, and projects. Arrow keys move, Enter opens, Escape closes.
- The activity source toggle switches between GitHub and LeetCode; the year picker swaps between real datasets for the active source. On narrow screens the heatmap scrolls horizontally and shows a swipe hint.
- Terminal tabs support click and arrow-key navigation with an announced selected state.
- All controls have visible focus states. Motion respects `prefers-reduced-motion`.

## Content rules

Use real projects, dates, metrics, and links only. Do not invent contribution counts, activity, employers, or personal details. If the GitHub API fails, show a direct profile link instead of fabricated data.
