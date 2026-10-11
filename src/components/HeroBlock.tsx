import { useState, type CSSProperties } from 'react'
import { useContent } from '../data/content'
import { asset } from '../lib/base'
import AvatarConsole from './AvatarConsole'
import AvatarFigure from './AvatarFigure'

/** 手机端（≤900px）：人物视频排在最上方（CSS `order: -1`），只播一遍；
 *  播完高度收到 0，标题与下面的内容直接接上来。桌面端视频在右列、循环播放、永不收起。 */
function isMobileLayout() {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 900px)').matches
}

/** 首页首屏 HERO：主标题 + 定位句 + 对话框 + 三按钮 + 人物视频。
 *  2026-10-11 起**只用于首页** —— 内页那条「三按钮 + 城市背景图」的简化版已整块移除，
 *  所以这里不再有 variant 参数（`/work`、`/venture`、`/about` 直接从正文开始）。
 *  注意：定位行与四个支点标签已按用户要求删除，不要加回来。 */
export default function HeroBlock() {
  const [mobile] = useState(isMobileLayout)
  const [figureGone, setFigureGone] = useState(false)

  const c = useContent()

  return (
    <section
      className="hero"
      data-figure-gone={figureGone ? 'true' : undefined}
      /* 首屏背景图路径带部署前缀（见 lib/base.ts），CSS 里写不了 BASE_URL */
      style={{ '--hero-image': `url(${asset('hero-bg.webp')})` } as CSSProperties}
    >
      <div className="shell hero-grid">
        <div className="hero-main">
          <h1 className="hero-title">{c.profile.headline}</h1>
          {c.profile.lede ? <p className="hero-statement">{c.profile.lede}</p> : null}
          <AvatarConsole variant="inline" />
        </div>

        <aside className={figureGone ? 'hero-aside is-collapsed' : 'hero-aside'}>
          <AvatarFigure onEnded={mobile ? () => setFigureGone(true) : undefined} />
        </aside>
      </div>
    </section>
  )
}
