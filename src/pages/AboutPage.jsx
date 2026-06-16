import { Link } from 'react-router-dom'
import Hero from '../components/Hero/Hero'
import ScrollReveal from '../components/ScrollReveal/ScrollReveal'
import SectionDivider from '../components/SectionDivider/SectionDivider'
import './AboutPage.css'

export default function AboutPage() {
  return (
    <div className="about-page">
      <Hero
        title="About Sidhanthi Guru"
        accentWords="Sidhanthi Guru"
        subtitle="A Legacy of Holistic Healing, Yoga Education & Natural Wellness Since 2008"
      />

      <SectionDivider />

      {/* ── Our Story — Trust History ──────────────────────────────── */}
      <section className="section overflow-hidden">
        <div className="container about-intro">
          <ScrollReveal>
            <div className="about-intro__text">
              <span className="section-subtitle">Our Story</span>
              <h2>A Journey of Holistic Healing and Awareness</h2>
              <p>
                Established in the year 2008, <strong>Sidhanthi Guru Health Trust</strong> has been a dedicated institution committed to promoting holistic health, wellness, and natural living. With a strong foundation rooted in the principles of naturopathy and yoga, the trust has consistently worked towards improving the physical, mental, and spiritual well-being of society.
              </p>
              <p>
                Over the years, the trust has actively organized and conducted numerous <strong>naturopathy and yoga awareness camps</strong> across various communities. These camps educate people about the importance of natural healing methods, preventive healthcare, and the benefits of adopting a balanced lifestyle — encouraging individuals to reconnect with nature and understand the body's innate ability to heal itself.
              </p>
              <p>
                Special emphasis is given to making yoga accessible to all age groups, including <strong>school children, women, and the elderly</strong>. The trust's yoga awareness programs focus on integrating traditional yogic practices — asanas, pranayama, meditation, and relaxation — into daily life.
              </p>
              <p>
                Sidhanthi Guru Health Trust stands as a beacon of service, compassion, and wellness. With a vision to create a healthier society, the trust remains committed to expanding its reach and inspiring more people to embrace the path of natural health and inner harmony.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="about-intro__visuals">
              <div className="about-intro__bg-blob"></div>
              <img src="/images/attachments/IMG_0035.JPG" alt="Yoga awareness camp session" className="about-intro__img-main" />
              <img src="/images/attachments/IMG_0059.JPG" alt="Naturopathy and meditation practice" className="about-intro__img-sub" />
            </div>
          </ScrollReveal>
        </div>
      </section>



      {/* ── Three Pillars ────────────────────────────────────────────── */}
      <section className="section bg-surface section-curved">
        <div className="container">
          <ScrollReveal>
            <div className="section-header text-center mx-auto">
              <span className="section-subtitle">Who We Are</span>
              <h2>Three Pillars of Holistic Wellness</h2>
              <p>Our organisation operates through three complementary institutions, each serving a distinct and vital role in promoting natural health and yogic wisdom.</p>
            </div>
          </ScrollReveal>

          <div className="pillars-grid">
            {[
              {
                icon: '🌱',
                title: 'Sidhanthi Guru Health Trust',
                sub: 'Est. 2008 · Reg. No. 1597',
                desc: 'The parent charitable trust — dedicated to spreading yoga and naturopathy awareness through community camps, free sessions, and educational programs for all age groups across Chidambaram and beyond.',
                cta: '/about',
              },
              {
                icon: '📚',
                title: 'Sidhanthi Guru Yoga Academy',
                sub: 'Online & Offline Programs',
                desc: 'The educational arm — offering general yoga sessions, yoga therapy, prenatal and postnatal care, and 11 structured courses from beginner to teacher training level, accessible to everyone.',
                cta: '/services',
              },
              {
                icon: '🏥',
                title: 'Naturopathy & Yoga Hospital',
                sub: 'Consultations by Appointment',
                desc: 'The clinical branch — providing drug-free, non-invasive naturopathy treatments (hydrotherapy, mud therapy, diet therapy, and more), personalized detox programs, and expert health consultations online and offline.',
                cta: '/services',
              },
            ].map((pillar, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="pillar-card">
                  <div className="pillar-card__icon">{pillar.icon}</div>
                  <h3>{pillar.title}</h3>
                  <span className="pillar-card__sub">{pillar.sub}</span>
                  <p>{pillar.desc}</p>
                  <Link to={pillar.cta} className="pillar-card__link">Learn More →</Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Vision & Mission ─────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2>Our Core Purpose</h2>
            </div>
          </ScrollReveal>
          <div className="grid-2 about-purpose">
            <ScrollReveal>
              <div className="glass-card purpose-card">
                <div className="purpose-card__icon">🔭</div>
                <h3>Vision</h3>
                <p>Yoga as a tool for personal transformation, helping individuals unlock their potential and live more fulfilling lives. A core vision is to promote holistic health — encompassing physical, mental, and emotional well-being — through the practice of yoga and natural living.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="glass-card purpose-card purpose-card--highlight">
                <div className="purpose-card__icon">🎯</div>
                <h3>Mission</h3>
                <p className="purpose-card__mission">"World Transformation through Self Transformation"</p>
                <p style={{ marginTop: '1rem', fontSize: '0.95rem', opacity: 0.9 }}>
                  Empowering individuals through authentic yogic practices, natural healing, and holistic education — to create a healthier, more harmonious society.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>


      <SectionDivider />

      {/* ── Founder ──────────────────────────────────────────────────── */}
      <section className="section overflow-hidden">
        <div className="container founder-editorial">
          <ScrollReveal>
            <div className="founder-editorial__image-wrapper">
              <div className="founder-editorial__decorative-element"></div>
              <div className="founder-editorial__image founder-editorial__image-blank"></div>
              <div className="founder-editorial__badge">
                <span className="badge-years">17+</span>
                <span className="badge-text">Years of<br />Experience</span>
              </div>
            </div>
          </ScrollReveal>

          <div className="founder-editorial__content">
            <ScrollReveal delay={150}>
              <span className="section-subtitle">Meet Our Founder</span>
              <h2>Dr. D. Uma Maheswari</h2>
              <div className="founder-editorial__divider"></div>
              <p className="founder-editorial__lead">
                A visionary leader dedicated to promoting yoga as a vehicle for personal and social transformation.
              </p>
              <p>
                Dr. D. Uma Maheswari is the visionary founder of Sidhanthi Guru Yoga Academy. With a deep commitment to promoting yoga as a vehicle for personal and social transformation, Dr. Uma Maheswari has dedicated 17 years to building an institution that combines ancient yogic wisdom with contemporary wellness practices.
              </p>
              <p>
                Her leadership has guided the Academy to become a trusted center for yoga education in Chidambaram, known for its authentic teachings, professional instruction, and student-centered approach. Her expertise and passion continue to inspire both students and teachers, fostering an environment where deep, lasting transformation is possible.
              </p>
              <p>
                Under her guidance, the trust has served <strong>school children, homemakers, working professionals, and senior citizens</strong> alike — making holistic wellness truly accessible to all.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>



      {/* ── Differentiators ──────────────────────────────────────────── */}
      <section className="section pb-large bg-surface section-curved section-curved--no-bottom">
        <div className="container">
          <ScrollReveal>
            <div className="section-header text-center mx-auto">
              <h2>Why Students &amp; Patients Choose Us</h2>
              <p>Experience the Sidhanthi Guru difference.</p>
            </div>
          </ScrollReveal>

          <div className="differentiators-modern">
            {[
              { title: 'Authentic Tradition', desc: 'We blend time-honored yogic wisdom with contemporary understanding of health and wellness — staying true to the roots while making learning accessible to all.' },
              { title: 'Expert Instructors', desc: 'Certified professionals bringing years of dedicated practice and teaching experience to every class, therapy session, and course.' },
              { title: 'Online & Offline Access', desc: 'All programs and consultations are available both online and in-person, ensuring every individual can access proper care and guidance regardless of location.' },
              { title: 'Holistic & Natural Approach', desc: 'From yoga therapy to naturopathy treatments, every program addresses root causes — not just symptoms — empowering lasting health naturally.' },
              { title: '17 Years of Success', desc: 'Our longevity, Govt. registration (Reg. No. 1597), and the thousands of lives transformed speak to our commitment and the real results our students experience.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="diff-card-modern">
                  <div className="diff-card-modern__number">0{i + 1}</div>
                  <div className="diff-card-modern__content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
