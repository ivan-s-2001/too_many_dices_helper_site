import BlockRenderer from './BlockRenderer'

export default function SectionRenderer({ section }) {
  return (
    <section id={section.id} className="section-card surface-card">
      <header className="section-card__header">
        {section.label ? <p className="section-card__label">{section.label}</p> : null}
        <h2 className="section-card__title">{section.title}</h2>
      </header>

      <div className="section-card__blocks">
        {section.blocks.map((block, index) => (
          <BlockRenderer key={`${section.id}-${block.type}-${index}`} block={block} />
        ))}
      </div>
    </section>
  )
}
