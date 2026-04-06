import { useMemo, useState } from 'react'

function buildInitialState(fields) {
  return fields.reduce((acc, field) => {
    if (field.kind === 'counter') acc[field.key] = 0
    else if (field.kind === 'toggle') acc[field.key] = false
    else acc[field.key] = ''
    return acc
  }, {})
}

export default function TrackerBlock({ block }) {
  const initialState = useMemo(() => buildInitialState(block.fields), [block.fields])
  const [state, setState] = useState(initialState)

  function setValue(key, value) {
    setState((current) => ({ ...current, [key]: value }))
  }

  return (
    <div className="block interactive-block">
      <h3>{block.title}</h3>
      <div className="tracker-grid">
        {block.fields.map((field) => (
          <div key={field.key} className="tracker-field">
            <span className="tracker-field__label">{field.label}</span>

            {field.kind === 'counter' ? (
              <div className="counter-control">
                <button type="button" onClick={() => setValue(field.key, Math.max(0, state[field.key] - 1))}>−</button>
                <span>{state[field.key]}</span>
                <button type="button" onClick={() => setValue(field.key, state[field.key] + 1)}>+</button>
              </div>
            ) : null}

            {field.kind === 'toggle' ? (
              <button type="button" className={`toggle-control ${state[field.key] ? 'is-on' : ''}`} onClick={() => setValue(field.key, !state[field.key])}>
                {state[field.key] ? 'Да' : 'Нет'}
              </button>
            ) : null}

            {field.kind === 'text' ? (
              <input className="tracker-input" type="text" value={state[field.key]} onChange={(event) => setValue(field.key, event.target.value)} />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}
