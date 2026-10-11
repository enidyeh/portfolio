// English copy. Mirrors `../ventures.ts` one-to-one.
// 英文文案，与 `../ventures.ts` 一一对应。

import type { Venture } from '../ventures'

export const ventureHead = {
  eyebrow: 'Venture',
  title: 'Ventures, investment and partnership.',
  lede: 'Every project answers the same six questions: problem, opportunity, solution, business model, validation, next milestone. Anything not yet validated is labelled as an assumption rather than dressed up as a track record.',
}

export const ventures: Venture[] = [
  {
    slug: 'reverie',
    name: 'REVERIE',
    en: 'REVERIE',
    oneLiner: 'To be filled: one-line positioning (the direction of the cultural theme / events brand).',
    status: 'In progress',
    tags: ['Events brand', 'Youth culture', 'Commercialisation'],
    role: 'To be filled: your specific role in the team.',
    problem: 'To be filled: which people hit which specific problem, and why existing options fall short.',
    opportunity: 'To be filled: what the market opportunity is, and why this need is worth solving.',
    solution:
      'To be filled: what it actually is (audience, cultural theme, event experience, content) and which single problem phase one solves.',
    businessModel: 'To be filled: who pays, why they pay, and how budget and revenue are generated (brand sponsorship and so on).',
    validation: 'To be filled: what interviews, payments, repeat purchases or partnerships show; what is still an assumption.',
    nextMilestone: 'To be filled: what the next phase needs to validate, and what resources or partners it needs.',
    collab: 'To be filled: open partnership directions (brand sponsorship / collaborations / venues / content).',
    pending: true,
  },
  {
    slug: 'unseen',
    name: 'UNSEEN',
    en: 'UNSEEN',
    oneLiner:
      'A monthly city-exploration publication for young people in Shanghai: discovery, then events, markets and spaces, and finally your own identity record.',
    status: 'Prototype / demo',
    tags: ['Product design', 'Youth culture', 'Mobile'],
    role: 'Product design and front-end build: information architecture, interaction design and a working prototype, all done myself.',
    problem:
      'Young people in Shanghai who want to genuinely experience the city still default to scrolling a feed. There is plenty of content, but few curated, editorially chosen ways in.',
    opportunity:
      'Feeds are saturated. Curation is scarcer than volume. A magazine-like structure with editorial choices turns out to be the rare thing right now.',
    solution:
      'A mobile exploration publication for young people in Shanghai: DISCOVER → HOME (EVENTS / MARKET / SPACE) → IDENTITY. Phase one tests whether a monthly theme can bring people back.',
    businessModel: 'To be filled: who pays, why they pay, and how revenue is generated (currently a demo prototype, no transactions at all).',
    validation:
      'This is currently a local demo prototype: no login, no backend, no real transactions and no real data. It has not been tested with users. All content is illustrative.',
    nextMilestone:
      'To be filled: decide where the monthly themes come from, then design a small-scale usability test.',
    collab: 'To be filled: co-curators / venue and market partners / editorial leads.',
    liveUrl: 'http://localhost:5173',
    liveNote: 'Currently a local demo prototype — no backend, no real transactions.',
    demo: true,
  },
  {
    slug: 'yixiang-shop',
    name: 'YIXIANG SHOP',
    en: 'YIXIANG SHOP',
    oneLiner: 'To be filled: one-line positioning (what it sells, to whom, and how it relates to REVERIE).',
    status: 'In preparation',
    tags: ['Commerce', 'Retail'],
    role: 'To be filled: your role.',
    problem: 'To be filled: the specific problem for the target users.',
    opportunity: 'To be filled: the market opportunity and the evidence behind it.',
    solution: 'To be filled: which single problem phase one solves, and how it relates to REVERIE.',
    businessModel: 'To be filled: who pays, and how margin and revenue are generated.',
    validation: 'To be filled: the evidence gathered so far, and what is still an assumption.',
    nextMilestone: 'To be filled: what to validate next, and what resources it needs.',
    collab: 'To be filled: open partnership directions.',
    pending: true,
  },
]

export const dataRoom = {
  eyebrow: 'Investor',
  title: 'Fundraising material on request.',
  body: 'Public pages show only project logic and validation progress. Financials, models and fundraising terms are shared separately once we have talked. Get in touch and I will send them over.',
}

export const ventureNote =
  'Anything unvalidated is labelled “assumption / to be confirmed” inside each project rather than dressed up as results. Commercially sensitive information is not disclosed on public pages.'
