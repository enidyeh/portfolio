// 双语站点的语言定义与网址规则。
// 约定：`/` = 中文，`/en` = 英文。每种语言有独立网址，方便单独分享与刷新。
// 中文是兜底语言：任何无法判断的情况都回到中文。

export type Lang = 'zh' | 'en'

export const LANGS: readonly Lang[] = ['zh', 'en'] as const

/** 首次访问时把用户的选择记在这里；之后以网址为准。 */
export const LANG_STORAGE_KEY = 'enid.lang'

const EN_PREFIX = '/en'

/** 当前网址属于哪种语言。 */
export function langFromPath(pathname: string): Lang {
  return pathname === EN_PREFIX || pathname.startsWith(EN_PREFIX + '/') ? 'en' : 'zh'
}

/** 去掉语言前缀：`/en/work` → `/work`；`/en` → `/`。 */
export function stripLangPrefix(pathname: string): string {
  if (pathname === EN_PREFIX) return '/'
  if (pathname.startsWith(EN_PREFIX + '/')) return pathname.slice(EN_PREFIX.length)
  return pathname
}

/** 加上语言前缀：('en', '/work') → `/en/work`；('zh', '/work') → `/work`。 */
export function withLangPrefix(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : '/' + path
  if (lang === 'zh') return clean
  return clean === '/' ? EN_PREFIX : EN_PREFIX + clean
}

/** 浏览器偏好的语言，中文兜底。 */
export function preferredLang(): Lang {
  if (typeof navigator === 'undefined') return 'zh'
  const list = [...(navigator.languages ?? []), navigator.language].filter(Boolean)
  const first = (list[0] ?? '').toLowerCase()
  if (!first) return 'zh'
  return first.startsWith('zh') ? 'zh' : 'en'
}
