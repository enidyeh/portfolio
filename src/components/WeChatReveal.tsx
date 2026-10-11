import { useEffect, useId, useRef, useState } from 'react'
import { useContent } from '../data/content'
import { asset } from '../lib/base'

/**
 * 微信：点一下就地弹出二维码（`public/wechat-qr.png`，本人 2026-10-12 提供）。
 * 点面板外面或按 Esc 收起。
 */
export default function WeChatReveal({ handle, prefix }: { handle: string; prefix?: string }) {
  const c = useContent()
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLSpanElement>(null)
  const id = useId()

  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <span className="wx" ref={wrapRef}>
      <button
        type="button"
        className="wx-trigger"
        aria-expanded={open}
        aria-controls={open ? id : undefined}
        onClick={() => setOpen((value) => !value)}
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
