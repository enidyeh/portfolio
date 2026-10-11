import { Link } from 'react-router-dom'
import { useContent } from '../data/content'
import { useHref } from '../i18n/locale'
import Pending from './Pending'

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
          <p className="foot-line">{c.profile.statement}</p>
        </div>
        <div>
          <p className="foot-label">{ui.footContact}</p>
          <ul className="foot-list">
            <li>
              {c.profile.email ? (
                <a href={`mailto:${c.profile.email}`}>{c.profile.email}</a>
              ) : (
                <Pending>{ui.pendingEmail}</Pending>
              )}
            </li>
            <li>
              {c.profile.wechat ? (
                `${ui.wechatPrefix}${c.profile.wechat}`
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
          <p className="foot-label">{ui.footSocial}</p>
          <ul className="foot-list">
            {c.profile.social.length > 0 ? (
              c.profile.social.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noreferrer">
                    {s.label}
                    {s.handle ? ` · ${s.handle}` : ''}
                  </a>
                </li>
              ))
            ) : (
              <li>
                <Pending>{ui.pendingSocial}</Pending>
              </li>
            )}
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
