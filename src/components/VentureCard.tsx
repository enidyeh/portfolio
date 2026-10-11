import { Link } from 'react-router-dom'
import type { Venture } from '../data/ventures'
import { useContent } from '../data/content'
import { useHref } from '../i18n/locale'

/** 方形配图：有图就显示图，没图保留占位块（两个版式共用）。
 *  父级 .vrow-media / .card-media 都是 position: relative，徽标直接叠在图片右上角。 */
function VentureMedia({ venture }: { venture: Venture }) {
  const c = useContent()
  return (
    <>
      {venture.image ? (
        <img className="work-media" src={venture.image} alt="" loading="lazy" decoding="async" />
      ) : (
        <span className="ph">{c.ui.phImage}</span>
      )}
      {venture.badge ? <span className="venture-badge">{venture.badge}</span> : null}
    </>
  )
}

export default function VentureCard({
  venture,
  layout = 'card',
}: {
  venture: Venture
  /** row：首页「正在创造」的竖排列表；card：列表页的三列卡片 */
  layout?: 'card' | 'row'
}) {
  const href = useHref()
  // 中文名里已经带了英文名（如「异想集 REVERIE」）就不再重复挂一个英文标签
  const showEn = !venture.name.includes(venture.en)

  if (layout === 'row') {
    return (
      <Link className="vrow" to={href(`/venture/${venture.slug}`)}>
        <span className="vrow-media">
          <VentureMedia venture={venture} />
        </span>
        <span className="vrow-body">
          {/* 读序：项目名 → 一句话定位 → 小标签。
              2026-10-12 按本人要求：原来的红色状态胶囊去掉，内容改成下面这组小标签；
              首页这一行的小标签用浅红底 + 红字（.tag--accent）。 */}
          <span className="vrow-title">{venture.name}</span>
          <span className="vrow-desc">{venture.oneLiner}</span>
          <span className="vrow-tags">
            {venture.tags.map((t) => (
              <span key={t} className="tag tag--accent">
                {t}
              </span>
            ))}
          </span>
        </span>
        <span className="vrow-arrow" aria-hidden="true">
          →
        </span>
      </Link>
    )
  }

  return (
    <Link className="card" to={href(`/venture/${venture.slug}`)}>
      {/* 列表页卡片用 16:9（与精选项目子页面一致）；首页那一行保持方形（.vrow-media） */}
      <span className="card-media">
        <VentureMedia venture={venture} />
      </span>
      <h3 className="card-title">{venture.name}</h3>
      {showEn ? <span className="card-meta">{venture.en}</span> : null}
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
