import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import './Footer.css'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <footer className="footer">
      <motion.div 
        className="container footer__inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className="footer__brand" variants={itemVariants}>
          <Link to="/" className="footer__logo-link">
            <img 
              src="/images/Sidhanthi_Guru_Logo__1_-removebg-preview.png" 
              alt="Sidhanthi Guru Logo" 
              className="footer__logo-image" 
            />
            <span className="footer__logo-text">Sidhanthi Guru Yoga</span>
          </Link>
          <p>Inspiring wellness since 2008. Join our<br/>community and discover your inner strength.</p>
          <div className="footer__location">
             <p>📍 9PM6+498 Chidambaram, Tamil Nadu</p>
          </div>
        </motion.div>

        <motion.div className="footer__links" variants={itemVariants}>
          <h4>Explore</h4>
          <ul className="footer__links-grid">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
            <li><Link to="/about#team">Our Team</Link></li>
            <li><Link to="/contact">FAQ</Link></li>
          </ul>
        </motion.div>

        <motion.div className="footer__contact" variants={itemVariants}>
          <h4>Get in Touch</h4>
          <ul>
            <li>
              <Link to="/contact" style={{ color: '#ffffff', fontWeight: '600' }}>Book a Class →</Link>
            </li>
            <li style={{ marginTop: '12px', marginBottom: '16px' }}>
              <a href="mailto:sidhanthiguru@gmail.com">sidhanthiguru@gmail.com</a>
            </li>
            <li className="footer__social">
              <motion.a href="#" aria-label="Facebook" whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <FaFacebookF />
              </motion.a>
              <motion.a href="#" aria-label="Instagram" whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <FaInstagram />
              </motion.a>
              <motion.a href="#" aria-label="LinkedIn" whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <FaLinkedinIn />
              </motion.a>
              <motion.a href="#" aria-label="YouTube" whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <FaYoutube />
              </motion.a>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div 
        className="footer__bottom container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>© 2025 Sidhanthi Guru Yoga Academy. Crafted with ❤️ for well-being.</p>
      </motion.div>
    </footer>
  )
}
