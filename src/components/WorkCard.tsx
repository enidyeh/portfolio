import { Link } from 'react-router-dom'
import type { WorkCase } from '../data/works'
import { useContent } from '../data/content'
import { useHref } from '../i18n/locale'
import WorkMedia from './WorkMedia'

export default function WorkCard({ work, large = false }: { work: WorkCase; large?: boolean }) {
  const c = useContent()
  const href = useHref()
  const { ui } = c
  const track = c.workTracks.find((t) => t.id === work.track)
  return (
    <Link className={large ? 'card card--large' : 'card'} to={href(`/work/${work.slug}`)}>
      <span className={work.video ? 'card-media card-media--video' : 'card-media'}>
        <WorkMedia work={work} fallback={ui.phImage} />
        {/* 图片右下角的进入箭头：整张卡片本来就可点，这个只是把「可点」显出来 */}
        <span className="card-go" aria-hidden="true">
          →
        </span>
      </span>
      <h3 className="card-title">{work.title}</h3>
      {/* 卡片上的小标题：案例自带 tags 就按它显示，否则回退到类型 / 分类 / 角色。
          灰字小标和一句话说明已按用户要求删除。 */}
      <div className="card-tags">
        {(work.tags ?? [work.type, track?.label, work.role].filter(Boolean)).map((chip) => (
          <span className="tag" key={chip}>
            {chip}
          </span>
        ))}
      </div>
    </Link>
  )
}
