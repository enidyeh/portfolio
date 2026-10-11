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
          {/* 合作：一句话 + 右边的联系方式按钮（与首页同一张） */}
          <div className="callout callout--mini">
            <p className="callout-title">{c.dataRoom.text}</p>
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
