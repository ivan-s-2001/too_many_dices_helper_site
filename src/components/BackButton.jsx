import { useNavigate } from 'react-router-dom'

export default function BackButton({ to, label = 'Назад' }) {
  const navigate = useNavigate()

  return (
    <button type="button" className="back-button" onClick={() => navigate(to || -1)}>
      ← {label}
    </button>
  )
}
