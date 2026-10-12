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
            <li key={`i${i}`}>{withBold(text)}</li>
          ))}
        </ul>
      ) : null}
      {paragraphs(foot).map((text, i) => (
        <p key={`f${i}`}>{withBold(text)}</p>
      ))}
    </>
  )
}
