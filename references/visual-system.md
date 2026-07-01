# Visual System

This reference is based on the preferred cover sets provided by the user: single-logo tutorial covers, two-logo workflow covers, three-benefit covers, PDF/resource covers, suggested-save covers, and "from beginner to mastery" covers.

## Shared Aesthetic

The preferred direction is not dark cyberpunk or heavy SaaS marketing. It is a clean AI tutorial cover style:

- Bright white or soft pastel base.
- Strong black Chinese headline.
- Oversized English tool/product word as the visual hook.
- Logo or tool icon as a hero object.
- Soft shadows and glows to make flat logos feel tactile.
- Small hand-drawn marks for Xiaohongshu friendliness.
- Simple bottom CTA or feature list for save/share behavior.

## Canvas

- Default ratio: 3:4 portrait.
- Common editable size: 1080 x 1440 or 1242 x 1660.
- Safe margin: 56-80 px on 1080-wide canvas.
- Keep major text away from all edges. Rounded inner cards can use larger radius, around 36-56 px.

## Layout Families

### A. Big Tool Word + Logo Hero

Use for one iconic tool or product.

Structure:

- Top: small label, such as `零基础学` or series marker.
- Center top: huge English/tool name, e.g. `Codex`.
- Mid: bold Chinese promise.
- Lower center: large logo/icon with soft glow or shadow.
- Bottom: CTA pill or short benefit line.

Good for: Codex, DeepSeek, ChatGPT, Claude, Gemini, NotebookLM.

### B. Workflow Pair

Use for two tools working together.

Structure:

- Top: combined product names, e.g. `Codex+Chrome`.
- Main: Chinese outcome-focused headline.
- Mid/lower: two round logo badges with plus sign or implied workflow.
- Bottom: CTA pill.

Good for: browser automation, spreadsheet automation, writing workflows, research workflows.

### C. Beginner Guide Card

Use when the note is a full guide or course-like resource.

Structure:

- Outer pastel background.
- Inner rounded white card.
- Top-left arrows and top-right dot menu.
- Brush label: `零基础学`.
- Large tool name.
- Bold guide headline.
- Three checked benefits in one row.
- Large logo hero.
- Bottom brush CTA.

Good for: complete guides, beginner tutorials, multi-part series covers.

### D. Minimal Resource Download

Use when the content is a PDF, template, checklist, or resource pack.

Structure:

- Paper-like white background or notebook motif.
- Top punched holes or subtle paper shadow.
- Large title.
- Center logo.
- Large resource label.
- Bottom file/download card.

Good for: PDF guides, resource packs, checklists.

Mandatory elements for PDF/resource covers:

- Paper/notebook top holes when using the paper motif.
- Exact original logo near top or center.
- Large title and resource promise.
- Bottom PDF/file card with red PDF icon, filename, file size, and download/folder icons.
- Optional curled-corner CTA strip only when following the purple/orange resource-card examples.

### E. Bold Save-Worthy Poster

Use when the hook is emotional or urgency-driven.

Structure:

- Very large angled or stacked text.
- One highlighted phrase in yellow/green/blue block.
- Product keyword huge.
- Decorative dots, corner blobs, brush underlines.
- Logo sticker with thick white outline.
- Bottom black CTA pill like `建议收藏`.

Good for: "must save", "systematic learning", "hot agent", "tool map" posts.

### F. Three-Benefit Clean Card

Use when the cover should be clean, readable, and less poster-like.

Structure:

- Large original logo at top, often on a faint soft blob.
- Left-aligned or center-aligned title block.
- 1-2 product/tool keywords in accent color.
- Black heavy Chinese lines.
- Three small benefit chips/check items at the bottom.

Good for: single-tool tutorial, learning manual, productivity method, office workflow.

## Typography

Use bold sans-serif Chinese for primary titles. Match the case-library feeling: heavy, geometric, plain, and compact. Do not use novelty, sci-fi, handwriting, or "AI generated" display fonts.

Preferred CSS font stack:

- Chinese: `PingFang SC`, `Microsoft YaHei`, `Noto Sans CJK SC`, `Source Han Sans SC`.
- English/product: `Inter`, `Arial`, `Helvetica Neue`, or a geometric bold sans.

When rendering with local tools, pick the closest available heavy sans-serif. Favor `PingFang SC` Heavy/Semibold on macOS when available. If unavailable, use `Noto Sans CJK SC` or `Source Han Sans SC` at heavy weights. Keep letter spacing at `0`.

Hierarchy for 1080 x 1440:

- Huge English/product word: 120-210 px.
- Main Chinese headline: 72-110 px.
- Secondary line: 42-64 px.
- Top label: 36-52 px.
- Benefit row/CTA: 34-48 px.

Use heavy weights. Do not use thin type for the main message.

Font policy:

- Do not rotate, shear, warp, or pseudo-3D transform Chinese headline text.
- Use shadows only when matching poster/resource examples; keep them subtle.
- If a reference uses a strong black headline, use a clean heavy sans-serif and similar proportions, not a newly invented style.

## Color Logic

Derive palette from the uploaded logo:

- Blue logo: white/pale blue/lavender background, blue accent, black headline.
- Green logo: white/pale green background, green accent, black headline.
- Purple logo: white/pale lavender background, purple accent, black headline.
- Multi-color logo: keep headline black, use logo colors only in product word or small accents.

Recommended ratios:

- 70-80% light background.
- 10-20% black headline.
- 5-15% logo-derived accent.

Avoid one-note saturation. Accent color should guide attention, not fill the whole cover.

## Logo Treatment

Hard rule: uploaded logos are source assets, not design prompts. Use the exact supplied file. Never redraw, reinterpret, recolor, crop into a new character, or rebuild it as vector art unless the user explicitly asks for logo recreation.

One logo:

- Large center icon.
- Put inside a white circle badge or rounded square.
- Add soft shadow or glow.
- Optional white sticker outline.
- Preserve the exact logo pixels/vector and aspect ratio.

Two logos:

- Equal-sized circular badges.
- Add plus sign or shared underline.
- Keep spacing generous.
- Preserve both logos exactly.

Multiple logos:

- Use a row or compact grid.
- Give each logo equal optical weight.
- Do not let logo grid compete with the headline.

## Decorative Motifs

Use 2-4 at most:

- Left arrows `<<<`.
- Top-right dot menu.
- Brush label behind text.
- Hand-drawn underline.
- Small blue/green radiating marks.
- Check icons with benefit labels.
- Rounded CTA pill.
- Subtle abstract circles or blobs in corners.

Decorations should clarify structure: label, emphasis, movement, or CTA.

Do not add decorative arcs or symmetric curved lines around labels unless a selected reference explicitly contains that motif. Short straight dividers, single underline strokes, squiggle underlines, and small radiating marks are allowed because they appear repeatedly in the library.

## Series Design

For weekly or cyclic publishing:

- Fix one of the layout families as the series skeleton.
- Lock margins, title positions, logo region, and CTA position.
- Vary accent color by tool logo.
- Add issue marker, such as `第 01 期`, `工具流 01`, or `本周 AI 工作流`.
- Keep a repeated bottom CTA or benefit row for brand memory.
- For multi-cover batches, include a small series map before creating assets.

## First Round Case Notes

The provided examples show these useful patterns:

- `Codex` as oversized product word, with black Chinese promise and blue/purple gradients.
- `零基础学` brush label is a strong course/tutorial signal.
- Check benefit rows make covers feel practical and save-worthy.
- Large logo badge in the lower half balances heavy headline text.
- White/pastel backgrounds preserve readability.
- Bottom CTA pills work well when the post is a guide, resource, or complete tutorial.
- The simpler covers still work when one big icon and one clear headline dominate.
