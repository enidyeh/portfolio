import { useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { useContent } from '../data/content'
import { useHref } from '../i18n/locale'
import { asset } from '../lib/base'
import AvatarConsole from './AvatarConsole'
import AvatarFigure from './AvatarFigure'

/** 手机端（≤900px）：人物视频排在最上方（CSS `order: -1`），只播一遍；
 *  播完高度收到 0，标题与下面的内容直接接上来。桌面端视频在右列、循环播放、永不收起。 */
function isMobileLayout() {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 900px)').matches
}

/** 首屏 HERO。
 *  - `full`（默认，首页）：英文主标题 + 中文定位句 + 对话框 + 三按钮 + 人物视频
 *  - `compact`（/work、/venture、/about）：只保留三个按钮
 *    提问框 2026-10-11 按用户要求从子页面撤下 —— 只留在首页（页头那颗浮球全站都在）。
 *  注意：定位行与四个支点标签已按用户要求删除，不要加回来。 */
export default function HeroBlock({ variant = 'full' }: { variant?: 'full' | 'compact' }) {
  const [mobile] = useState(isMobileLayout)
  const [figureGone, setFigureGone] = useState(false)
  const full = variant === 'full'

  const c = useContent()
  const href = useHref()
  const { ui } = c

  return (
    <section
      className={full ? 'hero' : 'hero hero--compact'}
      data-figure-gone={figureGone ? 'true' : undefined}
      /* 首屏背景图路径带部署前缀（见 lib/base.ts），CSS 里写不了 BASE_URL */
      style={{ '--hero-image': `url(${asset('hero-bg.webp')})` } as CSSProperties}
    >
      <div className="shell hero-grid">
        <div className="hero-main">
          {full ? (
            <>
              <h1 className="hero-title">{c.profile.headline}</h1>
              {c.profile.lede ? <p className="hero-statement">{c.profile.lede}</p> : null}
              <AvatarConsole variant="inline" />
            </>
          ) : null}

          <div className="hero-actions">
            <Link className="btn btn--primary" to={href('/work')}>
              {ui.ctaWork}
            </Link>
            <Link className="btn" to={href('/venture')}>
              {ui.ctaVenture}
            </Link>
            <Link className="btn" to={href('/about#resume')}>
              {ui.ctaResume}
            </Link>
          </div>
        </div>

        {full ? (
          <aside className={figureGone ? 'hero-aside is-collapsed' : 'hero-aside'}>
            <AvatarFigure onEnded={mobile ? () => setFigureGone(true) : undefined} />
          </aside>
        ) : null}
      </div>
    </section>
  )
}
