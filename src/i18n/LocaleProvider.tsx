import { useEffect, useMemo, type ReactNode } from 'react'
import { withLangPrefix, type Lang } from './lang'
import { LocaleContext, type LocaleValue } from './locale'
import { contentByLang } from '../data/content'

/** 把当前语言挂在整棵树上。语言由网址决定（见 i18n/lang.ts）。 */
export default function LocaleProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  const value = useMemo<LocaleValue>(
    () => ({ lang, href: (path: string) => withLangPrefix(lang, path) }),
    [lang],
  )

  // 让 <html lang> 与 <title> 跟着当前语言走，读屏与搜索引擎都看这个。
  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
    document.title = contentByLang[lang].ui.pageTitle
  }, [lang])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
