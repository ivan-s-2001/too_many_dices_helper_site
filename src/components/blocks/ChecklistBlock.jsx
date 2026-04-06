import { useState } from 'react'

export default function ChecklistBlock({ block }) {
  const [checked, setChecked] = useState(block.items.map(() => false))

  function toggleItem(index) {
    setChecked((current) => current.map((value, itemIndex) => (itemIndex === index ? !value : value)))
  }

  return (
    <div className="block interactive-block">
      <h3>{block.title}</h3>
      <div className="checklist">
        {block.items.map((item, index) => (
          <label key={`${item}-${index}`} className="checklist__item">
            <input type="checkbox" checked={checked[index]} onChange={() => toggleItem(index)} />
            <span>{item}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
