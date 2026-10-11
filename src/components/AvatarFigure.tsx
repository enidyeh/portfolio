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

export default function AvatarFigure({ onEnded }: { onEnded?: () => void }) {
  const [alphaReady, setAlphaReady] = useState(useTransparentFigure)
  const alpha = useTransparentFigure && alphaReady
  const syncAlpha = (event: SyntheticEvent<HTMLVideoElement>) =>
    setAlphaReady(event.currentTarget.currentSrc.includes('hero-figure'))

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
        onLoadedMetadata={(event) => {
          syncAlpha(event)
          keepOffset(event)
        }}
        onLoadedData={syncAlpha}
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
