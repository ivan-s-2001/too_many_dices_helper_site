import { NavLink } from 'react-router-dom'

export default function HeroTabs({ characterId, pages }) {
  return (
    <nav className="hero-tabs" aria-label="Страницы героя">
      {pages.map((page) => (
        <NavLink
          key={page.id}
          to={`/hero/${characterId}/${page.id}`}
          className={({ isActive }) => `hero-tabs__link ${isActive ? 'is-active' : ''}`}
        >
          {page.label}
        </NavLink>
      ))}
    </nav>
  )
}
