import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useContent } from '../data/content'
import { useHref } from '../i18n/locale'
import { asset } from '../lib/base'
import BackLink from '../components/BackLink'
import RichText from '../components/RichText'
import NotFoundPage from './NotFoundPage'

export default function VentureDetailPage() {
  const { slug } = useParams()
  const c = useContent()
  const href = useHref()
  const { ui } = c
  const index = c.ventures.findIndex((v) => v.slug === slug)

  /** 2026-10-13 按本人要求：点「查看网站」先不跳站点，弹一张站点截图、
      蒙一层半透明灰罩、中间写白字「搭建中」。 */
  const [siteOpen, setSiteOpen] = useState(false)
  const closeSite = () => setSiteOpen(false)
  useEffect(() => {
    if (!siteOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSiteOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [siteOpen])

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
          {/* 2026-10-13 按本人提供的内容：标题下面加一行英文定位（如 Youth Culture · Community · Commercialization） */}
          {venture.tagline ? <p className="eyebrow venture-tagline">{venture.tagline}</p> : null}
          <p className="page-lede">{venture.oneLiner}</p>
          {/* 2026-10-13 按本人要求：社交媒体主页入口不再放在标题下面（原来那行小字删掉），
              改成图下面一颗和 PHYGITAL BASE 详情页同款的按钮（见 .doc-media 里那份）。 */}
        </div>
      </header>

      <div className="doc">
        {/* 本人提供的项目图（点进来先看图，再看正文） */}
        {venture.image ? (
          <div className="shell doc-media">
            <div className="venture-figure">
              <img
                className="venture-hero"
                src={venture.image}
                alt=""
                loading="lazy"
                decoding="async"
                /* 2026-10-13 按本人要求：详情页大图填满 16:9，构图与首页「正在创造」卡片一致
                   （卡片用的是 50% 35%，个别项目在数据里用 imagePos 覆盖）。 */
                style={{ objectPosition: venture.imagePos ?? '50% 35%' }}
              />
              {/* 2026-10-13 按本人要求：图片右下角加一颗圆角半透明灰按钮，
                  白字「查看网站」（域见 / 异想集）。点它不跳站点，弹浮窗。 */}
              {venture.siteShot || venture.siteUrl ? (
                <button
                  type="button"
                  className="venture-site-btn"
                  onClick={() => setSiteOpen(true)}
                >
                  {ui.viewSite}
                </button>
              ) : null}
            </div>
            {/* 2026-10-13 按本人要求：图下面那个「演示」小标签删掉；
                改成社交媒体主页入口 —— 与 PHYGITAL BASE 详情页那颗下载按钮同款。
                ⚠️ 不能复用 .doc-attach：宽屏下 `.doc-media .doc-attach` 是 display:none
                （那条规则是给论文按钮做两版切换的），用在这里会让按钮在电脑版直接消失。 */}
            {venture.xhs ? (
              <p className="venture-social">
                <a
                  className="btn btn--primary btn--lg"
                  href={venture.xhs}
                  target="_blank"
                  rel="noreferrer"
                >
                  {ui.ventureXhs}
                </a>
              </p>
            ) : null}
          </div>
        ) : null}
        <div className="shell doc-grid doc-grid--single">
          <div className="doc-body">
            <div className="doc-block">
              <h2>{ui.blockRole}</h2>
              <RichText value={venture.role} />
            </div>

            <div className="doc-block">
              <h2>{ui.blockSix}</h2>
              <div className="qa">
                {answers.map((answer, i) => (
                  <div className="qa-item" key={ui.qaKeys[i]}>
                    <span className="qa-key">{ui.qaKeys[i]}</span>
                    <div className="qa-val">
                      <RichText value={answer} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="doc-block">
              <h2>{ui.blockCollab}</h2>
              <RichText value={venture.collab} />
            </div>

            {venture.liveUrl ? (
              <div className="doc-block">
                <h2>{ui.blockLive}</h2>
                {venture.liveNote ? (
                  <div className="doc-live-note">
                    <RichText value={venture.liveNote} />
                  </div>
                ) : null}
                <a className="btn" href={venture.liveUrl} target="_blank" rel="noreferrer">
                  {ui.openSite}
                </a>
              </div>
            ) : null}
          </div>
        </div>

        {/* 窄屏的翻页条（宽屏走固定在两侧的悬浮箭头），与精选案例详情页同一套。
            2026-10-13 按本人要求：挪到「项目方案」前面（下面是一长串 PDF 逐页图）。 */}
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

      {/* 2026-10-13 按本人要求：站点还在搭 → 点「查看网站」弹站点截图，
          上面蒙一层半透明灰罩，中间白字「搭建中」。点灰罩 / 按 Esc / 点关闭都关掉。 */}
      {siteOpen ? (
        <div
          className="site-modal"
          role="dialog"
          aria-modal="true"
          aria-label={ui.viewSite}
          onClick={closeSite}
        >
          <div className="site-modal-box" onClick={(e) => e.stopPropagation()}>
            {venture.siteShot ? (
              <img className="site-modal-shot" src={venture.siteShot} alt="" />
            ) : null}
            <div className="site-modal-veil">
              <span className="site-modal-text">{ui.underConstruction}</span>
            </div>
            <button
              type="button"
              className="site-modal-close"
              onClick={closeSite}
              aria-label={ui.modalClose}
            >
              ✕
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}
