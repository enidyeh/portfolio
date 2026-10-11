import { Link } from 'react-router-dom'
import type { Venture } from '../data/ventures'
import { useContent } from '../data/content'
import { useHref } from '../i18n/locale'

export default function VentureCard({
  venture,
  layout = 'card',
}: {
  venture: Venture
  /** row：首页「正在创造」的竖排列表；card：列表页的三列卡片 */
  layout?: 'card' | 'row'
}) {
  const c = useContent()
  const href = useHref()
  const { ui } = c
  // 英文站上 name 与 en 是同一个词（如 REVERIE），重复显示没意义
  const showEn = venture.en !== venture.name

  if (layout === 'row') {
    return (
      <Link className="vrow" to={href(`/venture/${venture.slug}`)}>
        <span className="vrow-media">
          <span className="ph">{ui.phImage}</span>
        </span>
        <span className="vrow-body">
          <span className="vrow-title">{venture.name}</span>
          <span className="vrow-meta">
            {showEn ? `${venture.en} · ` : ''}
            {venture.status}
          </span>
          <span className="vrow-desc">{venture.oneLiner}</span>
        </span>
        <span className="vrow-arrow" aria-hidden="true">
          →
        </span>
      </Link>
    )
  }

  return (
    <Link className="card" to={href(`/venture/${venture.slug}`)}>
      <span className="card-media">
        <span className="ph">{ui.phImage}</span>
      </span>
      <h3 className="card-title">{venture.name}</h3>
      <div className="card-top">
        {showEn ? <span className="card-meta">{venture.en}</span> : <span />}
        <span className="status">{venture.status}</span>
      </div>
      <p className="card-desc">{venture.oneLiner}</p>
      <div className="card-tags">
        {venture.tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </Link>
  )
}
