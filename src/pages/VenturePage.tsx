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
      {/* 页头：2026-10-12 按本人要求删掉「正在创造」小标题与下面那条分割线 */}
      <header className="page-head page-head--flat">
        <div className="shell">
          <h2 className="page-title">{c.ventureHead.title}</h2>
          <p className="page-lede">{c.ventureHead.lede}</p>
        </div>
      </header>

      {/* 卡片区：2026-10-12 按本人要求，这一段不再画下边框
          —— 否则会正好落在下面合作卡片的上面，看起来像一条多余的线 */}
      <section className="section section--no-rule">
        <div className="shell">
            {/* 四个项目排 2×2（原为三列，加进第四个后会变成 3+1） */}
            <div className="grid grid--venture">
            {c.ventures.map((v) => (
              <VentureCard key={v.slug} venture={v} />
            ))}
          </div>
        </div>
      </section>

      {/* 合作卡片单独一段：2026-10-12 按本人要求去掉它上面那条分割线
          （.section 默认带下边框，这里用 .section--callout 关掉） */}
      <section className="section section--callout">
        <div className="shell">
          <div className="callout callout--mini">
            <p className="callout-title">{c.dataRoom.text}</p>
            <Link className="btn" to={href('/about#contact')}>
              {ui.contactCta}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
