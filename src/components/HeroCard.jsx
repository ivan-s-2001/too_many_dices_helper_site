import { Link } from 'react-router-dom'

export default function HeroCard({ character }) {
  const firstPageId = character.pages?.[0]?.id ?? 'overview'

  return (
    <Link className="surface-card hero-card" to={`/hero/${character.id}/${firstPageId}`}>
      <strong>{character.name}</strong>
      {character.summary ? <span>{character.summary}</span> : null}
    </Link>
  )
}
