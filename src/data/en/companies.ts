// English copy. Mirrors `../companies.ts` one-to-one — change both sides together.
// 英文文案，与 `../companies.ts` 一一对应；改一边就改另一边。

import { asset } from '../../lib/base'

export type { Company } from '../companies'
import type { Company } from '../companies'

/** Companies I have worked with. Logos supplied by the site owner. */
export const companies: Company[] = [
  { name: 'komiko', logo: asset('logos/komiko.png') },
  { name: 'opencreator', logo: asset('logos/opencreator.png') },
  { name: 'Ontimeshow', logo: asset('logos/ontimeshow.png') },
  { name: 'Daa', logo: asset('logos/daa.png') },
  { name: 'TUBE', logo: asset('logos/tube.png') },
  { name: "Momo's Workshop", logo: asset('logos/momos-workshop.png') },
  { name: 'DEPTRUM', logo: asset('logos/deptrum.png') },
  { name: 'POP MART', logo: asset('logos/popmart.png') },
  { name: 'Xiaohongshu', logo: asset('logos/xiaohongshu.png') },
]
