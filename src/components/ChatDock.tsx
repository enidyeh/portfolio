import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useContent } from '../data/content'
import AvatarConsole from './AvatarConsole'

function ChatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M21 12a8 8 0 0 1-8 8H8l-5 3 1.4-4.2A8 8 0 1 1 21 12Z" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  )
}

/**
 * 页头「数字分身」入口：就放在「资料下载」旁边的小圆球。
 * 内容为本地预设演示（见 `data/avatar.ts`），不是真实 AI。
 * 面板与下载浮窗同一套行为：Esc、点外面、切路由都会关掉 —— 不然两个浮层会叠在一起。
 */
export default function ChatDock() {
  // 存「打开时所处的路由 key」而不是布尔值：一旦跳转（含锚点）自动收起，不会挡住目标内容。
  const [openFor, setOpenFor] = useState<string | null>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const open = openFor === location.key
  const { ui } = useContent()

  useEffect(() => {
    if (!open) return
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpenFor(null)
    }
    function onPointer(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpenFor(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onPointer)
    }
  }, [open])

  return (
    <div className="chat-dock" ref={rootRef}>
      {open ? (
        <div className="chat-panel" role="dialog" aria-label={ui.dockPanelAria}>
          <div className="chat-head">
            <span className="chat-title">{ui.dockTitle}</span>
            <button
              type="button"
              className="chat-close"
              aria-label={ui.dockCloseAria}
              onClick={() => setOpenFor(null)}
            >
              <CloseIcon />
            </button>
          </div>
          <AvatarConsole />
        </div>
      ) : null}

      <button
        type="button"
        className="chat-ball"
        aria-label={open ? ui.dockCollapseAria : ui.dockOpenAria}
        aria-expanded={open}
        onClick={() => setOpenFor(open ? null : location.key)}
      >
        {open ? <CloseIcon /> : <ChatIcon />}
      </button>
    </div>
  )
}
