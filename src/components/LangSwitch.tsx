import { Link, useLocation } from 'react-router-dom'
import { LANG_STORAGE_KEY, stripLangPrefix, withLangPrefix, type Lang } from '../i18n/lang'
import { useLocale } from '../i18n/locale'
import { useContent } from '../data/content'

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.6 2.6 3.9 5.6 3.9 9s-1.3 6.4-3.9 9c-2.6-2.6-3.9-5.6-3.9-9S9.4 5.6 12 3Z" />
    </svg>
  )
}

/**
 * 语言切换：站内跳到「同一页面的另一种语言」，网址前缀自动带 /en。
 * 选择记在 localStorage，只影响首次访问时的自动判定，之后以网址为准。
 */
export default function LangSwitch() {
  const { lang } = useLocale()
  const { ui } = useContent()
  const { pathname, search, hash } = useLocation()

  const other: Lang = lang === 'zh' ? 'en' : 'zh'
  const to = withLangPrefix(other, stripLangPrefix(pathname)) + search + hash

  return (
    <Link
      className="lang-switch"
      to={to}
      aria-label={ui.langSwitchAria}
      hrefLang={other === 'zh' ? 'zh-CN' : 'en'}
      onClick={() => {
        try {
          localStorage.setItem(LANG_STORAGE_KEY, other)
        } catch {
          /* 隐私模式下写不进也没关系 */
        }
      }}
    >
      <GlobeIcon />
      <span>{ui.langSwitchLabel}</span>
    </Link>
  )
}
