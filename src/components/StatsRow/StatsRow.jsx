import ScrollReveal from '../ScrollReveal/ScrollReveal'
import './StatsRow.css'

const stats = [
  { icon: '🎯', value: '17+', label: 'Years of Excellence', detail: 'Established in 2008' },
  { icon: '📜', value: '1597', label: 'Government Registered', detail: 'Official credentials' },
  { icon: '👩‍⚕️', value: 'Dr. Uma', label: 'Experienced Leadership', detail: 'Founder & Visionary' },
  { icon: '🧘', value: '360°', label: 'Holistic Approach', detail: 'Complete wellness' },
]

export default function StatsRow() {
  return (
    <section className="section section-alt">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2>Why Choose Sidhanthi Guru Yoga Academy?</h2>
          </div>
        </ScrollReveal>
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="stat-card">
                <span className="stat-card__icon">{stat.icon}</span>
                <span className="stat-card__value">{stat.value}</span>
                <span className="stat-card__label">{stat.label}</span>
                <span className="stat-card__detail">{stat.detail}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
