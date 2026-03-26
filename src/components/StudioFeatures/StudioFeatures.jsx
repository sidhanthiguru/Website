import React from 'react';
import './StudioFeatures.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const features = [
  {
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="studio-feature__icon">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
        <path d="M2 14l1.48-1.48C3.9 12.05 4 11 4 10a8 8 0 0 1 8-8v0a8 8 0 0 1 8 8 8 8 0 0 1-8 8H2"/>
      </svg>
    ),
    title: 'Holistic Natural Healing',
    description: 'We combine the science of naturopathy with yogic wisdom — using drug-free, non-invasive therapies like hydrotherapy, mud therapy, and diet therapy to treat root causes, not just symptoms.',
  },
  {
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="studio-feature__icon">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.9 4.9 1.4 1.4" />
        <path d="m17.7 17.7 1.4 1.4" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.3 17.7-1.4 1.4" />
        <path d="m19.1 4.9-1.4 1.4" />
      </svg>
    ),
    title: 'Online & Offline Access',
    description: 'All yoga programs, therapy sessions, prenatal and postnatal care, and hospital consultations are available both in-person at our Chennai centre and online — making holistic wellness accessible to everyone.',
  },
  {
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="studio-feature__icon">
        <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z" />
      </svg>
    ),
    title: 'Expert-Led Yoga Therapy',
    description: 'Our certified instructors guide personalized yoga therapy programs for conditions like diabetes, PCOS, back pain, anxiety, and more — addressing each individual\'s unique health condition with care and expertise.',
  },
];

export default function StudioFeatures() {
  return (
    <section className="section studio-features">
      <div className="container">
        <ScrollReveal>
          <div className="studio-features__header">
            <h2>Why We Are Different</h2>
            <p>
              Sidhanthi Guru is more than a yoga academy — it's a complete ecosystem of holistic health, education, and natural healing. Here's what sets us apart:
            </p>
          </div>
        </ScrollReveal>
        <div className="studio-features__grid">
          {features.map((feature, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="gradient-border-card">
                {feature.icon}
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
