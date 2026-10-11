import type { WorkCase } from '../data/works'

/**
 * 案例的媒体块：优先视频，其次图片，都没有就渲染调用方给的占位文字。
 *
 * 视频**不自动播放**：产品视频带声，而浏览器禁止带声自动播放，所以交给用户点播放，
 * 声音正常出来 —— 注意**不能加 `muted`**，一旦静音，点播放也不会有声音。
 * ⚠️ `preload="none"` 是刻意的：这是 55 秒 / 15 MB 的 1080p 产品视频，
 * 用 `metadata` 实测浏览器会把整段都拖下来（readyState 直接到 4）。
 * 改成 none 之后只显示 poster，点播放才开始下载。
 *
 * ⚠️ 但 `preload="none"` 时元素**没有内在尺寸**（videoWidth 为 0），
 * 不给 width/height 的话 poster 在容器里会定位错误。
 * 这里按横屏 16:9 写死；将来换竖屏素材要一起改。
 *
 * ⚠️ 带 `controls` 的视频不要塞进 `<Link>` 里：点播放/进度条会触发跳转。
 * 首页大展示位因此改成「有视频就不包链接」。卡片位只放图片，不受影响。
 *
 * ⚠️ 额外挂了一层 onClick：开始播放前，点视频任意位置都能起播。
 * 只处理「还没开始」的情况（`paused && currentTime === 0`）——
 * 这样后续点原生控件的暂停键不会被这层拦掉（否则会变成暂停又立刻播放）。
 */
export default function WorkMedia({ work, fallback }: { work: WorkCase; fallback?: string }) {
  if (work.video) {
    return (
      <video
        className="work-media work-media--video"
        poster={work.video.poster}
        width={1920}
        height={1080}
        controls
        playsInline
        preload="none"
        onClick={(event) => {
          const video = event.currentTarget
          if (video.paused && video.currentTime === 0) video.play().catch(() => {})
        }}
      >
        <source src={work.video.src} type="video/mp4" />
      </video>
    )
  }

  if (work.image) {
    return <img className="work-media" src={work.image} alt="" loading="lazy" decoding="async" />
  }

  return <span className="ph">{fallback}</span>
}
