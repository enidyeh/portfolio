// 「我工作过的公司」：首页那条 logo 轮播。
//
// logo 由本人提供。再加一家的步骤：
//   1. 图片丢进 `public/logos/`（透明底 png，统一高度 96px 导出即可）；
//   2. 在下面的 `companies` 里补一条：{ name: '公司名', logo: asset('logos/文件名.png') }。
// 路径要过 `asset()`：站点部署在 /portfolio/ 子路径下，写死路径会 404。
// 数组为空时，首页那栏显示虚线占位格子 —— 不会把占位当成真实履历。
// 没有 logo 的条目会退化成公司名文字，所以 `name` 始终要填。

import { asset } from '../lib/base'

export type Company = {
  /** 公司 / 机构名：logo 缺失时作为文字回退，也是无障碍标签 */
  name: string
  /** logo 路径（public/ 下），必须用 asset() 包一层，例如 asset('logos/xxx.png') */
  logo?: string
  /** 可选：官网 / 领英链接 */
  url?: string
}

/** 我工作过的公司（logo 由本人提供，顺序沿用其提供顺序）。 */
export const companies: Company[] = [
  { name: 'Ontimeshow', logo: asset('logos/ontimeshow.png') },
  { name: 'opencreator', logo: asset('logos/opencreator.png') },
  { name: '光鉴科技 DEPTRUM', logo: asset('logos/deptrum.png') },
  { name: '小红书', logo: asset('logos/xiaohongshu.png') },
  { name: 'Daa', logo: asset('logos/daa.png') },
  { name: 'TUBE', logo: asset('logos/tube.png') },
  { name: "Momo's Workshop 毛吉吉", logo: asset('logos/momos-workshop.png') },
  { name: 'komiko', logo: asset('logos/komiko.png') },
  { name: 'POP MART', logo: asset('logos/popmart.png') },
]

export const companiesNote = '公司名录与 logo 由本人提供。'
