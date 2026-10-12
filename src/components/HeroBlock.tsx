import { Link } from 'react-router-dom'
import { asset } from '../lib/base'
import { useContent } from '../data/content'
import { useHref } from '../i18n/locale'
import AvatarConsole from './AvatarConsole'

/**
 * 首页首屏 HERO：一条完整 16:9 的视频 + 一个对话框。
 *
 * 2026-10-13 按本人要求：视频按自身比例整幅展示（不再裁切），主标题与定位句已删除。
 * 2026-10-13 追加（本人要求）：
 *   ① 电脑版把对话框浮到视频右上角（样式在 site.css 文末那段，DOM 不变）；
 *   ② 视频画面里本来就画着几处 UI（左侧人物卡、右下角两颗圆钮），
 *      这里压一层透明热区让它们可点：人物卡 → 精选项目；
 *      右下角左边那颗（档案/人物）→ 个人介绍；右边那颗（礼物）→ 正在创造。
 *      坐标是按视频帧量出来的，见 site.css 里 .hero-spot--* 的百分比。
 * 视频：public/hero-bg.mp4（由 ~/AI/10月13日(1).mp4 转码），封面帧：public/hero-bg-poster.jpg。
 */
export default function HeroBlock() {
  const { ui } = useContent()
  const href = useHref()

  return (
    <section className="hero">
      <div className="hero-stage">
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
        {/* 与视频画面对齐的透明热区（视频本身没有可点能力，这里补上） */}
        <div className="hero-spots">
          <Link className="hero-spot hero-spot--work" to={href('/work')} aria-label={ui.navWork} />
          <Link className="hero-spot hero-spot--about" to={href('/about')} aria-label={ui.navAbout} />
          <Link
            className="hero-spot hero-spot--venture"
            to={href('/venture')}
            aria-label={ui.navVenture}
          />
        </div>
        <div className="shell hero-grid">
          <div className="hero-main">
            <AvatarConsole variant="inline" />
          </div>
        </div>
      </div>
    </section>
  )
}
