export default function CardsBlock({ block }) {
  return (
    <div className="block cards-grid">
      {block.items.map((item, index) => (
        <article key={`${item.title}-${index}`} className="mini-card">
          <h3 className="mini-card__title">{item.title}</h3>
          {item.text ? <p className="mini-card__text">{item.text}</p> : null}
          {item.items?.length ? (
            <ul className="mini-card__list">
              {item.items.map((listItem, listIndex) => (
                <li key={`${listItem}-${listIndex}`}>{listItem}</li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  )
}
