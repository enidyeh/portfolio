import type { RichTextValue } from '../data/text'

/** 把文案里的 `**强调**` 渲染成 <strong>（本人提供的文案只用到这一种标记） */
function withBold(text: string) {
  return text
    .split(/(\*\*[^*]+\*\*)/g)
    .filter((part) => part !== '')
    .map((part, i) =>
      part.startsWith('**') && part.endsWith('**') ? (
        <strong key={i}>{part.slice(2, -2)}</strong>
      ) : (
        <span key={i}>{part}</span>
      ),
    )
}

/**
 * 正文渲染：传字符串就按一段文字，传 `{ body, items, foot }` 则是
 * 段落 → 列表 → 收尾段落。案例详情页与正在创造详情页共用。
 */
export default function RichText({ value }: { value: string | RichTextValue }) {
  const { body, items, foot } =
    typeof value === 'string' ? { body: [value], items: undefined, foot: undefined } : value

  const paragraphs = (list?: string[]) => (list ?? []).filter(Boolean)

  return (
    <>
      {paragraphs(body).map((text, i) => (
        <p key={`b${i}`}>{withBold(text)}</p>
      ))}
      {paragraphs(items).length ? (
        <ul className="doc-list">
          {paragraphs(items).map((text, i) => (
            // 包一层 <span>：.doc-list li 是 flex（前面挂「—」），不包的话
            // **加粗标签** 和后面的正文会变成两个 flex 项，标签会被挤成竖排。
            <li key={`i${i}`}>
              <span>{withBold(text)}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {paragraphs(foot).map((text, i) => (
        <p key={`f${i}`}>{withBold(text)}</p>
      ))}
    </>
  )
}
