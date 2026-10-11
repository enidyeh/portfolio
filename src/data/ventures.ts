// 「正在创造」= 进行中的创业项目与合作方向。
// 每个项目回答同样六个问题：Problem / Opportunity / Solution /
// Business Model / Validation / Next Milestone。
// 未经验证的部分必须标为假设，不包装成已有业绩；未公开的商业信息不写入。

export type Venture = {
  slug: string
  name: string
  en: string
  /** 一句话定位 */
  oneLiner: string
  /** 状态标签 */
  status: string
  tags: string[]
  /** 团队中的角色 */
  role: string
  /** 六个问题 */
  problem: string
  opportunity: string
  solution: string
  businessModel: string
  validation: string
  nextMilestone: string
  /** 合作需求 */
  collab: string
  /** 线上地址（当前为本地演示地址，上线后替换） */
  liveUrl?: string
  liveNote?: string
  /** 是否为演示（无后端 / 无真实交易） */
  demo?: boolean
  pending?: boolean
}

export const ventureHead = {
  eyebrow: '正在创造',
  title: '创业项目、投资与合作。',
  lede: '每个项目回答同样六个问题：问题、机会、方案、商业模式、验证进度、下一个里程碑。尚未验证的部分会明确标为假设，不包装成已有业绩。',
}

export const ventures: Venture[] = [
  {
    slug: 'reverie',
    name: 'REVERIE 异想集',
    en: 'REVERIE',
    oneLiner: '待填：一句话定位（文化主题 / 活动品牌的方向）。',
    status: '进行中',
    tags: ['活动品牌', '青年文化', '商业化'],
    role: '待填：你在团队中的具体职责。',
    problem: '待填：哪类人遇到了什么具体问题，现有方案为什么不够好。',
    opportunity: '待填：市场机会是什么，你凭什么认为这个需求值得解决。',
    solution:
      '待填：具体是什么（用户定位 / 文化主题 / 活动体验 / 内容传播），第一阶段只解决哪个问题。',
    businessModel: '待填：谁付钱、为什么付钱、预算与收入如何产生（品牌招商等）。',
    validation: '待填：有哪些访谈、付费、复购或合作证据；哪些仍是假设。',
    nextMilestone: '待填：下一阶段需要验证什么，需要哪些资源或合作。',
    collab: '待填：开放的合作方向（品牌招商 / 联名 / 场地 / 内容）。',
    pending: true,
  },
  {
    slug: 'unseen',
    name: '暗盒 UNSEEN',
    en: 'UNSEEN',
    oneLiner:
      '给上海青年的一本「每月一期」的城市探索刊物：从发现，到事件、市集与空间，最后落到你自己的身份记录。',
    status: '原型 / 演示',
    tags: ['产品设计', '青年文化', '移动端'],
    role: '产品设计 + 前端实现：从信息架构、交互设计到可运行原型都自己做。',
    problem:
      '在上海生活、想认真体验这座城市的年轻人，现有的方式是继续刷信息流——内容很多，但缺少有策展、有编辑选择的体验入口。',
    opportunity:
      '信息流已经过度饱和，「策展」比「更多」更稀缺。用杂志式、有编辑选择的内容结构，反而成了当下稀缺的体验。',
    solution:
      '面向上海青年的移动端探索刊物：DISCOVER 发现 → HOME（EVENTS / MARKET / SPACE）→ IDENTITY 记录。第一阶段先验证「每月一个主题」能不能带来持续回访。',
    businessModel: '待填：谁付钱、为什么付钱、收入如何产生（当前为演示原型，无任何交易）。',
    validation:
      '目前是本地演示原型：无登录、无后端、无真实交易与真实数据，尚未做用户验证。所有内容均为演示。',
    nextMilestone: '待填：需要先确定每月主题的内容来源，并设计一次小规模的用户可用性测试。',
    collab: '待填：共同策展人 / 场地与市集合作方 / 内容主理人。',
    liveUrl: 'http://localhost:5173',
    liveNote: '当前为本地演示原型，无后端与真实交易。',
    demo: true,
  },
  {
    slug: 'yixiang-shop',
    name: '异想商店',
    en: 'YIXIANG SHOP',
    oneLiner: '待填：一句话定位（卖什么、卖给谁、和异想集是什么关系）。',
    status: '筹备中',
    tags: ['商业', '零售'],
    role: '待填：你的角色。',
    problem: '待填：目标用户的具体问题。',
    opportunity: '待填：市场机会与判断依据。',
    solution: '待填：第一阶段只解决哪个问题；与 REVERIE 的关系。',
    businessModel: '待填：谁付钱、毛利与收入如何产生。',
    validation: '待填：已有的验证证据；哪些仍是假设。',
    nextMilestone: '待填：下一步要验证什么、需要什么资源。',
    collab: '待填：开放的合作方向。',
    pending: true,
  },
]

/** 融资资料入口：按需索取，不用密码页代替商业逻辑。 */
export const dataRoom = {
  eyebrow: '投资人',
  title: '融资资料按需索取。',
  body: '公开页面只展示项目逻辑与验证进度；具体的财务、模型与融资条款在沟通后单独提供。需要请直接联系。',
}

export const ventureNote =
  '尚未验证的部分已在各项目中明确标为「假设 / 待确认」，不包装成已有业绩；未公开的商业信息不在公开页披露。'

