import { NavLink, Link } from 'react-router-dom'
import { useContent } from '../data/content'
import { useHref, useLang } from '../i18n/locale'
import DownloadMenu from './DownloadMenu'
import LangSwitch from './LangSwitch'

export default function SiteHeader() {
  const c = useContent()
  const lang = useLang()
  const href = useHref()
  const { ui } = c

  const nav = [
    { to: '/work', label: ui.navWork },
    { to: '/venture', label: ui.navVenture },
    { to: '/about', label: ui.navAbout },
  ]

  return (
    <header className="site-header">
      <div className="shell site-header-inner">
        <div className="brand-group">
          <Link to={href('/')} className="brand" aria-label={ui.brandAria}>
            <span className="brand-mark">{c.profile.wordmark}</span>
          </Link>
          <LangSwitch />
        </div>
        <nav className="nav" aria-label={ui.navAria}>
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={href(item.to)}
              className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')}
            >
              <span className={lang === 'zh' ? 'nav-zh' : 'nav-en'}>{item.label}</span>
            </NavLink>
          ))}
          <DownloadMenu />
        </nav>
      </div>
    </header>
  )
}
