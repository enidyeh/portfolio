import { useState, type SyntheticEvent } from 'react'
import { transparentFigureSources, useTransparentFigure } from '../data/media'
import { asset } from '../lib/base'

/**
 * 首屏人物视频。
 * · 桌面端：静音循环播放，一直留在右侧。
 * · 手机端：只播一遍，播完触发 `onEnded`，由首页把这一块收起，下面内容接上来。
 *
 * 素材是**去白边重制过的 HEVC with alpha**（见 `data/media.ts` 里的说明）。
 * 不支持 HEVC 的浏览器会回退到旧的白底视频，这时要**把 multiply 加回来**
 * —— `figure--alpha` 只在真加载了透明底素材时才加。
 *
 * ⚠️ alphaReady 初值取 `useTransparentFigure`（乐观），不是 `false`：
 * 初值为 false 时，首帧会先把透明视频当白底素材走 multiply，等 `loadedmetadata`
 * 回来才切掉，切之前会闪一下。另外要在 `loadedmetadata` 就判断，不能只靠 `loadeddata`。
 *
 * 纯装饰，对辅助技术隐藏。
 */
/**
 * 起播偏移（秒）。2026-10-12 按本人要求：人物视频整体「提前」0.5 秒起播 ——
 * 也就是跳过开头那 0.5 秒，从 0.5s 处开始放，这样人物的动作和背景就对得上了。
 * 要调方向或幅度，只改这个常数（设 0 就是原来的从 0 开始播）。
 */
const FIGURE_START_OFFSET = 0.5

/**
 * 判断这份素材在当前浏览器里 **alpha 到底有没有生效**，用「画一帧到 canvas 再读角落像素」
 * 的实测办法，而不是特征探测（`canPlayType` 会说谎：Chrome 声称不支持 hvc1，实际能正常
 * 渲染 alpha；反过来也有浏览器装得下却把 alpha 丢掉）。
 *
 * ⚠️ 2026-10-12 用户反馈「小人背景有白色」就是后者：alpha 被丢掉时，透明区那层近白
 * RGB 会被当作不透明画出来，成一块白底。这里实测不到 alpha 就**保留 multiply**，
 * 让白底融进背景（人物略微变淡，但不会是一块白块）。
 * 角落 alpha < 40 才算真的透明。
 */
function probeAlpha(video: HTMLVideoElement): boolean {
  try {
    const w = video.videoWidth
    const h = video.videoHeight
    if (!w || !h) return false
    const canvas = document.createElement('canvas')
    canvas.width = w
    canvas.height = h
    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    if (!ctx) return false
    ctx.clearRect(0, 0, w, h)
    ctx.drawImage(video, 0, 0, w, h)
    return ctx.getImageData(3, 3, 1, 1).data[3] < 40
  } catch {
    return false
  }
}

export default function AvatarFigure({ onEnded }: { onEnded?: () => void }) {
  const [alphaReady, setAlphaReady] = useState(useTransparentFigure)
  const alpha = useTransparentFigure && alphaReady
  /** 命中透明素材 **且** 实测角落确实透明，才关掉 multiply（首帧有画面后才判：loadeddata） */
  const syncAlpha = (event: SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget
    setAlphaReady(video.currentSrc.includes('hero-figure') && probeAlpha(video))
  }

  /** 让播放头从 FIGURE_START_OFFSET 开始：起播时跳一次，循环回到开头时再跳一次 */
  const keepOffset = (event: SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget
    if (!FIGURE_START_OFFSET || video.paused) return
    const { currentTime, duration } = video
    if (duration && currentTime < FIGURE_START_OFFSET) {
      video.currentTime = FIGURE_START_OFFSET
    }
  }

  return (
    <div className={alpha ? 'figure figure--alpha' : 'figure'}>
      <video
        className="figure-media"
        poster={useTransparentFigure ? undefined : asset('avatar-poster.webp')}
        width={506}
        height={900}
        autoPlay
        muted
        loop={!onEnded}
        playsInline
        preload="auto"
        aria-hidden="true"
        onLoadedMetadata={keepOffset}
        onLoadedData={syncAlpha}
        onCanPlay={syncAlpha}
        onPlaying={keepOffset}
        onTimeUpdate={keepOffset}
        onEnded={onEnded}
      >
        {useTransparentFigure ? (
          transparentFigureSources.map((s) => (
            <source key={s.src} src={s.src} type={s.type} />
          ))
        ) : (
          /* ⚠️ 必须过 asset()：站点部署在 /portfolio/ 子路径下，写死 /avatar.mp4 会 404 */
          <source src={asset('avatar.mp4')} type="video/mp4" />
        )}
      </video>
    </div>
  )
}
