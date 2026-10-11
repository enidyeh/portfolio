// English copy. Mirrors `../about.ts` one-to-one.
// 英文文案，与 `../about.ts` 一一对应。

import type { TimelineItem } from '../about'

export const aboutHead = {
  // 2026-10-12 at the owner’s request: eyebrow removed, self-description replaced.
  title: 'About me.',
  lede: 'Someone who likes to tinker, with a global outlook and commercial experience, using AI tools and a product mindset to set curiosity free.',
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
    when: '2025.06 — 2025.08',
    role: 'Overseas marketing intern',
    org: 'Opencreator',
    desc: 'Creator partnerships and community: built a network of 50+ overseas KOL/KOC and anime communities, ran the Discord community and the “AI AMV” challenge, and planned content for TikTok, Instagram and X.',
  },
  {
    when: '2025.09 — 2025.12',
    role: 'Overseas PR intern',
    org: 'Guilin Jimuqiu Cosmetics (brand “Momo’s Workshop”)',
    desc: 'Brand communication overseas: maintained a database of 5,000+ creators, worked with 500+ KOL/KOC, owned seeding, creative briefs and content reviews, and supported the brand’s DTC site and cross-border operations.',
  },
  {
    when: '2024.03 — 2024.06',
    role: 'Creative project management intern',
    org: 'Pop Mart',
    desc: 'Worked on launch campaigns for 20+ products (SKULLPANDA, Disney Donald Duck, Jackson Wang, LABUBU, MOLLY); coordinated 25+ internal and external teams to cut the project cycle by 20%, with over 10 million social impressions within 48 hours of launch.',
  },
  {
    when: '2023.10 — 2024.02',
    role: 'Commercial design intern',
    org: 'Xiaohongshu (Xingyin Information Technology)',
    desc: 'Cross-team visual marketing for “REDesign”: planned the official campaign 「我就要这样生活」, ran the 「字体月月报」 column, and produced visuals and livestream assets for the 2024 WILL commercial partner conference.',
  },
]

export const education: TimelineItem[] = [
  {
    when: '2022 — 2027',
    role: 'BA · Product Design',
    org: 'Jiangnan University',
    desc: 'Ranked 2nd in China for design (ShanghaiRanking); final-year project on phygital smart product design in the data-sovereignty era was awarded a university-level outstanding thesis.',
  },
  {
    when: '2024 — 2025',
    role: 'BA · Fashion Marketing and Branding (one-year exchange)',
    org: 'Politecnico di Milano',
    desc: 'Ranked 7th in the world for art and design (QS); awarded the Jiangsu government scholarship for overseas study (top 5%). Taught in English, covering brand communication, industry trends, fashion retail and exhibition design.',
  },
]

export const aboutNote =
  'Experience and education come from the owner’s own résumé (added 2026-10-12). Both résumé PDFs become downloadable once they are placed in public/.'
