export default function StatGridBlock({ block }) {
  return (
    <dl className="block stat-grid">
      {block.items.map((item, index) => (
        <div key={`${item.label}-${index}`} className="stat-grid__item">
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}
