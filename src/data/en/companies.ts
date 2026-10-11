// English copy. Mirrors `../companies.ts` one-to-one — change both sides together.
// 英文文案，与 `../companies.ts` 一一对应；改一边就改另一边。

export type { Company } from '../companies'
import type { Company } from '../companies'

/** Companies I have worked with. Empty until the site owner supplies them. */
export const companies: Company[] = []

export const companiesNote =
  'Company names and logos will be added once they are confirmed; this is an empty placeholder, not a claim.'
