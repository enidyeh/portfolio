// 双语内容总装。
//
// 结构说明（方便逐条对照确认）：
//   ./profile.ts  ./about.ts  ./works.ts  ./ventures.ts  ./avatar.ts   → 中文
//   ./en/*.ts                                                          → 英文（一一对应）
//   本文件只做三件事：① 把两种语言装成同一个形状；② 存放界面文案（按钮、标题、占位提示…）；
//   ③ 提供 `useContent()`。
//
// 新增文案时：先看它是不是「界面文案」——是就加到下面的 ui，不是就加到对应的数据文件里（中英两边一起改）。

import type { Lang } from '../i18n/lang'
import { useLang } from '../i18n/locale'

import type { DownloadItem, SocialLink } from './profile'
import * as zhProfile from './profile'
import * as enProfile from './en/profile'

import type { TimelineItem } from './about'
import * as zhAbout from './about'
import * as enAbout from './en/about'

import type { WorkCase, WorkTrackId } from './works'
import * as zhWorks from './works'
import * as enWorks from './en/works'

import type { Venture } from './ventures'
import * as zhVentures from './ventures'
import * as enVentures from './en/ventures'

import type { AvatarAnswer, AvatarReply } from './avatar'
import * as zhAvatar from './avatar'
import * as enAvatar from './en/avatar'

import type { Company } from './companies'
import * as zhCompanies from './companies'
import * as enCompanies from './en/companies'

/** 人物信息，两种语言共用同一形状。 */
export type ProfileView = {
  wordmark: string
  name: string
  /** 中文姓名（待填） */
  nameZh: string
  /** 页头副标 */
  brandSub: string
  /** 定位标签（页脚、About 侧栏） */
  role: string
  /** 首屏主标题 */
  headline: string
  /** 主标题下的一句补充（中文为空 —— 中文主标题本身就是那句话） */
  lede: string
  /** 简介里的定位句（页脚、About） */
  statement: string
  location: string
  intro: string[]
  pillars: string[]
  email: string
  wechat: string
  phone: string
  social: SocialLink[]
}

export type MethodGroup = { label: string; items: string[] }
export type TrackView = { id: WorkTrackId; no: string; label: string; items: string[] }

/** 界面文案（按钮、区块标题、占位提示、无障碍标签…）。 */
export type Ui = {
  pageTitle: string
  navAria: string
  navWork: string
  navVenture: string
  navAbout: string
  navDownloads: string
  brandAria: string
  langSwitchAria: string
  langSwitchLabel: string

  dlPanelAria: string
  dlGroup: Record<'简历' | '作品集' | '异想集', string>
  dlPending: string
  dlDownload: string
  dlRequest: string
  dlRequestAria: string

  footContact: string
  footSocial: string
  footProjects: string
  footResume: string
  footAbout: string
  wechatPrefix: string
  /** 页脚联系栏里的「电话 · 」前缀 */
  phonePrefix: string
  phoneAria: string
  pendingEmail: string
  pendingWechat: string
  pendingSocial: string

  ctaWork: string
  ctaVenture: string
  ctaResume: string

  sectionWork: string
  /** 首页 HERO 的常见问题：点一下等于问数字分身，不跳页（原来是三个跳转按钮） */
  heroFaq: string[]
  homeVentureEyebrow: string
  homeVentureTitle: string
  homeExperienceEyebrow: string
  homeExperienceTitle: string
  homeCompaniesTitle: string
  companiesPending: string
  allCases: string
  allVentures: string
  aboutMore: string
  featuredCta: string
  phImage: string
  phVideo: string
  tlExperience: string
  tlEducation: string

  turnUser: string
  turnAvatar: string
  turnReset: string
  turnInputAria: string
  turnSendAria: string
  turnPrevAria: string
  turnNextAria: string

  dockOpenAria: string
  dockCollapseAria: string
  dockPanelAria: string
  dockTitle: string
  dockCloseAria: string

  caseEyebrow: string
  /** 案例 / 项目详情页左上角的「返回上级」按钮 */
  backCta: string
  caseNext: string
  casePrev: string
  caseNavAria: string
  blockProblem: string
  blockRole: string
  blockDecisions: string
  blockOutcome: string
  blockReflection: string

  ventureEyebrow: string
  blockSix: string
  blockCollab: string
  blockLive: string
  qaKeys: string[]
  demoLabel: string
  openSite: string
  /** 详情页大图右下角的「查看网站」按钮（2026-10-13 按本人要求新增） */
  viewSite: string
  /** 点「查看网站」弹出的浮窗里那行白字（2026-10-13） */
  underConstruction: string
  modalClose: string
  contactCta: string

  blockIntro: string
  blockResume: string
  blockCapability: string
  blockExperience: string
  blockEducation: string
  blockContact: string
  methodLede: string
  resumeCta: string
  resumePending: string
  /** 创业项目详情页的「小红书主页」链接文案 */
  ventureXhs: string
  /** 「正在创造」每一行右侧的圆角红色按钮（跳对应小红书主页） */
  followCta: string
  /** 页脚联系栏里的「邮箱 · 」前缀（与下面「微信 · 」对齐） */
  emailPrefix: string
  /** 微信二维码占位（图片由本人提供后替换） */
  wxQrPending: string
  wxQrNote: string
  /** 案例详情页底部的完整项目文件（PDF 逐页）标题 */
  caseDocTitle: string
  /** 创业项目图上那个跳小红书的角标（图片链接的无障碍名称） */
  xhsCardLabel: string
  /** 首页自动播放的视频：解除静音的按钮文案 */
  unmuteCta: string
  /** 个人介绍页：个人魅力 / 招聘视频两块 */
  aboutCharm: string
  aboutHiring: string
  aboutCharmNote: string
  aboutHiringNote: string
  /** 个人介绍页：简介右边的照片轮播（占位） */
  aboutPhotos: string
  aboutPhotosPending: string
  /** 「点此下载简历 / 点此下载作品集」按钮的前缀 */
  downloadPrefix: string
  metaEmail: string
  metaWechat: string
  metaPhone: string
  metaSocial: string

  nfTitle: string
  nfLede: string
  nfCta: string
}

export type Content = {
  profile: ProfileView
  siteNote: string
  downloads: DownloadItem[]
  aboutHead: { title: string; lede: string }
  methodGroups: MethodGroup[]
  experience: TimelineItem[]
  education: TimelineItem[]
  aboutNote: string
  worksHead: { title: string; lede?: string }
  workTracks: TrackView[]
  works: WorkCase[]
  ventureHead: { title: string; lede: string }
  ventures: Venture[]
  dataRoom: { text: string }
  ventureNote: string
  companies: Company[]
  avatarIntro: { question: string; placeholder: string; suggestions: string[] }
  avatarQA: AvatarAnswer[]
  avatarFallback: AvatarReply
  ui: Ui
}

const uiZh: Ui = {
  pageTitle: 'ENID',
  navAria: '主导航',
  navWork: '精选项目',
  navVenture: '正在创造',
  navAbout: '个人介绍',
  navDownloads: '获取简历',
  brandAria: 'ENID，回到首页',
  langSwitchAria: '切换到英文',
  langSwitchLabel: 'EN',

  dlPanelAria: '获取简历',
  dlGroup: { 简历: '简历', 作品集: '作品集', 异想集: '品牌合作' },
  dlPending: '待上传',
  dlDownload: '下载',
  dlRequest: '按需索取',
  dlRequestAria: '按需索取，前往联系方式',

  footContact: '联系',
  footSocial: '社交',
  footProjects: '正在创造',
  footResume: '简历',
  footAbout: '个人介绍',
  wechatPrefix: '微信 · ',
  phonePrefix: '电话 · ',
  phoneAria: '拨打电话',
  pendingEmail: '待填：邮箱',
  pendingWechat: '待填：微信',
  pendingSocial: '待填：社交账号',

  ctaWork: '精选项目 →',
  ctaVenture: '正在创造 →',
  ctaResume: '下载简历',

  sectionWork: '精选项目',
  heroFaq: [
    '你做过哪些类型的案例？',
    '你现在在做哪些项目？',
  ],
  homeVentureEyebrow: '正在创造',
  homeVentureTitle: '正在创造',
  homeExperienceEyebrow: '经历',
  homeExperienceTitle: '经历与背景',
  homeCompaniesTitle: '曾就职于',
  companiesPending: '待上传 logo',
  allCases: '全部案例 →',
  allVentures: '全部项目 →',
  aboutMore: '个人介绍 →',
  featuredCta: '查看案例 →',
  phImage: '图占位',
  phVideo: '视频占位（待替换）',
  tlExperience: '工作',
  tlEducation: '学习',

  turnUser: '你',
  turnAvatar: 'ENID · 分身',
  turnReset: '清空对话',
  turnInputAria: '向数字分身提问',
  turnSendAria: '发送问题',
  turnPrevAria: '看上一组问答',
  turnNextAria: '看下一组问答',

  dockOpenAria: '打开数字分身对话',
  dockCollapseAria: '收起数字分身对话',
  dockPanelAria: '数字分身对话',
  dockTitle: 'ENID · 数字分身',
  dockCloseAria: '关闭对话',

  caseEyebrow: '精选案例',
  backCta: '返回',
  caseNext: '下一个案例',
  casePrev: '上一个案例',
  caseNavAria: '案例导航',
  blockProblem: '项目背景',
  blockRole: '我的角色',
  blockDecisions: '关键决策与过程',
  blockOutcome: '结果',
  blockReflection: '反思',

  ventureEyebrow: '正在创造',
  blockSix: '六个问题',
  blockCollab: '合作共创',
  blockLive: '线上',
  qaKeys: ['问题', '机会', '方案', '商业模式', '验证', '下一步'],
  demoLabel: '演示',
  openSite: '打开站点 ↗',
  viewSite: '查看网站',
  underConstruction: '搭建中',
  modalClose: '关闭',
  contactCta: '联系方式 →',

  blockIntro: '简介',
  blockResume: '简历',
  blockCapability: '能力',
  blockExperience: '经历',
  blockEducation: '教育',
  blockContact: '联系',
  methodLede: '把能力组织成方法，而不是罗列软件和关键词。',
  resumeCta: '下载 PDF ↓',
  resumePending: '待填：把两份简历 PDF 放进 public/',
  ventureXhs: '小红书主页 →',
  followCta: '关注',
  emailPrefix: '邮箱 · ',
  wxQrPending: '待填：微信二维码',
  wxQrNote: '扫码加微信',
  caseDocTitle: '项目方案',
  /** 创业项目图上那个跳小红书的角标 */
  xhsCardLabel: '小红书主页 ↗',
  /** 首页自动播放的视频：喇叭按钮的无障碍名称 */
  unmuteCta: '开启声音',
  aboutCharm: '个人魅力',
  aboutHiring: '招聘 / 视频',
  aboutCharmNote: '待填：工作之外的东西——爱好、长期在折腾的事、能一起玩起来的场景。',
  aboutHiringNote: '待填：自我介绍视频，或招聘入口。',
  aboutPhotos: '照片',
  aboutPhotosPending: '待填：照片轮播',
  downloadPrefix: '点此下载',
  metaEmail: '邮箱',
  metaWechat: '微信',
  metaPhone: '电话',
  metaSocial: '社交',

  nfTitle: '这里没有内容。',
  nfLede: '你要找的页面不存在，或者链接已经失效。',
  nfCta: '回到首页 →',
}

const uiEn: Ui = {
  pageTitle: 'ENID',
  navAria: 'Main navigation',
  navWork: 'WORK',
  navVenture: 'BUILDING',
  navAbout: 'ABOUT',
  navDownloads: 'RÉSUMÉ',
  brandAria: 'ENID — back to home',
  langSwitchAria: 'Switch to Chinese',
  langSwitchLabel: '中文',

  dlPanelAria: 'Résumé',
  dlGroup: { 简历: 'Résumé', 作品集: 'Portfolio', 异想集: 'Partnership' },
  dlPending: 'Pending upload',
  dlDownload: 'Download',
  dlRequest: 'On request',
  dlRequestAria: 'Available on request — go to contact details',

  footContact: 'Contact',
  footSocial: 'Social',
  footProjects: 'Projects',
  footResume: 'Résumé',
  footAbout: 'About',
  wechatPrefix: 'WeChat · ',
  phonePrefix: 'Phone · ',
  phoneAria: 'Call this number',
  pendingEmail: 'To be filled: email',
  pendingWechat: 'To be filled: WeChat',
  pendingSocial: 'To be filled: social accounts',

  ctaWork: 'Selected work →',
  ctaVenture: 'What I’m building →',
  ctaResume: 'Download résumé',

  sectionWork: 'Selected Projects',
  heroFaq: [
    'What kinds of cases have you worked on?',
    'What are you building right now?',
  ],
  homeVentureEyebrow: 'Building what’s next',
  homeVentureTitle: 'Building',
  homeExperienceEyebrow: 'Experience',
  homeExperienceTitle: 'Experience & background',
  homeCompaniesTitle: 'Previously at',
  companiesPending: 'Logo pending',
  allCases: 'All cases →',
  allVentures: 'All projects →',
  aboutMore: 'About →',
  featuredCta: 'View case →',
  phImage: 'Image placeholder',
  phVideo: 'Video placeholder (to be replaced)',
  tlExperience: 'Work',
  tlEducation: 'Study',

  turnUser: 'You',
  turnAvatar: 'ENID · avatar',
  turnReset: 'Clear chat',
  turnInputAria: 'Ask the AI avatar a question',
  turnSendAria: 'Send question',
  turnPrevAria: 'See the previous question',
  turnNextAria: 'See the next question',

  dockOpenAria: 'Open the AI avatar chat',
  dockCollapseAria: 'Collapse the AI avatar chat',
  dockPanelAria: 'AI avatar chat',
  dockTitle: 'ENID · AI avatar',
  dockCloseAria: 'Close chat',

  caseEyebrow: 'Selected Work',
  backCta: 'Back',
  caseNext: 'Next case',
  casePrev: 'Previous case',
  caseNavAria: 'Case navigation',
  blockProblem: 'Project background',
  blockRole: 'My role',
  blockDecisions: 'Key decisions and process',
  blockOutcome: 'Outcome',
  blockReflection: 'Reflection',

  ventureEyebrow: 'Venture',
  blockSix: 'Six questions',
  blockCollab: 'Co-creation',
  blockLive: 'Live',
  qaKeys: ['Problem', 'Opportunity', 'Solution', 'Business Model', 'Validation', 'Next Milestone'],
  demoLabel: 'Demo',
  openSite: 'Open site ↗',
  viewSite: 'View site',
  underConstruction: 'Under construction',
  modalClose: 'Close',
  contactCta: 'Get in touch →',

  blockIntro: 'Introduction',
  blockResume: 'Résumé',
  blockCapability: 'Capability',
  blockExperience: 'Experience',
  blockEducation: 'Education',
  blockContact: 'Contact',
  methodLede: 'Capability organised as a method, not a list of software and keywords.',
  resumeCta: 'Download PDF ↓',
  resumePending: 'To be filled: place both résumé PDFs in public/',
  ventureXhs: 'Xiaohongshu profile →',
  followCta: 'Follow',
  emailPrefix: 'Email · ',
  wxQrPending: 'To be filled: WeChat QR code',
  wxQrNote: 'Scan to add on WeChat',
  caseDocTitle: 'Project plan',
  xhsCardLabel: 'Xiaohongshu ↗',
  /** Homepage autoplaying video: accessible name for the speaker button */
  unmuteCta: 'Turn sound on',
  aboutCharm: 'Beyond work',
  aboutHiring: 'Hiring / video',
  aboutCharmNote: 'To be filled: life outside work — interests, long-running side projects, things we could build together.',
  aboutHiringNote: 'To be filled: an intro video, or a hiring entry point.',
  aboutPhotos: 'Photos',
  aboutPhotosPending: 'To be filled: photo carousel',
  downloadPrefix: 'Download ',
  metaEmail: 'Email',
  metaWechat: 'WeChat',
  metaPhone: 'Phone',
  metaSocial: 'Social',

  nfTitle: 'Nothing here.',
  nfLede: 'This page does not exist, or the link has expired.',
  nfCta: 'Back home →',
}

const zh: Content = {
  profile: {
    wordmark: zhProfile.profile.wordmark,
    name: zhProfile.profile.name,
    nameZh: zhProfile.profile.nameZh,
    brandSub: zhProfile.profile.roleZh,
    role: zhProfile.profile.roleZh,
    // 中英首屏结构一致：短主标题 + 一句定位副句
    headline: zhProfile.profile.headlineZh,
    lede: zhProfile.profile.statement,
    statement: zhProfile.profile.statement,
    location: zhProfile.profile.location,
    intro: zhProfile.profile.intro,
    pillars: zhProfile.profile.pillars,
    email: zhProfile.profile.email,
    wechat: zhProfile.profile.wechat,
    phone: zhProfile.profile.phone,
    social: zhProfile.profile.social,
  },
  siteNote: zhProfile.siteNote,
  downloads: zhProfile.downloads,
  aboutHead: zhAbout.aboutHead,
  methodGroups: zhAbout.method.map((m) => ({ label: m.zh, items: m.items })),
  experience: zhAbout.experience,
  education: zhAbout.education,
  aboutNote: zhAbout.aboutNote,
  worksHead: zhWorks.worksHead,
  workTracks: zhWorks.workTracks.map((t) => ({ id: t.id, no: t.no, label: t.zh, items: t.items })),
  works: zhWorks.works,
  ventureHead: zhVentures.ventureHead,
  ventures: zhVentures.ventures,
  dataRoom: zhVentures.dataRoom,
  ventureNote: zhVentures.ventureNote,
  companies: zhCompanies.companies,
  avatarIntro: zhAvatar.avatarIntro,
  avatarQA: zhAvatar.avatarQA,
  avatarFallback: zhAvatar.avatarFallback,
  ui: uiZh,
}

const en: Content = {
  profile: {
    wordmark: enProfile.profile.wordmark,
    name: enProfile.profile.name,
    nameZh: enProfile.profile.nameZh,
    brandSub: enProfile.profile.brandSub,
    role: enProfile.profile.roleEn,
    headline: enProfile.profile.headlineEn,
    lede: enProfile.profile.statement,
    statement: enProfile.profile.statement,
    location: enProfile.profile.location,
    intro: enProfile.profile.intro,
    pillars: enProfile.profile.pillars,
    email: enProfile.profile.email,
    wechat: enProfile.profile.wechat,
    phone: enProfile.profile.phone,
    social: enProfile.profile.social,
  },
  siteNote: enProfile.siteNote,
  downloads: enProfile.downloads,
  aboutHead: enAbout.aboutHead,
  methodGroups: enAbout.method.map((m) => ({ label: m.en, items: m.items })),
  experience: enAbout.experience,
  education: enAbout.education,
  aboutNote: enAbout.aboutNote,
  worksHead: enWorks.worksHead,
  workTracks: enWorks.workTracks.map((t) => ({ id: t.id, no: t.no, label: t.en, items: t.items })),
  works: enWorks.works,
  ventureHead: enVentures.ventureHead,
  ventures: enVentures.ventures,
  dataRoom: enVentures.dataRoom,
  ventureNote: enVentures.ventureNote,
  companies: enCompanies.companies,
  avatarIntro: enAvatar.avatarIntro,
  avatarQA: enAvatar.avatarQA,
  avatarFallback: enAvatar.avatarFallback,
  ui: uiEn,
}

/**
 * 「待填」两个字不展示，但**占位内容的格式全部保留**。
 *
 * 数据层写 `待填：你的角色`，页面上显示 `你的角色` —— 段落、列表、元信息的位置和结构都不变，
 * 只是前缀连冒号一起摘掉。所以这里做的是「去掉前缀」，不是「清空整段」：
 * 清空会让整块内容消失，版式就跟填好之前对不上了。
 *
 * 例外：数据里如果只写了 `待填` 两个字（没有后半句），摘完会是空字符串，
 * 这时组件会跳过它（见 WorkCard / HomePage / WorkDetailPage 里的空值判断）。
 */
const PLACEHOLDER = /^\s*(待填|To be filled)\s*[：:]?\s*/

function stripPlaceholders<T>(value: T): T {
  if (typeof value === 'string') {
    return value.replace(PLACEHOLDER, '') as T
  }
  if (Array.isArray(value)) {
    return value.map(stripPlaceholders) as T
  }
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {}
    for (const [key, item] of Object.entries(value)) out[key] = stripPlaceholders(item)
    return out as T
  }
  return value
}

export const contentByLang: Record<Lang, Content> = {
  zh: stripPlaceholders(zh),
  en: stripPlaceholders(en),
}

/** 取当前语言的全部文案。 */
export function useContent(): Content {
  return contentByLang[useLang()]
}
