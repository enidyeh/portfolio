// English copy. Mirrors `../profile.ts` one-to-one — change both sides together.
// 英文文案，与 `../profile.ts` 一一对应；改一边就改另一边。

import type { DownloadItem, SocialLink } from '../profile'
import { asset } from '../../lib/base'

export const profile = {
  wordmark: 'ENID',
  name: 'ENID',
  nameZh: '',
  brandSub: 'AI Product Strategy × Global Growth',
  roleEn: 'AI Product Strategy × Global Growth',
  roleZh: 'AI Product Strategy × Global Growth',
  headlineEn: 'I turn insights into products, experiences and growth.',
  statement:
    'I work where culture, consumer behaviour and technology meet — turning user insight into product decisions, growth strategy and real projects.',
  location: 'Shanghai',
  intro: [
    'I look for opportunity where culture, consumer behaviour and technology meet. I start from real user pain points and push ideas into testable product proposals and growth strategies.',
    'I have worked on commercial projects across several industries, organised offline events with tens of thousands of participants, and taken a Web3 phygital product from 0 to 1.',
    'Time in Milan and New York gave me a global outlook, so I spot market opportunities quickly and push them into reality.',
    'My focus now is AI product strategy and the global commercialisation of brands.',
  ],
  pillars: ['Product thinking', 'Global growth', 'AI in practice', 'Shipping'],
  email: 'enidyeh2002@gmail.com',
  wechat: 'ENIDYEAH',
  /** Phone number: published in Contact at the owner’s request (2026-10-12). */
  phone: '+86 18702378098',
  // Social profiles: Xiaohongshu links were taken down on 2026-10-11 (the old
  // URLs carried expiring xsec_token params). Add real profile URLs back here.
  social: [] as SocialLink[],
}

export const siteNote =
  'Some content has not been supplied yet; it will be completed before publishing.'

export const downloads: DownloadItem[] = [
  {
    group: '简历',
    label: 'Résumé',
    url: asset('resume.pdf'),
  },
  {
    group: '作品集',
    label: 'Portfolio',
    url: asset('portfolio.pdf'),
  },
  {
    group: '异想集',
    label: 'REVERIE brand partnerships',
    url: asset('reverie-collab.pdf'),
  },
]
