import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import HeroPage from '../pages/HeroPage'
import ReferencePage from '../pages/ReferencePage'
import AppErrorBoundary from '../components/AppErrorBoundary'

export default function App() {
  return (
    <div
      className="app-shell"
      style={{
        minHeight: '100vh',
        background: '#101317',
        color: '#f3f5f7',
      }}
    >
      <div
        style={{
          padding: '12px 16px',
          borderBottom: '1px solid #2a3440',
          fontSize: 14,
        }}
      >
        APP MOUNTED
      </div>

      <AppErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hero/:characterId" element={<HeroPage />} />
          <Route path="/hero/:characterId/:pageId" element={<HeroPage />} />
          <Route path="/reference/:referenceId" element={<ReferencePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppErrorBoundary>
    </div>
  )
}
