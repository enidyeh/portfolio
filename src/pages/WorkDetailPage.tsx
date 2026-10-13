import { Link, useParams } from 'react-router-dom'
import { useContent } from '../data/content'
import { useHref } from '../i18n/locale'
import { asset } from '../lib/base'
import BackLink from '../components/BackLink'
import RichText from '../components/RichText'
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
        </div>
      </header>

      <div className="doc">
        <div className="shell doc-media">
          <WorkMedia work={work} fallback={ui.phImage} />
          {/* 2026-10-12 按本人要求：荣誉标签（校级优秀毕设 / 专业Top3）从页头标题
              下面挪到视频下面。数据在 data/works.ts 的 awards */}
          {work.awards?.length ? (
            <ul className="page-awards">
              {work.awards.map((a) => (
                <li className="tag tag--accent" key={a}>
                  {a}
                </li>
              ))}
            </ul>
          ) : null}
          {/* 2026-10-13 按本人要求：正文整块靠页面左边（左栏那一片是空白）。
              原来只放附件按钮的左栏整个去掉，附件按钮挪到图下面。 */}
          {work.attachment ? (
            <p className="doc-attach">
              <a className="btn btn--primary btn--lg" href={work.attachment.url} download>
                {work.attachment.label} ↓
              </a>
            </p>
          ) : null}
        </div>
        <div className="shell doc-grid doc-grid--single">
          <div className="doc-body">
            {work.problem ? (
              <div className="doc-block">
                <h2>{ui.blockProblem}</h2>
                <RichText value={work.problem} />
              </div>
            ) : null}

            {/* 本人提供的案例正文区块（底层策略 / 设计核心与执行 / 核心产出 …） */}
            {work.sections?.map((s) => (
              <div className="doc-block" key={s.title}>
                <h2>{s.title}</h2>
                <RichText value={s} />
              </div>
            ))}

            {work.contribution.filter(Boolean).length ? (
              <div className="doc-block">
                <h2>{ui.blockRole}</h2>
                <RichText value={{ items: work.contribution }} />
              </div>
            ) : null}

            {work.decisions.filter(Boolean).length ? (
              <div className="doc-block">
                <h2>{ui.blockDecisions}</h2>
                <RichText value={{ items: work.decisions }} />
              </div>
            ) : null}

            {work.outcome.filter(Boolean).length ? (
              <div className="doc-block">
                <h2>{ui.blockOutcome}</h2>
                <RichText value={{ items: work.outcome }} />
              </div>
            ) : null}

            {work.reflection ? (
              <div className="doc-block">
                <h2>{ui.blockReflection}</h2>
                <RichText
                  value={
                    Array.isArray(work.reflection) ? { items: work.reflection } : work.reflection
                  }
                />
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
