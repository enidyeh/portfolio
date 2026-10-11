// 「我工作过的公司」：首页那条 logo 墙。
//
// logo 由本人提供。放 logo 的步骤：
//   1. 图片丢进 `public/logos/`（建议 svg 或透明底 png，高度统一在 40–64px）；
//   2. 在下面的 `companies` 里补一条：{ name: '公司名', logo: '/logos/文件名.svg' }。
// 数组为空时，首页那栏显示虚线占位格子 —— 不会把占位当成真实履历。
// 没有 logo 的条目会退化成公司名文字，所以 `name` 始终要填。

export type Company = {
  /** 公司 / 机构名：logo 缺失时作为文字回退，也是无障碍标签 */
  name: string
  /** logo 路径（public/ 下），例如 '/logos/xxx.svg' */
  logo?: string
  /** 可选：官网 / 领英链接 */
  url?: string
}

/** 我工作过的公司。暂为空 —— 由本人提供后逐条补上。 */
export const companies: Company[] = []

export const companiesNote =
  '公司名录与 logo 由本人确认后补上；此处为空占位，不填写未经确认的公司名。'
