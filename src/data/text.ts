// 正文文案的通用形状：案例（works）和正在创造（ventures）共用。
// 页面上的「项目背景 / 六问 / 合作需求」这类块，都可以是：
//   - 一段文字（string），或
//   - { body: 段落[], items: 列表项[], foot: 收尾段落[] }（三段都可选）
// 两种写法都支持 `**加粗**` 片段（渲染见 components/RichText.tsx）。
// 2026-10-13 按本人给的文案新增：原文里既有小标题式要点，也有列表和收尾说明。

export type RichTextValue = {
  body?: string[]
  items?: string[]
  /** 列表之后的收尾段落（如「以上均为待验证的商业假设」「第一阶段聚焦：…」） */
  foot?: string[]
}
