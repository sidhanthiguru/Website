import { useState } from 'react'
import './FaqAccordion.css'

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div key={i} className={`faq-item${openIndex === i ? ' faq-item--open' : ''}`}>
          <button className="faq-item__question" onClick={() => toggle(i)}>
            <span>{item.question}</span>
            <span className="faq-item__icon">{openIndex === i ? '−' : '+'}</span>
          </button>
          <div className="faq-item__answer">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
