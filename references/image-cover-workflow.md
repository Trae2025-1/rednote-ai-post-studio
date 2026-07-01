# Image Cover Workflow

## Goal

Create covers that look like finished Xiaohongshu poster images while staying tightly bound to the user's reference library.

Use this workflow when generating the final cover. The old SVG templates are still useful as editable fallbacks, but the preferred path is image-first plus controlled text/logo post-processing.

## Required Inputs

- Topic keyword.
- Recommended title or user-selected title.
- Selected reference family from `references/template-selection.md`.
- One or more specific reference images from `assets/reference-cases/`.
- Logo source: user-uploaded file, looked-up official asset, or explicit placeholder.
- Tool-derived color palette.

## Workflow

1. Select the reference family and name at least one concrete reference image.
2. Extract a visual checklist from the selected reference:
   - Canvas ratio and margins.
   - Main title position.
   - Logo position and size.
   - Background tone and texture.
   - Accent color placement.
   - Decoration family.
   - Bottom label or benefit structure.
3. Decide the final cover title:
   - Use the user's selected title when provided.
   - Otherwise use the recommended title.
   - Shorten for cover readability only when needed.
4. Generate the image layer:
   - Ask the image model for the background, composition, shadows, depth, visual mood, and non-final-text poster surface.
   - Strongly describe the selected reference family and visual checklist.
   - Replace only the color tone and tool/logo theme.
   - Avoid asking the image model to render final Chinese text or a real brand logo.
5. Post-process the final cover:
   - Place the exact uploaded or looked-up logo asset.
   - Overlay final Chinese title and short labels using controlled heavy sans-serif text.
   - Match the selected reference's font weight, scale hierarchy, and alignment.
   - Keep the reference layout instead of inventing a new composition.
6. Export final PNG.
7. Create an editable source or overlay file when feasible.
8. Run the validation checklist below before responding.

## Image Prompt Rules

The prompt must include:

- "3:4 vertical Xiaohongshu cover".
- The selected reference family, such as `three-benefit clean card`, `big tool word + logo hero`, or `suggest-save poster`.
- A concise visual checklist from the chosen reference.
- Tool palette, such as "Claude warm orange, off-white, black headline".
- "No final readable Chinese text; final text will be added later" when an overlay step will be used.
- "Do not invent, redraw, or stylize the brand logo" when the logo will be placed later.

The prompt must not include:

- Generic "make a beautiful poster" without a reference family.
- Requests to create a fake logo.
- Requests for the image model to create precise final Chinese typography.
- New layout concepts not present in the selected reference family.

## Post-Processing Rules

- Use the exact logo file when supplied.
- Preserve logo aspect ratio and colors.
- Use bold sans-serif Chinese typography.
- Keep title text editable when producing SVG or layered source files.
- Final Chinese text must be readable at small preview size.
- If generated image text appears garbled, cover it or regenerate the image layer.

## Validation Checklist

Before final delivery, verify:

- A reference family and at least one reference image were selected.
- The final cover follows that reference's composition and hierarchy.
- The title comes from the user-selected title or recommended title.
- The logo is a real supplied/looked-up asset or clearly marked placeholder.
- Color changes are limited to the current tool/logo palette.
- The image model did not determine the final readable Chinese title.
- Text is readable and not warped.
- No generic stock look, dark cyberpunk look, or unrelated AI illustration took over.
- Final PNG exists.
- Editable source or overlay file exists when feasible; otherwise the limitation is reported.

## Fallback

If image generation is unavailable or the generated image is not controllable enough, fall back to the closest SVG template in `assets/templates/`, then improve the result only within the same reference rules.
