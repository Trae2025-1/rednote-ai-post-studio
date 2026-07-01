# Strict Cover Rules

## Principle

The cover image must be derived from the bundled reference library. Do not treat the cover step as open-ended graphic design.

The preferred production method is now image-first plus controlled post-processing:

1. Use the reference library as the strong visual basis.
2. Use image generation to create a polished poster surface that matches the selected reference family.
3. Add final readable title text and real logos afterward with controlled typography and exact assets.

Use:

- `assets/reference-cases/` for visual reference.
- `assets/templates/` as editable starting points.
- `references/template-selection.md` to choose the closest pattern.
- `references/visual-system.md` for constraints.
- `references/image-cover-workflow.md` for the image-first cover workflow.

## Allowed Changes

Only these changes are allowed:

1. Replace title/copy text:
   - Main title.
   - Subtitle.
   - Corner label.
   - Bottom note.
   - Short benefit text.

2. Preserve typography:
   - Keep the original poster font family.
   - Keep the original font weight style.
   - Keep the original relative size hierarchy.
   - Do not introduce new typefaces or decorative font effects.

3. Adjust background or accent color:
   - Use this only to distinguish topics in a series.
   - Keep the original visual mood.
   - Do not turn the poster into a new style.

4. Place logos:
   - Prefer user-uploaded logo files.
   - If the user asks for a public tool logo and web lookup is available, find a real logo asset from an official or reliable source.
   - Keep logo aspect ratio.
   - Place the logo in the corresponding logo area from the selected reference/template.

5. Use image generation:
   - Generate only inside the selected reference family's layout and mood.
   - Use it for background, lighting, texture, depth, and poster finish.
   - Use the current tool/logo palette for color replacement.
   - Add final title text and real logo in post-processing.

## Forbidden Changes

Do not:

- Change the poster font.
- Redesign the layout.
- Move core layout sections beyond minor text fitting.
- Replace the reference style with a new visual direction.
- Add new decoration types.
- Remove the selected template's core visual identity.
- Redraw, recolor, stylize, or reconstruct uploaded logos.
- Invent a tool logo.
- Use generic stock imagery unless the selected reference/template already uses a comparable image slot.
- Let image-model text become the final cover title.
- Ignore the reference library and generate a new poster direction from scratch.
- Change the selected reference's layout family after image generation unless the result clearly failed validation.

## Template Selection

Select the closest existing reference/template:

- One tool logo: single-logo tutorial or three-benefit clean.
- Two tools: two-logo workflow reference.
- PDF/resources/checklist/template: PDF resource reference.
- Save-worthy tutorial: suggested-save reference.
- Day/series post: preserve the series cover grid and only vary text/color/logo.

## Validation Checklist

Before final delivery:

- The selected reference/template is named.
- Only text, optional color tone, logo placement, and reference-matching image polish changed.
- Font family and typography style are preserved.
- Layout and decoration families are preserved.
- Logo is real or explicitly marked as replaceable.
- Final PNG exists.
- Editable SVG/source/overlay exists when feasible.
- If using SVG export, `scripts/validate_cover.js` passes or remaining warnings are clearly reported.
