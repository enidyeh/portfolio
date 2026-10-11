// 「关于」页：个人介绍、简历、经历、教育。
// 经历与教育暂无真实数据，只放结构占位，不编造公司与时间。

export type TimelineItem = {
  when: string
  role: string
  org?: string
  desc?: string
}

export const aboutHead = {
  eyebrow: '个人介绍',
  title: '关于我。',
  lede: '网站讲的是长期能力，简历则针对具体岗位。下面提供两套定制简历，另有经历、教育与联系方式。',
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

/** 经历时间线（待填） */
export const experience: TimelineItem[] = [
  {
    when: '20XX — 至今',
    role: '待填：职位 / 身份',
    org: '待填：公司或项目',
    desc: '待填：负责什么、做成了什么（可核实的成果）。',
  },
  {
    when: '20XX — 20XX',
    role: '待填：职位 / 身份',
    org: '待填：公司或项目',
    desc: '待填：负责什么、做成了什么。',
  },
  {
    when: '20XX — 20XX',
    role: '待填：职位 / 身份',
    org: '待填：公司或项目',
    desc: '待填：负责什么、做成了什么。',
  },
]

/** 教育 / 交换经历（待填） */
export const education: TimelineItem[] = [
  { when: '20XX — 20XX', role: '待填：专业 / 学位', org: '待填：学校' },
  { when: '20XX — 20XX', role: '待填：交换 / 项目', org: '待填：学校' },
]

export const aboutNote =
  '经历、教育与能力条目由本人确认后替换；两份简历 PDF 放入 public/ 后即可下载。'

