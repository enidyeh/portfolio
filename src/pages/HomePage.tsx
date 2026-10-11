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
          <div className="vlist">
            {c.ventures.map((v) => (
              <VentureCard key={v.slug} venture={v} layout="row" />
            ))}
          </div>
          <div className="callout">
            <p className="eyebrow">{c.dataRoom.eyebrow}</p>
            <p className="callout-body">{c.dataRoom.body}</p>
            <Link className="btn" to={href('/about')}>
              {ui.contactCta}
            </Link>
          </div>
        </div>
      </section>

      {/* 04 COMPANIES：我工作过的公司（logo 墙，logo 由本人提供） */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">{ui.homeCompaniesEyebrow}</p>
              <h2 className="section-title">{ui.homeCompaniesTitle}</h2>
            </div>
            <Link className="section-more" to={href('/about')}>
              {ui.aboutMore}
            </Link>
          </div>

          {/* 没填 logo 之前显示虚线占位格；填了以后自动换成 logo（无 logo 的退化成公司名） */}
          <ul className="logo-row">
            {c.companies.length > 0
              ? c.companies.map((company) => (
                  <li className="logo-cell" key={company.name}>
                    {company.logo ? (
                      <img
                        className="logo-img"
                        src={company.logo}
                        alt={company.name}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <span className="logo-name">{company.name}</span>
                    )}
                  </li>
                ))
              : LOGO_SLOTS.map((slot) => (
                  <li className="logo-cell is-empty" key={slot}>
                    <span>{ui.companiesPending}</span>
                  </li>
                ))}
          </ul>

          <p className="section-lede" style={{ marginTop: 'var(--s-4)' }}>
            {c.companiesNote}
          </p>
        </div>
      </section>

      {/* 05 EXPERIENCE */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">{ui.homeExperienceEyebrow}</p>
              <h2 className="section-title">{ui.homeExperienceTitle}</h2>
            </div>
            <Link className="section-more" to={href('/about')}>
              {ui.aboutMore}
            </Link>
          </div>
          <div style={{ marginTop: 'var(--s-5)' }}>
            <div className="tl-group">
              <p className="tl-group-label">{ui.tlExperience}</p>
              <div className="timeline">
                {c.experience.map((item, i) => (
                  <div className="tl-item" key={i}>
                    <span className="tl-when">{item.when}</span>
                    <span>
                      <span className="tl-role">{item.role}</span>
                      {item.org ? <span className="tl-org">{item.org}</span> : null}
                      {item.desc ? <span className="tl-desc">{item.desc}</span> : null}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tl-group">
              <p className="tl-group-label">{ui.tlEducation}</p>
              <div className="timeline">
                {c.education.map((item, i) => (
                  <div className="tl-item" key={i}>
                    <span className="tl-when">{item.when}</span>
                    <span>
                      <span className="tl-role">{item.role}</span>
                      {item.org ? <span className="tl-org">{item.org}</span> : null}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
