import { Navigate, useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import MobileAnchorMenu from '../components/MobileAnchorMenu'
import SectionRenderer from '../components/renderers/SectionRenderer'
import { getReference } from '../data/references'

export default function ReferencePage() {
  const { referenceId } = useParams()
  const reference = getReference(referenceId)

  if (!reference) return <Navigate to="/" replace />

  return (
    <div className="page-shell reference-page">
      <header className="surface-card hero-page__header">
        <div className="hero-page__header-top">
          <BackButton to="/" label="На главную" />
          <MobileAnchorMenu sections={reference.sections} />
        </div>

        <p className="eyebrow">Справочник</p>
        <h1 className="page-title">{reference.title}</h1>
      </header>

      <main className="hero-page__content">
        {reference.sections.map((section) => (
          <SectionRenderer key={section.id} section={section} />
        ))}
      </main>
    </div>
  )
}
