// English copy. Mirrors `../works.ts` one-to-one.
// 英文文案，与 `../works.ts` 一一对应。

import type { WorkCase, WorkTrackId } from '../works'
import { asset } from '../../lib/base'

export const worksHead = {
  // 2026-10-12 at the owner’s request: the eyebrow stays off, the lede is back (new copy).
  title: 'Different cases that form one complete loop.',
  lede: 'A selection of cases focused on product design, commercial creativity, and how I think about global growth and commercialisation.',
}

export const workTracks: {
  id: WorkTrackId
  no: string
  en: string
  zh: string
  items: string[]
}[] = [
  {
    id: 'product',
    no: '01',
    en: 'Product & AI',
    zh: 'Product & AI',
    items: ['Deep research into user problems and needs, then product solutions and prototypes'],
  },
  {
    id: 'commercial',
    no: '02',
    en: 'Global growth',
    zh: 'Global growth',
    items: ['Exploring growth through work with real commercial brands, and exploring cross-border commercial culture'],
  },
]

export const works: WorkCase[] = [
  {
    slug: 'phygital-base',
    title: 'Digital Asset Management in the Data-Sovereignty Era',
    featured: true,
    track: 'product',
    // Full project document: 33 pages, supplied by the owner
    docPages: { dir: 'phygital-base', count: 32 },
    // Award badges shown under the case title
    awards: ['Outstanding graduation project (university level)', 'Top 3 in major'],
    // Thesis download, placed under the project-type line in the left column (button only)
    attachment: { label: 'Download thesis', url: asset('thesis.pdf') },
    tags: ['Product design', 'Project management', 'UI design', 'Product strategy'],
    year: 'To be filled',
    role: '',
    type: 'Product design and project management',
    summary:
      'PHYGITAL BASE is a phygital intelligent-product design proposal that works across digital hardware, software design, contextual social features and digital identity — exploring a new approach to digital asset management in the era of data sovereignty.',
    video: { src: asset('work-phygital.mp4'), poster: asset('work-phygital-poster.jpg') },
    problem: 'To be filled: who the users are, what the market problem is, and why existing options fall short.',
    // 2026-10-12 case copy supplied by the owner
    facts: [
      { label: 'Project type', value: 'Smart hardware and software system design' },
      { label: 'Project topic', value: 'Phygital intelligent product design in the era of data sovereignty' },
      {
        label: 'Core strategy',
        value:
          'Turn abstract data sovereignty into something you can feel and touch every day — building a complete interaction loop: physical action ➔ software processing ➔ on-chain proof of ownership ➔ hardware feedback.',
      },
      {
        label: 'Deliverables',
        value:
          'A complete phygital product system — modular hardware, a mobile app and an on-chain record system — plus a commercial outlook.',
      },
    ],
    contribution: ['To be filled: what you personally owned in the team.'],
    decisions: ['To be filled: one key trade-off — what you chose, what you gave up, and why.'],
    outcome: ['To be filled: verifiable results (budget, revenue, scale, conversion).'],
    reflection: 'To be filled: what you would change if you started again.',
  },
  {
    slug: 'common-ground',
    title: 'A US street exhibition enters Italy: a “cultural translation”',
    image: asset('work-common-ground.webp'),
    track: 'commercial',
    // Full project document: 51 pages, supplied by the owner
    docPages: { dir: 'common-ground', count: 51 },
    tags: ['Cross-context culture', 'Global growth', 'Brand partner', 'Event planning'],
    year: 'To be filled',
    role: 'To be filled: your role',
    type: 'Cross-cultural exhibition design and localised brand experience',
    summary:
      'Taking Beyond the Streets, a leading US street-culture brand, global — turning strongly regional American street culture into a “cultural translation” at the Milan Triennale.',
    // 2026-10-12 case copy supplied by the owner
    problem:
      'Beyond the Streets, a leading US street-culture brand, was seeking global expansion and wanted to land at the Milan Triennale. The core challenge: how could a strongly regional American street culture get past cultural barriers, attract a diverse Italian audience and break out in brand awareness?',
    facts: [
      { label: 'Project', value: 'A “cultural translation” of US street art in Milan' },
      { label: 'Project type', value: 'Cross-cultural exhibition design and localised brand experience' },
    ],
    sections: [
      {
        title: 'Core strategy',
        body: [
          'A “viral migration and cultural translation” approach. Rather than simply moving artworks, the exhibition is rebuilt as a community check-in and sharing event that fits the Milanese context — a localised offline experience people want to visit and spread.',
        ],
      },
      {
        title: 'Design focus and delivery',
        items: [
          '**Spatial narrative through contrast**: raw metal textures and urban street grain set against the refined architecture of the Milan Triennale — strong visual tension and a highly recognisable photo spot.',
          '**Modular and highly interactive**: a modular open structure gives a smoother route and better sightlines, greatly encouraging visitors to interact.',
          '**Sustainable and cost-efficient**: modular re-assembly reduces bespoke structures, keeping the show “underground” and variable while cutting touring costs sharply.',
        ],
      },
      {
        title: 'Deliverables',
        body: [
          'End-to-end exhibition experience planning, site plan and 3D renders, interactive installation design, brand visual system, community sharing marketing plan and brand strategy plan.',
        ],
      },
    ],
    contribution: ['To be filled: research, prioritisation, user flows, prototypes, the role of AI and its limits.'],
    decisions: ['To be filled: how you cut a big platform idea down to one testable feature, and why.'],
    outcome: ['To be filled: how it was tested, what the results were, and where it goes next.'],
    reflection: 'To be filled: what you would change if you started again.',
    pending: true,
  },
  {
    slug: 'soho-t',
    title: 'Building a lifestyle in China with a European womenswear brand',
    image: asset('work-soho-t.webp'),
    track: 'commercial',
    // Full project document: 33 pages, supplied by the owner
    docPages: { dir: 'soho-t', count: 33 },
    tags: ['Market entry strategy', 'Brand marketing', 'Content creation'],
    year: 'To be filled',
    role: 'To be filled: your role',
    type: 'Cross-border brand strategy × localisation for a brand entering China × community marketing',
    summary:
      'The Italian womenswear brand SOHO-T entering China: an “Italian quality × Eastern soul” fusion strategy for localisation and Xiaohongshu community marketing.',
    // 2026-10-12 case copy supplied by the owner
    problem:
      'The Italian womenswear brand SOHO-T has excellent Italian design DNA, but faced cultural barriers and a recognition gap when entering the Chinese market. It needed to keep its international tone while speaking precisely to Chinese consumers’ emotional needs and dressing habits.',
    facts: [
      { label: 'Project', value: 'Brand localisation and community marketing across cultures — SOHO-T’s China entry strategy' },
      { label: 'Project type', value: 'Cross-border brand strategy × localisation for a brand entering China × community marketing' },
    ],
    sections: [
      {
        title: 'Core strategy (localisation and breaking out)',
        body: [
          'A fusion strategy of “Italian quality × Eastern soul — No choice: your Italian qualities, your Eastern soul”. Rather than simply selling product, it distils Italian feminine thinking into an international lifestyle, rebuilding the brand’s competitiveness in China.',
        ],
      },
      {
        title: 'Core execution and platform operations (deep integration with Xiaohongshu)',
        items: [
          '**Rebuilding the brand narrative**: fusing Eastern lifestyle with Italian minimalism to rebuild the brand story, then working back from it to optimise the product line.',
          '**Xiaohongshu community sharing**: making Xiaohongshu the core platform for seeding and conversion — planning a “Xiaohongshu everyday-people styling challenge” and co-creating UGC so real users share their outfits and build a high-loyalty brand community.',
        ],
      },
      {
        title: 'Deliverables',
        body: [
          'China entry positioning and story system, lifestyle concept (online and offline space), community activity plan, and a tailored advertising and KOL marketing strategy for Xiaohongshu and other platforms.',
        ],
      },
    ],
    contribution: ['To be filled: brand positioning, content or creator strategy, channel choices, conversion path.'],
    decisions: ['To be filled: one key trade-off, and which metric you used to judge it.'],
    outcome: ['To be filled: publishable growth results; if they cannot be published, label it clearly as an independent research project.'],
    reflection: 'To be filled: what you would change if you started again.',
    pending: true,
  },
  {
    slug: 'annakiki',
    title: 'A heritage brand rebuilding its image through cross-border pop-ups',
    image: asset('work-annakiki.webp'),
    track: 'commercial',
    // Full project document: 17 pages, supplied by the owner
    docPages: { dir: 'annakiki', count: 17 },
    tags: ['Brand repositioning', 'Brand collaborations', 'Pop-up events'],
    year: 'To be filled',
    role: 'To be filled: your role',
    type: 'Brand strategy design × retail experience and route planning × cross-brand collaboration (pop-up)',
    summary:
      'Laorentou, founded in 1899, teaming up with ANNAKIKI for a pop-up: using a high-contrast collaboration and social-media sharing to refresh a century-old brand for a younger female market.',
    // 2026-10-12 case copy supplied by the owner
    problem:
      'Laorentou, a national footwear brand founded in 1899, faced an ageing brand, a gap in its user base and little international presence. It urgently needed to move past the traditional craftsman story and speak to a young female consumer market.',
    facts: [
      { label: 'Project', value: 'Rejuvenating a century-old brand and reshaping retail — Laorentou × ANNAKIKI pop-up store' },
      { label: 'Project type', value: 'Brand strategy design × retail experience and route planning × cross-brand collaboration (pop-up)' },
    ],
    sections: [
      {
        title: 'Core strategy (breaking out and localising)',
        body: ['Combining a high-contrast collaboration with social-media sharing into one coordinated move.'],
        items: [
          '**Cross-brand collaboration**: partnering with ANNAKIKI, an avant-garde Chinese independent designer brand, to borrow its strong visual language and break the old stereotype.',
          '**Scene reshaping**: using the location advantage of Milan’s Brera fashion district and a high-contrast, visually strong physical space to reset the brand tone.',
        ],
      },
      {
        title: 'Design focus and delivery (operations and routes)',
        items: [
          'Planning an entirely new visitor route, using spatial design to encourage people to share it themselves.',
          'Planning the opening event, on-site KOL livestream check-ins and interactive experiences, turning offline traffic into social-media reach.',
        ],
      },
      {
        title: 'Deliverables',
        body: [
          'Brand collaboration marketing strategy, full pop-up store design, opening event planning, and a KOL livestream and community communication plan.',
        ],
      },
    ],
    contribution: ['To be filled: what you personally owned in the team.'],
    decisions: ['To be filled: one key trade-off — what you chose, what you gave up, and why.'],
    outcome: ['To be filled: verifiable results; if they cannot be published, label it clearly as an independent research project.'],
    reflection: 'To be filled: what you would change if you started again.',
    pending: true,
  },
  {
    slug: 'momos-workshop',
    // 2026-10-12: content taken from the portfolio page the owner supplied
    title: 'Cross-border brand planning · Momo’s Workshop',
    image: asset('work-momos-workshop.webp'),
    track: 'commercial',
    docPages: { dir: 'momos-workshop', count: 1 },
    tags: ['Cross-border e-commerce', 'Europe & US markets', 'Content marketing', 'Creator marketing'],
    year: '2025',
    role: 'Overseas PR intern (brand “Momo’s Workshop”)',
    type: 'A Chinese e-commerce brand going global',
    summary:
      'Working with the brand’s categories and market goals, joining the cold start of the beauty brand “Momo’s Workshop” in European, American and Asian markets, and providing creative support for its content promotion.',
    problem:
      'Momo’s Workshop is a Chinese beauty-tool brand that built strong word of mouth and sales at home on the back of its hero products. With domestic competition intensifying and brand momentum rising, it wanted to open up global markets systematically while keeping its “professional, precise, delightful” DNA — targeting the US, South-East Asia and Europe, and using localisation plus digital marketing to build professional recognition and brand influence among international beauty fans from zero.',
    // 2026-10-12 case copy supplied by the owner
    facts: [
      { label: 'Project', value: 'A Chinese beauty-tool brand’s 0–1 cold start overseas' },
      { label: 'Project type', value: 'Cross-border e-commerce × global brand localisation marketing × creator ecosystem operations' },
    ],
    sections: [
      {
        title: 'Core strategy',
        body: [
          'A go-global strategy of “brand tone first + creator content virality”, building a precise localised marketing system from 0 to 1.',
        ],
      },
      {
        title: 'Core execution and operations',
        items: [
          '**Social media cold start**: ran the cold start of the official TikTok, Instagram and YouTube accounts, leading visual content planning and publishing and quickly building an initial following (13k+ on a single platform).',
          '**KOL/KOC ecosystem**: built and maintained an overseas creator database (5,000+), working successfully with 500+ creators — sending samples, writing briefs and following up on content to drive UGC virality.',
          '**DTC site and e-commerce loop**: took part in designing, planning and running the overseas DTC site, closing the full commercial loop from social seeding ➔ creator discount codes ➔ DTC / e-commerce conversion.',
        ],
      },
      {
        title: 'Deliverables',
        body: [
          'Overseas brand DTC site operations plan, international social media content strategy, an SOP for working with 500+ creators, and full-funnel cross-border e-commerce data analysis and optimisation recommendations.',
        ],
      },
    ],
    contribution: ['Social media presence', 'DTC store', 'Creator partnerships', 'E-commerce pages'],
    decisions: [
      'Approach: start from the brand’s tone and build a brand-led marketing strategy, find strong content creators to work with, build the DTC site and e-commerce platform, and complete the full cross-border chain.',
    ],
    outcome: [''],
    reflection: '',
  },
]
