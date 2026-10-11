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
  group: '简历' | '项目资料'
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
  /** 联系方式（待填） */
  email: '',
  wechat: '',
  /** 社交主页 */
  social: [
    {
      label: '小红书',
      url: 'https://www.xiaohongshu.com/user/profile/5b8a63890ddda30001ded374?xsec_token=AB0bl2LxP7ZdfPYO5BLCC6Bh9HJnKIi4_Z7gHDD5dUlLw%3D&xsec_source=pc_search',
    },
    {
      label: '小红书',
      url: 'https://www.xiaohongshu.com/user/profile/64f89acf0000000004024dac?xsec_token=ABU_O_y4uSGyexANn0Z_ib5OJHwnHsBwGzDqPOGT37uMU%3D&xsec_source=pc_search',
    },
  ] as SocialLink[],
}

/** 站点通用说明：所有标注「待填」的内容都以此为准 */
export const siteNote = '仍有部分内容尚未由本人提供，对外发布前会先补齐。'

/** 资料下载：页头「资料下载」浮窗 + 关于页的简历区块共用这一份。 */
export const downloads: DownloadItem[] = [
  {
    group: '简历',
    label: '商业化版简历',
    note: '面向商业化 / 增长岗位：强调市场洞察、增长与商业结果。',
    url: asset('resume-commercial.pdf'),
    pending: true,
  },
  {
    group: '简历',
    label: '产品版简历',
    note: '面向产品 / AI 岗位：强调用户问题、产品方案、原型与验证。',
    url: asset('resume-product.pdf'),
    pending: true,
  },
  {
    group: '项目资料',
    label: '精选项目总览',
    note: '四个案例的一页式摘要，适合快速浏览。',
    url: asset('portfolio-overview.pdf'),
    pending: true,
  },
  {
    group: '项目资料',
    label: '合作 / 融资资料',
    note: '创业项目的商业与融资材料，按需索取，不公开下载。',
  },
]
