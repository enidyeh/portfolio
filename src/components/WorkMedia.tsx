import { useRef, useState } from 'react'
import { useContent } from '../data/content'
import type { WorkCase } from '../data/works'

/**
 * 案例的媒体块：优先视频，其次图片，都没有就渲染调用方给的占位文字。
 *
 * 两种视频行为：
 * - 默认（案例内页）：**不自动播放**。产品视频带声，而浏览器禁止带声自动播放，
 *   所以交给用户点播放，声音正常出来 —— 注意**不能加 `muted`**。
 * - `autoplay`（首页大展示位，2026-10-12 本人要求）：自动播放，但**静音起播**
 *   （这是浏览器的硬规则，带声不可能自动播），视频右上角给一颗「开启声音」，
 *   点一下就解除静音。
 *
 * ⚠️ `preload`：自动播放必须让浏览器取数据，用 `metadata`；
 * 不自动播放时用 `none` —— 这是 55 秒 / 15 MB 的 1080p 视频，
 * 用 `metadata` 实测浏览器会把整段都拖下来（readyState 直接到 4）。
 *
 * ⚠️ `preload="none"` 时元素**没有内在尺寸**（videoWidth 为 0），
 * 不给 width/height 的话 poster 在容器里会定位错误。
 * 这里按横屏 16:9 写死；将来换竖屏素材要一起改。
 *
 * ⚠️ 带 `controls` 的视频不要塞进 `<Link>` 里：点播放/进度条会触发跳转。
 * 首页大展示位因此改成「有视频就不包链接」。卡片位只放图片，不受影响。
 */
export default function WorkMedia({
  work,
  fallback,
  autoplay = false,
}: {
  work: WorkCase
  fallback?: string
  /** 首页大展示位：静音自动播放 + 点一下开声音 */
  autoplay?: boolean
}) {
  const c = useContent()
  const videoRef = useRef<HTMLVideoElement>(null)
  /** 只在自动播放模式下有意义：true = 还是静音 */
  const [muted, setMuted] = useState(true)

  if (work.video) {
    const video = (
      <video
        ref={videoRef}
        className="work-media work-media--video"
        poster={work.video.poster}
        width={1920}
        height={1080}
        controls
        playsInline
        autoPlay={autoplay}
        loop={autoplay}
        muted={autoplay ? muted : undefined}
        preload={autoplay ? 'metadata' : 'none'}
        onVolumeChange={(event) => setMuted(event.currentTarget.muted)}
        onClick={(event) => {
          // 自动播放那套交给原生控件；这里只兜住内页「还没起播」的情况
          if (autoplay) return
          const video = event.currentTarget
          if (video.paused && video.currentTime === 0) video.play().catch(() => {})
        }}
      >
        <source src={work.video.src} type="video/mp4" />
      </video>
    )

    if (!autoplay) return video

    return (
      <span className="work-media-wrap">
        {video}
        {muted ? (
          <button
            type="button"
            className="unmute-btn"
            onClick={() => {
              const video = videoRef.current
              if (!video) return
              video.muted = false
              video.volume = 1
              setMuted(false)
            }}
          >
            {c.ui.unmuteCta}
          </button>
        ) : null}
      </span>
    )
  }

  if (work.image) {
    return <img className="work-media" src={work.image} alt="" loading="lazy" decoding="async" />
  }

  return <span className="ph">{fallback}</span>
}
