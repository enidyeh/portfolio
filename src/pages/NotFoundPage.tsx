import { Link } from 'react-router-dom'
import { useContent } from '../data/content'
import { useHref } from '../i18n/locale'

export default function NotFoundPage() {
  const { ui } = useContent()
  const href = useHref()
  return (
    <section className="shell nf">
      <p className="eyebrow">404</p>
      <h1 className="page-title">{ui.nfTitle}</h1>
      <p className="page-lede">{ui.nfLede}</p>
      <Link className="btn btn--primary" to={href('/')}>
        {ui.nfCta}
      </Link>
    </section>
  )
}
