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
    // Thesis download, placed under the video on this page (button only)
    attachment: { label: 'Download thesis', url: asset('thesis.pdf') },
    tags: ['Product design', 'Project management', 'UI design', 'Product strategy'],
    year: 'To be filled',
    role: '',
    type: 'Product design and project management',
    summary:
      'PHYGITAL BASE is a phygital intelligent-product design proposal that works across digital hardware, software design, contextual social features and digital identity — exploring a new approach to digital asset management in the era of data sovereignty.',
    video: { src: asset('work-phygital.mp4'), poster: asset('work-phygital-poster.jpg') },
    problem: 'To be filled: who the users are, what the market problem is, and why existing options fall short.',
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
    type: 'AI product',
    summary: 'To be filled: start from one concrete user pain point and explain what this AI product solves.',
    problem: 'To be filled: which users hit which specific problem, and why existing options fall short.',
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
    type: 'Global brand growth',
    summary: 'To be filled: one sentence on the target market, the brand and the growth goal.',
    problem: 'To be filled: target market research, cultural differences and user needs.',
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
    type: 'To be filled: project type',
    summary: 'To be filled: one sentence on what this project is and whose problem you solved.',
    problem: 'To be filled: target market and user problem, and why existing options fall short.',
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
    contribution: ['Social media presence', 'DTC store', 'Creator partnerships', 'E-commerce pages'],
    decisions: [
      'Approach: start from the brand’s tone and build a brand-led marketing strategy, find strong content creators to work with, build the DTC site and e-commerce platform, and complete the full cross-border chain.',
    ],
    outcome: [''],
    reflection: '',
  },
]
