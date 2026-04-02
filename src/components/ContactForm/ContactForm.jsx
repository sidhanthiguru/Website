import { useState } from 'react'
import { db } from '../../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import './ContactForm.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const subjects = [
    'General Inquiry',
    'Class Schedule & Information',
    'Pricing & Enrollment',
    'Corporate Program Inquiry',
    'Special Events or Workshops',
    'Other',
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    try {
      await addDoc(collection(db, 'inquiries'), {
        ...formData,
        submittedAt: serverTimestamp()
      })
      
      setSubmitted(true)
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
      })
      
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      console.error('Error submitting form:', err)
      setError('Failed to send message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {submitted && (
        <div className="contact-form__success">
          ✓ Thank you! Your message has been sent. We'll get back to you within 24 hours.
        </div>
      )}

      {error && (
        <div className="contact-form__error" style={{ color: '#ef4444', marginBottom: '1rem', background: '#fee2e2', padding: '0.8rem', borderRadius: '4px' }}>
          ✕ {error}
        </div>
      )}

      <div className="contact-form__group">
        <label htmlFor="name">Full Name *</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>

      <div className="contact-form__group">
        <label htmlFor="email">Email Address *</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>

      <div className="contact-form__group">
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 XXXXX XXXXX"
          value={formData.phone}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>

      <div className="contact-form__group">
        <label htmlFor="subject">Subject *</label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          disabled={isSubmitting}
        >
          {subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="contact-form__group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your goals or questions..."
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>

      <button 
        type="submit" 
        className="btn btn-primary contact-form__submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
