---
name: rednote-ai-post-studio
description: "One-stop Xiaohongshu/Rednote AI post studio. Use when the user gives a topic keyword and wants title candidates, recommended title, caption, keywords/tags, cover copy, reference-driven image cover, editable source/overlay file when possible, PNG preview, compliance check, and publishing suggestions in the style of the \"梓丰学AI中\" AI office workflow account. Cover generation must use the bundled reference case library as the strong visual basis: match the selected reference layout, tone, hierarchy, and poster feeling; use image generation for finished visual quality; then place the chosen title and real uploaded/looked-up logo with controlled typography. Do not free-design covers outside the reference library."
---

# Rednote AI Post Studio

## Purpose

Generate a complete Xiaohongshu publishing package and matching cover image from one topic keyword.

Default account style: "梓丰学AI中" - ordinary-person Agent/Codex/AI office practice, real workflow recaps, clear tool use, low hype, and reusable workflows.

## Default Output

Unless the user explicitly asks for copy only, produce:

1. Content positioning.
2. 5-10 title candidates.
3. One recommended title.
4. Cover copy.
5. Caption.
6. Keywords and tags.
7. Reference-driven cover image.
8. PNG preview.
9. Compliance check.
10. Publishing suggestions.

## Core Workflow

1. Read the user topic keyword.
2. Read the needed publishing references:
   - `references/account_profile.md`
   - `references/content_positioning.md`
   - `references/title_formula_library.md`
   - `references/copywriting_frameworks.md`
   - `references/keyword_taxonomy.md`
   - `references/compliance_rules.md`
   - `references/output_contract.md`
3. Generate title, caption, keyword, and cover-copy draft.
4. Read the cover references:
   - `references/strict_cover_rules.md`
   - `references/visual-system.md`
   - `references/template-selection.md`
   - `references/case-library.md`
   - `references/image-cover-workflow.md`
5. Select the closest bundled reference case/template by content type.
6. Choose the final cover title:
   - Use the title selected by the user when provided.
   - Otherwise use the recommended title.
   - Shorten only for cover readability; keep the publishing title in `publish-pack.md`.
7. Build the cover through the image-first workflow:
   - Use the selected reference case as the strong visual basis.
   - Ask the image model to generate only the background, composition, poster mood, color tone, and non-logo/non-final-text visual surface.
   - Replace colors from the reference with the current tool/logo palette when appropriate.
   - Do not ask the image model to invent or redraw the tool logo.
   - Do not rely on image-model text for final Chinese cover text.
8. Post-process the generated cover:
   - Place the real uploaded or looked-up logo exactly as supplied.
   - Overlay final title/copy using controlled heavy sans-serif typography matching the reference.
   - Keep the reference layout, text hierarchy, safe margins, and decoration family.
   - Create an editable source/overlay file when feasible, plus the final PNG.
9. Validate against the checklist in `references/image-cover-workflow.md` and `references/strict_cover_rules.md`.
10. Fix blocking validation errors and revise risky copy.
11. Output the final package using `references/output_contract.md`, including final cover paths.

## Strict Cover Rule

The cover is not a free redesign task. Treat the bundled reference cases as locked poster systems and use image generation only inside those boundaries.

Allowed:

- Replace poster title, subtitle, corner label, and bottom note text.
- Keep the same font family, weight, relative scale, and text hierarchy as the selected reference/template.
- Adjust background color or accent color lightly to separate topics.
- Place a user-provided logo exactly as supplied.
- If the user asks to use a public logo and web lookup is available, locate a real logo asset and place it without redrawing.
- Use image generation to improve finished poster quality, texture, depth, shadows, and background polish, but only after selecting a reference case.

Not allowed:

- Change poster font style.
- Redesign the layout.
- Add new decoration families.
- Change the poster structure beyond text replacement, background color, and logo placement.
- Redraw, recolor, crop beyond recognition, or stylize logos.
- Invent a logo when none is available.
- Let image-model text become the final readable Chinese title.
- Generate a cover from a generic prompt without anchoring it to a bundled reference case.

## Output Location

Create final assets under:

```text
rednote-ai-post-studio-output/<topic-slug>/
```

Use stable filenames where applicable:

```text
publish-pack.md
cover.png
cover.svg or cover-overlay.svg or cover-source.<format>
```

## Cover Rendering

When creating SVG covers or SVG overlays, run:

```bash
node scripts/render_svg_to_png.js rednote-ai-post-studio-output/<topic-slug>/cover.svg rednote-ai-post-studio-output/<topic-slug>/cover.png
node scripts/validate_cover.js rednote-ai-post-studio-output/<topic-slug>/cover.svg rednote-ai-post-studio-output/<topic-slug>/cover.png
```

If the cover is produced with image generation first, save the generated background/composite and final PNG under the same output folder. If an editable SVG overlay is feasible, include it; if not, provide the final PNG and explain what source layer was used.

If Node or `sharp` is unavailable, still create the best available source file and say PNG rendering could not be completed.

## Keyword Research

Use baseline keywords from `references/keyword_taxonomy.md`.

If the user asks for recent keywords, trending keywords, platform search terms, or "联网找关键词", search the web/platform first and state that the keyword choices are based on current lookup. Do not claim keyword popularity without lookup.
