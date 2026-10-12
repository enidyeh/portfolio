// 「正在创造」= 进行中的创业项目与合作方向。
// 每个项目回答同样六个问题：Problem / Opportunity / Solution /
// Business Model / Validation / Next Milestone。
// 未经验证的部分必须标为假设，不包装成已有业绩；未公开的商业信息不写入。

import { asset } from '../lib/base'

export type Venture = {
  slug: string
  name: string
  en: string
  /** 方形配图（public/ 下），800×800；没填就显示占位图 */
  image?: string
  /** 一句话定位 */
  oneLiner: string
  /** 状态标签 */
  status: string
  /** 小红书主页（本人提供，2026-10-12） */
  xhs?: string
  /** 图片右上角的灰色徽标（如「筹备中」）。有徽标时不再重复显示下面的状态胶囊 */
  badge?: string
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
  /**
   * 配图在卡片里的裁剪位置（inline style 的 object-position）。
   * 不填就用 CSS 默认值 50% 35%；个别图需要单独调时在这里覆盖。
   */
  imagePos?: string
  /**
   * 项目方案 / 合作手册：把本人给的 PDF 逐页转成图片
   * （`public/case-pages/<dir>/NN.webp`），附在详情页正文后面。
   */
  docPages?: { dir: string; count: number }
  /** 线上地址（当前为本地演示地址，上线后替换） */
  liveUrl?: string
  liveNote?: string
  /** 是否为演示（无后端 / 无真实交易） */
  demo?: boolean
  pending?: boolean
}

export const ventureHead = {
  // 2026-10-12 按本人要求：删掉「正在创造」小标题，标题改为「我正在从0到1构建。」
  title: '我正在从0到1构建。',
  lede: '进行中的思考切片！聚焦青年文化与新消费语境，进行内容与社群的探索。',
}

export const ventures: Venture[] = [
  {
    slug: 'reverie',
    name: '异想集 REVERIE',
    en: 'REVERIE',
    image: asset('venture-reverie.webp'),
    oneLiner: '把青年文化，变成可以走进去的现场。',
    status: '创意市集 · 主题展览 · 文化交流',
    xhs: 'https://www.xiaohongshu.com/user/profile/649917aa000000002b008d69?xsec_token=ABfzm1XTVu1UBRen42srLiMcZX1ASBdXjYvvr-wEVlXKg=&xsec_source=pc_search',
    // 2026-10-12 按本人要求：状态胶囊去掉，改成下面这组小标签
    tags: ['创意市集', '主题展览', '文化交流'],
    role: '待填：你在团队中的具体职责。',
    problem: '待填：哪类人遇到了什么具体问题，现有方案为什么不够好。',
    opportunity: '待填：市场机会是什么，你凭什么认为这个需求值得解决。',
    solution:
      '待填：具体是什么（用户定位 / 文化主题 / 活动体验 / 内容传播），第一阶段只解决哪个问题。',
    businessModel: '待填：谁付钱、为什么付钱、预算与收入如何产生（品牌招商等）。',
    validation: '待填：有哪些访谈、付费、复购或合作证据；哪些仍是假设。',
    nextMilestone: '待填：下一阶段需要验证什么，需要哪些资源或合作。',
    collab: '待填：开放的合作方向（品牌招商 / 联名 / 场地 / 内容）。',
    // 合作需求之后附上「异想集｜游园惊梦 合作手册」（28 页）
    docPages: { dir: 'reverie', count: 28 },
    pending: true,
  },
  {
    slug: 'yixiang-shop',
    name: '异想商店 REVERIE SHOP',
    en: 'REVERIE SHOP',
    image: asset('venture-yixiang-shop.webp'),
    // 2026-10-12 按本人要求：不要上方的「REVERIE」招牌，只要遮雨棚和橱窗
    // （源图 800×800，16:9 取景框高 450px，67% ≈ 从 y=235 开始往下取）
    imagePos: '50% 67%',
    oneLiner: '文化创意型线上集市。',
    status: '筹备中',
    badge: '筹备中',
    xhs: 'https://www.xiaohongshu.com/user/profile/5ee3a7b0000000000101fb9d?xsec_token=ABzYFn55WHC8Qc6kKy2M4nKtvEENs24S9d27ta75NBNsE%3D&xsec_source=pc_search',
    tags: ['原创产品', '线上集市', '生活好物'],
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
  {
    slug: 'unseen',
    name: '暗盒 UNSEEN',
    en: 'UNSEEN',
    image: asset('venture-unseen.webp'),
    oneLiner: '「青年正发声」的文化内容平台。',
    status: '筹备中',
    badge: '筹备中',
    xhs: 'https://www.xiaohongshu.com/user/profile/614dd5e400000000020249dd?xsec_token=AB_Vx9ak1d5jq8Hh5539hbBDYPIReL40PjeHF0THv5KVk%3D&xsec_source=pc_search',
    tags: ['文化研究', '人物访谈', '内容共创'],
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
    // 2026-10-11 按本人要求新增的第四个品牌。
    // 一句话定位取自域见自己的 README（面向 0→1 品牌的对外获客/服务站点），其余待本人确认。
    slug: 'realmview',
    name: '域见 REALMVIEW',
    en: 'REALMVIEW',
    image: asset('venture-realmview.webp'),
    oneLiner: '让品牌跨域生长，让文化双向流动。',
    status: '筹备中',
    badge: '筹备中',
    xhs: 'https://www.xiaohongshu.com/user/profile/5e3665730000000001000223?xsec_token=ABTbpa8xFFnHQaGi9EOH1bJnblHwxKKHxMtr_pojBPwpU%3D&xsec_source=pc_search',
    tags: ['品牌出海/入海', '文化策展', '全球营销资源'],
    role: '待填：你在其中的角色。',
    problem: '待填：哪类品牌遇到了什么具体问题。',
    opportunity: '待填：市场机会与判断依据。',
    solution: '待填：第一阶段只解决哪个问题。',
    businessModel: '待填：谁付钱、报价与收入如何产生。',
    validation: '待填：已有的验证证据；哪些仍是假设。',
    nextMilestone: '待填：下一步要验证什么、需要什么资源。',
    collab: '待填：开放的合作方向。',
    pending: true,
  },
]

/** 合作入口：一句话 + 联系方式按钮（首页与 /venture 共用一张小卡片）。 */
export const dataRoom = {
  text: '欢迎一起探讨、创造。',
}

export const ventureNote =
  '尚未验证的部分已在各项目中明确标为「假设 / 待确认」，不包装成已有业绩；未公开的商业信息不在公开页披露。'

