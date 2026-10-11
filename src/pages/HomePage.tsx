import { Link } from 'react-router-dom'
import { useContent } from '../data/content'
import { useHref } from '../i18n/locale'
import HeroBlock from '../components/HeroBlock'
import WorkCard from '../components/WorkCard'
import WorkMedia from '../components/WorkMedia'
import VentureCard from '../components/VentureCard'

/** 还没填 logo 时显示的占位格子数量（6 个刚好铺满桌面端一行） */
const LOGO_SLOTS = [1, 2, 3, 4, 5, 6]

export default function HomePage() {
  const c = useContent()
  const href = useHref()
  const { ui } = c

  /** 大展示位（PHYGITAL BASE）+ 下方三列卡片 */
  const featured = c.works.find((w) => w.featured)
  const cases = c.works.filter((w) => !w.featured)
  /** 轮播把同一份名单铺 4 遍：整体左移 50% 就正好接上，可视区永远不空 */
  const logoLoop = [...c.companies, ...c.companies, ...c.companies, ...c.companies]

  return (
    <>
      {/* 01 HERO（与三个内页共用同一个区块） */}
      <HeroBlock />

      {/* 02 SELECTED WORK：一个大展示 + 三列卡片 */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <h2 className="section-title">{ui.sectionWork}</h2>
            </div>
            <Link className="section-more" to={href('/work')}>
              {ui.allCases}
            </Link>
          </div>

          {/* 大展示位：有视频就用播放器（不能包在 <Link> 里，否则点控件会跳转），
              否则用可点的图片卡片，再否则用占位 */}
          {featured ? (
            <article className="feature">
              {featured.video ? (
                <div className="feature-media">
                  <WorkMedia work={featured} />
                </div>
              ) : (
                <Link
                  className="feature-media"
                  to={href(`/work/${featured.slug}`)}
                  aria-label={`${ui.featuredCta} ${featured.title}`}
                >
                  <WorkMedia work={featured} fallback={ui.phVideo} />
                </Link>
              )}
              <div className="feature-body">
                <h3 className="feature-title">{featured.title}</h3>
                {/* 项目类型：改成跟卡片同一层级的小标签；这段介绍保留 */}
                {featured.type ? (
                  <div className="feature-tags">
                    <span className="tag">{featured.type}</span>
                  </div>
                ) : null}
                {featured.summary ? <p className="feature-desc">{featured.summary}</p> : null}
                <Link className="btn btn--primary" to={href(`/work/${featured.slug}`)}>
                  {ui.featuredCta}
                </Link>
              </div>
            </article>
          ) : null}

          <div className="grid grid--cases">
            {cases.map((w) => (
              <WorkCard key={w.slug} work={w} />
            ))}
          </div>
        </div>
      </section>

      {/* 03 VENTURE & CONTACT */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <h2 className="section-title">{ui.homeVentureTitle}</h2>
            </div>
            <Link className="section-more" to={href('/venture')}>
              {ui.allVentures}
            </Link>
          </div>
          {/* 2026-10-12 按本人要求：首页「正在创造」也排成 2×2 卡片（与列表页同一套卡片） */}
          <div className="grid grid--venture">
            {c.ventures.map((v) => (
              <VentureCard key={v.slug} venture={v} />
            ))}
          </div>
          {/* 合作：一句话 + 右边的联系方式按钮（与 /venture 页同一张） */}
          <div className="callout callout--mini">
            <p className="callout-title">{c.dataRoom.text}</p>
            <Link className="btn" to={href('/about#contact')}>
              {ui.contactCta}
            </Link>
          </div>
        </div>
      </section>

      {/* 04 COMPANIES：我工作过的公司（logo 轮播，logo 由本人提供） */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <h2 className="section-title">{ui.homeCompaniesTitle}</h2>
            </div>
            <Link className="section-more" to={href('/about')}>
              {ui.aboutMore}
            </Link>
          </div>

          {/* 有 logo：一条无缝循环的跑马灯。同一份列表渲染 4 遍、整体左移 50%，
              任意时刻可视区都被铺满（见 site.css 的 .logo-marquee）。 */}
          {c.companies.length > 0 ? (
            <div className="logo-marquee">
              <ul className="logo-track">
                {logoLoop.map((company, index) => {
                  const isCopy = index >= c.companies.length
                  return (
                    <li
                      className="logo-item"
                      key={`${company.name}-${index}`}
                      aria-hidden={isCopy || undefined}
                    >
                      {company.logo ? (
                        <img
                          className="logo-img"
                          src={company.logo}
                          alt={isCopy ? '' : company.name}
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <span className="logo-name">{company.name}</span>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ) : (
            /* 还没填 logo 之前：虚线占位格，不会被当成真实履历 */
            <ul className="logo-row">
              {LOGO_SLOTS.map((slot) => (
                <li className="logo-cell is-empty" key={slot}>
                  <span>{ui.companiesPending}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* 05 EXPERIENCE */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              {/* 2026-10-12 按本人要求：删掉「经历」这个小字 */}
              <h2 className="section-title">{ui.homeExperienceTitle}</h2>
            </div>
            <Link className="section-more" to={href('/about')}>
              {ui.aboutMore}
            </Link>
          </div>
          {/* 时间线：鼠标移到任意一行都会浮起，点一下进「个人介绍」的简历区块看详细版。
              2026-10-12 按本人要求：工作与学习分成两条，学习那条的圆点用黑灰（不加红）。 */}
          <div className="tl-track" style={{ marginTop: 'var(--s-5)' }}>
            <p className="tl-track-label">{ui.tlExperience}</p>
            {c.experience.map((item, i) => (
              <Link className="tl-row" to={href('/about#resume')} key={`work-${i}`}>
                <span className="tl-dot" aria-hidden="true" />
                <span className="tl-when">{item.when}</span>
                <span className="tl-main">
                  {item.org ? <span className="tl-org">{item.org}</span> : null}
                  <span className="tl-role">{item.role}</span>
                </span>
                <span className="tl-go" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>

          <div className="tl-track tl-track--study" style={{ marginTop: 'var(--s-5)' }}>
            <p className="tl-track-label">{ui.tlEducation}</p>
            {c.education.map((item, i) => (
              <Link className="tl-row" to={href('/about#resume')} key={`study-${i}`}>
                <span className="tl-dot" aria-hidden="true" />
                <span className="tl-when">{item.when}</span>
                <span className="tl-main">
                  {item.org ? <span className="tl-org">{item.org}</span> : null}
                  <span className="tl-role">{item.role}</span>
                </span>
                <span className="tl-go" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
