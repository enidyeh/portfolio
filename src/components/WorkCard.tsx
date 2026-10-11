import { Link } from 'react-router-dom'
import type { WorkCase } from '../data/works'
import { useContent } from '../data/content'
import { useHref } from '../i18n/locale'
import WorkMedia from './WorkMedia'

export default function WorkCard({ work }: { work: WorkCase }) {
  const c = useContent()
  const href = useHref()
  const { ui } = c
  const track = c.workTracks.find((t) => t.id === work.track)
  return (
    <Link className="card" to={href(`/work/${work.slug}`)}>
      <span className="card-media">
        <WorkMedia work={work} fallback={ui.phImage} />
      </span>
      <h3 className="card-title">{work.title}</h3>
      {/* 卡片上不放灰字小标和一句话说明（按用户要求删除）；
          项目类型改为跟分类 / 角色同一层级的小标签 */}
      <div className="card-tags">
        {work.type ? <span className="tag">{work.type}</span> : null}
        {track ? <span className="tag">{track.label}</span> : null}
        {work.role ? <span className="tag">{work.role}</span> : null}
      </div>
    </Link>
  )
}
