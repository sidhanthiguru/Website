import { useState, memo } from "react";
import "./FocusCards.css";

const Card = memo(
  ({ card, index, hovered, setHovered }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={`focus-card ${
        hovered !== null && hovered !== index ? "focus-card--blurred" : ""
      }`}
    >
      <img
        src={card.src}
        alt={card.title}
        loading="lazy"
        className="focus-card__image"
      />
      <div
        className={`focus-card__overlay ${
          hovered === index ? "focus-card__overlay--visible" : ""
        }`}
      >
        <div className="focus-card__content">
          <h3 className="focus-card__title">{card.title}</h3>
          {card.description && (
            <p className="focus-card__description">{card.description}</p>
          )}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

export default function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="focus-cards-grid">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
