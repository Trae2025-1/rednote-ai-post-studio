# Rednote AI Post Studio

从一个主题词开始，一次生成小红书笔记的标题、正文、关键词和封面图。

`rednote-ai-post-studio` 是一个面向 AI 工具 / 办公效率 / Agent 实战账号的 Codex Skill。它不是单纯写文案，也不是单纯做封面，而是把小红书发布前的关键环节打成一条稳定流程：

```text
主题词
→ 选题定位
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

默认会参考我本人账号「梓丰学AI中」的内容风格：普通人学 Agent / Codex / AI 办公实战，真实复盘，不装专家，不强营销。

## 适合谁用

- 正在做小红书 AI 工具号、AI 办公号、效率工具号的人。
- 想持续输出 Codex、ChatGPT、DeepSeek、NotebookLM、飞书、PPT、Excel、网页设计等内容的人。
- 想让笔记从「想到一个主题」直接推进到「可发布文案 + 可用封面」的人。
- 不想每次都重新想标题、正文结构、标签和封面排版的人。

## 核心优势

### 1. 从主题词直接到发布包

只需要给一个主题，例如：

```text
DeepSeek 办公实测
```

Skill 会自动补齐：

- 内容定位
- 标题候选
- 推荐标题
- 正文文案
- 标签关键词
- 封面文案
- 发布建议

### 2. 文案不是泛泛 AI 味，而是实战复盘风格

默认正文结构贴近真实账号表达：

```text
这次我测试了什么
以前这个任务卡在哪
我怎么拆流程
用了哪些工具 / Skill
实际效果如何
适合哪些场景
一句结论
```

它更适合做「我真的试过」的内容，而不是空泛的 AI 口号。

### 3. 标题更适合 AI 办公实战号

内置标题方向包括：

```text
我用【工具】做了个【可复用能力】
用【工具/智能体】搞定【具体任务】
不会【技能】？Codex直接帮你【结果】
【工具A】和【工具B】，普通人先学哪个？
DayX｜【工具】办公实战
```

目标是让标题有工具名、有任务、有结果感，但不夸张。

### 4. 关键词按小红书发布场景组织

关键词会按这些维度生成：

- 工具词：Codex、ChatGPT、DeepSeek、NotebookLM、Skill、智能体
- 场景词：AI办公、PPT制作、Excel表格、封面设计、网页设计
- 能力词：AI工作流、AI提效、自动化办公、可编辑设计
- 人群词：普通人学AI、职场人、打工人AI实验室
- 平台词：小红书封面、小红书图文、小红书标题

如果你要求「联网找近期关键词」或「查热门搜索词」，Skill 会先调研再生成。

### 5. 封面不是重画，而是严格套参考库

封面生成遵循内置参考图和模板，不自由发挥。它会在参考库中选择最接近的版式，然后只做必要替换。

这让连续内容更容易保持账号统一感。

## 快速使用

在 Codex 中调用：

```text
Use $rednote-ai-post-studio to create a Xiaohongshu post and cover from this topic: DeepSeek 办公实测
```

中文也可以：

```text
用 rednote-ai-post-studio，帮我做一篇小红书，主题是 DeepSeek 办公实测，直接出标题、正文、关键词和封面。
```

输出会包含：

```text
rednote-ai-post-studio-output/<topic-slug>/publish-pack.md
rednote-ai-post-studio-output/<topic-slug>/cover.svg
rednote-ai-post-studio-output/<topic-slug>/cover.png
```

## 推荐输入方式

最简单输入：

```text
主题：DeepSeek 办公实测
```

更高质量输入：

```text
主题：用 Codex 做小红书封面
目标人群：刚开始学 AI 的职场人
内容类型：实战复盘
重点：不是一次性出图，而是可复用封面流程
封面关键词：Codex、可编辑、审美在线
```

系列内容输入：

```text
主题：7天 Codex 办公实战 Day 3
任务：用 Codex 整理 Excel 表格
风格：普通人实测，不要课程感
```

带 logo 的封面输入：

```text
主题：NotebookLM 资料整理教程
Logo：/path/to/notebooklm-logo.svg
封面要求：使用参考库里最接近的单工具教程封面，只替换文字，不换字体。
```

## 输出内容

默认输出结构：

```text
1. 内容定位
2. 标题候选
3. 推荐标题
4. 封面文案
5. 正文文案
6. 关键词
7. 封面生成指令
8. 合规检查
9. 发布建议
10. 封面文件
```

## 封面生成硬规则

封面不是自由重设计，必须严格遵循参考库里的图和模板。

### 允许

- 修改海报标题、副标题、角标、底部说明等文字。
- 保持原海报字体，不换字体。
- 在原有基础上轻微修改背景色或强调色，用来区分不同主题。
- 根据用户上传的 logo 放置 logo。
- 如果用户要求联网找公开 logo，并且环境允许联网，可以查找真实 logo 资产后放入对应位置。

### 禁止

- 更换海报字体。
- 改变海报版式结构。
- 添加新的装饰风格。
- 重绘、改色、裁切或重新设计 logo。
- 没有真实 logo 时凭空发明 logo。
- 脱离参考库重新设计一张新海报。

## 生成质量检查

封面生成后会用脚本校验：

```bash
node scripts/validate_cover.js rednote-ai-post-studio-output/<topic>/cover.svg rednote-ai-post-studio-output/<topic>/cover.png
```

校验重点包括：

- 是否是 3:4 小红书竖版比例。
- SVG 是否保留可编辑文本。
- PNG 是否成功生成。
- 是否存在未替换占位符。
- 是否满足基础交付条件。

## 项目结构

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

## 一句话总结

`rednote-ai-post-studio` 适合把「我想发一篇 AI 办公小红书」快速变成「能发的标题、正文、关键词和封面图」，同时保证封面风格稳定、字体不乱换、版式不跑偏。
