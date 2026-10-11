// English copy. Mirrors `../works.ts` one-to-one.
// 英文文案，与 `../works.ts` 一一对应。

import type { WorkCase, WorkTrackId } from '../works'
import { asset } from '../../lib/base'

export const worksHead = {
  eyebrow: 'Selected Work',
  title: 'Different cases that form one complete loop.',
  lede: 'Commercial projects prove I can ship an idea; AI products prove I can design a solution; global growth proves I understand markets and commercialisation. Every case follows the same structure: problem, my role, key decisions and process, outcome, reflection.',
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
    items: ['User problems and needs', 'Product solutions and prototypes', 'AI workflows', 'Validation and iteration'],
  },
  {
    id: 'commercial',
    no: '02',
    en: 'Commercial Growth',
    zh: 'Commercial Growth',
    items: ['Brand growth', 'Cross-border commercialisation', 'Content and creator ecosystems', 'Commercial post-mortems'],
  },
]

export const works: WorkCase[] = [
  {
    slug: 'phygital-base',
    title: 'Digital Asset Management in the Data-Sovereignty Era',
    featured: true,
    track: 'product',
    year: 'To be filled',
    role: 'To be filled: your role',
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
    tags: ['Cross-context culture', 'Commercial growth', 'Brand partner', 'Event planning'],
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
    tags: ['Global brand growth', 'Market entry strategy', 'Brand marketing', 'Content creation'],
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
    title: 'A beauty e-commerce brand expanding into overseas markets',
    image: asset('work-momos-workshop.webp'),
    track: 'commercial',
    tags: ['Cross-border e-commerce', 'Europe & US markets', 'Content marketing', 'KOL/KOC'],
    year: 'To be filled',
    role: 'To be filled: your role',
    type: 'To be filled: project type',
    summary: 'To be filled: one sentence on the target market, the brand and the growth goal.',
    problem: 'To be filled: target market, platform rules and user needs, and why existing options fall short.',
    contribution: ['To be filled: brand positioning, content or creator strategy, channel choices, conversion path.'],
    decisions: ['To be filled: one key trade-off, and which metric you used to judge it.'],
    outcome: ['To be filled: verifiable results; if they cannot be published, label it clearly as an independent research project.'],
    reflection: 'To be filled: what you would change if you started again.',
    pending: true,
  },
]

export const worksNote =
  'The case names come from the site owner. The mapping between cases and tracks (commercial / product & AI) is provisional; anything not supplied yet is left blank rather than invented. If there is no publishable cross-border client case, present it clearly as an independent research project — do not dress a simulation up as client results.'
