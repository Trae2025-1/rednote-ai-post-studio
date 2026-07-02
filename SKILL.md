---
name: rednote-ai-post-studio
description: "One-stop Xiaohongshu/Rednote AI post studio. Use when the user gives a topic keyword and wants title candidates, recommended title, caption, keywords/tags, cover copy, reference-driven image cover, PNG preview, compliance check, and publishing suggestions in the style of the \"梓丰学AI中\" AI office workflow account. Cover generation must use the bundled reference case library as a hard aesthetic source of truth: choose a concrete reference image, call the built-in image generation capability to recreate that finished poster design, replace only the reference logo and slogan/title/copy, and optionally adjust the color tone to make the new cover more beautiful and differentiated while preserving the reference composition. Do not hand-design covers with frontend/Pillow/SVG layouts, manual coordinates, invented typography, or blank-background-plus-overlay workflows. Deterministic post-processing is allowed only for exact logo/text correction and must not redesign the cover."
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
   - Prefer comparing 2-3 different reference styles before choosing.
   - Name the exact reference image(s) used.
   - Treat the selected reference image as the visual contract, not a loose mood board.
6. Choose the final cover title:
   - Use the title selected by the user when provided.
   - Otherwise use the recommended title.
   - Shorten only for cover readability; keep the publishing title in `publish-pack.md`.
   - Preserve semantic grouping. Do not split a Chinese phrase and insert the product name in the middle unless the selected reference does the same with a comparable phrase.
   - Product/tool names should be a separate hero word, prefix/suffix, or logo-area label; they must not break the sentence order of the user's title.
7. Build the cover through the image-first workflow:
   - Treat image generation as the primary cover maker.
   - Feed it the selected reference image, replacement logo, replacement slogan/title/copy, and 2-3 candidate color-tone directions.
   - Ask it to produce a finished poster, not a blank background for later manual layout.
   - Only replace the reference logo and slogan/title/copy.
   - Preserve the reference composition, typography feel, hierarchy, spacing, decorations, logo-slot treatment, and CTA treatment.
   - Preserve the reference's element density and poster richness. Do not simplify an element-rich reference into an overly empty poster.
   - Color-tone changes should be chosen proactively. Use the logo color as one cue, but do not make the whole poster identical to the logo palette.
   - Do not copy the selected reference image's palette exactly. The layout follows the reference, but the color tone must be redesigned and differentiated through image generation.
   - Try different tone pairings when useful, then pick the best-looking one inside the selected reference style.
   - Do not create the cover with frontend/Pillow/SVG/manual coordinates.
8. Post-process only when necessary:
   - Correct exact logo or readable text if image generation fails to preserve them.
   - Keep the same slots, sizes, alignment, hierarchy, and treatment from the selected reference.
   - Do not use post-processing to redesign, re-layout, add decorations, or build the poster manually.
   - If the image result is ugly, regenerate from the selected reference or choose another reference; do not hand-design a new cover.
9. Validate against the checklist in `references/image-cover-workflow.md` and `references/strict_cover_rules.md`.
10. Fix blocking validation errors and revise risky copy.
11. Output the final package using `references/output_contract.md`, including final cover paths.

## Strict Cover Rule

The cover is not a free redesign task. Treat the bundled reference cases as locked poster systems and use image generation as the primary way to create the finished poster inside those boundaries.

Allowed:

- Replace poster title, subtitle, corner label, bottom note text, and slogan/copy.
- Keep the same font family, weight, relative scale, and text hierarchy as the selected reference/template.
- Keep line breaks, line order, and title grouping logically consistent with the selected reference and the user's title.
- Adjust background color, accent color, or overall color tone to separate topics and improve aesthetics, while keeping the selected reference style.
- Use logo color as a cue for accents, not as a command to make the entire cover the same color.
- Proactively test or specify 2-3 color-tone directions when the best palette is not obvious.
- Keep reference composition, but differentiate the palette from the selected reference image; never copy the reference color scheme one-to-one.
- Place a user-provided logo exactly as supplied.
- If the user asks to use a public logo and web lookup is available, locate a real logo asset and place it without redrawing.
- Use image generation to create the finished reference-based poster, with only logo/copy replacement and optional color-tone adjustment.
- Use only decoration elements already present in the selected reference image.
- Preserve the selected reference's element density, decorative rhythm, and layered poster feel.
- Replace the reference logo area with the real logo, keeping the reference's logo size, position, and treatment.
- Adjust menu/benefit copy to avoid repeating the subtitle.

Not allowed:

- Change poster font style.
- Redesign the layout.
- Add new decoration families.
- Change the poster structure beyond text replacement, logo replacement, and optional color-tone adjustment.
- Redraw, recolor, crop beyond recognition, or stylize logos.
- Invent a logo when none is available.
- Hand-code the poster with frontend/Pillow/SVG/manual coordinates as the main design method.
- Generate a blank background and then manually arrange logo/title/CTA as a separate design.
- Let image generation improvise a new layout unrelated to the selected reference.
- Over-simplify the poster when the selected reference has visible decorative elements, layered regions, bottom waves, labels, or emphasis marks.
- Generate a cover from a generic prompt without anchoring it to a bundled reference case.
- Add decorative lines, curved strokes, arrows, underlines, dividers, badges, icons, or blobs that are not present in the selected reference image.
- Treat "better design" as permission to improvise. If the reference does not contain it, do not add it.
- Use plain small text for CTA/bottom notes when the reference uses a designed pill, chip, label, or highlighted band.
- Split a coherent phrase such as "我的首席技术官" into "我的首席 / Cursor / 技术官"; keep the phrase intact and place the product name separately.
- Use rough brush/mosaic/blur/blob backplates behind logos when the selected reference does not use that exact logo treatment.
- Leave check icons and their labels misaligned vertically.
- Repeat the same meaning in subtitle and menu/benefit row.

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

When a manual SVG fallback is explicitly used, run:

```bash
node scripts/render_svg_to_png.js rednote-ai-post-studio-output/<topic-slug>/cover.svg rednote-ai-post-studio-output/<topic-slug>/cover.png
node scripts/validate_cover.js rednote-ai-post-studio-output/<topic-slug>/cover.svg rednote-ai-post-studio-output/<topic-slug>/cover.png
```

If the cover is produced with image generation, save the generated composite and final PNG under the same output folder. Only include an editable overlay when it is a minimal exact logo/text correction layer, not a redesigned manual cover.

If Node or `sharp` is unavailable, still create the best available source file and say PNG rendering could not be completed.

## Keyword Research

Use baseline keywords from `references/keyword_taxonomy.md`.

If the user asks for recent keywords, trending keywords, platform search terms, or "联网找关键词", search the web/platform first and state that the keyword choices are based on current lookup. Do not claim keyword popularity without lookup.
