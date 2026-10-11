import { useEffect, useId, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useContent } from '../data/content'
import { useHref, useLang } from '../i18n/locale'

/** 下载图标（内联 SVG，避免为一个图标引入依赖）。 */
function DownloadIcon() {
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
      <path d="M12 3v12" />
      <path d="M7 11l5 5 5-5" />
      <path d="M4 20h16" />
    </svg>
  )
}

/** 「按需索取」用的右箭头。 */
function ArrowIcon() {
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
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  )
}

/**
 * 页头「资料下载」浮窗：把各类文件下载入口收在一起。
 * 点击外部、按 Esc 或切换路由时自动关闭。
 */
export default function DownloadMenu() {
  // 存「打开时所处的路由」而不是布尔值：路由一变 open 自动为 false，无需 effect 同步。
  const [openFor, setOpenFor] = useState<string | null>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const panelId = useId()
  const { pathname } = useLocation()
  const open = openFor === pathname

  const c = useContent()
  const lang = useLang()
  const href = useHref()
  const { ui } = c

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

  const groups = ['简历', '项目资料'] as const

  return (
    <div className="dl" ref={rootRef}>
      <button
        type="button"
        className={open ? 'dl-trigger is-open' : 'dl-trigger'}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpenFor(open ? null : pathname)}
      >
        <span className={lang === 'zh' ? 'nav-zh' : 'nav-en'}>{ui.navDownloads}</span>
      </button>

      {open ? (
        <div className="dl-panel" id={panelId} role="dialog" aria-label={ui.dlPanelAria}>
          {groups.map((group) => {
            const items = c.downloads.filter((d) => d.group === group)
            if (items.length === 0) return null
            return (
              <div className="dl-group" key={group}>
                <p className="dl-head">{ui.dlGroup[group]}</p>
                <ul className="dl-list">
                  {items.map((item) => (
                    <li className="dl-item" key={item.label}>
                      <span className="dl-text">
                        <span className="dl-label">{item.label}</span>
                        <span className="dl-note">{item.note}</span>
                        {item.pending ? <span className="dl-tag">{ui.dlPending}</span> : null}
                      </span>
                      {item.url ? (
                        item.pending ? (
                          <span className="dl-action is-disabled" title={ui.dlPending}>
                            <DownloadIcon />
                          </span>
                        ) : (
                          <a
                            className="dl-action"
                            href={item.url}
                            download
                            title={`${ui.dlDownload} ${item.label}`}
                            aria-label={`${ui.dlDownload} ${item.label}`}
                            onClick={() => setOpenFor(null)}
                          >
                            <DownloadIcon />
                          </a>
                        )
                      ) : (
                        <Link
                          className="dl-action"
                          to={href('/about')}
                          title={ui.dlRequest}
                          aria-label={ui.dlRequestAria}
                          onClick={() => setOpenFor(null)}
                        >
                          <ArrowIcon />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
