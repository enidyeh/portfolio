// English copy. Mirrors `../ventures.ts` one-to-one.
// 英文文案，与 `../ventures.ts` 一一对应。

import type { Venture } from '../ventures'
import { asset } from '../../lib/base'

export const ventureHead = {
  // 2026-10-12 at the owner’s request: eyebrow removed, title reworded.
  title: 'I’m building things from 0 to 1.',
  lede: 'A slice of what I’m thinking about right now — youth culture and the new consumer context, explored through content and community.',
}

export const ventures: Venture[] = [
  {
    slug: 'reverie',
    name: 'REVERIE',
    en: 'REVERIE',
    image: asset('venture-reverie.webp'),
    oneLiner: 'Turning youth culture into a place you can walk into.',
    status: 'Creative markets · Themed exhibitions · Cultural exchange',
    xhs: 'https://www.xiaohongshu.com/user/profile/649917aa000000002b008d69?xsec_token=ABfzm1XTVu1UBRen42srLiMcZX1ASBdXjYvvr-wEVlXKg=&xsec_source=pc_search',
    // 2026-10-12: the status chip is replaced by these small tags
    tags: ['Creative markets', 'Themed exhibitions', 'Cultural exchange'],
    role: 'To be filled: your specific role in the team.',
    problem: 'To be filled: which people hit which specific problem, and why existing options fall short.',
    opportunity: 'To be filled: what the market opportunity is, and why this need is worth solving.',
    solution:
      'To be filled: what it actually is (audience, cultural theme, event experience, content) and which single problem phase one solves.',
    businessModel: 'To be filled: who pays, why they pay, and how budget and revenue are generated (brand sponsorship and so on).',
    validation: 'To be filled: what interviews, payments, repeat purchases or partnerships show; what is still an assumption.',
    nextMilestone: 'To be filled: what the next phase needs to validate, and what resources or partners it needs.',
    collab: 'To be filled: open partnership directions (brand sponsorship / collaborations / venues / content).',
    // Partnership handbook (28 pages), same source as the Chinese page
    docPages: { dir: 'reverie', count: 28 },
    pending: true,
  },
  {
    slug: 'yixiang-shop',
    name: 'REVERIE SHOP',
    en: 'REVERIE SHOP',
    image: asset('venture-yixiang-shop.webp'),
    // Same crop as the Chinese page: show the REVERIE signage in full.
    imagePos: '50% 0%',
    oneLiner: 'A cultural-creative online market.',
    status: 'In preparation',
    badge: 'In preparation',
    xhs: 'https://www.xiaohongshu.com/user/profile/5ee3a7b0000000000101fb9d?xsec_token=ABzYFn55WHC8Qc6kKy2M4nKtvEENs24S9d27ta75NBNsE%3D&xsec_source=pc_search',
    tags: ['Original products', 'Online market', 'Everyday goods'],
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
  {
    slug: 'unseen',
    name: 'UNSEEN',
    en: 'UNSEEN',
    image: asset('venture-unseen.webp'),
    oneLiner: 'A culture platform where “young voices speak”.',
    status: 'In preparation',
    badge: 'In preparation',
    xhs: 'https://www.xiaohongshu.com/user/profile/614dd5e400000000020249dd?xsec_token=AB_Vx9ak1d5jq8Hh5539hbBDYPIReL40PjeHF0THv5KVk%3D&xsec_source=pc_search',
    tags: ['Cultural research', 'Interviews', 'Co-creation'],
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
    // Added 2026-10-11 at the site owner's request: the fourth brand.
    // The one-liner comes from REALMVIEW's own README (an outbound service site
    // for 0→1 brands); everything else is left for the owner to confirm.
    slug: 'realmview',
    name: 'REALMVIEW',
    en: 'REALMVIEW',
    image: asset('venture-realmview.webp'),
    oneLiner: 'Let brands grow across borders, and let culture flow both ways.',
    status: 'In preparation',
    badge: 'In preparation',
    xhs: 'https://www.xiaohongshu.com/user/profile/5e3665730000000001000223?xsec_token=ABTbpa8xFFnHQaGi9EOH1bJnblHwxKKHxMtr_pojBPwpU%3D&xsec_source=pc_search',
    tags: ['Brand expansion in and out of China', 'Cultural curation', 'Global marketing resources'],
    role: 'To be filled: your role in it.',
    problem: 'To be filled: which brands hit which specific problem.',
    opportunity: 'To be filled: the market opportunity and the evidence behind it.',
    solution: 'To be filled: which single problem phase one solves.',
    businessModel: 'To be filled: who pays, and how pricing and revenue are generated.',
    validation: 'To be filled: the evidence gathered so far, and what is still an assumption.',
    nextMilestone: 'To be filled: what to validate next, and what resources it needs.',
    collab: 'To be filled: open partnership directions.',
    pending: true,
  },
]

export const dataRoom = {
  text: 'Let’s explore and create together.',
}

export const ventureNote =
  'Anything unvalidated is labelled “assumption / to be confirmed” inside each project rather than dressed up as results. Commercially sensitive information is not disclosed on public pages.'
