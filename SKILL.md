---
name: rednote-ai-post-studio
description: "One-stop Xiaohongshu/Rednote AI post studio. Use when the user gives a topic keyword and wants title candidates, recommended title, caption, keywords/tags, cover copy, editable SVG cover, PNG preview, compliance check, and publishing suggestions in the style of the \"梓丰学AI中\" AI office workflow account. Cover generation must strictly follow the bundled reference cases and templates: preserve poster font choices and structure, only replace title/copy text, optionally adjust background color for differentiation, and place logos from user upload or web lookup without changing the rest of the poster design."
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
7. Editable SVG cover.
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
5. Select the closest bundled reference case/template by content type.
6. Create the SVG cover by modifying only allowed fields:
   - Replace title/copy text.
   - Keep original poster fonts and typography style.
   - Keep original layout, decorations, hierarchy, and composition.
   - Optionally adjust background color to distinguish the new post.
   - Place logo from user upload or web lookup if needed.
7. Render PNG with `scripts/render_svg_to_png.js`.
8. Validate with `scripts/validate_cover.js`.
9. Fix blocking validation errors and revise risky copy.
10. Output the final package using `references/output_contract.md`, including SVG/PNG paths.

## Strict Cover Rule

The cover is not a free redesign task. Treat the bundled reference cases as locked poster systems.

Allowed:

- Replace poster title, subtitle, corner label, and bottom note text.
- Keep the same font family, weight, relative scale, and text hierarchy as the selected reference/template.
- Adjust background color or accent color lightly to separate topics.
- Place a user-provided logo exactly as supplied.
- If the user asks to use a public logo and web lookup is available, locate a real logo asset and place it without redrawing.

Not allowed:

- Change poster font style.
- Redesign the layout.
- Add new decoration families.
- Change the poster structure beyond text replacement, background color, and logo placement.
- Redraw, recolor, crop beyond recognition, or stylize logos.
- Invent a logo when none is available.

## Output Location

Create final assets under:

```text
rednote-ai-post-studio-output/<topic-slug>/
```

Use stable filenames:

```text
publish-pack.md
cover.svg
cover.png
```

## Cover Rendering

Run:

```bash
node scripts/render_svg_to_png.js rednote-ai-post-studio-output/<topic-slug>/cover.svg rednote-ai-post-studio-output/<topic-slug>/cover.png
node scripts/validate_cover.js rednote-ai-post-studio-output/<topic-slug>/cover.svg rednote-ai-post-studio-output/<topic-slug>/cover.png
```

If Node or `sharp` is unavailable, still create the SVG and say PNG rendering could not be completed.

## Keyword Research

Use baseline keywords from `references/keyword_taxonomy.md`.

If the user asks for recent keywords, trending keywords, platform search terms, or "联网找关键词", search the web/platform first and state that the keyword choices are based on current lookup. Do not claim keyword popularity without lookup.
