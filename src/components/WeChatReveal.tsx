import { useEffect, useId, useRef, useState } from 'react'
import { useContent } from '../data/content'

/**
 * 微信：点一下就地弹出二维码。
 * 二维码图片本人还没提供，先用虚线占位框 —— 拿到图之后把 `.wx-qr` 里的占位文字
 * 换成 <img className="wx-img" src={asset('wechat-qr.png')} alt="" /> 即可。
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
          <span className="wx-qr">
            <span>{c.ui.wxQrPending}</span>
          </span>
          <span className="wx-note">{c.ui.wxQrNote}</span>
        </span>
      ) : null}
    </span>
  )
}
