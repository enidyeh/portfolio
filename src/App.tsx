import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import LocaleProvider from './i18n/LocaleProvider'
import { langFromPath } from './i18n/lang'
import LangBoot from './i18n/LangBoot'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import ChatDock from './components/ChatDock'
import HomePage from './pages/HomePage'
import WorkPage from './pages/WorkPage'
import WorkDetailPage from './pages/WorkDetailPage'
import VenturePage from './pages/VenturePage'
import VentureDetailPage from './pages/VentureDetailPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

/** 路由切换时回到页首；带 hash 时滚动到对应锚点（简历入口会用）。 */
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

/** 同一套页面挂在两棵路由树下：`/` 中文、`/en` 英文。 */
const siteRoutes = (
  <>
    <Route index element={<HomePage />} />
    <Route path="work" element={<WorkPage />} />
    <Route path="work/:slug" element={<WorkDetailPage />} />
    <Route path="venture" element={<VenturePage />} />
    <Route path="venture/:slug" element={<VentureDetailPage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </>
)

export default function App() {
  const { pathname } = useLocation()
  const lang = langFromPath(pathname)

  return (
    <LocaleProvider lang={lang}>
      <div className="app">
        <LangBoot />
        <ScrollToTop />
        <SiteHeader />
        <main id="main" className="main">
          <Routes>
            <Route path="/en">{siteRoutes}</Route>
            <Route path="/">{siteRoutes}</Route>
          </Routes>
        </main>
        <SiteFooter />
        {/* 数字分身：右下角悬浮球（2026-10-12 从页头挪回来） */}
        <ChatDock />
      </div>
    </LocaleProvider>
  )
}
