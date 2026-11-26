# Random name and source comparison

稳定 ID：name-source-comparison；范围：/ (single image and comparison)。

## 目标与来源

让访客从随机 Pokémon 名称发现素材，轻松在当前对象的单图和多来源对照之间往返。

依据：[现有 Wish](../wish/LATEST.md)、[现有 Design](../design/README.md)，2026-11-26 按原仓库内容整理；不宣称获得新的用户批准。

## 保护的体验与语义

单图为直接入口，Compare All Sources 对照同一对象，Back 返回。保留来源、命名语义、选择与触控反馈；外部素材可能不可用，不冒充官方图鉴或授权。

允许更优布局、交互和技术实现；新目标须记录来源及时间，不把当前实现不足变成降低意图的理由。

## 实现与验收

[现有页面](../../src/pages/index.astro) · [Design](../design/README.md) · [Dev / 验收入口](../dev/WEBSITE_PASSPORT.md)。

按既有 Design/Passport 实测随机入口、同对象来源、对照与返回、键盘/手机、外链失败与无溢出；不以视觉相似代替来源真实性。

状态：意图来源已核对；本次只接入文档，不改变网站代码或重新验收生产功能。未验证项保持明确。
