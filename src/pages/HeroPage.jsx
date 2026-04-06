import { Navigate, useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import BottomHeroNav from '../components/BottomHeroNav'
import HeroTabs from '../components/HeroTabs'
import MobileAnchorMenu from '../components/MobileAnchorMenu'
import SectionRenderer from '../components/renderers/SectionRenderer'
import { getCharacter, getCharacterFirstPageId, getCharacterPage } from '../data/characters'

export default function HeroPage() {
  const { characterId, pageId } = useParams()
  const character = getCharacter(characterId)

  if (!character) return <Navigate to="/" replace />

  const firstPageId = getCharacterFirstPageId(character)
  const activePageId = pageId || firstPageId
  const activePage = getCharacterPage(character, activePageId)

  if (!activePage) return <Navigate to={`/hero/${character.id}/${firstPageId}`} replace />

  return (
    <>
      <div className="page-shell hero-page">
        <header className="surface-card hero-page__header">
          <div className="hero-page__header-top">
            <BackButton to="/" label="К героям" />
            <MobileAnchorMenu sections={activePage.sections} />
          </div>

          <p className="eyebrow">{character.name}</p>
          <h1 className="page-title">{activePage.title}</h1>
          <p className="page-description">{character.summary}</p>

          <HeroTabs characterId={character.id} pages={character.pages} />
        </header>

        <main className="hero-page__content">
          {activePage.sections.map((section) => (
            <SectionRenderer key={section.id} section={section} />
          ))}
        </main>
      </div>

      <BottomHeroNav characterId={character.id} pages={character.pages} />
    </>
  )
}
