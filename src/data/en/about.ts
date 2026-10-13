// English copy. Mirrors `../about.ts` one-to-one.
// 英文文案，与 `../about.ts` 一一对应。

import type { TimelineItem } from '../about'

export const aboutHead = {
  // 2026-10-12 at the owner’s request: eyebrow removed, self-description replaced.
  // 2026-10-13: replaced again at the owner’s request.
  title: 'About me.',
  lede: 'A restless maker! With a global outlook and commercial thinking, I want to use AI tools and product thinking to set curiosity free.',
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
    // Added 2026-10-13 at the owner's request. No dates provided yet (the case
    // page's `year` is still a placeholder too), so `when` stays empty.
    when: '',
    role: 'Graduation project · product design and project management',
    org: 'PHYGITAL BASE',
    desc: 'A phygital product design proposal that uses digital hardware, software design, scene-based social interaction and digital identity to propose new possibilities for digital asset management in the era of data sovereignty. Awarded Outstanding Graduation Project (university level) and Top 3 in the major.',
  },
  {
    when: '2026.6 — Present',
    role: 'Venture · independent planning and operations',
    org: 'REVERIE 异想集',
    tags: ['Market & user insight', 'Opportunity sizing', 'Business positioning'],
    desc: 'Led the planning and delivery of the youth activity community “REVERIE 异想集” from 0 to 1. Based on observation of Gen-Z youth-culture consumption and offline socialising, built around “themed markets + art exhibitions + community events”, used AI tools to explore, and planned and delivered multiple events: 20,000+ in-person attendances and over 500k impressions from a Xiaohongshu topic.',
    details: [
      'Designed posters, long-form graphics and copy that pulled in a large community following, with 700+ people attending offline events.',
      'Partnered with cinemas and brands to plan the events; voice actors from the films and creators with 10k+ likes on Chinese platforms made exclusive easter eggs.',
      'Worked with 20+ artists on merchandise: more than 50 product types and more than 6,000 units.',
      'Built a 20+ person team covering promotion, community management, external partnerships, merchandise production and on-site order.',
    ],
  },
  {
    when: '2026.02 — 2026.04',
    role: 'Overseas creator operations · Intern',
    org: 'OpenCreator',
    tags: ['Prototyping & AI workflow', 'Content & creator ecosystem', 'Channel & conversion'],
    details: [
      'AI / large-model applications',
      'Ran overseas creator-ecosystem operations for the “AI commercial creative visual agent”. Reading the product’s “content creation as Lego” positioning precisely, established an “AI + vertical” (e.g. e-commerce) creator strategy. Built the overseas creator collaboration SOP and resource library from 0 to 1, using careful distribution to build high-stickiness core users and running the full conversion loop from acquisition to long-term subscription. Also tracked overseas social trends and comparable AI tools, using AI workflows to power ad creative production and multi-platform distribution. Landed partnerships with several commercial studios, growing performance 10× within three months of launch, and drove content co-creation and cross-cultural connection in the AI-native community.',
    ],
  },
  {
    when: '2025.09 — 2025.12',
    role: 'Overseas marketing · Intern',
    org: 'Guilin Jimuqiu Cosmetics · Momos Workshop',
    tags: ['Cross-border commercialisation', 'Channel & conversion', 'Data review'],
    details: [
      'Cross-border e-commerce / beauty FMCG',
      'Worked on overseas community content marketing for a “new Chinese beauty brand”. Understanding the needs of 18–30 year-old women overseas, setting a “healthy and diverse” content strategy, and planning core campaigns including the “Gold series” launch and Halloween. Through brand seeding and real makeup-look sharing, shaped the product mind for the “air cotton-candy puff” precisely, in a market where overseas users barely knew the category. Built a vertical KOL matrix, growing the beauty and lifestyle creator base to 5,000+, with 300+ deep collaborations. Co-created quality content with creators and fed data reviews back into the community content ecosystem, closing the loop from “reaching creators” to “building word of mouth”.',
    ],
  },
  {
    when: '2024.03 — 2024.06',
    role: 'Creative project management · Intern',
    org: 'Pop Mart',
    tags: ['Requirement prioritisation', 'Validation & iteration', 'Data review'],
    details: [
      'Designer-toy culture / IP entertainment',
      'Managed community-marketing projects for 20+ leading IPs (SKULLPANDA, MOLLY, LABUBU and others) at the world’s leading designer-toy brand. Based on insight into fan circles (life interests and emotional needs), worked with 25+ cross-functional teams (product design, content) to plan and drive each IP’s new series from product direction through advertising, seeding content and offline activation, cutting the project cycle by 20%. Tracked social engagement data for SKULLPANDA’s “Time” series and fed it back into content optimisation, reaching over 10 million social impressions within 48 hours of launch and deepening the emotional connection and content co-creation between IPs and fan communities.',
    ],
  },
  {
    when: '2023.10 — 2024.02',
    role: 'Commercial design · Intern',
    org: 'Xiaohongshu (Xingyin Information Technology)',
    tags: ['User flows', 'Content & creator ecosystem'],
    details: [
      'Content community / lifestyle platform',
      'Worked on commercial design and official campaign planning for a “lifestyle interest community”. Based on insight into how community users live, planned the 「我就要这样生活」 visual campaign assets, sparking the urge to share and community interaction. Ran the 「字体月月报」 column, designing systematic professional content and building a design community, lifting stickiness and aesthetic awareness through co-creation. Delivered the visual presentation for the 2024 WILL Commercial Partner Conference, bridging brands and creators, and putting content ecosystem and community connection into practice.',
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
