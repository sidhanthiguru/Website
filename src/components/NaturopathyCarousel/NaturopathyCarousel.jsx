import React from 'react'
import './NaturopathyCarousel.css'

/**
 * Reusable infinite-scrolling carousel row.
 *
 * @param {Object[]} items       – data array
 * @param {'left'|'right'} direction – scroll direction
 * @param {number} speed         – animation duration in seconds
 * @param {'card'|'pill'|'program'} variant – render style
 * @param {string} label         – optional row label
 * @param {string} labelIcon     – emoji for the label
 */
export default function NaturopathyCarousel({
  items,
  direction = 'left',
  speed = 35,
  variant = 'card',
  label,
  labelIcon,
}) {
  // Triple items for seamless loop
  const tripled = [...items, ...items, ...items]

  const renderItem = (item, index) => {
    switch (variant) {
      case 'pill':
        return (
          <span className="naturo-pill" key={index}>
            {item.label}
          </span>
        )
      case 'program':
        return (
          <div
            className={`naturo-program ${item.colorClass || 'naturo-program--white'}`}
            key={index}
          >
            <span className="naturo-program__icon">{item.icon}</span>
            <h3 className="naturo-program__title">{item.title}</h3>
            <p className="naturo-program__desc">{item.desc}</p>
          </div>
        )
      default: // 'card'
        return (
          <div className="naturo-card" key={index}>
            <div className="naturo-card__icon-wrap">{item.icon}</div>
            <h3 className="naturo-card__title">{item.title}</h3>
            <p className="naturo-card__desc">{item.desc}</p>
          </div>
        )
    }
  }

  return (
    <div className="naturo-row">
      {label && (
        <div className="naturo-row__label">
          {labelIcon && <span className="naturo-row__label-icon">{labelIcon}</span>}
          <span className="naturo-row__label-text">{label}</span>
        </div>
      )}
      <div className={`naturo-carousel naturo-carousel--${direction}`}>
        <div
          className="naturo-carousel__track"
          style={{ '--carousel-speed': `${speed}s` }}
        >
          {tripled.map((item, i) => renderItem(item, i))}
        </div>
      </div>
    </div>
  )
}
