import blockRegistry from './blockRegistry'

export default function BlockRenderer({ block }) {
  const Component = blockRegistry[block.type]

  if (!Component) {
    return <div className="surface-card">Неизвестный блок: {block.type}</div>
  }

  return <Component block={block} />
}
