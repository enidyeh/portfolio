import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useContent } from '../data/content'
import { useHref } from '../i18n/locale'

/** 一组问答 = 一张卡片（一次只显示一张，可以左右翻）。 */
type Pair = {
  id: number
  question: string
  answer: string
  link?: { label: string; to: string }
}

/** 历史上限：只留最近 5 组；第 6 组进来时最旧的一组被顶掉。 */
const MAX_PAIRS = 5

function SendIcon() {
  // 2026-10-13 按本人要求：发送按钮的图标从「向上箭头」换成纸飞机
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4Z" />
    </svg>
  )
}

/** 左右翻卡用的箭头。 */
function FlipIcon({ dir }: { dir: 'prev' | 'next' }) {
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
      {dir === 'prev' ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
    </svg>
  )
}

/**
 * 「数字分身」会话主体：输入框 + 下面一叠可左右翻的问答卡片。
 * 两处复用：首页 HERO（`variant="inline"`）与页头浮窗（`variant="dock"`，默认）。
 * 回答来自 `data/avatar.ts` 的本地预设，不是真实 AI。
 *
 * 问答历史：一次只显示一组（一个问题 + 一个回答），往前翻可以看更早的；
 * 最多留 5 组，满了以后新的一组把最旧的一组顶掉。
 */
export default function AvatarConsole({ variant = 'dock' }: { variant?: 'inline' | 'dock' }) {
  const [value, setValue] = useState('')
  const [pairs, setPairs] = useState<Pair[]>([])
  /** 当前翻到第几张（数组下标） */
  const [active, setActive] = useState(0)
  const nextId = useRef(1)
  const withSuggestions = variant === 'dock'

  const c = useContent()
  const href = useHref()
  const { ui } = c

  function ask(question: string) {
    const text = question.trim()
    if (!text) return
    const lower = text.toLowerCase()
    /* 2026-10-13：改成「命中的关键词最长的那条优先」。
       原来是 find() 命中第一个就算 ——「你现在的创业项目是什么？」会先撞上 projects 里的
       「项目」这种宽泛词，答错卡片；现在「创业项目」更长，就会命中 venture。 */
    let reply = c.avatarFallback
    let bestLen = 0
    for (const item of c.avatarQA) {
      for (const keyword of item.keywords) {
        const k = keyword.toLowerCase()
        if (lower.includes(k) && k.length > bestLen) {
          bestLen = k.length
          reply = item
        }
      }
    }
    // slice(-MAX_PAIRS)：新的一组永远排在末尾，所以 active 指向末尾就是「最新一组」。
    // 用 ref 计数器生成 id，避免顶掉旧卡片后 key 撞车。
    const next = [
      ...pairs,
      { id: nextId.current, question: text, answer: reply.answer, link: reply.link },
    ].slice(-MAX_PAIRS)
    nextId.current += 1
    setPairs(next)
    setActive(next.length - 1)
    setValue('')
  }

  const current = pairs[active]

  return (
    <div className={variant === 'inline' ? 'avatar avatar--inline' : 'avatar'}>
      {/* 还没问过任何问题时，dock 里给几个可点的示例问题 */}
      {withSuggestions && pairs.length === 0 ? (
        <ul className="avatar-chips">
          {c.avatarIntro.suggestions.map((suggestion) => (
            <li key={suggestion}>
              <button type="button" className="chip" onClick={() => ask(suggestion)}>
                {suggestion}
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      <form
        className="avatar-input"
        onSubmit={(event) => {
          event.preventDefault()
          ask(value)
        }}
      >
        <input
          type="text"
          value={value}
          placeholder={c.avatarIntro.placeholder}
          aria-label={ui.turnInputAria}
          autoFocus={variant === 'dock'}
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit" className="avatar-send" aria-label={ui.turnSendAria}>
          <SendIcon />
        </button>
      </form>

      {/* 问答卡片：放在问题框下面，一次只显示一组（问题 + 回答），左右翻；最多 5 组 */}
      {current ? (
        <div className="convo">
          <div className="convo-head">
            <span className="convo-count">
              {active + 1} / {pairs.length}
            </span>
            <div className="convo-flip">
              <button
                type="button"
                className="convo-btn"
                onClick={() => setActive(active - 1)}
                disabled={active === 0}
                aria-label={ui.turnPrevAria}
              >
                <FlipIcon dir="prev" />
              </button>
              <button
                type="button"
                className="convo-btn"
                onClick={() => setActive(active + 1)}
                disabled={active === pairs.length - 1}
                aria-label={ui.turnNextAria}
              >
                <FlipIcon dir="next" />
              </button>
            </div>
            <button
              type="button"
              className="avatar-reset"
              onClick={() => {
                setPairs([])
                setActive(0)
              }}
            >
              {ui.turnReset}
            </button>
          </div>

          <div
            className={pairs.length > 1 ? 'convo-card convo-card--stack' : 'convo-card'}
            aria-live="polite"
          >
            <div className="turn turn--user">
              <span className="turn-role">{ui.turnUser}</span>
              <span className="turn-text">{current.question}</span>
            </div>
            <div className="turn turn--avatar">
              <span className="turn-role">{ui.turnAvatar}</span>
              <span className="turn-text">{current.answer}</span>
              {current.link ? (
                <Link className="turn-link" to={href(current.link.to)}>
                  {current.link.label} →
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      {/* 首页的「常见问题」：坐在问题框下面（原来是三个跳转按钮）。
          点一下就是「问数字分身」，不跳页；回答里会带一个去精选项目 / 正在创造的入口。 */}
      {variant === 'inline' && pairs.length === 0 ? (
        <ul className="avatar-chips hero-faq">
          {ui.heroFaq.map((question) => (
            <li key={question}>
              <button type="button" className="chip" onClick={() => ask(question)}>
                {question}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
