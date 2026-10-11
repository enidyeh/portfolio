// 首页「数字分身」。
//
// ⚠️ 实现边界：所有回答都来自**本地预设**（关键词匹配），不是真实 AI 模型，
// 不发送任何网络请求、不调用任何外部接口、不保存输入内容。
// 界面上原先有一行「演示 · 回答来自本地预设…」的说明，2026-10-12 按本人要求撤掉；
// 如果之后接入真实模型，这段本地匹配逻辑必须整体替换，不要留两套并存的回答源。

export const avatarIntro = {
  question: '有什么可以帮忙的？',
  placeholder: '问一个关于我的问题…',
  suggestions: [
    '你最擅长解决什么问题？',
    '你做过哪些案例？',
    '你现在在做什么？',
    '你的商业判断是什么？',
    '怎么联系你？',
  ],
}

export type AvatarLink = { label: string; to: string }

export type AvatarReply = {
  answer: string
  link?: AvatarLink
}

export type AvatarAnswer = AvatarReply & {
  id: string
  keywords: string[]
}

export const avatarQA: AvatarAnswer[] = [
  {
    id: 'skill',
    keywords: ['擅长', '能力', '优势', '技能', '会什么', '能做什么'],
    answer:
      '我把能力分成三条线。Strategy：市场与用户洞察、机会判断、商业定位。Product：需求优先级、用户流程、原型与 AI 工作流、验证与迭代。Growth：内容与创作者生态、渠道与转化、跨境商业化、数据复盘。',
    link: { label: '看精选案例', to: '/work' },
  },
  {
    id: 'cases',
    keywords: ['案例', '做过', '作品', '项目经验'],
    answer:
      '精选案例有五个。产品策略与 AI 应用这条线：PHYGITAL BASE（产品设计与项目管理）；商业化与全球增长这条线：COMMON GROUND（AI 产品）、SOHO-T、ANNAKIKI、Momo\'s Workshop。它们串成一条闭环——能把创意落地、能设计解决方案、能理解市场与商业化。每个案例里的具体数据还在补充。',
    link: { label: '看精选案例', to: '/work' },
  },
  {
    id: 'venture',
    keywords: ['在做', '现在做', '创业', '正在做', '异想', '暗盒'],
    answer:
      '正在做三个项目：REVERIE 异想集、暗盒 UNSEEN、异想商店。每个项目都按同一套六个问题展开：问题、机会、方案、商业模式、验证进度、下一个里程碑。',
    link: { label: '看正在创造', to: '/venture' },
  },
  {
    id: 'thinking',
    keywords: ['商业', '判断', '思考', '方法', '逻辑', '验证'],
    answer:
      '我的判断顺序是：先确认用户问题真的存在，再找最小的可验证方案，最后才谈规模与商业化。没验证过的部分我会明确标成假设，不包装成已有业绩。',
    link: { label: '看验证进度', to: '/venture' },
  },
  {
    id: 'contact',
    keywords: ['联系', '邮箱', '微信', '简历', '合作', '招聘', '投递', '下载'],
    answer:
      '联系方式与资料下载都在「个人介绍」里：邮箱 enidyeh2002@gmail.com、微信 ENIDYEAH，另有商业化版与产品版两套定制简历。',
    link: { label: '去个人介绍', to: '/about#resume' },
  },
]

/** 没有命中预设时给出的兜底回答：把话题引到联系方式。 */
export const avatarFallback: AvatarReply = {
  answer: '好问题！可以在此与我进一步交流。',
  link: { label: '点击获得我的联系方式', to: '/about#contact' },
}
