import { useContent } from '../data/content'
import Pending from '../components/Pending'
import WeChatReveal from '../components/WeChatReveal'

export default function AboutPage() {
  const c = useContent()
  const { ui } = c
  /** 简历区块：2026-10-12 按本人要求只留《简历》《作品集》两份 */
  const resumes = c.downloads.filter((d) => d.group === '简历' || d.group === '作品集')

  return (
    <>
      <header className="page-head">
        <div className="shell">
          <h2 className="page-title">{c.aboutHead.title}</h2>
          <p className="page-lede">{c.aboutHead.lede}</p>
        </div>
      </header>

      <div className="doc">
        {/* 2026-10-12 按本人要求：去掉左侧「上海 / 定位 / 姓名」那一栏，所有内容左对齐 */}
        <div className="shell doc-grid doc-grid--single">
          <div className="doc-body">
            {/* 2026-10-12 按本人要求：关于我之后 → 左「简介」右「照片轮播占位」 */}
            <div className="about-pair">
              <div className="doc-block">
                <h2>{ui.blockIntro}</h2>
                {/* 定位这句话限宽成两行，不要让它被拉成一整行（见 .statement-block） */}
                <p className="statement-block">{c.profile.statement}</p>
                {c.profile.intro.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <div className="doc-block">
                {/* 2026-10-12 按本人要求：删掉「照片」这个大标题，只留占位块 */}
                {/* 照片轮播占位：本人给图后换成真实轮播 */}
                <div className="photo-ph">
                  <Pending>{ui.aboutPhotosPending}</Pending>
                  <span className="photo-ph-dots" aria-hidden="true">
                    <span className="photo-ph-dot is-on" />
                    <span className="photo-ph-dot" />
                    <span className="photo-ph-dot" />
                  </span>
                </div>
              </div>
            </div>

            {/* 下一行：左「联系方式」右「简历 / 作品集下载」——两个长形按钮 */}
            <div className="about-pair">
              <div className="doc-block" id="contact">
                <h2>{ui.blockContact}</h2>
                <div className="meta-list">
                  <div className="meta-row">
                    <span className="meta-key">{ui.metaEmail}</span>
                    <span className="meta-val">
                      {c.profile.email ? (
                        <a className="email-strong" href={`mailto:${c.profile.email}`}>
                          {c.profile.email}
                        </a>
                      ) : (
                        <Pending>{ui.pendingEmail}</Pending>
                      )}
                    </span>
                  </div>
                  <div className="meta-row">
                    <span className="meta-key">{ui.metaWechat}</span>
                    <span className="meta-val">
                      {c.profile.wechat ? (
                        <WeChatReveal handle={c.profile.wechat} />
                      ) : (
                        <Pending>{ui.pendingWechat}</Pending>
                      )}
                    </span>
                  </div>
                  {/* 电话：2026-10-12 按本人要求加进「联系」 */}
                  <div className="meta-row">
                    <span className="meta-key">{ui.metaPhone}</span>
                    <span className="meta-val">
                      <a className="email-strong" href={`tel:${c.profile.phone.replace(/[^+\d]/g, '')}`}>
                        {c.profile.phone}
                      </a>
                    </span>
                  </div>
                  {/* 社交：小红书已于 2026-10-11 按本人要求撤下；没有条目时整行不渲染 */}
                  {c.profile.social.length > 0 ? (
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
                  ) : null}
                </div>
              </div>

              <div className="doc-block" id="resume">
                <h2>{ui.blockResume}</h2>
                <div className="dl-buttons">
                  {resumes.map((r) => (
                    <a
                      className="btn btn--wide btn--soft"
                      href={r.url}
                      target="_blank"
                      rel="noreferrer"
                      key={r.label}
                    >
                      {ui.downloadPrefix}
                      {r.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* 2026-10-12 按本人要求：「能力」这一栏删掉，
                原来的能力标签改成挂到每条具体经历上（见 data/about.ts 的 tags） */}
            <div className="doc-block">
              <h2>{ui.blockExperience}</h2>
              <div className="timeline">
                {c.experience.map((item, i) => (
                  <div className="tl-item" key={i}>
                    <div className="tl-left">
                      {item.org ? <span className="tl-org">{item.org}</span> : null}
                      <span className="tl-role">{item.role}</span>
                      {item.when ? <span className="tl-when">{item.when}</span> : null}
                    </div>
                    <div className="tl-right">
                      {item.desc ? <p className="tl-desc">{item.desc}</p> : null}
                      {item.details?.length ? (
                        <ul className="tl-details">
                          {item.details.map((d) => (
                            <li key={d}>{d}</li>
                          ))}
                        </ul>
                      ) : null}
                      {item.tags?.length ? (
                        <ul className="tl-tags">
                          {item.tags.map((t) => (
                            <li className="tag" key={t}>
                              {t}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="doc-block">
              <h2>{ui.blockEducation}</h2>
              <div className="timeline">
                {c.education.map((item, i) => (
                  <div className="tl-item" key={i}>
                    <div className="tl-left">
                      {item.org ? <span className="tl-org">{item.org}</span> : null}
                      <span className="tl-role">{item.role}</span>
                      {item.when ? <span className="tl-when">{item.when}</span> : null}
                    </div>
                    <div className="tl-right">
                      {item.desc ? <p className="tl-desc">{item.desc}</p> : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 联系方式已上移到「关于我」下面一行（左联系方式 / 右下载），这里不再重复 */}
          </div>
        </div>
      </div>
    </>
  )
}
