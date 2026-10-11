import { createContext, useContext } from 'react'
import { withLangPrefix, type Lang } from './lang'

export type LocaleValue = {
  lang: Lang
  /** 给站内链接加语言前缀：`/work` → 中文站 `/work`、英文站 `/en/work`。 */
  href: (path: string) => string
}

export const LocaleContext = createContext<LocaleValue>({
  lang: 'zh',
  href: (path: string) => withLangPrefix('zh', path),
})

export function useLocale(): LocaleValue {
  return useContext(LocaleContext)
}

export function useLang(): Lang {
  return useContext(LocaleContext).lang
}

export function useHref(): (path: string) => string {
  return useContext(LocaleContext).href
}
