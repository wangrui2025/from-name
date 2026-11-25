# Wish · Pokémon Name Gallery

- [LATEST.md](LATEST.md) — current product intent.
- [DESIGN.md](DESIGN.md) — information architecture and product interpretation.
- [ARCHIVE.md](ARCHIVE.md) — replaced center wishes, when they really exist.
- [Agent entrypoint](../../AGENTS.md) · [Dev](../dev/README.md).

This folder owns project intent, not source facts, CSS or deployment permissions.

## Existing owner feedback (preserved)

# Pokémon name-based gallery · 交互品质愿望（2026-11-20 · 交互品质参考）

这座按 Pokémon 名称浏览的图库希望让访客轻松找到目标、理解图像之间的关系并完成选择。未来改进时，重点是**可感知的悬停/键盘聚焦/触控与选中反馈**，以及图标、文字、缩略图的大小、对齐与间距；即使素材风格不同，操作区也应有稳定的视觉节奏。

**今天的启发：** [nuro.dev](https://nuro.dev/) 在 2026-11-20 展示的温和 hover、图标比例与空间布局。它只是一个当日参考，不要求照搬页面、色彩、动画参数或使用相同技术。今后发现更合适的图库、列表、筛选和移动交互方案，可直接择优替代。

未来动手前应核对本项目当前 Astro 页面、实际图库行为和静态发布约束，再用真实桌面与 440×956 手机/键盘/触控检查可操作性、选中状态、减少动态效果、无布局跳动或水平溢出。让用户更容易浏览是目标，增加动画不是目标。**此 PR 只记录愿望，不修改网站代码或发布。**

实际组件和技术数值由项目源码决定；本愿望不应与未来更好的设计实践竞争。
