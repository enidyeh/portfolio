/** 未提供内容时的统一占位样式，避免出现空白或编造内容。 */
export default function Pending({ children }: { children: string }) {
  return (
    <span className="pending" title="待补充">
      {children}
    </span>
  )
}
