export default function BulletListBlock({ block }) {
  return (
    <ul className="block block-list">
      {block.items.map((item, index) => (
        <li key={`${item}-${index}`}>{item}</li>
      ))}
    </ul>
  )
}
