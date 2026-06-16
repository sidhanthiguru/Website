import Hero from '../components/Hero/Hero'
import ServiceCard from '../components/ServiceCard/ServiceCard'
import StatsRow from '../components/StatsRow/StatsRow'
import ScrollReveal from '../components/ScrollReveal/ScrollReveal'
import SectionDivider from '../components/SectionDivider/SectionDivider'
import FocusCards from '../components/FocusCards/FocusCards'
import StudioFeatures from '../components/StudioFeatures/StudioFeatures'
import InfinityMarquee from '../components/InfinityMarquee/InfinityMarquee'
import AboutSection from '../components/AboutSection/AboutSection'
import FAQSection from '../components/FAQSection/FAQSection'
import { services } from '../data/services'

const heroImages = [
  { src: '/images/yoga-hero-left.png', alt: 'Yoga practice in studio' },
  { src: '/images/yoga-hero-center.png', alt: 'Modern yoga studio interior' },
  { src: '/images/yoga-hero-right.png', alt: 'Yoga instructor guiding student' },
]

const focusCardsData = [
  {
    title: services[0].title,
    description: services[0].shortDesc,
    src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1840&auto=format&fit=crop',
  },
  {
    title: services[1].title,
    description: services[1].shortDesc,
    src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: services[2].title,
    description: services[2].shortDesc,
    src: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: services[3].title,
    description: services[3].shortDesc,
    src: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=2070&auto=format&fit=crop',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero
        rating={{ score: '4.9/5', label: 'with 300+ reviews' }}
        title="A Journey of Holistic Healing and Awareness"
        accentWords="Holistic Healing"
        subtitle="Unlock Your True Potential — 17 Years of Dedicated Yoga Excellence in Chidambaram"
        body="Welcome to Sidhanthi Guru Yoga Academy, where ancient yogic wisdom meets modern wellness practices. Since 2008, we have been guiding individuals toward holistic transformation through authentic yoga practice. Our mission is simple yet powerful: World Transformation through Self Transformation."
        primaryCta={{ label: 'Explore Our Programs', to: '/services' }}
        secondaryCta={{ label: 'View Products', to: '/services#products', className: 'btn-primary' }}
        images={heroImages}
      >
        <div className="hero__badge">
          <span>🎯 17+ Years</span>
          <span>🧘 1000+ Students</span>
          <span>📜 Reg. No. 1597</span>
        </div>
      </Hero>

      <SectionDivider />

      {/* Service Highlights */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2>Discover Our Transformative Yoga Programs</h2>
              <p>From general wellness to specialized therapy, prenatal care to structured courses — our programs are available <strong>Online &amp; Offline</strong> for every stage of your journey.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <FocusCards cards={focusCardsData} />
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* Studio Features */}
      <StudioFeatures />

      {/* Infinity Marquee */}
      <section style={{ paddingBottom: '4rem', overflow: 'hidden' }}>
        <ScrollReveal delay={200}>
          <InfinityMarquee />
        </ScrollReveal>
      </section>

      <SectionDivider />

      {/* About Us & Location */}
      <AboutSection />

      <SectionDivider />

      {/* FAQ Section */}
      <FAQSection />
    </>
  )
}
