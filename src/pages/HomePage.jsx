import { Link } from 'react-router-dom'
import { characterList } from '../data/characters'
import { referenceList } from '../data/references'

export default function HomePage() {
  return (
    <div className="page-shell home-page">
      <header className="surface-card">
        <p className="eyebrow">Too Many Bones</p>
        <h1 className="page-title">Боевой помощник</h1>
        <p className="page-description">Контент редактируется через файлы проекта.</p>
      </header>

      <section>
        <h2>Герои</h2>
        <div className="hero-grid">
          {characterList.map((character) => {
            const firstPageId = character.pages?.[0]?.id ?? 'overview'

            return (
              <Link key={character.id} className="surface-card hero-card" to={`/hero/${character.id}/${firstPageId}`}>
                <strong>{character.name}</strong>
                <span>{character.summary}</span>
              </Link>
            )
          })}
        </div>
      </section>

      <section>
        <h2>Справочники</h2>
        <div className="hero-grid">
          {referenceList.map((reference) => (
            <Link key={reference.id} className="surface-card hero-card" to={`/reference/${reference.id}`}>
              <strong>{reference.title}</strong>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
