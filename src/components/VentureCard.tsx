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
  const { ui } = useContent()
  // 中文名里已经带了英文名（如「异想集 REVERIE」）就不再重复挂一个英文标签
  const showEn = !venture.name.includes(venture.en)

  if (layout === 'row') {
    // 外层是 div 不是 Link：右边要放一个跳小红书的「关注」按钮，
    // <a> 里不能套 <a>。整行的 hover 效果挂在 .vrow 上，点正文仍然进详情页。
    return (
      <div className="vrow">
        <Link className="vrow-main" to={href(`/venture/${venture.slug}`)}>
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
        </Link>
        <span className="vrow-side">
          {venture.xhs ? (
            <a className="follow-btn" href={venture.xhs} target="_blank" rel="noreferrer">
              {ui.followCta}
            </a>
          ) : null}
          <span className="vrow-arrow" aria-hidden="true">
            →
          </span>
        </span>
      </div>
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
      {/* 小标签统一用浅红底 + 红字，和首页「正在创造」那一行同一套观感 */}
      <div className="card-tags">
        {venture.tags.map((t) => (
          <span key={t} className="tag tag--accent">
            {t}
          </span>
        ))}
      </div>
    </Link>
  )
}
