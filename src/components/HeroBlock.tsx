import { useEffect, useRef, useState } from 'react'
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
  const videoRef = useRef<HTMLVideoElement>(null)

  /* 手机用更小的文件（960 宽 / 约 200KB；桌面版 1.2MB）——
     蜂窝网络下小文件起播快得多，不容易出现「停在封面帧看着像卡住」。 */
  const [videoSrc] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(max-width: 760px)').matches
      ? asset('hero-bg-mobile.mp4')
      : asset('hero-bg.mp4'),
  )
  /* iOS 低电量模式 / 省流量模式会直接拒绝自动播放（或视频加载失败）——
     这时露出一颗「点击播放」，用户点一下就能播，而不是看着像卡住。 */
  const [needsTap, setNeedsTap] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const kick = () => {
      v.muted = true
      const p = v.play()
      if (p && typeof p.catch === 'function') p.catch(() => {})
    }
    kick()
    v.addEventListener('loadedmetadata', kick)
    v.addEventListener('loadeddata', kick)
    v.addEventListener('canplay', kick)
    /* iOS 低电量模式必须由手势触发；任何一次点击 / 触摸都再试一下 */
    document.addEventListener('pointerdown', kick)
    document.addEventListener('touchstart', kick)
    document.addEventListener('visibilitychange', kick)
    /* iOS 从往返缓存（bfcache）回到页面时会把视频暂停，这里补一次 */
    window.addEventListener('pageshow', kick)
    /* 2.5 秒还没播起来 → 认定被策略拦住了，露「点击播放」按钮 */
    const timer = window.setTimeout(() => {
      if (v.paused) setNeedsTap(true)
    }, 2500)
    return () => {
      v.removeEventListener('loadedmetadata', kick)
      v.removeEventListener('loadeddata', kick)
      v.removeEventListener('canplay', kick)
      document.removeEventListener('pointerdown', kick)
      document.removeEventListener('touchstart', kick)
      document.removeEventListener('visibilitychange', kick)
      window.removeEventListener('pageshow', kick)
      window.clearTimeout(timer)
    }
  }, [videoSrc])

  return (
    <section className="hero">
      <div className="hero-stage">
        <video
          ref={videoRef}
          className="hero-video"
          src={videoSrc}
          poster={asset('hero-bg-poster.jpg')}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disableRemotePlayback
          aria-hidden="true"
          onPlaying={() => setNeedsTap(false)}
          onError={() => setNeedsTap(true)}
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
        {/* 被系统拦下自动播放（iOS 低电量 / 省流量模式）时露出的兜底按钮 */}
        {needsTap ? (
          <button
            type="button"
            className="hero-play"
            onClick={() => {
              setNeedsTap(false)
              const v = videoRef.current
              if (!v) return
              v.muted = true
              const p = v.play()
              if (p && typeof p.catch === 'function') p.catch(() => setNeedsTap(true))
            }}
          >
            <span aria-hidden="true">▶</span>
            {ui.tapToPlay}
          </button>
        ) : null}
        <div className="shell hero-grid">
          <div className="hero-main">
            <AvatarConsole variant="inline" />
          </div>
        </div>
      </div>
    </section>
  )
}
