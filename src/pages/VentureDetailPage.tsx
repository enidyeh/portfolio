import { useParams } from 'react-router-dom'
import { useContent } from '../data/content'
import NotFoundPage from './NotFoundPage'

export default function VentureDetailPage() {
  const { slug } = useParams()
  const c = useContent()
  const { ui } = c
  const venture = c.ventures.find((v) => v.slug === slug)

  if (!venture) return <NotFoundPage />

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
        <div className="shell">
          <p className="eyebrow">
            {ui.ventureEyebrow} · {venture.status}
          </p>
          <h1 className="page-title">{venture.name}</h1>
          <p className="page-lede">{venture.oneLiner}</p>
          <ul className="pillars">
            {venture.tags.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </header>

      <div className="doc">
        <div className="shell doc-grid">
          <aside className="doc-aside">
            <span>{venture.en}</span>
            <span>{venture.status}</span>
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

            <div className="doc-block">
              <p className="section-lede">{c.ventureNote}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
