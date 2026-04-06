import Hero from '../components/Hero/Hero'
import ContactForm from '../components/ContactForm/ContactForm'
import ScrollReveal from '../components/ScrollReveal/ScrollReveal'
import SectionDivider from '../components/SectionDivider/SectionDivider'
import './ContactPage.css'

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        accentWords="Contact Us"
        subtitle="We'd Love to Hear From You"
        body="Whether you have questions about our programs, want to learn more about our Academy, or simply wish to connect — please don't hesitate to reach out."
      />

      <SectionDivider />

      <section className="section">
        <div className="container contact-layout">
          {/* Form */}
          <ScrollReveal>
            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <ContactForm />
            </div>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal delay={200}>
            <div className="contact-info">
              <div className="contact-info__card">
                <h3>📧 Email</h3>
                <a href="mailto:sidhanthiguru@gmail.com">sidhanthiguru@gmail.com</a>
              </div>

              <div className="contact-info__card">
                <h3>📞 Phone</h3>
                <a href="tel:+919445184522">+91 9445184522</a>
              </div>

              <div className="contact-info__card">
                <h3>📍 Address</h3>
                <p>9PM6+498<br />CHIDAMBARAM<br />TAMIL NADU<br />INDIA</p>
              </div>

              <div className="contact-info__card">
                <h3>⏱ Response Time</h3>
                <p>We typically respond to all inquiries within 24 hours on business days. For urgent matters, please call us directly.</p>
              </div>

              <div className="contact-info__card">
                <h3>💡 Why Contact Us?</h3>
                <ul>
                  <li>Get detailed information about programs</li>
                  <li>Discuss your specific wellness goals</li>
                  <li>Find the right class for you</li>
                  <li>Learn about corporate programs</li>
                  <li>Ask about modifications for injuries</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* Map Placeholder */}
      <section className="section section-alt">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2>Find Us</h2>
              <p>Located in Chidambaram — easily accessible by public transport.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="contact-map-container">
              <iframe
                src="https://maps.google.com/maps?q=9PM6%2B498%20Chidambaram,%20Tamil%20Nadu&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sidhanthi Guru Yoga Academy Location"
                className="contact-map"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
