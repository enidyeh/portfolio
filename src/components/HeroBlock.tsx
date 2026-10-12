import { asset } from '../lib/base'
import AvatarConsole from './AvatarConsole'

/**
 * 首页首屏 HERO：一条完整 16:9 的背景视频 + 一个对话框。
 *
 * 2026-10-13 按本人要求：视频按自身比例整幅展示（不再裁切），左右两边直接贴齐
 * 页面左右；主标题与定位句已删除，只留对话框。
 * 2026-10-13 追加：电脑版（≥901px）对话框浮在视频右上角（见 site.css 末尾那段），
 * 窄屏仍是视频在上、对话框在下面的流式排版。DOM 结构不变，只靠 CSS 定位。
 * 背景视频：public/hero-bg.mp4，封面帧：public/hero-bg-poster.jpg。
 */
export default function HeroBlock() {
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
          <AvatarConsole variant="inline" />
        </div>
      </div>
    </section>
  )
}
