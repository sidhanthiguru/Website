import React from 'react';
import './AboutSection.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

export default function AboutSection() {
  return (
    <section className="section about-location-section">
      <div className="container">
        <ScrollReveal>
          <div className="about-location__header">
            <h2>About us &amp; location</h2>
            <p>
              We're a Chidambaram-based Yoga academy dedicated to helping you find balance, strength, and inner peace. 
              Whether you're looking to relieve stress, improve flexibility, or deepen your spiritual practice, 
              our doors are open for you.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="about-location__content">
            <div className="about-location__pin">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="location-icon"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>9PM6+498 Chidambaram, Tamil Nadu</span>
            </div>
            
            <div className="about-location__map-container">
              <iframe
                src="https://maps.google.com/maps?q=9PM6%2B498%20Chidambaram,%20Tamil%20Nadu&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sidhanthi Guru Yoga Academy Location"
                className="location-map"
              ></iframe>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
