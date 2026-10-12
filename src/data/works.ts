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
  /** 卡片上的小标题（标签）。填了就按这份显示，不再自动拼类型 / 分类 / 角色 */
  tags?: string[]
  /** 荣誉 / 奖项标签：显示在详情页标题下面（如「校级优秀毕设」「专业Top3」） */
  awards?: string[]
  /** 案例视频；首页大展示位遇到它会换成播放器，而不是可点的链接卡片 */
  video?: { src: string; poster: string }
  /**
   * 媒体（视频 / 配图）下方的一份附件下载入口。
   * 2026-10-12 按本人要求：毕业论文从「获取简历」浮窗移到案例详情页，放在视频下面；
   * 2026-10-12 第二轮：不要「标题 + 说明 + 按钮」三行，只留一颗按钮（label 即按钮文字）。
   */
  attachment?: { label: string; url: string }
  /** true 表示内容尚未提供，界面会显示待填提示 */
  pending?: boolean
  /** true 表示占据首页「大展示」位，不再出现在下方三列卡片里 */
  featured?: boolean
  /**
   * 完整项目文件：把本人给的 PDF 逐页转成图片（`public/case-pages/<dir>/NN.webp`），
   * 附在案例正文后面。`count` 是页数。
   */
  docPages?: { dir: string; count: number }
}

export const worksHead = {
  // 2026-10-12 按本人要求：先删掉「精选项目」小标题，随后又把小标题补了回来（新文案）
  title: '不同的案例，形成完整的能力闭环。',
  lede: '为您展示精选案例！着重展示产品设计能力，商业创意能力，与我对于全球增长与商业化的理解。',
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
    // 2026-10-12 按本人要求：四个圆角标签并成一句话
    items: ['深度研究用户问题与需求，进而提出产品方案与原型'],
  },
  {
    id: 'commercial',
    no: '02',
    en: 'Global growth',
    zh: '全球增长',
    items: ['通过与现实商业世界品牌合作探索增长，对跨境商业文化进行探索'],
  },
]

export const works: WorkCase[] = [
  {
    slug: 'phygital-base',
    title: '数据主权时代的数字资产管理',
    /** 首页「精选项目」的大展示位 */
    featured: true,
    track: 'product',
    // 完整项目文件：本人提供的「（进行中）phygital base.pdf」，33 页
    docPages: { dir: 'phygital-base', count: 32 },
    // 2026-10-12 按本人要求：详情页标题下加这两个荣誉标签
    awards: ['校级优秀毕设', '专业Top3'],
    // 2026-10-12 按本人要求：毕业论文的下载入口放在左栏「产品设计与项目管理」下面
    attachment: { label: '下载研究论文', url: asset('thesis.pdf') },
    tags: ['产品设计', '项目管理', 'ui设计', '产品策略'],
    year: '待填',
    // 2026-10-12 按本人要求：aside 里的「你的角色」删掉
    role: '',
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
    // 完整项目文件：本人提供的「临时展览设计.pdf」，51 页
    docPages: { dir: 'common-ground', count: 51 },
    tags: ['文化跨语境', '全球增长', '品牌单位', '活动策划'],
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
    // 完整项目文件：本人提供的「SOHO-T.pdf」，33 页
    docPages: { dir: 'soho-t', count: 33 },
    tags: ['市场进入策略', '品牌营销', '内容创作'],
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
    image: asset('work-annakiki.webp'),
    track: 'commercial',
    // 完整项目文件：本人提供的「零售设计(2).pdf」，17 页
    docPages: { dir: 'annakiki', count: 17 },
    tags: ['创新品牌定位', '品牌联名', '快闪活动'],
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
    // 2026-10-12 按本人给的作品集页面（「提取自叶琪 作品集」）补全内容
    title: '跨境电商品牌策划 · Momo’s Workshop',
    image: asset('work-momos-workshop.webp'),
    track: 'commercial',
    // 项目方案：本人从作品集导出的一页
    docPages: { dir: 'momos-workshop', count: 1 },
    tags: ['跨境电商', '欧美市场', '内容营销', '达人营销'],
    year: '2025',
    role: '海外 PR 实习生（品牌「毛吉吉」）',
    type: '中国电商品牌出海',
    summary:
      '根据品牌品类与市场目标，参与美妆品牌「毛吉吉」在欧美、亚洲市场从 0 到 1 的冷启动，为品牌内容推广提供创意策划支持。',
    problem:
      '毛吉吉（Momo’s Workshop）是源自中国的专业美妆工具品牌，凭明星产品在国内市场积累了口碑与销量。国内竞争日趋激烈、品牌势能不断攀升，品牌希望在保持「专业、精巧、愉悦」基因的基础上系统性开拓全球市场，瞄准美国、东南亚、欧洲等核心跨境电商市场，通过本地化策略与数字化营销，从 0 到 1 建立国际美妆爱好者中的专业认知与品牌影响力。',
    contribution: ['社交媒体主页', '品牌独立站', '达人合作', '电商页面'],
    decisions: [
      '底层逻辑：从品牌调性出发，制定以品牌为主的营销策略，寻求优质内容达人合作、独立站建设、电商平台搭建，完善品牌跨境电商完整链路。',
    ],
    outcome: [''],
    reflection: '',
  },
]
