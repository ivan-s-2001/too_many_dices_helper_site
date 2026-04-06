export default function RouteStepsBlock({ block }) {
  return (
    <div className="block interactive-block">
      {block.title ? <h3>{block.title}</h3> : null}
      <ol className="route-steps">
        {block.steps.map((step, index) => (
          <li key={`${step}-${index}`} className="route-steps__item">
            <span className="route-steps__index">{index + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
