import { useContent } from '../data/content'
import WorkCard from '../components/WorkCard'

export default function WorkPage() {
  const c = useContent()
  return (
    <>
      <header className="page-head">
        <div className="shell">
          <p className="eyebrow">{c.worksHead.eyebrow}</p>
          <h2 className="page-title">{c.worksHead.title}</h2>
          <p className="page-lede">{c.worksHead.lede}</p>
        </div>
      </header>
      <section className="section">
        <div className="shell">
          {c.workTracks.map((track) => {
            const items = c.works.filter((w) => w.track === track.id)
            return (
              <div className="track" key={track.id}>
                <div className="track-head">
                  <span className="track-no">{track.no}</span>
                  <h2 className="track-title">{track.label}</h2>
                </div>
                <ul className="track-items">
                  {track.items.map((i) => (
                    <li key={i} className="tag">
                      {i}
                    </li>
                  ))}
                </ul>
                {/* 一个案例 → 整行一张 1×1 大卡；多个案例 → 2×2（见 .grid--cases） */}
                <div
                  className={
                    items.length === 1
                      ? 'grid grid--cases grid--cases--single'
                      : 'grid grid--cases'
                  }
                >
                  {items.map((w) => (
                    <WorkCard key={w.slug} work={w} large={items.length === 1} />
                  ))}
                </div>
              </div>
            )
          })}
          <p className="section-lede" style={{ marginTop: 'var(--s-6)' }}>
            {c.worksNote}
          </p>
        </div>
      </section>
    </>
  )
}
