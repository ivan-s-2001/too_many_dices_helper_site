import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import HeroPage from '../pages/HeroPage'
import ReferencePage from '../pages/ReferencePage'

export default function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hero/:characterId" element={<HeroPage />} />
        <Route path="/hero/:characterId/:pageId" element={<HeroPage />} />
        <Route path="/reference/:referenceId" element={<ReferencePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}
