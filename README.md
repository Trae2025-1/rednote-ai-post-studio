# Rednote AI Post Studio

一站式小红书 AI 内容发布 Skill。

输入一个主题词，它会完成：

```text
主题词
→ 标题候选
→ 推荐标题
→ 正文文案
→ 关键词标签
→ 封面文案
→ 可编辑 SVG 封面
→ PNG 预览
→ 合规检查
→ 发布建议
```

默认账号风格是「梓丰学AI中」：普通人学 Agent / Codex / AI 办公实战，真实复盘，不装专家，不强营销。

## 新 Skill 名称

```text
rednote-ai-post-studio
```

这个 Skill 是新的独立包，不是追加到原来的 `xiaohongshu-ai-cover` Skill。

## 核心功能

- **标题生成**：根据主题生成 5-10 个小红书标题，并推荐 1 个。
- **正文生成**：默认使用实战复盘型结构，贴近「我这次测试了什么、以前卡在哪、实际效果如何」。
- **关键词生成**：输出核心关键词、扩展关键词、标签建议和封面关键词。
- **封面生成**：从参考库和模板中选最接近的海报结构，生成可编辑 SVG 和 PNG。
- **合规检查**：避免夸张承诺、强引流、私信领取、保证涨粉变现等风险表达。

## 封面生成硬规则

封面不是自由重设计，必须严格遵循参考库里的图和模板。

允许：

- 修改海报标题、副标题、角标、底部说明等文字。
- 保持原海报字体，不换字体。
- 在原有基础上轻微修改背景色或强调色，用来区分不同主题。
- 根据用户上传的 logo 放置 logo。
- 如果用户要求联网找公开 logo，并且环境允许联网，可以查找真实 logo 资产后放入对应位置。

禁止：

- 更换海报字体。
- 改变海报版式结构。
- 添加新的装饰风格。
- 重绘、改色、裁切或重新设计 logo。
- 没有真实 logo 时凭空发明 logo。
- 脱离参考库重新设计一张新海报。

## 文件结构

```text
rednote-ai-post-studio/
├── SKILL.md
├── README.md
├── agents/openai.yaml
├── references/
│   ├── account_profile.md
│   ├── content_positioning.md
│   ├── title_formula_library.md
│   ├── copywriting_frameworks.md
│   ├── keyword_taxonomy.md
│   ├── compliance_rules.md
│   ├── output_contract.md
│   ├── cover_brief_rules.md
│   ├── strict_cover_rules.md
│   ├── visual-system.md
│   ├── template-selection.md
│   └── case-library.md
├── assets/
│   ├── reference-cases/
│   └── templates/
└── scripts/
    ├── render_svg_to_png.js
    └── validate_cover.js
```

## 使用示例

```text
Use $rednote-ai-post-studio to create a Xiaohongshu post and cover from this topic: DeepSeek 办公实测
```

输出会包含：

```text
rednote-ai-post-studio-output/deepseek-office-test/publish-pack.md
rednote-ai-post-studio-output/deepseek-office-test/cover.svg
rednote-ai-post-studio-output/deepseek-office-test/cover.png
```

## 本地校验

生成 PNG：

```bash
node scripts/render_svg_to_png.js rednote-ai-post-studio-output/<topic>/cover.svg rednote-ai-post-studio-output/<topic>/cover.png
```

校验封面：

```bash
node scripts/validate_cover.js rednote-ai-post-studio-output/<topic>/cover.svg rednote-ai-post-studio-output/<topic>/cover.png
```

## 当前状态

本包已在本地打包。等待用户明确命令后再上传 GitHub。
