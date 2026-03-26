import { Link } from 'react-router-dom'
import Hero from '../components/Hero/Hero'
import FaqAccordion from '../components/FaqAccordion/FaqAccordion'
import ScrollReveal from '../components/ScrollReveal/ScrollReveal'
import SectionDivider from '../components/SectionDivider/SectionDivider'
import NaturopathyCarousel from '../components/NaturopathyCarousel/NaturopathyCarousel'
import { services, courses, naturopathyModalities } from '../data/services'
import { faqItems } from '../data/faq'
import './ServicesPage.css'

/* ── Data for carousel rows ─────────────────────────── */
const conditionPills = [
  'Diabetes', 'Hypertension', 'Obesity',
  'Back Pain', 'Arthritis', 'Joint Stiffness',
  'Asthma', 'Allergies', 'Thyroid Disorders',
  'PCOS', 'Stress & Anxiety', 'Sleep Disorders',
  'Digestive Problems', 'Metabolic Disorders',
].map(c => ({ label: c }))

const programCards = [
  {
    icon: '⚡',
    title: 'Short-Term Programs',
    desc: 'Ideal for quick rejuvenation, stress relief, and detoxification over a few days to a couple of weeks. Perfect for those looking to reset and restore balance rapidly.',
    colorClass: 'naturo-program--white',
  },
  {
    icon: '🌱',
    title: 'Long-Term Programs',
    desc: 'Designed for chronic conditions and deeper healing. Focuses on sustained lifestyle changes, comprehensive naturopathy treatments, and long-lasting holistic results.',
    colorClass: 'naturo-program--green',
  },
]

const serviceImages = {
  general:  '/images/attachments/IMG_0100.JPG',
  therapy:  '/images/attachments/IMG_0105.JPG',
  prenatal: '/images/attachments (1)/IMG_0388.JPG',
  postnatal:'/images/attachments (1)/IMG_0391.JPG',
}

/* ── Data for Consultation carousel ─────────────────── */
const consultationModalities = [
  { icon: '🌿', title: 'Naturopathy', desc: 'Expert natural therapy guidance.' },
  { icon: '🧘', title: 'Yoga Therapy', desc: 'Tailored yoga for health conditions.' },
  { icon: '🍽️', title: 'Diet & Nutrition', desc: 'Customized food plans for healing.' },
  { icon: '💤', title: 'Sleep Hygiene', desc: 'Strategies for better rest and recovery.' },
  { icon: '🌸', title: 'Stress Management', desc: 'Techniques for mental well-being.' },
  { icon: '🩸', title: 'Detox Planning', desc: 'Safe methods for body purification.' },
]

const consultationPills = [
  'Initial Assessment', 'Health Goal Setting', 'Vital Signs Check',
  'Pulse Diagnosis', 'Tongue Diagnosis', 'Systemic Review',
  'Follow-up Session', 'Progress Tracking', 'Family Counseling',
  'Mindfulness Training', 'Breathwork Coaching', 'Herbal Advice',
].map(c => ({ label: c }))

const consultationModes = [
  {
    icon: '💻',
    title: 'Online Consultation',
    desc: 'Expert guidance delivered via virtual platforms, allowing you to access holistic care from any location worldwide.',
    colorClass: 'naturo-program--white',
  },
  {
    icon: '🏥',
    title: 'Offline Consultation',
    desc: 'In-person evaluation at our center, providing a hands-on assessment and direct interaction with experts.',
    colorClass: 'naturo-program--green',
  },
]

export default function ServicesPage() {
  return (
    <div className="services-page">
      <Hero
        title="Our Yoga Programs & Services"
        accentWords="Programs & Services"
        subtitle="Discover Your Path to Transformation"
        body="At Sidhanthi Guru Yoga Academy, we offer authentic yoga programs, structured courses, and holistic naturopathy care — available Online and Offline — tailored to every individual's health and wellness goals."
        primaryCta={{ label: 'Contact Us', to: '/contact' }}
      />

      <SectionDivider />

      {/* ── SECTION A: Academy Programs ─────────────────────────────── */}
      <section className="section overflow-hidden">
        <div className="container">
          <ScrollReveal>
            <div className="section-header text-center mx-auto">
              <span className="section-subtitle">Sidhanthi Guru Yoga Academy</span>
              <h2>Yoga Programs for Every Journey</h2>
              <p>Our programs are available <strong>Online &amp; Offline</strong>, welcoming students of all ages and fitness levels across every stage of life.</p>
            </div>
          </ScrollReveal>

          <div className="services-alternating">
            {services.map((service, i) => {
              const reverse = i % 2 !== 0
              return (
                <div key={service.id} className={`service-row ${reverse ? 'service-row--reverse' : ''}`}>
                  <ScrollReveal delay={100} className="service-row__image-col">
                    <img
                      src={serviceImages[service.id]}
                      alt={service.title}
                      className="service-row__image"
                    />
                    <div className="service-row__badge">{service.icon}</div>
                  </ScrollReveal>

                  <ScrollReveal delay={200} className="service-row__content-col">
                    <div className="service-row__content">
                      <div className="service-row__tags">
                        <span className="service-row__level">{service.level}</span>
                        <span className="service-row__mode">🌐 {service.mode}</span>
                      </div>
                      <h3>{service.title}</h3>
                      <p className="service-row__desc">{service.fullDesc}</p>

                      <div className="service-row__details grid-2">
                        {service.benefits && (
                          <div className="service-list">
                            <h4>Key Benefits</h4>
                            <ul>
                              {service.benefits.slice(0, 4).map((b, idx) => (
                                <li key={idx}>✓ {b}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {service.learn && service.learn.length > 0 && (
                          <div className="service-list">
                            <h4>What You'll Learn</h4>
                            <ul>
                              {service.learn.slice(0, 4).map((l, idx) => (
                                <li key={idx}>✓ {l}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      <Link to="/contact" className="btn btn-primary mt-4">
                        Enquire Now
                      </Link>
                    </div>
                  </ScrollReveal>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── SECTION B: Structured Courses ───────────────────────────── */}
      <section className="section bg-surface section-curved">
        <div className="container">
          <ScrollReveal>
            <div className="section-header text-center mx-auto">
              <span className="section-subtitle">Enrich Your Practice</span>
              <h2>Structured Courses Offered</h2>
              <p>
                Sidhanthi Guru Yoga Academy provides a wide range of structured courses to deepen knowledge, build professional skills, and expand your practice.
              </p>
            </div>
          </ScrollReveal>

          <div className="courses-grid">
            {courses.map((course, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="course-tile">
                  <div className="course-tile__icon">{course.icon}</div>
                  <h3 className="course-tile__title">{course.title}</h3>
                  <div className="course-tile__overlay">
                    <p className="course-tile__desc">{course.desc}</p>
                    <Link to="/contact" className="course-tile__cta">Enquire →</Link>
                  </div>
                  <span className="course-tile__arrow" aria-hidden="true">→</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── SECTION C: Naturopathy Hospital ─────────────────────────── */}
      <section className="section section-curved">
        <div className="container">
          <ScrollReveal>
            <div className="section-header text-center mx-auto">
              <span className="section-subtitle">Sidhanthi Guru Naturopathy &amp; Yoga Hospital</span>
              <h2>Holistic Healing Through Nature</h2>
              <p>
                A dedicated center for natural healing — treating the root cause of diseases through safe, non-invasive, and drug-free therapies designed to support the body's own healing power.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Row 1: Modality cards — scrolls left */}
        <NaturopathyCarousel
          items={naturopathyModalities}
          direction="left"
          speed={38}
          variant="card"
          label="Our Therapies"
          labelIcon="🌿"
        />

        {/* Row 2a: Condition pills — scrolls left */}
        <NaturopathyCarousel
          items={conditionPills.slice(0, 7)}
          direction="left"
          speed={28}
          variant="pill"
          label="Conditions We Treat"
          labelIcon="🧘"
        />

        {/* Row 2b: Condition pills — scrolls right */}
        <NaturopathyCarousel
          items={conditionPills.slice(7)}
          direction="right"
          speed={28}
          variant="pill"
        />

        {/* Row 3: Program cards — static (still) grid */}
        <div className="naturo-row">
          <div className="naturo-row__label">
            <span className="naturo-row__label-icon">✨</span>
            <span className="naturo-row__label-text">Treatment Programs</span>
          </div>
          <div className="naturo-static-grid">
            {programCards.map((item, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className={`naturo-program ${item.colorClass}`}>
                  <span className="naturo-program__icon">{item.icon}</span>
                  <h3 className="naturo-program__title">{item.title}</h3>
                  <p className="naturo-program__desc">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── SECTION D: Consultation Services ────────────────────────── */}
      <section className="section bg-surface section-curved">
        <div className="container">
          <ScrollReveal>
            <div className="section-header text-center mx-auto">
              <span className="section-subtitle">By Prior Appointment</span>
              <h2>Consultation Services</h2>
              <p>
                Personalized consultations — both <strong>Online and Offline</strong> — to guide your health journey with expert attention and a customized natural treatment plan.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Row 1: Consultation Modalities */}
        <NaturopathyCarousel
          items={consultationModalities}
          direction="left"
          speed={35}
          variant="card"
          label="Our Expertise"
          labelIcon="🌿"
        />

        {/* Row 2: Consultation Process Pills */}
        <NaturopathyCarousel
          items={consultationPills}
          direction="right"
          speed={30}
          variant="pill"
          label="Consultation Process"
          labelIcon="📝"
        />

        {/* Row 3: Consultation Modes Still Grid */}
        <div className="naturo-row">
          <div className="naturo-row__label">
            <span className="naturo-row__label-icon">🏥</span>
            <span className="naturo-row__label-text">Appointment Modes</span>
          </div>
          <div className="naturo-static-grid">
            {consultationModes.map((item, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className={`naturo-program ${item.colorClass}`}>
                  <span className="naturo-program__icon">{item.icon}</span>
                  <h3 className="naturo-program__title">{item.title}</h3>
                  <p className="naturo-program__desc">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="container">
          <ScrollReveal delay={300}>
            <div className="text-center" style={{ marginTop: '4rem' }}>
              <Link to="/contact" className="btn btn-primary">Book an Appointment</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>




      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="section section-alt overflow-hidden">
        <div className="container">
          <ScrollReveal>
            <div className="section-header text-center mx-auto">
              <h2>Frequently Asked Questions</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="max-w-800 mx-auto">
              <FaqAccordion items={faqItems} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
