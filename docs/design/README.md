# Design · Pokémon Name Gallery

沿用现有 warm editorial 配色、Inter/system sans、明暗主题、图片原始像素比例与 CSS focus 规则。保持现有比较布局与图像来源标签，不引入第二套 token。

**Executable owner:** [global.css](../../src/styles/global.css) and [shared layout](../../src/layouts/BaseLayout.astro). Change shared semantic roles there rather than creating a duplicate global token table. Preserve existing ordinary-page hierarchy, readable line length, native links, visible focus, contrast, and responsive behavior. Test desktop 1440×900 and mobile 440×956 CSS pixels (DPR3/touch), including the actual primary controls; a simulator is not a physical-phone test. Check existing theme and image error/fallback behavior.

Read [Wish interpretation](../wish/DESIGN.md) before navigation/product changes. No approved aesthetic redesign is implied by this document.
