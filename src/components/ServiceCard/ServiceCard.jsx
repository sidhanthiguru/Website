import { Link } from 'react-router-dom'
import './ServiceCard.css'

export default function ServiceCard({ service, compact = true }) {
  return (
    <div className="card service-card">
      <div className="service-card__icon">{service.icon}</div>
      <div className="card-body">
        <h3>{service.title}</h3>
        <p className="service-card__level">{service.level}</p>
        <p>{compact ? service.shortDesc : service.fullDesc}</p>
        {!compact && service.benefits && (
          <ul className="service-card__benefits">
            {service.benefits.map((b, i) => (
              <li key={i}>✓ {b}</li>
            ))}
          </ul>
        )}
        {!compact && service.learn && service.learn.length > 0 && (
          <>
            <h4 className="service-card__subtitle">What You'll Learn</h4>
            <ul className="service-card__learn">
              {service.learn.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          </>
        )}
        {!compact && service.programOptions && (
          <div className="service-card__options">
            {service.programOptions.map((opt, i) => (
              <div key={i} className="service-card__option">
                <strong>{opt.name}</strong>
                <p>{opt.desc}</p>
              </div>
            ))}
          </div>
        )}
        <div className="service-card__footer">
          {compact ? (
            <Link to="/services" className="btn-link">
              Learn More →
            </Link>
          ) : (
            <Link to="/contact" className="btn btn-primary">
              Contact Us to Enroll
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
