// 个人站基础信息。
// 定位：ENID · AI Product Strategy × Global Growth
// 约定：不要编造真实信息。未提供的字段留空字符串或空数组，
// 页面上会渲染成「待填」样式，并在 README 的待填清单里列出。

import { asset } from '../lib/base'

export type SocialLink = {
  label: string
  /** 账号名或主页标识（待填） */
  handle?: string
  url: string
}

export type DownloadItem = {
  label: string
  note: string
  /** 直链；留空表示「按需索取」，引导到联系方式 */
  url?: string
  /** 2026-10-12 起：简历 / 作品集 / 异想集品牌合作 */
  group: '简历' | '作品集' | '异想集'
  /** 文件尚未上传 */
  pending?: boolean
}

export const profile = {
  /** 页头与页脚的字标 */
  wordmark: 'ENID',
  name: 'ENID',
  /** 中文姓名（待填） */
  nameZh: '',
  /** 页头副标（窄屏隐藏） */
  brandSub: 'AI Product Strategy × Growth',
  /** 主身份：面向全球的表达 */
  roleEn: 'AI Product Strategy × Global Growth',
  /** 中文身份标签 */
  roleZh: 'AI 产品策略 × 全球品牌增长',
  /** 首屏英文主张 */
  headlineEn: 'I turn insights into products, experiences and growth.',
  /** 首屏中文主张（与 headlineEn 对应；用户 2026-10-09 选定） */
  headlineZh: '把洞察变成产品、体验与增长。',
  /** 首屏副句 / 中文定位 */
  statement:
    '我在文化、消费与技术之间寻找机会，并将用户洞察转化为产品方案、增长策略与真实项目。',
  location: '上海',
  /** 两句简介（口径待本人确认） */
  intro: [
    '我做过商业项目与项目管理，也独立完成过产品设计与前端实现：从用户与市场里找机会，再把想法推进成可验证的方案。',
    '现在把重心放在 AI 产品策略与全球商业化——先确认用户问题，再用最小的可行方案把它跑通。',
  ],
  /** 四个能力支点 */
  pillars: ['产品思维', '全球商业化', 'AI 应用', '项目落地'],
  /** 联系方式 */
  email: 'enidyeh2002@gmail.com',
  wechat: 'ENIDYEAH',
  /** 社交主页：2026-10-11 按本人要求先撤下小红书（原链带 xsec_token、易失效），有正式主页地址再加回来 */
  social: [] as SocialLink[],
}

/** 站点通用说明：所有标注「待填」的内容都以此为准 */
export const siteNote = '仍有部分内容尚未由本人提供，对外发布前会先补齐。'

/** 获取简历：页头浮窗 + 关于页共用这一份。
 *  2026-10-12 按本人要求精简：只留《简历》《作品集》《异想集品牌合作》。 */
export const downloads: DownloadItem[] = [
  {
    group: '简历',
    label: '简历',
    note: '一页版简历，含教育、实习与项目经历。',
    url: asset('resume.pdf'),
  },
  {
    group: '作品集',
    label: '作品集',
    note: '完整作品集 PDF。',
    url: asset('portfolio.pdf'),
  },
  {
    group: '异想集',
    label: '异想集品牌合作',
    note: '异想集「游园惊梦」合作手册，供品牌与场地方了解合作方式。',
    url: asset('reverie-collab.pdf'),
  },
]
