// 「精选项目」= 代表性作品案例（与「正在创造」区分：后者是进行中的项目）。
// 两个分类对应两条职业路径：商业化与全球增长 / 产品策略与 AI 应用。
// 名称由本人提供；名称与分类的对应关系、以及案例内容，均为待确认 / 待填。

import { asset } from '../lib/base'

export type WorkTrackId = 'commercial' | 'product'

export type WorkCase = {
  slug: string
  title: string
  /** 归类：商业化与全球增长 / 产品策略与 AI 应用 */
  track: WorkTrackId
  year: string
  role: string
  /** 案例角度，如「商业化与项目管理」「AI 产品」「全球品牌增长」 */
  type: string
  summary: string
  problem: string
  contribution: string[]
  decisions: string[]
  outcome: string[]
  reflection: string
  /** 案例配图（`public/` 下的路径） */
  image?: string
  /** 案例视频；首页大展示位遇到它会换成播放器，而不是可点的链接卡片 */
  video?: { src: string; poster: string }
  /** true 表示内容尚未提供，界面会显示待填提示 */
  pending?: boolean
  /** true 表示占据首页「大展示」位，不再出现在下方三列卡片里 */
  featured?: boolean
}

export const worksHead = {
  eyebrow: '精选项目',
  title: '五个不同的案例，形成一条完整的能力闭环。',
  lede: '商业项目证明能把创意落地，AI 产品证明能设计解决方案，全球增长证明能理解市场与商业化。每个案例都按同一套结构写：问题、我的职责、关键决策与过程、结果、复盘。',
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
    zh: '产品策略与 AI 应用',
    items: ['用户问题与需求', '产品方案与原型', 'AI 工作流', '产品验证与迭代'],
  },
  {
    id: 'commercial',
    no: '02',
    en: 'Commercial Growth',
    zh: '商业化与全球增长',
    items: ['品牌增长', '跨境商业化', '内容与创作者生态', '商业项目复盘'],
  },
]

export const works: WorkCase[] = [
  {
    slug: 'phygital-base',
    title: '数据主权时代的数字资产管理',
    /** 首页「精选项目」的大展示位 */
    featured: true,
    track: 'product',
    year: '待填',
    role: '待填：你的角色',
    type: '产品设计与项目管理',
    summary:
      'PHYGITAL BASE 是一个虚实融合智能产品设计方案，通过数字硬件、软件设计、场景社交和数字身份，尝试为数据主权时代下的数字资产管理提出新可能。',
    video: { src: asset('work-phygital.mp4'), poster: asset('work-phygital-poster.jpg') },
    problem: '待填：用户定位与所处市场的问题是什么，现有方案为什么不够好。',
    contribution: ['待填：你在团队中的具体职责（尽量写你亲手做的部分）。'],
    decisions: ['待填：一个关键取舍——你选了什么、放弃了什么、为什么。'],
    outcome: ['待填：可核实的成果（预算、收入、规模、转化等）。'],
    reflection: '待填：如果重来一次，你会改什么。',
  },
  {
    slug: 'common-ground',
    title: '美国街头展览进入意大利的「文化翻译」',
    image: asset('work-common-ground.webp'),
    track: 'commercial',
    year: '待填',
    role: '待填：你的角色',
    type: 'AI 产品',
    summary: '待填：从一个具体的用户痛点开始，说明这个 AI 产品解决什么问题。',
    problem: '待填：哪类用户遇到什么具体问题，现有方案为什么不够好。',
    contribution: ['待填：调研、需求优先级、用户流程、原型、AI 的作用与技术边界。'],
    decisions: ['待填：如何把大平台构想缩小到一个可验证的功能，以及为什么这样切。'],
    outcome: ['待填：测试方式、验证结果，以及下一步迭代方向。'],
    reflection: '待填：如果重来一次，你会改什么。',
    pending: true,
  },
  {
    slug: 'soho-t',
    title: '与欧洲女装品牌一起入华创造生活方式',
    image: asset('work-soho-t.webp'),
    track: 'commercial',
    year: '待填',
    role: '待填：你的角色',
    type: '全球品牌增长',
    summary: '待填：一句话说明目标市场、品牌与增长目标。',
    problem: '待填：目标市场研究、文化差异与用户需求。',
    contribution: ['待填：品牌定位、内容或创作者策略、渠道选择、转化路径。'],
    decisions: ['待填：一个关键取舍，以及你用什么指标衡量。'],
    outcome: ['待填：可公开的增长结果；若无法公开，明确标注为「独立研究项目」。'],
    reflection: '待填：如果重来一次，你会改什么。',
    pending: true,
  },
  {
    slug: 'annakiki',
    title: '传统品牌通过跨境快闪进行形象重塑',
    track: 'commercial',
    year: '待填',
    role: '待填：你的角色',
    type: '待填：项目类型',
    summary: '待填：一句话说明这是什么项目、你解决了谁的什么问题。',
    problem: '待填：目标市场与用户的问题是什么，现有方案为什么不够好。',
    contribution: ['待填：你在团队中的具体职责（尽量写你亲手做的部分）。'],
    decisions: ['待填：一个关键取舍——你选了什么、放弃了什么、为什么。'],
    outcome: ['待填：可核实的成果；若无法公开，明确标注为「独立研究项目」。'],
    reflection: '待填：如果重来一次，你会改什么。',
    pending: true,
  },
  {
    slug: 'momos-workshop',
    title: '美妆电商品牌拓展海外市场',
    image: asset('work-momos-workshop.webp'),
    track: 'commercial',
    year: '待填',
    role: '待填：你的角色',
    type: '待填：项目类型',
    summary: '待填：一句话说明目标市场、品牌与增长目标。',
    problem: '待填：目标市场、平台规则与用户需求，现有方案为什么不够好。',
    contribution: ['待填：品牌定位、内容或创作者策略、渠道选择、转化路径。'],
    decisions: ['待填：一个关键取舍，以及你用什么指标衡量。'],
    outcome: ['待填：可核实的结果；若无法公开，明确标注为「独立研究项目」。'],
    reflection: '待填：如果重来一次，你会改什么。',
    pending: true,
  },
]

export const worksNote =
  '案例名称由本人提供；案例与分类（商业化 / 产品与 AI）的对应关系为初步判断。暂未提供的部分留空，不编造。若暂无可公开的跨境客户案例，应做成明确标注的「独立研究项目」，不要把模拟方案写成客户业绩。'
