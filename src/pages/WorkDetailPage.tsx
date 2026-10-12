import { Link, useParams } from 'react-router-dom'
import { useContent } from '../data/content'
import { useHref } from '../i18n/locale'
import { asset } from '../lib/base'
import BackLink from '../components/BackLink'
import WorkMedia from '../components/WorkMedia'
import NotFoundPage from './NotFoundPage'

/** 把文案里的 `**强调**` 渲染成 <strong>（本人提供的案例文案只用到这一种标记） */
function withBold(text: string) {
  return text
    .split(/(\*\*[^*]+\*\*)/g)
    .filter((part) => part !== '')
    .map((part, i) =>
      part.startsWith('**') && part.endsWith('**') ? (
        <strong key={i}>{part.slice(2, -2)}</strong>
      ) : (
        <span key={i}>{part}</span>
      ),
    )
}

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
  /** 完整项目文件（本人给的 PDF 逐页图片）；16:9 幻灯片，容器按 16/9 占位不跳动 */
  const docPages = work.docPages
    ? Array.from({ length: work.docPages.count }, (_, i) =>
        asset(`case-pages/${work.docPages!.dir}/${String(i + 1).padStart(2, '0')}.webp`),
      )
    : []

  return (
    <>
      <header className="page-head">
        {/* 2026-10-12 按本人要求：左上角加一个灰色线框的「返回上级」 */}
        <BackLink to="/work" />
        <div className="shell">
          {/* 2026-10-12 按本人要求：删掉「精选案例 · 项目类型」那一行小字 */}
          <h1 className="page-title">{work.title}</h1>
          <p className="page-lede">{work.summary}</p>
          {/* 荣誉标签：校级优秀毕设 / 专业Top3 这类（数据在 data/works.ts 的 awards） */}
          {work.awards?.length ? (
            <ul className="page-awards">
              {work.awards.map((a) => (
                <li className="tag tag--accent" key={a}>
                  {a}
                </li>
              ))}
            </ul>
          ) : null}
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
            {/* 2026-10-12 按本人要求：附件（如毕业论文）放在左栏「产品设计与项目管理」
                下面，沿用实色大按钮的款式（原来在页头荣誉标签上面） */}
            {work.attachment ? (
              <p className="doc-attach">
                <a className="btn btn--primary btn--lg" href={work.attachment.url} download>
                  {work.attachment.label} ↓
                </a>
              </p>
            ) : null}
          </aside>

          <div className="doc-body">
            {/* 2026-10-12 按本人要求：把「项目名称 / 项目类型 / 项目主题」这类信息行
                加在「背景与问题」上面 */}
            {work.facts?.length ? (
              <div className="doc-facts">
                {work.facts.map((f) => (
                  <div className="meta-row" key={f.label}>
                    <span className="meta-key">{f.label}</span>
                    <span className="meta-val">{f.value}</span>
                  </div>
                ))}
              </div>
            ) : null}

            {work.problem ? (
              <div className="doc-block">
                <h2>{ui.blockProblem}</h2>
                <p>{work.problem}</p>
              </div>
            ) : null}

            {/* 本人提供的案例正文区块（底层策略 / 设计核心与执行 / 核心产出 …） */}
            {work.sections?.map((s) => (
              <div className="doc-block" key={s.title}>
                <h2>{s.title}</h2>
                {s.body?.map((p, i) => (
                  <p key={i}>{withBold(p)}</p>
                ))}
                {s.items?.length ? (
                  <ul className="doc-list">
                    {s.items.map((item, i) => (
                      <li key={i}>{withBold(item)}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}

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

        {/* 完整项目文件：本人提供的 PDF 逐页转成图片。
            手机端要求排在「上一篇 / 下一篇」翻页条之后 —— 宽屏下 .case-pager 是
            display:none 不占位，所以放在它后面既满足手机顺序、又不影响桌面。 */}
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
