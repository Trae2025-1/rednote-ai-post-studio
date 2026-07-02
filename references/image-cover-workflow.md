# Image Cover Workflow

## Core Principle

Image generation is the primary cover maker.

Codex does not design the cover with frontend, Pillow, SVG coordinates, or manual layout. Codex only selects the closest reference image, writes a strict replacement brief for image generation, and checks the result.

The final cover must look like the selected reference poster with only these changes:

- Replace the reference logo with the supplied or looked-up real logo.
- Replace the reference slogan/title/copy with the user-selected or recommended copy.
- Adjust the overall color tone proactively when it can make the cover more beautiful, better matched to the tool, and visually distinct from other posts.
- Use the logo color as one palette cue, but do not make the whole poster identical to the logo palette.
- Preserve the selected reference's layout and element system, but do not copy its color scheme one-to-one. The new cover must have a differentiated palette.
- Preserve the selected reference's element density, decorative rhythm, and layered poster feel.

The selected reference image is the mother template, not a loose inspiration board.

## Required Inputs

- Topic keyword.
- Recommended title or user-selected title.
- Selected reference family from `references/template-selection.md`.
- 2-3 candidate reference images from different style families when possible.
- One final specific reference image from `assets/reference-cases/` or the user's reference library.
- Logo source: user-uploaded file, looked-up official asset, or explicit placeholder.
- Replacement slogan/title/copy.
- 2-3 candidate color-tone directions, such as logo-accented clean, warm editorial, cool premium, soft gradient, high-contrast monochrome, or fresh blue-green.

## Workflow

1. Compare reference styles before generating:
   - Pick 2-3 candidate reference images from different folders when the topic allows.
   - Choose one final reference image based on the topic, title length, logo count, and desired energy level.
   - Reject a reference if it forces an awkward title split or makes bottom text look like default typing.
   - Name the exact final reference image in the cover brief.

2. Create a replacement map:
   - Logo slot to replace.
   - Main title/slogan slot to replace.
   - Subtitle, corner label, CTA, menu row, or benefit-label slots to replace.
   - Text that must stay together semantically.
   - Product/tool name placement.
   - Color tone to keep or change.
   - 2-3 candidate tone pairings and the reason to choose one.
   - Elements that must remain unchanged: composition, hierarchy, spacing, typography feel, decorations, logo treatment, CTA treatment.
   - Element-density requirement: what decorative marks, layered regions, waves, labels, emphasis strokes, or background texture must remain so the poster does not become too empty.

3. Call built-in image generation for the finished poster:
   - Provide the selected reference image as the hard visual source.
   - Ask image generation to recreate the finished poster design with the replacement map applied.
   - Replace only logo and copy.
   - Preserve the reference layout, typography feel, title hierarchy, margins, decoration family, logo slot, CTA style, and visual rhythm.
   - Preserve the reference's approximate element count and information density. If the reference has corner marks, speech bubble, dotted texture, curved bottom wave, or emphasis strokes, image generation should keep the same kinds of elements.
   - Generate or brief the strongest tone pairing, not automatically the most literal logo-matching palette.
   - Allow color-tone adjustment only when it makes the cover more beautiful and differentiated while staying inside the same reference style.
   - Do not reuse the selected reference image's exact palette; redesign the tone through image generation while preserving the reference structure.
   - Do not ask for a blank background, empty card, or later manual layout.
   - Do not ask image generation to invent new decorative lines, arrows, underlines, icons, stickers, badges, separators, or blobs.

4. Review the generated cover:
   - If the image has ugly manual-looking text, garbled Chinese, fake logo, rough logo backplate, bad alignment, or invented decoration, regenerate with a stricter prompt.
   - If the selected reference cannot support the title cleanly, choose another reference and regenerate.
   - Do not solve a failed generation by manually designing a new poster.

5. Minimal post-processing is allowed only for exact correction:
   - Replace or sharpen the real logo in the same logo slot.
   - Correct readable title/copy in the same text slot.
   - Preserve the generated/reference layout, size, baseline, alignment, spacing, hierarchy, and treatment.
   - Do not add new layout, decorative lines, background blocks, manual menu rows, or new typography.

6. Export:
   - Save the image-generated composite.
   - Save the final PNG.
   - Include a minimal overlay/source file only if it records exact logo/text correction, not a manually designed cover.

## Image Prompt Rules

The prompt must include:

- "Use this selected reference image as the exact poster design source."
- "Recreate the finished poster design, not a new poster inspired by it."
- "Replace only the logo and the slogan/title/copy."
- "Preserve composition, typography feel, title hierarchy, spacing, margins, decorations, logo-slot treatment, and CTA treatment."
- "Preserve the reference's element density and layered poster richness; do not make it overly minimal."
- "Optional color-tone adjustment is allowed for a more beautiful and differentiated cover, but keep the same reference style."
- "Use the logo color only as an accent cue; the overall poster palette may use a different compatible tone if it looks better."
- "Try or specify 2-3 tone directions and choose the best-looking one before generation when the palette is not obvious."
- "Do not copy the reference image's color scheme exactly; preserve its layout, but give this cover a distinct palette."
- "Do not add visual elements that are not in the reference."
- "Do not create a blank background for later manual layout."
- "Do not hand-design, frontend-design, or arrange text/logo manually."
- The final title grouping, including where the product/tool name goes without breaking Chinese phrase order.
- The exact logo source and instruction to use the real logo, not a painted, mosaic, blurred, or fake logo area.

The prompt must not include:

- Generic "make a beautiful poster" without naming the reference.
- "Generate a background only."
- "Leave text/logo empty so I can design later."
- "Add tasteful decorations", "make it more dynamic", or other open-ended design freedom.
- New layout concepts not visible in the selected reference.
- Requests to invent, redraw, recolor, or stylize a brand logo.

## Color Tone Rule

Color may change, but only through image generation inside the selected reference style.

Do not wait for the user to ask for a different palette. The skill should proactively choose a strong palette direction.

Reference color is not locked. The selected reference locks composition, hierarchy, typography feel, element density, and decoration types; the new cover must still receive a differentiated color design.

Allowed:

- Warmer/cooler overall tone.
- Cleaner/premium/brighter version of the same poster.
- Accent colors that echo the logo without making the whole cover identical to the logo.
- Aesthetic color variation to distinguish posts in a series.
- 2-3 candidate tone directions before final generation when the logo palette is too plain, too dark, too saturated, or too close to previous covers.
- Neutral base plus logo-derived accent.
- A contrasting but harmonious palette that improves readability and poster quality.
- Differentiated palette compared with the selected reference image.

Forbidden:

- Crude manual color blocks.
- Random accent lines or underlines created just to fill empty space.
- Replacing the reference style with a new palette system.
- Making the cover look like a frontend card layout instead of a poster.
- Using SVG/manual editing to add decorations after generation.
- Matching the entire poster to the logo color so closely that it becomes flat, monotonous, or visually repetitive.
- Copying the selected reference image's palette exactly.

## Explicit Failure Cases

These outputs fail and must be regenerated or re-briefed:

- The cover looks hand-coded or frontend-designed.
- The output is only a background layer, not a finished poster.
- The output is too empty compared with the selected reference.
- Logo and title were manually arranged after image generation as the main design.
- The product name interrupts a Chinese phrase, such as `我的首席 / Cursor / 技术官`.
- Bottom text looks like plain typed input instead of a designed reference-style CTA/chip/band.
- Logo sits on a rough painted, mosaic, blurred, or generic backplate that is not in the reference.
- Check icons and labels have mismatched vertical alignment.
- Subtitle and menu/benefit row repeat the same words.
- A blue line, curved stroke, arrow, underline, divider, badge, icon, blob, or other decoration appears without being in the selected reference.
- Color changes look like crude blocks rather than a harmonious poster tone.
- The palette blindly follows the logo and makes the cover monotonous.
- The palette is indistinguishable from the selected reference image.

## Validation Checklist

Before final delivery, verify:

- 2-3 reference styles were considered when possible.
- One final reference image was selected and named.
- The final image was generated as a finished poster by image generation.
- Only logo and slogan/title/copy were replaced.
- Optional color-tone adjustment is tasteful, beautiful, differentiated, and still inside the selected reference style.
- Palette choice considered more than one tone direction when useful; it did not blindly copy the logo colors.
- Palette is differentiated from the selected reference while preserving the reference style.
- Composition, hierarchy, typography feel, spacing, logo slot, CTA treatment, and decorations match the selected reference.
- Element density and poster richness match the selected reference; it is not over-simplified.
- No frontend/Pillow/SVG/manual-coordinate cover design was used as the main method.
- Manual post-processing, if any, only corrected exact logo/text in the same slots.
- The real logo is used or the placeholder is clearly marked.
- Chinese text is readable and keeps phrase order.
- No invented decorations remain.
- Final PNG exists.

## Fallback

If image generation is unavailable, stop and report that the preferred cover path cannot run. Do not silently fall back to a hand-designed frontend/Pillow/SVG cover unless the user explicitly approves a lower-quality manual fallback.
