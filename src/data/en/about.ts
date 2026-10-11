// English copy. Mirrors `../about.ts` one-to-one.
// 英文文案，与 `../about.ts` 一一对应。

import type { TimelineItem } from '../about'

export const aboutHead = {
  eyebrow: 'About',
  title: 'About me.',
  lede: 'The site is about long-term capability; a résumé is about a specific role. Below are two tailored résumés, plus experience, education and contact details.',
}

/** Capability method. `zh` is left equal to `en` on purpose — the English page shows one label only. */
export const method: { en: string; zh: string; items: string[] }[] = [
  {
    en: 'Strategy',
    zh: 'Strategy',
    items: ['Market and user insight', 'Opportunity assessment', 'Commercial positioning'],
  },
  {
    en: 'Product',
    zh: 'Product',
    items: ['Prioritisation', 'User flows', 'Prototypes and AI workflows', 'Validation and iteration'],
  },
  {
    en: 'Growth',
    zh: 'Growth',
    items: ['Content and creator ecosystems', 'Channels and conversion', 'Cross-border commercialisation', 'Reading the numbers'],
  },
]

export const experience: TimelineItem[] = [
  {
    when: '20XX — Present',
    role: 'To be filled: role / title',
    org: 'To be filled: company or project',
    desc: 'To be filled: what you owned and what you achieved (verifiable results).',
  },
  {
    when: '20XX — 20XX',
    role: 'To be filled: role / title',
    org: 'To be filled: company or project',
    desc: 'To be filled: what you owned and what you achieved.',
  },
  {
    when: '20XX — 20XX',
    role: 'To be filled: role / title',
    org: 'To be filled: company or project',
    desc: 'To be filled: what you owned and what you achieved.',
  },
]

export const education: TimelineItem[] = [
  { when: '20XX — 20XX', role: 'To be filled: degree / major', org: 'To be filled: school' },
  { when: '20XX — 20XX', role: 'To be filled: exchange / programme', org: 'To be filled: school' },
]

export const aboutNote =
  'Experience, education and capability entries will be replaced once confirmed. Both résumé PDFs become downloadable once they are placed in public/.'
