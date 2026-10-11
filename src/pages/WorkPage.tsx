import { useContent } from '../data/content'
import WorkCard from '../components/WorkCard'

export default function WorkPage() {
  const c = useContent()
  return (
    <>
      {/* 页面标题保留；「精选项目」小标题与下面那段说明 2026-10-12 按本人要求删掉，
          也不再画分割线，正文直接从 01 开始（.page-head--flat） */}
      <header className="page-head page-head--flat">
        <div className="shell">
          <h2 className="page-title">{c.worksHead.title}</h2>
          {/* 2026-10-12 按本人要求：大标题下的小标题补回来（文案由本人提供） */}
          {c.worksHead.lede ? <p className="page-lede">{c.worksHead.lede}</p> : null}
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
                {/* 一句说明，不用圆角标签（2026-10-12 按本人要求去掉框） */}
                <ul className="track-notes">
                  {track.items.map((i) => (
                    <li key={i}>{i}</li>
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
        </div>
      </section>
    </>
  )
}
