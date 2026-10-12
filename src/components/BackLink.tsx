import { Link } from 'react-router-dom'
import { useContent } from '../data/content'
import { useHref } from '../i18n/locale'

/**
 * 案例 / 项目详情页左上角的「返回上级」：灰色线框按钮，点一下回到上一级列表。
 * 2026-10-12 按本人要求新增。`to` 传上一级路由（案例 → /work，项目 → /venture）。
 */
export default function BackLink({ to }: { to: string }) {
  const c = useContent()
  const href = useHref()
  return (
    <div className="shell back-row">
      <Link className="back-btn" to={href(to)}>
        <span aria-hidden="true">←</span>
        {c.ui.backCta}
      </Link>
    </div>
  )
}
