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
        </span>
      </div>
    )
  }

  // card：首页与列表页的 2×2 卡片。
  // 2026-10-12 按本人要求：图片就是「小红书主页」的卡片式入口（点图跳小红书），
  // 标题/文案仍然进项目详情；灰色的「小红书主页」角标撤掉，
  // 圆角红色的「关注」按钮从卡片右下角移到配图右上角并放大。
  return (
    <div className="card card--venture">
      <span className="card-media">
        {venture.xhs ? (
          <a
            className="card-media-link"
            href={venture.xhs}
            target="_blank"
            rel="noreferrer"
            aria-label={`${venture.name} ${ui.xhsCardLabel}`}
          >
            <VentureMedia venture={venture} />
          </a>
        ) : (
          <VentureMedia venture={venture} />
        )}
        {venture.xhs ? (
          <a
            className="follow-btn follow-btn--media"
            href={venture.xhs}
            target="_blank"
            rel="noreferrer"
          >
            {ui.followCta}
          </a>
        ) : null}
      </span>
      <h3 className="card-title">
        <Link className="card-title-link" to={href(`/venture/${venture.slug}`)}>
          {venture.name}
        </Link>
      </h3>
      {showEn ? <span className="card-meta">{venture.en}</span> : null}
      <p className="card-desc">{venture.oneLiner}</p>
      <div className="card-foot">
        <div className="card-tags">
          {venture.tags.map((t) => (
            <span key={t} className="tag tag--accent">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
