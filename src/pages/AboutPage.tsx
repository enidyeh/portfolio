import { useContent } from '../data/content'
import HeroBlock from '../components/HeroBlock'
import Pending from '../components/Pending'

export default function AboutPage() {
  const c = useContent()
  const { ui } = c
  const resumes = c.downloads.filter((d) => d.group === '简历')

  return (
    <>
      <HeroBlock variant="compact" />
      <header className="page-head">
        <div className="shell">
          <p className="eyebrow">{c.aboutHead.eyebrow}</p>
          <h2 className="page-title">{c.aboutHead.title}</h2>
          <p className="page-lede">{c.aboutHead.lede}</p>
        </div>
      </header>

      <div className="doc">
        <div className="shell doc-grid">
          <aside className="doc-aside">
            <span>{c.profile.location}</span>
            <span>{c.profile.role}</span>
            <span>{c.profile.nameZh || '—'}</span>
          </aside>

          <div className="doc-body">
            <div className="doc-block">
              <h2>{ui.blockIntro}</h2>
              <p>{c.profile.statement}</p>
              {c.profile.intro.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <ul className="pillars">
                {c.profile.pillars.map((p) => (
                  <li key={p} className="tag">
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* 简历：两份定制版本 */}
            <div className="doc-block" id="resume">
              <h2>{ui.blockResume}</h2>
              <p>{ui.resumeLede}</p>
              <div className="resume-grid">
                {resumes.map((r) => (
                  <div className="resume-card" key={r.label}>
                    <span className="resume-label">{r.label}</span>
                    <span className="resume-note">{r.note}</span>
                    <a className="btn" href={r.url} target="_blank" rel="noreferrer">
                      {ui.resumeCta}
                    </a>
                  </div>
                ))}
              </div>
              <p className="section-lede" style={{ marginTop: 'var(--s-4)' }}>
                <Pending>{ui.resumePending}</Pending>
              </p>
            </div>

            <div className="doc-block">
              <h2>{ui.blockCapability}</h2>
              <p>{ui.methodLede}</p>
              <div>
                {c.methodGroups.map((m) => (
                  <div className="skill-group" key={m.label}>
                    <span className="skill-label">{m.label}</span>
                    <span className="skill-items">
                      {m.items.map((i) => (
                        <span className="tag" key={i}>
                          {i}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="doc-block">
              <h2>{ui.blockExperience}</h2>
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

            <div className="doc-block">
              <h2>{ui.blockEducation}</h2>
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

            <div className="doc-block" id="contact">
              <h2>{ui.blockContact}</h2>
              <div className="meta-list">
                <div className="meta-row">
                  <span className="meta-key">{ui.metaEmail}</span>
                  <span className="meta-val">
                    {c.profile.email ? (
                      <a href={`mailto:${c.profile.email}`}>{c.profile.email}</a>
                    ) : (
                      <Pending>{ui.pendingEmail}</Pending>
                    )}
                  </span>
                </div>
                <div className="meta-row">
                  <span className="meta-key">{ui.metaWechat}</span>
                  <span className="meta-val">
                    {c.profile.wechat || <Pending>{ui.pendingWechat}</Pending>}
                  </span>
                </div>
                <div className="meta-row">
                  <span className="meta-key">{ui.metaSocial}</span>
                  <span className="meta-val">
                    {c.profile.social.map((s) => (
                      <a
                        key={s.url}
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{ display: 'block' }}
                      >
                        {s.label}
                      </a>
                    ))}
                  </span>
                </div>
              </div>
              <p className="section-lede" style={{ marginTop: 'var(--s-5)' }}>
                {c.aboutNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
