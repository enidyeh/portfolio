import { useEffect, useId, useRef, useState } from 'react'
import { useContent } from '../data/content'
import { asset } from '../lib/base'

/**
 * 微信：鼠标指到微信号就弹出二维码（`public/wechat-qr.png`，本人 2026-10-12 提供）。
 * 2026-10-12 按本人要求：从「点击」改成「指着就出现」，不用点。
 * 触屏没有 hover，所以点击切换依然保留；键盘 Tab 到上面也会显示。
 */
export default function WeChatReveal({ handle, prefix }: { handle: string; prefix?: string }) {
  const c = useContent()
  const [pinned, setPinned] = useState(false)
  const [hover, setHover] = useState(false)
  const wrapRef = useRef<HTMLSpanElement>(null)
  const id = useId()
  /** 指针悬停 或 点击固定住，任意一个成立就显示 */
  const open = pinned || hover

  useEffect(() => {
    if (!pinned) return
    const onPointerDown = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setPinned(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPinned(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [pinned])

  return (
    <span
      className="wx"
      ref={wrapRef}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        type="button"
        className="wx-trigger"
        aria-expanded={open}
        aria-controls={open ? id : undefined}
        onClick={() => setPinned((value) => !value)}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
      >
        {prefix}
        {handle}
      </button>
      {open ? (
        <span className="wx-pop" id={id}>
          {/* 二维码：public/wechat-qr.png（本人 2026-10-12 提供） */}
          <img className="wx-img" src={asset('wechat-qr.png')} alt="" width={640} height={640} />
          <span className="wx-note">{c.ui.wxQrNote}</span>
        </span>
      ) : null}
    </span>
  )
}
