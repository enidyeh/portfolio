// 「关于」页：个人介绍、简历、经历、教育。
// 经历与教育暂无真实数据，只放结构占位，不编造公司与时间。

export type TimelineItem = {
  when: string
  role: string
  org?: string
  desc?: string
}

export const aboutHead = {
  // 2026-10-12 按本人要求：删掉「个人介绍」小标题，换掉那句自我介绍
  title: '关于我。',
  lede: '一个很爱折腾，具备全球视野与商业变现经验，希望用 AI 工具与产品思维解放好奇心的人。',
}

/** 能力方法论：Strategy · Product · Growth（首页 WHAT I DO 复用同一份） */
export const method: { en: string; zh: string; items: string[] }[] = [
  {
    en: 'Strategy',
    zh: '战略',
    items: ['市场与用户洞察', '机会判断', '商业定位'],
  },
  {
    en: 'Product',
    zh: '产品',
    items: ['需求优先级', '用户流程', '原型与 AI 工作流', '验证与迭代'],
  },
  {
    en: 'Growth',
    zh: '增长',
    items: ['内容与创作者生态', '渠道与转化', '跨境商业化', '数据复盘'],
  },
]

/** 经历与教育：2026-10-12 按本人提供的直聘简历录入（摘要自简历中的实习经历与教育经历）。 */
export const experience: TimelineItem[] = [
  {
    when: '2025.06 — 2025.08',
    role: '海外市场营销实习生',
    org: 'Opencreator',
    desc: '海外创作者合作与社群运营：建联 50+ 海外 KOL/KOC 与动漫社区，独立运营 Discord 并策划「AI AMV 动画音乐视频挑战赛」，负责 TikTok / Instagram / X 的内容策划。',
  },
  {
    when: '2025.09 — 2025.12',
    role: '海外 PR 实习生',
    org: '桂林市吉木秋化妆品有限公司（品牌「毛吉吉」）',
    desc: '品牌海外传播：维护 5000+ 海外达人资源库、与 500+ KOL/KOC 合作，负责寄样、创意 Brief 与内容复盘，并参与品牌独立站规划与跨境业务事务。',
  },
  {
    when: '2024.03 — 2024.06',
    role: '创意项目管理实习生',
    org: '北京泡泡玛特文化创意有限公司',
    desc: '参与 SKULLPANDA / 迪士尼唐老鸭系列 / 王嘉尔 / LABUBU / MOLLY 等 20+ 新品上市传播；协同 25+ 内外团队把项目周期缩短 20%，新品上市 48 小时内社媒曝光超千万次。',
  },
  {
    when: '2023.10 — 2024.02',
    role: '商业化设计实习生',
    org: '小红书 · 行吟信息科技（上海）有限公司',
    desc: '负责「REDesign」跨部门视觉营销：策划官方活动「我就要这样生活」，运营「字体月月报」栏目，并完成 2024 WILL 商业合作伙伴大会的视觉与直播物料设计。',
  },
]

/** 教育 / 交换经历（同来自本人简历） */
export const education: TimelineItem[] = [
  {
    when: '2022 — 2027',
    role: '本科 · 产品设计',
    org: '江南大学',
    desc: '软科中国大学设计学排名第二；毕业设计「数据主权时代的虚实融合智能产品设计研究」获校级优秀毕设。',
  },
  {
    when: '2024 — 2025',
    role: '本科 · 时尚营销与品牌（一年制交换）',
    org: '米兰理工大学',
    desc: 'QS 艺术与设计排名第七；获江苏高校境外学习政府奖学金（Top 5%），全英授课，研究品牌传播、行业趋势、时尚零售与展览设计。',
  },
]

export const aboutNote =
  '经历与教育信息来自本人提供的简历（2026-10-12 录入）；两份简历 PDF 放入 public/ 后即可下载。'

