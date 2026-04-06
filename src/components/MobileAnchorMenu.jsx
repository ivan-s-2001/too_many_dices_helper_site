import { useState } from 'react'

export default function MobileAnchorMenu({ sections = [] }) {
  const [open, setOpen] = useState(false)

  if (!sections.length) return null

  return (
    <div className="mobile-anchor-menu">
      <button type="button" className="anchor-menu-button" onClick={() => setOpen((value) => !value)}>
        ☰
      </button>

      {open ? (
        <div className="anchor-menu-panel surface-card">
          <div className="anchor-menu-panel__header">
            <strong>Разделы</strong>
            <button type="button" onClick={() => setOpen(false)}>✕</button>
          </div>

          <nav className="anchor-menu-links">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="anchor-menu-link" onClick={() => setOpen(false)}>
                {section.label || section.title}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  )
}
