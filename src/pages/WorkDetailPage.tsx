import { Link, useParams } from 'react-router-dom'
import { useContent } from '../data/content'
import { useHref } from '../i18n/locale'
import WorkMedia from '../components/WorkMedia'
import NotFoundPage from './NotFoundPage'

export default function WorkDetailPage() {
  const { slug } = useParams()
  const c = useContent()
  const href = useHref()
  const { ui } = c
  const index = c.works.findIndex((w) => w.slug === slug)

  if (index < 0) return <NotFoundPage />

  const work = c.works[index]
  const prev = c.works[(index - 1 + c.works.length) % c.works.length]
  const next = c.works[(index + 1) % c.works.length]

  return (
    <>
      <header className="page-head">
        <div className="shell">
          <p className="eyebrow">
            {ui.caseEyebrow} · {work.type}
          </p>
          <h1 className="page-title">{work.title}</h1>
          <p className="page-lede">{work.summary}</p>
        </div>
      </header>

      <div className="doc">
        <div className="shell doc-media">
          <WorkMedia work={work} fallback={ui.phImage} />
        </div>
        <div className="shell doc-grid">
          <aside className="doc-aside">
            {work.year ? <span>{work.year}</span> : null}
            {work.role ? <span>{work.role}</span> : null}
            {work.type ? <span>{work.type}</span> : null}
          </aside>

          <div className="doc-body">
            {work.problem ? (
              <div className="doc-block">
                <h2>{ui.blockProblem}</h2>
                <p>{work.problem}</p>
              </div>
            ) : null}

            {work.contribution.filter(Boolean).length ? (
              <div className="doc-block">
                <h2>{ui.blockRole}</h2>
                <ul className="doc-list">
                  {work.contribution.filter(Boolean).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {work.decisions.filter(Boolean).length ? (
              <div className="doc-block">
                <h2>{ui.blockDecisions}</h2>
                <ul className="doc-list">
                  {work.decisions.filter(Boolean).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {work.outcome.filter(Boolean).length ? (
              <div className="doc-block">
                <h2>{ui.blockOutcome}</h2>
                <ul className="doc-list">
                  {work.outcome.filter(Boolean).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {work.reflection ? (
              <div className="doc-block">
                <h2>{ui.blockReflection}</h2>
                <p>{work.reflection}</p>
              </div>
            ) : null}
          </div>
        </div>

        {/* 窄屏的翻页条：宽屏没有侧边留白放悬浮箭头，改把「上一个 / 下一个」收在正文末尾。
            宽屏下 .case-pager 是 display:none，不会占位。 */}
        <div className="shell">
          <nav className="case-pager" aria-label={ui.caseNavAria}>
            <Link className="case-pager-link case-pager-link--prev" to={href(`/work/${prev.slug}`)}>
              <span className="case-pager-dir" aria-hidden="true">←</span>
              <span className="case-pager-body">
                <span className="case-pager-label">{ui.casePrev}</span>
                <span className="case-pager-title">{prev.title}</span>
              </span>
            </Link>
            <Link className="case-pager-link case-pager-link--next" to={href(`/work/${next.slug}`)}>
              <span className="case-pager-dir" aria-hidden="true">→</span>
              <span className="case-pager-body">
                <span className="case-pager-label">{ui.caseNext}</span>
                <span className="case-pager-title">{next.title}</span>
              </span>
            </Link>
          </nav>
        </div>
      </div>

        {/* 宽屏：上一个 / 下一个案例，悬浮在页面左右两侧中间。
            只有箭头 —— 中文站显示英文、英文站显示中文都会破坏「一页一种语言」，
            完整含义放在 title / aria-label 里。 */}
        <Link
          className="case-nav case-nav--prev"
          to={href(`/work/${prev.slug}`)}
          title={`${ui.casePrev} ${prev.title}`}
          aria-label={`${ui.casePrev} ${prev.title}`}
        >
          <span aria-hidden="true">←</span>
        </Link>
        <Link
          className="case-nav case-nav--next"
          to={href(`/work/${next.slug}`)}
          title={`${ui.caseNext} ${next.title}`}
          aria-label={`${ui.caseNext} ${next.title}`}
        >
          <span aria-hidden="true">→</span>
        </Link>
    </>
  )
}
