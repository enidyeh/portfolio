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
  email: '',
  wechat: '',
  social: [
    {
      label: 'Xiaohongshu',
      url: 'https://www.xiaohongshu.com/user/profile/5b8a63890ddda30001ded374?xsec_token=AB0bl2LxP7ZdfPYO5BLCC6Bh9HJnKIi4_Z7gHDD5dUlLw%3D&xsec_source=pc_search',
    },
    {
      label: 'Xiaohongshu',
      url: 'https://www.xiaohongshu.com/user/profile/64f89acf0000000004024dac?xsec_token=ABU_O_y4uSGyexANn0Z_ib5OJHwnHsBwGzDqPOGT37uMU%3D&xsec_source=pc_search',
    },
  ] as SocialLink[],
}

export const siteNote =
  'Some content has not been supplied yet; it will be completed before publishing.'

export const downloads: DownloadItem[] = [
  {
    group: '简历',
    label: 'Commercial résumé',
    note: 'For commercial and growth roles: market insight, growth and commercial results.',
    url: asset('resume-commercial.pdf'),
    pending: true,
  },
  {
    group: '简历',
    label: 'Product résumé',
    note: 'For product and AI roles: user problems, product decisions, prototypes and validation.',
    url: asset('resume-product.pdf'),
    pending: true,
  },
  {
    group: '项目资料',
    label: 'Selected projects overview',
    note: 'A one-page summary of the four cases — good for a quick read.',
    url: asset('portfolio-overview.pdf'),
    pending: true,
  },
  {
    group: '项目资料',
    label: 'Partnership / fundraising',
    note: 'Commercial and fundraising material for the ventures. Available on request, not for public download.',
  },
]
