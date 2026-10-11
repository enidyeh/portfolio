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

/**
 * Experience and education — 2026-10-12, entered line by line from the owner's
 * own résumé (left: company / role / dates; right: summary + numbered bullets,
 * copied rather than rewritten).
 */
export const experience: TimelineItem[] = [
  {
    when: '2026.6 — Present',
    role: 'Venture · independent planning and operations',
    org: 'REVERIE 异想集',
    desc: 'Planned and ran more than ten events single-handedly: a community of 2,500+ members, 5,000+ attendees on site, and 30+ artists brought in. Organised film screenings including Spider-Man: Across the Spider-Verse, Barbie and Taylor Swift: The Eras Tour — as the organiser I ran the team and the community, planned the event flow, pushed execution and locked the details, delivering each event smoothly and to strong feedback.',
    details: [
      'Designed posters, long-form graphics and copy that pulled in a large community following, with 700+ people attending offline events.',
      'Partnered with cinemas and brands to plan the events; voice actors from the films and creators with 10k+ likes on Chinese platforms made exclusive easter eggs.',
      'Worked with 20+ artists on merchandise: more than 50 product types and more than 6,000 units.',
      'Built a 20+ person team covering promotion, community management, external partnerships, merchandise production and on-site order.',
    ],
  },
  {
    when: '2026.2 — 2026.4',
    role: 'AI product overseas marketing',
    org: 'Opencreator',
    details: [
      'Creator partnerships: built relationships with overseas KOL/KOC that matched the brand, ran collaborations, shot product videos, grew the creator database and set up an influencer SOP — supporting 50+ overseas creators and related anime communities.',
      'Community and user engagement: independently ran the Discord community — content and interaction — and planned and executed the “AI AMV” animation music-video challenge, using theme planning, competition design and community partnerships to lift activity and keep the space positive.',
      'Overseas social media: content planning for TikTok, Instagram and X, tracking overseas trends across anime culture and AI tools, and feeding creative topics and directions into campaign planning.',
      'Cross-cultural communication: worked with the US team as one of the main bridges to overseas creators and community members, handling requests in English and resolving issues.',
    ],
  },
  {
    when: '2025.9 — 2025.12',
    role: 'Overseas PR intern',
    org: 'Guilin Jimuqiu Cosmetics',
    details: [
      'Creative planning: joined overseas promotion and creative planning for the brand “Momo’s Workshop”, helping land campaigns and plan the DTC site, and providing creative support for brand content.',
      'Creator partnerships: built and managed KOL/KOC on Instagram, TikTok and YouTube; the database now holds 5,000+ creators with 500+ collaborations.',
      'Sampling: sent samples to overseas creators according to brand tone and product plan, wrote creative briefs, and followed content output and quality.',
      'Content management: tracked delivery data and collaboration progress, collected video links, gathered feedback through regular interaction, ran reviews and improvements, and proposed optimisations based on creator feedback.',
      'Cross-border operations: supported overseas business matters such as logistics and channel follow-up, building a full picture of cross-border workflows.',
    ],
  },
  {
    when: '2024.3 — 2024.6',
    role: 'Creative project management intern',
    org: 'Pop Mart',
    details: [
      'Product launches: worked on campaigns for 20+ launches including SKULLPANDA, Disney Donald Duck, Jackson Wang, LABUBU and MOLLY, building product positioning, campaign plans and social content strategy with the team.',
      'Project management: coordinated 25+ internal and external teams, optimising product, photography, design and KOL content distribution to protect delivery quality; cut the project cycle by 20% while delivering on time, with over 10 million social impressions within 48 hours of launch.',
      'Data optimisation: analysed social engagement data, ran regular reviews and turned them into improved campaign plans.',
    ],
  },
  {
    when: '2023.10 — 2024.10',
    role: 'Commercial design intern',
    org: 'Xiaohongshu (Xingyin Information Technology)',
    details: [
      'Campaign planning: cross-team visual marketing for the “REDesign” team, planning official campaigns and creative proposals against Xiaohongshu’s marketing goals; owned the 「我就要这样生活」 campaign, planning its communications and visual assets.',
      'Visual marketing: ran the “REDesign” account and created the 「字体月月报」 column, building a design community and lifting brand recognition; produced conference visuals and livestream assets for the 2024 WILL commercial partner conference.',
    ],
  },
]

export const education: TimelineItem[] = [
  {
    when: '2022 — 2027',
    role: 'Product design · BA',
    org: 'Jiangnan University (2nd in China for design)',
    desc: 'Final-year project, “Phygital smart product design in the data-sovereignty era”, was awarded a university-level outstanding thesis.',
  },
  {
    when: '2024 — 2025',
    role: 'Fashion marketing and branding · BA (one-year exchange)',
    org: 'Politecnico di Milano (7th in the world, QS art & design)',
    desc: 'Awarded the Jiangsu government scholarship for overseas study (top 5%), studying influential marketing by the world’s leading brands, brand communication, industry trends, fashion retail and exhibition design. Taught in English; also completed a US SWT placement and am about to live in 20 countries — fully accessible.',
  },
]

export const aboutNote = ''
