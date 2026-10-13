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
  /** 文件下载后保存成什么名字（2026-10-13 按本人要求指定，含手机号） */
  file?: string
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
  /** 简介（2026-10-13 按本人要求：整段用正文字体字号；旧的两句已换掉） */
  intro: [
    '我在文化、消费与技术的交汇处寻找机会，习惯从真实的用户痛点出发，把想法推进成可验证的产品方案与增长策略。我深度参与过多个行业的商业项目，组织过万人参与的线下活动，也完成过 Web3 虚实融合智能产品从 0 到 1 的设计。从米兰到纽约的游历赋予我全球化视野，让我能敏锐捕捉市场机会并推进落地。现在，我将重心放在 AI 产品策略与品牌全球化商业化上。',
  ],
  /** 四个能力支点 */
  pillars: ['产品思维', '全球商业化', 'AI 应用', '项目落地'],
  /** 联系方式 */
  email: 'enidyeh2002@gmail.com',
  wechat: 'ENIDYEAH',
  /** 联系电话：2026-10-12 按本人要求公开在「联系」里 */
  phone: '+86 18702378098',
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
    file: '叶琪-简历-AI商业化-18702378098.pdf',
  },
  {
    group: '作品集',
    label: '作品集',
    note: '完整作品集 PDF。',
    url: asset('portfolio.pdf'),
    file: '叶琪-作品集-18702378098.pdf',
  },
  {
    group: '异想集',
    label: '异想集品牌合作',
    note: '异想集「游园惊梦」合作手册，供品牌与场地方了解合作方式。',
    url: asset('reverie-collab.pdf'),
    file: '异想集-合作手册.pdf',
  },
]
