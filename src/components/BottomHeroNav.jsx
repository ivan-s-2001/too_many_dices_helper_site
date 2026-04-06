import { NavLink } from 'react-router-dom'

export default function BottomHeroNav({ characterId, pages }) {
  return (
    <nav className="bottom-hero-nav" aria-label="Нижняя навигация героя">
      {pages.map((page) => (
        <NavLink
          key={page.id}
          to={`/hero/${characterId}/${page.id}`}
          className={({ isActive }) => `bottom-hero-nav__link ${isActive ? 'is-active' : ''}`}
        >
          {page.label}
        </NavLink>
      ))}
    </nav>
  )
}
