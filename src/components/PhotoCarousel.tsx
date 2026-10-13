import { useEffect, useMemo, useState } from 'react'
import Pending from './Pending'

/**
 * 照片轮播：把 `src/assets/photos/` 里的图片自动全部读进来（按文件名排序）。
 *
 * ⚠️ 放照片的步骤：把图片文件直接丢进 `src/assets/photos/`（jpg / png / webp / avif 都行），
 * 然后 `npm run build`（或 dev 下刷新即可）。**不需要改任何代码**：
 * 文件夹为空时这里自动退回原来的虚线占位块。
 *
 * 想控制顺序，就把文件名改成 01、02、03… 前缀。
 */
const modules = import.meta.glob('../assets/photos/*.{webp,WEBP,jpg,JPG,jpeg,JPEG,png,PNG,avif,AVIF}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

/** 单独调取景的照片：键是文件名前面的序号（如 05），值是 object-position。
 *  不写就用 CSS 里 .photo-slide 的默认值。
 *  2026-10-13 本人要求：带圆形耳环的大头照（06）和多人合照（05）再往上一点。 */
const PHOTO_POS: Record<string, string> = {
  '05': 'center 15%',
  '06': 'center 15%',
}

const photos = Object.keys(modules)
  .sort((a, b) => a.localeCompare(b, 'zh-Hans-CN', { numeric: true }))
  .map((key) => ({
    src: modules[key],
    pos: PHOTO_POS[key.match(/(\d+)\.[a-z]+$/i)?.[1] ?? ''] ?? undefined,
  }))

export default function PhotoCarousel({ pendingLabel }: { pendingLabel: string }) {
  const [index, setIndex] = useState(0)
  const count = photos.length

  /** 自动播放：每 4.5 秒换一张（只有一张时不启动） */
  useEffect(() => {
    if (count < 2) return
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % count), 4500)
    return () => window.clearInterval(timer)
  }, [count])

  const dots = useMemo(() => Array.from({ length: Math.max(count, 3) }, (_, i) => i), [count])

  // 还没有照片：保持原来的占位块，等图片放进 src/assets/photos/
  if (count === 0) {
    return (
      <div className="photo-ph">
        <Pending>{pendingLabel}</Pending>
        <span className="photo-ph-dots" aria-hidden="true">
          <span className="photo-ph-dot is-on" />
          <span className="photo-ph-dot" />
          <span className="photo-ph-dot" />
        </span>
      </div>
    )
  }

  return (
    <div className="photo-carousel">
      {photos.map((photo, i) => (
        <img
          key={photo.src}
          className={i === index ? 'photo-slide is-active' : 'photo-slide'}
          src={photo.src}
          alt=""
          loading={i === 0 ? 'eager' : 'lazy'}
          decoding="async"
          aria-hidden={i === index ? undefined : true}
          style={photo.pos ? { objectPosition: photo.pos } : undefined}
        />
      ))}

      {count > 1 ? (
        <>
          <button
            type="button"
            className="photo-arrow photo-arrow--prev"
            aria-label="上一张"
            onClick={() => setIndex((i) => (i - 1 + count) % count)}
          >
            ‹
          </button>
          <button
            type="button"
            className="photo-arrow photo-arrow--next"
            aria-label="下一张"
            onClick={() => setIndex((i) => (i + 1) % count)}
          >
            ›
          </button>
        </>
      ) : null}

      <span className="photo-ph-dots photo-dots--overlay" aria-hidden="true">
        {dots.map((i) => (
          <span key={i} className={i === index ? 'photo-ph-dot is-on' : 'photo-ph-dot'} />
        ))}
      </span>
    </div>
  )
}
