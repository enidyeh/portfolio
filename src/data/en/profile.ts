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
    'I have run commercial projects and led teams, and I have designed and built products end to end on my own: find the opportunity in users and markets, then push an idea into something that can actually be tested.',
    'Right now I focus on AI product strategy and global commercialisation. Confirm the user problem first, then find the smallest workable solution and prove it.',
  ],
  pillars: ['Product thinking', 'Global growth', 'AI in practice', 'Shipping'],
  email: 'enidyeh2002@gmail.com',
  wechat: 'ENIDYEAH',
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
    note: 'One-page résumé covering education, internships and projects.',
    url: asset('resume.pdf'),
  },
  {
    group: '作品集',
    label: 'Portfolio',
    note: 'Full portfolio PDF.',
    url: asset('portfolio.pdf'),
  },
  {
    group: '异想集',
    label: 'REVERIE brand partnerships',
    note: 'The REVERIE “Garden Dream” partnership handbook for brands and venues.',
    url: asset('reverie-collab.pdf'),
  },
]
