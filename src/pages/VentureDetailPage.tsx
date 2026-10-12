import { Link, useParams } from 'react-router-dom'
import { useContent } from '../data/content'
import { useHref } from '../i18n/locale'
import { asset } from '../lib/base'
import BackLink from '../components/BackLink'
import NotFoundPage from './NotFoundPage'

export default function VentureDetailPage() {
  const { slug } = useParams()
  const c = useContent()
  const href = useHref()
  const { ui } = c
  const index = c.ventures.findIndex((v) => v.slug === slug)

  if (index < 0) return <NotFoundPage />

  const venture = c.ventures[index]
  const prev = c.ventures[(index - 1 + c.ventures.length) % c.ventures.length]
  const next = c.ventures[(index + 1) % c.ventures.length]
  /** 合作手册 / 项目方案（本人提供的 PDF 逐页图片，16:9） */
  const docPages = venture.docPages
    ? Array.from({ length: venture.docPages.count }, (_, i) =>
        asset(`case-pages/${venture.docPages!.dir}/${String(i + 1).padStart(2, '0')}.webp`),
      )
    : []

  const answers = [
    venture.problem,
    venture.opportunity,
    venture.solution,
    venture.businessModel,
    venture.validation,
    venture.nextMilestone,
  ]

  return (
    <>
      <header className="page-head">
        {/* 2026-10-12 按本人要求：左上角加一个灰色线框的「返回上级」 */}
        <BackLink to="/venture" />
        <div className="shell">
          {/* 2026-10-12 按本人要求：删掉「正在创造 · 状态」小字，也删掉下面那排圆角小标题 */}
          <h1 className="page-title">{venture.name}</h1>
          <p className="page-lede">{venture.oneLiner}</p>
          {venture.xhs ? (
            <p className="page-links">
              <a className="link-arrow" href={venture.xhs} target="_blank" rel="noreferrer">
                {ui.ventureXhs}
              </a>
            </p>
          ) : null}
        </div>
      </header>

      <div className="doc">
        {/* 本人提供的项目图（点进来先看图，再看正文） */}
        {venture.image ? (
          <div className="shell doc-media">
            <img
              className="venture-hero"
              src={venture.image}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
        ) : null}
        <div className="shell doc-grid">
          <aside className="doc-aside">
            <span>{venture.en}</span>
            {/* 状态文案已改成图片上的徽标 / 列表页的小标签，这里不再重复（2026-10-12） */}
            {venture.demo ? <span>{ui.demoLabel}</span> : null}
          </aside>

          <div className="doc-body">
            <div className="doc-block">
              <h2>{ui.blockRole}</h2>
              <p>{venture.role}</p>
            </div>

            <div className="doc-block">
              <h2>{ui.blockSix}</h2>
              <div className="qa">
                {answers.map((answer, i) => (
                  <div className="qa-item" key={ui.qaKeys[i]}>
                    <span className="qa-key">{ui.qaKeys[i]}</span>
                    <span className="qa-val">{answer}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="doc-block">
              <h2>{ui.blockCollab}</h2>
              <p>{venture.collab}</p>
            </div>

            {venture.liveUrl ? (
              <div className="doc-block">
                <h2>{ui.blockLive}</h2>
                <p style={{ marginBottom: 'var(--s-4)' }}>{venture.liveNote}</p>
                <a className="btn" href={venture.liveUrl} target="_blank" rel="noreferrer">
                  {ui.openSite}
                </a>
              </div>
            ) : null}
          </div>
        </div>

        {/* 合作需求之后：完整合作手册（2026-10-12 按本人要求加在异想集详情页） */}
        {docPages.length ? (
          <section className="shell case-doc">
            <h2 className="case-doc-title">{ui.caseDocTitle}</h2>
            <div className="case-doc-pages">
              {docPages.map((src) => (
                <img className="case-doc-page" key={src} src={src} alt="" loading="lazy" decoding="async" />
              ))}
            </div>
          </section>
        ) : null}

        {/* 窄屏的翻页条（宽屏走下面的悬浮箭头），与精选案例详情页同一套 */}
        <div className="shell">
          <nav className="case-pager" aria-label={ui.caseNavAria}>
            <Link
              className="case-pager-link case-pager-link--prev"
              to={href(`/venture/${prev.slug}`)}
            >
              <span className="case-pager-dir" aria-hidden="true">←</span>
              <span className="case-pager-body">
                <span className="case-pager-label">{ui.casePrev}</span>
                <span className="case-pager-title">{prev.name}</span>
              </span>
            </Link>
            <Link
              className="case-pager-link case-pager-link--next"
              to={href(`/venture/${next.slug}`)}
            >
              <span className="case-pager-dir" aria-hidden="true">→</span>
              <span className="case-pager-body">
                <span className="case-pager-label">{ui.caseNext}</span>
                <span className="case-pager-title">{next.name}</span>
              </span>
            </Link>
          </nav>
        </div>
      </div>

      {/* 宽屏：悬浮在页面左右两侧中间的上一个 / 下一个项目 */}
      <Link
        className="case-nav case-nav--prev"
        to={href(`/venture/${prev.slug}`)}
        title={`${ui.casePrev} ${prev.name}`}
        aria-label={`${ui.casePrev} ${prev.name}`}
      >
        <span aria-hidden="true">←</span>
      </Link>
      <Link
        className="case-nav case-nav--next"
        to={href(`/venture/${next.slug}`)}
        title={`${ui.caseNext} ${next.name}`}
        aria-label={`${ui.caseNext} ${next.name}`}
      >
        <span aria-hidden="true">→</span>
      </Link>
    </>
  )
}
