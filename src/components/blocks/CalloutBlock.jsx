const variantLabels = {
  tip: 'Совет',
  attention: 'Внимание',
  warning: 'Риск',
  mistake: 'Ошибка',
  remember: 'Запомнить',
}

export default function CalloutBlock({ block }) {
  const label = variantLabels[block.variant] ?? 'Заметка'

  return (
    <div className={`block block-callout block-callout--${block.variant}`}>
      <div className="block-callout__meta">{label}</div>
      {block.title ? <h3 className="block-callout__title">{block.title}</h3> : null}
      {block.text ? <p className="block-callout__text">{block.text}</p> : null}
      {block.items?.length ? (
        <ul className="block-callout__list">
          {block.items.map((item, index) => (
            <li key={`${item}-${index}`}>{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
