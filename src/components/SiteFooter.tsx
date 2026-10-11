import { Link } from 'react-router-dom'
import { useContent } from '../data/content'
import { useHref } from '../i18n/locale'
import Pending from './Pending'
import WeChatReveal from './WeChatReveal'

export default function SiteFooter() {
  const c = useContent()
  const href = useHref()
  const { ui } = c

  return (
    <footer className="site-footer">
      <div className="shell site-footer-inner">
        <div>
          <p className="foot-title">{c.profile.wordmark}</p>
          <p className="foot-line">{c.profile.role}</p>
          <p className="foot-line foot-statement">{c.profile.statement}</p>
        </div>
        <div>
          <p className="foot-label">{ui.footContact}</p>
          <ul className="foot-list">
            <li>
              {c.profile.email ? (
                <>
                  {ui.emailPrefix}
                  <a className="email-strong" href={`mailto:${c.profile.email}`}>
                    {c.profile.email}
                  </a>
                </>
              ) : (
                <Pending>{ui.pendingEmail}</Pending>
              )}
            </li>
            <li>
              {c.profile.wechat ? (
                <WeChatReveal handle={c.profile.wechat} prefix={ui.wechatPrefix} />
              ) : (
                <Pending>{ui.pendingWechat}</Pending>
              )}
            </li>
            <li>
              <Link to={href('/about#resume')}>{ui.footResume}</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="foot-label">{ui.footProjects}</p>
          <ul className="foot-list">
            {c.ventures.map((v) => (
              <li key={v.slug}>
                <Link to={href(`/venture/${v.slug}`)}>{v.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="shell foot-bottom">
        <span>
          © {new Date().getFullYear()} {c.profile.wordmark}
        </span>
        <Link to={href('/about')}>{ui.footAbout}</Link>
      </div>
    </footer>
  )
}
