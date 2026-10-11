import { Link } from 'react-router-dom'
import { useContent } from '../data/content'
import { useHref } from '../i18n/locale'
import VentureCard from '../components/VentureCard'

export default function VenturePage() {
  const c = useContent()
  const href = useHref()
  const { ui } = c
  return (
    <>
      <header className="page-head">
        <div className="shell">
          <p className="eyebrow">{c.ventureHead.eyebrow}</p>
          <h2 className="page-title">{c.ventureHead.title}</h2>
          <p className="page-lede">{c.ventureHead.lede}</p>
        </div>
      </header>

      <section className="section">
        <div className="shell">
            {/* 四个项目排 2×2（原为三列，加进第四个后会变成 3+1） */}
            <div className="grid grid--venture">
            {c.ventures.map((v) => (
              <VentureCard key={v.slug} venture={v} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          {/* 合作小卡片：欢迎一起创造 + 一个联系方式入口（与首页同一张） */}
          <div className="callout callout--mini">
            <p className="eyebrow">{c.dataRoom.eyebrow}</p>
            <h2 className="callout-title">{c.dataRoom.title}</h2>
            <p className="callout-body">{c.dataRoom.body}</p>
            <Link className="btn" to={href('/about#contact')}>
              {ui.contactCta}
            </Link>
          </div>
          <p className="section-lede" style={{ marginTop: 'var(--s-5)' }}>
            {c.ventureNote}
          </p>
        </div>
      </section>
    </>
  )
}
