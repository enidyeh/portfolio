import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LANG_STORAGE_KEY, langFromPath, preferredLang, withLangPrefix } from './lang'

/**
 * 首次访问的语言判定：浏览器偏好英文时，把中文网址换成对应的 `/en` 网址。
 * 只做一次 —— 用户之后手动切过语言，就以网址为准，不再自动跳。
 */
export default function LangBoot() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const done = useRef(false)

  useEffect(() => {
    if (done.current) return
    done.current = true

    let saved: string | null
    try {
      saved = localStorage.getItem(LANG_STORAGE_KEY)
    } catch {
      saved = null
    }

    const lang = saved === 'zh' || saved === 'en' ? saved : preferredLang()
    if (!saved) {
      try {
        localStorage.setItem(LANG_STORAGE_KEY, lang)
      } catch {
        /* 隐私模式下写不进也没关系 */
      }
    }

    if (lang === 'en' && langFromPath(pathname) === 'zh') {
      navigate(withLangPrefix('en', pathname) + window.location.search + window.location.hash, {
        replace: true,
      })
    }
  }, [navigate, pathname])

  return null
}
