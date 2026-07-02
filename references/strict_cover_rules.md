# Strict Cover Rules

## Principle

The cover image must be derived from the bundled reference library. The selected reference image is the aesthetic source of truth.

Image generation is the primary cover maker. Codex is the selector, brief writer, and quality checker. Codex must not hand-design the cover with frontend, Pillow, SVG coordinates, or manual layout unless the user explicitly approves a manual fallback.

## Allowed Changes

Only these changes are allowed:

1. Replace logo:
   - Use the user's uploaded logo when supplied.
   - If the user asks for a public logo and lookup is available, use a real official or reliable logo asset.
   - Put the logo in the same reference logo slot and treatment.
   - Do not invent, redraw, recolor, or stylize the logo.

2. Replace slogan/title/copy:
   - Main title.
   - Subtitle.
   - Corner label.
   - Bottom note.
   - Short benefit/menu text.
   - Keep connected Chinese phrases intact.

3. Adjust color tone:
   - Allowed when it makes the new cover more beautiful, better matched to the tool, or visually distinct from related covers.
   - The tone change must be image-generated inside the selected reference style.
   - The logo color is a cue for accents, not a command to make the whole poster the same color.
   - When the best palette is not obvious, proactively compare or specify 2-3 tone directions and choose the strongest one.
   - The selected reference locks layout and element style, not the exact palette. The new cover must use a differentiated color tone.
   - Keep the reference composition, hierarchy, typography feel, spacing, decoration family, and CTA treatment.
   - Keep the reference element density and layered poster richness.

4. Minimal post-processing:
   - Allowed only to correct exact logo or readable text.
   - Must use the same slots, sizes, alignment, and treatment from the reference.
   - Must not redesign the poster.

## Forbidden Changes

Do not:

- Hand-code the cover layout with frontend, Pillow, SVG, or manual coordinates as the main method.
- Generate a blank background and manually arrange logo/title/CTA afterward.
- Redesign the layout.
- Change the poster font style or typography hierarchy.
- Add new decoration types.
- Add visual elements that are not visible in the selected reference.
- Remove most visual elements from an element-rich reference and make the cover overly empty.
- Add random blue lines, curved strokes, arrows, underlines, separators, stickers, badges, icons, or blobs.
- Use crude manual color blocks as a "tone change."
- Use SVG/manual editing to change colors or add decorations after image generation.
- Make the whole poster match the logo so literally that the result becomes flat or monotonous.
- Wait for the user to remind you to try a different color tone when the current tone is weak.
- Copy the selected reference image's color scheme exactly.
- Make the cover look like a frontend card instead of a finished poster.
- Use default-looking typed small text for CTA, benefit labels, or bottom copy.
- Put a product/tool name inside the middle of a connected Chinese phrase.
- Use a rough painted, mosaic, blurred, or generic backplate for a logo unless the selected reference uses that exact treatment.
- Repeat the same copy across subtitle and menu/benefit labels.
- Deliver misaligned check/menu icon rows.

## Template Selection

Select the closest existing reference/template:

- One tool logo: single-logo tutorial or three-benefit clean.
- Two tools: two-logo workflow reference.
- PDF/resources/checklist/template: PDF resource reference.
- Save-worthy tutorial: suggested-save reference.
- Day/series post: preserve the series cover grid and only vary text/color/logo.

## Validation Checklist

Before final delivery:

- The selected reference image is named.
- Different reference styles were considered when possible.
- The final cover is an image-generated finished poster, not a hand-designed layout.
- Only logo, slogan/title/copy, and optional color tone changed.
- The color-tone adjustment is aesthetically better and still belongs to the selected reference style.
- The palette uses logo color intelligently as an accent cue, while preserving overall poster aesthetics and contrast.
- The palette is visibly differentiated from the selected reference image, while the composition still follows it.
- Composition, typography feel, hierarchy, spacing, CTA treatment, logo slot, and decoration family follow the selected reference.
- Element density follows the selected reference; rich references remain rich.
- Logo directly replaces the reference logo slot; no invented backplate or fake placeholder remains.
- Title grouping and reading order are natural.
- CTA, bottom labels, and menu text do not look like plain typed text.
- Subtitle, menu/benefit row, and CTA have distinct jobs.
- Check/menu icon rows are visually centered and aligned.
- No invented decoration remains.
- Manual post-processing, if any, only corrected exact logo/text without redesigning.
- Final PNG exists.
