import { Link } from 'react-router-dom'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import './Hero.css'

const StarIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

export default function Hero({
  title,
  accentWords,
  subtitle,
  primaryCta,
  secondaryCta,
  rating,
  images,
  children,
}) {
  const renderTitle = () => {
    if (!accentWords) return title
    const parts = title.split(accentWords)
    return (
      <>
        {parts[0]}<span className="accent-text">{accentWords}</span>{parts[1] || ''}
      </>
    )
  }

  return (
    <section className="hero">
      <div className="container hero__inner">
        {/* Star rating */}
        {rating && (
          <ScrollReveal>
            <div className="hero__rating">
              <div className="hero__stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="hero__rating-text">
                <strong>{rating.score}</strong> {rating.label}
              </p>
            </div>
          </ScrollReveal>
        )}

        {/* Title */}
        <ScrollReveal delay={100}>
          <h1 className="hero__title">{renderTitle()}</h1>
        </ScrollReveal>

        {/* Subtitle */}
        {subtitle && (
          <ScrollReveal delay={200}>
            <p className="hero__subtitle">{subtitle}</p>
          </ScrollReveal>
        )}

        {/* CTAs */}
        <ScrollReveal delay={300}>
          <div className="hero__ctas">
            {primaryCta && (
              <Link to={primaryCta.to} className="btn btn-primary">
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link 
                to={secondaryCta.to} 
                className={`btn ${secondaryCta.className || 'btn-secondary'}`}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </ScrollReveal>

        {/* 3 Image Grid */}
        {images && images.length === 3 && (
          <ScrollReveal delay={400}>
            <div className="hero__images">
              <div className="hero__img-wrap hero__img-wrap--side">
                <img src={images[0].src} alt={images[0].alt} />
              </div>
              <div className="hero__img-wrap hero__img-wrap--center">
                <img src={images[1].src} alt={images[1].alt} />
              </div>
              <div className="hero__img-wrap hero__img-wrap--side">
                <img src={images[2].src} alt={images[2].alt} />
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Extra children (e.g. badge) */}
        {children && (
          <ScrollReveal delay={500}>
            {children}
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
