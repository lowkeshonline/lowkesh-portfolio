# Portfolio refactor brief

## Reference

[Paolo Nessim — Engineer](https://www.paolonessim.com/) — reviewed 24 Oct 2026. The page presents a compact, text-led engineering portfolio with a terminal/editorial voice. Its section labels, command-style controls, short descriptions, dates, and project status signals make the content easy to scan. This brief records the page structure and translates the useful patterns to Lokesh's existing portfolio; it does not treat Paolo's copy or personal details as reusable content.

## What stands out

- **The introduction is direct.** Name, location/time, a short description of what the person builds, and quick résumé/contact actions appear before the work.
- **Projects carry the story.** Each entry has a date, a status or platform marker, a name, a one-line purpose, and an outbound link. The project list is compact and easy to browse.
- **Experience explains the work.** Roles have dates, titles, and concise descriptions focused on what was built.
- **The rest adds personality without crowding the pitch.** A GitHub/Claude Code activity view, a terminal-style “uses” panel with category controls, writing, filtered bookmarks, and a short off-work section follow the core portfolio.
- **Small interface details reinforce the voice.** Numbered section labels, keyboard shortcuts, terminal prompts, counts, dates, and understated helper text make it feel like a working engineer's personal site.
- **It is a long, single-page profile.** The main story stays together, while links take visitors to projects, writing, résumé, and social profiles.

## Current portfolio

The existing site already has a strong terminal identity: black surfaces, aqua accents, monospace metadata, Instrument Serif headings, thin borders, and subtle grain. It currently has:

- A full-screen hero with a circular avatar and links to Projects and Blog.
- A large technical skills grid.
- Experience and education sections on the homepage.
- Separate Projects and Blog pages; the project data currently includes Zero Hunger and Chatwadi.
- A top navigation and social-link footer.

The biggest change is information hierarchy and density, not a new visual concept. The current skills grid and large experience/education cards take space before the visitor reaches project work. The reference puts the person's work and practical context at the center.

## Direction for Lokesh's version

Borrow the reference's **structure and clarity**, while retaining the existing type system and refining the color palette into a quieter editorial terminal look.

1. **Make the hero more compact and text-led.** Keep the name, a specific one- or two-sentence introduction, location or availability if useful, and direct links to résumé, GitHub, LinkedIn, email, and projects. The avatar can become smaller or be removed if it competes with the introduction.
2. **Bring featured projects near the top.** Show a small set of the strongest projects as compact rows or restrained panels. Include year/date, project name, what it does, the clearest result or proof, technologies only when useful, and live/source links.
3. **Keep experience concise.** Use date and role as the anchor, followed by a short outcome-focused description. Preserve the current detailed experience content where it matters, but avoid repeating a résumé verbatim.
4. **Turn the skills grid into a useful “stack / uses” section.** A compact terminal-like listing can group tools by purpose. Keep only skills that strengthen the work shown above; avoid a large inventory of badges.
5. **Keep writing as a small section.** Link to the existing blog and show recent posts when there is enough content. Education can remain lower on the page or move to a compact résumé-style block.
6. **Use metadata consistently.** Short section labels, subtle dates/status, clear outbound arrows, brief descriptions, and thin dividers can create the same scan-friendly rhythm without adding visual noise.
7. **Treat activity and extra modules as optional.** Add a GitHub activity view, bookmarks, keyboard shortcuts, or an off-work detail only when the data is real, maintained, and useful to visitors. Do not invent contribution counts, activity, or work status.

## Suggested homepage order

1. Compact header with name/mark, a few useful navigation links, and a primary contact or résumé action.
2. Text-led introduction and location/availability detail if desired.
3. Featured projects.
4. Experience.
5. Stack / uses.
6. Writing.
7. Education and a brief personal detail, if they add context.
8. Contact and social links.

Keep the dedicated Projects and Blog routes available; the homepage should give visitors a useful preview and a clear next click.

## Visual and interaction notes

- Keep the dark terminal base, Instrument Serif / Geist / JetBrains Mono typography, and thin-border language; use a muted sage accent instead of the previous bright aqua.
- Reduce oversized card treatment where a clean list row can carry the same information.
- Use generous space between sections, but tighter spacing within each project or experience entry.
- Keep hover and focus states visible, keyboard navigation usable, and small-screen layouts readable.
- Keyboard shortcuts and filter tabs are optional enhancements, not prerequisites for the refactor.

## Content to gather before implementation

- Which 3–5 projects best represent the work, and what did each achieve?
- Current role, previous experience, dates, and the strongest concrete outcomes.
- Preferred one-line positioning and location/availability wording.
- Résumé URL, email, and social links to feature prominently.
- Which skills and tools are actually used today?
- Whether activity data, writing previews, bookmarks, or personal details are worth maintaining.

## Implementation note

This repository uses Next.js 16.2.6. Before changing application code, follow the repository's `AGENTS.md` instruction to read the relevant guide under `node_modules/next/dist/docs/` and heed any deprecation notices.
