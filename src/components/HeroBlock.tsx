import { useContent } from '../data/content'
import { asset } from '../lib/base'
import AvatarConsole from './AvatarConsole'

/**
 * 首页首屏 HERO：一条铺满首屏的背景视频 + 主标题 + 定位句 + 对话框。
 *
 * 2026-10-13 按本人要求整块简化：
 *   - 删掉全部动画（含手机端「人物视频播完就地收起」那套过渡）；
 *   - 删掉背景插画（hero-bg.webp）与左侧渐变薄纱（.hero::before）；
 *   - 删掉右侧的透明底人物视频（AvatarFigure 组件先留在仓库里，不再引用）；
 *   - 标题与对话框保持原位。
 * 背景视频：public/hero-bg.mp4，封面帧：public/hero-bg-poster.jpg。
 */
export default function HeroBlock() {
  const c = useContent()

  return (
    <section className="hero">
      <video
        className="hero-video"
        src={asset('hero-bg.mp4')}
        poster={asset('hero-bg-poster.jpg')}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="shell hero-grid">
        <div className="hero-main">
          <h1 className="hero-title">{c.profile.headline}</h1>
          {c.profile.lede ? <p className="hero-statement">{c.profile.lede}</p> : null}
          <AvatarConsole variant="inline" />
        </div>
      </div>
    </section>
  )
}
